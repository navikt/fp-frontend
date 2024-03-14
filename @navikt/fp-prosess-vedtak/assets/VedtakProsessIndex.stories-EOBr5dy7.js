import{R as d,r as T,b as pg,c as cg,g as bg}from"./index-DogsOklH.js";import{v as _g}from"./v4-yQnnJER4.js";import{r as hg,R as Sg}from"./index-MroJ3egt.js";const{addons:Ng}=__STORYBOOK_MODULE_PREVIEW_API__,{global:Ei}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:Og}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var Ig="storybook/actions",Dg=`${Ig}/action-event`,Kg={depth:10,clearOnStoryChange:!0,limit:50},Fl=(e,n)=>{let r=Object.getPrototypeOf(e);return!r||n(r)?r:Fl(r,n)},Lg=e=>!!(typeof e=="object"&&e&&Fl(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),Pg=e=>{if(Lg(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let r=Object.getOwnPropertyDescriptor(n,"view"),t=r==null?void 0:r.value;return typeof t=="object"&&(t==null?void 0:t.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...r,value:Object.create(t.constructor.prototype)}),n}return e},Fg=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?_g():Date.now().toString(36)+Math.random().toString(36).substring(2);function me(e,n={}){let r={...Kg,...n},t=function(...a){var E,m;if(n.implicit){let y=(E="__STORYBOOK_PREVIEW__"in Ei?Ei.__STORYBOOK_PREVIEW__:void 0)==null?void 0:E.storyRenders.find(b=>b.phase==="playing"||b.phase==="rendering");if(y){let b=!((m=window==null?void 0:window.FEATURES)!=null&&m.disallowImplicitActionsInRenderV8),v=new Og({phase:y.phase,name:e,deprecated:b});if(b)console.warn(v);else throw v}}let s=Ng.getChannel(),i=Fg(),o=5,l=a.map(Pg),u=a.length>1?l:l[0],g={id:i,count:0,data:{name:e,args:u},options:{...r,maxDepth:o+(r.depth||3),allowFunction:r.allowFunction||!1}};s.emit(Dg,g)};return t.isAction=!0,t.implicit=n.implicit,t}var ce=(e=>(e.TERMINBEKREFTELSE="5001",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.VEDTAK_UTEN_TOTRINNSKONTROLL="5018",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN="5032",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYR_BEREGNING="6007",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(ce||{});const Ut={OPPRETTET:"OPPR",UTFORT:"UTFO",AVBRUTT:"AVBR"},Mg={INGEN_BEREGNINGSREGLER:"1099"},wn={FEIL_I_LOVANDVENDELSE:"RE-LOV",FEIL_REGELVERKSFORSTAELSE:"RE-RGLF",FEIL_ELLER_ENDRET_FAKTA:"RE-FEFAKTA",FEIL_PROSESSUELL:"RE-PRSSL",ETTER_KLAGE:"ETTER_KLAGE",ANNET:"RE-ANNET",KLAGE_U_INNTK:"RE-KLAG-U-INNTK",KLAGE_M_INNTK:"RE-KLAG-M-INNTK",MEDLEMSKAP:"RE-MDL",OPPTJENING:"RE-OPTJ",FORDELING:"RE-FRDLING",INNTEKT:"RE-INNTK",FØDSEL:"RE-FØDSEL",DØD:"RE-DØD",SØKERS_RELASJON:"RE-SRTB",SØKNADSFRIST:"RE-FRIST",BEREEGNINGSGRUNNLAG:"RE-BER-GRUN",RE_TILSTØTENDE_YTELSE_INNVILGET:"RE-TILST-YT-INNVIL",RE_ENDRING_BEREGNINGSGRUNNLAG:"RE-ENDR-BER-GRUN",RE_TILSTØTENDE_YTELSE_OPPHØRT:"RE-TILST-YT-OPPH",RE_ENDRING_FRA_BRUKER:"RE-END-FRA-BRUKER",RE_ENDRET_INNTEKTSMELDING:"RE-END-INNTEKTSMELD",RE_KLAGE_KA:"RE_KLAGE_KA",RE_KLAGE_NFP:"RE_KLAGE_NFP",RE_VILKÅR:"RE_VILKÅR",RE_FORELDELSE:"RE_FORELDELSE",RE_FEILUTBETALT_BELØP_REDUSERT:"RE_FEILUTBETALT_BELØP_REDUSERT",REBEREGN_FERIEPENGER:"REBEREGN-FERIEPENGER",RE_UTSATT_START:"RE-UTSATT-START"},Q={IKKE_FASTSATT:"IKKE_FASTSATT",INNVILGET:"INNVILGET",AVSLATT:"AVSLÅTT",OPPHOR:"OPPHØR",HENLAGT_SOKNAD_TRUKKET:"HENLAGT_SØKNAD_TRUKKET",KLAGE_AVVIST:"KLAGE_AVVIST",KLAGE_MEDHOLD:"KLAGE_MEDHOLD",KLAGE_DELVIS_MEDHOLD:"KLAGE_DELVIS_MEDHOLD",KLAGE_OMGJORT_UGUNST:"KLAGE_OMGJORT_UGUNST",KLAGE_YTELSESVEDTAK_OPPHEVET:"KLAGE_YTELSESVEDTAK_OPPHEVET",KLAGE_YTELSESVEDTAK_STADFESTET:"KLAGE_YTELSESVEDTAK_STADFESTET",KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",HJEMSENDE_UTEN_OPPHEVE:"HJEMSENDE_UTEN_OPPHEVE",HENLAGT_KLAGE_TRUKKET:"HENLAGT_KLAGE_TRUKKET",HENLAGT_ANKE_TRUKKET:"HENLAGT_ANKE_TRUKKET",HENLAGT_FEILOPPRETTET:"HENLAGT_FEILOPPRETTET",HENLAGT_FEILOPPRETTET_MED_BREV:"HENLAGT_FEILOPPRETTET_MED_BREV",HENLAGT_FEILOPPRETTET_UTEN_BREV:"HENLAGT_FEILOPPRETTET_UTEN_BREV",HENLAGT_BRUKER_DOD:"HENLAGT_BRUKER_DØD",FORELDREPENGER_ENDRET:"FORELDREPENGER_ENDRET",FORELDREPENGER_SENERE:"FORELDREPENGER_SENERE",INGEN_ENDRING:"INGEN_ENDRING",MANGLER_BEREGNINGSREGLER:"MANGLER_BEREGNINGSREGLER",HENLAGT_SOKNAD_MANGLER:"HENLAGT_SØKNAD_MANGLER",INNSYN_INNVILGET:"INNSYN_INNVILGET",INNSYN_DELVIS_INNVILGET:"INNSYN_DELVIS_INNVILGET",INNSYN_AVVIST:"INNSYN_AVVIST",HENLAGT_INNSYN_TRUKKET:"HENLAGT_INNSYN_TRUKKET"},Vg=[Q.KLAGE_MEDHOLD,Q.KLAGE_DELVIS_MEDHOLD,Q.KLAGE_OMGJORT_UGUNST,Q.KLAGE_YTELSESVEDTAK_OPPHEVET,Q.KLAGE_YTELSESVEDTAK_STADFESTET,Q.KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET,Q.HJEMSENDE_UTEN_OPPHEVE],Gg=[Q.KLAGE_MEDHOLD,Q.KLAGE_DELVIS_MEDHOLD,Q.KLAGE_OMGJORT_UGUNST],wg=[Q.FORELDREPENGER_ENDRET,Q.FORELDREPENGER_SENERE,Q.INGEN_ENDRING],ps=e=>Vg.includes(e)||wg.includes(e)||e===Q.INNVILGET,cs=e=>e===Q.AVSLATT||e===Q.KLAGE_AVVIST||e===Q.KLAGE_YTELSESVEDTAK_STADFESTET,Ml=e=>e===Q.OPPHOR,Bg=e=>Gg.includes(e),Xe={OPPRETTET:"OPPRE",BEHANDLING_UTREDES:"UTRED",AVSLUTTET:"AVSLU",IVERKSETTER_VEDTAK:"IVED",FATTER_VEDTAK:"FVED"},Je={FORSTEGANGSSOKNAD:"BT-002",KLAGE:"BT-003",REVURDERING:"BT-004",DOKUMENTINNSYN:"BT-006",TILBAKEKREVING:"BT-007",ANKE:"BT-008",TILBAKEKREVING_REVURDERING:"BT-009"},Vl={INNHENTE_OPPLYSNINGER:"INNOPP",VARSEL_OM_REVURDERING:"VARREV",FORLENGET_SAKSBEHANDLINGSTID:"FORSAK",FORLENGET_SAKSBEHANDLINGSTID_MEDL:"FORMED",KLAGE_OMGJORING:"KGEOMG",KLAGE_AVVIST:"KGEAVV",KLAGE_STADFESTET:"KGESTA",KLAGE_HJEMSENDT:"KGEHJE",KLAGE_OVERSENDT:"KGEOVE",ANKE_OMGJORT:"ANKOMG",ANKE_OPPHEVET:"ANKOPP",FRITEKST:"FRITEK",INNSYN_SVAR:"INNSYN",INFO_OM_HENLEGGELSE:"IOHENL",TBK_INNHENTE_OPPLYSNINGER:"INNHEN",KORRIGERT_VARSEL_OM_TILBAKEKREVING:"KORRIGVARS",VARSEL_OM_TILBAKEKREVING:"VARS",ETTERLYS_INNTEKTSMELDING:"ELYSIM"},ee={ENGANGSSTONAD:"ES",FORELDREPENGER:"FP",SVANGERSKAPSPENGER:"SVP"};var jn=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.INNTEKTSKATEGORI="Inntektskategori",e.BEREGNINGSGRUNNLAG_ANDELTYPER="BeregningsgrunnlagAndeltype",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.FAGSYSTEM="Fagsystem",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.ARBEIDSFORHOLD_HANDLING_TYPE="ArbeidsforholdHandlingType",e.HISTORIKK_OPPLYSNING_TYPE="HistorikkOpplysningType",e.HISTORIKK_ENDRET_FELT_TYPE="HistorikkEndretFeltType",e.HISTORIKKINNSLAG_TYPE="HistorikkinnslagType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.AKTSOMHET="Aktsomhet",e.VURDERING="AnnenVurdering",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG="VurderArbeidsforholdHistorikkinnslag",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.AKTIVITETSKRAV_AVKLARING="KontrollerAktivitetskravAvklaring",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e))(jn||{});const Ug=(e,n,r,t)=>{let a=e[n];if(!a||a.length===0)return"";t&&(a=a[t]);const s=a.find(i=>i.kode===r);return s?s.navn:""},vt=e=>(n,r,t)=>Ug(e,r,n,t),Qe={ENDRING_I_BEREGNING:"ENDRING_I_BEREGNING",ENDRING_I_UTTAK:"ENDRING_I_UTTAK",ENDRING_I_FORDELING_AV_YTELSEN:"ENDRING_I_FORDELING_AV_YTELSEN",INGEN_ENDRING:"INGEN_ENDRING",ENDRING_I_BEREGNING_OG_UTTAK:"ENDRING_I_BEREGNING_OG_UTTAK",FORELDREPENGER_OPPHORER:"FORELDREPENGER_OPPHØRER",UDEFINERT:"-"};var bs=(e=>(e.FODSELSVILKARET_MOR="FP_VK_1",e.SVANGERSKAPVILKARET="SVP_VK_1",e.MEDLEMSKAPSVILKARET="FP_VK_2",e.MEDLEMSKAPSVILKÅRET_LØPENDE="FP_VK_2_L",e.SOKNADFRISTVILKARET="FP_VK_3",e.ADOPSJONSVILKARET="FP_VK_4",e.OMSORGSVILKARET="FP_VK_5",e.FORELDREANSVARSVILKARET_2_LEDD="FP_VK_8",e.FODSELSVILKARET_FAR="FP_VK_11",e.ADOPSJONSVILKARET_FORELDREPENGER="FP_VK_16",e.OPPTJENINGSPERIODE="FP_VK_21",e.OPPTJENINGSVILKARET="FP_VK_23",e.FORELDREANSVARSVILKARET_4_LEDD="FP_VK_33",e.SOKERSOPPLYSNINGSPLIKT="FP_VK_34",e.BEREGNINGSGRUNNLAGVILKARET="FP_VK_41",e))(bs||{});const sa={OPPFYLT:"OPPFYLT",IKKE_OPPFYLT:"IKKE_OPPFYLT",IKKE_VURDERT:"IKKE_VURDERT"},jg={TILBAKEKR_OPPRETT:"TILBAKEKR_OPPRETT",TILBAKEKR_IGNORER:"TILBAKEKR_IGNORER",TILBAKEKR_INNTREKK:"TILBAKEKR_INNTREKK",TILBAKEKR_OPPDATER:"TILBAKEKR_OPPDATER"};var yt=e=>e.type==="checkbox",Tr=e=>e instanceof Date,qe=e=>e==null;const Gl=e=>typeof e=="object";var Ke=e=>!qe(e)&&!Array.isArray(e)&&Gl(e)&&!Tr(e),wl=e=>Ke(e)&&e.target?yt(e.target)?e.target.checked:e.target.value:e,Hg=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Bl=(e,n)=>e.has(Hg(n)),qg=e=>{const n=e.constructor&&e.constructor.prototype;return Ke(n)&&n.hasOwnProperty("isPrototypeOf")},_s=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function xe(e){let n;const r=Array.isArray(e);if(e instanceof Date)n=new Date(e);else if(e instanceof Set)n=new Set(e);else if(!(_s&&(e instanceof Blob||e instanceof FileList))&&(r||Ke(e)))if(n=r?[]:{},!r&&!qg(e))n=e;else for(const t in e)e.hasOwnProperty(t)&&(n[t]=xe(e[t]));else return e;return n}var At=e=>Array.isArray(e)?e.filter(Boolean):[],he=e=>e===void 0,U=(e,n,r)=>{if(!n||!Ke(e))return r;const t=At(n.split(/[,[\].]+?/)).reduce((a,s)=>qe(a)?a:a[s],e);return he(t)||t===e?he(e[n])?r:e[n]:t},vn=e=>typeof e=="boolean";const $t={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},mn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ln={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ul=d.createContext(null),hr=()=>d.useContext(Ul),Yg=e=>{const{children:n,...r}=e;return d.createElement(Ul.Provider,{value:r},n)};var jl=(e,n,r,t=!0)=>{const a={defaultValues:n._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const i=s;return n._proxyFormState[i]!==mn.all&&(n._proxyFormState[i]=!t||mn.all),r&&(r[i]=!0),e[i]}});return a},an=e=>Ke(e)&&!Object.keys(e).length,Hl=(e,n,r,t)=>{r(e);const{name:a,...s}=e;return an(s)||Object.keys(s).length>=Object.keys(n).length||Object.keys(s).find(i=>n[i]===(!t||mn.all))},jt=e=>Array.isArray(e)?e:[e],ql=(e,n,r)=>!e||!n||e===n||jt(e).some(t=>t&&(r?t===n:t.startsWith(n)||n.startsWith(t)));function hs(e){const n=d.useRef(e);n.current=e,d.useEffect(()=>{const r=!e.disabled&&n.current.subject&&n.current.subject.subscribe({next:n.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function xg(e){const n=hr(),{control:r=n.control,disabled:t,name:a,exact:s}=e||{},[i,o]=d.useState(r._formState),l=d.useRef(!0),u=d.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),g=d.useRef(a);return g.current=a,hs({disabled:t,next:E=>l.current&&ql(g.current,E.name,s)&&Hl(E,u.current,r._updateFormState)&&o({...r._formState,...E}),subject:r._subjects.state}),d.useEffect(()=>(l.current=!0,u.current.isValid&&r._updateValid(!0),()=>{l.current=!1}),[r]),jl(i,r,u.current,!1)}var Sn=e=>typeof e=="string",Yl=(e,n,r,t,a)=>Sn(e)?(t&&n.watch.add(e),U(r,e,a)):Array.isArray(e)?e.map(s=>(t&&n.watch.add(s),U(r,s))):(t&&(n.watchAll=!0),r);function Cg(e){const n=hr(),{control:r=n.control,name:t,defaultValue:a,disabled:s,exact:i}=e||{},o=d.useRef(t);o.current=t,hs({disabled:s,subject:r._subjects.values,next:g=>{ql(o.current,g.name,i)&&u(xe(Yl(o.current,r._names,g.values||r._formValues,!1,a)))}});const[l,u]=d.useState(r._getWatch(t,a));return d.useEffect(()=>r._removeUnmounted()),l}var Ss=e=>/^\w*$/.test(e),xl=e=>At(e.replace(/["|']|\]/g,"").split(/\.|\[/)),Ee=(e,n,r)=>{let t=-1;const a=Ss(n)?[n]:xl(n),s=a.length,i=s-1;for(;++t<s;){const o=a[t];let l=r;if(t!==i){const u=e[o];l=Ke(u)||Array.isArray(u)?u:isNaN(+a[t+1])?{}:[]}e[o]=l,e=e[o]}return e};function $g(e){const n=hr(),{name:r,disabled:t,control:a=n.control,shouldUnregister:s}=e,i=Bl(a._names.array,r),o=Cg({control:a,name:r,defaultValue:U(a._formValues,r,U(a._defaultValues,r,e.defaultValue)),exact:!0}),l=xg({control:a,name:r}),u=d.useRef(a.register(r,{...e.rules,value:o,...vn(e.disabled)?{disabled:e.disabled}:{}}));return d.useEffect(()=>{const g=a._options.shouldUnregister||s,E=(m,y)=>{const b=U(a._fields,m);b&&(b._f.mount=y)};if(E(r,!0),g){const m=xe(U(a._options.defaultValues,r));Ee(a._defaultValues,r,m),he(U(a._formValues,r))&&Ee(a._formValues,r,m)}return()=>{(i?g&&!a._state.action:g)?a.unregister(r):E(r,!1)}},[r,a,i,s]),d.useEffect(()=>{U(a._fields,r)&&a._updateDisabledField({disabled:t,fields:a._fields,name:r,value:U(a._fields,r)._f.value})},[t,r,a]),{field:{name:r,value:o,...vn(t)||l.disabled?{disabled:l.disabled||t}:{},onChange:d.useCallback(g=>u.current.onChange({target:{value:wl(g),name:r},type:$t.CHANGE}),[r]),onBlur:d.useCallback(()=>u.current.onBlur({target:{value:U(a._formValues,r),name:r},type:$t.BLUR}),[r,a]),ref:g=>{const E=U(a._fields,r);E&&g&&(E._f.ref={focus:()=>g.focus(),select:()=>g.select(),setCustomValidity:m=>g.setCustomValidity(m),reportValidity:()=>g.reportValidity()})}},formState:l,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!U(l.errors,r)},isDirty:{enumerable:!0,get:()=>!!U(l.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!U(l.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!U(l.validatingFields,r)},error:{enumerable:!0,get:()=>U(l.errors,r)}})}}var Jg=(e,n,r,t,a)=>n?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[t]:a||!0}}:{},vi=e=>({isOnSubmit:!e||e===mn.onSubmit,isOnBlur:e===mn.onBlur,isOnChange:e===mn.onChange,isOnAll:e===mn.all,isOnTouch:e===mn.onTouched}),mi=(e,n,r)=>!r&&(n.watchAll||n.watch.has(e)||[...n.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const lt=(e,n,r,t)=>{for(const a of r||Object.keys(e)){const s=U(e,a);if(s){const{_f:i,...o}=s;if(i){if(i.refs&&i.refs[0]&&n(i.refs[0],a)&&!t)break;if(i.ref&&n(i.ref,i.name)&&!t)break;lt(o,n)}else Ke(o)&&lt(o,n)}}};var Wg=(e,n,r)=>{const t=At(U(e,r));return Ee(t,"root",n[r]),Ee(e,r,t),e},Ns=e=>e.type==="file",Cn=e=>typeof e=="function",Jt=e=>{if(!_s)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},Ht=e=>Sn(e),Os=e=>e.type==="radio",Wt=e=>e instanceof RegExp;const fi={value:!1,isValid:!1},Ti={value:!0,isValid:!0};var Cl=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!he(e[0].attributes.value)?he(e[0].value)||e[0].value===""?Ti:{value:e[0].value,isValid:!0}:Ti:fi}return fi};const Ri={isValid:!1,value:null};var $l=e=>Array.isArray(e)?e.reduce((n,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:n,Ri):Ri;function yi(e,n,r="validate"){if(Ht(e)||Array.isArray(e)&&e.every(Ht)||vn(e)&&!e)return{type:r,message:Ht(e)?e:"",ref:n}}var kr=e=>Ke(e)&&!Wt(e)?e:{value:e,message:""},Ai=async(e,n,r,t,a)=>{const{ref:s,refs:i,required:o,maxLength:l,minLength:u,min:g,max:E,pattern:m,validate:y,name:b,valueAsNumber:v,mount:p,disabled:N}=e._f,R=U(n,b);if(!p||N)return{};const D=i?i[0]:s,Y=L=>{t&&D.reportValidity&&(D.setCustomValidity(vn(L)?"":L||""),D.reportValidity())},w={},G=Os(s),O=yt(s),h=G||O,j=(v||Ns(s))&&he(s.value)&&he(R)||Jt(s)&&s.value===""||R===""||Array.isArray(R)&&!R.length,M=Jg.bind(null,b,r,w),K=(L,H,c,_=Ln.maxLength,S=Ln.minLength)=>{const V=L?H:c;w[b]={type:L?_:S,message:V,ref:s,...M(L?_:S,V)}};if(a?!Array.isArray(R)||!R.length:o&&(!h&&(j||qe(R))||vn(R)&&!R||O&&!Cl(i).isValid||G&&!$l(i).isValid)){const{value:L,message:H}=Ht(o)?{value:!!o,message:o}:kr(o);if(L&&(w[b]={type:Ln.required,message:H,ref:D,...M(Ln.required,H)},!r))return Y(H),w}if(!j&&(!qe(g)||!qe(E))){let L,H;const c=kr(E),_=kr(g);if(!qe(R)&&!isNaN(R)){const S=s.valueAsNumber||R&&+R;qe(c.value)||(L=S>c.value),qe(_.value)||(H=S<_.value)}else{const S=s.valueAsDate||new Date(R),V=W=>new Date(new Date().toDateString()+" "+W),P=s.type=="time",C=s.type=="week";Sn(c.value)&&R&&(L=P?V(R)>V(c.value):C?R>c.value:S>new Date(c.value)),Sn(_.value)&&R&&(H=P?V(R)<V(_.value):C?R<_.value:S<new Date(_.value))}if((L||H)&&(K(!!L,c.message,_.message,Ln.max,Ln.min),!r))return Y(w[b].message),w}if((l||u)&&!j&&(Sn(R)||a&&Array.isArray(R))){const L=kr(l),H=kr(u),c=!qe(L.value)&&R.length>+L.value,_=!qe(H.value)&&R.length<+H.value;if((c||_)&&(K(c,L.message,H.message),!r))return Y(w[b].message),w}if(m&&!j&&Sn(R)){const{value:L,message:H}=kr(m);if(Wt(L)&&!R.match(L)&&(w[b]={type:Ln.pattern,message:H,ref:s,...M(Ln.pattern,H)},!r))return Y(H),w}if(y){if(Cn(y)){const L=await y(R,n),H=yi(L,D);if(H&&(w[b]={...H,...M(Ln.validate,H.message)},!r))return Y(H.message),w}else if(Ke(y)){let L={};for(const H in y){if(!an(L)&&!r)break;const c=yi(await y[H](R,n),D,H);c&&(L={...c,...M(H,c.message)},Y(c.message),r&&(w[b]=L))}if(!an(L)&&(w[b]={ref:D,...L},!r))return w}}return Y(!0),w};function zg(e,n){const r=n.slice(0,-1).length;let t=0;for(;t<r;)e=he(e)?t++:e[n[t++]];return e}function Zg(e){for(const n in e)if(e.hasOwnProperty(n)&&!he(e[n]))return!1;return!0}function Me(e,n){const r=Array.isArray(n)?n:Ss(n)?[n]:xl(n),t=r.length===1?e:zg(e,r),a=r.length-1,s=r[a];return t&&delete t[s],a!==0&&(Ke(t)&&an(t)||Array.isArray(t)&&Zg(t))&&Me(e,r.slice(0,-1)),e}var Ga=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},zt=e=>qe(e)||!Gl(e);function er(e,n){if(zt(e)||zt(n))return e===n;if(Tr(e)&&Tr(n))return e.getTime()===n.getTime();const r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(const a of r){const s=e[a];if(!t.includes(a))return!1;if(a!=="ref"){const i=n[a];if(Tr(s)&&Tr(i)||Ke(s)&&Ke(i)||Array.isArray(s)&&Array.isArray(i)?!er(s,i):s!==i)return!1}}return!0}var Jl=e=>e.type==="select-multiple",Xg=e=>Os(e)||yt(e),wa=e=>Jt(e)&&e.isConnected,Qg=e=>Ke(e)&&Object.values(e).some(n=>n),Wl=e=>{for(const n in e)if(Cn(e[n]))return!0;return!1};function Zt(e,n={}){const r=Array.isArray(e);if(Ke(e)||r)for(const t in e)Array.isArray(e[t])||Ke(e[t])&&!Wl(e[t])?(n[t]=Array.isArray(e[t])?[]:{},Zt(e[t],n[t])):qe(e[t])||(n[t]=!0);return n}function zl(e,n,r){const t=Array.isArray(e);if(Ke(e)||t)for(const a in e)Array.isArray(e[a])||Ke(e[a])&&!Wl(e[a])?he(n)||zt(r[a])?r[a]=Array.isArray(e[a])?Zt(e[a],[]):{...Zt(e[a])}:zl(e[a],qe(n)?{}:n[a],r[a]):r[a]=!er(e[a],n[a]);return r}var Kt=(e,n)=>zl(e,n,Zt(n)),Zl=(e,{valueAsNumber:n,valueAsDate:r,setValueAs:t})=>he(e)?e:n?e===""?NaN:e&&+e:r&&Sn(e)?new Date(e):t?t(e):e;function Ba(e){const n=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):n.disabled))return Ns(n)?n.files:Os(n)?$l(e.refs).value:Jl(n)?[...n.selectedOptions].map(({value:r})=>r):yt(n)?Cl(e.refs).value:Zl(he(n.value)?e.ref.value:n.value,e)}var ek=(e,n,r,t)=>{const a={};for(const s of e){const i=U(n,s);i&&Ee(a,s,i._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:t}},Dr=e=>he(e)?e:Wt(e)?e.source:Ke(e)?Wt(e.value)?e.value.source:e.value:e,nk=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function pi(e,n,r){const t=U(e,r);if(t||Ss(r))return{error:t,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=U(n,s),o=U(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(o&&o.type)return{name:s,error:o};a.pop()}return{name:r}}var rk=(e,n,r,t,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(n||e):(r?t.isOnBlur:a.isOnBlur)?!e:(r?t.isOnChange:a.isOnChange)?e:!0,tk=(e,n)=>!At(U(e,n)).length&&Me(e,n);const ak={mode:mn.onSubmit,reValidateMode:mn.onChange,shouldFocusError:!0};function sk(e={}){let n={...ak,...e},r={submitCount:0,isDirty:!1,isLoading:Cn(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},t={},a=Ke(n.defaultValues)||Ke(n.values)?xe(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:xe(a),i={action:!1,mount:!1,watch:!1},o={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0;const g={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},E={values:Ga(),array:Ga(),state:Ga()},m=vi(n.mode),y=vi(n.reValidateMode),b=n.criteriaMode===mn.all,v=k=>f=>{clearTimeout(u),u=setTimeout(k,f)},p=async k=>{if(g.isValid||k){const f=n.resolver?an((await h()).errors):await M(t,!0);f!==r.isValid&&E.state.next({isValid:f})}},N=(k,f)=>{(g.isValidating||g.validatingFields)&&(f.forEach(A=>{Ee(r.validatingFields,A,k)}),r.isValidating=Qg(r.validatingFields),E.state.next({validatingFields:r.validatingFields,isValidating:r.isValidating}))},R=(k,f=[],A,$,B=!0,F=!0)=>{if($&&A){if(i.action=!0,F&&Array.isArray(U(t,k))){const z=A(U(t,k),$.argA,$.argB);B&&Ee(t,k,z)}if(F&&Array.isArray(U(r.errors,k))){const z=A(U(r.errors,k),$.argA,$.argB);B&&Ee(r.errors,k,z),tk(r.errors,k)}if(g.touchedFields&&F&&Array.isArray(U(r.touchedFields,k))){const z=A(U(r.touchedFields,k),$.argA,$.argB);B&&Ee(r.touchedFields,k,z)}g.dirtyFields&&(r.dirtyFields=Kt(a,s)),E.state.next({name:k,isDirty:L(k,f),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Ee(s,k,f)},D=(k,f)=>{Ee(r.errors,k,f),E.state.next({errors:r.errors})},Y=k=>{r.errors=k,E.state.next({errors:r.errors,isValid:!1})},w=(k,f,A,$)=>{const B=U(t,k);if(B){const F=U(s,k,he(A)?U(a,k):A);he(F)||$&&$.defaultChecked||f?Ee(s,k,f?F:Ba(B._f)):_(k,F),i.mount&&p()}},G=(k,f,A,$,B)=>{let F=!1,z=!1;const ue={name:k},Fe=!!(U(t,k)&&U(t,k)._f.disabled);if(!A||$){g.isDirty&&(z=r.isDirty,r.isDirty=ue.isDirty=L(),F=z!==ue.isDirty);const Ze=Fe||er(U(a,k),f);z=!!(!Fe&&U(r.dirtyFields,k)),Ze||Fe?Me(r.dirtyFields,k):Ee(r.dirtyFields,k,!0),ue.dirtyFields=r.dirtyFields,F=F||g.dirtyFields&&z!==!Ze}if(A){const Ze=U(r.touchedFields,k);Ze||(Ee(r.touchedFields,k,A),ue.touchedFields=r.touchedFields,F=F||g.touchedFields&&Ze!==A)}return F&&B&&E.state.next(ue),F?ue:{}},O=(k,f,A,$)=>{const B=U(r.errors,k),F=g.isValid&&vn(f)&&r.isValid!==f;if(e.delayError&&A?(l=v(()=>D(k,A)),l(e.delayError)):(clearTimeout(u),l=null,A?Ee(r.errors,k,A):Me(r.errors,k)),(A?!er(B,A):B)||!an($)||F){const z={...$,...F&&vn(f)?{isValid:f}:{},errors:r.errors,name:k};r={...r,...z},E.state.next(z)}N(!1,Object.keys(r.validatingFields).filter(z=>z===k))},h=async k=>n.resolver(s,n.context,ek(k||o.mount,t,n.criteriaMode,n.shouldUseNativeValidation)),j=async k=>{const{errors:f}=await h(k);if(k)for(const A of k){const $=U(f,A);$?Ee(r.errors,A,$):Me(r.errors,A)}else r.errors=f;return f},M=async(k,f,A={valid:!0})=>{for(const $ in k){const B=k[$];if(B){const{_f:F,...z}=B;if(F){const ue=o.array.has(F.name),Fe=await Ai(B,s,b,n.shouldUseNativeValidation&&!f,ue);if(Fe[F.name]&&(A.valid=!1,f))break;!f&&(U(Fe,F.name)?ue?Wg(r.errors,Fe,F.name):Ee(r.errors,F.name,Fe[F.name]):Me(r.errors,F.name))}z&&await M(z,f,A)}}return A.valid},K=()=>{for(const k of o.unMount){const f=U(t,k);f&&(f._f.refs?f._f.refs.every(A=>!wa(A)):!wa(f._f.ref))&&tn(k)}o.unMount=new Set},L=(k,f)=>(k&&f&&Ee(s,k,f),!er(te(),a)),H=(k,f,A)=>Yl(k,o,{...i.mount?s:he(f)?a:Sn(k)?{[k]:f}:f},A,f),c=k=>At(U(i.mount?s:a,k,e.shouldUnregister?U(a,k,[]):[])),_=(k,f,A={})=>{const $=U(t,k);let B=f;if($){const F=$._f;F&&(!F.disabled&&Ee(s,k,Zl(f,F)),B=Jt(F.ref)&&qe(f)?"":f,Jl(F.ref)?[...F.ref.options].forEach(z=>z.selected=B.includes(z.value)):F.refs?yt(F.ref)?F.refs.length>1?F.refs.forEach(z=>(!z.defaultChecked||!z.disabled)&&(z.checked=Array.isArray(B)?!!B.find(ue=>ue===z.value):B===z.value)):F.refs[0]&&(F.refs[0].checked=!!B):F.refs.forEach(z=>z.checked=z.value===B):Ns(F.ref)?F.ref.value="":(F.ref.value=B,F.ref.type||E.values.next({name:k,values:{...s}})))}(A.shouldDirty||A.shouldTouch)&&G(k,B,A.shouldTouch,A.shouldDirty,!0),A.shouldValidate&&W(k)},S=(k,f,A)=>{for(const $ in f){const B=f[$],F=`${k}.${$}`,z=U(t,F);(o.array.has(k)||!zt(B)||z&&!z._f)&&!Tr(B)?S(F,B,A):_(F,B,A)}},V=(k,f,A={})=>{const $=U(t,k),B=o.array.has(k),F=xe(f);Ee(s,k,F),B?(E.array.next({name:k,values:{...s}}),(g.isDirty||g.dirtyFields)&&A.shouldDirty&&E.state.next({name:k,dirtyFields:Kt(a,s),isDirty:L(k,F)})):$&&!$._f&&!qe(F)?S(k,F,A):_(k,F,A),mi(k,o)&&E.state.next({...r}),E.values.next({name:i.mount?k:void 0,values:{...s}})},P=async k=>{const f=k.target;let A=f.name,$=!0;const B=U(t,A),F=()=>f.type?Ba(B._f):wl(k),z=ue=>{$=Number.isNaN(ue)||ue===U(s,A,ue)};if(B){let ue,Fe;const Ze=F(),gr=k.type===$t.BLUR||k.type===$t.FOCUS_OUT,Rg=!nk(B._f)&&!n.resolver&&!U(r.errors,A)&&!B._f.deps||rk(gr,U(r.touchedFields,A),r.isSubmitted,y,m),Ma=mi(A,o,gr);Ee(s,A,Ze),gr?(B._f.onBlur&&B._f.onBlur(k),l&&l(0)):B._f.onChange&&B._f.onChange(k);const Va=G(A,Ze,gr,!1),yg=!an(Va)||Ma;if(!gr&&E.values.next({name:A,type:k.type,values:{...s}}),Rg)return g.isValid&&p(),yg&&E.state.next({name:A,...Ma?{}:Va});if(!gr&&Ma&&E.state.next({...r}),N(!0,[A]),n.resolver){const{errors:gi}=await h([A]);if(z(Ze),$){const Ag=pi(r.errors,t,A),ki=pi(gi,t,Ag.name||A);ue=ki.error,A=ki.name,Fe=an(gi)}}else ue=(await Ai(B,s,b,n.shouldUseNativeValidation))[A],z(Ze),$&&(ue?Fe=!1:g.isValid&&(Fe=await M(t,!0)));$&&(B._f.deps&&W(B._f.deps),O(A,Fe,ue,Va))}},C=(k,f)=>{if(U(r.errors,f)&&k.focus)return k.focus(),1},W=async(k,f={})=>{let A,$;const B=jt(k);if(N(!0,B),n.resolver){const F=await j(he(k)?k:B);A=an(F),$=k?!B.some(z=>U(F,z)):A}else k?($=(await Promise.all(B.map(async F=>{const z=U(t,F);return await M(z&&z._f?{[F]:z}:z)}))).every(Boolean),!(!$&&!r.isValid)&&p()):$=A=await M(t);return E.state.next({...!Sn(k)||g.isValid&&A!==r.isValid?{}:{name:k},...n.resolver||!k?{isValid:A}:{},errors:r.errors,isValidating:!1}),f.shouldFocus&&!$&&lt(t,C,k?B:o.mount),$},te=k=>{const f={...a,...i.mount?s:{}};return he(k)?f:Sn(k)?U(f,k):k.map(A=>U(f,A))},ve=(k,f)=>({invalid:!!U((f||r).errors,k),isDirty:!!U((f||r).dirtyFields,k),isTouched:!!U((f||r).touchedFields,k),isValidating:!!U((f||r).validatingFields,k),error:U((f||r).errors,k)}),_e=k=>{k&&jt(k).forEach(f=>Me(r.errors,f)),E.state.next({errors:k?r.errors:{}})},Oe=(k,f,A)=>{const $=(U(t,k,{_f:{}})._f||{}).ref;Ee(r.errors,k,{...f,ref:$}),E.state.next({name:k,errors:r.errors,isValid:!1}),A&&A.shouldFocus&&$&&$.focus&&$.focus()},Ge=(k,f)=>Cn(k)?E.values.subscribe({next:A=>k(H(void 0,f),A)}):H(k,f,!0),tn=(k,f={})=>{for(const A of k?jt(k):o.mount)o.mount.delete(A),o.array.delete(A),f.keepValue||(Me(t,A),Me(s,A)),!f.keepError&&Me(r.errors,A),!f.keepDirty&&Me(r.dirtyFields,A),!f.keepTouched&&Me(r.touchedFields,A),!f.keepIsValidating&&Me(r.validatingFields,A),!n.shouldUnregister&&!f.keepDefaultValue&&Me(a,A);E.values.next({values:{...s}}),E.state.next({...r,...f.keepDirty?{isDirty:L()}:{}}),!f.keepIsValid&&p()},We=({disabled:k,name:f,field:A,fields:$,value:B})=>{if(vn(k)){const F=k?void 0:he(B)?Ba(A?A._f:U($,f)._f):B;Ee(s,f,F),G(f,F,!1,!1,!0)}},ze=(k,f={})=>{let A=U(t,k);const $=vn(f.disabled);return Ee(t,k,{...A||{},_f:{...A&&A._f?A._f:{ref:{name:k}},name:k,mount:!0,...f}}),o.mount.add(k),A?We({field:A,disabled:f.disabled,name:k,value:f.value}):w(k,!0,f.value),{...$?{disabled:f.disabled}:{},...n.progressive?{required:!!f.required,min:Dr(f.min),max:Dr(f.max),minLength:Dr(f.minLength),maxLength:Dr(f.maxLength),pattern:Dr(f.pattern)}:{},name:k,onChange:P,onBlur:P,ref:B=>{if(B){ze(k,f),A=U(t,k);const F=he(B.value)&&B.querySelectorAll&&B.querySelectorAll("input,select,textarea")[0]||B,z=Xg(F),ue=A._f.refs||[];if(z?ue.find(Fe=>Fe===F):F===A._f.ref)return;Ee(t,k,{_f:{...A._f,...z?{refs:[...ue.filter(wa),F,...Array.isArray(U(a,k))?[{}]:[]],ref:{type:F.type,name:k}}:{ref:F}}}),w(k,!1,void 0,F)}else A=U(t,k,{}),A._f&&(A._f.mount=!1),(n.shouldUnregister||f.shouldUnregister)&&!(Bl(o.array,k)&&i.action)&&o.unMount.add(k)}}},Ye=()=>n.shouldFocusError&&lt(t,C,o.mount),De=k=>{vn(k)&&(E.state.next({disabled:k}),lt(t,(f,A)=>{let $=k;const B=U(t,A);B&&vn(B._f.disabled)&&($||($=B._f.disabled)),f.disabled=$},0,!1))},we=(k,f)=>async A=>{let $;A&&(A.preventDefault&&A.preventDefault(),A.persist&&A.persist());let B=xe(s);if(E.state.next({isSubmitting:!0}),n.resolver){const{errors:F,values:z}=await h();r.errors=F,B=z}else await M(t);if(Me(r.errors,"root"),an(r.errors)){E.state.next({errors:{}});try{await k(B,A)}catch(F){$=F}}else f&&await f({...r.errors},A),Ye(),setTimeout(Ye);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:an(r.errors)&&!$,submitCount:r.submitCount+1,errors:r.errors}),$)throw $},kn=(k,f={})=>{U(t,k)&&(he(f.defaultValue)?V(k,xe(U(a,k))):(V(k,f.defaultValue),Ee(a,k,xe(f.defaultValue))),f.keepTouched||Me(r.touchedFields,k),f.keepDirty||(Me(r.dirtyFields,k),r.isDirty=f.defaultValue?L(k,xe(U(a,k))):L()),f.keepError||(Me(r.errors,k),g.isValid&&p()),E.state.next({...r}))},En=(k,f={})=>{const A=k?xe(k):a,$=xe(A),B=an(k),F=B?a:$;if(f.keepDefaultValues||(a=A),!f.keepValues){if(f.keepDirtyValues)for(const z of o.mount)U(r.dirtyFields,z)?Ee(F,z,U(s,z)):V(z,U(F,z));else{if(_s&&he(k))for(const z of o.mount){const ue=U(t,z);if(ue&&ue._f){const Fe=Array.isArray(ue._f.refs)?ue._f.refs[0]:ue._f.ref;if(Jt(Fe)){const Ze=Fe.closest("form");if(Ze){Ze.reset();break}}}}t={}}s=e.shouldUnregister?f.keepDefaultValues?xe(a):{}:xe(F),E.array.next({values:{...F}}),E.values.next({values:{...F}})}o={mount:f.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!g.isValid||!!f.keepIsValid||!!f.keepDirtyValues,i.watch=!!e.shouldUnregister,E.state.next({submitCount:f.keepSubmitCount?r.submitCount:0,isDirty:B?!1:f.keepDirty?r.isDirty:!!(f.keepDefaultValues&&!er(k,a)),isSubmitted:f.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:B?[]:f.keepDirtyValues?f.keepDefaultValues&&s?Kt(a,s):r.dirtyFields:f.keepDefaultValues&&k?Kt(a,k):{},touchedFields:f.keepTouched?r.touchedFields:{},errors:f.keepErrors?r.errors:{},isSubmitSuccessful:f.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ur=(k,f)=>En(Cn(k)?k(s):k,f);return{control:{register:ze,unregister:tn,getFieldState:ve,handleSubmit:we,setError:Oe,_executeSchema:h,_getWatch:H,_getDirty:L,_updateValid:p,_removeUnmounted:K,_updateFieldArray:R,_updateDisabledField:We,_getFieldArray:c,_reset:En,_resetDefaultValues:()=>Cn(n.defaultValues)&&n.defaultValues().then(k=>{ur(k,n.resetOptions),E.state.next({isLoading:!1})}),_updateFormState:k=>{r={...r,...k}},_disableForm:De,_subjects:E,_proxyFormState:g,_setErrors:Y,get _fields(){return t},get _formValues(){return s},get _state(){return i},set _state(k){i=k},get _defaultValues(){return a},get _names(){return o},set _names(k){o=k},get _formState(){return r},set _formState(k){r=k},get _options(){return n},set _options(k){n={...n,...k}}},trigger:W,register:ze,handleSubmit:we,watch:Ge,setValue:V,getValues:te,reset:ur,resetField:kn,clearErrors:_e,unregister:tn,setError:Oe,setFocus:(k,f={})=>{const A=U(t,k),$=A&&A._f;if($){const B=$.refs?$.refs[0]:$.ref;B.focus&&(B.focus(),f.shouldSelect&&B.select())}},getFieldState:ve}}function Xl(e={}){const n=d.useRef(),r=d.useRef(),[t,a]=d.useState({isDirty:!1,isValidating:!1,isLoading:Cn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Cn(e.defaultValues)?void 0:e.defaultValues});n.current||(n.current={...sk(e),formState:t});const s=n.current.control;return s._options=e,hs({subject:s._subjects.state,next:i=>{Hl(i,s._proxyFormState,s._updateFormState,!0)&&a({...s._formState})}}),d.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),d.useEffect(()=>{if(s._proxyFormState.isDirty){const i=s._getDirty();i!==t.isDirty&&s._subjects.state.next({isDirty:i})}},[s,t.isDirty]),d.useEffect(()=>{e.values&&!er(e.values,r.current)?(s._reset(e.values,s._options.resetOptions),r.current=e.values,a(i=>({...i}))):s._resetDefaultValues()},[e.values,s]),d.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),d.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),d.useEffect(()=>{e.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[e.shouldUnregister,s]),n.current.formState=jl(t,s),n.current}function Ql(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(r=Ql(e[n]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function be(){for(var e,n,r=0,t="",a=arguments.length;r<a;r++)(e=arguments[r])&&(n=Ql(e))&&(t&&(t+=" "),t+=n);return t}const Sr=e=>be({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var ik=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ed=T.forwardRef((e,n)=>{var{className:r,size:t="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:g}=e,E=ik(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return d.createElement(a,Object.assign({},E,{ref:n,className:be(r,"navds-body-long",`navds-body-long--${t}`,Sr({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:g}))}))});var ok=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const lk=T.forwardRef((e,n)=>{var{className:r,size:t="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:g}=e,E=ok(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return d.createElement(a,Object.assign({},E,{ref:n,className:be(r,"navds-body-short",`navds-body-short--${t}`,Sr({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:g}))}))}),ln=lk;var dk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const uk=T.forwardRef((e,n)=>{var{className:r,size:t="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:u,visuallyHidden:g,textColor:E}=e,m=dk(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return d.createElement(i,Object.assign({},m,{ref:n,className:be(r,"navds-detail",Sr({spacing:a,truncate:o,weight:l,align:u,visuallyHidden:g,textColor:E,uppercase:s}),{"navds-detail--small":t==="small"})}))}),zn=uk;var gk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const kk=T.forwardRef((e,n)=>{var{className:r,size:t,spacing:a,as:s="p"}=e,i=gk(e,["className","size","spacing","as"]);return d.createElement(s,Object.assign({},i,{ref:n,className:be("navds-error-message","navds-label",r,Sr({spacing:a}),{"navds-label--small":t==="small"})}))});var Ek=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const vk=T.forwardRef((e,n)=>{var{level:r="1",size:t,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:u}=e,g=Ek(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const E=s??`h${r}`;return d.createElement(E,Object.assign({},g,{ref:n,className:be(a,"navds-heading",`navds-heading--${t}`,Sr({spacing:i,align:o,visuallyHidden:l,textColor:u}))}))}),Is=vk;var mk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};T.forwardRef((e,n)=>{var{className:r,spacing:t,as:a="p"}=e,s=mk(e,["className","spacing","as"]);return d.createElement(a,Object.assign({},s,{ref:n,className:be(r,"navds-ingress",{"navds-typo--spacing":!!t})}))});var fk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Tk=T.forwardRef((e,n)=>{var{className:r,size:t="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=fk(e,["className","size","as","spacing","visuallyHidden","textColor"]);return d.createElement(a,Object.assign({},l,{ref:n,className:be(r,"navds-label",Sr({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":t==="small"})}))}),$e=Tk;function nd(e,n=166){let r;function t(...a){const s=()=>{e.apply(this,a)};clearTimeout(r),r=setTimeout(s,n)}return t.clear=()=>{clearTimeout(r)},t}function Ds(e,n){return Object.entries(e).filter(([r])=>!n.includes(r)).reduce((r,[t,a])=>Object.assign(Object.assign({},r),{[t]:a}),{})}const Za=globalThis!=null&&globalThis.document?T.useLayoutEffect:()=>{};let ci=0;function Rk(e){const[n,r]=T.useState(e),t=e||n;return T.useEffect(()=>{n==null&&(ci+=1,r(`aksel-id-${ci}`))},[n]),t}const bi=d.useId;function ia(e){var n;if(bi!==void 0){const r=bi();return e??r.replace(/(:)/g,"")}return(n=Rk(e))!==null&&n!==void 0?n:""}let _i=0;function yk(e){const[n,r]=T.useState(e),t=e||n;return T.useEffect(()=>{n==null&&(_i+=1,r(`aksel-icon-${_i}`))},[n]),t}const hi=d.useId;function qn(e){var n;if(hi!==void 0){const r=hi();return e??r.replace(/(:)/g,"")}return(n=yk(e))!==null&&n!==void 0?n:""}var Ak=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const pk=T.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Ak(e,["title","titleId"]);let s=qn();return s=r?t||"title-"+s:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?T.createElement("title",{id:s},r):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.14 9.14 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.381 12.381 0 0 0-.957 1.965 9.83 9.83 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675ZM5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796-.132.319-.25.64-.356.962Z",fill:"currentColor"}))}),rd=pk;var ck=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const bk=T.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=ck(e,["title","titleId"]);let s=qn();return s=r?t||"title-"+s:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?T.createElement("title",{id:s},r):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75Zm4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.812.812 0 0 0 1.195-.05l5.959-7.042Z",fill:"currentColor"}))}),td=bk;var _k=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const hk=T.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=_k(e,["title","titleId"]);let s=qn();return s=r?t||"title-"+s:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?T.createElement("title",{id:s},r):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25ZM12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",fill:"currentColor"}))}),Sk=hk;var Nk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Ok=T.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Nk(e,["title","titleId"]);let s=qn();return s=r?t||"title-"+s:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?T.createElement("title",{id:s},r):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V4ZM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75Z",fill:"currentColor"}))}),Ik=Ok;var Dk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Kk=T.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Dk(e,["title","titleId"]);let s=qn();return s=r?t||"title-"+s:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?T.createElement("title",{id:s},r):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25Zm3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25h6.5ZM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13Z",fill:"currentColor"}))}),Lk=Kk;var Pk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Fk=T.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Pk(e,["title","titleId"]);let s=qn();return s=r?t||"title-"+s:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?T.createElement("title",{id:s},r):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.638 4.417a3.252 3.252 0 0 0-4.608-.008l-9.378 9.379a.75.75 0 0 0-.191.324l-1.414 4.95a.75.75 0 0 0 .925.927l4.94-1.398a.75.75 0 0 0 .327-.191l9.39-9.391a3.252 3.252 0 0 0 .01-4.592ZM16.091 5.47a1.752 1.752 0 1 1 2.478 2.478l-.23.23-2.477-2.479.229-.23ZM14.8 6.76 6.85 14.71l-.991 3.47 3.457-.979 7.963-7.963-2.478-2.478Z",fill:"currentColor"}))}),Si=Fk;var Mk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Vk=T.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Mk(e,["title","titleId"]);let s=qn();return s=r?t||"title-"+s:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?T.createElement("title",{id:s},r):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Zm0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.248 2.248 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.241.241 0 0 0-.048-.384A6.749 6.749 0 0 0 12 14.25Zm8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06Z",fill:"currentColor"}))}),Gk=Vk;var wk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Bk=T.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=wk(e,["title","titleId"]);let s=qn();return s=r?t||"title-"+s:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?T.createElement("title",{id:s},r):null,T.createElement("path",{d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94 6.53 5.47Z",fill:"currentColor"}))}),ad=Bk;var Uk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const jk=T.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Uk(e,["title","titleId"]);let s=qn();return s=r?t||"title-"+s:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?T.createElement("title",{id:s},r):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53L7.742 2.47Zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94 9.03 7.97Z",fill:"currentColor"}))}),sd=jk;function dt(e,n,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e==null||e(a),r===!1||!a.defaultPrevented)return n==null?void 0:n(a)}}function Hk(e){return n=>{e.forEach(r=>{typeof r=="function"?r(n):r!=null&&(r.current=n)})}}function Ks(...e){return d.useCallback(Hk(e),e)}var qk=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Yk=T.forwardRef((e,n)=>{var{className:r,size:t="medium",title:a="venter...",transparent:s=!1,variant:i="neutral",id:o}=e,l=qk(e,["className","size","title","transparent","variant","id"]);const u=ia();return d.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${u}`,ref:n,className:be("navds-loader",r,`navds-loader--${t}`,`navds-loader--${i}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},Ds(l,["children"])),d.createElement("title",{id:o??`loader-${u}`},a),d.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),d.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))}),xk=Yk;var Ck=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const $k=T.forwardRef((e,n)=>{var{as:r="button",variant:t="primary",className:a,children:s,size:i="medium",loading:o=!1,disabled:l,style:u,icon:g,iconPosition:E="left"}=e,m=Ck(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const y=T.useRef(null),[b,v]=T.useState(),p=Ks(y,n);Za(()=>{if(o){const D=window.requestAnimationFrame(()=>{var Y,w;v((w=(Y=y==null?void 0:y.current)===null||Y===void 0?void 0:Y.getBoundingClientRect())===null||w===void 0?void 0:w.width)});return()=>{v(void 0),cancelAnimationFrame(D)}}},[o,s]);const N=l??b?Ds(m,["href"]):m,R=D=>{D.key===" "&&!l&&!b&&D.currentTarget.click()};return d.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},N,{ref:p,onKeyUp:dt(N.onKeyUp,R),className:be(a,"navds-button",`navds-button--${t}`,`navds-button--${i}`,{"navds-button--loading":b,"navds-button--icon-only":!!g&&!s,"navds-button--disabled":l??b}),style:Object.assign(Object.assign({},u),{width:b}),disabled:l??b?!0:void 0}),b?d.createElement(xk,{size:i}):d.createElement(d.Fragment,null,g&&E==="left"&&d.createElement("span",{className:"navds-button__icon"},g),s&&d.createElement($e,{as:"span",size:i==="medium"?"medium":"small"},s),g&&E==="right"&&d.createElement("span",{className:"navds-button__icon"},g)))}),cr=$k;var id=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Jk=e=>{var{variant:n}=e,r=id(e,["variant"]);switch(n){case"error":return d.createElement(sd,Object.assign({title:"Feil"},r));case"warning":return d.createElement(Sk,Object.assign({title:"Advarsel"},r));case"info":return d.createElement(Ik,Object.assign({title:"Informasjon"},r));case"success":return d.createElement(td,Object.assign({title:"Suksess"},r));default:return null}},Wk=T.forwardRef((e,n)=>{var{children:r,className:t,variant:a,size:s="medium",fullWidth:i=!1,inline:o=!1,closeButton:l=!1,onClose:u}=e,g=id(e,["children","className","variant","size","fullWidth","inline","closeButton","onClose"]);return d.createElement("div",Object.assign({},g,{ref:n,className:be(t,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":i,"navds-alert--inline":o,"navds-alert--close-button":l})}),d.createElement(Jk,{variant:a,className:"navds-alert__icon"}),d.createElement(ed,{as:"div",size:s,className:"navds-alert__wrapper"},r),l&&!o&&d.createElement("div",{className:"navds-alert__button-wrapper"},d.createElement(cr,{className:"navds-alert__button",size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:d.createElement(ad,{title:"Lukk Alert"})})))}),od=Wk;var ut=function(){return ut=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},ut.apply(this,arguments)};var ld={exports:{}},Kr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni;function zk(){if(Ni)return Kr;Ni=1;var e=d,n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var g,E={},m=null,y=null;u!==void 0&&(m=""+u),l.key!==void 0&&(m=""+l.key),l.ref!==void 0&&(y=l.ref);for(g in l)t.call(l,g)&&!s.hasOwnProperty(g)&&(E[g]=l[g]);if(o&&o.defaultProps)for(g in l=o.defaultProps,l)E[g]===void 0&&(E[g]=l[g]);return{$$typeof:n,type:o,key:m,ref:y,props:E,_owner:a.current}}return Kr.Fragment=r,Kr.jsx=i,Kr.jsxs=i,Kr}ld.exports=zk();var Zk=ld.exports,Xk=T.createContext(void 0);function Qk(){var e=T.useContext(Xk);if(!e)throw new Error("useDayPicker must be used within a DayPickerProvider.");return e}T.createContext(void 0);T.forwardRef(function(e,n){var r=Qk(),t=r.classNames,a=r.styles,s=[t.button_reset,t.button];e.className&&s.push(e.className);var i=s.join(" "),o=ut(ut({},a.button_reset),a.button);return e.style&&Object.assign(o,e.style),Zk.jsx("button",ut({},e,{ref:n,type:"button",className:i,style:o}))});T.createContext(void 0);T.createContext(void 0);var Nn;(function(e){e.Outside="outside",e.Disabled="disabled",e.Selected="selected",e.Hidden="hidden",e.Today="today",e.RangeStart="range_start",e.RangeEnd="range_end",e.RangeMiddle="range_middle"})(Nn||(Nn={}));Nn.Selected;Nn.Disabled;Nn.Hidden;Nn.Today;Nn.RangeEnd;Nn.RangeMiddle;Nn.RangeStart;Nn.Outside;T.createContext(void 0);T.createContext(void 0);T.createContext(void 0);const eE=T.createContext(null);T.createContext({hasDropdown:!1,year:new Date,toYear:()=>null,disabled:[],onSelect:()=>null});const nE=({readOnly:e,nativeReadOnly:n=!0})=>e?d.createElement(Lk,Object.assign({},n?{"aria-hidden":!0}:{title:"readonly"},{className:"navds-form-field__readonly-icon"})):null,rE=T.createContext(null),tE=(e,n)=>{var r,t,a;const{size:s,error:i,errorId:o}=e,l=T.useContext(rE),u=ia(),g=(r=e.id)!==null&&r!==void 0?r:`${n}-${u}`,E=o??`${n}-error-${u}`,m=`${n}-description-${u}`,y=(l==null?void 0:l.disabled)||e.disabled,b=((l==null?void 0:l.readOnly)||e.readOnly)&&!y||void 0,v=!y&&!b&&!!(i||l!=null&&l.error),p=!y&&!b&&!!i&&typeof i!="boolean",N=Object.assign({},v?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:p,hasError:v,errorId:E,inputDescriptionId:m,size:(t=s??(l==null?void 0:l.size))!==null&&t!==void 0?t:"medium",readOnly:b,inputProps:Object.assign(Object.assign({id:g},N),{"aria-describedby":be(e["aria-describedby"],{[m]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[E]:p,[(a=l==null?void 0:l.errorId)!==null&&a!==void 0?a:""]:v&&!!(l!=null&&l.error)})||void 0,disabled:y})}};function aE(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function sE(e){return e instanceof Element||e instanceof aE(e).Element}var Xa=typeof document<"u"?T.useLayoutEffect:T.useEffect;let Ua=!1,iE=0;const Oi=()=>"floating-ui-"+iE++;function oE(){const[e,n]=T.useState(()=>Ua?Oi():void 0);return Xa(()=>{e==null&&n(Oi())},[]),T.useEffect(()=>{Ua||(Ua=!0)},[]),e}const lE=pg.useId,dE=lE||oE;function uE(e){return"data-floating-ui-"+e}const gE=T.createContext(null);function kE(e){let{id:n,root:r}=e===void 0?{}:e;const[t,a]=T.useState(null),s=dE(),i=EE(),o=T.useMemo(()=>({id:n,root:r,portalContext:i,uniqueId:s}),[n,r,i,s]),l=T.useRef();return Xa(()=>()=>{t==null||t.remove()},[t,o]),Xa(()=>{if(l.current===o)return;l.current=o;const{id:u,root:g,portalContext:E,uniqueId:m}=o,y=u?document.getElementById(u):null,b=uE("portal");if(y){const v=document.createElement("div");v.id=m,v.setAttribute(b,""),y.appendChild(v),a(v)}else{let v=g||(E==null?void 0:E.portalNode);v&&!sE(v)&&(v=v.current),v=v||document.body;let p=null;u&&(p=document.createElement("div"),p.id=u,v.appendChild(p));const N=document.createElement("div");N.id=m,N.setAttribute(b,""),v=p||v,v.appendChild(N),a(N)}},[o]),t}const EE=()=>T.useContext(gE),vE=T.createContext(void 0),mE=()=>T.useContext(vE);var fE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};function TE(e,n){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${n}`}function RE(e={}){const{name:n,hookName:r="useContext",providerName:t="Provider",errorMessage:a,defaultValue:s}=e,i=T.createContext(s),o=T.forwardRef((u,g)=>{var{children:E}=u,m=fE(u,["children"]);const y=d.useMemo(()=>m,Object.values(m));return d.createElement(i.Provider,{value:g?Object.assign(Object.assign({},y),{ref:g}):y},E)});function l(u=!0){var g;const E=T.useContext(i);if(!E&&u){const m=new Error(a??TE(r,t));throw m.name="ContextError",(g=Error.captureStackTrace)===null||g===void 0||g.call(Error,m,l),m}return E}return i.displayName=n,[o,l]}const[yE,dd]=RE({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});var AE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const pE=T.forwardRef((e,n)=>{var{className:r}=e,t=AE(e,["className"]);return d.createElement("div",Object.assign({},t,{ref:n,className:be("navds-modal__body",r)}))});var cE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const bE=T.forwardRef((e,n)=>{var{className:r}=e,t=cE(e,["className"]);return d.createElement("div",Object.assign({},t,{ref:n,className:be("navds-modal__footer",r)}))});var _E=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ud=T.forwardRef((e,n)=>{var{children:r,className:t,closeButton:a=!0}=e,s=_E(e,["children","className","closeButton"]);const i=dd();return d.createElement("div",Object.assign({},s,{ref:n,className:be("navds-modal__header",t)}),i.closeHandler&&a&&d.createElement(cr,{type:"button",className:"navds-modal__button",size:"small",variant:"tertiary-neutral",onClick:i.closeHandler,icon:d.createElement(ad,{title:"Lukk"})}),r)}),Ii=({clientX:e,clientY:n},{left:r,top:t,right:a,bottom:s})=>!(e<r||n<t||e>a||n>s);function hE(e,n,r){if(!(n&&n.closeButton===!1))return r?()=>{var t;return r()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const Lt="navds-modal__document-body";function SE(e,n,r){d.useEffect(()=>{if(r||!e.current||!n)return;e.current.open&&document.body.classList.add(Lt);const t=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(Lt):document.body.classList.remove(Lt)});return t.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{t.disconnect(),document.body.classList.remove(Lt)}},[e,n,r])}const gt=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function gd(e,n){var r="on"+n.type.toLowerCase();return typeof e[r]=="function"&&e[r](n),e.dispatchEvent(n)}function kt(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function kd(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function NE(e,n){for(var r=0;r<e.length;++r)if(e[r]===n)return!0;return!1}function ja(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Ed(e){var n=["button","input","keygen","select","textarea"],r=n.map(function(i){return i+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(r.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),s=0;s<a.length&&!(a[s].tagName&&a[s].shadowRoot&&(t=Ed(a[s].shadowRoot),t));s++);return t}function Di(e){return e.isConnected||document.body.contains(e)}function vd(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var r=oe.formSubmitter;if(!r){var t=e.target,a="getRootNode"in t&&t.getRootNode()||document;r=a.activeElement}return!r||r.form!==n?null:r}function OE(e){if(!e.defaultPrevented){var n=e.target,r=oe.imagemapUseValue,t=vd(e);r===null&&t&&(r=t.value);var a=kt(n);if(a){var s=t&&t.getAttribute("formmethod")||n.getAttribute("method");s==="dialog"&&(e.preventDefault(),r!=null?a.close(r):a.close())}}}function md(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",OE,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,t=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),a,s=function(i){if(i.target===e){var o="DOMNodeRemoved";r|=i.type.substr(0,o.length)===o,window.clearTimeout(a),a=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,s)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}md.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Di(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),oe.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Ed(this.dialog_)),kd(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Di(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!oe.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,oe.needsCentering(this.dialog_)?(oe.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});gd(this.dialog_,n)}};var oe={};oe.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,r=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,r)+"px"};oe.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var r=document.styleSheets[n],t=null;try{t=r.cssRules}catch{}if(t)for(var a=0;a<t.length;++a){var s=t[a],i=null;try{i=document.querySelectorAll(s.selectorText)}catch{}if(!(!i||!NE(i,e))){var o=s.style.getPropertyValue("top"),l=s.style.getPropertyValue("bottom");if(o&&o!=="auto"||l&&l!=="auto")return!0}}}return!1};oe.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!oe.isInlinePositionSetByStylesheet(e)};oe.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new md(e)};oe.registerDialog=function(e){e.showModal||oe.forceRegisterDialog(e)};oe.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var r=[];n.forEach(function(t){for(var a=0,s;s=t.removedNodes[a];++a){if(s instanceof Element)s.localName==="dialog"&&r.push(s);else continue;r=r.concat(s.querySelectorAll("dialog"))}}),r.length&&e(r)}))};oe.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};oe.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};oe.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,r;r=this.pendingDialogStack[n];++n)r.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var a=t.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};oe.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=kt(e);){for(var n=0,r;r=this.pendingDialogStack[n];++n)if(r.dialog===e)return n===0;e=e.parentElement}return!1};oe.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),kd(n),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],t=r.dialog,a=t.compareDocumentPosition(n);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};oe.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&gd(r.dialog,n)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};oe.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};oe.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};oe.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};gt&&(oe.dm=new oe.DialogManager,oe.formSubmitter=null,oe.imagemapUseValue=null);if(gt){var Ki=document.createElement("form");if(Ki.setAttribute("method","dialog"),Ki.method!=="dialog"){var Er=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(Er){var IE=Er.get;Er.get=function(){return ja(this)?"dialog":IE.call(this)};var DE=Er.set;Er.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):DE.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",Er)}}document.addEventListener("click",function(e){if(oe.formSubmitter=null,oe.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var r=e.composedPath();n=r.shift()||n}if(!(!n||!ja(n.form))){var t=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!t){if(!(n.localName==="input"&&n.type==="image"))return;oe.imagemapUseValue=e.offsetX+","+e.offsetY}var a=kt(n);a&&(oe.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,r=kt(n);if(!r){var t=vd(e),a=t&&t.getAttribute("formmethod")||n.getAttribute("method");a==="dialog"&&e.preventDefault()}});var KE=HTMLFormElement.prototype.submit,LE=function(){if(!ja(this))return KE.call(this);var e=kt(this);e&&e.close()};HTMLFormElement.prototype.submit=LE}var PE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const oa=T.forwardRef((e,n)=>{var r,t,{header:a,children:s,open:i,onBeforeClose:o,onCancel:l,closeOnBackdropClick:u,width:g,portal:E,className:m,"aria-labelledby":y,style:b,onClick:v,onMouseDown:p}=e,N=PE(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const R=T.useRef(null),D=Ks(R,n),Y=ia(),w=(r=mE())===null||r===void 0?void 0:r.rootElement,G=kE({root:w}),O=T.useContext(eE),h=dd(!1)!==void 0;h&&!O&&console.error("Modals should not be nested"),T.useEffect(()=>{gt&&R.current&&G&&oe.registerDialog(R.current),R.current&&G&&(R.current.autofocus=!0)},[R,G]),T.useEffect(()=>{R.current&&G&&i!==void 0&&(i&&!R.current.open?R.current.showModal():!i&&R.current.open&&R.current.close())},[R,G,i]),SE(R,G,h);const j=typeof g=="string"&&["small","medium"].includes(g),M=be("navds-modal",m,{"navds-modal--polyfilled":gt,"navds-modal--autowidth":!g,[`navds-modal--${g}`]:j}),K=Object.assign(Object.assign({},b),j?{}:{width:g}),L=T.useRef({clientX:0,clientY:0}),H=C=>{L.current=C},c=u&&!gt,_=C=>{if(C.target!==R.current)return;const W=R.current.getBoundingClientRect();Ii(L.current,W)||Ii(C,W)||o!==void 0&&o()===!1||R.current.close()},S=C=>{o&&o()===!1&&C.preventDefault()},V=!y&&!N["aria-label"]&&a?Y:y,P=d.createElement("dialog",Object.assign({},N,{ref:D,className:M,style:K,onCancel:dt(l,S),onClick:c?dt(v,_):v,onMouseDown:c?dt(p,H):p,"aria-labelledby":V}),d.createElement(yE,{closeHandler:hE(R,a,o),ref:R},a&&d.createElement(ud,null,a.label&&d.createElement(zn,{className:"navds-modal__label"},a.label),d.createElement(Is,{size:(t=a.size)!==null&&t!==void 0?t:"medium",level:"1",id:Y},d.createElement("span",{className:"navds-modal__header-icon"},a.icon),a.heading)),s));return E?G?hg.createPortal(P,G):null:P});oa.Header=ud;oa.Body=pE;oa.Footer=bE;const Ha=oa;var FE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ME=T.forwardRef((e,n)=>{var{as:r="a",className:t,underline:a=!0,variant:s="action",inlineText:i=!1}=e,o=FE(e,["as","className","underline","variant","inlineText"]);return d.createElement(r,Object.assign({},o,{ref:n,className:be("navds-link",t,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":i})}))}),Qa=ME;var VE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const GE=T.forwardRef((e,n)=>{var{children:r,className:t,variant:a,size:s="medium",icon:i}=e,o=VE(e,["children","className","variant","size","icon"]);return d.createElement(ln,Object.assign({},o,{ref:n,as:"span",size:s==="medium"?"medium":"small",className:be("navds-tag",t,`navds-tag--${a}`,`navds-tag--${s}`)}),i&&d.createElement("span",{className:"navds-tag__icon--left"},i),r)}),wE=GE;var BE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Li=(e,n,r)=>{const{outerHeightStyle:t,overflow:a}=n;return r.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==a)?(r.current+=1,n):e},Pi=e=>(e&&e.ownerDocument||document).defaultView||window;function Pt(e){return parseInt(e,10)||0}const UE=T.forwardRef((e,n)=>{var r,t,{className:a,onChange:s,maxRows:i,minRows:o=1,autoScrollbar:l,style:u,value:g}=e,E=BE(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:m}=T.useRef(g!=null),y=T.useRef(null),b=Ks(y,n),v=T.useRef(null),p=T.useRef(0),[N,R]=T.useState({outerHeightStyle:0}),D=d.useCallback(()=>{const O=y.current,j=Pi(O).getComputedStyle(O);if(j.width==="0px")return{outerHeightStyle:0};const M=v.current;M.style.width=j.width,M.value=O.value||E.placeholder||"x",M.value.slice(-1)===`
`&&(M.value+=" ");const K=j.boxSizing,L=Pt(j.paddingBottom)+Pt(j.paddingTop),H=Pt(j.borderBottomWidth)+Pt(j.borderTopWidth),c=M.scrollHeight-L;M.value="x";const _=M.scrollHeight-L;let S=c;o&&(S=Math.max(Number(o)*_,S)),i&&(S=Math.min(Number(i)*_,S)),S=Math.max(S,_);const V=S+(K==="border-box"?L+H:0),P=Math.abs(S-c)<=1;return{outerHeightStyle:V,overflow:P}},[i,o,E.placeholder]),Y=()=>{const O=D();Fi(O)||R(h=>Li(h,O,p))};Za(()=>{const O=()=>{const L=D();Fi(L)||Sg.flushSync(()=>{R(H=>Li(H,L,p))})},h=nd(()=>{var L,H,c;if(p.current=0,!((L=y.current)===null||L===void 0)&&L.style.height||!((H=y.current)===null||H===void 0)&&H.style.width){((c=y.current)===null||c===void 0?void 0:c.style.overflow)==="hidden"&&R(_=>Object.assign(Object.assign({},_),{overflow:!1}));return}O()}),j=y.current,M=Pi(j);M.addEventListener("resize",h);let K;return typeof ResizeObserver<"u"&&(K=new ResizeObserver(h),K.observe(j)),()=>{h.clear(),M.removeEventListener("resize",h),K&&K.disconnect()}},[D]),Za(()=>{Y()}),T.useEffect(()=>{p.current=0},[g]);const w=O=>{p.current=0,m||Y(),s&&s(O)},G=Object.assign({"--__ac-textarea-height":N.outerHeightStyle+"px",overflow:N.overflow&&!l&&!(!((r=y.current)===null||r===void 0)&&r.style.height)&&!(!((t=y.current)===null||t===void 0)&&t.style.width)?"hidden":void 0},u);return d.createElement(d.Fragment,null,d.createElement("textarea",Object.assign({value:g,onChange:w,ref:b,rows:o,style:G},E,{className:a})),d.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:v,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},u)}))});function Fi(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const jE=({maxLength:e,currentLength:n,size:r,i18n:t})=>{const a=e-n,[s,i]=T.useState(a);return T.useEffect(()=>{const o=nd(()=>{i(a)},2e3);return o(),()=>{o.clear()}},[a]),d.createElement(d.Fragment,null,a<20&&d.createElement("span",{role:"status",className:"navds-textarea__sr-counter navds-sr-only"},Mi(s,t)),d.createElement(ln,{className:be("navds-textarea__counter",{"navds-textarea__counter--error":a<0}),size:r},Mi(a,t)))},Mi=(e,n)=>{var r,t;return e<0?`${Math.abs(e)} ${(r=n==null?void 0:n.counterTooMuch)!==null&&r!==void 0?r:"tegn for mye"}`:`${e} ${(t=n==null?void 0:n.counterLeft)!==null&&t!==void 0?t:"tegn igjen"}`};var HE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const qE=T.forwardRef((e,n)=>{var r,t,a;const{inputProps:s,errorId:i,showErrorMsg:o,hasError:l,size:u,inputDescriptionId:g}=tE(e,"textarea"),{label:E,className:m,description:y,maxLength:b,hideLabel:v=!1,resize:p,UNSAFE_autoScrollbar:N,i18n:R,readOnly:D}=e,Y=HE(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),w=ia(),G=b!==void 0&&b>0,[O,h]=T.useState((r=e==null?void 0:e.defaultValue)!==null&&r!==void 0?r:""),j=()=>{let K=Y!=null&&Y.minRows?Y==null?void 0:Y.minRows:3;return u==="small"&&(K=Y!=null&&Y.minRows?Y==null?void 0:Y.minRows:2),K},M=be(s["aria-describedby"],{[w??""]:G});return d.createElement("div",{className:be(m,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":D,"navds-textarea--readonly":D,"navds-textarea--error":l,"navds-textarea--autoscrollbar":N,[`navds-textarea--resize-${p===!0?"both":p}`]:p})},d.createElement($e,{htmlFor:s.id,size:u,className:be("navds-form-field__label",{"navds-sr-only":v})},d.createElement(nE,{readOnly:D}),E),!!y&&d.createElement(ln,{className:be("navds-form-field__description",{"navds-sr-only":v}),id:g,size:u,as:"div"},y),d.createElement(UE,Object.assign({},Ds(Y,["error","errorId","size"]),s,{onChange:dt(e.onChange,e.value===void 0?K=>h(K.target.value):void 0),minRows:j(),autoScrollbar:N,ref:n,readOnly:D,className:be("navds-textarea__input","navds-body-short",`navds-body-short--${u??"medium"}`)},M?{"aria-describedby":M}:{})),G&&!D&&!s.disabled&&d.createElement(d.Fragment,null,d.createElement("span",{id:w,className:"navds-sr-only"},`Tekstområde med plass til ${b} tegn.`),d.createElement(jE,{maxLength:b,currentLength:(a=(t=e.value)===null||t===void 0?void 0:t.length)!==null&&a!==void 0?a:O.length,size:u,i18n:R})),d.createElement("div",{className:"navds-form-field__error",id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&d.createElement(kk,{size:u},e.error)))}),YE=qE;var fd={exports:{}};(function(e,n){(function(r,t){e.exports=t()})(cg,function(){var r=1e3,t=6e4,a=36e5,s="millisecond",i="second",o="minute",l="hour",u="day",g="week",E="month",m="quarter",y="year",b="date",v="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,N=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,R={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(c){var _=["th","st","nd","rd"],S=c%100;return"["+c+(_[(S-20)%10]||_[S]||_[0])+"]"}},D=function(c,_,S){var V=String(c);return!V||V.length>=_?c:""+Array(_+1-V.length).join(S)+c},Y={s:D,z:function(c){var _=-c.utcOffset(),S=Math.abs(_),V=Math.floor(S/60),P=S%60;return(_<=0?"+":"-")+D(V,2,"0")+":"+D(P,2,"0")},m:function c(_,S){if(_.date()<S.date())return-c(S,_);var V=12*(S.year()-_.year())+(S.month()-_.month()),P=_.clone().add(V,E),C=S-P<0,W=_.clone().add(V+(C?-1:1),E);return+(-(V+(S-P)/(C?P-W:W-P))||0)},a:function(c){return c<0?Math.ceil(c)||0:Math.floor(c)},p:function(c){return{M:E,y,w:g,d:u,D:b,h:l,m:o,s:i,ms:s,Q:m}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(c){return c===void 0}},w="en",G={};G[w]=R;var O="$isDayjsObject",h=function(c){return c instanceof L||!(!c||!c[O])},j=function c(_,S,V){var P;if(!_)return w;if(typeof _=="string"){var C=_.toLowerCase();G[C]&&(P=C),S&&(G[C]=S,P=C);var W=_.split("-");if(!P&&W.length>1)return c(W[0])}else{var te=_.name;G[te]=_,P=te}return!V&&P&&(w=P),P||!V&&w},M=function(c,_){if(h(c))return c.clone();var S=typeof _=="object"?_:{};return S.date=c,S.args=arguments,new L(S)},K=Y;K.l=j,K.i=h,K.w=function(c,_){return M(c,{locale:_.$L,utc:_.$u,x:_.$x,$offset:_.$offset})};var L=function(){function c(S){this.$L=j(S.locale,null,!0),this.parse(S),this.$x=this.$x||S.x||{},this[O]=!0}var _=c.prototype;return _.parse=function(S){this.$d=function(V){var P=V.date,C=V.utc;if(P===null)return new Date(NaN);if(K.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var W=P.match(p);if(W){var te=W[2]-1||0,ve=(W[7]||"0").substring(0,3);return C?new Date(Date.UTC(W[1],te,W[3]||1,W[4]||0,W[5]||0,W[6]||0,ve)):new Date(W[1],te,W[3]||1,W[4]||0,W[5]||0,W[6]||0,ve)}}return new Date(P)}(S),this.init()},_.init=function(){var S=this.$d;this.$y=S.getFullYear(),this.$M=S.getMonth(),this.$D=S.getDate(),this.$W=S.getDay(),this.$H=S.getHours(),this.$m=S.getMinutes(),this.$s=S.getSeconds(),this.$ms=S.getMilliseconds()},_.$utils=function(){return K},_.isValid=function(){return this.$d.toString()!==v},_.isSame=function(S,V){var P=M(S);return this.startOf(V)<=P&&P<=this.endOf(V)},_.isAfter=function(S,V){return M(S)<this.startOf(V)},_.isBefore=function(S,V){return this.endOf(V)<M(S)},_.$g=function(S,V,P){return K.u(S)?this[V]:this.set(P,S)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(S,V){var P=this,C=!!K.u(V)||V,W=K.p(S),te=function(Ye,De){var we=K.w(P.$u?Date.UTC(P.$y,De,Ye):new Date(P.$y,De,Ye),P);return C?we:we.endOf(u)},ve=function(Ye,De){return K.w(P.toDate()[Ye].apply(P.toDate("s"),(C?[0,0,0,0]:[23,59,59,999]).slice(De)),P)},_e=this.$W,Oe=this.$M,Ge=this.$D,tn="set"+(this.$u?"UTC":"");switch(W){case y:return C?te(1,0):te(31,11);case E:return C?te(1,Oe):te(0,Oe+1);case g:var We=this.$locale().weekStart||0,ze=(_e<We?_e+7:_e)-We;return te(C?Ge-ze:Ge+(6-ze),Oe);case u:case b:return ve(tn+"Hours",0);case l:return ve(tn+"Minutes",1);case o:return ve(tn+"Seconds",2);case i:return ve(tn+"Milliseconds",3);default:return this.clone()}},_.endOf=function(S){return this.startOf(S,!1)},_.$set=function(S,V){var P,C=K.p(S),W="set"+(this.$u?"UTC":""),te=(P={},P[u]=W+"Date",P[b]=W+"Date",P[E]=W+"Month",P[y]=W+"FullYear",P[l]=W+"Hours",P[o]=W+"Minutes",P[i]=W+"Seconds",P[s]=W+"Milliseconds",P)[C],ve=C===u?this.$D+(V-this.$W):V;if(C===E||C===y){var _e=this.clone().set(b,1);_e.$d[te](ve),_e.init(),this.$d=_e.set(b,Math.min(this.$D,_e.daysInMonth())).$d}else te&&this.$d[te](ve);return this.init(),this},_.set=function(S,V){return this.clone().$set(S,V)},_.get=function(S){return this[K.p(S)]()},_.add=function(S,V){var P,C=this;S=Number(S);var W=K.p(V),te=function(Oe){var Ge=M(C);return K.w(Ge.date(Ge.date()+Math.round(Oe*S)),C)};if(W===E)return this.set(E,this.$M+S);if(W===y)return this.set(y,this.$y+S);if(W===u)return te(1);if(W===g)return te(7);var ve=(P={},P[o]=t,P[l]=a,P[i]=r,P)[W]||1,_e=this.$d.getTime()+S*ve;return K.w(_e,this)},_.subtract=function(S,V){return this.add(-1*S,V)},_.format=function(S){var V=this,P=this.$locale();if(!this.isValid())return P.invalidDate||v;var C=S||"YYYY-MM-DDTHH:mm:ssZ",W=K.z(this),te=this.$H,ve=this.$m,_e=this.$M,Oe=P.weekdays,Ge=P.months,tn=P.meridiem,We=function(De,we,kn,En){return De&&(De[we]||De(V,C))||kn[we].slice(0,En)},ze=function(De){return K.s(te%12||12,De,"0")},Ye=tn||function(De,we,kn){var En=De<12?"AM":"PM";return kn?En.toLowerCase():En};return C.replace(N,function(De,we){return we||function(kn){switch(kn){case"YY":return String(V.$y).slice(-2);case"YYYY":return K.s(V.$y,4,"0");case"M":return _e+1;case"MM":return K.s(_e+1,2,"0");case"MMM":return We(P.monthsShort,_e,Ge,3);case"MMMM":return We(Ge,_e);case"D":return V.$D;case"DD":return K.s(V.$D,2,"0");case"d":return String(V.$W);case"dd":return We(P.weekdaysMin,V.$W,Oe,2);case"ddd":return We(P.weekdaysShort,V.$W,Oe,3);case"dddd":return Oe[V.$W];case"H":return String(te);case"HH":return K.s(te,2,"0");case"h":return ze(1);case"hh":return ze(2);case"a":return Ye(te,ve,!0);case"A":return Ye(te,ve,!1);case"m":return String(ve);case"mm":return K.s(ve,2,"0");case"s":return String(V.$s);case"ss":return K.s(V.$s,2,"0");case"SSS":return K.s(V.$ms,3,"0");case"Z":return W}return null}(De)||W.replace(":","")})},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(S,V,P){var C,W=this,te=K.p(V),ve=M(S),_e=(ve.utcOffset()-this.utcOffset())*t,Oe=this-ve,Ge=function(){return K.m(W,ve)};switch(te){case y:C=Ge()/12;break;case E:C=Ge();break;case m:C=Ge()/3;break;case g:C=(Oe-_e)/6048e5;break;case u:C=(Oe-_e)/864e5;break;case l:C=Oe/a;break;case o:C=Oe/t;break;case i:C=Oe/r;break;default:C=Oe}return P?C:K.a(C)},_.daysInMonth=function(){return this.endOf(E).$D},_.$locale=function(){return G[this.$L]},_.locale=function(S,V){if(!S)return this.$L;var P=this.clone(),C=j(S,V,!0);return C&&(P.$L=C),P},_.clone=function(){return K.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},c}(),H=L.prototype;return M.prototype=H,[["$ms",s],["$s",i],["$m",o],["$H",l],["$W",u],["$M",E],["$y",y],["$D",b]].forEach(function(c){H[c[1]]=function(_){return this.$g(_,c[0],c[1])}}),M.extend=function(c,_){return c.$i||(c(_,L,M),c.$i=!0),M},M.locale=j,M.isDayjs=h,M.unix=function(c){return M(1e3*c)},M.en=G[w],M.Ls=G,M.p={},M})})(fd);var xE=fd.exports;const pt=bg(xE);var es=function(e,n){return es=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])},es(e,n)};function yn(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");es(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}var J=function(){return J=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},J.apply(this,arguments)};function br(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r}function _n(e,n,r){if(r||arguments.length===2)for(var t=0,a=n.length,s;t<a;t++)(s||!(t in n))&&(s||(s=Array.prototype.slice.call(n,0,t)),s[t]=n[t]);return e.concat(s||Array.prototype.slice.call(n))}var Td={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve=typeof Symbol=="function"&&Symbol.for,Ls=Ve?Symbol.for("react.element"):60103,Ps=Ve?Symbol.for("react.portal"):60106,la=Ve?Symbol.for("react.fragment"):60107,da=Ve?Symbol.for("react.strict_mode"):60108,ua=Ve?Symbol.for("react.profiler"):60114,ga=Ve?Symbol.for("react.provider"):60109,ka=Ve?Symbol.for("react.context"):60110,Fs=Ve?Symbol.for("react.async_mode"):60111,Ea=Ve?Symbol.for("react.concurrent_mode"):60111,va=Ve?Symbol.for("react.forward_ref"):60112,ma=Ve?Symbol.for("react.suspense"):60113,CE=Ve?Symbol.for("react.suspense_list"):60120,fa=Ve?Symbol.for("react.memo"):60115,Ta=Ve?Symbol.for("react.lazy"):60116,$E=Ve?Symbol.for("react.block"):60121,JE=Ve?Symbol.for("react.fundamental"):60117,WE=Ve?Symbol.for("react.responder"):60118,zE=Ve?Symbol.for("react.scope"):60119;function en(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case Ls:switch(e=e.type,e){case Fs:case Ea:case la:case ua:case da:case ma:return e;default:switch(e=e&&e.$$typeof,e){case ka:case va:case Ta:case fa:case ga:return e;default:return n}}case Ps:return n}}}function Rd(e){return en(e)===Ea}ge.AsyncMode=Fs;ge.ConcurrentMode=Ea;ge.ContextConsumer=ka;ge.ContextProvider=ga;ge.Element=Ls;ge.ForwardRef=va;ge.Fragment=la;ge.Lazy=Ta;ge.Memo=fa;ge.Portal=Ps;ge.Profiler=ua;ge.StrictMode=da;ge.Suspense=ma;ge.isAsyncMode=function(e){return Rd(e)||en(e)===Fs};ge.isConcurrentMode=Rd;ge.isContextConsumer=function(e){return en(e)===ka};ge.isContextProvider=function(e){return en(e)===ga};ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ls};ge.isForwardRef=function(e){return en(e)===va};ge.isFragment=function(e){return en(e)===la};ge.isLazy=function(e){return en(e)===Ta};ge.isMemo=function(e){return en(e)===fa};ge.isPortal=function(e){return en(e)===Ps};ge.isProfiler=function(e){return en(e)===ua};ge.isStrictMode=function(e){return en(e)===da};ge.isSuspense=function(e){return en(e)===ma};ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===la||e===Ea||e===ua||e===da||e===ma||e===CE||typeof e=="object"&&e!==null&&(e.$$typeof===Ta||e.$$typeof===fa||e.$$typeof===ga||e.$$typeof===ka||e.$$typeof===va||e.$$typeof===JE||e.$$typeof===WE||e.$$typeof===zE||e.$$typeof===$E)};ge.typeOf=en;Td.exports=ge;var ZE=Td.exports,yd=ZE,XE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},QE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ad={};Ad[yd.ForwardRef]=XE;Ad[yd.Memo]=QE;function pd(e,n,r){if(r===void 0&&(r=Error),!e)throw new r(n)}var re;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(re||(re={}));var fe;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(fe||(fe={}));var _r;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(_r||(_r={}));function Vi(e){return e.type===fe.literal}function ev(e){return e.type===fe.argument}function cd(e){return e.type===fe.number}function bd(e){return e.type===fe.date}function _d(e){return e.type===fe.time}function hd(e){return e.type===fe.select}function Sd(e){return e.type===fe.plural}function nv(e){return e.type===fe.pound}function Nd(e){return e.type===fe.tag}function Od(e){return!!(e&&typeof e=="object"&&e.type===_r.number)}function ns(e){return!!(e&&typeof e=="object"&&e.type===_r.dateTime)}var Id=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,rv=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function tv(e){var n={};return e.replace(rv,function(r){var t=r.length;switch(r[0]){case"G":n.era=t===4?"long":t===5?"narrow":"short";break;case"y":n.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":n.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":n.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":n.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][t-4];break;case"a":n.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":n.hourCycle="h12",n.hour=["numeric","2-digit"][t-1];break;case"H":n.hourCycle="h23",n.hour=["numeric","2-digit"][t-1];break;case"K":n.hourCycle="h11",n.hour=["numeric","2-digit"][t-1];break;case"k":n.hourCycle="h24",n.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":n.minute=["numeric","2-digit"][t-1];break;case"s":n.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":n.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),n}var av=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function sv(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var n=e.split(av).filter(function(m){return m.length>0}),r=[],t=0,a=n;t<a.length;t++){var s=a[t],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),u=0,g=l;u<g.length;u++){var E=g[u];if(E.length===0)throw new Error("Invalid number skeleton")}r.push({stem:o,options:l})}return r}function iv(e){return e.replace(/^(.*?)-/,"")}var Gi=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Dd=/^(@+)?(\+|#+)?[rs]?$/g,ov=/(\*)(0+)|(#+)(0+)|(0+)/g,Kd=/^(0+)$/;function wi(e){var n={};return e[e.length-1]==="r"?n.roundingPriority="morePrecision":e[e.length-1]==="s"&&(n.roundingPriority="lessPrecision"),e.replace(Dd,function(r,t,a){return typeof a!="string"?(n.minimumSignificantDigits=t.length,n.maximumSignificantDigits=t.length):a==="+"?n.minimumSignificantDigits=t.length:t[0]==="#"?n.maximumSignificantDigits=t.length:(n.minimumSignificantDigits=t.length,n.maximumSignificantDigits=t.length+(typeof a=="string"?a.length:0)),""}),n}function Ld(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function lv(e){var n;if(e[0]==="E"&&e[1]==="E"?(n={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(n={notation:"scientific"},e=e.slice(1)),n){var r=e.slice(0,2);if(r==="+!"?(n.signDisplay="always",e=e.slice(2)):r==="+?"&&(n.signDisplay="exceptZero",e=e.slice(2)),!Kd.test(e))throw new Error("Malformed concise eng/scientific notation");n.minimumIntegerDigits=e.length}return n}function Bi(e){var n={},r=Ld(e);return r||n}function dv(e){for(var n={},r=0,t=e;r<t.length;r++){var a=t[r];switch(a.stem){case"percent":case"%":n.style="percent";continue;case"%x100":n.style="percent",n.scale=100;continue;case"currency":n.style="currency",n.currency=a.options[0];continue;case"group-off":case",_":n.useGrouping=!1;continue;case"precision-integer":case".":n.maximumFractionDigits=0;continue;case"measure-unit":case"unit":n.style="unit",n.unit=iv(a.options[0]);continue;case"compact-short":case"K":n.notation="compact",n.compactDisplay="short";continue;case"compact-long":case"KK":n.notation="compact",n.compactDisplay="long";continue;case"scientific":n=J(J(J({},n),{notation:"scientific"}),a.options.reduce(function(l,u){return J(J({},l),Bi(u))},{}));continue;case"engineering":n=J(J(J({},n),{notation:"engineering"}),a.options.reduce(function(l,u){return J(J({},l),Bi(u))},{}));continue;case"notation-simple":n.notation="standard";continue;case"unit-width-narrow":n.currencyDisplay="narrowSymbol",n.unitDisplay="narrow";continue;case"unit-width-short":n.currencyDisplay="code",n.unitDisplay="short";continue;case"unit-width-full-name":n.currencyDisplay="name",n.unitDisplay="long";continue;case"unit-width-iso-code":n.currencyDisplay="symbol";continue;case"scale":n.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":n.roundingMode="floor";continue;case"rounding-mode-ceiling":n.roundingMode="ceil";continue;case"rounding-mode-down":n.roundingMode="trunc";continue;case"rounding-mode-up":n.roundingMode="expand";continue;case"rounding-mode-half-even":n.roundingMode="halfEven";continue;case"rounding-mode-half-down":n.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":n.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(ov,function(l,u,g,E,m,y){if(u)n.minimumIntegerDigits=g.length;else{if(E&&m)throw new Error("We currently do not support maximum integer digits");if(y)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Kd.test(a.stem)){n.minimumIntegerDigits=a.stem.length;continue}if(Gi.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(Gi,function(l,u,g,E,m,y){return g==="*"?n.minimumFractionDigits=u.length:E&&E[0]==="#"?n.maximumFractionDigits=E.length:m&&y?(n.minimumFractionDigits=m.length,n.maximumFractionDigits=m.length+y.length):(n.minimumFractionDigits=u.length,n.maximumFractionDigits=u.length),""});var s=a.options[0];s==="w"?n=J(J({},n),{trailingZeroDisplay:"stripIfInteger"}):s&&(n=J(J({},n),wi(s)));continue}if(Dd.test(a.stem)){n=J(J({},n),wi(a.stem));continue}var i=Ld(a.stem);i&&(n=J(J({},n),i));var o=lv(a.stem);o&&(n=J(J({},n),o))}return n}var Ft={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function uv(e,n){for(var r="",t=0;t<e.length;t++){var a=e.charAt(t);if(a==="j"){for(var s=0;t+1<e.length&&e.charAt(t+1)===a;)s++,t++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",u=gv(n);for((u=="H"||u=="k")&&(o=0);o-- >0;)r+=l;for(;i-- >0;)r=u+r}else a==="J"?r+="H":r+=a}return r}function gv(e){var n=e.hourCycle;if(n===void 0&&e.hourCycles&&e.hourCycles.length&&(n=e.hourCycles[0]),n)switch(n){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,t;r!=="root"&&(t=e.maximize().region);var a=Ft[t||""]||Ft[r||""]||Ft["".concat(r,"-001")]||Ft["001"];return a[0]}var qa,kv=new RegExp("^".concat(Id.source,"*")),Ev=new RegExp("".concat(Id.source,"*$"));function ae(e,n){return{start:e,end:n}}var vv=!!String.prototype.startsWith&&"_a".startsWith("a",1),mv=!!String.fromCodePoint,fv=!!Object.fromEntries,Tv=!!String.prototype.codePointAt,Rv=!!String.prototype.trimStart,yv=!!String.prototype.trimEnd,Av=!!Number.isSafeInteger,pv=Av?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},rs=!0;try{var cv=Fd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");rs=((qa=cv.exec("a"))===null||qa===void 0?void 0:qa[0])==="a"}catch{rs=!1}var Ui=vv?function(n,r,t){return n.startsWith(r,t)}:function(n,r,t){return n.slice(t,t+r.length)===r},ts=mv?String.fromCodePoint:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];for(var t="",a=n.length,s=0,i;a>s;){if(i=n[s++],i>1114111)throw RangeError(i+" is not a valid code point");t+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return t},ji=fv?Object.fromEntries:function(n){for(var r={},t=0,a=n;t<a.length;t++){var s=a[t],i=s[0],o=s[1];r[i]=o}return r},Pd=Tv?function(n,r){return n.codePointAt(r)}:function(n,r){var t=n.length;if(!(r<0||r>=t)){var a=n.charCodeAt(r),s;return a<55296||a>56319||r+1===t||(s=n.charCodeAt(r+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},bv=Rv?function(n){return n.trimStart()}:function(n){return n.replace(kv,"")},_v=yv?function(n){return n.trimEnd()}:function(n){return n.replace(Ev,"")};function Fd(e,n){return new RegExp(e,n)}var as;if(rs){var Hi=Fd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");as=function(n,r){var t;Hi.lastIndex=r;var a=Hi.exec(n);return(t=a[1])!==null&&t!==void 0?t:""}}else as=function(n,r){for(var t=[];;){var a=Pd(n,r);if(a===void 0||Md(a)||Ov(a))break;t.push(a),r+=a>=65536?2:1}return ts.apply(void 0,t)};var hv=function(){function e(n,r){r===void 0&&(r={}),this.message=n,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(n,r,t){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(n,t);if(i.err)return i;a.push(i.val)}else{if(s===125&&n>0)break;if(s===35&&(r==="plural"||r==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:fe.pound,location:ae(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(re.UNMATCHED_CLOSING_TAG,ae(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&ss(this.peek()||0)){var i=this.parseTag(n,r);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(n,r);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(n,r){var t=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:fe.literal,value:"<".concat(a,"/>"),location:ae(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(n+1,r,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!ss(this.char()))return this.error(re.INVALID_TAG,ae(o,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return a!==u?this.error(re.UNMATCHED_CLOSING_TAG,ae(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:fe.tag,value:a,children:i,location:ae(t,this.clonePosition())},err:null}:this.error(re.INVALID_TAG,ae(o,this.clonePosition())))}else return this.error(re.UNCLOSED_TAG,ae(t,this.clonePosition()))}else return this.error(re.INVALID_TAG,ae(t,this.clonePosition()))},e.prototype.parseTagName=function(){var n=this.offset();for(this.bump();!this.isEOF()&&Nv(this.char());)this.bump();return this.message.slice(n,this.offset())},e.prototype.parseLiteral=function(n,r){for(var t=this.clonePosition(),a="";;){var s=this.tryParseQuote(r);if(s){a+=s;continue}var i=this.tryParseUnquoted(n,r);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=ae(t,this.clonePosition());return{val:{type:fe.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Sv(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(n){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(n==="plural"||n==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(t);this.bump()}return ts.apply(void 0,r)},e.prototype.tryParseUnquoted=function(n,r){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(r==="plural"||r==="selectordinal")||t===125&&n>0?null:(this.bump(),ts(t))},e.prototype.parseArgument=function(n,r){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(re.EXPECT_ARGUMENT_CLOSING_BRACE,ae(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(re.EMPTY_ARGUMENT,ae(t,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(re.MALFORMED_ARGUMENT,ae(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(re.EXPECT_ARGUMENT_CLOSING_BRACE,ae(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:fe.argument,value:a,location:ae(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(re.EXPECT_ARGUMENT_CLOSING_BRACE,ae(t,this.clonePosition())):this.parseArgumentOptions(n,r,a,t);default:return this.error(re.MALFORMED_ARGUMENT,ae(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var n=this.clonePosition(),r=this.offset(),t=as(this.message,r),a=r+t.length;this.bumpTo(a);var s=this.clonePosition(),i=ae(n,s);return{value:t,location:i}},e.prototype.parseArgumentOptions=function(n,r,t,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(re.EXPECT_ARGUMENT_TYPE,ae(i,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var g=this.clonePosition(),E=this.parseSimpleArgStyleIfPossible();if(E.err)return E;var m=_v(E.val);if(m.length===0)return this.error(re.EXPECT_ARGUMENT_STYLE,ae(this.clonePosition(),this.clonePosition()));var y=ae(g,this.clonePosition());u={style:m,styleLocation:y}}var b=this.tryParseArgumentClose(a);if(b.err)return b;var v=ae(a,this.clonePosition());if(u&&Ui(u==null?void 0:u.style,"::",0)){var p=bv(u.style.slice(2));if(o==="number"){var E=this.parseNumberSkeletonFromString(p,u.styleLocation);return E.err?E:{val:{type:fe.number,value:t,location:v,style:E.val},err:null}}else{if(p.length===0)return this.error(re.EXPECT_DATE_TIME_SKELETON,v);var N=p;this.locale&&(N=uv(p,this.locale));var m={type:_r.dateTime,pattern:N,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?tv(N):{}},R=o==="date"?fe.date:fe.time;return{val:{type:R,value:t,location:v,style:m},err:null}}}return{val:{type:o==="number"?fe.number:o==="date"?fe.date:fe.time,value:t,location:v,style:(s=u==null?void 0:u.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var D=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(re.EXPECT_SELECT_ARGUMENT_OPTIONS,ae(D,J({},D)));this.bumpSpace();var Y=this.parseIdentifierIfPossible(),w=0;if(o!=="select"&&Y.value==="offset"){if(!this.bumpIf(":"))return this.error(re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ae(this.clonePosition(),this.clonePosition()));this.bumpSpace();var E=this.tryParseDecimalInteger(re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,re.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(E.err)return E;this.bumpSpace(),Y=this.parseIdentifierIfPossible(),w=E.val}var G=this.tryParsePluralOrSelectOptions(n,o,r,Y);if(G.err)return G;var b=this.tryParseArgumentClose(a);if(b.err)return b;var O=ae(a,this.clonePosition());return o==="select"?{val:{type:fe.select,value:t,options:ji(G.val),location:O},err:null}:{val:{type:fe.plural,value:t,options:ji(G.val),offset:w,pluralType:o==="plural"?"cardinal":"ordinal",location:O},err:null}}default:return this.error(re.INVALID_ARGUMENT_TYPE,ae(i,l))}},e.prototype.tryParseArgumentClose=function(n){return this.isEOF()||this.char()!==125?this.error(re.EXPECT_ARGUMENT_CLOSING_BRACE,ae(n,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var n=0,r=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(re.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,ae(a,this.clonePosition()));this.bump();break}case 123:{n+=1,this.bump();break}case 125:{if(n>0)n-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(n,r){var t=[];try{t=sv(n)}catch{return this.error(re.INVALID_NUMBER_SKELETON,r)}return{val:{type:_r.number,tokens:t,location:r,parsedOptions:this.shouldParseSkeletons?dv(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(n,r,t,a){for(var s,i=!1,o=[],l=new Set,u=a.value,g=a.location;;){if(u.length===0){var E=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var m=this.tryParseDecimalInteger(re.EXPECT_PLURAL_ARGUMENT_SELECTOR,re.INVALID_PLURAL_ARGUMENT_SELECTOR);if(m.err)return m;g=ae(E,this.clonePosition()),u=this.message.slice(E.offset,this.offset())}else break}if(l.has(u))return this.error(r==="select"?re.DUPLICATE_SELECT_ARGUMENT_SELECTOR:re.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,g);u==="other"&&(i=!0),this.bumpSpace();var y=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?re.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:re.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,ae(this.clonePosition(),this.clonePosition()));var b=this.parseMessage(n+1,r,t);if(b.err)return b;var v=this.tryParseArgumentClose(y);if(v.err)return v;o.push([u,{value:b.val,location:ae(y,this.clonePosition())}]),l.add(u),this.bumpSpace(),s=this.parseIdentifierIfPossible(),u=s.value,g=s.location}return o.length===0?this.error(r==="select"?re.EXPECT_SELECT_ARGUMENT_SELECTOR:re.EXPECT_PLURAL_ARGUMENT_SELECTOR,ae(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(re.MISSING_OTHER_CLAUSE,ae(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(n,r){var t=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=ae(a,this.clonePosition());return s?(i*=t,pv(i)?{val:i,err:null}:this.error(r,l)):this.error(n,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var n=this.position.offset;if(n>=this.message.length)throw Error("out of bound");var r=Pd(this.message,n);if(r===void 0)throw Error("Offset ".concat(n," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(n,r){return{val:null,err:{kind:n,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var n=this.char();n===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=n<65536?1:2)}},e.prototype.bumpIf=function(n){if(Ui(this.message,n,this.offset())){for(var r=0;r<n.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(n){var r=this.offset(),t=this.message.indexOf(n,r);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(n){if(this.offset()>n)throw Error("targetOffset ".concat(n," must be greater than or equal to the current offset ").concat(this.offset()));for(n=Math.min(n,this.message.length);;){var r=this.offset();if(r===n)break;if(r>n)throw Error("targetOffset ".concat(n," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Md(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var n=this.char(),r=this.offset(),t=this.message.charCodeAt(r+(n>=65536?2:1));return t??null},e}();function ss(e){return e>=97&&e<=122||e>=65&&e<=90}function Sv(e){return ss(e)||e===47}function Nv(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Md(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Ov(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function is(e){e.forEach(function(n){if(delete n.location,hd(n)||Sd(n))for(var r in n.options)delete n.options[r].location,is(n.options[r].value);else cd(n)&&Od(n.style)||(bd(n)||_d(n))&&ns(n.style)?delete n.style.location:Nd(n)&&is(n.children)})}function Iv(e,n){n===void 0&&(n={}),n=J({shouldParseSkeletons:!0,requiresOtherClause:!0},n);var r=new hv(e,n).parse();if(r.err){var t=SyntaxError(re[r.err.kind]);throw t.location=r.err.location,t.originalMessage=r.err.message,t}return n!=null&&n.captureLocation||is(r.val),r.val}function cn(e,n){var r=n&&n.cache?n.cache:Mv,t=n&&n.serializer?n.serializer:Fv,a=n&&n.strategy?n.strategy:Kv;return a(e,{cache:r,serializer:t})}function Dv(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Vd(e,n,r,t){var a=Dv(t)?t:r(t),s=n.get(a);return typeof s>"u"&&(s=e.call(this,t),n.set(a,s)),s}function Gd(e,n,r){var t=Array.prototype.slice.call(arguments,3),a=r(t),s=n.get(a);return typeof s>"u"&&(s=e.apply(this,t),n.set(a,s)),s}function Ms(e,n,r,t,a){return r.bind(n,e,t,a)}function Kv(e,n){var r=e.length===1?Vd:Gd;return Ms(e,this,r,n.cache.create(),n.serializer)}function Lv(e,n){return Ms(e,this,Gd,n.cache.create(),n.serializer)}function Pv(e,n){return Ms(e,this,Vd,n.cache.create(),n.serializer)}var Fv=function(){return JSON.stringify(arguments)};function Vs(){this.cache=Object.create(null)}Vs.prototype.get=function(e){return this.cache[e]};Vs.prototype.set=function(e,n){this.cache[e]=n};var Mv={create:function(){return new Vs}},bn={variadic:Lv,monadic:Pv},On;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(On||(On={}));var Zn=function(e){yn(n,e);function n(r,t,a){var s=e.call(this,r)||this;return s.code=t,s.originalMessage=a,s}return n.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},n}(Error),qi=function(e){yn(n,e);function n(r,t,a,s){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(t,'". Options are "').concat(Object.keys(a).join('", "'),'"'),On.INVALID_VALUE,s)||this}return n}(Zn),Vv=function(e){yn(n,e);function n(r,t,a){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(t),On.INVALID_VALUE,a)||this}return n}(Zn),Gv=function(e){yn(n,e);function n(r,t){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(t,'"'),On.MISSING_VALUE,t)||this}return n}(Zn),He;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(He||(He={}));function wv(e){return e.length<2?e:e.reduce(function(n,r){var t=n[n.length-1];return!t||t.type!==He.literal||r.type!==He.literal?n.push(r):t.value+=r.value,n},[])}function wd(e){return typeof e=="function"}function qt(e,n,r,t,a,s,i){if(e.length===1&&Vi(e[0]))return[{type:He.literal,value:e[0].value}];for(var o=[],l=0,u=e;l<u.length;l++){var g=u[l];if(Vi(g)){o.push({type:He.literal,value:g.value});continue}if(nv(g)){typeof s=="number"&&o.push({type:He.literal,value:r.getNumberFormat(n).format(s)});continue}var E=g.value;if(!(a&&E in a))throw new Gv(E,i);var m=a[E];if(ev(g)){(!m||typeof m=="string"||typeof m=="number")&&(m=typeof m=="string"||typeof m=="number"?String(m):""),o.push({type:typeof m=="string"?He.literal:He.object,value:m});continue}if(bd(g)){var y=typeof g.style=="string"?t.date[g.style]:ns(g.style)?g.style.parsedOptions:void 0;o.push({type:He.literal,value:r.getDateTimeFormat(n,y).format(m)});continue}if(_d(g)){var y=typeof g.style=="string"?t.time[g.style]:ns(g.style)?g.style.parsedOptions:t.time.medium;o.push({type:He.literal,value:r.getDateTimeFormat(n,y).format(m)});continue}if(cd(g)){var y=typeof g.style=="string"?t.number[g.style]:Od(g.style)?g.style.parsedOptions:void 0;y&&y.scale&&(m=m*(y.scale||1)),o.push({type:He.literal,value:r.getNumberFormat(n,y).format(m)});continue}if(Nd(g)){var b=g.children,v=g.value,p=a[v];if(!wd(p))throw new Vv(v,"function",i);var N=qt(b,n,r,t,a,s),R=p(N.map(function(w){return w.value}));Array.isArray(R)||(R=[R]),o.push.apply(o,R.map(function(w){return{type:typeof w=="string"?He.literal:He.object,value:w}}))}if(hd(g)){var D=g.options[m]||g.options.other;if(!D)throw new qi(g.value,m,Object.keys(g.options),i);o.push.apply(o,qt(D.value,n,r,t,a));continue}if(Sd(g)){var D=g.options["=".concat(m)];if(!D){if(!Intl.PluralRules)throw new Zn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,On.MISSING_INTL_API,i);var Y=r.getPluralRules(n,{type:g.pluralType}).select(m-(g.offset||0));D=g.options[Y]||g.options.other}if(!D)throw new qi(g.value,m,Object.keys(g.options),i);o.push.apply(o,qt(D.value,n,r,t,a,m-(g.offset||0)));continue}}return wv(o)}function Bv(e,n){return n?J(J(J({},e||{}),n||{}),Object.keys(e).reduce(function(r,t){return r[t]=J(J({},e[t]),n[t]||{}),r},{})):e}function Uv(e,n){return n?Object.keys(e).reduce(function(r,t){return r[t]=Bv(e[t],n[t]),r},J({},e)):e}function Ya(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,r){e[n]=r}}}}}function jv(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:cn(function(){for(var n,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((n=Intl.NumberFormat).bind.apply(n,_n([void 0],r,!1)))},{cache:Ya(e.number),strategy:bn.variadic}),getDateTimeFormat:cn(function(){for(var n,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((n=Intl.DateTimeFormat).bind.apply(n,_n([void 0],r,!1)))},{cache:Ya(e.dateTime),strategy:bn.variadic}),getPluralRules:cn(function(){for(var n,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((n=Intl.PluralRules).bind.apply(n,_n([void 0],r,!1)))},{cache:Ya(e.pluralRules),strategy:bn.variadic})}}var Bd=function(){function e(n,r,t,a){var s=this;if(r===void 0&&(r=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=s.formatToParts(l);if(u.length===1)return u[0].value;var g=u.reduce(function(E,m){return!E.length||m.type!==He.literal||typeof E[E.length-1]!="string"?E.push(m.value):E[E.length-1]+=m.value,E},[]);return g.length<=1?g[0]||"":g},this.formatToParts=function(l){return qt(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof n=="string"){if(this.message=n,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=br(i,["formatters"]);this.ast=e.__parse(n,J(J({},o),{locale:this.resolvedLocale}))}else this.ast=n;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Uv(e.formats,t),this.formatters=a&&a.formatters||jv(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(n){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(n);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof n=="string"?n:n[0])}},e.__parse=Iv,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),sr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(sr||(sr={}));var ct=function(e){yn(n,e);function n(r,t,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(t,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,n),s}return n}(Error),Hv=function(e){yn(n,e);function n(r,t){return e.call(this,sr.UNSUPPORTED_FORMATTER,r,t)||this}return n}(ct),qv=function(e){yn(n,e);function n(r,t){return e.call(this,sr.INVALID_CONFIG,r,t)||this}return n}(ct),Yi=function(e){yn(n,e);function n(r,t){return e.call(this,sr.MISSING_DATA,r,t)||this}return n}(ct),dn=function(e){yn(n,e);function n(r,t,a){var s=e.call(this,sr.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(t,`
`),a)||this;return s.locale=t,s}return n}(ct),xa=function(e){yn(n,e);function n(r,t,a,s){var i=e.call(this,"".concat(r,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),t,s)||this;return i.descriptor=a,i.locale=t,i}return n}(dn),Yv=function(e){yn(n,e);function n(r,t){var a=e.call(this,sr.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(t,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=r,a}return n}(ct);function or(e,n,r){return r===void 0&&(r={}),n.reduce(function(t,a){return a in e?t[a]=e[a]:a in r&&(t[a]=r[a]),t},{})}var xv=function(e){},Cv=function(e){},Ud={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:xv,onWarn:Cv};function jd(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Xn(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,r){e[n]=r}}}}}function $v(e){e===void 0&&(e=jd());var n=Intl.RelativeTimeFormat,r=Intl.ListFormat,t=Intl.DisplayNames,a=cn(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.DateTimeFormat).bind.apply(o,_n([void 0],l,!1)))},{cache:Xn(e.dateTime),strategy:bn.variadic}),s=cn(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.NumberFormat).bind.apply(o,_n([void 0],l,!1)))},{cache:Xn(e.number),strategy:bn.variadic}),i=cn(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.PluralRules).bind.apply(o,_n([void 0],l,!1)))},{cache:Xn(e.pluralRules),strategy:bn.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:cn(function(o,l,u,g){return new Bd(o,l,u,J({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},g||{}))},{cache:Xn(e.message),strategy:bn.variadic}),getRelativeTimeFormat:cn(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,_n([void 0],o,!1)))},{cache:Xn(e.relativeTime),strategy:bn.variadic}),getPluralRules:i,getListFormat:cn(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,_n([void 0],o,!1)))},{cache:Xn(e.list),strategy:bn.variadic}),getDisplayNames:cn(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,_n([void 0],o,!1)))},{cache:Xn(e.displayNames),strategy:bn.variadic})}}function Gs(e,n,r,t){var a=e&&e[n],s;if(a&&(s=a[r]),s)return s;t(new Hv("No ".concat(n," format named: ").concat(r)))}function Mt(e,n){return Object.keys(e).reduce(function(r,t){return r[t]=J({timeZone:n},e[t]),r},{})}function xi(e,n){var r=Object.keys(J(J({},e),n));return r.reduce(function(t,a){return t[a]=J(J({},e[a]||{}),n[a]||{}),t},{})}function Ci(e,n){if(!n)return e;var r=Bd.formats;return J(J(J({},r),e),{date:xi(Mt(r.date,n),Mt(e.date||{},n)),time:xi(Mt(r.time,n),Mt(e.time||{},n))})}var os=function(e,n,r,t,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,u=e.defaultFormats,g=e.fallbackOnEmptyString,E=e.onError,m=e.timeZone,y=e.defaultRichTextElements;r===void 0&&(r={id:""});var b=r.id,v=r.defaultMessage;pd(!!b,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var p=String(b),N=o&&Object.prototype.hasOwnProperty.call(o,p)&&o[p];if(Array.isArray(N)&&N.length===1&&N[0].type===fe.literal)return N[0].value;if(!t&&N&&typeof N=="string"&&!y)return N.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=J(J({},y),t||{}),i=Ci(i,m),u=Ci(u,m),!N){if(g===!1&&N==="")return N;if((!v||s&&s.toLowerCase()!==l.toLowerCase())&&E(new Yv(r,s)),v)try{var R=n.getMessageFormat(v,l,u,a);return R.format(t)}catch(D){return E(new xa('Error formatting default message for: "'.concat(p,'", rendering default message verbatim'),s,r,D)),typeof v=="string"?v:p}return p}try{var R=n.getMessageFormat(N,s,i,J({formatters:n},a||{}));return R.format(t)}catch(D){E(new xa('Error formatting message: "'.concat(p,'", using ').concat(v?"default message":"id"," as fallback."),s,r,D))}if(v)try{var R=n.getMessageFormat(v,l,u,a);return R.format(t)}catch(D){E(new xa('Error formatting the default message for: "'.concat(p,'", rendering message verbatim'),s,r,D))}return typeof N=="string"?N:typeof v=="string"?v:p},Hd=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Ra(e,n,r,t){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;t===void 0&&(t={});var l=t.format,u=J(J({},o&&{timeZone:o}),l&&Gs(s,n,l,i)),g=or(t,Hd,u);return n==="time"&&!g.hour&&!g.minute&&!g.second&&!g.timeStyle&&!g.dateStyle&&(g=J(J({},g),{hour:"numeric",minute:"numeric"})),r(a,g)}function Jv(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Ra(e,"date",n,i).format(o)}catch(l){e.onError(new dn("Error formatting date.",e.locale,l))}return String(o)}function Wv(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Ra(e,"time",n,i).format(o)}catch(l){e.onError(new dn("Error formatting time.",e.locale,l))}return String(o)}function zv(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],i=r[2],o=i===void 0?{}:i,l=e.timeZone,u=e.locale,g=e.onError,E=or(o,Hd,l?{timeZone:l}:{});try{return n(u,E).formatRange(a,s)}catch(m){g(new dn("Error formatting date time range.",e.locale,m))}return String(a)}function Zv(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Ra(e,"date",n,i).formatToParts(o)}catch(l){e.onError(new dn("Error formatting date.",e.locale,l))}return[]}function Xv(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Ra(e,"time",n,i).formatToParts(o)}catch(l){e.onError(new dn("Error formatting time.",e.locale,l))}return[]}var Qv=["style","type","fallback","languageDisplay"];function em(e,n,r,t){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new Zn(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,On.MISSING_INTL_API));var o=or(t,Qv);try{return n(a,o).of(r)}catch(l){s(new dn("Error formatting display name.",a,l))}}var nm=["type","style"],$i=Date.now();function rm(e){return"".concat($i,"_").concat(e,"_").concat($i)}function tm(e,n,r,t){t===void 0&&(t={});var a=qd(e,n,r,t).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function qd(e,n,r,t){var a=e.locale,s=e.onError;t===void 0&&(t={});var i=Intl.ListFormat;i||s(new Zn(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,On.MISSING_INTL_API));var o=or(t,nm);try{var l={},u=r.map(function(g,E){if(typeof g=="object"){var m=rm(E);return l[m]=g,m}return String(g)});return n(a,o).formatToParts(u).map(function(g){return g.type==="literal"?g:J(J({},g),{value:l[g.value]||g.value})})}catch(g){s(new dn("Error formatting list.",a,g))}return r}var am=["type"];function sm(e,n,r,t){var a=e.locale,s=e.onError;t===void 0&&(t={}),Intl.PluralRules||s(new Zn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,On.MISSING_INTL_API));var i=or(t,am);try{return n(a,i).select(r)}catch(o){s(new dn("Error formatting plural.",a,o))}return"other"}var im=["numeric","style"];function om(e,n,r){var t=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var i=r.format,o=!!i&&Gs(a,"relative",i,s)||{},l=or(r,im,o);return n(t,l)}function lm(e,n,r,t,a){a===void 0&&(a={}),t||(t="second");var s=Intl.RelativeTimeFormat;s||e.onError(new Zn(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,On.MISSING_INTL_API));try{return om(e,n,a).format(r,t)}catch(i){e.onError(new dn("Error formatting relative time.",e.locale,i))}return String(r)}var dm=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Yd(e,n,r){var t=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var i=r.format,o=i&&Gs(a,"number",i,s)||{},l=or(r,dm,o);return n(t,l)}function um(e,n,r,t){t===void 0&&(t={});try{return Yd(e,n,t).format(r)}catch(a){e.onError(new dn("Error formatting number.",e.locale,a))}return String(r)}function gm(e,n,r,t){t===void 0&&(t={});try{return Yd(e,n,t).formatToParts(r)}catch(a){e.onError(new dn("Error formatting number.",e.locale,a))}return[]}function km(e){var n=e?e[Object.keys(e)[0]]:void 0;return typeof n=="string"}function Em(e){e.onWarn&&e.defaultRichTextElements&&km(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function vm(e,n){var r=$v(n),t=J(J({},Ud),e),a=t.locale,s=t.defaultLocale,i=t.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new Yi('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new Yi('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new qv('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),Em(t),J(J({},t),{formatters:r,formatNumber:um.bind(null,t,r.getNumberFormat),formatNumberToParts:gm.bind(null,t,r.getNumberFormat),formatRelativeTime:lm.bind(null,t,r.getRelativeTimeFormat),formatDate:Jv.bind(null,t,r.getDateTimeFormat),formatDateToParts:Zv.bind(null,t,r.getDateTimeFormat),formatTime:Wv.bind(null,t,r.getDateTimeFormat),formatDateTimeRange:zv.bind(null,t,r.getDateTimeFormat),formatTimeToParts:Xv.bind(null,t,r.getDateTimeFormat),formatPlural:sm.bind(null,t,r.getPluralRules),formatMessage:os.bind(null,t,r),$t:os.bind(null,t,r),formatList:tm.bind(null,t,r.getListFormat),formatListToParts:qd.bind(null,t,r.getListFormat),formatDisplayName:em.bind(null,t,r.getDisplayNames)})}function mm(e){pd(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var fm=J(J({},Ud),{textComponent:T.Fragment});function Tm(e){return function(n){return e(T.Children.toArray(n))}}function Ji(e,n){if(e===n)return!0;if(!e||!n)return!1;var r=Object.keys(e),t=Object.keys(n),a=r.length;if(t.length!==a)return!1;for(var s=0;s<a;s++){var i=r[s];if(e[i]!==n[i]||!Object.prototype.hasOwnProperty.call(n,i))return!1}return!0}var ws=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=T.createContext(null)):T.createContext(null);ws.Consumer;var Rm=ws.Provider,ym=Rm,Am=ws;function An(){var e=T.useContext(Am);return mm(e),e}var ls;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(ls||(ls={}));var ds;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(ds||(ds={}));function xd(e){var n=function(r){var t=An(),a=r.value,s=r.children,i=br(r,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?t.formatDateToParts(o,i):t.formatTimeToParts(o,i);return s(l)};return n.displayName=ds[e],n}function bt(e){var n=function(r){var t=An(),a=r.value,s=r.children,i=br(r,["value","children"]),o=t[e](a,i);if(typeof s=="function")return s(o);var l=t.textComponent||T.Fragment;return T.createElement(l,null,o)};return n.displayName=ls[e],n}function Cd(e){return e&&Object.keys(e).reduce(function(n,r){var t=e[r];return n[r]=wd(t)?Tm(t):t,n},{})}var Wi=function(e,n,r,t){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=Cd(t),o=os.apply(void 0,_n([e,n,r,i],a,!1));return Array.isArray(o)?T.Children.toArray(o):o},pm=function(e,n){var r=e.defaultRichTextElements,t=br(e,["defaultRichTextElements"]),a=Cd(r),s=vm(J(J(J({},fm),t),{defaultRichTextElements:a}),n),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return J(J({},s),{formatMessage:Wi.bind(null,i,s.formatters),$t:Wi.bind(null,i,s.formatters)})};function cm(e,n){var r=e.values,t=br(e,["values"]),a=n.values,s=br(n,["values"]);return Ji(a,r)&&Ji(t,s)}function $d(e){var n=An(),r=n.formatMessage,t=n.textComponent,a=t===void 0?T.Fragment:t,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,u=e.children,g=e.tagName,E=g===void 0?a:g,m=e.ignoreTag,y={id:s,description:i,defaultMessage:o},b=r(y,l,{ignoreTag:m});return typeof u=="function"?u(Array.isArray(b)?b:[b]):E?T.createElement(E,null,T.Children.toArray(b)):T.createElement(T.Fragment,null,b)}$d.displayName="FormattedMessage";var Jd=T.memo($d,cm);Jd.displayName="MemoizedFormattedMessage";const Se=Jd;bt("formatDate");bt("formatTime");bt("formatNumber");bt("formatList");bt("formatDisplayName");xd("formatDate");xd("formatTime");const Wd=e=>`${Number(e).toLocaleString("nb-NO").replace(/,|\s/g," ")} kr`;var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zd={exports:{}};(function(e,n){(function(r,t){e.exports=t()})(ya,function(){var r="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(v){var p={date:v,utc:!0,args:arguments};return new i(p)},l.utc=function(v){var p=o(this.toDate(),{locale:this.$L,utc:!0});return v?p.add(this.utcOffset(),r):p},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(v){v.utc&&(this.$u=!0),this.$utils().u(v.$offset)||(this.$offset=v.$offset),u.call(this,v)};var g=l.init;l.init=function(){if(this.$u){var v=this.$d;this.$y=v.getUTCFullYear(),this.$M=v.getUTCMonth(),this.$D=v.getUTCDate(),this.$W=v.getUTCDay(),this.$H=v.getUTCHours(),this.$m=v.getUTCMinutes(),this.$s=v.getUTCSeconds(),this.$ms=v.getUTCMilliseconds()}else g.call(this)};var E=l.utcOffset;l.utcOffset=function(v,p){var N=this.$utils().u;if(N(v))return this.$u?0:N(this.$offset)?E.call(this):this.$offset;if(typeof v=="string"&&(v=function(w){w===void 0&&(w="");var G=w.match(t);if(!G)return null;var O=(""+G[0]).match(a)||["-",0,0],h=O[0],j=60*+O[1]+ +O[2];return j===0?0:h==="+"?j:-j}(v),v===null))return this;var R=Math.abs(v)<=16?60*v:v,D=this;if(p)return D.$offset=R,D.$u=v===0,D;if(v!==0){var Y=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(D=this.local().add(R+Y,r)).$offset=R,D.$x.$localOffset=Y}else D=this.utc();return D};var m=l.format;l.format=function(v){var p=v||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return m.call(this,p)},l.valueOf=function(){var v=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*v},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var y=l.toDate;l.toDate=function(v){return v==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():y.call(this)};var b=l.diff;l.diff=function(v,p,N){if(v&&this.$u===v.$u)return b.call(this,v,p,N);var R=this.local(),D=o(v).local();return b.call(R,D,p,N)}}})})(zd);var bm=zd.exports;const _m=Bs(bm);var Zd={exports:{}};(function(e,n){(function(r,t){e.exports=t()})(ya,function(){var r,t,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,g=2628e6,E=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,m={years:u,months:g,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},y=function(G){return G instanceof Y},b=function(G,O,h){return new Y(G,h,O.$l)},v=function(G){return t.p(G)+"s"},p=function(G){return G<0},N=function(G){return p(G)?Math.ceil(G):Math.floor(G)},R=function(G){return Math.abs(G)},D=function(G,O){return G?p(G)?{negative:!0,format:""+R(G)+O}:{negative:!1,format:""+G+O}:{negative:!1,format:""}},Y=function(){function G(h,j,M){var K=this;if(this.$d={},this.$l=M,h===void 0&&(this.$ms=0,this.parseFromMilliseconds()),j)return b(h*m[v(j)],this);if(typeof h=="number")return this.$ms=h,this.parseFromMilliseconds(),this;if(typeof h=="object")return Object.keys(h).forEach(function(c){K.$d[v(c)]=h[c]}),this.calMilliseconds(),this;if(typeof h=="string"){var L=h.match(E);if(L){var H=L.slice(2).map(function(c){return c!=null?Number(c):0});return this.$d.years=H[0],this.$d.months=H[1],this.$d.weeks=H[2],this.$d.days=H[3],this.$d.hours=H[4],this.$d.minutes=H[5],this.$d.seconds=H[6],this.calMilliseconds(),this}}return this}var O=G.prototype;return O.calMilliseconds=function(){var h=this;this.$ms=Object.keys(this.$d).reduce(function(j,M){return j+(h.$d[M]||0)*m[M]},0)},O.parseFromMilliseconds=function(){var h=this.$ms;this.$d.years=N(h/u),h%=u,this.$d.months=N(h/g),h%=g,this.$d.days=N(h/o),h%=o,this.$d.hours=N(h/i),h%=i,this.$d.minutes=N(h/s),h%=s,this.$d.seconds=N(h/a),h%=a,this.$d.milliseconds=h},O.toISOString=function(){var h=D(this.$d.years,"Y"),j=D(this.$d.months,"M"),M=+this.$d.days||0;this.$d.weeks&&(M+=7*this.$d.weeks);var K=D(M,"D"),L=D(this.$d.hours,"H"),H=D(this.$d.minutes,"M"),c=this.$d.seconds||0;this.$d.milliseconds&&(c+=this.$d.milliseconds/1e3,c=Math.round(1e3*c)/1e3);var _=D(c,"S"),S=h.negative||j.negative||K.negative||L.negative||H.negative||_.negative,V=L.format||H.format||_.format?"T":"",P=(S?"-":"")+"P"+h.format+j.format+K.format+V+L.format+H.format+_.format;return P==="P"||P==="-P"?"P0D":P},O.toJSON=function(){return this.toISOString()},O.format=function(h){var j=h||"YYYY-MM-DDTHH:mm:ss",M={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return j.replace(l,function(K,L){return L||String(M[K])})},O.as=function(h){return this.$ms/m[v(h)]},O.get=function(h){var j=this.$ms,M=v(h);return M==="milliseconds"?j%=1e3:j=M==="weeks"?N(j/m[M]):this.$d[M],j||0},O.add=function(h,j,M){var K;return K=j?h*m[v(j)]:y(h)?h.$ms:b(h,this).$ms,b(this.$ms+K*(M?-1:1),this)},O.subtract=function(h,j){return this.add(h,j,!0)},O.locale=function(h){var j=this.clone();return j.$l=h,j},O.clone=function(){return b(this.$ms,this)},O.humanize=function(h){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!h)},O.valueOf=function(){return this.asMilliseconds()},O.milliseconds=function(){return this.get("milliseconds")},O.asMilliseconds=function(){return this.as("milliseconds")},O.seconds=function(){return this.get("seconds")},O.asSeconds=function(){return this.as("seconds")},O.minutes=function(){return this.get("minutes")},O.asMinutes=function(){return this.as("minutes")},O.hours=function(){return this.get("hours")},O.asHours=function(){return this.as("hours")},O.days=function(){return this.get("days")},O.asDays=function(){return this.as("days")},O.weeks=function(){return this.get("weeks")},O.asWeeks=function(){return this.as("weeks")},O.months=function(){return this.get("months")},O.asMonths=function(){return this.as("months")},O.years=function(){return this.get("years")},O.asYears=function(){return this.as("years")},G}(),w=function(G,O,h){return G.add(O.years()*h,"y").add(O.months()*h,"M").add(O.days()*h,"d").add(O.hours()*h,"h").add(O.minutes()*h,"m").add(O.seconds()*h,"s").add(O.milliseconds()*h,"ms")};return function(G,O,h){r=h,t=h().$utils(),h.duration=function(K,L){var H=h.locale();return b(K,{$l:H},L)},h.isDuration=y;var j=O.prototype.add,M=O.prototype.subtract;O.prototype.add=function(K,L){return y(K)?w(this,K,1):j.bind(this)(K,L)},O.prototype.subtract=function(K,L){return y(K)?w(this,K,-1):M.bind(this)(K,L)}}})})(Zd);var hm=Zd.exports;const Sm=Bs(hm);var Xd={exports:{}};(function(e,n){(function(r,t){e.exports=t()})(ya,function(){var r="day";return function(t,a,s){var i=function(u){return u.add(4-u.isoWeekday(),r)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),r);var g,E,m,y,b=i(this),v=(g=this.isoWeekYear(),E=this.$u,m=(E?s.utc:s)().year(g).startOf("year"),y=4-m.isoWeekday(),m.isoWeekday()>4&&(y+=7),m.add(y,r));return b.diff(v,"week")+1},o.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var l=o.startOf;o.startOf=function(u,g){var E=this.$utils(),m=!!E.u(g)||g;return E.p(u)==="isoweek"?m?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(u,g)}}})})(Xd);var Nm=Xd.exports;const Om=Bs(Nm);var Im={exports:{}};(function(e,n){(function(r,t){e.exports=t(pt)})(ya,function(r){function t(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=t(r),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})})(Im);const Dm=jd(),je=e=>pm({locale:"nb-NO",messages:e},Dm),Qd={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","UttakInfoPanel.AntallEnDagOgEnUke":"{weeks} uke {days} dag","UttakInfoPanel.AntallEnDagOgFlereUker":"{weeks} uker {days} dag","UttakInfoPanel.AntallFlereDagerOgEnUke":"{weeks} uke {days} dager","UttakInfoPanel.AntallFlereDagerOgFlereUker":"{weeks} uker {days} dager","UttakInfoPanel.AntallFlereDagerOgNullUker":"{days} dager","UttakInfoPanel.AntallEnDagOgNullUker":"{days} dag","UttakInfoPanel.AntallNullDagerOgFlereUker":"{weeks} uker","UttakInfoPanel.AntallNullDagerOgEnUke":"{weeks} uke","UttakInfoPanel.TidenesEnde":"Antall uker og dager -"},Km="DD.MM.YYYY";pt.extend(_m);pt.extend(Om);pt.extend(Sm);je(Qd);const ir=e=>e==null?e:e.replace(/&#?((?!(60|62);)\w+);/g,(n,r)=>{if(Number.isNaN(parseInt(r,10))){const t={quot:34,amp:38,apos:39,nbsp:160,copy:169,reg:174,deg:176,frasl:47,trade:8482,euro:8364,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,permil:8240,lsaquo:8249,rsaquo:8250,spades:9824,clubs:9827,hearts:9829,diams:9830,oline:8254,larr:8592,uarr:8593,rarr:8594,darr:8595,hellip:133,ndash:150,mdash:151,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,brkbar:166,sect:167,uml:168,die:168,ordf:170,laquo:171,not:172,shy:173,macr:175,hibar:175,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Alpha:913,alpha:945,Beta:914,beta:946,Gamma:915,gamma:947,Delta:916,delta:948,Epsilon:917,epsilon:949,Zeta:918,zeta:950,Eta:919,eta:951,Theta:920,theta:952,Iota:921,iota:953,Kappa:922,kappa:954,Lambda:923,lambda:955,Mu:924,mu:956,Nu:925,nu:957,Xi:926,xi:958,Omicron:927,omicron:959,Pi:928,pi:960,Rho:929,rho:961,Sigma:931,sigma:963,Tau:932,tau:964,Upsilon:933,upsilon:965,Phi:934,phi:966,Chi:935,chi:967,Psi:936,psi:968,Omega:937,omega:969}[r];return t!==void 0?String.fromCharCode(t):n}return String.fromCharCode(r)}),Vt=je(Qd),Us=e=>{if(!e)return Vt.formatMessage({id:"Malform.Bokmal"});switch(e){case"NN":return Vt.formatMessage({id:"Malform.Nynorsk"});case"EN":return Vt.formatMessage({id:"Malform.Engelsk"});default:return Vt.formatMessage({id:"Malform.Bokmal"})}};function Lm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var eu={exports:{}},Lr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zi;function Pm(){if(zi)return Lr;zi=1;var e=d,n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var g,E={},m=null,y=null;u!==void 0&&(m=""+u),l.key!==void 0&&(m=""+l.key),l.ref!==void 0&&(y=l.ref);for(g in l)t.call(l,g)&&!s.hasOwnProperty(g)&&(E[g]=l[g]);if(o&&o.defaultProps)for(g in l=o.defaultProps,l)E[g]===void 0&&(E[g]=l[g]);return{$$typeof:n,type:o,key:m,ref:y,props:E,_owner:a.current}}return Lr.Fragment=r,Lr.jsx=i,Lr.jsxs=i,Lr}eu.exports=Pm();var ie=eu.exports;const lr={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" Kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};je(lr);je(lr);var nu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,t.call(this,o)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)n.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(nu);var Fm=nu.exports;const nn=Lm(Fm),Mm="_borderbox_hicl4_1",Vm="_error_hicl4_4",Gm="_warning_hicl4_7",wm={borderbox:Mm,error:Vm,warning:Gm};nn.bind(wm);const Bm="_aksjonspunkt_kn1hn_1",Um="_erAksjonspunktApent_kn1hn_4",jm="_erIkkeGodkjentAvBeslutter_kn1hn_8",Hm={aksjonspunkt:Bm,erAksjonspunktApent:Um,erIkkeGodkjentAvBeslutter:jm};nn.bind(Hm);je(lr);const Zi=je(lr),qm=({text:e,okButtonText:n,showModal:r,cancel:t,submit:a})=>ie.jsxs(Ha,{width:"small",open:r,"aria-label":e,onClose:t,children:[ie.jsx(Ha.Body,{children:ie.jsx(Is,{size:"small",children:e})}),ie.jsxs(Ha.Footer,{children:[ie.jsx(cr,{variant:"primary",size:"small",onClick:a,autoFocus:!0,type:"button",children:n||Zi.formatMessage({id:"OkAvbrytModal.Ok"})}),ie.jsx(cr,{variant:"secondary",size:"small",onClick:t,type:"button",children:Zi.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),Ym="_tooltip_h8akz_1",xm="_tooltiptext_h8akz_5",Cm="_left_h8akz_22",$m="_top_h8akz_27",Jm="_right_h8akz_30",Wm="_bottom_h8akz_34",zm="_showTooltip_h8akz_1",us={tooltip:Ym,tooltiptext:xm,left:Cm,top:$m,right:Jm,bottom:Wm,showTooltip:zm},Zm=nn.bind(us),Xm=({children:e,content:n,alignRight:r=!1,alignLeft:t=!1,alignTop:a=!1,alignBottom:s=!1})=>ie.jsxs("div",{className:us.tooltip,children:[ie.jsx("span",{className:Zm(us.tooltiptext,{right:r||!t&&!a&&!s,left:t,top:a,bottom:s}),children:n}),e]});d.forwardRef(({onClick:e=()=>{},onMouseDown:n,tabIndex:r=-1,className:t="",src:a,srcHover:s,alt:i,onKeyDown:o,tooltip:l,alignTooltipLeft:u=!1},g)=>{const[E,m]=T.useState(!1),y=T.useCallback(()=>{m(!0)},[]),b=T.useCallback(()=>{m(!1)},[]),v=T.useCallback(R=>{(R.key==="Enter"||R.key===" ")&&(o&&o(R),R.preventDefault())},[]),p=s&&E?s:a,N=ie.jsx("img",{ref:g,className:t,src:p,alt:i,tabIndex:r,onMouseOver:y,onMouseOut:b,onFocus:y,onBlur:b,onKeyDown:v,onMouseDown:n,onClick:e});return l?ie.jsx(Xm,{content:l,alignLeft:u,children:N}):N});const Qm="_flexColumnNew_1vdv1_1",ef={flexColumnNew:Qm},nf=nn.bind(ef),Be=({children:e,className:n})=>ie.jsx("div",{className:nf("flexColumnNew",n),children:e}),rf="_flexRow_1yf0y_1",tf="_spaceBetween_1yf0y_9",af="_alignItemsToBaseline_1yf0y_12",sf="_alignItemsToFlexEnd_1yf0y_15",of="_justifyItemsToFlexEnd_1yf0y_18",lf="_wrap_1yf0y_21",df={flexRow:rf,spaceBetween:tf,alignItemsToBaseline:af,alignItemsToFlexEnd:sf,justifyItemsToFlexEnd:of,wrap:lf},uf=nn.bind(df),rr=({children:e,spaceBetween:n=!1,alignItemsToBaseline:r=!1,alignItemsToFlexEnd:t=!1,wrap:a=!1,className:s})=>ie.jsx("div",{className:uf("flexRow",{spaceBetween:n},{alignItemsToBaseline:r},{alignItemsToFlexEnd:t},{wrap:a},s),children:e}),gf="_flexContainer_1dk1o_1",kf="_fluid_1dk1o_6",Ef="_fullHeight_1dk1o_9",vf="_flexWrap_1dk1o_17",mf={flexContainer:gf,fluid:kf,fullHeight:Ef,flexWrap:vf},ff=nn.bind(mf),tr=({children:e,wrap:n=!1,fullHeight:r=!1})=>ie.jsx("div",{className:ff("flexContainer","fluid",{flexWrap:n,fullHeight:r}),children:e});je(lr);const Tf="_row_1lxv9_1",Rf="_harHover_1lxv9_4",yf="_rowHeader_1lxv9_7",Af="_grayHeader_1lxv9_12",pf="_rowContent_1lxv9_15",cf="_selected_1lxv9_18",bf="_bold_1lxv9_22",_f="_dashedBottomBorder_1lxv9_25",hf="_solidBottomBorder_1lxv9_28",Sf="_apLeftBorder_1lxv9_31",Nf="_noBottomBorder_1lxv9_34",ru={row:Tf,harHover:Rf,rowHeader:yf,grayHeader:Af,rowContent:pf,selected:cf,bold:bf,dashedBottomBorder:_f,solidBottomBorder:hf,apLeftBorder:Sf,noBottomBorder:Nf},Of=nn.bind(ru),If=(e,n,r)=>t=>{e&&t.button===0&&e(t,n,r)},tu=e=>e.tagName==="TR"?e:tu(e.parentElement),Xi=(e,n)=>{const r=tu(e.target),t=(n?r.nextSibling:r.previousSibling)||r;t&&(t.focus(),e.preventDefault())},Df=(e,n,r,t)=>a=>{a.key==="ArrowDown"?Xi(a,!0):a.key==="ArrowUp"?Xi(a,!1):n&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(n(a,r,t),a.preventDefault()):e&&n&&a.target.tagName!=="TD"&&a.key==="Shift"&&(n(a),a.preventDefault())},Kf=e=>n=>{e&&n.target.tagName!=="TD"&&n.key==="Shift"&&(e(n),n.preventDefault())},Lf=({id:e,model:n,isHeader:r=!1,hasGrayHeader:t=!1,onMouseDown:a,onKeyDown:s,children:i,noHover:o=!1,isSelected:l=!1,isBold:u=!1,isDashedBottomBorder:g=!1,isSolidBottomBorder:E=!1,isApLeftBorder:m=!1,className:y,useMultiselect:b=!1,hasNoBottomBorder:v=!1})=>ie.jsx("tr",{className:Of(y,ru.row,{rowHeader:r,grayHeader:t,rowContent:!r&&!o,selected:l,harHover:!o,bold:u,dashedBottomBorder:g,solidBottomBorder:E,noBottomBorder:v,apLeftBorder:m}),onMouseDown:If(a,e,n),onKeyDown:Df(b,s,e,n),onKeyUp:b?Kf(s):void 0,tabIndex:0,children:i}),Pf="_columnStyle_1f13u_1",au={columnStyle:Pf},Ff=nn.bind(au),Ca=({children:e="",className:n,hidden:r=!1,colspanAll:t=!1})=>r?null:ie.jsx("td",{className:Ff(au.columnStyle,n),colSpan:t?100:void 0,children:e}),Mf="_table_2cnpl_1",Vf="_rowHover_2cnpl_25",Gf={table:Mf,rowHover:Vf},wf=nn.bind(Gf),Bf="EMPTY";d.forwardRef(({headerTextCodes:e=[],headerColumnContent:n=[],classNameTable:r="",noHover:t=!1,hasGrayHeader:a=!1,children:s},i)=>ie.jsxs("table",{ref:i,className:wf("table",{[r]:r,rowHover:!t}),children:[ie.jsx("thead",{children:ie.jsxs(Lf,{isHeader:!0,noHover:t,hasGrayHeader:a,children:[e.map(o=>typeof o=="string"&&o.startsWith(Bf)?ie.jsx(Ca,{children:" "},o):ie.jsx(Ca,{children:ie.jsx(Se,{id:o})},o)),n.map(o=>ie.jsx(Ca,{children:o},o.key))]})}),ie.jsx("tbody",{children:Array.isArray(s)?d.Children.map(s,o=>d.cloneElement(o,{noHover:t})):d.cloneElement(s,{noHover:t})})]}));const Uf="_hidden_1pb4f_1",jf="_active_1pb4f_8",Hf="_activeRow_1pb4f_15 _active_1pb4f_8",qf="_toggleIcon_1pb4f_19",Yf="_colTopPadding_1pb4f_22",xf={hidden:Uf,active:jf,activeRow:Hf,toggleIcon:qf,colTopPadding:Yf};nn.bind(xf);je(lr);const Cf="_fourPx_qda5k_1",$f="_eightPx_qda5k_4",Jf="_sixteenPx_qda5k_7",Wf="_twentyPx_qda5k_10",zf="_thirtyTwoPx_qda5k_13",Zf="_fourtyPx_qda5k_16",Xf={fourPx:Cf,eightPx:$f,sixteenPx:Jf,twentyPx:Wf,thirtyTwoPx:zf,fourtyPx:Zf},Qf=nn.bind(Xf),Ne=({fourPx:e=!1,eightPx:n=!1,sixteenPx:r=!1,twentyPx:t=!1,thirtyTwoPx:a=!1,fourtyPx:s=!1})=>ie.jsx("div",{className:Qf({fourPx:e,eightPx:n,sixteenPx:r,twentyPx:t,thirtyTwoPx:a,fourtyPx:s})});je(lr);const eT="_divider_1t980_1",nT="_dividerParagraf_1t980_8",rT="_leftPanel_1t980_11",tT="_rightPanel_1t980_14",gs={divider:eT,dividerParagraf:nT,leftPanel:rT,rightPanel:tT},aT=nn.bind(gs),su=({spaceUnder:e,spaceAbove:n,leftPanel:r,rightPanel:t,dividerParagraf:a,className:s})=>ie.jsxs(ie.Fragment,{children:[n&&ie.jsx(Ne,{thirtyTwoPx:!0}),ie.jsx("div",{className:aT(s,{leftPanel:r,rightPanel:t}),children:ie.jsx("div",{className:a?gs.dividerParagraf:gs.divider})}),e&&ie.jsx(Ne,{thirtyTwoPx:!0})]});su.defaultProps={spaceUnder:!1,spaceAbove:!1,leftPanel:!1,rightPanel:!1,dividerParagraf:!1};const sT="_editedIcon_ulrjl_1",iT={editedIcon:sT},oT=nn.bind(iT),iu=({className:e=""})=>ie.jsx("span",{"data-testid":"editedIcon",className:oT("editedIcon",e),children:ie.jsx(Gk,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});var lT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ou={exports:{}},Pr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qi;function uT(){if(Qi)return Pr;Qi=1;var e=d,n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var g,E={},m=null,y=null;u!==void 0&&(m=""+u),l.key!==void 0&&(m=""+l.key),l.ref!==void 0&&(y=l.ref);for(g in l)t.call(l,g)&&!s.hasOwnProperty(g)&&(E[g]=l[g]);if(o&&o.defaultProps)for(g in l=o.defaultProps,l)E[g]===void 0&&(E[g]=l[g]);return{$$typeof:n,type:o,key:m,ref:y,props:E,_owner:a.current}}return Pr.Fragment=r,Pr.jsx=i,Pr.jsxs=i,Pr}ou.exports=uT();var on=ou.exports;const gT=e=>e.reduce((n,r,t)=>({...n,[t]:a=>r(a)||!0}),{}),kT=(e,n)=>{const r=n.split(".").reduce((t,a)=>t!==void 0?t[a]:t,e);return r==null?void 0:r.message};var lu={exports:{}};(function(e,n){(function(r,t){e.exports=t()})(lT,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d\d/,s=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},l=function(v){return(v=+v)+(v>68?1900:2e3)},u=function(v){return function(p){this[v]=+p}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(v){(this.zone||(this.zone={})).offset=function(p){if(!p||p==="Z")return 0;var N=p.match(/([+-]|\d\d)/g),R=60*N[1]+(+N[2]||0);return R===0?0:N[0]==="+"?-R:R}(v)}],E=function(v){var p=o[v];return p&&(p.indexOf?p:p.s.concat(p.f))},m=function(v,p){var N,R=o.meridiem;if(R){for(var D=1;D<=24;D+=1)if(v.indexOf(R(D,0,p))>-1){N=D>12;break}}else N=v===(p?"pm":"PM");return N},y={A:[i,function(v){this.afternoon=m(v,!1)}],a:[i,function(v){this.afternoon=m(v,!0)}],S:[/\d/,function(v){this.milliseconds=100*+v}],SS:[a,function(v){this.milliseconds=10*+v}],SSS:[/\d{3}/,function(v){this.milliseconds=+v}],s:[s,u("seconds")],ss:[s,u("seconds")],m:[s,u("minutes")],mm:[s,u("minutes")],H:[s,u("hours")],h:[s,u("hours")],HH:[s,u("hours")],hh:[s,u("hours")],D:[s,u("day")],DD:[a,u("day")],Do:[i,function(v){var p=o.ordinal,N=v.match(/\d+/);if(this.day=N[0],p)for(var R=1;R<=31;R+=1)p(R).replace(/\[|\]/g,"")===v&&(this.day=R)}],M:[s,u("month")],MM:[a,u("month")],MMM:[i,function(v){var p=E("months"),N=(E("monthsShort")||p.map(function(R){return R.slice(0,3)})).indexOf(v)+1;if(N<1)throw new Error;this.month=N%12||N}],MMMM:[i,function(v){var p=E("months").indexOf(v)+1;if(p<1)throw new Error;this.month=p%12||p}],Y:[/[+-]?\d+/,u("year")],YY:[a,function(v){this.year=l(v)}],YYYY:[/\d{4}/,u("year")],Z:g,ZZ:g};function b(v){var p,N;p=v,N=o&&o.formats;for(var R=(v=p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(j,M,K){var L=K&&K.toUpperCase();return M||N[K]||r[K]||N[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(H,c,_){return c||_.slice(1)})})).match(t),D=R.length,Y=0;Y<D;Y+=1){var w=R[Y],G=y[w],O=G&&G[0],h=G&&G[1];R[Y]=h?{regex:O,parser:h}:w.replace(/^\[|\]$/g,"")}return function(j){for(var M={},K=0,L=0;K<D;K+=1){var H=R[K];if(typeof H=="string")L+=H.length;else{var c=H.regex,_=H.parser,S=j.slice(L),V=c.exec(S)[0];_.call(M,V),j=j.replace(V,"")}}return function(P){var C=P.afternoon;if(C!==void 0){var W=P.hours;C?W<12&&(P.hours+=12):W===12&&(P.hours=0),delete P.afternoon}}(M),M}}return function(v,p,N){N.p.customParseFormat=!0,v&&v.parseTwoDigitYear&&(l=v.parseTwoDigitYear);var R=p.prototype,D=R.parse;R.parse=function(Y){var w=Y.date,G=Y.utc,O=Y.args;this.$u=G;var h=O[1];if(typeof h=="string"){var j=O[2]===!0,M=O[3]===!0,K=j||M,L=O[2];M&&(L=O[2]),o=this.$locale(),!j&&L&&(o=N.Ls[L]),this.$d=function(S,V,P){try{if(["x","X"].indexOf(V)>-1)return new Date((V==="X"?1e3:1)*S);var C=b(V)(S),W=C.year,te=C.month,ve=C.day,_e=C.hours,Oe=C.minutes,Ge=C.seconds,tn=C.milliseconds,We=C.zone,ze=new Date,Ye=ve||(W||te?1:ze.getDate()),De=W||ze.getFullYear(),we=0;W&&!te||(we=te>0?te-1:ze.getMonth());var kn=_e||0,En=Oe||0,ur=Ge||0,Dt=tn||0;return We?new Date(Date.UTC(De,we,Ye,kn,En,ur,Dt+60*We.offset*1e3)):P?new Date(Date.UTC(De,we,Ye,kn,En,ur,Dt)):new Date(De,we,Ye,kn,En,ur,Dt)}catch{return new Date("")}}(w,h,G),this.init(),L&&L!==!0&&(this.$L=this.locale(L).$L),K&&w!=this.format(h)&&(this.$d=new Date("")),o={}}else if(h instanceof Array)for(var H=h.length,c=1;c<=H;c+=1){O[1]=h[c-1];var _=N.apply(this,O);if(_.isValid()){this.$d=_.$d,this.$L=_.$L,this.init();break}c===H&&(this.$d=new Date(""))}else D.call(this,Y)}}})})(lu);var ET=lu.exports;const vT=dT(ET),mT="_readOnlyContainer_v0eco_1",fT="_readOnlyContent_v0eco_4",TT="_readOnlyContentCenter_v0eco_7",RT="_textarea_v0eco_11",yT="_space_v0eco_15",Gt={readOnlyContainer:mT,readOnlyContent:fT,readOnlyContentCenter:TT,textarea:RT,space:yT},AT=e=>e!=null&&e!=="",du=({label:e,value:n,isEdited:r,type:t,hideLabel:a,size:s})=>AT(n)?on.jsxs("div",{className:Gt.readOnlyContainer,children:[e&&!a&&on.jsx($e,{size:"small",children:e}),on.jsx("div",{className:t==="textarea"?Gt.textarea:"",children:on.jsxs(ed,{className:Gt.readOnlyContent,size:s,children:[n,r&&on.jsx(iu,{className:Gt.space})]})})]}):null;du.defaultProps={isEdited:!1};pt.extend(vT);const pT="_textAreaFieldWithBadges_bdz0b_1",cT="_etikettWrapper_bdz0b_4",eo={textAreaFieldWithBadges:pT,etikettWrapper:cT},Xt=({name:e,label:n,readOnly:r,maxLength:t,badges:a,validate:s=[],parse:i=E=>E,className:o,description:l,isEdited:u,...g})=>{const{formState:{errors:E}}=hr(),{field:m}=$g({name:e,rules:{validate:T.useMemo(()=>gT(s),[s])}});return r?on.jsx(du,{label:n,value:m.value,type:"textarea",isEdited:u,hideLabel:g.hideLabel}):on.jsxs("div",{className:a?eo.textAreaFieldWithBadges:null,children:[a&&on.jsx("div",{className:eo.etikettWrapper,children:a.map(({type:y,titleText:b})=>on.jsx(wE,{variant:y,size:"small",children:b},b))}),on.jsx(YE,{size:"small",label:n,description:l,className:o,autoComplete:"off",...m,onChange:y=>m.onChange(y.currentTarget.value!==""?i(y.currentTarget.value):null),value:m.value?m.value:"",error:kT(E,e),maxLength:t,...g})]})},uu=({formMethods:e,onSubmit:n,children:r,className:t,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:i}=e;return T.useEffect(()=>()=>{a&&a(i())},[]),on.jsx(Yg,{...e,children:on.jsx("form",{className:t,onSubmit:n?s(o=>n(o)):void 0,children:r})})},bT=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],_T=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],hT=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av NAV"}],ST=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],NT=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],OT=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],IT=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],DT=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],KT=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],LT=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],PT=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],FT=[{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Kontroll av saksopplysninger"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"VURDER_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fkta om arbeidsforhold med permisjon uten sluttdato"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttaksdokumentasjon"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"}],MT=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],VT=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],GT=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],wT=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],BT=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],UT=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],jT=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],HT=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],qT=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],YT=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],xT=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],CT=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],$T=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],JT=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],WT=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],zT=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],ZT=[{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST.KITTS OG NEVIS"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"}],XT=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],QT=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],eR=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],nR=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],rR=[{kode:"FODSELSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsdato"},{kode:"TILBAKETREKK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilbaketrekk"},{kode:"ER_ANKEFRIST_IKKE_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er ankefrist ikke overholdt"},{kode:"FNR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsnummer"},{kode:"TERMINBEKREFTELSE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Terminbekreftelse"},{kode:"TERMINDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Termindato"},{kode:"ANKE_RESULTAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Anke resultat"},{kode:"UTTAK_SPLITT_TIDSPERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resulterende periode ved splitting"},{kode:"UTTAK_TREKKDAGER_FLERBARN_KVOTE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager flerbarn kvote"},{kode:"OPPHOLDSRETT_IKKE_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har ikke oppholdsrett i EØS"},{kode:"TILRETTELEGGING_SKAL_BRUKES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avgjør om tilrettelegging skal brukes"},{kode:"ER_ANKE_IKKE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er anke ikke konkret."},{kode:"BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandling"},{kode:"UTTAK_GRADERING_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gradering av arbeidsforhold"},{kode:"ANKE_AVVIST_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til avvist anke"},{kode:"INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt"},{kode:"SOKNADSFRISTVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfristvilkåret"},{kode:"DAGPENGER_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dagpenger"},{kode:"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Til og med dato fastsatt av saksbehandler"},{kode:"SOKNADSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfrist"},{kode:"VILKAR_SOM_ANVENDES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vilkår som anvendes"},{kode:"PERIODE_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode f.o.m."},{kode:"UTTAK_PROSENT_UTBETALING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utbetalingsgrad"},{kode:"NYTT_REFUSJONSKRAV",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Nytt refusjonskrav"},{kode:"DODSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dødsdato"},{kode:"DOKUMENTASJON_FORELIGGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dokumentasjon foreligger"},{kode:"LØNNSENDRING_I_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Lønnsendring i beregningsperioden"},{kode:"AVKLART_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklart periode"},{kode:"SVANGERSKAPSPENGERVILKÅRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Svangerskapsvilkåret"},{kode:"KLAGE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aktivitet"},{kode:"UTTAK_STØNADSKONTOTYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stønadskontotype"},{kode:"ALENEOMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aleneomsorg"},{kode:"OMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorg"},{kode:"KONTAKTPERSON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontaktperson"},{kode:"ER_KLAGE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"TILRETTELEGGING_BEHOV_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilrettelegging behov FOM"},{kode:"ANNEN_FORELDER_RETT_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Annen forelder har opptjent rett fra land i EØS"},{kode:"AKTIVITETSKRAV_AVKLARING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklaring om mor er i aktivitet"},{kode:"FASTSETT_RESULTAT_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett resultat for perioden"},{kode:"FRILANSVIRKSOMHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilansvirksomhet"},{kode:"MANN_ADOPTERER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mann adopterer"},{kode:"ANDEL_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Andel i arbeid"},{kode:"DELVIS_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis tilrettelegging FOM"},{kode:"OPPTJENINGSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Opptjeningsvilkåret"},{kode:"ER_KLAGER_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"UTTAK_PERIODE_RESULTAT_TYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultattype for periode"},{kode:"UTLAND",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utland"},{kode:"BRUK_ANTALL_I_TPS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra folkeregisteret"},{kode:"AKTIVITET_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden med aktivitet"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{kode:"IKKE_OMSORG_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden Søker har ikke omsorg for barnet"},{kode:"DEKNINGSGRAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dekningsgrad"},{kode:"ER_ANKEN_IKKE_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"er anken ikke signert."},{kode:"SYKDOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Sykdom"},{kode:"UTSTEDTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utstedtdato"},{kode:"FODSELSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødsel"},{kode:"NAVN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Navn"},{kode:"UTTAK_TREKKDAGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager"},{kode:"PA_KLAGD_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Påklagd behandlingId"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Har søker inntekt fra etterlønn eller sluttpakke"},{kode:"OPPHOLDSRETT_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har oppholdsrett i EØS"},{kode:"RETT_TIL_FORELDREPENGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Rett til foreldrepenger"},{kode:"INNTEKTSKATEGORI",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori"},{kode:"ADOPTERER_ALENE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopterer alene"},{kode:"ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Arbeidsforhold"},{kode:"BRUKER_TVUNGEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker er under tvungen forvaltning"},{kode:"DELVIS_REFUSJON_FØR_STARTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis refusjon som utbetales før startdato for full refusjon"},{kode:"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring tidsbegrenset arbeidsforhold"},{kode:"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{kode:"MANDAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mandat"},{kode:"MOR_MOTTAR_UFØRETRYGD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar uføretrygd"},{kode:"HEL_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Hel tilrettelegging FOM"},{kode:"ORGANISASJONSNUMMER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Organisasjonsnummer"},{kode:"UTTAK_GRADERING_AVSLAG_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak avslag gradering"},{kode:"ER_KLAGEN_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"ER_KLAGEFRIST_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"OMSORGSVILKAR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"PA_ANKET_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"på anket behandlingsId."},{kode:"SLUTTE_ARBEID_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Slutte arbeid FOM"},{kode:"BRUK_ANTALL_I_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra søknad"},{kode:"KLAGE_RESULTAT_NFP",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat"},{kode:"FORDELING_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling for arbeidsforhold"},{kode:"UTTAK_SAMTIDIG_UTTAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Samtidig uttak"},{kode:"ER_SOKER_BOSATT_I_NORGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er søker bosatt i Norge?"},{kode:"FRILANS_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilans inntekt"},{kode:"FASTSETT_VIDERE_BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett videre behandling"},{kode:"BRUK_ANTALL_I_VEDTAKET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra vedtaket"},{kode:"OMSORGSOVERTAKELSESDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorgsovertakelsesdato"},{kode:"UTTAK_PERIODE_RESULTAT_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat årsak"},{kode:"ENDRING_NAERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring i næring"},{kode:"FORDELING_FOR_NY_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny andel med fordeling"},{kode:"BEHANDLENDE_ENHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandlende enhet"},{kode:"BRUTTO_NAERINGSINNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Brutto næringsinntekt"},{kode:"FORDELING_ETTER_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling etter besteberegning"},{kode:"STARTDATO_FRA_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Startdato fra søknad"},{kode:"NY_STARTDATO_REFUSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny startdato for refusjon"},{kode:"OVERSTYRT_VURDERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt vurdering"},{kode:"KLAGE_RESULTAT_KA",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ytelsesvedtak"},{kode:"FARESIGNALER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Faresignaler"},{kode:"NY_AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Det er lagt til ny aktivitet for"},{kode:"MOTTAR_YTELSE_FRILANS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for frilansaktiviteten"},{kode:"NY_REFUSJONSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny refusjonsfrist"},{kode:"OVERSTYRT_BEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt beregning"},{kode:"AVKLARSAKSOPPLYSNINGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklar saksopplysninger"},{kode:"INNTEKT_FRA_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt fra arbeidsforhold"},{kode:"SOKERSOPPLYSNINGSPLIKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søkers opplysningsplikt"},{kode:"SELVSTENDIG_NAERINGSDRIVENDE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Selvstendig næringsdrivende"},{kode:"GYLDIG_MEDLEM_FOLKETRYGDEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gyldig medlem i folketrygden"},{kode:"MOTTATT_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottatt dato"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Antall barn"},{kode:"EKTEFELLES_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ektefelles barn"},{kode:"MILITÆR_ELLER_SIVIL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"PERIODE_TOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode t.o.m."},{kode:"FORELDREANSVARSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"STILLINGSPROSENT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stillingsprosent"},{kode:"ADOPSJONSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopsjon"},{kode:"ANKE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"INNTEKTSKATEGORI_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori for andel"},{kode:"KONTROLL_AV_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontroll av besteberegning"},{kode:"MOR_MOTTAR_STØNAD_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar foreldrepenger fra land i EØS"},{kode:"ER_ANKER_IKKE_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Angir om anker ikke er part i saken."},{kode:"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er vilkårene for tilbakekreving oppfylt"},{kode:"NY_FORDELING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny fordeling for"},{kode:"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er det særlige grunner til reduksjon"},{kode:"MOTTAR_YTELSE_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for arbeid i {value}"},{kode:"TYPE_VERGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Type verge"}],tR=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"Aktivt D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],aR=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],sR=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],iR=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],oR=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],lR=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],dR=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],uR=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],gR=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],kR=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],ER=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],vR=[{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"}],mR=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],fR={RelasjonsRolleType:bT,HistorikkinnslagType:_T,UttakUtsettelseType:hT,FagsakYtelseType:ST,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:NT,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:OT,BeregningsgrunnlagAndeltype:IT,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:DT,KonsekvensForYtelsen:KT,Inntektskategori:LT,SivilstandType:PT,SkjermlenkeType:FT,FaktaOmBeregningTilfelle:MT,KlageVurdering:VT,HistorikkBegrunnelseType:GT,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:wT,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:BT,VergeType:UT,TilbakekrevingVidereBehandling:jT,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:HT,KlageHjemmel:qT,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:YT,ArbeidType:xT,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:CT,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:$T,FordelingPeriodeKilde:JT,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:WT,Arbeidskategori:zT,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:ZT,BehandlingType:XT,KontrollerAktivitetskravAvklaring:QT,InnsynResultatType:eR,MedlemskapType:nR,HistorikkEndretFeltType:rR,PersonstatusType:tR,Fagsystem:aR,AnkeVurdering:sR,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av NAV"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:iR,VirksomhetType:oR,MedlemskapDekningType:lR,ArbeidsforholdHandlingType:dR,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_33:[{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],SVP_VK_1:[{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'}],FP_VK_16:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}]},OpptjeningAktivitetType:uR,PermisjonsbeskrivelseType:gR,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:kR,MedlemskapManuellVurderingType:ER,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:vR,PeriodeResultatÅrsak:[{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]}],ForeldreType:mR};//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var gu;function q(){return gu.apply(null,arguments)}function TR(e){gu=e}function Tn(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function ar(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function le(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function js(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var n;for(n in e)if(le(e,n))return!1;return!0}function Ce(e){return e===void 0}function Hn(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function _t(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function ku(e,n){var r=[],t,a=e.length;for(t=0;t<a;++t)r.push(n(e[t],t));return r}function $n(e,n){for(var r in n)le(n,r)&&(e[r]=n[r]);return le(n,"toString")&&(e.toString=n.toString),le(n,"valueOf")&&(e.valueOf=n.valueOf),e}function Dn(e,n,r,t){return Mu(e,n,r,t,!0).utc()}function RR(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function X(e){return e._pf==null&&(e._pf=RR()),e._pf}var ks;Array.prototype.some?ks=Array.prototype.some:ks=function(e){var n=Object(this),r=n.length>>>0,t;for(t=0;t<r;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};function Hs(e){var n=null,r=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(n=X(e),r=ks.call(n.parsedDateParts,function(a){return a!=null}),t=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&r),e._strict&&(t=t&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function Aa(e){var n=Dn(NaN);return e!=null?$n(X(n),e):X(n).userInvalidated=!0,n}var no=q.momentProperties=[],$a=!1;function qs(e,n){var r,t,a,s=no.length;if(Ce(n._isAMomentObject)||(e._isAMomentObject=n._isAMomentObject),Ce(n._i)||(e._i=n._i),Ce(n._f)||(e._f=n._f),Ce(n._l)||(e._l=n._l),Ce(n._strict)||(e._strict=n._strict),Ce(n._tzm)||(e._tzm=n._tzm),Ce(n._isUTC)||(e._isUTC=n._isUTC),Ce(n._offset)||(e._offset=n._offset),Ce(n._pf)||(e._pf=X(n)),Ce(n._locale)||(e._locale=n._locale),s>0)for(r=0;r<s;r++)t=no[r],a=n[t],Ce(a)||(e[t]=a);return e}function ht(e){qs(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),$a===!1&&($a=!0,q.updateOffset(this),$a=!1)}function Rn(e){return e instanceof ht||e!=null&&e._isAMomentObject!=null}function Eu(e){q.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function un(e,n){var r=!0;return $n(function(){if(q.deprecationHandler!=null&&q.deprecationHandler(null,e),r){var t=[],a,s,i,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(i in arguments[0])le(arguments[0],i)&&(a+=i+": "+arguments[0][i]+", ");a=a.slice(0,-2)}else a=arguments[s];t.push(a)}Eu(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),r=!1}return n.apply(this,arguments)},n)}var ro={};function vu(e,n){q.deprecationHandler!=null&&q.deprecationHandler(e,n),ro[e]||(Eu(n),ro[e]=!0)}q.suppressDeprecationWarnings=!1;q.deprecationHandler=null;function Kn(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function yR(e){var n,r;for(r in e)le(e,r)&&(n=e[r],Kn(n)?this[r]=n:this["_"+r]=n);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Es(e,n){var r=$n({},e),t;for(t in n)le(n,t)&&(ar(e[t])&&ar(n[t])?(r[t]={},$n(r[t],e[t]),$n(r[t],n[t])):n[t]!=null?r[t]=n[t]:delete r[t]);for(t in e)le(e,t)&&!le(n,t)&&ar(e[t])&&(r[t]=$n({},r[t]));return r}function Ys(e){e!=null&&this.set(e)}var vs;Object.keys?vs=Object.keys:vs=function(e){var n,r=[];for(n in e)le(e,n)&&r.push(n);return r};var AR={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function pR(e,n,r){var t=this._calendar[e]||this._calendar.sameElse;return Kn(t)?t.call(n,r):t}function In(e,n,r){var t=""+Math.abs(e),a=n-t.length,s=e>=0;return(s?r?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+t}var xs=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,wt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ja={},yr={};function Z(e,n,r,t){var a=t;typeof t=="string"&&(a=function(){return this[t]()}),e&&(yr[e]=a),n&&(yr[n[0]]=function(){return In(a.apply(this,arguments),n[1],n[2])}),r&&(yr[r]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function cR(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function bR(e){var n=e.match(xs),r,t;for(r=0,t=n.length;r<t;r++)yr[n[r]]?n[r]=yr[n[r]]:n[r]=cR(n[r]);return function(a){var s="",i;for(i=0;i<t;i++)s+=Kn(n[i])?n[i].call(a,e):n[i];return s}}function Yt(e,n){return e.isValid()?(n=mu(n,e.localeData()),Ja[n]=Ja[n]||bR(n),Ja[n](e)):e.localeData().invalidDate()}function mu(e,n){var r=5;function t(a){return n.longDateFormat(a)||a}for(wt.lastIndex=0;r>=0&&wt.test(e);)e=e.replace(wt,t),wt.lastIndex=0,r-=1;return e}var _R={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function hR(e){var n=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return n||!r?n:(this._longDateFormat[e]=r.match(xs).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var SR="Invalid date";function NR(){return this._invalidDate}var OR="%d",IR=/\d{1,2}/;function DR(e){return this._ordinal.replace("%d",e)}var KR={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function LR(e,n,r,t){var a=this._relativeTime[r];return Kn(a)?a(e,n,r,t):a.replace(/%d/i,e)}function PR(e,n){var r=this._relativeTime[e>0?"future":"past"];return Kn(r)?r(n):r.replace(/%s/i,n)}var to={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function gn(e){return typeof e=="string"?to[e]||to[e.toLowerCase()]:void 0}function Cs(e){var n={},r,t;for(t in e)le(e,t)&&(r=gn(t),r&&(n[r]=e[t]));return n}var FR={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function MR(e){var n=[],r;for(r in e)le(e,r)&&n.push({unit:r,priority:FR[r]});return n.sort(function(t,a){return t.priority-a.priority}),n}var fu=/\d/,rn=/\d\d/,Tu=/\d{3}/,$s=/\d{4}/,pa=/[+-]?\d{6}/,Re=/\d\d?/,Ru=/\d\d\d\d?/,yu=/\d\d\d\d\d\d?/,ca=/\d{1,3}/,Js=/\d{1,4}/,ba=/[+-]?\d{1,6}/,Nr=/\d+/,_a=/[+-]?\d+/,VR=/Z|[+-]\d\d:?\d\d/gi,ha=/Z|[+-]\d\d(?::?\d\d)?/gi,GR=/[+-]?\d+(\.\d{1,3})?/,St=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Or=/^[1-9]\d?/,Ws=/^([1-9]\d|\d)/,Qt;Qt={};function x(e,n,r){Qt[e]=Kn(n)?n:function(t,a){return t&&r?r:n}}function wR(e,n){return le(Qt,e)?Qt[e](n._strict,n._locale):new RegExp(BR(e))}function BR(e){return Bn(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,r,t,a,s){return r||t||a||s}))}function Bn(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function sn(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function ne(e){var n=+e,r=0;return n!==0&&isFinite(n)&&(r=sn(n)),r}var ms={};function ke(e,n){var r,t=n,a;for(typeof e=="string"&&(e=[e]),Hn(n)&&(t=function(s,i){i[n]=ne(s)}),a=e.length,r=0;r<a;r++)ms[e[r]]=t}function Nt(e,n){ke(e,function(r,t,a,s){a._w=a._w||{},n(r,a._w,a,s)})}function UR(e,n,r){n!=null&&le(ms,e)&&ms[e](n,r._a,r,e)}function Sa(e){return e%4===0&&e%100!==0||e%400===0}var Ue=0,Vn=1,hn=2,Le=3,fn=4,Gn=5,nr=6,jR=7,HR=8;Z("Y",0,0,function(){var e=this.year();return e<=9999?In(e,4):"+"+e});Z(0,["YY",2],0,function(){return this.year()%100});Z(0,["YYYY",4],0,"year");Z(0,["YYYYY",5],0,"year");Z(0,["YYYYYY",6,!0],0,"year");x("Y",_a);x("YY",Re,rn);x("YYYY",Js,$s);x("YYYYY",ba,pa);x("YYYYYY",ba,pa);ke(["YYYYY","YYYYYY"],Ue);ke("YYYY",function(e,n){n[Ue]=e.length===2?q.parseTwoDigitYear(e):ne(e)});ke("YY",function(e,n){n[Ue]=q.parseTwoDigitYear(e)});ke("Y",function(e,n){n[Ue]=parseInt(e,10)});function Et(e){return Sa(e)?366:365}q.parseTwoDigitYear=function(e){return ne(e)+(ne(e)>68?1900:2e3)};var Au=Ir("FullYear",!0);function qR(){return Sa(this.year())}function Ir(e,n){return function(r){return r!=null?(pu(this,e,r),q.updateOffset(this,n),this):mt(this,e)}}function mt(e,n){if(!e.isValid())return NaN;var r=e._d,t=e._isUTC;switch(n){case"Milliseconds":return t?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return t?r.getUTCSeconds():r.getSeconds();case"Minutes":return t?r.getUTCMinutes():r.getMinutes();case"Hours":return t?r.getUTCHours():r.getHours();case"Date":return t?r.getUTCDate():r.getDate();case"Day":return t?r.getUTCDay():r.getDay();case"Month":return t?r.getUTCMonth():r.getMonth();case"FullYear":return t?r.getUTCFullYear():r.getFullYear();default:return NaN}}function pu(e,n,r){var t,a,s,i,o;if(!(!e.isValid()||isNaN(r))){switch(t=e._d,a=e._isUTC,n){case"Milliseconds":return void(a?t.setUTCMilliseconds(r):t.setMilliseconds(r));case"Seconds":return void(a?t.setUTCSeconds(r):t.setSeconds(r));case"Minutes":return void(a?t.setUTCMinutes(r):t.setMinutes(r));case"Hours":return void(a?t.setUTCHours(r):t.setHours(r));case"Date":return void(a?t.setUTCDate(r):t.setDate(r));case"FullYear":break;default:return}s=r,i=e.month(),o=e.date(),o=o===29&&i===1&&!Sa(s)?28:o,a?t.setUTCFullYear(s,i,o):t.setFullYear(s,i,o)}}function YR(e){return e=gn(e),Kn(this[e])?this[e]():this}function xR(e,n){if(typeof e=="object"){e=Cs(e);var r=MR(e),t,a=r.length;for(t=0;t<a;t++)this[r[t].unit](e[r[t].unit])}else if(e=gn(e),Kn(this[e]))return this[e](n);return this}function CR(e,n){return(e%n+n)%n}var Ie;Array.prototype.indexOf?Ie=Array.prototype.indexOf:Ie=function(e){var n;for(n=0;n<this.length;++n)if(this[n]===e)return n;return-1};function zs(e,n){if(isNaN(e)||isNaN(n))return NaN;var r=CR(n,12);return e+=(n-r)/12,r===1?Sa(e)?29:28:31-r%7%2}Z("M",["MM",2],"Mo",function(){return this.month()+1});Z("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});Z("MMMM",0,0,function(e){return this.localeData().months(this,e)});x("M",Re,Or);x("MM",Re,rn);x("MMM",function(e,n){return n.monthsShortRegex(e)});x("MMMM",function(e,n){return n.monthsRegex(e)});ke(["M","MM"],function(e,n){n[Vn]=ne(e)-1});ke(["MMM","MMMM"],function(e,n,r,t){var a=r._locale.monthsParse(e,t,r._strict);a!=null?n[Vn]=a:X(r).invalidMonth=e});var $R="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),cu="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),bu=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,JR=St,WR=St;function zR(e,n){return e?Tn(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||bu).test(n)?"format":"standalone"][e.month()]:Tn(this._months)?this._months:this._months.standalone}function ZR(e,n){return e?Tn(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[bu.test(n)?"format":"standalone"][e.month()]:Tn(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function XR(e,n,r){var t,a,s,i=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)s=Dn([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(s,"").toLocaleLowerCase();return r?n==="MMM"?(a=Ie.call(this._shortMonthsParse,i),a!==-1?a:null):(a=Ie.call(this._longMonthsParse,i),a!==-1?a:null):n==="MMM"?(a=Ie.call(this._shortMonthsParse,i),a!==-1?a:(a=Ie.call(this._longMonthsParse,i),a!==-1?a:null)):(a=Ie.call(this._longMonthsParse,i),a!==-1?a:(a=Ie.call(this._shortMonthsParse,i),a!==-1?a:null))}function QR(e,n,r){var t,a,s;if(this._monthsParseExact)return XR.call(this,e,n,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(a=Dn([2e3,t]),r&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!r&&!this._monthsParse[t]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[t]=new RegExp(s.replace(".",""),"i")),r&&n==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(r&&n==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!r&&this._monthsParse[t].test(e))return t}}function _u(e,n){if(!e.isValid())return e;if(typeof n=="string"){if(/^\d+$/.test(n))n=ne(n);else if(n=e.localeData().monthsParse(n),!Hn(n))return e}var r=n,t=e.date();return t=t<29?t:Math.min(t,zs(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,t):e._d.setMonth(r,t),e}function hu(e){return e!=null?(_u(this,e),q.updateOffset(this,!0),this):mt(this,"Month")}function ey(){return zs(this.year(),this.month())}function ny(e){return this._monthsParseExact?(le(this,"_monthsRegex")||Su.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(le(this,"_monthsShortRegex")||(this._monthsShortRegex=JR),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ry(e){return this._monthsParseExact?(le(this,"_monthsRegex")||Su.call(this),e?this._monthsStrictRegex:this._monthsRegex):(le(this,"_monthsRegex")||(this._monthsRegex=WR),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Su(){function e(l,u){return u.length-l.length}var n=[],r=[],t=[],a,s,i,o;for(a=0;a<12;a++)s=Dn([2e3,a]),i=Bn(this.monthsShort(s,"")),o=Bn(this.months(s,"")),n.push(i),r.push(o),t.push(o),t.push(i);n.sort(e),r.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function ty(e,n,r,t,a,s,i){var o;return e<100&&e>=0?(o=new Date(e+400,n,r,t,a,s,i),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,n,r,t,a,s,i),o}function ft(e){var n,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,n=new Date(Date.UTC.apply(null,r)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(e)):n=new Date(Date.UTC.apply(null,arguments)),n}function ea(e,n,r){var t=7+n-r,a=(7+ft(e,0,t).getUTCDay()-n)%7;return-a+t-1}function Nu(e,n,r,t,a){var s=(7+r-t)%7,i=ea(e,t,a),o=1+7*(n-1)+s+i,l,u;return o<=0?(l=e-1,u=Et(l)+o):o>Et(e)?(l=e+1,u=o-Et(e)):(l=e,u=o),{year:l,dayOfYear:u}}function Tt(e,n,r){var t=ea(e.year(),n,r),a=Math.floor((e.dayOfYear()-t-1)/7)+1,s,i;return a<1?(i=e.year()-1,s=a+Un(i,n,r)):a>Un(e.year(),n,r)?(s=a-Un(e.year(),n,r),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Un(e,n,r){var t=ea(e,n,r),a=ea(e+1,n,r);return(Et(e)-t+a)/7}Z("w",["ww",2],"wo","week");Z("W",["WW",2],"Wo","isoWeek");x("w",Re,Or);x("ww",Re,rn);x("W",Re,Or);x("WW",Re,rn);Nt(["w","ww","W","WW"],function(e,n,r,t){n[t.substr(0,1)]=ne(e)});function ay(e){return Tt(e,this._week.dow,this._week.doy).week}var sy={dow:0,doy:6};function iy(){return this._week.dow}function oy(){return this._week.doy}function ly(e){var n=this.localeData().week(this);return e==null?n:this.add((e-n)*7,"d")}function dy(e){var n=Tt(this,1,4).week;return e==null?n:this.add((e-n)*7,"d")}Z("d",0,"do","day");Z("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});Z("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});Z("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});Z("e",0,0,"weekday");Z("E",0,0,"isoWeekday");x("d",Re);x("e",Re);x("E",Re);x("dd",function(e,n){return n.weekdaysMinRegex(e)});x("ddd",function(e,n){return n.weekdaysShortRegex(e)});x("dddd",function(e,n){return n.weekdaysRegex(e)});Nt(["dd","ddd","dddd"],function(e,n,r,t){var a=r._locale.weekdaysParse(e,t,r._strict);a!=null?n.d=a:X(r).invalidWeekday=e});Nt(["d","e","E"],function(e,n,r,t){n[t]=ne(e)});function uy(e,n){return typeof e!="string"?e:isNaN(e)?(e=n.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function gy(e,n){return typeof e=="string"?n.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Zs(e,n){return e.slice(n,7).concat(e.slice(0,n))}var ky="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Ou="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ey="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),vy=St,my=St,fy=St;function Ty(e,n){var r=Tn(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return e===!0?Zs(r,this._week.dow):e?r[e.day()]:r}function Ry(e){return e===!0?Zs(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function yy(e){return e===!0?Zs(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ay(e,n,r){var t,a,s,i=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)s=Dn([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(s,"").toLocaleLowerCase();return r?n==="dddd"?(a=Ie.call(this._weekdaysParse,i),a!==-1?a:null):n==="ddd"?(a=Ie.call(this._shortWeekdaysParse,i),a!==-1?a:null):(a=Ie.call(this._minWeekdaysParse,i),a!==-1?a:null):n==="dddd"?(a=Ie.call(this._weekdaysParse,i),a!==-1||(a=Ie.call(this._shortWeekdaysParse,i),a!==-1)?a:(a=Ie.call(this._minWeekdaysParse,i),a!==-1?a:null)):n==="ddd"?(a=Ie.call(this._shortWeekdaysParse,i),a!==-1||(a=Ie.call(this._weekdaysParse,i),a!==-1)?a:(a=Ie.call(this._minWeekdaysParse,i),a!==-1?a:null)):(a=Ie.call(this._minWeekdaysParse,i),a!==-1||(a=Ie.call(this._weekdaysParse,i),a!==-1)?a:(a=Ie.call(this._shortWeekdaysParse,i),a!==-1?a:null))}function py(e,n,r){var t,a,s;if(this._weekdaysParseExact)return Ay.call(this,e,n,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(a=Dn([2e3,1]).day(t),r&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[t]=new RegExp(s.replace(".",""),"i")),r&&n==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(r&&n==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(r&&n==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!r&&this._weekdaysParse[t].test(e))return t}}function cy(e){if(!this.isValid())return e!=null?this:NaN;var n=mt(this,"Day");return e!=null?(e=uy(e,this.localeData()),this.add(e-n,"d")):n}function by(e){if(!this.isValid())return e!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return e==null?n:this.add(e-n,"d")}function _y(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var n=gy(e,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function hy(e){return this._weekdaysParseExact?(le(this,"_weekdaysRegex")||Xs.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(le(this,"_weekdaysRegex")||(this._weekdaysRegex=vy),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Sy(e){return this._weekdaysParseExact?(le(this,"_weekdaysRegex")||Xs.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(le(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=my),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ny(e){return this._weekdaysParseExact?(le(this,"_weekdaysRegex")||Xs.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(le(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=fy),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Xs(){function e(g,E){return E.length-g.length}var n=[],r=[],t=[],a=[],s,i,o,l,u;for(s=0;s<7;s++)i=Dn([2e3,1]).day(s),o=Bn(this.weekdaysMin(i,"")),l=Bn(this.weekdaysShort(i,"")),u=Bn(this.weekdays(i,"")),n.push(o),r.push(l),t.push(u),a.push(o),a.push(l),a.push(u);n.sort(e),r.sort(e),t.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Qs(){return this.hours()%12||12}function Oy(){return this.hours()||24}Z("H",["HH",2],0,"hour");Z("h",["hh",2],0,Qs);Z("k",["kk",2],0,Oy);Z("hmm",0,0,function(){return""+Qs.apply(this)+In(this.minutes(),2)});Z("hmmss",0,0,function(){return""+Qs.apply(this)+In(this.minutes(),2)+In(this.seconds(),2)});Z("Hmm",0,0,function(){return""+this.hours()+In(this.minutes(),2)});Z("Hmmss",0,0,function(){return""+this.hours()+In(this.minutes(),2)+In(this.seconds(),2)});function Iu(e,n){Z(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}Iu("a",!0);Iu("A",!1);function Du(e,n){return n._meridiemParse}x("a",Du);x("A",Du);x("H",Re,Ws);x("h",Re,Or);x("k",Re,Or);x("HH",Re,rn);x("hh",Re,rn);x("kk",Re,rn);x("hmm",Ru);x("hmmss",yu);x("Hmm",Ru);x("Hmmss",yu);ke(["H","HH"],Le);ke(["k","kk"],function(e,n,r){var t=ne(e);n[Le]=t===24?0:t});ke(["a","A"],function(e,n,r){r._isPm=r._locale.isPM(e),r._meridiem=e});ke(["h","hh"],function(e,n,r){n[Le]=ne(e),X(r).bigHour=!0});ke("hmm",function(e,n,r){var t=e.length-2;n[Le]=ne(e.substr(0,t)),n[fn]=ne(e.substr(t)),X(r).bigHour=!0});ke("hmmss",function(e,n,r){var t=e.length-4,a=e.length-2;n[Le]=ne(e.substr(0,t)),n[fn]=ne(e.substr(t,2)),n[Gn]=ne(e.substr(a)),X(r).bigHour=!0});ke("Hmm",function(e,n,r){var t=e.length-2;n[Le]=ne(e.substr(0,t)),n[fn]=ne(e.substr(t))});ke("Hmmss",function(e,n,r){var t=e.length-4,a=e.length-2;n[Le]=ne(e.substr(0,t)),n[fn]=ne(e.substr(t,2)),n[Gn]=ne(e.substr(a))});function Iy(e){return(e+"").toLowerCase().charAt(0)==="p"}var Dy=/[ap]\.?m?\.?/i,Ky=Ir("Hours",!0);function Ly(e,n,r){return e>11?r?"pm":"PM":r?"am":"AM"}var Ku={calendar:AR,longDateFormat:_R,invalidDate:SR,ordinal:OR,dayOfMonthOrdinalParse:IR,relativeTime:KR,months:$R,monthsShort:cu,week:sy,weekdays:ky,weekdaysMin:Ey,weekdaysShort:Ou,meridiemParse:Dy},pe={},Fr={},Rt;function Py(e,n){var r,t=Math.min(e.length,n.length);for(r=0;r<t;r+=1)if(e[r]!==n[r])return r;return t}function ao(e){return e&&e.toLowerCase().replace("_","-")}function Fy(e){for(var n=0,r,t,a,s;n<e.length;){for(s=ao(e[n]).split("-"),r=s.length,t=ao(e[n+1]),t=t?t.split("-"):null;r>0;){if(a=Na(s.slice(0,r).join("-")),a)return a;if(t&&t.length>=r&&Py(s,t)>=r-1)break;r--}n++}return Rt}function My(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Na(e){var n=null,r;if(pe[e]===void 0&&typeof module<"u"&&module&&module.exports&&My(e))try{n=Rt._abbr,r=require,r("./locale/"+e),Wn(n)}catch{pe[e]=null}return pe[e]}function Wn(e,n){var r;return e&&(Ce(n)?r=Yn(e):r=ei(e,n),r?Rt=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Rt._abbr}function ei(e,n){if(n!==null){var r,t=Ku;if(n.abbr=e,pe[e]!=null)vu("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=pe[e]._config;else if(n.parentLocale!=null)if(pe[n.parentLocale]!=null)t=pe[n.parentLocale]._config;else if(r=Na(n.parentLocale),r!=null)t=r._config;else return Fr[n.parentLocale]||(Fr[n.parentLocale]=[]),Fr[n.parentLocale].push({name:e,config:n}),null;return pe[e]=new Ys(Es(t,n)),Fr[e]&&Fr[e].forEach(function(a){ei(a.name,a.config)}),Wn(e),pe[e]}else return delete pe[e],null}function Vy(e,n){if(n!=null){var r,t,a=Ku;pe[e]!=null&&pe[e].parentLocale!=null?pe[e].set(Es(pe[e]._config,n)):(t=Na(e),t!=null&&(a=t._config),n=Es(a,n),t==null&&(n.abbr=e),r=new Ys(n),r.parentLocale=pe[e],pe[e]=r),Wn(e)}else pe[e]!=null&&(pe[e].parentLocale!=null?(pe[e]=pe[e].parentLocale,e===Wn()&&Wn(e)):pe[e]!=null&&delete pe[e]);return pe[e]}function Yn(e){var n;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Rt;if(!Tn(e)){if(n=Na(e),n)return n;e=[e]}return Fy(e)}function Gy(){return vs(pe)}function ni(e){var n,r=e._a;return r&&X(e).overflow===-2&&(n=r[Vn]<0||r[Vn]>11?Vn:r[hn]<1||r[hn]>zs(r[Ue],r[Vn])?hn:r[Le]<0||r[Le]>24||r[Le]===24&&(r[fn]!==0||r[Gn]!==0||r[nr]!==0)?Le:r[fn]<0||r[fn]>59?fn:r[Gn]<0||r[Gn]>59?Gn:r[nr]<0||r[nr]>999?nr:-1,X(e)._overflowDayOfYear&&(n<Ue||n>hn)&&(n=hn),X(e)._overflowWeeks&&n===-1&&(n=jR),X(e)._overflowWeekday&&n===-1&&(n=HR),X(e).overflow=n),e}var wy=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,By=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Uy=/Z|[+-]\d\d(?::?\d\d)?/,Bt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Wa=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],jy=/^\/?Date\((-?\d+)/i,Hy=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,qy={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Lu(e){var n,r,t=e._i,a=wy.exec(t)||By.exec(t),s,i,o,l,u=Bt.length,g=Wa.length;if(a){for(X(e).iso=!0,n=0,r=u;n<r;n++)if(Bt[n][1].exec(a[1])){i=Bt[n][0],s=Bt[n][2]!==!1;break}if(i==null){e._isValid=!1;return}if(a[3]){for(n=0,r=g;n<r;n++)if(Wa[n][1].exec(a[3])){o=(a[2]||" ")+Wa[n][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(Uy.exec(a[4]))l="Z";else{e._isValid=!1;return}e._f=i+(o||"")+(l||""),ti(e)}else e._isValid=!1}function Yy(e,n,r,t,a,s){var i=[xy(e),cu.indexOf(n),parseInt(r,10),parseInt(t,10),parseInt(a,10)];return s&&i.push(parseInt(s,10)),i}function xy(e){var n=parseInt(e,10);return n<=49?2e3+n:n<=999?1900+n:n}function Cy(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function $y(e,n,r){if(e){var t=Ou.indexOf(e),a=new Date(n[0],n[1],n[2]).getDay();if(t!==a)return X(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function Jy(e,n,r){if(e)return qy[e];if(n)return 0;var t=parseInt(r,10),a=t%100,s=(t-a)/100;return s*60+a}function Pu(e){var n=Hy.exec(Cy(e._i)),r;if(n){if(r=Yy(n[4],n[3],n[2],n[5],n[6],n[7]),!$y(n[1],r,e))return;e._a=r,e._tzm=Jy(n[8],n[9],n[10]),e._d=ft.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),X(e).rfc2822=!0}else e._isValid=!1}function Wy(e){var n=jy.exec(e._i);if(n!==null){e._d=new Date(+n[1]);return}if(Lu(e),e._isValid===!1)delete e._isValid;else return;if(Pu(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:q.createFromInputFallback(e)}q.createFromInputFallback=un("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function fr(e,n,r){return e??n??r}function zy(e){var n=new Date(q.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function ri(e){var n,r,t=[],a,s,i;if(!e._d){for(a=zy(e),e._w&&e._a[hn]==null&&e._a[Vn]==null&&Zy(e),e._dayOfYear!=null&&(i=fr(e._a[Ue],a[Ue]),(e._dayOfYear>Et(i)||e._dayOfYear===0)&&(X(e)._overflowDayOfYear=!0),r=ft(i,0,e._dayOfYear),e._a[Vn]=r.getUTCMonth(),e._a[hn]=r.getUTCDate()),n=0;n<3&&e._a[n]==null;++n)e._a[n]=t[n]=a[n];for(;n<7;n++)e._a[n]=t[n]=e._a[n]==null?n===2?1:0:e._a[n];e._a[Le]===24&&e._a[fn]===0&&e._a[Gn]===0&&e._a[nr]===0&&(e._nextDay=!0,e._a[Le]=0),e._d=(e._useUTC?ft:ty).apply(null,t),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Le]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(X(e).weekdayMismatch=!0)}}function Zy(e){var n,r,t,a,s,i,o,l,u;n=e._w,n.GG!=null||n.W!=null||n.E!=null?(s=1,i=4,r=fr(n.GG,e._a[Ue],Tt(Te(),1,4).year),t=fr(n.W,1),a=fr(n.E,1),(a<1||a>7)&&(l=!0)):(s=e._locale._week.dow,i=e._locale._week.doy,u=Tt(Te(),s,i),r=fr(n.gg,e._a[Ue],u.year),t=fr(n.w,u.week),n.d!=null?(a=n.d,(a<0||a>6)&&(l=!0)):n.e!=null?(a=n.e+s,(n.e<0||n.e>6)&&(l=!0)):a=s),t<1||t>Un(r,s,i)?X(e)._overflowWeeks=!0:l!=null?X(e)._overflowWeekday=!0:(o=Nu(r,t,a,s,i),e._a[Ue]=o.year,e._dayOfYear=o.dayOfYear)}q.ISO_8601=function(){};q.RFC_2822=function(){};function ti(e){if(e._f===q.ISO_8601){Lu(e);return}if(e._f===q.RFC_2822){Pu(e);return}e._a=[],X(e).empty=!0;var n=""+e._i,r,t,a,s,i,o=n.length,l=0,u,g;for(a=mu(e._f,e._locale).match(xs)||[],g=a.length,r=0;r<g;r++)s=a[r],t=(n.match(wR(s,e))||[])[0],t&&(i=n.substr(0,n.indexOf(t)),i.length>0&&X(e).unusedInput.push(i),n=n.slice(n.indexOf(t)+t.length),l+=t.length),yr[s]?(t?X(e).empty=!1:X(e).unusedTokens.push(s),UR(s,t,e)):e._strict&&!t&&X(e).unusedTokens.push(s);X(e).charsLeftOver=o-l,n.length>0&&X(e).unusedInput.push(n),e._a[Le]<=12&&X(e).bigHour===!0&&e._a[Le]>0&&(X(e).bigHour=void 0),X(e).parsedDateParts=e._a.slice(0),X(e).meridiem=e._meridiem,e._a[Le]=Xy(e._locale,e._a[Le],e._meridiem),u=X(e).era,u!==null&&(e._a[Ue]=e._locale.erasConvertYear(u,e._a[Ue])),ri(e),ni(e)}function Xy(e,n,r){var t;return r==null?n:e.meridiemHour!=null?e.meridiemHour(n,r):(e.isPM!=null&&(t=e.isPM(r),t&&n<12&&(n+=12),!t&&n===12&&(n=0)),n)}function Qy(e){var n,r,t,a,s,i,o=!1,l=e._f.length;if(l===0){X(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<l;a++)s=0,i=!1,n=qs({},e),e._useUTC!=null&&(n._useUTC=e._useUTC),n._f=e._f[a],ti(n),Hs(n)&&(i=!0),s+=X(n).charsLeftOver,s+=X(n).unusedTokens.length*10,X(n).score=s,o?s<t&&(t=s,r=n):(t==null||s<t||i)&&(t=s,r=n,i&&(o=!0));$n(e,r||n)}function eA(e){if(!e._d){var n=Cs(e._i),r=n.day===void 0?n.date:n.day;e._a=ku([n.year,n.month,r,n.hour,n.minute,n.second,n.millisecond],function(t){return t&&parseInt(t,10)}),ri(e)}}function nA(e){var n=new ht(ni(Fu(e)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function Fu(e){var n=e._i,r=e._f;return e._locale=e._locale||Yn(e._l),n===null||r===void 0&&n===""?Aa({nullInput:!0}):(typeof n=="string"&&(e._i=n=e._locale.preparse(n)),Rn(n)?new ht(ni(n)):(_t(n)?e._d=n:Tn(r)?Qy(e):r?ti(e):rA(e),Hs(e)||(e._d=null),e))}function rA(e){var n=e._i;Ce(n)?e._d=new Date(q.now()):_t(n)?e._d=new Date(n.valueOf()):typeof n=="string"?Wy(e):Tn(n)?(e._a=ku(n.slice(0),function(r){return parseInt(r,10)}),ri(e)):ar(n)?eA(e):Hn(n)?e._d=new Date(n):q.createFromInputFallback(e)}function Mu(e,n,r,t,a){var s={};return(n===!0||n===!1)&&(t=n,n=void 0),(r===!0||r===!1)&&(t=r,r=void 0),(ar(e)&&js(e)||Tn(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=r,s._i=e,s._f=n,s._strict=t,nA(s)}function Te(e,n,r,t){return Mu(e,n,r,t,!1)}var tA=un("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Te.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Aa()}),aA=un("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Te.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Aa()});function Vu(e,n){var r,t;if(n.length===1&&Tn(n[0])&&(n=n[0]),!n.length)return Te();for(r=n[0],t=1;t<n.length;++t)(!n[t].isValid()||n[t][e](r))&&(r=n[t]);return r}function sA(){var e=[].slice.call(arguments,0);return Vu("isBefore",e)}function iA(){var e=[].slice.call(arguments,0);return Vu("isAfter",e)}var oA=function(){return Date.now?Date.now():+new Date},Mr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function lA(e){var n,r=!1,t,a=Mr.length;for(n in e)if(le(e,n)&&!(Ie.call(Mr,n)!==-1&&(e[n]==null||!isNaN(e[n]))))return!1;for(t=0;t<a;++t)if(e[Mr[t]]){if(r)return!1;parseFloat(e[Mr[t]])!==ne(e[Mr[t]])&&(r=!0)}return!0}function dA(){return this._isValid}function uA(){return pn(NaN)}function Oa(e){var n=Cs(e),r=n.year||0,t=n.quarter||0,a=n.month||0,s=n.week||n.isoWeek||0,i=n.day||0,o=n.hour||0,l=n.minute||0,u=n.second||0,g=n.millisecond||0;this._isValid=lA(n),this._milliseconds=+g+u*1e3+l*6e4+o*1e3*60*60,this._days=+i+s*7,this._months=+a+t*3+r*12,this._data={},this._locale=Yn(),this._bubble()}function xt(e){return e instanceof Oa}function fs(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function gA(e,n,r){var t=Math.min(e.length,n.length),a=Math.abs(e.length-n.length),s=0,i;for(i=0;i<t;i++)(r&&e[i]!==n[i]||!r&&ne(e[i])!==ne(n[i]))&&s++;return s+a}function Gu(e,n){Z(e,0,0,function(){var r=this.utcOffset(),t="+";return r<0&&(r=-r,t="-"),t+In(~~(r/60),2)+n+In(~~r%60,2)})}Gu("Z",":");Gu("ZZ","");x("Z",ha);x("ZZ",ha);ke(["Z","ZZ"],function(e,n,r){r._useUTC=!0,r._tzm=ai(ha,e)});var kA=/([\+\-]|\d\d)/gi;function ai(e,n){var r=(n||"").match(e),t,a,s;return r===null?null:(t=r[r.length-1]||[],a=(t+"").match(kA)||["-",0,0],s=+(a[1]*60)+ne(a[2]),s===0?0:a[0]==="+"?s:-s)}function si(e,n){var r,t;return n._isUTC?(r=n.clone(),t=(Rn(e)||_t(e)?e.valueOf():Te(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+t),q.updateOffset(r,!1),r):Te(e).local()}function Ts(e){return-Math.round(e._d.getTimezoneOffset())}q.updateOffset=function(){};function EA(e,n,r){var t=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=ai(ha,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&n&&(a=Ts(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),t!==e&&(!n||this._changeInProgress?Uu(this,pn(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,q.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:Ts(this)}function vA(e,n){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,n),this):-this.utcOffset()}function mA(e){return this.utcOffset(0,e)}function fA(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Ts(this),"m")),this}function TA(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=ai(VR,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function RA(e){return this.isValid()?(e=e?Te(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function yA(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function AA(){if(!Ce(this._isDSTShifted))return this._isDSTShifted;var e={},n;return qs(e,this),e=Fu(e),e._a?(n=e._isUTC?Dn(e._a):Te(e._a),this._isDSTShifted=this.isValid()&&gA(e._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function pA(){return this.isValid()?!this._isUTC:!1}function cA(){return this.isValid()?this._isUTC:!1}function wu(){return this.isValid()?this._isUTC&&this._offset===0:!1}var bA=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,_A=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function pn(e,n){var r=e,t=null,a,s,i;return xt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:Hn(e)||!isNaN(+e)?(r={},n?r[n]=+e:r.milliseconds=+e):(t=bA.exec(e))?(a=t[1]==="-"?-1:1,r={y:0,d:ne(t[hn])*a,h:ne(t[Le])*a,m:ne(t[fn])*a,s:ne(t[Gn])*a,ms:ne(fs(t[nr]*1e3))*a}):(t=_A.exec(e))?(a=t[1]==="-"?-1:1,r={y:Qn(t[2],a),M:Qn(t[3],a),w:Qn(t[4],a),d:Qn(t[5],a),h:Qn(t[6],a),m:Qn(t[7],a),s:Qn(t[8],a)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(i=hA(Te(r.from),Te(r.to)),r={},r.ms=i.milliseconds,r.M=i.months),s=new Oa(r),xt(e)&&le(e,"_locale")&&(s._locale=e._locale),xt(e)&&le(e,"_isValid")&&(s._isValid=e._isValid),s}pn.fn=Oa.prototype;pn.invalid=uA;function Qn(e,n){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*n}function so(e,n){var r={};return r.months=n.month()-e.month()+(n.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(n)&&--r.months,r.milliseconds=+n-+e.clone().add(r.months,"M"),r}function hA(e,n){var r;return e.isValid()&&n.isValid()?(n=si(n,e),e.isBefore(n)?r=so(e,n):(r=so(n,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function Bu(e,n){return function(r,t){var a,s;return t!==null&&!isNaN(+t)&&(vu(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=r,r=t,t=s),a=pn(r,t),Uu(this,a,e),this}}function Uu(e,n,r,t){var a=n._milliseconds,s=fs(n._days),i=fs(n._months);e.isValid()&&(t=t??!0,i&&_u(e,mt(e,"Month")+i*r),s&&pu(e,"Date",mt(e,"Date")+s*r),a&&e._d.setTime(e._d.valueOf()+a*r),t&&q.updateOffset(e,s||i))}var SA=Bu(1,"add"),NA=Bu(-1,"subtract");function ju(e){return typeof e=="string"||e instanceof String}function OA(e){return Rn(e)||_t(e)||ju(e)||Hn(e)||DA(e)||IA(e)||e===null||e===void 0}function IA(e){var n=ar(e)&&!js(e),r=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,i=t.length;for(a=0;a<i;a+=1)s=t[a],r=r||le(e,s);return n&&r}function DA(e){var n=Tn(e),r=!1;return n&&(r=e.filter(function(t){return!Hn(t)&&ju(e)}).length===0),n&&r}function KA(e){var n=ar(e)&&!js(e),r=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<t.length;a+=1)s=t[a],r=r||le(e,s);return n&&r}function LA(e,n){var r=e.diff(n,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function PA(e,n){arguments.length===1&&(arguments[0]?OA(arguments[0])?(e=arguments[0],n=void 0):KA(arguments[0])&&(n=arguments[0],e=void 0):(e=void 0,n=void 0));var r=e||Te(),t=si(r,this).startOf("day"),a=q.calendarFormat(this,t)||"sameElse",s=n&&(Kn(n[a])?n[a].call(this,r):n[a]);return this.format(s||this.localeData().calendar(a,this,Te(r)))}function FA(){return new ht(this)}function MA(e,n){var r=Rn(e)?e:Te(e);return this.isValid()&&r.isValid()?(n=gn(n)||"millisecond",n==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(n).valueOf()):!1}function VA(e,n){var r=Rn(e)?e:Te(e);return this.isValid()&&r.isValid()?(n=gn(n)||"millisecond",n==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(n).valueOf()<r.valueOf()):!1}function GA(e,n,r,t){var a=Rn(e)?e:Te(e),s=Rn(n)?n:Te(n);return this.isValid()&&a.isValid()&&s.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(a,r):!this.isBefore(a,r))&&(t[1]===")"?this.isBefore(s,r):!this.isAfter(s,r))):!1}function wA(e,n){var r=Rn(e)?e:Te(e),t;return this.isValid()&&r.isValid()?(n=gn(n)||"millisecond",n==="millisecond"?this.valueOf()===r.valueOf():(t=r.valueOf(),this.clone().startOf(n).valueOf()<=t&&t<=this.clone().endOf(n).valueOf())):!1}function BA(e,n){return this.isSame(e,n)||this.isAfter(e,n)}function UA(e,n){return this.isSame(e,n)||this.isBefore(e,n)}function jA(e,n,r){var t,a,s;if(!this.isValid())return NaN;if(t=si(e,this),!t.isValid())return NaN;switch(a=(t.utcOffset()-this.utcOffset())*6e4,n=gn(n),n){case"year":s=Ct(this,t)/12;break;case"month":s=Ct(this,t);break;case"quarter":s=Ct(this,t)/3;break;case"second":s=(this-t)/1e3;break;case"minute":s=(this-t)/6e4;break;case"hour":s=(this-t)/36e5;break;case"day":s=(this-t-a)/864e5;break;case"week":s=(this-t-a)/6048e5;break;default:s=this-t}return r?s:sn(s)}function Ct(e,n){if(e.date()<n.date())return-Ct(n,e);var r=(n.year()-e.year())*12+(n.month()-e.month()),t=e.clone().add(r,"months"),a,s;return n-t<0?(a=e.clone().add(r-1,"months"),s=(n-t)/(t-a)):(a=e.clone().add(r+1,"months"),s=(n-t)/(a-t)),-(r+s)||0}q.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";q.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function HA(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function qA(e){if(!this.isValid())return null;var n=e!==!0,r=n?this.clone().utc():this;return r.year()<0||r.year()>9999?Yt(r,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Kn(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Yt(r,"Z")):Yt(r,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function YA(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",n="",r,t,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),r="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=n+'[")]',this.format(r+t+a+s)}function xA(e){e||(e=this.isUtc()?q.defaultFormatUtc:q.defaultFormat);var n=Yt(this,e);return this.localeData().postformat(n)}function CA(e,n){return this.isValid()&&(Rn(e)&&e.isValid()||Te(e).isValid())?pn({to:this,from:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function $A(e){return this.from(Te(),e)}function JA(e,n){return this.isValid()&&(Rn(e)&&e.isValid()||Te(e).isValid())?pn({from:this,to:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function WA(e){return this.to(Te(),e)}function Hu(e){var n;return e===void 0?this._locale._abbr:(n=Yn(e),n!=null&&(this._locale=n),this)}var qu=un("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Yu(){return this._locale}var na=1e3,Ar=60*na,ra=60*Ar,xu=(365*400+97)*24*ra;function pr(e,n){return(e%n+n)%n}function Cu(e,n,r){return e<100&&e>=0?new Date(e+400,n,r)-xu:new Date(e,n,r).valueOf()}function $u(e,n,r){return e<100&&e>=0?Date.UTC(e+400,n,r)-xu:Date.UTC(e,n,r)}function zA(e){var n,r;if(e=gn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?$u:Cu,e){case"year":n=r(this.year(),0,1);break;case"quarter":n=r(this.year(),this.month()-this.month()%3,1);break;case"month":n=r(this.year(),this.month(),1);break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=r(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=pr(n+(this._isUTC?0:this.utcOffset()*Ar),ra);break;case"minute":n=this._d.valueOf(),n-=pr(n,Ar);break;case"second":n=this._d.valueOf(),n-=pr(n,na);break}return this._d.setTime(n),q.updateOffset(this,!0),this}function ZA(e){var n,r;if(e=gn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?$u:Cu,e){case"year":n=r(this.year()+1,0,1)-1;break;case"quarter":n=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=r(this.year(),this.month()+1,1)-1;break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=ra-pr(n+(this._isUTC?0:this.utcOffset()*Ar),ra)-1;break;case"minute":n=this._d.valueOf(),n+=Ar-pr(n,Ar)-1;break;case"second":n=this._d.valueOf(),n+=na-pr(n,na)-1;break}return this._d.setTime(n),q.updateOffset(this,!0),this}function XA(){return this._d.valueOf()-(this._offset||0)*6e4}function QA(){return Math.floor(this.valueOf()/1e3)}function ep(){return new Date(this.valueOf())}function np(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function rp(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function tp(){return this.isValid()?this.toISOString():null}function ap(){return Hs(this)}function sp(){return $n({},X(this))}function ip(){return X(this).overflow}function op(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}Z("N",0,0,"eraAbbr");Z("NN",0,0,"eraAbbr");Z("NNN",0,0,"eraAbbr");Z("NNNN",0,0,"eraName");Z("NNNNN",0,0,"eraNarrow");Z("y",["y",1],"yo","eraYear");Z("y",["yy",2],0,"eraYear");Z("y",["yyy",3],0,"eraYear");Z("y",["yyyy",4],0,"eraYear");x("N",ii);x("NN",ii);x("NNN",ii);x("NNNN",Rp);x("NNNNN",yp);ke(["N","NN","NNN","NNNN","NNNNN"],function(e,n,r,t){var a=r._locale.erasParse(e,t,r._strict);a?X(r).era=a:X(r).invalidEra=e});x("y",Nr);x("yy",Nr);x("yyy",Nr);x("yyyy",Nr);x("yo",Ap);ke(["y","yy","yyy","yyyy"],Ue);ke(["yo"],function(e,n,r,t){var a;r._locale._eraYearOrdinalRegex&&(a=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?n[Ue]=r._locale.eraYearOrdinalParse(e,a):n[Ue]=parseInt(e,10)});function lp(e,n){var r,t,a,s=this._eras||Yn("en")._eras;for(r=0,t=s.length;r<t;++r){switch(typeof s[r].since){case"string":a=q(s[r].since).startOf("day"),s[r].since=a.valueOf();break}switch(typeof s[r].until){case"undefined":s[r].until=1/0;break;case"string":a=q(s[r].until).startOf("day").valueOf(),s[r].until=a.valueOf();break}}return s}function dp(e,n,r){var t,a,s=this.eras(),i,o,l;for(e=e.toUpperCase(),t=0,a=s.length;t<a;++t)if(i=s[t].name.toUpperCase(),o=s[t].abbr.toUpperCase(),l=s[t].narrow.toUpperCase(),r)switch(n){case"N":case"NN":case"NNN":if(o===e)return s[t];break;case"NNNN":if(i===e)return s[t];break;case"NNNNN":if(l===e)return s[t];break}else if([i,o,l].indexOf(e)>=0)return s[t]}function up(e,n){var r=e.since<=e.until?1:-1;return n===void 0?q(e.since).year():q(e.since).year()+(n-e.offset)*r}function gp(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].name;return""}function kp(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].narrow;return""}function Ep(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].abbr;return""}function vp(){var e,n,r,t,a=this.localeData().eras();for(e=0,n=a.length;e<n;++e)if(r=a[e].since<=a[e].until?1:-1,t=this.clone().startOf("day").valueOf(),a[e].since<=t&&t<=a[e].until||a[e].until<=t&&t<=a[e].since)return(this.year()-q(a[e].since).year())*r+a[e].offset;return this.year()}function mp(e){return le(this,"_erasNameRegex")||oi.call(this),e?this._erasNameRegex:this._erasRegex}function fp(e){return le(this,"_erasAbbrRegex")||oi.call(this),e?this._erasAbbrRegex:this._erasRegex}function Tp(e){return le(this,"_erasNarrowRegex")||oi.call(this),e?this._erasNarrowRegex:this._erasRegex}function ii(e,n){return n.erasAbbrRegex(e)}function Rp(e,n){return n.erasNameRegex(e)}function yp(e,n){return n.erasNarrowRegex(e)}function Ap(e,n){return n._eraYearOrdinalRegex||Nr}function oi(){var e=[],n=[],r=[],t=[],a,s,i,o,l,u=this.eras();for(a=0,s=u.length;a<s;++a)i=Bn(u[a].name),o=Bn(u[a].abbr),l=Bn(u[a].narrow),n.push(i),e.push(o),r.push(l),t.push(i),t.push(o),t.push(l);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}Z(0,["gg",2],0,function(){return this.weekYear()%100});Z(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Ia(e,n){Z(0,[e,e.length],0,n)}Ia("gggg","weekYear");Ia("ggggg","weekYear");Ia("GGGG","isoWeekYear");Ia("GGGGG","isoWeekYear");x("G",_a);x("g",_a);x("GG",Re,rn);x("gg",Re,rn);x("GGGG",Js,$s);x("gggg",Js,$s);x("GGGGG",ba,pa);x("ggggg",ba,pa);Nt(["gggg","ggggg","GGGG","GGGGG"],function(e,n,r,t){n[t.substr(0,2)]=ne(e)});Nt(["gg","GG"],function(e,n,r,t){n[t]=q.parseTwoDigitYear(e)});function pp(e){return Ju.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function cp(e){return Ju.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function bp(){return Un(this.year(),1,4)}function _p(){return Un(this.isoWeekYear(),1,4)}function hp(){var e=this.localeData()._week;return Un(this.year(),e.dow,e.doy)}function Sp(){var e=this.localeData()._week;return Un(this.weekYear(),e.dow,e.doy)}function Ju(e,n,r,t,a){var s;return e==null?Tt(this,t,a).year:(s=Un(e,t,a),n>s&&(n=s),Np.call(this,e,n,r,t,a))}function Np(e,n,r,t,a){var s=Nu(e,n,r,t,a),i=ft(s.year,0,s.dayOfYear);return this.year(i.getUTCFullYear()),this.month(i.getUTCMonth()),this.date(i.getUTCDate()),this}Z("Q",0,"Qo","quarter");x("Q",fu);ke("Q",function(e,n){n[Vn]=(ne(e)-1)*3});function Op(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}Z("D",["DD",2],"Do","date");x("D",Re,Or);x("DD",Re,rn);x("Do",function(e,n){return e?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient});ke(["D","DD"],hn);ke("Do",function(e,n){n[hn]=ne(e.match(Re)[0])});var Wu=Ir("Date",!0);Z("DDD",["DDDD",3],"DDDo","dayOfYear");x("DDD",ca);x("DDDD",Tu);ke(["DDD","DDDD"],function(e,n,r){r._dayOfYear=ne(e)});function Ip(e){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?n:this.add(e-n,"d")}Z("m",["mm",2],0,"minute");x("m",Re,Ws);x("mm",Re,rn);ke(["m","mm"],fn);var Dp=Ir("Minutes",!1);Z("s",["ss",2],0,"second");x("s",Re,Ws);x("ss",Re,rn);ke(["s","ss"],Gn);var Kp=Ir("Seconds",!1);Z("S",0,0,function(){return~~(this.millisecond()/100)});Z(0,["SS",2],0,function(){return~~(this.millisecond()/10)});Z(0,["SSS",3],0,"millisecond");Z(0,["SSSS",4],0,function(){return this.millisecond()*10});Z(0,["SSSSS",5],0,function(){return this.millisecond()*100});Z(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});Z(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});Z(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});Z(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});x("S",ca,fu);x("SS",ca,rn);x("SSS",ca,Tu);var Jn,zu;for(Jn="SSSS";Jn.length<=9;Jn+="S")x(Jn,Nr);function Lp(e,n){n[nr]=ne(("0."+e)*1e3)}for(Jn="S";Jn.length<=9;Jn+="S")ke(Jn,Lp);zu=Ir("Milliseconds",!1);Z("z",0,0,"zoneAbbr");Z("zz",0,0,"zoneName");function Pp(){return this._isUTC?"UTC":""}function Fp(){return this._isUTC?"Coordinated Universal Time":""}var I=ht.prototype;I.add=SA;I.calendar=PA;I.clone=FA;I.diff=jA;I.endOf=ZA;I.format=xA;I.from=CA;I.fromNow=$A;I.to=JA;I.toNow=WA;I.get=YR;I.invalidAt=ip;I.isAfter=MA;I.isBefore=VA;I.isBetween=GA;I.isSame=wA;I.isSameOrAfter=BA;I.isSameOrBefore=UA;I.isValid=ap;I.lang=qu;I.locale=Hu;I.localeData=Yu;I.max=aA;I.min=tA;I.parsingFlags=sp;I.set=xR;I.startOf=zA;I.subtract=NA;I.toArray=np;I.toObject=rp;I.toDate=ep;I.toISOString=qA;I.inspect=YA;typeof Symbol<"u"&&Symbol.for!=null&&(I[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});I.toJSON=tp;I.toString=HA;I.unix=QA;I.valueOf=XA;I.creationData=op;I.eraName=gp;I.eraNarrow=kp;I.eraAbbr=Ep;I.eraYear=vp;I.year=Au;I.isLeapYear=qR;I.weekYear=pp;I.isoWeekYear=cp;I.quarter=I.quarters=Op;I.month=hu;I.daysInMonth=ey;I.week=I.weeks=ly;I.isoWeek=I.isoWeeks=dy;I.weeksInYear=hp;I.weeksInWeekYear=Sp;I.isoWeeksInYear=bp;I.isoWeeksInISOWeekYear=_p;I.date=Wu;I.day=I.days=cy;I.weekday=by;I.isoWeekday=_y;I.dayOfYear=Ip;I.hour=I.hours=Ky;I.minute=I.minutes=Dp;I.second=I.seconds=Kp;I.millisecond=I.milliseconds=zu;I.utcOffset=EA;I.utc=mA;I.local=fA;I.parseZone=TA;I.hasAlignedHourOffset=RA;I.isDST=yA;I.isLocal=pA;I.isUtcOffset=cA;I.isUtc=wu;I.isUTC=wu;I.zoneAbbr=Pp;I.zoneName=Fp;I.dates=un("dates accessor is deprecated. Use date instead.",Wu);I.months=un("months accessor is deprecated. Use month instead",hu);I.years=un("years accessor is deprecated. Use year instead",Au);I.zone=un("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",vA);I.isDSTShifted=un("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",AA);function Mp(e){return Te(e*1e3)}function Vp(){return Te.apply(null,arguments).parseZone()}function Zu(e){return e}var de=Ys.prototype;de.calendar=pR;de.longDateFormat=hR;de.invalidDate=NR;de.ordinal=DR;de.preparse=Zu;de.postformat=Zu;de.relativeTime=LR;de.pastFuture=PR;de.set=yR;de.eras=lp;de.erasParse=dp;de.erasConvertYear=up;de.erasAbbrRegex=fp;de.erasNameRegex=mp;de.erasNarrowRegex=Tp;de.months=zR;de.monthsShort=ZR;de.monthsParse=QR;de.monthsRegex=ry;de.monthsShortRegex=ny;de.week=ay;de.firstDayOfYear=oy;de.firstDayOfWeek=iy;de.weekdays=Ty;de.weekdaysMin=yy;de.weekdaysShort=Ry;de.weekdaysParse=py;de.weekdaysRegex=hy;de.weekdaysShortRegex=Sy;de.weekdaysMinRegex=Ny;de.isPM=Iy;de.meridiem=Ly;function ta(e,n,r,t){var a=Yn(),s=Dn().set(t,n);return a[r](s,e)}function Xu(e,n,r){if(Hn(e)&&(n=e,e=void 0),e=e||"",n!=null)return ta(e,n,r,"month");var t,a=[];for(t=0;t<12;t++)a[t]=ta(e,t,r,"month");return a}function li(e,n,r,t){typeof e=="boolean"?(Hn(n)&&(r=n,n=void 0),n=n||""):(n=e,r=n,e=!1,Hn(n)&&(r=n,n=void 0),n=n||"");var a=Yn(),s=e?a._week.dow:0,i,o=[];if(r!=null)return ta(n,(r+s)%7,t,"day");for(i=0;i<7;i++)o[i]=ta(n,(i+s)%7,t,"day");return o}function Gp(e,n){return Xu(e,n,"months")}function wp(e,n){return Xu(e,n,"monthsShort")}function Bp(e,n,r){return li(e,n,r,"weekdays")}function Up(e,n,r){return li(e,n,r,"weekdaysShort")}function jp(e,n,r){return li(e,n,r,"weekdaysMin")}Wn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var n=e%10,r=ne(e%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return e+r}});q.lang=un("moment.lang is deprecated. Use moment.locale instead.",Wn);q.langData=un("moment.langData is deprecated. Use moment.localeData instead.",Yn);var Pn=Math.abs;function Hp(){var e=this._data;return this._milliseconds=Pn(this._milliseconds),this._days=Pn(this._days),this._months=Pn(this._months),e.milliseconds=Pn(e.milliseconds),e.seconds=Pn(e.seconds),e.minutes=Pn(e.minutes),e.hours=Pn(e.hours),e.months=Pn(e.months),e.years=Pn(e.years),this}function Qu(e,n,r,t){var a=pn(n,r);return e._milliseconds+=t*a._milliseconds,e._days+=t*a._days,e._months+=t*a._months,e._bubble()}function qp(e,n){return Qu(this,e,n,1)}function Yp(e,n){return Qu(this,e,n,-1)}function io(e){return e<0?Math.floor(e):Math.ceil(e)}function xp(){var e=this._milliseconds,n=this._days,r=this._months,t=this._data,a,s,i,o,l;return e>=0&&n>=0&&r>=0||e<=0&&n<=0&&r<=0||(e+=io(Rs(r)+n)*864e5,n=0,r=0),t.milliseconds=e%1e3,a=sn(e/1e3),t.seconds=a%60,s=sn(a/60),t.minutes=s%60,i=sn(s/60),t.hours=i%24,n+=sn(i/24),l=sn(eg(n)),r+=l,n-=io(Rs(l)),o=sn(r/12),r%=12,t.days=n,t.months=r,t.years=o,this}function eg(e){return e*4800/146097}function Rs(e){return e*146097/4800}function Cp(e){if(!this.isValid())return NaN;var n,r,t=this._milliseconds;if(e=gn(e),e==="month"||e==="quarter"||e==="year")switch(n=this._days+t/864e5,r=this._months+eg(n),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(n=this._days+Math.round(Rs(this._months)),e){case"week":return n/7+t/6048e5;case"day":return n+t/864e5;case"hour":return n*24+t/36e5;case"minute":return n*1440+t/6e4;case"second":return n*86400+t/1e3;case"millisecond":return Math.floor(n*864e5)+t;default:throw new Error("Unknown unit "+e)}}function xn(e){return function(){return this.as(e)}}var ng=xn("ms"),$p=xn("s"),Jp=xn("m"),Wp=xn("h"),zp=xn("d"),Zp=xn("w"),Xp=xn("M"),Qp=xn("Q"),ec=xn("y"),nc=ng;function rc(){return pn(this)}function tc(e){return e=gn(e),this.isValid()?this[e+"s"]():NaN}function dr(e){return function(){return this.isValid()?this._data[e]:NaN}}var ac=dr("milliseconds"),sc=dr("seconds"),ic=dr("minutes"),oc=dr("hours"),lc=dr("days"),dc=dr("months"),uc=dr("years");function gc(){return sn(this.days()/7)}var Mn=Math.round,Rr={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function kc(e,n,r,t,a){return a.relativeTime(n||1,!!r,e,t)}function Ec(e,n,r,t){var a=pn(e).abs(),s=Mn(a.as("s")),i=Mn(a.as("m")),o=Mn(a.as("h")),l=Mn(a.as("d")),u=Mn(a.as("M")),g=Mn(a.as("w")),E=Mn(a.as("y")),m=s<=r.ss&&["s",s]||s<r.s&&["ss",s]||i<=1&&["m"]||i<r.m&&["mm",i]||o<=1&&["h"]||o<r.h&&["hh",o]||l<=1&&["d"]||l<r.d&&["dd",l];return r.w!=null&&(m=m||g<=1&&["w"]||g<r.w&&["ww",g]),m=m||u<=1&&["M"]||u<r.M&&["MM",u]||E<=1&&["y"]||["yy",E],m[2]=n,m[3]=+e>0,m[4]=t,kc.apply(null,m)}function vc(e){return e===void 0?Mn:typeof e=="function"?(Mn=e,!0):!1}function mc(e,n){return Rr[e]===void 0?!1:n===void 0?Rr[e]:(Rr[e]=n,e==="s"&&(Rr.ss=n-1),!0)}function fc(e,n){if(!this.isValid())return this.localeData().invalidDate();var r=!1,t=Rr,a,s;return typeof e=="object"&&(n=e,e=!1),typeof e=="boolean"&&(r=e),typeof n=="object"&&(t=Object.assign({},Rr,n),n.s!=null&&n.ss==null&&(t.ss=n.s-1)),a=this.localeData(),s=Ec(this,!r,t,a),r&&(s=a.pastFuture(+this,s)),a.postformat(s)}var za=Math.abs;function vr(e){return(e>0)-(e<0)||+e}function Da(){if(!this.isValid())return this.localeData().invalidDate();var e=za(this._milliseconds)/1e3,n=za(this._days),r=za(this._months),t,a,s,i,o=this.asSeconds(),l,u,g,E;return o?(t=sn(e/60),a=sn(t/60),e%=60,t%=60,s=sn(r/12),r%=12,i=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",u=vr(this._months)!==vr(o)?"-":"",g=vr(this._days)!==vr(o)?"-":"",E=vr(this._milliseconds)!==vr(o)?"-":"",l+"P"+(s?u+s+"Y":"")+(r?u+r+"M":"")+(n?g+n+"D":"")+(a||t||e?"T":"")+(a?E+a+"H":"")+(t?E+t+"M":"")+(e?E+i+"S":"")):"P0D"}var se=Oa.prototype;se.isValid=dA;se.abs=Hp;se.add=qp;se.subtract=Yp;se.as=Cp;se.asMilliseconds=ng;se.asSeconds=$p;se.asMinutes=Jp;se.asHours=Wp;se.asDays=zp;se.asWeeks=Zp;se.asMonths=Xp;se.asQuarters=Qp;se.asYears=ec;se.valueOf=nc;se._bubble=xp;se.clone=rc;se.get=tc;se.milliseconds=ac;se.seconds=sc;se.minutes=ic;se.hours=oc;se.days=lc;se.weeks=gc;se.months=dc;se.years=uc;se.humanize=fc;se.toISOString=Da;se.toString=Da;se.toJSON=Da;se.locale=Hu;se.localeData=Yu;se.toIsoString=un("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Da);se.lang=qu;Z("X",0,0,"unix");Z("x",0,0,"valueOf");x("x",_a);x("X",GR);ke("X",function(e,n,r){r._d=new Date(parseFloat(e)*1e3)});ke("x",function(e,n,r){r._d=new Date(ne(e))});//! moment.js
q.version="2.30.1";TR(Te);q.fn=I;q.min=sA;q.max=iA;q.now=oA;q.utc=Dn;q.unix=Mp;q.months=Gp;q.isDate=_t;q.locale=Wn;q.invalid=Aa;q.duration=pn;q.isMoment=Rn;q.weekdays=Bp;q.parseZone=Vp;q.localeData=Yn;q.isDuration=xt;q.monthsShort=wp;q.weekdaysMin=jp;q.defineLocale=ei;q.updateLocale=Vy;q.locales=Gy;q.weekdaysShort=Up;q.normalizeUnits=gn;q.relativeTimeRounding=vc;q.relativeTimeThreshold=mc;q.calendarFormat=LA;q.prototype=I;q.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Tc={"ValidationMessage.NotEmpty":"Feltet må fylles ut","ValidationMessage.MinLength":"Du må skrive minst {length} tegn","ValidationMessage.MaxLength":"Du kan skrive maksimalt {length} tegn","ValidationMessage.MinValue":"Feltet må være større eller lik {length}","ValidationMessage.MaxValue":"Feltet må være mindre eller lik {length}","ValidationMessage.InvalidDate":"Dato må skrives slik : dd.mm.åååå","ValidationMessage.DateNotBeforeOrEqual":"Dato må være før eller lik {limit}","ValidationMessage.DateNotAfterOrEqual":"Dato må være etter eller lik {limit}","ValidationMessage.DateRangesOverlapping":"Perioder kan ikke overlappe i tid","ValidationMessage.DateRangesOverlappingPeriodTypes":"Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)","ValidationMessage.DatesNotEqual":"Dato må være lik {value}","ValidationMessage.InvalidInteger":"Tallet kan ikke ha desimaler","ValidationMessage.InvalidDecimal":"Tallet kan ikke inneholde mer enn to desimaler","ValidationMessage.InvalidDatesInPeriod":"Periode må skrives slik : dd.mm.åååå - dd.mm.åååå","ValidationMessage.InvalidPeriod":"Startdato må være før eller lik sluttdato","ValidationMessage.InvalidPeriodRange":"Periode er utenfor opptjeningsperioden","ValidationMessage.InvalidNumber":"Feltet kan kun inneholde tall","ValidationMessage.maxLengthOrFodselsnr":"Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)","ValidationMessage.Registrering.TerminEllerFoedselMessage":"Fyll ut informasjon om termindato eller fødselsdato","ValidationMessage.InvalidFodselsnummerFormat":"Feltet må være et fødselsnummer (11 siffer)","ValidationMessage.InvalidFodselsnummer":"Ugyldig fødselsnummer","ValidationMessage.SammeFodselsnummerSomSoker":"Fødselsnummer til den andre forelderen kan ikke være det samme som søker.","ValidationMessage.InvalidText":"Feltet inneholder ugyldige tegn: {text}","ValidationMessage.InvalidValue":"Feltet inneholder en ugyldig verdi: {value}","ValidationMessage.ArrayMinLength":"Listen må ha lengde større enn: {length}","ValidationMessage.InvalidSaksnummerOrFodselsnummerFormat":"Ugyldig saksnummer eller fødselsnummer","ValidationMessage.InvalidOrganisasjonsnummer":"Ugyldig organisasjonsnummer.","ValidationMessage.InvalidOrganisasjonsnummerOrFodselsnr":"Ugyldig organisasjonsnummer eller fødselsnummer.","ValidationMessage.NoWhiteSpace":"Feltet kan ikke inneholde mellomrom."},Ka=je(Tc),rg=()=>Ka.formatMessage({id:"ValidationMessage.NotEmpty"}),Rc=e=>Ka.formatMessage({id:"ValidationMessage.MinLength"},{length:e}),yc=e=>Ka.formatMessage({id:"ValidationMessage.MaxLength"},{length:e}),Ac=e=>Ka.formatMessage({id:"ValidationMessage.InvalidText"},{text:e}),pc=/^[0-9a-zA-ZæøåÆØÅAaÁáBbCcČčDdĐđEeFfGgHhIiJjKkLlMmNnŊŋOoPpRrSsŠšTtŦŧUuVvZzŽžéôèÉöüäÖÜÄ .'\-/%§!?@_()+:;,="&\n]*$/,cc=/[0-9a-zA-ZæøåÆØÅAaÁáBbCcČčDdĐđEeFfGgHhIiJjKkLlMmNnŊŋOoPpRrSsŠšTtŦŧUuVvZzŽžéôèÉöüäÖÜÄ .'\-/%§!?@_()+:;,="&\n]*/g,La=e=>e==null||e.toString().trim().length===0,oo=e=>La(e)?rg():void 0,bc=e=>n=>La(n)&&e(n)?rg():void 0,di=e=>n=>La(n)||n.toString().trim().length>=e?null:Rc(e),Pa=e=>n=>La(n)||n.toString().trim().length<=e?null:yc(e),aa=e=>{if(!pc.test(e)){const n=e.replace(cc,"");return Ac(n.replace(/[\t]/g,"Tabulatortegn"))}return null},Ot={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.VilkarDato":"Dato for opphør av medlemskapet","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"};je(Ot);je(Ot);var Fa=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Fa||{});Fa.BRUKERS_ANDEL;Fa.FRILANS;Fa.EGEN_NÆRING;je(Ot);je(Ot);je(Ot);const tg=(e,...n)=>{const r=n.find(t=>t===e);if(!r)throw Error(`Det finnes ikke enum for kode ${e}`);return r},_c=(e,n)=>e===jg.TILBAKEKR_OPPRETT&&(!!n.simuleringResultat.sumInntrekk||!!n.simuleringResultatUtenInntrekk),ag=(e,n,r)=>r!=null&&n?_c(r.videreBehandling,n)?"VedtakForm.OpprettTilbakekrOgInntrekk":vt(e)(r.videreBehandling,jn.TILBAKEKR_VIDERE_BEH):"",hc="_fritekstItem_1kqqb_1",Sc={fritekstItem:hc},Nc=Pa(1500),Oc=di(3),It=({behandlingsresultat:e,språkKode:n,isReadOnly:r,labelTextCode:t})=>{const a=An();return d.createElement(d.Fragment,null,!r&&d.createElement(d.Fragment,null,d.createElement(Ne,{sixteenPx:!0}),d.createElement(Xt,{name:"begrunnelse",label:a.formatMessage({id:t}),validate:[Oc,Nc,aa],maxLength:1500,readOnly:r,badges:[{type:"info",titleText:Us(n)}]})),r&&(e==null?void 0:e.avslagsarsakFritekst)&&d.createElement("span",null,d.createElement(Ne,{twentyPx:!0}),d.createElement(zn,null,a.formatMessage({id:t})),d.createElement(Ne,{eightPx:!0}),d.createElement("div",{className:Sc.fritekstItem},ir(e.avslagsarsakFritekst))))};It.__docgenInfo={description:"",methods:[],displayName:"VedtakFritekstPanel",props:{behandlingsresultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},labelTextCode:{required:!0,tsType:{name:"string"},description:""}}};const sg=({behandlingsresultat:e,ytelseTypeKode:n,språkKode:r,isReadOnly:t,skalBrukeOverstyrendeFritekstBrev:a,beregningErManueltFastsatt:s,resultatstruktur:i={}})=>{const o=An();return d.createElement(d.Fragment,null,n===ee.ENGANGSSTONAD&&i&&"antallBarn"in i&&d.createElement(tr,null,d.createElement(rr,null,d.createElement(Be,null,d.createElement(zn,null,o.formatMessage({id:"VedtakForm.beregnetTilkjentYtelse"})),d.createElement($e,{size:"small"},Wd(i.beregnetTilkjentYtelse))),d.createElement(Be,null,d.createElement(zn,null,o.formatMessage({id:"VedtakForm.AntallBarn"})),d.createElement($e,{size:"small"},i.antallBarn))),d.createElement(Ne,{sixteenPx:!0})),s&&!a&&d.createElement(It,{isReadOnly:t,språkKode:r,behandlingsresultat:e,labelTextCode:"VedtakForm.Fritekst.Beregningsgrunnlag"}))};sg.__docgenInfo={description:"",methods:[],displayName:"VedtakInnvilgetPanel",props:{resultatstruktur:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
}`,signature:{properties:[{key:"opphoersdato",value:{name:"string",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}`,signature:{properties:[{key:"beregnetTilkjentYtelse",value:{name:"number",required:!0}},{key:"satsVerdi",value:{name:"number",required:!0}},{key:"antallBarn",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}>`}]},description:"",defaultValue:{value:"{}",computed:!1}},behandlingsresultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`},description:""},ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""}}};const ys=(e,n,r)=>{const t=e.filter(s=>s.vilkarStatus===sa.IKKE_OPPFYLT);if(t.length===0)return d.createElement(Se,{id:"VedtakForm.UttaksperioderIkkeGyldig"});if(!(r!=null&&r.avslagsarsak))throw new Error("Behandlingsresultat eller avslagsårsak finnes ikke");return`${n(t[0].vilkarType,jn.VILKAR_TYPE)}: ${n(r.avslagsarsak,jn.AVSLAGSARSAK,t[0].vilkarType)}`},Ic=[],ig=({vilkar:e=Ic,behandlingsresultat:n,språkKode:r,isReadOnly:t,alleKodeverk:a,beregningErManueltFastsatt:s,skalBrukeOverstyrendeFritekstBrev:i})=>{const o=An(),l=vt(a),u=s?"VedtakForm.Fritekst.Beregningsgrunnlag":"VedtakForm.Fritekst";return d.createElement(d.Fragment,null,ys(e,l,n)&&d.createElement("div",null,d.createElement($e,{size:"small"},o.formatMessage({id:"VedtakForm.ArsakTilAvslag"})),d.createElement(ln,{size:"small"},ys(e,l,n)),d.createElement(Ne,{sixteenPx:!0})),!i&&d.createElement(It,{isReadOnly:t,språkKode:r,behandlingsresultat:n,labelTextCode:u}))};ys.__docgenInfo={description:"",methods:[],displayName:"getAvslagArsak"};ig.__docgenInfo={description:"",methods:[],displayName:"VedtakAvslagPanel",props:{vilkar:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Vilkar[]"},description:"",defaultValue:{value:"[]",computed:!1}},behandlingsresultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};var As=(e=>(e.PENDING="PENDING",e.COMPLETE="COMPLETE",e.DELAYED="DELAYED",e.CANCELLED="CANCELLED",e.HALTED="HALTED",e))(As||{});const Dc="_line_7rsxc_1",Kc="_smallTextArea_7rsxc_7",Lc="_pil_7rsxc_11",Pc="_space_7rsxc_15",Fc="_avsnittOverskrift_7rsxc_19",mr={line:Dc,smallTextArea:Kc,pil:Lc,space:Pc,avsnittOverskrift:Fc},Mc=Pa(200),Vc=Pa(1e4),lo=di(3),og=({forhåndsvisOverstyrtBrev:e,isReadOnly:n,språkKode:r,skalViseLink:t})=>{const a=An();return d.createElement(d.Fragment,null,d.createElement(Ne,{thirtyTwoPx:!0}),d.createElement(su,null),d.createElement(Ne,{thirtyTwoPx:!0}),d.createElement(tr,null,d.createElement(rr,null,d.createElement(Be,{className:mr.space},d.createElement($e,{size:"small",className:mr.avsnittOverskrift},d.createElement(Se,{id:"FritekstBrevPanel.ManueltVedtaksbrev"}))),d.createElement(Be,{className:mr.space},d.createElement(zn,null,Us(r))),d.createElement(Be,null,!n&&t&&d.createElement(Qa,{href:"#",onClick:e},d.createElement("span",null,d.createElement(Se,{id:"FritekstBrevPanel.ForhandsvisManueltVedtaksbrev"})),d.createElement(rd,{className:mr.pil}))))),d.createElement("hr",{className:mr.line}),d.createElement(Ne,{twentyPx:!0}),!n&&d.createElement(od,{variant:"info",size:"small"},d.createElement($e,{size:"small"},d.createElement(Se,{id:"VedtakFellesPanel.Forklaring"}))),d.createElement(Ne,{sixteenPx:!0}),d.createElement(Xt,{name:"overskrift",label:a.formatMessage({id:"VedtakForm.Overskrift"}),validate:[oo,lo,Mc,aa],maxLength:200,readOnly:n,className:mr.smallTextArea}),d.createElement(Ne,{thirtyTwoPx:!0}),d.createElement(Xt,{name:"brødtekst",label:a.formatMessage({id:"VedtakForm.Innhold"}),validate:[oo,lo,Vc,aa],maxLength:1e4,readOnly:n,parse:s=>s.toString().replaceAll(new RegExp("\\p{Dash_Punctuation}","gu"),"-").replaceAll("	"," ")}),n&&d.createElement(d.Fragment,null,d.createElement(Ne,{sixteenPx:!0}),d.createElement(tr,null,d.createElement(rr,null,d.createElement(Be,null,d.createElement(iu,null)),d.createElement(Be,null,d.createElement(ln,{size:"small"},d.createElement(Se,{id:"FritekstBrevPanel.Endret"})))))))};og.__docgenInfo={description:"",methods:[],displayName:"ManueltVedtaksbrevPanel",props:{forhåndsvisOverstyrtBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},skalViseLink:{required:!0,tsType:{name:"boolean"},description:""}}};const Gc=(e,n)=>{const r=[];return n&&n.some(t=>t.definisjon===ce.VURDERE_ANNEN_YTELSE)&&r.push(e.formatMessage({id:"VedtakForm.VurderAnnenYtelse"})),n&&n.some(t=>t.definisjon===ce.VURDERE_DOKUMENT)&&r.push(e.formatMessage({id:"VedtakForm.VurderDokument"})),n&&n.some(t=>t.definisjon===ce.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST)&&r.push(e.formatMessage({id:"VedtakForm.KontrollerRevurderingsbehandling"})),r},lg=({isReadOnly:e,aksjonspunkter:n})=>{const r=An(),t=Gc(r,n);return!e&&t.length>0?d.createElement(d.Fragment,null,d.createElement(Ne,{sixteenPx:!0}),d.createElement(od,{variant:"info",size:"small"},d.createElement(ln,{size:"small"},d.createElement(Se,{id:"VedtakHelpTextPanel.Vurder"})),d.createElement("ul",null,t.map(a=>d.createElement("li",{key:a},d.createElement(ln,{size:"small"},a)))))):null};lg.__docgenInfo={description:"",methods:[],displayName:"VedtakHelpTextPanel",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""}}};const wc="_pil_gjh8k_1",Bc="_blyant_gjh8k_5",Uc="_blyantDisablet_gjh8k_9",jc="_status_gjh8k_16",Hc="_innvilgetImage_gjh8k_21",qc="_avslattImage_gjh8k_27",Yc="_disabletLink_gjh8k_33",xc="_space_gjh8k_38",Fn={pil:wc,blyant:Bc,blyantDisablet:Uc,status:jc,innvilgetImage:Hc,avslattImage:qc,disabletLink:Yc,space:xc},Cc=e=>e===Xe.AVSLUTTET||e===Xe.IVERKSETTER_VEDTAK?"VedtakForm.vedtak":"VedtakForm.ForslagTilVedtak",$c=e=>e===Xe.BEHANDLING_UTREDES,Jc=(e,n)=>e&&e.some(r=>r.definisjon===ce.FORESLA_VEDTAK)||n?"VedtakForm.TilGodkjenning":"VedtakForm.FattVedtak",Wc=e=>e.avslagsarsak?e.avslagsarsak!==Mg.INGEN_BEREGNINGSREGLER:!0,zc=(e,n)=>{if(!n)return!0;const{konsekvenserForYtelsen:r}=n;return!Array.isArray(r)||r.length!==1?!0:!e.some(t=>t===r[0])},ui=({behandling:e,aksjonspunkter:n,readOnly:r,renderPanel:t,previewAutomatiskBrev:a,previewOverstyrtBrev:s,tilbakekrevingtekst:i,erBehandlingEtterKlage:o,vedtakstatusTekst:l})=>{const u=An(),{setValue:g,formState:{isSubmitting:E}}=hr(),{behandlingsresultat:m,behandlingPaaVent:y,sprakkode:b,status:v,behandlingHenlagt:p,uuid:N,taskStatus:R}=e;if(!m)throw new Error(`behandlingsresultat finnes ikke på behandling ${N}`);const[D,Y]=T.useState(!!m.vedtaksbrev&&m.vedtaksbrev==="FRITEKST"),[w,G]=T.useState(!1),O=T.useCallback(_=>{Y(!0),_.preventDefault()},[]),h=T.useCallback(()=>{Y(!1),G(!1),g("overskrift",void 0),g("brødtekst",void 0)},[]),j=ps(m.type),M=cs(m.type),K=Ml(m.type),L=Wc(m),H=!p&&(R==null?void 0:R.status)!==As.HALTED&&(R==null?void 0:R.status)!==As.DELAYED,c=T.useMemo(()=>zc([Qe.ENDRING_I_FORDELING_AV_YTELSEN,Qe.INGEN_ENDRING],m),[m]);return d.createElement(d.Fragment,null,d.createElement(qm,{text:u.formatMessage({id:"VedtakFellesPanel.Forkast"}),okButtonText:u.formatMessage({id:"VedtakFellesPanel.Ok"}),showModal:w,cancel:()=>G(!1),submit:h}),d.createElement(tr,null,d.createElement(rr,null,v===Xe.AVSLUTTET&&d.createElement(Be,null,j&&d.createElement(td,{className:Fn.innvilgetImage}),!j&&d.createElement(sd,{className:Fn.avslattImage})),d.createElement(Be,null,d.createElement(Is,{size:"small"},d.createElement(Se,{id:Cc(v)}))))),d.createElement(Ne,{eightPx:!0}),d.createElement(tr,null,d.createElement(rr,null,d.createElement(Be,{className:Fn.space},d.createElement($e,{size:"small"},l,i&&`. ${u.formatMessage({id:i})}`)),d.createElement(Be,{className:Fn.space},L&&c&&H&&d.createElement(Qa,{href:"#",onClick:a},d.createElement("span",null,d.createElement(Se,{id:o?"VedtakFellesPanel.UtkastVedtaksbrev":"VedtakFellesPanel.AutomatiskVedtaksbrev"})),d.createElement(rd,{className:Fn.pil})),L&&c&&!H&&d.createElement(ln,{size:"small",className:Fn.disabletLink},d.createElement(Se,{id:o?"VedtakFellesPanel.UtkastVedtaksbrev":"VedtakFellesPanel.AutomatiskVedtaksbrev"}))),d.createElement(Be,null,!r&&!D&&d.createElement(Qa,{href:"#",onClick:O},d.createElement(Si,{className:Fn.blyant}),d.createElement("span",null,d.createElement(Se,{id:"VedtakFellesPanel.RedigerVedtaksbrev"}))),(r||D)&&d.createElement(d.Fragment,null,d.createElement(Si,{className:Fn.blyantDisablet}),d.createElement(ln,{size:"small",className:Fn.disabletLink},d.createElement(Se,{id:"VedtakFellesPanel.RedigerVedtaksbrev"})))))),d.createElement(lg,{aksjonspunkter:n,isReadOnly:r}),d.createElement(Ne,{twentyPx:!0}),t(D,j,M,K),D&&d.createElement(og,{isReadOnly:r,språkKode:b,forhåndsvisOverstyrtBrev:s,skalViseLink:L}),$c(v)&&d.createElement(d.Fragment,null,d.createElement(Ne,{twentyPx:!0}),d.createElement(tr,null,d.createElement(rr,null,d.createElement(Be,null,!r&&d.createElement(cr,{variant:"primary",size:"small",disabled:y||E,loading:E},d.createElement(Se,{id:Jc(n,D)}))),D&&d.createElement(Be,null,d.createElement(cr,{size:"small",variant:"secondary",onClick:()=>G(!0),type:"button"},d.createElement(Se,{id:"VedtakFellesPanel.ForkastManueltBrev"})))))))};ui.__docgenInfo={description:"",methods:[],displayName:"VedtakFellesPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erBehandlingEtterKlage:{required:!0,tsType:{name:"boolean"},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},renderPanel:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  skalBrukeManueltBrev: boolean,
  erInnvilget: boolean,
  erAvslatt: boolean,
  erOpphor?: boolean,
) => ReactNode`,signature:{arguments:[{type:{name:"boolean"},name:"skalBrukeManueltBrev"},{type:{name:"boolean"},name:"erInnvilget"},{type:{name:"boolean"},name:"erAvslatt"},{type:{name:"boolean"},name:"erOpphor"}],return:{name:"ReactNode"}}},description:""},previewAutomatiskBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},previewOverstyrtBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},tilbakekrevingtekst:{required:!1,tsType:{name:"string"},description:""},vedtakstatusTekst:{required:!1,tsType:{name:"string"},description:""}}};const Zc=(e,n)=>e===Q.KLAGE_YTELSESVEDTAK_OPPHEVET?"VedtakForm.ResultatKlageYtelsesvedtakOpphevet":e===Q.KLAGE_AVVIST?"VedtakForm.ResultatKlageAvvist":n===ee.ENGANGSSTONAD?"VedtakForm.EngangsstonadIkkeInnvilget":n===ee.SVANGERSKAPSPENGER?"VedtakForm.SvangerskapspengerIkkeInnvilget":"VedtakForm.ForeldrepengerIkkeInnvilget",Xc=(e,n)=>e===Q.KLAGE_YTELSESVEDTAK_STADFESTET?"VedtakForm.ResultatOpprettholdVedtak":Bg(e)?"VedtakForm.ResultatKlageMedhold":n===ee.ENGANGSSTONAD?"VedtakForm.VilkarStatusInnvilgetEngangsstonad":n===ee.SVANGERSKAPSPENGER?"VedtakForm.SvangerskapspengerInnvilget":"VedtakForm.VilkarStatusInnvilgetForeldrepenger",uo=(e,n,r,t,a,s)=>i=>{i.preventDefault();const o=e?!!a&&!!s:!!t;if(r(),!e||o){const l={fritekst:e?a:t,dokumentMal:e?Vl.FRITEKST:void 0,tittel:e?s:void 0,gjelderVedtak:!0,automatiskVedtaksbrev:e?void 0:!0};n(l)}},Qc=(e=[])=>e.map(({behandlingArsakType:n})=>n).some(n=>n===wn.ETTER_KLAGE||n===wn.KLAGE_U_INNTK||n===wn.KLAGE_M_INNTK),eb=(e,n,r)=>r&&ps(r.type)?e.formatMessage({id:Xc(r.type,n)}):r&&cs(r.type)?e.formatMessage({id:Zc(r.type,n)}):"",nb=e=>e.aksjonspunktKoder.map(n=>({kode:tg(n,ce.FORESLA_VEDTAK,ce.FORESLA_VEDTAK_MANUELT,ce.VEDTAK_UTEN_TOTRINNSKONTROLL,ce.VURDERE_ANNEN_YTELSE,ce.VURDERE_DOKUMENT),begrunnelse:e.begrunnelse,fritekstBrev:e.brødtekst,skalBrukeOverstyrendeFritekstBrev:!!e.brødtekst,overskrift:e.overskrift})),rb=(e,n)=>{var r;if(n)return(r=e.behandlingsresultat)!=null&&r.avslagsarsakFritekst?ir(e.behandlingsresultat.avslagsarsakFritekst):void 0},tb=(e,n,r)=>{var t,a;return{beregningErManueltFastsatt:r,aksjonspunktKoder:e.filter(s=>s.kanLoses).map(s=>s.definisjon),overskrift:ir((t=n.behandlingsresultat)==null?void 0:t.overskrift),brødtekst:ir((a=n.behandlingsresultat)==null?void 0:a.fritekstbrev),begrunnelse:rb(n,r)}},dg=({behandling:e,readOnly:n,aksjonspunkter:r,previewCallback:t,ytelseTypeKode:a,resultatstruktur:s,alleKodeverk:i,tilbakekrevingvalg:o,simuleringResultat:l,vilkar:u,beregningErManueltFastsatt:g,submitCallback:E,formData:m,setFormData:y})=>{const b=An(),v=Xl({defaultValues:m||tb(r,e,g)}),p=v.watch("begrunnelse"),N=v.watch("overskrift"),R=v.watch("brødtekst"),{trigger:D}=v,{behandlingsresultat:Y,sprakkode:w}=e,G=T.useMemo(()=>Qc(e.behandlingÅrsaker),[e.behandlingÅrsaker]),O=T.useMemo(()=>ag(i,l,o),[l,o]),h=T.useMemo(()=>eb(b,a,Y),[Y]),j=uo(!0,t,D,p,R,N),M=uo(!1,t,D,p,R,N);return d.createElement(uu,{formMethods:v,onSubmit:K=>E(nb(K)),setDataOnUnmount:y},d.createElement(ui,{behandling:e,vedtakstatusTekst:h,aksjonspunkter:r,readOnly:n,previewAutomatiskBrev:M,previewOverstyrtBrev:j,tilbakekrevingtekst:O,erBehandlingEtterKlage:G,renderPanel:(K,L,H)=>L?d.createElement(sg,{behandlingsresultat:Y,isReadOnly:n,skalBrukeOverstyrendeFritekstBrev:K,ytelseTypeKode:a,språkKode:w,resultatstruktur:s,beregningErManueltFastsatt:g}):H?d.createElement(ig,{behandlingsresultat:Y,isReadOnly:n,språkKode:w,alleKodeverk:i,vilkar:u,beregningErManueltFastsatt:g,skalBrukeOverstyrendeFritekstBrev:K}):null}))};dg.__docgenInfo={description:"",methods:[],displayName:"VedtakForm",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => Promise<any>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst?: string;
  dokumentMal?: string;
  tittel?: string;
  gjelderVedtak: boolean;
  automatiskVedtaksbrev?: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!1}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"tittel",value:{name:"string",required:!1}},{key:"gjelderVedtak",value:{name:"boolean",required:!0}},{key:"automatiskVedtaksbrev",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},resultatstruktur:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
}`,signature:{properties:[{key:"opphoersdato",value:{name:"string",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}`,signature:{properties:[{key:"beregnetTilkjentYtelse",value:{name:"number",required:!0}},{key:"satsVerdi",value:{name:"number",required:!0}},{key:"antallBarn",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},tilbakekrevingvalg:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erTilbakekrevingVilkårOppfylt: boolean;
  grunnerTilReduksjon: boolean;
  videreBehandling: string;
  varseltekst: string;
}`,signature:{properties:[{key:"erTilbakekrevingVilkårOppfylt",value:{name:"boolean",required:!0}},{key:"grunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"videreBehandling",value:{name:"string",required:!0}},{key:"varseltekst",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  erTilbakekrevingVilkårOppfylt: boolean;
  grunnerTilReduksjon: boolean;
  videreBehandling: string;
  varseltekst: string;
}>`},description:""},simuleringResultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},vilkar:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Vilkar[]"},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakAksjonspunkter[]) => Promise<void>",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:`| ForeslaVedtakAp
| ForeslaVedtakManueltAp
| BekreftVedtakUtenTotrinnskontrollAp
| VurdereAnnenYtelseForVedtakAp
| VurdereDokumentForVedtakAp`,elements:[{name:"intersection",raw:`{
  overskrift?: string;
  fritekstBrev?: string;
  skalBrukeOverstyrendeFritekstBrev?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.FORESLA_VEDTAK>`,elements:[{name:"signature",type:"object",raw:`{
  overskrift?: string;
  fritekstBrev?: string;
  skalBrukeOverstyrendeFritekstBrev?: boolean;
}`,signature:{properties:[{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstBrev",value:{name:"string",required:!1}},{key:"skalBrukeOverstyrendeFritekstBrev",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  overskrift?: string;
  fritekstBrev?: string;
  skalBrukeOverstyrendeFritekstBrev?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.FORESLA_VEDTAK_MANUELT>`,elements:[{name:"signature",type:"object",raw:`{
  overskrift?: string;
  fritekstBrev?: string;
  skalBrukeOverstyrendeFritekstBrev?: boolean;
}`,signature:{properties:[{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstBrev",value:{name:"string",required:!1}},{key:"skalBrukeOverstyrendeFritekstBrev",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  overskrift?: string;
  fritekstBrev?: string;
  skalBrukeOverstyrendeFritekstBrev?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VEDTAK_UTEN_TOTRINNSKONTROLL>`,elements:[{name:"signature",type:"object",raw:`{
  overskrift?: string;
  fritekstBrev?: string;
  skalBrukeOverstyrendeFritekstBrev?: boolean;
}`,signature:{properties:[{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstBrev",value:{name:"string",required:!1}},{key:"skalBrukeOverstyrendeFritekstBrev",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}],raw:"VedtakAksjonspunkter[]"},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},formData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  beregningErManueltFastsatt?: boolean;
  aksjonspunktKoder: string[];
  overskrift?: string;
  brødtekst?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"beregningErManueltFastsatt",value:{name:"boolean",required:!1}},{key:"aksjonspunktKoder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"brødtekst",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  beregningErManueltFastsatt?: boolean;
  aksjonspunktKoder: string[];
  overskrift?: string;
  brødtekst?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"beregningErManueltFastsatt",value:{name:"boolean",required:!1}},{key:"aksjonspunktKoder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"brødtekst",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var Vr=(e=>(e.INNVILGET="INNVILGET",e.AVSLAG="AVSLAG",e))(Vr||{});const ug=({ytelseTypeKode:e,revurderingsÅrsakString:n,isReadOnly:r,resultatstruktur:t,språkKode:a,behandlingsresultat:s,beregningErManueltFastsatt:i,skalBrukeOverstyrendeFritekstBrev:o})=>d.createElement(d.Fragment,null,e===ee.ENGANGSSTONAD&&t&&"antallBarn"in t&&d.createElement(tr,null,d.createElement(rr,null,d.createElement(Be,null,d.createElement(zn,null,d.createElement(Se,{id:"VedtakForm.beregnetTilkjentYtelse"})),d.createElement($e,{size:"small"},Wd(t.beregnetTilkjentYtelse))),d.createElement(Be,null,d.createElement(zn,null,d.createElement(Se,{id:"VedtakForm.AntallBarn"})),d.createElement($e,{size:"small"},t.antallBarn)))),(e===ee.FORELDREPENGER||e===ee.SVANGERSKAPSPENGER)&&d.createElement(d.Fragment,null,n&&d.createElement(d.Fragment,null,d.createElement($e,{size:"small"},d.createElement(Se,{id:"VedtakForm.RevurderingFP.Aarsak"})),d.createElement(ln,{size:"small"},n),d.createElement(Ne,{eightPx:!0})),!o&&i&&d.createElement(It,{isReadOnly:r,språkKode:a,behandlingsresultat:s,labelTextCode:"VedtakForm.Fritekst.Beregningsgrunnlag"})));ug.__docgenInfo={description:"",methods:[],displayName:"VedtakInnvilgetRevurderingPanel",props:{ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},revurderingsÅrsakString:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},resultatstruktur:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
}`,signature:{properties:[{key:"opphoersdato",value:{name:"string",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}`,signature:{properties:[{key:"beregnetTilkjentYtelse",value:{name:"number",required:!0}},{key:"satsVerdi",value:{name:"number",required:!0}},{key:"antallBarn",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}>`}]},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},behandlingsresultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const ab="_fritekstItem_1kqqb_1",sb={fritekstItem:ab},ib=Pa(1500),ob=di(3),lb=(e,n,r)=>{const t=n.filter(s=>s.vilkarStatus===sa.IKKE_OPPFYLT);if(t.length===0)return d.createElement(Se,{id:"VedtakForm.UttaksperioderIkkeGyldig"});if(!(r!=null&&r.avslagsarsak))throw new Error("Ingen behandlingsresultat eller avslagsårsak finnes");return`${e(t[0].vilkarType,jn.VILKAR_TYPE)}: ${e(r.avslagsarsak,jn.AVSLAGSARSAK,t[0].vilkarType)}`},gg=({vilkar:e,behandlingsresultat:n,språkKode:r,erReadOnly:t,alleKodeverk:a,skalBrukeOverstyrendeFritekstBrev:s})=>{const{formState:{isDirty:i}}=hr(),o=vt(a),l=g=>g!==void 0||i,u=lb(o,e,n);return d.createElement(d.Fragment,null,u&&d.createElement(d.Fragment,null,d.createElement($e,{size:"small"},d.createElement(Se,{id:"VedtakForm.ArsakTilAvslag"})),d.createElement(ln,{size:"small"},u),d.createElement(Ne,{sixteenPx:!0})),!s&&d.createElement(d.Fragment,null,d.createElement(Ne,{sixteenPx:!0}),d.createElement(Xt,{name:"begrunnelse",label:d.createElement(Se,{id:"VedtakForm.Fritekst"}),validate:[bc(l),ob,ib,aa],maxLength:1500,readOnly:t,badges:[{type:"info",titleText:Us(r)}]})),t&&(n==null?void 0:n.avslagsarsakFritekst)&&d.createElement("span",null,d.createElement(Ne,{twentyPx:!0}),d.createElement(zn,null,d.createElement(Se,{id:"VedtakForm.Fritekst"})),d.createElement(Ne,{eightPx:!0}),d.createElement("div",{className:sb.fritekstItem},ir(n.avslagsarsakFritekst))))};gg.__docgenInfo={description:"",methods:[],displayName:"VedtakAvslagArsakOgBegrunnelsePanel",props:{vilkar:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Vilkar[]"},description:""},behandlingsresultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},erReadOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const kg=({revurderingsÅrsakString:e,språkKode:n,isReadOnly:r,behandlingsresultat:t,beregningErManueltFastsatt:a,skalBrukeOverstyrendeFritekstBrev:s})=>d.createElement(d.Fragment,null,d.createElement($e,{size:"small"},d.createElement(Se,{id:"VedtakForm.RevurderingFP.Aarsak"})),e&&d.createElement(ln,{size:"small"},e),!s&&a&&d.createElement(It,{isReadOnly:r,språkKode:n,behandlingsresultat:t,labelTextCode:"VedtakForm.Fritekst.Beregningsgrunnlag"}));kg.__docgenInfo={description:"",methods:[],displayName:"VedtakOpphorRevurderingPanel",props:{revurderingsÅrsakString:{required:!1,tsType:{name:"string"},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},behandlingsresultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const go=(e,n,r,t,a)=>s=>{if(s.preventDefault(),!e||(e?!!t&&!!r:!!a)){const o={fritekst:e?t:a,dokumentMal:e?Vl.FRITEKST:void 0,tittel:e?r:void 0,gjelderVedtak:!0,automatiskVedtaksbrev:e?void 0:!0};n(o)}},db=(e=[])=>e.map(({behandlingArsakType:n})=>n).some(n=>n===wn.ETTER_KLAGE||n===wn.KLAGE_U_INNTK||n===wn.KLAGE_M_INNTK),ub=(e,n)=>{if(e===void 0||e.length<1)return;const r=[],t=e.find(s=>s===wn.RE_ENDRING_FRA_BRUKER),a=e.filter(s=>s!==wn.RE_ENDRING_FRA_BRUKER).map(s=>n(s,jn.BEHANDLING_AARSAK));return t!==void 0&&r.push(n(t,jn.BEHANDLING_AARSAK)),r.push(...a),r.join(", ")},gb=(e,n)=>{const r=e?Vr.INNVILGET:Vr.AVSLAG;return(n?Vr.INNVILGET:Vr.AVSLAG)!==r},kb=(e,n)=>!n||n.length<1?"":n.map(r=>e(r,jn.KONSEKVENS_FOR_YTELSEN)).join(" og "),ko=(e,n,r)=>n?r?e&&"beregnetTilkjentYtelse"in n&&"beregnetTilkjentYtelse"in r?n.beregnetTilkjentYtelse!==r.beregnetTilkjentYtelse:"antallBarn"in n&&"antallBarn"in r?n.antallBarn!==r.antallBarn:!1:!0:!1,Eg=(e,n,r)=>gb(n,r)?n?"VedtakForm.Resultat.EndretTilInnvilget":"VedtakForm.Resultat.EndretTilAvslag":e?ko(e,n,r)?"VedtakForm.Resultat.EndretTilkjentYtelse":"VedtakForm.Resultat.IngenEndring":ko(e,n,r)?"VedtakForm.Resultat.EndretAntallBarn":"VedtakForm.Resultat.IngenEndring",Eb=(e,n,r,t,a,s,i)=>{if(n===ee.ENGANGSSTONAD)return e.formatMessage({id:Eg(!0,s,i)});const o=kb(r,a);return`${o}${o!==""?t:". "}`},vb=(e,n,r)=>e&&"opphoersdato"in e&&e.opphoersdato?e.opphoersdato:n||(r!=null&&r.skjæringstidspunkt?r.skjæringstidspunkt.dato:""),mb=e=>e.aksjonspunktKoder.map(n=>({kode:tg(n,ce.FORESLA_VEDTAK,ce.FORESLA_VEDTAK_MANUELT,ce.VEDTAK_UTEN_TOTRINNSKONTROLL,ce.VURDERE_ANNEN_YTELSE,ce.VURDERE_DOKUMENT,ce.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,ce.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING),begrunnelse:e.begrunnelse,fritekstBrev:e.brødtekst,skalBrukeOverstyrendeFritekstBrev:!!e.brødtekst,overskrift:e.overskrift})),fb=(e,n)=>{var r,t;return{aksjonspunktKoder:e.filter(a=>a.kanLoses).map(a=>a.definisjon),overskrift:ir((r=n.behandlingsresultat)==null?void 0:r.overskrift),brødtekst:ir((t=n.behandlingsresultat)==null?void 0:t.fritekstbrev)}},vg=({behandling:e,readOnly:n,aksjonspunkter:r,previewCallback:t,ytelseTypeKode:a,resultatstruktur:s,alleKodeverk:i,tilbakekrevingvalg:o,simuleringResultat:l,vilkar:u,beregningErManueltFastsatt:g,medlemskapFom:E,resultatstrukturOriginalBehandling:m,submitCallback:y,formData:b,setFormData:v})=>{const p=An(),N=Xl({defaultValues:b||fb(r,e)}),R=N.watch("begrunnelse"),D=N.watch("overskrift"),Y=N.watch("brødtekst"),{behandlingsresultat:w,sprakkode:G,behandlingÅrsaker:O}=e,h=T.useMemo(()=>db(e.behandlingÅrsaker),[e.behandlingÅrsaker]),j=T.useMemo(()=>ub(O.map(c=>c.behandlingArsakType),vt(i)),[O]),M=T.useMemo(()=>ag(i,l,o),[l,o]);let K="";if(w&&ps(w.type)){const c=w!==void 0?w.konsekvenserForYtelsen:void 0;K=Eb(p,a,vt(i),M,c,s,m)}w&&cs(w.type)&&(K=p.formatMessage({id:Eg(!1,s,m)})),w&&Ml(w.type)&&(K=p.formatMessage({id:a===ee.SVANGERSKAPSPENGER?"VedtakForm.RevurderingSVP.SvangerskapspengerOpphoerer":"VedtakForm.RevurderingFP.ForeldrepengerOpphoerer"},{dato:q(vb(s,E,w)).format(Km)}));const L=go(!0,t,D,Y,R),H=go(!1,t,D,Y,R);return d.createElement(uu,{formMethods:N,onSubmit:c=>y(mb(c)),setDataOnUnmount:v},d.createElement(ui,{behandling:e,vedtakstatusTekst:K,aksjonspunkter:r,readOnly:n,previewAutomatiskBrev:H,previewOverstyrtBrev:L,tilbakekrevingtekst:M,erBehandlingEtterKlage:h,renderPanel:(c,_,S,V)=>_?d.createElement(ug,{ytelseTypeKode:a,revurderingsÅrsakString:j,isReadOnly:n,resultatstruktur:s,språkKode:G,behandlingsresultat:w,beregningErManueltFastsatt:g,skalBrukeOverstyrendeFritekstBrev:c}):S?d.createElement(gg,{vilkar:u,behandlingsresultat:w,språkKode:G,erReadOnly:n,alleKodeverk:i,skalBrukeOverstyrendeFritekstBrev:c}):V?d.createElement(kg,{revurderingsÅrsakString:j,isReadOnly:n,behandlingsresultat:w,språkKode:G,beregningErManueltFastsatt:g,skalBrukeOverstyrendeFritekstBrev:c}):null}))};vg.__docgenInfo={description:"",methods:[],displayName:"VedtakRevurderingForm",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => Promise<any>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst?: string;
  dokumentMal?: string;
  tittel?: string;
  gjelderVedtak: boolean;
  automatiskVedtaksbrev?: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!1}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"tittel",value:{name:"string",required:!1}},{key:"gjelderVedtak",value:{name:"boolean",required:!0}},{key:"automatiskVedtaksbrev",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},resultatstruktur:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
}`,signature:{properties:[{key:"opphoersdato",value:{name:"string",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}`,signature:{properties:[{key:"beregnetTilkjentYtelse",value:{name:"number",required:!0}},{key:"satsVerdi",value:{name:"number",required:!0}},{key:"antallBarn",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},tilbakekrevingvalg:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erTilbakekrevingVilkårOppfylt: boolean;
  grunnerTilReduksjon: boolean;
  videreBehandling: string;
  varseltekst: string;
}`,signature:{properties:[{key:"erTilbakekrevingVilkårOppfylt",value:{name:"boolean",required:!0}},{key:"grunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"videreBehandling",value:{name:"string",required:!0}},{key:"varseltekst",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  erTilbakekrevingVilkårOppfylt: boolean;
  grunnerTilReduksjon: boolean;
  videreBehandling: string;
  varseltekst: string;
}>`},description:""},simuleringResultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},vilkar:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Vilkar[]"},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},medlemskapFom:{required:!1,tsType:{name:"string"},description:""},resultatstrukturOriginalBehandling:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
}`,signature:{properties:[{key:"opphoersdato",value:{name:"string",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}`,signature:{properties:[{key:"beregnetTilkjentYtelse",value:{name:"number",required:!0}},{key:"satsVerdi",value:{name:"number",required:!0}},{key:"antallBarn",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}>`}]},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: RevurderingVedtakAksjonspunkter[]) => Promise<void>",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:`| ForeslaVedtakAp
| ForeslaVedtakManueltAp
| BekreftVedtakUtenTotrinnskontrollAp
| VurdereAnnenYtelseForVedtakAp
| VurdereDokumentForVedtakAp
| KontrollerRevurderingsBehandlingAp
| KontrollAvManueltOpprettetRevurderingsbehandlingAp`,elements:[{name:"intersection",raw:`{
  overskrift?: string;
  fritekstBrev?: string;
  skalBrukeOverstyrendeFritekstBrev?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.FORESLA_VEDTAK>`,elements:[{name:"signature",type:"object",raw:`{
  overskrift?: string;
  fritekstBrev?: string;
  skalBrukeOverstyrendeFritekstBrev?: boolean;
}`,signature:{properties:[{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstBrev",value:{name:"string",required:!1}},{key:"skalBrukeOverstyrendeFritekstBrev",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  overskrift?: string;
  fritekstBrev?: string;
  skalBrukeOverstyrendeFritekstBrev?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.FORESLA_VEDTAK_MANUELT>`,elements:[{name:"signature",type:"object",raw:`{
  overskrift?: string;
  fritekstBrev?: string;
  skalBrukeOverstyrendeFritekstBrev?: boolean;
}`,signature:{properties:[{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstBrev",value:{name:"string",required:!1}},{key:"skalBrukeOverstyrendeFritekstBrev",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  overskrift?: string;
  fritekstBrev?: string;
  skalBrukeOverstyrendeFritekstBrev?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VEDTAK_UTEN_TOTRINNSKONTROLL>`,elements:[{name:"signature",type:"object",raw:`{
  overskrift?: string;
  fritekstBrev?: string;
  skalBrukeOverstyrendeFritekstBrev?: boolean;
}`,signature:{properties:[{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstBrev",value:{name:"string",required:!1}},{key:"skalBrukeOverstyrendeFritekstBrev",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}],raw:"RevurderingVedtakAksjonspunkter[]"},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},formData:{required:!1,tsType:{name:"FormValues"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"FormValues"},name:"data"}],return:{name:"void"}}},description:""}}};const Tb={"VedtakForm.ForslagTilVedtak":"Vedtak","VedtakForm.BehandlingHenlagt":"Behandlingen er henlagt","VedtakForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakForm.ResultatKlageAvvist":"Klagen er avvist","VedtakForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakForm.SvangerskapspengerIkkeInnvilget":"Svangerskapspenger er avslått","VedtakForm.ForeldrepengerIkkeInnvilget":"Foreldrepenger er avslått","VedtakForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakForm.VilkarStatusInnvilget":"Engangsstønad er innvilget","VedtakForm.VilkarStatusInnvilgetEngangsstonad":"Engangsstønad er innvilget","VedtakForm.SvangerskapspengerInnvilget":"Svangerskapspenger er innvilget","VedtakForm.VilkarStatusInnvilgetForeldrepenger":"Foreldrepenger er innvilget","VedtakForm.OpprettTilbakekrOgInntrekk":"Feilutbetaling med tilbakekreving hvor beløp er redusert med inntrekk","VedtakForm.TilGodkjenning":"Til godkjenning","VedtakForm.FattVedtak":"Fatt vedtak","VedtakForm.ForhandvisBrev":"Forhåndsvis brev","VedtakForm.beregnetTilkjentYtelse":"Beregnet engangsstønad","VedtakForm.AntallBarn":"Antall barn","VedtakForm.vedtak":"Vedtak","VedtakForm.Resultat":"Resultat","VedtakForm.ArsakTilAvslag":"Årsak til avslag","VedtakForm.Fritekst":"Fritekst i brev til søker","VedtakForm.Fritekst.Beregningsgrunnlag":"Fritekst i brev til søker som handler om fastsettelse av beregningsgrunnlaget","VedtakForm.VurderAnnenYtelse":"Påvirker den åpne Gosys-oppgaven «Vurder konsekvens for ytelse» behandlingen?","VedtakForm.VurderDokument":"Påvirker den åpne Gosys-oppgaven «Vurder dokument» behandlingen?","VedtakForm.Resultat.IngenEndring":"Ingen endring","VedtakForm.Resultat.EndretTilAvslag":"Endret til Avslag","VedtakForm.Resultat.EndretTilInnvilget":"Endret til Innvilget","VedtakForm.Resultat.EndretTilkjentYtelse":"Endret beregnet stønad","VedtakForm.KontrollerRevurderingsbehandling":"Beregningsgrunnlaget er endret til ugunst for søker. Skal det sendes varsel?","VedtakForm.UttaksperioderIkkeGyldig":"Søker har ikke noen gyldig uttaksperiode","VedtakForm.RevurderingFP.Aarsak":"Årsak til revurdering","VedtakForm.RevurderingFP.ForeldrepengerOpphoerer":"Foreldrepenger opphører f.o.m. {dato}","VedtakForm.RevurderingSVP.SvangerskapspengerOpphoerer":"Svangerskapspenger opphører f.o.m. {dato}","VedtakForm.ManuellOverstyring":"Overstyr automatisk brev","VedtakForm.Overskrift":"Overskrift","VedtakForm.Innhold":"Innhold i brev til søker","VedtakForm.SvpFritektsBrevModal.Ok":"Ok","VedtakForm.SvpFritektsBrevModal.IngenAutomatiskVedtaksbrev":"I denne behandlingen er det ikke automatisk vedtaksbrev. Du må velge 'Overstyr automatisk brev' og skrive fritekstbrev.","VedtakForm.SvpFritektsBrevModal.IngenAutomatiskVedtaksbrevImage":"Ingen automatisk vedtaksbrev.","VedtakForm.SvpFritektsBrevModal.ModalDescription":"Informasjonsboks om ingen automatisk vedtaksbrev. Fritekstbrev er nødvendig.","VedtakFellesPanel.RedigerVedtaksbrev":"Rediger vedtaksbrev","VedtakFellesPanel.AutomatiskVedtaksbrev":"Automatisk vedtaksbrev","VedtakFellesPanel.UtkastVedtaksbrev":"Utkast vedtaksbrev","VedtakFellesPanel.ForkastManueltBrev":"Forkast manuelt brev","VedtakFellesPanel.Forklaring":"Tekst fra det automatisk genererte brevet kan kopieres og limes inn i det manuelle brevet","VedtakFellesPanel.Forkast":"Dersom du forkaster det manuelle brevet, vil det erstattes av det automatisk genererte brevet","VedtakFellesPanel.Ok":"Forkast manuelt brev","FritekstBrevPanel.Endret":"Endret av saksbehandler","FritekstBrevPanel.ManueltVedtaksbrev":"Manuelt vedtaksbrev","FritekstBrevPanel.ForhandsvisManueltVedtaksbrev":"Forhåndsvis manuelt brev","VedtakHelpTextPanel.Vurder":"Vurder følgende før du sender til godkjenning:","Malform.Beskrivelse":"Foretrukket språk"},Rb=je(Tb),yb=[ce.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ce.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ce.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD],Ab=(e,n)=>{var s;if(!n||!e)return!1;const r=e.find(i=>yb.some(o=>o===i.definisjon)&&i.status===Ut.UTFORT),a=(s=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:s.find(i=>i.overstyrtPrAar||i.overstyrtPrAar===0);return!!r||!!a},mg=({behandling:e,beregningresultatDagytelse:n,beregningresultatEngangsstonad:r,tilbakekrevingvalg:t,simuleringResultat:a,beregningsgrunnlag:s,vilkar:i,beregningsresultatOriginalBehandling:o,medlemskap:l,aksjonspunkter:u,isReadOnly:g,previewCallback:E,submitCallback:m,ytelseTypeKode:y,alleKodeverk:b,formData:v,setFormData:p})=>{const N=Ab(u,s),R=y===ee.ENGANGSSTONAD?r:n;let D;return o&&(D=y===ee.ENGANGSSTONAD?o["beregningsresultat-engangsstonad"]:o["beregningsresultat-foreldrepenger"]),d.createElement(ym,{value:Rb},e.type!==Je.REVURDERING&&d.createElement(dg,{behandling:e,submitCallback:m,readOnly:g,previewCallback:E,tilbakekrevingvalg:t,simuleringResultat:a,resultatstruktur:R,aksjonspunkter:u,ytelseTypeKode:y,alleKodeverk:b,vilkar:i,beregningErManueltFastsatt:N,formData:v,setFormData:p}),e.type===Je.REVURDERING&&d.createElement(vg,{behandling:e,submitCallback:m,readOnly:g,previewCallback:E,tilbakekrevingvalg:t,simuleringResultat:a,resultatstruktur:R,aksjonspunkter:u,ytelseTypeKode:y,alleKodeverk:b,vilkar:i,beregningErManueltFastsatt:N,resultatstrukturOriginalBehandling:D,medlemskapFom:l==null?void 0:l.fom,formData:v,setFormData:p}))},fg=mg;mg.__docgenInfo={description:"",methods:[],displayName:"VedtakProsessIndex",props:{beregningresultatDagytelse:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
}`,signature:{properties:[{key:"opphoersdato",value:{name:"string",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
}>`},description:""},beregningresultatEngangsstonad:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}`,signature:{properties:[{key:"beregnetTilkjentYtelse",value:{name:"number",required:!0}},{key:"satsVerdi",value:{name:"number",required:!0}},{key:"antallBarn",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
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
}>`},description:""},simuleringResultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},beregningsgrunnlag:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},beregningsresultatOriginalBehandling:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  'beregningsresultat-engangsstonad'?: BeregningsresultatEs;
  'beregningsresultat-foreldrepenger'?: BeregningsresultatDagytelse;
}`,signature:{properties:[{key:"beregningsresultat-engangsstonad",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}`,signature:{properties:[{key:"beregnetTilkjentYtelse",value:{name:"number",required:!0}},{key:"satsVerdi",value:{name:"number",required:!0}},{key:"antallBarn",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}>`,required:!1}},{key:"beregningsresultat-foreldrepenger",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
}`,signature:{properties:[{key:"opphoersdato",value:{name:"string",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
}>`,required:!1}}]}},description:""},medlemskap:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  medlemskapPerioder: MedlemskapPeriode[];
  perioder: MedlemPeriode[];
  opphold: Oppholdstillatelse[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"medlemskapPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  kildeType: string;
  beslutningsdato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"medlemskapType",value:{name:"string",required:!0}},{key:"dekningType",value:{name:"string",required:!0}},{key:"kildeType",value:{name:"string",required:!0}},{key:"beslutningsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  kildeType: string;
  beslutningsdato?: string;
}>`}],raw:"MedlemskapPeriode[]",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"personopplysningBruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"personopplysningAnnenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"årsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!1}},{key:"erEosBorger",value:{name:"boolean",required:!1}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!1}},{key:"bosattVurdering",value:{name:"boolean",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>`}],raw:"MedlemPeriode[]",required:!0}},{key:"opphold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom: string;
  oppholdstillatelseType: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdstillatelseType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom?: string;
  tom: string;
  oppholdstillatelseType: string;
}>`}],raw:"Oppholdstillatelse[]",required:!0}}]}}],raw:`Readonly<{
  fom?: string;
  medlemskapPerioder: MedlemskapPeriode[];
  perioder: MedlemPeriode[];
  opphold: Oppholdstillatelse[];
}>`},description:""},vilkar:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Vilkar[]"},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => Promise<any>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst?: string;
  dokumentMal?: string;
  tittel?: string;
  gjelderVedtak: boolean;
  automatiskVedtaksbrev?: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!1}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"tittel",value:{name:"string",required:!1}},{key:"gjelderVedtak",value:{name:"boolean",required:!0}},{key:"automatiskVedtaksbrev",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"any"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const ye={uuid:"1",versjon:1,type:Je.FORSTEGANGSSOKNAD,status:Xe.BEHANDLING_UTREDES,sprakkode:"NO",behandlingsresultat:{type:Q.INNVILGET},behandlingPaaVent:!1,behandlingHenlagt:!1,behandlingÅrsaker:[{behandlingArsakType:wn.ANNET}]},pb=[{lovReferanse:"§§Dette er en lovreferanse",vilkarType:bs.FODSELSVILKARET_MOR,vilkarStatus:sa.OPPFYLT,overstyrbar:!0}],Tg=[{definisjon:ce.FORESLA_VEDTAK,kanLoses:!0}],Pe={antallBarn:1,beregnetTilkjentYtelse:1e4},Nb={title:"prosess/prosess-vedtak",component:fg},Ae=({behandling:e,beregningresultatDagytelse:n,beregningresultatEngangsstonad:r,ytelseTypeKode:t,isReadOnly:a,submitCallback:s,beregningsgrunnlag:i,aksjonspunkter:o,beregningsresultatOriginalBehandling:l,vilkar:u,previewCallback:g})=>d.createElement(fg,{behandling:e,aksjonspunkter:o||Tg,submitCallback:s,isReadOnly:a,isAksjonspunktOpen:!0,readOnlySubmitButton:!1,status:"",vilkar:u||pb,alleMerknaderFraBeslutter:{},setFormData:()=>{},beregningresultatDagytelse:n,beregningresultatEngangsstonad:r,medlemskap:{fom:"2019-01-01"},previewCallback:g||me("button-click"),ytelseTypeKode:t,alleKodeverk:fR,beregningsgrunnlag:i,beregningsresultatOriginalBehandling:l}),Gr=Ae.bind({});Gr.args={behandling:ye,beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,isReadOnly:!1,submitCallback:me("button-click")};const wr=Ae.bind({});wr.args={behandling:{...ye,status:Xe.AVSLUTTET},beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,isReadOnly:!0,submitCallback:me("button-click")};const Br=Ae.bind({});Br.args={behandling:{...ye,status:Xe.AVSLUTTET,behandlingsresultat:{vedtaksbrev:"FRITEKST",overskrift:"Dette er en overskrift",fritekstbrev:"Dette er innholdet i brevet",type:Q.INNVILGET}},beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,isReadOnly:!0,submitCallback:me("button-click")};const Ur=Ae.bind({});Ur.args={behandling:{...ye,behandlingsresultat:{type:Q.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,isReadOnly:!1,submitCallback:me("button-click")};const jr=Ae.bind({});jr.args={behandling:{...ye,status:Xe.AVSLUTTET,behandlingsresultat:{type:Q.AVSLATT}},beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,isReadOnly:!0,submitCallback:me("button-click")};const Hr=Ae.bind({});Hr.args={behandling:ye,beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:me("button-click")};const qr=Ae.bind({});qr.args={behandling:{...ye,behandlingsresultat:{type:Q.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:me("button-click")};const Yr=Ae.bind({});Yr.args={behandling:ye,beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},aksjonspunkter:[...Tg,{definisjon:ce.VURDERE_ANNEN_YTELSE,status:Ut.OPPRETTET,begrunnelse:void 0,kanLoses:!1,toTrinnsBehandling:!0},{definisjon:ce.VURDERE_DOKUMENT,status:Ut.OPPRETTET,begrunnelse:void 0,kanLoses:!1},{definisjon:ce.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,status:Ut.OPPRETTET,begrunnelse:void 0,kanLoses:!1,toTrinnsBehandling:!0}],isReadOnly:!1,submitCallback:me("button-click")};const xr=Ae.bind({});xr.args={behandling:ye,beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:ee.ENGANGSSTONAD,isReadOnly:!1,submitCallback:me("button-click")};const Cr=Ae.bind({});Cr.args={behandling:{...ye,status:Xe.AVSLUTTET},beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:ee.ENGANGSSTONAD,isReadOnly:!0,submitCallback:me("button-click")};const $r=Ae.bind({});$r.args={behandling:ye,beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:ee.ENGANGSSTONAD,isReadOnly:!1,submitCallback:me("button-click")};const Jr=Ae.bind({});Jr.args={behandling:ye,beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:ee.ENGANGSSTONAD,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:me("button-click")};const Wr=Ae.bind({});Wr.args={behandling:{...ye,behandlingsresultat:{type:Q.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:ee.ENGANGSSTONAD,isReadOnly:!1,submitCallback:me("button-click")};const zr=Ae.bind({});zr.args={behandling:ye,ytelseTypeKode:ee.SVANGERSKAPSPENGER,isReadOnly:!1,submitCallback:me("button-click")};const Zr=Ae.bind({});Zr.args={behandling:{...ye,type:Je.REVURDERING,behandlingsresultat:{type:Q.INNVILGET,konsekvenserForYtelsen:[Qe.ENDRING_I_BEREGNING_OG_UTTAK,Qe.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,isReadOnly:!1,submitCallback:me("button-click")};const Xr=Ae.bind({});Xr.args={behandling:{...ye,type:Je.REVURDERING,status:Xe.AVSLUTTET,behandlingsresultat:{type:Q.INNVILGET,konsekvenserForYtelsen:[Qe.ENDRING_I_BEREGNING_OG_UTTAK,Qe.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,isReadOnly:!1,submitCallback:me("button-click")};const Qr=Ae.bind({});Qr.args={behandling:{...ye,type:Je.REVURDERING,behandlingsresultat:{type:Q.INNVILGET,konsekvenserForYtelsen:[Qe.ENDRING_I_BEREGNING_OG_UTTAK,Qe.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,isReadOnly:!1,submitCallback:me("button-click")};const et=Ae.bind({});et.args={behandling:{...ye,type:Je.REVURDERING,status:Xe.AVSLUTTET,behandlingsresultat:{type:Q.INNVILGET,konsekvenserForYtelsen:[Qe.ENDRING_I_BEREGNING_OG_UTTAK,Qe.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,isReadOnly:!0,submitCallback:me("button-click")};const nt=Ae.bind({});nt.args={behandling:{...ye,type:Je.REVURDERING,status:Xe.AVSLUTTET,behandlingsresultat:{vedtaksbrev:"FRITEKST",overskrift:"Dette er en overskrift",fritekstbrev:"Dette er innholdet i brevet",type:Q.INNVILGET,konsekvenserForYtelsen:[Qe.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,isReadOnly:!0,submitCallback:me("button-click")};const rt=Ae.bind({});rt.args={behandling:{...ye,type:Je.REVURDERING,behandlingsresultat:{type:Q.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningsresultatOriginalBehandling:{"beregningsresultat-foreldrepenger":{...Pe}},ytelseTypeKode:ee.FORELDREPENGER,isReadOnly:!1,submitCallback:me("button-click")};const tt=Ae.bind({});tt.args={behandling:{...ye,type:Je.REVURDERING,status:Xe.AVSLUTTET,behandlingsresultat:{type:Q.AVSLATT}},beregningsresultatOriginalBehandling:{"beregningsresultat-foreldrepenger":{...Pe}},ytelseTypeKode:ee.FORELDREPENGER,isReadOnly:!0,submitCallback:me("button-click")};const at=Ae.bind({});at.args={behandling:{...ye,type:Je.REVURDERING,behandlingsresultat:{type:Q.OPPHOR}},beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,isReadOnly:!0,submitCallback:me("button-click")};const st=Ae.bind({});st.args={behandling:{...ye,type:Je.REVURDERING,behandlingsresultat:{type:Q.INNVILGET,konsekvenserForYtelsen:[Qe.ENDRING_I_BEREGNING_OG_UTTAK]}},beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:me("button-click")};const it=Ae.bind({});it.args={behandling:{...ye,type:Je.REVURDERING,behandlingsresultat:{type:Q.AVSLATT,konsekvenserForYtelsen:[Qe.ENDRING_I_BEREGNING_OG_UTTAK],avslagsarsak:"1007"}},beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},vilkar:[{lovReferanse:"§§Dette er en lovreferanse",vilkarType:bs.SOKNADFRISTVILKARET,vilkarStatus:sa.IKKE_OPPFYLT,overstyrbar:!0}],isReadOnly:!1,submitCallback:me("button-click")};const ot=Ae.bind({});ot.args={behandling:{...ye,type:Je.REVURDERING,behandlingsresultat:{type:Q.OPPHOR}},beregningresultatDagytelse:Pe,ytelseTypeKode:ee.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:me("button-click")};var Eo,vo,mo;Gr.parameters={...Gr.parameters,docs:{...(Eo=Gr.parameters)==null?void 0:Eo.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(mo=(vo=Gr.parameters)==null?void 0:vo.docs)==null?void 0:mo.source}}};var fo,To,Ro;wr.parameters={...wr.parameters,docs:{...(fo=wr.parameters)==null?void 0:fo.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Ro=(To=wr.parameters)==null?void 0:To.docs)==null?void 0:Ro.source}}};var yo,Ao,po;Br.parameters={...Br.parameters,docs:{...(yo=Br.parameters)==null?void 0:yo.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(po=(Ao=Br.parameters)==null?void 0:Ao.docs)==null?void 0:po.source}}};var co,bo,_o;Ur.parameters={...Ur.parameters,docs:{...(co=Ur.parameters)==null?void 0:co.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(_o=(bo=Ur.parameters)==null?void 0:bo.docs)==null?void 0:_o.source}}};var ho,So,No;jr.parameters={...jr.parameters,docs:{...(ho=jr.parameters)==null?void 0:ho.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(No=(So=jr.parameters)==null?void 0:So.docs)==null?void 0:No.source}}};var Oo,Io,Do;Hr.parameters={...Hr.parameters,docs:{...(Oo=Hr.parameters)==null?void 0:Oo.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Do=(Io=Hr.parameters)==null?void 0:Io.docs)==null?void 0:Do.source}}};var Ko,Lo,Po;qr.parameters={...qr.parameters,docs:{...(Ko=qr.parameters)==null?void 0:Ko.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Po=(Lo=qr.parameters)==null?void 0:Lo.docs)==null?void 0:Po.source}}};var Fo,Mo,Vo;Yr.parameters={...Yr.parameters,docs:{...(Fo=Yr.parameters)==null?void 0:Fo.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Vo=(Mo=Yr.parameters)==null?void 0:Mo.docs)==null?void 0:Vo.source}}};var Go,wo,Bo;xr.parameters={...xr.parameters,docs:{...(Go=xr.parameters)==null?void 0:Go.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Bo=(wo=xr.parameters)==null?void 0:wo.docs)==null?void 0:Bo.source}}};var Uo,jo,Ho;Cr.parameters={...Cr.parameters,docs:{...(Uo=Cr.parameters)==null?void 0:Uo.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Ho=(jo=Cr.parameters)==null?void 0:jo.docs)==null?void 0:Ho.source}}};var qo,Yo,xo;$r.parameters={...$r.parameters,docs:{...(qo=$r.parameters)==null?void 0:qo.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(xo=(Yo=$r.parameters)==null?void 0:Yo.docs)==null?void 0:xo.source}}};var Co,$o,Jo;Jr.parameters={...Jr.parameters,docs:{...(Co=Jr.parameters)==null?void 0:Co.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Jo=($o=Jr.parameters)==null?void 0:$o.docs)==null?void 0:Jo.source}}};var Wo,zo,Zo;Wr.parameters={...Wr.parameters,docs:{...(Wo=Wr.parameters)==null?void 0:Wo.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Zo=(zo=Wr.parameters)==null?void 0:zo.docs)==null?void 0:Zo.source}}};var Xo,Qo,el;zr.parameters={...zr.parameters,docs:{...(Xo=zr.parameters)==null?void 0:Xo.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(el=(Qo=zr.parameters)==null?void 0:Qo.docs)==null?void 0:el.source}}};var nl,rl,tl;Zr.parameters={...Zr.parameters,docs:{...(nl=Zr.parameters)==null?void 0:nl.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(tl=(rl=Zr.parameters)==null?void 0:rl.docs)==null?void 0:tl.source}}};var al,sl,il;Xr.parameters={...Xr.parameters,docs:{...(al=Xr.parameters)==null?void 0:al.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(il=(sl=Xr.parameters)==null?void 0:sl.docs)==null?void 0:il.source}}};var ol,ll,dl;Qr.parameters={...Qr.parameters,docs:{...(ol=Qr.parameters)==null?void 0:ol.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(dl=(ll=Qr.parameters)==null?void 0:ll.docs)==null?void 0:dl.source}}};var ul,gl,kl;et.parameters={...et.parameters,docs:{...(ul=et.parameters)==null?void 0:ul.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(kl=(gl=et.parameters)==null?void 0:gl.docs)==null?void 0:kl.source}}};var El,vl,ml;nt.parameters={...nt.parameters,docs:{...(El=nt.parameters)==null?void 0:El.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(ml=(vl=nt.parameters)==null?void 0:vl.docs)==null?void 0:ml.source}}};var fl,Tl,Rl;rt.parameters={...rt.parameters,docs:{...(fl=rt.parameters)==null?void 0:fl.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Rl=(Tl=rt.parameters)==null?void 0:Tl.docs)==null?void 0:Rl.source}}};var yl,Al,pl;tt.parameters={...tt.parameters,docs:{...(yl=tt.parameters)==null?void 0:yl.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(pl=(Al=tt.parameters)==null?void 0:Al.docs)==null?void 0:pl.source}}};var cl,bl,_l;at.parameters={...at.parameters,docs:{...(cl=at.parameters)==null?void 0:cl.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(_l=(bl=at.parameters)==null?void 0:bl.docs)==null?void 0:_l.source}}};var hl,Sl,Nl;st.parameters={...st.parameters,docs:{...(hl=st.parameters)==null?void 0:hl.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Nl=(Sl=st.parameters)==null?void 0:Sl.docs)==null?void 0:Nl.source}}};var Ol,Il,Dl;it.parameters={...it.parameters,docs:{...(Ol=it.parameters)==null?void 0:Ol.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Dl=(Il=it.parameters)==null?void 0:Il.docs)==null?void 0:Dl.source}}};var Kl,Ll,Pl;ot.parameters={...ot.parameters,docs:{...(Kl=ot.parameters)==null?void 0:Kl.docs,source:{originalSource:`({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={({
  fom: '2019-01-01'
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Pl=(Ll=ot.parameters)==null?void 0:Ll.docs)==null?void 0:Pl.source}}};const Ob=["InnvilgetForeldrepengerTilGodkjenningForSaksbehandler","GodkjentForeldrepengerForSaksbehandler","GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring","AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring","GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring","InnvilgetForeldrepengerDerBeregningErManueltFastsatt","AvslåttForeldrepengerDerBeregningErManueltFastsatt","TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil","InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring","GodkjentEngangsstønadForSaksbehandlerUtenOverstyring","InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring","InnvilgetEngangsstønadDerBeregningErManueltFastsatt","AvslåttEngangsstønadDerBeregningErManueltFastsatt","InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring","InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring","GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring","InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring","GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring","GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring","AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring","GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring","OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring","InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt","AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt","OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt"];export{Wr as AvslåttEngangsstønadDerBeregningErManueltFastsatt,it as AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt,qr as AvslåttForeldrepengerDerBeregningErManueltFastsatt,Ur as AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,rt as AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,jr as GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring,Cr as GodkjentEngangsstønadForSaksbehandlerUtenOverstyring,wr as GodkjentForeldrepengerForSaksbehandler,Br as GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring,tt as GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring,et as GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring,Xr as GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring,nt as GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring,Jr as InnvilgetEngangsstønadDerBeregningErManueltFastsatt,$r as InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring,xr as InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring,st as InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt,Hr as InnvilgetForeldrepengerDerBeregningErManueltFastsatt,Gr as InnvilgetForeldrepengerTilGodkjenningForSaksbehandler,Qr as InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,Zr as InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring,zr as InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring,ot as OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt,at as OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring,Yr as TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil,Ob as __namedExportsOrder,Nb as default};
