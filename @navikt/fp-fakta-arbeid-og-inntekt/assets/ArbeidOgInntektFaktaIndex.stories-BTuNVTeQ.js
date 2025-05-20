var dk=Object.defineProperty;var uk=(e,t,r)=>t in e?dk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var J=(e,t,r)=>uk(e,typeof t!="symbol"?t+"":t,r);import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{r as f,R as b,b as lu}from"./index-C4XKfyRp.js";import{v as gk}from"./v4-CtRu48qb.js";import{e as mk}from"./entry-preview-C8kcAOAR.js";import"./entry-preview-docs-BX9G6PXb.js";import{d as Ie}from"./dayjs.min-DkLNzaWO.js";import{h as Ia,r as du}from"./index-PUjTtqh4.js";import{g as kk}from"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BPWFChCh.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./index-CXQShRbs.js";import"./index-DTjSd7F1.js";const{addons:fk}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:vk}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:to}=__STORYBOOK_MODULE_GLOBAL__;var ck=Object.defineProperty,Ek=(e,t)=>{for(var r in t)ck(e,r,{get:t[r],enumerable:!0})},pk="storybook/actions",yk=`${pk}/action-event`,bk={depth:10,clearOnStoryChange:!0,limit:50},uu=(e,t)=>{let r=Object.getPrototypeOf(e);return!r||t(r)?r:uu(r,t)},Ak=e=>!!(typeof e=="object"&&e&&uu(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),hk=e=>{if(Ak(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let r=Object.getOwnPropertyDescriptor(t,"view"),n=r==null?void 0:r.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...r,value:Object.create(n.constructor.prototype)}),t}return e},Tk=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?gk():Date.now().toString(36)+Math.random().toString(36).substring(2);function ur(e,t={}){let r={...bk,...t},n=function(...a){var g,k;if(t.implicit){let m=(g="__STORYBOOK_PREVIEW__"in to?to.__STORYBOOK_PREVIEW__:void 0)==null?void 0:g.storyRenders.find(y=>y.phase==="playing"||y.phase==="rendering");if(m){let y=!((k=globalThis==null?void 0:globalThis.FEATURES)!=null&&k.disallowImplicitActionsInRenderV8),c=new vk({phase:m.phase,name:e,deprecated:y});if(y)console.warn(c);else throw c}}let s=fk.getChannel(),i=Tk(),o=5,l=a.map(hk),u=a.length>1?l:l[0],d={id:i,count:0,data:{name:e,args:u},options:{...r,maxDepth:o+(r.depth||3),allowFunction:r.allowFunction||!1}};s.emit(yk,d)};return n.isAction=!0,n.implicit=t.implicit,n}const{definePreview:KS}=__STORYBOOK_MODULE_PREVIEW_API__,{global:ms}=__STORYBOOK_MODULE_GLOBAL__;var Rk={};Ek(Rk,{argsEnhancers:()=>_k,loaders:()=>Ok});var gu=(e,t)=>typeof t[e]>"u"&&!(e in t),Nk=e=>{let{initialArgs:t,argTypes:r,id:n,parameters:{actions:a}}=e;if(!a||a.disable||!a.argTypesRegex||!r)return{};let s=new RegExp(a.argTypesRegex);return Object.entries(r).filter(([i])=>!!s.test(i)).reduce((i,[o,l])=>(gu(o,t)&&(i[o]=ur(o,{implicit:!0,id:n})),i),{})},Ik=e=>{let{initialArgs:t,argTypes:r,parameters:{actions:n}}=e;return n!=null&&n.disable||!r?{}:Object.entries(r).filter(([a,s])=>!!s.action).reduce((a,[s,i])=>(gu(s,t)&&(a[s]=ur(typeof i.action=="string"?i.action:s)),a),{})},_k=[Ik,Nk],ao=!1,Sk=e=>{let{parameters:{actions:t}}=e;if(!(t!=null&&t.disable)&&!ao&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in ms&&typeof ms.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=ms.__STORYBOOK_TEST_ON_MOCK_CALL__;r((n,a)=>{let s=n.getMockName();s!=="spy"&&(!/^next\/.*::/.test(s)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(i=>s.startsWith(i)))&&ur(s)(a)}),ao=!0}},Ok=[Sk],gn=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(gn||{}),We=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(We||{}),Ba=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Ba||{});Ba.BRUKERS_ANDEL;Ba.FRILANS;Ba.EGEN_NÆRING;var pe=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(pe||{}),mu=(e=>(e.OPPRETTET="OPPRE",e.BEHANDLING_UTREDES="UTRED",e.AVSLUTTET="AVSLU",e.IVERKSETTER_VEDTAK="IVED",e.FATTER_VEDTAK="FVED",e))(mu||{}),ku=(e=>(e.FORSTEGANGSSOKNAD="BT-002",e.KLAGE="BT-003",e.REVURDERING="BT-004",e.DOKUMENTINNSYN="BT-006",e.TILBAKEKREVING="BT-007",e.ANKE="BT-008",e.TILBAKEKREVING_REVURDERING="BT-009",e))(ku||{}),fu=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(fu||{}),At=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e.FAGSAK_MARKERING="FagsakMarkering",e.ADRESSE_TYPE="AdresseType",e.NATURAL_YTELSE_TYPE="NaturalYtelseType",e.OPPGAVE_TYPE="OppgaveType",e.AKTIVITETSKRAV_PERMISJON_TYPE="AktivitetskravPermisjonType",e))(At||{}),Ks=(e=>(e.MOR="MORA",e.FAR="FARA",e.MEDMOR="MMOR",e))(Ks||{}),nn=(e=>(e.AVV_DOK="AVV_DOK",e.AVV_FODSEL="AVV_FODSEL",e.UTV_FRIST="UTV_FRIST",e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG="VENT_PÅ_TILBAKEKREVINGSGRUNNLAG",e.VENT_PÅ_BRUKERTILBAKEMELDING="VENT_PÅ_BRUKERTILBAKEMELDING",e.VENT_UTLAND_TRYGD="VENT_UTLAND_TRYGD",e.UTVIDET_TILSVAR_FRIST="UTV_TIL_FRIST",e.ENDRE_TILKJENT_YTELSE="ENDRE_TILKJENT_YTELSE",e.VENT_PÅ_MULIG_MOTREGNING="VENT_PÅ_MULIG_MOTREGNING",e.AVV_RESPONS_REVURDERING="AVV_RESPONS_REVURDERING",e.FOR_TIDLIG_SOKNAD="FOR_TIDLIG_SOKNAD",e.VENT_PÅ_SISTE_AAP_ELLER_DP_MELDEKORT="VENT_PÅ_SISTE_AAP_MELDEKORT",e.ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER="ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",e.ANKE_OVERSENDT_TIL_TRYGDERETTEN="ANKE_OVERSENDT_TIL_TRYGDERETTEN",e.VENT_PÅ_KORRIGERT_BESTEBEREGNING="VENT_PÅ_KORRIGERT_BESTEBEREGNING",e.VENT_OPDT_INNTEKTSMELDING="VENT_OPDT_INNTEKTSMELDING",e.VENT_OPPTJENING_OPPLYSNINGER="VENT_OPPTJENING_OPPLYSNINGER",e.VENT_INNTEKT_RAPPORTERINGSFRIST="VENT_INNTEKT_RAPPORTERINGSFRIST",e.VENT_MANGLENDE_SYKEMELDING="VENT_MANGLENDE_SYKEMELDING",e.VENT_SØKNAD_SENDT_INFORMASJONSBREV="VENT_SØKNAD_SENDT_INFORMASJONSBREV",e.VENT_ÅPEN_BEHANDLING="VENT_ÅPEN_BEHANDLING",e.VENT_KABAL="VENT_KABAL",e))(nn||{});const{global:Dk}=__STORYBOOK_MODULE_GLOBAL__,{setDefaultProjectAnnotations:FS,setProjectAnnotations:VS,composeStory:qS,composeStories:xS}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:so}=Dk;so&&(so.STORYBOOK_ENV="react");({...mk});var nd;typeof module<"u"&&((nd=module==null?void 0:module.hot)==null||nd.decline());var Fs=function(e,t){return Fs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},Fs(e,t)};function Dn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Fs(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var Q=function(){return Q=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},Q.apply(this,arguments)};function Wr(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function Fn(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,s;n<a;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))}function Mn(e,t){var r=t&&t.cache?t.cache:Fk,n=t&&t.serializer?t.serializer:Mk,a=t&&t.strategy?t.strategy:wk;return a(e,{cache:r,serializer:n})}function Pk(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Lk(e,t,r,n){var a=Pk(n)?n:r(n),s=t.get(a);return typeof s>"u"&&(s=e.call(this,n),t.set(a,s)),s}function vu(e,t,r){var n=Array.prototype.slice.call(arguments,3),a=r(n),s=t.get(a);return typeof s>"u"&&(s=e.apply(this,n),t.set(a,s)),s}function cu(e,t,r,n,a){return r.bind(t,e,n,a)}function wk(e,t){var r=e.length===1?Lk:vu;return cu(e,this,r,t.cache.create(),t.serializer)}function jk(e,t){return cu(e,this,vu,t.cache.create(),t.serializer)}var Mk=function(){return JSON.stringify(arguments)},Kk=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(t){return this.cache[t]},e.prototype.set=function(t,r){this.cache[t]=r},e}(),Fk={create:function(){return new Kk}},Kn={variadic:jk},ue;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ue||(ue={}));var Le;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Le||(Le={}));var Jr;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Jr||(Jr={}));function io(e){return e.type===Le.literal}function Vk(e){return e.type===Le.argument}function Eu(e){return e.type===Le.number}function pu(e){return e.type===Le.date}function yu(e){return e.type===Le.time}function bu(e){return e.type===Le.select}function Au(e){return e.type===Le.plural}function qk(e){return e.type===Le.pound}function hu(e){return e.type===Le.tag}function Tu(e){return!!(e&&typeof e=="object"&&e.type===Jr.number)}function Vs(e){return!!(e&&typeof e=="object"&&e.type===Jr.dateTime)}var Ru=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,xk=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Gk(e){var t={};return e.replace(xk,function(r){var n=r.length;switch(r[0]){case"G":t.era=n===4?"long":n===5?"narrow":"short";break;case"y":t.year=n===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][n-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][n-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=n===4?"long":n===5?"narrow":"short";break;case"e":if(n<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][n-4];break;case"c":if(n<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][n-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][n-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][n-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][n-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][n-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][n-1];break;case"s":t.second=["numeric","2-digit"][n-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=n<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var Bk=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Uk(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(Bk).filter(function(k){return k.length>0}),r=[],n=0,a=t;n<a.length;n++){var s=a[n],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),u=0,d=l;u<d.length;u++){var g=d[u];if(g.length===0)throw new Error("Invalid number skeleton")}r.push({stem:o,options:l})}return r}function Hk(e){return e.replace(/^(.*?)-/,"")}var oo=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Nu=/^(@+)?(\+|#+)?[rs]?$/g,Ck=/(\*)(0+)|(#+)(0+)|(0+)/g,Iu=/^(0+)$/;function lo(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(Nu,function(r,n,a){return typeof a!="string"?(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length):a==="+"?t.minimumSignificantDigits=n.length:n[0]==="#"?t.maximumSignificantDigits=n.length:(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length+(typeof a=="string"?a.length:0)),""}),t}function _u(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Yk(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2);if(r==="+!"?(t.signDisplay="always",e=e.slice(2)):r==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!Iu.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function uo(e){var t={},r=_u(e);return r||t}function $k(e){for(var t={},r=0,n=e;r<n.length;r++){var a=n[r];switch(a.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=a.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=Hk(a.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=Q(Q(Q({},t),{notation:"scientific"}),a.options.reduce(function(l,u){return Q(Q({},l),uo(u))},{}));continue;case"engineering":t=Q(Q(Q({},t),{notation:"engineering"}),a.options.reduce(function(l,u){return Q(Q({},l),uo(u))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":t.roundingMode="floor";continue;case"rounding-mode-ceiling":t.roundingMode="ceil";continue;case"rounding-mode-down":t.roundingMode="trunc";continue;case"rounding-mode-up":t.roundingMode="expand";continue;case"rounding-mode-half-even":t.roundingMode="halfEven";continue;case"rounding-mode-half-down":t.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":t.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(Ck,function(l,u,d,g,k,m){if(u)t.minimumIntegerDigits=d.length;else{if(g&&k)throw new Error("We currently do not support maximum integer digits");if(m)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Iu.test(a.stem)){t.minimumIntegerDigits=a.stem.length;continue}if(oo.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(oo,function(l,u,d,g,k,m){return d==="*"?t.minimumFractionDigits=u.length:g&&g[0]==="#"?t.maximumFractionDigits=g.length:k&&m?(t.minimumFractionDigits=k.length,t.maximumFractionDigits=k.length+m.length):(t.minimumFractionDigits=u.length,t.maximumFractionDigits=u.length),""});var s=a.options[0];s==="w"?t=Q(Q({},t),{trailingZeroDisplay:"stripIfInteger"}):s&&(t=Q(Q({},t),lo(s)));continue}if(Nu.test(a.stem)){t=Q(Q({},t),lo(a.stem));continue}var i=_u(a.stem);i&&(t=Q(Q({},t),i));var o=Yk(a.stem);o&&(t=Q(Q({},t),o))}return t}var $t={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Wk(e,t){for(var r="",n=0;n<e.length;n++){var a=e.charAt(n);if(a==="j"){for(var s=0;n+1<e.length&&e.charAt(n+1)===a;)s++,n++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",u=Jk(t);for((u=="H"||u=="k")&&(o=0);o-- >0;)r+=l;for(;i-- >0;)r=u+r}else a==="J"?r+="H":r+=a}return r}function Jk(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,n;r!=="root"&&(n=e.maximize().region);var a=$t[n||""]||$t[r||""]||$t["".concat(r,"-001")]||$t["001"];return a[0]}var ks,zk=new RegExp("^".concat(Ru.source,"*")),Xk=new RegExp("".concat(Ru.source,"*$"));function me(e,t){return{start:e,end:t}}var Zk=!!String.prototype.startsWith&&"_a".startsWith("a",1),Qk=!!String.fromCodePoint,ef=!!Object.fromEntries,nf=!!String.prototype.codePointAt,rf=!!String.prototype.trimStart,tf=!!String.prototype.trimEnd,af=!!Number.isSafeInteger,sf=af?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},qs=!0;try{var of=Ou("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");qs=((ks=of.exec("a"))===null||ks===void 0?void 0:ks[0])==="a"}catch{qs=!1}var go=Zk?function(t,r,n){return t.startsWith(r,n)}:function(t,r,n){return t.slice(n,n+r.length)===r},xs=Qk?String.fromCodePoint:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var n="",a=t.length,s=0,i;a>s;){if(i=t[s++],i>1114111)throw RangeError(i+" is not a valid code point");n+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return n},mo=ef?Object.fromEntries:function(t){for(var r={},n=0,a=t;n<a.length;n++){var s=a[n],i=s[0],o=s[1];r[i]=o}return r},Su=nf?function(t,r){return t.codePointAt(r)}:function(t,r){var n=t.length;if(!(r<0||r>=n)){var a=t.charCodeAt(r),s;return a<55296||a>56319||r+1===n||(s=t.charCodeAt(r+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},lf=rf?function(t){return t.trimStart()}:function(t){return t.replace(zk,"")},df=tf?function(t){return t.trimEnd()}:function(t){return t.replace(Xk,"")};function Ou(e,t){return new RegExp(e,t)}var Gs;if(qs){var ko=Ou("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Gs=function(t,r){var n;ko.lastIndex=r;var a=ko.exec(t);return(n=a[1])!==null&&n!==void 0?n:""}}else Gs=function(t,r){for(var n=[];;){var a=Su(t,r);if(a===void 0||Du(a)||kf(a))break;n.push(a),r+=a>=65536?2:1}return xs.apply(void 0,n)};var uf=function(){function e(t,r){r===void 0&&(r={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,r,n){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(t,n);if(i.err)return i;a.push(i.val)}else{if(s===125&&t>0)break;if(s===35&&(r==="plural"||r==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:Le.pound,location:me(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(n)break;return this.error(ue.UNMATCHED_CLOSING_TAG,me(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&Bs(this.peek()||0)){var i=this.parseTag(t,r);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(t,r);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(t,r){var n=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Le.literal,value:"<".concat(a,"/>"),location:me(n,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(t+1,r,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Bs(this.char()))return this.error(ue.INVALID_TAG,me(o,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return a!==u?this.error(ue.UNMATCHED_CLOSING_TAG,me(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Le.tag,value:a,children:i,location:me(n,this.clonePosition())},err:null}:this.error(ue.INVALID_TAG,me(o,this.clonePosition())))}else return this.error(ue.UNCLOSED_TAG,me(n,this.clonePosition()))}else return this.error(ue.INVALID_TAG,me(n,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&mf(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,r){for(var n=this.clonePosition(),a="";;){var s=this.tryParseQuote(r);if(s){a+=s;continue}var i=this.tryParseUnquoted(t,r);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=me(n,this.clonePosition());return{val:{type:Le.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!gf(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var n=this.char();if(n===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(n);this.bump()}return xs.apply(void 0,r)},e.prototype.tryParseUnquoted=function(t,r){if(this.isEOF())return null;var n=this.char();return n===60||n===123||n===35&&(r==="plural"||r==="selectordinal")||n===125&&t>0?null:(this.bump(),xs(n))},e.prototype.parseArgument=function(t,r){var n=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ue.EXPECT_ARGUMENT_CLOSING_BRACE,me(n,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ue.EMPTY_ARGUMENT,me(n,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(ue.MALFORMED_ARGUMENT,me(n,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ue.EXPECT_ARGUMENT_CLOSING_BRACE,me(n,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Le.argument,value:a,location:me(n,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ue.EXPECT_ARGUMENT_CLOSING_BRACE,me(n,this.clonePosition())):this.parseArgumentOptions(t,r,a,n);default:return this.error(ue.MALFORMED_ARGUMENT,me(n,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),r=this.offset(),n=Gs(this.message,r),a=r+n.length;this.bumpTo(a);var s=this.clonePosition(),i=me(t,s);return{value:n,location:i}},e.prototype.parseArgumentOptions=function(t,r,n,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(ue.EXPECT_ARGUMENT_TYPE,me(i,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),g=this.parseSimpleArgStyleIfPossible();if(g.err)return g;var k=df(g.val);if(k.length===0)return this.error(ue.EXPECT_ARGUMENT_STYLE,me(this.clonePosition(),this.clonePosition()));var m=me(d,this.clonePosition());u={style:k,styleLocation:m}}var y=this.tryParseArgumentClose(a);if(y.err)return y;var c=me(a,this.clonePosition());if(u&&go(u==null?void 0:u.style,"::",0)){var A=lf(u.style.slice(2));if(o==="number"){var g=this.parseNumberSkeletonFromString(A,u.styleLocation);return g.err?g:{val:{type:Le.number,value:n,location:c,style:g.val},err:null}}else{if(A.length===0)return this.error(ue.EXPECT_DATE_TIME_SKELETON,c);var h=A;this.locale&&(h=Wk(A,this.locale));var k={type:Jr.dateTime,pattern:h,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?Gk(h):{}},v=o==="date"?Le.date:Le.time;return{val:{type:v,value:n,location:c,style:k},err:null}}}return{val:{type:o==="number"?Le.number:o==="date"?Le.date:Le.time,value:n,location:c,style:(s=u==null?void 0:u.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var E=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ue.EXPECT_SELECT_ARGUMENT_OPTIONS,me(E,Q({},E)));this.bumpSpace();var R=this.parseIdentifierIfPossible(),T=0;if(o!=="select"&&R.value==="offset"){if(!this.bumpIf(":"))return this.error(ue.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,me(this.clonePosition(),this.clonePosition()));this.bumpSpace();var g=this.tryParseDecimalInteger(ue.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ue.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(g.err)return g;this.bumpSpace(),R=this.parseIdentifierIfPossible(),T=g.val}var S=this.tryParsePluralOrSelectOptions(t,o,r,R);if(S.err)return S;var y=this.tryParseArgumentClose(a);if(y.err)return y;var N=me(a,this.clonePosition());return o==="select"?{val:{type:Le.select,value:n,options:mo(S.val),location:N},err:null}:{val:{type:Le.plural,value:n,options:mo(S.val),offset:T,pluralType:o==="plural"?"cardinal":"ordinal",location:N},err:null}}default:return this.error(ue.INVALID_ARGUMENT_TYPE,me(i,l))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(ue.EXPECT_ARGUMENT_CLOSING_BRACE,me(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,r=this.clonePosition();!this.isEOF();){var n=this.char();switch(n){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ue.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,me(a,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,r){var n=[];try{n=Uk(t)}catch{return this.error(ue.INVALID_NUMBER_SKELETON,r)}return{val:{type:Jr.number,tokens:n,location:r,parsedOptions:this.shouldParseSkeletons?$k(n):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,r,n,a){for(var s,i=!1,o=[],l=new Set,u=a.value,d=a.location;;){if(u.length===0){var g=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var k=this.tryParseDecimalInteger(ue.EXPECT_PLURAL_ARGUMENT_SELECTOR,ue.INVALID_PLURAL_ARGUMENT_SELECTOR);if(k.err)return k;d=me(g,this.clonePosition()),u=this.message.slice(g.offset,this.offset())}else break}if(l.has(u))return this.error(r==="select"?ue.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ue.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);u==="other"&&(i=!0),this.bumpSpace();var m=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?ue.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ue.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,me(this.clonePosition(),this.clonePosition()));var y=this.parseMessage(t+1,r,n);if(y.err)return y;var c=this.tryParseArgumentClose(m);if(c.err)return c;o.push([u,{value:y.val,location:me(m,this.clonePosition())}]),l.add(u),this.bumpSpace(),s=this.parseIdentifierIfPossible(),u=s.value,d=s.location}return o.length===0?this.error(r==="select"?ue.EXPECT_SELECT_ARGUMENT_SELECTOR:ue.EXPECT_PLURAL_ARGUMENT_SELECTOR,me(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(ue.MISSING_OTHER_CLAUSE,me(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(t,r){var n=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(n=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=me(a,this.clonePosition());return s?(i*=n,sf(i)?{val:i,err:null}:this.error(r,l)):this.error(t,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var r=Su(this.message,t);if(r===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(t,r){return{val:null,err:{kind:t,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(go(this.message,t,this.offset())){for(var r=0;r<t.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var r=this.offset(),n=this.message.indexOf(t,r);return n>=0?(this.bumpTo(n),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var r=this.offset();if(r===t)break;if(r>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Du(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),r=this.offset(),n=this.message.charCodeAt(r+(t>=65536?2:1));return n??null},e}();function Bs(e){return e>=97&&e<=122||e>=65&&e<=90}function gf(e){return Bs(e)||e===47}function mf(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Du(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function kf(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Us(e){e.forEach(function(t){if(delete t.location,bu(t)||Au(t))for(var r in t.options)delete t.options[r].location,Us(t.options[r].value);else Eu(t)&&Tu(t.style)||(pu(t)||yu(t))&&Vs(t.style)?delete t.style.location:hu(t)&&Us(t.children)})}function ff(e,t){t===void 0&&(t={}),t=Q({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var r=new uf(e,t).parse();if(r.err){var n=SyntaxError(ue[r.err.kind]);throw n.location=r.err.location,n.originalMessage=r.err.message,n}return t!=null&&t.captureLocation||Us(r.val),r.val}var Hn;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Hn||(Hn={}));var fr=function(e){Dn(t,e);function t(r,n,a){var s=e.call(this,r)||this;return s.code=n,s.originalMessage=a,s}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),fo=function(e){Dn(t,e);function t(r,n,a,s){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(n,'". Options are "').concat(Object.keys(a).join('", "'),'"'),Hn.INVALID_VALUE,s)||this}return t}(fr),vf=function(e){Dn(t,e);function t(r,n,a){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(n),Hn.INVALID_VALUE,a)||this}return t}(fr),cf=function(e){Dn(t,e);function t(r,n){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(n,'"'),Hn.MISSING_VALUE,n)||this}return t}(fr),rn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(rn||(rn={}));function Ef(e){return e.length<2?e:e.reduce(function(t,r){var n=t[t.length-1];return!n||n.type!==rn.literal||r.type!==rn.literal?t.push(r):n.value+=r.value,t},[])}function Pu(e){return typeof e=="function"}function Ta(e,t,r,n,a,s,i){if(e.length===1&&io(e[0]))return[{type:rn.literal,value:e[0].value}];for(var o=[],l=0,u=e;l<u.length;l++){var d=u[l];if(io(d)){o.push({type:rn.literal,value:d.value});continue}if(qk(d)){typeof s=="number"&&o.push({type:rn.literal,value:r.getNumberFormat(t).format(s)});continue}var g=d.value;if(!(a&&g in a))throw new cf(g,i);var k=a[g];if(Vk(d)){(!k||typeof k=="string"||typeof k=="number")&&(k=typeof k=="string"||typeof k=="number"?String(k):""),o.push({type:typeof k=="string"?rn.literal:rn.object,value:k});continue}if(pu(d)){var m=typeof d.style=="string"?n.date[d.style]:Vs(d.style)?d.style.parsedOptions:void 0;o.push({type:rn.literal,value:r.getDateTimeFormat(t,m).format(k)});continue}if(yu(d)){var m=typeof d.style=="string"?n.time[d.style]:Vs(d.style)?d.style.parsedOptions:n.time.medium;o.push({type:rn.literal,value:r.getDateTimeFormat(t,m).format(k)});continue}if(Eu(d)){var m=typeof d.style=="string"?n.number[d.style]:Tu(d.style)?d.style.parsedOptions:void 0;m&&m.scale&&(k=k*(m.scale||1)),o.push({type:rn.literal,value:r.getNumberFormat(t,m).format(k)});continue}if(hu(d)){var y=d.children,c=d.value,A=a[c];if(!Pu(A))throw new vf(c,"function",i);var h=Ta(y,t,r,n,a,s),v=A(h.map(function(T){return T.value}));Array.isArray(v)||(v=[v]),o.push.apply(o,v.map(function(T){return{type:typeof T=="string"?rn.literal:rn.object,value:T}}))}if(bu(d)){var E=d.options[k]||d.options.other;if(!E)throw new fo(d.value,k,Object.keys(d.options),i);o.push.apply(o,Ta(E.value,t,r,n,a));continue}if(Au(d)){var E=d.options["=".concat(k)];if(!E){if(!Intl.PluralRules)throw new fr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Hn.MISSING_INTL_API,i);var R=r.getPluralRules(t,{type:d.pluralType}).select(k-(d.offset||0));E=d.options[R]||d.options.other}if(!E)throw new fo(d.value,k,Object.keys(d.options),i);o.push.apply(o,Ta(E.value,t,r,n,a,k-(d.offset||0)));continue}}return Ef(o)}function pf(e,t){return t?Q(Q(Q({},e||{}),t||{}),Object.keys(e).reduce(function(r,n){return r[n]=Q(Q({},e[n]),t[n]||{}),r},{})):e}function yf(e,t){return t?Object.keys(e).reduce(function(r,n){return r[n]=pf(e[n],t[n]),r},Q({},e)):e}function fs(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function bf(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Mn(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.NumberFormat).bind.apply(t,Fn([void 0],r,!1)))},{cache:fs(e.number),strategy:Kn.variadic}),getDateTimeFormat:Mn(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.DateTimeFormat).bind.apply(t,Fn([void 0],r,!1)))},{cache:fs(e.dateTime),strategy:Kn.variadic}),getPluralRules:Mn(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.PluralRules).bind.apply(t,Fn([void 0],r,!1)))},{cache:fs(e.pluralRules),strategy:Kn.variadic})}}var Lu=function(){function e(t,r,n,a){r===void 0&&(r=e.defaultLocale);var s=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=s.formatToParts(l);if(u.length===1)return u[0].value;var d=u.reduce(function(g,k){return!g.length||k.type!==rn.literal||typeof g[g.length-1]!="string"?g.push(k.value):g[g.length-1]+=k.value,g},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return Ta(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=Wr(i,["formatters"]);this.ast=e.__parse(t,Q(Q({},o),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=yf(e.formats,n),this.formatters=a&&a.formatters||bf(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(t);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=ff,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Or;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Or||(Or={}));var Ot=function(e){Dn(t,e);function t(r,n,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(n,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,t),s}return t}(Error),Af=function(e){Dn(t,e);function t(r,n){return e.call(this,Or.UNSUPPORTED_FORMATTER,r,n)||this}return t}(Ot),hf=function(e){Dn(t,e);function t(r,n){return e.call(this,Or.INVALID_CONFIG,r,n)||this}return t}(Ot),vo=function(e){Dn(t,e);function t(r,n){return e.call(this,Or.MISSING_DATA,r,n)||this}return t}(Ot),hn=function(e){Dn(t,e);function t(r,n,a){var s=e.call(this,Or.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(n,`
`),a)||this;return s.locale=n,s}return t}(Ot),vs=function(e){Dn(t,e);function t(r,n,a,s){var i=e.call(this,"".concat(r,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),n,s)||this;return i.descriptor=a,i.locale=n,i}return t}(hn),Tf=function(e){Dn(t,e);function t(r,n){var a=e.call(this,Or.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(n,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=r,a}return t}(Ot);function Rf(e,t,r){if(r===void 0&&(r=Error),!e)throw new r(t)}function nt(e,t,r){return r===void 0&&(r={}),t.reduce(function(n,a){return a in e?n[a]=e[a]:a in r&&(n[a]=r[a]),n},{})}var Nf=function(e){},If=function(e){},wu={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Nf,onWarn:If};function ju(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function hr(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function _f(e){e===void 0&&(e=ju());var t=Intl.RelativeTimeFormat,r=Intl.ListFormat,n=Intl.DisplayNames,a=Mn(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.DateTimeFormat).bind.apply(o,Fn([void 0],l,!1)))},{cache:hr(e.dateTime),strategy:Kn.variadic}),s=Mn(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.NumberFormat).bind.apply(o,Fn([void 0],l,!1)))},{cache:hr(e.number),strategy:Kn.variadic}),i=Mn(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.PluralRules).bind.apply(o,Fn([void 0],l,!1)))},{cache:hr(e.pluralRules),strategy:Kn.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:Mn(function(o,l,u,d){return new Lu(o,l,u,Q({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},d||{}))},{cache:hr(e.message),strategy:Kn.variadic}),getRelativeTimeFormat:Mn(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,Fn([void 0],o,!1)))},{cache:hr(e.relativeTime),strategy:Kn.variadic}),getPluralRules:i,getListFormat:Mn(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,Fn([void 0],o,!1)))},{cache:hr(e.list),strategy:Kn.variadic}),getDisplayNames:Mn(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,Fn([void 0],o,!1)))},{cache:hr(e.displayNames),strategy:Kn.variadic})}}function vi(e,t,r,n){var a=e&&e[t],s;if(a&&(s=a[r]),s)return s;n(new Af("No ".concat(t," format named: ").concat(r)))}function Wt(e,t){return Object.keys(e).reduce(function(r,n){return r[n]=Q({timeZone:t},e[n]),r},{})}function co(e,t){var r=Object.keys(Q(Q({},e),t));return r.reduce(function(n,a){return n[a]=Q(Q({},e[a]||{}),t[a]||{}),n},{})}function Eo(e,t){if(!t)return e;var r=Lu.formats;return Q(Q(Q({},r),e),{date:co(Wt(r.date,t),Wt(e.date||{},t)),time:co(Wt(r.time,t),Wt(e.time||{},t))})}var Hs=function(e,t,r,n,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,u=e.defaultFormats,d=e.fallbackOnEmptyString,g=e.onError,k=e.timeZone,m=e.defaultRichTextElements;r===void 0&&(r={id:""});var y=r.id,c=r.defaultMessage;Rf(!!y,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var A=String(y),h=o&&Object.prototype.hasOwnProperty.call(o,A)&&o[A];if(Array.isArray(h)&&h.length===1&&h[0].type===Le.literal)return h[0].value;if(!n&&h&&typeof h=="string"&&!m)return h.replace(/'\{(.*?)\}'/gi,"{$1}");if(n=Q(Q({},m),n||{}),i=Eo(i,k),u=Eo(u,k),!h){if(d===!1&&h==="")return h;if((!c||s&&s.toLowerCase()!==l.toLowerCase())&&g(new Tf(r,s)),c)try{var v=t.getMessageFormat(c,l,u,a);return v.format(n)}catch(E){return g(new vs('Error formatting default message for: "'.concat(A,'", rendering default message verbatim'),s,r,E)),typeof c=="string"?c:A}return A}try{var v=t.getMessageFormat(h,s,i,Q({formatters:t},a||{}));return v.format(n)}catch(E){g(new vs('Error formatting message: "'.concat(A,'", using ').concat(c?"default message":"id"," as fallback."),s,r,E))}if(c)try{var v=t.getMessageFormat(c,l,u,a);return v.format(n)}catch(E){g(new vs('Error formatting the default message for: "'.concat(A,'", rendering message verbatim'),s,r,E))}return typeof h=="string"?h:typeof c=="string"?c:A},Sf=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Dt(e,t,r,n){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;n===void 0&&(n={});var l=n.format,u=Q(Q({},o&&{timeZone:o}),l&&vi(s,t,l,i)),d=nt(n,Sf,u);return t==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=Q(Q({},d),{hour:"numeric",minute:"numeric"})),r(a,d)}function Of(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Dt(e,"date",t,i).format(o)}catch(l){e.onError(new hn("Error formatting date.",e.locale,l))}return String(o)}function Df(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Dt(e,"time",t,i).format(o)}catch(l){e.onError(new hn("Error formatting time.",e.locale,l))}return String(o)}function Pf(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],i=r[2],o=i===void 0?{}:i,l=typeof a=="string"?new Date(a||0):a,u=typeof s=="string"?new Date(s||0):s;try{return Dt(e,"dateTimeRange",t,o).formatRange(l,u)}catch(d){e.onError(new hn("Error formatting date time range.",e.locale,d))}return String(l)}function Lf(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Dt(e,"date",t,i).formatToParts(o)}catch(l){e.onError(new hn("Error formatting date.",e.locale,l))}return[]}function wf(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Dt(e,"time",t,i).formatToParts(o)}catch(l){e.onError(new hn("Error formatting time.",e.locale,l))}return[]}var jf=["style","type","fallback","languageDisplay"];function Mf(e,t,r,n){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new fr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Hn.MISSING_INTL_API));var o=nt(n,jf);try{return t(a,o).of(r)}catch(l){s(new hn("Error formatting display name.",a,l))}}var Kf=["type","style"],po=Date.now();function Ff(e){return"".concat(po,"_").concat(e,"_").concat(po)}function Vf(e,t,r,n){n===void 0&&(n={});var a=Mu(e,t,r,n).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function Mu(e,t,r,n){var a=e.locale,s=e.onError;n===void 0&&(n={});var i=Intl.ListFormat;i||s(new fr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Hn.MISSING_INTL_API));var o=nt(n,Kf);try{var l={},u=r.map(function(d,g){if(typeof d=="object"){var k=Ff(g);return l[k]=d,k}return String(d)});return t(a,o).formatToParts(u).map(function(d){return d.type==="literal"?d:Q(Q({},d),{value:l[d.value]||d.value})})}catch(d){s(new hn("Error formatting list.",a,d))}return r}var qf=["type"];function xf(e,t,r,n){var a=e.locale,s=e.onError;n===void 0&&(n={}),Intl.PluralRules||s(new fr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Hn.MISSING_INTL_API));var i=nt(n,qf);try{return t(a,i).select(r)}catch(o){s(new hn("Error formatting plural.",a,o))}return"other"}var Gf=["numeric","style"];function Bf(e,t,r){var n=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var i=r.format,o=!!i&&vi(a,"relative",i,s)||{},l=nt(r,Gf,o);return t(n,l)}function Uf(e,t,r,n,a){a===void 0&&(a={}),n||(n="second");var s=Intl.RelativeTimeFormat;s||e.onError(new fr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Hn.MISSING_INTL_API));try{return Bf(e,t,a).format(r,n)}catch(i){e.onError(new hn("Error formatting relative time.",e.locale,i))}return String(r)}var Hf=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Ku(e,t,r){var n=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var i=r.format,o=i&&vi(a,"number",i,s)||{},l=nt(r,Hf,o);return t(n,l)}function Cf(e,t,r,n){n===void 0&&(n={});try{return Ku(e,t,n).format(r)}catch(a){e.onError(new hn("Error formatting number.",e.locale,a))}return String(r)}function Yf(e,t,r,n){n===void 0&&(n={});try{return Ku(e,t,n).formatToParts(r)}catch(a){e.onError(new hn("Error formatting number.",e.locale,a))}return[]}function $f(e){var t=e?e[Object.keys(e)[0]]:void 0;return typeof t=="string"}function Wf(e){e.onWarn&&e.defaultRichTextElements&&$f(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function Jf(e,t){var r=_f(t),n=Q(Q({},wu),e),a=n.locale,s=n.defaultLocale,i=n.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new vo('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new vo('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new hf('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),n.locale=n.defaultLocale||"en"),Wf(n),Q(Q({},n),{formatters:r,formatNumber:Cf.bind(null,n,r.getNumberFormat),formatNumberToParts:Yf.bind(null,n,r.getNumberFormat),formatRelativeTime:Uf.bind(null,n,r.getRelativeTimeFormat),formatDate:Of.bind(null,n,r.getDateTimeFormat),formatDateToParts:Lf.bind(null,n,r.getDateTimeFormat),formatTime:Df.bind(null,n,r.getDateTimeFormat),formatDateTimeRange:Pf.bind(null,n,r.getDateTimeFormat),formatTimeToParts:wf.bind(null,n,r.getDateTimeFormat),formatPlural:xf.bind(null,n,r.getPluralRules),formatMessage:Hs.bind(null,n,r),$t:Hs.bind(null,n,r),formatList:Vf.bind(null,n,r.getListFormat),formatListToParts:Mu.bind(null,n,r.getListFormat),formatDisplayName:Mf.bind(null,n,r.getDisplayNames)})}function zf(e,t,r){if(r===void 0&&(r=Error),!e)throw new r(t)}function Xf(e){zf(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Zf=Q(Q({},wu),{textComponent:f.Fragment}),Qf={key:42},ev=function(e){return f.isValidElement(e)?f.createElement(f.Fragment,Qf,e):e},nv=function(e){var t;return(t=f.Children.map(e,ev))!==null&&t!==void 0?t:[]};function rv(e){return function(t){return e(f.Children.toArray(t))}}function yo(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),a=r.length;if(n.length!==a)return!1;for(var s=0;s<a;s++){var i=r[s];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}var cs={exports:{}},ce={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo;function tv(){if(bo)return ce;bo=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,o=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,g=e?Symbol.for("react.suspense"):60113,k=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,c=e?Symbol.for("react.block"):60121,A=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function E(T){if(typeof T=="object"&&T!==null){var S=T.$$typeof;switch(S){case t:switch(T=T.type,T){case l:case u:case n:case s:case a:case g:return T;default:switch(T=T&&T.$$typeof,T){case o:case d:case y:case m:case i:return T;default:return S}}case r:return S}}}function R(T){return E(T)===u}return ce.AsyncMode=l,ce.ConcurrentMode=u,ce.ContextConsumer=o,ce.ContextProvider=i,ce.Element=t,ce.ForwardRef=d,ce.Fragment=n,ce.Lazy=y,ce.Memo=m,ce.Portal=r,ce.Profiler=s,ce.StrictMode=a,ce.Suspense=g,ce.isAsyncMode=function(T){return R(T)||E(T)===l},ce.isConcurrentMode=R,ce.isContextConsumer=function(T){return E(T)===o},ce.isContextProvider=function(T){return E(T)===i},ce.isElement=function(T){return typeof T=="object"&&T!==null&&T.$$typeof===t},ce.isForwardRef=function(T){return E(T)===d},ce.isFragment=function(T){return E(T)===n},ce.isLazy=function(T){return E(T)===y},ce.isMemo=function(T){return E(T)===m},ce.isPortal=function(T){return E(T)===r},ce.isProfiler=function(T){return E(T)===s},ce.isStrictMode=function(T){return E(T)===a},ce.isSuspense=function(T){return E(T)===g},ce.isValidElementType=function(T){return typeof T=="string"||typeof T=="function"||T===n||T===u||T===s||T===a||T===g||T===k||typeof T=="object"&&T!==null&&(T.$$typeof===y||T.$$typeof===m||T.$$typeof===i||T.$$typeof===o||T.$$typeof===d||T.$$typeof===A||T.$$typeof===h||T.$$typeof===v||T.$$typeof===c)},ce.typeOf=E,ce}var Ao;function av(){return Ao||(Ao=1,cs.exports=tv()),cs.exports}var Es,ho;function sv(){if(ho)return Es;ho=1;var e=av(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=n,s[e.Memo]=a;function i(y){return e.isMemo(y)?a:s[y.$$typeof]||t}var o=Object.defineProperty,l=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,k=Object.prototype;function m(y,c,A){if(typeof c!="string"){if(k){var h=g(c);h&&h!==k&&m(y,h,A)}var v=l(c);u&&(v=v.concat(u(c)));for(var E=i(y),R=i(c),T=0;T<v.length;++T){var S=v[T];if(!r[S]&&!(A&&A[S])&&!(R&&R[S])&&!(E&&E[S])){var N=d(c,S);try{o(y,S,N)}catch{}}}}return y}return Es=m,Es}sv();var ci=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=f.createContext(null)):f.createContext(null);ci.Consumer;var iv=ci.Provider,Fu=iv,ov=ci;function Cn(){var e=f.useContext(ov);return Xf(e),e}var Cs;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Cs||(Cs={}));var Ys;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Ys||(Ys={}));function Vu(e){var t=function(r){var n=Cn(),a=r.value,s=r.children,i=Wr(r,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?n.formatDateToParts(o,i):n.formatTimeToParts(o,i);return s(l)};return t.displayName=Ys[e],t}function Pt(e){var t=function(r){var n=Cn(),a=r.value,s=r.children,i=Wr(r,["value","children"]),o=n[e](a,i);if(typeof s=="function")return s(o);var l=n.textComponent||f.Fragment;return f.createElement(l,null,o)};return t.displayName=Cs[e],t}function qu(e){return e&&Object.keys(e).reduce(function(t,r){var n=e[r];return t[r]=Pu(n)?rv(n):n,t},{})}var To=function(e,t,r,n){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=qu(n),o=Hs.apply(void 0,Fn([e,t,r,i],a,!1));return Array.isArray(o)?nv(o):o},lv=function(e,t){var r=e.defaultRichTextElements,n=Wr(e,["defaultRichTextElements"]),a=qu(r),s=Jf(Q(Q(Q({},Zf),n),{defaultRichTextElements:a}),t),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return Q(Q({},s),{formatMessage:To.bind(null,i,s.formatters),$t:To.bind(null,i,s.formatters)})};function dv(e,t){var r=e.values,n=Wr(e,["values"]),a=t.values,s=Wr(t,["values"]);return yo(a,r)&&yo(n,s)}function xu(e){var t=Cn(),r=t.formatMessage,n=t.textComponent,a=n===void 0?f.Fragment:n,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,g=d===void 0?a:d,k=e.ignoreTag,m={id:s,description:i,defaultMessage:o},y=r(m,l,{ignoreTag:k});return typeof u=="function"?u(Array.isArray(y)?y:[y]):g?f.createElement(g,null,y):f.createElement(f.Fragment,null,y)}xu.displayName="FormattedMessage";var Y=f.memo(xu,dv);Y.displayName="MemoizedFormattedMessage";Pt("formatDate");Pt("formatTime");Pt("formatNumber");Pt("formatList");Pt("formatDisplayName");Vu("formatDate");Vu("formatTime");const Gu=f.createContext(null),Bu=({children:e,behandling:t})=>{const[r,n]=f.useState();f.useEffect(()=>{r&&n(void 0)},[t.uuid,t.versjon]);const a=f.useMemo(()=>({mellomlagretFormData:r,setMellomlagretFormData:n}),[r,n]);return p.jsx(Gu,{value:a,children:e})},uv=()=>{const e=f.useContext(Gu);if(!e)throw new Error("MellomlagretFormDataContext er ikke satt opp");return e};Bu.__docgenInfo={description:"",methods:[],displayName:"MellomlagretFormDataProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
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
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
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
}>`}]},description:""}}};const Uu=f.createContext(null),Hu=e=>{const{children:t,...r}=e,n=f.useMemo(()=>r,[r]);return p.jsx(Uu,{value:n,children:t})},gv=()=>{const e=f.useContext(Uu);if(!e)throw new Error("PanelContext.Provider er ikke satt opp");return e};Hu.__docgenInfo={description:"",methods:[],displayName:"PanelDataProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
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
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
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
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
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
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
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
}>`}],raw:"Aksjonspunkt[]"},description:""},harÅpneAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"Record",elements:[{name:"Exclude",elements:[{name:"KodeverkType"},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:`Record<
  Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>,
  KodeverkMedNavn[]
>`},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: AP_TYPE) => Promise<void>",signature:{arguments:[{type:{name:"AP_TYPE"},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""}}};f.createContext(null);var Te=(e=>(e.DEFAULT="default",e.INNGANGSVILKAR="inngangsvilkar",e.BEHANDLE_INNSYN="behandle_innsyn",e.BEREGNING="beregning",e.BEREGNINGSGRUNNLAG="beregningsgrunnlag",e.KLAGE_NAV_FAMILIE_OG_PENSJON="klage_nav_familie_og_pensjon",e.KLAGE_NAV_KLAGEINSTANS="klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_KLAGEINSTANS="formkrav_klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON="formkrav_klage_nav_familie_og_pensjon",e.FORTSATTMEDLEMSKAP="fortsattmedlemskap",e.OPPLYSNINGSPLIKT="opplysningsplikt",e.SOEKNADSFRIST="soeknadsfrist",e.TILBAKEKREVING="tilbakekreving",e.FORELDELSE="foreldelse",e.TILKJENT_YTELSE="tilkjent_ytelse",e.VARSEL="varsel",e.VEDTAK="vedtak",e.UTTAK="uttak",e.SIMULERING="simulering",e.KLAGE_RESULTAT="resultat",e.ANKEBEHANDLING="ankebehandling",e.ANKE_MERKNADER="ankemerknader",e.ANKE_RESULTAT="ankeresultat",e))(Te||{}),re=(e=>(e.ADOPSJONSVILKARET="adopsjonsvilkaaret",e.ARBEIDSFORHOLD="arbeidsforhold",e.ARBEID_OG_INNTEKT="arbeidoginntekt",e.BEREGNING="beregning",e.BESTEBEREGNING="besteberegning",e.DEFAULT="default",e.FORDELING="fordeling",e.INNTEKTSMELDINGER="inntektsmeldinger",e.FEILUTBETALING="feilutbetaling",e.FODSELSVILKARET="foedselsvilkaaret",e.FODSELTILRETTELEGGING="fodseltilrettelegging",e.MEDLEMSKAPSVILKARET="medlemskapsvilkaaret",e.OMSORG="omsorg",e.OMSORG_OG_RETT="omsorgogrett",e.OMSORGSVILKARET="omsorgsvilkaaret",e.OPPTJENINGSVILKARET="opptjeningsvilkaaret",e.PERMISJON="permisjon",e.SAKEN="saken",e.UTTAK="uttak",e.VERGE="verge",e.YTELSER="ytelser",e.UTTAK_DOKUMENTASJON="uttakdokumentasjon",e))(re||{});re.DEFAULT,Te.BEREGNING,re.DEFAULT,Te.BEREGNINGSGRUNNLAG,re.BESTEBEREGNING,Te.DEFAULT,re.ADOPSJONSVILKARET,re.ARBEIDSFORHOLD,re.BEREGNING,re.FODSELSVILKARET,re.FORDELING,re.MEDLEMSKAPSVILKARET,re.OMSORG,re.OPPTJENINGSVILKARET,re.OPPTJENINGSVILKARET,re.OMSORGSVILKARET,re.ARBEIDSFORHOLD,re.UTTAK_DOKUMENTASJON,re.DEFAULT,Te.INNGANGSVILKAR,re.DEFAULT,Te.KLAGE_NAV_FAMILIE_OG_PENSJON,re.DEFAULT,Te.KLAGE_NAV_KLAGEINSTANS,re.DEFAULT,Te.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,re.DEFAULT,Te.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,re.DEFAULT,Te.ANKEBEHANDLING,re.DEFAULT,Te.ANKE_MERKNADER,re.DEFAULT,Te.OPPLYSNINGSPLIKT,re.DEFAULT,Te.INNGANGSVILKAR,re.DEFAULT,Te.INNGANGSVILKAR,re.MEDLEMSKAPSVILKARET,Te.INNGANGSVILKAR,re.DEFAULT,Te.INNGANGSVILKAR,re.DEFAULT,Te.INNGANGSVILKAR,re.DEFAULT,Te.SOEKNADSFRIST,re.DEFAULT,Te.VEDTAK,re.UTTAK,re.UTTAK,re.UTTAK_DOKUMENTASJON,re.SAKEN,re.DEFAULT,Te.UTTAK,re.VERGE,re.DEFAULT,Te.TILKJENT_YTELSE,re.DEFAULT,Te.SIMULERING,re.SAKEN,re.FODSELTILRETTELEGGING,re.DEFAULT,Te.INNGANGSVILKAR,re.DEFAULT,re.UTTAK_DOKUMENTASJON,re.DEFAULT,Te.FORTSATTMEDLEMSKAP,re.ARBEID_OG_INNTEKT,Te.DEFAULT,re.OMSORG_OG_RETT;re.FEILUTBETALING,re.DEFAULT,Te.TILBAKEKREVING,re.DEFAULT,Te.FORELDELSE,re.DEFAULT,Te.VEDTAK,re.VERGE;const mv=(e,t,r)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${t}&dokumentId=${r}`,kv=(e,t,r)=>{const n=window.open(e,t);n&&setTimeout(()=>{n.document.title=r},1e3)},fv=e=>{if(e==null)return;const t=e.toString().replace(/\s/g,"");if(!Number.isNaN(t))return Number(Math.round(parseFloat(t))).toLocaleString("nb-NO").replace(/,|\s/g," ")};function Ei(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $s={exports:{}},vv=$s.exports,Ro;function cv(){return Ro||(Ro=1,function(e,t){(function(r,n){e.exports=n()})(vv,function(){var r,n,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,g=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,k={years:u,months:d,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},m=function(S){return S instanceof R},y=function(S,N,I){return new R(S,I,N.$l)},c=function(S){return n.p(S)+"s"},A=function(S){return S<0},h=function(S){return A(S)?Math.ceil(S):Math.floor(S)},v=function(S){return Math.abs(S)},E=function(S,N){return S?A(S)?{negative:!0,format:""+v(S)+N}:{negative:!1,format:""+S+N}:{negative:!1,format:""}},R=function(){function S(I,D,j){var M=this;if(this.$d={},this.$l=j,I===void 0&&(this.$ms=0,this.parseFromMilliseconds()),D)return y(I*k[c(D)],this);if(typeof I=="number")return this.$ms=I,this.parseFromMilliseconds(),this;if(typeof I=="object")return Object.keys(I).forEach(function(P){M.$d[c(P)]=I[P]}),this.calMilliseconds(),this;if(typeof I=="string"){var L=I.match(g);if(L){var O=L.slice(2).map(function(P){return P!=null?Number(P):0});return this.$d.years=O[0],this.$d.months=O[1],this.$d.weeks=O[2],this.$d.days=O[3],this.$d.hours=O[4],this.$d.minutes=O[5],this.$d.seconds=O[6],this.calMilliseconds(),this}}return this}var N=S.prototype;return N.calMilliseconds=function(){var I=this;this.$ms=Object.keys(this.$d).reduce(function(D,j){return D+(I.$d[j]||0)*k[j]},0)},N.parseFromMilliseconds=function(){var I=this.$ms;this.$d.years=h(I/u),I%=u,this.$d.months=h(I/d),I%=d,this.$d.days=h(I/o),I%=o,this.$d.hours=h(I/i),I%=i,this.$d.minutes=h(I/s),I%=s,this.$d.seconds=h(I/a),I%=a,this.$d.milliseconds=I},N.toISOString=function(){var I=E(this.$d.years,"Y"),D=E(this.$d.months,"M"),j=+this.$d.days||0;this.$d.weeks&&(j+=7*this.$d.weeks);var M=E(j,"D"),L=E(this.$d.hours,"H"),O=E(this.$d.minutes,"M"),P=this.$d.seconds||0;this.$d.milliseconds&&(P+=this.$d.milliseconds/1e3,P=Math.round(1e3*P)/1e3);var K=E(P,"S"),x=I.negative||D.negative||M.negative||L.negative||O.negative||K.negative,G=L.format||O.format||K.format?"T":"",V=(x?"-":"")+"P"+I.format+D.format+M.format+G+L.format+O.format+K.format;return V==="P"||V==="-P"?"P0D":V},N.toJSON=function(){return this.toISOString()},N.format=function(I){var D=I||"YYYY-MM-DDTHH:mm:ss",j={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return D.replace(l,function(M,L){return L||String(j[M])})},N.as=function(I){return this.$ms/k[c(I)]},N.get=function(I){var D=this.$ms,j=c(I);return j==="milliseconds"?D%=1e3:D=j==="weeks"?h(D/k[j]):this.$d[j],D||0},N.add=function(I,D,j){var M;return M=D?I*k[c(D)]:m(I)?I.$ms:y(I,this).$ms,y(this.$ms+M*(j?-1:1),this)},N.subtract=function(I,D){return this.add(I,D,!0)},N.locale=function(I){var D=this.clone();return D.$l=I,D},N.clone=function(){return y(this.$ms,this)},N.humanize=function(I){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!I)},N.valueOf=function(){return this.asMilliseconds()},N.milliseconds=function(){return this.get("milliseconds")},N.asMilliseconds=function(){return this.as("milliseconds")},N.seconds=function(){return this.get("seconds")},N.asSeconds=function(){return this.as("seconds")},N.minutes=function(){return this.get("minutes")},N.asMinutes=function(){return this.as("minutes")},N.hours=function(){return this.get("hours")},N.asHours=function(){return this.as("hours")},N.days=function(){return this.get("days")},N.asDays=function(){return this.as("days")},N.weeks=function(){return this.get("weeks")},N.asWeeks=function(){return this.as("weeks")},N.months=function(){return this.get("months")},N.asMonths=function(){return this.as("months")},N.years=function(){return this.get("years")},N.asYears=function(){return this.as("years")},S}(),T=function(S,N,I){return S.add(N.years()*I,"y").add(N.months()*I,"M").add(N.days()*I,"d").add(N.hours()*I,"h").add(N.minutes()*I,"m").add(N.seconds()*I,"s").add(N.milliseconds()*I,"ms")};return function(S,N,I){r=I,n=I().$utils(),I.duration=function(M,L){var O=I.locale();return y(M,{$l:O},L)},I.isDuration=m;var D=N.prototype.add,j=N.prototype.subtract;N.prototype.add=function(M,L){return m(M)?T(this,M,1):D.bind(this)(M,L)},N.prototype.subtract=function(M,L){return m(M)?T(this,M,-1):j.bind(this)(M,L)}}})}($s)),$s.exports}var Ev=cv();const pv=Ei(Ev);var Ws={exports:{}},yv=Ws.exports,No;function bv(){return No||(No=1,function(e,t){(function(r,n){e.exports=n()})(yv,function(){var r="day";return function(n,a,s){var i=function(u){return u.add(4-u.isoWeekday(),r)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),r);var d,g,k,m,y=i(this),c=(d=this.isoWeekYear(),g=this.$u,k=(g?s.utc:s)().year(d).startOf("year"),m=4-k.isoWeekday(),k.isoWeekday()>4&&(m+=7),k.add(m,r));return y.diff(c,"week")+1},o.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var l=o.startOf;o.startOf=function(u,d){var g=this.$utils(),k=!!g.u(d)||d;return g.p(u)==="isoweek"?k?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(u,d)}}})}(Ws)),Ws.exports}var Av=bv();const hv=Ei(Av);var Js={exports:{}},Tv=Js.exports,Io;function Rv(){return Io||(Io=1,function(e,t){(function(r,n){e.exports=n()})(Tv,function(){var r="minute",n=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(c){var A={date:c,utc:!0,args:arguments};return new i(A)},l.utc=function(c){var A=o(this.toDate(),{locale:this.$L,utc:!0});return c?A.add(this.utcOffset(),r):A},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(c){c.utc&&(this.$u=!0),this.$utils().u(c.$offset)||(this.$offset=c.$offset),u.call(this,c)};var d=l.init;l.init=function(){if(this.$u){var c=this.$d;this.$y=c.getUTCFullYear(),this.$M=c.getUTCMonth(),this.$D=c.getUTCDate(),this.$W=c.getUTCDay(),this.$H=c.getUTCHours(),this.$m=c.getUTCMinutes(),this.$s=c.getUTCSeconds(),this.$ms=c.getUTCMilliseconds()}else d.call(this)};var g=l.utcOffset;l.utcOffset=function(c,A){var h=this.$utils().u;if(h(c))return this.$u?0:h(this.$offset)?g.call(this):this.$offset;if(typeof c=="string"&&(c=function(T){T===void 0&&(T="");var S=T.match(n);if(!S)return null;var N=(""+S[0]).match(a)||["-",0,0],I=N[0],D=60*+N[1]+ +N[2];return D===0?0:I==="+"?D:-D}(c),c===null))return this;var v=Math.abs(c)<=16?60*c:c,E=this;if(A)return E.$offset=v,E.$u=c===0,E;if(c!==0){var R=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(E=this.local().add(v+R,r)).$offset=v,E.$x.$localOffset=R}else E=this.utc();return E};var k=l.format;l.format=function(c){var A=c||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return k.call(this,A)},l.valueOf=function(){var c=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*c},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var m=l.toDate;l.toDate=function(c){return c==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():m.call(this)};var y=l.diff;l.diff=function(c,A,h){if(c&&this.$u===c.$u)return y.call(this,c,A,h);var v=this.local(),E=o(c).local();return y.call(v,E,A,h)}}})}(Js)),Js.exports}var Nv=Rv();const Iv=Ei(Nv),_v=ju(),Pn=e=>lv({locale:"nb-NO",messages:e},_v),zn="YYYY-MM-DD",Br="DD.MM.YYYY",Ua={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};var zs={exports:{}},Sv=zs.exports,_o;function Ov(){return _o||(_o=1,function(e,t){(function(r,n){e.exports=n(Ie)})(Sv,function(r){function n(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=n(r),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})}(zs)),zs.exports}Ov();Ie.extend(Iv);Ie.extend(hv);Ie.extend(pv);Pn(Ua);const Dv="9999-12-31",Pv=Pn(Ua),Ha=(e,t)=>{const{year:r="numeric",month:n="2-digit",day:a="2-digit"}=t??{};return Pv.formatDate(new Date(e),{year:r,month:n,day:a})};Pn(Ua);const Lv=e=>e!=null&&e.constructor===Object;var So={exports:{}},lt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo;function wv(){if(Oo)return lt;Oo=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:s}}return lt.Fragment=t,lt.jsx=r,lt.jsxs=r,lt}var Do;function jv(){return Do||(Do=1,So.exports=wv()),So.exports}jv();const Mv=Pn(Ua),Kv=(e,t,r)=>{const{separator:n="-",showTodayString:a=!1,...s}=r??{},i=Ha(e,s),o=Fv(t,a,s);return`${i} ${n} ${o}`},Fv=(e,t,r)=>!e&&t?Mv.formatMessage({id:"PeriodLabel.DateToday"}):!e||e===Dv?"":Ha(e,r),Cu=e=>p.jsx(Bu,{behandling:{uuid:"1",versjon:1},children:p.jsx(e,{})});Cu.__docgenInfo={description:"",methods:[],displayName:"withMellomlagretFormData"};const Vv=[{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],qv=[{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"},{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"}],xv=[{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"},{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"}],Gv=[{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"}],Bv=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],Uv=[{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"}],Hv=[{kode:"FORELDREPENGER",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Foreldrepenger"},{kode:"UTDANNING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Utdanning"},{kode:"PERMITTERING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Permittering"},{kode:"ANNEN_PERMISJON",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Annen permisjon"}],Cv=[{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"},{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"}],Yv=[{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"}],$v=[{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilanser"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - fisker"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - jordbruker"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - dagmamma"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"}],Wv=[{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og rett"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstansen"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat NFP"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"}],Jv=[{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"}],zv=[{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"}],Xv=[{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknad mangler"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"}],Zv=[{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"},{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"}],Qv=[{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],ec=[{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"},{kode:"883-5",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 5"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"}],nc=[{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"}],rc=[{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"}],tc=[{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"},{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"}],ac=[{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"},{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"}],sc=[{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"}],ic=[{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"}],oc=JSON.parse('[{"kode":"SGP","kodeverk":"LANDKODER","navn":"SINGAPORE"},{"kode":"GNB","kodeverk":"LANDKODER","navn":"GUINEA-BISSAU"},{"kode":"NCL","kodeverk":"LANDKODER","navn":"NY-KALEDONIA"},{"kode":"GHA","kodeverk":"LANDKODER","navn":"GHANA"},{"kode":"DEU","kodeverk":"LANDKODER","navn":"TYSKLAND"},{"kode":"ANT","kodeverk":"LANDKODER","navn":"DE NEDERLANDSKE ANTILLENE"},{"kode":"SPM","kodeverk":"LANDKODER","navn":"ST-PIERRE OG MIQUELON"},{"kode":"CUB","kodeverk":"LANDKODER","navn":"CUBA"},{"kode":"NGA","kodeverk":"LANDKODER","navn":"NIGERIA"},{"kode":"UGA","kodeverk":"LANDKODER","navn":"UGANDA"},{"kode":"BVT","kodeverk":"LANDKODER","navn":"BOUVETØYA"},{"kode":"XXK","kodeverk":"LANDKODER","navn":"KOSOVO"},{"kode":"MDG","kodeverk":"LANDKODER","navn":"MADAGASKAR"},{"kode":"VAT","kodeverk":"LANDKODER","navn":"VATIKANSTATEN"},{"kode":"PRK","kodeverk":"LANDKODER","navn":"NORD-KOREA"},{"kode":"NZL","kodeverk":"LANDKODER","navn":"NEW ZEALAND"},{"kode":"MCO","kodeverk":"LANDKODER","navn":"MONACO"},{"kode":"GUF","kodeverk":"LANDKODER","navn":"FRANSK GUYANA"},{"kode":"ETH","kodeverk":"LANDKODER","navn":"ETIOPIA"},{"kode":"MNP","kodeverk":"LANDKODER","navn":"NORD-MARIANENE"},{"kode":"BMU","kodeverk":"LANDKODER","navn":"BERMUDA"},{"kode":"PSE","kodeverk":"LANDKODER","navn":"DET PALESTINSKE OMRÅDET"},{"kode":"PYF","kodeverk":"LANDKODER","navn":"FRANSK POLYNESIA"},{"kode":"FLK","kodeverk":"LANDKODER","navn":"FALKLANDSØYENE"},{"kode":"NER","kodeverk":"LANDKODER","navn":"NIGER"},{"kode":"SSD","kodeverk":"LANDKODER","navn":"SØR-SUDAN"},{"kode":"PLW","kodeverk":"LANDKODER","navn":"PALAU"},{"kode":"HRV","kodeverk":"LANDKODER","navn":"KROATIA"},{"kode":"ALA","kodeverk":"LANDKODER","navn":"ÅLAND"},{"kode":"ZWE","kodeverk":"LANDKODER","navn":"ZIMBABWE"},{"kode":"SRB","kodeverk":"LANDKODER","navn":"SERBIA"},{"kode":"SHN","kodeverk":"LANDKODER","navn":"ST. HELENA"},{"kode":"TTO","kodeverk":"LANDKODER","navn":"TRINIDAD OG TOBAGO"},{"kode":"THA","kodeverk":"LANDKODER","navn":"THAILAND"},{"kode":"KGZ","kodeverk":"LANDKODER","navn":"KIRGISISTAN"},{"kode":"MDV","kodeverk":"LANDKODER","navn":"MALDIVENE"},{"kode":"TWN","kodeverk":"LANDKODER","navn":"TAIWAN"},{"kode":"BEL","kodeverk":"LANDKODER","navn":"BELGIA"},{"kode":"ARM","kodeverk":"LANDKODER","navn":"ARMENIA"},{"kode":"SYR","kodeverk":"LANDKODER","navn":"SYRIA"},{"kode":"WSM","kodeverk":"LANDKODER","navn":"SAMOA"},{"kode":"VCT","kodeverk":"LANDKODER","navn":"ST. VINCENT"},{"kode":"IND","kodeverk":"LANDKODER","navn":"INDIA"},{"kode":"ITA","kodeverk":"LANDKODER","navn":"ITALIA"},{"kode":"SLE","kodeverk":"LANDKODER","navn":"SIERRA LEONE"},{"kode":"CHE","kodeverk":"LANDKODER","navn":"SVEITS"},{"kode":"MHL","kodeverk":"LANDKODER","navn":"MARSHALLØYENE"},{"kode":"URY","kodeverk":"LANDKODER","navn":"URUGUAY"},{"kode":"FJI","kodeverk":"LANDKODER","navn":"FIJI"},{"kode":"IMN","kodeverk":"LANDKODER","navn":"ISLE OF MAN"},{"kode":"CSK","kodeverk":"LANDKODER","navn":"TSJEKKOSLOVAKIA"},{"kode":"SGS","kodeverk":"LANDKODER","navn":"SØR-GEORGIA OG SØR-SANDWICHØYE"},{"kode":"ASM","kodeverk":"LANDKODER","navn":"AM. SAMOA"},{"kode":"BGR","kodeverk":"LANDKODER","navn":"BULGARIA"},{"kode":"MYT","kodeverk":"LANDKODER","navn":"MAYOTTE"},{"kode":"DNK","kodeverk":"LANDKODER","navn":"DANMARK"},{"kode":"IRL","kodeverk":"LANDKODER","navn":"IRLAND"},{"kode":"LSO","kodeverk":"LANDKODER","navn":"LESOTHO"},{"kode":"IRN","kodeverk":"LANDKODER","navn":"IRAN"},{"kode":"GLP","kodeverk":"LANDKODER","navn":"GUADELOUPE"},{"kode":"ABW","kodeverk":"LANDKODER","navn":"ARUBA"},{"kode":"BIH","kodeverk":"LANDKODER","navn":"BOSNIA-HERCEGOVINA"},{"kode":"MTQ","kodeverk":"LANDKODER","navn":"MARTINIQUE"},{"kode":"PRI","kodeverk":"LANDKODER","navn":"PUERTO RICO"},{"kode":"HMD","kodeverk":"LANDKODER","navn":"HEARD OG MCDONALD ØYENE"},{"kode":"IOT","kodeverk":"LANDKODER","navn":"BRITISK-INDISKE HAV"},{"kode":"SLB","kodeverk":"LANDKODER","navn":"SALOMONØYENE"},{"kode":"KAZ","kodeverk":"LANDKODER","navn":"KAZAKHSTAN"},{"kode":"MEX","kodeverk":"LANDKODER","navn":"MEXICO"},{"kode":"HKG","kodeverk":"LANDKODER","navn":"HONGKONG"},{"kode":"LIE","kodeverk":"LANDKODER","navn":"LIECHTENSTEIN"},{"kode":"BHS","kodeverk":"LANDKODER","navn":"BAHAMAS"},{"kode":"UKR","kodeverk":"LANDKODER","navn":"UKRAINA"},{"kode":"BES","kodeverk":"LANDKODER","navn":"BONAIRE, SINT EUSTATIUS, SABA"},{"kode":"RWA","kodeverk":"LANDKODER","navn":"RWANDA"},{"kode":"ARE","kodeverk":"LANDKODER","navn":"DE ARABISKE EMIRATER"},{"kode":"EGY","kodeverk":"LANDKODER","navn":"EGYPT"},{"kode":"SXM","kodeverk":"LANDKODER","navn":"SINT MAARTEN"},{"kode":"GRC","kodeverk":"LANDKODER","navn":"HELLAS"},{"kode":"ROU","kodeverk":"LANDKODER","navn":"ROMANIA"},{"kode":"SUR","kodeverk":"LANDKODER","navn":"SURINAM"},{"kode":"MYS","kodeverk":"LANDKODER","navn":"MALAYSIA"},{"kode":"OMN","kodeverk":"LANDKODER","navn":"OMAN"},{"kode":"LBY","kodeverk":"LANDKODER","navn":"LIBYA"},{"kode":"FRO","kodeverk":"LANDKODER","navn":"FÆRØYENE"},{"kode":"ISR","kodeverk":"LANDKODER","navn":"ISRAEL"},{"kode":"IDN","kodeverk":"LANDKODER","navn":"INDONESIA"},{"kode":"SMR","kodeverk":"LANDKODER","navn":"SAN MARINO"},{"kode":"MKD","kodeverk":"LANDKODER","navn":"MAKEDONIA"},{"kode":"SWZ","kodeverk":"LANDKODER","navn":"SWAZILAND"},{"kode":"DZA","kodeverk":"LANDKODER","navn":"ALGERIE"},{"kode":"MWI","kodeverk":"LANDKODER","navn":"MALAWI"},{"kode":"STP","kodeverk":"LANDKODER","navn":"SAO TOME OG PRINCIPE"},{"kode":"VIR","kodeverk":"LANDKODER","navn":"JOMFRUØYENE AM."},{"kode":"CPV","kodeverk":"LANDKODER","navn":"KAPP VERDE"},{"kode":"PAK","kodeverk":"LANDKODER","navn":"PAKISTAN"},{"kode":"ECU","kodeverk":"LANDKODER","navn":"ECUADOR"},{"kode":"PRT","kodeverk":"LANDKODER","navn":"PORTUGAL"},{"kode":"COD","kodeverk":"LANDKODER","navn":"KONGO, DEN DEMOKR. REPUBL"},{"kode":"MMR","kodeverk":"LANDKODER","navn":"MYANMAR (BURMA)"},{"kode":"ZAF","kodeverk":"LANDKODER","navn":"SØR-AFRIKA"},{"kode":"USA","kodeverk":"LANDKODER","navn":"USA"},{"kode":"SVN","kodeverk":"LANDKODER","navn":"SLOVENIA"},{"kode":"FSM","kodeverk":"LANDKODER","navn":"MIKRONESIAFØD."},{"kode":"GNQ","kodeverk":"LANDKODER","navn":"EKVATORIAL-GUINEA"},{"kode":"CHN","kodeverk":"LANDKODER","navn":"REPUBLIKKEN KINA"},{"kode":"HTI","kodeverk":"LANDKODER","navn":"HAITI"},{"kode":"NIC","kodeverk":"LANDKODER","navn":"NICARAGUA"},{"kode":"NAM","kodeverk":"LANDKODER","navn":"NAMIBIA"},{"kode":"SWE","kodeverk":"LANDKODER","navn":"SVERIGE"},{"kode":"BRA","kodeverk":"LANDKODER","navn":"BRASIL"},{"kode":"GMB","kodeverk":"LANDKODER","navn":"GAMBIA"},{"kode":"WLF","kodeverk":"LANDKODER","navn":"WALLIS/FUTUNAØYENE"},{"kode":"JAM","kodeverk":"LANDKODER","navn":"JAMAICA"},{"kode":"???","kodeverk":"LANDKODER","navn":"UOPPGITT/UKJENT"},{"kode":"YEM","kodeverk":"LANDKODER","navn":"JEMEN"},{"kode":"MAF","kodeverk":"LANDKODER","navn":"SAINT MARTIN"},{"kode":"NRU","kodeverk":"LANDKODER","navn":"NAURU"},{"kode":"TKL","kodeverk":"LANDKODER","navn":"TOKELAU"},{"kode":"AND","kodeverk":"LANDKODER","navn":"ANDORRA"},{"kode":"SJM","kodeverk":"LANDKODER","navn":"SVALBARD OG JAN MAYEN"},{"kode":"BEN","kodeverk":"LANDKODER","navn":"BENIN"},{"kode":"CHL","kodeverk":"LANDKODER","navn":"CHILE"},{"kode":"SCG","kodeverk":"LANDKODER","navn":"SERBIA OG MONTENEGRO"},{"kode":"KIR","kodeverk":"LANDKODER","navn":"KIRIBATI"},{"kode":"VGB","kodeverk":"LANDKODER","navn":"JOMFRUØYENE BRIT."},{"kode":"MNE","kodeverk":"LANDKODER","navn":"MONTENEGRO"},{"kode":"MLI","kodeverk":"LANDKODER","navn":"MALI"},{"kode":"REU","kodeverk":"LANDKODER","navn":"REUNION"},{"kode":"BWA","kodeverk":"LANDKODER","navn":"BOTSWANA"},{"kode":"PCN","kodeverk":"LANDKODER","navn":"PITCAIRN"},{"kode":"UMI","kodeverk":"LANDKODER","navn":"MINDRE STILLEHAVSØYER"},{"kode":"TUV","kodeverk":"LANDKODER","navn":"TUVALU"},{"kode":"LKA","kodeverk":"LANDKODER","navn":"SRI LANKA"},{"kode":"BDI","kodeverk":"LANDKODER","navn":"BURUNDI"},{"kode":"AGO","kodeverk":"LANDKODER","navn":"ANGOLA"},{"kode":"MRT","kodeverk":"LANDKODER","navn":"MAURITANIA"},{"kode":"MUS","kodeverk":"LANDKODER","navn":"MAURITIUS"},{"kode":"CYP","kodeverk":"LANDKODER","navn":"KYPROS"},{"kode":"SYC","kodeverk":"LANDKODER","navn":"SEYCHELLENE"},{"kode":"COK","kodeverk":"LANDKODER","navn":"COOKØYENE"},{"kode":"VEN","kodeverk":"LANDKODER","navn":"VENEZUELA"},{"kode":"ESH","kodeverk":"LANDKODER","navn":"VEST-SAHARA"},{"kode":"SUN","kodeverk":"LANDKODER","navn":"SOVJETUNIONEN"},{"kode":"EST","kodeverk":"LANDKODER","navn":"ESTLAND"},{"kode":"CIV","kodeverk":"LANDKODER","navn":"ELFENBEINSKYSTEN"},{"kode":"HUN","kodeverk":"LANDKODER","navn":"UNGARN"},{"kode":"MLT","kodeverk":"LANDKODER","navn":"MALTA"},{"kode":"COM","kodeverk":"LANDKODER","navn":"KOMORENE"},{"kode":"NPL","kodeverk":"LANDKODER","navn":"NEPAL"},{"kode":"CRI","kodeverk":"LANDKODER","navn":"COSTA RICA"},{"kode":"LVA","kodeverk":"LANDKODER","navn":"LATVIA"},{"kode":"GUY","kodeverk":"LANDKODER","navn":"GUYANA"},{"kode":"ALB","kodeverk":"LANDKODER","navn":"ALBANIA"},{"kode":"NLD","kodeverk":"LANDKODER","navn":"NEDERLAND"},{"kode":"AIA","kodeverk":"LANDKODER","navn":"ANGUILLA"},{"kode":"BRN","kodeverk":"LANDKODER","navn":"BRUNEI"},{"kode":"LCA","kodeverk":"LANDKODER","navn":"ST. LUCIA"},{"kode":"NOR","kodeverk":"LANDKODER","navn":"NORGE"},{"kode":"NIU","kodeverk":"LANDKODER","navn":"NIUE"},{"kode":"DOM","kodeverk":"LANDKODER","navn":"DEN DOMINIKANSKE REP"},{"kode":"GGY","kodeverk":"LANDKODER","navn":"GUERNSEY"},{"kode":"BTN","kodeverk":"LANDKODER","navn":"BHUTAN"},{"kode":"YUG","kodeverk":"LANDKODER","navn":"JUGOSLAVIA"},{"kode":"MSR","kodeverk":"LANDKODER","navn":"MONSERRAT"},{"kode":"JEY","kodeverk":"LANDKODER","navn":"JERSEY"},{"kode":"TCA","kodeverk":"LANDKODER","navn":"TURKS/CAICOSØYENE"},{"kode":"GRL","kodeverk":"LANDKODER","navn":"GRØNLAND"},{"kode":"CAN","kodeverk":"LANDKODER","navn":"CANADA"},{"kode":"TJK","kodeverk":"LANDKODER","navn":"TADZJIKISTAN"},{"kode":"LUX","kodeverk":"LANDKODER","navn":"LUXEMBOURG"},{"kode":"KHM","kodeverk":"LANDKODER","navn":"KAMBODSJA"},{"kode":"TCD","kodeverk":"LANDKODER","navn":"TSJAD"},{"kode":"FIN","kodeverk":"LANDKODER","navn":"FINLAND"},{"kode":"AUT","kodeverk":"LANDKODER","navn":"ØSTERRIKE"},{"kode":"BFA","kodeverk":"LANDKODER","navn":"BURKINA FASO"},{"kode":"CZE","kodeverk":"LANDKODER","navn":"DEN TSJEKKISKE REP."},{"kode":"XXX","kodeverk":"LANDKODER","navn":"STATSLØS"},{"kode":"CYM","kodeverk":"LANDKODER","navn":"CAYMANØYENE"},{"kode":"POL","kodeverk":"LANDKODER","navn":"POLEN"},{"kode":"VNM","kodeverk":"LANDKODER","navn":"VIETNAM"},{"kode":"BRB","kodeverk":"LANDKODER","navn":"BARBADOS"},{"kode":"SVK","kodeverk":"LANDKODER","navn":"SLOVAKIA"},{"kode":"AUS","kodeverk":"LANDKODER","navn":"AUSTRALIA"},{"kode":"PRY","kodeverk":"LANDKODER","navn":"PARAGUAY"},{"kode":"ATG","kodeverk":"LANDKODER","navn":"ANTIGUA OG BARBUDA"},{"kode":"TKM","kodeverk":"LANDKODER","navn":"TURKMENISTAN"},{"kode":"LTU","kodeverk":"LANDKODER","navn":"LITAUEN"},{"kode":"SAU","kodeverk":"LANDKODER","navn":"SAUDI-ARABIA"},{"kode":"CAF","kodeverk":"LANDKODER","navn":"SENTRALAFRIKA. REP."},{"kode":"TON","kodeverk":"LANDKODER","navn":"TONGA"},{"kode":"CMR","kodeverk":"LANDKODER","navn":"KAMERUN"},{"kode":"SDN","kodeverk":"LANDKODER","navn":"SUDAN"},{"kode":"PAN","kodeverk":"LANDKODER","navn":"PANAMA"},{"kode":"LAO","kodeverk":"LANDKODER","navn":"LAOS"},{"kode":"JOR","kodeverk":"LANDKODER","navn":"JORDAN"},{"kode":"MAC","kodeverk":"LANDKODER","navn":"MACAO"},{"kode":"GIB","kodeverk":"LANDKODER","navn":"GIBRALTAR"},{"kode":"XUK","kodeverk":"LANDKODER","navn":"UKJENT"},{"kode":"MNG","kodeverk":"LANDKODER","navn":"MONGOLIA"},{"kode":"TUN","kodeverk":"LANDKODER","navn":"TUNISIA"},{"kode":"UZB","kodeverk":"LANDKODER","navn":"UZBEKISTAN"},{"kode":"KWT","kodeverk":"LANDKODER","navn":"KUWAIT"},{"kode":"ERI","kodeverk":"LANDKODER","navn":"ERITREA"},{"kode":"TGO","kodeverk":"LANDKODER","navn":"TOGO"},{"kode":"VUT","kodeverk":"LANDKODER","navn":"VANUATU"},{"kode":"GIN","kodeverk":"LANDKODER","navn":"GUINEA"},{"kode":"SOM","kodeverk":"LANDKODER","navn":"SOMALIA"},{"kode":"KOR","kodeverk":"LANDKODER","navn":"SØR-KOREA"},{"kode":"PHL","kodeverk":"LANDKODER","navn":"FILIPPINENE"},{"kode":"BHR","kodeverk":"LANDKODER","navn":"BAHRAIN"},{"kode":"DJI","kodeverk":"LANDKODER","navn":"DJIBOUTI"},{"kode":"ESP","kodeverk":"LANDKODER","navn":"SPANIA"},{"kode":"GTM","kodeverk":"LANDKODER","navn":"GUATEMALA"},{"kode":"GAB","kodeverk":"LANDKODER","navn":"GABON"},{"kode":"KNA","kodeverk":"LANDKODER","navn":"ST. KITTS OG NEVIS"},{"kode":"AFG","kodeverk":"LANDKODER","navn":"AFGHANISTAN"},{"kode":"MDA","kodeverk":"LANDKODER","navn":"MOLDOVA"},{"kode":"PER","kodeverk":"LANDKODER","navn":"PERU"},{"kode":"ZMB","kodeverk":"LANDKODER","navn":"ZAMBIA"},{"kode":"QAT","kodeverk":"LANDKODER","navn":"QATAR"},{"kode":"LBR","kodeverk":"LANDKODER","navn":"LIBERIA"},{"kode":"CUW","kodeverk":"LANDKODER","navn":"CURACAO"},{"kode":"BLM","kodeverk":"LANDKODER","navn":"SAINT BARTHELEMY"},{"kode":"BLZ","kodeverk":"LANDKODER","navn":"BELIZE"},{"kode":"TZA","kodeverk":"LANDKODER","navn":"TANZANIA"},{"kode":"ISL","kodeverk":"LANDKODER","navn":"ISLAND"},{"kode":"TLS","kodeverk":"LANDKODER","navn":"ØST-TIMOR"},{"kode":"GRD","kodeverk":"LANDKODER","navn":"GRENADA"},{"kode":"ARG","kodeverk":"LANDKODER","navn":"ARGENTINA"},{"kode":"COG","kodeverk":"LANDKODER","navn":"KONGO, REPUBLIKKEN"},{"kode":"MOZ","kodeverk":"LANDKODER","navn":"MOSAMBIK"},{"kode":"SEN","kodeverk":"LANDKODER","navn":"SENEGAL"},{"kode":"BGD","kodeverk":"LANDKODER","navn":"BANGLADESH"},{"kode":"IRQ","kodeverk":"LANDKODER","navn":"IRAK"},{"kode":"SLV","kodeverk":"LANDKODER","navn":"EL SALVADOR"},{"kode":"TUR","kodeverk":"LANDKODER","navn":"TYRKIA"},{"kode":"DDR","kodeverk":"LANDKODER","navn":"TYSKLAND (ØST)"},{"kode":"LBN","kodeverk":"LANDKODER","navn":"LIBANON"},{"kode":"GBR","kodeverk":"LANDKODER","navn":"STORBRITANNIA"},{"kode":"COL","kodeverk":"LANDKODER","navn":"COLOMBIA"},{"kode":"CXR","kodeverk":"LANDKODER","navn":"CHRISTMASØYA"},{"kode":"PNG","kodeverk":"LANDKODER","navn":"PAPUA NY-GUINEA"},{"kode":"NFK","kodeverk":"LANDKODER","navn":"NORFOLKØYA"},{"kode":"HND","kodeverk":"LANDKODER","navn":"HONDURAS"},{"kode":"BOL","kodeverk":"LANDKODER","navn":"BOLIVIA"},{"kode":"RUS","kodeverk":"LANDKODER","navn":"RUSSLAND"},{"kode":"DMA","kodeverk":"LANDKODER","navn":"DOMINICA"},{"kode":"AZE","kodeverk":"LANDKODER","navn":"AZERBAJDZJAN"},{"kode":"BLR","kodeverk":"LANDKODER","navn":"HVITERUSSLAND"},{"kode":"CCK","kodeverk":"LANDKODER","navn":"KOKOSØYENE"},{"kode":"GEO","kodeverk":"LANDKODER","navn":"GEORGIA"},{"kode":"GUM","kodeverk":"LANDKODER","navn":"GUAM"},{"kode":"JPN","kodeverk":"LANDKODER","navn":"JAPAN"},{"kode":"FRA","kodeverk":"LANDKODER","navn":"FRANKRIKE"},{"kode":"KEN","kodeverk":"LANDKODER","navn":"KENYA"},{"kode":"MAR","kodeverk":"LANDKODER","navn":"MAROKKO"}]'),lc=[{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"}],dc=[{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"},{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"}],uc=[{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"},{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"}],gc=[{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet"},{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Opphørt"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt (f.reg)"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Ikke bosatt (f.reg)"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utflyttet"}],mc=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"}],kc=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"ANPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Annen part fra søknad"},{kode:"EKTE",kodeverk:"RELASJONSROLLE_TYPE",navn:"Ektefelle"},{kode:"REPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Registrert partner"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"BARN",kodeverk:"RELASJONSROLLE_TYPE",navn:"Barn"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],fc=[{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],vc=[{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"},{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"}],cc=[{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"}],Ec=[{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"}],pc=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],yc=[{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],bc=[{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"}],Ac=[{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],hc=[{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"},{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"}],Tc=[{kode:"VUR_KONSEKVENS",kodeverk:"OPPGAVE_TYPE",navn:"Vurder konsekvens for ytelse"},{kode:"VUR_DOKUMENT",kodeverk:"OPPGAVE_TYPE",navn:"Vurder dokument"}],Rc={UttakUtsettelseType:Vv,FagsakYtelseType:qv,StønadskontoType:[{kode:"TETTE_SAKER_MOR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler mor"},{kode:"TILLEGG_PREMATUR",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved prematur fødsel"},{kode:"BARE_FAR_RETT",kodeverk:"STOENADSKONTOTYPE",navn:"Bare far har rett"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"UFØREDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Uføredager"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"TILLEGG_FLERBARN",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved flerbarnstilfelle"},{kode:"FAR_RUNDT_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Fars uttak ifm fødsel"},{kode:"TETTE_SAKER_FAR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler far/medmor"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"}],FagsakStatus:xv,Venteårsak:[{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_UTLAND_TRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på utenlandsk trygdemyndighet"},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga. for tidlig søknad"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev, og venter på søknad."},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdsID som stemmer med Aa-reg"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_BRUKERTILBAKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på tilbakemelding fra bruker"},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_LOVENDRING_8_41",kodeverk:"VENT_AARSAK",navn:"Venter på vedtak om lovendring vedrørende beregning av næring i kombinasjon med arbeid eller frilans"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på skanning"},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"}],BehandlingÅrsakType:[{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"KLAGE_TILBAKE",kodeverk:"BEHANDLING_AARSAK",navn:"Tilbakebetaling"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om opptjening"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Ny søknad"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om søknadsfrist"},{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Ny inntektsmelding"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om medlemskap"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"FEIL_PRAKSIS_UTSETTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Feil praksis utsettelse"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"FEIL_PRAKSIS_IVERKS_UTSET",kodeverk:"BEHANDLING_AARSAK",navn:"Feil iverksettelse fri utsettelse"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om inntekt"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om beregning"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. for uke 26-29"},{kode:"ENDRE-DEKNINGSGRAD",kodeverk:"BEHANDLING_AARSAK",navn:"Endre dekningsgrad"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"}],GraderingAvslagÅrsak:[{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'}],AktivitetStatus:Gv,RevurderingVarslingÅrsak:[{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utflyttet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:Bv,KonsekvensForYtelsen:Uv,AktivitetskravPermisjonType:Hv,AdresseType:Cv,SivilstandType:Yv,Inntektskategori:$v,SkjermlenkeType:Wv,FaktaOmBeregningTilfelle:Jv,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:zv,KlageAvvistÅrsak:[{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ugyldig",lovHjemmel:null},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'}],BehandlingResultatType:Xv,VergeType:Zv,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"}],FamilieHendelseType:Qv,KlageHjemmel:ec,VilkårType:[{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_2_F",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"}],FarSøkerType:[{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"}],FaresignalVurdering:nc,ArbeidType:rc,KlageMedholdÅrsak:[{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"}],Region:tc,OmsorgsovertakelseVilkårType:[{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"},{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"}],FordelingPeriodeKilde:ac,FagsakMarkering:sc,Arbeidskategori:ic,VurderÅrsak:[{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"},{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"SAKSFLYT",kodeverk:"VURDER_AARSAK",navn:"Saksflyt"},{kode:"BEGRUNNELSE",kodeverk:"VURDER_AARSAK",navn:"Begrunnelse"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"}],Landkoder:oc,BehandlingType:lc,InnsynResultatType:dc,MedlemskapType:uc,PersonstatusType:gc,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"FRI",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"}],BehandlingStatus:mc,RelasjonsRolleType:kc,VirksomhetType:fc,MedlemskapDekningType:vc,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"}],Avslagsårsak:JSON.parse('{"FP_VK_3":[{"kode":"1007","kodeverk":"AVSLAGSARSAK","navn":"Søkt for sent","lovHjemmel":null}],"FP_VK_4":[{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1006","kodeverk":"AVSLAGSARSAK","navn":"Mann adopterer ikke alene","lovHjemmel":null},{"kode":"1005","kodeverk":"AVSLAGSARSAK","navn":"Ektefelles/samboers barn","lovHjemmel":null},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"}],"FP_VK_1":[{"kode":"1002","kodeverk":"AVSLAGSARSAK","navn":"Søker er medmor","lovHjemmel":null},{"kode":"1003","kodeverk":"AVSLAGSARSAK","navn":"Søker er far","lovHjemmel":null},{"kode":"1001","kodeverk":"AVSLAGSARSAK","navn":"Søkt for tidlig","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1026","kodeverk":"AVSLAGSARSAK","navn":"Fødselsdato ikke oppgitt eller registrert","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1031","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}"}],"FP_VK_2":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utflyttet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"-":[],"FP_VK_41":[{"kode":"1041","kodeverk":"AVSLAGSARSAK","navn":"For lavt brutto beregningsgrunnlag","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_41\\", \\"lovreferanse\\": \\"14-7\\"}]}]}"}],"FP_VK_21":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_11":[{"kode":"1027","kodeverk":"AVSLAGSARSAK","navn":"Ingen barn dokumentert på far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1029","kodeverk":"AVSLAGSARSAK","navn":"Bruker er ikke registrert som far/medmor til barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1028","kodeverk":"AVSLAGSARSAK","navn":"Mor fyller ikke vilkåret for sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_2_F":[{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utflyttet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1052","kodeverk":"AVSLAGSARSAK","navn":"Innflyttet mindre enn 12 måneder før termin/omsorgsovertakelse","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK_2_F\\", \\"lovreferanse\\": \\"14-17 5. ledd\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"FP_VK_33":[{"kode":"1017","kodeverk":"AVSLAGSARSAK","navn":"Omsorgsovertakelse etter 56 uker","lovHjemmel":null},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1018","kodeverk":"AVSLAGSARSAK","navn":"Ikke foreldreansvar alene etter barnelova","lovHjemmel":null},{"kode":"1016","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null}],"FP_VK_34":[{"kode":"1019","kodeverk":"AVSLAGSARSAK","navn":"Manglende dokumentasjon","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_34\\", \\"lovreferanse\\": \\"21-3\\"}]}]}"}],"FP_VK_23":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_8":[{"kode":"1014","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke foreldreansvar","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1015","kodeverk":"AVSLAGSARSAK","navn":"Søker har hatt vanlig samvær med barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1013","kodeverk":"AVSLAGSARSAK","navn":"Barn ikke under 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"SVP_VK_1":[{"kode":"1061","kodeverk":"AVSLAGSARSAK","navn":"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 3. ledd\\"}]}]}"},{"kode":"1062","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker har mottatt sykepenger","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1060","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker er ikke gravid kvinne","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1064","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1065","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"},{"kode":"1063","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1066","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"}],"FP_VK_16":[{"kode":"1051","kodeverk":"AVSLAGSARSAK","navn":"Stebarnsadopsjon ikke flere dager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_5":[{"kode":"1012","kodeverk":"AVSLAGSARSAK","navn":"Far har ikke omsorg for barnet","lovHjemmel":null},{"kode":"1008","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1009","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død","lovHjemmel":null},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1010","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død ved fødsel/omsorg","lovHjemmel":null}],"FP_VK_2_L":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utflyttet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}]}'),OpptjeningAktivitetType:cc,PermisjonsbeskrivelseType:Ec,AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"}],OppholdstillatelseType:pc,MedlemskapManuellVurderingType:yc,ManuellBehandlingÅrsak:[{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5032",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder utbetalingsgrad og trekkdager når mor er i delvis arbeid (under 75% arbeidsprosent)"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"}],MorsAktivitet:bc,NaturalYtelseType:Ac,PeriodeResultatÅrsak:JSON.parse('[{"kode":"4005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjuende ledd: Ikke sammenhengende perioder","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ferie/arbeid innenfor de første 6 ukene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4056","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4076","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4103","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"2030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4116","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4063","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4054","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4040","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4041","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2016","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4112","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Barnets innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4053","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4069","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2015","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-09-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4110","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"2010","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-13: Innvilget fellesperiode til far","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9,14-13\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4055","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2004","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2006","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger før fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2011","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Mor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"2033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13,14-16\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4088","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4100","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 andre ledd: Uttak før omsorgsovertakelse","lovHjemmel":"","sortering":"14-10-2","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4097","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Adopsjonsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4074","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,21-3\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4117","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4092","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Avslag overføring - har ikke aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ikke stønadsdager igjen på stønadskonto","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4086","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-11\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4075","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4098","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Foreldreansvarsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2024","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4106","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4085","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Det er ikke samtykke mellom partene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2028","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4060","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Innvilget fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4095","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["MOR"]},{"kode":"2027","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4105","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4062","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"2031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12, jf. §14-16: Gradering av kvote/overført kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4051","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4058","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2018","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4059","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13, 14-9\\"}}}","sortering":"14-13-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2026","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"2036","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4111","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Barnet er over 3 år","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4102","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§22-13 tredje ledd: Brudd på søknadsfrist","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"22-13\\"}}}","sortering":"22-13-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4068","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2019","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4082","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4050","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Far/medmor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Innvilget uttak av kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-16\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4073","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4008","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4072","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjuende ledd: Barnet er dødt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4070","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Avslag utsettelse før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4057","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4052","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4081","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2017","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4064","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15: Innvilget foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4077","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10 a\\"}}}","sortering":"14-10-0-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ikke lovbestemt ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-9\\"}}}","sortering":"14-11-0","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4093","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16: Avslag gradering - søker er ikke i arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4089","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4066","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4115","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"2014","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4104","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Stønadsperiode for nytt barn","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4065","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4087","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-2: Opphør medlemskap","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-2\\"}}}","sortering":"14-02","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Ikke heltidsarbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4099","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-6: Opptjeningsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-6\\"}}}","sortering":"14-06","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4061","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4067","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2021","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4071","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Bruker er død","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4107","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4096","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Fødselsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4084","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]}]'),ForeldreType:hc,OppgaveType:Tc},Nc=()=>(...e)=>(ur("button-click")(...e),Promise.resolve()),Ic={uuid:"1223-2323-2323-22332",versjon:1,språkkode:"NB",type:ku.FORSTEGANGSSOKNAD,status:mu.BEHANDLING_UTREDES,behandlingPåVent:!1,behandlingHenlagt:!1},_c={saksnummer:"1234567",fagsakYtelseType:fu.FORELDREPENGER,bruker:{navn:"Kari Nordmann"},annenPart:{navn:"Ola Nordmann"},relasjonsRolleType:Ks.MOR,annenpartBehandling:{relasjonsRolleType:Ks.FAR}},Sc=[],Yu=(e,t)=>{const{fagsak:r,behandling:n,aksjonspunkterForPanel:a,isReadOnly:s,submitCallback:i,alleMerknaderFraBeslutter:o}=t.args,l=a??Sc;return p.jsx(Hu,{fagsak:r??_c,behandling:n??Ic,aksjonspunkterForPanel:l,harÅpneAksjonspunkter:l.some(u=>u.status===We.OPPRETTET),alleKodeverk:Rc,alleMerknaderFraBeslutter:o??{},isReadOnly:s??!1,submitCallback:i??Nc(),children:p.jsx(e,{})})};Yu.__docgenInfo={description:"",methods:[],displayName:"withPanelData"};var $e=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))($e||{});function $u(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=$u(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function vr(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=$u(e))&&(n&&(n+=" "),n+=t);return n}function pi(e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}function rt(...e){return b.useCallback(pi(e),e)}function Oc(e,t){const r=Object.assign({},t);for(const n in t){const a=e[n],s=t[n];/^on[A-Z]/.test(n)?a&&s?r[n]=(...o)=>{s(...o),a(...o)}:a&&(r[n]=a):n==="style"?r[n]=Object.assign(Object.assign({},a),s):n==="className"&&(r[n]=[a,s].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),r)}var Dc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const cr=f.forwardRef((e,t)=>{var r;const{children:n}=e,a=Dc(e,["children"]);if(f.isValidElement(n)){const s=Object.prototype.propertyIsEnumerable.call(n.props,"ref")?n.props.ref:n.ref;return f.cloneElement(n,Object.assign(Object.assign({},Oc(a,n.props)),{ref:t?pi([t,s]):s}))}if(f.Children.count(n)>1){const s=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw s.name="SlotError",(r=Error.captureStackTrace)===null||r===void 0||r.call(Error,s,cr),s}return null});var Pc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function Lc(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function tt(e={}){const{name:t,hookName:r="useContext",providerName:n="Provider",errorMessage:a,defaultValue:s}=e,i=f.createContext(s),o=f.forwardRef((u,d)=>{var{children:g}=u,k=Pc(u,["children"]);const m=b.useMemo(()=>k,Object.values(k));return b.createElement(i.Provider,{value:d?Object.assign(Object.assign({},m),{ref:d}):m},g)});function l(u=!0){var d;const g=f.useContext(i);if(!g&&u){const k=new Error(a??Lc(r,n));throw k.name="ContextError",(d=Error.captureStackTrace)===null||d===void 0||d.call(Error,k,l),k}return g}return i.displayName=t,[o,l]}const[wc,ae]=tt({hookName:"useRenameCSS",name:"RenameCSS",providerName:"RenameCSSProvider",defaultValue:{cn:vr}}),jc=(...e)=>vr(e).replace(/^navds-/g,"aksel-").replace(/\snavds-/g," aksel-").trim(),Mc=({children:e})=>b.createElement(wc,{cn:jc},e),[Kc,Lt]=tt({hookName:"useTheme",name:"ThemeProvider",providerName:"ThemeProvider"}),Fc=f.forwardRef((e,t)=>{const r=Lt(!1),{children:n,className:a,asChild:s=!1,theme:i=r==null?void 0:r.theme,hasBackground:o=!0}=e,u=o??(r===void 0&&e.theme!==void 0),d=s?cr:"div";return b.createElement(Kc,{theme:i},b.createElement(Mc,null,b.createElement(d,{ref:t,className:vr("aksel-theme",a,i),"data-background":u},n)))}),at=e=>vr({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Vc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Wu=f.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,g=Vc(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=ae();return b.createElement(a,Object.assign({},g,{ref:t,className:k(r,"navds-body-long",`navds-body-long--${n}`,at({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var qc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ie=f.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,g=qc(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=ae();return b.createElement(a,Object.assign({},g,{ref:t,className:k(r,"navds-body-short",`navds-body-short--${n}`,at({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var xc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const zr=f.forwardRef((e,t)=>{var{className:r,size:n="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:g}=e,k=xc(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:m}=ae();return b.createElement(i,Object.assign({},k,{ref:t,className:m(r,"navds-detail",at({spacing:a,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:g,uppercase:s}),{"navds-detail--small":n==="small"})}))});var Gc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const wt=f.forwardRef((e,t)=>{var{children:r,className:n,size:a,spacing:s,as:i="p",showIcon:o=!1}=e,l=Gc(e,["children","className","size","spacing","as","showIcon"]);const{cn:u}=ae();return b.createElement(i,Object.assign({},l,{ref:t,className:u("navds-error-message","navds-label",n,at({spacing:s}),{"navds-label--small":a==="small","navds-error-message--show-icon":o})}),o&&b.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},b.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var Bc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ca=f.forwardRef((e,t)=>{var{level:r="1",size:n,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:u}=e,d=Bc(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:g}=ae(),k=s??`h${r}`;return b.createElement(k,Object.assign({},d,{ref:t,className:g(a,"navds-heading",`navds-heading--${n}`,at({spacing:i,align:o,visuallyHidden:l,textColor:u}))}))});var Uc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};f.forwardRef((e,t)=>{var{className:r,spacing:n,as:a="p"}=e,s=Uc(e,["className","spacing","as"]);const{cn:i}=ae();return b.createElement(a,Object.assign({},s,{ref:t,className:i(r,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Hc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Oe=f.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=Hc(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:u}=ae();return b.createElement(a,Object.assign({},l,{ref:t,className:u(r,"navds-label",at({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":n==="small"})}))});function Ju(e,t=166,r=!1){let n;function a(...s){const i=()=>{n=void 0,e.apply(this,s)};!n&&r&&i(),clearTimeout(n),n=setTimeout(i,t)}return a.clear=()=>{clearTimeout(n)},a}function ln(e,t){const r=Object.entries(e).filter(([n])=>!t.includes(n));return Object.fromEntries(r)}const Xr=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{};let Po=0;function Cc(e){const[t,r]=f.useState(e),n=e||t;return f.useEffect(()=>{t==null&&(Po+=1,r(`aksel-id-${Po}`))},[t]),n}const Lo=b.useId;function On(e){var t;if(Lo!==void 0){const r=Lo();return e??r.replace(/(:)/g,"")}return(t=Cc(e))!==null&&t!==void 0?t:""}function ht(e,t=[]){const r=f.useRef(e);return f.useEffect(()=>{r.current=e}),f.useCallback((...n)=>{var a;return(a=r.current)===null||a===void 0?void 0:a.call(r,...n)},t)}function Tt({value:e,defaultValue:t,onChange:r}){const n=ht(r),[a,s]=f.useState(t),i=e!==void 0,o=i?e:a,l=ht(u=>{const g=typeof u=="function"?u(o):u;i||s(g),n(g)},[i,n,o]);return[o,l]}let wo=0;function Yc(e){const[t,r]=f.useState(e),n=e||t;return f.useEffect(()=>{t==null&&(wo+=1,r(`aksel-icon-${wo}`))},[t]),n}const jo=b.useId;function Me(e){var t;return jo!==void 0?jo().replace(/(:)/g,""):(t=Yc(e))!==null&&t!==void 0?t:""}var $c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Wc=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=$c(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var Jc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const zc=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Jc(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var Xc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Zc=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Xc(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var Qc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const eE=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Qc(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var nE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const rE=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=nE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var tE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const aE=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=tE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var sE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ya=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=sE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var iE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const zu=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=iE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var oE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const yi=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=oE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var lE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const dE=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=lE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var uE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const gE=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=uE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var mE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const kE=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=mE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.6 3.068c-1.28-.487-2.1-1.686-2.1-3.068a3.257 3.257 0 0 1 3.276-3.264 3.26 3.26 0 0 1 3.271 3.264c0 1.353-.83 2.554-2.559 3.242a.75.75 0 0 0-.472.697v1.235a.75.75 0 0 0 .212.523l1.482 1.522-1.215 1.991a.75.75 0 0 0 .123.934l.592.564-1.982 2.214-.145-.132v-9.021a.75.75 0 0 0-.483-.701m-.327-3.13a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var fE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const vE=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=fE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.273-.063a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var cE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Xu=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=cE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var EE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const pE=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=EE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var yE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const bE=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=yE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var AE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const hE=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=AE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var TE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Zu=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=TE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var RE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const NE=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=RE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var IE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const _E=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=IE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var SE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const OE=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=SE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var DE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Qu=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=DE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var PE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const LE=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=PE(e,["title","titleId"]);let s=Me();return s=r?n||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Hr(e,t,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e==null||e(a),r===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}const[wE,jt]=tt({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),jE=typeof window<"u"&&window.matchMedia===void 0,ME=(e,t)=>{const[r,n]=f.useState(t);return f.useEffect(()=>{if(jE)return;const a=window.matchMedia(e);n(a.matches);const s=i=>{n(i.matches)};return a.addEventListener("change",s),()=>{a.removeEventListener("change",s)}},[e]),r};function bn(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function sn(e){return(t,r)=>{const n=r!=null&&r.context?String(r.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,o=r!=null&&r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{const i=e.defaultWidth,o=r!=null&&r.width?String(r.width):e.defaultWidth;a=e.values[o]||e.values[i]}const s=e.argumentCallback?e.argumentCallback(t):t;return a[s]}}function on(e){return(t,r={})=>{const n=r.width,a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=t.match(a);if(!s)return null;const i=s[0],o=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?FE(o,g=>g.test(i)):KE(o,g=>g.test(i));let u;u=e.valueCallback?e.valueCallback(l):l,u=r.valueCallback?r.valueCallback(u):u;const d=t.slice(i.length);return{value:u,rest:d}}}function KE(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function FE(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function bi(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const a=n[0],s=t.match(e.parsePattern);if(!s)return null;let i=e.valueCallback?e.valueCallback(s[0]):s[0];i=r.valueCallback?r.valueCallback(i):i;const o=t.slice(a.length);return{value:i,rest:o}}}const eg=6048e5,VE=864e5,qE=6e4,xE=36e5,GE=1e3,Mo=Symbol.for("constructDateFrom");function Ae(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Mo in e?e[Mo](t):e instanceof Date?new e.constructor(t):new Date(t)}function st(e,...t){const r=Ae.bind(null,t.find(n=>typeof n=="object"));return t.map(r)}let BE={};function Mr(){return BE}function de(e,t){return Ae(t||e,e)}function nr(e,t){var o,l,u,d;const r=Mr(),n=(t==null?void 0:t.weekStartsOn)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??r.weekStartsOn??((d=(u=r.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,a=de(e,t==null?void 0:t.in),s=a.getDay(),i=(s<n?7:0)+s-n;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}const UE={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ng=(e,t,r)=>{let n;const a=UE[e];return typeof a=="string"?n=a:t===1?n=a.one:n=a.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n},HE={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},rg=(e,t,r,n)=>HE[e],CE={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},YE={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},$E={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},WE={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},JE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},zE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},XE=(e,t)=>{const r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},tg={ordinalNumber:XE,era:sn({values:CE,defaultWidth:"wide"}),quarter:sn({values:YE,defaultWidth:"wide",argumentCallback:e=>e-1}),month:sn({values:$E,defaultWidth:"wide"}),day:sn({values:WE,defaultWidth:"wide"}),dayPeriod:sn({values:JE,defaultWidth:"wide",formattingValues:zE,defaultFormattingWidth:"wide"})},ZE=/^(\d+)(th|st|nd|rd)?/i,QE=/\d+/i,ep={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},np={any:[/^b/i,/^(a|c)/i]},rp={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},tp={any:[/1/i,/2/i,/3/i,/4/i]},ap={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},sp={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ip={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},op={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},lp={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},dp={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ag={ordinalNumber:bi({matchPattern:ZE,parsePattern:QE,valueCallback:e=>parseInt(e,10)}),era:on({matchPatterns:ep,defaultMatchWidth:"wide",parsePatterns:np,defaultParseWidth:"any"}),quarter:on({matchPatterns:rp,defaultMatchWidth:"wide",parsePatterns:tp,defaultParseWidth:"any",valueCallback:e=>e+1}),month:on({matchPatterns:ap,defaultMatchWidth:"wide",parsePatterns:sp,defaultParseWidth:"any"}),day:on({matchPatterns:ip,defaultMatchWidth:"wide",parsePatterns:op,defaultParseWidth:"any"}),dayPeriod:on({matchPatterns:lp,defaultMatchWidth:"any",parsePatterns:dp,defaultParseWidth:"any"})},up={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},gp={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},mp={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},kp={date:bn({formats:up,defaultWidth:"full"}),time:bn({formats:gp,defaultWidth:"full"}),dateTime:bn({formats:mp,defaultWidth:"full"})},sg={code:"en-GB",formatDistance:ng,formatLong:kp,formatRelative:rg,localize:tg,match:ag,options:{weekStartsOn:1,firstWeekContainsDate:4}},fp={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},vp={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},cp={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ep={date:bn({formats:fp,defaultWidth:"full"}),time:bn({formats:vp,defaultWidth:"full"}),dateTime:bn({formats:cp,defaultWidth:"full"})},$a={code:"en-US",formatDistance:ng,formatLong:Ep,formatRelative:rg,localize:tg,match:ag,options:{weekStartsOn:0,firstWeekContainsDate:1}},pp={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},yp=(e,t,r)=>{let n;const a=pp[e];return typeof a=="string"?n=a:t===1?n=a.one:n=a.other.replace("{{count}}",String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" siden":n},bp={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Ap={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},hp={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Tp={date:bn({formats:bp,defaultWidth:"full"}),time:bn({formats:Ap,defaultWidth:"full"}),dateTime:bn({formats:hp,defaultWidth:"full"})},Rp={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Np=(e,t,r,n)=>Rp[e],Ip={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},_p={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Sp={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Op={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Dp={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Pp=(e,t)=>Number(e)+".",Lp={ordinalNumber:Pp,era:sn({values:Ip,defaultWidth:"wide"}),quarter:sn({values:_p,defaultWidth:"wide",argumentCallback:e=>e-1}),month:sn({values:Sp,defaultWidth:"wide"}),day:sn({values:Op,defaultWidth:"wide"}),dayPeriod:sn({values:Dp,defaultWidth:"wide"})},wp=/^(\d+)\.?/i,jp=/\d+/i,Mp={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Kp={any:[/^f/i,/^e/i]},Fp={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Vp={any:[/1/i,/2/i,/3/i,/4/i]},qp={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},xp={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Gp={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Bp={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Up={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Hp={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Cp={ordinalNumber:bi({matchPattern:wp,parsePattern:jp,valueCallback:e=>parseInt(e,10)}),era:on({matchPatterns:Mp,defaultMatchWidth:"wide",parsePatterns:Kp,defaultParseWidth:"any"}),quarter:on({matchPatterns:Fp,defaultMatchWidth:"wide",parsePatterns:Vp,defaultParseWidth:"any",valueCallback:e=>e+1}),month:on({matchPatterns:qp,defaultMatchWidth:"wide",parsePatterns:xp,defaultParseWidth:"any"}),day:on({matchPatterns:Gp,defaultMatchWidth:"wide",parsePatterns:Bp,defaultParseWidth:"any"}),dayPeriod:on({matchPatterns:Up,defaultMatchWidth:"any",parsePatterns:Hp,defaultParseWidth:"any"})},ig={code:"nb",formatDistance:yp,formatLong:Tp,formatRelative:Np,localize:Lp,match:Cp,options:{weekStartsOn:1,firstWeekContainsDate:4}},Yp={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},$p=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],Wp=(e,t,r)=>{let n;const a=Yp[e];return typeof a=="string"?n=a:t===1?n=a.one:n=a.other.replace("{{count}}",t<13?$p[t]:String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" sidan":n},Jp={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},zp={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Xp={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Zp={date:bn({formats:Jp,defaultWidth:"full"}),time:bn({formats:zp,defaultWidth:"full"}),dateTime:bn({formats:Xp,defaultWidth:"full"})},Qp={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},ey=(e,t,r,n)=>Qp[e],ny={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},ry={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},ty={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},ay={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},sy={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},iy=(e,t)=>Number(e)+".",oy={ordinalNumber:iy,era:sn({values:ny,defaultWidth:"wide"}),quarter:sn({values:ry,defaultWidth:"wide",argumentCallback:e=>e-1}),month:sn({values:ty,defaultWidth:"wide"}),day:sn({values:ay,defaultWidth:"wide"}),dayPeriod:sn({values:sy,defaultWidth:"wide"})},ly=/^(\d+)\.?/i,dy=/\d+/i,uy={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},gy={any:[/^f/i,/^e/i]},my={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},ky={any:[/1/i,/2/i,/3/i,/4/i]},fy={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},vy={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},cy={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},Ey={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},py={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},yy={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},by={ordinalNumber:bi({matchPattern:ly,parsePattern:dy,valueCallback:e=>parseInt(e,10)}),era:on({matchPatterns:uy,defaultMatchWidth:"wide",parsePatterns:gy,defaultParseWidth:"any"}),quarter:on({matchPatterns:my,defaultMatchWidth:"wide",parsePatterns:ky,defaultParseWidth:"any",valueCallback:e=>e+1}),month:on({matchPatterns:fy,defaultMatchWidth:"wide",parsePatterns:vy,defaultParseWidth:"any"}),day:on({matchPatterns:cy,defaultMatchWidth:"wide",parsePatterns:Ey,defaultParseWidth:"any"}),dayPeriod:on({matchPatterns:py,defaultMatchWidth:"any",parsePatterns:yy,defaultParseWidth:"any"})},og={code:"nn",formatDistance:Wp,formatLong:Zp,formatRelative:ey,localize:oy,match:by,options:{weekStartsOn:1,firstWeekContainsDate:4}},Ay={global:{dateLocale:ig,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},hy=f.createContext({locale:Ay}),Wa=()=>f.useContext(hy);var Ty=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ry=f.forwardRef((e,t)=>{var r,n,a,{rootElement:s,asChild:i}=e,o=Ty(e,["rootElement","asChild"]);const l=Lt(!1),u=(r=Wa())===null||r===void 0?void 0:r.rootElement,d=(n=s??u)!==null&&n!==void 0?n:(a=globalThis==null?void 0:globalThis.document)===null||a===void 0?void 0:a.body,g=i?cr:"div";return l?d?Ia.createPortal(b.createElement(Fc,{theme:l.theme,asChild:!0,hasBackground:!1},b.createElement(g,Object.assign({ref:t,"data-aksel-portal":""},o))),d):null:d?Ia.createPortal(b.createElement(g,Object.assign({ref:t,"data-aksel-portal":""},o)),d):null});function Ko(e){return e.sort((t,r)=>{const n=t.compareDocumentPosition(r);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const Ny=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Fo(e,t,r){let n=e+1;return r&&n>=t&&(n=0),n}function Vo(e,t,r){let n=e-1;return r&&n<0&&(n=t),n}const ps=e=>e;class Iy{constructor(){this.descendants=new Map,this.register=t=>{if(t!=null)return Ny(t)?this.registerNode(t):r=>{this.registerNode(r,t)}},this.unregister=t=>{this.descendants.delete(t);const r=Ko(Array.from(this.descendants.keys()));this.assignIndex(r)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=t=>{this.descendants.forEach(r=>{const n=t.indexOf(r.node);r.index=n,r.node.dataset.index=r.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((r,n)=>r.index-n.index),this.enabledValues=()=>this.values().filter(t=>!t.disabled),this.item=t=>{if(this.count()!==0)return this.values()[t]},this.enabledItem=t=>{if(this.enabledCount()!==0)return this.enabledValues()[t]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const t=this.enabledValues().length-1;return this.enabledItem(t)},this.indexOf=t=>{var r,n;return t&&(n=(r=this.descendants.get(t))===null||r===void 0?void 0:r.index)!==null&&n!==void 0?n:-1},this.enabledIndexOf=t=>t==null?-1:this.enabledValues().findIndex(r=>r.node.isSameNode(t)),this.next=(t,r=!0)=>{const n=Fo(t,this.count(),r);return this.item(n)},this.nextEnabled=(t,r=!0)=>{const n=this.item(t);if(!n)return;const a=this.enabledIndexOf(n.node),s=Fo(a,this.enabledCount(),r);return this.enabledItem(s)},this.prev=(t,r=!0)=>{const n=Vo(t,this.count()-1,r);return this.item(n)},this.prevEnabled=(t,r=!0)=>{const n=this.item(t);if(!n)return;const a=this.enabledIndexOf(n.node),s=Vo(a,this.enabledCount()-1,r);return this.enabledItem(s)},this.registerNode=(t,r)=>{if(!t)return;const n=this.descendants.get(t);if(n){this.descendants.set(t,Object.assign({index:n.index,node:t},r));return}const a=Array.from(this.descendants.keys()).concat(t),s=Ko(a);r!=null&&r.disabled&&(r.disabled=!!r.disabled);const i=Object.assign({node:t,index:-1},r);this.descendants.set(t,i),this.assignIndex(s)}}}function _y(){const[e,t]=tt({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),r=ps(s=>b.createElement(e,Object.assign({},s.value),s.children));function n(s){const i=t(),[o,l]=f.useState(-1),u=f.useRef(null);Xr(()=>()=>{u.current&&i.unregister(u.current)},[]),Xr(()=>{if(!u.current)return;const g=Number(u.current.dataset.index);o!==g&&!Number.isNaN(g)&&l(g)});const d=ps(s?i.register(s):i.register);return{descendants:i,index:o,enabledIndex:i.enabledIndexOf(u.current),register:pi([d,u])}}function a(){return f.useRef(new Iy).current}return[r,t,a,n]}function Sy(e,t=globalThis==null?void 0:globalThis.document){const r=ht(e);f.useEffect(()=>{const n=a=>{a.key==="Escape"&&r(a)};return t.addEventListener("keydown",n,!0),()=>t.removeEventListener("keydown",n,!0)},[r,t])}const lg={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function dg(e,t,r,{discrete:n}={discrete:!1}){if(!t)return;const a=r.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});a.addEventListener(e,t,{once:!0}),n&&a?Ia.flushSync(()=>a.dispatchEvent(s)):a.dispatchEvent(s)}function Oy(e,t=globalThis==null?void 0:globalThis.document){const r=ht(e),n=f.useRef(!1);return f.useEffect(()=>{const a=s=>{if(s.target&&!n.current){const i={originalEvent:s};dg(lg.FOCUS_OUTSIDE,r,i)}};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,r]),{onFocusCapture:()=>{n.current=!0},onBlurCapture:()=>{n.current=!1}}}function Dy(e,t=globalThis==null?void 0:globalThis.document){const r=ht(e),n=f.useRef(!1),a=f.useRef(()=>{});return f.useEffect(()=>{const s=o=>{function l(){dg(lg.POINTER_DOWN_OUTSIDE,r,{originalEvent:o},{discrete:!0})}o.target&&!n.current?o.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=l,t.addEventListener("click",a.current,{once:!0})):l():t.removeEventListener("click",a.current),n.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",s),t.removeEventListener("click",a.current)}},[t,r]),{onPointerDownCapture:()=>{n.current=!0}}}var Py=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const[Ly,wy,jy,My]=_y();let Fr=0,qo;const Ky=f.forwardRef((e,t)=>wy(!1)?b.createElement(xo,Object.assign({ref:t},e)):b.createElement(Fy,null,b.createElement(xo,Object.assign({ref:t},e)))),Fy=({children:e})=>{const t=jy();return b.createElement(Ly,{value:t},e)},xo=f.forwardRef((e,t)=>{var r,{children:n,asChild:a,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:l,onDismiss:u,safeZone:d,disableOutsidePointerEvents:g=!1,enabled:k=!0}=e,m=Py(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,y]=f.useState({}),{register:c,index:A,descendants:h}=My({disableOutsidePointerEvents:g,disabled:!k,forceUpdate:()=>y({})}),[v,E]=f.useState(null),R=rt(E,c,t),T=(r=v==null?void 0:v.ownerDocument)!==null&&r!==void 0?r:globalThis==null?void 0:globalThis.document,S=f.useRef(!1),N=f.useRef(!1),I=(()=>{let O=-1;return h.enabledValues().forEach((K,x)=>{K.disableOutsidePointerEvents&&(O=x)}),{isPointerEventsEnabled:A>=O,isBodyPointerEventsDisabled:Fr>0,pointerStyle:A>=O&&Fr>0?"auto":void 0}})();function D(O){var P,K;if(!(d!=null&&d.anchor)&&!(d!=null&&d.dismissable)||!k)return;O.defaultPrevented||(S.current=!0,O.detail.originalEvent.type==="pointerdown"&&(N.current=!0));const x=O.target;O.detail.originalEvent.type==="pointerdown"?(!((P=d==null?void 0:d.anchor)===null||P===void 0)&&P.contains(x)||x===(d==null?void 0:d.anchor))&&O.preventDefault():!(x instanceof HTMLElement&&![d==null?void 0:d.anchor,d==null?void 0:d.dismissable].some(V=>V==null?void 0:V.contains(x))&&!x.contains((K=d==null?void 0:d.dismissable)!==null&&K!==void 0?K:null))&&O.preventDefault(),O.detail.originalEvent.type==="focusin"&&N.current&&O.preventDefault(),N.current=!1,S.current=!1}const j=Dy(O=>{!I.isPointerEventsEnabled||!k||(i==null||i(O),l==null||l(O),d&&D(O),!O.defaultPrevented&&u&&u())},T),M=Oy(O=>{k&&(o==null||o(O),l==null||l(O),d&&D(O),!O.defaultPrevented&&u&&u())},T);Sy(O=>{!k||!(A===h.enabledCount()-1)||(s==null||s(O),!O.defaultPrevented&&u&&(O.preventDefault(),u()))},T),f.useEffect(()=>{if(!(!v||!k||!g))return Fr===0&&(qo=T.body.style.pointerEvents,T.body.style.pointerEvents="none"),Fr++,()=>{Fr===1&&(T.body.style.pointerEvents=qo),Fr--}},[v,T,g,h,k]),f.useEffect(()=>()=>h.values().forEach(O=>O.forceUpdate()),[h,v]);const L=a?cr:"div";return b.createElement(L,Object.assign({ref:R},m,{onFocusCapture:M.onFocusCapture,onBlurCapture:M.onBlurCapture,onPointerDownCapture:j.onPointerDownCapture,style:Object.assign({pointerEvents:I.pointerStyle},m.style)}),n)}),Zr=Math.min,Sr=Math.max,_a=Math.round,Jt=Math.floor,Bn=e=>({x:e,y:e}),Vy={left:"right",right:"left",bottom:"top",top:"bottom"},qy={start:"end",end:"start"};function Xs(e,t,r){return Sr(e,Zr(t,r))}function Mt(e,t){return typeof e=="function"?e(t):e}function Dr(e){return e.split("-")[0]}function Kt(e){return e.split("-")[1]}function ug(e){return e==="x"?"y":"x"}function Ai(e){return e==="y"?"height":"width"}function Qr(e){return["top","bottom"].includes(Dr(e))?"y":"x"}function hi(e){return ug(Qr(e))}function xy(e,t,r){r===void 0&&(r=!1);const n=Kt(e),a=hi(e),s=Ai(a);let i=a==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(i=Sa(i)),[i,Sa(i)]}function Gy(e){const t=Sa(e);return[Zs(e),t,Zs(t)]}function Zs(e){return e.replace(/start|end/g,t=>qy[t])}function By(e,t,r){const n=["left","right"],a=["right","left"],s=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return r?t?a:n:t?n:a;case"left":case"right":return t?s:i;default:return[]}}function Uy(e,t,r,n){const a=Kt(e);let s=By(Dr(e),r==="start",n);return a&&(s=s.map(i=>i+"-"+a),t&&(s=s.concat(s.map(Zs)))),s}function Sa(e){return e.replace(/left|right|bottom|top/g,t=>Vy[t])}function Hy(e){return{top:0,right:0,bottom:0,left:0,...e}}function gg(e){return typeof e!="number"?Hy(e):{top:e,right:e,bottom:e,left:e}}function Oa(e){const{x:t,y:r,width:n,height:a}=e;return{width:n,height:a,top:r,left:t,right:t+n,bottom:r+a,x:t,y:r}}function Go(e,t,r){let{reference:n,floating:a}=e;const s=Qr(t),i=hi(t),o=Ai(i),l=Dr(t),u=s==="y",d=n.x+n.width/2-a.width/2,g=n.y+n.height/2-a.height/2,k=n[o]/2-a[o]/2;let m;switch(l){case"top":m={x:d,y:n.y-a.height};break;case"bottom":m={x:d,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y:g};break;case"left":m={x:n.x-a.width,y:g};break;default:m={x:n.x,y:n.y}}switch(Kt(t)){case"start":m[i]-=k*(r&&u?-1:1);break;case"end":m[i]+=k*(r&&u?-1:1);break}return m}const Cy=async(e,t,r)=>{const{placement:n="bottom",strategy:a="absolute",middleware:s=[],platform:i}=r,o=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(t));let u=await i.getElementRects({reference:e,floating:t,strategy:a}),{x:d,y:g}=Go(u,n,l),k=n,m={},y=0;for(let c=0;c<o.length;c++){const{name:A,fn:h}=o[c],{x:v,y:E,data:R,reset:T}=await h({x:d,y:g,initialPlacement:n,placement:k,strategy:a,middlewareData:m,rects:u,platform:i,elements:{reference:e,floating:t}});d=v??d,g=E??g,m={...m,[A]:{...m[A],...R}},T&&y<=50&&(y++,typeof T=="object"&&(T.placement&&(k=T.placement),T.rects&&(u=T.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:a}):T.rects),{x:d,y:g}=Go(u,k,l)),c=-1)}return{x:d,y:g,placement:k,strategy:a,middlewareData:m}};async function mg(e,t){var r;t===void 0&&(t={});const{x:n,y:a,platform:s,rects:i,elements:o,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:g="floating",altBoundary:k=!1,padding:m=0}=Mt(t,e),y=gg(m),A=o[k?g==="floating"?"reference":"floating":g],h=Oa(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(A)))==null||r?A:A.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(o.floating)),boundary:u,rootBoundary:d,strategy:l})),v=g==="floating"?{x:n,y:a,width:i.floating.width,height:i.floating.height}:i.reference,E=await(s.getOffsetParent==null?void 0:s.getOffsetParent(o.floating)),R=await(s.isElement==null?void 0:s.isElement(E))?await(s.getScale==null?void 0:s.getScale(E))||{x:1,y:1}:{x:1,y:1},T=Oa(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:v,offsetParent:E,strategy:l}):v);return{top:(h.top-T.top+y.top)/R.y,bottom:(T.bottom-h.bottom+y.bottom)/R.y,left:(h.left-T.left+y.left)/R.x,right:(T.right-h.right+y.right)/R.x}}const Yy=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:a,rects:s,platform:i,elements:o,middlewareData:l}=t,{element:u,padding:d=0}=Mt(e,t)||{};if(u==null)return{};const g=gg(d),k={x:r,y:n},m=hi(a),y=Ai(m),c=await i.getDimensions(u),A=m==="y",h=A?"top":"left",v=A?"bottom":"right",E=A?"clientHeight":"clientWidth",R=s.reference[y]+s.reference[m]-k[m]-s.floating[y],T=k[m]-s.reference[m],S=await(i.getOffsetParent==null?void 0:i.getOffsetParent(u));let N=S?S[E]:0;(!N||!await(i.isElement==null?void 0:i.isElement(S)))&&(N=o.floating[E]||s.floating[y]);const I=R/2-T/2,D=N/2-c[y]/2-1,j=Zr(g[h],D),M=Zr(g[v],D),L=j,O=N-c[y]-M,P=N/2-c[y]/2+I,K=Xs(L,P,O),x=!l.arrow&&Kt(a)!=null&&P!==K&&s.reference[y]/2-(P<L?j:M)-c[y]/2<0,G=x?P<L?P-L:P-O:0;return{[m]:k[m]+G,data:{[m]:K,centerOffset:P-K-G,...x&&{alignmentOffset:G}},reset:x}}}),$y=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:a,middlewareData:s,rects:i,initialPlacement:o,platform:l,elements:u}=t,{mainAxis:d=!0,crossAxis:g=!0,fallbackPlacements:k,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:c=!0,...A}=Mt(e,t);if((r=s.arrow)!=null&&r.alignmentOffset)return{};const h=Dr(a),v=Qr(o),E=Dr(o)===o,R=await(l.isRTL==null?void 0:l.isRTL(u.floating)),T=k||(E||!c?[Sa(o)]:Gy(o)),S=y!=="none";!k&&S&&T.push(...Uy(o,c,y,R));const N=[o,...T],I=await mg(t,A),D=[];let j=((n=s.flip)==null?void 0:n.overflows)||[];if(d&&D.push(I[h]),g){const P=xy(a,i,R);D.push(I[P[0]],I[P[1]])}if(j=[...j,{placement:a,overflows:D}],!D.every(P=>P<=0)){var M,L;const P=(((M=s.flip)==null?void 0:M.index)||0)+1,K=N[P];if(K)return{data:{index:P,overflows:j},reset:{placement:K}};let x=(L=j.filter(G=>G.overflows[0]<=0).sort((G,V)=>G.overflows[1]-V.overflows[1])[0])==null?void 0:L.placement;if(!x)switch(m){case"bestFit":{var O;const G=(O=j.filter(V=>{if(S){const q=Qr(V.placement);return q===v||q==="y"}return!0}).map(V=>[V.placement,V.overflows.filter(q=>q>0).reduce((q,$)=>q+$,0)]).sort((V,q)=>V[1]-q[1])[0])==null?void 0:O[0];G&&(x=G);break}case"initialPlacement":x=o;break}if(a!==x)return{reset:{placement:x}}}return{}}}};async function Wy(e,t){const{placement:r,platform:n,elements:a}=e,s=await(n.isRTL==null?void 0:n.isRTL(a.floating)),i=Dr(r),o=Kt(r),l=Qr(r)==="y",u=["left","top"].includes(i)?-1:1,d=s&&l?-1:1,g=Mt(t,e);let{mainAxis:k,crossAxis:m,alignmentAxis:y}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return o&&typeof y=="number"&&(m=o==="end"?y*-1:y),l?{x:m*d,y:k*u}:{x:k*u,y:m*d}}const Jy=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:a,y:s,placement:i,middlewareData:o}=t,l=await Wy(t,e);return i===((r=o.offset)==null?void 0:r.placement)&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:a+l.x,y:s+l.y,data:{...l,placement:i}}}}},zy=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:a}=t,{mainAxis:s=!0,crossAxis:i=!1,limiter:o={fn:A=>{let{x:h,y:v}=A;return{x:h,y:v}}},...l}=Mt(e,t),u={x:r,y:n},d=await mg(t,l),g=Qr(Dr(a)),k=ug(g);let m=u[k],y=u[g];if(s){const A=k==="y"?"top":"left",h=k==="y"?"bottom":"right",v=m+d[A],E=m-d[h];m=Xs(v,m,E)}if(i){const A=g==="y"?"top":"left",h=g==="y"?"bottom":"right",v=y+d[A],E=y-d[h];y=Xs(v,y,E)}const c=o.fn({...t,[k]:m,[g]:y});return{...c,data:{x:c.x-r,y:c.y-n,enabled:{[k]:s,[g]:i}}}}}};function Ja(){return typeof window<"u"}function it(e){return kg(e)?(e.nodeName||"").toLowerCase():"#document"}function un(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Yn(e){var t;return(t=(kg(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function kg(e){return Ja()?e instanceof Node||e instanceof un(e).Node:!1}function _e(e){return Ja()?e instanceof Element||e instanceof un(e).Element:!1}function vn(e){return Ja()?e instanceof HTMLElement||e instanceof un(e).HTMLElement:!1}function Da(e){return!Ja()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof un(e).ShadowRoot}function Ft(e){const{overflow:t,overflowX:r,overflowY:n,display:a}=An(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(a)}function Xy(e){return["table","td","th"].includes(it(e))}function za(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Ti(e){const t=Xa(),r=_e(e)?An(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>r[n]?r[n]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function Zy(e){let t=rr(e);for(;vn(t)&&!Qn(t);){if(Ti(t))return t;if(za(t))return null;t=rr(t)}return null}function Xa(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Qn(e){return["html","body","#document"].includes(it(e))}function An(e){return un(e).getComputedStyle(e)}function Za(e){return _e(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function rr(e){if(it(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Da(e)&&e.host||Yn(e);return Da(t)?t.host:t}function fg(e){const t=rr(e);return Qn(t)?e.ownerDocument?e.ownerDocument.body:e.body:vn(t)&&Ft(t)?t:fg(t)}function kr(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const a=fg(e),s=a===((n=e.ownerDocument)==null?void 0:n.body),i=un(a);if(s){const o=Qs(i);return t.concat(i,i.visualViewport||[],Ft(a)?a:[],o&&r?kr(o):[])}return t.concat(a,kr(a,[],r))}function Qs(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function vg(e){const t=An(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const a=vn(e),s=a?e.offsetWidth:r,i=a?e.offsetHeight:n,o=_a(r)!==s||_a(n)!==i;return o&&(r=s,n=i),{width:r,height:n,$:o}}function Ri(e){return _e(e)?e:e.contextElement}function Cr(e){const t=Ri(e);if(!vn(t))return Bn(1);const r=t.getBoundingClientRect(),{width:n,height:a,$:s}=vg(t);let i=(s?_a(r.width):r.width)/n,o=(s?_a(r.height):r.height)/a;return(!i||!Number.isFinite(i))&&(i=1),(!o||!Number.isFinite(o))&&(o=1),{x:i,y:o}}const Qy=Bn(0);function cg(e){const t=un(e);return!Xa()||!t.visualViewport?Qy:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function eb(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==un(e)?!1:t}function Pr(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const a=e.getBoundingClientRect(),s=Ri(e);let i=Bn(1);t&&(n?_e(n)&&(i=Cr(n)):i=Cr(e));const o=eb(s,r,n)?cg(s):Bn(0);let l=(a.left+o.x)/i.x,u=(a.top+o.y)/i.y,d=a.width/i.x,g=a.height/i.y;if(s){const k=un(s),m=n&&_e(n)?un(n):n;let y=k,c=Qs(y);for(;c&&n&&m!==y;){const A=Cr(c),h=c.getBoundingClientRect(),v=An(c),E=h.left+(c.clientLeft+parseFloat(v.paddingLeft))*A.x,R=h.top+(c.clientTop+parseFloat(v.paddingTop))*A.y;l*=A.x,u*=A.y,d*=A.x,g*=A.y,l+=E,u+=R,y=un(c),c=Qs(y)}}return Oa({width:d,height:g,x:l,y:u})}function Ni(e,t){const r=Za(e).scrollLeft;return t?t.left+r:Pr(Yn(e)).left+r}function Eg(e,t,r){r===void 0&&(r=!1);const n=e.getBoundingClientRect(),a=n.left+t.scrollLeft-(r?0:Ni(e,n)),s=n.top+t.scrollTop;return{x:a,y:s}}function nb(e){let{elements:t,rect:r,offsetParent:n,strategy:a}=e;const s=a==="fixed",i=Yn(n),o=t?za(t.floating):!1;if(n===i||o&&s)return r;let l={scrollLeft:0,scrollTop:0},u=Bn(1);const d=Bn(0),g=vn(n);if((g||!g&&!s)&&((it(n)!=="body"||Ft(i))&&(l=Za(n)),vn(n))){const m=Pr(n);u=Cr(n),d.x=m.x+n.clientLeft,d.y=m.y+n.clientTop}const k=i&&!g&&!s?Eg(i,l,!0):Bn(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-l.scrollLeft*u.x+d.x+k.x,y:r.y*u.y-l.scrollTop*u.y+d.y+k.y}}function rb(e){return Array.from(e.getClientRects())}function tb(e){const t=Yn(e),r=Za(e),n=e.ownerDocument.body,a=Sr(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=Sr(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let i=-r.scrollLeft+Ni(e);const o=-r.scrollTop;return An(n).direction==="rtl"&&(i+=Sr(t.clientWidth,n.clientWidth)-a),{width:a,height:s,x:i,y:o}}function ab(e,t){const r=un(e),n=Yn(e),a=r.visualViewport;let s=n.clientWidth,i=n.clientHeight,o=0,l=0;if(a){s=a.width,i=a.height;const u=Xa();(!u||u&&t==="fixed")&&(o=a.offsetLeft,l=a.offsetTop)}return{width:s,height:i,x:o,y:l}}function sb(e,t){const r=Pr(e,!0,t==="fixed"),n=r.top+e.clientTop,a=r.left+e.clientLeft,s=vn(e)?Cr(e):Bn(1),i=e.clientWidth*s.x,o=e.clientHeight*s.y,l=a*s.x,u=n*s.y;return{width:i,height:o,x:l,y:u}}function Bo(e,t,r){let n;if(t==="viewport")n=ab(e,r);else if(t==="document")n=tb(Yn(e));else if(_e(t))n=sb(t,r);else{const a=cg(e);n={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return Oa(n)}function pg(e,t){const r=rr(e);return r===t||!_e(r)||Qn(r)?!1:An(r).position==="fixed"||pg(r,t)}function ib(e,t){const r=t.get(e);if(r)return r;let n=kr(e,[],!1).filter(o=>_e(o)&&it(o)!=="body"),a=null;const s=An(e).position==="fixed";let i=s?rr(e):e;for(;_e(i)&&!Qn(i);){const o=An(i),l=Ti(i);!l&&o.position==="fixed"&&(a=null),(s?!l&&!a:!l&&o.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||Ft(i)&&!l&&pg(e,i))?n=n.filter(d=>d!==i):a=o,i=rr(i)}return t.set(e,n),n}function ob(e){let{element:t,boundary:r,rootBoundary:n,strategy:a}=e;const i=[...r==="clippingAncestors"?za(t)?[]:ib(t,this._c):[].concat(r),n],o=i[0],l=i.reduce((u,d)=>{const g=Bo(t,d,a);return u.top=Sr(g.top,u.top),u.right=Zr(g.right,u.right),u.bottom=Zr(g.bottom,u.bottom),u.left=Sr(g.left,u.left),u},Bo(t,o,a));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function lb(e){const{width:t,height:r}=vg(e);return{width:t,height:r}}function db(e,t,r){const n=vn(t),a=Yn(t),s=r==="fixed",i=Pr(e,!0,s,t);let o={scrollLeft:0,scrollTop:0};const l=Bn(0);if(n||!n&&!s)if((it(t)!=="body"||Ft(a))&&(o=Za(t)),n){const k=Pr(t,!0,s,t);l.x=k.x+t.clientLeft,l.y=k.y+t.clientTop}else a&&(l.x=Ni(a));const u=a&&!n&&!s?Eg(a,o):Bn(0),d=i.left+o.scrollLeft-l.x-u.x,g=i.top+o.scrollTop-l.y-u.y;return{x:d,y:g,width:i.width,height:i.height}}function ys(e){return An(e).position==="static"}function Uo(e,t){if(!vn(e)||An(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return Yn(e)===r&&(r=r.ownerDocument.body),r}function yg(e,t){const r=un(e);if(za(e))return r;if(!vn(e)){let a=rr(e);for(;a&&!Qn(a);){if(_e(a)&&!ys(a))return a;a=rr(a)}return r}let n=Uo(e,t);for(;n&&Xy(n)&&ys(n);)n=Uo(n,t);return n&&Qn(n)&&ys(n)&&!Ti(n)?r:n||Zy(e)||r}const ub=async function(e){const t=this.getOffsetParent||yg,r=this.getDimensions,n=await r(e.floating);return{reference:db(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function gb(e){return An(e).direction==="rtl"}const mb={convertOffsetParentRelativeRectToViewportRelativeRect:nb,getDocumentElement:Yn,getClippingRect:ob,getOffsetParent:yg,getElementRects:ub,getClientRects:rb,getDimensions:lb,getScale:Cr,isElement:_e,isRTL:gb};function bg(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function kb(e,t){let r=null,n;const a=Yn(e);function s(){var o;clearTimeout(n),(o=r)==null||o.disconnect(),r=null}function i(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),s();const u=e.getBoundingClientRect(),{left:d,top:g,width:k,height:m}=u;if(o||t(),!k||!m)return;const y=Jt(g),c=Jt(a.clientWidth-(d+k)),A=Jt(a.clientHeight-(g+m)),h=Jt(d),E={rootMargin:-y+"px "+-c+"px "+-A+"px "+-h+"px",threshold:Sr(0,Zr(1,l))||1};let R=!0;function T(S){const N=S[0].intersectionRatio;if(N!==l){if(!R)return i();N?i(!1,N):n=setTimeout(()=>{i(!1,1e-7)},1e3)}N===1&&!bg(u,e.getBoundingClientRect())&&i(),R=!1}try{r=new IntersectionObserver(T,{...E,root:a.ownerDocument})}catch{r=new IntersectionObserver(T,E)}r.observe(e)}return i(!0),s}function ei(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,u=Ri(e),d=a||s?[...u?kr(u):[],...kr(t)]:[];d.forEach(h=>{a&&h.addEventListener("scroll",r,{passive:!0}),s&&h.addEventListener("resize",r)});const g=u&&o?kb(u,r):null;let k=-1,m=null;i&&(m=new ResizeObserver(h=>{let[v]=h;v&&v.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(k),k=requestAnimationFrame(()=>{var E;(E=m)==null||E.observe(t)})),r()}),u&&!l&&m.observe(u),m.observe(t));let y,c=l?Pr(e):null;l&&A();function A(){const h=Pr(e);c&&!bg(c,h)&&r(),c=h,y=requestAnimationFrame(A)}return r(),()=>{var h;d.forEach(v=>{a&&v.removeEventListener("scroll",r),s&&v.removeEventListener("resize",r)}),g==null||g(),(h=m)==null||h.disconnect(),m=null,l&&cancelAnimationFrame(y)}}const fb=Jy,vb=zy,cb=$y,Ho=Yy,Eb=(e,t,r)=>{const n=new Map,a={platform:mb,...r},s={...a.platform,_c:n};return Cy(e,t,{...a,platform:s})};var Ra=typeof document<"u"?f.useLayoutEffect:f.useEffect;function Pa(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,a;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!Pa(e[n],t[n]))return!1;return!0}if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,a[n]))return!1;for(n=r;n--!==0;){const s=a[n];if(!(s==="_owner"&&e.$$typeof)&&!Pa(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function Ag(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Co(e,t){const r=Ag(e);return Math.round(t*r)/r}function bs(e){const t=f.useRef(e);return Ra(()=>{t.current=e}),t}function pb(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:a,elements:{reference:s,floating:i}={},transform:o=!0,whileElementsMounted:l,open:u}=e,[d,g]=f.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[k,m]=f.useState(n);Pa(k,n)||m(n);const[y,c]=f.useState(null),[A,h]=f.useState(null),v=f.useCallback(V=>{V!==S.current&&(S.current=V,c(V))},[]),E=f.useCallback(V=>{V!==N.current&&(N.current=V,h(V))},[]),R=s||y,T=i||A,S=f.useRef(null),N=f.useRef(null),I=f.useRef(d),D=l!=null,j=bs(l),M=bs(a),L=bs(u),O=f.useCallback(()=>{if(!S.current||!N.current)return;const V={placement:t,strategy:r,middleware:k};M.current&&(V.platform=M.current),Eb(S.current,N.current,V).then(q=>{const $={...q,isPositioned:L.current!==!1};P.current&&!Pa(I.current,$)&&(I.current=$,du.flushSync(()=>{g($)}))})},[k,t,r,M,L]);Ra(()=>{u===!1&&I.current.isPositioned&&(I.current.isPositioned=!1,g(V=>({...V,isPositioned:!1})))},[u]);const P=f.useRef(!1);Ra(()=>(P.current=!0,()=>{P.current=!1}),[]),Ra(()=>{if(R&&(S.current=R),T&&(N.current=T),R&&T){if(j.current)return j.current(R,T,O);O()}},[R,T,O,j,D]);const K=f.useMemo(()=>({reference:S,floating:N,setReference:v,setFloating:E}),[v,E]),x=f.useMemo(()=>({reference:R,floating:T}),[R,T]),G=f.useMemo(()=>{const V={position:r,left:0,top:0};if(!x.floating)return V;const q=Co(x.floating,d.x),$=Co(x.floating,d.y);return o?{...V,transform:"translate("+q+"px, "+$+"px)",...Ag(x.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:q,top:$}},[r,o,x.floating,d.x,d.y]);return f.useMemo(()=>({...d,update:O,refs:K,elements:x,floatingStyles:G}),[d,O,K,x,G])}const yb=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:a}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?Ho({element:n.current,padding:a}).fn(r):{}:n?Ho({element:n,padding:a}).fn(r):{}}}},hg=(e,t)=>({...fb(e),options:[e,t]}),Tg=(e,t)=>({...vb(e),options:[e,t]}),Rg=(e,t)=>({...cb(e),options:[e,t]}),Ng=(e,t)=>({...yb(e),options:[e,t]}),Yo=/(\w+)/g;function bb(e,t){const r=Array.isArray(e)?e:Ab(e);for(const n of t){if(!n)continue;let a=n;for(let s=0;s<r.length;s++){const i=a[r[s]];i!==void 0&&(a=i)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Ab(e){const t=[];let r=Yo.exec(e);for(;r;){const[,n,a]=r;t.push(n||a),r=Yo.exec(e)}return t}const hb=/{[^}]*}/g;function ar(e,...t){const r=Wa(),n=r.translations||[],a=[...t,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],r.locale[e]];return(i,o)=>{const l=bb(i,a);return o?l.replace(hb,u=>{const d=u.substring(1,u.length-1);if(o[d]===void 0){const g=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${d}'. The following replacements were passed: '${g}'`)}return o[d]}):l}}function Ig(){const e=Wa(),t=e.translations||[],r=Array.isArray(t)?t.map(n=>n.global):[t.global];r.push(e.locale.global);for(const n of r)if(n!=null&&n.dateLocale)return n.dateLocale;throw new Error("dateLocale not found.")}var Tb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Rb=f.forwardRef((e,t)=>{var{className:r,size:n="medium",title:a,transparent:s=!1,variant:i="neutral",id:o}=e,l=Tb(e,["className","size","title","transparent","variant","id"]);const{cn:u}=ae(),d=On(),g=ar("Loader");return b.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${d}`,ref:t,className:u("navds-loader",r,`navds-loader--${n}`,`navds-loader--${i}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},ln(l,["children"])),b.createElement("title",{id:o??`loader-${d}`},a||g("title")),b.createElement("circle",{className:u("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),b.createElement("circle",{className:u("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var Nb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ge=f.forwardRef((e,t)=>{var{as:r="button",variant:n="primary",className:a,children:s,size:i="medium",loading:o=!1,disabled:l,icon:u,iconPosition:d="left",onKeyUp:g}=e,k=Nb(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const{cn:m}=ae(),y=l||o?ln(k,["href"]):k,c=A=>{A.key===" "&&!l&&!o&&A.currentTarget.click()};return b.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},y,{ref:t,onKeyUp:Hr(g,c),className:m(a,"navds-button",`navds-button--${n}`,`navds-button--${i}`,{"navds-button--loading":o,"navds-button--icon-only":!!u&&!s,"navds-button--disabled":l??o}),disabled:l??o?!0:void 0}),u&&d==="left"&&b.createElement("span",{className:m("navds-button__icon")},u),o&&b.createElement(Rb,{size:i}),s&&b.createElement(Oe,{as:"span",size:i==="medium"?"medium":"small"},s),u&&d==="right"&&b.createElement("span",{className:m("navds-button__icon")},u))});var Ib=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const _b={error:LE,warning:yi,info:gE,success:aE},Vt=f.forwardRef((e,t)=>{var{children:r,className:n,variant:a,size:s="medium",fullWidth:i=!1,contentMaxWidth:o=!0,inline:l=!1,closeButton:u=!1,onClose:d}=e,g=Ib(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:k}=ae(),m=ar("Alert"),y=_b[a];return b.createElement("div",Object.assign({},g,{ref:t,className:k(n,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":i,"navds-alert--inline":l,"navds-alert--close-button":u})}),b.createElement(y,{title:m(a),className:k("navds-alert__icon")}),b.createElement(Wu,{as:"div",size:s,className:k("navds-alert__wrapper",o&&"navds-alert__wrapper--maxwidth")},r),u&&!l&&b.createElement("div",{className:k("navds-alert__button-wrapper")},b.createElement(Ge,{className:k("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:d,type:"button",icon:b.createElement(Qu,{title:["error","warning"].includes(a)?m("closeAlert"):m("closeMessage")})})))});function qt(e,t,r){const n=de(e,r==null?void 0:r.in);return isNaN(t)?Ae((r==null?void 0:r.in)||e,NaN):(t&&n.setDate(n.getDate()+t),n)}function Ii(e,t,r){const n=de(e,r==null?void 0:r.in);if(isNaN(t))return Ae(e,NaN);if(!t)return n;const a=n.getDate(),s=Ae(e,n.getTime());s.setMonth(n.getMonth()+t+1,0);const i=s.getDate();return a>=i?s:(n.setFullYear(s.getFullYear(),s.getMonth(),a),n)}function La(e,t){const r=de(e,t==null?void 0:t.in).getDay();return r===0||r===6}function Lr(e,t){return nr(e,{...t,weekStartsOn:1})}function _g(e,t){const r=de(e,t==null?void 0:t.in),n=r.getFullYear(),a=Ae(r,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const s=Lr(a),i=Ae(r,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const o=Lr(i);return r.getTime()>=s.getTime()?n+1:r.getTime()>=o.getTime()?n:n-1}function wa(e){const t=de(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function tr(e,t){const r=de(e,t==null?void 0:t.in);return r.setHours(0,0,0,0),r}function gr(e,t,r){const[n,a]=st(r==null?void 0:r.in,e,t),s=tr(n),i=tr(a),o=+s-wa(s),l=+i-wa(i);return Math.round((o-l)/VE)}function Sb(e,t){const r=_g(e,t),n=Ae(e,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),Lr(n)}function Ob(e,t,r){return qt(e,t*7,r)}function _i(e,t,r){return Ii(e,t*12,r)}function Db(e,t){let r,n=t==null?void 0:t.in;return e.forEach(a=>{!n&&typeof a=="object"&&(n=Ae.bind(null,a));const s=de(a,n);(!r||r<s||isNaN(+s))&&(r=s)}),Ae(n,r||NaN)}function Pb(e,t){let r,n=t==null?void 0:t.in;return e.forEach(a=>{!n&&typeof a=="object"&&(n=Ae.bind(null,a));const s=de(a,n);(!r||r>s||isNaN(+s))&&(r=s)}),Ae(n,r||NaN)}function Si(e,t,r){const[n,a]=st(r==null?void 0:r.in,e,t);return+tr(n)==+tr(a)}function Sg(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Lb(e){return!(!Sg(e)&&typeof e!="number"||isNaN(+de(e)))}function wb(e,t,r){const[n,a]=st(r==null?void 0:r.in,e,t),s=n.getFullYear()-a.getFullYear(),i=n.getMonth()-a.getMonth();return s*12+i}function Og(e,t){const r=de(e,t==null?void 0:t.in),n=r.getMonth();return r.setFullYear(r.getFullYear(),n+1,0),r.setHours(23,59,59,999),r}function jb(e,t){const[r,n]=st(e,t.start,t.end);return{start:r,end:n}}function Dg(e,t){const{start:r,end:n}=jb(t==null?void 0:t.in,e);let a=+r>+n;const s=a?+r:+n,i=a?n:r;i.setHours(0,0,0,0),i.setDate(1);let o=1;const l=[];for(;+i<=s;)l.push(Ae(r,i)),i.setMonth(i.getMonth()+o);return a?l.reverse():l}function wr(e,t){const r=de(e,t==null?void 0:t.in);return r.setDate(1),r.setHours(0,0,0,0),r}function Qa(e,t){const r=de(e,t==null?void 0:t.in),n=r.getFullYear();return r.setFullYear(n+1,0,0),r.setHours(23,59,59,999),r}function xt(e,t){const r=de(e,t==null?void 0:t.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}function Pg(e,t){var o,l,u,d;const r=Mr(),n=(t==null?void 0:t.weekStartsOn)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??r.weekStartsOn??((d=(u=r.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,a=de(e,t==null?void 0:t.in),s=a.getDay(),i=(s<n?-7:0)+6-(s-n);return a.setDate(a.getDate()+i),a.setHours(23,59,59,999),a}function Mb(e,t){return Pg(e,{...t,weekStartsOn:1})}function Kb(e,t){const r=de(e,t==null?void 0:t.in);return gr(r,xt(r))+1}function Oi(e,t){const r=de(e,t==null?void 0:t.in),n=+Lr(r)-+Sb(r);return Math.round(n/eg)+1}function Di(e,t){var d,g,k,m;const r=de(e,t==null?void 0:t.in),n=r.getFullYear(),a=Mr(),s=(t==null?void 0:t.firstWeekContainsDate)??((g=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((m=(k=a.locale)==null?void 0:k.options)==null?void 0:m.firstWeekContainsDate)??1,i=Ae((t==null?void 0:t.in)||e,0);i.setFullYear(n+1,0,s),i.setHours(0,0,0,0);const o=nr(i,t),l=Ae((t==null?void 0:t.in)||e,0);l.setFullYear(n,0,s),l.setHours(0,0,0,0);const u=nr(l,t);return+r>=+o?n+1:+r>=+u?n:n-1}function Fb(e,t){var o,l,u,d;const r=Mr(),n=(t==null?void 0:t.firstWeekContainsDate)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??r.firstWeekContainsDate??((d=(u=r.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??1,a=Di(e,t),s=Ae((t==null?void 0:t.in)||e,0);return s.setFullYear(a,0,n),s.setHours(0,0,0,0),nr(s,t)}function Pi(e,t){const r=de(e,t==null?void 0:t.in),n=+nr(r,t)-+Fb(r,t);return Math.round(n/eg)+1}function be(e,t){const r=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return r+n}const lr={y(e,t){const r=e.getFullYear(),n=r>0?r:1-r;return be(t==="yy"?n%100:n,t.length)},M(e,t){const r=e.getMonth();return t==="M"?String(r+1):be(r+1,2)},d(e,t){return be(e.getDate(),t.length)},a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return be(e.getHours()%12||12,t.length)},H(e,t){return be(e.getHours(),t.length)},m(e,t){return be(e.getMinutes(),t.length)},s(e,t){return be(e.getSeconds(),t.length)},S(e,t){const r=t.length,n=e.getMilliseconds(),a=Math.trunc(n*Math.pow(10,r-3));return be(a,t.length)}},Vr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},$o={G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){const n=e.getFullYear(),a=n>0?n:1-n;return r.ordinalNumber(a,{unit:"year"})}return lr.y(e,t)},Y:function(e,t,r,n){const a=Di(e,n),s=a>0?a:1-a;if(t==="YY"){const i=s%100;return be(i,2)}return t==="Yo"?r.ordinalNumber(s,{unit:"year"}):be(s,t.length)},R:function(e,t){const r=_g(e);return be(r,t.length)},u:function(e,t){const r=e.getFullYear();return be(r,t.length)},Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return be(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return be(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return lr.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return be(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){const a=Pi(e,n);return t==="wo"?r.ordinalNumber(a,{unit:"week"}):be(a,t.length)},I:function(e,t,r){const n=Oi(e);return t==="Io"?r.ordinalNumber(n,{unit:"week"}):be(n,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):lr.d(e,t)},D:function(e,t,r){const n=Kb(e);return t==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):be(n,t.length)},E:function(e,t,r){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){const a=e.getDay(),s=(a-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return be(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(a,{width:"short",context:"formatting"});case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){const a=e.getDay(),s=(a-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return be(s,t.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});case"cccccc":return r.day(a,{width:"short",context:"standalone"});case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,r){const n=e.getDay(),a=n===0?7:n;switch(t){case"i":return String(a);case"ii":return be(a,t.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,r){const n=e.getHours();let a;switch(n===12?a=Vr.noon:n===0?a=Vr.midnight:a=n/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,r){const n=e.getHours();let a;switch(n>=17?a=Vr.evening:n>=12?a=Vr.afternoon:n>=4?a=Vr.morning:a=Vr.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return lr.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):lr.H(e,t)},K:function(e,t,r){const n=e.getHours()%12;return t==="Ko"?r.ordinalNumber(n,{unit:"hour"}):be(n,t.length)},k:function(e,t,r){let n=e.getHours();return n===0&&(n=24),t==="ko"?r.ordinalNumber(n,{unit:"hour"}):be(n,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):lr.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):lr.s(e,t)},S:function(e,t){return lr.S(e,t)},X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return Jo(n);case"XXXX":case"XX":return Rr(n);case"XXXXX":case"XXX":default:return Rr(n,":")}},x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"x":return Jo(n);case"xxxx":case"xx":return Rr(n);case"xxxxx":case"xxx":default:return Rr(n,":")}},O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Wo(n,":");case"OOOO":default:return"GMT"+Rr(n,":")}},z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Wo(n,":");case"zzzz":default:return"GMT"+Rr(n,":")}},t:function(e,t,r){const n=Math.trunc(+e/1e3);return be(n,t.length)},T:function(e,t,r){return be(+e,t.length)}};function Wo(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),a=Math.trunc(n/60),s=n%60;return s===0?r+String(a):r+String(a)+t+be(s,2)}function Jo(e,t){return e%60===0?(e>0?"-":"+")+be(Math.abs(e)/60,2):Rr(e,t)}function Rr(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),a=be(Math.trunc(n/60),2),s=be(n%60,2);return r+a+t+s}const zo=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Lg=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Vb=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[],n=r[1],a=r[2];if(!a)return zo(e,t);let s;switch(n){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",zo(n,t)).replace("{{time}}",Lg(a,t))},ni={p:Lg,P:Vb},qb=/^D+$/,xb=/^Y+$/,Gb=["D","DD","YY","YYYY"];function wg(e){return qb.test(e)}function jg(e){return xb.test(e)}function ri(e,t,r){const n=Bb(e,t,r);if(console.warn(n),Gb.includes(e))throw new RangeError(n)}function Bb(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ub=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Hb=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Cb=/^'([^]*?)'?$/,Yb=/''/g,$b=/[a-zA-Z]/;function jr(e,t,r){var d,g,k,m,y,c,A,h;const n=Mr(),a=(r==null?void 0:r.locale)??n.locale??$a,s=(r==null?void 0:r.firstWeekContainsDate)??((g=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??n.firstWeekContainsDate??((m=(k=n.locale)==null?void 0:k.options)==null?void 0:m.firstWeekContainsDate)??1,i=(r==null?void 0:r.weekStartsOn)??((c=(y=r==null?void 0:r.locale)==null?void 0:y.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((h=(A=n.locale)==null?void 0:A.options)==null?void 0:h.weekStartsOn)??0,o=de(e,r==null?void 0:r.in);if(!Lb(o))throw new RangeError("Invalid time value");let l=t.match(Hb).map(v=>{const E=v[0];if(E==="p"||E==="P"){const R=ni[E];return R(v,a.formatLong)}return v}).join("").match(Ub).map(v=>{if(v==="''")return{isToken:!1,value:"'"};const E=v[0];if(E==="'")return{isToken:!1,value:Wb(v)};if($o[E])return{isToken:!0,value:v};if(E.match($b))throw new RangeError("Format string contains an unescaped latin alphabet character `"+E+"`");return{isToken:!1,value:v}});a.localize.preprocessor&&(l=a.localize.preprocessor(o,l));const u={firstWeekContainsDate:s,weekStartsOn:i,locale:a};return l.map(v=>{if(!v.isToken)return v.value;const E=v.value;(!(r!=null&&r.useAdditionalWeekYearTokens)&&jg(E)||!(r!=null&&r.useAdditionalDayOfYearTokens)&&wg(E))&&ri(E,t,String(e));const R=$o[E[0]];return R(o,E,a.localize,u)}).join("")}function Wb(e){const t=e.match(Cb);return t?t[1].replace(Yb,"'"):e}function Jb(e,t){const r=de(e,t==null?void 0:t.in),n=r.getFullYear(),a=r.getMonth(),s=Ae(r,0);return s.setFullYear(n,a+1,0),s.setHours(0,0,0,0),s.getDate()}function zb(){return Object.assign({},Mr())}function Xb(e,t){const r=de(e,t==null?void 0:t.in).getDay();return r===0?7:r}function Li(e,t){return de(e,t==null?void 0:t.in).getMonth()}function wi(e,t){return de(e,t==null?void 0:t.in).getFullYear()}function Mg(e,t){return+de(e)>+de(t)}function Gt(e,t){return+de(e)<+de(t)}function Zb(e,t){const r=Qb(t)?new t(0):Ae(t,0);return r.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),r.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),r}function Qb(e){var t;return typeof e=="function"&&((t=e.prototype)==null?void 0:t.constructor)===e}const eA=10;class Kg{constructor(){J(this,"subPriority",0)}validate(t,r){return!0}}class nA extends Kg{constructor(t,r,n,a,s){super(),this.value=t,this.validateValue=r,this.setValue=n,this.priority=a,s&&(this.subPriority=s)}validate(t,r){return this.validateValue(t,this.value,r)}set(t,r,n){return this.setValue(t,r,this.value,n)}}class rA extends Kg{constructor(r,n){super();J(this,"priority",eA);J(this,"subPriority",-1);this.context=r||(a=>Ae(n,a))}set(r,n){return n.timestampIsSet?r:Ae(r,Zb(r,this.context))}}class fe{run(t,r,n,a){const s=this.parse(t,r,n,a);return s?{setter:new nA(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(t,r,n){return!0}}class tA extends fe{constructor(){super(...arguments);J(this,"priority",140);J(this,"incompatibleTokens",["R","u","t","T"])}parse(r,n,a){switch(n){case"G":case"GG":case"GGG":return a.era(r,{width:"abbreviated"})||a.era(r,{width:"narrow"});case"GGGGG":return a.era(r,{width:"narrow"});case"GGGG":default:return a.era(r,{width:"wide"})||a.era(r,{width:"abbreviated"})||a.era(r,{width:"narrow"})}}set(r,n,a){return n.era=a,r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}}const qe={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Vn={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function xe(e,t){return e&&{value:t(e.value),rest:e.rest}}function je(e,t){const r=t.match(e);return r?{value:parseInt(r[0],10),rest:t.slice(r[0].length)}:null}function qn(e,t){const r=t.match(e);if(!r)return null;if(r[0]==="Z")return{value:0,rest:t.slice(1)};const n=r[1]==="+"?1:-1,a=r[2]?parseInt(r[2],10):0,s=r[3]?parseInt(r[3],10):0,i=r[5]?parseInt(r[5],10):0;return{value:n*(a*xE+s*qE+i*GE),rest:t.slice(r[0].length)}}function Fg(e){return je(qe.anyDigitsSigned,e)}function Fe(e,t){switch(e){case 1:return je(qe.singleDigit,t);case 2:return je(qe.twoDigits,t);case 3:return je(qe.threeDigits,t);case 4:return je(qe.fourDigits,t);default:return je(new RegExp("^\\d{1,"+e+"}"),t)}}function ja(e,t){switch(e){case 1:return je(qe.singleDigitSigned,t);case 2:return je(qe.twoDigitsSigned,t);case 3:return je(qe.threeDigitsSigned,t);case 4:return je(qe.fourDigitsSigned,t);default:return je(new RegExp("^-?\\d{1,"+e+"}"),t)}}function ji(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Vg(e,t){const r=t>0,n=r?t:1-t;let a;if(n<=50)a=e||100;else{const s=n+50,i=Math.trunc(s/100)*100,o=e>=s%100;a=e+i-(o?100:0)}return r?a:1-a}function qg(e){return e%400===0||e%4===0&&e%100!==0}class aA extends fe{constructor(){super(...arguments);J(this,"priority",130);J(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(r,n,a){const s=i=>({year:i,isTwoDigitYear:n==="yy"});switch(n){case"y":return xe(Fe(4,r),s);case"yo":return xe(a.ordinalNumber(r,{unit:"year"}),s);default:return xe(Fe(n.length,r),s)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,a){const s=r.getFullYear();if(a.isTwoDigitYear){const o=Vg(a.year,s);return r.setFullYear(o,0,1),r.setHours(0,0,0,0),r}const i=!("era"in n)||n.era===1?a.year:1-a.year;return r.setFullYear(i,0,1),r.setHours(0,0,0,0),r}}class sA extends fe{constructor(){super(...arguments);J(this,"priority",130);J(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(r,n,a){const s=i=>({year:i,isTwoDigitYear:n==="YY"});switch(n){case"Y":return xe(Fe(4,r),s);case"Yo":return xe(a.ordinalNumber(r,{unit:"year"}),s);default:return xe(Fe(n.length,r),s)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,a,s){const i=Di(r,s);if(a.isTwoDigitYear){const l=Vg(a.year,i);return r.setFullYear(l,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),nr(r,s)}const o=!("era"in n)||n.era===1?a.year:1-a.year;return r.setFullYear(o,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),nr(r,s)}}class iA extends fe{constructor(){super(...arguments);J(this,"priority",130);J(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(r,n){return ja(n==="R"?4:n.length,r)}set(r,n,a){const s=Ae(r,0);return s.setFullYear(a,0,4),s.setHours(0,0,0,0),Lr(s)}}class oA extends fe{constructor(){super(...arguments);J(this,"priority",130);J(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(r,n){return ja(n==="u"?4:n.length,r)}set(r,n,a){return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}}class lA extends fe{constructor(){super(...arguments);J(this,"priority",120);J(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,a){switch(n){case"Q":case"QQ":return Fe(n.length,r);case"Qo":return a.ordinalNumber(r,{unit:"quarter"});case"QQQ":return a.quarter(r,{width:"abbreviated",context:"formatting"})||a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(r,{width:"wide",context:"formatting"})||a.quarter(r,{width:"abbreviated",context:"formatting"})||a.quarter(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=1&&n<=4}set(r,n,a){return r.setMonth((a-1)*3,1),r.setHours(0,0,0,0),r}}class dA extends fe{constructor(){super(...arguments);J(this,"priority",120);J(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,a){switch(n){case"q":case"qq":return Fe(n.length,r);case"qo":return a.ordinalNumber(r,{unit:"quarter"});case"qqq":return a.quarter(r,{width:"abbreviated",context:"standalone"})||a.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(r,{width:"wide",context:"standalone"})||a.quarter(r,{width:"abbreviated",context:"standalone"})||a.quarter(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=1&&n<=4}set(r,n,a){return r.setMonth((a-1)*3,1),r.setHours(0,0,0,0),r}}class uA extends fe{constructor(){super(...arguments);J(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);J(this,"priority",110)}parse(r,n,a){const s=i=>i-1;switch(n){case"M":return xe(je(qe.month,r),s);case"MM":return xe(Fe(2,r),s);case"Mo":return xe(a.ordinalNumber(r,{unit:"month"}),s);case"MMM":return a.month(r,{width:"abbreviated",context:"formatting"})||a.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(r,{width:"wide",context:"formatting"})||a.month(r,{width:"abbreviated",context:"formatting"})||a.month(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=11}set(r,n,a){return r.setMonth(a,1),r.setHours(0,0,0,0),r}}class gA extends fe{constructor(){super(...arguments);J(this,"priority",110);J(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(r,n,a){const s=i=>i-1;switch(n){case"L":return xe(je(qe.month,r),s);case"LL":return xe(Fe(2,r),s);case"Lo":return xe(a.ordinalNumber(r,{unit:"month"}),s);case"LLL":return a.month(r,{width:"abbreviated",context:"standalone"})||a.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(r,{width:"wide",context:"standalone"})||a.month(r,{width:"abbreviated",context:"standalone"})||a.month(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=11}set(r,n,a){return r.setMonth(a,1),r.setHours(0,0,0,0),r}}function mA(e,t,r){const n=de(e,r==null?void 0:r.in),a=Pi(n,r)-t;return n.setDate(n.getDate()-a*7),de(n,r==null?void 0:r.in)}class kA extends fe{constructor(){super(...arguments);J(this,"priority",100);J(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(r,n,a){switch(n){case"w":return je(qe.week,r);case"wo":return a.ordinalNumber(r,{unit:"week"});default:return Fe(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,a,s){return nr(mA(r,a,s),s)}}function fA(e,t,r){const n=de(e,r==null?void 0:r.in),a=Oi(n,r)-t;return n.setDate(n.getDate()-a*7),n}class vA extends fe{constructor(){super(...arguments);J(this,"priority",100);J(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(r,n,a){switch(n){case"I":return je(qe.week,r);case"Io":return a.ordinalNumber(r,{unit:"week"});default:return Fe(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,a){return Lr(fA(r,a))}}const cA=[31,28,31,30,31,30,31,31,30,31,30,31],EA=[31,29,31,30,31,30,31,31,30,31,30,31];class pA extends fe{constructor(){super(...arguments);J(this,"priority",90);J(this,"subPriority",1);J(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(r,n,a){switch(n){case"d":return je(qe.date,r);case"do":return a.ordinalNumber(r,{unit:"date"});default:return Fe(n.length,r)}}validate(r,n){const a=r.getFullYear(),s=qg(a),i=r.getMonth();return s?n>=1&&n<=EA[i]:n>=1&&n<=cA[i]}set(r,n,a){return r.setDate(a),r.setHours(0,0,0,0),r}}class yA extends fe{constructor(){super(...arguments);J(this,"priority",90);J(this,"subpriority",1);J(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(r,n,a){switch(n){case"D":case"DD":return je(qe.dayOfYear,r);case"Do":return a.ordinalNumber(r,{unit:"date"});default:return Fe(n.length,r)}}validate(r,n){const a=r.getFullYear();return qg(a)?n>=1&&n<=366:n>=1&&n<=365}set(r,n,a){return r.setMonth(0,a),r.setHours(0,0,0,0),r}}function Mi(e,t,r){var g,k,m,y;const n=Mr(),a=(r==null?void 0:r.weekStartsOn)??((k=(g=r==null?void 0:r.locale)==null?void 0:g.options)==null?void 0:k.weekStartsOn)??n.weekStartsOn??((y=(m=n.locale)==null?void 0:m.options)==null?void 0:y.weekStartsOn)??0,s=de(e,r==null?void 0:r.in),i=s.getDay(),l=(t%7+7)%7,u=7-a,d=t<0||t>6?t-(i+u)%7:(l+u)%7-(i+u)%7;return qt(s,d,r)}class bA extends fe{constructor(){super(...arguments);J(this,"priority",90);J(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(r,n,a){switch(n){case"E":case"EE":case"EEE":return a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(r,{width:"wide",context:"formatting"})||a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,a,s){return r=Mi(r,a,s),r.setHours(0,0,0,0),r}}class AA extends fe{constructor(){super(...arguments);J(this,"priority",90);J(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(r,n,a,s){const i=o=>{const l=Math.floor((o-1)/7)*7;return(o+s.weekStartsOn+6)%7+l};switch(n){case"e":case"ee":return xe(Fe(n.length,r),i);case"eo":return xe(a.ordinalNumber(r,{unit:"day"}),i);case"eee":return a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"eeeee":return a.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(r,{width:"wide",context:"formatting"})||a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,a,s){return r=Mi(r,a,s),r.setHours(0,0,0,0),r}}class hA extends fe{constructor(){super(...arguments);J(this,"priority",90);J(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(r,n,a,s){const i=o=>{const l=Math.floor((o-1)/7)*7;return(o+s.weekStartsOn+6)%7+l};switch(n){case"c":case"cc":return xe(Fe(n.length,r),i);case"co":return xe(a.ordinalNumber(r,{unit:"day"}),i);case"ccc":return a.day(r,{width:"abbreviated",context:"standalone"})||a.day(r,{width:"short",context:"standalone"})||a.day(r,{width:"narrow",context:"standalone"});case"ccccc":return a.day(r,{width:"narrow",context:"standalone"});case"cccccc":return a.day(r,{width:"short",context:"standalone"})||a.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(r,{width:"wide",context:"standalone"})||a.day(r,{width:"abbreviated",context:"standalone"})||a.day(r,{width:"short",context:"standalone"})||a.day(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=6}set(r,n,a,s){return r=Mi(r,a,s),r.setHours(0,0,0,0),r}}function TA(e,t,r){const n=de(e,r==null?void 0:r.in),a=Xb(n,r),s=t-a;return qt(n,s,r)}class RA extends fe{constructor(){super(...arguments);J(this,"priority",90);J(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(r,n,a){const s=i=>i===0?7:i;switch(n){case"i":case"ii":return Fe(n.length,r);case"io":return a.ordinalNumber(r,{unit:"day"});case"iii":return xe(a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"}),s);case"iiiii":return xe(a.day(r,{width:"narrow",context:"formatting"}),s);case"iiiiii":return xe(a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"}),s);case"iiii":default:return xe(a.day(r,{width:"wide",context:"formatting"})||a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"}),s)}}validate(r,n){return n>=1&&n<=7}set(r,n,a){return r=TA(r,a),r.setHours(0,0,0,0),r}}class NA extends fe{constructor(){super(...arguments);J(this,"priority",80);J(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(r,n,a){switch(n){case"a":case"aa":case"aaa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})||a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,a){return r.setHours(ji(a),0,0,0),r}}class IA extends fe{constructor(){super(...arguments);J(this,"priority",80);J(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(r,n,a){switch(n){case"b":case"bb":case"bbb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})||a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,a){return r.setHours(ji(a),0,0,0),r}}class _A extends fe{constructor(){super(...arguments);J(this,"priority",80);J(this,"incompatibleTokens",["a","b","t","T"])}parse(r,n,a){switch(n){case"B":case"BB":case"BBB":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})||a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,a){return r.setHours(ji(a),0,0,0),r}}class SA extends fe{constructor(){super(...arguments);J(this,"priority",70);J(this,"incompatibleTokens",["H","K","k","t","T"])}parse(r,n,a){switch(n){case"h":return je(qe.hour12h,r);case"ho":return a.ordinalNumber(r,{unit:"hour"});default:return Fe(n.length,r)}}validate(r,n){return n>=1&&n<=12}set(r,n,a){const s=r.getHours()>=12;return s&&a<12?r.setHours(a+12,0,0,0):!s&&a===12?r.setHours(0,0,0,0):r.setHours(a,0,0,0),r}}class OA extends fe{constructor(){super(...arguments);J(this,"priority",70);J(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(r,n,a){switch(n){case"H":return je(qe.hour23h,r);case"Ho":return a.ordinalNumber(r,{unit:"hour"});default:return Fe(n.length,r)}}validate(r,n){return n>=0&&n<=23}set(r,n,a){return r.setHours(a,0,0,0),r}}class DA extends fe{constructor(){super(...arguments);J(this,"priority",70);J(this,"incompatibleTokens",["h","H","k","t","T"])}parse(r,n,a){switch(n){case"K":return je(qe.hour11h,r);case"Ko":return a.ordinalNumber(r,{unit:"hour"});default:return Fe(n.length,r)}}validate(r,n){return n>=0&&n<=11}set(r,n,a){return r.getHours()>=12&&a<12?r.setHours(a+12,0,0,0):r.setHours(a,0,0,0),r}}class PA extends fe{constructor(){super(...arguments);J(this,"priority",70);J(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(r,n,a){switch(n){case"k":return je(qe.hour24h,r);case"ko":return a.ordinalNumber(r,{unit:"hour"});default:return Fe(n.length,r)}}validate(r,n){return n>=1&&n<=24}set(r,n,a){const s=a<=24?a%24:a;return r.setHours(s,0,0,0),r}}class LA extends fe{constructor(){super(...arguments);J(this,"priority",60);J(this,"incompatibleTokens",["t","T"])}parse(r,n,a){switch(n){case"m":return je(qe.minute,r);case"mo":return a.ordinalNumber(r,{unit:"minute"});default:return Fe(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,a){return r.setMinutes(a,0,0),r}}class wA extends fe{constructor(){super(...arguments);J(this,"priority",50);J(this,"incompatibleTokens",["t","T"])}parse(r,n,a){switch(n){case"s":return je(qe.second,r);case"so":return a.ordinalNumber(r,{unit:"second"});default:return Fe(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,a){return r.setSeconds(a,0),r}}class jA extends fe{constructor(){super(...arguments);J(this,"priority",30);J(this,"incompatibleTokens",["t","T"])}parse(r,n){const a=s=>Math.trunc(s*Math.pow(10,-n.length+3));return xe(Fe(n.length,r),a)}set(r,n,a){return r.setMilliseconds(a),r}}class MA extends fe{constructor(){super(...arguments);J(this,"priority",10);J(this,"incompatibleTokens",["t","T","x"])}parse(r,n){switch(n){case"X":return qn(Vn.basicOptionalMinutes,r);case"XX":return qn(Vn.basic,r);case"XXXX":return qn(Vn.basicOptionalSeconds,r);case"XXXXX":return qn(Vn.extendedOptionalSeconds,r);case"XXX":default:return qn(Vn.extended,r)}}set(r,n,a){return n.timestampIsSet?r:Ae(r,r.getTime()-wa(r)-a)}}class KA extends fe{constructor(){super(...arguments);J(this,"priority",10);J(this,"incompatibleTokens",["t","T","X"])}parse(r,n){switch(n){case"x":return qn(Vn.basicOptionalMinutes,r);case"xx":return qn(Vn.basic,r);case"xxxx":return qn(Vn.basicOptionalSeconds,r);case"xxxxx":return qn(Vn.extendedOptionalSeconds,r);case"xxx":default:return qn(Vn.extended,r)}}set(r,n,a){return n.timestampIsSet?r:Ae(r,r.getTime()-wa(r)-a)}}class FA extends fe{constructor(){super(...arguments);J(this,"priority",40);J(this,"incompatibleTokens","*")}parse(r){return Fg(r)}set(r,n,a){return[Ae(r,a*1e3),{timestampIsSet:!0}]}}class VA extends fe{constructor(){super(...arguments);J(this,"priority",20);J(this,"incompatibleTokens","*")}parse(r){return Fg(r)}set(r,n,a){return[Ae(r,a),{timestampIsSet:!0}]}}const qA={G:new tA,y:new aA,Y:new sA,R:new iA,u:new oA,Q:new lA,q:new dA,M:new uA,L:new gA,w:new kA,I:new vA,d:new pA,D:new yA,E:new bA,e:new AA,c:new hA,i:new RA,a:new NA,b:new IA,B:new _A,h:new SA,H:new OA,K:new DA,k:new PA,m:new LA,s:new wA,S:new jA,X:new MA,x:new KA,t:new FA,T:new VA},xA=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,GA=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,BA=/^'([^]*?)'?$/,UA=/''/g,HA=/\S/,CA=/[a-zA-Z]/;function Yr(e,t,r,n){var A,h,v,E,R,T,S,N;const a=()=>Ae((n==null?void 0:n.in)||r,NaN),s=zb(),i=(n==null?void 0:n.locale)??s.locale??$a,o=(n==null?void 0:n.firstWeekContainsDate)??((h=(A=n==null?void 0:n.locale)==null?void 0:A.options)==null?void 0:h.firstWeekContainsDate)??s.firstWeekContainsDate??((E=(v=s.locale)==null?void 0:v.options)==null?void 0:E.firstWeekContainsDate)??1,l=(n==null?void 0:n.weekStartsOn)??((T=(R=n==null?void 0:n.locale)==null?void 0:R.options)==null?void 0:T.weekStartsOn)??s.weekStartsOn??((N=(S=s.locale)==null?void 0:S.options)==null?void 0:N.weekStartsOn)??0;if(!t)return e?a():de(r,n==null?void 0:n.in);const u={firstWeekContainsDate:o,weekStartsOn:l,locale:i},d=[new rA(n==null?void 0:n.in,r)],g=t.match(GA).map(I=>{const D=I[0];if(D in ni){const j=ni[D];return j(I,i.formatLong)}return I}).join("").match(xA),k=[];for(let I of g){!(n!=null&&n.useAdditionalWeekYearTokens)&&jg(I)&&ri(I,t,e),!(n!=null&&n.useAdditionalDayOfYearTokens)&&wg(I)&&ri(I,t,e);const D=I[0],j=qA[D];if(j){const{incompatibleTokens:M}=j;if(Array.isArray(M)){const O=k.find(P=>M.includes(P.token)||P.token===D);if(O)throw new RangeError(`The format string mustn't contain \`${O.fullToken}\` and \`${I}\` at the same time`)}else if(j.incompatibleTokens==="*"&&k.length>0)throw new RangeError(`The format string mustn't contain \`${I}\` and any other token at the same time`);k.push({token:D,fullToken:I});const L=j.run(e,I,i.match,u);if(!L)return a();d.push(L.setter),e=L.rest}else{if(D.match(CA))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");if(I==="''"?I="'":D==="'"&&(I=YA(I)),e.indexOf(I)===0)e=e.slice(I.length);else return a()}}if(e.length>0&&HA.test(e))return a();const m=d.map(I=>I.priority).sort((I,D)=>D-I).filter((I,D,j)=>j.indexOf(I)===D).map(I=>d.filter(D=>D.priority===I).sort((D,j)=>j.subPriority-D.subPriority)).map(I=>I[0]);let y=de(r,n==null?void 0:n.in);if(isNaN(+y))return a();const c={};for(const I of m){if(!I.validate(y,u))return a();const D=I.set(y,c,u);Array.isArray(D)?(y=D[0],Object.assign(c,D[1])):y=D}return y}function YA(e){return e.match(BA)[1].replace(UA,"'")}function $A(e,t,r){const[n,a]=st(r==null?void 0:r.in,e,t);return n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()}function xg(e,t,r){const[n,a]=st(r==null?void 0:r.in,e,t);return n.getFullYear()===a.getFullYear()}function WA(e,t,r){return qt(e,-t,r)}function Gg(e,t,r){const n=de(e,r==null?void 0:r.in),a=n.getFullYear(),s=n.getDate(),i=Ae(e,0);i.setFullYear(a,t,15),i.setHours(0,0,0,0);const o=Jb(i);return n.setMonth(t,Math.min(s,o)),n}function Bg(e,t,r){const n=de(e,r==null?void 0:r.in);return isNaN(+n)?Ae(e,NaN):(n.setFullYear(t),n)}function JA(e,t,r){return Ii(e,-t,r)}function zA(e,t,r){const{years:n=0,months:a=0,weeks:s=0,days:i=0,hours:o=0,minutes:l=0,seconds:u=0}=t,d=JA(e,a+n*12,r),g=WA(d,i+s*7,r),k=l+o*60,y=(u+k*60)*1e3;return Ae(e,+g-y)}function XA(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function ZA(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:r,version:n}=t;return r+"/"+n}).join(" "):navigator.userAgent}function QA(){return/apple/i.test(navigator.vendor)}function eh(){return XA().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function nh(){return ZA().includes("jsdom/")}const rh="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Xo(e){let t=e.activeElement;for(;((r=t)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;t=t.shadowRoot.activeElement}return t}function Rt(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&Da(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Gr(e){return"composedPath"in e?e.composedPath()[0]:e.target}function As(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const r=e;return r.target!=null&&t.contains(r.target)}function th(e){return e.matches("html,body")}function Nr(e){return(e==null?void 0:e.ownerDocument)||document}function ah(e){return vn(e)&&e.matches(rh)}function sh(e){if(!e||nh())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function hs(e,t,r){r===void 0&&(r=!0);let n=e.filter(s=>{var i;return s.parentId===t&&((i=s.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=r?e.filter(s=>{var i;return(i=a)==null?void 0:i.some(o=>{var l;return s.parentId===o.id&&((l=s.context)==null?void 0:l.open)})}):e,n=n.concat(a);return n}function ih(e){return"nativeEvent"in e}function ti(e,t){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var er=typeof document<"u"?f.useLayoutEffect:f.useEffect;const oh={...lu};function zt(e){const t=f.useRef(e);return er(()=>{t.current=e}),t}const lh=oh.useInsertionEffect,dh=lh||(e=>e());function Xn(e){const t=f.useRef(()=>{});return dh(()=>{t.current=e}),f.useCallback(function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.current==null?void 0:t.current(...n)},[])}const uh="data-floating-ui-focusable",Zo="active",Qo="selected",gh={...lu};let el=!1,mh=0;const nl=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+mh++;function kh(){const[e,t]=f.useState(()=>el?nl():void 0);return er(()=>{e==null&&t(nl())},[]),f.useEffect(()=>{el=!0},[]),e}const fh=gh.useId,Ug=fh||kh;function vh(){const e=new Map;return{emit(t,r){var n;(n=e.get(t))==null||n.forEach(a=>a(r))},on(t,r){e.has(t)||e.set(t,new Set),e.get(t).add(r)},off(t,r){var n;(n=e.get(t))==null||n.delete(r)}}}const ch=f.createContext(null),Eh=f.createContext(null),Hg=()=>{var e;return((e=f.useContext(ch))==null?void 0:e.id)||null},Ki=()=>f.useContext(Eh);function es(e){return"data-floating-ui-"+e}function cn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const rl=es("safe-polygon");function Ts(e,t,r){if(r&&!ti(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n==null?void 0:n[t]}return e==null?void 0:e[t]}function Rs(e){return typeof e=="function"?e():e}function ph(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,dataRef:a,events:s,elements:i}=e,{enabled:o=!0,delay:l=0,handleClose:u=null,mouseOnly:d=!1,restMs:g=0,move:k=!0}=t,m=Ki(),y=Hg(),c=zt(u),A=zt(l),h=zt(r),v=zt(g),E=f.useRef(),R=f.useRef(-1),T=f.useRef(),S=f.useRef(-1),N=f.useRef(!0),I=f.useRef(!1),D=f.useRef(()=>{}),j=f.useRef(!1),M=f.useCallback(()=>{var G;const V=(G=a.current.openEvent)==null?void 0:G.type;return(V==null?void 0:V.includes("mouse"))&&V!=="mousedown"},[a]);f.useEffect(()=>{if(!o)return;function G(V){let{open:q}=V;q||(cn(R),cn(S),N.current=!0,j.current=!1)}return s.on("openchange",G),()=>{s.off("openchange",G)}},[o,s]),f.useEffect(()=>{if(!o||!c.current||!r)return;function G(q){M()&&n(!1,q,"hover")}const V=Nr(i.floating).documentElement;return V.addEventListener("mouseleave",G),()=>{V.removeEventListener("mouseleave",G)}},[i.floating,r,n,o,c,M]);const L=f.useCallback(function(G,V,q){V===void 0&&(V=!0),q===void 0&&(q="hover");const $=Ts(A.current,"close",E.current);$&&!T.current?(cn(R),R.current=window.setTimeout(()=>n(!1,G,q),$)):V&&(cn(R),n(!1,G,q))},[A,n]),O=Xn(()=>{D.current(),T.current=void 0}),P=Xn(()=>{if(I.current){const G=Nr(i.floating).body;G.style.pointerEvents="",G.removeAttribute(rl),I.current=!1}}),K=Xn(()=>a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1);f.useEffect(()=>{if(!o)return;function G(Z){if(cn(R),N.current=!1,d&&!ti(E.current)||Rs(v.current)>0&&!Ts(A.current,"open"))return;const oe=Ts(A.current,"open",E.current);oe?R.current=window.setTimeout(()=>{h.current||n(!0,Z,"hover")},oe):r||n(!0,Z,"hover")}function V(Z){if(K()){P();return}D.current();const oe=Nr(i.floating);if(cn(S),j.current=!1,c.current&&a.current.floatingContext){r||cn(R),T.current=c.current({...a.current.floatingContext,tree:m,x:Z.clientX,y:Z.clientY,onClose(){P(),O(),K()||L(Z,!0,"safe-polygon")}});const ee=T.current;oe.addEventListener("mousemove",ee),D.current=()=>{oe.removeEventListener("mousemove",ee)};return}(E.current==="touch"?!Rt(i.floating,Z.relatedTarget):!0)&&L(Z)}function q(Z){K()||a.current.floatingContext&&(c.current==null||c.current({...a.current.floatingContext,tree:m,x:Z.clientX,y:Z.clientY,onClose(){P(),O(),K()||L(Z)}})(Z))}function $(){cn(R)}function X(Z){K()||L(Z,!1)}if(_e(i.domReference)){const Z=i.domReference,oe=i.floating;return r&&Z.addEventListener("mouseleave",q),k&&Z.addEventListener("mousemove",G,{once:!0}),Z.addEventListener("mouseenter",G),Z.addEventListener("mouseleave",V),oe&&(oe.addEventListener("mouseleave",q),oe.addEventListener("mouseenter",$),oe.addEventListener("mouseleave",X)),()=>{r&&Z.removeEventListener("mouseleave",q),k&&Z.removeEventListener("mousemove",G),Z.removeEventListener("mouseenter",G),Z.removeEventListener("mouseleave",V),oe&&(oe.removeEventListener("mouseleave",q),oe.removeEventListener("mouseenter",$),oe.removeEventListener("mouseleave",X))}}},[i,o,e,d,k,L,O,P,n,r,h,m,A,c,a,K,v]),er(()=>{var G;if(o&&r&&(G=c.current)!=null&&G.__options.blockPointerEvents&&M()){I.current=!0;const q=i.floating;if(_e(i.domReference)&&q){var V;const $=Nr(i.floating).body;$.setAttribute(rl,"");const X=i.domReference,Z=m==null||(V=m.nodesRef.current.find(oe=>oe.id===y))==null||(V=V.context)==null?void 0:V.elements.floating;return Z&&(Z.style.pointerEvents=""),$.style.pointerEvents="none",X.style.pointerEvents="auto",q.style.pointerEvents="auto",()=>{$.style.pointerEvents="",X.style.pointerEvents="",q.style.pointerEvents=""}}}},[o,r,y,i,m,c,M]),er(()=>{r||(E.current=void 0,j.current=!1,O(),P())},[r,O,P]),f.useEffect(()=>()=>{O(),cn(R),cn(S),P()},[o,i.domReference,O,P]);const x=f.useMemo(()=>{function G(V){E.current=V.pointerType}return{onPointerDown:G,onPointerEnter:G,onMouseMove(V){const{nativeEvent:q}=V;function $(){!N.current&&!h.current&&n(!0,q,"hover")}d&&!ti(E.current)||r||Rs(v.current)===0||j.current&&V.movementX**2+V.movementY**2<2||(cn(S),E.current==="touch"?$():(j.current=!0,S.current=window.setTimeout($,Rs(v.current))))}}},[d,n,r,h,v]);return f.useMemo(()=>o?{reference:x}:{},[o,x])}function Ns(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&Da(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function yh(e){return"composedPath"in e?e.composedPath()[0]:e.target}const bh=f.createContext(null),tl=es("portal");function Ah(e){e===void 0&&(e={});const{id:t,root:r}=e,n=Ug(),a=hh(),[s,i]=f.useState(null),o=f.useRef(null);return er(()=>()=>{s==null||s.remove(),queueMicrotask(()=>{o.current=null})},[s]),er(()=>{if(!n||o.current)return;const l=t?document.getElementById(t):null;if(!l)return;const u=document.createElement("div");u.id=n,u.setAttribute(tl,""),l.appendChild(u),o.current=u,i(u)},[t,n]),er(()=>{if(r===null||!n||o.current)return;let l=r||(a==null?void 0:a.portalNode);l&&!_e(l)&&(l=l.current),l=l||document.body;let u=null;t&&(u=document.createElement("div"),u.id=t,l.appendChild(u));const d=document.createElement("div");d.id=n,d.setAttribute(tl,""),l=u||l,l.appendChild(d),o.current=d,i(d)},[t,r,n,a]),s}const hh=()=>f.useContext(bh),Th={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Rh={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},al=e=>{var t,r;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(r=e==null?void 0:e.outsidePress)!=null?r:!0}};function Nh(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,elements:a,dataRef:s}=e,{enabled:i=!0,escapeKey:o=!0,outsidePress:l=!0,outsidePressEvent:u="pointerdown",referencePress:d=!1,referencePressEvent:g="pointerdown",ancestorScroll:k=!1,bubbles:m,capture:y}=t,c=Ki(),A=Xn(typeof l=="function"?l:()=>!1),h=typeof l=="function"?A:l,v=f.useRef(!1),E=f.useRef(!1),{escapeKey:R,outsidePress:T}=al(m),{escapeKey:S,outsidePress:N}=al(y),I=f.useRef(!1),D=Xn(K=>{var x;if(!r||!i||!o||K.key!=="Escape"||I.current)return;const G=(x=s.current.floatingContext)==null?void 0:x.nodeId,V=c?hs(c.nodesRef.current,G):[];if(!R&&(K.stopPropagation(),V.length>0)){let q=!0;if(V.forEach($=>{var X;if((X=$.context)!=null&&X.open&&!$.context.dataRef.current.__escapeKeyBubbles){q=!1;return}}),!q)return}n(!1,ih(K)?K.nativeEvent:K,"escape-key")}),j=Xn(K=>{var x;const G=()=>{var V;D(K),(V=Gr(K))==null||V.removeEventListener("keydown",G)};(x=Gr(K))==null||x.addEventListener("keydown",G)}),M=Xn(K=>{var x;const G=v.current;v.current=!1;const V=E.current;if(E.current=!1,u==="click"&&V||G||typeof h=="function"&&!h(K))return;const q=Gr(K),$="["+es("inert")+"]",X=Nr(a.floating).querySelectorAll($);let Z=_e(q)?q:null;for(;Z&&!Qn(Z);){const U=rr(Z);if(Qn(U)||!_e(U))break;Z=U}if(X.length&&_e(q)&&!th(q)&&!Rt(q,a.floating)&&Array.from(X).every(U=>!Rt(Z,U)))return;if(vn(q)&&P){const U=Qn(q),ne=An(q),se=/auto|scroll/,ve=U||se.test(ne.overflowX),Je=U||se.test(ne.overflowY),He=ve&&q.clientWidth>0&&q.scrollWidth>q.clientWidth,ze=Je&&q.clientHeight>0&&q.scrollHeight>q.clientHeight,$n=ne.direction==="rtl",Tn=ze&&($n?K.offsetX<=q.offsetWidth-q.clientWidth:K.offsetX>q.clientWidth),wn=He&&K.offsetY>q.clientHeight;if(Tn||wn)return}const oe=(x=s.current.floatingContext)==null?void 0:x.nodeId,Qe=c&&hs(c.nodesRef.current,oe).some(U=>{var ne;return As(K,(ne=U.context)==null?void 0:ne.elements.floating)});if(As(K,a.floating)||As(K,a.domReference)||Qe)return;const ee=c?hs(c.nodesRef.current,oe):[];if(ee.length>0){let U=!0;if(ee.forEach(ne=>{var se;if((se=ne.context)!=null&&se.open&&!ne.context.dataRef.current.__outsidePressBubbles){U=!1;return}}),!U)return}n(!1,K,"outside-press")}),L=Xn(K=>{var x;const G=()=>{var V;M(K),(V=Gr(K))==null||V.removeEventListener(u,G)};(x=Gr(K))==null||x.addEventListener(u,G)});f.useEffect(()=>{if(!r||!i)return;s.current.__escapeKeyBubbles=R,s.current.__outsidePressBubbles=T;let K=-1;function x(X){n(!1,X,"ancestor-scroll")}function G(){window.clearTimeout(K),I.current=!0}function V(){K=window.setTimeout(()=>{I.current=!1},Xa()?5:0)}const q=Nr(a.floating);o&&(q.addEventListener("keydown",S?j:D,S),q.addEventListener("compositionstart",G),q.addEventListener("compositionend",V)),h&&q.addEventListener(u,N?L:M,N);let $=[];return k&&(_e(a.domReference)&&($=kr(a.domReference)),_e(a.floating)&&($=$.concat(kr(a.floating))),!_e(a.reference)&&a.reference&&a.reference.contextElement&&($=$.concat(kr(a.reference.contextElement)))),$=$.filter(X=>{var Z;return X!==((Z=q.defaultView)==null?void 0:Z.visualViewport)}),$.forEach(X=>{X.addEventListener("scroll",x,{passive:!0})}),()=>{o&&(q.removeEventListener("keydown",S?j:D,S),q.removeEventListener("compositionstart",G),q.removeEventListener("compositionend",V)),h&&q.removeEventListener(u,N?L:M,N),$.forEach(X=>{X.removeEventListener("scroll",x)}),window.clearTimeout(K)}},[s,a,o,h,u,r,n,k,i,R,T,D,S,j,M,N,L]),f.useEffect(()=>{v.current=!1},[h,u]);const O=f.useMemo(()=>({onKeyDown:D,...d&&{[Th[g]]:K=>{n(!1,K.nativeEvent,"reference-press")},...g!=="click"&&{onClick(K){n(!1,K.nativeEvent,"reference-press")}}}}),[D,n,d,g]),P=f.useMemo(()=>({onKeyDown:D,onMouseDown(){E.current=!0},onMouseUp(){E.current=!0},[Rh[u]]:()=>{v.current=!0}}),[D,u]);return f.useMemo(()=>i?{reference:O,floating:P}:{},[i,O,P])}function Ih(e){const{open:t=!1,onOpenChange:r,elements:n}=e,a=Ug(),s=f.useRef({}),[i]=f.useState(()=>vh()),o=Hg()!=null,[l,u]=f.useState(n.reference),d=Xn((m,y,c)=>{s.current.openEvent=m?y:void 0,i.emit("openchange",{open:m,event:y,reason:c,nested:o}),r==null||r(m,y,c)}),g=f.useMemo(()=>({setPositionReference:u}),[]),k=f.useMemo(()=>({reference:l||n.reference||null,floating:n.floating||null,domReference:n.reference}),[l,n.reference,n.floating]);return f.useMemo(()=>({dataRef:s,open:t,onOpenChange:d,elements:k,events:i,floatingId:a,refs:g}),[t,d,k,i,a,g])}function Cg(e){e===void 0&&(e={});const{nodeId:t}=e,r=Ih({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||r,a=n.elements,[s,i]=f.useState(null),[o,l]=f.useState(null),d=(a==null?void 0:a.domReference)||s,g=f.useRef(null),k=Ki();er(()=>{d&&(g.current=d)},[d]);const m=pb({...e,elements:{...a,...o&&{reference:o}}}),y=f.useCallback(E=>{const R=_e(E)?{getBoundingClientRect:()=>E.getBoundingClientRect(),getClientRects:()=>E.getClientRects(),contextElement:E}:E;l(R),m.refs.setReference(R)},[m.refs]),c=f.useCallback(E=>{(_e(E)||E===null)&&(g.current=E,i(E)),(_e(m.refs.reference.current)||m.refs.reference.current===null||E!==null&&!_e(E))&&m.refs.setReference(E)},[m.refs]),A=f.useMemo(()=>({...m.refs,setReference:c,setPositionReference:y,domReference:g}),[m.refs,c,y]),h=f.useMemo(()=>({...m.elements,domReference:d}),[m.elements,d]),v=f.useMemo(()=>({...m,...n,refs:A,elements:h,nodeId:t}),[m,A,h,t,n]);return er(()=>{n.dataRef.current.floatingContext=v;const E=k==null?void 0:k.nodesRef.current.find(R=>R.id===t);E&&(E.context=v)}),f.useMemo(()=>({...m,context:v,refs:A,elements:h}),[m,A,h,v])}function Is(){return eh()&&QA()}function _h(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,events:a,dataRef:s,elements:i}=e,{enabled:o=!0,visibleOnly:l=!0}=t,u=f.useRef(!1),d=f.useRef(-1),g=f.useRef(!0);f.useEffect(()=>{if(!o)return;const m=un(i.domReference);function y(){!r&&vn(i.domReference)&&i.domReference===Xo(Nr(i.domReference))&&(u.current=!0)}function c(){g.current=!0}function A(){g.current=!1}return m.addEventListener("blur",y),Is()&&(m.addEventListener("keydown",c,!0),m.addEventListener("pointerdown",A,!0)),()=>{m.removeEventListener("blur",y),Is()&&(m.removeEventListener("keydown",c,!0),m.removeEventListener("pointerdown",A,!0))}},[i.domReference,r,o]),f.useEffect(()=>{if(!o)return;function m(y){let{reason:c}=y;(c==="reference-press"||c==="escape-key")&&(u.current=!0)}return a.on("openchange",m),()=>{a.off("openchange",m)}},[a,o]),f.useEffect(()=>()=>{cn(d)},[]);const k=f.useMemo(()=>({onMouseLeave(){u.current=!1},onFocus(m){if(u.current)return;const y=Gr(m.nativeEvent);if(l&&_e(y)){if(Is()&&!m.relatedTarget){if(!g.current&&!ah(y))return}else if(!sh(y))return}n(!0,m.nativeEvent,"focus")},onBlur(m){u.current=!1;const y=m.relatedTarget,c=m.nativeEvent,A=_e(y)&&y.hasAttribute(es("focus-guard"))&&y.getAttribute("data-type")==="outside";d.current=window.setTimeout(()=>{var h;const v=Xo(i.domReference?i.domReference.ownerDocument:document);!y&&v===i.domReference||Rt((h=s.current.floatingContext)==null?void 0:h.refs.floating.current,v)||Rt(i.domReference,v)||A||n(!1,c,"focus")})}}),[s,i.domReference,n,l]);return f.useMemo(()=>o?{reference:k}:{},[o,k])}function _s(e,t,r){const n=new Map,a=r==="item";let s=e;if(a&&e){const{[Zo]:i,[Qo]:o,...l}=e;s=l}return{...r==="floating"&&{tabIndex:-1,[uh]:""},...s,...t.map(i=>{const o=i?i[r]:null;return typeof o=="function"?e?o(e):null:o}).concat(e).reduce((i,o)=>(o&&Object.entries(o).forEach(l=>{let[u,d]=l;if(!(a&&[Zo,Qo].includes(u)))if(u.indexOf("on")===0){if(n.has(u)||n.set(u,[]),typeof d=="function"){var g;(g=n.get(u))==null||g.push(d),i[u]=function(){for(var k,m=arguments.length,y=new Array(m),c=0;c<m;c++)y[c]=arguments[c];return(k=n.get(u))==null?void 0:k.map(A=>A(...y)).find(A=>A!==void 0)}}}else i[u]=d}),i),{})}}function Sh(e){e===void 0&&(e=[]);const t=e.map(o=>o==null?void 0:o.reference),r=e.map(o=>o==null?void 0:o.floating),n=e.map(o=>o==null?void 0:o.item),a=f.useCallback(o=>_s(o,e,"reference"),t),s=f.useCallback(o=>_s(o,e,"floating"),r),i=f.useCallback(o=>_s(o,e,"item"),n);return f.useMemo(()=>({getReferenceProps:a,getFloatingProps:s,getItemProps:i}),[a,s,i])}function Oh(e,t,r){r===void 0&&(r=!0);let n=e.filter(s=>{var i;return s.parentId===t&&((i=s.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=r?e.filter(s=>{var i;return(i=a)==null?void 0:i.some(o=>{var l;return s.parentId===o.id&&((l=s.context)==null?void 0:l.open)})}):e,n=n.concat(a);return n}function sl(e,t){const[r,n]=e;let a=!1;const s=t.length;for(let i=0,o=s-1;i<s;o=i++){const[l,u]=t[i]||[0,0],[d,g]=t[o]||[0,0];u>=n!=g>=n&&r<=(d-l)*(n-u)/(g-u)+l&&(a=!a)}return a}function Dh(e,t){return e[0]>=t.x&&e[0]<=t.x+t.width&&e[1]>=t.y&&e[1]<=t.y+t.height}function Ph(e){e===void 0&&(e={});const{buffer:t=.5,blockPointerEvents:r=!1,requireIntent:n=!0}=e;let a,s=!1,i=null,o=null,l=performance.now();function u(g,k){const m=performance.now(),y=m-l;if(i===null||o===null||y===0)return i=g,o=k,l=m,null;const c=g-i,A=k-o,v=Math.sqrt(c*c+A*A)/y;return i=g,o=k,l=m,v}const d=g=>{let{x:k,y:m,placement:y,elements:c,onClose:A,nodeId:h,tree:v}=g;return function(R){function T(){clearTimeout(a),A()}if(clearTimeout(a),!c.domReference||!c.floating||y==null||k==null||m==null)return;const{clientX:S,clientY:N}=R,I=[S,N],D=yh(R),j=R.type==="mouseleave",M=Ns(c.floating,D),L=Ns(c.domReference,D),O=c.domReference.getBoundingClientRect(),P=c.floating.getBoundingClientRect(),K=y.split("-")[0],x=k>P.right-P.width/2,G=m>P.bottom-P.height/2,V=Dh(I,O),q=P.width>O.width,$=P.height>O.height,X=(q?O:P).left,Z=(q?O:P).right,oe=($?O:P).top,Qe=($?O:P).bottom;if(M&&(s=!0,!j))return;if(L&&(s=!1),L&&!j){s=!0;return}if(j&&_e(R.relatedTarget)&&Ns(c.floating,R.relatedTarget)||v&&Oh(v.nodesRef.current,h).some(ne=>{let{context:se}=ne;return se==null?void 0:se.open}))return;if(K==="top"&&m>=O.bottom-1||K==="bottom"&&m<=O.top+1||K==="left"&&k>=O.right-1||K==="right"&&k<=O.left+1)return T();let ee=[];switch(K){case"top":ee=[[X,O.top+1],[X,P.bottom-1],[Z,P.bottom-1],[Z,O.top+1]];break;case"bottom":ee=[[X,P.top+1],[X,O.bottom-1],[Z,O.bottom-1],[Z,P.top+1]];break;case"left":ee=[[P.right-1,Qe],[P.right-1,oe],[O.left+1,oe],[O.left+1,Qe]];break;case"right":ee=[[O.right-1,Qe],[O.right-1,oe],[P.left+1,oe],[P.left+1,Qe]];break}function U(ne){let[se,ve]=ne;switch(K){case"top":{const Je=[q?se+t/2:x?se+t*4:se-t*4,ve+t+1],He=[q?se-t/2:x?se+t*4:se-t*4,ve+t+1],ze=[[P.left,x||q?P.bottom-t:P.top],[P.right,x?q?P.bottom-t:P.top:P.bottom-t]];return[Je,He,...ze]}case"bottom":{const Je=[q?se+t/2:x?se+t*4:se-t*4,ve-t],He=[q?se-t/2:x?se+t*4:se-t*4,ve-t],ze=[[P.left,x||q?P.top+t:P.bottom],[P.right,x?q?P.top+t:P.bottom:P.top+t]];return[Je,He,...ze]}case"left":{const Je=[se+t+1,$?ve+t/2:G?ve+t*4:ve-t*4],He=[se+t+1,$?ve-t/2:G?ve+t*4:ve-t*4];return[...[[G||$?P.right-t:P.left,P.top],[G?$?P.right-t:P.left:P.right-t,P.bottom]],Je,He]}case"right":{const Je=[se-t,$?ve+t/2:G?ve+t*4:ve-t*4],He=[se-t,$?ve-t/2:G?ve+t*4:ve-t*4],ze=[[G||$?P.left+t:P.right,P.top],[G?$?P.left+t:P.right:P.left+t,P.bottom]];return[Je,He,...ze]}}}if(!sl([S,N],ee)){if(s&&!V)return T();if(!j&&n){const ne=u(R.clientX,R.clientY);if(ne!==null&&ne<.1)return T()}sl([S,N],U([k,m]))?!s&&n&&(a=window.setTimeout(T,40)):T()}}};return d.__options={blockPointerEvents:r},d}const ns=()=>{const{cn:e}=ae();return b.createElement(Xu,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Yg=()=>{const{cn:e}=ae();return b.createElement(Xu,{title:ar("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},Ma=f.createContext(null),ot=(e,t)=>{var r,n,a;const{size:s,error:i,errorId:o}=e,l=f.useContext(Ma),u=On(),d=(r=e.id)!==null&&r!==void 0?r:`${t}-${u}`,g=o??`${t}-error-${u}`,k=`${t}-description-${u}`,m=(l==null?void 0:l.disabled)||e.disabled,y=((l==null?void 0:l.readOnly)||e.readOnly)&&!m||void 0,c=!m&&!y&&!!(i||l!=null&&l.error),A=!m&&!y&&!!i&&typeof i!="boolean",h=Object.assign({},c?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:A,hasError:c,errorId:g,inputDescriptionId:k,size:(n=s??(l==null?void 0:l.size))!==null&&n!==void 0?n:"medium",readOnly:y,inputProps:Object.assign(Object.assign({id:d},h),{"aria-describedby":vr(e["aria-describedby"],{[k]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[g]:A,[(a=l==null?void 0:l.errorId)!==null&&a!==void 0?a:""]:c&&!!(l!=null&&l.error)})||void 0,disabled:m})}},$g={global:{dateLocale:sg,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},Wg={global:{dateLocale:og,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},Jg=(e="nb")=>{switch(e){case"nn":return og;case"en":return sg;default:return ig}},zg=e=>{switch(e){case"nn":return Wg.DatePicker;case"en":case"en-GB":return $g.DatePicker;default:return}},Lh=e=>{switch(e){case"nn":return Wg.global;case"en":case"en-GB":return $g.global;default:return}},[Xg,rs]=tt();var wh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const[jh,Fi]=tt({errorMessage:"useDateInputContext must be used with DateInputContext"}),Zg=f.forwardRef((e,t)=>{const{className:r,hideLabel:n=!1,label:a,description:s,variant:i="datepicker",setAnchorRef:o}=e,l=wh(e,["className","hideLabel","label","description","variant","setAnchorRef"]),u=f.useRef(null),d=rs().translate,{cn:g}=ae(),k=i==="datepicker",m={prefix:k?"datepicker-input":"monthpicker-input",iconTitle:{open:k?"openDatePicker":"openMonthPicker",close:k?"closeDatePicker":"closeMonthPicker"}},y=Fi(),{inputProps:c,size:A="medium",inputDescriptionId:h,errorId:v,showErrorMsg:E,hasError:R,readOnly:T}=ot(e,m.prefix);return b.createElement("div",{className:g(r,"navds-form-field",`navds-form-field--${A}`,"navds-date__field",{"navds-text-field--error":R,"navds-date__field--error":R,"navds-form-field--disabled":!!c.disabled,"navds-text-field--disabled":!!c.disabled,"navds-form-field--readonly":T,"navds-text-field--readonly":T,"navds-date__field--readonly":T})},b.createElement(Oe,{htmlFor:c.id,size:A,className:g("navds-form-field__label",{"navds-sr-only":n})},T&&b.createElement(ns,null),a),!!s&&b.createElement(ie,{as:"div",className:g("navds-form-field__description",{"navds-sr-only":n}),id:h,size:A},s),b.createElement("div",{className:g("navds-date__field-wrapper")},b.createElement("input",Object.assign({ref:t},ln(l,["error","errorId","size"]),c,{autoComplete:"off","aria-controls":y!=null&&y.open?y.ariaId:void 0,readOnly:T,className:g("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${A}`),size:k?11:14})),b.createElement("button",{disabled:c.disabled||T,tabIndex:T||y!=null&&y.open?-1:0,onClick:()=>{y==null||y.onOpen(),o==null||o(u.current)},type:"button",className:g("navds-date__field-button"),ref:u},b.createElement(eE,{title:d(m.iconTitle[y!=null&&y.open?"close":"open"])}))),b.createElement("div",{className:g("navds-form-field__error"),id:v,"aria-relevant":"additions removals","aria-live":"polite"},E&&b.createElement(wt,{size:A,showIcon:!0},e.error)))}),Mh=f.forwardRef((e,t)=>b.createElement(Zg,Object.assign({},e,{ref:t})));f.forwardRef((e,t)=>b.createElement(Zg,Object.assign({},e,{variant:"monthpicker",ref:t})));var Kh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Fh=f.forwardRef((e,t)=>{var{className:r}=e,n=Kh(e,["className"]);const{cn:a}=ae();return b.createElement("div",Object.assign({},n,{ref:t,className:a("navds-modal__body",r)}))});var Vh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const qh=f.forwardRef((e,t)=>{var{className:r}=e,n=Vh(e,["className"]);const{cn:a}=ae();return b.createElement("div",Object.assign({},n,{ref:t,className:a("navds-modal__footer",r)}))});var xh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Qg=f.forwardRef((e,t)=>{var{children:r,className:n,closeButton:a=!0}=e,s=xh(e,["children","className","closeButton"]);const{cn:i}=ae(),o=jt(),l=ar("global");return b.createElement("div",Object.assign({},s,{ref:t,className:i("navds-modal__header",n)}),o.closeHandler&&a&&b.createElement(Ge,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:u=>{["Enter"," "].includes(u.key)&&u.repeat&&u.preventDefault()},onClick:o.closeHandler,icon:b.createElement(Qu,{title:l("close")})}),r)}),il=({clientX:e,clientY:t},{left:r,top:n,right:a,bottom:s})=>!(e<r||t<n||e>a||t>s);function Gh(e,t,r){if(!(t&&t.closeButton===!1))return r?()=>{var n;return r()!==!1&&((n=e.current)===null||n===void 0?void 0:n.close())}:()=>{var n;return(n=e.current)===null||n===void 0?void 0:n.close()}}const Xt="navds-modal__document-body";function Bh(e,t,r){b.useEffect(()=>{if(r||!e.current||!t)return;e.current.open&&document.body.classList.add(Xt);const n=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(Xt):document.body.classList.remove(Xt)});return n.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{n.disconnect(),document.body.classList.remove(Xt)}},[e,t,r])}const Ur=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function em(e,t){var r="on"+t.type.toLowerCase();return typeof e[r]=="function"&&e[r](t),e.dispatchEvent(t)}function ct(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function nm(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Uh(e,t){for(var r=0;r<e.length;++r)if(e[r]===t)return!0;return!1}function Ss(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function rm(e){var t=["button","input","keygen","select","textarea"],r=t.map(function(i){return i+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var n=e.querySelector(r.join(", "));if(!n&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),s=0;s<a.length&&!(a[s].tagName&&a[s].shadowRoot&&(n=rm(a[s].shadowRoot),n));s++);return n}function ol(e){return e.isConnected||document.body.contains(e)}function tm(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var r=ke.formSubmitter;if(!r){var n=e.target,a="getRootNode"in n&&n.getRootNode()||document;r=a.activeElement}return!r||r.form!==t?null:r}function Hh(e){if(!e.defaultPrevented){var t=e.target,r=ke.imagemapUseValue,n=tm(e);r===null&&n&&(r=n.value);var a=ct(t);if(a){var s=n&&n.getAttribute("formmethod")||t.getAttribute("method");s==="dialog"&&(e.preventDefault(),r!=null?a.close(r):a.close())}}}function am(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",Hh,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,n=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),a,s=function(i){if(i.target===e){var o="DOMNodeRemoved";r|=i.type.substr(0,o.length)===o,window.clearTimeout(a),a=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,s)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}am.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&ol(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),ke.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=rm(this.dialog_)),nm(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!ol(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!ke.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,ke.needsCentering(this.dialog_)?(ke.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});em(this.dialog_,t)}};var ke={};ke.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,r=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,r)+"px"};ke.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var r=document.styleSheets[t],n=null;try{n=r.cssRules}catch{}if(n)for(var a=0;a<n.length;++a){var s=n[a],i=null;try{i=document.querySelectorAll(s.selectorText)}catch{}if(!(!i||!Uh(i,e))){var o=s.style.getPropertyValue("top"),l=s.style.getPropertyValue("bottom");if(o&&o!=="auto"||l&&l!=="auto")return!0}}}return!1};ke.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!ke.isInlinePositionSetByStylesheet(e)};ke.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new am(e)};ke.registerDialog=function(e){e.showModal||ke.forceRegisterDialog(e)};ke.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var r=[];t.forEach(function(n){for(var a=0,s;s=n.removedNodes[a];++a)s instanceof Element&&(s.localName==="dialog"&&r.push(s),r=r.concat(s.querySelectorAll("dialog")))}),r.length&&e(r)}))};ke.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};ke.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};ke.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,r;r=this.pendingDialogStack[t];++t)r.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var n=this.pendingDialogStack[0];if(n){var a=n.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};ke.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=ct(e);){for(var t=0,r;r=this.pendingDialogStack[t];++t)if(r.dialog===e)return t===0;e=e.parentElement}return!1};ke.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),nm(t),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],n=r.dialog,a=n.compareDocumentPosition(t);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};ke.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&em(r.dialog,t)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};ke.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};ke.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};ke.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Ur&&(ke.dm=new ke.DialogManager,ke.formSubmitter=null,ke.imagemapUseValue=null);if(Ur){var ll=document.createElement("form");if(ll.setAttribute("method","dialog"),ll.method!=="dialog"){var qr=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(qr){var Ch=qr.get;qr.get=function(){return Ss(this)?"dialog":Ch.call(this)};var Yh=qr.set;qr.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Yh.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",qr)}}document.addEventListener("click",function(e){if(ke.formSubmitter=null,ke.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var r=e.composedPath();t=r.shift()||t}if(!(!t||!Ss(t.form))){var n=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!n){if(!(t.localName==="input"&&t.type==="image"))return;ke.imagemapUseValue=e.offsetX+","+e.offsetY}var a=ct(t);a&&(ke.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,r=ct(t);if(!r){var n=tm(e),a=n&&n.getAttribute("formmethod")||t.getAttribute("method");a==="dialog"&&e.preventDefault()}});var $h=HTMLFormElement.prototype.submit,Wh=function(){if(!Ss(this))return $h.call(this);var e=ct(this);e&&e.close()};HTMLFormElement.prototype.submit=Wh}var Jh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Un=f.forwardRef((e,t)=>{var r,n,{header:a,children:s,open:i,onBeforeClose:o,onCancel:l,closeOnBackdropClick:u,width:d,placement:g,portal:k,className:m,"aria-labelledby":y,style:c,onClick:A,onMouseDown:h}=e,v=Jh(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:E}=ae(),R=f.useRef(E("navds-modal--polyfilled")),T=f.useRef(null),S=rt(T,t),N=On(),I=(r=Wa())===null||r===void 0?void 0:r.rootElement,D=Ah({root:I}),j=Fi(!1),M=jt(!1)!==void 0;M&&!j&&console.error("Modals should not be nested"),f.useEffect(()=>{Ur&&T.current&&D&&(ke.registerDialog(T.current),T.current.classList.add(R.current)),T.current&&D&&(T.current.autofocus=!0)},[D]),f.useEffect(()=>{T.current&&D&&i!==void 0&&(i&&!T.current.open?T.current.showModal():!i&&T.current.open&&T.current.close())},[D,i]),Bh(T,D,M);const L=typeof d=="string"&&["small","medium"].includes(d),O=E("navds-modal",m,{[R.current]:Ur,"navds-modal--autowidth":!d,[`navds-modal--${d}`]:L,"navds-modal--top":g==="top"&&!Ur}),P=Object.assign(Object.assign({},c),L?{}:{width:d}),K=f.useRef({clientX:0,clientY:0}),x=Z=>{K.current=Z},G=u&&!Ur,V=Z=>{if(Z.target!==T.current)return;const oe=T.current.getBoundingClientRect();il(K.current,oe)||il(Z,oe)||o!==void 0&&o()===!1||T.current.close()},q=Z=>{o&&o()===!1&&Z.preventDefault()},$=!y&&!v["aria-label"]&&a?N:y,X=b.createElement("dialog",Object.assign({},v,{ref:S,className:O,style:P,onCancel:Hr(l,q),onClick:G?Hr(A,V):A,onMouseDown:G?Hr(h,x):h,"aria-labelledby":$}),b.createElement(wE,{closeHandler:Gh(T,a,o),ref:T},a&&b.createElement(Qg,null,a.label&&b.createElement(zr,{className:E("navds-modal__label")},a.label),b.createElement(Ca,{size:(n=a.size)!==null&&n!==void 0?n:"medium",level:"1",id:N},a.icon&&b.createElement("span",{className:E("navds-modal__header-icon")},a.icon),a.heading)),s));return k?D?du.createPortal(X,D):null:X});Un.Header=Qg;Un.Body=Fh;Un.Footer=qh;var zh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Xh=f.forwardRef((e,t)=>{var{className:r}=e,n=zh(e,["className"]);const{cn:a}=ae();return b.createElement("div",Object.assign({},n,{ref:t,className:a("navds-popover__content",r)}))});var Zh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const et=f.forwardRef((e,t)=>{var{className:r,children:n,anchorEl:a,arrow:s=!0,open:i,onClose:o,placement:l="top",offset:u,strategy:d,flip:g=!0}=e,k=Zh(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:m}=ae(),y=f.useRef(null),c=jt(!1)!==void 0,A=Fi(!1),h=d??(c?"fixed":"absolute"),v=A?!1:g,E=Lt(!1),{update:R,refs:T,placement:S,middlewareData:{arrow:{x:N,y:I}={}},floatingStyles:D}=Cg({strategy:h,placement:l,open:i,middleware:[hg(u??(E?8:s?16:4)),v&&Rg({padding:5,fallbackPlacements:["bottom","top"]}),Tg({padding:12}),Ng({element:y,padding:8})]});Xr(()=>{T.setReference(a)},[a]);const j=rt(T.setFloating,t);Xr(()=>{if(!T.reference.current||!T.floating.current||!i)return;const L=ei(T.reference.current,T.floating.current,R);return()=>L()},[T.floating,T.reference,R,i,a]);const M={top:"bottom",right:"left",bottom:"top",left:"right"}[S.split("-")[0]];return b.createElement(Ky,{asChild:!0,safeZone:{anchor:a,dismissable:T.floating.current},onDismiss:()=>i&&(o==null?void 0:o()),enabled:i},b.createElement("div",Object.assign({ref:j},k,{className:m("navds-popover",r,{"navds-popover--hidden":!i||!a}),style:Object.assign(Object.assign({},k.style),D),"data-placement":S,"aria-hidden":!i||!a}),n,s&&!E&&b.createElement("div",{ref:L=>{y.current=L},style:Object.assign(Object.assign(Object.assign({},N!=null?{left:N}:{}),I!=null?{top:I}:{}),M?{[M]:"-0.5rem"}:{}),className:m("navds-popover__arrow")})))});et.Content=Xh;const Qh={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},eT=({open:e,children:t,onClose:r,anchor:n,locale:a,translate:s,variant:i,popoverProps:o})=>{const l=ar("global",Lh(a)),{cn:u}=ae(),d=f.useRef(null),g=jt(!1)!==void 0;return ME("screen and (min-width: 768px)",!0)&&!g?b.createElement(et,Object.assign({arrow:!1,anchorEl:n,open:e,onClose:r,placement:"bottom-start",role:"dialog",className:u("navds-date__popover",{"navds-date":i==="month"}),flip:!1},o),t):b.createElement(Un,{ref:d,open:e,onClose:m=>{m.stopPropagation(),r()},"aria-label":s(Qh[i]),className:u("navds-date__modal",{"navds-date__nested-modal":g,"navds-date":i==="month"}),closeOnBackdropClick:!0,placement:"top"},b.createElement("div",{className:u("navds-date__modal-body")},t,b.createElement(Ge,{variant:"tertiary",onClick:()=>{var m;return(m=d==null?void 0:d.current)===null||m===void 0?void 0:m.close()},size:"small",type:"button"},l("close"))))};function sm(e){return!!(e&&typeof e=="object"&&"from"in e)}var te;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(te||(te={}));var Se;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(Se||(Se={}));var _n;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(_n||(_n={}));var kn;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(kn||(kn={}));const Os={},ft={};function Et(e,t){try{const n=(Os[e]||(Os[e]=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format))(t).split("GMT")[1]||"";return n in ft?ft[n]:dl(n,n.split(":"))}catch{if(e in ft)return ft[e];const r=e==null?void 0:e.match(nT);return r?dl(e,r.slice(1)):NaN}}const nT=/([+-]\d\d):?(\d\d)?/;function dl(e,t){const r=+t[0],n=+(t[1]||0);return ft[e]=r>0?r*60+n:r*60-n}class xn extends Date{constructor(...t){super(),t.length>1&&typeof t[t.length-1]=="string"&&(this.timeZone=t.pop()),this.internal=new Date,isNaN(Et(this.timeZone,this))?this.setTime(NaN):t.length?typeof t[0]=="number"&&(t.length===1||t.length===2&&typeof t[1]!="number")?this.setTime(t[0]):typeof t[0]=="string"?this.setTime(+new Date(t[0])):t[0]instanceof Date?this.setTime(+t[0]):(this.setTime(+new Date(...t)),im(this),ai(this)):this.setTime(Date.now())}static tz(t,...r){return r.length?new xn(...r,t):new xn(Date.now(),t)}withTimeZone(t){return new xn(+this,t)}getTimezoneOffset(){return-Et(this.timeZone,this)}setTime(t){return Date.prototype.setTime.apply(this,arguments),ai(this),+this}[Symbol.for("constructDateFrom")](t){return new xn(+new Date(t),this.timeZone)}}const ul=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!ul.test(e))return;const t=e.replace(ul,"$1UTC");xn.prototype[t]&&(e.startsWith("get")?xn.prototype[e]=function(){return this.internal[t]()}:(xn.prototype[e]=function(){return Date.prototype[t].apply(this.internal,arguments),rT(this),+this},xn.prototype[t]=function(){return Date.prototype[t].apply(this,arguments),ai(this),+this}))});function ai(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function rT(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),im(e)}function im(e){const t=Et(e.timeZone,e),r=new Date(+e);r.setUTCHours(r.getUTCHours()-1);const n=-new Date(+e).getTimezoneOffset(),a=-new Date(+r).getTimezoneOffset(),s=n-a,i=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();s&&i&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+s);const o=n-t;o&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+o);const l=Et(e.timeZone,e),d=-new Date(+e).getTimezoneOffset()-l,g=l!==t,k=d-o;if(g&&k){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+k);const m=Et(e.timeZone,e),y=l-m;y&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+y),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+y))}}class Ir extends xn{static tz(t,...r){return r.length?new Ir(...r,t):new Ir(Date.now(),t)}toISOString(){const[t,r,n]=this.tzComponents(),a=`${t}${r}:${n}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[t,r,n,a]=this.internal.toUTCString().split(" ");return`${t==null?void 0:t.slice(0,-1)} ${n} ${r} ${a}`}toTimeString(){const t=this.internal.toUTCString().split(" ")[4],[r,n,a]=this.tzComponents();return`${t} GMT${r}${n}${a} (${tT(this.timeZone,this)})`}toLocaleString(t,r){return Date.prototype.toLocaleString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleDateString(t,r){return Date.prototype.toLocaleDateString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleTimeString(t,r){return Date.prototype.toLocaleTimeString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}tzComponents(){const t=this.getTimezoneOffset(),r=t>0?"-":"+",n=String(Math.floor(Math.abs(t)/60)).padStart(2,"0"),a=String(Math.abs(t)%60).padStart(2,"0");return[r,n,a]}withTimeZone(t){return new Ir(+this,t)}[Symbol.for("constructDateFrom")](t){return new Ir(+new Date(t),this.timeZone)}}function tT(e,t){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(t).slice(12)}const gl=5,aT=4;function sT(e,t){const r=t.startOfMonth(e),n=r.getDay()>0?r.getDay():7,a=t.addDays(e,-n+1),s=t.addDays(a,gl*7-1);return t.getMonth(e)===t.getMonth(s)?gl:aT}function om(e,t){const r=t.startOfMonth(e),n=r.getDay();return n===1?r:n===0?t.addDays(r,-1*6):t.addDays(r,-1*(n-1))}function iT(e,t){const r=om(e,t),n=sT(e,t);return t.addDays(r,n*7-1)}class sr{constructor(t,r){this.Date=Date,this.today=()=>{var n;return(n=this.overrides)!=null&&n.today?this.overrides.today():this.options.timeZone?Ir.tz(this.options.timeZone):new this.Date},this.newDate=(n,a,s)=>{var i;return(i=this.overrides)!=null&&i.newDate?this.overrides.newDate(n,a,s):this.options.timeZone?new Ir(n,a,s,this.options.timeZone):new Date(n,a,s)},this.addDays=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addDays)==null?void 0:i.call(s,n,a))??qt(n,a)},this.addMonths=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addMonths)==null?void 0:i.call(s,n,a))??Ii(n,a)},this.addWeeks=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addWeeks)==null?void 0:i.call(s,n,a))??Ob(n,a)},this.addYears=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addYears)==null?void 0:i.call(s,n,a))??_i(n,a)},this.differenceInCalendarDays=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.differenceInCalendarDays)==null?void 0:i.call(s,n,a))??gr(n,a)},this.differenceInCalendarMonths=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.differenceInCalendarMonths)==null?void 0:i.call(s,n,a))??wb(n,a)},this.eachMonthOfInterval=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.eachMonthOfInterval)==null?void 0:s.call(a,n))??Dg(n)},this.endOfBroadcastWeek=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.endOfBroadcastWeek)==null?void 0:i.call(s,n,a))??iT(n,this)},this.endOfISOWeek=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.endOfISOWeek)==null?void 0:s.call(a,n))??Mb(n)},this.endOfMonth=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.endOfMonth)==null?void 0:s.call(a,n))??Og(n)},this.endOfWeek=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.endOfWeek)==null?void 0:i.call(s,n,a??this.options))??Pg(n,a??this.options)},this.endOfYear=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.endOfYear)==null?void 0:s.call(a,n))??Qa(n)},this.format=(n,a,s)=>{var o,l;const i=((l=(o=this.overrides)==null?void 0:o.format)==null?void 0:l.call(o,n,a,s??this.options))??jr(n,a,s??this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(i):i},this.getISOWeek=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.getISOWeek)==null?void 0:s.call(a,n))??Oi(n)},this.getMonth=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.getMonth)==null?void 0:s.call(a,n))??Li(n)},this.getYear=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.getYear)==null?void 0:s.call(a,n))??wi(n)},this.getWeek=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.getWeek)==null?void 0:i.call(s,n,a??this.options))??Pi(n,a??this.options)},this.isAfter=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isAfter)==null?void 0:i.call(s,n,a))??Mg(n,a)},this.isBefore=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isBefore)==null?void 0:i.call(s,n,a))??Gt(n,a)},this.isDate=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.isDate)==null?void 0:s.call(a,n))??Sg(n)},this.isSameDay=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isSameDay)==null?void 0:i.call(s,n,a))??Si(n,a)},this.isSameMonth=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isSameMonth)==null?void 0:i.call(s,n,a))??$A(n,a)},this.isSameYear=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isSameYear)==null?void 0:i.call(s,n,a))??xg(n,a)},this.max=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.max)==null?void 0:s.call(a,n))??Db(n)},this.min=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.min)==null?void 0:s.call(a,n))??Pb(n)},this.setMonth=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.setMonth)==null?void 0:i.call(s,n,a))??Gg(n,a)},this.setYear=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.setYear)==null?void 0:i.call(s,n,a))??Bg(n,a)},this.startOfBroadcastWeek=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.startOfBroadcastWeek)==null?void 0:i.call(s,n,a??this))??om(n,a??this)},this.startOfDay=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.startOfDay)==null?void 0:s.call(a,n))??tr(n)},this.startOfISOWeek=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.startOfISOWeek)==null?void 0:s.call(a,n))??Lr(n)},this.startOfMonth=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.startOfMonth)==null?void 0:s.call(a,n))??wr(n)},this.startOfWeek=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.startOfWeek)==null?void 0:s.call(a,n))??nr(n,this.options)},this.startOfYear=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.startOfYear)==null?void 0:s.call(a,n))??xt(n)},this.options={locale:$a,...t},this.overrides=r}getDigitMap(){const{numerals:t="latn"}=this.options,r=new Intl.NumberFormat("en-US",{numberingSystem:t}),n={};for(let a=0;a<10;a++)n[a.toString()]=r.format(a);return n}replaceDigits(t){const r=this.getDigitMap();return t.replace(/\d/g,n=>r[n]||n)}formatNumber(t){return this.replaceDigits(t.toString())}}const ir=new sr;function oT(e,t,r={}){return Object.entries(e).filter(([,a])=>a===!0).reduce((a,[s])=>(r[s]?a.push(r[s]):t[Se[s]]?a.push(t[Se[s]]):t[_n[s]]&&a.push(t[_n[s]]),a),[t[te.Day]])}function lT(e){return b.createElement("button",{...e})}function dT(e){return b.createElement("span",{...e})}function uT(e){const{size:t=24,orientation:r="left",className:n}=e;return b.createElement("svg",{className:n,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&b.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&b.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&b.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&b.createElement("polygon",{points:"8 18.612 14.1888889 12.5 8 6.37733333 9.91111111 4.5 18 12.5 9.91111111 20.5"}))}function gT(e){const{day:t,modifiers:r,...n}=e;return b.createElement("td",{...n})}function mT(e){const{day:t,modifiers:r,...n}=e,a=b.useRef(null);return b.useEffect(()=>{var s;r.focused&&((s=a.current)==null||s.focus())},[r.focused]),b.createElement("button",{ref:a,...n})}function kT(e){const{options:t,className:r,components:n,classNames:a,...s}=e,i=[a[te.Dropdown],r].join(" "),o=t==null?void 0:t.find(({value:l})=>l===s.value);return b.createElement("span",{"data-disabled":s.disabled,className:a[te.DropdownRoot]},b.createElement(n.Select,{className:i,...s},t==null?void 0:t.map(({value:l,label:u,disabled:d})=>b.createElement(n.Option,{key:l,value:l,disabled:d},u))),b.createElement("span",{className:a[te.CaptionLabel],"aria-hidden":!0},o==null?void 0:o.label,b.createElement(n.Chevron,{orientation:"down",size:18,className:a[te.Chevron]})))}function fT(e){return b.createElement("div",{...e})}function vT(e){return b.createElement("div",{...e})}function cT(e){const{calendarMonth:t,displayIndex:r,...n}=e;return b.createElement("div",{...n},e.children)}function ET(e){const{calendarMonth:t,displayIndex:r,...n}=e;return b.createElement("div",{...n})}function pT(e){return b.createElement("table",{...e})}function yT(e){return b.createElement("div",{...e})}const lm=f.createContext(void 0);function Kr(){const e=f.useContext(lm);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function bT(e){const{components:t}=Kr();return b.createElement(t.Dropdown,{...e})}function AT(e){const{onPreviousClick:t,onNextClick:r,previousMonth:n,nextMonth:a,...s}=e,{components:i,classNames:o,labels:{labelPrevious:l,labelNext:u}}=Kr(),d=f.useCallback(k=>{a&&(r==null||r(k))},[a,r]),g=f.useCallback(k=>{n&&(t==null||t(k))},[n,t]);return b.createElement("nav",{...s},b.createElement(i.PreviousMonthButton,{type:"button",className:o[te.PreviousMonthButton],tabIndex:n?void 0:-1,"aria-disabled":n?void 0:!0,"aria-label":l(n),onClick:g},b.createElement(i.Chevron,{disabled:n?void 0:!0,className:o[te.Chevron],orientation:"left"})),b.createElement(i.NextMonthButton,{type:"button",className:o[te.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":u(a),onClick:d},b.createElement(i.Chevron,{disabled:a?void 0:!0,orientation:"right",className:o[te.Chevron]})))}function hT(e){const{components:t}=Kr();return b.createElement(t.Button,{...e})}function TT(e){return b.createElement("option",{...e})}function RT(e){const{components:t}=Kr();return b.createElement(t.Button,{...e})}function NT(e){const{rootRef:t,...r}=e;return b.createElement("div",{...r,ref:t})}function IT(e){return b.createElement("select",{...e})}function _T(e){const{week:t,...r}=e;return b.createElement("tr",{...r})}function ST(e){return b.createElement("th",{...e})}function OT(e){return b.createElement("thead",{"aria-hidden":!0},b.createElement("tr",{...e}))}function DT(e){const{week:t,...r}=e;return b.createElement("th",{...r})}function PT(e){return b.createElement("th",{...e})}function LT(e){return b.createElement("tbody",{...e})}function wT(e){const{components:t}=Kr();return b.createElement(t.Dropdown,{...e})}const jT=Object.freeze(Object.defineProperty({__proto__:null,Button:lT,CaptionLabel:dT,Chevron:uT,Day:gT,DayButton:mT,Dropdown:kT,DropdownNav:fT,Footer:vT,Month:cT,MonthCaption:ET,MonthGrid:pT,Months:yT,MonthsDropdown:bT,Nav:AT,NextMonthButton:hT,Option:TT,PreviousMonthButton:RT,Root:NT,Select:IT,Week:_T,WeekNumber:DT,WeekNumberHeader:PT,Weekday:ST,Weekdays:OT,Weeks:LT,YearsDropdown:wT},Symbol.toStringTag,{value:"Module"}));function MT(e){return{...jT,...e}}function KT(e){const t={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0};return Object.entries(e).forEach(([r,n])=>{r.startsWith("data-")&&(t[r]=n)}),t}function FT(){const e={};for(const t in te)e[te[t]]=`rdp-${te[t]}`;for(const t in Se)e[Se[t]]=`rdp-${Se[t]}`;for(const t in _n)e[_n[t]]=`rdp-${_n[t]}`;for(const t in kn)e[kn[t]]=`rdp-${kn[t]}`;return e}function dm(e,t,r){return(r??new sr(t)).format(e,"LLLL y")}const VT=dm;function qT(e,t,r){return(r??new sr(t)).format(e,"d")}function xT(e,t=ir){return t.format(e,"LLLL")}function GT(e){return e<10?`0${e.toLocaleString()}`:`${e.toLocaleString()}`}function BT(){return""}function UT(e,t,r){return(r??new sr(t)).format(e,"cccccc")}function um(e,t=ir){return t.format(e,"yyyy")}const HT=um,CT=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:dm,formatDay:qT,formatMonthCaption:VT,formatMonthDropdown:xT,formatWeekNumber:GT,formatWeekNumberHeader:BT,formatWeekdayName:UT,formatYearCaption:HT,formatYearDropdown:um},Symbol.toStringTag,{value:"Module"}));function YT(e){return e!=null&&e.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e!=null&&e.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...CT,...e}}function $T(e,t,r,n,a){const{startOfMonth:s,startOfYear:i,endOfYear:o,eachMonthOfInterval:l,getMonth:u}=a;return l({start:i(e),end:o(e)}).map(k=>{const m=n.formatMonthDropdown(k,a),y=u(k),c=t&&k<s(t)||r&&k>s(r)||!1;return{value:y,label:m,disabled:c}})}function WT(e,t={},r={}){let n={...t==null?void 0:t[te.Day]};return Object.entries(e).filter(([,a])=>a===!0).forEach(([a])=>{n={...n,...r==null?void 0:r[a]}}),n}function JT(e,t,r){const n=e.today(),a=t?e.startOfISOWeek(n):e.startOfWeek(n),s=[];for(let i=0;i<7;i++){const o=e.addDays(a,i);s.push(o)}return s}function zT(e,t,r,n){if(!e||!t)return;const{startOfYear:a,endOfYear:s,addYears:i,getYear:o,isBefore:l,isSameYear:u}=n,d=a(e),g=s(t),k=[];let m=d;for(;l(m,g)||u(m,g);)k.push(m),m=i(m,1);return k.map(y=>{const c=r.formatYearDropdown(y,n);return{value:o(y),label:c,disabled:!1}})}function gm(e,t,r){return(r??new sr(t)).format(e,"LLLL y")}const XT=gm;function ZT(e,t,r,n){let a=(n??new sr(r)).format(e,"PPPP");return t!=null&&t.today&&(a=`Today, ${a}`),a}function mm(e,t,r,n){let a=(n??new sr(r)).format(e,"PPPP");return t.today&&(a=`Today, ${a}`),t.selected&&(a=`${a}, selected`),a}const QT=mm;function eR(){return""}function nR(e){return"Choose the Month"}function rR(e){return"Go to the Next Month"}function tR(e){return"Go to the Previous Month"}function aR(e,t,r){return(r??new sr(t)).format(e,"cccc")}function sR(e,t){return`Week ${e}`}function iR(e){return"Week Number"}function oR(e){return"Choose the Year"}const lR=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:XT,labelDay:QT,labelDayButton:mm,labelGrid:gm,labelGridcell:ZT,labelMonthDropdown:nR,labelNav:eR,labelNext:rR,labelPrevious:tR,labelWeekNumber:sR,labelWeekNumberHeader:iR,labelWeekday:aR,labelYearDropdown:oR},Symbol.toStringTag,{value:"Module"}));function dR(e,t,{classNames:r,months:n,focused:a,dateLib:s}){const i=f.useRef(null),o=f.useRef(n),l=f.useRef(!1);f.useLayoutEffect(()=>{const u=o.current;if(o.current=n,!t||!e.current||!(e.current instanceof HTMLElement))return;const d=i.current,g=e.current.cloneNode(!0);if(g instanceof HTMLElement?([...g.querySelectorAll("[data-animated-month]")??[]].forEach(A=>{const h=A.querySelector("[data-animated-month]");h&&A.contains(h)&&A.removeChild(h)}),i.current=g):i.current=null,n.length===0||u.length===0||n.length!==u.length||a||l.current||s.isSameMonth(n[0].date,u[0].date))return;const m=[...(d==null?void 0:d.querySelectorAll("[data-animated-month]"))??[]],y=[...e.current.querySelectorAll("[data-animated-month]")??[]];if(y&&y.every(c=>c instanceof HTMLElement)&&m&&m.every(c=>c instanceof HTMLElement)){l.current=!0;const c=s.isAfter(n[0].date,u[0].date);y.forEach((A,h)=>{const v=m[h];if(!v)return;const E=c?r[kn.caption_after_enter]:r[kn.caption_before_enter],R=c?r[kn.weeks_after_enter]:r[kn.weeks_before_enter];A.style.position="relative",A.style.overflow="hidden";const T=A.querySelector("[data-animated-caption]");T&&T instanceof HTMLElement&&T.classList.add(E);const S=A.querySelector("[data-animated-weeks]");S&&S instanceof HTMLElement&&S.classList.add(R);const N=()=>{l.current=!1,T&&T instanceof HTMLElement&&T.classList.remove(E),S&&S instanceof HTMLElement&&S.classList.remove(R),A.style.position="",A.style.overflow="",A.contains(v)&&A.removeChild(v)};v.style.pointerEvents="none",v.style.position="absolute",v.style.overflow="hidden",v.setAttribute("aria-hidden","true");const I=v.querySelector("[data-animated-weekdays]");I&&I instanceof HTMLElement&&(I.style.opacity="0");const D=v.querySelector("[data-animated-caption]");D&&D instanceof HTMLElement&&(D.classList.add(c?r[kn.caption_before_exit]:r[kn.caption_after_exit]),D.addEventListener("animationend",N));const j=v.querySelector("[data-animated-weeks]");j&&j instanceof HTMLElement&&j.classList.add(c?r[kn.weeks_before_exit]:r[kn.weeks_after_exit]),A.insertBefore(v,A.firstChild)})}})}function uR(e,t,r,n){const a=e[0],s=e[e.length-1],{ISOWeek:i,fixedWeeks:o,broadcastCalendar:l}=r??{},{addDays:u,differenceInCalendarDays:d,differenceInCalendarMonths:g,endOfBroadcastWeek:k,endOfISOWeek:m,endOfMonth:y,endOfWeek:c,isAfter:A,startOfBroadcastWeek:h,startOfISOWeek:v,startOfWeek:E}=n,R=l?h(a,n):i?v(a):E(a),T=l?k(s,n):i?m(y(s)):c(y(s)),S=d(T,R),N=g(s,a)+1,I=[];for(let M=0;M<=S;M++){const L=u(R,M);if(t&&A(L,t))break;I.push(L)}const j=(l?35:42)*N;if(o&&I.length<j){const M=j-I.length;for(let L=0;L<M;L++){const O=u(I[I.length-1],1);I.push(O)}}return I}function gR(e){const t=[];return e.reduce((r,n)=>{const a=[],s=n.weeks.reduce((i,o)=>[...i,...o.days],a);return[...r,...s]},t)}function mR(e,t,r,n){const{numberOfMonths:a=1}=r,s=[];for(let i=0;i<a;i++){const o=n.addMonths(e,i);if(t&&o>t)break;s.push(o)}return s}function ml(e,t){const{month:r,defaultMonth:n,today:a=t.today(),numberOfMonths:s=1,endMonth:i,startMonth:o}=e;let l=r||n||a;const{differenceInCalendarMonths:u,addMonths:d,startOfMonth:g}=t;if(i&&u(i,l)<0){const k=-1*(s-1);l=d(i,k)}return o&&u(l,o)<0&&(l=o),g(l)}class km{constructor(t,r,n=ir){this.date=t,this.displayMonth=r,this.outside=!!(r&&!n.isSameMonth(t,r)),this.dateLib=n}isEqualTo(t){return this.dateLib.isSameDay(t.date,this.date)&&this.dateLib.isSameMonth(t.displayMonth,this.displayMonth)}}class kR{constructor(t,r){this.date=t,this.weeks=r}}class fR{constructor(t,r){this.days=r,this.weekNumber=t}}function vR(e,t,r,n){const{addDays:a,endOfBroadcastWeek:s,endOfISOWeek:i,endOfMonth:o,endOfWeek:l,getISOWeek:u,getWeek:d,startOfBroadcastWeek:g,startOfISOWeek:k,startOfWeek:m}=n,y=e.reduce((c,A)=>{const h=r.broadcastCalendar?g(A,n):r.ISOWeek?k(A):m(A),v=r.broadcastCalendar?s(A,n):r.ISOWeek?i(o(A)):l(o(A)),E=t.filter(N=>N>=h&&N<=v),R=r.broadcastCalendar?35:42;if(r.fixedWeeks&&E.length<R){const N=t.filter(I=>{const D=R-E.length;return I>v&&I<=a(v,D)});E.push(...N)}const T=E.reduce((N,I)=>{const D=r.ISOWeek?u(I):d(I),j=N.find(L=>L.weekNumber===D),M=new km(I,A,n);return j?j.days.push(M):N.push(new fR(D,[M])),N},[]),S=new kR(A,T);return c.push(S),c},[]);return r.reverseMonths?y.reverse():y}function cR(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:a,startOfDay:s,startOfMonth:i,endOfMonth:o,addYears:l,endOfYear:u,newDate:d,today:g}=t,{fromYear:k,toYear:m,fromMonth:y,toMonth:c}=e;!r&&y&&(r=y),!r&&k&&(r=t.newDate(k,0,1)),!n&&c&&(n=c),!n&&m&&(n=d(m,11,31));const A=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return r?r=i(r):k?r=d(k,0,1):!r&&A&&(r=a(l(e.today??g(),-100))),n?n=o(n):m?n=d(m,11,31):!n&&A&&(n=u(e.today??g())),[r&&s(r),n&&s(n)]}function ER(e,t,r,n){if(r.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:s=1}=r,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:l}=n,u=a?s:1,d=i(e);if(!t)return o(d,u);if(!(l(t,e)<s))return o(d,u)}function pR(e,t,r,n){if(r.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:s}=r,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:l}=n,u=a?s??1:1,d=i(e);if(!t)return o(d,-u);if(!(l(d,t)<=0))return o(d,-u)}function yR(e){const t=[];return e.reduce((r,n)=>[...r,...n.weeks],t)}function ts(e,t){const[r,n]=f.useState(e);return[t===void 0?r:t,n]}function bR(e,t){const[r,n]=cR(e,t),{startOfMonth:a,endOfMonth:s}=t,i=ml(e,t),[o,l]=ts(i,e.month?i:void 0);f.useEffect(()=>{const S=ml(e,t);l(S)},[e.timeZone]);const u=mR(o,n,e,t),d=uR(u,e.endMonth?s(e.endMonth):void 0,e,t),g=vR(u,d,e,t),k=yR(g),m=gR(g),y=pR(o,r,e,t),c=ER(o,n,e,t),{disableNavigation:A,onMonthChange:h}=e,v=S=>k.some(N=>N.days.some(I=>I.isEqualTo(S))),E=S=>{if(A)return;let N=a(S);r&&N<a(r)&&(N=a(r)),n&&N>a(n)&&(N=a(n)),l(N),h==null||h(N)};return{months:g,weeks:k,days:m,navStart:r,navEnd:n,previousMonth:y,nextMonth:c,goToMonth:E,goToDay:S=>{v(S)||E(S.date)}}}function AR(e,t,r,n){let a,s=0,i=!1;for(;s<e.length&&!i;){const o=e[s],l=t(o);!l[Se.disabled]&&!l[Se.hidden]&&!l[Se.outside]&&(l[Se.focused]||n!=null&&n.isEqualTo(o)||r(o.date)||l[Se.today])&&(a=o,i=!0),s++}return a||(a=e.find(o=>{const l=t(o);return!l[Se.disabled]&&!l[Se.hidden]&&!l[Se.outside]})),a}function Zn(e,t,r=!1,n=ir){let{from:a,to:s}=e;const{differenceInCalendarDays:i,isSameDay:o}=n;return a&&s?(i(s,a)<0&&([a,s]=[s,a]),i(t,a)>=(r?1:0)&&i(s,t)>=(r?1:0)):!r&&s?o(s,t):!r&&a?o(a,t):!1}function fm(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function Vi(e){return!!(e&&typeof e=="object"&&"from"in e)}function vm(e){return!!(e&&typeof e=="object"&&"after"in e)}function cm(e){return!!(e&&typeof e=="object"&&"before"in e)}function Em(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function pm(e,t){return Array.isArray(e)&&e.every(t.isDate)}function pn(e,t,r=ir){const n=Array.isArray(t)?t:[t],{isSameDay:a,differenceInCalendarDays:s,isAfter:i}=r;return n.some(o=>{if(typeof o=="boolean")return o;if(r.isDate(o))return a(e,o);if(pm(o,r))return o.includes(e);if(Vi(o))return Zn(o,e,!1,r);if(Em(o))return Array.isArray(o.dayOfWeek)?o.dayOfWeek.includes(e.getDay()):o.dayOfWeek===e.getDay();if(fm(o)){const l=s(o.before,e),u=s(o.after,e),d=l>0,g=u<0;return i(o.before,o.after)?g&&d:d||g}return vm(o)?s(e,o.after)>0:cm(o)?s(o.before,e)>0:typeof o=="function"?o(e):!1})}function hR(e,t,r,n,a,s,i){const{ISOWeek:o,broadcastCalendar:l}=s,{addDays:u,addMonths:d,addWeeks:g,addYears:k,endOfBroadcastWeek:m,endOfISOWeek:y,endOfWeek:c,max:A,min:h,startOfBroadcastWeek:v,startOfISOWeek:E,startOfWeek:R}=i;let S={day:u,week:g,month:d,year:k,startOfWeek:N=>l?v(N,i):o?E(N):R(N),endOfWeek:N=>l?m(N,i):o?y(N):c(N)}[e](r,t==="after"?1:-1);return t==="before"&&n?S=A([n,S]):t==="after"&&a&&(S=h([a,S])),S}function ym(e,t,r,n,a,s,i,o=0){if(o>365)return;const l=hR(e,t,r.date,n,a,s,i),u=!!(s.disabled&&pn(l,s.disabled,i)),d=!!(s.hidden&&pn(l,s.hidden,i)),g=l,k=new km(l,g,i);return!u&&!d?k:ym(e,t,k,n,a,s,i,o+1)}function TR(e,t,r,n,a){const{autoFocus:s}=e,[i,o]=f.useState(),l=AR(t.days,r,n||(()=>!1),i),[u,d]=f.useState(s?l:void 0);return{isFocusTarget:c=>!!(l!=null&&l.isEqualTo(c)),setFocused:d,focused:u,blur:()=>{o(u),d(void 0)},moveFocus:(c,A)=>{if(!u)return;const h=ym(c,A,u,t.navStart,t.navEnd,e,a);h&&(t.goToDay(h),d(h))}}}function RR(e,t,r){const{disabled:n,hidden:a,modifiers:s,showOutsideDays:i,broadcastCalendar:o,today:l}=t,{isSameDay:u,isSameMonth:d,startOfMonth:g,isBefore:k,endOfMonth:m,isAfter:y}=r,c=t.startMonth&&g(t.startMonth),A=t.endMonth&&m(t.endMonth),h={[Se.focused]:[],[Se.outside]:[],[Se.disabled]:[],[Se.hidden]:[],[Se.today]:[]},v={};for(const E of e){const{date:R,displayMonth:T}=E,S=!!(T&&!d(R,T)),N=!!(c&&k(R,c)),I=!!(A&&y(R,A)),D=!!(n&&pn(R,n,r)),j=!!(a&&pn(R,a,r))||N||I||!o&&!i&&S||o&&i===!1&&S,M=u(R,l??r.today());S&&h.outside.push(E),D&&h.disabled.push(E),j&&h.hidden.push(E),M&&h.today.push(E),s&&Object.keys(s).forEach(L=>{const O=s==null?void 0:s[L];O&&pn(R,O,r)&&(v[L]?v[L].push(E):v[L]=[E])})}return E=>{const R={[Se.focused]:!1,[Se.disabled]:!1,[Se.hidden]:!1,[Se.outside]:!1,[Se.today]:!1},T={};for(const S in h){const N=h[S];R[S]=N.some(I=>I===E)}for(const S in v)T[S]=v[S].some(N=>N===E);return{...R,...T}}}function NR(e,t){const{selected:r,required:n,onSelect:a}=e,[s,i]=ts(r,a?r:void 0),o=a?r:s,{isSameDay:l}=t,u=m=>(o==null?void 0:o.some(y=>l(y,m)))??!1,{min:d,max:g}=e;return{selected:o,select:(m,y,c)=>{let A=[...o??[]];if(u(m)){if((o==null?void 0:o.length)===d||n&&(o==null?void 0:o.length)===1)return;A=o==null?void 0:o.filter(h=>!l(h,m))}else(o==null?void 0:o.length)===g?A=[m]:A=[...A,m];return a||i(A),a==null||a(A,m,y,c),A},isSelected:u}}function IR(e,t,r=0,n=0,a=!1,s=ir){const{from:i,to:o}=t||{},{isSameDay:l,isAfter:u,isBefore:d}=s;let g;if(!i&&!o)g={from:e,to:r>0?void 0:e};else if(i&&!o)l(i,e)?a?g={from:i,to:void 0}:g=void 0:d(e,i)?g={from:e,to:i}:g={from:i,to:e};else if(i&&o)if(l(i,e)&&l(o,e))a?g={from:i,to:o}:g=void 0;else if(l(i,e))g={from:i,to:r>0?void 0:e};else if(l(o,e))g={from:e,to:r>0?void 0:e};else if(d(e,i))g={from:e,to:o};else if(u(e,i))g={from:i,to:e};else if(u(e,o))g={from:i,to:e};else throw new Error("Invalid range");if(g!=null&&g.from&&(g!=null&&g.to)){const k=s.differenceInCalendarDays(g.to,g.from);n>0&&k>n?g={from:e,to:void 0}:r>1&&k<r&&(g={from:e,to:void 0})}return g}function _R(e,t,r=ir){const n=Array.isArray(t)?t:[t];let a=e.from;const s=r.differenceInCalendarDays(e.to,e.from),i=Math.min(s,6);for(let o=0;o<=i;o++){if(n.includes(a.getDay()))return!0;a=r.addDays(a,1)}return!1}function kl(e,t,r=ir){return Zn(e,t.from,!1,r)||Zn(e,t.to,!1,r)||Zn(t,e.from,!1,r)||Zn(t,e.to,!1,r)}function SR(e,t,r=ir){const n=Array.isArray(t)?t:[t];if(n.filter(o=>typeof o!="function").some(o=>typeof o=="boolean"?o:r.isDate(o)?Zn(e,o,!1,r):pm(o,r)?o.some(l=>Zn(e,l,!1,r)):Vi(o)?o.from&&o.to?kl(e,{from:o.from,to:o.to},r):!1:Em(o)?_R(e,o.dayOfWeek,r):fm(o)?r.isAfter(o.before,o.after)?kl(e,{from:r.addDays(o.after,1),to:r.addDays(o.before,-1)},r):pn(e.from,o,r)||pn(e.to,o,r):vm(o)||cm(o)?pn(e.from,o,r)||pn(e.to,o,r):!1))return!0;const i=n.filter(o=>typeof o=="function");if(i.length){let o=e.from;const l=r.differenceInCalendarDays(e.to,e.from);for(let u=0;u<=l;u++){if(i.some(d=>d(o)))return!0;o=r.addDays(o,1)}}return!1}function OR(e,t){const{disabled:r,excludeDisabled:n,selected:a,required:s,onSelect:i}=e,[o,l]=ts(a,i?a:void 0),u=i?a:o;return{selected:u,select:(k,m,y)=>{const{min:c,max:A}=e,h=k?IR(k,u,c,A,s,t):void 0;return n&&r&&(h!=null&&h.from)&&h.to&&SR({from:h.from,to:h.to},r,t)&&(h.from=k,h.to=void 0),i||l(h),i==null||i(h,k,m,y),h},isSelected:k=>u&&Zn(u,k,!1,t)}}function DR(e,t){const{selected:r,required:n,onSelect:a}=e,[s,i]=ts(r,a?r:void 0),o=a?r:s,{isSameDay:l}=t;return{selected:o,select:(g,k,m)=>{let y=g;return!n&&o&&o&&l(g,o)&&(y=void 0),a||i(y),a==null||a(y,g,k,m),y},isSelected:g=>o?l(o,g):!1}}function PR(e,t){const r=DR(e,t),n=NR(e,t),a=OR(e,t);switch(e.mode){case"single":return r;case"multiple":return n;case"range":return a;default:return}}function LR(e){const{components:t,formatters:r,labels:n,dateLib:a,locale:s,classNames:i}=f.useMemo(()=>{const le={...$a,...e.locale};return{dateLib:new sr({locale:le,weekStartsOn:e.broadcastCalendar?1:e.weekStartsOn,firstWeekContainsDate:e.firstWeekContainsDate,useAdditionalWeekYearTokens:e.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:e.useAdditionalDayOfYearTokens,timeZone:e.timeZone,numerals:e.numerals},e.dateLib),components:MT(e.components),formatters:YT(e.formatters),labels:{...lR,...e.labels},locale:le,classNames:{...FT(),...e.classNames}}},[e.locale,e.broadcastCalendar,e.weekStartsOn,e.firstWeekContainsDate,e.useAdditionalWeekYearTokens,e.useAdditionalDayOfYearTokens,e.timeZone,e.numerals,e.dateLib,e.components,e.formatters,e.labels,e.classNames]),{captionLayout:o,mode:l,onDayBlur:u,onDayClick:d,onDayFocus:g,onDayKeyDown:k,onDayMouseEnter:m,onDayMouseLeave:y,onNextClick:c,onPrevClick:A,showWeekNumber:h,styles:v}=e,{formatCaption:E,formatDay:R,formatMonthDropdown:T,formatWeekNumber:S,formatWeekNumberHeader:N,formatWeekdayName:I,formatYearDropdown:D}=r,j=bR(e,a),{days:M,months:L,navStart:O,navEnd:P,previousMonth:K,nextMonth:x,goToMonth:G}=j,V=RR(M,e,a),{isSelected:q,select:$,selected:X}=PR(e,a)??{},{blur:Z,focused:oe,isFocusTarget:Qe,moveFocus:ee,setFocused:U}=TR(e,j,V,q??(()=>!1),a),{labelDayButton:ne,labelGridcell:se,labelGrid:ve,labelMonthDropdown:Je,labelNav:He,labelWeekday:ze,labelWeekNumber:$n,labelWeekNumberHeader:Tn,labelYearDropdown:wn}=n,or=f.useMemo(()=>JT(a,e.ISOWeek),[a,e.ISOWeek]),Wn=l!==void 0||d!==void 0,yr=f.useCallback(()=>{K&&(G(K),A==null||A(K))},[K,G,A]),br=f.useCallback(()=>{x&&(G(x),c==null||c(x))},[G,x,c]),ro=f.useCallback((le,Pe)=>he=>{he.preventDefault(),he.stopPropagation(),U(le),$==null||$(le.date,Pe,he),d==null||d(le.date,Pe,he)},[$,d,U]),Yt=f.useCallback((le,Pe)=>he=>{U(le),g==null||g(le.date,Pe,he)},[g,U]),_=f.useCallback((le,Pe)=>he=>{Z(),u==null||u(le.date,Pe,he)},[Z,u]),w=f.useCallback((le,Pe)=>he=>{const Rn={ArrowLeft:["day",e.dir==="rtl"?"after":"before"],ArrowRight:["day",e.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[he.shiftKey?"year":"month","before"],PageDown:[he.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(Rn[he.key]){he.preventDefault(),he.stopPropagation();const[mn,Ar]=Rn[he.key];ee(mn,Ar)}k==null||k(le.date,Pe,he)},[ee,k,e.dir]),F=f.useCallback((le,Pe)=>he=>{m==null||m(le.date,Pe,he)},[m]),W=f.useCallback((le,Pe)=>he=>{y==null||y(le.date,Pe,he)},[y]),H=f.useCallback(le=>Pe=>{const he=Number(Pe.target.value),Rn=a.setMonth(a.startOfMonth(le),he);G(Rn)},[a,G]),B=f.useCallback(le=>Pe=>{const he=Number(Pe.target.value),Rn=a.setYear(a.startOfMonth(le),he);G(Rn)},[a,G]),{className:z,style:ge}=f.useMemo(()=>({className:[i[te.Root],e.className].filter(Boolean).join(" "),style:{...v==null?void 0:v[te.Root],...e.style}}),[i,e.className,e.style,v]),Ke=KT(e),Ce=f.useRef(null);dR(Ce,!!e.animate,{classNames:i,months:L,focused:oe,dateLib:a});const ds={dayPickerProps:e,selected:X,select:$,isSelected:q,months:L,nextMonth:x,previousMonth:K,goToMonth:G,getModifiers:V,components:t,classNames:i,styles:v,labels:n,formatters:r};return b.createElement(lm.Provider,{value:ds},b.createElement(t.Root,{rootRef:e.animate?Ce:void 0,className:z,style:ge,dir:e.dir,id:e.id,lang:e.lang,nonce:e.nonce,title:e.title,role:e.role,"aria-label":e["aria-label"],...Ke},b.createElement(t.Months,{className:i[te.Months],style:v==null?void 0:v[te.Months]},!e.hideNavigation&&b.createElement(t.Nav,{className:i[te.Nav],style:v==null?void 0:v[te.Nav],"aria-label":He(),onPreviousClick:yr,onNextClick:br,previousMonth:K,nextMonth:x}),L.map((le,Pe)=>{const he=$T(le.date,O,P,r,a),Rn=zT(O,P,r,a);return b.createElement(t.Month,{"data-animated-month":e.animate?"true":void 0,className:i[te.Month],style:v==null?void 0:v[te.Month],key:Pe,displayIndex:Pe,calendarMonth:le},b.createElement(t.MonthCaption,{"data-animated-caption":e.animate?"true":void 0,className:i[te.MonthCaption],style:v==null?void 0:v[te.MonthCaption],calendarMonth:le,displayIndex:Pe},o!=null&&o.startsWith("dropdown")?b.createElement(t.DropdownNav,{className:i[te.Dropdowns],style:v==null?void 0:v[te.Dropdowns]},o==="dropdown"||o==="dropdown-months"?b.createElement(t.MonthsDropdown,{className:i[te.MonthsDropdown],"aria-label":Je(),classNames:i,components:t,disabled:!!e.disableNavigation,onChange:H(le.date),options:he,style:v==null?void 0:v[te.Dropdown],value:a.getMonth(le.date)}):b.createElement("span",{role:"status","aria-live":"polite"},T(le.date,a)),o==="dropdown"||o==="dropdown-years"?b.createElement(t.YearsDropdown,{className:i[te.YearsDropdown],"aria-label":wn(a.options),classNames:i,components:t,disabled:!!e.disableNavigation,onChange:B(le.date),options:Rn,style:v==null?void 0:v[te.Dropdown],value:a.getYear(le.date)}):b.createElement("span",{role:"status","aria-live":"polite"},D(le.date,a))):b.createElement(t.CaptionLabel,{className:i[te.CaptionLabel],role:"status","aria-live":"polite"},E(le.date,a.options,a))),b.createElement(t.MonthGrid,{role:"grid","aria-multiselectable":l==="multiple"||l==="range","aria-label":ve(le.date,a.options,a)||void 0,className:i[te.MonthGrid],style:v==null?void 0:v[te.MonthGrid]},!e.hideWeekdays&&b.createElement(t.Weekdays,{"data-animated-weekdays":e.animate?"true":void 0,className:i[te.Weekdays],style:v==null?void 0:v[te.Weekdays]},h&&b.createElement(t.WeekNumberHeader,{"aria-label":Tn(a.options),className:i[te.WeekNumberHeader],style:v==null?void 0:v[te.WeekNumberHeader],scope:"col"},N()),or.map((mn,Ar)=>b.createElement(t.Weekday,{"aria-label":ze(mn,a.options,a),className:i[te.Weekday],key:Ar,style:v==null?void 0:v[te.Weekday],scope:"col"},I(mn,a.options,a)))),b.createElement(t.Weeks,{"data-animated-weeks":e.animate?"true":void 0,className:i[te.Weeks],style:v==null?void 0:v[te.Weeks]},le.weeks.map((mn,Ar)=>b.createElement(t.Week,{className:i[te.Week],key:mn.weekNumber,style:v==null?void 0:v[te.Week],week:mn},h&&b.createElement(t.WeekNumber,{week:mn,style:v==null?void 0:v[te.WeekNumber],"aria-label":$n(mn.weekNumber,{locale:s}),className:i[te.WeekNumber],scope:"row",role:"rowheader"},S(mn.weekNumber)),mn.days.map(en=>{const{date:jn}=en,ye=V(en);if(ye[Se.focused]=!ye.hidden&&!!(oe!=null&&oe.isEqualTo(en)),ye[_n.selected]=(q==null?void 0:q(jn))||ye.selected,Vi(X)){const{from:us,to:gs}=X;ye[_n.range_start]=!!(us&&gs&&a.isSameDay(jn,us)),ye[_n.range_end]=!!(us&&gs&&a.isSameDay(jn,gs)),ye[_n.range_middle]=Zn(X,jn,!0,a)}const ik=WT(ye,v,e.modifiersStyles),ok=oT(ye,i,e.modifiersClassNames),lk=!Wn&&!ye.hidden?se(jn,ye,a.options,a):void 0;return b.createElement(t.Day,{key:`${a.format(jn,"yyyy-MM-dd")}_${a.format(en.displayMonth,"yyyy-MM")}`,day:en,modifiers:ye,className:ok.join(" "),style:ik,role:"gridcell","aria-selected":ye.selected||void 0,"aria-label":lk,"data-day":a.format(jn,"yyyy-MM-dd"),"data-month":en.outside?a.format(jn,"yyyy-MM"):void 0,"data-selected":ye.selected||void 0,"data-disabled":ye.disabled||void 0,"data-hidden":ye.hidden||void 0,"data-outside":en.outside||void 0,"data-focused":ye.focused||void 0,"data-today":ye.today||void 0},!ye.hidden&&Wn?b.createElement(t.DayButton,{className:i[te.DayButton],style:v==null?void 0:v[te.DayButton],type:"button",day:en,modifiers:ye,disabled:ye.disabled||void 0,tabIndex:Qe(en)?0:-1,"aria-label":ne(jn,ye,a.options,a),onClick:ro(en,ye),onBlur:_(en,ye),onFocus:Yt(en,ye),onKeyDown:w(en,ye),onMouseEnter:F(en,ye),onMouseLeave:W(en,ye)},R(jn,a.options,a)):!ye.hidden&&R(en.date,a.options,a))}))))))})),e.footer&&b.createElement(t.Footer,{className:i[te.Footer],style:v==null?void 0:v[te.Footer],role:"status","aria-live":"polite"},e.footer)))}var wR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const bm=f.forwardRef((e,t)=>{var{as:r="div",className:n,above:a,below:s,variant:i,asChild:o}=e,l=wR(e,["as","className","above","below","variant","asChild"]);const{cn:u}=ae(),d=i==="show"?a:s,g=i==="show"?s:a,k=o?cr:r;return b.createElement(k,Object.assign({},l,{ref:t,className:u("navds-responsive",n,{[`navds-responsive__above--${d}`]:d,[`navds-responsive__below--${g}`]:g})}))}),jR=f.forwardRef((e,t)=>b.createElement(bm,Object.assign({},e,{ref:t,variant:"hide"}))),qi=f.forwardRef((e,t)=>b.createElement(bm,Object.assign({},e,{ref:t,variant:"show"})));function Sn(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function MR({day:e,fromDate:t,toDate:r}){const n=r&&gr(e,tr(r))>0,a=t&&gr(tr(t),e)>0;return n||a||!1}const Am="dd.MM.yyyy",KR="MMMM yyyy",hm=[Am,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...hm];const Ds=(e,t,r,n,a)=>{let s;const i=hm;if(a){for(const o of i)if(s=Yr(e,o,t,{locale:r}),Sn(s)&&!Ps(e,t,r,i))return s;for(const o of[...i.map(l=>l.replace("yyyy","yy"))])if(s=Yr(e,o,t,{locale:r}),Sn(s)&&Ps(e,t,r,i)){const l=FR(e,o,t,r);return Sn(new Date(l))?new Date(l):new Date("Invalid date")}return new Date("Invalid date")}for(const o of i)if(s=Yr(e,o,t,{locale:r}),Sn(s)&&!Ps(e,t,r,i))return s;return new Date("Invalid date")};function Ps(e,t,r,n){let a;const s=n.map(i=>i.replace("yyyy","yy"));for(const i of s)if(a=Yr(e,i,t,{locale:r}),Sn(a))return!0;return!1}function FR(e,t,r,n){const a=Yr(fl(e,"19"),t.replace("yy","yyyy"),r,{locale:n}),s=Yr(fl(e,"20"),t.replace("yy","yyyy"),r,{locale:n});return Sn(a)&&Sn(s)?Gt(a,zA(new Date,{years:80}))?s:a:new Date("Invalid date")}function fl(e,t){const r=e.slice(-2);return`${e.slice(0,e.length-2)}${t}${r}`}const dt=(e,t,r,n)=>jr(e,n??Am,{locale:t}),VR=({month:e,start:t,end:r})=>{if(!e)return;let n=e;return t&&Gt(n,t)&&(n=t),r&&Mg(n,r)&&(n=r),wr(n)};function qR(e,t,r,n){return Dg({start:xt(e),end:Qa(e)}).map(i=>{const o=jr(i,"LLLL",{locale:n}),l=Li(i),u=t&&i<wr(t)||r&&i>wr(r)||!1;return{value:l,label:o,disabled:u}})}function xR(e,t,r){if(!e||!t)return;const n=xt(e),a=Qa(t),s=[];let i=n;for(;Gt(i,a)||xg(i,a);)s.push(i),i=_i(i,1);return s.map(o=>{const l=jr(o,"yyyy",{locale:r});return{value:wi(o),label:l,disabled:!1}})}function GR({captionLayout:e,startMonth:t,endMonth:r,today:n}){const a=e==="dropdown",s=n??new Date;return t?t=wr(t):!t&&a&&(t=xt(_i(s,-100))),r?r=Og(r):!r&&a&&(r=Qa(s)),[t&&tr(t),r&&tr(r)]}var BR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const UR=e=>{var{day:t,modifiers:r,locale:n,children:a}=e,s=BR(e,["day","modifiers","locale","children"]);const{cn:i}=ae(),o=f.useRef(null);return f.useEffect(()=>{var l;r.focused&&((l=o.current)===null||l===void 0||l.focus())},[r.focused]),r.hidden?b.createElement(b.Fragment,null):b.createElement("button",Object.assign({},s,{ref:o,"aria-hidden":t.outside,"aria-pressed":!!r.selected,"aria-label":jr(t.date,"cccc d",{locale:n}),"data-pressed":r.selected,"data-today":r.today||void 0,className:i(s.className,{"rdp-day_disabled":r.disabled,"rdp-day_selected":r.selected,"rdp-day_range_start":r.range_start,"rdp-day_range_middle":r.range_middle,"rdp-day_range_end":r.range_end,"rdp-day_today":r.today,"rdp-day_outside":r.outside,"rdp-day__weekend":r.weekend})}),a)};var HR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const si=f.forwardRef((e,t)=>{const{inputProps:r,errorId:n,showErrorMsg:a,hasError:s,size:i,inputDescriptionId:o,readOnly:l}=ot(e,"select"),{children:u,label:d,className:g,description:k,htmlSize:m,hideLabel:y=!1,style:c}=e,A=HR(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:h}=ae(),v={onMouseDown:E=>{l&&(E.preventDefault(),E.target.focus())},onKeyDown:E=>{l&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(E.key)&&E.preventDefault()}};return b.createElement("div",{className:h(g,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":l,"navds-select--error":s,"navds-select--readonly":l})},b.createElement(Oe,{htmlFor:r.id,size:i,className:h("navds-form-field__label",{"navds-sr-only":y})},l&&b.createElement(Yg,null),d),!!k&&b.createElement(ie,{className:h("navds-form-field__description",{"navds-sr-only":y}),id:o,size:i,as:"div"},k),b.createElement("div",{className:h("navds-select__container"),style:c},b.createElement("select",Object.assign({},ln(A,["error","errorId","size","readOnly"]),r,v,{ref:t,className:h("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:m}),u),b.createElement(Ya,{className:h("navds-select__chevron"),"aria-hidden":!0})),b.createElement("div",{className:h("navds-form-field__error"),id:n,"aria-relevant":"additions removals","aria-live":"polite"},a&&b.createElement(wt,{size:i,showIcon:!0},e.error)))}),Tm=({week:{weekNumber:e,days:t},onWeekNumberClick:r,className:n,style:a,showOnDesktop:s})=>{const i=rs().translate,{cn:o}=ae(),{getModifiers:l}=Kr(),u=f.useMemo(()=>t.filter(g=>{const k=l(g);return!(k.hidden||k.outside||k.disabled)}).length===0,[t,l]),d=s?qi:jR;return!r||u?b.createElement(d,{above:"sm",asChild:!0},b.createElement("td",{className:"rdp-cell"},b.createElement(zr,{as:"span",textColor:"subtle",className:n,style:a,"aria-label":i("weekNumber",{week:e})},e))):b.createElement(d,{above:"sm",asChild:!0},b.createElement("td",{className:o("rdp-cell",{"navds-date__week-wrapper":!s})},b.createElement(Ge,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":i("selectWeekNumber",{week:e}),style:a,className:o("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{r(e,t.map(g=>g.date))},icon:b.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},CR=({onWeekNumberClick:e,weeks:t})=>{const r=rs().translate,{cn:n}=ae(),a=On();return e?b.createElement(qi,{below:"sm",asChild:!0},b.createElement("table",{className:"rdp-table",role:"grid"},b.createElement("tbody",{className:"rdp-tbody"},b.createElement("tr",{className:n("rdp-row navds-date__week-row")},b.createElement(zr,{as:"th",weight:"semibold",className:n("rdp-cell navds-date__week-cell")},b.createElement("span",{className:n("navds-date__week-wrapper"),id:a},r("week"))),t==null?void 0:t.map(s=>b.createElement(Tm,{key:s.weekNumber,week:s,onWeekNumberClick:e,showOnDesktop:!1,className:n("navds-date__week-wrapper")})))))):null};var YR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const $R=e=>{var{children:t,calendarMonth:r,locale:n,onWeekNumberClick:a}=e,s=YR(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:i,goToMonth:o,previousMonth:l,nextMonth:u}=Kr(),{captionLayout:d}=i,{cn:g}=ae(),k=rs().translate,m=f.useCallback((E,R)=>{const T=Number(R.target.value),S=Gg(wr(E),T);o(S)},[o]),y=f.useCallback((E,R)=>{const T=Number(R.target.value),S=Bg(wr(E),T);o(S)},[o]),[c,A]=GR({captionLayout:d==="dropdown"?"dropdown":"label",startMonth:i.startMonth,endMonth:i.endMonth,today:i.today}),h=qR(r.date,c,A,n),v=xR(c,A,n);return b.createElement("div",Object.assign({},ln(s,["displayIndex"])),b.createElement("div",{className:g("navds-date__caption")},(d==null?void 0:d.startsWith("dropdown"))&&b.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:g("navds-sr-only")},jr(r.date,"LLLL y",{locale:n})),b.createElement(Ge,{variant:"tertiary-neutral",disabled:!l,onClick:()=>l&&o(l),icon:b.createElement(Wc,{title:k("goToPreviousMonth")}),className:g("navds-date__caption-button"),type:"button"}),d!=null&&d.startsWith("dropdown")?b.createElement("div",{className:g("navds-date__caption")},b.createElement(si,{label:k("month"),hideLabel:!0,className:g("navds-date__caption__month"),onChange:E=>m(r.date,E),value:Li(r.date)},h==null?void 0:h.map(({value:E,label:R,disabled:T})=>b.createElement("option",{key:E,value:E,disabled:T},R))),b.createElement(si,{label:k("year"),hideLabel:!0,className:g("navds-date__caption__year"),onChange:E=>y(r.date,E),value:wi(r.date)},v==null?void 0:v.map(({value:E,label:R,disabled:T})=>b.createElement("option",{key:E,value:E,disabled:T},R)))):b.createElement(ie,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:g("navds-date__caption-label")},jr(r.date,"LLLL y",{locale:n})),b.createElement(Ge,{variant:"tertiary-neutral",icon:b.createElement(zc,{title:k("goToNextMonth")}),onClick:()=>u&&o(u),disabled:!u,className:g("navds-date__caption-button"),type:"button"})),b.createElement(CR,{weeks:r.weeks,onWeekNumberClick:a}),t)};var WR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const JR={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},Rm=e=>{var{className:t,dropdownCaption:r,disabled:n=[],disableWeekends:a=!1,showWeekNumber:s=!1,selected:i,fixedWeeks:o=!1,onWeekNumberClick:l,fromDate:u,toDate:d,month:g,mode:k,handleSelect:m,locale:y}=e,c=WR(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:A}=ae(),h=Ig(),v=y?Jg(y):h,E=k??"single";return b.createElement(LR,Object.assign({captionLayout:r?"dropdown":"label",hideNavigation:!0,locale:v,mode:E,onSelect:(R,T)=>{if(E!=="range"||R||!sm(i)){m(R);return}if(!i.to){m({from:T,to:void 0});return}let S;Si(i.to,T)?S=void 0:Gt(T,i.to)?S={from:T,to:i.to}:S={from:i.to,to:T},m(S)},selected:i,classNames:JR,components:{MonthCaption:()=>b.createElement(b.Fragment,null),DayButton:f.useCallback(R=>b.createElement(UR,Object.assign({},R,{locale:v})),[v]),Month:f.useCallback(R=>b.createElement($R,Object.assign({},R,{locale:v,onWeekNumberClick:E==="multiple"?l:void 0})),[v,E,l]),Day:f.useCallback(R=>b.createElement("td",Object.assign({},ln(R,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:f.useCallback(R=>b.createElement(Tm,Object.assign({},R,{showOnDesktop:!0,onWeekNumberClick:E==="multiple"?l:void 0})),[E,l]),WeekNumberHeader:f.useCallback(R=>b.createElement(qi,{above:"sm",asChild:!0},b.createElement("th",Object.assign({},R))),[]),Weekdays:f.useCallback(R=>b.createElement("thead",Object.assign({},R,{className:"rdp-head","aria-hidden":!0}),b.createElement("tr",{className:"rdp-head_row"},R.children)),[])},className:A("navds-date",t),disabled:R=>a&&La(R)||pn(R,n)||MR({day:R,fromDate:u,toDate:d}),weekStartsOn:1,modifiers:{weekend:R=>a&&La(R)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:s,fixedWeeks:o,showOutsideDays:!0,startMonth:u,endMonth:d,month:VR({month:g,start:u,end:d})},ln(c,["onSelect","role","id","defaultSelected"])))};var zR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const XR=f.forwardRef((e,t)=>{var{className:r,locale:n,translations:a,selected:s,defaultSelected:i,onSelect:o,mode:l}=e,u=zR(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:d}=ae(),g=ar("DatePicker",a,zg(n)),[k,m]=Tt({defaultValue:i,value:s,onChange:y=>o==null?void 0:o(y)});return b.createElement(Xg,{translate:g},b.createElement("div",{ref:t,className:d("navds-date__standalone-wrapper",r)},b.createElement(Rm,Object.assign({},u,{locale:n,handleSelect:m,selected:k,mode:l}))))});var ZR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ka=f.forwardRef((e,t)=>{var{children:r,locale:n,translations:a,selected:s,id:i,defaultSelected:o,wrapperClassName:l,open:u,onClose:d,onOpenToggle:g,strategy:k,mode:m}=e,y=ZR(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const c=ar("DatePicker",a,zg(n)),{cn:A}=ae(),h=On(i),[v,E]=Tt({defaultValue:!1,value:u}),[R,T]=f.useState(null),S=rt(T,t),[N,I]=Tt({defaultValue:o,value:s,onChange:D=>{var j;let M=!1;m==="single"&&D?M=!0:sm(D)&&D.from&&D.to&&(M=!0,Si(D.from,D.to)&&(M=!1)),M&&(d==null||d(),E(!1)),(j=y==null?void 0:y.onSelect)===null||j===void 0||j.call(y,D)}});return b.createElement(Xg,{translate:c},b.createElement(jh,{open:v,onOpen:()=>{E(D=>!D),g==null||g()},ariaId:h,defined:!0},b.createElement("div",{ref:S,className:A("navds-date__wrapper",l)},r,b.createElement(eT,{open:v,anchor:R,onClose:()=>{d==null||d(),v&&E(!1)},locale:n,translate:c,variant:m??"single",popoverProps:{id:h,strategy:k}},b.createElement(Rm,Object.assign({},y,{locale:n,handleSelect:I,selected:N,mode:m}))))))});Ka.Standalone=XR;Ka.Input=Mh;const QR=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),e0=(e={})=>{var t;const{locale:r,required:n,defaultSelected:a,today:s=new Date,fromDate:i,toDate:o,disabled:l,disableWeekends:u,onDateChange:d,inputFormat:g,onValidate:k,defaultMonth:m,allowTwoDigitYear:y=!0}=e,[c,A]=f.useState(null),h=Ig(),v=r?Jg(r):h,[E,R]=f.useState(a),[T,S]=f.useState((t=E??m)!==null&&t!==void 0?t:s),[N,I]=f.useState(E),[D,j]=f.useState(!1),M=E?dt(E,v,"date",g):"",[L,O]=f.useState(M),P=f.useCallback(ee=>{var U,ne;j(ee),ee&&S((ne=(U=N??E)!==null&&U!==void 0?U:m)!==null&&ne!==void 0?ne:s)},[m,E,N,s]),K=ee=>{d==null||d(ee),I(ee)},x=(ee={})=>k==null?void 0:k(QR(ee));return{datepickerProps:{month:T,onMonthChange:S,onDayClick:(ee,{selected:U})=>{if(!(U&&n)){if(ee&&!U&&(P(!1),c==null||c.focus()),U){K(void 0),O(""),x({isValidDate:!1,isEmpty:!0});return}K(ee),x(),S(ee),O(ee?dt(ee,v,"date",g):"")}},selected:N??new Date("Invalid date"),locale:r,fromDate:i,toDate:o,today:s,open:D,onClose:()=>{P(!1),c==null||c.focus()},onOpenToggle:()=>P(!D),disabled:l,disableWeekends:u},inputProps:{onChange:ee=>{O(ee.target.value);const U=Ds(ee.target.value,s,v,"date",y),ne=i&&U&&gr(i,U)>0,se=o&&U&&gr(U,o)>0;if(!Sn(U)||u&&La(U)||l&&pn(U,l)){K(void 0),x({isInvalid:!Sn(U),isWeekend:u&&La(U),isDisabled:l&&pn(U,l),isValidDate:!1,isEmpty:!ee.target.value,isBefore:ne??!1,isAfter:se??!1});return}if(ne||se){K(void 0),x({isValidDate:!1,isBefore:ne??!1,isAfter:se??!1});return}K(U),x(),S(m??U)},onFocus:ee=>{if(ee.target.readOnly)return;const U=Ds(ee.target.value,s,v,"date",y);if(Sn(U)){O(dt(U,v,"date",g));const ne=i&&U&&gr(i,U)>0,se=o&&U&&gr(U,o)>0;!ne&&!se&&S(U)}},onBlur:ee=>{const U=Ds(ee.target.value,s,v,"date",y);Sn(U)&&O(dt(U,v,"date",g))},value:L,setAnchorRef:A},reset:()=>{var ee;K(E),S((ee=E??m)!==null&&ee!==void 0?ee:s),O(M??""),R(a)},selectedDay:N,setSelected:ee=>{var U;K(ee),S((U=ee??m)!==null&&U!==void 0?U:s),O(ee?dt(ee,v,"date",g):"")}}};function Ze(e,t,r,n){return n?typeof n=="string"?{[`--__${e}c-${t}-${r}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([a,s])=>[`--__${e}c-${t}-${r}-${a}`,s])):{}}const n0={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},vl=(e,t,r,n,a,s)=>t.split(" ").map((i,o,l)=>{var u;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let d=`var(--${s}-${r}-${i})`;if(n.includes(i))d=i==="px"?"1px":i;else if(i.startsWith("space"))d=`var(--${s}-${i})`;else{const g=`--${s}-spacing-${i}`;d=`var(${(u=n0[g])!==null&&u!==void 0?u:g})`}return a?i==="0"?"0":`calc(-1 * ${d})`:d}).join(" ");function En(e,t,r,n,a,s=!1,i=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${t}-${r}-xs`]:vl(r,a,n,i,s,e)};const o={};return Object.entries(a).forEach(([l,u])=>{o[`--__${e}c-${t}-${r}-${l}`]=vl(r,u,n,i,s,e)}),o}const r0=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],t0=({children:e,className:t,padding:r,paddingInline:n,paddingBlock:a,margin:s,marginInline:i,marginBlock:o,width:l,minWidth:u,maxWidth:d,height:g,minHeight:k,maxHeight:m,position:y,inset:c,top:A,right:h,left:v,bottom:E,overflow:R,overflowX:T,overflowY:S,flexBasis:N,flexGrow:I,flexShrink:D,gridColumn:j})=>{const M=Lt(!1),{cn:L}=ae(),O=M?"ax":"a",P=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},En(O,"r","p","spacing",r)),En(O,"r","pi","spacing",n)),En(O,"r","pb","spacing",a)),En(O,"r","m","spacing",s)),En(O,"r","mi","spacing",i)),En(O,"r","mb","spacing",o)),Ze(O,"r","w",l)),Ze(O,"r","minw",u)),Ze(O,"r","maxw",d)),Ze(O,"r","h",g)),Ze(O,"r","minh",k)),Ze(O,"r","maxh",m)),Ze(O,"r","position",y)),En(O,"r","inset","spacing",c)),En(O,"r","top","spacing",A)),En(O,"r","right","spacing",h)),En(O,"r","bottom","spacing",E)),En(O,"r","left","spacing",v)),Ze(O,"r","overflow",R)),Ze(O,"r","overflowx",T)),Ze(O,"r","overflowy",S)),Ze(O,"r","flex-basis",N)),Ze(O,"r","flex-grow",I)),Ze(O,"r","flex-shrink",D)),Ze(O,"r","grid-column",j));return b.createElement(cr,{className:L({className:t,"navds-r-p":r,"navds-r-pi":n,"navds-r-pb":a,"navds-r-m":s,"navds-r-mi":i,"navds-r-mb":o,"navds-r-w":l,"navds-r-minw":u,"navds-r-maxw":d,"navds-r-h":g,"navds-r-minh":k,"navds-r-maxh":m,"navds-r-position":y,"navds-r-inset":c,"navds-r-top":A,"navds-r-right":h,"navds-r-bottom":E,"navds-r-left":v,"navds-r-overflow":R,"navds-r-overflowx":T,"navds-r-overflowy":S,"navds-r-flex-basis":N,"navds-r-flex-grow":I,"navds-r-flex-shrink":D,"navds-r-grid-column":j}),style:P},e)};var a0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Nm=f.forwardRef((e,t)=>{var{children:r,className:n,as:a="div",align:s,justify:i,wrap:o=!0,gap:l,style:u,direction:d="row",asChild:g}=e,k=a0(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const y=Lt(!1)?"ax":"a",{cn:c}=ae(),A=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},u),En(y,"stack","gap","spacing",l)),Ze(y,"stack","direction",d)),Ze(y,"stack","align",s)),Ze(y,"stack","justify",i)),h=g?cr:a;return b.createElement(t0,Object.assign({},k),b.createElement(h,Object.assign({},ln(k,r0),{ref:t,style:A,className:c("navds-stack",n,{"navds-vstack":d==="column","navds-hstack":d==="row","navds-stack-gap":l,"navds-stack-align":s,"navds-stack-justify":i,"navds-stack-direction":d,"navds-stack-wrap":o})}),r))});var s0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ne=f.forwardRef((e,t)=>{var{as:r="div"}=e,n=s0(e,["as"]);return b.createElement(Nm,Object.assign({as:r},n,{ref:t,direction:"row"}))});var i0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Be=f.forwardRef((e,t)=>{var{as:r="div"}=e,n=i0(e,["as"]);return b.createElement(Nm,Object.assign({as:r},n,{ref:t,direction:"column",wrap:!1}))}),$r=()=>{const{cn:e}=ae();return b.createElement("span",{className:e("navds-stack__spacer")})};var o0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const xi=f.forwardRef((e,t)=>{var{as:r="a",className:n,underline:a=!0,variant:s="action",inlineText:i=!1}=e,o=o0(e,["as","className","underline","variant","inlineText"]);const{cn:l}=ae();return b.createElement(r,Object.assign({},o,{ref:t,className:l("navds-link",n,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":i})}))});var l0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const d0=f.forwardRef((e,t)=>{var{className:r}=e,n=l0(e,["className"]);const{cn:a}=ae();return b.createElement("tbody",Object.assign({},n,{ref:t,className:a("navds-table__body",r)}))});var u0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Im=f.forwardRef((e,t)=>{var{className:r,children:n,align:a,textSize:s}=e,i=u0(e,["className","children","align","textSize"]);const{cn:o}=ae();return b.createElement("th",Object.assign({ref:t,className:o("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":s==="small"})},i),n)}),_m=f.createContext(null);var g0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const m0=f.forwardRef((e,t)=>{var r,n,a,s,{className:i,children:o,sortable:l=!1,sortKey:u}=e,d=g0(e,["className","children","sortable","sortKey"]);const g=f.useContext(_m),{cn:k}=ae();return l&&!u&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),b.createElement(Im,Object.assign({scope:"col",ref:t,className:k(i),"aria-sort":l?((r=g==null?void 0:g.sort)===null||r===void 0?void 0:r.orderBy)===u?(n=g==null?void 0:g.sort)===null||n===void 0?void 0:n.direction:"none":void 0},d),l?b.createElement("button",{type:"button",className:k("navds-table__sort-button"),onClick:l&&u?()=>{var m;return(m=g==null?void 0:g.onSortChange)===null||m===void 0?void 0:m.call(g,u)}:void 0},o,((a=g==null?void 0:g.sort)===null||a===void 0?void 0:a.orderBy)===u?((s=g==null?void 0:g.sort)===null||s===void 0?void 0:s.direction)==="descending"?b.createElement(NE,{"aria-hidden":!0}):b.createElement(_E,{"aria-hidden":!0}):b.createElement(Zc,{"aria-hidden":!0})):o)});var k0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Sm=f.forwardRef((e,t)=>{var{className:r,children:n="",align:a,textSize:s}=e,i=k0(e,["className","children","align","textSize"]);const{cn:o}=ae();return b.createElement(ie,Object.assign({as:"td",ref:t,className:o("navds-table__data-cell",r,{[`navds-table__data-cell--align-${a}`]:a}),size:s},i),n)});var f0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const v0=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function c0(e){const t=parseFloat(e);return!Number.isNaN(t)&&Number.isFinite(t)}function cl(e){return typeof e=="string"&&e[e.length-1]==="%"&&c0(e.substring(0,e.length-1))}function Ls(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="none")}function E0(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="")}const p0=e=>{var{children:t,className:r,innerClassName:n,duration:a=250,easing:s="ease",height:i}=e,o=f0(e,["children","className","innerClassName","duration","easing","height"]);const{cn:l}=ae(),u=f.useRef(i),d=f.useRef(null),g=f.useRef(),k=f.useRef(),m=f.useRef(i),y=f.useRef("visible"),c=v0?0:a;typeof m.current=="number"?(typeof i!="string"&&(m.current=i<0?0:i),y.current="hidden"):cl(m.current)&&(m.current=i==="0%"?0:i,y.current="hidden");const[A,h]=f.useState(m.current),[v,E]=f.useState(y.current),[R,T]=f.useState(!1);f.useEffect(()=>{Ls(d.current,m.current)},[]),f.useEffect(()=>{if(i!==u.current&&d.current){E0(d.current,u.current),d.current.style.overflow="hidden";const D=d.current.offsetHeight;d.current.style.overflow="";const j=c;let M,L,O="hidden",P;const K=u.current==="auto";typeof i=="number"?(M=i<0?0:i,L=M):cl(i)?(M=i==="0%"?0:i,L=M):(M=D,L="auto",O=void 0),K&&(L=M,M=D),h(M),E("hidden"),T(!K),clearTimeout(k.current),clearTimeout(g.current),K?(P=!0,k.current=setTimeout(()=>{h(L),E(O),T(P)},50),g.current=setTimeout(()=>{T(!1),Ls(d.current,L)},j)):k.current=setTimeout(()=>{h(L),E(O),T(!1),i!=="auto"&&Ls(d.current,M)},j)}return u.current=i,()=>{clearTimeout(k.current),clearTimeout(g.current)}},[i]);const S={height:A,overflow:v};R&&(S.transition=`height ${c}ms ${s} 0ms`,S.WebkitTransition=S.transition);const I=typeof o["aria-hidden"]<"u"?o["aria-hidden"]:i===0;return b.createElement("div",Object.assign({},o,{className:l(r),style:S}),b.createElement("div",{"aria-hidden":I,className:l(n),ref:d},t))};var y0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Om=f.forwardRef((e,t)=>{var{className:r,selected:n=!1,shadeOnHover:a=!0}=e,s=y0(e,["className","selected","shadeOnHover"]);const{cn:i}=ae();return b.createElement("tr",Object.assign({},s,{ref:t,className:i("navds-table__row",r,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":a})}))});var b0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const A0=f.forwardRef((e,t)=>{var{className:r,children:n,content:a,togglePlacement:s="left",defaultOpen:i=!1,open:o,onOpenChange:l,expansionDisabled:u=!1,expandOnRowClick:d=!1,colSpan:g=999,contentGutter:k,onClick:m}=e,y=b0(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:c}=ae(),[A,h]=Tt({defaultValue:i,value:o,onChange:l}),v=ar("global"),E=On(),R=S=>{h(N=>!N),S.stopPropagation()},T=S=>{d&&!u&&!Dm(S.target)&&R(S)};return b.createElement(b.Fragment,null,b.createElement(Om,Object.assign({},y,{ref:t,className:c("navds-table__expandable-row",r,{"navds-table__expandable-row--open":A,"navds-table__expandable-row--expansion-disabled":u,"navds-table__expandable-row--clickable":d}),onClick:Hr(m,T)}),s==="right"&&n,b.createElement(Sm,{className:c("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":A}),onClick:u?()=>null:R},!u&&b.createElement("button",{className:c("navds-table__toggle-expand-button"),type:"button","aria-controls":E,"aria-expanded":A,onClick:R},b.createElement(Ya,{className:c("navds-table__expandable-icon"),title:v(A?"showLess":"showMore")}))),s==="left"&&n),b.createElement("tr",{"data-state":A?"open":"closed",className:c("navds-table__expanded-row"),"aria-hidden":!A,id:E},b.createElement("td",{colSpan:g,className:c("navds-table__expanded-row-cell")},b.createElement(p0,{className:c("navds-table__expanded-row-collapse"),innerClassName:c(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${k??s}`),height:A?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});function Dm(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Dm(e.parentElement)}var h0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const T0=f.forwardRef((e,t)=>{var{className:r}=e,n=h0(e,["className"]);const{cn:a}=ae();return b.createElement("thead",Object.assign({},n,{ref:t,className:a("navds-table__header",r)}))});var R0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const we=f.forwardRef((e,t)=>{var{className:r,zebraStripes:n=!1,size:a="medium",onSortChange:s,sort:i}=e,o=R0(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:l}=ae();return b.createElement(_m.Provider,{value:{onSortChange:s,sort:i}},b.createElement("table",Object.assign({},o,{ref:t,className:l("navds-table",`navds-table--${a}`,r,{"navds-table--zebra-stripes":n})})))});we.Header=T0;we.Body=d0;we.Row=Om;we.ColumnHeader=m0;we.HeaderCell=Im;we.DataCell=Sm;we.ExpandableRow=A0;var N0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const I0=f.forwardRef((e,t)=>{var{children:r,className:n,variant:a,size:s="medium",icon:i}=e,o=N0(e,["children","className","variant","size","icon"]);const{cn:l}=ae(),u=(a==null?void 0:a.endsWith("-filled"))&&"strong",d=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",g=a==null?void 0:a.replace("-filled","").replace("-moderate","");return b.createElement(ie,Object.assign({},o,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:l("navds-tag",n,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${u||d||"outline"}`,`navds-tag--${g}`)}),i&&b.createElement("span",{className:l("navds-tag__icon--left")},i),r)});var _0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const S0=f.forwardRef((e,t)=>{var{children:r,className:n,arrow:a=!0,placement:s="top",open:i,defaultOpen:o=!1,onOpenChange:l,offset:u,content:d,delay:g=150,id:k,keys:m,maxChar:y=80,describesChild:c=!1}=e,A=_0(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:h}=ae(),[v,E]=Tt({defaultValue:o,value:i,onChange:l}),R=f.useRef(null),T=jt(!1),S=T?T.ref.current:void 0,{x:N,y:I,strategy:D,context:j,placement:M,middlewareData:{arrow:{x:L,y:O}={},hide:{referenceHidden:P}={}},refs:K}=Cg({placement:s,open:v,onOpenChange:X=>E(X),middleware:[hg(u??(a?8:4)),Tg(),Rg({padding:5,fallbackPlacements:["bottom","top"]}),Ng({element:R,padding:5})],whileElementsMounted:T?(X,Z,oe)=>ei(X,Z,oe,{animationFrame:!0}):ei,strategy:T?"fixed":void 0}),{getReferenceProps:x,getFloatingProps:G}=Sh([ph(j,{handleClose:Ph(),restMs:g}),_h(j),Nh(j)]),V=On(k),q=rt(t,K.setFloating);if(!r||(r==null?void 0:r.type)===b.Fragment||r===b.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;(d==null?void 0:d.length)>y&&v&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${d.length}
Tooltip-content: ${d}`);const $=c?v?{"aria-describedby":V}:{title:d}:{"aria-label":d};return b.createElement(b.Fragment,null,b.createElement(cr,Object.assign({ref:K.setReference},x(),$,{"aria-keyshortcuts":m?m.join("+"):void 0}),r),b.createElement(Ry,{rootElement:S,asChild:!0},v&&b.createElement("div",Object.assign({},G(Object.assign(Object.assign({},A),{ref:q,style:{position:D,top:I??0,left:N??0,visibility:P?"hidden":"visible"},role:"tooltip",id:V,className:h("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":M,"data-state":"open"}),d,m&&b.createElement("span",{className:h("navds-tooltip__keys"),"aria-hidden":!0},m.map(X=>b.createElement(zr,{as:"kbd",key:X,className:h("navds-tooltip__key")},X))),a&&b.createElement("div",{ref:X=>{R.current=X},className:h("navds-tooltip__arrow"),style:{left:L!=null?`${L}px`:"",top:O!=null?`${O}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[M]]:"-3.5px"}}))))}),O0=e=>{const t=ot(e,"fieldset"),{inputProps:r}=t;return Object.assign(Object.assign({},t),{inputProps:{"aria-invalid":r["aria-invalid"],"aria-describedby":r["aria-describedby"]}})};var D0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const P0=f.forwardRef((e,t)=>{var r,n,a;const{inputProps:s,errorId:i,showErrorMsg:o,hasError:l,size:u,readOnly:d,inputDescriptionId:g}=O0(e),{cn:k}=ae(),m=f.useContext(Ma),{children:y,className:c,errorPropagation:A=!0,legend:h,description:v,hideLegend:E,nativeReadOnly:R=!0}=e,T=D0(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return b.createElement(Ma.Provider,{value:{error:A?(r=e.error)!==null&&r!==void 0?r:m==null?void 0:m.error:void 0,errorId:vr({[i]:o,[(n=m==null?void 0:m.errorId)!==null&&n!==void 0?n:""]:!!(m!=null&&m.error)}),size:u,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:d}},b.createElement("fieldset",Object.assign({},ln(T,["errorId","error","size","readOnly"]),ln(s,["aria-describedby","aria-invalid"]),{ref:t,className:k(c,"navds-fieldset",`navds-fieldset--${u}`,{"navds-fieldset--error":l,"navds-fieldset--readonly":d})}),b.createElement(Oe,{size:u,as:"legend",className:k("navds-fieldset__legend",{"navds-sr-only":!!E})},d&&(R?b.createElement(ns,null):b.createElement(Yg,null)),h),!!v&&b.createElement(ie,{className:k("navds-fieldset__description",{"navds-sr-only":!!E}),id:g,size:u??"medium",as:"div"},e.description),y,b.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:k("navds-fieldset__error")},o&&b.createElement(wt,{size:u,showIcon:!0},e.error))))});var L0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Pm=b.createContext(null),w0=f.forwardRef((e,t)=>{var r,n,{children:a,className:s,name:i,defaultValue:o,value:l,onChange:u=()=>{},required:d,readOnly:g}=e,k=L0(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:m}=ae(),y=f.useContext(Ma),c=On();return b.createElement(P0,Object.assign({},k,{readOnly:g,ref:t,className:m(s,"navds-radio-group",`navds-radio-group--${(n=(r=k.size)!==null&&r!==void 0?r:y==null?void 0:y.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),b.createElement(Pm.Provider,{value:{name:i??`radioGroupName-${c}`,defaultValue:o,value:l,onChange:u,required:d}},b.createElement("div",{className:m("navds-radio-buttons")},a)))});var j0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const M0=e=>{const t=f.useContext(Pm),r=ot(ln(e,["description"]),"radio"),{inputProps:n,readOnly:a}=r,s=j0(r,["inputProps","readOnly"]);return t||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},s),{readOnly:a,inputProps:Object.assign(Object.assign({},n),{name:t==null?void 0:t.name,defaultChecked:(t==null?void 0:t.defaultValue)===void 0?void 0:(t==null?void 0:t.defaultValue)===e.value,checked:(t==null?void 0:t.value)===void 0?void 0:(t==null?void 0:t.value)===e.value,onChange:i=>{var o,l;a||((o=e.onChange)===null||o===void 0||o.call(e,i),(l=t==null?void 0:t.onChange)===null||l===void 0||l.call(t,e.value))},onClick:i=>{var o;if(a){i.preventDefault();return}(o=e==null?void 0:e.onClick)===null||o===void 0||o.call(e,i)},required:t==null?void 0:t.required,type:"radio"})})},El=f.forwardRef((e,t)=>{const{cn:r}=ae(),{inputProps:n,size:a,hasError:s,readOnly:i}=M0(e),o=On(),l=On();return b.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":s,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i})},b.createElement("input",Object.assign({},ln(e,["children","size","description","readOnly"]),ln(n,["aria-invalid"]),{"aria-labelledby":vr(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[l]:e.description}),className:r("navds-radio__input"),ref:t})),b.createElement("label",{htmlFor:n.id,className:r("navds-radio__label")},b.createElement("span",{className:r("navds-radio__content")},b.createElement(ie,{as:"span",id:o,size:a,"aria-hidden":!0},e.children),e.description&&b.createElement(ie,{as:"span",id:l,size:a,className:r("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))});var K0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const pl=(e,t,r)=>{const{outerHeightStyle:n,overflow:a}=t;return r.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==a)?(r.current+=1,t):e},yl=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Zt(e){return parseInt(e,10)||0}const F0=f.forwardRef((e,t)=>{var r,n,{className:a,onChange:s,maxRows:i,minRows:o=1,autoScrollbar:l,style:u,value:d}=e,g=K0(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:k}=f.useRef(d!=null),m=f.useRef(null),y=rt(m,t),c=f.useRef(null),A=f.useRef(0),[h,v]=f.useState({outerHeightStyle:0}),E=b.useCallback(()=>{const N=m.current,D=yl(N).getComputedStyle(N);if(D.width==="0px")return{outerHeightStyle:0};const j=c.current;j.style.width=D.width,j.value=N.value||g.placeholder||"x",j.value.slice(-1)===`
`&&(j.value+=" ");const M=D.boxSizing,L=Zt(D.paddingBottom)+Zt(D.paddingTop),O=Zt(D.borderBottomWidth)+Zt(D.borderTopWidth),P=j.scrollHeight-L;j.value="x";const K=j.scrollHeight-L;let x=P;o&&(x=Math.max(Number(o)*K,x)),i&&(x=Math.min(Number(i)*K,x)),x=Math.max(x,K);const G=x+(M==="border-box"?L+O:0),V=Math.abs(x-P)<=1;return{outerHeightStyle:G,overflow:V}},[i,o,g.placeholder]),R=()=>{const N=E();bl(N)||v(I=>pl(I,N,A))};Xr(()=>{const N=()=>{const L=E();bl(L)||Ia.flushSync(()=>{v(O=>pl(O,L,A))})},I=Ju(()=>{var L,O,P;if(A.current=0,!((L=m.current)===null||L===void 0)&&L.style.height||!((O=m.current)===null||O===void 0)&&O.style.width){((P=m.current)===null||P===void 0?void 0:P.style.overflow)==="hidden"&&v(K=>Object.assign(Object.assign({},K),{overflow:!1}));return}N()},166,!0),D=m.current,j=yl(D);j.addEventListener("resize",I);let M;return typeof ResizeObserver<"u"&&(M=new ResizeObserver(I),M.observe(D)),()=>{I.clear(),j.removeEventListener("resize",I),M&&M.disconnect()}},[E]),Xr(()=>{R()}),f.useEffect(()=>{A.current=0},[d]);const T=N=>{A.current=0,k||R(),s&&s(N)},S=Object.assign({"--__ac-textarea-height":h.outerHeightStyle+"px","--__axc-textarea-height":h.outerHeightStyle+"px",overflow:h.overflow&&!l&&!(!((r=m.current)===null||r===void 0)&&r.style.height)&&!(!((n=m.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},u);return b.createElement(b.Fragment,null,b.createElement("textarea",Object.assign({value:d,onChange:T,ref:y,rows:o,style:S},g,{className:a})),b.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:c,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},u)}))});function bl(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const V0=({maxLengthId:e,maxLength:t,currentLength:r,size:n,i18n:a})=>{const{cn:s}=ae(),i=ar("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),o=t-r,[l,u]=f.useState(o);return f.useEffect(()=>{const d=Ju(()=>{u(o)},2e3);return d(),()=>{d.clear()}},[o]),b.createElement(b.Fragment,null,b.createElement("span",{id:e,className:s("navds-sr-only")},i("maxLength",{maxLength:t})),o<20&&b.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},Al(l,i)),b.createElement(ie,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:n},Al(o,i)))},Al=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var q0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const x0=f.forwardRef((e,t)=>{var r,n,a;const{inputProps:s,errorId:i,showErrorMsg:o,hasError:l,size:u,inputDescriptionId:d}=ot(e,"textarea"),{label:g,className:k,description:m,maxLength:y,hideLabel:c=!1,resize:A,UNSAFE_autoScrollbar:h,i18n:v,readOnly:E}=e,R=q0(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:T}=ae(),S=On(),N=y!==void 0&&y>0,[I,D]=f.useState((r=e==null?void 0:e.defaultValue)!==null&&r!==void 0?r:""),j=()=>{let L=R!=null&&R.minRows?R==null?void 0:R.minRows:3;return u==="small"&&(L=R!=null&&R.minRows?R==null?void 0:R.minRows:2),L},M=vr(s["aria-describedby"],{[S??""]:N});return b.createElement("div",{className:T(k,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":E,"navds-textarea--readonly":E,"navds-textarea--error":l,"navds-textarea--autoscrollbar":h,[`navds-textarea--resize-${A===!0?"both":A}`]:A})},b.createElement(Oe,{htmlFor:s.id,size:u,className:T("navds-form-field__label",{"navds-sr-only":c})},E&&b.createElement(ns,null),g),!!m&&b.createElement(ie,{className:T("navds-form-field__description",{"navds-sr-only":c}),id:d,size:u,as:"div"},m),b.createElement(F0,Object.assign({},ln(R,["error","errorId","size"]),s,{onChange:Hr(e.onChange,e.value===void 0?L=>D(L.target.value):void 0),minRows:j(),autoScrollbar:h,ref:t,readOnly:E,className:T("navds-textarea__input","navds-body-short",`navds-body-short--${u??"medium"}`)},M?{"aria-describedby":M}:{})),N&&!E&&!s.disabled&&b.createElement(V0,{maxLengthId:S,maxLength:y,currentLength:(a=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&a!==void 0?a:I.length,size:u,i18n:v}),b.createElement("div",{className:T("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&b.createElement(wt,{size:u,showIcon:!0},e.error)))});var G0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const B0=f.forwardRef((e,t)=>{const{cn:r}=ae(),{inputProps:n,errorId:a,showErrorMsg:s,hasError:i,size:o,inputDescriptionId:l}=ot(e,"textField"),{label:u,className:d,description:g,htmlSize:k,hideLabel:m=!1,type:y="text",readOnly:c}=e,A=G0(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return b.createElement("div",{className:r(d,"navds-form-field",`navds-form-field--${o}`,{"navds-text-field--error":i,"navds-text-field--disabled":!!n.disabled,"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":c,"navds-text-field--readonly":c})},b.createElement(Oe,{htmlFor:n.id,size:o,className:r("navds-form-field__label",{"navds-sr-only":m})},c&&b.createElement(ns,null),u),!!g&&b.createElement(ie,{className:r("navds-form-field__description",{"navds-sr-only":m}),id:l,size:o,as:"div"},g),b.createElement("input",Object.assign({},ln(A,["error","errorId","size"]),n,{ref:t,type:y,readOnly:c,className:r("navds-text-field__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:k})),b.createElement("div",{className:r("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},s&&b.createElement(wt,{size:o,showIcon:!0},e.error)))});var Bt=e=>e.type==="checkbox",_r=e=>e instanceof Date,an=e=>e==null;const Lm=e=>typeof e=="object";var Ue=e=>!an(e)&&!Array.isArray(e)&&Lm(e)&&!_r(e),wm=e=>Ue(e)&&e.target?Bt(e.target)?e.target.checked:e.target.value:e,U0=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,jm=(e,t)=>e.has(U0(t)),H0=e=>{const t=e.constructor&&e.constructor.prototype;return Ue(t)&&t.hasOwnProperty("isPrototypeOf")},Gi=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Xe(e){let t;const r=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Gi&&(e instanceof Blob||n))&&(r||Ue(e)))if(t=r?[]:{},!r&&!H0(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=Xe(e[a]));else return e;return t}var as=e=>Array.isArray(e)?e.filter(Boolean):[],Ve=e=>e===void 0,C=(e,t,r)=>{if(!t||!Ue(e))return r;const n=as(t.split(/[,[\].]+?/)).reduce((a,s)=>an(a)?a:a[s],e);return Ve(n)||n===e?Ve(e[t])?r:e[t]:n},fn=e=>typeof e=="boolean",Bi=e=>/^\w*$/.test(e),Mm=e=>as(e.replace(/["|']|\]/g,"").split(/\.|\[/)),Re=(e,t,r)=>{let n=-1;const a=Bi(t)?[t]:Mm(t),s=a.length,i=s-1;for(;++n<s;){const o=a[n];let l=r;if(n!==i){const u=e[o];l=Ue(u)||Array.isArray(u)?u:isNaN(+a[n+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=l,e=e[o]}};const Fa={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Nn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Jn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Km=b.createContext(null),Er=()=>b.useContext(Km),C0=e=>{const{children:t,...r}=e;return b.createElement(Km.Provider,{value:r},t)};var Fm=(e,t,r,n=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const i=s;return t._proxyFormState[i]!==Nn.all&&(t._proxyFormState[i]=!n||Nn.all),r&&(r[i]=!0),e[i]}});return a};const Ui=typeof window<"u"?f.useLayoutEffect:f.useEffect;function Y0(e){const t=Er(),{control:r=t.control,disabled:n,name:a,exact:s}=e||{},[i,o]=b.useState(r._formState),l=b.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Ui(()=>r._subscribe({name:a,formState:l.current,exact:s,callback:u=>{!n&&o({...r._formState,...u})}}),[a,n,s]),b.useEffect(()=>{l.current.isValid&&r._setValid(!0)},[r]),b.useMemo(()=>Fm(i,r,l.current,!1),[i,r])}var Gn=e=>typeof e=="string",Vm=(e,t,r,n,a)=>Gn(e)?(n&&t.watch.add(e),C(r,e,a)):Array.isArray(e)?e.map(s=>(n&&t.watch.add(s),C(r,s))):(n&&(t.watchAll=!0),r);function $0(e){const t=Er(),{control:r=t.control,name:n,defaultValue:a,disabled:s,exact:i}=e||{},o=b.useRef(a),[l,u]=b.useState(r._getWatch(n,o.current));return Ui(()=>r._subscribe({name:n,formState:{values:!0},exact:i,callback:d=>!s&&u(Vm(n,r._names,d.values||r._formValues,!1,o.current))}),[n,r,s,i]),b.useEffect(()=>r._removeUnmounted()),l}function Ut(e){const t=Er(),{name:r,disabled:n,control:a=t.control,shouldUnregister:s}=e,i=jm(a._names.array,r),o=$0({control:a,name:r,defaultValue:C(a._formValues,r,C(a._defaultValues,r,e.defaultValue)),exact:!0}),l=Y0({control:a,name:r,exact:!0}),u=b.useRef(e),d=b.useRef(a.register(r,{...e.rules,value:o,...fn(e.disabled)?{disabled:e.disabled}:{}})),g=b.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!C(l.errors,r)},isDirty:{enumerable:!0,get:()=>!!C(l.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!C(l.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!C(l.validatingFields,r)},error:{enumerable:!0,get:()=>C(l.errors,r)}}),[l,r]),k=b.useCallback(A=>d.current.onChange({target:{value:wm(A),name:r},type:Fa.CHANGE}),[r]),m=b.useCallback(()=>d.current.onBlur({target:{value:C(a._formValues,r),name:r},type:Fa.BLUR}),[r,a._formValues]),y=b.useCallback(A=>{const h=C(a._fields,r);h&&A&&(h._f.ref={focus:()=>A.focus(),select:()=>A.select(),setCustomValidity:v=>A.setCustomValidity(v),reportValidity:()=>A.reportValidity()})},[a._fields,r]),c=b.useMemo(()=>({name:r,value:o,...fn(n)||l.disabled?{disabled:l.disabled||n}:{},onChange:k,onBlur:m,ref:y}),[r,n,l.disabled,k,m,y,o]);return b.useEffect(()=>{const A=a._options.shouldUnregister||s;a.register(r,{...u.current.rules,...fn(u.current.disabled)?{disabled:u.current.disabled}:{}});const h=(v,E)=>{const R=C(a._fields,v);R&&R._f&&(R._f.mount=E)};if(h(r,!0),A){const v=Xe(C(a._options.defaultValues,r));Re(a._defaultValues,r,v),Ve(C(a._formValues,r))&&Re(a._formValues,r,v)}return!i&&a.register(r),()=>{(i?A&&!a._state.action:A)?a.unregister(r):h(r,!1)}},[r,a,i,s]),b.useEffect(()=>{a._setDisabledField({disabled:n,name:r})},[n,r,a]),b.useMemo(()=>({field:c,formState:l,fieldState:g}),[c,l,g])}var W0=(e,t,r,n,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:a||!0}}:{},pt=e=>Array.isArray(e)?e:[e],hl=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},ii=e=>an(e)||!Lm(e);function dr(e,t){if(ii(e)||ii(t))return e===t;if(_r(e)&&_r(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const a of r){const s=e[a];if(!n.includes(a))return!1;if(a!=="ref"){const i=t[a];if(_r(s)&&_r(i)||Ue(s)&&Ue(i)||Array.isArray(s)&&Array.isArray(i)?!dr(s,i):s!==i)return!1}}return!0}var tn=e=>Ue(e)&&!Object.keys(e).length,Hi=e=>e.type==="file",In=e=>typeof e=="function",Va=e=>{if(!Gi)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},qm=e=>e.type==="select-multiple",Ci=e=>e.type==="radio",J0=e=>Ci(e)||Bt(e),ws=e=>Va(e)&&e.isConnected;function z0(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=Ve(e)?n++:e[t[n++]];return e}function X0(e){for(const t in e)if(e.hasOwnProperty(t)&&!Ve(e[t]))return!1;return!0}function Ye(e,t){const r=Array.isArray(t)?t:Bi(t)?[t]:Mm(t),n=r.length===1?e:z0(e,r),a=r.length-1,s=r[a];return n&&delete n[s],a!==0&&(Ue(n)&&tn(n)||Array.isArray(n)&&X0(n))&&Ye(e,r.slice(0,-1)),e}var xm=e=>{for(const t in e)if(In(e[t]))return!0;return!1};function qa(e,t={}){const r=Array.isArray(e);if(Ue(e)||r)for(const n in e)Array.isArray(e[n])||Ue(e[n])&&!xm(e[n])?(t[n]=Array.isArray(e[n])?[]:{},qa(e[n],t[n])):an(e[n])||(t[n]=!0);return t}function Gm(e,t,r){const n=Array.isArray(e);if(Ue(e)||n)for(const a in e)Array.isArray(e[a])||Ue(e[a])&&!xm(e[a])?Ve(t)||ii(r[a])?r[a]=Array.isArray(e[a])?qa(e[a],[]):{...qa(e[a])}:Gm(e[a],an(t)?{}:t[a],r[a]):r[a]=!dr(e[a],t[a]);return r}var ut=(e,t)=>Gm(e,t,qa(t));const Tl={value:!1,isValid:!1},Rl={value:!0,isValid:!0};var Bm=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ve(e[0].attributes.value)?Ve(e[0].value)||e[0].value===""?Rl:{value:e[0].value,isValid:!0}:Rl:Tl}return Tl},Um=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>Ve(e)?e:t?e===""?NaN:e&&+e:r&&Gn(e)?new Date(e):n?n(e):e;const Nl={isValid:!1,value:null};var Hm=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,Nl):Nl;function Il(e){const t=e.ref;return Hi(t)?t.files:Ci(t)?Hm(e.refs).value:qm(t)?[...t.selectedOptions].map(({value:r})=>r):Bt(t)?Bm(e.refs).value:Um(Ve(t.value)?e.ref.value:t.value,e)}var Z0=(e,t,r,n)=>{const a={};for(const s of e){const i=C(t,s);i&&Re(a,s,i._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:n}},xa=e=>e instanceof RegExp,gt=e=>Ve(e)?e:xa(e)?e.source:Ue(e)?xa(e.value)?e.value.source:e.value:e,_l=e=>({isOnSubmit:!e||e===Nn.onSubmit,isOnBlur:e===Nn.onBlur,isOnChange:e===Nn.onChange,isOnAll:e===Nn.all,isOnTouch:e===Nn.onTouched});const Sl="AsyncFunction";var Q0=e=>!!e&&!!e.validate&&!!(In(e.validate)&&e.validate.constructor.name===Sl||Ue(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Sl)),eN=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Ol=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const yt=(e,t,r,n)=>{for(const a of r||Object.keys(e)){const s=C(e,a);if(s){const{_f:i,...o}=s;if(i){if(i.refs&&i.refs[0]&&t(i.refs[0],a)&&!n)return!0;if(i.ref&&t(i.ref,i.name)&&!n)return!0;if(yt(o,t))break}else if(Ue(o)&&yt(o,t))break}}};function Dl(e,t,r){const n=C(e,r);if(n||Bi(r))return{error:n,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=C(t,s),o=C(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(o&&o.type)return{name:s,error:o};a.pop()}return{name:r}}var nN=(e,t,r,n)=>{r(e);const{name:a,...s}=e;return tn(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(i=>t[i]===(!n||Nn.all))},rN=(e,t,r)=>!e||!t||e===t||pt(e).some(n=>n&&(r?n===t:n.startsWith(t)||t.startsWith(n))),tN=(e,t,r,n,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(t||e):(r?n.isOnBlur:a.isOnBlur)?!e:(r?n.isOnChange:a.isOnChange)?e:!0,aN=(e,t)=>!as(C(e,t)).length&&Ye(e,t),sN=(e,t,r)=>{const n=pt(C(e,r));return Re(n,"root",t[r]),Re(e,r,n),e},Na=e=>Gn(e);function Pl(e,t,r="validate"){if(Na(e)||Array.isArray(e)&&e.every(Na)||fn(e)&&!e)return{type:r,message:Na(e)?e:"",ref:t}}var xr=e=>Ue(e)&&!xa(e)?e:{value:e,message:""},Ll=async(e,t,r,n,a,s)=>{const{ref:i,refs:o,required:l,maxLength:u,minLength:d,min:g,max:k,pattern:m,validate:y,name:c,valueAsNumber:A,mount:h}=e._f,v=C(r,c);if(!h||t.has(c))return{};const E=o?o[0]:i,R=L=>{a&&E.reportValidity&&(E.setCustomValidity(fn(L)?"":L||""),E.reportValidity())},T={},S=Ci(i),N=Bt(i),I=S||N,D=(A||Hi(i))&&Ve(i.value)&&Ve(v)||Va(i)&&i.value===""||v===""||Array.isArray(v)&&!v.length,j=W0.bind(null,c,n,T),M=(L,O,P,K=Jn.maxLength,x=Jn.minLength)=>{const G=L?O:P;T[c]={type:L?K:x,message:G,ref:i,...j(L?K:x,G)}};if(s?!Array.isArray(v)||!v.length:l&&(!I&&(D||an(v))||fn(v)&&!v||N&&!Bm(o).isValid||S&&!Hm(o).isValid)){const{value:L,message:O}=Na(l)?{value:!!l,message:l}:xr(l);if(L&&(T[c]={type:Jn.required,message:O,ref:E,...j(Jn.required,O)},!n))return R(O),T}if(!D&&(!an(g)||!an(k))){let L,O;const P=xr(k),K=xr(g);if(!an(v)&&!isNaN(v)){const x=i.valueAsNumber||v&&+v;an(P.value)||(L=x>P.value),an(K.value)||(O=x<K.value)}else{const x=i.valueAsDate||new Date(v),G=$=>new Date(new Date().toDateString()+" "+$),V=i.type=="time",q=i.type=="week";Gn(P.value)&&v&&(L=V?G(v)>G(P.value):q?v>P.value:x>new Date(P.value)),Gn(K.value)&&v&&(O=V?G(v)<G(K.value):q?v<K.value:x<new Date(K.value))}if((L||O)&&(M(!!L,P.message,K.message,Jn.max,Jn.min),!n))return R(T[c].message),T}if((u||d)&&!D&&(Gn(v)||s&&Array.isArray(v))){const L=xr(u),O=xr(d),P=!an(L.value)&&v.length>+L.value,K=!an(O.value)&&v.length<+O.value;if((P||K)&&(M(P,L.message,O.message),!n))return R(T[c].message),T}if(m&&!D&&Gn(v)){const{value:L,message:O}=xr(m);if(xa(L)&&!v.match(L)&&(T[c]={type:Jn.pattern,message:O,ref:i,...j(Jn.pattern,O)},!n))return R(O),T}if(y){if(In(y)){const L=await y(v,r),O=Pl(L,E);if(O&&(T[c]={...O,...j(Jn.validate,O.message)},!n))return R(O.message),T}else if(Ue(y)){let L={};for(const O in y){if(!tn(L)&&!n)break;const P=Pl(await y[O](v,r),E,O);P&&(L={...P,...j(O,P.message)},R(P.message),n&&(T[c]=L))}if(!tn(L)&&(T[c]={ref:E,...L},!n))return T}}return R(!0),T};const iN={mode:Nn.onSubmit,reValidateMode:Nn.onChange,shouldFocusError:!0};function oN(e={}){let t={...iN,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:In(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const n={};let a=Ue(t.defaultValues)||Ue(t.values)?Xe(t.defaultValues||t.values)||{}:{},s=t.shouldUnregister?{}:Xe(a),i={action:!1,mount:!1,watch:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let g={...d};const k={array:hl(),state:hl()},m=_l(t.mode),y=_l(t.reValidateMode),c=t.criteriaMode===Nn.all,A=_=>w=>{clearTimeout(u),u=setTimeout(_,w)},h=async _=>{if(!t.disabled&&(d.isValid||g.isValid||_)){const w=t.resolver?tn((await D()).errors):await M(n,!0);w!==r.isValid&&k.state.next({isValid:w})}},v=(_,w)=>{!t.disabled&&(d.isValidating||d.validatingFields||g.isValidating||g.validatingFields)&&((_||Array.from(o.mount)).forEach(F=>{F&&(w?Re(r.validatingFields,F,w):Ye(r.validatingFields,F))}),k.state.next({validatingFields:r.validatingFields,isValidating:!tn(r.validatingFields)}))},E=(_,w=[],F,W,H=!0,B=!0)=>{if(W&&F&&!t.disabled){if(i.action=!0,B&&Array.isArray(C(n,_))){const z=F(C(n,_),W.argA,W.argB);H&&Re(n,_,z)}if(B&&Array.isArray(C(r.errors,_))){const z=F(C(r.errors,_),W.argA,W.argB);H&&Re(r.errors,_,z),aN(r.errors,_)}if((d.touchedFields||g.touchedFields)&&B&&Array.isArray(C(r.touchedFields,_))){const z=F(C(r.touchedFields,_),W.argA,W.argB);H&&Re(r.touchedFields,_,z)}(d.dirtyFields||g.dirtyFields)&&(r.dirtyFields=ut(a,s)),k.state.next({name:_,isDirty:O(_,w),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Re(s,_,w)},R=(_,w)=>{Re(r.errors,_,w),k.state.next({errors:r.errors})},T=_=>{r.errors=_,k.state.next({errors:r.errors,isValid:!1})},S=(_,w,F,W)=>{const H=C(n,_);if(H){const B=C(s,_,Ve(F)?C(a,_):F);Ve(B)||W&&W.defaultChecked||w?Re(s,_,w?B:Il(H._f)):x(_,B),i.mount&&h()}},N=(_,w,F,W,H)=>{let B=!1,z=!1;const ge={name:_};if(!t.disabled){if(!F||W){(d.isDirty||g.isDirty)&&(z=r.isDirty,r.isDirty=ge.isDirty=O(),B=z!==ge.isDirty);const Ke=dr(C(a,_),w);z=!!C(r.dirtyFields,_),Ke?Ye(r.dirtyFields,_):Re(r.dirtyFields,_,!0),ge.dirtyFields=r.dirtyFields,B=B||(d.dirtyFields||g.dirtyFields)&&z!==!Ke}if(F){const Ke=C(r.touchedFields,_);Ke||(Re(r.touchedFields,_,F),ge.touchedFields=r.touchedFields,B=B||(d.touchedFields||g.touchedFields)&&Ke!==F)}B&&H&&k.state.next(ge)}return B?ge:{}},I=(_,w,F,W)=>{const H=C(r.errors,_),B=(d.isValid||g.isValid)&&fn(w)&&r.isValid!==w;if(t.delayError&&F?(l=A(()=>R(_,F)),l(t.delayError)):(clearTimeout(u),l=null,F?Re(r.errors,_,F):Ye(r.errors,_)),(F?!dr(H,F):H)||!tn(W)||B){const z={...W,...B&&fn(w)?{isValid:w}:{},errors:r.errors,name:_};r={...r,...z},k.state.next(z)}},D=async _=>{v(_,!0);const w=await t.resolver(s,t.context,Z0(_||o.mount,n,t.criteriaMode,t.shouldUseNativeValidation));return v(_),w},j=async _=>{const{errors:w}=await D(_);if(_)for(const F of _){const W=C(w,F);W?Re(r.errors,F,W):Ye(r.errors,F)}else r.errors=w;return w},M=async(_,w,F={valid:!0})=>{for(const W in _){const H=_[W];if(H){const{_f:B,...z}=H;if(B){const ge=o.array.has(B.name),Ke=H._f&&Q0(H._f);Ke&&d.validatingFields&&v([W],!0);const Ce=await Ll(H,o.disabled,s,c,t.shouldUseNativeValidation&&!w,ge);if(Ke&&d.validatingFields&&v([W]),Ce[B.name]&&(F.valid=!1,w))break;!w&&(C(Ce,B.name)?ge?sN(r.errors,Ce,B.name):Re(r.errors,B.name,Ce[B.name]):Ye(r.errors,B.name))}!tn(z)&&await M(z,w,F)}}return F.valid},L=()=>{for(const _ of o.unMount){const w=C(n,_);w&&(w._f.refs?w._f.refs.every(F=>!ws(F)):!ws(w._f.ref))&&ve(_)}o.unMount=new Set},O=(_,w)=>!t.disabled&&(_&&w&&Re(s,_,w),!dr(Z(),a)),P=(_,w,F)=>Vm(_,o,{...i.mount?s:Ve(w)?a:Gn(_)?{[_]:w}:w},F,w),K=_=>as(C(i.mount?s:a,_,t.shouldUnregister?C(a,_,[]):[])),x=(_,w,F={})=>{const W=C(n,_);let H=w;if(W){const B=W._f;B&&(!B.disabled&&Re(s,_,Um(w,B)),H=Va(B.ref)&&an(w)?"":w,qm(B.ref)?[...B.ref.options].forEach(z=>z.selected=H.includes(z.value)):B.refs?Bt(B.ref)?B.refs.length>1?B.refs.forEach(z=>(!z.defaultChecked||!z.disabled)&&(z.checked=Array.isArray(H)?!!H.find(ge=>ge===z.value):H===z.value)):B.refs[0]&&(B.refs[0].checked=!!H):B.refs.forEach(z=>z.checked=z.value===H):Hi(B.ref)?B.ref.value="":(B.ref.value=H,B.ref.type||k.state.next({name:_,values:Xe(s)})))}(F.shouldDirty||F.shouldTouch)&&N(_,H,F.shouldTouch,F.shouldDirty,!0),F.shouldValidate&&X(_)},G=(_,w,F)=>{for(const W in w){const H=w[W],B=`${_}.${W}`,z=C(n,B);(o.array.has(_)||Ue(H)||z&&!z._f)&&!_r(H)?G(B,H,F):x(B,H,F)}},V=(_,w,F={})=>{const W=C(n,_),H=o.array.has(_),B=Xe(w);Re(s,_,B),H?(k.array.next({name:_,values:Xe(s)}),(d.isDirty||d.dirtyFields||g.isDirty||g.dirtyFields)&&F.shouldDirty&&k.state.next({name:_,dirtyFields:ut(a,s),isDirty:O(_,B)})):W&&!W._f&&!an(B)?G(_,B,F):x(_,B,F),Ol(_,o)&&k.state.next({...r}),k.state.next({name:i.mount?_:void 0,values:Xe(s)})},q=async _=>{i.mount=!0;const w=_.target;let F=w.name,W=!0;const H=C(n,F),B=z=>{W=Number.isNaN(z)||_r(z)&&isNaN(z.getTime())||dr(z,C(s,F,z))};if(H){let z,ge;const Ke=w.type?Il(H._f):wm(_),Ce=_.type===Fa.BLUR||_.type===Fa.FOCUS_OUT,ds=!eN(H._f)&&!t.resolver&&!C(r.errors,F)&&!H._f.deps||tN(Ce,C(r.touchedFields,F),r.isSubmitted,y,m),le=Ol(F,o,Ce);Re(s,F,Ke),Ce?(H._f.onBlur&&H._f.onBlur(_),l&&l(0)):H._f.onChange&&H._f.onChange(_);const Pe=N(F,Ke,Ce),he=!tn(Pe)||le;if(!Ce&&k.state.next({name:F,type:_.type,values:Xe(s)}),ds)return(d.isValid||g.isValid)&&(t.mode==="onBlur"?Ce&&h():Ce||h()),he&&k.state.next({name:F,...le?{}:Pe});if(!Ce&&le&&k.state.next({...r}),t.resolver){const{errors:Rn}=await D([F]);if(B(Ke),W){const mn=Dl(r.errors,n,F),Ar=Dl(Rn,n,mn.name||F);z=Ar.error,F=Ar.name,ge=tn(Rn)}}else v([F],!0),z=(await Ll(H,o.disabled,s,c,t.shouldUseNativeValidation))[F],v([F]),B(Ke),W&&(z?ge=!1:(d.isValid||g.isValid)&&(ge=await M(n,!0)));W&&(H._f.deps&&X(H._f.deps),I(F,ge,z,Pe))}},$=(_,w)=>{if(C(r.errors,w)&&_.focus)return _.focus(),1},X=async(_,w={})=>{let F,W;const H=pt(_);if(t.resolver){const B=await j(Ve(_)?_:H);F=tn(B),W=_?!H.some(z=>C(B,z)):F}else _?(W=(await Promise.all(H.map(async B=>{const z=C(n,B);return await M(z&&z._f?{[B]:z}:z)}))).every(Boolean),!(!W&&!r.isValid)&&h()):W=F=await M(n);return k.state.next({...!Gn(_)||(d.isValid||g.isValid)&&F!==r.isValid?{}:{name:_},...t.resolver||!_?{isValid:F}:{},errors:r.errors}),w.shouldFocus&&!W&&yt(n,$,_?H:o.mount),W},Z=_=>{const w={...i.mount?s:a};return Ve(_)?w:Gn(_)?C(w,_):_.map(F=>C(w,F))},oe=(_,w)=>({invalid:!!C((w||r).errors,_),isDirty:!!C((w||r).dirtyFields,_),error:C((w||r).errors,_),isValidating:!!C(r.validatingFields,_),isTouched:!!C((w||r).touchedFields,_)}),Qe=_=>{_&&pt(_).forEach(w=>Ye(r.errors,w)),k.state.next({errors:_?r.errors:{}})},ee=(_,w,F)=>{const W=(C(n,_,{_f:{}})._f||{}).ref,H=C(r.errors,_)||{},{ref:B,message:z,type:ge,...Ke}=H;Re(r.errors,_,{...Ke,...w,ref:W}),k.state.next({name:_,errors:r.errors,isValid:!1}),F&&F.shouldFocus&&W&&W.focus&&W.focus()},U=(_,w)=>In(_)?k.state.subscribe({next:F=>_(P(void 0,w),F)}):P(_,w,!0),ne=_=>k.state.subscribe({next:w=>{rN(_.name,w.name,_.exact)&&nN(w,_.formState||d,br,_.reRenderRoot)&&_.callback({values:{...s},...r,...w})}}).unsubscribe,se=_=>(i.mount=!0,g={...g,..._.formState},ne({..._,formState:g})),ve=(_,w={})=>{for(const F of _?pt(_):o.mount)o.mount.delete(F),o.array.delete(F),w.keepValue||(Ye(n,F),Ye(s,F)),!w.keepError&&Ye(r.errors,F),!w.keepDirty&&Ye(r.dirtyFields,F),!w.keepTouched&&Ye(r.touchedFields,F),!w.keepIsValidating&&Ye(r.validatingFields,F),!t.shouldUnregister&&!w.keepDefaultValue&&Ye(a,F);k.state.next({values:Xe(s)}),k.state.next({...r,...w.keepDirty?{isDirty:O()}:{}}),!w.keepIsValid&&h()},Je=({disabled:_,name:w})=>{(fn(_)&&i.mount||_||o.disabled.has(w))&&(_?o.disabled.add(w):o.disabled.delete(w))},He=(_,w={})=>{let F=C(n,_);const W=fn(w.disabled)||fn(t.disabled);return Re(n,_,{...F||{},_f:{...F&&F._f?F._f:{ref:{name:_}},name:_,mount:!0,...w}}),o.mount.add(_),F?Je({disabled:fn(w.disabled)?w.disabled:t.disabled,name:_}):S(_,!0,w.value),{...W?{disabled:w.disabled||t.disabled}:{},...t.progressive?{required:!!w.required,min:gt(w.min),max:gt(w.max),minLength:gt(w.minLength),maxLength:gt(w.maxLength),pattern:gt(w.pattern)}:{},name:_,onChange:q,onBlur:q,ref:H=>{if(H){He(_,w),F=C(n,_);const B=Ve(H.value)&&H.querySelectorAll&&H.querySelectorAll("input,select,textarea")[0]||H,z=J0(B),ge=F._f.refs||[];if(z?ge.find(Ke=>Ke===B):B===F._f.ref)return;Re(n,_,{_f:{...F._f,...z?{refs:[...ge.filter(ws),B,...Array.isArray(C(a,_))?[{}]:[]],ref:{type:B.type,name:_}}:{ref:B}}}),S(_,!1,void 0,B)}else F=C(n,_,{}),F._f&&(F._f.mount=!1),(t.shouldUnregister||w.shouldUnregister)&&!(jm(o.array,_)&&i.action)&&o.unMount.add(_)}}},ze=()=>t.shouldFocusError&&yt(n,$,o.mount),$n=_=>{fn(_)&&(k.state.next({disabled:_}),yt(n,(w,F)=>{const W=C(n,F);W&&(w.disabled=W._f.disabled||_,Array.isArray(W._f.refs)&&W._f.refs.forEach(H=>{H.disabled=W._f.disabled||_}))},0,!1))},Tn=(_,w)=>async F=>{let W;F&&(F.preventDefault&&F.preventDefault(),F.persist&&F.persist());let H=Xe(s);if(k.state.next({isSubmitting:!0}),t.resolver){const{errors:B,values:z}=await D();r.errors=B,H=z}else await M(n);if(o.disabled.size)for(const B of o.disabled)Re(H,B,void 0);if(Ye(r.errors,"root"),tn(r.errors)){k.state.next({errors:{}});try{await _(H,F)}catch(B){W=B}}else w&&await w({...r.errors},F),ze(),setTimeout(ze);if(k.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:tn(r.errors)&&!W,submitCount:r.submitCount+1,errors:r.errors}),W)throw W},wn=(_,w={})=>{C(n,_)&&(Ve(w.defaultValue)?V(_,Xe(C(a,_))):(V(_,w.defaultValue),Re(a,_,Xe(w.defaultValue))),w.keepTouched||Ye(r.touchedFields,_),w.keepDirty||(Ye(r.dirtyFields,_),r.isDirty=w.defaultValue?O(_,Xe(C(a,_))):O()),w.keepError||(Ye(r.errors,_),d.isValid&&h()),k.state.next({...r}))},or=(_,w={})=>{const F=_?Xe(_):a,W=Xe(F),H=tn(_),B=H?a:W;if(w.keepDefaultValues||(a=F),!w.keepValues){if(w.keepDirtyValues){const z=new Set([...o.mount,...Object.keys(ut(a,s))]);for(const ge of Array.from(z))C(r.dirtyFields,ge)?Re(B,ge,C(s,ge)):V(ge,C(B,ge))}else{if(Gi&&Ve(_))for(const z of o.mount){const ge=C(n,z);if(ge&&ge._f){const Ke=Array.isArray(ge._f.refs)?ge._f.refs[0]:ge._f.ref;if(Va(Ke)){const Ce=Ke.closest("form");if(Ce){Ce.reset();break}}}}for(const z of o.mount)V(z,C(B,z))}s=Xe(B),k.array.next({values:{...B}}),k.state.next({values:{...B}})}o={mount:w.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!d.isValid||!!w.keepIsValid||!!w.keepDirtyValues,i.watch=!!t.shouldUnregister,k.state.next({submitCount:w.keepSubmitCount?r.submitCount:0,isDirty:H?!1:w.keepDirty?r.isDirty:!!(w.keepDefaultValues&&!dr(_,a)),isSubmitted:w.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:H?{}:w.keepDirtyValues?w.keepDefaultValues&&s?ut(a,s):r.dirtyFields:w.keepDefaultValues&&_?ut(a,_):w.keepDirty?r.dirtyFields:{},touchedFields:w.keepTouched?r.touchedFields:{},errors:w.keepErrors?r.errors:{},isSubmitSuccessful:w.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Wn=(_,w)=>or(In(_)?_(s):_,w),yr=(_,w={})=>{const F=C(n,_),W=F&&F._f;if(W){const H=W.refs?W.refs[0]:W.ref;H.focus&&(H.focus(),w.shouldSelect&&In(H.select)&&H.select())}},br=_=>{r={...r,..._}},Yt={control:{register:He,unregister:ve,getFieldState:oe,handleSubmit:Tn,setError:ee,_subscribe:ne,_runSchema:D,_getWatch:P,_getDirty:O,_setValid:h,_setFieldArray:E,_setDisabledField:Je,_setErrors:T,_getFieldArray:K,_reset:or,_resetDefaultValues:()=>In(t.defaultValues)&&t.defaultValues().then(_=>{Wn(_,t.resetOptions),k.state.next({isLoading:!1})}),_removeUnmounted:L,_disableForm:$n,_subjects:k,_proxyFormState:d,get _fields(){return n},get _formValues(){return s},get _state(){return i},set _state(_){i=_},get _defaultValues(){return a},get _names(){return o},set _names(_){o=_},get _formState(){return r},get _options(){return t},set _options(_){t={...t,..._}}},subscribe:se,trigger:X,register:He,handleSubmit:Tn,watch:U,setValue:V,getValues:Z,reset:Wn,resetField:wn,clearErrors:Qe,unregister:ve,setError:ee,setFocus:yr,getFieldState:oe};return{...Yt,formControl:Yt}}function ss(e={}){const t=b.useRef(void 0),r=b.useRef(void 0),[n,a]=b.useState({isDirty:!1,isValidating:!1,isLoading:In(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:In(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...e.formControl?e.formControl:oN(e),formState:n},e.formControl&&e.defaultValues&&!In(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const s=t.current.control;return s._options=e,Ui(()=>{const i=s._subscribe({formState:s._proxyFormState,callback:()=>a({...s._formState}),reRenderRoot:!0});return a(o=>({...o,isReady:!0})),s._formState.isReady=!0,i},[s]),b.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),b.useEffect(()=>{e.mode&&(s._options.mode=e.mode),e.reValidateMode&&(s._options.reValidateMode=e.reValidateMode),e.errors&&!tn(e.errors)&&s._setErrors(e.errors)},[s,e.errors,e.mode,e.reValidateMode]),b.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,e.shouldUnregister]),b.useEffect(()=>{if(s._proxyFormState.isDirty){const i=s._getDirty();i!==n.isDirty&&s._subjects.state.next({isDirty:i})}},[s,n.isDirty]),b.useEffect(()=>{e.values&&!dr(e.values,r.current)?(s._reset(e.values,s._options.resetOptions),r.current=e.values,a(i=>({...i}))):s._resetDefaultValues()},[s,e.values]),b.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),t.current.formState=Fm(n,s),t.current}function lN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wl={exports:{}},mt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jl;function dN(){if(jl)return mt;jl=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:s}}return mt.Fragment=t,mt.jsx=r,mt.jsxs=r,mt}var Ml;function uN(){return Ml||(Ml=1,wl.exports=dN()),wl.exports}var De=uN();const gN=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:De.jsx(Vt,{variant:"warning",size:"small",children:De.jsx(Be,{gap:"2",children:b.Children.map(e,t=>De.jsx(ie,{size:"small",children:t},Lv(t)?t.key:t))})}),mN="_button_1rql2_1",kN={button:mN},is={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"},Kl=Pn(is),fN=({onClick:e=()=>{},erOverstyrt:t=!1})=>{const[r,n]=f.useState(t),a=()=>{r||(n(!0),e(!0))};return f.useEffect(()=>{n(t)},[t]),De.jsx("button",{className:kN.button,"data-testid":"overstyringsknapp",type:"button",onClick:a,"aria-disabled":t,children:r?De.jsx(vE,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:Kl.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):De.jsx(kE,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:Kl.formatMessage({id:"OverstyringKnapp.Overstyring"})})})};var Fl={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Vl;function vN(){return Vl||(Vl=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,n.call(this,o)))}return s}function n(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)t.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Fl)),Fl.exports}var cN=vN();const Yi=lN(cN),EN="_borderbox_1vkvn_1",pN="_error_1vkvn_5",yN="_warning_1vkvn_8",bN={borderbox:EN,error:pN,warning:yN};Yi.bind(bN);const AN="_aksjonspunkt_kn1hn_1",hN="_erAksjonspunktApent_kn1hn_4",TN="_erIkkeGodkjentAvBeslutter_kn1hn_8",RN={aksjonspunkt:AN,erAksjonspunktApent:hN,erIkkeGodkjentAvBeslutter:TN};Yi.bind(RN);const Ga=({dateString:e,year:t,month:r,day:n})=>De.jsx(De.Fragment,{children:Ha(e,{year:t,month:r,day:n})}),ql=Pn(is),NN=({text:e,okButtonText:t,showModal:r,cancel:n,submit:a})=>De.jsxs(Un,{width:"small",open:r,"aria-label":e,onClose:n,children:[De.jsx(Un.Body,{children:De.jsx(Ca,{size:"small",children:e})}),De.jsxs(Un.Footer,{children:[De.jsx(Ge,{variant:"primary",size:"small",onClick:a,autoFocus:!0,type:"button",children:t||ql.formatMessage({id:"OkAvbrytModal.Ok"})}),De.jsx(Ge,{variant:"secondary",size:"small",onClick:n,type:"button",children:ql.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),bt=({dateStringFom:e,dateStringTom:t,showTodayString:r=!1})=>De.jsx(De.Fragment,{children:Kv(e,t,{showTodayString:r})});Pn(is);const IN="_divider_1t980_1",_N="_dividerParagraf_1t980_8",SN="_leftPanel_1t980_11",ON="_rightPanel_1t980_14",oi={divider:IN,dividerParagraf:_N,leftPanel:SN,rightPanel:ON},DN=Yi.bind(oi),xl=({spaceUnder:e=!1,spaceAbove:t=!1,leftPanel:r=!1,rightPanel:n=!1,dividerParagraf:a=!1,className:s})=>De.jsxs(De.Fragment,{children:[t&&De.jsx("div",{style:{marginBottom:"32px"}}),De.jsx("div",{className:DN(s,{leftPanel:r,rightPanel:n}),children:De.jsx("div",{className:a?oi.dividerParagraf:oi.divider})}),e&&De.jsx("div",{style:{marginBottom:"32px"}})]}),Cm=()=>De.jsx("span",{"data-testid":"editedIcon",children:De.jsx(pE,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});Pn(is);const PN="_noWrap_1a1ul_2",LN={noWrap:PN},wN=({children:e})=>De.jsx("span",{className:LN.noWrap,children:e}),li=({beløp:e,withKr:t=!1})=>{const r=e==null?void 0:e.toString().replace(/\s/g,"");return De.jsxs(wN,{children:[r?fv(r):"-",r&&t&&" kr"]})};function jN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gl={exports:{}},kt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bl;function MN(){if(Bl)return kt;Bl=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:s}}return kt.Fragment=t,kt.jsx=r,kt.jsxs=r,kt}var Ul;function KN(){return Ul||(Ul=1,Gl.exports=MN()),Gl.exports}var Ee=KN();const Ht=e=>e.reduce((t,r,n)=>({...t,[n]:a=>r(a)||!0}),{}),Ct=(e,t)=>{const r=t.split(".").reduce((n,a)=>n!==void 0?n[a]:n,e);return r==null?void 0:r.message};var di={exports:{}},FN=di.exports,Hl;function VN(){return Hl||(Hl=1,function(e,t){(function(r,n){e.exports=n()})(FN,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,l={},u=function(A){return(A=+A)+(A>68?1900:2e3)},d=function(A){return function(h){this[A]=+h}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(A){(this.zone||(this.zone={})).offset=function(h){if(!h||h==="Z")return 0;var v=h.match(/([+-]|\d\d)/g),E=60*v[1]+(+v[2]||0);return E===0?0:v[0]==="+"?-E:E}(A)}],k=function(A){var h=l[A];return h&&(h.indexOf?h:h.s.concat(h.f))},m=function(A,h){var v,E=l.meridiem;if(E){for(var R=1;R<=24;R+=1)if(A.indexOf(E(R,0,h))>-1){v=R>12;break}}else v=A===(h?"pm":"PM");return v},y={A:[o,function(A){this.afternoon=m(A,!1)}],a:[o,function(A){this.afternoon=m(A,!0)}],Q:[a,function(A){this.month=3*(A-1)+1}],S:[a,function(A){this.milliseconds=100*+A}],SS:[s,function(A){this.milliseconds=10*+A}],SSS:[/\d{3}/,function(A){this.milliseconds=+A}],s:[i,d("seconds")],ss:[i,d("seconds")],m:[i,d("minutes")],mm:[i,d("minutes")],H:[i,d("hours")],h:[i,d("hours")],HH:[i,d("hours")],hh:[i,d("hours")],D:[i,d("day")],DD:[s,d("day")],Do:[o,function(A){var h=l.ordinal,v=A.match(/\d+/);if(this.day=v[0],h)for(var E=1;E<=31;E+=1)h(E).replace(/\[|\]/g,"")===A&&(this.day=E)}],w:[i,d("week")],ww:[s,d("week")],M:[i,d("month")],MM:[s,d("month")],MMM:[o,function(A){var h=k("months"),v=(k("monthsShort")||h.map(function(E){return E.slice(0,3)})).indexOf(A)+1;if(v<1)throw new Error;this.month=v%12||v}],MMMM:[o,function(A){var h=k("months").indexOf(A)+1;if(h<1)throw new Error;this.month=h%12||h}],Y:[/[+-]?\d+/,d("year")],YY:[s,function(A){this.year=u(A)}],YYYY:[/\d{4}/,d("year")],Z:g,ZZ:g};function c(A){var h,v;h=A,v=l&&l.formats;for(var E=(A=h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(j,M,L){var O=L&&L.toUpperCase();return M||v[L]||r[L]||v[O].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(P,K,x){return K||x.slice(1)})})).match(n),R=E.length,T=0;T<R;T+=1){var S=E[T],N=y[S],I=N&&N[0],D=N&&N[1];E[T]=D?{regex:I,parser:D}:S.replace(/^\[|\]$/g,"")}return function(j){for(var M={},L=0,O=0;L<R;L+=1){var P=E[L];if(typeof P=="string")O+=P.length;else{var K=P.regex,x=P.parser,G=j.slice(O),V=K.exec(G)[0];x.call(M,V),j=j.replace(V,"")}}return function(q){var $=q.afternoon;if($!==void 0){var X=q.hours;$?X<12&&(q.hours+=12):X===12&&(q.hours=0),delete q.afternoon}}(M),M}}return function(A,h,v){v.p.customParseFormat=!0,A&&A.parseTwoDigitYear&&(u=A.parseTwoDigitYear);var E=h.prototype,R=E.parse;E.parse=function(T){var S=T.date,N=T.utc,I=T.args;this.$u=N;var D=I[1];if(typeof D=="string"){var j=I[2]===!0,M=I[3]===!0,L=j||M,O=I[2];M&&(O=I[2]),l=this.$locale(),!j&&O&&(l=v.Ls[O]),this.$d=function(G,V,q,$){try{if(["x","X"].indexOf(V)>-1)return new Date((V==="X"?1e3:1)*G);var X=c(V)(G),Z=X.year,oe=X.month,Qe=X.day,ee=X.hours,U=X.minutes,ne=X.seconds,se=X.milliseconds,ve=X.zone,Je=X.week,He=new Date,ze=Qe||(Z||oe?1:He.getDate()),$n=Z||He.getFullYear(),Tn=0;Z&&!oe||(Tn=oe>0?oe-1:He.getMonth());var wn,or=ee||0,Wn=U||0,yr=ne||0,br=se||0;return ve?new Date(Date.UTC($n,Tn,ze,or,Wn,yr,br+60*ve.offset*1e3)):q?new Date(Date.UTC($n,Tn,ze,or,Wn,yr,br)):(wn=new Date($n,Tn,ze,or,Wn,yr,br),Je&&(wn=$(wn).week(Je).toDate()),wn)}catch{return new Date("")}}(S,D,N,v),this.init(),O&&O!==!0&&(this.$L=this.locale(O).$L),L&&S!=this.format(D)&&(this.$d=new Date("")),l={}}else if(D instanceof Array)for(var P=D.length,K=1;K<=P;K+=1){I[1]=D[K-1];var x=v.apply(this,I);if(x.isValid()){this.$d=x.$d,this.$L=x.$L,this.init();break}K===P&&(this.$d=new Date(""))}else R.call(this,T)}}})}(di)),di.exports}var qN=VN();const xN=jN(qN),GN="_textarea_1snk6_1",BN="_readOnlyField_1snk6_7",Cl={textarea:GN,readOnlyField:BN},UN=e=>e!=null&&e!=="",os=({label:e,value:t,isEdited:r=!1,type:n,hideLabel:a,size:s})=>UN(t)?Ee.jsxs(Be,{gap:"1",children:[e&&!a&&Ee.jsx(Oe,{size:s,children:e}),Ee.jsxs(Ne,{gap:"2",align:"center",wrap:!1,children:[Ee.jsx(Wu,{className:n==="textarea"?Cl.textarea:Cl.readOnlyField,size:s,children:t}),r&&Ee.jsx(Cm,{})]})]}):null;Ie.extend(xN);const Nt=({name:e,label:t,description:r,validate:n=[],hideLabel:a=!1,disabled:s=!1,isReadOnly:i=!1,onChange:o,disabledDays:l,isEdited:u,defaultMonth:d,fromDate:g,toDate:k,size:m="small"})=>{const{formState:{errors:y}}=Er(),{field:c}=Ut({name:e,rules:{validate:f.useMemo(()=>Ht(n),[n])}}),A=c.value?Ie(c.value,zn,!0).format(Br):"",[h,v]=f.useState(A),{datepickerProps:E,inputProps:R}=e0({onDateChange:N=>{if(N!==void 0){const I=Ie(N).format(zn);o&&o(I),c.onChange(I),v(Ie(I,zn,!0).format(Br))}},defaultSelected:c.value?Ie(c.value,zn,!0).toDate():void 0,defaultMonth:d||(!c.value&&k?k:void 0),disabled:l}),T=f.useCallback(N=>{const I=Ie(N.target.value,Br,!0).format(zn),D=I!=="Invalid Date";v(N.target.value),o&&o(D?I:N.target.value),c.onChange(D?I:N.target.value)},[v,o,c]);if(i)return Ee.jsx(os,{label:t,value:c.value?Ie(c.value,zn,!0).format(Br):void 0,isEdited:u,hideLabel:a,size:m});const S={...E,fromDate:g,toDate:k,dropdownCaption:g&&k?!0:void 0};return Ee.jsx(Ka,{...S,children:Ee.jsx(Ka.Input,{...R,hideLabel:a,onChange:T,value:h,size:m,label:t,description:r,disabled:s,error:Ct(y,e)})})},ui=({name:e,label:t,validate:r=[],readOnly:n=!1,type:a,shouldValidateOnBlur:s=!1,onBlur:i,onChange:o,description:l,autoFocus:u,parse:d=R=>R,format:g=R=>R,normalizeOnBlur:k,isEdited:m,maxLength:y,autoComplete:c=!1,disabled:A,className:h,hideLabel:v,...E})=>{const{formState:{errors:R},trigger:T}=Er(),{field:S}=Ut({name:e,rules:{validate:f.useMemo(()=>Ht(r),[r])}});return n?Ee.jsx(os,{label:t,value:S.value,isEdited:m,hideLabel:v,size:E.size}):Ee.jsx(B0,{size:"small",hideLabel:v,description:l,label:t,error:Ct(R,e),...S,value:S.value?g(S.value):"",autoFocus:u,autoComplete:c?void 0:"off",maxLength:y,disabled:A,type:a,className:h,onChange:N=>{const I=N.currentTarget.value?d(N.currentTarget.value):null;return o&&o(I),S.onChange(I)},onBlur:async N=>{var I,D,j,M;if(S.onBlur(),s){const L=await T();i&&L&&i((I=N==null?void 0:N.target)==null?void 0:I.value)}else i&&i((D=N==null?void 0:N.target)==null?void 0:D.value);k&&S.onChange((j=N==null?void 0:N.target)!=null&&j.value?k(d((M=N==null?void 0:N.target)==null?void 0:M.value)):null)},...E})},HN="_hideRadioLabels_1u3xf_1",CN={hideRadioLabels:HN},Ym=({label:e,description:t,name:r,validate:n=[],radios:a,onChange:s,disabled:i=!1,isReadOnly:o=!1,isHorizontal:l=!1,parse:u=c=>c,isTrueOrFalseSelection:d=!1,hideLegend:g=!1,hideRadioLabels:k=!1,isEdited:m=!1,size:y="small"})=>{const{formState:{errors:c}}=Er(),{field:A}=Ut({name:r,rules:{validate:f.useMemo(()=>Ht(n),[n])}}),h=d?E=>E==="true":u,v=Ee.jsxs(Ne,{justify:"center",gap:"2",children:[e,o&&m&&Ee.jsx(Cm,{})]});return Ee.jsxs(w0,{name:r,value:A.value!==void 0?A.value:null,onChange:E=>{s&&s(E),A.onChange(E)},size:y,legend:v,description:t,error:Ct(c,r),className:k?CN.hideRadioLabels:"",hideLegend:g,children:[!l&&a.map(E=>Ee.jsxs(f.Fragment,{children:[Ee.jsx(El,{size:y,value:h(E.value),disabled:E.disabled||i||o,children:E.label}),A.value===h(E.value)&&E.element]},E.value)),l&&Ee.jsxs(Ee.Fragment,{children:[Ee.jsx(Ne,{gap:"4",children:a.map(E=>Ee.jsx(El,{size:y,value:h(E.value),disabled:E.disabled||i||o,children:E.label},E.value))}),a.filter(E=>A.value===h(E.value)).map(E=>Ee.jsx(f.Fragment,{children:E.element},E.value))]})]})},YN=({name:e,label:t,selectValues:r,validate:n=[],readOnly:a=!1,description:s,hideValueOnDisable:i=!1,onChange:o,disabled:l,className:u,hideLabel:d,isEdited:g,size:k})=>{const{formState:{errors:m}}=Er(),{field:y}=Ut({name:e,rules:{validate:f.useMemo(()=>Ht(n),[n])}});if(a){const h=r.map(E=>E.props).find(E=>E.value===y.value),v=h?h.children:void 0;return Ee.jsx(os,{value:v,label:t,hideLabel:d,isEdited:g,size:k})}const c=y.value||"",A=!r.map(h=>h.props.value).includes(c)&&c!=="";return A&&console.warn(`No corresponding option found for value '${c}'`),Ee.jsxs(si,{size:"small",className:u,error:Ct(m,e),label:t,description:s,value:i&&l||A?"":y.value,disabled:l,onChange:h=>{o&&o(h),y.onChange(h)},hideLabel:d,children:[Ee.jsx("option",{style:{display:"none"}}),",",r]})},$N="_textAreaFieldWithBadges_bdz0b_1",WN="_etikettWrapper_bdz0b_4",Yl={textAreaFieldWithBadges:$N,etikettWrapper:WN},$i=({name:e,label:t,readOnly:r,maxLength:n,badges:a,validate:s=[],parse:i=g=>g,className:o,description:l,isEdited:u,...d})=>{const{formState:{errors:g}}=Er(),{field:k}=Ut({name:e,rules:{validate:f.useMemo(()=>Ht(s),[s])}});return r?Ee.jsx(os,{label:t,value:k.value,type:"textarea",isEdited:u,hideLabel:d.hideLabel}):Ee.jsxs("div",{className:a?Yl.textAreaFieldWithBadges:null,children:[a&&Ee.jsx("div",{className:Yl.etikettWrapper,children:a.map(({type:m,titleText:y})=>Ee.jsx(I0,{variant:m,size:"small",children:y},y))}),Ee.jsx(x0,{size:"small",label:t,description:l,className:o,autoComplete:"off",...k,onChange:m=>k.onChange(m.currentTarget.value!==""?i(m.currentTarget.value):null),value:k.value?k.value:"",error:Ct(g,e),maxLength:n,...d})]})},ls=({formMethods:e,onSubmit:t,children:r,className:n,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:i}=e;return f.useEffect(()=>()=>{a&&a(i())},[]),Ee.jsx(C0,{...e,children:Ee.jsx("form",{className:n,onSubmit:t?s(o=>t(o)):void 0,children:r})})};function $m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gi={exports:{}},JN=gi.exports,$l;function zN(){return $l||($l=1,function(e,t){(function(r,n){e.exports=n()})(JN,function(){return function(r,n){n.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(gi)),gi.exports}var XN=zN();const ZN=$m(XN);var mi={exports:{}},QN=mi.exports,Wl;function eI(){return Wl||(Wl=1,function(e,t){(function(r,n){e.exports=n()})(QN,function(){return function(r,n){n.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(mi)),mi.exports}var nI=eI();const rI=$m(nI),tI="Dato må være før eller lik {limit}",aI="Dato må være etter eller lik {limit}",sI="Perioder kan ikke overlappe i tid",iI="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",oI="Dato må være lik {value}",lI="Dato må skrives slik: dd.mm.åååå",dI="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",uI="Tallet kan ikke inneholde mer enn to desimaler",gI="Tallet kan ikke ha desimaler",mI="Feltet kan kun inneholde tall",kI="Ugyldig fødselsnummer",fI="Feltet må være et fødselsnummer (11 siffer)",vI="Ugyldig organisasjonsnummer.",cI="Ugyldig organisasjonsnummer eller fødselsnummer",EI="Startdato må være før eller lik sluttdato",pI="Periode er utenfor opptjeningsperioden",yI="Ugyldig saksnummer eller fødselsnummer",bI="Feltet inneholder ugyldige tegn: {text}",AI="Feltet inneholder en ugyldig verdi: {value}",hI="Feltet kan ikke inneholde mellomrom",TI="Feltet må fylles ut",RI="Du kan skrive maksimalt {length} tegn",NI="Du må skrive minst {length} tegn",II="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",_I="Feltet må være mindre eller lik {length}",SI="Feltet må være større eller lik {length}",OI="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",DI={DateNotBeforeOrEqual:tI,DateNotAfterOrEqual:aI,DateRangesOverlapping:sI,DateRangesOverlappingPeriodTypes:iI,DatesNotEqual:oI,InvalidDate:lI,InvalidDatesInPeriod:dI,InvalidDecimal:uI,InvalidInteger:gI,InvalidNumber:mI,InvalidFodselsnr:kI,InvalidFodselsnrFormat:fI,InvalidOrgnr:vI,InvalidOrgnrOrFodselsnr:cI,InvalidPeriod:EI,InvalidPeriodRange:pI,InvalidSaksnrOrFodselsnrFormat:yI,InvalidText:bI,InvalidValue:AI,IllegalWhiteSpace:hI,IsRequired:TI,MaxLength:RI,MinLength:NI,MaxLengthOrFodselsnr:II,MaxValue:_I,MinValue:SI,SammeFodselsnrSomSoker:OI},{formatMessage:Ln}=Pn(DI),PI=e=>Ln({id:"DateNotBeforeOrEqual"},{limit:e}),LI=e=>Ln({id:"DateNotAfterOrEqual"},{limit:e}),wI=()=>Ln({id:"InvalidDate"}),jI=e=>Ln({id:"InvalidInteger"},{text:e}),MI=e=>Ln({id:"InvalidNumber"},{text:e}),KI=e=>Ln({id:"InvalidText"},{text:e}),FI=()=>Ln({id:"IsRequired"}),VI=e=>Ln({id:"MaxLength"},{length:e}),qI=e=>Ln({id:"MinLength"},{length:e}),xI=e=>Ln({id:"MaxValue"},{length:e}),GI=e=>Ln({id:"MinValue"},{length:e}),BI=/(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/,UI=/^\d+([,.]\d+)?$/,HI=/^\s*\d+\s*$/,CI=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,YI=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,pr=e=>e==null||e.toString().trim().length===0,$I=()=>Ie().subtract(1,"days").startOf("day"),WI=()=>Ie().startOf("day");Ie.extend(ZN);Ie.extend(rI);const yn=e=>pr(e)?FI():void 0,Wi=e=>t=>pr(t)||t.toString().trim().length>=e?null:qI(e),Ji=e=>t=>pr(t)||t.toString().trim().length<=e?null:VI(e),Wm=e=>t=>t>=e?null:GI(e),Jm=e=>t=>t<=e?null:xI(e),JI=e=>pr(e)||UI.test(e.toString())?null:MI(e.toString()),zI=e=>pr(e)||HI.test(e.toString())?null:jI(e.toString()),zm=e=>JI(e)||zI(e),It=(e="")=>pr(e)||BI.test(e)?null:wI(),XI=e=>t=>{const r=Ie(e).endOf("day");return pr(t)||Ie(t).isSameOrBefore(r)?null:PI(r.format(Br))},zi=e=>t=>{const r=Ie(e).startOf("day");return pr(t)||Ie(t).isSameOrAfter(r)?null:LI(r.format(Br))},Jl=e=>XI($I())(e),ZI=e=>zi(WI())(e),Xi=e=>{if(!CI.test(e)){const t=e.replace(YI,"");return KI(t.replace(/[\t]/g,"Tabulatortegn"))}return null},QI=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const r=e[0];r.setAttributeNode(t),document.activeElement.blur(),r.focus()}},300)},Xm=({submitCallback:e,cancelEvent:t,showModal:r,ventearsaker:n,erTilbakekreving:a,frist:s,ventearsak:i,visBrevErBestilt:o=!1,hasManualPaVent:l,defaultVenteårsak:u=null})=>{const d=Cn(),g=ss({defaultValues:n_(l,s,i??u)}),k=g.watch("frist"),m=g.watch("ventearsak"),y=i_(i,m),c=o_(s,k),A=!(s===k&&!y),h=s_(a,s,k,m);return p.jsx(ls,{formMethods:g,onSubmit:e,children:p.jsxs(Un,{width:"small",open:r,onClose:t,header:{heading:d.formatMessage({id:i?"SettPaVentModal.ErSettPaVent":"SettPaVentModal.SettesPaVent"})},children:[p.jsx(Un.Body,{children:p.jsxs(Be,{gap:"4",children:[(l||k)&&p.jsx(Nt,{label:p.jsx(Y,{id:"SettPaVentModal.Frist"}),name:"frist",validate:[yn,It,ZI]}),p.jsx(YN,{name:"ventearsak",label:p.jsx(Y,{id:"SettPaVentModal.Arsak"}),validate:[yn],selectValues:n.filter(v=>!l||(a?a_(v,m):r_.some(E=>E===v.kode))).sort((v,E)=>v.navn.localeCompare(E.navn)).map(v=>p.jsx("option",{value:v.kode,children:v.navn},v.kode)),readOnly:!l}),o&&p.jsx(ie,{size:"small",children:p.jsx(Y,{id:"SettPaVentModal.BrevBlirBestilt"})}),l&&p.jsx(ie,{size:"small",children:p.jsx(Y,{id:"SettPaVentModal.EndreFrist"})}),!l&&h&&p.jsxs(p.Fragment,{children:[p.jsx(ie,{size:"small",children:p.jsx(Y,{id:"SettPaVentModal.UtløptFrist"})}),p.jsx(ie,{size:"small",children:p.jsx(Y,{id:"SettPaVentModal.HenleggeSaken"})})]})]})}),p.jsxs(Un.Footer,{children:[p.jsx(Ge,{size:"small",variant:"primary",style:{paddingInline:"36px"},onClick:A?QI:t,disabled:!y&&!c,children:p.jsx(Y,{id:"SettPaVentModal.Ok"})}),(!l||A||!o)&&p.jsx(Ge,{size:"small",variant:"secondary",onClick:t,type:"button",children:p.jsx(Y,{id:y||c?"SettPaVentModal.Avbryt":"SettPaVentModal.Lukk"})})]})]})})},e_=()=>{const e=Ie().toDate();return e.setDate(e.getDate()+28),Ie(e).format(zn)},n_=(e,t,r)=>({ventearsak:r??void 0,frist:t||e===!1?t??void 0:e_()}),r_=[nn.AVV_DOK,nn.AVV_FODSEL,nn.VENT_PÅ_BRUKERTILBAKEMELDING,nn.UTV_FRIST,nn.FOR_TIDLIG_SOKNAD,nn.VENT_OPDT_INNTEKTSMELDING,nn.VENT_UTLAND_TRYGD,nn.UTVIDET_TILSVAR_FRIST,nn.ENDRE_TILKJENT_YTELSE,nn.VENT_PÅ_MULIG_MOTREGNING],t_=[nn.VENT_PÅ_BRUKERTILBAKEMELDING,nn.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG],a_=(e,t)=>t_.some(r=>r===e.kode)?e.kode===t:!0,s_=(e,t,r,n)=>{const a=e&&(!!r&&Jl(r)===null||!!t&&Jl(t)===null),s=n===nn.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG;return e&&a&&s},i_=(e,t)=>!(e===t||!t&&!e),o_=(e,t)=>!(e===t||!t&&!e);Xm.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModal",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasManualPaVent:{required:!0,tsType:{name:"boolean"},description:""},frist:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},ventearsak:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},defaultVenteårsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const l_={"SettPaVentModal.ModalDescription":"Behandlingen settes på vent med frist","SettPaVentModal.ModalDescriptionErPaVent":"Behandlingen er satt på vent","SettPaVentModal.PaVent":"På vent","SettPaVentModal.SettesPaVent":"Behandlingen settes på vent","SettPaVentModal.ErSettPaVent":"Behandlingen er satt på vent","SettPaVentModal.Frist":"Frist","SettPaVentModal.Ok":"OK","SettPaVentModal.Avbryt":"Avbryt","SettPaVentModal.Lukk":"Lukk","SettPaVentModal.BrevBlirBestilt":"Brevet blir bestilt","SettPaVentModal.Arsak":"Årsak","SettPaVentModal.EndreFrist":"Du kan endre frist eller årsak før du fortsetter","SettPaVentModal.UtløptFrist":"OBS! Fristen på denne behandlingen er utløpt!","SettPaVentModal.HenleggeSaken":`Kontroller hvorfor Økonomi ikke har dannet et kravgrunnlag.
 Dersom det feilutbetalte beløpet er bortfalt skal saken henlegges.
For mer informasjon, se rutine under tilbakekreving.`},d_=Pn(l_),Zm=({frist:e=null,ventearsak:t=null,hasManualPaVent:r=!1,...n})=>p.jsx(Fu,{value:d_,children:p.jsx(Xm,{frist:e,ventearsak:t,hasManualPaVent:r,...n})});Zm.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModalIndex",props:{cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},frist:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},ventearsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:""},hasManualPaVent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},defaultVenteårsak:{required:!1,tsType:{name:"string"},description:""}}};const Zi=f.createContext({isDirty:!1,setDirty:()=>{}}),Qm=({children:e})=>{const[t,r]=f.useState(!1),n=f.useMemo(()=>({isDirty:t,setDirty:r}),[t,r]);return p.jsx(Zi.Provider,{value:n,children:e})},Qi=e=>{const t=f.useContext(Zi);f.useEffect(()=>{t.setDirty(e)},[e])},u_=()=>f.useContext(Zi).isDirty;Qm.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const zl=(e,t)=>({arbeidsgiverIdent:e,arbeidsgiverNavn:t.navn,...t.erPrivatPerson?{erPrivatPerson:!0,arbeidsgiverFødselsdato:t.fødselsdato}:{erPrivatPerson:!1}}),Qt=e=>t=>t.arbeidsgiverIdent===e.arbeidsgiverIdent,g_=(e,t)=>{const{fom:r,tom:n,saksbehandlersVurdering:a,stillingsprosent:s,begrunnelse:i}=e;if(e.saksbehandlersVurdering)return e.saksbehandlersVurdering===pe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===pe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverNavn:t,fom:r,tom:n,stillingsprosent:s,saksbehandlersVurdering:a??void 0,begrunnelse:i??void 0}:{saksbehandlersVurdering:a??void 0,begrunnelse:i??void 0}},m_=({saksbehandlersVurdering:e,begrunnelse:t})=>e?{saksbehandlersVurdering:e,begrunnelse:t??void 0}:void 0,k_=(e,t)=>e.filter(r=>r.arbeidsgiverIdent===t),f_=(e,t)=>t.map(r=>{const n=e.find(a=>v_(r,a));return{arbeidsforhold:r,inntektsmelding:n}}),v_=(e,t)=>t.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!t.internArbeidsforholdId||t.internArbeidsforholdId===e.internArbeidsforholdId),c_=e=>e.årsak?-1:1,E_=(e,t)=>{const r=e.årsak,n=t.årsak;return r&&!n?-1:n&&!r?1:e.arbeidsgiverNavn.localeCompare(t.arbeidsgiverNavn)},p_=(e,t)=>{const{arbeidsforhold:r,inntektsmeldinger:n,inntekter:a}=e,s=[...r.sort(c_)].reduce((o,l)=>{var c,A;if(o.find(Qt(l)))return o;const d=r.filter(Qt(l)),g=zl(l.arbeidsgiverIdent,t[l.arbeidsgiverIdent]),k=k_(n,l.arbeidsgiverIdent),m=((c=a.find(Qt(l)))==null?void 0:c.inntekter)??[],y={...g,årsak:l.årsak??((A=k[0])==null?void 0:A.årsak)??void 0,avklaring:g_(l,g.arbeidsgiverNavn),arbeidsforholdForRad:d,inntektsmeldingerForRad:k,inntektsposter:m};return o.concat(y)},[]),i=n.filter(o=>!r.some(l=>o.arbeidsgiverIdent===l.arbeidsgiverIdent)).map(o=>{var d;const l=zl(o.arbeidsgiverIdent,t[o.arbeidsgiverIdent]),u=((d=a.find(Qt(o)))==null?void 0:d.inntekter)??[];return{...l,årsak:o.årsak??void 0,avklaring:m_(o),arbeidsforholdForRad:[],inntektsmeldingerForRad:[o],inntektsposter:u}});return s.concat(i).sort(E_)},Xl=e=>{const t=e.findIndex(r=>r.årsak&&!r.avklaring);return t!==-1?[t]:[]};var js={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Zl;function y_(){return Zl||(Zl=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,n.call(this,o)))}return s}function n(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)t.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(js)),js.exports}var b_=y_();const A_=kk(b_),ek=({saksnummer:e,journalpostId:t,dokumentId:r,dokumentTittel:n,children:a})=>{const s=`${t}-${r}`,i=mv(e,t,r);return p.jsx(xi,{href:i,target:s,rel:"noopener noreferrer",onClick:h_(n),children:a??n})},h_=e=>t=>{e&&(t.preventDefault(),kv(t.currentTarget.href,t.currentTarget.target,e))};ek.__docgenInfo={description:"",methods:[],displayName:"DokumentLink",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},journalpostId:{required:!0,tsType:{name:"string"},description:""},dokumentId:{required:!0,tsType:{name:"string"},description:""},dokumentTittel:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const T_="_inline_glms2_1",R_="_docIcon_glms2_9",N_="_phoneIcon_glms2_14",Ms={inline:T_,docIcon:R_,phoneIcon:N_},_t=({saksnummer:e,arbeidsforhold:t,inntektsmelding:r,skalViseArbeidsforholdId:n,alleKodeverk:a,ikkeVisInfo:s,radData:i})=>{var o;return p.jsxs(p.Fragment,{children:[p.jsxs(Be,{gap:"4",children:[!s&&p.jsxs(Ne,{gap:"4",children:[p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:i.erPrivatPerson?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),p.jsx(ie,{size:"small",children:i.erPrivatPerson?p.jsx(Ga,{dateString:i.arbeidsgiverFødselsdato}):i.arbeidsgiverIdent})]}),n&&p.jsxs(Ne,{gap:"4",children:[p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),p.jsx(ie,{size:"small",children:r.eksternArbeidsforholdId})]}),t&&p.jsxs(p.Fragment,{children:[p.jsxs(Ne,{gap:"4",children:[p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),p.jsx(ie,{size:"small",children:`${t.stillingsprosent}%`})]}),t.permisjonOgMangel&&p.jsxs(Ne,{gap:"4",children:[p.jsx(Oe,{size:"small",children:((o=a[At.PERMISJONSBESKRIVELSE_TYPE].find(l=>{var u;return l.kode===((u=t.permisjonOgMangel)==null?void 0:u.type)}))==null?void 0:o.navn)??""}),p.jsx(ie,{size:"small",children:p.jsx(bt,{dateStringFom:t.permisjonOgMangel.permisjonFom,dateStringTom:t.permisjonOgMangel.permisjonTom})})]})]}),p.jsxs(Ne,{gap:"4",children:[p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),p.jsx(ie,{size:"small",children:p.jsx(li,{beløp:r.inntektPrMnd})})]}),p.jsxs(Ne,{gap:"4",children:[p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),p.jsx(ie,{size:"small",children:p.jsx(Y,{id:r.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),r.refusjonPrMnd!==void 0&&r.refusjonPrMnd!==null&&p.jsxs(Ne,{gap:"4",children:[p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),p.jsx(ie,{size:"small",children:p.jsx(li,{beløp:r.refusjonPrMnd})})]}),p.jsxs(ek,{saksnummer:e,journalpostId:r.journalpostId,dokumentId:r.dokumentId,children:[p.jsx(ie,{size:"small",className:Ms.inline,children:p.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})}),p.jsx(dE,{className:Ms.docIcon})]})]}),p.jsxs(Ne,{gap:"4",children:[p.jsx(bE,{className:Ms.phoneIcon}),p.jsxs(Be,{gap:"1",children:[p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),p.jsx(zr,{children:r.kontaktpersonNavn}),p.jsx(zr,{children:p.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:r.kontaktpersonNummer}})})]})]})]})};_t.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},skalViseArbeidsforholdId:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"Record",elements:[{name:"Exclude",elements:[{name:"KodeverkType"},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:`Record<
  Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>,
  KodeverkMedNavn[]
>`},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const I_="_inline_10adz_1",__="_aksjonpunktImage_10adz_5",S_="_arrow_10adz_12",O_="_ikkeMottatt_10adz_18",D_="_skiller_10adz_30",Tr={inline:I_,aksjonpunktImage:__,arrow:S_,ikkeMottatt:O_,skiller:D_},eo=({saksnummer:e,alleKodeverk:t,radData:r})=>{var k;const n=Cn(),[a,s]=f.useState({}),{arbeidsforholdForRad:i,inntektsmeldingerForRad:o,arbeidsgiverIdent:l,erPrivatPerson:u}=r,d=i.length===1,g=f_(o,i);return p.jsxs(Be,{gap:"4",children:[p.jsxs(Ne,{gap:"4",children:[p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:u?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),p.jsx(ie,{size:"small",children:u?p.jsx(Ga,{dateString:r.arbeidsgiverFødselsdato}):l})]}),!d&&p.jsxs(p.Fragment,{children:[p.jsx(xl,{dividerParagraf:!0,className:Tr.skiller}),g.map(({arbeidsforhold:m,inntektsmelding:y})=>{var c;return p.jsxs(b.Fragment,{children:[p.jsxs(Be,{gap:"2",children:[p.jsxs(Ne,{gap:"4",children:[p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),p.jsxs("div",{children:[(m==null?void 0:m.eksternArbeidsforholdId)&&m.eksternArbeidsforholdId.length<50&&p.jsx("div",{children:p.jsx(ie,{size:"small",children:m.eksternArbeidsforholdId})}),(m==null?void 0:m.eksternArbeidsforholdId)&&m.eksternArbeidsforholdId.length>=50&&p.jsx(S0,{content:P_(m.eksternArbeidsforholdId),children:p.jsx(ie,{size:"small",children:`${m.eksternArbeidsforholdId.substring(0,50)}...`})}),!m.eksternArbeidsforholdId&&p.jsx(ie,{size:"small",children:"-"})]}),y&&p.jsxs(p.Fragment,{children:[p.jsx($r,{}),p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!y&&p.jsxs(p.Fragment,{children:[p.jsx($r,{}),p.jsxs("div",{children:[p.jsx(yi,{className:Tr.aksjonpunktImage,title:n.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),p.jsx("div",{className:Tr.ikkeMottatt,children:p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),p.jsxs(Ne,{gap:"4",children:[p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),p.jsx(ie,{size:"small",children:p.jsx(bt,{dateStringFom:m.fom,dateStringTom:m.tom})}),y&&p.jsxs(p.Fragment,{children:[p.jsx($r,{}),p.jsx(ie,{size:"small",children:p.jsx(Ga,{dateString:y.motattDato})})]})]}),p.jsxs(Ne,{gap:"4",children:[p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),p.jsx(ie,{size:"small",children:`${m.stillingsprosent}%`})]}),m.permisjonOgMangel&&p.jsxs(Ne,{gap:"4",children:[p.jsx(Oe,{size:"small",children:((c=t[At.PERMISJONSBESKRIVELSE_TYPE].find(A=>{var h;return A.kode===((h=m.permisjonOgMangel)==null?void 0:h.type)}))==null?void 0:c.navn)??""}),p.jsx(ie,{size:"small",children:p.jsx(bt,{dateStringFom:m.permisjonOgMangel.permisjonFom,dateStringTom:m.permisjonOgMangel.permisjonTom})})]}),y&&p.jsxs(p.Fragment,{children:[m.internArbeidsforholdId&&a[m.internArbeidsforholdId]&&p.jsx(_t,{saksnummer:e,inntektsmelding:y,skalViseArbeidsforholdId:!1,radData:r,alleKodeverk:t}),p.jsxs(xi,{onClick:A=>{A.preventDefault(),s(h=>{if(!m.internArbeidsforholdId)return h;const v=h[m.internArbeidsforholdId];return{...h,[m.internArbeidsforholdId]:v===void 0||v===!1}})},href:"",children:[p.jsx("span",{children:p.jsx(ie,{size:"small",className:Tr.inline,children:p.jsx(Y,{id:!m.internArbeidsforholdId||!a[m.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),m.internArbeidsforholdId&&a[m.internArbeidsforholdId]?p.jsx(zu,{className:Tr.arrow}):p.jsx(Ya,{className:Tr.arrow})]})]})]}),p.jsx(xl,{dividerParagraf:!0,className:Tr.skiller})]},`${m.arbeidsgiverIdent}${m.internArbeidsforholdId}`)})]}),d&&g.length>0&&g[0].inntektsmelding&&p.jsx(_t,{saksnummer:e,radData:r,arbeidsforhold:i[0],inntektsmelding:g[0].inntektsmelding,skalViseArbeidsforholdId:o.length>1,alleKodeverk:t,ikkeVisInfo:!0}),d&&o.length===0&&p.jsxs(p.Fragment,{children:[p.jsxs(Ne,{gap:"4",children:[p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),p.jsx(ie,{size:"small",children:`${i[0].stillingsprosent}%`})]}),i[0].permisjonOgMangel&&p.jsxs(Ne,{gap:"4",children:[p.jsx(Oe,{size:"small",children:((k=t[At.PERMISJONSBESKRIVELSE_TYPE].find(m=>{var y;return m.kode===((y=i[0].permisjonOgMangel)==null?void 0:y.type)}))==null?void 0:k.navn)??""}),p.jsx(ie,{size:"small",children:p.jsx(bt,{dateStringFom:i[0].permisjonOgMangel.permisjonFom,dateStringTom:i[0].permisjonOgMangel.permisjonTom})})]})]})]})},P_=e=>{const t=Math.ceil(e.length/25);return Array.from({length:t},(n,a)=>e.slice(a*25,a*25+25)).join("-")};eo.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"Record",elements:[{name:"Exclude",elements:[{name:"KodeverkType"},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:`Record<
  Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>,
  KodeverkMedNavn[]
>`},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const L_="_bredde_gb3eb_1",w_="_inline_gb3eb_9",j_="_arrow_gb3eb_13",ea={bredde:L_,inline:w_,arrow:j_},ki=({saksnummer:e,skjæringstidspunkt:t,alleKodeverk:r,radData:n})=>{const[a,s]=f.useState(!1),{inntektsposter:i,arbeidsforholdForRad:o}=n,l=f.useMemo(()=>M_(t,i),[i]),u=o.length===1,d=i.length>0&&i.some(g=>g.beløp>0);return p.jsxs(Be,{gap:"8",children:[p.jsx(eo,{saksnummer:e,alleKodeverk:r,radData:n}),d&&p.jsxs(Be,{gap:"2",children:[p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:u?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),p.jsx(Be,{gap:"1",children:l.filter((g,k)=>a?!0:k<3).map(g=>p.jsxs(Ne,{gap:"2",className:ea.bredde,children:[p.jsx(ie,{size:"small",children:p.jsx(Y,{id:`ArbeidsforholdInformasjonPanel.${Ie(g.fom).month()+1}`})}),p.jsx(ie,{size:"small",children:Ie(g.fom).year()}),p.jsx($r,{}),p.jsx(ie,{size:"small",children:p.jsx(li,{beløp:g.beløp})})]},g.fom))}),p.jsxs(xi,{onClick:g=>{g.preventDefault(),s(!a)},href:"",children:[p.jsx("span",{children:p.jsx(ie,{size:"small",className:ea.inline,children:p.jsx(Y,{id:a?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),a?p.jsx(zu,{className:ea.arrow}):p.jsx(Ya,{className:ea.arrow})]})]}),!d&&p.jsx(Oe,{size:"small",children:p.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})})]})},M_=(e,t)=>{const n=Ie(e).subtract(1,"month").startOf("month"),a=n.subtract(12,"month"),s=[];for(let i=n;i.isAfter(a);i=i.subtract(1,"month")){const o=i.format(zn),l=t.find(u=>Ie(u.fom).startOf("month").format(zn)===o);s.push({beløp:(l==null?void 0:l.beløp)||0,fom:o})}return s};ki.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"Record",elements:[{name:"Exclude",elements:[{name:"KodeverkType"},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:`Record<
  Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>,
  KodeverkMedNavn[]
>`},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const K_="_hjelpetekst_tezw4_1",F_="_alertStripe_tezw4_5",V_="_hjelpetekstInnhold_tezw4_9",q_="_svg_tezw4_14",na={hjelpetekst:K_,alertStripe:F_,hjelpetekstInnhold:V_,svg:q_},x_=Wi(3),G_=Ji(1500),B_=Wm(1),U_=Jm(100),nk=({behandlingUuid:e,behandlingVersjon:t,radData:r,isReadOnly:n,registrerArbeidsforhold:a,lagreVurdering:s,lukkArbeidsforholdRad:i,oppdaterTabell:o})=>{const l=Cn(),u=f.useMemo(()=>{var E,R,T,S,N;return{saksbehandlersVurdering:(E=r.avklaring)==null?void 0:E.saksbehandlersVurdering,begrunnelse:(R=r.avklaring)==null?void 0:R.begrunnelse,fom:(T=r.avklaring)==null?void 0:T.fom,tom:(S=r.avklaring)==null?void 0:S.tom,stillingsprosent:(N=r.avklaring)==null?void 0:N.stillingsprosent}},[r]),d=ss({defaultValues:u});Qi(d.formState.isDirty);const g=d.watch("saksbehandlersVurdering"),k=()=>{i(),d.reset(u)},m=r.inntektsmeldingerForRad[0],y=E=>{const R=C_(o,r,m,E);return E.saksbehandlersVurdering===pe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?a({behandlingUuid:e,behandlingVersjon:t,internArbeidsforholdRef:m.internArbeidsforholdId,arbeidsgiverNavn:r.arbeidsgiverNavn,arbeidsgiverIdent:m.arbeidsgiverIdent,vurdering:pe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:E.begrunnelse,fom:E.fom,tom:E.tom,stillingsprosent:E.stillingsprosent}).then(R).finally(()=>d.reset(E)):s({behandlingUuid:e,behandlingVersjon:t,vurdering:E.saksbehandlersVurdering,begrunnelse:E.begrunnelse,arbeidsgiverIdent:m.arbeidsgiverIdent,internArbeidsforholdRef:m.internArbeidsforholdId}).then(R).finally(()=>d.reset(E))},c=f.useRef(null),[A,h]=f.useState(!1),v=f.useCallback(()=>h(E=>!E),[]);return p.jsxs(Be,{gap:"8",children:[p.jsx("div",{className:na.alertStripe,children:p.jsx(Vt,{variant:"info",children:p.jsx(Y,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),p.jsx(ls,{formMethods:d,onSubmit:y,children:p.jsxs(Be,{gap:"4",children:[p.jsx(Ym,{name:"saksbehandlersVurdering",label:p.jsxs(Ne,{gap:"2",children:[p.jsx(Y,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),p.jsx(Zu,{className:na.svg,ref:c,onClick:v,title:l.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),p.jsx(et,{open:A,onClose:v,anchorEl:c.current,className:na.hjelpetekst,children:p.jsx(et.Content,{className:na.hjelpetekstInnhold,children:p.jsx(ie,{children:p.jsx(Y,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[yn],isReadOnly:n,radios:[{label:l.formatMessage({id:"ManglendeOpplysningerForm.TarKontakt"}),value:pe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD},{label:l.formatMessage({id:"ManglendeOpplysningerForm.GåVidere"}),value:pe.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING},{label:l.formatMessage({id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"}),value:pe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING}]}),g===pe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&p.jsxs(Ne,{gap:"4",children:[p.jsx(Nt,{name:"fom",label:p.jsx(Y,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[yn,It],isReadOnly:n}),p.jsx(Nt,{name:"tom",label:p.jsx(Y,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[It,H_(d.getValues)],isReadOnly:n}),p.jsx(ui,{name:"stillingsprosent",label:p.jsx(Y,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:E=>{const R=parseInt(E.toString(),10);return Number.isNaN(R)?E:R},validate:[yn,zm,B_,U_],readOnly:n,maxLength:3})]}),p.jsx($i,{label:p.jsx(Y,{id:"ManglendeOpplysningerForm.Begrunn"}),name:"begrunnelse",validate:[yn,x_,G_,Xi],maxLength:1500,readOnly:n}),!n&&p.jsxs(Ne,{gap:"4",children:[p.jsx(Ge,{size:"small",variant:"secondary",loading:d.formState.isSubmitting,disabled:!d.formState.isDirty||d.formState.isSubmitting,children:p.jsx(Y,{id:"ManglendeOpplysningerForm.Lagre"})}),p.jsx(Ge,{size:"small",variant:"tertiary",loading:!1,disabled:d.formState.isSubmitting,onClick:k,type:"button",children:p.jsx(Y,{id:"ManglendeOpplysningerForm.Avbryt"})})]})]})})]})},H_=e=>t=>{const r=e("fom");return r&&t?zi(r)(t):null},C_=(e,t,r,n)=>()=>{e(a=>a.map(s=>{if(r.arbeidsgiverIdent===s.arbeidsgiverIdent){const o=n.saksbehandlersVurdering===pe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:r.arbeidsgiverIdent,fom:n.fom,tom:n.tom,stillingsprosent:n.stillingsprosent,begrunnelse:n.begrunnelse,saksbehandlersVurdering:n.saksbehandlersVurdering}:{begrunnelse:n.begrunnelse,saksbehandlersVurdering:n.saksbehandlersVurdering};return{...t,avklaring:o}}return s}))};nk.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const Y_="_alertStripe_1jozr_1",$_="_hjelpetekst_1jozr_5",W_="_hjelpetekstInnhold_1jozr_9",J_="_svg_1jozr_14",ra={alertStripe:Y_,hjelpetekst:$_,hjelpetekstInnhold:W_,svg:J_},z_=Wi(3),X_=Ji(1500),rk=({behandlingUuid:e,behandlingVersjon:t,radData:r,isReadOnly:n,lagreVurdering:a,lukkArbeidsforholdRad:s,oppdaterTabell:i})=>{const o=Cn(),{arbeidsforholdForRad:l,inntektsmeldingerForRad:u}=r,d=f.useMemo(()=>{var R,T;return{saksbehandlersVurdering:(R=r.avklaring)==null?void 0:R.saksbehandlersVurdering,begrunnelse:(T=r.avklaring)==null?void 0:T.begrunnelse}},[r]),g=ss({defaultValues:d});Qi(g.formState.isDirty);const k=l.length===1,m=()=>{s(),g.reset(d)},y=R=>{const T={behandlingUuid:e,behandlingVersjon:t,vurdering:R.saksbehandlersVurdering,arbeidsgiverIdent:r.arbeidsgiverIdent,internArbeidsforholdRef:k?l[0].internArbeidsforholdId:void 0,begrunnelse:R.begrunnelse};return a(T).then(Z_(i,r,R)).finally(()=>g.reset(R))},c=f.useRef(null),[A,h]=f.useState(!1),v=f.useCallback(()=>h(R=>!R),[]),E=[{label:o.formatMessage({id:"InntektsmeldingInnhentesForm.TarKontakt"}),value:pe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING},{label:o.formatMessage({id:"InntektsmeldingInnhentesForm.GåVidere"}),value:pe.FORTSETT_UTEN_INNTEKTSMELDING}];return r.erPrivatPerson||E.splice(1,0,{label:o.formatMessage({id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"}),value:pe.MELDING_TIL_ARBEIDSGIVER_NAV_NO}),p.jsx(ls,{formMethods:g,onSubmit:y,children:p.jsxs(Be,{gap:"4",children:[!k&&u.length>0&&p.jsx("div",{className:ra.alertStripe,children:p.jsx(Vt,{variant:"info",children:p.jsx(Y,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})})}),p.jsx(Ym,{name:"saksbehandlersVurdering",label:p.jsxs(Ne,{gap:"2",children:[p.jsx(Y,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),p.jsx(Zu,{ref:c,onClick:v,className:ra.svg,title:o.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),p.jsx(et,{open:A,onClose:v,anchorEl:c.current,className:ra.hjelpetekst,children:p.jsx(et.Content,{className:ra.hjelpetekstInnhold,children:p.jsxs(Be,{gap:"4",children:[p.jsx(ie,{children:p.jsx(Y,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),p.jsx(ie,{children:p.jsx(Y,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),p.jsx(ie,{children:p.jsx(Y,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})})]}),validate:[yn],isReadOnly:n,radios:E}),p.jsx($i,{label:p.jsx(Y,{id:k?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),name:"begrunnelse",validate:[yn,z_,X_,Xi],maxLength:1500,readOnly:n}),!n&&p.jsxs(Ne,{gap:"4",children:[p.jsx(Ge,{size:"small",variant:"secondary",loading:g.formState.isSubmitting,disabled:!g.formState.isDirty||g.formState.isSubmitting,children:p.jsx(Y,{id:"InntektsmeldingInnhentesForm.Lagre"})}),p.jsx(Ge,{size:"small",variant:"tertiary",loading:!1,disabled:g.formState.isSubmitting,onClick:m,type:"button",children:p.jsx(Y,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]})]})})},Z_=(e,t,r)=>()=>{e(n=>n.map(a=>a.arbeidsgiverIdent===t.arbeidsgiverIdent?{...t,avklaring:{begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering}}:a))};rk.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const St="342352362",Q_=Wi(3),eS=Ji(1500),nS=Wm(1),rS=Jm(100),no=({behandlingUuid:e,behandlingVersjon:t,isReadOnly:r,registrerArbeidsforhold:n,radData:a,lukkArbeidsforholdRad:s,erOverstyrt:i,oppdaterTabell:o,erNyttArbeidsforhold:l=!1})=>{const u=Cn(),[d,g]=f.useState(!1),k=f.useMemo(()=>{var h,v,E,R,T;return{fom:(h=a==null?void 0:a.avklaring)==null?void 0:h.fom,tom:(v=a==null?void 0:a.avklaring)==null?void 0:v.tom,stillingsprosent:(E=a==null?void 0:a.avklaring)==null?void 0:E.stillingsprosent,begrunnelse:(R=a==null?void 0:a.avklaring)==null?void 0:R.begrunnelse,arbeidsgiverNavn:(T=a==null?void 0:a.avklaring)==null?void 0:T.arbeidsgiverNavn}},[a]),m=ss({defaultValues:k});Qi(m.formState.isDirty);const y=()=>{s(),m.reset(k)},c=h=>{const v=Ql(pe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,e,t,h);return n(v).then(()=>{o(aS(h)),m.reset(h),l&&s()})},A=()=>{const h=m.getValues(),v=Ql(pe.FJERN_FRA_BEHANDLINGEN,e,t,h);n(v).then(sS(o,s,l))};return p.jsxs(Be,{gap:"4",children:[!a&&p.jsx(Ca,{size:"small",children:p.jsx(Y,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),p.jsx(ls,{formMethods:m,onSubmit:c,children:p.jsxs(Be,{gap:"6",children:[p.jsxs(Ne,{gap:"4",children:[i&&p.jsxs(p.Fragment,{children:[p.jsx(ui,{name:"arbeidsgiverNavn",label:p.jsx(Y,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[yn],readOnly:r||!i}),p.jsx(Nt,{name:"fom",label:p.jsx(Y,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[yn,It],isReadOnly:r||!i}),p.jsx(Nt,{name:"tom",label:p.jsx(Y,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[It,tS(m.getValues)],isReadOnly:r||!i})]}),p.jsx(ui,{name:"stillingsprosent",label:p.jsx(Y,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:h=>{const v=parseInt(h.toString(),10);return Number.isNaN(v)?h:v},validate:[yn,zm,nS,rS],readOnly:r||!i,maxLength:3})]}),p.jsx($i,{label:p.jsx(Y,{id:"LeggTilArbeidsforholdForm.Begrunn"}),name:"begrunnelse",validate:[yn,Q_,eS,Xi],maxLength:1500,readOnly:r||!i}),i&&p.jsxs(Ne,{gap:"4",children:[p.jsx(Ge,{size:"small",variant:"secondary",loading:m.formState.isSubmitting,disabled:!m.formState.isDirty||m.formState.isSubmitting,children:p.jsx(Y,{id:"LeggTilArbeidsforholdForm.Lagre"})}),p.jsx(Ge,{size:"small",variant:"tertiary",loading:!1,disabled:m.formState.isSubmitting,onClick:y,type:"button",children:p.jsx(Y,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),a&&p.jsxs(p.Fragment,{children:[p.jsx($r,{}),p.jsx(Ge,{size:"small",variant:"tertiary",loading:!1,disabled:m.formState.isSubmitting,onClick:()=>g(!0),type:"button",icon:p.jsx(OE,{"aria-hidden":!0}),children:p.jsx(Y,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]})]})}),d&&p.jsx(NN,{text:u.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:A,cancel:()=>g(!1),showModal:!0})]})},Ql=(e,t,r,n)=>({vurdering:e,behandlingUuid:t,behandlingVersjon:r,arbeidsgiverIdent:St,begrunnelse:n.begrunnelse,arbeidsgiverNavn:n.arbeidsgiverNavn,fom:n.fom,tom:n.tom,stillingsprosent:n.stillingsprosent}),tS=e=>t=>{const r=e("fom");return t&&r?zi(r)(t):null},aS=e=>t=>{const r={erPrivatPerson:!1,arbeidsgiverIdent:St,arbeidsgiverNavn:e.arbeidsgiverNavn,avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:pe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER},inntektsmeldingerForRad:[],inntektsposter:[],arbeidsforholdForRad:[]},n=t.findIndex(a=>a.arbeidsgiverIdent===St);return n===-1?t.concat(r):t.map((a,s)=>s===n?r:a)},sS=(e,t,r)=>()=>{e(n=>n.filter(a=>a.arbeidsgiverIdent!==St)),r&&t()};no.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const iS="_exclamationmarkIcon_1a4yb_1",oS="_checkmarkIcon_1a4yb_8",lS="_panelOpen_1a4yb_15",dS="_panelOpenAp_1a4yb_24",uS="_row_1a4yb_34",gS="_isOpen_1a4yb_40",mS="_isApOpen_1a4yb_44",vt={exclamationmarkIcon:iS,checkmarkIcon:oS,panelOpen:lS,panelOpenAp:dS,row:uS,isOpen:gS,isApOpen:mS},kS=A_.bind(vt),tk=({saksnummer:e,behandlingUuid:t,behandlingVersjon:r,radData:n,isReadOnly:a,erOverstyrt:s,oppdaterTabell:i,registrerArbeidsforhold:o,lagreVurdering:l,toggleÅpenRad:u,erRadÅpen:d,alleKodeverk:g,skjæringstidspunkt:k})=>{const m=Cn(),{inntektsmeldingerForRad:y,arbeidsforholdForRad:c,arbeidsgiverNavn:A,avklaring:h,årsak:v}=n,E=(h==null?void 0:h.saksbehandlersVurdering)===pe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,R=c.length>0&&y.length>0&&!v,T=v===$e.MANGLENDE_INNTEKTSMELDING,S=v===$e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,N=!!v&&!(h!=null&&h.saksbehandlersVurdering),I=c.length>0&&y.length===0&&!v&&!E,D=c.length===0&&y.length>0&&!v,j=f.useMemo(()=>vS(c,h),[E,c,h]);return p.jsxs(we.ExpandableRow,{open:d,onOpenChange:u,expandOnRowClick:!0,togglePlacement:"right",contentGutter:"none",className:kS("row",{isOpen:d,isApOpen:N}),content:p.jsxs(Be,{gap:"4",className:N?vt.panelOpenAp:vt.panelOpen,children:[E&&p.jsx(no,{behandlingUuid:t,behandlingVersjon:r,isReadOnly:!1,registrerArbeidsforhold:o,radData:n,lukkArbeidsforholdRad:u,erOverstyrt:s,oppdaterTabell:i}),R&&p.jsx(eo,{saksnummer:e,alleKodeverk:g,radData:n}),D&&p.jsx(_t,{saksnummer:e,arbeidsforhold:c.length>0?c[0]:void 0,inntektsmelding:y[0],skalViseArbeidsforholdId:!1,alleKodeverk:g,radData:n}),T&&p.jsxs(p.Fragment,{children:[p.jsx(ki,{saksnummer:e,skjæringstidspunkt:k,alleKodeverk:g,radData:n}),p.jsx(rk,{behandlingUuid:t,behandlingVersjon:r,isReadOnly:a,radData:n,lagreVurdering:l,lukkArbeidsforholdRad:u,oppdaterTabell:i})]}),S&&p.jsxs(p.Fragment,{children:[p.jsx(_t,{saksnummer:e,inntektsmelding:y[0],skalViseArbeidsforholdId:y.length>1,radData:n,alleKodeverk:g}),p.jsx(nk,{behandlingUuid:t,behandlingVersjon:r,radData:n,isReadOnly:a,registrerArbeidsforhold:o,lagreVurdering:l,lukkArbeidsforholdRad:u,oppdaterTabell:i})]}),I&&p.jsx(ki,{saksnummer:e,skjæringstidspunkt:k,alleKodeverk:g,radData:n})]}),children:[p.jsxs(we.DataCell,{children:[!N&&p.jsx(rE,{title:m.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:vt.checkmarkIcon}),N&&p.jsx(yi,{title:m.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:vt.exclamationmarkIcon})]}),p.jsx(we.DataCell,{children:p.jsx(ie,{children:A})}),p.jsx(we.DataCell,{children:p.jsx(ie,{children:j!=null&&j.fom?p.jsx(bt,{dateStringFom:j.fom,dateStringTom:j.tom}):"-"})}),p.jsx(we.DataCell,{children:p.jsx(ie,{children:p.jsx(Y,{id:fS(E,c.length>0)})})}),p.jsx(we.DataCell,{children:p.jsxs(ie,{children:[c.length<2&&y.length===1&&p.jsx(Ga,{dateString:y[0].motattDato}),!T&&c.length>1&&y.length===c.length&&p.jsx(Y,{id:"ArbeidsforholdRad.Mottatt"}),(E||T&&y.length<c.length)&&p.jsx(Y,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})},fS=(e,t)=>e?"ArbeidsforholdRad.Saksbehandler":t?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",vS=(e,t)=>{if((t==null?void 0:t.saksbehandlersVurdering)===pe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||(t==null?void 0:t.saksbehandlersVurdering)===pe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:t==null?void 0:t.fom,tom:t==null?void 0:t.tom};const r=e.reduce((n,a)=>({fom:n.fom&&Ie(n.fom).isBefore(a.fom)?n.fom:a.fom,tom:n.tom&&Ie(n.tom).isAfter(a.tom)?n.tom:a.tom}),{fom:void 0,tom:void 0});return r.fom?r:void 0};tk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},toggleÅpenRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erRadÅpen:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"Record",elements:[{name:"Exclude",elements:[{name:"KodeverkType"},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:`Record<
  Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>,
  KodeverkMedNavn[]
>`},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const cS="_alertStripe_mucgx_5",ES={alertStripe:cS},ak=({behandling:e,aksjonspunkt:t,readOnly:r,arbeidOgInntekt:n,registrerArbeidsforhold:a,erOverstyrer:s,tabellData:i,settÅpneRadIndexer:o,setErOverstyrt:l,oppdaterTabell:u})=>{const d=Cn(),{arbeidsforhold:g,inntektsmeldinger:k}=n,[m,y]=f.useState(!1),[c,A]=f.useState(!1),h=f.useCallback(()=>{l(!0),y(!0);const T=i.findIndex(S=>{var N;return((N=S.avklaring)==null?void 0:N.saksbehandlersVurdering)===pe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER});T!==-1&&o([T])},[i,o]),v=f.useMemo(()=>pS(i,t),[e.versjon]),E=i.every(T=>T.arbeidsgiverIdent!==St),R=(t==null?void 0:t.status)===We.OPPRETTET;return p.jsxs(Be,{gap:"8",children:[p.jsxs(Ne,{gap:"4",children:[p.jsx(Ca,{size:"small",children:p.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),s&&R&&!r&&p.jsx(fN,{onClick:h}),p.jsx($r,{}),p.jsx(ie,{size:"small",children:p.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Ha(n.skjæringstidspunkt)}})})]}),p.jsxs(Be,{gap:"4",children:[v.length>0&&p.jsx(gN,{children:v.map(T=>d.formatMessage({id:T})).join(" ")}),g.length===0&&k.length===0&&s&&p.jsx("div",{className:ES.alertStripe,children:p.jsx(Vt,{variant:"info",children:p.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),m&&E&&!c&&p.jsx("div",{children:p.jsx(Ge,{size:"small",variant:"tertiary",icon:p.jsx(hE,{"aria-hidden":!0}),onClick:()=>A(!0),children:p.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})})}),c&&p.jsx(no,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:a,lukkArbeidsforholdRad:()=>A(!1),oppdaterTabell:u,erOverstyrt:!0,erNyttArbeidsforhold:!0})]})]})},pS=(e,t)=>{const r=e.some(i=>i.årsak===$e.MANGLENDE_INNTEKTSMELDING),n=e.some(i=>i.årsak===$e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),a=(t==null?void 0:t.status)===We.OPPRETTET,s=[];return a&&r&&s.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),a&&n&&s.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),s};ak.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
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
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const yS="_alertStripe_7z8j7_1",bS="_headerRow_7z8j7_5",ed={alertStripe:yS,headerRow:bS},sk=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:t,registrerArbeidsforhold:r,lagreVurdering:n,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:i})=>{const[o,l]=f.useState(!1),[u,d]=f.useState(!1),[g,k]=f.useState(!1),{alleKodeverk:m,submitCallback:y,aksjonspunkterForPanel:c,behandling:A,fagsak:h,isReadOnly:v}=gv(),E=c.length>0?c[0]:void 0,{mellomlagretFormData:R,setMellomlagretFormData:T}=uv(),[S,N]=f.useState(R??p_(e,t)),[I,D]=f.useState(Xl(S)),j=u_();f.useEffect(()=>()=>{T(S)},[S]);const M=U=>{I.some(ne=>ne===U)?D(I.filter(ne=>ne!==U)):D(I.concat(U))},L=f.useRef(null),O=U=>{var ne;N(U),D(Xl(U(S))),(ne=L==null?void 0:L.current)==null||ne.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},P=()=>{l(!0),y({kode:gn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},K=()=>{l(!0),i()},x=U=>{l(!0),d(!1);const{frist:ne,ventearsak:se}=U;se&&s({frist:ne,ventearsak:se})},G=S.some(U=>{var ne,se,ve;return((ne=U.avklaring)==null?void 0:ne.saksbehandlersVurdering)===pe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||((se=U.avklaring)==null?void 0:se.saksbehandlersVurdering)===pe.MELDING_TIL_ARBEIDSGIVER_NAV_NO||((ve=U.avklaring)==null?void 0:ve.saksbehandlersVurdering)===pe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD}),V=S.every(U=>!U.årsak||U.årsak&&U.avklaring),q=E===void 0,$=(E==null?void 0:E.status)===We.UTFORT,X=(E==null?void 0:E.status)===We.OPPRETTET,oe=!v&&($||a&&q),Qe=!v&&X&&V&&!j&&G,ee=!v&&X&&V&&!j&&!G;return p.jsxs(Be,{gap:"4",children:[p.jsx(ak,{behandling:A,aksjonspunkt:E,readOnly:v,arbeidOgInntekt:e,registrerArbeidsforhold:r,erOverstyrer:a,tabellData:S,settÅpneRadIndexer:D,setErOverstyrt:k,oppdaterTabell:O}),p.jsxs(we,{ref:L,children:[p.jsx(we.Header,{children:p.jsxs(we.Row,{className:ed.headerRow,children:[p.jsx(we.HeaderCell,{scope:"col"}),p.jsx(we.HeaderCell,{scope:"col",children:p.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Arbeidsforhold"})}),p.jsx(we.HeaderCell,{scope:"col",children:p.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Periode"})}),p.jsx(we.HeaderCell,{scope:"col",children:p.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Kilde"})}),p.jsx(we.HeaderCell,{scope:"col",children:p.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt"})}),p.jsx(we.HeaderCell,{scope:"col"})]})}),p.jsx(we.Body,{children:S.map((U,ne)=>p.jsx(tk,{saksnummer:h.saksnummer,behandlingUuid:A.uuid,behandlingVersjon:A.versjon,radData:U,skjæringstidspunkt:e.skjæringstidspunkt,isReadOnly:v||$||q,registrerArbeidsforhold:r,lagreVurdering:n,toggleÅpenRad:()=>M(ne),erOverstyrt:g,oppdaterTabell:O,erRadÅpen:I.includes(ne),alleKodeverk:m},`${U.arbeidsgiverNavn}${U.arbeidsgiverIdent}`))})]}),Qe&&p.jsxs("div",{children:[p.jsx(Ge,{size:"small",variant:"primary",disabled:o,onClick:()=>d(!0),type:"button",children:p.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),p.jsx(Zm,{submitCallback:x,cancelEvent:()=>d(!1),defaultVenteårsak:nn.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:m[At.VENT_AARSAK],erTilbakekreving:!1,showModal:u,frist:null})]}),ee&&p.jsx("div",{children:p.jsx(Ge,{size:"small",variant:"primary",disabled:o,loading:o,onClick:P,type:"button",children:p.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})})}),oe&&p.jsxs(Be,{gap:"4",children:[p.jsx("div",{className:ed.alertStripe,children:p.jsx(Vt,{variant:"info",children:p.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),p.jsx("div",{children:p.jsx(Ge,{size:"small",variant:"secondary",disabled:o,loading:o,onClick:K,type:"button",children:p.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})})]})]})};sk.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const AS={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?"},hS=Pn(AS),fi=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:t,registrerArbeidsforhold:r,lagreVurdering:n,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:i})=>p.jsx(Fu,{value:hS,children:p.jsx(Qm,{children:p.jsx(sk,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:t,registrerArbeidsforhold:r,lagreVurdering:n,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:i})})});fi.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const mr="342352362",dn={innsendingstidspunkt:"2021-12-06T00:00:00",kildeSystem:"Altinn",bortfalteNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",behandlingsIdeer:[],tilknyttedeBehandlingIder:[],aktiveNaturalytelser:[]},GS={title:"fakta/fakta-arbeid-og-inntekter",component:fi,decorators:[Cu,Yu],args:{arbeidsgiverOpplysningerPerId:{},lagreVurdering:ur("onLagreVurdering"),registrerArbeidsforhold:ur("onRegistrerArbeidsforhold"),åpneForNyVurdering:ur("onÅpneForNyVurdering"),settBehandlingPåVentCallback:ur("onSettBehandlingPåVentCallback"),erOverstyrer:!1},render:e=>p.jsx(fi,{...e})},ta={args:{aksjonspunkterForPanel:[{definisjon:gn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:We.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:$e.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:"VELFERDSPERMISJON"},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:41e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},aa={args:{aksjonspunkterForPanel:[{definisjon:gn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:We.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:$e.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},sa={args:{aksjonspunkterForPanel:[{definisjon:gn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:We.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:$e.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:pe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,begrunnelse:"Vil innehente inntektsmelding fordi..."}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},ia={args:{aksjonspunkterForPanel:[{definisjon:gn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:We.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[{...dn,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:$e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},oa={args:{aksjonspunkterForPanel:[{definisjon:gn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:We.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:pe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...dn,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2",årsak:$e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},la={args:{aksjonspunkterForPanel:[{definisjon:gn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:We.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:pe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...dn,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2",årsak:$e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},da={args:{aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...dn,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2"}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},ua={args:{aksjonspunkterForPanel:[{definisjon:gn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:We.OPPRETTET}],arbeidsgiverOpplysningerPerId:{},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},ga={args:{arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},ma={args:{aksjonspunkterForPanel:[{definisjon:gn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:We.OPPRETTET}],arbeidsgiverOpplysningerPerId:{[mr]:{erPrivatPerson:!1,identifikator:mr,navn:"Telenor",referanse:mr}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:mr,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:pe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},ka={args:{arbeidsgiverOpplysningerPerId:{[mr]:{erPrivatPerson:!1,identifikator:mr,navn:"Telenor",referanse:mr}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:mr,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:pe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0,isReadOnly:!0}},fa={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:"VELFERDSPERMISJON"},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...dn,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},va={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",fom:"2021-12-01",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",stillingsprosent:80,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...dn,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...dn,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",inntektPrMnd:1e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"41925090",motattDato:"2021-11-06",journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},ca={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:gn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:We.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"},910909092:{erPrivatPerson:!1,identifikator:"910909092",navn:"DNB",referanse:"910909092"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:$e.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...dn,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...dn,arbeidsgiverIdent:"910909092",eksternArbeidsforholdId:void 0,inntektPrMnd:1e4,internArbeidsforholdId:void 0,kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"55599999",motattDato:"2021-12-06",refusjonPrMnd:5e3,journalpostId:"1",dokumentId:"2",årsak:$e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:31e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:3e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:3e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:3e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Ea={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:gn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:We.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"9374546382674846453452720241327384837356378478393893847474783",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:$e.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:$e.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...dn,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001sdsfdsdfsdfwer",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8cwds",kontaktpersonNavn:"Espen Solstråle",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"1",motattDato:"2021-12-01",årsak:$e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD},{...dn,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c8wew",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:$e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},pa={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:gn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:We.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:void 0,permisjonOgMangel:{permisjonFom:"2022-10-01",type:"PERMITTERING"},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d3",stillingsprosent:80,tom:"2021-12-31",årsak:$e.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:"VELFERDSPERMISJON"},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...dn,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:void 0}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},ya={args:{erOverstyrer:!0,isReadOnly:!0,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[{...dn,inntektPrMnd:4e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"947064649",eksternArbeidsforholdId:void 0,internArbeidsforholdId:void 0,kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975324",dokumentId:"549168225",motattDato:"2022-02-15",årsak:void 0,begrunnelse:void 0,saksbehandlersVurdering:void 0}],arbeidsforhold:[],inntekter:[],skjæringstidspunkt:"2022-02-16"}}},ba={args:{erOverstyrer:!1,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[],arbeidsforhold:[{arbeidsgiverIdent:"947064649",internArbeidsforholdId:"f98840f3-e74b-4255-ac33-b1cdcdb60311",eksternArbeidsforholdId:"2",fom:"2002-02-16",tom:"9999-12-31",stillingsprosent:20,årsak:void 0,saksbehandlersVurdering:null,begrunnelse:null}],inntekter:[],skjæringstidspunkt:"2022-02-05"}}},Aa={args:{erOverstyrer:!1,aksjonspunkterForPanel:[{definisjon:gn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:We.OPPRETTET}],arbeidsgiverOpplysningerPerId:{342352362:{erPrivatPerson:!1,referanse:"342352362",identifikator:"342352362",navn:"Lagt til av saksbehandler"},947064649:{erPrivatPerson:!1,referanse:"947064649",identifikator:"947064649",navn:"SJOKKERENDE ELEKTRIKER"},972674818:{erPrivatPerson:!1,referanse:"972674818",identifikator:"972674818",navn:"PENGELØS SPAREBANK"}},arbeidOgInntekt:{inntektsmeldinger:[{...dn,inntektPrMnd:2e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"972674818",eksternArbeidsforholdId:void 0,internArbeidsforholdId:void 0,kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975527",dokumentId:"549168458",motattDato:"2022-02-16",årsak:void 0,begrunnelse:"her vil jeg mase på AG",saksbehandlersVurdering:pe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING}],arbeidsforhold:[{arbeidsgiverIdent:"947064649",internArbeidsforholdId:"6e220db0-5cdf-410f-b8a0-a78ac4ff87a1",eksternArbeidsforholdId:"2",fom:"2018-10-01",tom:"9999-12-31",stillingsprosent:50,årsak:$e.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:pe.FORTSETT_UTEN_INNTEKTSMELDING,begrunnelse:"her trenger jeg ikke IM. ja ja"},{arbeidsgiverIdent:"972674818",internArbeidsforholdId:"3aee54db-af17-4b18-8c9c-897be1f4d572",eksternArbeidsforholdId:"1",fom:"2000-05-13",tom:"9999-12-31",stillingsprosent:100,årsak:void 0,saksbehandlersVurdering:null,begrunnelse:null}],inntekter:[{arbeidsgiverIdent:"947064649",inntekter:[{beløp:15e3,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]},{arbeidsgiverIdent:"972674818",inntekter:[{beløp:2e4,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]}],skjæringstidspunkt:"2022-02-15"}}},ha={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!0,fødselsdato:"2000-01-01",identifikator:"910909088",navn:"Bettan",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:"VELFERDSPERMISJON"},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...dn,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}};var rd,td,ad;ta.parameters={...ta.parameters,docs:{...(rd=ta.parameters)==null?void 0:rd.docs,source:{originalSource:`{
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
}`,...(ad=(td=ta.parameters)==null?void 0:td.docs)==null?void 0:ad.source}}};var sd,id,od;aa.parameters={...aa.parameters,docs:{...(sd=aa.parameters)==null?void 0:sd.docs,source:{originalSource:`{
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
}`,...(od=(id=aa.parameters)==null?void 0:id.docs)==null?void 0:od.source}}};var ld,dd,ud;sa.parameters={...sa.parameters,docs:{...(ld=sa.parameters)==null?void 0:ld.docs,source:{originalSource:`{
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
}`,...(ud=(dd=sa.parameters)==null?void 0:dd.docs)==null?void 0:ud.source}}};var gd,md,kd;ia.parameters={...ia.parameters,docs:{...(gd=ia.parameters)==null?void 0:gd.docs,source:{originalSource:`{
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
}`,...(kd=(md=ia.parameters)==null?void 0:md.docs)==null?void 0:kd.source}}};var fd,vd,cd;oa.parameters={...oa.parameters,docs:{...(fd=oa.parameters)==null?void 0:fd.docs,source:{originalSource:`{
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
}`,...(cd=(vd=oa.parameters)==null?void 0:vd.docs)==null?void 0:cd.source}}};var Ed,pd,yd;la.parameters={...la.parameters,docs:{...(Ed=la.parameters)==null?void 0:Ed.docs,source:{originalSource:`{
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
}`,...(yd=(pd=la.parameters)==null?void 0:pd.docs)==null?void 0:yd.source}}};var bd,Ad,hd;da.parameters={...da.parameters,docs:{...(bd=da.parameters)==null?void 0:bd.docs,source:{originalSource:`{
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
}`,...(hd=(Ad=da.parameters)==null?void 0:Ad.docs)==null?void 0:hd.source}}};var Td,Rd,Nd;ua.parameters={...ua.parameters,docs:{...(Td=ua.parameters)==null?void 0:Td.docs,source:{originalSource:`{
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
}`,...(Nd=(Rd=ua.parameters)==null?void 0:Rd.docs)==null?void 0:Nd.source}}};var Id,_d,Sd;ga.parameters={...ga.parameters,docs:{...(Id=ga.parameters)==null?void 0:Id.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(Sd=(_d=ga.parameters)==null?void 0:_d.docs)==null?void 0:Sd.source}}};var Od,Dd,Pd;ma.parameters={...ma.parameters,docs:{...(Od=ma.parameters)==null?void 0:Od.docs,source:{originalSource:`{
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
}`,...(Pd=(Dd=ma.parameters)==null?void 0:Dd.docs)==null?void 0:Pd.source}}};var Ld,wd,jd;ka.parameters={...ka.parameters,docs:{...(Ld=ka.parameters)==null?void 0:Ld.docs,source:{originalSource:`{
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
}`,...(jd=(wd=ka.parameters)==null?void 0:wd.docs)==null?void 0:jd.source}}};var Md,Kd,Fd;fa.parameters={...fa.parameters,docs:{...(Md=fa.parameters)==null?void 0:Md.docs,source:{originalSource:`{
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
}`,...(Fd=(Kd=fa.parameters)==null?void 0:Kd.docs)==null?void 0:Fd.source}}};var Vd,qd,xd;va.parameters={...va.parameters,docs:{...(Vd=va.parameters)==null?void 0:Vd.docs,source:{originalSource:`{
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
}`,...(xd=(qd=va.parameters)==null?void 0:qd.docs)==null?void 0:xd.source}}};var Gd,Bd,Ud;ca.parameters={...ca.parameters,docs:{...(Gd=ca.parameters)==null?void 0:Gd.docs,source:{originalSource:`{
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
}`,...(Ud=(Bd=ca.parameters)==null?void 0:Bd.docs)==null?void 0:Ud.source}}};var Hd,Cd,Yd;Ea.parameters={...Ea.parameters,docs:{...(Hd=Ea.parameters)==null?void 0:Hd.docs,source:{originalSource:`{
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
}`,...(Yd=(Cd=Ea.parameters)==null?void 0:Cd.docs)==null?void 0:Yd.source}}};var $d,Wd,Jd;pa.parameters={...pa.parameters,docs:{...($d=pa.parameters)==null?void 0:$d.docs,source:{originalSource:`{
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
}`,...(Jd=(Wd=pa.parameters)==null?void 0:Wd.docs)==null?void 0:Jd.source}}};var zd,Xd,Zd;ya.parameters={...ya.parameters,docs:{...(zd=ya.parameters)==null?void 0:zd.docs,source:{originalSource:`{
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
}`,...(Zd=(Xd=ya.parameters)==null?void 0:Xd.docs)==null?void 0:Zd.source}}};var Qd,eu,nu;ba.parameters={...ba.parameters,docs:{...(Qd=ba.parameters)==null?void 0:Qd.docs,source:{originalSource:`{
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
}`,...(nu=(eu=ba.parameters)==null?void 0:eu.docs)==null?void 0:nu.source}}};var ru,tu,au;Aa.parameters={...Aa.parameters,docs:{...(ru=Aa.parameters)==null?void 0:ru.docs,source:{originalSource:`{
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
}`,...(au=(tu=Aa.parameters)==null?void 0:tu.docs)==null?void 0:au.source}}};var su,iu,ou;ha.parameters={...ha.parameters,docs:{...(su=ha.parameters)==null?void 0:su.docs,source:{originalSource:`{
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
}`,...(ou=(iu=ha.parameters)==null?void 0:iu.docs)==null?void 0:ou.source}}};const BS=["InnhentInntektsmelding","InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret","InnhentInntektsmeldingDerBehandlingErAvsluttet","AvklarManglendeArbeidsforhold","AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet","AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig","IngenAksjonspunktMenTilbakehoppMuligForOverstyrer","SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer","SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer","ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet","ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet","ArbeidsforholdErOK","ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet","FlereArbeidsforholdOgInntekstemeldinger","ArbeidsforholdMedSammeOrgNr","ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre","FoerRegisterinnhenting","AutomatiskIgnorertInntektsmelding","EtterAtEtterspurtInntektsmeldingErKommet","SkalViseFødselsnummerForPrivatperson"];export{ka as ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet,ma as ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet,fa as ArbeidsforholdErOK,va as ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet,Ea as ArbeidsforholdMedSammeOrgNr,pa as ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre,ba as AutomatiskIgnorertInntektsmelding,ia as AvklarManglendeArbeidsforhold,oa as AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet,la as AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig,Aa as EtterAtEtterspurtInntektsmeldingErKommet,ca as FlereArbeidsforholdOgInntekstemeldinger,ya as FoerRegisterinnhenting,da as IngenAksjonspunktMenTilbakehoppMuligForOverstyrer,ta as InnhentInntektsmelding,sa as InnhentInntektsmeldingDerBehandlingErAvsluttet,aa as InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret,ga as SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer,ua as SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer,ha as SkalViseFødselsnummerForPrivatperson,BS as __namedExportsOrder,GS as default};
