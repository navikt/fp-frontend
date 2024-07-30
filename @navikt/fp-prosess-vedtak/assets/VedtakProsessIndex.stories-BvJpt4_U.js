import{a as yt,j as E}from"./dayjs.min-DtekDYzD.js";import{v as Rg}from"./v4-CQkTLCs1.js";import{R as c,r as T,b as yg}from"./index-BBkUAzwr.js";import{r as Ag,w as pg}from"./index-BfZ0jBbx.js";const{addons:bg}=__STORYBOOK_MODULE_PREVIEW_API__,{global:Ei}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:cg}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var _g="storybook/actions",hg=`${_g}/action-event`,Sg={depth:10,clearOnStoryChange:!0,limit:50},Ml=(e,r)=>{let n=Object.getPrototypeOf(e);return!n||r(n)?n:Ml(n,r)},Ng=e=>!!(typeof e=="object"&&e&&Ml(e,r=>/^Synthetic(?:Base)?Event$/.test(r.constructor.name))&&typeof e.persist=="function"),Og=e=>{if(Ng(e)){let r=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));r.persist();let n=Object.getOwnPropertyDescriptor(r,"view"),t=n==null?void 0:n.value;return typeof t=="object"&&(t==null?void 0:t.constructor.name)==="Window"&&Object.defineProperty(r,"view",{...n,value:Object.create(t.constructor.prototype)}),r}return e},Ig=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?Rg():Date.now().toString(36)+Math.random().toString(36).substring(2);function ke(e,r={}){let n={...Sg,...r},t=function(...a){var k,m;if(r.implicit){let y=(k="__STORYBOOK_PREVIEW__"in Ei?Ei.__STORYBOOK_PREVIEW__:void 0)==null?void 0:k.storyRenders.find(_=>_.phase==="playing"||_.phase==="rendering");if(y){let _=!((m=window==null?void 0:window.FEATURES)!=null&&m.disallowImplicitActionsInRenderV8),v=new cg({phase:y.phase,name:e,deprecated:_});if(_)console.warn(v);else throw v}}let s=bg.getChannel(),i=Ig(),o=5,l=a.map(Og),u=a.length>1?l:l[0],d={id:i,count:0,data:{name:e,args:u},options:{...n,maxDepth:o+(n.depth||3),allowFunction:n.allowFunction||!1}};s.emit(hg,d)};return t.isAction=!0,t.implicit=r.implicit,t}var ge=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.VEDTAK_UTEN_TOTRINNSKONTROLL="5018",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN="5032",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYR_BEREGNING="6007",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(ge||{});const Mn={OPPRETTET:"OPPR",UTFORT:"UTFO",AVBRUTT:"AVBR"},Kg={INGEN_BEREGNINGSREGLER:"1099"},Sr={FEIL_I_LOVANDVENDELSE:"RE-LOV",FEIL_REGELVERKSFORSTAELSE:"RE-RGLF",FEIL_ELLER_ENDRET_FAKTA:"RE-FEFAKTA",FEIL_PROSESSUELL:"RE-PRSSL",ETTER_KLAGE:"ETTER_KLAGE",ANNET:"RE-ANNET",KLAGE_U_INNTK:"RE-KLAG-U-INNTK",KLAGE_M_INNTK:"RE-KLAG-M-INNTK",MEDLEMSKAP:"RE-MDL",OPPTJENING:"RE-OPTJ",FORDELING:"RE-FRDLING",INNTEKT:"RE-INNTK",FØDSEL:"RE-FØDSEL",DØD:"RE-DØD",SØKERS_RELASJON:"RE-SRTB",SØKNADSFRIST:"RE-FRIST",BEREEGNINGSGRUNNLAG:"RE-BER-GRUN",RE_TILSTØTENDE_YTELSE_INNVILGET:"RE-TILST-YT-INNVIL",RE_ENDRING_BEREGNINGSGRUNNLAG:"RE-ENDR-BER-GRUN",RE_TILSTØTENDE_YTELSE_OPPHØRT:"RE-TILST-YT-OPPH",RE_ENDRING_FRA_BRUKER:"RE-END-FRA-BRUKER",RE_ENDRET_INNTEKTSMELDING:"RE-END-INNTEKTSMELD",RE_KLAGE_KA:"RE_KLAGE_KA",RE_KLAGE_NFP:"RE_KLAGE_NFP",RE_VILKÅR:"RE_VILKÅR",RE_FORELDELSE:"RE_FORELDELSE",RE_FEILUTBETALT_BELØP_REDUSERT:"RE_FEILUTBETALT_BELØP_REDUSERT",REBEREGN_FERIEPENGER:"REBEREGN-FERIEPENGER",RE_UTSATT_START:"RE-UTSATT-START"},W={IKKE_FASTSATT:"IKKE_FASTSATT",INNVILGET:"INNVILGET",AVSLATT:"AVSLÅTT",OPPHOR:"OPPHØR",HENLAGT_SOKNAD_TRUKKET:"HENLAGT_SØKNAD_TRUKKET",KLAGE_AVVIST:"KLAGE_AVVIST",KLAGE_MEDHOLD:"KLAGE_MEDHOLD",KLAGE_DELVIS_MEDHOLD:"KLAGE_DELVIS_MEDHOLD",KLAGE_OMGJORT_UGUNST:"KLAGE_OMGJORT_UGUNST",KLAGE_YTELSESVEDTAK_OPPHEVET:"KLAGE_YTELSESVEDTAK_OPPHEVET",KLAGE_YTELSESVEDTAK_STADFESTET:"KLAGE_YTELSESVEDTAK_STADFESTET",KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",HJEMSENDE_UTEN_OPPHEVE:"HJEMSENDE_UTEN_OPPHEVE",HENLAGT_KLAGE_TRUKKET:"HENLAGT_KLAGE_TRUKKET",HENLAGT_ANKE_TRUKKET:"HENLAGT_ANKE_TRUKKET",HENLAGT_FEILOPPRETTET:"HENLAGT_FEILOPPRETTET",HENLAGT_FEILOPPRETTET_MED_BREV:"HENLAGT_FEILOPPRETTET_MED_BREV",HENLAGT_FEILOPPRETTET_UTEN_BREV:"HENLAGT_FEILOPPRETTET_UTEN_BREV",HENLAGT_BRUKER_DOD:"HENLAGT_BRUKER_DØD",FORELDREPENGER_ENDRET:"FORELDREPENGER_ENDRET",FORELDREPENGER_SENERE:"FORELDREPENGER_SENERE",INGEN_ENDRING:"INGEN_ENDRING",MANGLER_BEREGNINGSREGLER:"MANGLER_BEREGNINGSREGLER",HENLAGT_SOKNAD_MANGLER:"HENLAGT_SØKNAD_MANGLER",INNSYN_INNVILGET:"INNSYN_INNVILGET",INNSYN_DELVIS_INNVILGET:"INNSYN_DELVIS_INNVILGET",INNSYN_AVVIST:"INNSYN_AVVIST",HENLAGT_INNSYN_TRUKKET:"HENLAGT_INNSYN_TRUKKET"},Dg=[W.KLAGE_MEDHOLD,W.KLAGE_DELVIS_MEDHOLD,W.KLAGE_OMGJORT_UGUNST,W.KLAGE_YTELSESVEDTAK_OPPHEVET,W.KLAGE_YTELSESVEDTAK_STADFESTET,W.KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET,W.HJEMSENDE_UTEN_OPPHEVE],Lg=[W.KLAGE_MEDHOLD,W.KLAGE_DELVIS_MEDHOLD,W.KLAGE_OMGJORT_UGUNST],Pg=[W.FORELDREPENGER_ENDRET,W.FORELDREPENGER_SENERE,W.INGEN_ENDRING],ps=e=>Dg.includes(e)||Pg.includes(e)||e===W.INNVILGET,bs=e=>e===W.AVSLATT||e===W.KLAGE_AVVIST||e===W.KLAGE_YTELSESVEDTAK_STADFESTET,Vl=e=>e===W.OPPHOR,Fg=e=>Lg.includes(e),Ye={OPPRETTET:"OPPRE",BEHANDLING_UTREDES:"UTRED",AVSLUTTET:"AVSLU",IVERKSETTER_VEDTAK:"IVED",FATTER_VEDTAK:"FVED"},Ue={FORSTEGANGSSOKNAD:"BT-002",KLAGE:"BT-003",REVURDERING:"BT-004",DOKUMENTINNSYN:"BT-006",TILBAKEKREVING:"BT-007",ANKE:"BT-008",TILBAKEKREVING_REVURDERING:"BT-009"},Gl={INNHENTE_OPPLYSNINGER:"INNOPP",VARSEL_OM_REVURDERING:"VARREV",FORLENGET_SAKSBEHANDLINGSTID:"FORSAK",FORLENGET_SAKSBEHANDLINGSTID_MEDL:"FORMED",KLAGE_OMGJORING:"KGEOMG",KLAGE_AVVIST:"KGEAVV",KLAGE_STADFESTET:"KGESTA",KLAGE_HJEMSENDT:"KGEHJE",KLAGE_OVERSENDT:"KGEOVE",ANKE_OMGJORT:"ANKOMG",ANKE_OPPHEVET:"ANKOPP",FRITEKST:"FRITEK",INNSYN_SVAR:"INNSYN",INFO_OM_HENLEGGELSE:"IOHENL",TBK_INNHENTE_OPPLYSNINGER:"INNHEN",KORRIGERT_VARSEL_OM_TILBAKEKREVING:"KORRIGVARS",VARSEL_OM_TILBAKEKREVING:"VARS",ETTERLYS_INNTEKTSMELDING:"ELYSIM"},z={ENGANGSSTONAD:"ES",FORELDREPENGER:"FP",SVANGERSKAPSPENGER:"SVP"};var Ir=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.INNTEKTSKATEGORI="Inntektskategori",e.BEREGNINGSGRUNNLAG_ANDELTYPER="BeregningsgrunnlagAndeltype",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.FAGSYSTEM="Fagsystem",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.ARBEIDSFORHOLD_HANDLING_TYPE="ArbeidsforholdHandlingType",e.HISTORIKK_OPPLYSNING_TYPE="HistorikkOpplysningType",e.HISTORIKK_ENDRET_FELT_TYPE="HistorikkEndretFeltType",e.HISTORIKKINNSLAG_TYPE="HistorikkinnslagType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.AKTSOMHET="Aktsomhet",e.VURDERING="AnnenVurdering",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG="VurderArbeidsforholdHistorikkinnslag",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.AKTIVITETSKRAV_AVKLARING="KontrollerAktivitetskravAvklaring",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e))(Ir||{});const Mg=(e,r,n,t)=>{let a=e[r];if(!a||a.length===0)return"";t&&(a=a[t]);const s=a.find(i=>i.kode===n);return s?s.navn:""},vt=e=>(r,n,t)=>Mg(e,n,r,t),xe={ENDRING_I_BEREGNING:"ENDRING_I_BEREGNING",ENDRING_I_UTTAK:"ENDRING_I_UTTAK",ENDRING_I_FORDELING_AV_YTELSEN:"ENDRING_I_FORDELING_AV_YTELSEN",INGEN_ENDRING:"INGEN_ENDRING",ENDRING_I_BEREGNING_OG_UTTAK:"ENDRING_I_BEREGNING_OG_UTTAK",FORELDREPENGER_OPPHORER:"FORELDREPENGER_OPPHØRER",UDEFINERT:"-"};var cs=(e=>(e.FODSELSVILKARET_MOR="FP_VK_1",e.SVANGERSKAPVILKARET="SVP_VK_1",e.MEDLEMSKAPSVILKARET="FP_VK_2",e.MEDLEMSKAPSVILKÅRET_LØPENDE="FP_VK_2_L",e.SOKNADFRISTVILKARET="FP_VK_3",e.ADOPSJONSVILKARET="FP_VK_4",e.OMSORGSVILKARET="FP_VK_5",e.FORELDREANSVARSVILKARET_2_LEDD="FP_VK_8",e.FODSELSVILKARET_FAR="FP_VK_11",e.ADOPSJONSVILKARET_FORELDREPENGER="FP_VK_16",e.OPPTJENINGSPERIODE="FP_VK_21",e.OPPTJENINGSVILKARET="FP_VK_23",e.FORELDREANSVARSVILKARET_4_LEDD="FP_VK_33",e.SOKERSOPPLYSNINGSPLIKT="FP_VK_34",e.BEREGNINGSGRUNNLAGVILKARET="FP_VK_41",e))(cs||{});const aa={OPPFYLT:"OPPFYLT",IKKE_OPPFYLT:"IKKE_OPPFYLT",IKKE_VURDERT:"IKKE_VURDERT"},Vg={TILBAKEKR_OPPRETT:"TILBAKEKR_OPPRETT",TILBAKEKR_IGNORER:"TILBAKEKR_IGNORER",TILBAKEKR_INNTREKK:"TILBAKEKR_INNTREKK",TILBAKEKR_OPPDATER:"TILBAKEKR_OPPDATER"};var At=e=>e.type==="checkbox",un=e=>e instanceof Date,Ge=e=>e==null;const wl=e=>typeof e=="object";var Ke=e=>!Ge(e)&&!Array.isArray(e)&&wl(e)&&!un(e),Bl=e=>Ke(e)&&e.target?At(e.target)?e.target.checked:e.target.value:e,Gg=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,jl=(e,r)=>e.has(Gg(r)),wg=e=>{const r=e.constructor&&e.constructor.prototype;return Ke(r)&&r.hasOwnProperty("isPrototypeOf")},_s=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function we(e){let r;const n=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(_s&&(e instanceof Blob||e instanceof FileList))&&(n||Ke(e)))if(r=n?[]:{},!n&&!wg(e))r=e;else for(const t in e)e.hasOwnProperty(t)&&(r[t]=we(e[t]));else return e;return r}var sa=e=>Array.isArray(e)?e.filter(Boolean):[],pe=e=>e===void 0,D=(e,r,n)=>{if(!r||!Ke(e))return n;const t=sa(r.split(/[,[\].]+?/)).reduce((a,s)=>Ge(a)?a:a[s],e);return pe(t)||t===e?pe(e[r])?n:e[r]:t},kr=e=>typeof e=="boolean",hs=e=>/^\w*$/.test(e),Ul=e=>sa(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ue=(e,r,n)=>{let t=-1;const a=hs(r)?[r]:Ul(r),s=a.length,i=s-1;for(;++t<s;){const o=a[t];let l=n;if(t!==i){const u=e[o];l=Ke(u)||Array.isArray(u)?u:isNaN(+a[t+1])?{}:[]}if(o==="__proto__")return;e[o]=l,e=e[o]}return e};const Ct={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},rr={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ar={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},ql=c.createContext(null),An=()=>c.useContext(ql),Bg=e=>{const{children:r,...n}=e;return c.createElement(ql.Provider,{value:n},r)};var Hl=(e,r,n,t=!0)=>{const a={defaultValues:r._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const i=s;return r._proxyFormState[i]!==rr.all&&(r._proxyFormState[i]=!t||rr.all),n&&(n[i]=!0),e[i]}});return a},He=e=>Ke(e)&&!Object.keys(e).length,Yl=(e,r,n,t)=>{n(e);const{name:a,...s}=e;return He(s)||Object.keys(s).length>=Object.keys(r).length||Object.keys(s).find(i=>r[i]===(!t||rr.all))},lt=e=>Array.isArray(e)?e:[e],xl=(e,r,n)=>!e||!r||e===r||lt(e).some(t=>t&&(n?t===r:t.startsWith(r)||r.startsWith(t)));function Ss(e){const r=c.useRef(e);r.current=e,c.useEffect(()=>{const n=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function jg(e){const r=An(),{control:n=r.control,disabled:t,name:a,exact:s}=e||{},[i,o]=c.useState(n._formState),l=c.useRef(!0),u=c.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=c.useRef(a);return d.current=a,Ss({disabled:t,next:k=>l.current&&xl(d.current,k.name,s)&&Yl(k,u.current,n._updateFormState)&&o({...n._formState,...k}),subject:n._subjects.state}),c.useEffect(()=>(l.current=!0,u.current.isValid&&n._updateValid(!0),()=>{l.current=!1}),[n]),Hl(i,n,u.current,!1)}var vr=e=>typeof e=="string",Cl=(e,r,n,t,a)=>vr(e)?(t&&r.watch.add(e),D(n,e,a)):Array.isArray(e)?e.map(s=>(t&&r.watch.add(s),D(n,s))):(t&&(r.watchAll=!0),n);function Ug(e){const r=An(),{control:n=r.control,name:t,defaultValue:a,disabled:s,exact:i}=e||{},o=c.useRef(t);o.current=t,Ss({disabled:s,subject:n._subjects.values,next:d=>{xl(o.current,d.name,i)&&u(we(Cl(o.current,n._names,d.values||n._formValues,!1,a)))}});const[l,u]=c.useState(n._getWatch(t,a));return c.useEffect(()=>n._removeUnmounted()),l}function qg(e){const r=An(),{name:n,disabled:t,control:a=r.control,shouldUnregister:s}=e,i=jl(a._names.array,n),o=Ug({control:a,name:n,defaultValue:D(a._formValues,n,D(a._defaultValues,n,e.defaultValue)),exact:!0}),l=jg({control:a,name:n}),u=c.useRef(a.register(n,{...e.rules,value:o,...kr(e.disabled)?{disabled:e.disabled}:{}}));return c.useEffect(()=>{const d=a._options.shouldUnregister||s,k=(m,y)=>{const _=D(a._fields,m);_&&_._f&&(_._f.mount=y)};if(k(n,!0),d){const m=we(D(a._options.defaultValues,n));ue(a._defaultValues,n,m),pe(D(a._formValues,n))&&ue(a._formValues,n,m)}return()=>{(i?d&&!a._state.action:d)?a.unregister(n):k(n,!1)}},[n,a,i,s]),c.useEffect(()=>{D(a._fields,n)&&a._updateDisabledField({disabled:t,fields:a._fields,name:n,value:D(a._fields,n)._f.value})},[t,n,a]),{field:{name:n,value:o,...kr(t)||l.disabled?{disabled:l.disabled||t}:{},onChange:c.useCallback(d=>u.current.onChange({target:{value:Bl(d),name:n},type:Ct.CHANGE}),[n]),onBlur:c.useCallback(()=>u.current.onBlur({target:{value:D(a._formValues,n),name:n},type:Ct.BLUR}),[n,a]),ref:d=>{const k=D(a._fields,n);k&&d&&(k._f.ref={focus:()=>d.focus(),select:()=>d.select(),setCustomValidity:m=>d.setCustomValidity(m),reportValidity:()=>d.reportValidity()})}},formState:l,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!D(l.errors,n)},isDirty:{enumerable:!0,get:()=>!!D(l.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!D(l.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!D(l.validatingFields,n)},error:{enumerable:!0,get:()=>D(l.errors,n)}})}}var Hg=(e,r,n,t,a)=>r?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[t]:a||!0}}:{},vi=e=>({isOnSubmit:!e||e===rr.onSubmit,isOnBlur:e===rr.onBlur,isOnChange:e===rr.onChange,isOnAll:e===rr.all,isOnTouch:e===rr.onTouched}),mi=(e,r,n)=>!n&&(r.watchAll||r.watch.has(e)||[...r.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const dt=(e,r,n,t)=>{for(const a of n||Object.keys(e)){const s=D(e,a);if(s){const{_f:i,...o}=s;if(i){if(i.refs&&i.refs[0]&&r(i.refs[0],a)&&!t)break;if(i.ref&&r(i.ref,i.name)&&!t)break;dt(o,r)}else Ke(o)&&dt(o,r)}}};var Yg=(e,r,n)=>{const t=lt(D(e,n));return ue(t,"root",r[n]),ue(e,n,t),e},Ns=e=>e.type==="file",Fr=e=>typeof e=="function",$t=e=>{if(!_s)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Ut=e=>vr(e),Os=e=>e.type==="radio",Jt=e=>e instanceof RegExp;const fi={value:!1,isValid:!1},Ti={value:!0,isValid:!0};var $l=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!pe(e[0].attributes.value)?pe(e[0].value)||e[0].value===""?Ti:{value:e[0].value,isValid:!0}:Ti:fi}return fi};const Ri={isValid:!1,value:null};var Jl=e=>Array.isArray(e)?e.reduce((r,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:r,Ri):Ri;function yi(e,r,n="validate"){if(Ut(e)||Array.isArray(e)&&e.every(Ut)||kr(e)&&!e)return{type:n,message:Ut(e)?e:"",ref:r}}var an=e=>Ke(e)&&!Jt(e)?e:{value:e,message:""},Ai=async(e,r,n,t,a)=>{const{ref:s,refs:i,required:o,maxLength:l,minLength:u,min:d,max:k,pattern:m,validate:y,name:_,valueAsNumber:v,mount:A,disabled:h}=e._f,p=D(r,_);if(!A||h)return{};const b=i?i[0]:s,B=K=>{t&&b.reportValidity&&(b.setCustomValidity(kr(K)?"":K||""),b.reportValidity())},P={},j=Os(s),N=At(s),S=j||N,G=(v||Ns(s))&&pe(s.value)&&pe(p)||$t(s)&&s.value===""||p===""||Array.isArray(p)&&!p.length,U=Hg.bind(null,_,n,P),q=(K,M,H,$=Ar.maxLength,se=Ar.minLength)=>{const de=K?M:H;P[_]={type:K?$:se,message:de,ref:s,...U(K?$:se,de)}};if(a?!Array.isArray(p)||!p.length:o&&(!S&&(G||Ge(p))||kr(p)&&!p||N&&!$l(i).isValid||j&&!Jl(i).isValid)){const{value:K,message:M}=Ut(o)?{value:!!o,message:o}:an(o);if(K&&(P[_]={type:Ar.required,message:M,ref:b,...U(Ar.required,M)},!n))return B(M),P}if(!G&&(!Ge(d)||!Ge(k))){let K,M;const H=an(k),$=an(d);if(!Ge(p)&&!isNaN(p)){const se=s.valueAsNumber||p&&+p;Ge(H.value)||(K=se>H.value),Ge($.value)||(M=se<$.value)}else{const se=s.valueAsDate||new Date(p),de=Ne=>new Date(new Date().toDateString()+" "+Ne),ce=s.type=="time",he=s.type=="week";vr(H.value)&&p&&(K=ce?de(p)>de(H.value):he?p>H.value:se>new Date(H.value)),vr($.value)&&p&&(M=ce?de(p)<de($.value):he?p<$.value:se<new Date($.value))}if((K||M)&&(q(!!K,H.message,$.message,Ar.max,Ar.min),!n))return B(P[_].message),P}if((l||u)&&!G&&(vr(p)||a&&Array.isArray(p))){const K=an(l),M=an(u),H=!Ge(K.value)&&p.length>+K.value,$=!Ge(M.value)&&p.length<+M.value;if((H||$)&&(q(H,K.message,M.message),!n))return B(P[_].message),P}if(m&&!G&&vr(p)){const{value:K,message:M}=an(m);if(Jt(K)&&!p.match(K)&&(P[_]={type:Ar.pattern,message:M,ref:s,...U(Ar.pattern,M)},!n))return B(M),P}if(y){if(Fr(y)){const K=await y(p,r),M=yi(K,b);if(M&&(P[_]={...M,...U(Ar.validate,M.message)},!n))return B(M.message),P}else if(Ke(y)){let K={};for(const M in y){if(!He(K)&&!n)break;const H=yi(await y[M](p,r),b,M);H&&(K={...H,...U(M,H.message)},B(H.message),n&&(P[_]=K))}if(!He(K)&&(P[_]={ref:b,...K},!n))return P}}return B(!0),P};function xg(e,r){const n=r.slice(0,-1).length;let t=0;for(;t<n;)e=pe(e)?t++:e[r[t++]];return e}function Cg(e){for(const r in e)if(e.hasOwnProperty(r)&&!pe(e[r]))return!1;return!0}function Oe(e,r){const n=Array.isArray(r)?r:hs(r)?[r]:Ul(r),t=n.length===1?e:xg(e,n),a=n.length-1,s=n[a];return t&&delete t[s],a!==0&&(Ke(t)&&He(t)||Array.isArray(t)&&Cg(t))&&Oe(e,n.slice(0,-1)),e}var wa=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},Wt=e=>Ge(e)||!wl(e);function Yr(e,r){if(Wt(e)||Wt(r))return e===r;if(un(e)&&un(r))return e.getTime()===r.getTime();const n=Object.keys(e),t=Object.keys(r);if(n.length!==t.length)return!1;for(const a of n){const s=e[a];if(!t.includes(a))return!1;if(a!=="ref"){const i=r[a];if(un(s)&&un(i)||Ke(s)&&Ke(i)||Array.isArray(s)&&Array.isArray(i)?!Yr(s,i):s!==i)return!1}}return!0}var Wl=e=>e.type==="select-multiple",$g=e=>Os(e)||At(e),Ba=e=>$t(e)&&e.isConnected,zl=e=>{for(const r in e)if(Fr(e[r]))return!0;return!1};function zt(e,r={}){const n=Array.isArray(e);if(Ke(e)||n)for(const t in e)Array.isArray(e[t])||Ke(e[t])&&!zl(e[t])?(r[t]=Array.isArray(e[t])?[]:{},zt(e[t],r[t])):Ge(e[t])||(r[t]=!0);return r}function Zl(e,r,n){const t=Array.isArray(e);if(Ke(e)||t)for(const a in e)Array.isArray(e[a])||Ke(e[a])&&!zl(e[a])?pe(r)||Wt(n[a])?n[a]=Array.isArray(e[a])?zt(e[a],[]):{...zt(e[a])}:Zl(e[a],Ge(r)?{}:r[a],n[a]):n[a]=!Yr(e[a],r[a]);return n}var Lt=(e,r)=>Zl(e,r,zt(r)),Xl=(e,{valueAsNumber:r,valueAsDate:n,setValueAs:t})=>pe(e)?e:r?e===""?NaN:e&&+e:n&&vr(e)?new Date(e):t?t(e):e;function ja(e){const r=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):r.disabled))return Ns(r)?r.files:Os(r)?Jl(e.refs).value:Wl(r)?[...r.selectedOptions].map(({value:n})=>n):At(r)?$l(e.refs).value:Xl(pe(r.value)?e.ref.value:r.value,e)}var Jg=(e,r,n,t)=>{const a={};for(const s of e){const i=D(r,s);i&&ue(a,s,i._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:t}},In=e=>pe(e)?e:Jt(e)?e.source:Ke(e)?Jt(e.value)?e.value.source:e.value:e,Wg=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function pi(e,r,n){const t=D(e,n);if(t||hs(n))return{error:t,name:n};const a=n.split(".");for(;a.length;){const s=a.join("."),i=D(r,s),o=D(e,s);if(i&&!Array.isArray(i)&&n!==s)return{name:n};if(o&&o.type)return{name:s,error:o};a.pop()}return{name:n}}var zg=(e,r,n,t,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(r||e):(n?t.isOnBlur:a.isOnBlur)?!e:(n?t.isOnChange:a.isOnChange)?e:!0,Zg=(e,r)=>!sa(D(e,r)).length&&Oe(e,r);const Xg={mode:rr.onSubmit,reValidateMode:rr.onChange,shouldFocusError:!0};function Qg(e={}){let r={...Xg,...e},n={submitCount:0,isDirty:!1,isLoading:Fr(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},t={},a=Ke(r.defaultValues)||Ke(r.values)?we(r.defaultValues||r.values)||{}:{},s=r.shouldUnregister?{}:we(a),i={action:!1,mount:!1,watch:!1},o={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},k={values:wa(),array:wa(),state:wa()},m=vi(r.mode),y=vi(r.reValidateMode),_=r.criteriaMode===rr.all,v=g=>f=>{clearTimeout(u),u=setTimeout(g,f)},A=async g=>{if(d.isValid||g){const f=r.resolver?He((await S()).errors):await U(t,!0);f!==n.isValid&&k.state.next({isValid:f})}},h=(g,f)=>{(d.isValidating||d.validatingFields)&&((g||Array.from(o.mount)).forEach(R=>{R&&(f?ue(n.validatingFields,R,f):Oe(n.validatingFields,R))}),k.state.next({validatingFields:n.validatingFields,isValidating:!He(n.validatingFields)}))},p=(g,f=[],R,V,L=!0,I=!0)=>{if(V&&R){if(i.action=!0,I&&Array.isArray(D(t,g))){const x=R(D(t,g),V.argA,V.argB);L&&ue(t,g,x)}if(I&&Array.isArray(D(n.errors,g))){const x=R(D(n.errors,g),V.argA,V.argB);L&&ue(n.errors,g,x),Zg(n.errors,g)}if(d.touchedFields&&I&&Array.isArray(D(n.touchedFields,g))){const x=R(D(n.touchedFields,g),V.argA,V.argB);L&&ue(n.touchedFields,g,x)}d.dirtyFields&&(n.dirtyFields=Lt(a,s)),k.state.next({name:g,isDirty:K(g,f),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else ue(s,g,f)},b=(g,f)=>{ue(n.errors,g,f),k.state.next({errors:n.errors})},B=g=>{n.errors=g,k.state.next({errors:n.errors,isValid:!1})},P=(g,f,R,V)=>{const L=D(t,g);if(L){const I=D(s,g,pe(R)?D(a,g):R);pe(I)||V&&V.defaultChecked||f?ue(s,g,f?I:ja(L._f)):$(g,I),i.mount&&A()}},j=(g,f,R,V,L)=>{let I=!1,x=!1;const ie={name:g},Se=!!(D(t,g)&&D(t,g)._f&&D(t,g)._f.disabled);if(!R||V){d.isDirty&&(x=n.isDirty,n.isDirty=ie.isDirty=K(),I=x!==ie.isDirty);const qe=Se||Yr(D(a,g),f);x=!!(!Se&&D(n.dirtyFields,g)),qe||Se?Oe(n.dirtyFields,g):ue(n.dirtyFields,g,!0),ie.dirtyFields=n.dirtyFields,I=I||d.dirtyFields&&x!==!qe}if(R){const qe=D(n.touchedFields,g);qe||(ue(n.touchedFields,g,R),ie.touchedFields=n.touchedFields,I=I||d.touchedFields&&qe!==R)}return I&&L&&k.state.next(ie),I?ie:{}},N=(g,f,R,V)=>{const L=D(n.errors,g),I=d.isValid&&kr(f)&&n.isValid!==f;if(e.delayError&&R?(l=v(()=>b(g,R)),l(e.delayError)):(clearTimeout(u),l=null,R?ue(n.errors,g,R):Oe(n.errors,g)),(R?!Yr(L,R):L)||!He(V)||I){const x={...V,...I&&kr(f)?{isValid:f}:{},errors:n.errors,name:g};n={...n,...x},k.state.next(x)}},S=async g=>{h(g,!0);const f=await r.resolver(s,r.context,Jg(g||o.mount,t,r.criteriaMode,r.shouldUseNativeValidation));return h(g),f},G=async g=>{const{errors:f}=await S(g);if(g)for(const R of g){const V=D(f,R);V?ue(n.errors,R,V):Oe(n.errors,R)}else n.errors=f;return f},U=async(g,f,R={valid:!0})=>{for(const V in g){const L=g[V];if(L){const{_f:I,...x}=L;if(I){const ie=o.array.has(I.name);h([V],!0);const Se=await Ai(L,s,_,r.shouldUseNativeValidation&&!f,ie);if(h([V]),Se[I.name]&&(R.valid=!1,f))break;!f&&(D(Se,I.name)?ie?Yg(n.errors,Se,I.name):ue(n.errors,I.name,Se[I.name]):Oe(n.errors,I.name))}x&&await U(x,f,R)}}return R.valid},q=()=>{for(const g of o.unMount){const f=D(t,g);f&&(f._f.refs?f._f.refs.every(R=>!Ba(R)):!Ba(f._f.ref))&&hn(g)}o.unMount=new Set},K=(g,f)=>(g&&f&&ue(s,g,f),!Yr(lr(),a)),M=(g,f,R)=>Cl(g,o,{...i.mount?s:pe(f)?a:vr(g)?{[g]:f}:f},R,f),H=g=>sa(D(i.mount?s:a,g,e.shouldUnregister?D(a,g,[]):[])),$=(g,f,R={})=>{const V=D(t,g);let L=f;if(V){const I=V._f;I&&(!I.disabled&&ue(s,g,Xl(f,I)),L=$t(I.ref)&&Ge(f)?"":f,Wl(I.ref)?[...I.ref.options].forEach(x=>x.selected=L.includes(x.value)):I.refs?At(I.ref)?I.refs.length>1?I.refs.forEach(x=>(!x.defaultChecked||!x.disabled)&&(x.checked=Array.isArray(L)?!!L.find(ie=>ie===x.value):L===x.value)):I.refs[0]&&(I.refs[0].checked=!!L):I.refs.forEach(x=>x.checked=x.value===L):Ns(I.ref)?I.ref.value="":(I.ref.value=L,I.ref.type||k.values.next({name:g,values:{...s}})))}(R.shouldDirty||R.shouldTouch)&&j(g,L,R.shouldTouch,R.shouldDirty,!0),R.shouldValidate&&Ne(g)},se=(g,f,R)=>{for(const V in f){const L=f[V],I=`${g}.${V}`,x=D(t,I);(o.array.has(g)||!Wt(L)||x&&!x._f)&&!un(L)?se(I,L,R):$(I,L,R)}},de=(g,f,R={})=>{const V=D(t,g),L=o.array.has(g),I=we(f);ue(s,g,I),L?(k.array.next({name:g,values:{...s}}),(d.isDirty||d.dirtyFields)&&R.shouldDirty&&k.state.next({name:g,dirtyFields:Lt(a,s),isDirty:K(g,I)})):V&&!V._f&&!Ge(I)?se(g,I,R):$(g,I,R),mi(g,o)&&k.state.next({...n}),k.values.next({name:i.mount?g:void 0,values:{...s}})},ce=async g=>{i.mount=!0;const f=g.target;let R=f.name,V=!0;const L=D(t,R),I=()=>f.type?ja(L._f):Bl(g),x=ie=>{V=Number.isNaN(ie)||ie===D(s,R,ie)};if(L){let ie,Se;const qe=I(),tn=g.type===Ct.BLUR||g.type===Ct.FOCUS_OUT,mg=!Wg(L._f)&&!r.resolver&&!D(n.errors,R)&&!L._f.deps||zg(tn,D(n.touchedFields,R),n.isSubmitted,y,m),Va=mi(R,o,tn);ue(s,R,qe),tn?(L._f.onBlur&&L._f.onBlur(g),l&&l(0)):L._f.onChange&&L._f.onChange(g);const Ga=j(R,qe,tn,!1),fg=!He(Ga)||Va;if(!tn&&k.values.next({name:R,type:g.type,values:{...s}}),mg)return d.isValid&&A(),fg&&k.state.next({name:R,...Va?{}:Ga});if(!tn&&Va&&k.state.next({...n}),r.resolver){const{errors:gi}=await S([R]);if(x(qe),V){const Tg=pi(n.errors,t,R),ki=pi(gi,t,Tg.name||R);ie=ki.error,R=ki.name,Se=He(gi)}}else h([R],!0),ie=(await Ai(L,s,_,r.shouldUseNativeValidation))[R],h([R]),x(qe),V&&(ie?Se=!1:d.isValid&&(Se=await U(t,!0)));V&&(L._f.deps&&Ne(L._f.deps),N(R,Se,ie,Ga))}},he=(g,f)=>{if(D(n.errors,f)&&g.focus)return g.focus(),1},Ne=async(g,f={})=>{let R,V;const L=lt(g);if(r.resolver){const I=await G(pe(g)?g:L);R=He(I),V=g?!L.some(x=>D(I,x)):R}else g?(V=(await Promise.all(L.map(async I=>{const x=D(t,I);return await U(x&&x._f?{[I]:x}:x)}))).every(Boolean),!(!V&&!n.isValid)&&A()):V=R=await U(t);return k.state.next({...!vr(g)||d.isValid&&R!==n.isValid?{}:{name:g},...r.resolver||!g?{isValid:R}:{},errors:n.errors}),f.shouldFocus&&!V&&dt(t,he,g?L:o.mount),V},lr=g=>{const f={...i.mount?s:a};return pe(g)?f:vr(g)?D(f,g):g.map(R=>D(f,R))},It=(g,f)=>({invalid:!!D((f||n).errors,g),isDirty:!!D((f||n).dirtyFields,g),error:D((f||n).errors,g),isValidating:!!D(n.validatingFields,g),isTouched:!!D((f||n).touchedFields,g)}),Fa=g=>{g&&lt(g).forEach(f=>Oe(n.errors,f)),k.state.next({errors:g?n.errors:{}})},Kt=(g,f,R)=>{const V=(D(t,g,{_f:{}})._f||{}).ref,L=D(n.errors,g)||{},{ref:I,message:x,type:ie,...Se}=L;ue(n.errors,g,{...Se,...f,ref:V}),k.state.next({name:g,errors:n.errors,isValid:!1}),R&&R.shouldFocus&&V&&V.focus&&V.focus()},Ma=(g,f)=>Fr(g)?k.values.subscribe({next:R=>g(M(void 0,f),R)}):M(g,f,!0),hn=(g,f={})=>{for(const R of g?lt(g):o.mount)o.mount.delete(R),o.array.delete(R),f.keepValue||(Oe(t,R),Oe(s,R)),!f.keepError&&Oe(n.errors,R),!f.keepDirty&&Oe(n.dirtyFields,R),!f.keepTouched&&Oe(n.touchedFields,R),!f.keepIsValidating&&Oe(n.validatingFields,R),!r.shouldUnregister&&!f.keepDefaultValue&&Oe(a,R);k.values.next({values:{...s}}),k.state.next({...n,...f.keepDirty?{isDirty:K()}:{}}),!f.keepIsValid&&A()},Sn=({disabled:g,name:f,field:R,fields:V,value:L})=>{if(kr(g)&&i.mount||g){const I=g?void 0:pe(L)?ja(R?R._f:D(V,f)._f):L;ue(s,f,I),j(f,I,!1,!1,!0)}},jr=(g,f={})=>{let R=D(t,g);const V=kr(f.disabled);return ue(t,g,{...R||{},_f:{...R&&R._f?R._f:{ref:{name:g}},name:g,mount:!0,...f}}),o.mount.add(g),R?Sn({field:R,disabled:f.disabled,name:g,value:f.value}):P(g,!0,f.value),{...V?{disabled:f.disabled}:{},...r.progressive?{required:!!f.required,min:In(f.min),max:In(f.max),minLength:In(f.minLength),maxLength:In(f.maxLength),pattern:In(f.pattern)}:{},name:g,onChange:ce,onBlur:ce,ref:L=>{if(L){jr(g,f),R=D(t,g);const I=pe(L.value)&&L.querySelectorAll&&L.querySelectorAll("input,select,textarea")[0]||L,x=$g(I),ie=R._f.refs||[];if(x?ie.find(Se=>Se===I):I===R._f.ref)return;ue(t,g,{_f:{...R._f,...x?{refs:[...ie.filter(Ba),I,...Array.isArray(D(a,g))?[{}]:[]],ref:{type:I.type,name:g}}:{ref:I}}}),P(g,!1,void 0,I)}else R=D(t,g,{}),R._f&&(R._f.mount=!1),(r.shouldUnregister||f.shouldUnregister)&&!(jl(o.array,g)&&i.action)&&o.unMount.add(g)}}},en=()=>r.shouldFocusError&&dt(t,he,o.mount),Nn=g=>{kr(g)&&(k.state.next({disabled:g}),dt(t,(f,R)=>{const V=D(t,R);V&&(f.disabled=V._f.disabled||g,Array.isArray(V._f.refs)&&V._f.refs.forEach(L=>{L.disabled=V._f.disabled||g}))},0,!1))},Ur=(g,f)=>async R=>{let V;R&&(R.preventDefault&&R.preventDefault(),R.persist&&R.persist());let L=we(s);if(k.state.next({isSubmitting:!0}),r.resolver){const{errors:I,values:x}=await S();n.errors=I,L=x}else await U(t);if(Oe(n.errors,"root"),He(n.errors)){k.state.next({errors:{}});try{await g(L,R)}catch(I){V=I}}else f&&await f({...n.errors},R),en(),setTimeout(en);if(k.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:He(n.errors)&&!V,submitCount:n.submitCount+1,errors:n.errors}),V)throw V},On=(g,f={})=>{D(t,g)&&(pe(f.defaultValue)?de(g,we(D(a,g))):(de(g,f.defaultValue),ue(a,g,we(f.defaultValue))),f.keepTouched||Oe(n.touchedFields,g),f.keepDirty||(Oe(n.dirtyFields,g),n.isDirty=f.defaultValue?K(g,we(D(a,g))):K()),f.keepError||(Oe(n.errors,g),d.isValid&&A()),k.state.next({...n}))},rn=(g,f={})=>{const R=g?we(g):a,V=we(R),L=He(g),I=L?a:V;if(f.keepDefaultValues||(a=R),!f.keepValues){if(f.keepDirtyValues)for(const x of o.mount)D(n.dirtyFields,x)?ue(I,x,D(s,x)):de(x,D(I,x));else{if(_s&&pe(g))for(const x of o.mount){const ie=D(t,x);if(ie&&ie._f){const Se=Array.isArray(ie._f.refs)?ie._f.refs[0]:ie._f.ref;if($t(Se)){const qe=Se.closest("form");if(qe){qe.reset();break}}}}t={}}s=e.shouldUnregister?f.keepDefaultValues?we(a):{}:we(I),k.array.next({values:{...I}}),k.values.next({values:{...I}})}o={mount:f.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!d.isValid||!!f.keepIsValid||!!f.keepDirtyValues,i.watch=!!e.shouldUnregister,k.state.next({submitCount:f.keepSubmitCount?n.submitCount:0,isDirty:L?!1:f.keepDirty?n.isDirty:!!(f.keepDefaultValues&&!Yr(g,a)),isSubmitted:f.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:L?{}:f.keepDirtyValues?f.keepDefaultValues&&s?Lt(a,s):n.dirtyFields:f.keepDefaultValues&&g?Lt(a,g):f.keepDirty?n.dirtyFields:{},touchedFields:f.keepTouched?n.touchedFields:{},errors:f.keepErrors?n.errors:{},isSubmitSuccessful:f.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},nn=(g,f)=>rn(Fr(g)?g(s):g,f);return{control:{register:jr,unregister:hn,getFieldState:It,handleSubmit:Ur,setError:Kt,_executeSchema:S,_getWatch:M,_getDirty:K,_updateValid:A,_removeUnmounted:q,_updateFieldArray:p,_updateDisabledField:Sn,_getFieldArray:H,_reset:rn,_resetDefaultValues:()=>Fr(r.defaultValues)&&r.defaultValues().then(g=>{nn(g,r.resetOptions),k.state.next({isLoading:!1})}),_updateFormState:g=>{n={...n,...g}},_disableForm:Nn,_subjects:k,_proxyFormState:d,_setErrors:B,get _fields(){return t},get _formValues(){return s},get _state(){return i},set _state(g){i=g},get _defaultValues(){return a},get _names(){return o},set _names(g){o=g},get _formState(){return n},set _formState(g){n=g},get _options(){return r},set _options(g){r={...r,...g}}},trigger:Ne,register:jr,handleSubmit:Ur,watch:Ma,setValue:de,getValues:lr,reset:nn,resetField:On,clearErrors:Fa,unregister:hn,setError:Kt,setFocus:(g,f={})=>{const R=D(t,g),V=R&&R._f;if(V){const L=V.refs?V.refs[0]:V.ref;L.focus&&(L.focus(),f.shouldSelect&&L.select())}},getFieldState:It}}function Ql(e={}){const r=c.useRef(),n=c.useRef(),[t,a]=c.useState({isDirty:!1,isValidating:!1,isLoading:Fr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Fr(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...Qg(e),formState:t});const s=r.current.control;return s._options=e,Ss({subject:s._subjects.state,next:i=>{Yl(i,s._proxyFormState,s._updateFormState,!0)&&a({...s._formState})}}),c.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),c.useEffect(()=>{if(s._proxyFormState.isDirty){const i=s._getDirty();i!==t.isDirty&&s._subjects.state.next({isDirty:i})}},[s,t.isDirty]),c.useEffect(()=>{e.values&&!Yr(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,a(i=>({...i}))):s._resetDefaultValues()},[e.values,s]),c.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),c.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),c.useEffect(()=>{e.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[e.shouldUnregister,s]),r.current.formState=Hl(t,s),r.current}function ed(e){var r,n,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(n=ed(e[r]))&&(t&&(t+=" "),t+=n)}else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function ve(){for(var e,r,n=0,t="",a=arguments.length;n<a;n++)(e=arguments[n])&&(r=ed(e))&&(t&&(t+=" "),t+=r);return t}const pn=e=>ve({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var ek=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const rd=T.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,k=ek(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return c.createElement(a,Object.assign({},k,{ref:r,className:ve(n,"navds-body-long",`navds-body-long--${t}`,pn({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var rk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const nk=T.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,k=rk(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return c.createElement(a,Object.assign({},k,{ref:r,className:ve(n,"navds-body-short",`navds-body-short--${t}`,pn({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))}),Ze=nk;var tk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const wr=T.forwardRef((e,r)=>{var{className:n,size:t="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:k}=e,m=tk(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return c.createElement(i,Object.assign({},m,{ref:r,className:ve(n,"navds-detail",pn({spacing:a,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:k,uppercase:s}),{"navds-detail--small":t==="small"})}))});var ak=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const sk=T.forwardRef((e,r)=>{var{className:n,size:t,spacing:a,as:s="p"}=e,i=ak(e,["className","size","spacing","as"]);return c.createElement(s,Object.assign({},i,{ref:r,className:ve("navds-error-message","navds-label",n,pn({spacing:a}),{"navds-label--small":t==="small"})}))});var ik=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ok=T.forwardRef((e,r)=>{var{level:n="1",size:t,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:u}=e,d=ik(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const k=s??`h${n}`;return c.createElement(k,Object.assign({},d,{ref:r,className:ve(a,"navds-heading",`navds-heading--${t}`,pn({spacing:i,align:o,visuallyHidden:l,textColor:u}))}))}),Is=ok;var lk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};T.forwardRef((e,r)=>{var{className:n,spacing:t,as:a="p"}=e,s=lk(e,["className","spacing","as"]);return c.createElement(a,Object.assign({},s,{ref:r,className:ve(n,"navds-ingress",{"navds-typo--spacing":!!t})}))});var dk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const je=T.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=dk(e,["className","size","as","spacing","visuallyHidden","textColor"]);return c.createElement(a,Object.assign({},l,{ref:r,className:ve(n,"navds-label",pn({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":t==="small"})}))});function nd(e,r=166){let n;function t(...a){const s=()=>{e.apply(this,a)};clearTimeout(n),n=setTimeout(s,r)}return t.clear=()=>{clearTimeout(n)},t}function Ks(e,r){const n=Object.entries(e).filter(([t])=>!r.includes(t));return Object.fromEntries(n)}const Za=globalThis!=null&&globalThis.document?T.useLayoutEffect:()=>{};let bi=0;function uk(e){const[r,n]=T.useState(e),t=e||r;return T.useEffect(()=>{r==null&&(bi+=1,n(`aksel-id-${bi}`))},[r]),t}const ci=c.useId;function ia(e){var r;return ci!==void 0?ci().replace(/(:)/g,""):(r=uk(e))!==null&&r!==void 0?r:""}let _i=0;function gk(e){const[r,n]=T.useState(e),t=e||r;return T.useEffect(()=>{r==null&&(_i+=1,n(`aksel-icon-${_i}`))},[r]),t}const hi=c.useId;function Dr(e){var r;return hi!==void 0?hi().replace(/(:)/g,""):(r=gk(e))!==null&&r!==void 0?r:""}var kk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const td=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=kk(e,["title","titleId"]);let s=Dr();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var Ek=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ad=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=Ek(e,["title","titleId"]);let s=Dr();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var vk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const mk=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=vk(e,["title","titleId"]);let s=Dr();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var fk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Tk=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=fk(e,["title","titleId"]);let s=Dr();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Rk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const yk=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=Rk(e,["title","titleId"]);let s=Dr();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Ak=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Si=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=Ak(e,["title","titleId"]);let s=Dr();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M19.638 4.417a3.25 3.25 0 0 0-4.608-.008l-9.378 9.379a.75.75 0 0 0-.191.324l-1.414 4.95a.75.75 0 0 0 .925.927l4.94-1.398a.75.75 0 0 0 .327-.191l9.39-9.391a3.25 3.25 0 0 0 .01-4.592M16.091 5.47a1.752 1.752 0 1 1 2.478 2.478l-.23.23-2.477-2.479zM14.8 6.76 6.85 14.71l-.991 3.47 3.457-.979 7.963-7.963z",clipRule:"evenodd"}))});var pk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const bk=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=pk(e,["title","titleId"]);let s=Dr();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var ck=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const sd=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=ck(e,["title","titleId"]);let s=Dr();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var _k=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const id=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=_k(e,["title","titleId"]);let s=Dr();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function ut(e,r,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return r==null?void 0:r(a)}}function hk(e){return r=>{e.forEach(n=>{typeof n=="function"?n(r):n!=null&&(n.current=r)})}}function Ds(...e){return c.useCallback(hk(e),e)}var Sk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Nk=T.forwardRef((e,r)=>{var{className:n,size:t="medium",title:a="venter...",transparent:s=!1,variant:i="neutral",id:o}=e,l=Sk(e,["className","size","title","transparent","variant","id"]);const u=ia();return c.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${u}`,ref:r,className:ve("navds-loader",n,`navds-loader--${t}`,`navds-loader--${i}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},Ks(l,["children"])),c.createElement("title",{id:o??`loader-${u}`},a),c.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),c.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var Ok=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Tn=T.forwardRef((e,r)=>{var{as:n="button",variant:t="primary",className:a,children:s,size:i="medium",loading:o=!1,disabled:l,style:u,icon:d,iconPosition:k="left"}=e,m=Ok(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const y=T.useRef(null),[_,v]=T.useState(),A=Ds(y,r);Za(()=>{if(o){const b=window.requestAnimationFrame(()=>{var B,P;v((P=(B=y==null?void 0:y.current)===null||B===void 0?void 0:B.getBoundingClientRect())===null||P===void 0?void 0:P.width)});return()=>{v(void 0),cancelAnimationFrame(b)}}},[o,s]);const h=l??_?Ks(m,["href"]):m,p=b=>{b.key===" "&&!l&&!_&&b.currentTarget.click()};return c.createElement(n,Object.assign({},n!=="button"?{role:"button"}:{},h,{ref:A,onKeyUp:ut(h.onKeyUp,p),className:ve(a,"navds-button",`navds-button--${t}`,`navds-button--${i}`,{"navds-button--loading":_,"navds-button--icon-only":!!d&&!s,"navds-button--disabled":l??_}),style:Object.assign(Object.assign({},u),{width:_}),disabled:l??_?!0:void 0}),_?c.createElement(Nk,{size:i}):c.createElement(c.Fragment,null,d&&k==="left"&&c.createElement("span",{className:"navds-button__icon"},d),s&&c.createElement(je,{as:"span",size:i==="medium"?"medium":"small"},s),d&&k==="right"&&c.createElement("span",{className:"navds-button__icon"},d)))});var od=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Ik=e=>{var{variant:r}=e,n=od(e,["variant"]);switch(r){case"error":return c.createElement(id,Object.assign({title:"Feil"},n));case"warning":return c.createElement(mk,Object.assign({title:"Advarsel"},n));case"info":return c.createElement(Tk,Object.assign({title:"Informasjon"},n));case"success":return c.createElement(ad,Object.assign({title:"Suksess"},n));default:return null}},ld=T.forwardRef((e,r)=>{var{children:n,className:t,variant:a,size:s="medium",fullWidth:i=!1,contentMaxWidth:o=!0,inline:l=!1,closeButton:u=!1,onClose:d}=e,k=od(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);return c.createElement("div",Object.assign({},k,{ref:r,className:ve(t,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":i,"navds-alert--inline":l,"navds-alert--close-button":u})}),c.createElement(Ik,{variant:a,className:"navds-alert__icon"}),c.createElement(rd,{as:"div",size:s,className:ve("navds-alert__wrapper",o&&"navds-alert__wrapper--maxwidth")},n),u&&!l&&c.createElement("div",{className:"navds-alert__button-wrapper"},c.createElement(Tn,{className:"navds-alert__button",size:"small",variant:"tertiary-neutral",onClick:d,type:"button",icon:c.createElement(sd,{title:["error","warning"].includes(a)?"Lukk varsel":"Lukk melding"})})))});var gt=function(){return gt=Object.assign||function(r){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},gt.apply(this,arguments)};var dd={exports:{}},Kn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni;function Kk(){if(Ni)return Kn;Ni=1;var e=c,r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var d,k={},m=null,y=null;u!==void 0&&(m=""+u),l.key!==void 0&&(m=""+l.key),l.ref!==void 0&&(y=l.ref);for(d in l)t.call(l,d)&&!s.hasOwnProperty(d)&&(k[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)k[d]===void 0&&(k[d]=l[d]);return{$$typeof:r,type:o,key:m,ref:y,props:k,_owner:a.current}}return Kn.Fragment=n,Kn.jsx=i,Kn.jsxs=i,Kn}dd.exports=Kk();var Dk=dd.exports,Lk=T.createContext(void 0);function Pk(){var e=T.useContext(Lk);if(!e)throw new Error("useDayPicker must be used within a DayPickerProvider.");return e}T.createContext(void 0);T.forwardRef(function(e,r){var n=Pk(),t=n.classNames,a=n.styles,s=[t.button_reset,t.button];e.className&&s.push(e.className);var i=s.join(" "),o=gt(gt({},a.button_reset),a.button);return e.style&&Object.assign(o,e.style),Dk.jsx("button",gt({},e,{ref:r,type:"button",className:i,style:o}))});T.createContext(void 0);T.createContext(void 0);var mr;(function(e){e.Outside="outside",e.Disabled="disabled",e.Selected="selected",e.Hidden="hidden",e.Today="today",e.RangeStart="range_start",e.RangeEnd="range_end",e.RangeMiddle="range_middle"})(mr||(mr={}));mr.Selected;mr.Disabled;mr.Hidden;mr.Today;mr.RangeEnd;mr.RangeMiddle;mr.RangeStart;mr.Outside;T.createContext(void 0);T.createContext(void 0);T.createContext(void 0);const Fk=T.createContext(null);T.createContext({hasDropdown:!1,year:new Date,toYear:()=>null,disabled:[],onSelect:()=>null});const Mk=({readOnly:e,nativeReadOnly:r=!0})=>e?c.createElement(yk,Object.assign({},r?{"aria-hidden":!0}:{title:"readonly"},{className:"navds-form-field__readonly-icon"})):null,Vk=T.createContext(null),Gk=(e,r)=>{var n,t,a;const{size:s,error:i,errorId:o}=e,l=T.useContext(Vk),u=ia(),d=(n=e.id)!==null&&n!==void 0?n:`${r}-${u}`,k=o??`${r}-error-${u}`,m=`${r}-description-${u}`,y=(l==null?void 0:l.disabled)||e.disabled,_=((l==null?void 0:l.readOnly)||e.readOnly)&&!y||void 0,v=!y&&!_&&!!(i||l!=null&&l.error),A=!y&&!_&&!!i&&typeof i!="boolean",h=Object.assign({},v?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:A,hasError:v,errorId:k,inputDescriptionId:m,size:(t=s??(l==null?void 0:l.size))!==null&&t!==void 0?t:"medium",readOnly:_,inputProps:Object.assign(Object.assign({id:d},h),{"aria-describedby":ve(e["aria-describedby"],{[m]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[k]:A,[(a=l==null?void 0:l.errorId)!==null&&a!==void 0?a:""]:v&&!!(l!=null&&l.error)})||void 0,disabled:y})}};function wk(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function Bk(e){return e instanceof Element||e instanceof wk(e).Element}var Xa=typeof document<"u"?T.useLayoutEffect:T.useEffect;let Ua=!1,jk=0;const Oi=()=>"floating-ui-"+jk++;function Uk(){const[e,r]=T.useState(()=>Ua?Oi():void 0);return Xa(()=>{e==null&&r(Oi())},[]),T.useEffect(()=>{Ua||(Ua=!0)},[]),e}const qk=yg.useId,Hk=qk||Uk;function Yk(e){return"data-floating-ui-"+e}const xk=T.createContext(null);function Ck(e){let{id:r,root:n}=e===void 0?{}:e;const[t,a]=T.useState(null),s=Hk(),i=$k(),o=T.useMemo(()=>({id:r,root:n,portalContext:i,uniqueId:s}),[r,n,i,s]),l=T.useRef();return Xa(()=>()=>{t==null||t.remove()},[t,o]),Xa(()=>{if(l.current===o)return;l.current=o;const{id:u,root:d,portalContext:k,uniqueId:m}=o,y=u?document.getElementById(u):null,_=Yk("portal");if(y){const v=document.createElement("div");v.id=m,v.setAttribute(_,""),y.appendChild(v),a(v)}else{let v=d||(k==null?void 0:k.portalNode);v&&!Bk(v)&&(v=v.current),v=v||document.body;let A=null;u&&(A=document.createElement("div"),A.id=u,v.appendChild(A));const h=document.createElement("div");h.id=m,h.setAttribute(_,""),v=A||v,v.appendChild(h),a(h)}},[o]),t}const $k=()=>T.useContext(xk),Jk=T.createContext(void 0),Wk=()=>T.useContext(Jk);var zk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};function Zk(e,r){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${r}`}function Xk(e={}){const{name:r,hookName:n="useContext",providerName:t="Provider",errorMessage:a,defaultValue:s}=e,i=T.createContext(s),o=T.forwardRef((u,d)=>{var{children:k}=u,m=zk(u,["children"]);const y=c.useMemo(()=>m,Object.values(m));return c.createElement(i.Provider,{value:d?Object.assign(Object.assign({},y),{ref:d}):y},k)});function l(u=!0){var d;const k=T.useContext(i);if(!k&&u){const m=new Error(a??Zk(n,t));throw m.name="ContextError",(d=Error.captureStackTrace)===null||d===void 0||d.call(Error,m,l),m}return k}return i.displayName=r,[o,l]}const[Qk,ud]=Xk({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});var eE=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const rE=T.forwardRef((e,r)=>{var{className:n}=e,t=eE(e,["className"]);return c.createElement("div",Object.assign({},t,{ref:r,className:ve("navds-modal__body",n)}))});var nE=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const tE=T.forwardRef((e,r)=>{var{className:n}=e,t=nE(e,["className"]);return c.createElement("div",Object.assign({},t,{ref:r,className:ve("navds-modal__footer",n)}))});var aE=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const gd=T.forwardRef((e,r)=>{var{children:n,className:t,closeButton:a=!0}=e,s=aE(e,["children","className","closeButton"]);const i=ud();return c.createElement("div",Object.assign({},s,{ref:r,className:ve("navds-modal__header",t)}),i.closeHandler&&a&&c.createElement(Tn,{type:"button",className:"navds-modal__button",size:"small",variant:"tertiary-neutral",onClick:i.closeHandler,icon:c.createElement(sd,{title:"Lukk"})}),n)}),Ii=({clientX:e,clientY:r},{left:n,top:t,right:a,bottom:s})=>!(e<n||r<t||e>a||r>s);function sE(e,r,n){if(!(r&&r.closeButton===!1))return n?()=>{var t;return n()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const Pt="navds-modal__document-body";function iE(e,r,n){c.useEffect(()=>{if(n||!e.current||!r)return;e.current.open&&document.body.classList.add(Pt);const t=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(Pt):document.body.classList.remove(Pt)});return t.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{t.disconnect(),document.body.classList.remove(Pt)}},[e,r,n])}const gn=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function kd(e,r){var n="on"+r.type.toLowerCase();return typeof e[n]=="function"&&e[n](r),e.dispatchEvent(r)}function kt(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Ed(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function oE(e,r){for(var n=0;n<e.length;++n)if(e[n]===r)return!0;return!1}function qa(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function vd(e){var r=["button","input","keygen","select","textarea"],n=r.map(function(i){return i+":not([disabled])"});n.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(n.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),s=0;s<a.length&&!(a[s].tagName&&a[s].shadowRoot&&(t=vd(a[s].shadowRoot),t));s++);return t}function Ki(e){return e.isConnected||document.body.contains(e)}function md(e){if(e.submitter)return e.submitter;var r=e.target;if(!(r instanceof HTMLFormElement))return null;var n=ne.formSubmitter;if(!n){var t=e.target,a="getRootNode"in t&&t.getRootNode()||document;n=a.activeElement}return!n||n.form!==r?null:n}function lE(e){if(!e.defaultPrevented){var r=e.target,n=ne.imagemapUseValue,t=md(e);n===null&&t&&(n=t.value);var a=kt(r);if(a){var s=t&&t.getAttribute("formmethod")||r.getAttribute("method");s==="dialog"&&(e.preventDefault(),n!=null?a.close(n):a.close())}}}function fd(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",lE,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var r=new MutationObserver(this.maybeHideModal.bind(this));r.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var n=!1,t=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),a,s=function(i){if(i.target===e){var o="DOMNodeRemoved";n|=i.type.substr(0,o.length)===o,window.clearTimeout(a),a=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,s)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}fd.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Ki(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),ne.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var r=document.createElement("div");this.dialog_.insertBefore(r,this.dialog_.firstChild),r.tabIndex=-1,r.focus(),this.dialog_.removeChild(r)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=vd(this.dialog_)),Ed(document.activeElement),e&&e.focus()},updateZIndex:function(e,r){if(e<r)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=r},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Ki(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!ne.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,ne.needsCentering(this.dialog_)?(ne.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var r=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});kd(this.dialog_,r)}};var ne={};ne.reposition=function(e){var r=document.body.scrollTop||document.documentElement.scrollTop,n=r+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(r,n)+"px"};ne.isInlinePositionSetByStylesheet=function(e){for(var r=0;r<document.styleSheets.length;++r){var n=document.styleSheets[r],t=null;try{t=n.cssRules}catch{}if(t)for(var a=0;a<t.length;++a){var s=t[a],i=null;try{i=document.querySelectorAll(s.selectorText)}catch{}if(!(!i||!oE(i,e))){var o=s.style.getPropertyValue("top"),l=s.style.getPropertyValue("bottom");if(o&&o!=="auto"||l&&l!=="auto")return!0}}}return!1};ne.needsCentering=function(e){var r=window.getComputedStyle(e);return r.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!ne.isInlinePositionSetByStylesheet(e)};ne.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new fd(e)};ne.registerDialog=function(e){e.showModal||ne.forceRegisterDialog(e)};ne.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(r){this.forwardTab_=void 0,r.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(r){var n=[];r.forEach(function(t){for(var a=0,s;s=t.removedNodes[a];++a)s instanceof Element&&(s.localName==="dialog"&&n.push(s),n=n.concat(s.querySelectorAll("dialog")))}),n.length&&e(n)}))};ne.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};ne.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};ne.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,r=0,n;n=this.pendingDialogStack[r];++r)n.updateZIndex(--e,--e),r===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var a=t.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};ne.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=kt(e);){for(var r=0,n;n=this.pendingDialogStack[r];++r)if(n.dialog===e)return r===0;e=e.parentElement}return!1};ne.DialogManager.prototype.handleFocus_=function(e){var r=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(r)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Ed(r),this.forwardTab_!==void 0)){var n=this.pendingDialogStack[0],t=n.dialog,a=t.compareDocumentPosition(r);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():r!==document.documentElement&&document.documentElement.focus()),!1}};ne.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var r=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&kd(n.dialog,r)&&n.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};ne.DialogManager.prototype.checkDOM_=function(e){var r=this.pendingDialogStack.slice();r.forEach(function(n){e.indexOf(n.dialog)!==-1?n.downgradeModal():n.maybeHideModal()})};ne.DialogManager.prototype.pushDialog=function(e){var r=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=r?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};ne.DialogManager.prototype.removeDialog=function(e){var r=this.pendingDialogStack.indexOf(e);r!==-1&&(this.pendingDialogStack.splice(r,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};gn&&(ne.dm=new ne.DialogManager,ne.formSubmitter=null,ne.imagemapUseValue=null);if(gn){var Di=document.createElement("form");if(Di.setAttribute("method","dialog"),Di.method!=="dialog"){var sn=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(sn){var dE=sn.get;sn.get=function(){return qa(this)?"dialog":dE.call(this)};var uE=sn.set;sn.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):uE.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",sn)}}document.addEventListener("click",function(e){if(ne.formSubmitter=null,ne.imagemapUseValue=null,!e.defaultPrevented){var r=e.target;if("composedPath"in e){var n=e.composedPath();r=n.shift()||r}if(!(!r||!qa(r.form))){var t=r.type==="submit"&&["button","input"].indexOf(r.localName)>-1;if(!t){if(!(r.localName==="input"&&r.type==="image"))return;ne.imagemapUseValue=e.offsetX+","+e.offsetY}var a=kt(r);a&&(ne.formSubmitter=r)}}},!1),document.addEventListener("submit",function(e){var r=e.target,n=kt(r);if(!n){var t=md(e),a=t&&t.getAttribute("formmethod")||r.getAttribute("method");a==="dialog"&&e.preventDefault()}});var gE=HTMLFormElement.prototype.submit,kE=function(){if(!qa(this))return gE.call(this);var e=kt(this);e&&e.close()};HTMLFormElement.prototype.submit=kE}var EE=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Li="navds-modal--polyfilled",En=T.forwardRef((e,r)=>{var n,t,{header:a,children:s,open:i,onBeforeClose:o,onCancel:l,closeOnBackdropClick:u,width:d,placement:k,portal:m,className:y,"aria-labelledby":_,style:v,onClick:A,onMouseDown:h}=e,p=EE(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const b=T.useRef(null),B=Ds(b,r),P=ia(),j=(n=Wk())===null||n===void 0?void 0:n.rootElement,N=Ck({root:j}),S=T.useContext(Fk),G=ud(!1)!==void 0;G&&!S&&console.error("Modals should not be nested"),T.useEffect(()=>{gn&&b.current&&N&&(ne.registerDialog(b.current),b.current.classList.add(Li)),b.current&&N&&(b.current.autofocus=!0)},[b,N]),T.useEffect(()=>{b.current&&N&&i!==void 0&&(i&&!b.current.open?b.current.showModal():!i&&b.current.open&&b.current.close())},[b,N,i]),iE(b,N,G);const U=typeof d=="string"&&["small","medium"].includes(d),q=ve("navds-modal",y,{[Li]:gn,"navds-modal--autowidth":!d,[`navds-modal--${d}`]:U,"navds-modal--top":k==="top"&&!gn}),K=Object.assign(Object.assign({},v),U?{}:{width:d}),M=T.useRef({clientX:0,clientY:0}),H=Ne=>{M.current=Ne},$=u&&!gn,se=Ne=>{if(Ne.target!==b.current)return;const lr=b.current.getBoundingClientRect();Ii(M.current,lr)||Ii(Ne,lr)||o!==void 0&&o()===!1||b.current.close()},de=Ne=>{o&&o()===!1&&Ne.preventDefault()},ce=!_&&!p["aria-label"]&&a?P:_,he=c.createElement("dialog",Object.assign({},p,{ref:B,className:q,style:K,onCancel:ut(l,de),onClick:$?ut(A,se):A,onMouseDown:$?ut(h,H):h,"aria-labelledby":ce}),c.createElement(Qk,{closeHandler:sE(b,a,o),ref:b},a&&c.createElement(gd,null,a.label&&c.createElement(wr,{className:"navds-modal__label"},a.label),c.createElement(Is,{size:(t=a.size)!==null&&t!==void 0?t:"medium",level:"1",id:P},a.icon&&c.createElement("span",{className:"navds-modal__header-icon"},a.icon),a.heading)),s));return m?N?Ag.createPortal(he,N):null:he});En.Header=gd;En.Body=rE;En.Footer=tE;var vE=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Qa=T.forwardRef((e,r)=>{var{as:n="a",className:t,underline:a=!0,variant:s="action",inlineText:i=!1}=e,o=vE(e,["as","className","underline","variant","inlineText"]);return c.createElement(n,Object.assign({},o,{ref:r,className:ve("navds-link",t,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":i})}))});var mE=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const fE=T.forwardRef((e,r)=>{var{children:n,className:t,variant:a,size:s="medium",icon:i}=e,o=mE(e,["children","className","variant","size","icon"]);return c.createElement(Ze,Object.assign({},o,{ref:r,as:"span",size:s==="medium"?"medium":"small",className:ve("navds-tag",t,`navds-tag--${a}`,`navds-tag--${s}`)}),i&&c.createElement("span",{className:"navds-tag__icon--left"},i),n)});var TE=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Pi=(e,r,n)=>{const{outerHeightStyle:t,overflow:a}=r;return n.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==a)?(n.current+=1,r):e},Fi=e=>(e&&e.ownerDocument||document).defaultView||window;function Ft(e){return parseInt(e,10)||0}const RE=T.forwardRef((e,r)=>{var n,t,{className:a,onChange:s,maxRows:i,minRows:o=1,autoScrollbar:l,style:u,value:d}=e,k=TE(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:m}=T.useRef(d!=null),y=T.useRef(null),_=Ds(y,r),v=T.useRef(null),A=T.useRef(0),[h,p]=T.useState({outerHeightStyle:0}),b=c.useCallback(()=>{const N=y.current,G=Fi(N).getComputedStyle(N);if(G.width==="0px")return{outerHeightStyle:0};const U=v.current;U.style.width=G.width,U.value=N.value||k.placeholder||"x",U.value.slice(-1)===`
`&&(U.value+=" ");const q=G.boxSizing,K=Ft(G.paddingBottom)+Ft(G.paddingTop),M=Ft(G.borderBottomWidth)+Ft(G.borderTopWidth),H=U.scrollHeight-K;U.value="x";const $=U.scrollHeight-K;let se=H;o&&(se=Math.max(Number(o)*$,se)),i&&(se=Math.min(Number(i)*$,se)),se=Math.max(se,$);const de=se+(q==="border-box"?K+M:0),ce=Math.abs(se-H)<=1;return{outerHeightStyle:de,overflow:ce}},[i,o,k.placeholder]),B=()=>{const N=b();Mi(N)||p(S=>Pi(S,N,A))};Za(()=>{const N=()=>{const K=b();Mi(K)||pg.flushSync(()=>{p(M=>Pi(M,K,A))})},S=nd(()=>{var K,M,H;if(A.current=0,!((K=y.current)===null||K===void 0)&&K.style.height||!((M=y.current)===null||M===void 0)&&M.style.width){((H=y.current)===null||H===void 0?void 0:H.style.overflow)==="hidden"&&p($=>Object.assign(Object.assign({},$),{overflow:!1}));return}N()}),G=y.current,U=Fi(G);U.addEventListener("resize",S);let q;return typeof ResizeObserver<"u"&&(q=new ResizeObserver(S),q.observe(G)),()=>{S.clear(),U.removeEventListener("resize",S),q&&q.disconnect()}},[b]),Za(()=>{B()}),T.useEffect(()=>{A.current=0},[d]);const P=N=>{A.current=0,m||B(),s&&s(N)},j=Object.assign({"--__ac-textarea-height":h.outerHeightStyle+"px",overflow:h.overflow&&!l&&!(!((n=y.current)===null||n===void 0)&&n.style.height)&&!(!((t=y.current)===null||t===void 0)&&t.style.width)?"hidden":void 0},u);return c.createElement(c.Fragment,null,c.createElement("textarea",Object.assign({value:d,onChange:P,ref:_,rows:o,style:j},k,{className:a})),c.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:v,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},u)}))});function Mi(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const yE=({maxLength:e,currentLength:r,size:n,i18n:t})=>{const a=e-r,[s,i]=T.useState(a);return T.useEffect(()=>{const o=nd(()=>{i(a)},2e3);return o(),()=>{o.clear()}},[a]),c.createElement(c.Fragment,null,a<20&&c.createElement("span",{role:"status",className:"navds-textarea__sr-counter navds-sr-only"},Vi(s,t)),c.createElement(Ze,{className:ve("navds-textarea__counter",{"navds-textarea__counter--error":a<0}),size:n},Vi(a,t)))},Vi=(e,r)=>{var n,t;return e<0?`${Math.abs(e)} ${(n=r==null?void 0:r.counterTooMuch)!==null&&n!==void 0?n:"tegn for mye"}`:`${e} ${(t=r==null?void 0:r.counterLeft)!==null&&t!==void 0?t:"tegn igjen"}`};var AE=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const pE=T.forwardRef((e,r)=>{var n,t,a;const{inputProps:s,errorId:i,showErrorMsg:o,hasError:l,size:u,inputDescriptionId:d}=Gk(e,"textarea"),{label:k,className:m,description:y,maxLength:_,hideLabel:v=!1,resize:A,UNSAFE_autoScrollbar:h,i18n:p,readOnly:b}=e,B=AE(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),P=ia(),j=_!==void 0&&_>0,[N,S]=T.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),G=()=>{let q=B!=null&&B.minRows?B==null?void 0:B.minRows:3;return u==="small"&&(q=B!=null&&B.minRows?B==null?void 0:B.minRows:2),q},U=ve(s["aria-describedby"],{[P??""]:j});return c.createElement("div",{className:ve(m,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":b,"navds-textarea--readonly":b,"navds-textarea--error":l,"navds-textarea--autoscrollbar":h,[`navds-textarea--resize-${A===!0?"both":A}`]:A})},c.createElement(je,{htmlFor:s.id,size:u,className:ve("navds-form-field__label",{"navds-sr-only":v})},c.createElement(Mk,{readOnly:b}),k),!!y&&c.createElement(Ze,{className:ve("navds-form-field__description",{"navds-sr-only":v}),id:d,size:u,as:"div"},y),c.createElement(RE,Object.assign({},Ks(B,["error","errorId","size"]),s,{onChange:ut(e.onChange,e.value===void 0?q=>S(q.target.value):void 0),minRows:G(),autoScrollbar:h,ref:r,readOnly:b,className:ve("navds-textarea__input","navds-body-short",`navds-body-short--${u??"medium"}`)},U?{"aria-describedby":U}:{})),j&&!b&&!s.disabled&&c.createElement(c.Fragment,null,c.createElement("span",{id:P,className:"navds-sr-only"},`Tekstområde med plass til ${_} tegn.`),c.createElement(yE,{maxLength:_,currentLength:(a=(t=e.value)===null||t===void 0?void 0:t.length)!==null&&a!==void 0?a:N.length,size:u,i18n:p})),c.createElement("div",{className:"navds-form-field__error",id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&c.createElement(sk,{size:u},e.error)))});var es=function(e,r){return es=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])},es(e,r)};function sr(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");es(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}var Y=function(){return Y=Object.assign||function(r){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Y.apply(this,arguments)};function Rn(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n}function gr(e,r,n){if(n||arguments.length===2)for(var t=0,a=r.length,s;t<a;t++)(s||!(t in r))&&(s||(s=Array.prototype.slice.call(r,0,t)),s[t]=r[t]);return e.concat(s||Array.prototype.slice.call(r))}var Td={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le=typeof Symbol=="function"&&Symbol.for,Ls=Le?Symbol.for("react.element"):60103,Ps=Le?Symbol.for("react.portal"):60106,oa=Le?Symbol.for("react.fragment"):60107,la=Le?Symbol.for("react.strict_mode"):60108,da=Le?Symbol.for("react.profiler"):60114,ua=Le?Symbol.for("react.provider"):60109,ga=Le?Symbol.for("react.context"):60110,Fs=Le?Symbol.for("react.async_mode"):60111,ka=Le?Symbol.for("react.concurrent_mode"):60111,Ea=Le?Symbol.for("react.forward_ref"):60112,va=Le?Symbol.for("react.suspense"):60113,bE=Le?Symbol.for("react.suspense_list"):60120,ma=Le?Symbol.for("react.memo"):60115,fa=Le?Symbol.for("react.lazy"):60116,cE=Le?Symbol.for("react.block"):60121,_E=Le?Symbol.for("react.fundamental"):60117,hE=Le?Symbol.for("react.responder"):60118,SE=Le?Symbol.for("react.scope"):60119;function Ce(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case Ls:switch(e=e.type,e){case Fs:case ka:case oa:case da:case la:case va:return e;default:switch(e=e&&e.$$typeof,e){case ga:case Ea:case fa:case ma:case ua:return e;default:return r}}case Ps:return r}}}function Rd(e){return Ce(e)===ka}oe.AsyncMode=Fs;oe.ConcurrentMode=ka;oe.ContextConsumer=ga;oe.ContextProvider=ua;oe.Element=Ls;oe.ForwardRef=Ea;oe.Fragment=oa;oe.Lazy=fa;oe.Memo=ma;oe.Portal=Ps;oe.Profiler=da;oe.StrictMode=la;oe.Suspense=va;oe.isAsyncMode=function(e){return Rd(e)||Ce(e)===Fs};oe.isConcurrentMode=Rd;oe.isContextConsumer=function(e){return Ce(e)===ga};oe.isContextProvider=function(e){return Ce(e)===ua};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ls};oe.isForwardRef=function(e){return Ce(e)===Ea};oe.isFragment=function(e){return Ce(e)===oa};oe.isLazy=function(e){return Ce(e)===fa};oe.isMemo=function(e){return Ce(e)===ma};oe.isPortal=function(e){return Ce(e)===Ps};oe.isProfiler=function(e){return Ce(e)===da};oe.isStrictMode=function(e){return Ce(e)===la};oe.isSuspense=function(e){return Ce(e)===va};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===oa||e===ka||e===da||e===la||e===va||e===bE||typeof e=="object"&&e!==null&&(e.$$typeof===fa||e.$$typeof===ma||e.$$typeof===ua||e.$$typeof===ga||e.$$typeof===Ea||e.$$typeof===_E||e.$$typeof===hE||e.$$typeof===SE||e.$$typeof===cE)};oe.typeOf=Ce;Td.exports=oe;var NE=Td.exports,yd=NE,OE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},IE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ad={};Ad[yd.ForwardRef]=OE;Ad[yd.Memo]=IE;function pd(e,r,n){if(n===void 0&&(n=Error),!e)throw new n(r)}var X;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(X||(X={}));var Ee;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Ee||(Ee={}));var yn;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(yn||(yn={}));function Gi(e){return e.type===Ee.literal}function KE(e){return e.type===Ee.argument}function bd(e){return e.type===Ee.number}function cd(e){return e.type===Ee.date}function _d(e){return e.type===Ee.time}function hd(e){return e.type===Ee.select}function Sd(e){return e.type===Ee.plural}function DE(e){return e.type===Ee.pound}function Nd(e){return e.type===Ee.tag}function Od(e){return!!(e&&typeof e=="object"&&e.type===yn.number)}function rs(e){return!!(e&&typeof e=="object"&&e.type===yn.dateTime)}var Id=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,LE=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function PE(e){var r={};return e.replace(LE,function(n){var t=n.length;switch(n[0]){case"G":r.era=t===4?"long":t===5?"narrow":"short";break;case"y":r.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":r.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":r.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":r.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][t-4];break;case"a":r.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":r.hourCycle="h12",r.hour=["numeric","2-digit"][t-1];break;case"H":r.hourCycle="h23",r.hour=["numeric","2-digit"][t-1];break;case"K":r.hourCycle="h11",r.hour=["numeric","2-digit"][t-1];break;case"k":r.hourCycle="h24",r.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":r.minute=["numeric","2-digit"][t-1];break;case"s":r.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":r.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),r}var FE=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function ME(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var r=e.split(FE).filter(function(m){return m.length>0}),n=[],t=0,a=r;t<a.length;t++){var s=a[t],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),u=0,d=l;u<d.length;u++){var k=d[u];if(k.length===0)throw new Error("Invalid number skeleton")}n.push({stem:o,options:l})}return n}function VE(e){return e.replace(/^(.*?)-/,"")}var wi=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Kd=/^(@+)?(\+|#+)?[rs]?$/g,GE=/(\*)(0+)|(#+)(0+)|(0+)/g,Dd=/^(0+)$/;function Bi(e){var r={};return e[e.length-1]==="r"?r.roundingPriority="morePrecision":e[e.length-1]==="s"&&(r.roundingPriority="lessPrecision"),e.replace(Kd,function(n,t,a){return typeof a!="string"?(r.minimumSignificantDigits=t.length,r.maximumSignificantDigits=t.length):a==="+"?r.minimumSignificantDigits=t.length:t[0]==="#"?r.maximumSignificantDigits=t.length:(r.minimumSignificantDigits=t.length,r.maximumSignificantDigits=t.length+(typeof a=="string"?a.length:0)),""}),r}function Ld(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function wE(e){var r;if(e[0]==="E"&&e[1]==="E"?(r={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(r={notation:"scientific"},e=e.slice(1)),r){var n=e.slice(0,2);if(n==="+!"?(r.signDisplay="always",e=e.slice(2)):n==="+?"&&(r.signDisplay="exceptZero",e=e.slice(2)),!Dd.test(e))throw new Error("Malformed concise eng/scientific notation");r.minimumIntegerDigits=e.length}return r}function ji(e){var r={},n=Ld(e);return n||r}function BE(e){for(var r={},n=0,t=e;n<t.length;n++){var a=t[n];switch(a.stem){case"percent":case"%":r.style="percent";continue;case"%x100":r.style="percent",r.scale=100;continue;case"currency":r.style="currency",r.currency=a.options[0];continue;case"group-off":case",_":r.useGrouping=!1;continue;case"precision-integer":case".":r.maximumFractionDigits=0;continue;case"measure-unit":case"unit":r.style="unit",r.unit=VE(a.options[0]);continue;case"compact-short":case"K":r.notation="compact",r.compactDisplay="short";continue;case"compact-long":case"KK":r.notation="compact",r.compactDisplay="long";continue;case"scientific":r=Y(Y(Y({},r),{notation:"scientific"}),a.options.reduce(function(l,u){return Y(Y({},l),ji(u))},{}));continue;case"engineering":r=Y(Y(Y({},r),{notation:"engineering"}),a.options.reduce(function(l,u){return Y(Y({},l),ji(u))},{}));continue;case"notation-simple":r.notation="standard";continue;case"unit-width-narrow":r.currencyDisplay="narrowSymbol",r.unitDisplay="narrow";continue;case"unit-width-short":r.currencyDisplay="code",r.unitDisplay="short";continue;case"unit-width-full-name":r.currencyDisplay="name",r.unitDisplay="long";continue;case"unit-width-iso-code":r.currencyDisplay="symbol";continue;case"scale":r.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":r.roundingMode="floor";continue;case"rounding-mode-ceiling":r.roundingMode="ceil";continue;case"rounding-mode-down":r.roundingMode="trunc";continue;case"rounding-mode-up":r.roundingMode="expand";continue;case"rounding-mode-half-even":r.roundingMode="halfEven";continue;case"rounding-mode-half-down":r.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":r.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(GE,function(l,u,d,k,m,y){if(u)r.minimumIntegerDigits=d.length;else{if(k&&m)throw new Error("We currently do not support maximum integer digits");if(y)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Dd.test(a.stem)){r.minimumIntegerDigits=a.stem.length;continue}if(wi.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(wi,function(l,u,d,k,m,y){return d==="*"?r.minimumFractionDigits=u.length:k&&k[0]==="#"?r.maximumFractionDigits=k.length:m&&y?(r.minimumFractionDigits=m.length,r.maximumFractionDigits=m.length+y.length):(r.minimumFractionDigits=u.length,r.maximumFractionDigits=u.length),""});var s=a.options[0];s==="w"?r=Y(Y({},r),{trailingZeroDisplay:"stripIfInteger"}):s&&(r=Y(Y({},r),Bi(s)));continue}if(Kd.test(a.stem)){r=Y(Y({},r),Bi(a.stem));continue}var i=Ld(a.stem);i&&(r=Y(Y({},r),i));var o=wE(a.stem);o&&(r=Y(Y({},r),o))}return r}var Mt={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function jE(e,r){for(var n="",t=0;t<e.length;t++){var a=e.charAt(t);if(a==="j"){for(var s=0;t+1<e.length&&e.charAt(t+1)===a;)s++,t++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",u=UE(r);for((u=="H"||u=="k")&&(o=0);o-- >0;)n+=l;for(;i-- >0;)n=u+n}else a==="J"?n+="H":n+=a}return n}function UE(e){var r=e.hourCycle;if(r===void 0&&e.hourCycles&&e.hourCycles.length&&(r=e.hourCycles[0]),r)switch(r){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=e.language,t;n!=="root"&&(t=e.maximize().region);var a=Mt[t||""]||Mt[n||""]||Mt["".concat(n,"-001")]||Mt["001"];return a[0]}var Ha,qE=new RegExp("^".concat(Id.source,"*")),HE=new RegExp("".concat(Id.source,"*$"));function Q(e,r){return{start:e,end:r}}var YE=!!String.prototype.startsWith&&"_a".startsWith("a",1),xE=!!String.fromCodePoint,CE=!!Object.fromEntries,$E=!!String.prototype.codePointAt,JE=!!String.prototype.trimStart,WE=!!String.prototype.trimEnd,zE=!!Number.isSafeInteger,ZE=zE?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},ns=!0;try{var XE=Fd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ns=((Ha=XE.exec("a"))===null||Ha===void 0?void 0:Ha[0])==="a"}catch{ns=!1}var Ui=YE?function(r,n,t){return r.startsWith(n,t)}:function(r,n,t){return r.slice(t,t+n.length)===n},ts=xE?String.fromCodePoint:function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];for(var t="",a=r.length,s=0,i;a>s;){if(i=r[s++],i>1114111)throw RangeError(i+" is not a valid code point");t+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return t},qi=CE?Object.fromEntries:function(r){for(var n={},t=0,a=r;t<a.length;t++){var s=a[t],i=s[0],o=s[1];n[i]=o}return n},Pd=$E?function(r,n){return r.codePointAt(n)}:function(r,n){var t=r.length;if(!(n<0||n>=t)){var a=r.charCodeAt(n),s;return a<55296||a>56319||n+1===t||(s=r.charCodeAt(n+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},QE=JE?function(r){return r.trimStart()}:function(r){return r.replace(qE,"")},ev=WE?function(r){return r.trimEnd()}:function(r){return r.replace(HE,"")};function Fd(e,r){return new RegExp(e,r)}var as;if(ns){var Hi=Fd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");as=function(r,n){var t;Hi.lastIndex=n;var a=Hi.exec(r);return(t=a[1])!==null&&t!==void 0?t:""}}else as=function(r,n){for(var t=[];;){var a=Pd(r,n);if(a===void 0||Md(a)||av(a))break;t.push(a),n+=a>=65536?2:1}return ts.apply(void 0,t)};var rv=function(){function e(r,n){n===void 0&&(n={}),this.message=r,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(r,n,t){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(r,t);if(i.err)return i;a.push(i.val)}else{if(s===125&&r>0)break;if(s===35&&(n==="plural"||n==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:Ee.pound,location:Q(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(X.UNMATCHED_CLOSING_TAG,Q(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&ss(this.peek()||0)){var i=this.parseTag(r,n);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(r,n);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(r,n){var t=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Ee.literal,value:"<".concat(a,"/>"),location:Q(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(r+1,n,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!ss(this.char()))return this.error(X.INVALID_TAG,Q(o,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return a!==u?this.error(X.UNMATCHED_CLOSING_TAG,Q(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Ee.tag,value:a,children:i,location:Q(t,this.clonePosition())},err:null}:this.error(X.INVALID_TAG,Q(o,this.clonePosition())))}else return this.error(X.UNCLOSED_TAG,Q(t,this.clonePosition()))}else return this.error(X.INVALID_TAG,Q(t,this.clonePosition()))},e.prototype.parseTagName=function(){var r=this.offset();for(this.bump();!this.isEOF()&&tv(this.char());)this.bump();return this.message.slice(r,this.offset())},e.prototype.parseLiteral=function(r,n){for(var t=this.clonePosition(),a="";;){var s=this.tryParseQuote(n);if(s){a+=s;continue}var i=this.tryParseUnquoted(r,n);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=Q(t,this.clonePosition());return{val:{type:Ee.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!nv(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(r){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(r==="plural"||r==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(t);this.bump()}return ts.apply(void 0,n)},e.prototype.tryParseUnquoted=function(r,n){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(n==="plural"||n==="selectordinal")||t===125&&r>0?null:(this.bump(),ts(t))},e.prototype.parseArgument=function(r,n){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,Q(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(X.EMPTY_ARGUMENT,Q(t,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(X.MALFORMED_ARGUMENT,Q(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,Q(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Ee.argument,value:a,location:Q(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,Q(t,this.clonePosition())):this.parseArgumentOptions(r,n,a,t);default:return this.error(X.MALFORMED_ARGUMENT,Q(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var r=this.clonePosition(),n=this.offset(),t=as(this.message,n),a=n+t.length;this.bumpTo(a);var s=this.clonePosition(),i=Q(r,s);return{value:t,location:i}},e.prototype.parseArgumentOptions=function(r,n,t,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(X.EXPECT_ARGUMENT_TYPE,Q(i,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),k=this.parseSimpleArgStyleIfPossible();if(k.err)return k;var m=ev(k.val);if(m.length===0)return this.error(X.EXPECT_ARGUMENT_STYLE,Q(this.clonePosition(),this.clonePosition()));var y=Q(d,this.clonePosition());u={style:m,styleLocation:y}}var _=this.tryParseArgumentClose(a);if(_.err)return _;var v=Q(a,this.clonePosition());if(u&&Ui(u==null?void 0:u.style,"::",0)){var A=QE(u.style.slice(2));if(o==="number"){var k=this.parseNumberSkeletonFromString(A,u.styleLocation);return k.err?k:{val:{type:Ee.number,value:t,location:v,style:k.val},err:null}}else{if(A.length===0)return this.error(X.EXPECT_DATE_TIME_SKELETON,v);var h=A;this.locale&&(h=jE(A,this.locale));var m={type:yn.dateTime,pattern:h,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?PE(h):{}},p=o==="date"?Ee.date:Ee.time;return{val:{type:p,value:t,location:v,style:m},err:null}}}return{val:{type:o==="number"?Ee.number:o==="date"?Ee.date:Ee.time,value:t,location:v,style:(s=u==null?void 0:u.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var b=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(X.EXPECT_SELECT_ARGUMENT_OPTIONS,Q(b,Y({},b)));this.bumpSpace();var B=this.parseIdentifierIfPossible(),P=0;if(o!=="select"&&B.value==="offset"){if(!this.bumpIf(":"))return this.error(X.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Q(this.clonePosition(),this.clonePosition()));this.bumpSpace();var k=this.tryParseDecimalInteger(X.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,X.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(k.err)return k;this.bumpSpace(),B=this.parseIdentifierIfPossible(),P=k.val}var j=this.tryParsePluralOrSelectOptions(r,o,n,B);if(j.err)return j;var _=this.tryParseArgumentClose(a);if(_.err)return _;var N=Q(a,this.clonePosition());return o==="select"?{val:{type:Ee.select,value:t,options:qi(j.val),location:N},err:null}:{val:{type:Ee.plural,value:t,options:qi(j.val),offset:P,pluralType:o==="plural"?"cardinal":"ordinal",location:N},err:null}}default:return this.error(X.INVALID_ARGUMENT_TYPE,Q(i,l))}},e.prototype.tryParseArgumentClose=function(r){return this.isEOF()||this.char()!==125?this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,Q(r,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var r=0,n=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(X.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Q(a,this.clonePosition()));this.bump();break}case 123:{r+=1,this.bump();break}case 125:{if(r>0)r-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(r,n){var t=[];try{t=ME(r)}catch{return this.error(X.INVALID_NUMBER_SKELETON,n)}return{val:{type:yn.number,tokens:t,location:n,parsedOptions:this.shouldParseSkeletons?BE(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(r,n,t,a){for(var s,i=!1,o=[],l=new Set,u=a.value,d=a.location;;){if(u.length===0){var k=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var m=this.tryParseDecimalInteger(X.EXPECT_PLURAL_ARGUMENT_SELECTOR,X.INVALID_PLURAL_ARGUMENT_SELECTOR);if(m.err)return m;d=Q(k,this.clonePosition()),u=this.message.slice(k.offset,this.offset())}else break}if(l.has(u))return this.error(n==="select"?X.DUPLICATE_SELECT_ARGUMENT_SELECTOR:X.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);u==="other"&&(i=!0),this.bumpSpace();var y=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?X.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:X.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Q(this.clonePosition(),this.clonePosition()));var _=this.parseMessage(r+1,n,t);if(_.err)return _;var v=this.tryParseArgumentClose(y);if(v.err)return v;o.push([u,{value:_.val,location:Q(y,this.clonePosition())}]),l.add(u),this.bumpSpace(),s=this.parseIdentifierIfPossible(),u=s.value,d=s.location}return o.length===0?this.error(n==="select"?X.EXPECT_SELECT_ARGUMENT_SELECTOR:X.EXPECT_PLURAL_ARGUMENT_SELECTOR,Q(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(X.MISSING_OTHER_CLAUSE,Q(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(r,n){var t=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=Q(a,this.clonePosition());return s?(i*=t,ZE(i)?{val:i,err:null}:this.error(n,l)):this.error(r,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var r=this.position.offset;if(r>=this.message.length)throw Error("out of bound");var n=Pd(this.message,r);if(n===void 0)throw Error("Offset ".concat(r," is at invalid UTF-16 code unit boundary"));return n},e.prototype.error=function(r,n){return{val:null,err:{kind:r,message:this.message,location:n}}},e.prototype.bump=function(){if(!this.isEOF()){var r=this.char();r===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=r<65536?1:2)}},e.prototype.bumpIf=function(r){if(Ui(this.message,r,this.offset())){for(var n=0;n<r.length;n++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(r){var n=this.offset(),t=this.message.indexOf(r,n);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(r){if(this.offset()>r)throw Error("targetOffset ".concat(r," must be greater than or equal to the current offset ").concat(this.offset()));for(r=Math.min(r,this.message.length);;){var n=this.offset();if(n===r)break;if(n>r)throw Error("targetOffset ".concat(r," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Md(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var r=this.char(),n=this.offset(),t=this.message.charCodeAt(n+(r>=65536?2:1));return t??null},e}();function ss(e){return e>=97&&e<=122||e>=65&&e<=90}function nv(e){return ss(e)||e===47}function tv(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Md(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function av(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function is(e){e.forEach(function(r){if(delete r.location,hd(r)||Sd(r))for(var n in r.options)delete r.options[n].location,is(r.options[n].value);else bd(r)&&Od(r.style)||(cd(r)||_d(r))&&rs(r.style)?delete r.style.location:Nd(r)&&is(r.children)})}function sv(e,r){r===void 0&&(r={}),r=Y({shouldParseSkeletons:!0,requiresOtherClause:!0},r);var n=new rv(e,r).parse();if(n.err){var t=SyntaxError(X[n.err.kind]);throw t.location=n.err.location,t.originalMessage=n.err.message,t}return r!=null&&r.captureLocation||is(n.val),n.val}function dr(e,r){var n=r&&r.cache?r.cache:gv,t=r&&r.serializer?r.serializer:uv,a=r&&r.strategy?r.strategy:ov;return a(e,{cache:n,serializer:t})}function iv(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Vd(e,r,n,t){var a=iv(t)?t:n(t),s=r.get(a);return typeof s>"u"&&(s=e.call(this,t),r.set(a,s)),s}function Gd(e,r,n){var t=Array.prototype.slice.call(arguments,3),a=n(t),s=r.get(a);return typeof s>"u"&&(s=e.apply(this,t),r.set(a,s)),s}function Ms(e,r,n,t,a){return n.bind(r,e,t,a)}function ov(e,r){var n=e.length===1?Vd:Gd;return Ms(e,this,n,r.cache.create(),r.serializer)}function lv(e,r){return Ms(e,this,Gd,r.cache.create(),r.serializer)}function dv(e,r){return Ms(e,this,Vd,r.cache.create(),r.serializer)}var uv=function(){return JSON.stringify(arguments)};function Vs(){this.cache=Object.create(null)}Vs.prototype.get=function(e){return this.cache[e]};Vs.prototype.set=function(e,r){this.cache[e]=r};var gv={create:function(){return new Vs}},ur={variadic:lv,monadic:dv},fr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(fr||(fr={}));var Br=function(e){sr(r,e);function r(n,t,a){var s=e.call(this,n)||this;return s.code=t,s.originalMessage=a,s}return r.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},r}(Error),Yi=function(e){sr(r,e);function r(n,t,a,s){return e.call(this,'Invalid values for "'.concat(n,'": "').concat(t,'". Options are "').concat(Object.keys(a).join('", "'),'"'),fr.INVALID_VALUE,s)||this}return r}(Br),kv=function(e){sr(r,e);function r(n,t,a){return e.call(this,'Value for "'.concat(n,'" must be of type ').concat(t),fr.INVALID_VALUE,a)||this}return r}(Br),Ev=function(e){sr(r,e);function r(n,t){return e.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(t,'"'),fr.MISSING_VALUE,t)||this}return r}(Br),Ve;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Ve||(Ve={}));function vv(e){return e.length<2?e:e.reduce(function(r,n){var t=r[r.length-1];return!t||t.type!==Ve.literal||n.type!==Ve.literal?r.push(n):t.value+=n.value,r},[])}function wd(e){return typeof e=="function"}function qt(e,r,n,t,a,s,i){if(e.length===1&&Gi(e[0]))return[{type:Ve.literal,value:e[0].value}];for(var o=[],l=0,u=e;l<u.length;l++){var d=u[l];if(Gi(d)){o.push({type:Ve.literal,value:d.value});continue}if(DE(d)){typeof s=="number"&&o.push({type:Ve.literal,value:n.getNumberFormat(r).format(s)});continue}var k=d.value;if(!(a&&k in a))throw new Ev(k,i);var m=a[k];if(KE(d)){(!m||typeof m=="string"||typeof m=="number")&&(m=typeof m=="string"||typeof m=="number"?String(m):""),o.push({type:typeof m=="string"?Ve.literal:Ve.object,value:m});continue}if(cd(d)){var y=typeof d.style=="string"?t.date[d.style]:rs(d.style)?d.style.parsedOptions:void 0;o.push({type:Ve.literal,value:n.getDateTimeFormat(r,y).format(m)});continue}if(_d(d)){var y=typeof d.style=="string"?t.time[d.style]:rs(d.style)?d.style.parsedOptions:t.time.medium;o.push({type:Ve.literal,value:n.getDateTimeFormat(r,y).format(m)});continue}if(bd(d)){var y=typeof d.style=="string"?t.number[d.style]:Od(d.style)?d.style.parsedOptions:void 0;y&&y.scale&&(m=m*(y.scale||1)),o.push({type:Ve.literal,value:n.getNumberFormat(r,y).format(m)});continue}if(Nd(d)){var _=d.children,v=d.value,A=a[v];if(!wd(A))throw new kv(v,"function",i);var h=qt(_,r,n,t,a,s),p=A(h.map(function(P){return P.value}));Array.isArray(p)||(p=[p]),o.push.apply(o,p.map(function(P){return{type:typeof P=="string"?Ve.literal:Ve.object,value:P}}))}if(hd(d)){var b=d.options[m]||d.options.other;if(!b)throw new Yi(d.value,m,Object.keys(d.options),i);o.push.apply(o,qt(b.value,r,n,t,a));continue}if(Sd(d)){var b=d.options["=".concat(m)];if(!b){if(!Intl.PluralRules)throw new Br(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,fr.MISSING_INTL_API,i);var B=n.getPluralRules(r,{type:d.pluralType}).select(m-(d.offset||0));b=d.options[B]||d.options.other}if(!b)throw new Yi(d.value,m,Object.keys(d.options),i);o.push.apply(o,qt(b.value,r,n,t,a,m-(d.offset||0)));continue}}return vv(o)}function mv(e,r){return r?Y(Y(Y({},e||{}),r||{}),Object.keys(e).reduce(function(n,t){return n[t]=Y(Y({},e[t]),r[t]||{}),n},{})):e}function fv(e,r){return r?Object.keys(e).reduce(function(n,t){return n[t]=mv(e[t],r[t]),n},Y({},e)):e}function Ya(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,n){e[r]=n}}}}}function Tv(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:dr(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.NumberFormat).bind.apply(r,gr([void 0],n,!1)))},{cache:Ya(e.number),strategy:ur.variadic}),getDateTimeFormat:dr(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.DateTimeFormat).bind.apply(r,gr([void 0],n,!1)))},{cache:Ya(e.dateTime),strategy:ur.variadic}),getPluralRules:dr(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.PluralRules).bind.apply(r,gr([void 0],n,!1)))},{cache:Ya(e.pluralRules),strategy:ur.variadic})}}var Bd=function(){function e(r,n,t,a){var s=this;if(n===void 0&&(n=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=s.formatToParts(l);if(u.length===1)return u[0].value;var d=u.reduce(function(k,m){return!k.length||m.type!==Ve.literal||typeof k[k.length-1]!="string"?k.push(m.value):k[k.length-1]+=m.value,k},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return qt(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=n,this.resolvedLocale=e.resolveLocale(n),typeof r=="string"){if(this.message=r,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=Rn(i,["formatters"]);this.ast=e.__parse(r,Y(Y({},o),{locale:this.resolvedLocale}))}else this.ast=r;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=fv(e.formats,t),this.formatters=a&&a.formatters||Tv(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(r){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(r);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof r=="string"?r:r[0])}},e.__parse=sv,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Wr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Wr||(Wr={}));var pt=function(e){sr(r,e);function r(n,t,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(t,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,r),s}return r}(Error),Rv=function(e){sr(r,e);function r(n,t){return e.call(this,Wr.UNSUPPORTED_FORMATTER,n,t)||this}return r}(pt),yv=function(e){sr(r,e);function r(n,t){return e.call(this,Wr.INVALID_CONFIG,n,t)||this}return r}(pt),xi=function(e){sr(r,e);function r(n,t){return e.call(this,Wr.MISSING_DATA,n,t)||this}return r}(pt),Xe=function(e){sr(r,e);function r(n,t,a){var s=e.call(this,Wr.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(t,`
`),a)||this;return s.locale=t,s}return r}(pt),xa=function(e){sr(r,e);function r(n,t,a,s){var i=e.call(this,"".concat(n,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),t,s)||this;return i.descriptor=a,i.locale=t,i}return r}(Xe),Av=function(e){sr(r,e);function r(n,t){var a=e.call(this,Wr.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(t,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=n,a}return r}(pt);function Zr(e,r,n){return n===void 0&&(n={}),r.reduce(function(t,a){return a in e?t[a]=e[a]:a in n&&(t[a]=n[a]),t},{})}var pv=function(e){},bv=function(e){},jd={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:pv,onWarn:bv};function Ud(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function qr(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,n){e[r]=n}}}}}function cv(e){e===void 0&&(e=Ud());var r=Intl.RelativeTimeFormat,n=Intl.ListFormat,t=Intl.DisplayNames,a=dr(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.DateTimeFormat).bind.apply(o,gr([void 0],l,!1)))},{cache:qr(e.dateTime),strategy:ur.variadic}),s=dr(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.NumberFormat).bind.apply(o,gr([void 0],l,!1)))},{cache:qr(e.number),strategy:ur.variadic}),i=dr(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.PluralRules).bind.apply(o,gr([void 0],l,!1)))},{cache:qr(e.pluralRules),strategy:ur.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:dr(function(o,l,u,d){return new Bd(o,l,u,Y({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},d||{}))},{cache:qr(e.message),strategy:ur.variadic}),getRelativeTimeFormat:dr(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,gr([void 0],o,!1)))},{cache:qr(e.relativeTime),strategy:ur.variadic}),getPluralRules:i,getListFormat:dr(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,gr([void 0],o,!1)))},{cache:qr(e.list),strategy:ur.variadic}),getDisplayNames:dr(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,gr([void 0],o,!1)))},{cache:qr(e.displayNames),strategy:ur.variadic})}}function Gs(e,r,n,t){var a=e&&e[r],s;if(a&&(s=a[n]),s)return s;t(new Rv("No ".concat(r," format named: ").concat(n)))}function Vt(e,r){return Object.keys(e).reduce(function(n,t){return n[t]=Y({timeZone:r},e[t]),n},{})}function Ci(e,r){var n=Object.keys(Y(Y({},e),r));return n.reduce(function(t,a){return t[a]=Y(Y({},e[a]||{}),r[a]||{}),t},{})}function $i(e,r){if(!r)return e;var n=Bd.formats;return Y(Y(Y({},n),e),{date:Ci(Vt(n.date,r),Vt(e.date||{},r)),time:Ci(Vt(n.time,r),Vt(e.time||{},r))})}var os=function(e,r,n,t,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,u=e.defaultFormats,d=e.fallbackOnEmptyString,k=e.onError,m=e.timeZone,y=e.defaultRichTextElements;n===void 0&&(n={id:""});var _=n.id,v=n.defaultMessage;pd(!!_,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var A=String(_),h=o&&Object.prototype.hasOwnProperty.call(o,A)&&o[A];if(Array.isArray(h)&&h.length===1&&h[0].type===Ee.literal)return h[0].value;if(!t&&h&&typeof h=="string"&&!y)return h.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=Y(Y({},y),t||{}),i=$i(i,m),u=$i(u,m),!h){if(d===!1&&h==="")return h;if((!v||s&&s.toLowerCase()!==l.toLowerCase())&&k(new Av(n,s)),v)try{var p=r.getMessageFormat(v,l,u,a);return p.format(t)}catch(b){return k(new xa('Error formatting default message for: "'.concat(A,'", rendering default message verbatim'),s,n,b)),typeof v=="string"?v:A}return A}try{var p=r.getMessageFormat(h,s,i,Y({formatters:r},a||{}));return p.format(t)}catch(b){k(new xa('Error formatting message: "'.concat(A,'", using ').concat(v?"default message":"id"," as fallback."),s,n,b))}if(v)try{var p=r.getMessageFormat(v,l,u,a);return p.format(t)}catch(b){k(new xa('Error formatting the default message for: "'.concat(A,'", rendering message verbatim'),s,n,b))}return typeof h=="string"?h:typeof v=="string"?v:A},qd=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Ta(e,r,n,t){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;t===void 0&&(t={});var l=t.format,u=Y(Y({},o&&{timeZone:o}),l&&Gs(s,r,l,i)),d=Zr(t,qd,u);return r==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=Y(Y({},d),{hour:"numeric",minute:"numeric"})),n(a,d)}function _v(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Ta(e,"date",r,i).format(o)}catch(l){e.onError(new Xe("Error formatting date.",e.locale,l))}return String(o)}function hv(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Ta(e,"time",r,i).format(o)}catch(l){e.onError(new Xe("Error formatting time.",e.locale,l))}return String(o)}function Sv(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],s=n[1],i=n[2],o=i===void 0?{}:i,l=e.timeZone,u=e.locale,d=e.onError,k=Zr(o,qd,l?{timeZone:l}:{});try{return r(u,k).formatRange(a,s)}catch(m){d(new Xe("Error formatting date time range.",e.locale,m))}return String(a)}function Nv(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Ta(e,"date",r,i).formatToParts(o)}catch(l){e.onError(new Xe("Error formatting date.",e.locale,l))}return[]}function Ov(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Ta(e,"time",r,i).formatToParts(o)}catch(l){e.onError(new Xe("Error formatting time.",e.locale,l))}return[]}var Iv=["style","type","fallback","languageDisplay"];function Kv(e,r,n,t){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new Br(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,fr.MISSING_INTL_API));var o=Zr(t,Iv);try{return r(a,o).of(n)}catch(l){s(new Xe("Error formatting display name.",a,l))}}var Dv=["type","style"],Ji=Date.now();function Lv(e){return"".concat(Ji,"_").concat(e,"_").concat(Ji)}function Pv(e,r,n,t){t===void 0&&(t={});var a=Hd(e,r,n,t).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function Hd(e,r,n,t){var a=e.locale,s=e.onError;t===void 0&&(t={});var i=Intl.ListFormat;i||s(new Br(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,fr.MISSING_INTL_API));var o=Zr(t,Dv);try{var l={},u=n.map(function(d,k){if(typeof d=="object"){var m=Lv(k);return l[m]=d,m}return String(d)});return r(a,o).formatToParts(u).map(function(d){return d.type==="literal"?d:Y(Y({},d),{value:l[d.value]||d.value})})}catch(d){s(new Xe("Error formatting list.",a,d))}return n}var Fv=["type"];function Mv(e,r,n,t){var a=e.locale,s=e.onError;t===void 0&&(t={}),Intl.PluralRules||s(new Br(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,fr.MISSING_INTL_API));var i=Zr(t,Fv);try{return r(a,i).select(n)}catch(o){s(new Xe("Error formatting plural.",a,o))}return"other"}var Vv=["numeric","style"];function Gv(e,r,n){var t=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=!!i&&Gs(a,"relative",i,s)||{},l=Zr(n,Vv,o);return r(t,l)}function wv(e,r,n,t,a){a===void 0&&(a={}),t||(t="second");var s=Intl.RelativeTimeFormat;s||e.onError(new Br(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,fr.MISSING_INTL_API));try{return Gv(e,r,a).format(n,t)}catch(i){e.onError(new Xe("Error formatting relative time.",e.locale,i))}return String(n)}var Bv=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Yd(e,r,n){var t=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=i&&Gs(a,"number",i,s)||{},l=Zr(n,Bv,o);return r(t,l)}function jv(e,r,n,t){t===void 0&&(t={});try{return Yd(e,r,t).format(n)}catch(a){e.onError(new Xe("Error formatting number.",e.locale,a))}return String(n)}function Uv(e,r,n,t){t===void 0&&(t={});try{return Yd(e,r,t).formatToParts(n)}catch(a){e.onError(new Xe("Error formatting number.",e.locale,a))}return[]}function qv(e){var r=e?e[Object.keys(e)[0]]:void 0;return typeof r=="string"}function Hv(e){e.onWarn&&e.defaultRichTextElements&&qv(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function Yv(e,r){var n=cv(r),t=Y(Y({},jd),e),a=t.locale,s=t.defaultLocale,i=t.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new xi('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new xi('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new yv('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),Hv(t),Y(Y({},t),{formatters:n,formatNumber:jv.bind(null,t,n.getNumberFormat),formatNumberToParts:Uv.bind(null,t,n.getNumberFormat),formatRelativeTime:wv.bind(null,t,n.getRelativeTimeFormat),formatDate:_v.bind(null,t,n.getDateTimeFormat),formatDateToParts:Nv.bind(null,t,n.getDateTimeFormat),formatTime:hv.bind(null,t,n.getDateTimeFormat),formatDateTimeRange:Sv.bind(null,t,n.getDateTimeFormat),formatTimeToParts:Ov.bind(null,t,n.getDateTimeFormat),formatPlural:Mv.bind(null,t,n.getPluralRules),formatMessage:os.bind(null,t,n),$t:os.bind(null,t,n),formatList:Pv.bind(null,t,n.getListFormat),formatListToParts:Hd.bind(null,t,n.getListFormat),formatDisplayName:Kv.bind(null,t,n.getDisplayNames)})}function xv(e){pd(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Cv=Y(Y({},jd),{textComponent:T.Fragment});function $v(e){return function(r){return e(T.Children.toArray(r))}}function Wi(e,r){if(e===r)return!0;if(!e||!r)return!1;var n=Object.keys(e),t=Object.keys(r),a=n.length;if(t.length!==a)return!1;for(var s=0;s<a;s++){var i=n[s];if(e[i]!==r[i]||!Object.prototype.hasOwnProperty.call(r,i))return!1}return!0}var ws=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=T.createContext(null)):T.createContext(null);ws.Consumer;var Jv=ws.Provider,Wv=Jv,zv=ws;function ir(){var e=T.useContext(zv);return xv(e),e}var ls;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(ls||(ls={}));var ds;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(ds||(ds={}));function xd(e){var r=function(n){var t=ir(),a=n.value,s=n.children,i=Rn(n,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?t.formatDateToParts(o,i):t.formatTimeToParts(o,i);return s(l)};return r.displayName=ds[e],r}function bt(e){var r=function(n){var t=ir(),a=n.value,s=n.children,i=Rn(n,["value","children"]),o=t[e](a,i);if(typeof s=="function")return s(o);var l=t.textComponent||T.Fragment;return T.createElement(l,null,o)};return r.displayName=ls[e],r}function Cd(e){return e&&Object.keys(e).reduce(function(r,n){var t=e[n];return r[n]=wd(t)?$v(t):t,r},{})}var zi=function(e,r,n,t){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=Cd(t),o=os.apply(void 0,gr([e,r,n,i],a,!1));return Array.isArray(o)?T.Children.toArray(o):o},Zv=function(e,r){var n=e.defaultRichTextElements,t=Rn(e,["defaultRichTextElements"]),a=Cd(n),s=Yv(Y(Y(Y({},Cv),t),{defaultRichTextElements:a}),r),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return Y(Y({},s),{formatMessage:zi.bind(null,i,s.formatters),$t:zi.bind(null,i,s.formatters)})};function Xv(e,r){var n=e.values,t=Rn(e,["values"]),a=r.values,s=Rn(r,["values"]);return Wi(a,n)&&Wi(t,s)}function $d(e){var r=ir(),n=r.formatMessage,t=r.textComponent,a=t===void 0?T.Fragment:t,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,k=d===void 0?a:d,m=e.ignoreTag,y={id:s,description:i,defaultMessage:o},_=n(y,l,{ignoreTag:m});return typeof u=="function"?u(Array.isArray(_)?_:[_]):k?T.createElement(k,null,T.Children.toArray(_)):T.createElement(T.Fragment,null,_)}$d.displayName="FormattedMessage";var Ae=T.memo($d,Xv);Ae.displayName="MemoizedFormattedMessage";bt("formatDate");bt("formatTime");bt("formatNumber");bt("formatList");bt("formatDisplayName");xd("formatDate");xd("formatTime");const Jd=e=>`${Number(e).toLocaleString("nb-NO").replace(/,|\s/g," ")} kr`;var Ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wd={exports:{}};(function(e,r){(function(n,t){e.exports=t()})(Ra,function(){var n="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(v){var A={date:v,utc:!0,args:arguments};return new i(A)},l.utc=function(v){var A=o(this.toDate(),{locale:this.$L,utc:!0});return v?A.add(this.utcOffset(),n):A},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(v){v.utc&&(this.$u=!0),this.$utils().u(v.$offset)||(this.$offset=v.$offset),u.call(this,v)};var d=l.init;l.init=function(){if(this.$u){var v=this.$d;this.$y=v.getUTCFullYear(),this.$M=v.getUTCMonth(),this.$D=v.getUTCDate(),this.$W=v.getUTCDay(),this.$H=v.getUTCHours(),this.$m=v.getUTCMinutes(),this.$s=v.getUTCSeconds(),this.$ms=v.getUTCMilliseconds()}else d.call(this)};var k=l.utcOffset;l.utcOffset=function(v,A){var h=this.$utils().u;if(h(v))return this.$u?0:h(this.$offset)?k.call(this):this.$offset;if(typeof v=="string"&&(v=function(P){P===void 0&&(P="");var j=P.match(t);if(!j)return null;var N=(""+j[0]).match(a)||["-",0,0],S=N[0],G=60*+N[1]+ +N[2];return G===0?0:S==="+"?G:-G}(v),v===null))return this;var p=Math.abs(v)<=16?60*v:v,b=this;if(A)return b.$offset=p,b.$u=v===0,b;if(v!==0){var B=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(b=this.local().add(p+B,n)).$offset=p,b.$x.$localOffset=B}else b=this.utc();return b};var m=l.format;l.format=function(v){var A=v||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return m.call(this,A)},l.valueOf=function(){var v=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*v},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var y=l.toDate;l.toDate=function(v){return v==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():y.call(this)};var _=l.diff;l.diff=function(v,A,h){if(v&&this.$u===v.$u)return _.call(this,v,A,h);var p=this.local(),b=o(v).local();return _.call(p,b,A,h)}}})})(Wd);var Qv=Wd.exports;const em=Bs(Qv);var zd={exports:{}};(function(e,r){(function(n,t){e.exports=t()})(Ra,function(){var n,t,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,k=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,m={years:u,months:d,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},y=function(j){return j instanceof B},_=function(j,N,S){return new B(j,S,N.$l)},v=function(j){return t.p(j)+"s"},A=function(j){return j<0},h=function(j){return A(j)?Math.ceil(j):Math.floor(j)},p=function(j){return Math.abs(j)},b=function(j,N){return j?A(j)?{negative:!0,format:""+p(j)+N}:{negative:!1,format:""+j+N}:{negative:!1,format:""}},B=function(){function j(S,G,U){var q=this;if(this.$d={},this.$l=U,S===void 0&&(this.$ms=0,this.parseFromMilliseconds()),G)return _(S*m[v(G)],this);if(typeof S=="number")return this.$ms=S,this.parseFromMilliseconds(),this;if(typeof S=="object")return Object.keys(S).forEach(function(H){q.$d[v(H)]=S[H]}),this.calMilliseconds(),this;if(typeof S=="string"){var K=S.match(k);if(K){var M=K.slice(2).map(function(H){return H!=null?Number(H):0});return this.$d.years=M[0],this.$d.months=M[1],this.$d.weeks=M[2],this.$d.days=M[3],this.$d.hours=M[4],this.$d.minutes=M[5],this.$d.seconds=M[6],this.calMilliseconds(),this}}return this}var N=j.prototype;return N.calMilliseconds=function(){var S=this;this.$ms=Object.keys(this.$d).reduce(function(G,U){return G+(S.$d[U]||0)*m[U]},0)},N.parseFromMilliseconds=function(){var S=this.$ms;this.$d.years=h(S/u),S%=u,this.$d.months=h(S/d),S%=d,this.$d.days=h(S/o),S%=o,this.$d.hours=h(S/i),S%=i,this.$d.minutes=h(S/s),S%=s,this.$d.seconds=h(S/a),S%=a,this.$d.milliseconds=S},N.toISOString=function(){var S=b(this.$d.years,"Y"),G=b(this.$d.months,"M"),U=+this.$d.days||0;this.$d.weeks&&(U+=7*this.$d.weeks);var q=b(U,"D"),K=b(this.$d.hours,"H"),M=b(this.$d.minutes,"M"),H=this.$d.seconds||0;this.$d.milliseconds&&(H+=this.$d.milliseconds/1e3,H=Math.round(1e3*H)/1e3);var $=b(H,"S"),se=S.negative||G.negative||q.negative||K.negative||M.negative||$.negative,de=K.format||M.format||$.format?"T":"",ce=(se?"-":"")+"P"+S.format+G.format+q.format+de+K.format+M.format+$.format;return ce==="P"||ce==="-P"?"P0D":ce},N.toJSON=function(){return this.toISOString()},N.format=function(S){var G=S||"YYYY-MM-DDTHH:mm:ss",U={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return G.replace(l,function(q,K){return K||String(U[q])})},N.as=function(S){return this.$ms/m[v(S)]},N.get=function(S){var G=this.$ms,U=v(S);return U==="milliseconds"?G%=1e3:G=U==="weeks"?h(G/m[U]):this.$d[U],G||0},N.add=function(S,G,U){var q;return q=G?S*m[v(G)]:y(S)?S.$ms:_(S,this).$ms,_(this.$ms+q*(U?-1:1),this)},N.subtract=function(S,G){return this.add(S,G,!0)},N.locale=function(S){var G=this.clone();return G.$l=S,G},N.clone=function(){return _(this.$ms,this)},N.humanize=function(S){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!S)},N.valueOf=function(){return this.asMilliseconds()},N.milliseconds=function(){return this.get("milliseconds")},N.asMilliseconds=function(){return this.as("milliseconds")},N.seconds=function(){return this.get("seconds")},N.asSeconds=function(){return this.as("seconds")},N.minutes=function(){return this.get("minutes")},N.asMinutes=function(){return this.as("minutes")},N.hours=function(){return this.get("hours")},N.asHours=function(){return this.as("hours")},N.days=function(){return this.get("days")},N.asDays=function(){return this.as("days")},N.weeks=function(){return this.get("weeks")},N.asWeeks=function(){return this.as("weeks")},N.months=function(){return this.get("months")},N.asMonths=function(){return this.as("months")},N.years=function(){return this.get("years")},N.asYears=function(){return this.as("years")},j}(),P=function(j,N,S){return j.add(N.years()*S,"y").add(N.months()*S,"M").add(N.days()*S,"d").add(N.hours()*S,"h").add(N.minutes()*S,"m").add(N.seconds()*S,"s").add(N.milliseconds()*S,"ms")};return function(j,N,S){n=S,t=S().$utils(),S.duration=function(q,K){var M=S.locale();return _(q,{$l:M},K)},S.isDuration=y;var G=N.prototype.add,U=N.prototype.subtract;N.prototype.add=function(q,K){return y(q)?P(this,q,1):G.bind(this)(q,K)},N.prototype.subtract=function(q,K){return y(q)?P(this,q,-1):U.bind(this)(q,K)}}})})(zd);var rm=zd.exports;const nm=Bs(rm);var Zd={exports:{}};(function(e,r){(function(n,t){e.exports=t()})(Ra,function(){var n="day";return function(t,a,s){var i=function(u){return u.add(4-u.isoWeekday(),n)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),n);var d,k,m,y,_=i(this),v=(d=this.isoWeekYear(),k=this.$u,m=(k?s.utc:s)().year(d).startOf("year"),y=4-m.isoWeekday(),m.isoWeekday()>4&&(y+=7),m.add(y,n));return _.diff(v,"week")+1},o.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var l=o.startOf;o.startOf=function(u,d){var k=this.$utils(),m=!!k.u(d)||d;return k.p(u)==="isoweek"?m?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(u,d)}}})})(Zd);var tm=Zd.exports;const am=Bs(tm);var sm={exports:{}};(function(e,r){(function(n,t){e.exports=t(yt)})(Ra,function(n){function t(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=t(n),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})})(sm);const im=Ud(),Me=e=>Zv({locale:"nb-NO",messages:e},im),Xd={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.TidenesEnde":"Antall uker og dager -"},om="DD.MM.YYYY";yt.extend(em);yt.extend(am);yt.extend(nm);Me(Xd);const zr=e=>e==null?e:e.replace(/&#?((?!(60|62);)\w+);/g,(r,n)=>{if(Number.isNaN(parseInt(n,10))){const t={quot:34,amp:38,apos:39,nbsp:160,copy:169,reg:174,deg:176,frasl:47,trade:8482,euro:8364,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,permil:8240,lsaquo:8249,rsaquo:8250,spades:9824,clubs:9827,hearts:9829,diams:9830,oline:8254,larr:8592,uarr:8593,rarr:8594,darr:8595,hellip:133,ndash:150,mdash:151,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,brkbar:166,sect:167,uml:168,die:168,ordf:170,laquo:171,not:172,shy:173,macr:175,hibar:175,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Alpha:913,alpha:945,Beta:914,beta:946,Gamma:915,gamma:947,Delta:916,delta:948,Epsilon:917,epsilon:949,Zeta:918,zeta:950,Eta:919,eta:951,Theta:920,theta:952,Iota:921,iota:953,Kappa:922,kappa:954,Lambda:923,lambda:955,Mu:924,mu:956,Nu:925,nu:957,Xi:926,xi:958,Omicron:927,omicron:959,Pi:928,pi:960,Rho:929,rho:961,Sigma:931,sigma:963,Tau:932,tau:964,Upsilon:933,upsilon:965,Phi:934,phi:966,Chi:935,chi:967,Psi:936,psi:968,Omega:937,omega:969}[n];return t!==void 0?String.fromCharCode(t):r}return String.fromCharCode(n)}),Gt=Me(Xd),js=e=>{if(!e)return Gt.formatMessage({id:"Malform.Bokmal"});switch(e){case"NN":return Gt.formatMessage({id:"Malform.Nynorsk"});case"EN":return Gt.formatMessage({id:"Malform.Engelsk"});default:return Gt.formatMessage({id:"Malform.Bokmal"})}};function lm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qd={exports:{}},Dn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi;function dm(){if(Zi)return Dn;Zi=1;var e=c,r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var d,k={},m=null,y=null;u!==void 0&&(m=""+u),l.key!==void 0&&(m=""+l.key),l.ref!==void 0&&(y=l.ref);for(d in l)t.call(l,d)&&!s.hasOwnProperty(d)&&(k[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)k[d]===void 0&&(k[d]=l[d]);return{$$typeof:r,type:o,key:m,ref:y,props:k,_owner:a.current}}return Dn.Fragment=n,Dn.jsx=i,Dn.jsxs=i,Dn}Qd.exports=dm();var re=Qd.exports;const Xr={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" Kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};Me(Xr);Me(Xr);var eu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var r={}.hasOwnProperty;function n(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,t.call(this,o)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)r.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(eu);var um=eu.exports;const $e=lm(um),gm="_borderbox_hicl4_1",km="_error_hicl4_4",Em="_warning_hicl4_7",vm={borderbox:gm,error:km,warning:Em};$e.bind(vm);const mm="_aksjonspunkt_kn1hn_1",fm="_erAksjonspunktApent_kn1hn_4",Tm="_erIkkeGodkjentAvBeslutter_kn1hn_8",Rm={aksjonspunkt:mm,erAksjonspunktApent:fm,erIkkeGodkjentAvBeslutter:Tm};$e.bind(Rm);Me(Xr);const Xi=Me(Xr),ym=({text:e,okButtonText:r,showModal:n,cancel:t,submit:a})=>re.jsxs(En,{width:"small",open:n,"aria-label":e,onClose:t,children:[re.jsx(En.Body,{children:re.jsx(Is,{size:"small",children:e})}),re.jsxs(En.Footer,{children:[re.jsx(Tn,{variant:"primary",size:"small",onClick:a,autoFocus:!0,type:"button",children:r||Xi.formatMessage({id:"OkAvbrytModal.Ok"})}),re.jsx(Tn,{variant:"secondary",size:"small",onClick:t,type:"button",children:Xi.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),Am="_tooltip_h8akz_1",pm="_tooltiptext_h8akz_5",bm="_left_h8akz_22",cm="_top_h8akz_27",_m="_right_h8akz_30",hm="_bottom_h8akz_34",Sm="_showTooltip_h8akz_1",us={tooltip:Am,tooltiptext:pm,left:bm,top:cm,right:_m,bottom:hm,showTooltip:Sm},Nm=$e.bind(us),Om=({children:e,content:r,alignRight:n=!1,alignLeft:t=!1,alignTop:a=!1,alignBottom:s=!1})=>re.jsxs("div",{className:us.tooltip,children:[re.jsx("span",{className:Nm(us.tooltiptext,{right:n||!t&&!a&&!s,left:t,top:a,bottom:s}),children:r}),e]}),Im=c.forwardRef(({onClick:e=()=>{},onMouseDown:r,tabIndex:n=-1,className:t="",src:a,srcHover:s,alt:i,onKeyDown:o,tooltip:l,alignTooltipLeft:u=!1},d)=>{const[k,m]=T.useState(!1),y=T.useCallback(()=>{m(!0)},[]),_=T.useCallback(()=>{m(!1)},[]),v=T.useCallback(p=>{(p.key==="Enter"||p.key===" ")&&(o&&o(p),p.preventDefault())},[]),A=s&&k?s:a,h=re.jsx("img",{ref:d,className:t,src:A,alt:i,tabIndex:n,onMouseOver:y,onMouseOut:_,onFocus:y,onBlur:_,onKeyDown:v,onMouseDown:r,onClick:e});return l?re.jsx(Om,{content:l,alignLeft:u,children:h}):h});Im.displayName="Image";const Km="_flexColumnNew_1vdv1_1",Dm={flexColumnNew:Km},Lm=$e.bind(Dm),Pe=({children:e,className:r})=>re.jsx("div",{className:Lm("flexColumnNew",r),children:e}),Pm="_flexRow_1yf0y_1",Fm="_spaceBetween_1yf0y_9",Mm="_alignItemsToBaseline_1yf0y_12",Vm="_alignItemsToFlexEnd_1yf0y_15",Gm="_justifyItemsToFlexEnd_1yf0y_18",wm="_wrap_1yf0y_21",Bm={flexRow:Pm,spaceBetween:Fm,alignItemsToBaseline:Mm,alignItemsToFlexEnd:Vm,justifyItemsToFlexEnd:Gm,wrap:wm},jm=$e.bind(Bm),Cr=({children:e,spaceBetween:r=!1,alignItemsToBaseline:n=!1,alignItemsToFlexEnd:t=!1,wrap:a=!1,className:s})=>re.jsx("div",{className:jm("flexRow",{spaceBetween:r},{alignItemsToBaseline:n},{alignItemsToFlexEnd:t},{wrap:a},s),children:e}),Um="_flexContainer_1dk1o_1",qm="_fluid_1dk1o_6",Hm="_fullHeight_1dk1o_9",Ym="_flexWrap_1dk1o_17",xm={flexContainer:Um,fluid:qm,fullHeight:Hm,flexWrap:Ym},Cm=$e.bind(xm),$r=({children:e,wrap:r=!1,fullHeight:n=!1})=>re.jsx("div",{className:Cm("flexContainer","fluid",{flexWrap:r,fullHeight:n}),children:e});Me(Xr);const $m="_row_1lxv9_1",Jm="_harHover_1lxv9_4",Wm="_rowHeader_1lxv9_7",zm="_grayHeader_1lxv9_12",Zm="_rowContent_1lxv9_15",Xm="_selected_1lxv9_18",Qm="_bold_1lxv9_22",ef="_dashedBottomBorder_1lxv9_25",rf="_solidBottomBorder_1lxv9_28",nf="_apLeftBorder_1lxv9_31",tf="_noBottomBorder_1lxv9_34",ru={row:$m,harHover:Jm,rowHeader:Wm,grayHeader:zm,rowContent:Zm,selected:Xm,bold:Qm,dashedBottomBorder:ef,solidBottomBorder:rf,apLeftBorder:nf,noBottomBorder:tf},af=$e.bind(ru),sf=(e,r,n)=>t=>{e&&t.button===0&&e(t,r,n)},nu=e=>e.tagName==="TR"?e:nu(e.parentElement),Qi=(e,r)=>{const n=nu(e.target),t=(r?n.nextSibling:n.previousSibling)||n;t&&(t.focus(),e.preventDefault())},of=(e,r,n,t)=>a=>{a.key==="ArrowDown"?Qi(a,!0):a.key==="ArrowUp"?Qi(a,!1):r&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(r(a,n,t),a.preventDefault()):e&&r&&a.target.tagName!=="TD"&&a.key==="Shift"&&(r(a),a.preventDefault())},lf=e=>r=>{e&&r.target.tagName!=="TD"&&r.key==="Shift"&&(e(r),r.preventDefault())},df=({id:e,model:r,isHeader:n=!1,hasGrayHeader:t=!1,onMouseDown:a,onKeyDown:s,children:i,noHover:o=!1,isSelected:l=!1,isBold:u=!1,isDashedBottomBorder:d=!1,isSolidBottomBorder:k=!1,isApLeftBorder:m=!1,className:y,useMultiselect:_=!1,hasNoBottomBorder:v=!1})=>re.jsx("tr",{className:af(y,ru.row,{rowHeader:n,grayHeader:t,rowContent:!n&&!o,selected:l,harHover:!o,bold:u,dashedBottomBorder:d,solidBottomBorder:k,noBottomBorder:v,apLeftBorder:m}),onMouseDown:sf(a,e,r),onKeyDown:of(_,s,e,r),onKeyUp:_?lf(s):void 0,tabIndex:0,children:i}),uf="_columnStyle_1f13u_1",tu={columnStyle:uf},gf=$e.bind(tu),Ca=({children:e="",className:r,hidden:n=!1,colspanAll:t=!1})=>n?null:re.jsx("td",{className:gf(tu.columnStyle,r),colSpan:t?100:void 0,children:e}),kf="_table_2cnpl_1",Ef="_rowHover_2cnpl_25",vf={table:kf,rowHover:Ef},mf=$e.bind(vf),ff="EMPTY",Tf=c.forwardRef(({headerTextCodes:e=[],headerColumnContent:r=[],classNameTable:n="",noHover:t=!1,hasGrayHeader:a=!1,children:s},i)=>re.jsxs("table",{ref:i,className:mf("table",{[n]:n,rowHover:!t}),children:[re.jsx("thead",{children:re.jsxs(df,{isHeader:!0,noHover:t,hasGrayHeader:a,children:[e.map(o=>typeof o=="string"&&o.startsWith(ff)?re.jsx(Ca,{children:" "},o):re.jsx(Ca,{children:re.jsx(Ae,{id:o})},o)),r.map(o=>re.jsx(Ca,{children:o},o.key))]})}),re.jsx("tbody",{children:Array.isArray(s)?c.Children.map(s,o=>c.cloneElement(o,{noHover:t})):c.cloneElement(s,{noHover:t})})]}));Tf.displayName="Table";const Rf="_hidden_1pb4f_1",yf="_active_1pb4f_8",Af="_activeRow_1pb4f_15 _active_1pb4f_8",pf="_toggleIcon_1pb4f_19",bf="_colTopPadding_1pb4f_22",cf={hidden:Rf,active:yf,activeRow:Af,toggleIcon:pf,colTopPadding:bf};$e.bind(cf);Me(Xr);const _f="_fourPx_qda5k_1",hf="_eightPx_qda5k_4",Sf="_sixteenPx_qda5k_7",Nf="_twentyPx_qda5k_10",Of="_thirtyTwoPx_qda5k_13",If="_fourtyPx_qda5k_16",Kf={fourPx:_f,eightPx:hf,sixteenPx:Sf,twentyPx:Nf,thirtyTwoPx:Of,fourtyPx:If},Df=$e.bind(Kf),be=({fourPx:e=!1,eightPx:r=!1,sixteenPx:n=!1,twentyPx:t=!1,thirtyTwoPx:a=!1,fourtyPx:s=!1})=>re.jsx("div",{className:Df({fourPx:e,eightPx:r,sixteenPx:n,twentyPx:t,thirtyTwoPx:a,fourtyPx:s})});Me(Xr);const Lf="_divider_1t980_1",Pf="_dividerParagraf_1t980_8",Ff="_leftPanel_1t980_11",Mf="_rightPanel_1t980_14",gs={divider:Lf,dividerParagraf:Pf,leftPanel:Ff,rightPanel:Mf},Vf=$e.bind(gs),Gf=({spaceUnder:e=!1,spaceAbove:r=!1,leftPanel:n=!1,rightPanel:t=!1,dividerParagraf:a=!1,className:s})=>re.jsxs(re.Fragment,{children:[r&&re.jsx(be,{thirtyTwoPx:!0}),re.jsx("div",{className:Vf(s,{leftPanel:n,rightPanel:t}),children:re.jsx("div",{className:a?gs.dividerParagraf:gs.divider})}),e&&re.jsx(be,{thirtyTwoPx:!0})]}),wf="_editedIcon_ulrjl_1",Bf={editedIcon:wf},jf=$e.bind(Bf),au=({className:e=""})=>re.jsx("span",{"data-testid":"editedIcon",className:jf("editedIcon",e),children:re.jsx(bk,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});var Uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var su={exports:{}},Ln={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo;function Hf(){if(eo)return Ln;eo=1;var e=c,r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var d,k={},m=null,y=null;u!==void 0&&(m=""+u),l.key!==void 0&&(m=""+l.key),l.ref!==void 0&&(y=l.ref);for(d in l)t.call(l,d)&&!s.hasOwnProperty(d)&&(k[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)k[d]===void 0&&(k[d]=l[d]);return{$$typeof:r,type:o,key:m,ref:y,props:k,_owner:a.current}}return Ln.Fragment=n,Ln.jsx=i,Ln.jsxs=i,Ln}su.exports=Hf();var ze=su.exports;const Yf=e=>e.reduce((r,n,t)=>({...r,[t]:a=>n(a)||!0}),{}),xf=(e,r)=>{const n=r.split(".").reduce((t,a)=>t!==void 0?t[a]:t,e);return n==null?void 0:n.message};var iu={exports:{}};(function(e,r){(function(n,t){e.exports=t()})(Uf,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d\d/,s=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},l=function(v){return(v=+v)+(v>68?1900:2e3)},u=function(v){return function(A){this[v]=+A}},d=[/[+-]\d\d:?(\d\d)?|Z/,function(v){(this.zone||(this.zone={})).offset=function(A){if(!A||A==="Z")return 0;var h=A.match(/([+-]|\d\d)/g),p=60*h[1]+(+h[2]||0);return p===0?0:h[0]==="+"?-p:p}(v)}],k=function(v){var A=o[v];return A&&(A.indexOf?A:A.s.concat(A.f))},m=function(v,A){var h,p=o.meridiem;if(p){for(var b=1;b<=24;b+=1)if(v.indexOf(p(b,0,A))>-1){h=b>12;break}}else h=v===(A?"pm":"PM");return h},y={A:[i,function(v){this.afternoon=m(v,!1)}],a:[i,function(v){this.afternoon=m(v,!0)}],S:[/\d/,function(v){this.milliseconds=100*+v}],SS:[a,function(v){this.milliseconds=10*+v}],SSS:[/\d{3}/,function(v){this.milliseconds=+v}],s:[s,u("seconds")],ss:[s,u("seconds")],m:[s,u("minutes")],mm:[s,u("minutes")],H:[s,u("hours")],h:[s,u("hours")],HH:[s,u("hours")],hh:[s,u("hours")],D:[s,u("day")],DD:[a,u("day")],Do:[i,function(v){var A=o.ordinal,h=v.match(/\d+/);if(this.day=h[0],A)for(var p=1;p<=31;p+=1)A(p).replace(/\[|\]/g,"")===v&&(this.day=p)}],M:[s,u("month")],MM:[a,u("month")],MMM:[i,function(v){var A=k("months"),h=(k("monthsShort")||A.map(function(p){return p.slice(0,3)})).indexOf(v)+1;if(h<1)throw new Error;this.month=h%12||h}],MMMM:[i,function(v){var A=k("months").indexOf(v)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,u("year")],YY:[a,function(v){this.year=l(v)}],YYYY:[/\d{4}/,u("year")],Z:d,ZZ:d};function _(v){var A,h;A=v,h=o&&o.formats;for(var p=(v=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(G,U,q){var K=q&&q.toUpperCase();return U||h[q]||n[q]||h[K].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(M,H,$){return H||$.slice(1)})})).match(t),b=p.length,B=0;B<b;B+=1){var P=p[B],j=y[P],N=j&&j[0],S=j&&j[1];p[B]=S?{regex:N,parser:S}:P.replace(/^\[|\]$/g,"")}return function(G){for(var U={},q=0,K=0;q<b;q+=1){var M=p[q];if(typeof M=="string")K+=M.length;else{var H=M.regex,$=M.parser,se=G.slice(K),de=H.exec(se)[0];$.call(U,de),G=G.replace(de,"")}}return function(ce){var he=ce.afternoon;if(he!==void 0){var Ne=ce.hours;he?Ne<12&&(ce.hours+=12):Ne===12&&(ce.hours=0),delete ce.afternoon}}(U),U}}return function(v,A,h){h.p.customParseFormat=!0,v&&v.parseTwoDigitYear&&(l=v.parseTwoDigitYear);var p=A.prototype,b=p.parse;p.parse=function(B){var P=B.date,j=B.utc,N=B.args;this.$u=j;var S=N[1];if(typeof S=="string"){var G=N[2]===!0,U=N[3]===!0,q=G||U,K=N[2];U&&(K=N[2]),o=this.$locale(),!G&&K&&(o=h.Ls[K]),this.$d=function(se,de,ce){try{if(["x","X"].indexOf(de)>-1)return new Date((de==="X"?1e3:1)*se);var he=_(de)(se),Ne=he.year,lr=he.month,It=he.day,Fa=he.hours,Kt=he.minutes,Ma=he.seconds,hn=he.milliseconds,Sn=he.zone,jr=new Date,en=It||(Ne||lr?1:jr.getDate()),Nn=Ne||jr.getFullYear(),Ur=0;Ne&&!lr||(Ur=lr>0?lr-1:jr.getMonth());var On=Fa||0,rn=Kt||0,nn=Ma||0,Dt=hn||0;return Sn?new Date(Date.UTC(Nn,Ur,en,On,rn,nn,Dt+60*Sn.offset*1e3)):ce?new Date(Date.UTC(Nn,Ur,en,On,rn,nn,Dt)):new Date(Nn,Ur,en,On,rn,nn,Dt)}catch{return new Date("")}}(P,S,j),this.init(),K&&K!==!0&&(this.$L=this.locale(K).$L),q&&P!=this.format(S)&&(this.$d=new Date("")),o={}}else if(S instanceof Array)for(var M=S.length,H=1;H<=M;H+=1){N[1]=S[H-1];var $=h.apply(this,N);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}H===M&&(this.$d=new Date(""))}else b.call(this,B)}}})})(iu);var Cf=iu.exports;const $f=qf(Cf),Jf="_readOnlyContainer_v0eco_1",Wf="_readOnlyContent_v0eco_4",zf="_readOnlyContentCenter_v0eco_7",Zf="_textarea_v0eco_11",Xf="_space_v0eco_15",wt={readOnlyContainer:Jf,readOnlyContent:Wf,readOnlyContentCenter:zf,textarea:Zf,space:Xf},Qf=e=>e!=null&&e!=="",eT=({label:e,value:r,isEdited:n=!1,type:t,hideLabel:a,size:s})=>Qf(r)?ze.jsxs("div",{className:wt.readOnlyContainer,children:[e&&!a&&ze.jsx(je,{size:"small",children:e}),ze.jsx("div",{className:t==="textarea"?wt.textarea:"",children:ze.jsxs(rd,{className:wt.readOnlyContent,size:s,children:[r,n&&ze.jsx(au,{className:wt.space})]})})]}):null;yt.extend($f);const rT="_textAreaFieldWithBadges_bdz0b_1",nT="_etikettWrapper_bdz0b_4",ro={textAreaFieldWithBadges:rT,etikettWrapper:nT},Zt=({name:e,label:r,readOnly:n,maxLength:t,badges:a,validate:s=[],parse:i=k=>k,className:o,description:l,isEdited:u,...d})=>{const{formState:{errors:k}}=An(),{field:m}=qg({name:e,rules:{validate:T.useMemo(()=>Yf(s),[s])}});return n?ze.jsx(eT,{label:r,value:m.value,type:"textarea",isEdited:u,hideLabel:d.hideLabel}):ze.jsxs("div",{className:a?ro.textAreaFieldWithBadges:null,children:[a&&ze.jsx("div",{className:ro.etikettWrapper,children:a.map(({type:y,titleText:_})=>ze.jsx(fE,{variant:y,size:"small",children:_},_))}),ze.jsx(pE,{size:"small",label:r,description:l,className:o,autoComplete:"off",...m,onChange:y=>m.onChange(y.currentTarget.value!==""?i(y.currentTarget.value):null),value:m.value?m.value:"",error:xf(k,e),maxLength:t,...d})]})},ou=({formMethods:e,onSubmit:r,children:n,className:t,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:i}=e;return T.useEffect(()=>()=>{a&&a(i())},[]),ze.jsx(Bg,{...e,children:ze.jsx("form",{className:t,onSubmit:r?s(o=>r(o)):void 0,children:n})})},tT=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],aT=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],sT=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av NAV"}],iT=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],oT=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],lT=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],dT=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],uT=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],gT=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],kT=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],ET=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],vT=[{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Kontroll av saksopplysninger"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"VURDER_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fkta om arbeidsforhold med permisjon uten sluttdato"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttaksdokumentasjon"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"}],mT=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],fT=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],TT=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],RT=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],yT=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],AT=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],pT=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],bT=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],cT=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],_T=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],hT=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],ST=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],NT=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],OT=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],IT=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],KT=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],DT=[{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST.KITTS OG NEVIS"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"}],LT=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],PT=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],FT=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],MT=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],VT=[{kode:"FODSELSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsdato"},{kode:"TILBAKETREKK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilbaketrekk"},{kode:"ER_ANKEFRIST_IKKE_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er ankefrist ikke overholdt"},{kode:"FNR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsnummer"},{kode:"TERMINBEKREFTELSE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Terminbekreftelse"},{kode:"TERMINDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Termindato"},{kode:"ANKE_RESULTAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Anke resultat"},{kode:"UTTAK_SPLITT_TIDSPERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resulterende periode ved splitting"},{kode:"UTTAK_TREKKDAGER_FLERBARN_KVOTE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager flerbarn kvote"},{kode:"OPPHOLDSRETT_IKKE_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har ikke oppholdsrett i EØS"},{kode:"TILRETTELEGGING_SKAL_BRUKES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avgjør om tilrettelegging skal brukes"},{kode:"ER_ANKE_IKKE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er anke ikke konkret."},{kode:"BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandling"},{kode:"UTTAK_GRADERING_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gradering av arbeidsforhold"},{kode:"ANKE_AVVIST_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til avvist anke"},{kode:"INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt"},{kode:"SOKNADSFRISTVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfristvilkåret"},{kode:"DAGPENGER_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dagpenger"},{kode:"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Til og med dato fastsatt av saksbehandler"},{kode:"SOKNADSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfrist"},{kode:"VILKAR_SOM_ANVENDES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vilkår som anvendes"},{kode:"PERIODE_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode f.o.m."},{kode:"UTTAK_PROSENT_UTBETALING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utbetalingsgrad"},{kode:"NYTT_REFUSJONSKRAV",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Nytt refusjonskrav"},{kode:"DODSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dødsdato"},{kode:"DOKUMENTASJON_FORELIGGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dokumentasjon foreligger"},{kode:"LØNNSENDRING_I_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Lønnsendring i beregningsperioden"},{kode:"AVKLART_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklart periode"},{kode:"SVANGERSKAPSPENGERVILKÅRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Svangerskapsvilkåret"},{kode:"KLAGE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aktivitet"},{kode:"UTTAK_STØNADSKONTOTYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stønadskontotype"},{kode:"ALENEOMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aleneomsorg"},{kode:"OMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorg"},{kode:"KONTAKTPERSON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontaktperson"},{kode:"ER_KLAGE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"TILRETTELEGGING_BEHOV_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilrettelegging behov FOM"},{kode:"ANNEN_FORELDER_RETT_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Annen forelder har opptjent rett fra land i EØS"},{kode:"AKTIVITETSKRAV_AVKLARING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklaring om mor er i aktivitet"},{kode:"FASTSETT_RESULTAT_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett resultat for perioden"},{kode:"FRILANSVIRKSOMHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilansvirksomhet"},{kode:"MANN_ADOPTERER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mann adopterer"},{kode:"ANDEL_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Andel i arbeid"},{kode:"DELVIS_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis tilrettelegging FOM"},{kode:"OPPTJENINGSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Opptjeningsvilkåret"},{kode:"ER_KLAGER_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"UTTAK_PERIODE_RESULTAT_TYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultattype for periode"},{kode:"UTLAND",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utland"},{kode:"BRUK_ANTALL_I_TPS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra folkeregisteret"},{kode:"AKTIVITET_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden med aktivitet"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{kode:"IKKE_OMSORG_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden Søker har ikke omsorg for barnet"},{kode:"DEKNINGSGRAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dekningsgrad"},{kode:"ER_ANKEN_IKKE_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"er anken ikke signert."},{kode:"SYKDOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Sykdom"},{kode:"UTSTEDTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utstedtdato"},{kode:"FODSELSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødsel"},{kode:"NAVN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Navn"},{kode:"UTTAK_TREKKDAGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager"},{kode:"PA_KLAGD_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Påklagd behandlingId"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Har søker inntekt fra etterlønn eller sluttpakke"},{kode:"OPPHOLDSRETT_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har oppholdsrett i EØS"},{kode:"RETT_TIL_FORELDREPENGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Rett til foreldrepenger"},{kode:"INNTEKTSKATEGORI",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori"},{kode:"ADOPTERER_ALENE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopterer alene"},{kode:"ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Arbeidsforhold"},{kode:"BRUKER_TVUNGEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker er under tvungen forvaltning"},{kode:"DELVIS_REFUSJON_FØR_STARTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis refusjon som utbetales før startdato for full refusjon"},{kode:"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring tidsbegrenset arbeidsforhold"},{kode:"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{kode:"MANDAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mandat"},{kode:"MOR_MOTTAR_UFØRETRYGD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar uføretrygd"},{kode:"HEL_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Hel tilrettelegging FOM"},{kode:"ORGANISASJONSNUMMER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Organisasjonsnummer"},{kode:"UTTAK_GRADERING_AVSLAG_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak avslag gradering"},{kode:"ER_KLAGEN_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"ER_KLAGEFRIST_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"OMSORGSVILKAR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"PA_ANKET_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"på anket behandlingsId."},{kode:"SLUTTE_ARBEID_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Slutte arbeid FOM"},{kode:"BRUK_ANTALL_I_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra søknad"},{kode:"KLAGE_RESULTAT_NFP",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat"},{kode:"FORDELING_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling for arbeidsforhold"},{kode:"UTTAK_SAMTIDIG_UTTAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Samtidig uttak"},{kode:"ER_SOKER_BOSATT_I_NORGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er søker bosatt i Norge?"},{kode:"FRILANS_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilans inntekt"},{kode:"FASTSETT_VIDERE_BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett videre behandling"},{kode:"BRUK_ANTALL_I_VEDTAKET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra vedtaket"},{kode:"OMSORGSOVERTAKELSESDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorgsovertakelsesdato"},{kode:"UTTAK_PERIODE_RESULTAT_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat årsak"},{kode:"ENDRING_NAERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring i næring"},{kode:"FORDELING_FOR_NY_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny andel med fordeling"},{kode:"BEHANDLENDE_ENHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandlende enhet"},{kode:"BRUTTO_NAERINGSINNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Brutto næringsinntekt"},{kode:"FORDELING_ETTER_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling etter besteberegning"},{kode:"STARTDATO_FRA_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Startdato fra søknad"},{kode:"NY_STARTDATO_REFUSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny startdato for refusjon"},{kode:"OVERSTYRT_VURDERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt vurdering"},{kode:"KLAGE_RESULTAT_KA",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ytelsesvedtak"},{kode:"FARESIGNALER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Faresignaler"},{kode:"NY_AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Det er lagt til ny aktivitet for"},{kode:"MOTTAR_YTELSE_FRILANS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for frilansaktiviteten"},{kode:"NY_REFUSJONSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny refusjonsfrist"},{kode:"OVERSTYRT_BEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt beregning"},{kode:"AVKLARSAKSOPPLYSNINGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklar saksopplysninger"},{kode:"INNTEKT_FRA_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt fra arbeidsforhold"},{kode:"SOKERSOPPLYSNINGSPLIKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søkers opplysningsplikt"},{kode:"SELVSTENDIG_NAERINGSDRIVENDE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Selvstendig næringsdrivende"},{kode:"GYLDIG_MEDLEM_FOLKETRYGDEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gyldig medlem i folketrygden"},{kode:"MOTTATT_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottatt dato"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Antall barn"},{kode:"EKTEFELLES_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ektefelles barn"},{kode:"MILITÆR_ELLER_SIVIL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"PERIODE_TOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode t.o.m."},{kode:"FORELDREANSVARSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"STILLINGSPROSENT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stillingsprosent"},{kode:"ADOPSJONSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopsjon"},{kode:"ANKE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"INNTEKTSKATEGORI_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori for andel"},{kode:"KONTROLL_AV_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontroll av besteberegning"},{kode:"MOR_MOTTAR_STØNAD_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar foreldrepenger fra land i EØS"},{kode:"ER_ANKER_IKKE_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Angir om anker ikke er part i saken."},{kode:"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er vilkårene for tilbakekreving oppfylt"},{kode:"NY_FORDELING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny fordeling for"},{kode:"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er det særlige grunner til reduksjon"},{kode:"MOTTAR_YTELSE_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for arbeid i {value}"},{kode:"TYPE_VERGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Type verge"}],GT=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"Aktivt D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],wT=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],BT=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],jT=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],UT=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],qT=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],HT=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],YT=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],xT=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],CT=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],$T=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],JT=[{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"}],WT=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],zT={RelasjonsRolleType:tT,HistorikkinnslagType:aT,UttakUtsettelseType:sT,FagsakYtelseType:iT,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:oT,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:lT,BeregningsgrunnlagAndeltype:dT,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:uT,KonsekvensForYtelsen:gT,Inntektskategori:kT,SivilstandType:ET,SkjermlenkeType:vT,FaktaOmBeregningTilfelle:mT,KlageVurdering:fT,HistorikkBegrunnelseType:TT,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:RT,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:yT,VergeType:AT,TilbakekrevingVidereBehandling:pT,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:bT,KlageHjemmel:cT,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:_T,ArbeidType:hT,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:ST,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:NT,FordelingPeriodeKilde:OT,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:IT,Arbeidskategori:KT,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:DT,BehandlingType:LT,KontrollerAktivitetskravAvklaring:PT,InnsynResultatType:FT,MedlemskapType:MT,HistorikkEndretFeltType:VT,PersonstatusType:GT,Fagsystem:wT,AnkeVurdering:BT,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av NAV"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:jT,VirksomhetType:UT,MedlemskapDekningType:qT,ArbeidsforholdHandlingType:HT,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_33:[{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],SVP_VK_1:[{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'}],FP_VK_16:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}]},OpptjeningAktivitetType:YT,PermisjonsbeskrivelseType:xT,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:CT,MedlemskapManuellVurderingType:$T,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:JT,PeriodeResultatÅrsak:[{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]}],ForeldreType:WT};//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var lu;function F(){return lu.apply(null,arguments)}function ZT(e){lu=e}function tr(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Jr(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function te(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function Us(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var r;for(r in e)if(te(e,r))return!1;return!0}function Be(e){return e===void 0}function Kr(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function ct(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function du(e,r){var n=[],t,a=e.length;for(t=0;t<a;++t)n.push(r(e[t],t));return n}function Mr(e,r){for(var n in r)te(r,n)&&(e[n]=r[n]);return te(r,"toString")&&(e.toString=r.toString),te(r,"valueOf")&&(e.valueOf=r.valueOf),e}function Rr(e,r,n,t){return Lu(e,r,n,t,!0).utc()}function XT(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function J(e){return e._pf==null&&(e._pf=XT()),e._pf}var ks;Array.prototype.some?ks=Array.prototype.some:ks=function(e){var r=Object(this),n=r.length>>>0,t;for(t=0;t<n;t++)if(t in r&&e.call(this,r[t],t,r))return!0;return!1};function qs(e){var r=null,n=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(r=J(e),n=ks.call(r.parsedDateParts,function(a){return a!=null}),t=r.overflow<0&&!r.empty&&!r.invalidEra&&!r.invalidMonth&&!r.invalidWeekday&&!r.weekdayMismatch&&!r.nullInput&&!r.invalidFormat&&!r.userInvalidated&&(!r.meridiem||r.meridiem&&n),e._strict&&(t=t&&r.charsLeftOver===0&&r.unusedTokens.length===0&&r.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function ya(e){var r=Rr(NaN);return e!=null?Mr(J(r),e):J(r).userInvalidated=!0,r}var no=F.momentProperties=[],$a=!1;function Hs(e,r){var n,t,a,s=no.length;if(Be(r._isAMomentObject)||(e._isAMomentObject=r._isAMomentObject),Be(r._i)||(e._i=r._i),Be(r._f)||(e._f=r._f),Be(r._l)||(e._l=r._l),Be(r._strict)||(e._strict=r._strict),Be(r._tzm)||(e._tzm=r._tzm),Be(r._isUTC)||(e._isUTC=r._isUTC),Be(r._offset)||(e._offset=r._offset),Be(r._pf)||(e._pf=J(r)),Be(r._locale)||(e._locale=r._locale),s>0)for(n=0;n<s;n++)t=no[n],a=r[t],Be(a)||(e[t]=a);return e}function _t(e){Hs(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),$a===!1&&($a=!0,F.updateOffset(this),$a=!1)}function ar(e){return e instanceof _t||e!=null&&e._isAMomentObject!=null}function uu(e){F.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function Qe(e,r){var n=!0;return Mr(function(){if(F.deprecationHandler!=null&&F.deprecationHandler(null,e),n){var t=[],a,s,i,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(i in arguments[0])te(arguments[0],i)&&(a+=i+": "+arguments[0][i]+", ");a=a.slice(0,-2)}else a=arguments[s];t.push(a)}uu(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),n=!1}return r.apply(this,arguments)},r)}var to={};function gu(e,r){F.deprecationHandler!=null&&F.deprecationHandler(e,r),to[e]||(uu(r),to[e]=!0)}F.suppressDeprecationWarnings=!1;F.deprecationHandler=null;function yr(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function QT(e){var r,n;for(n in e)te(e,n)&&(r=e[n],yr(r)?this[n]=r:this["_"+n]=r);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Es(e,r){var n=Mr({},e),t;for(t in r)te(r,t)&&(Jr(e[t])&&Jr(r[t])?(n[t]={},Mr(n[t],e[t]),Mr(n[t],r[t])):r[t]!=null?n[t]=r[t]:delete n[t]);for(t in e)te(e,t)&&!te(r,t)&&Jr(e[t])&&(n[t]=Mr({},n[t]));return n}function Ys(e){e!=null&&this.set(e)}var vs;Object.keys?vs=Object.keys:vs=function(e){var r,n=[];for(r in e)te(e,r)&&n.push(r);return n};var eR={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function rR(e,r,n){var t=this._calendar[e]||this._calendar.sameElse;return yr(t)?t.call(r,n):t}function Tr(e,r,n){var t=""+Math.abs(e),a=r-t.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+t}var xs=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Bt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ja={},vn={};function C(e,r,n,t){var a=t;typeof t=="string"&&(a=function(){return this[t]()}),e&&(vn[e]=a),r&&(vn[r[0]]=function(){return Tr(a.apply(this,arguments),r[1],r[2])}),n&&(vn[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function nR(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function tR(e){var r=e.match(xs),n,t;for(n=0,t=r.length;n<t;n++)vn[r[n]]?r[n]=vn[r[n]]:r[n]=nR(r[n]);return function(a){var s="",i;for(i=0;i<t;i++)s+=yr(r[i])?r[i].call(a,e):r[i];return s}}function Ht(e,r){return e.isValid()?(r=ku(r,e.localeData()),Ja[r]=Ja[r]||tR(r),Ja[r](e)):e.localeData().invalidDate()}function ku(e,r){var n=5;function t(a){return r.longDateFormat(a)||a}for(Bt.lastIndex=0;n>=0&&Bt.test(e);)e=e.replace(Bt,t),Bt.lastIndex=0,n-=1;return e}var aR={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function sR(e){var r=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return r||!n?r:(this._longDateFormat[e]=n.match(xs).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var iR="Invalid date";function oR(){return this._invalidDate}var lR="%d",dR=/\d{1,2}/;function uR(e){return this._ordinal.replace("%d",e)}var gR={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function kR(e,r,n,t){var a=this._relativeTime[n];return yr(a)?a(e,r,n,t):a.replace(/%d/i,e)}function ER(e,r){var n=this._relativeTime[e>0?"future":"past"];return yr(n)?n(r):n.replace(/%s/i,r)}var ao={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function er(e){return typeof e=="string"?ao[e]||ao[e.toLowerCase()]:void 0}function Cs(e){var r={},n,t;for(t in e)te(e,t)&&(n=er(t),n&&(r[n]=e[t]));return r}var vR={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function mR(e){var r=[],n;for(n in e)te(e,n)&&r.push({unit:n,priority:vR[n]});return r.sort(function(t,a){return t.priority-a.priority}),r}var Eu=/\d/,Je=/\d\d/,vu=/\d{3}/,$s=/\d{4}/,Aa=/[+-]?\d{6}/,fe=/\d\d?/,mu=/\d\d\d\d?/,fu=/\d\d\d\d\d\d?/,pa=/\d{1,3}/,Js=/\d{1,4}/,ba=/[+-]?\d{1,6}/,bn=/\d+/,ca=/[+-]?\d+/,fR=/Z|[+-]\d\d:?\d\d/gi,_a=/Z|[+-]\d\d(?::?\d\d)?/gi,TR=/[+-]?\d+(\.\d{1,3})?/,ht=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,cn=/^[1-9]\d?/,Ws=/^([1-9]\d|\d)/,Xt;Xt={};function w(e,r,n){Xt[e]=yr(r)?r:function(t,a){return t&&n?n:r}}function RR(e,r){return te(Xt,e)?Xt[e](r._strict,r._locale):new RegExp(yR(e))}function yR(e){return Nr(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(r,n,t,a,s){return n||t||a||s}))}function Nr(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function We(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function Z(e){var r=+e,n=0;return r!==0&&isFinite(r)&&(n=We(r)),n}var ms={};function le(e,r){var n,t=r,a;for(typeof e=="string"&&(e=[e]),Kr(r)&&(t=function(s,i){i[r]=Z(s)}),a=e.length,n=0;n<a;n++)ms[e[n]]=t}function St(e,r){le(e,function(n,t,a,s){a._w=a._w||{},r(n,a._w,a,s)})}function AR(e,r,n){r!=null&&te(ms,e)&&ms[e](r,n._a,n,e)}function ha(e){return e%4===0&&e%100!==0||e%400===0}var Fe=0,_r=1,Er=2,Ie=3,nr=4,hr=5,xr=6,pR=7,bR=8;C("Y",0,0,function(){var e=this.year();return e<=9999?Tr(e,4):"+"+e});C(0,["YY",2],0,function(){return this.year()%100});C(0,["YYYY",4],0,"year");C(0,["YYYYY",5],0,"year");C(0,["YYYYYY",6,!0],0,"year");w("Y",ca);w("YY",fe,Je);w("YYYY",Js,$s);w("YYYYY",ba,Aa);w("YYYYYY",ba,Aa);le(["YYYYY","YYYYYY"],Fe);le("YYYY",function(e,r){r[Fe]=e.length===2?F.parseTwoDigitYear(e):Z(e)});le("YY",function(e,r){r[Fe]=F.parseTwoDigitYear(e)});le("Y",function(e,r){r[Fe]=parseInt(e,10)});function Et(e){return ha(e)?366:365}F.parseTwoDigitYear=function(e){return Z(e)+(Z(e)>68?1900:2e3)};var Tu=_n("FullYear",!0);function cR(){return ha(this.year())}function _n(e,r){return function(n){return n!=null?(Ru(this,e,n),F.updateOffset(this,r),this):mt(this,e)}}function mt(e,r){if(!e.isValid())return NaN;var n=e._d,t=e._isUTC;switch(r){case"Milliseconds":return t?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return t?n.getUTCSeconds():n.getSeconds();case"Minutes":return t?n.getUTCMinutes():n.getMinutes();case"Hours":return t?n.getUTCHours():n.getHours();case"Date":return t?n.getUTCDate():n.getDate();case"Day":return t?n.getUTCDay():n.getDay();case"Month":return t?n.getUTCMonth():n.getMonth();case"FullYear":return t?n.getUTCFullYear():n.getFullYear();default:return NaN}}function Ru(e,r,n){var t,a,s,i,o;if(!(!e.isValid()||isNaN(n))){switch(t=e._d,a=e._isUTC,r){case"Milliseconds":return void(a?t.setUTCMilliseconds(n):t.setMilliseconds(n));case"Seconds":return void(a?t.setUTCSeconds(n):t.setSeconds(n));case"Minutes":return void(a?t.setUTCMinutes(n):t.setMinutes(n));case"Hours":return void(a?t.setUTCHours(n):t.setHours(n));case"Date":return void(a?t.setUTCDate(n):t.setDate(n));case"FullYear":break;default:return}s=n,i=e.month(),o=e.date(),o=o===29&&i===1&&!ha(s)?28:o,a?t.setUTCFullYear(s,i,o):t.setFullYear(s,i,o)}}function _R(e){return e=er(e),yr(this[e])?this[e]():this}function hR(e,r){if(typeof e=="object"){e=Cs(e);var n=mR(e),t,a=n.length;for(t=0;t<a;t++)this[n[t].unit](e[n[t].unit])}else if(e=er(e),yr(this[e]))return this[e](r);return this}function SR(e,r){return(e%r+r)%r}var _e;Array.prototype.indexOf?_e=Array.prototype.indexOf:_e=function(e){var r;for(r=0;r<this.length;++r)if(this[r]===e)return r;return-1};function zs(e,r){if(isNaN(e)||isNaN(r))return NaN;var n=SR(r,12);return e+=(r-n)/12,n===1?ha(e)?29:28:31-n%7%2}C("M",["MM",2],"Mo",function(){return this.month()+1});C("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});C("MMMM",0,0,function(e){return this.localeData().months(this,e)});w("M",fe,cn);w("MM",fe,Je);w("MMM",function(e,r){return r.monthsShortRegex(e)});w("MMMM",function(e,r){return r.monthsRegex(e)});le(["M","MM"],function(e,r){r[_r]=Z(e)-1});le(["MMM","MMMM"],function(e,r,n,t){var a=n._locale.monthsParse(e,t,n._strict);a!=null?r[_r]=a:J(n).invalidMonth=e});var NR="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),yu="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Au=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,OR=ht,IR=ht;function KR(e,r){return e?tr(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Au).test(r)?"format":"standalone"][e.month()]:tr(this._months)?this._months:this._months.standalone}function DR(e,r){return e?tr(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Au.test(r)?"format":"standalone"][e.month()]:tr(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function LR(e,r,n){var t,a,s,i=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)s=Rr([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(s,"").toLocaleLowerCase();return n?r==="MMM"?(a=_e.call(this._shortMonthsParse,i),a!==-1?a:null):(a=_e.call(this._longMonthsParse,i),a!==-1?a:null):r==="MMM"?(a=_e.call(this._shortMonthsParse,i),a!==-1?a:(a=_e.call(this._longMonthsParse,i),a!==-1?a:null)):(a=_e.call(this._longMonthsParse,i),a!==-1?a:(a=_e.call(this._shortMonthsParse,i),a!==-1?a:null))}function PR(e,r,n){var t,a,s;if(this._monthsParseExact)return LR.call(this,e,r,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(a=Rr([2e3,t]),n&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!n&&!this._monthsParse[t]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[t]=new RegExp(s.replace(".",""),"i")),n&&r==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(n&&r==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!n&&this._monthsParse[t].test(e))return t}}function pu(e,r){if(!e.isValid())return e;if(typeof r=="string"){if(/^\d+$/.test(r))r=Z(r);else if(r=e.localeData().monthsParse(r),!Kr(r))return e}var n=r,t=e.date();return t=t<29?t:Math.min(t,zs(e.year(),n)),e._isUTC?e._d.setUTCMonth(n,t):e._d.setMonth(n,t),e}function bu(e){return e!=null?(pu(this,e),F.updateOffset(this,!0),this):mt(this,"Month")}function FR(){return zs(this.year(),this.month())}function MR(e){return this._monthsParseExact?(te(this,"_monthsRegex")||cu.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(te(this,"_monthsShortRegex")||(this._monthsShortRegex=OR),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function VR(e){return this._monthsParseExact?(te(this,"_monthsRegex")||cu.call(this),e?this._monthsStrictRegex:this._monthsRegex):(te(this,"_monthsRegex")||(this._monthsRegex=IR),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function cu(){function e(l,u){return u.length-l.length}var r=[],n=[],t=[],a,s,i,o;for(a=0;a<12;a++)s=Rr([2e3,a]),i=Nr(this.monthsShort(s,"")),o=Nr(this.months(s,"")),r.push(i),n.push(o),t.push(o),t.push(i);r.sort(e),n.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function GR(e,r,n,t,a,s,i){var o;return e<100&&e>=0?(o=new Date(e+400,r,n,t,a,s,i),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,r,n,t,a,s,i),o}function ft(e){var r,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,r=new Date(Date.UTC.apply(null,n)),isFinite(r.getUTCFullYear())&&r.setUTCFullYear(e)):r=new Date(Date.UTC.apply(null,arguments)),r}function Qt(e,r,n){var t=7+r-n,a=(7+ft(e,0,t).getUTCDay()-r)%7;return-a+t-1}function _u(e,r,n,t,a){var s=(7+n-t)%7,i=Qt(e,t,a),o=1+7*(r-1)+s+i,l,u;return o<=0?(l=e-1,u=Et(l)+o):o>Et(e)?(l=e+1,u=o-Et(e)):(l=e,u=o),{year:l,dayOfYear:u}}function Tt(e,r,n){var t=Qt(e.year(),r,n),a=Math.floor((e.dayOfYear()-t-1)/7)+1,s,i;return a<1?(i=e.year()-1,s=a+Or(i,r,n)):a>Or(e.year(),r,n)?(s=a-Or(e.year(),r,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Or(e,r,n){var t=Qt(e,r,n),a=Qt(e+1,r,n);return(Et(e)-t+a)/7}C("w",["ww",2],"wo","week");C("W",["WW",2],"Wo","isoWeek");w("w",fe,cn);w("ww",fe,Je);w("W",fe,cn);w("WW",fe,Je);St(["w","ww","W","WW"],function(e,r,n,t){r[t.substr(0,1)]=Z(e)});function wR(e){return Tt(e,this._week.dow,this._week.doy).week}var BR={dow:0,doy:6};function jR(){return this._week.dow}function UR(){return this._week.doy}function qR(e){var r=this.localeData().week(this);return e==null?r:this.add((e-r)*7,"d")}function HR(e){var r=Tt(this,1,4).week;return e==null?r:this.add((e-r)*7,"d")}C("d",0,"do","day");C("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});C("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});C("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});C("e",0,0,"weekday");C("E",0,0,"isoWeekday");w("d",fe);w("e",fe);w("E",fe);w("dd",function(e,r){return r.weekdaysMinRegex(e)});w("ddd",function(e,r){return r.weekdaysShortRegex(e)});w("dddd",function(e,r){return r.weekdaysRegex(e)});St(["dd","ddd","dddd"],function(e,r,n,t){var a=n._locale.weekdaysParse(e,t,n._strict);a!=null?r.d=a:J(n).invalidWeekday=e});St(["d","e","E"],function(e,r,n,t){r[t]=Z(e)});function YR(e,r){return typeof e!="string"?e:isNaN(e)?(e=r.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function xR(e,r){return typeof e=="string"?r.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Zs(e,r){return e.slice(r,7).concat(e.slice(0,r))}var CR="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),hu="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),$R="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),JR=ht,WR=ht,zR=ht;function ZR(e,r){var n=tr(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(r)?"format":"standalone"];return e===!0?Zs(n,this._week.dow):e?n[e.day()]:n}function XR(e){return e===!0?Zs(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function QR(e){return e===!0?Zs(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function ey(e,r,n){var t,a,s,i=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)s=Rr([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(s,"").toLocaleLowerCase();return n?r==="dddd"?(a=_e.call(this._weekdaysParse,i),a!==-1?a:null):r==="ddd"?(a=_e.call(this._shortWeekdaysParse,i),a!==-1?a:null):(a=_e.call(this._minWeekdaysParse,i),a!==-1?a:null):r==="dddd"?(a=_e.call(this._weekdaysParse,i),a!==-1||(a=_e.call(this._shortWeekdaysParse,i),a!==-1)?a:(a=_e.call(this._minWeekdaysParse,i),a!==-1?a:null)):r==="ddd"?(a=_e.call(this._shortWeekdaysParse,i),a!==-1||(a=_e.call(this._weekdaysParse,i),a!==-1)?a:(a=_e.call(this._minWeekdaysParse,i),a!==-1?a:null)):(a=_e.call(this._minWeekdaysParse,i),a!==-1||(a=_e.call(this._weekdaysParse,i),a!==-1)?a:(a=_e.call(this._shortWeekdaysParse,i),a!==-1?a:null))}function ry(e,r,n){var t,a,s;if(this._weekdaysParseExact)return ey.call(this,e,r,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(a=Rr([2e3,1]).day(t),n&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[t]=new RegExp(s.replace(".",""),"i")),n&&r==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(n&&r==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(n&&r==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!n&&this._weekdaysParse[t].test(e))return t}}function ny(e){if(!this.isValid())return e!=null?this:NaN;var r=mt(this,"Day");return e!=null?(e=YR(e,this.localeData()),this.add(e-r,"d")):r}function ty(e){if(!this.isValid())return e!=null?this:NaN;var r=(this.day()+7-this.localeData()._week.dow)%7;return e==null?r:this.add(e-r,"d")}function ay(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var r=xR(e,this.localeData());return this.day(this.day()%7?r:r-7)}else return this.day()||7}function sy(e){return this._weekdaysParseExact?(te(this,"_weekdaysRegex")||Xs.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(te(this,"_weekdaysRegex")||(this._weekdaysRegex=JR),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function iy(e){return this._weekdaysParseExact?(te(this,"_weekdaysRegex")||Xs.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(te(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=WR),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function oy(e){return this._weekdaysParseExact?(te(this,"_weekdaysRegex")||Xs.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(te(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=zR),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Xs(){function e(d,k){return k.length-d.length}var r=[],n=[],t=[],a=[],s,i,o,l,u;for(s=0;s<7;s++)i=Rr([2e3,1]).day(s),o=Nr(this.weekdaysMin(i,"")),l=Nr(this.weekdaysShort(i,"")),u=Nr(this.weekdays(i,"")),r.push(o),n.push(l),t.push(u),a.push(o),a.push(l),a.push(u);r.sort(e),n.sort(e),t.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Qs(){return this.hours()%12||12}function ly(){return this.hours()||24}C("H",["HH",2],0,"hour");C("h",["hh",2],0,Qs);C("k",["kk",2],0,ly);C("hmm",0,0,function(){return""+Qs.apply(this)+Tr(this.minutes(),2)});C("hmmss",0,0,function(){return""+Qs.apply(this)+Tr(this.minutes(),2)+Tr(this.seconds(),2)});C("Hmm",0,0,function(){return""+this.hours()+Tr(this.minutes(),2)});C("Hmmss",0,0,function(){return""+this.hours()+Tr(this.minutes(),2)+Tr(this.seconds(),2)});function Su(e,r){C(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),r)})}Su("a",!0);Su("A",!1);function Nu(e,r){return r._meridiemParse}w("a",Nu);w("A",Nu);w("H",fe,Ws);w("h",fe,cn);w("k",fe,cn);w("HH",fe,Je);w("hh",fe,Je);w("kk",fe,Je);w("hmm",mu);w("hmmss",fu);w("Hmm",mu);w("Hmmss",fu);le(["H","HH"],Ie);le(["k","kk"],function(e,r,n){var t=Z(e);r[Ie]=t===24?0:t});le(["a","A"],function(e,r,n){n._isPm=n._locale.isPM(e),n._meridiem=e});le(["h","hh"],function(e,r,n){r[Ie]=Z(e),J(n).bigHour=!0});le("hmm",function(e,r,n){var t=e.length-2;r[Ie]=Z(e.substr(0,t)),r[nr]=Z(e.substr(t)),J(n).bigHour=!0});le("hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[Ie]=Z(e.substr(0,t)),r[nr]=Z(e.substr(t,2)),r[hr]=Z(e.substr(a)),J(n).bigHour=!0});le("Hmm",function(e,r,n){var t=e.length-2;r[Ie]=Z(e.substr(0,t)),r[nr]=Z(e.substr(t))});le("Hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[Ie]=Z(e.substr(0,t)),r[nr]=Z(e.substr(t,2)),r[hr]=Z(e.substr(a))});function dy(e){return(e+"").toLowerCase().charAt(0)==="p"}var uy=/[ap]\.?m?\.?/i,gy=_n("Hours",!0);function ky(e,r,n){return e>11?n?"pm":"PM":n?"am":"AM"}var Ou={calendar:eR,longDateFormat:aR,invalidDate:iR,ordinal:lR,dayOfMonthOrdinalParse:dR,relativeTime:gR,months:NR,monthsShort:yu,week:BR,weekdays:CR,weekdaysMin:$R,weekdaysShort:hu,meridiemParse:uy},ye={},Pn={},Rt;function Ey(e,r){var n,t=Math.min(e.length,r.length);for(n=0;n<t;n+=1)if(e[n]!==r[n])return n;return t}function so(e){return e&&e.toLowerCase().replace("_","-")}function vy(e){for(var r=0,n,t,a,s;r<e.length;){for(s=so(e[r]).split("-"),n=s.length,t=so(e[r+1]),t=t?t.split("-"):null;n>0;){if(a=Sa(s.slice(0,n).join("-")),a)return a;if(t&&t.length>=n&&Ey(s,t)>=n-1)break;n--}r++}return Rt}function my(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Sa(e){var r=null,n;if(ye[e]===void 0&&typeof module<"u"&&module&&module.exports&&my(e))try{r=Rt._abbr,n=require,n("./locale/"+e),Gr(r)}catch{ye[e]=null}return ye[e]}function Gr(e,r){var n;return e&&(Be(r)?n=Lr(e):n=ei(e,r),n?Rt=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Rt._abbr}function ei(e,r){if(r!==null){var n,t=Ou;if(r.abbr=e,ye[e]!=null)gu("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=ye[e]._config;else if(r.parentLocale!=null)if(ye[r.parentLocale]!=null)t=ye[r.parentLocale]._config;else if(n=Sa(r.parentLocale),n!=null)t=n._config;else return Pn[r.parentLocale]||(Pn[r.parentLocale]=[]),Pn[r.parentLocale].push({name:e,config:r}),null;return ye[e]=new Ys(Es(t,r)),Pn[e]&&Pn[e].forEach(function(a){ei(a.name,a.config)}),Gr(e),ye[e]}else return delete ye[e],null}function fy(e,r){if(r!=null){var n,t,a=Ou;ye[e]!=null&&ye[e].parentLocale!=null?ye[e].set(Es(ye[e]._config,r)):(t=Sa(e),t!=null&&(a=t._config),r=Es(a,r),t==null&&(r.abbr=e),n=new Ys(r),n.parentLocale=ye[e],ye[e]=n),Gr(e)}else ye[e]!=null&&(ye[e].parentLocale!=null?(ye[e]=ye[e].parentLocale,e===Gr()&&Gr(e)):ye[e]!=null&&delete ye[e]);return ye[e]}function Lr(e){var r;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Rt;if(!tr(e)){if(r=Sa(e),r)return r;e=[e]}return vy(e)}function Ty(){return vs(ye)}function ri(e){var r,n=e._a;return n&&J(e).overflow===-2&&(r=n[_r]<0||n[_r]>11?_r:n[Er]<1||n[Er]>zs(n[Fe],n[_r])?Er:n[Ie]<0||n[Ie]>24||n[Ie]===24&&(n[nr]!==0||n[hr]!==0||n[xr]!==0)?Ie:n[nr]<0||n[nr]>59?nr:n[hr]<0||n[hr]>59?hr:n[xr]<0||n[xr]>999?xr:-1,J(e)._overflowDayOfYear&&(r<Fe||r>Er)&&(r=Er),J(e)._overflowWeeks&&r===-1&&(r=pR),J(e)._overflowWeekday&&r===-1&&(r=bR),J(e).overflow=r),e}var Ry=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yy=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ay=/Z|[+-]\d\d(?::?\d\d)?/,jt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Wa=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],py=/^\/?Date\((-?\d+)/i,by=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,cy={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Iu(e){var r,n,t=e._i,a=Ry.exec(t)||yy.exec(t),s,i,o,l,u=jt.length,d=Wa.length;if(a){for(J(e).iso=!0,r=0,n=u;r<n;r++)if(jt[r][1].exec(a[1])){i=jt[r][0],s=jt[r][2]!==!1;break}if(i==null){e._isValid=!1;return}if(a[3]){for(r=0,n=d;r<n;r++)if(Wa[r][1].exec(a[3])){o=(a[2]||" ")+Wa[r][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(Ay.exec(a[4]))l="Z";else{e._isValid=!1;return}e._f=i+(o||"")+(l||""),ti(e)}else e._isValid=!1}function _y(e,r,n,t,a,s){var i=[hy(e),yu.indexOf(r),parseInt(n,10),parseInt(t,10),parseInt(a,10)];return s&&i.push(parseInt(s,10)),i}function hy(e){var r=parseInt(e,10);return r<=49?2e3+r:r<=999?1900+r:r}function Sy(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Ny(e,r,n){if(e){var t=hu.indexOf(e),a=new Date(r[0],r[1],r[2]).getDay();if(t!==a)return J(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Oy(e,r,n){if(e)return cy[e];if(r)return 0;var t=parseInt(n,10),a=t%100,s=(t-a)/100;return s*60+a}function Ku(e){var r=by.exec(Sy(e._i)),n;if(r){if(n=_y(r[4],r[3],r[2],r[5],r[6],r[7]),!Ny(r[1],n,e))return;e._a=n,e._tzm=Oy(r[8],r[9],r[10]),e._d=ft.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),J(e).rfc2822=!0}else e._isValid=!1}function Iy(e){var r=py.exec(e._i);if(r!==null){e._d=new Date(+r[1]);return}if(Iu(e),e._isValid===!1)delete e._isValid;else return;if(Ku(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:F.createFromInputFallback(e)}F.createFromInputFallback=Qe("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function dn(e,r,n){return e??r??n}function Ky(e){var r=new Date(F.now());return e._useUTC?[r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()]:[r.getFullYear(),r.getMonth(),r.getDate()]}function ni(e){var r,n,t=[],a,s,i;if(!e._d){for(a=Ky(e),e._w&&e._a[Er]==null&&e._a[_r]==null&&Dy(e),e._dayOfYear!=null&&(i=dn(e._a[Fe],a[Fe]),(e._dayOfYear>Et(i)||e._dayOfYear===0)&&(J(e)._overflowDayOfYear=!0),n=ft(i,0,e._dayOfYear),e._a[_r]=n.getUTCMonth(),e._a[Er]=n.getUTCDate()),r=0;r<3&&e._a[r]==null;++r)e._a[r]=t[r]=a[r];for(;r<7;r++)e._a[r]=t[r]=e._a[r]==null?r===2?1:0:e._a[r];e._a[Ie]===24&&e._a[nr]===0&&e._a[hr]===0&&e._a[xr]===0&&(e._nextDay=!0,e._a[Ie]=0),e._d=(e._useUTC?ft:GR).apply(null,t),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Ie]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(J(e).weekdayMismatch=!0)}}function Dy(e){var r,n,t,a,s,i,o,l,u;r=e._w,r.GG!=null||r.W!=null||r.E!=null?(s=1,i=4,n=dn(r.GG,e._a[Fe],Tt(me(),1,4).year),t=dn(r.W,1),a=dn(r.E,1),(a<1||a>7)&&(l=!0)):(s=e._locale._week.dow,i=e._locale._week.doy,u=Tt(me(),s,i),n=dn(r.gg,e._a[Fe],u.year),t=dn(r.w,u.week),r.d!=null?(a=r.d,(a<0||a>6)&&(l=!0)):r.e!=null?(a=r.e+s,(r.e<0||r.e>6)&&(l=!0)):a=s),t<1||t>Or(n,s,i)?J(e)._overflowWeeks=!0:l!=null?J(e)._overflowWeekday=!0:(o=_u(n,t,a,s,i),e._a[Fe]=o.year,e._dayOfYear=o.dayOfYear)}F.ISO_8601=function(){};F.RFC_2822=function(){};function ti(e){if(e._f===F.ISO_8601){Iu(e);return}if(e._f===F.RFC_2822){Ku(e);return}e._a=[],J(e).empty=!0;var r=""+e._i,n,t,a,s,i,o=r.length,l=0,u,d;for(a=ku(e._f,e._locale).match(xs)||[],d=a.length,n=0;n<d;n++)s=a[n],t=(r.match(RR(s,e))||[])[0],t&&(i=r.substr(0,r.indexOf(t)),i.length>0&&J(e).unusedInput.push(i),r=r.slice(r.indexOf(t)+t.length),l+=t.length),vn[s]?(t?J(e).empty=!1:J(e).unusedTokens.push(s),AR(s,t,e)):e._strict&&!t&&J(e).unusedTokens.push(s);J(e).charsLeftOver=o-l,r.length>0&&J(e).unusedInput.push(r),e._a[Ie]<=12&&J(e).bigHour===!0&&e._a[Ie]>0&&(J(e).bigHour=void 0),J(e).parsedDateParts=e._a.slice(0),J(e).meridiem=e._meridiem,e._a[Ie]=Ly(e._locale,e._a[Ie],e._meridiem),u=J(e).era,u!==null&&(e._a[Fe]=e._locale.erasConvertYear(u,e._a[Fe])),ni(e),ri(e)}function Ly(e,r,n){var t;return n==null?r:e.meridiemHour!=null?e.meridiemHour(r,n):(e.isPM!=null&&(t=e.isPM(n),t&&r<12&&(r+=12),!t&&r===12&&(r=0)),r)}function Py(e){var r,n,t,a,s,i,o=!1,l=e._f.length;if(l===0){J(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<l;a++)s=0,i=!1,r=Hs({},e),e._useUTC!=null&&(r._useUTC=e._useUTC),r._f=e._f[a],ti(r),qs(r)&&(i=!0),s+=J(r).charsLeftOver,s+=J(r).unusedTokens.length*10,J(r).score=s,o?s<t&&(t=s,n=r):(t==null||s<t||i)&&(t=s,n=r,i&&(o=!0));Mr(e,n||r)}function Fy(e){if(!e._d){var r=Cs(e._i),n=r.day===void 0?r.date:r.day;e._a=du([r.year,r.month,n,r.hour,r.minute,r.second,r.millisecond],function(t){return t&&parseInt(t,10)}),ni(e)}}function My(e){var r=new _t(ri(Du(e)));return r._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Du(e){var r=e._i,n=e._f;return e._locale=e._locale||Lr(e._l),r===null||n===void 0&&r===""?ya({nullInput:!0}):(typeof r=="string"&&(e._i=r=e._locale.preparse(r)),ar(r)?new _t(ri(r)):(ct(r)?e._d=r:tr(n)?Py(e):n?ti(e):Vy(e),qs(e)||(e._d=null),e))}function Vy(e){var r=e._i;Be(r)?e._d=new Date(F.now()):ct(r)?e._d=new Date(r.valueOf()):typeof r=="string"?Iy(e):tr(r)?(e._a=du(r.slice(0),function(n){return parseInt(n,10)}),ni(e)):Jr(r)?Fy(e):Kr(r)?e._d=new Date(r):F.createFromInputFallback(e)}function Lu(e,r,n,t,a){var s={};return(r===!0||r===!1)&&(t=r,r=void 0),(n===!0||n===!1)&&(t=n,n=void 0),(Jr(e)&&Us(e)||tr(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=n,s._i=e,s._f=r,s._strict=t,My(s)}function me(e,r,n,t){return Lu(e,r,n,t,!1)}var Gy=Qe("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=me.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:ya()}),wy=Qe("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=me.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:ya()});function Pu(e,r){var n,t;if(r.length===1&&tr(r[0])&&(r=r[0]),!r.length)return me();for(n=r[0],t=1;t<r.length;++t)(!r[t].isValid()||r[t][e](n))&&(n=r[t]);return n}function By(){var e=[].slice.call(arguments,0);return Pu("isBefore",e)}function jy(){var e=[].slice.call(arguments,0);return Pu("isAfter",e)}var Uy=function(){return Date.now?Date.now():+new Date},Fn=["year","quarter","month","week","day","hour","minute","second","millisecond"];function qy(e){var r,n=!1,t,a=Fn.length;for(r in e)if(te(e,r)&&!(_e.call(Fn,r)!==-1&&(e[r]==null||!isNaN(e[r]))))return!1;for(t=0;t<a;++t)if(e[Fn[t]]){if(n)return!1;parseFloat(e[Fn[t]])!==Z(e[Fn[t]])&&(n=!0)}return!0}function Hy(){return this._isValid}function Yy(){return or(NaN)}function Na(e){var r=Cs(e),n=r.year||0,t=r.quarter||0,a=r.month||0,s=r.week||r.isoWeek||0,i=r.day||0,o=r.hour||0,l=r.minute||0,u=r.second||0,d=r.millisecond||0;this._isValid=qy(r),this._milliseconds=+d+u*1e3+l*6e4+o*1e3*60*60,this._days=+i+s*7,this._months=+a+t*3+n*12,this._data={},this._locale=Lr(),this._bubble()}function Yt(e){return e instanceof Na}function fs(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function xy(e,r,n){var t=Math.min(e.length,r.length),a=Math.abs(e.length-r.length),s=0,i;for(i=0;i<t;i++)Z(e[i])!==Z(r[i])&&s++;return s+a}function Fu(e,r){C(e,0,0,function(){var n=this.utcOffset(),t="+";return n<0&&(n=-n,t="-"),t+Tr(~~(n/60),2)+r+Tr(~~n%60,2)})}Fu("Z",":");Fu("ZZ","");w("Z",_a);w("ZZ",_a);le(["Z","ZZ"],function(e,r,n){n._useUTC=!0,n._tzm=ai(_a,e)});var Cy=/([\+\-]|\d\d)/gi;function ai(e,r){var n=(r||"").match(e),t,a,s;return n===null?null:(t=n[n.length-1]||[],a=(t+"").match(Cy)||["-",0,0],s=+(a[1]*60)+Z(a[2]),s===0?0:a[0]==="+"?s:-s)}function si(e,r){var n,t;return r._isUTC?(n=r.clone(),t=(ar(e)||ct(e)?e.valueOf():me(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+t),F.updateOffset(n,!1),n):me(e).local()}function Ts(e){return-Math.round(e._d.getTimezoneOffset())}F.updateOffset=function(){};function $y(e,r,n){var t=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=ai(_a,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&r&&(a=Ts(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),t!==e&&(!r||this._changeInProgress?Gu(this,or(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,F.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:Ts(this)}function Jy(e,r){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,r),this):-this.utcOffset()}function Wy(e){return this.utcOffset(0,e)}function zy(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Ts(this),"m")),this}function Zy(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=ai(fR,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Xy(e){return this.isValid()?(e=e?me(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Qy(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function eA(){if(!Be(this._isDSTShifted))return this._isDSTShifted;var e={},r;return Hs(e,this),e=Du(e),e._a?(r=e._isUTC?Rr(e._a):me(e._a),this._isDSTShifted=this.isValid()&&xy(e._a,r.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function rA(){return this.isValid()?!this._isUTC:!1}function nA(){return this.isValid()?this._isUTC:!1}function Mu(){return this.isValid()?this._isUTC&&this._offset===0:!1}var tA=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,aA=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function or(e,r){var n=e,t=null,a,s,i;return Yt(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Kr(e)||!isNaN(+e)?(n={},r?n[r]=+e:n.milliseconds=+e):(t=tA.exec(e))?(a=t[1]==="-"?-1:1,n={y:0,d:Z(t[Er])*a,h:Z(t[Ie])*a,m:Z(t[nr])*a,s:Z(t[hr])*a,ms:Z(fs(t[xr]*1e3))*a}):(t=aA.exec(e))?(a=t[1]==="-"?-1:1,n={y:Hr(t[2],a),M:Hr(t[3],a),w:Hr(t[4],a),d:Hr(t[5],a),h:Hr(t[6],a),m:Hr(t[7],a),s:Hr(t[8],a)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(i=sA(me(n.from),me(n.to)),n={},n.ms=i.milliseconds,n.M=i.months),s=new Na(n),Yt(e)&&te(e,"_locale")&&(s._locale=e._locale),Yt(e)&&te(e,"_isValid")&&(s._isValid=e._isValid),s}or.fn=Na.prototype;or.invalid=Yy;function Hr(e,r){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*r}function io(e,r){var n={};return n.months=r.month()-e.month()+(r.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(r)&&--n.months,n.milliseconds=+r-+e.clone().add(n.months,"M"),n}function sA(e,r){var n;return e.isValid()&&r.isValid()?(r=si(r,e),e.isBefore(r)?n=io(e,r):(n=io(r,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Vu(e,r){return function(n,t){var a,s;return t!==null&&!isNaN(+t)&&(gu(r,"moment()."+r+"(period, number) is deprecated. Please use moment()."+r+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=t,t=s),a=or(n,t),Gu(this,a,e),this}}function Gu(e,r,n,t){var a=r._milliseconds,s=fs(r._days),i=fs(r._months);e.isValid()&&(t=t??!0,i&&pu(e,mt(e,"Month")+i*n),s&&Ru(e,"Date",mt(e,"Date")+s*n),a&&e._d.setTime(e._d.valueOf()+a*n),t&&F.updateOffset(e,s||i))}var iA=Vu(1,"add"),oA=Vu(-1,"subtract");function wu(e){return typeof e=="string"||e instanceof String}function lA(e){return ar(e)||ct(e)||wu(e)||Kr(e)||uA(e)||dA(e)||e===null||e===void 0}function dA(e){var r=Jr(e)&&!Us(e),n=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,i=t.length;for(a=0;a<i;a+=1)s=t[a],n=n||te(e,s);return r&&n}function uA(e){var r=tr(e),n=!1;return r&&(n=e.filter(function(t){return!Kr(t)&&wu(e)}).length===0),r&&n}function gA(e){var r=Jr(e)&&!Us(e),n=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<t.length;a+=1)s=t[a],n=n||te(e,s);return r&&n}function kA(e,r){var n=e.diff(r,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function EA(e,r){arguments.length===1&&(arguments[0]?lA(arguments[0])?(e=arguments[0],r=void 0):gA(arguments[0])&&(r=arguments[0],e=void 0):(e=void 0,r=void 0));var n=e||me(),t=si(n,this).startOf("day"),a=F.calendarFormat(this,t)||"sameElse",s=r&&(yr(r[a])?r[a].call(this,n):r[a]);return this.format(s||this.localeData().calendar(a,this,me(n)))}function vA(){return new _t(this)}function mA(e,r){var n=ar(e)?e:me(e);return this.isValid()&&n.isValid()?(r=er(r)||"millisecond",r==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(r).valueOf()):!1}function fA(e,r){var n=ar(e)?e:me(e);return this.isValid()&&n.isValid()?(r=er(r)||"millisecond",r==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(r).valueOf()<n.valueOf()):!1}function TA(e,r,n,t){var a=ar(e)?e:me(e),s=ar(r)?r:me(r);return this.isValid()&&a.isValid()&&s.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(a,n):!this.isBefore(a,n))&&(t[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function RA(e,r){var n=ar(e)?e:me(e),t;return this.isValid()&&n.isValid()?(r=er(r)||"millisecond",r==="millisecond"?this.valueOf()===n.valueOf():(t=n.valueOf(),this.clone().startOf(r).valueOf()<=t&&t<=this.clone().endOf(r).valueOf())):!1}function yA(e,r){return this.isSame(e,r)||this.isAfter(e,r)}function AA(e,r){return this.isSame(e,r)||this.isBefore(e,r)}function pA(e,r,n){var t,a,s;if(!this.isValid())return NaN;if(t=si(e,this),!t.isValid())return NaN;switch(a=(t.utcOffset()-this.utcOffset())*6e4,r=er(r),r){case"year":s=xt(this,t)/12;break;case"month":s=xt(this,t);break;case"quarter":s=xt(this,t)/3;break;case"second":s=(this-t)/1e3;break;case"minute":s=(this-t)/6e4;break;case"hour":s=(this-t)/36e5;break;case"day":s=(this-t-a)/864e5;break;case"week":s=(this-t-a)/6048e5;break;default:s=this-t}return n?s:We(s)}function xt(e,r){if(e.date()<r.date())return-xt(r,e);var n=(r.year()-e.year())*12+(r.month()-e.month()),t=e.clone().add(n,"months"),a,s;return r-t<0?(a=e.clone().add(n-1,"months"),s=(r-t)/(t-a)):(a=e.clone().add(n+1,"months"),s=(r-t)/(a-t)),-(n+s)||0}F.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";F.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function bA(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function cA(e){if(!this.isValid())return null;var r=e!==!0,n=r?this.clone().utc():this;return n.year()<0||n.year()>9999?Ht(n,r?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):yr(Date.prototype.toISOString)?r?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ht(n,"Z")):Ht(n,r?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function _A(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",r="",n,t,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",r="Z"),n="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=r+'[")]',this.format(n+t+a+s)}function hA(e){e||(e=this.isUtc()?F.defaultFormatUtc:F.defaultFormat);var r=Ht(this,e);return this.localeData().postformat(r)}function SA(e,r){return this.isValid()&&(ar(e)&&e.isValid()||me(e).isValid())?or({to:this,from:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function NA(e){return this.from(me(),e)}function OA(e,r){return this.isValid()&&(ar(e)&&e.isValid()||me(e).isValid())?or({from:this,to:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function IA(e){return this.to(me(),e)}function Bu(e){var r;return e===void 0?this._locale._abbr:(r=Lr(e),r!=null&&(this._locale=r),this)}var ju=Qe("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Uu(){return this._locale}var ea=1e3,mn=60*ea,ra=60*mn,qu=(365*400+97)*24*ra;function fn(e,r){return(e%r+r)%r}function Hu(e,r,n){return e<100&&e>=0?new Date(e+400,r,n)-qu:new Date(e,r,n).valueOf()}function Yu(e,r,n){return e<100&&e>=0?Date.UTC(e+400,r,n)-qu:Date.UTC(e,r,n)}function KA(e){var r,n;if(e=er(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?Yu:Hu,e){case"year":r=n(this.year(),0,1);break;case"quarter":r=n(this.year(),this.month()-this.month()%3,1);break;case"month":r=n(this.year(),this.month(),1);break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":r=n(this.year(),this.month(),this.date());break;case"hour":r=this._d.valueOf(),r-=fn(r+(this._isUTC?0:this.utcOffset()*mn),ra);break;case"minute":r=this._d.valueOf(),r-=fn(r,mn);break;case"second":r=this._d.valueOf(),r-=fn(r,ea);break}return this._d.setTime(r),F.updateOffset(this,!0),this}function DA(e){var r,n;if(e=er(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?Yu:Hu,e){case"year":r=n(this.year()+1,0,1)-1;break;case"quarter":r=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":r=n(this.year(),this.month()+1,1)-1;break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":r=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":r=this._d.valueOf(),r+=ra-fn(r+(this._isUTC?0:this.utcOffset()*mn),ra)-1;break;case"minute":r=this._d.valueOf(),r+=mn-fn(r,mn)-1;break;case"second":r=this._d.valueOf(),r+=ea-fn(r,ea)-1;break}return this._d.setTime(r),F.updateOffset(this,!0),this}function LA(){return this._d.valueOf()-(this._offset||0)*6e4}function PA(){return Math.floor(this.valueOf()/1e3)}function FA(){return new Date(this.valueOf())}function MA(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function VA(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function GA(){return this.isValid()?this.toISOString():null}function wA(){return qs(this)}function BA(){return Mr({},J(this))}function jA(){return J(this).overflow}function UA(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}C("N",0,0,"eraAbbr");C("NN",0,0,"eraAbbr");C("NNN",0,0,"eraAbbr");C("NNNN",0,0,"eraName");C("NNNNN",0,0,"eraNarrow");C("y",["y",1],"yo","eraYear");C("y",["yy",2],0,"eraYear");C("y",["yyy",3],0,"eraYear");C("y",["yyyy",4],0,"eraYear");w("N",ii);w("NN",ii);w("NNN",ii);w("NNNN",XA);w("NNNNN",QA);le(["N","NN","NNN","NNNN","NNNNN"],function(e,r,n,t){var a=n._locale.erasParse(e,t,n._strict);a?J(n).era=a:J(n).invalidEra=e});w("y",bn);w("yy",bn);w("yyy",bn);w("yyyy",bn);w("yo",ep);le(["y","yy","yyy","yyyy"],Fe);le(["yo"],function(e,r,n,t){var a;n._locale._eraYearOrdinalRegex&&(a=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?r[Fe]=n._locale.eraYearOrdinalParse(e,a):r[Fe]=parseInt(e,10)});function qA(e,r){var n,t,a,s=this._eras||Lr("en")._eras;for(n=0,t=s.length;n<t;++n){switch(typeof s[n].since){case"string":a=F(s[n].since).startOf("day"),s[n].since=a.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":a=F(s[n].until).startOf("day").valueOf(),s[n].until=a.valueOf();break}}return s}function HA(e,r,n){var t,a,s=this.eras(),i,o,l;for(e=e.toUpperCase(),t=0,a=s.length;t<a;++t)if(i=s[t].name.toUpperCase(),o=s[t].abbr.toUpperCase(),l=s[t].narrow.toUpperCase(),n)switch(r){case"N":case"NN":case"NNN":if(o===e)return s[t];break;case"NNNN":if(i===e)return s[t];break;case"NNNNN":if(l===e)return s[t];break}else if([i,o,l].indexOf(e)>=0)return s[t]}function YA(e,r){var n=e.since<=e.until?1:-1;return r===void 0?F(e.since).year():F(e.since).year()+(r-e.offset)*n}function xA(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].name;return""}function CA(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].narrow;return""}function $A(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].abbr;return""}function JA(){var e,r,n,t,a=this.localeData().eras();for(e=0,r=a.length;e<r;++e)if(n=a[e].since<=a[e].until?1:-1,t=this.clone().startOf("day").valueOf(),a[e].since<=t&&t<=a[e].until||a[e].until<=t&&t<=a[e].since)return(this.year()-F(a[e].since).year())*n+a[e].offset;return this.year()}function WA(e){return te(this,"_erasNameRegex")||oi.call(this),e?this._erasNameRegex:this._erasRegex}function zA(e){return te(this,"_erasAbbrRegex")||oi.call(this),e?this._erasAbbrRegex:this._erasRegex}function ZA(e){return te(this,"_erasNarrowRegex")||oi.call(this),e?this._erasNarrowRegex:this._erasRegex}function ii(e,r){return r.erasAbbrRegex(e)}function XA(e,r){return r.erasNameRegex(e)}function QA(e,r){return r.erasNarrowRegex(e)}function ep(e,r){return r._eraYearOrdinalRegex||bn}function oi(){var e=[],r=[],n=[],t=[],a,s,i,o,l,u=this.eras();for(a=0,s=u.length;a<s;++a)i=Nr(u[a].name),o=Nr(u[a].abbr),l=Nr(u[a].narrow),r.push(i),e.push(o),n.push(l),t.push(i),t.push(o),t.push(l);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+r.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}C(0,["gg",2],0,function(){return this.weekYear()%100});C(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Oa(e,r){C(0,[e,e.length],0,r)}Oa("gggg","weekYear");Oa("ggggg","weekYear");Oa("GGGG","isoWeekYear");Oa("GGGGG","isoWeekYear");w("G",ca);w("g",ca);w("GG",fe,Je);w("gg",fe,Je);w("GGGG",Js,$s);w("gggg",Js,$s);w("GGGGG",ba,Aa);w("ggggg",ba,Aa);St(["gggg","ggggg","GGGG","GGGGG"],function(e,r,n,t){r[t.substr(0,2)]=Z(e)});St(["gg","GG"],function(e,r,n,t){r[t]=F.parseTwoDigitYear(e)});function rp(e){return xu.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function np(e){return xu.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function tp(){return Or(this.year(),1,4)}function ap(){return Or(this.isoWeekYear(),1,4)}function sp(){var e=this.localeData()._week;return Or(this.year(),e.dow,e.doy)}function ip(){var e=this.localeData()._week;return Or(this.weekYear(),e.dow,e.doy)}function xu(e,r,n,t,a){var s;return e==null?Tt(this,t,a).year:(s=Or(e,t,a),r>s&&(r=s),op.call(this,e,r,n,t,a))}function op(e,r,n,t,a){var s=_u(e,r,n,t,a),i=ft(s.year,0,s.dayOfYear);return this.year(i.getUTCFullYear()),this.month(i.getUTCMonth()),this.date(i.getUTCDate()),this}C("Q",0,"Qo","quarter");w("Q",Eu);le("Q",function(e,r){r[_r]=(Z(e)-1)*3});function lp(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}C("D",["DD",2],"Do","date");w("D",fe,cn);w("DD",fe,Je);w("Do",function(e,r){return e?r._dayOfMonthOrdinalParse||r._ordinalParse:r._dayOfMonthOrdinalParseLenient});le(["D","DD"],Er);le("Do",function(e,r){r[Er]=Z(e.match(fe)[0])});var Cu=_n("Date",!0);C("DDD",["DDDD",3],"DDDo","dayOfYear");w("DDD",pa);w("DDDD",vu);le(["DDD","DDDD"],function(e,r,n){n._dayOfYear=Z(e)});function dp(e){var r=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?r:this.add(e-r,"d")}C("m",["mm",2],0,"minute");w("m",fe,Ws);w("mm",fe,Je);le(["m","mm"],nr);var up=_n("Minutes",!1);C("s",["ss",2],0,"second");w("s",fe,Ws);w("ss",fe,Je);le(["s","ss"],hr);var gp=_n("Seconds",!1);C("S",0,0,function(){return~~(this.millisecond()/100)});C(0,["SS",2],0,function(){return~~(this.millisecond()/10)});C(0,["SSS",3],0,"millisecond");C(0,["SSSS",4],0,function(){return this.millisecond()*10});C(0,["SSSSS",5],0,function(){return this.millisecond()*100});C(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});C(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});C(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});C(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});w("S",pa,Eu);w("SS",pa,Je);w("SSS",pa,vu);var Vr,$u;for(Vr="SSSS";Vr.length<=9;Vr+="S")w(Vr,bn);function kp(e,r){r[xr]=Z(("0."+e)*1e3)}for(Vr="S";Vr.length<=9;Vr+="S")le(Vr,kp);$u=_n("Milliseconds",!1);C("z",0,0,"zoneAbbr");C("zz",0,0,"zoneName");function Ep(){return this._isUTC?"UTC":""}function vp(){return this._isUTC?"Coordinated Universal Time":""}var O=_t.prototype;O.add=iA;O.calendar=EA;O.clone=vA;O.diff=pA;O.endOf=DA;O.format=hA;O.from=SA;O.fromNow=NA;O.to=OA;O.toNow=IA;O.get=_R;O.invalidAt=jA;O.isAfter=mA;O.isBefore=fA;O.isBetween=TA;O.isSame=RA;O.isSameOrAfter=yA;O.isSameOrBefore=AA;O.isValid=wA;O.lang=ju;O.locale=Bu;O.localeData=Uu;O.max=wy;O.min=Gy;O.parsingFlags=BA;O.set=hR;O.startOf=KA;O.subtract=oA;O.toArray=MA;O.toObject=VA;O.toDate=FA;O.toISOString=cA;O.inspect=_A;typeof Symbol<"u"&&Symbol.for!=null&&(O[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});O.toJSON=GA;O.toString=bA;O.unix=PA;O.valueOf=LA;O.creationData=UA;O.eraName=xA;O.eraNarrow=CA;O.eraAbbr=$A;O.eraYear=JA;O.year=Tu;O.isLeapYear=cR;O.weekYear=rp;O.isoWeekYear=np;O.quarter=O.quarters=lp;O.month=bu;O.daysInMonth=FR;O.week=O.weeks=qR;O.isoWeek=O.isoWeeks=HR;O.weeksInYear=sp;O.weeksInWeekYear=ip;O.isoWeeksInYear=tp;O.isoWeeksInISOWeekYear=ap;O.date=Cu;O.day=O.days=ny;O.weekday=ty;O.isoWeekday=ay;O.dayOfYear=dp;O.hour=O.hours=gy;O.minute=O.minutes=up;O.second=O.seconds=gp;O.millisecond=O.milliseconds=$u;O.utcOffset=$y;O.utc=Wy;O.local=zy;O.parseZone=Zy;O.hasAlignedHourOffset=Xy;O.isDST=Qy;O.isLocal=rA;O.isUtcOffset=nA;O.isUtc=Mu;O.isUTC=Mu;O.zoneAbbr=Ep;O.zoneName=vp;O.dates=Qe("dates accessor is deprecated. Use date instead.",Cu);O.months=Qe("months accessor is deprecated. Use month instead",bu);O.years=Qe("years accessor is deprecated. Use year instead",Tu);O.zone=Qe("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Jy);O.isDSTShifted=Qe("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",eA);function mp(e){return me(e*1e3)}function fp(){return me.apply(null,arguments).parseZone()}function Ju(e){return e}var ae=Ys.prototype;ae.calendar=rR;ae.longDateFormat=sR;ae.invalidDate=oR;ae.ordinal=uR;ae.preparse=Ju;ae.postformat=Ju;ae.relativeTime=kR;ae.pastFuture=ER;ae.set=QT;ae.eras=qA;ae.erasParse=HA;ae.erasConvertYear=YA;ae.erasAbbrRegex=zA;ae.erasNameRegex=WA;ae.erasNarrowRegex=ZA;ae.months=KR;ae.monthsShort=DR;ae.monthsParse=PR;ae.monthsRegex=VR;ae.monthsShortRegex=MR;ae.week=wR;ae.firstDayOfYear=UR;ae.firstDayOfWeek=jR;ae.weekdays=ZR;ae.weekdaysMin=QR;ae.weekdaysShort=XR;ae.weekdaysParse=ry;ae.weekdaysRegex=sy;ae.weekdaysShortRegex=iy;ae.weekdaysMinRegex=oy;ae.isPM=dy;ae.meridiem=ky;function na(e,r,n,t){var a=Lr(),s=Rr().set(t,r);return a[n](s,e)}function Wu(e,r,n){if(Kr(e)&&(r=e,e=void 0),e=e||"",r!=null)return na(e,r,n,"month");var t,a=[];for(t=0;t<12;t++)a[t]=na(e,t,n,"month");return a}function li(e,r,n,t){typeof e=="boolean"?(Kr(r)&&(n=r,r=void 0),r=r||""):(r=e,n=r,e=!1,Kr(r)&&(n=r,r=void 0),r=r||"");var a=Lr(),s=e?a._week.dow:0,i,o=[];if(n!=null)return na(r,(n+s)%7,t,"day");for(i=0;i<7;i++)o[i]=na(r,(i+s)%7,t,"day");return o}function Tp(e,r){return Wu(e,r,"months")}function Rp(e,r){return Wu(e,r,"monthsShort")}function yp(e,r,n){return li(e,r,n,"weekdays")}function Ap(e,r,n){return li(e,r,n,"weekdaysShort")}function pp(e,r,n){return li(e,r,n,"weekdaysMin")}Gr("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var r=e%10,n=Z(e%100/10)===1?"th":r===1?"st":r===2?"nd":r===3?"rd":"th";return e+n}});F.lang=Qe("moment.lang is deprecated. Use moment.locale instead.",Gr);F.langData=Qe("moment.langData is deprecated. Use moment.localeData instead.",Lr);var pr=Math.abs;function bp(){var e=this._data;return this._milliseconds=pr(this._milliseconds),this._days=pr(this._days),this._months=pr(this._months),e.milliseconds=pr(e.milliseconds),e.seconds=pr(e.seconds),e.minutes=pr(e.minutes),e.hours=pr(e.hours),e.months=pr(e.months),e.years=pr(e.years),this}function zu(e,r,n,t){var a=or(r,n);return e._milliseconds+=t*a._milliseconds,e._days+=t*a._days,e._months+=t*a._months,e._bubble()}function cp(e,r){return zu(this,e,r,1)}function _p(e,r){return zu(this,e,r,-1)}function oo(e){return e<0?Math.floor(e):Math.ceil(e)}function hp(){var e=this._milliseconds,r=this._days,n=this._months,t=this._data,a,s,i,o,l;return e>=0&&r>=0&&n>=0||e<=0&&r<=0&&n<=0||(e+=oo(Rs(n)+r)*864e5,r=0,n=0),t.milliseconds=e%1e3,a=We(e/1e3),t.seconds=a%60,s=We(a/60),t.minutes=s%60,i=We(s/60),t.hours=i%24,r+=We(i/24),l=We(Zu(r)),n+=l,r-=oo(Rs(l)),o=We(n/12),n%=12,t.days=r,t.months=n,t.years=o,this}function Zu(e){return e*4800/146097}function Rs(e){return e*146097/4800}function Sp(e){if(!this.isValid())return NaN;var r,n,t=this._milliseconds;if(e=er(e),e==="month"||e==="quarter"||e==="year")switch(r=this._days+t/864e5,n=this._months+Zu(r),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(r=this._days+Math.round(Rs(this._months)),e){case"week":return r/7+t/6048e5;case"day":return r+t/864e5;case"hour":return r*24+t/36e5;case"minute":return r*1440+t/6e4;case"second":return r*86400+t/1e3;case"millisecond":return Math.floor(r*864e5)+t;default:throw new Error("Unknown unit "+e)}}function Pr(e){return function(){return this.as(e)}}var Xu=Pr("ms"),Np=Pr("s"),Op=Pr("m"),Ip=Pr("h"),Kp=Pr("d"),Dp=Pr("w"),Lp=Pr("M"),Pp=Pr("Q"),Fp=Pr("y"),Mp=Xu;function Vp(){return or(this)}function Gp(e){return e=er(e),this.isValid()?this[e+"s"]():NaN}function Qr(e){return function(){return this.isValid()?this._data[e]:NaN}}var wp=Qr("milliseconds"),Bp=Qr("seconds"),jp=Qr("minutes"),Up=Qr("hours"),qp=Qr("days"),Hp=Qr("months"),Yp=Qr("years");function xp(){return We(this.days()/7)}var cr=Math.round,kn={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Cp(e,r,n,t,a){return a.relativeTime(r||1,!!n,e,t)}function $p(e,r,n,t){var a=or(e).abs(),s=cr(a.as("s")),i=cr(a.as("m")),o=cr(a.as("h")),l=cr(a.as("d")),u=cr(a.as("M")),d=cr(a.as("w")),k=cr(a.as("y")),m=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||i<=1&&["m"]||i<n.m&&["mm",i]||o<=1&&["h"]||o<n.h&&["hh",o]||l<=1&&["d"]||l<n.d&&["dd",l];return n.w!=null&&(m=m||d<=1&&["w"]||d<n.w&&["ww",d]),m=m||u<=1&&["M"]||u<n.M&&["MM",u]||k<=1&&["y"]||["yy",k],m[2]=r,m[3]=+e>0,m[4]=t,Cp.apply(null,m)}function Jp(e){return e===void 0?cr:typeof e=="function"?(cr=e,!0):!1}function Wp(e,r){return kn[e]===void 0?!1:r===void 0?kn[e]:(kn[e]=r,e==="s"&&(kn.ss=r-1),!0)}function zp(e,r){if(!this.isValid())return this.localeData().invalidDate();var n=!1,t=kn,a,s;return typeof e=="object"&&(r=e,e=!1),typeof e=="boolean"&&(n=e),typeof r=="object"&&(t=Object.assign({},kn,r),r.s!=null&&r.ss==null&&(t.ss=r.s-1)),a=this.localeData(),s=$p(this,!n,t,a),n&&(s=a.pastFuture(+this,s)),a.postformat(s)}var za=Math.abs;function on(e){return(e>0)-(e<0)||+e}function Ia(){if(!this.isValid())return this.localeData().invalidDate();var e=za(this._milliseconds)/1e3,r=za(this._days),n=za(this._months),t,a,s,i,o=this.asSeconds(),l,u,d,k;return o?(t=We(e/60),a=We(t/60),e%=60,t%=60,s=We(n/12),n%=12,i=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",u=on(this._months)!==on(o)?"-":"",d=on(this._days)!==on(o)?"-":"",k=on(this._milliseconds)!==on(o)?"-":"",l+"P"+(s?u+s+"Y":"")+(n?u+n+"M":"")+(r?d+r+"D":"")+(a||t||e?"T":"")+(a?k+a+"H":"")+(t?k+t+"M":"")+(e?k+i+"S":"")):"P0D"}var ee=Na.prototype;ee.isValid=Hy;ee.abs=bp;ee.add=cp;ee.subtract=_p;ee.as=Sp;ee.asMilliseconds=Xu;ee.asSeconds=Np;ee.asMinutes=Op;ee.asHours=Ip;ee.asDays=Kp;ee.asWeeks=Dp;ee.asMonths=Lp;ee.asQuarters=Pp;ee.asYears=Fp;ee.valueOf=Mp;ee._bubble=hp;ee.clone=Vp;ee.get=Gp;ee.milliseconds=wp;ee.seconds=Bp;ee.minutes=jp;ee.hours=Up;ee.days=qp;ee.weeks=xp;ee.months=Hp;ee.years=Yp;ee.humanize=zp;ee.toISOString=Ia;ee.toString=Ia;ee.toJSON=Ia;ee.locale=Bu;ee.localeData=Uu;ee.toIsoString=Qe("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ia);ee.lang=ju;C("X",0,0,"unix");C("x",0,0,"valueOf");w("x",ca);w("X",TR);le("X",function(e,r,n){n._d=new Date(parseFloat(e)*1e3)});le("x",function(e,r,n){n._d=new Date(Z(e))});//! moment.js
F.version="2.30.1";ZT(me);F.fn=O;F.min=By;F.max=jy;F.now=Uy;F.utc=Rr;F.unix=mp;F.months=Tp;F.isDate=ct;F.locale=Gr;F.invalid=ya;F.duration=or;F.isMoment=ar;F.weekdays=yp;F.parseZone=fp;F.localeData=Lr;F.isDuration=Yt;F.monthsShort=Rp;F.weekdaysMin=pp;F.defineLocale=ei;F.updateLocale=fy;F.locales=Ty;F.weekdaysShort=Ap;F.normalizeUnits=er;F.relativeTimeRounding=Jp;F.relativeTimeThreshold=Wp;F.calendarFormat=kA;F.prototype=O;F.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Zp={"ValidationMessage.NotEmpty":"Feltet må fylles ut","ValidationMessage.MinLength":"Du må skrive minst {length} tegn","ValidationMessage.MaxLength":"Du kan skrive maksimalt {length} tegn","ValidationMessage.MinValue":"Feltet må være større eller lik {length}","ValidationMessage.MaxValue":"Feltet må være mindre eller lik {length}","ValidationMessage.InvalidDate":"Dato må skrives slik : dd.mm.åååå","ValidationMessage.DateNotBeforeOrEqual":"Dato må være før eller lik {limit}","ValidationMessage.DateNotAfterOrEqual":"Dato må være etter eller lik {limit}","ValidationMessage.DateRangesOverlapping":"Perioder kan ikke overlappe i tid","ValidationMessage.DateRangesOverlappingPeriodTypes":"Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)","ValidationMessage.DatesNotEqual":"Dato må være lik {value}","ValidationMessage.InvalidInteger":"Tallet kan ikke ha desimaler","ValidationMessage.InvalidDecimal":"Tallet kan ikke inneholde mer enn to desimaler","ValidationMessage.InvalidDatesInPeriod":"Periode må skrives slik : dd.mm.åååå - dd.mm.åååå","ValidationMessage.InvalidPeriod":"Startdato må være før eller lik sluttdato","ValidationMessage.InvalidPeriodRange":"Periode er utenfor opptjeningsperioden","ValidationMessage.InvalidNumber":"Feltet kan kun inneholde tall","ValidationMessage.maxLengthOrFodselsnr":"Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)","ValidationMessage.Registrering.TerminEllerFoedselMessage":"Fyll ut informasjon om termindato eller fødselsdato","ValidationMessage.InvalidFodselsnummerFormat":"Feltet må være et fødselsnummer (11 siffer)","ValidationMessage.InvalidFodselsnummer":"Ugyldig fødselsnummer","ValidationMessage.SammeFodselsnummerSomSoker":"Fødselsnummer til den andre forelderen kan ikke være det samme som søker.","ValidationMessage.InvalidText":"Feltet inneholder ugyldige tegn: {text}","ValidationMessage.InvalidValue":"Feltet inneholder en ugyldig verdi: {value}","ValidationMessage.ArrayMinLength":"Listen må ha lengde større enn: {length}","ValidationMessage.InvalidSaksnummerOrFodselsnummerFormat":"Ugyldig saksnummer eller fødselsnummer","ValidationMessage.InvalidOrganisasjonsnummer":"Ugyldig organisasjonsnummer.","ValidationMessage.InvalidOrganisasjonsnummerOrFodselsnr":"Ugyldig organisasjonsnummer eller fødselsnummer.","ValidationMessage.NoWhiteSpace":"Feltet kan ikke inneholde mellomrom."},Ka=Me(Zp),Qu=()=>Ka.formatMessage({id:"ValidationMessage.NotEmpty"}),Xp=e=>Ka.formatMessage({id:"ValidationMessage.MinLength"},{length:e}),Qp=e=>Ka.formatMessage({id:"ValidationMessage.MaxLength"},{length:e}),eb=e=>Ka.formatMessage({id:"ValidationMessage.InvalidText"},{text:e}),rb=/^[0-9a-zA-ZæøåÆØÅAaÁáBbCcČčDdĐđEeFfGgHhIiJjKkLlMmNnŊŋOoPpRrSsŠšTtŦŧUuVvZzŽžéôèÉöüäÖÜÄ .'\-/%§!?@_()+:;,="&\n]*$/,nb=/[0-9a-zA-ZæøåÆØÅAaÁáBbCcČčDdĐđEeFfGgHhIiJjKkLlMmNnŊŋOoPpRrSsŠšTtŦŧUuVvZzŽžéôèÉöüäÖÜÄ .'\-/%§!?@_()+:;,="&\n]*/g,Da=e=>e==null||e.toString().trim().length===0,lo=e=>Da(e)?Qu():void 0,tb=e=>r=>Da(r)&&e(r)?Qu():void 0,di=e=>r=>Da(r)||r.toString().trim().length>=e?null:Xp(e),La=e=>r=>Da(r)||r.toString().trim().length<=e?null:Qp(e),ta=e=>{if(!rb.test(e)){const r=e.replace(nb,"");return eb(r.replace(/[\t]/g,"Tabulatortegn"))}return null},Nt={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.VilkarDato":"Dato for opphør av medlemskapet","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"};Me(Nt);Me(Nt);var Pa=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Pa||{});Pa.BRUKERS_ANDEL;Pa.FRILANS;Pa.EGEN_NÆRING;Me(Nt);Me(Nt);Me(Nt);const eg=(e,...r)=>{const n=r.find(t=>t===e);if(!n)throw Error(`Det finnes ikke enum for kode ${e}`);return n},ab=(e,r)=>e===Vg.TILBAKEKR_OPPRETT&&(!!r.simuleringResultat.sumInntrekk||!!r.simuleringResultatUtenInntrekk),rg=(e,r,n)=>n!=null&&r?ab(n.videreBehandling,r)?"VedtakForm.OpprettTilbakekrOgInntrekk":vt(e)(n.videreBehandling,Ir.TILBAKEKR_VIDERE_BEH):"",sb="_fritekstItem_1kqqb_1",ib={fritekstItem:sb},ob=La(1500),lb=di(3),Ot=({behandlingsresultat:e,språkKode:r,isReadOnly:n,labelTextCode:t})=>{const a=ir();return E.jsxs(E.Fragment,{children:[!n&&E.jsxs(E.Fragment,{children:[E.jsx(be,{sixteenPx:!0}),E.jsx(Zt,{name:"begrunnelse",label:a.formatMessage({id:t}),validate:[lb,ob,ta],maxLength:1500,readOnly:n,parse:s=>s.toString().replaceAll(new RegExp("\\p{Dash_Punctuation}","gu"),"-").replaceAll("	"," "),badges:[{type:"info",titleText:js(r)}]})]}),n&&(e==null?void 0:e.avslagsarsakFritekst)&&E.jsxs("span",{children:[E.jsx(be,{twentyPx:!0}),E.jsx(wr,{children:a.formatMessage({id:t})}),E.jsx(be,{eightPx:!0}),E.jsx("div",{className:ib.fritekstItem,children:zr(e.avslagsarsakFritekst)})]})]})};Ot.__docgenInfo={description:"",methods:[],displayName:"VedtakFritekstPanel",props:{behandlingsresultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},labelTextCode:{required:!0,tsType:{name:"string"},description:""}}};const ng=({behandlingsresultat:e,ytelseTypeKode:r,språkKode:n,isReadOnly:t,skalBrukeOverstyrendeFritekstBrev:a,beregningErManueltFastsatt:s,resultatstruktur:i={}})=>{const o=ir();return E.jsxs(E.Fragment,{children:[r===z.ENGANGSSTONAD&&i&&"antallBarn"in i&&E.jsxs($r,{children:[E.jsxs(Cr,{children:[E.jsxs(Pe,{children:[E.jsx(wr,{children:o.formatMessage({id:"VedtakForm.beregnetTilkjentYtelse"})}),E.jsx(je,{size:"small",children:Jd(i.beregnetTilkjentYtelse)})]}),E.jsxs(Pe,{children:[E.jsx(wr,{children:o.formatMessage({id:"VedtakForm.AntallBarn"})}),E.jsx(je,{size:"small",children:i.antallBarn})]})]}),E.jsx(be,{sixteenPx:!0})]}),s&&!a&&E.jsx(Ot,{isReadOnly:t,språkKode:n,behandlingsresultat:e,labelTextCode:"VedtakForm.Fritekst.Beregningsgrunnlag"})]})};ng.__docgenInfo={description:"",methods:[],displayName:"VedtakInnvilgetPanel",props:{resultatstruktur:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""}}};const ys=(e,r,n)=>{const t=e.filter(s=>s.vilkarStatus===aa.IKKE_OPPFYLT);if(t.length===0)return E.jsx(Ae,{id:"VedtakForm.UttaksperioderIkkeGyldig"});if(!(n!=null&&n.avslagsarsak))throw new Error("Behandlingsresultat eller avslagsårsak finnes ikke");return`${r(t[0].vilkarType,Ir.VILKAR_TYPE)}: ${r(n.avslagsarsak,Ir.AVSLAGSARSAK,t[0].vilkarType)}`},db=[],tg=({vilkar:e=db,behandlingsresultat:r,språkKode:n,isReadOnly:t,alleKodeverk:a,beregningErManueltFastsatt:s,skalBrukeOverstyrendeFritekstBrev:i})=>{const o=ir(),l=vt(a),u=s?"VedtakForm.Fritekst.Beregningsgrunnlag":"VedtakForm.Fritekst";return E.jsxs(E.Fragment,{children:[ys(e,l,r)&&E.jsxs("div",{children:[E.jsx(je,{size:"small",children:o.formatMessage({id:"VedtakForm.ArsakTilAvslag"})}),E.jsx(Ze,{size:"small",children:ys(e,l,r)}),E.jsx(be,{sixteenPx:!0})]}),!i&&E.jsx(Ot,{isReadOnly:t,språkKode:n,behandlingsresultat:r,labelTextCode:u})]})};ys.__docgenInfo={description:"",methods:[],displayName:"getAvslagArsak"};tg.__docgenInfo={description:"",methods:[],displayName:"VedtakAvslagPanel",props:{vilkar:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};var As=(e=>(e.PENDING="PENDING",e.COMPLETE="COMPLETE",e.DELAYED="DELAYED",e.CANCELLED="CANCELLED",e.HALTED="HALTED",e))(As||{});const ub="_line_7rsxc_1",gb="_smallTextArea_7rsxc_7",kb="_pil_7rsxc_11",Eb="_space_7rsxc_15",vb="_avsnittOverskrift_7rsxc_19",ln={line:ub,smallTextArea:gb,pil:kb,space:Eb,avsnittOverskrift:vb},mb=La(200),fb=La(1e4),uo=di(3),ag=({forhåndsvisOverstyrtBrev:e,isReadOnly:r,språkKode:n,skalViseLink:t})=>{const a=ir();return E.jsxs(E.Fragment,{children:[E.jsx(be,{thirtyTwoPx:!0}),E.jsx(Gf,{}),E.jsx(be,{thirtyTwoPx:!0}),E.jsx($r,{children:E.jsxs(Cr,{children:[E.jsx(Pe,{className:ln.space,children:E.jsx(je,{size:"small",className:ln.avsnittOverskrift,children:E.jsx(Ae,{id:"FritekstBrevPanel.ManueltVedtaksbrev"})})}),E.jsx(Pe,{className:ln.space,children:E.jsx(wr,{children:js(n)})}),E.jsx(Pe,{children:!r&&t&&E.jsxs(Qa,{href:"#",onClick:e,children:[E.jsx("span",{children:E.jsx(Ae,{id:"FritekstBrevPanel.ForhandsvisManueltVedtaksbrev"})}),E.jsx(td,{className:ln.pil})]})})]})}),E.jsx("hr",{className:ln.line}),E.jsx(be,{twentyPx:!0}),!r&&E.jsx(ld,{variant:"info",size:"small",children:E.jsx(je,{size:"small",children:E.jsx(Ae,{id:"VedtakFellesPanel.Forklaring"})})}),E.jsx(be,{sixteenPx:!0}),E.jsx(Zt,{name:"overskrift",label:a.formatMessage({id:"VedtakForm.Overskrift"}),validate:[lo,uo,mb,ta],maxLength:200,readOnly:r,className:ln.smallTextArea}),E.jsx(be,{thirtyTwoPx:!0}),E.jsx(Zt,{name:"brødtekst",label:a.formatMessage({id:"VedtakForm.Innhold"}),validate:[lo,uo,fb,ta],maxLength:1e4,readOnly:r,parse:s=>s.toString().replaceAll(new RegExp("\\p{Dash_Punctuation}","gu"),"-").replaceAll("	"," ")}),r&&E.jsxs(E.Fragment,{children:[E.jsx(be,{sixteenPx:!0}),E.jsx($r,{children:E.jsxs(Cr,{children:[E.jsx(Pe,{children:E.jsx(au,{})}),E.jsx(Pe,{children:E.jsx(Ze,{size:"small",children:E.jsx(Ae,{id:"FritekstBrevPanel.Endret"})})})]})})]})]})};ag.__docgenInfo={description:"",methods:[],displayName:"ManueltVedtaksbrevPanel",props:{forhåndsvisOverstyrtBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},skalViseLink:{required:!0,tsType:{name:"boolean"},description:""}}};const Tb=(e,r)=>{const n=[];return r&&r.some(t=>t.definisjon===ge.VURDERE_ANNEN_YTELSE)&&n.push(e.formatMessage({id:"VedtakForm.VurderAnnenYtelse"})),r&&r.some(t=>t.definisjon===ge.VURDERE_DOKUMENT)&&n.push(e.formatMessage({id:"VedtakForm.VurderDokument"})),r&&r.some(t=>t.definisjon===ge.VURDERE_INNTEKTSMELDING_KLAGE)&&n.push(e.formatMessage({id:"VedtakForm.VurderInntektsmeldingKlage"})),r&&r.some(t=>t.definisjon===ge.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST)&&n.push(e.formatMessage({id:"VedtakForm.KontrollerRevurderingsbehandling"})),n},sg=({isReadOnly:e,aksjonspunkter:r})=>{const n=ir(),t=Tb(n,r);return!e&&t.length>0?E.jsxs(E.Fragment,{children:[E.jsx(be,{sixteenPx:!0}),E.jsxs(ld,{variant:"info",size:"small",children:[E.jsx(Ze,{size:"small",children:E.jsx(Ae,{id:"VedtakHelpTextPanel.Vurder"})}),E.jsx("ul",{children:t.map(a=>E.jsx("li",{children:E.jsx(Ze,{size:"small",children:a})},a))})]})]}):null};sg.__docgenInfo={description:"",methods:[],displayName:"VedtakHelpTextPanel",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""}}};const Rb="_pil_gjh8k_1",yb="_blyant_gjh8k_5",Ab="_blyantDisablet_gjh8k_9",pb="_status_gjh8k_16",bb="_innvilgetImage_gjh8k_21",cb="_avslattImage_gjh8k_27",_b="_disabletLink_gjh8k_33",hb="_space_gjh8k_38",br={pil:Rb,blyant:yb,blyantDisablet:Ab,status:pb,innvilgetImage:bb,avslattImage:cb,disabletLink:_b,space:hb},Sb=e=>e===Ye.AVSLUTTET||e===Ye.IVERKSETTER_VEDTAK?"VedtakForm.vedtak":"VedtakForm.ForslagTilVedtak",Nb=e=>e===Ye.BEHANDLING_UTREDES,Ob=(e,r)=>e&&e.some(n=>n.definisjon===ge.FORESLA_VEDTAK)||r?"VedtakForm.TilGodkjenning":"VedtakForm.FattVedtak",Ib=e=>e.avslagsarsak?e.avslagsarsak!==Kg.INGEN_BEREGNINGSREGLER:!0,Kb=(e,r)=>{if(!r)return!0;const{konsekvenserForYtelsen:n}=r;return!Array.isArray(n)||n.length!==1?!0:!e.some(t=>t===n[0])},ui=({behandling:e,aksjonspunkter:r,readOnly:n,renderPanel:t,previewAutomatiskBrev:a,previewOverstyrtBrev:s,tilbakekrevingtekst:i,erBehandlingEtterKlage:o,vedtakstatusTekst:l})=>{const u=ir(),{setValue:d,formState:{isSubmitting:k}}=An(),{behandlingsresultat:m,behandlingPaaVent:y,sprakkode:_,status:v,behandlingHenlagt:A,uuid:h,taskStatus:p}=e;if(!m)throw new Error(`behandlingsresultat finnes ikke på behandling ${h}`);const[b,B]=T.useState(!!m.vedtaksbrev&&m.vedtaksbrev==="FRITEKST"),[P,j]=T.useState(!1),N=T.useCallback($=>{B(!0),$.preventDefault()},[]),S=T.useCallback(()=>{B(!1),j(!1),d("overskrift",void 0),d("brødtekst",void 0)},[]),G=ps(m.type),U=bs(m.type),q=Vl(m.type),K=Ib(m),M=!A&&(p==null?void 0:p.status)!==As.HALTED&&(p==null?void 0:p.status)!==As.DELAYED,H=T.useMemo(()=>Kb([xe.ENDRING_I_FORDELING_AV_YTELSEN,xe.INGEN_ENDRING],m),[m]);return E.jsxs(E.Fragment,{children:[E.jsx(ym,{text:u.formatMessage({id:"VedtakFellesPanel.Forkast"}),okButtonText:u.formatMessage({id:"VedtakFellesPanel.Ok"}),showModal:P,cancel:()=>j(!1),submit:S}),E.jsx($r,{children:E.jsxs(Cr,{children:[v===Ye.AVSLUTTET&&E.jsxs(Pe,{children:[G&&E.jsx(ad,{className:br.innvilgetImage}),!G&&E.jsx(id,{className:br.avslattImage})]}),E.jsx(Pe,{children:E.jsx(Is,{size:"small",children:E.jsx(Ae,{id:Sb(v)})})})]})}),E.jsx(be,{eightPx:!0}),E.jsx($r,{children:E.jsxs(Cr,{children:[E.jsx(Pe,{className:br.space,children:E.jsxs(je,{size:"small",children:[l,i&&`. ${u.formatMessage({id:i})}`]})}),E.jsxs(Pe,{className:br.space,children:[K&&H&&M&&E.jsxs(Qa,{href:"#",onClick:a,children:[E.jsx("span",{children:E.jsx(Ae,{id:o?"VedtakFellesPanel.UtkastVedtaksbrev":"VedtakFellesPanel.AutomatiskVedtaksbrev"})}),E.jsx(td,{className:br.pil})]}),K&&H&&!M&&E.jsx(Ze,{size:"small",className:br.disabletLink,children:E.jsx(Ae,{id:o?"VedtakFellesPanel.UtkastVedtaksbrev":"VedtakFellesPanel.AutomatiskVedtaksbrev"})})]}),E.jsxs(Pe,{children:[!n&&!b&&E.jsxs(Qa,{href:"#",onClick:N,children:[E.jsx(Si,{className:br.blyant}),E.jsx("span",{children:E.jsx(Ae,{id:"VedtakFellesPanel.RedigerVedtaksbrev"})})]}),(n||b)&&E.jsxs(E.Fragment,{children:[E.jsx(Si,{className:br.blyantDisablet}),E.jsx(Ze,{size:"small",className:br.disabletLink,children:E.jsx(Ae,{id:"VedtakFellesPanel.RedigerVedtaksbrev"})})]})]})]})}),E.jsx(sg,{aksjonspunkter:r,isReadOnly:n}),E.jsx(be,{twentyPx:!0}),t(b,G,U,q),b&&E.jsx(ag,{isReadOnly:n,språkKode:_,forhåndsvisOverstyrtBrev:s,skalViseLink:K}),Nb(v)&&E.jsxs(E.Fragment,{children:[E.jsx(be,{twentyPx:!0}),E.jsx($r,{children:E.jsxs(Cr,{children:[E.jsx(Pe,{children:!n&&E.jsx(Tn,{variant:"primary",size:"small",disabled:y||k,loading:k,children:E.jsx(Ae,{id:Ob(r,b)})})}),b&&E.jsx(Pe,{children:E.jsx(Tn,{size:"small",variant:"secondary",onClick:()=>j(!0),type:"button",children:E.jsx(Ae,{id:"VedtakFellesPanel.ForkastManueltBrev"})})})]})})]})]})};ui.__docgenInfo={description:"",methods:[],displayName:"VedtakFellesPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
) => ReactNode`,signature:{arguments:[{type:{name:"boolean"},name:"skalBrukeManueltBrev"},{type:{name:"boolean"},name:"erInnvilget"},{type:{name:"boolean"},name:"erAvslatt"},{type:{name:"boolean"},name:"erOpphor"}],return:{name:"ReactNode"}}},description:""},previewAutomatiskBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},previewOverstyrtBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},tilbakekrevingtekst:{required:!1,tsType:{name:"string"},description:""},vedtakstatusTekst:{required:!1,tsType:{name:"string"},description:""}}};const Db=(e,r)=>e===W.KLAGE_YTELSESVEDTAK_OPPHEVET?"VedtakForm.ResultatKlageYtelsesvedtakOpphevet":e===W.KLAGE_AVVIST?"VedtakForm.ResultatKlageAvvist":r===z.ENGANGSSTONAD?"VedtakForm.EngangsstonadIkkeInnvilget":r===z.SVANGERSKAPSPENGER?"VedtakForm.SvangerskapspengerIkkeInnvilget":"VedtakForm.ForeldrepengerIkkeInnvilget",Lb=(e,r)=>e===W.KLAGE_YTELSESVEDTAK_STADFESTET?"VedtakForm.ResultatOpprettholdVedtak":Fg(e)?"VedtakForm.ResultatKlageMedhold":r===z.ENGANGSSTONAD?"VedtakForm.VilkarStatusInnvilgetEngangsstonad":r===z.SVANGERSKAPSPENGER?"VedtakForm.SvangerskapspengerInnvilget":"VedtakForm.VilkarStatusInnvilgetForeldrepenger",go=(e,r,n,t,a,s)=>i=>{i.preventDefault();const o=e?!!a&&!!s:!!t;if(n(),!e||o){const l={fritekst:e?a:t,dokumentMal:e?Gl.FRITEKST:void 0,tittel:e?s:void 0,gjelderVedtak:!0,automatiskVedtaksbrev:e?void 0:!0};r(l)}},Pb=(e=[])=>e.map(({behandlingArsakType:r})=>r).some(r=>r===Sr.ETTER_KLAGE||r===Sr.KLAGE_U_INNTK||r===Sr.KLAGE_M_INNTK),Fb=(e,r,n)=>n&&ps(n.type)?e.formatMessage({id:Lb(n.type,r)}):n&&bs(n.type)?e.formatMessage({id:Db(n.type,r)}):"",Mb=e=>e.aksjonspunktKoder.map(r=>({kode:eg(r,ge.FORESLA_VEDTAK,ge.FORESLA_VEDTAK_MANUELT,ge.VEDTAK_UTEN_TOTRINNSKONTROLL,ge.VURDERE_ANNEN_YTELSE,ge.VURDERE_DOKUMENT),begrunnelse:e.begrunnelse,fritekstBrev:e.brødtekst,skalBrukeOverstyrendeFritekstBrev:!!e.brødtekst,overskrift:e.overskrift})),Vb=(e,r)=>{var n;if(r)return(n=e.behandlingsresultat)!=null&&n.avslagsarsakFritekst?zr(e.behandlingsresultat.avslagsarsakFritekst):void 0},Gb=(e,r,n)=>{var t,a;return{beregningErManueltFastsatt:n,aksjonspunktKoder:e.filter(s=>s.kanLoses).map(s=>s.definisjon),overskrift:zr((t=r.behandlingsresultat)==null?void 0:t.overskrift),brødtekst:zr((a=r.behandlingsresultat)==null?void 0:a.fritekstbrev),begrunnelse:Vb(r,n)}},ig=({behandling:e,readOnly:r,aksjonspunkter:n,previewCallback:t,ytelseTypeKode:a,resultatstruktur:s,alleKodeverk:i,tilbakekrevingvalg:o,simuleringResultat:l,vilkar:u,beregningErManueltFastsatt:d,submitCallback:k,formData:m,setFormData:y})=>{const _=ir(),v=Ql({defaultValues:m||Gb(n,e,d)}),A=v.watch("begrunnelse"),h=v.watch("overskrift"),p=v.watch("brødtekst"),{trigger:b}=v,{behandlingsresultat:B,sprakkode:P}=e,j=T.useMemo(()=>Pb(e.behandlingÅrsaker),[e.behandlingÅrsaker]),N=T.useMemo(()=>rg(i,l,o),[l,o]),S=T.useMemo(()=>Fb(_,a,B),[B]),G=go(!0,t,b,A,p,h),U=go(!1,t,b,A,p,h);return E.jsx(ou,{formMethods:v,onSubmit:q=>k(Mb(q)),setDataOnUnmount:y,children:E.jsx(ui,{behandling:e,vedtakstatusTekst:S,aksjonspunkter:n,readOnly:r,previewAutomatiskBrev:U,previewOverstyrtBrev:G,tilbakekrevingtekst:N,erBehandlingEtterKlage:j,renderPanel:(q,K,M)=>K?E.jsx(ng,{behandlingsresultat:B,isReadOnly:r,skalBrukeOverstyrendeFritekstBrev:q,ytelseTypeKode:a,språkKode:P,resultatstruktur:s,beregningErManueltFastsatt:d}):M?E.jsx(tg,{behandlingsresultat:B,isReadOnly:r,språkKode:P,alleKodeverk:i,vilkar:u,beregningErManueltFastsatt:d,skalBrukeOverstyrendeFritekstBrev:q}):null})})};ig.__docgenInfo={description:"",methods:[],displayName:"VedtakForm",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"beregningErManueltFastsatt",value:{name:"boolean",required:!1}},{key:"aksjonspunktKoder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"brødtekst",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var Vn=(e=>(e.INNVILGET="INNVILGET",e.AVSLAG="AVSLAG",e))(Vn||{});const og=({ytelseTypeKode:e,revurderingsÅrsakString:r,isReadOnly:n,resultatstruktur:t,språkKode:a,behandlingsresultat:s,beregningErManueltFastsatt:i,skalBrukeOverstyrendeFritekstBrev:o})=>E.jsxs(E.Fragment,{children:[e===z.ENGANGSSTONAD&&t&&"antallBarn"in t&&E.jsx($r,{children:E.jsxs(Cr,{children:[E.jsxs(Pe,{children:[E.jsx(wr,{children:E.jsx(Ae,{id:"VedtakForm.beregnetTilkjentYtelse"})}),E.jsx(je,{size:"small",children:Jd(t.beregnetTilkjentYtelse)})]}),E.jsxs(Pe,{children:[E.jsx(wr,{children:E.jsx(Ae,{id:"VedtakForm.AntallBarn"})}),E.jsx(je,{size:"small",children:t.antallBarn})]})]})}),(e===z.FORELDREPENGER||e===z.SVANGERSKAPSPENGER)&&E.jsxs(E.Fragment,{children:[r&&E.jsxs(E.Fragment,{children:[E.jsx(je,{size:"small",children:E.jsx(Ae,{id:"VedtakForm.RevurderingFP.Aarsak"})}),E.jsx(Ze,{size:"small",children:r}),E.jsx(be,{eightPx:!0})]}),!o&&i&&E.jsx(Ot,{isReadOnly:n,språkKode:a,behandlingsresultat:s,labelTextCode:"VedtakForm.Fritekst.Beregningsgrunnlag"})]})]});og.__docgenInfo={description:"",methods:[],displayName:"VedtakInnvilgetRevurderingPanel",props:{ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},revurderingsÅrsakString:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},resultatstruktur:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const wb="_fritekstItem_1kqqb_1",Bb={fritekstItem:wb},jb=La(1500),Ub=di(3),qb=(e,r,n)=>{const t=r.filter(s=>s.vilkarStatus===aa.IKKE_OPPFYLT);if(t.length===0)return E.jsx(Ae,{id:"VedtakForm.UttaksperioderIkkeGyldig"});if(!(n!=null&&n.avslagsarsak))throw new Error("Ingen behandlingsresultat eller avslagsårsak finnes");return`${e(t[0].vilkarType,Ir.VILKAR_TYPE)}: ${e(n.avslagsarsak,Ir.AVSLAGSARSAK,t[0].vilkarType)}`},lg=({vilkar:e,behandlingsresultat:r,språkKode:n,erReadOnly:t,alleKodeverk:a,skalBrukeOverstyrendeFritekstBrev:s})=>{const{formState:{isDirty:i}}=An(),o=vt(a),l=d=>d!==void 0||i,u=qb(o,e,r);return E.jsxs(E.Fragment,{children:[u&&E.jsxs(E.Fragment,{children:[E.jsx(je,{size:"small",children:E.jsx(Ae,{id:"VedtakForm.ArsakTilAvslag"})}),E.jsx(Ze,{size:"small",children:u}),E.jsx(be,{sixteenPx:!0})]}),!s&&E.jsxs(E.Fragment,{children:[E.jsx(be,{sixteenPx:!0}),E.jsx(Zt,{name:"begrunnelse",label:E.jsx(Ae,{id:"VedtakForm.Fritekst"}),validate:[tb(l),Ub,jb,ta],maxLength:1500,readOnly:t,parse:d=>d.toString().replaceAll(new RegExp("\\p{Dash_Punctuation}","gu"),"-").replaceAll("	"," "),badges:[{type:"info",titleText:js(n)}]})]}),t&&(r==null?void 0:r.avslagsarsakFritekst)&&E.jsxs("span",{children:[E.jsx(be,{twentyPx:!0}),E.jsx(wr,{children:E.jsx(Ae,{id:"VedtakForm.Fritekst"})}),E.jsx(be,{eightPx:!0}),E.jsx("div",{className:Bb.fritekstItem,children:zr(r.avslagsarsakFritekst)})]})]})};lg.__docgenInfo={description:"",methods:[],displayName:"VedtakAvslagArsakOgBegrunnelsePanel",props:{vilkar:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const dg=({revurderingsÅrsakString:e,språkKode:r,isReadOnly:n,behandlingsresultat:t,beregningErManueltFastsatt:a,skalBrukeOverstyrendeFritekstBrev:s})=>E.jsxs(E.Fragment,{children:[E.jsx(je,{size:"small",children:E.jsx(Ae,{id:"VedtakForm.RevurderingFP.Aarsak"})}),e&&E.jsx(Ze,{size:"small",children:e}),!s&&a&&E.jsx(Ot,{isReadOnly:n,språkKode:r,behandlingsresultat:t,labelTextCode:"VedtakForm.Fritekst.Beregningsgrunnlag"})]});dg.__docgenInfo={description:"",methods:[],displayName:"VedtakOpphorRevurderingPanel",props:{revurderingsÅrsakString:{required:!1,tsType:{name:"string"},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},behandlingsresultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const ko=(e,r,n,t,a)=>s=>{if(s.preventDefault(),!e||(e?!!t&&!!n:!!a)){const o={fritekst:e?t:a,dokumentMal:e?Gl.FRITEKST:void 0,tittel:e?n:void 0,gjelderVedtak:!0,automatiskVedtaksbrev:e?void 0:!0};r(o)}},Hb=(e=[])=>e.map(({behandlingArsakType:r})=>r).some(r=>r===Sr.ETTER_KLAGE||r===Sr.KLAGE_U_INNTK||r===Sr.KLAGE_M_INNTK),Yb=(e,r)=>{if(e===void 0||e.length<1)return;const n=[],t=e.find(s=>s===Sr.RE_ENDRING_FRA_BRUKER),a=e.filter(s=>s!==Sr.RE_ENDRING_FRA_BRUKER).map(s=>r(s,Ir.BEHANDLING_AARSAK));return t!==void 0&&n.push(r(t,Ir.BEHANDLING_AARSAK)),n.push(...a),n.join(", ")},xb=(e,r)=>{const n=e?Vn.INNVILGET:Vn.AVSLAG;return(r?Vn.INNVILGET:Vn.AVSLAG)!==n},Cb=(e,r)=>!r||r.length<1?"":r.map(n=>e(n,Ir.KONSEKVENS_FOR_YTELSEN)).join(" og "),Eo=(e,r,n)=>r?n?e&&"beregnetTilkjentYtelse"in r&&"beregnetTilkjentYtelse"in n?r.beregnetTilkjentYtelse!==n.beregnetTilkjentYtelse:"antallBarn"in r&&"antallBarn"in n?r.antallBarn!==n.antallBarn:!1:!0:!1,ug=(e,r,n)=>xb(r,n)?r?"VedtakForm.Resultat.EndretTilInnvilget":"VedtakForm.Resultat.EndretTilAvslag":e?Eo(e,r,n)?"VedtakForm.Resultat.EndretTilkjentYtelse":"VedtakForm.Resultat.IngenEndring":Eo(e,r,n)?"VedtakForm.Resultat.EndretAntallBarn":"VedtakForm.Resultat.IngenEndring",$b=(e,r,n,t,a,s,i)=>{if(r===z.ENGANGSSTONAD)return e.formatMessage({id:ug(!0,s,i)});const o=Cb(n,a);return`${o}${o!==""?t:". "}`},Jb=(e,r,n)=>e&&"opphoersdato"in e&&e.opphoersdato?e.opphoersdato:r||(n!=null&&n.skjæringstidspunkt?n.skjæringstidspunkt.dato:""),Wb=e=>e.aksjonspunktKoder.map(r=>({kode:eg(r,ge.FORESLA_VEDTAK,ge.FORESLA_VEDTAK_MANUELT,ge.VEDTAK_UTEN_TOTRINNSKONTROLL,ge.VURDERE_ANNEN_YTELSE,ge.VURDERE_DOKUMENT,ge.VURDERE_INNTEKTSMELDING_KLAGE,ge.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,ge.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING),begrunnelse:e.begrunnelse,fritekstBrev:e.brødtekst,skalBrukeOverstyrendeFritekstBrev:!!e.brødtekst,overskrift:e.overskrift})),zb=(e,r)=>{var n,t;return{aksjonspunktKoder:e.filter(a=>a.kanLoses).map(a=>a.definisjon),overskrift:zr((n=r.behandlingsresultat)==null?void 0:n.overskrift),brødtekst:zr((t=r.behandlingsresultat)==null?void 0:t.fritekstbrev)}},gg=({behandling:e,readOnly:r,aksjonspunkter:n,previewCallback:t,ytelseTypeKode:a,resultatstruktur:s,alleKodeverk:i,tilbakekrevingvalg:o,simuleringResultat:l,vilkar:u,beregningErManueltFastsatt:d,medlemskapFom:k,resultatstrukturOriginalBehandling:m,submitCallback:y,formData:_,setFormData:v})=>{const A=ir(),h=Ql({defaultValues:_||zb(n,e)}),p=h.watch("begrunnelse"),b=h.watch("overskrift"),B=h.watch("brødtekst"),{behandlingsresultat:P,sprakkode:j,behandlingÅrsaker:N}=e,S=T.useMemo(()=>Hb(e.behandlingÅrsaker),[e.behandlingÅrsaker]),G=T.useMemo(()=>Yb(N.map(H=>H.behandlingArsakType),vt(i)),[N]),U=T.useMemo(()=>rg(i,l,o),[l,o]);let q="";if(P&&ps(P.type)){const H=P!==void 0?P.konsekvenserForYtelsen:void 0;q=$b(A,a,vt(i),U,H,s,m)}P&&bs(P.type)&&(q=A.formatMessage({id:ug(!1,s,m)})),P&&Vl(P.type)&&(q=A.formatMessage({id:a===z.SVANGERSKAPSPENGER?"VedtakForm.RevurderingSVP.SvangerskapspengerOpphoerer":"VedtakForm.RevurderingFP.ForeldrepengerOpphoerer"},{dato:F(Jb(s,k,P)).format(om)}));const K=ko(!0,t,b,B,p),M=ko(!1,t,b,B,p);return E.jsx(ou,{formMethods:h,onSubmit:H=>y(Wb(H)),setDataOnUnmount:v,children:E.jsx(ui,{behandling:e,vedtakstatusTekst:q,aksjonspunkter:n,readOnly:r,previewAutomatiskBrev:M,previewOverstyrtBrev:K,tilbakekrevingtekst:U,erBehandlingEtterKlage:S,renderPanel:(H,$,se,de)=>$?E.jsx(og,{ytelseTypeKode:a,revurderingsÅrsakString:G,isReadOnly:r,resultatstruktur:s,språkKode:j,behandlingsresultat:P,beregningErManueltFastsatt:d,skalBrukeOverstyrendeFritekstBrev:H}):se?E.jsx(lg,{vilkar:u,behandlingsresultat:P,språkKode:j,erReadOnly:r,alleKodeverk:i,skalBrukeOverstyrendeFritekstBrev:H}):de?E.jsx(dg,{revurderingsÅrsakString:G,isReadOnly:r,behandlingsresultat:P,språkKode:j,beregningErManueltFastsatt:d,skalBrukeOverstyrendeFritekstBrev:H}):null})})};gg.__docgenInfo={description:"",methods:[],displayName:"VedtakRevurderingForm",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
| VurdereInntektsmeldingKlageForVedtakAp
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
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}],raw:"RevurderingVedtakAksjonspunkter[]"},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},formData:{required:!1,tsType:{name:"FormValues"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"FormValues"},name:"data"}],return:{name:"void"}}},description:""}}};const Zb={"VedtakForm.ForslagTilVedtak":"Vedtak","VedtakForm.BehandlingHenlagt":"Behandlingen er henlagt","VedtakForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakForm.ResultatKlageAvvist":"Klagen er avvist","VedtakForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakForm.SvangerskapspengerIkkeInnvilget":"Svangerskapspenger er avslått","VedtakForm.ForeldrepengerIkkeInnvilget":"Foreldrepenger er avslått","VedtakForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakForm.VilkarStatusInnvilget":"Engangsstønad er innvilget","VedtakForm.VilkarStatusInnvilgetEngangsstonad":"Engangsstønad er innvilget","VedtakForm.SvangerskapspengerInnvilget":"Svangerskapspenger er innvilget","VedtakForm.VilkarStatusInnvilgetForeldrepenger":"Foreldrepenger er innvilget","VedtakForm.OpprettTilbakekrOgInntrekk":"Feilutbetaling med tilbakekreving hvor beløp er redusert med inntrekk","VedtakForm.TilGodkjenning":"Til godkjenning","VedtakForm.FattVedtak":"Fatt vedtak","VedtakForm.ForhandvisBrev":"Forhåndsvis brev","VedtakForm.beregnetTilkjentYtelse":"Beregnet engangsstønad","VedtakForm.AntallBarn":"Antall barn","VedtakForm.vedtak":"Vedtak","VedtakForm.Resultat":"Resultat","VedtakForm.ArsakTilAvslag":"Årsak til avslag","VedtakForm.Fritekst":"Fritekst i brev til søker","VedtakForm.Fritekst.Beregningsgrunnlag":"Fritekst i brev til søker som handler om fastsettelse av beregningsgrunnlaget","VedtakForm.VurderAnnenYtelse":"Påvirker den åpne Gosys-oppgaven «Vurder konsekvens for ytelse» behandlingen?","VedtakForm.VurderDokument":"Påvirker den åpne Gosys-oppgaven «Vurder dokument» behandlingen?","VedtakForm.VurderInntektsmeldingKlage":"Det er en åpen klagesak, og det er mottatt ny inntektsmelding. Vurder beregningsgrunnlaget på nytt og behandle revurdering og klage under ett.","VedtakForm.Resultat.IngenEndring":"Ingen endring","VedtakForm.Resultat.EndretTilAvslag":"Endret til Avslag","VedtakForm.Resultat.EndretTilInnvilget":"Endret til Innvilget","VedtakForm.Resultat.EndretTilkjentYtelse":"Endret beregnet stønad","VedtakForm.KontrollerRevurderingsbehandling":"Beregningsgrunnlaget er endret til ugunst for søker. Skal det sendes varsel?","VedtakForm.UttaksperioderIkkeGyldig":"Søker har ikke noen gyldig uttaksperiode","VedtakForm.RevurderingFP.Aarsak":"Årsak til revurdering","VedtakForm.RevurderingFP.ForeldrepengerOpphoerer":"Foreldrepenger opphører f.o.m. {dato}","VedtakForm.RevurderingSVP.SvangerskapspengerOpphoerer":"Svangerskapspenger opphører f.o.m. {dato}","VedtakForm.ManuellOverstyring":"Overstyr automatisk brev","VedtakForm.Overskrift":"Overskrift","VedtakForm.Innhold":"Innhold i brev til søker","VedtakForm.SvpFritektsBrevModal.Ok":"Ok","VedtakForm.SvpFritektsBrevModal.IngenAutomatiskVedtaksbrev":"I denne behandlingen er det ikke automatisk vedtaksbrev. Du må velge 'Overstyr automatisk brev' og skrive fritekstbrev.","VedtakForm.SvpFritektsBrevModal.IngenAutomatiskVedtaksbrevImage":"Ingen automatisk vedtaksbrev.","VedtakForm.SvpFritektsBrevModal.ModalDescription":"Informasjonsboks om ingen automatisk vedtaksbrev. Fritekstbrev er nødvendig.","VedtakFellesPanel.RedigerVedtaksbrev":"Rediger vedtaksbrev","VedtakFellesPanel.AutomatiskVedtaksbrev":"Automatisk vedtaksbrev","VedtakFellesPanel.UtkastVedtaksbrev":"Utkast vedtaksbrev","VedtakFellesPanel.ForkastManueltBrev":"Forkast manuelt brev","VedtakFellesPanel.Forklaring":"Tekst fra det automatisk genererte brevet kan kopieres og limes inn i det manuelle brevet","VedtakFellesPanel.Forkast":"Dersom du forkaster det manuelle brevet, vil det erstattes av det automatisk genererte brevet","VedtakFellesPanel.Ok":"Forkast manuelt brev","FritekstBrevPanel.Endret":"Endret av saksbehandler","FritekstBrevPanel.ManueltVedtaksbrev":"Manuelt vedtaksbrev","FritekstBrevPanel.ForhandsvisManueltVedtaksbrev":"Forhåndsvis manuelt brev","VedtakHelpTextPanel.Vurder":"Vurder følgende før du sender til godkjenning:","Malform.Beskrivelse":"Foretrukket språk"},Xb=Me(Zb),Qb=[ge.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ge.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ge.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD],ec=(e,r)=>{var s;if(!r||!e)return!1;const n=e.find(i=>Qb.some(o=>o===i.definisjon)&&i.status===Mn.UTFORT),a=(s=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:s.find(i=>i.overstyrtPrAar||i.overstyrtPrAar===0);return!!n||!!a},kg=({behandling:e,beregningresultatDagytelse:r,beregningresultatEngangsstonad:n,tilbakekrevingvalg:t,simuleringResultat:a,beregningsgrunnlag:s,vilkar:i,beregningsresultatOriginalBehandling:o,medlemskap:l,aksjonspunkter:u,isReadOnly:d,previewCallback:k,submitCallback:m,ytelseTypeKode:y,alleKodeverk:_,formData:v,setFormData:A})=>{const h=ec(u,s),p=y===z.ENGANGSSTONAD?n:r;let b;return o&&(b=y===z.ENGANGSSTONAD?o["beregningsresultat-engangsstonad"]:o["beregningsresultat-foreldrepenger"]),E.jsxs(Wv,{value:Xb,children:[e.type!==Ue.REVURDERING&&E.jsx(ig,{behandling:e,submitCallback:m,readOnly:d,previewCallback:k,tilbakekrevingvalg:t,simuleringResultat:a,resultatstruktur:p,aksjonspunkter:u,ytelseTypeKode:y,alleKodeverk:_,vilkar:i,beregningErManueltFastsatt:h,formData:v,setFormData:A}),e.type===Ue.REVURDERING&&E.jsx(gg,{behandling:e,submitCallback:m,readOnly:d,previewCallback:k,tilbakekrevingvalg:t,simuleringResultat:a,resultatstruktur:p,aksjonspunkter:u,ytelseTypeKode:y,alleKodeverk:_,vilkar:i,beregningErManueltFastsatt:h,resultatstrukturOriginalBehandling:b,medlemskapFom:l==null?void 0:l.fom,formData:v,setFormData:A})]})},Eg=kg;kg.__docgenInfo={description:"",methods:[],displayName:"VedtakProsessIndex",props:{beregningresultatDagytelse:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"any"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const Te={uuid:"1",versjon:1,type:Ue.FORSTEGANGSSOKNAD,status:Ye.BEHANDLING_UTREDES,sprakkode:"NO",behandlingsresultat:{type:W.INNVILGET},behandlingPaaVent:!1,behandlingHenlagt:!1,behandlingÅrsaker:[{behandlingArsakType:Sr.ANNET}]},rc=[{lovReferanse:"§§Dette er en lovreferanse",vilkarType:cs.FODSELSVILKARET_MOR,vilkarStatus:aa.OPPFYLT,overstyrbar:!0}],vg=[{definisjon:ge.FORESLA_VEDTAK,kanLoses:!0}],De={antallBarn:1,beregnetTilkjentYtelse:1e4},lc={title:"prosess/prosess-vedtak",component:Eg},Re=({behandling:e,beregningresultatDagytelse:r,beregningresultatEngangsstonad:n,ytelseTypeKode:t,isReadOnly:a,submitCallback:s,beregningsgrunnlag:i,aksjonspunkter:o,beregningsresultatOriginalBehandling:l,vilkar:u,previewCallback:d})=>E.jsx(Eg,{behandling:e,aksjonspunkter:o||vg,submitCallback:s,isReadOnly:a,isAksjonspunktOpen:!0,readOnlySubmitButton:!1,status:"",vilkar:u||rc,alleMerknaderFraBeslutter:{},setFormData:()=>{},beregningresultatDagytelse:r,beregningresultatEngangsstonad:n,medlemskap:{fom:"2019-01-01"},previewCallback:d||ke("button-click"),ytelseTypeKode:t,alleKodeverk:zT,beregningsgrunnlag:i,beregningsresultatOriginalBehandling:l}),Gn=Re.bind({});Gn.args={behandling:Te,beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:ke("button-click")};const wn=Re.bind({});wn.args={behandling:{...Te,status:Ye.AVSLUTTET},beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:ke("button-click")};const Bn=Re.bind({});Bn.args={behandling:{...Te,status:Ye.AVSLUTTET,behandlingsresultat:{vedtaksbrev:"FRITEKST",overskrift:"Dette er en overskrift",fritekstbrev:"Dette er innholdet i brevet",type:W.INNVILGET}},beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:ke("button-click")};const jn=Re.bind({});jn.args={behandling:{...Te,behandlingsresultat:{type:W.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:ke("button-click")};const Un=Re.bind({});Un.args={behandling:{...Te,status:Ye.AVSLUTTET,behandlingsresultat:{type:W.AVSLATT}},beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:ke("button-click")};const qn=Re.bind({});qn.args={behandling:Te,beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:ke("button-click")};const Hn=Re.bind({});Hn.args={behandling:{...Te,behandlingsresultat:{type:W.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:ke("button-click")};const Yn=Re.bind({});Yn.args={behandling:Te,beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},aksjonspunkter:[...vg,{definisjon:ge.VURDERE_ANNEN_YTELSE,status:Mn.OPPRETTET,begrunnelse:void 0,kanLoses:!1,toTrinnsBehandling:!0},{definisjon:ge.VURDERE_DOKUMENT,status:Mn.OPPRETTET,begrunnelse:void 0,kanLoses:!1},{definisjon:ge.VURDERE_INNTEKTSMELDING_KLAGE,status:Mn.OPPRETTET,begrunnelse:void 0,kanLoses:!1},{definisjon:ge.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,status:Mn.OPPRETTET,begrunnelse:void 0,kanLoses:!1,toTrinnsBehandling:!0}],isReadOnly:!1,submitCallback:ke("button-click")};const xn=Re.bind({});xn.args={behandling:Te,beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:z.ENGANGSSTONAD,isReadOnly:!1,submitCallback:ke("button-click")};const Cn=Re.bind({});Cn.args={behandling:{...Te,status:Ye.AVSLUTTET},beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:z.ENGANGSSTONAD,isReadOnly:!0,submitCallback:ke("button-click")};const $n=Re.bind({});$n.args={behandling:Te,beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:z.ENGANGSSTONAD,isReadOnly:!1,submitCallback:ke("button-click")};const Jn=Re.bind({});Jn.args={behandling:Te,beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:z.ENGANGSSTONAD,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:ke("button-click")};const Wn=Re.bind({});Wn.args={behandling:{...Te,behandlingsresultat:{type:W.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:z.ENGANGSSTONAD,isReadOnly:!1,submitCallback:ke("button-click")};const zn=Re.bind({});zn.args={behandling:Te,ytelseTypeKode:z.SVANGERSKAPSPENGER,isReadOnly:!1,submitCallback:ke("button-click")};const Zn=Re.bind({});Zn.args={behandling:{...Te,type:Ue.REVURDERING,behandlingsresultat:{type:W.INNVILGET,konsekvenserForYtelsen:[xe.ENDRING_I_BEREGNING_OG_UTTAK,xe.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:ke("button-click")};const Xn=Re.bind({});Xn.args={behandling:{...Te,type:Ue.REVURDERING,status:Ye.AVSLUTTET,behandlingsresultat:{type:W.INNVILGET,konsekvenserForYtelsen:[xe.ENDRING_I_BEREGNING_OG_UTTAK,xe.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:ke("button-click")};const Qn=Re.bind({});Qn.args={behandling:{...Te,type:Ue.REVURDERING,behandlingsresultat:{type:W.INNVILGET,konsekvenserForYtelsen:[xe.ENDRING_I_BEREGNING_OG_UTTAK,xe.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:ke("button-click")};const et=Re.bind({});et.args={behandling:{...Te,type:Ue.REVURDERING,status:Ye.AVSLUTTET,behandlingsresultat:{type:W.INNVILGET,konsekvenserForYtelsen:[xe.ENDRING_I_BEREGNING_OG_UTTAK,xe.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:ke("button-click")};const rt=Re.bind({});rt.args={behandling:{...Te,type:Ue.REVURDERING,status:Ye.AVSLUTTET,behandlingsresultat:{vedtaksbrev:"FRITEKST",overskrift:"Dette er en overskrift",fritekstbrev:"Dette er innholdet i brevet",type:W.INNVILGET,konsekvenserForYtelsen:[xe.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:ke("button-click")};const nt=Re.bind({});nt.args={behandling:{...Te,type:Ue.REVURDERING,behandlingsresultat:{type:W.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningsresultatOriginalBehandling:{"beregningsresultat-foreldrepenger":{...De}},ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:ke("button-click")};const tt=Re.bind({});tt.args={behandling:{...Te,type:Ue.REVURDERING,status:Ye.AVSLUTTET,behandlingsresultat:{type:W.AVSLATT}},beregningsresultatOriginalBehandling:{"beregningsresultat-foreldrepenger":{...De}},ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:ke("button-click")};const at=Re.bind({});at.args={behandling:{...Te,type:Ue.REVURDERING,behandlingsresultat:{type:W.OPPHOR}},beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:ke("button-click")};const st=Re.bind({});st.args={behandling:{...Te,type:Ue.REVURDERING,behandlingsresultat:{type:W.INNVILGET,konsekvenserForYtelsen:[xe.ENDRING_I_BEREGNING_OG_UTTAK]}},beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:ke("button-click")};const it=Re.bind({});it.args={behandling:{...Te,type:Ue.REVURDERING,behandlingsresultat:{type:W.AVSLATT,konsekvenserForYtelsen:[xe.ENDRING_I_BEREGNING_OG_UTTAK],avslagsarsak:"1007"}},beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},vilkar:[{lovReferanse:"§§Dette er en lovreferanse",vilkarType:cs.SOKNADFRISTVILKARET,vilkarStatus:aa.IKKE_OPPFYLT,overstyrbar:!0}],isReadOnly:!1,submitCallback:ke("button-click")};const ot=Re.bind({});ot.args={behandling:{...Te,type:Ue.REVURDERING,behandlingsresultat:{type:W.OPPHOR}},beregningresultatDagytelse:De,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:ke("button-click")};var vo,mo,fo;Gn.parameters={...Gn.parameters,docs:{...(vo=Gn.parameters)==null?void 0:vo.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(fo=(mo=Gn.parameters)==null?void 0:mo.docs)==null?void 0:fo.source}}};var To,Ro,yo;wn.parameters={...wn.parameters,docs:{...(To=wn.parameters)==null?void 0:To.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(yo=(Ro=wn.parameters)==null?void 0:Ro.docs)==null?void 0:yo.source}}};var Ao,po,bo;Bn.parameters={...Bn.parameters,docs:{...(Ao=Bn.parameters)==null?void 0:Ao.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(bo=(po=Bn.parameters)==null?void 0:po.docs)==null?void 0:bo.source}}};var co,_o,ho;jn.parameters={...jn.parameters,docs:{...(co=jn.parameters)==null?void 0:co.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(ho=(_o=jn.parameters)==null?void 0:_o.docs)==null?void 0:ho.source}}};var So,No,Oo;Un.parameters={...Un.parameters,docs:{...(So=Un.parameters)==null?void 0:So.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Oo=(No=Un.parameters)==null?void 0:No.docs)==null?void 0:Oo.source}}};var Io,Ko,Do;qn.parameters={...qn.parameters,docs:{...(Io=qn.parameters)==null?void 0:Io.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Do=(Ko=qn.parameters)==null?void 0:Ko.docs)==null?void 0:Do.source}}};var Lo,Po,Fo;Hn.parameters={...Hn.parameters,docs:{...(Lo=Hn.parameters)==null?void 0:Lo.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Fo=(Po=Hn.parameters)==null?void 0:Po.docs)==null?void 0:Fo.source}}};var Mo,Vo,Go;Yn.parameters={...Yn.parameters,docs:{...(Mo=Yn.parameters)==null?void 0:Mo.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Go=(Vo=Yn.parameters)==null?void 0:Vo.docs)==null?void 0:Go.source}}};var wo,Bo,jo;xn.parameters={...xn.parameters,docs:{...(wo=xn.parameters)==null?void 0:wo.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(jo=(Bo=xn.parameters)==null?void 0:Bo.docs)==null?void 0:jo.source}}};var Uo,qo,Ho;Cn.parameters={...Cn.parameters,docs:{...(Uo=Cn.parameters)==null?void 0:Uo.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Ho=(qo=Cn.parameters)==null?void 0:qo.docs)==null?void 0:Ho.source}}};var Yo,xo,Co;$n.parameters={...$n.parameters,docs:{...(Yo=$n.parameters)==null?void 0:Yo.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Co=(xo=$n.parameters)==null?void 0:xo.docs)==null?void 0:Co.source}}};var $o,Jo,Wo;Jn.parameters={...Jn.parameters,docs:{...($o=Jn.parameters)==null?void 0:$o.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Wo=(Jo=Jn.parameters)==null?void 0:Jo.docs)==null?void 0:Wo.source}}};var zo,Zo,Xo;Wn.parameters={...Wn.parameters,docs:{...(zo=Wn.parameters)==null?void 0:zo.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Xo=(Zo=Wn.parameters)==null?void 0:Zo.docs)==null?void 0:Xo.source}}};var Qo,el,rl;zn.parameters={...zn.parameters,docs:{...(Qo=zn.parameters)==null?void 0:Qo.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(rl=(el=zn.parameters)==null?void 0:el.docs)==null?void 0:rl.source}}};var nl,tl,al;Zn.parameters={...Zn.parameters,docs:{...(nl=Zn.parameters)==null?void 0:nl.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(al=(tl=Zn.parameters)==null?void 0:tl.docs)==null?void 0:al.source}}};var sl,il,ol;Xn.parameters={...Xn.parameters,docs:{...(sl=Xn.parameters)==null?void 0:sl.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(ol=(il=Xn.parameters)==null?void 0:il.docs)==null?void 0:ol.source}}};var ll,dl,ul;Qn.parameters={...Qn.parameters,docs:{...(ll=Qn.parameters)==null?void 0:ll.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(ul=(dl=Qn.parameters)==null?void 0:dl.docs)==null?void 0:ul.source}}};var gl,kl,El;et.parameters={...et.parameters,docs:{...(gl=et.parameters)==null?void 0:gl.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(El=(kl=et.parameters)==null?void 0:kl.docs)==null?void 0:El.source}}};var vl,ml,fl;rt.parameters={...rt.parameters,docs:{...(vl=rt.parameters)==null?void 0:vl.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(fl=(ml=rt.parameters)==null?void 0:ml.docs)==null?void 0:fl.source}}};var Tl,Rl,yl;nt.parameters={...nt.parameters,docs:{...(Tl=nt.parameters)==null?void 0:Tl.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(yl=(Rl=nt.parameters)==null?void 0:Rl.docs)==null?void 0:yl.source}}};var Al,pl,bl;tt.parameters={...tt.parameters,docs:{...(Al=tt.parameters)==null?void 0:Al.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(bl=(pl=tt.parameters)==null?void 0:pl.docs)==null?void 0:bl.source}}};var cl,_l,hl;at.parameters={...at.parameters,docs:{...(cl=at.parameters)==null?void 0:cl.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(hl=(_l=at.parameters)==null?void 0:_l.docs)==null?void 0:hl.source}}};var Sl,Nl,Ol;st.parameters={...st.parameters,docs:{...(Sl=st.parameters)==null?void 0:Sl.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Ol=(Nl=st.parameters)==null?void 0:Nl.docs)==null?void 0:Ol.source}}};var Il,Kl,Dl;it.parameters={...it.parameters,docs:{...(Il=it.parameters)==null?void 0:Il.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Dl=(Kl=it.parameters)==null?void 0:Kl.docs)==null?void 0:Dl.source}}};var Ll,Pl,Fl;ot.parameters={...ot.parameters,docs:{...(Ll=ot.parameters)==null?void 0:Ll.docs,source:{originalSource:`({
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
} as Medlemskap)} previewCallback={previewCallback || (action('button-click') as any)} ytelseTypeKode={ytelseTypeKode} alleKodeverk={(alleKodeverk as any)} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Fl=(Pl=ot.parameters)==null?void 0:Pl.docs)==null?void 0:Fl.source}}};const dc=["InnvilgetForeldrepengerTilGodkjenningForSaksbehandler","GodkjentForeldrepengerForSaksbehandler","GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring","AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring","GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring","InnvilgetForeldrepengerDerBeregningErManueltFastsatt","AvslåttForeldrepengerDerBeregningErManueltFastsatt","TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil","InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring","GodkjentEngangsstønadForSaksbehandlerUtenOverstyring","InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring","InnvilgetEngangsstønadDerBeregningErManueltFastsatt","AvslåttEngangsstønadDerBeregningErManueltFastsatt","InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring","InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring","GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring","InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring","GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring","GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring","AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring","GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring","OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring","InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt","AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt","OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt"];export{Wn as AvslåttEngangsstønadDerBeregningErManueltFastsatt,it as AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt,Hn as AvslåttForeldrepengerDerBeregningErManueltFastsatt,jn as AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,nt as AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,Un as GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring,Cn as GodkjentEngangsstønadForSaksbehandlerUtenOverstyring,wn as GodkjentForeldrepengerForSaksbehandler,Bn as GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring,tt as GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring,et as GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring,Xn as GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring,rt as GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring,Jn as InnvilgetEngangsstønadDerBeregningErManueltFastsatt,$n as InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring,xn as InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring,st as InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt,qn as InnvilgetForeldrepengerDerBeregningErManueltFastsatt,Gn as InnvilgetForeldrepengerTilGodkjenningForSaksbehandler,Qn as InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,Zn as InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring,zn as InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring,ot as OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt,at as OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring,Yn as TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil,dc as __namedExportsOrder,lc as default};
