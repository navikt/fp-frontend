import{j as k}from"./jsx-runtime-QvZ8i92b.js";import{v as rg}from"./v4-CQkTLCs1.js";import{R as c,r as T,b as ng}from"./index-uubelm5h.js";import{d as ft}from"./dayjs.min-SqI0oJbA.js";import{r as tg,f as ag}from"./index-CfOt2XX2.js";const{addons:sg}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:ig}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:ri}=__STORYBOOK_MODULE_GLOBAL__;var og="storybook/actions",lg=`${og}/action-event`,dg={depth:10,clearOnStoryChange:!0,limit:50},cl=(e,r)=>{let n=Object.getPrototypeOf(e);return!n||r(n)?n:cl(n,r)},ug=e=>!!(typeof e=="object"&&e&&cl(e,r=>/^Synthetic(?:Base)?Event$/.test(r.constructor.name))&&typeof e.persist=="function"),gg=e=>{if(ug(e)){let r=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));r.persist();let n=Object.getOwnPropertyDescriptor(r,"view"),t=n==null?void 0:n.value;return typeof t=="object"&&(t==null?void 0:t.constructor.name)==="Window"&&Object.defineProperty(r,"view",{...n,value:Object.create(t.constructor.prototype)}),r}return e},kg=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?rg():Date.now().toString(36)+Math.random().toString(36).substring(2);function de(e,r={}){let n={...dg,...r},t=function(...a){var E,v;if(r.implicit){let p=(E="__STORYBOOK_PREVIEW__"in ri?ri.__STORYBOOK_PREVIEW__:void 0)==null?void 0:E.storyRenders.find(h=>h.phase==="playing"||h.phase==="rendering");if(p){let h=!((v=window==null?void 0:window.FEATURES)!=null&&v.disallowImplicitActionsInRenderV8),f=new ig({phase:p.phase,name:e,deprecated:h});if(h)console.warn(f);else throw f}}let s=sg.getChannel(),i=kg(),o=5,l=a.map(gg),u=a.length>1?l:l[0],d={id:i,count:0,data:{name:e,args:u},options:{...n,maxDepth:o+(n.depth||3),allowFunction:n.allowFunction||!1}};s.emit(lg,d)};return t.isAction=!0,t.implicit=r.implicit,t}var ke=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN="5032",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYR_BEREGNING="6007",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(ke||{});const Pn={OPPRETTET:"OPPR",UTFORT:"UTFO",AVBRUTT:"AVBR"},Eg={INGEN_BEREGNINGSREGLER:"1099"},cr={FEIL_I_LOVANDVENDELSE:"RE-LOV",FEIL_REGELVERKSFORSTAELSE:"RE-RGLF",FEIL_ELLER_ENDRET_FAKTA:"RE-FEFAKTA",FEIL_PROSESSUELL:"RE-PRSSL",ETTER_KLAGE:"ETTER_KLAGE",ANNET:"RE-ANNET",KLAGE_U_INNTK:"RE-KLAG-U-INNTK",KLAGE_M_INNTK:"RE-KLAG-M-INNTK",MEDLEMSKAP:"RE-MDL",OPPTJENING:"RE-OPTJ",FORDELING:"RE-FRDLING",INNTEKT:"RE-INNTK",FØDSEL:"RE-FØDSEL",DØD:"RE-DØD",SØKERS_RELASJON:"RE-SRTB",SØKNADSFRIST:"RE-FRIST",BEREEGNINGSGRUNNLAG:"RE-BER-GRUN",RE_TILSTØTENDE_YTELSE_INNVILGET:"RE-TILST-YT-INNVIL",RE_ENDRING_BEREGNINGSGRUNNLAG:"RE-ENDR-BER-GRUN",RE_TILSTØTENDE_YTELSE_OPPHØRT:"RE-TILST-YT-OPPH",RE_ENDRING_FRA_BRUKER:"RE-END-FRA-BRUKER",RE_ENDRET_INNTEKTSMELDING:"RE-END-INNTEKTSMELD",RE_KLAGE_KA:"RE_KLAGE_KA",RE_KLAGE_NFP:"RE_KLAGE_NFP",RE_VILKÅR:"RE_VILKÅR",RE_FORELDELSE:"RE_FORELDELSE",RE_FEILUTBETALT_BELØP_REDUSERT:"RE_FEILUTBETALT_BELØP_REDUSERT",REBEREGN_FERIEPENGER:"REBEREGN-FERIEPENGER",RE_UTSATT_START:"RE-UTSATT-START"},W={IKKE_FASTSATT:"IKKE_FASTSATT",INNVILGET:"INNVILGET",AVSLATT:"AVSLÅTT",OPPHOR:"OPPHØR",HENLAGT_SOKNAD_TRUKKET:"HENLAGT_SØKNAD_TRUKKET",KLAGE_AVVIST:"KLAGE_AVVIST",KLAGE_MEDHOLD:"KLAGE_MEDHOLD",KLAGE_DELVIS_MEDHOLD:"KLAGE_DELVIS_MEDHOLD",KLAGE_OMGJORT_UGUNST:"KLAGE_OMGJORT_UGUNST",KLAGE_YTELSESVEDTAK_OPPHEVET:"KLAGE_YTELSESVEDTAK_OPPHEVET",KLAGE_YTELSESVEDTAK_STADFESTET:"KLAGE_YTELSESVEDTAK_STADFESTET",KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",HJEMSENDE_UTEN_OPPHEVE:"HJEMSENDE_UTEN_OPPHEVE",HENLAGT_KLAGE_TRUKKET:"HENLAGT_KLAGE_TRUKKET",HENLAGT_ANKE_TRUKKET:"HENLAGT_ANKE_TRUKKET",HENLAGT_FEILOPPRETTET:"HENLAGT_FEILOPPRETTET",HENLAGT_FEILOPPRETTET_MED_BREV:"HENLAGT_FEILOPPRETTET_MED_BREV",HENLAGT_FEILOPPRETTET_UTEN_BREV:"HENLAGT_FEILOPPRETTET_UTEN_BREV",HENLAGT_BRUKER_DOD:"HENLAGT_BRUKER_DØD",FORELDREPENGER_ENDRET:"FORELDREPENGER_ENDRET",FORELDREPENGER_SENERE:"FORELDREPENGER_SENERE",INGEN_ENDRING:"INGEN_ENDRING",MANGLER_BEREGNINGSREGLER:"MANGLER_BEREGNINGSREGLER",HENLAGT_SOKNAD_MANGLER:"HENLAGT_SØKNAD_MANGLER",INNSYN_INNVILGET:"INNSYN_INNVILGET",INNSYN_DELVIS_INNVILGET:"INNSYN_DELVIS_INNVILGET",INNSYN_AVVIST:"INNSYN_AVVIST",HENLAGT_INNSYN_TRUKKET:"HENLAGT_INNSYN_TRUKKET"},vg=[W.KLAGE_MEDHOLD,W.KLAGE_DELVIS_MEDHOLD,W.KLAGE_OMGJORT_UGUNST,W.KLAGE_YTELSESVEDTAK_OPPHEVET,W.KLAGE_YTELSESVEDTAK_STADFESTET,W.KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET,W.HJEMSENDE_UTEN_OPPHEVE],mg=[W.KLAGE_MEDHOLD,W.KLAGE_DELVIS_MEDHOLD,W.KLAGE_OMGJORT_UGUNST],Tg=[W.FORELDREPENGER_ENDRET,W.FORELDREPENGER_SENERE,W.INGEN_ENDRING],us=e=>vg.includes(e)||Tg.includes(e)||e===W.INNVILGET,gs=e=>e===W.AVSLATT||e===W.KLAGE_AVVIST||e===W.KLAGE_YTELSESVEDTAK_STADFESTET,hl=e=>e===W.OPPHOR,fg=e=>mg.includes(e),qe={OPPRETTET:"OPPRE",BEHANDLING_UTREDES:"UTRED",AVSLUTTET:"AVSLU",IVERKSETTER_VEDTAK:"IVED",FATTER_VEDTAK:"FVED"},He={FORSTEGANGSSOKNAD:"BT-002",KLAGE:"BT-003",REVURDERING:"BT-004",DOKUMENTINNSYN:"BT-006",TILBAKEKREVING:"BT-007",ANKE:"BT-008",TILBAKEKREVING_REVURDERING:"BT-009"},Sl={INNHENTE_OPPLYSNINGER:"INNOPP",VARSEL_OM_REVURDERING:"VARREV",FORLENGET_SAKSBEHANDLINGSTID:"FORSAK",FORLENGET_SAKSBEHANDLINGSTID_MEDL:"FORMED",KLAGE_OMGJORING:"KGEOMG",KLAGE_AVVIST:"KGEAVV",KLAGE_STADFESTET:"KGESTA",KLAGE_HJEMSENDT:"KGEHJE",KLAGE_OVERSENDT:"KGEOVE",ANKE_OMGJORT:"ANKOMG",ANKE_OPPHEVET:"ANKOPP",FRITEKST:"FRITEK",INNSYN_SVAR:"INNSYN",INFO_OM_HENLEGGELSE:"IOHENL",TBK_INNHENTE_OPPLYSNINGER:"INNHEN",KORRIGERT_VARSEL_OM_TILBAKEKREVING:"KORRIGVARS",VARSEL_OM_TILBAKEKREVING:"VARS",ETTERLYS_INNTEKTSMELDING:"ELYSIM"},z={ENGANGSSTONAD:"ES",FORELDREPENGER:"FP",SVANGERSKAPSPENGER:"SVP"};var Nr=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.INNTEKTSKATEGORI="Inntektskategori",e.BEREGNINGSGRUNNLAG_ANDELTYPER="BeregningsgrunnlagAndeltype",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.FAGSYSTEM="Fagsystem",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.ARBEIDSFORHOLD_HANDLING_TYPE="ArbeidsforholdHandlingType",e.HISTORIKK_OPPLYSNING_TYPE="HistorikkOpplysningType",e.HISTORIKK_ENDRET_FELT_TYPE="HistorikkEndretFeltType",e.HISTORIKKINNSLAG_TYPE="HistorikkinnslagType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.AKTSOMHET="Aktsomhet",e.VURDERING="AnnenVurdering",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG="VurderArbeidsforholdHistorikkinnslag",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.AKTIVITETSKRAV_AVKLARING="KontrollerAktivitetskravAvklaring",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e.FAGSAK_MARKERING="FagsakMarkering",e.ADRESSE_TYPE="AdresseType",e))(Nr||{});const Rg=(e,r,n,t)=>{let a=e[r];if(!a||a.length===0)return"";t&&(a=a[t]);const s=a.find(i=>i.kode===n);return s?s.navn:""},kt=e=>(r,n,t)=>Rg(e,n,r,t),Ye={ENDRING_I_BEREGNING:"ENDRING_I_BEREGNING",ENDRING_I_UTTAK:"ENDRING_I_UTTAK",ENDRING_I_FORDELING_AV_YTELSEN:"ENDRING_I_FORDELING_AV_YTELSEN",INGEN_ENDRING:"INGEN_ENDRING",ENDRING_I_BEREGNING_OG_UTTAK:"ENDRING_I_BEREGNING_OG_UTTAK",FORELDREPENGER_OPPHORER:"FORELDREPENGER_OPPHØRER",UDEFINERT:"-"};var ks=(e=>(e.FODSELSVILKARET_MOR="FP_VK_1",e.SVANGERSKAPVILKARET="SVP_VK_1",e.MEDLEMSKAPSVILKARET="FP_VK_2",e.MEDLEMSKAPSVILKÅRET_LØPENDE="FP_VK_2_L",e.SOKNADFRISTVILKARET="FP_VK_3",e.ADOPSJONSVILKARET="FP_VK_4",e.OMSORGSVILKARET="FP_VK_5",e.FORELDREANSVARSVILKARET_2_LEDD="FP_VK_8",e.FODSELSVILKARET_FAR="FP_VK_11",e.ADOPSJONSVILKARET_FORELDREPENGER="FP_VK_16",e.OPPTJENINGSPERIODE="FP_VK_21",e.OPPTJENINGSVILKARET="FP_VK_23",e.FORELDREANSVARSVILKARET_4_LEDD="FP_VK_33",e.SOKERSOPPLYSNINGSPLIKT="FP_VK_34",e.BEREGNINGSGRUNNLAGVILKARET="FP_VK_41",e))(ks||{});const aa={OPPFYLT:"OPPFYLT",IKKE_OPPFYLT:"IKKE_OPPFYLT",IKKE_VURDERT:"IKKE_VURDERT"},yg={TILBAKEKR_OPPRETT:"TILBAKEKR_OPPRETT",TILBAKEKR_IGNORER:"TILBAKEKR_IGNORER",TILBAKEKR_INNTREKK:"TILBAKEKR_INNTREKK",TILBAKEKR_OPPDATER:"TILBAKEKR_OPPDATER"};var Rt=e=>e.type==="checkbox",on=e=>e instanceof Date,Ge=e=>e==null;const Nl=e=>typeof e=="object";var ce=e=>!Ge(e)&&!Array.isArray(e)&&Nl(e)&&!on(e),Ol=e=>ce(e)&&e.target?Rt(e.target)?e.target.checked:e.target.value:e,Ag=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Il=(e,r)=>e.has(Ag(r)),pg=e=>{const r=e.constructor&&e.constructor.prototype;return ce(r)&&r.hasOwnProperty("isPrototypeOf")},Es=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function we(e){let r;const n=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(Es&&(e instanceof Blob||e instanceof FileList))&&(n||ce(e)))if(r=n?[]:{},!n&&!pg(e))r=e;else for(const t in e)e.hasOwnProperty(t)&&(r[t]=we(e[t]));else return e;return r}var sa=e=>Array.isArray(e)?e.filter(Boolean):[],Ae=e=>e===void 0,K=(e,r,n)=>{if(!r||!ce(e))return n;const t=sa(r.split(/[,[\].]+?/)).reduce((a,s)=>Ge(a)?a:a[s],e);return Ae(t)||t===e?Ae(e[r])?n:e[r]:t},$e=e=>typeof e=="boolean",vs=e=>/^\w*$/.test(e),Dl=e=>sa(e.replace(/["|']|\]/g,"").split(/\.|\[/)),le=(e,r,n)=>{let t=-1;const a=vs(r)?[r]:Dl(r),s=a.length,i=s-1;for(;++t<s;){const o=a[t];let l=n;if(t!==i){const u=e[o];l=ce(u)||Array.isArray(u)?u:isNaN(+a[t+1])?{}:[]}if(o==="__proto__")return;e[o]=l,e=e[o]}return e};const Ct={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},er={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},fr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Kl=c.createContext(null),fn=()=>c.useContext(Kl),bg=e=>{const{children:r,...n}=e;return c.createElement(Kl.Provider,{value:n},r)};var Ll=(e,r,n,t=!0)=>{const a={defaultValues:r._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const i=s;return r._proxyFormState[i]!==er.all&&(r._proxyFormState[i]=!t||er.all),n&&(n[i]=!0),e[i]}});return a},je=e=>ce(e)&&!Object.keys(e).length,Pl=(e,r,n,t)=>{n(e);const{name:a,...s}=e;return je(s)||Object.keys(s).length>=Object.keys(r).length||Object.keys(s).find(i=>r[i]===(!t||er.all))},it=e=>Array.isArray(e)?e:[e],Fl=(e,r,n)=>!e||!r||e===r||it(e).some(t=>t&&(n?t===r:t.startsWith(r)||r.startsWith(t)));function ms(e){const r=c.useRef(e);r.current=e,c.useEffect(()=>{const n=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function _g(e){const r=fn(),{control:n=r.control,disabled:t,name:a,exact:s}=e||{},[i,o]=c.useState(n._formState),l=c.useRef(!0),u=c.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=c.useRef(a);return d.current=a,ms({disabled:t,next:E=>l.current&&Fl(d.current,E.name,s)&&Pl(E,u.current,n._updateFormState)&&o({...n._formState,...E}),subject:n._subjects.state}),c.useEffect(()=>(l.current=!0,u.current.isValid&&n._updateValid(!0),()=>{l.current=!1}),[n]),Ll(i,n,u.current,!1)}var gr=e=>typeof e=="string",Ml=(e,r,n,t,a)=>gr(e)?(t&&r.watch.add(e),K(n,e,a)):Array.isArray(e)?e.map(s=>(t&&r.watch.add(s),K(n,s))):(t&&(r.watchAll=!0),n);function cg(e){const r=fn(),{control:n=r.control,name:t,defaultValue:a,disabled:s,exact:i}=e||{},o=c.useRef(t);o.current=t,ms({disabled:s,subject:n._subjects.values,next:d=>{Fl(o.current,d.name,i)&&u(we(Ml(o.current,n._names,d.values||n._formValues,!1,a)))}});const[l,u]=c.useState(n._getWatch(t,a));return c.useEffect(()=>n._removeUnmounted()),l}function hg(e){const r=fn(),{name:n,disabled:t,control:a=r.control,shouldUnregister:s}=e,i=Il(a._names.array,n),o=cg({control:a,name:n,defaultValue:K(a._formValues,n,K(a._defaultValues,n,e.defaultValue)),exact:!0}),l=_g({control:a,name:n,exact:!0}),u=c.useRef(a.register(n,{...e.rules,value:o,...$e(e.disabled)?{disabled:e.disabled}:{}}));return c.useEffect(()=>{const d=a._options.shouldUnregister||s,E=(v,p)=>{const h=K(a._fields,v);h&&h._f&&(h._f.mount=p)};if(E(n,!0),d){const v=we(K(a._options.defaultValues,n));le(a._defaultValues,n,v),Ae(K(a._formValues,n))&&le(a._formValues,n,v)}return()=>{(i?d&&!a._state.action:d)?a.unregister(n):E(n,!1)}},[n,a,i,s]),c.useEffect(()=>{K(a._fields,n)&&a._updateDisabledField({disabled:t,fields:a._fields,name:n,value:K(a._fields,n)._f.value})},[t,n,a]),{field:{name:n,value:o,...$e(t)||l.disabled?{disabled:l.disabled||t}:{},onChange:c.useCallback(d=>u.current.onChange({target:{value:Ol(d),name:n},type:Ct.CHANGE}),[n]),onBlur:c.useCallback(()=>u.current.onBlur({target:{value:K(a._formValues,n),name:n},type:Ct.BLUR}),[n,a]),ref:c.useCallback(d=>{const E=K(a._fields,n);E&&d&&(E._f.ref={focus:()=>d.focus(),select:()=>d.select(),setCustomValidity:v=>d.setCustomValidity(v),reportValidity:()=>d.reportValidity()})},[a._fields,n])},formState:l,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!K(l.errors,n)},isDirty:{enumerable:!0,get:()=>!!K(l.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!K(l.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!K(l.validatingFields,n)},error:{enumerable:!0,get:()=>K(l.errors,n)}})}}var Sg=(e,r,n,t,a)=>r?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[t]:a||!0}}:{},ni=e=>({isOnSubmit:!e||e===er.onSubmit,isOnBlur:e===er.onBlur,isOnChange:e===er.onChange,isOnAll:e===er.all,isOnTouch:e===er.onTouched}),ti=(e,r,n)=>!n&&(r.watchAll||r.watch.has(e)||[...r.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const ot=(e,r,n,t)=>{for(const a of n||Object.keys(e)){const s=K(e,a);if(s){const{_f:i,...o}=s;if(i){if(i.refs&&i.refs[0]&&r(i.refs[0],a)&&!t)return!0;if(i.ref&&r(i.ref,i.name)&&!t)return!0;if(ot(o,r))break}else if(ce(o)&&ot(o,r))break}}};var Ng=(e,r,n)=>{const t=it(K(e,n));return le(t,"root",r[n]),le(e,n,t),e},Ts=e=>e.type==="file",pr=e=>typeof e=="function",$t=e=>{if(!Es)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Ut=e=>gr(e),fs=e=>e.type==="radio",Jt=e=>e instanceof RegExp;const ai={value:!1,isValid:!1},si={value:!0,isValid:!0};var Vl=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ae(e[0].attributes.value)?Ae(e[0].value)||e[0].value===""?si:{value:e[0].value,isValid:!0}:si:ai}return ai};const ii={isValid:!1,value:null};var Gl=e=>Array.isArray(e)?e.reduce((r,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:r,ii):ii;function oi(e,r,n="validate"){if(Ut(e)||Array.isArray(e)&&e.every(Ut)||$e(e)&&!e)return{type:n,message:Ut(e)?e:"",ref:r}}var rn=e=>ce(e)&&!Jt(e)?e:{value:e,message:""},li=async(e,r,n,t,a)=>{const{ref:s,refs:i,required:o,maxLength:l,minLength:u,min:d,max:E,pattern:v,validate:p,name:h,valueAsNumber:f,mount:y,disabled:_}=e._f,b=K(r,h);if(!y||_)return{};const A=i?i[0]:s,B=D=>{t&&A.reportValidity&&(A.setCustomValidity($e(D)?"":D||""),A.reportValidity())},P={},U=fs(s),N=Rt(s),S=U||N,V=(f||Ts(s))&&Ae(s.value)&&Ae(b)||$t(s)&&s.value===""||b===""||Array.isArray(b)&&!b.length,j=Sg.bind(null,h,n,P),Y=(D,F,H,$=fr.maxLength,Q=fr.minLength)=>{const ue=D?F:H;P[h]={type:D?$:Q,message:ue,ref:s,...j(D?$:Q,ue)}};if(a?!Array.isArray(b)||!b.length:o&&(!S&&(V||Ge(b))||$e(b)&&!b||N&&!Vl(i).isValid||U&&!Gl(i).isValid)){const{value:D,message:F}=Ut(o)?{value:!!o,message:o}:rn(o);if(D&&(P[h]={type:fr.required,message:F,ref:A,...j(fr.required,F)},!n))return B(F),P}if(!V&&(!Ge(d)||!Ge(E))){let D,F;const H=rn(E),$=rn(d);if(!Ge(b)&&!isNaN(b)){const Q=s.valueAsNumber||b&&+b;Ge(H.value)||(D=Q>H.value),Ge($.value)||(F=Q<$.value)}else{const Q=s.valueAsDate||new Date(b),ue=Ke=>new Date(new Date().toDateString()+" "+Ke),_e=s.type=="time",Le=s.type=="week";gr(H.value)&&b&&(D=_e?ue(b)>ue(H.value):Le?b>H.value:Q>new Date(H.value)),gr($.value)&&b&&(F=_e?ue(b)<ue($.value):Le?b<$.value:Q<new Date($.value))}if((D||F)&&(Y(!!D,H.message,$.message,fr.max,fr.min),!n))return B(P[h].message),P}if((l||u)&&!V&&(gr(b)||a&&Array.isArray(b))){const D=rn(l),F=rn(u),H=!Ge(D.value)&&b.length>+D.value,$=!Ge(F.value)&&b.length<+F.value;if((H||$)&&(Y(H,D.message,F.message),!n))return B(P[h].message),P}if(v&&!V&&gr(b)){const{value:D,message:F}=rn(v);if(Jt(D)&&!b.match(D)&&(P[h]={type:fr.pattern,message:F,ref:s,...j(fr.pattern,F)},!n))return B(F),P}if(p){if(pr(p)){const D=await p(b,r),F=oi(D,A);if(F&&(P[h]={...F,...j(fr.validate,F.message)},!n))return B(F.message),P}else if(ce(p)){let D={};for(const F in p){if(!je(D)&&!n)break;const H=oi(await p[F](b,r),A,F);H&&(D={...H,...j(F,H.message)},B(H.message),n&&(P[h]=D))}if(!je(D)&&(P[h]={ref:A,...D},!n))return P}}return B(!0),P};function Og(e,r){const n=r.slice(0,-1).length;let t=0;for(;t<n;)e=Ae(e)?t++:e[r[t++]];return e}function Ig(e){for(const r in e)if(e.hasOwnProperty(r)&&!Ae(e[r]))return!1;return!0}function he(e,r){const n=Array.isArray(r)?r:vs(r)?[r]:Dl(r),t=n.length===1?e:Og(e,n),a=n.length-1,s=n[a];return t&&delete t[s],a!==0&&(ce(t)&&je(t)||Array.isArray(t)&&Ig(t))&&he(e,n.slice(0,-1)),e}var Na=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},Wt=e=>Ge(e)||!Nl(e);function Lr(e,r){if(Wt(e)||Wt(r))return e===r;if(on(e)&&on(r))return e.getTime()===r.getTime();const n=Object.keys(e),t=Object.keys(r);if(n.length!==t.length)return!1;for(const a of n){const s=e[a];if(!t.includes(a))return!1;if(a!=="ref"){const i=r[a];if(on(s)&&on(i)||ce(s)&&ce(i)||Array.isArray(s)&&Array.isArray(i)?!Lr(s,i):s!==i)return!1}}return!0}var wl=e=>e.type==="select-multiple",Dg=e=>fs(e)||Rt(e),Oa=e=>$t(e)&&e.isConnected,Bl=e=>{for(const r in e)if(pr(e[r]))return!0;return!1};function zt(e,r={}){const n=Array.isArray(e);if(ce(e)||n)for(const t in e)Array.isArray(e[t])||ce(e[t])&&!Bl(e[t])?(r[t]=Array.isArray(e[t])?[]:{},zt(e[t],r[t])):Ge(e[t])||(r[t]=!0);return r}function jl(e,r,n){const t=Array.isArray(e);if(ce(e)||t)for(const a in e)Array.isArray(e[a])||ce(e[a])&&!Bl(e[a])?Ae(r)||Wt(n[a])?n[a]=Array.isArray(e[a])?zt(e[a],[]):{...zt(e[a])}:jl(e[a],Ge(r)?{}:r[a],n[a]):n[a]=!Lr(e[a],r[a]);return n}var Lt=(e,r)=>jl(e,r,zt(r)),Ul=(e,{valueAsNumber:r,valueAsDate:n,setValueAs:t})=>Ae(e)?e:r?e===""?NaN:e&&+e:n&&gr(e)?new Date(e):t?t(e):e;function Ia(e){const r=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):r.disabled))return Ts(r)?r.files:fs(r)?Gl(e.refs).value:wl(r)?[...r.selectedOptions].map(({value:n})=>n):Rt(r)?Vl(e.refs).value:Ul(Ae(r.value)?e.ref.value:r.value,e)}var Kg=(e,r,n,t)=>{const a={};for(const s of e){const i=K(r,s);i&&le(a,s,i._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:t}},Nn=e=>Ae(e)?e:Jt(e)?e.source:ce(e)?Jt(e.value)?e.value.source:e.value:e;const di="AsyncFunction";var Lg=e=>(!e||!e.validate)&&!!(pr(e.validate)&&e.validate.constructor.name===di||ce(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===di)),Pg=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ui(e,r,n){const t=K(e,n);if(t||vs(n))return{error:t,name:n};const a=n.split(".");for(;a.length;){const s=a.join("."),i=K(r,s),o=K(e,s);if(i&&!Array.isArray(i)&&n!==s)return{name:n};if(o&&o.type)return{name:s,error:o};a.pop()}return{name:n}}var Fg=(e,r,n,t,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(r||e):(n?t.isOnBlur:a.isOnBlur)?!e:(n?t.isOnChange:a.isOnChange)?e:!0,Mg=(e,r)=>!sa(K(e,r)).length&&he(e,r);const Vg={mode:er.onSubmit,reValidateMode:er.onChange,shouldFocusError:!0};function Gg(e={}){let r={...Vg,...e},n={submitCount:0,isDirty:!1,isLoading:pr(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},t={},a=ce(r.defaultValues)||ce(r.values)?we(r.defaultValues||r.values)||{}:{},s=r.shouldUnregister?{}:we(a),i={action:!1,mount:!1,watch:!1},o={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},E={values:Na(),array:Na(),state:Na()},v=ni(r.mode),p=ni(r.reValidateMode),h=r.criteriaMode===er.all,f=g=>m=>{clearTimeout(u),u=setTimeout(g,m)},y=async g=>{if(d.isValid||g){const m=r.resolver?je((await S()).errors):await j(t,!0);m!==n.isValid&&E.state.next({isValid:m})}},_=(g,m)=>{(d.isValidating||d.validatingFields)&&((g||Array.from(o.mount)).forEach(R=>{R&&(m?le(n.validatingFields,R,m):he(n.validatingFields,R))}),E.state.next({validatingFields:n.validatingFields,isValidating:!je(n.validatingFields)}))},b=(g,m=[],R,G,L=!0,I=!0)=>{if(G&&R){if(i.action=!0,I&&Array.isArray(K(t,g))){const x=R(K(t,g),G.argA,G.argB);L&&le(t,g,x)}if(I&&Array.isArray(K(n.errors,g))){const x=R(K(n.errors,g),G.argA,G.argB);L&&le(n.errors,g,x),Mg(n.errors,g)}if(d.touchedFields&&I&&Array.isArray(K(n.touchedFields,g))){const x=R(K(n.touchedFields,g),G.argA,G.argB);L&&le(n.touchedFields,g,x)}d.dirtyFields&&(n.dirtyFields=Lt(a,s)),E.state.next({name:g,isDirty:D(g,m),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else le(s,g,m)},A=(g,m)=>{le(n.errors,g,m),E.state.next({errors:n.errors})},B=g=>{n.errors=g,E.state.next({errors:n.errors,isValid:!1})},P=(g,m,R,G)=>{const L=K(t,g);if(L){const I=K(s,g,Ae(R)?K(a,g):R);Ae(I)||G&&G.defaultChecked||m?le(s,g,m?I:Ia(L._f)):$(g,I),i.mount&&y()}},U=(g,m,R,G,L)=>{let I=!1,x=!1;const ie={name:g},Ie=!!(K(t,g)&&K(t,g)._f&&K(t,g)._f.disabled);if(!R||G){d.isDirty&&(x=n.isDirty,n.isDirty=ie.isDirty=D(),I=x!==ie.isDirty);const De=Ie||Lr(K(a,g),m);x=!!(!Ie&&K(n.dirtyFields,g)),De||Ie?he(n.dirtyFields,g):le(n.dirtyFields,g,!0),ie.dirtyFields=n.dirtyFields,I=I||d.dirtyFields&&x!==!De}if(R){const De=K(n.touchedFields,g);De||(le(n.touchedFields,g,R),ie.touchedFields=n.touchedFields,I=I||d.touchedFields&&De!==R)}return I&&L&&E.state.next(ie),I?ie:{}},N=(g,m,R,G)=>{const L=K(n.errors,g),I=d.isValid&&$e(m)&&n.isValid!==m;if(e.delayError&&R?(l=f(()=>A(g,R)),l(e.delayError)):(clearTimeout(u),l=null,R?le(n.errors,g,R):he(n.errors,g)),(R?!Lr(L,R):L)||!je(G)||I){const x={...G,...I&&$e(m)?{isValid:m}:{},errors:n.errors,name:g};n={...n,...x},E.state.next(x)}},S=async g=>{_(g,!0);const m=await r.resolver(s,r.context,Kg(g||o.mount,t,r.criteriaMode,r.shouldUseNativeValidation));return _(g),m},V=async g=>{const{errors:m}=await S(g);if(g)for(const R of g){const G=K(m,R);G?le(n.errors,R,G):he(n.errors,R)}else n.errors=m;return m},j=async(g,m,R={valid:!0})=>{for(const G in g){const L=g[G];if(L){const{_f:I,...x}=L;if(I){const ie=o.array.has(I.name),Ie=L._f&&Lg(L._f);Ie&&d.validatingFields&&_([G],!0);const De=await li(L,s,h,r.shouldUseNativeValidation&&!m,ie);if(Ie&&d.validatingFields&&_([G]),De[I.name]&&(R.valid=!1,m))break;!m&&(K(De,I.name)?ie?Ng(n.errors,De,I.name):le(n.errors,I.name,De[I.name]):he(n.errors,I.name))}!je(x)&&await j(x,m,R)}}return R.valid},Y=()=>{for(const g of o.unMount){const m=K(t,g);m&&(m._f.refs?m._f.refs.every(R=>!Oa(R)):!Oa(m._f.ref))&&bn(g)}o.unMount=new Set},D=(g,m)=>(g&&m&&le(s,g,m),!Lr(Oe(),a)),F=(g,m,R)=>Ml(g,o,{...i.mount?s:Ae(m)?a:gr(g)?{[g]:m}:m},R,m),H=g=>sa(K(i.mount?s:a,g,e.shouldUnregister?K(a,g,[]):[])),$=(g,m,R={})=>{const G=K(t,g);let L=m;if(G){const I=G._f;I&&(!I.disabled&&le(s,g,Ul(m,I)),L=$t(I.ref)&&Ge(m)?"":m,wl(I.ref)?[...I.ref.options].forEach(x=>x.selected=L.includes(x.value)):I.refs?Rt(I.ref)?I.refs.length>1?I.refs.forEach(x=>(!x.defaultChecked||!x.disabled)&&(x.checked=Array.isArray(L)?!!L.find(ie=>ie===x.value):L===x.value)):I.refs[0]&&(I.refs[0].checked=!!L):I.refs.forEach(x=>x.checked=x.value===L):Ts(I.ref)?I.ref.value="":(I.ref.value=L,I.ref.type||E.values.next({name:g,values:{...s}})))}(R.shouldDirty||R.shouldTouch)&&U(g,L,R.shouldTouch,R.shouldDirty,!0),R.shouldValidate&&Ke(g)},Q=(g,m,R)=>{for(const G in m){const L=m[G],I=`${g}.${G}`,x=K(t,I);(o.array.has(g)||!Wt(L)||x&&!x._f)&&!on(L)?Q(I,L,R):$(I,L,R)}},ue=(g,m,R={})=>{const G=K(t,g),L=o.array.has(g),I=we(m);le(s,g,I),L?(E.array.next({name:g,values:{...s}}),(d.isDirty||d.dirtyFields)&&R.shouldDirty&&E.state.next({name:g,dirtyFields:Lt(a,s),isDirty:D(g,I)})):G&&!G._f&&!Ge(I)?Q(g,I,R):$(g,I,R),ti(g,o)&&E.state.next({...n}),E.values.next({name:i.mount?g:void 0,values:{...s}})},_e=async g=>{i.mount=!0;const m=g.target;let R=m.name,G=!0;const L=K(t,R),I=()=>m.type?Ia(L._f):Ol(g),x=ie=>{G=Number.isNaN(ie)||Lr(ie,K(s,R,ie))};if(L){let ie,Ie;const De=I(),Br=g.type===Ct.BLUR||g.type===Ct.FOCUS_OUT,Xu=!Pg(L._f)&&!r.resolver&&!K(n.errors,R)&&!L._f.deps||Fg(Br,K(n.touchedFields,R),n.isSubmitted,p,v),ha=ti(R,o,Br);le(s,R,De),Br?(L._f.onBlur&&L._f.onBlur(g),l&&l(0)):L._f.onChange&&L._f.onChange(g);const Sa=U(R,De,Br,!1),Qu=!je(Sa)||ha;if(!Br&&E.values.next({name:R,type:g.type,values:{...s}}),Xu)return d.isValid&&(e.mode==="onBlur"?Br&&y():y()),Qu&&E.state.next({name:R,...ha?{}:Sa});if(!Br&&ha&&E.state.next({...n}),r.resolver){const{errors:Qs}=await S([R]);if(x(De),G){const eg=ui(n.errors,t,R),ei=ui(Qs,t,eg.name||R);ie=ei.error,R=ei.name,Ie=je(Qs)}}else _([R],!0),ie=(await li(L,s,h,r.shouldUseNativeValidation))[R],_([R]),x(De),G&&(ie?Ie=!1:d.isValid&&(Ie=await j(t,!0)));G&&(L._f.deps&&Ke(L._f.deps),N(R,Ie,ie,Sa))}},Le=(g,m)=>{if(K(n.errors,m)&&g.focus)return g.focus(),1},Ke=async(g,m={})=>{let R,G;const L=it(g);if(r.resolver){const I=await V(Ae(g)?g:L);R=je(I),G=g?!L.some(x=>K(I,x)):R}else g?(G=(await Promise.all(L.map(async I=>{const x=K(t,I);return await j(x&&x._f?{[I]:x}:x)}))).every(Boolean),!(!G&&!n.isValid)&&y()):G=R=await j(t);return E.state.next({...!gr(g)||d.isValid&&R!==n.isValid?{}:{name:g},...r.resolver||!g?{isValid:R}:{},errors:n.errors}),m.shouldFocus&&!G&&ot(t,Le,g?L:o.mount),G},Oe=g=>{const m={...i.mount?s:a};return Ae(g)?m:gr(g)?K(m,g):g.map(R=>K(m,R))},Zr=(g,m)=>({invalid:!!K((m||n).errors,g),isDirty:!!K((m||n).dirtyFields,g),error:K((m||n).errors,g),isValidating:!!K(n.validatingFields,g),isTouched:!!K((m||n).touchedFields,g)}),Xr=g=>{g&&it(g).forEach(m=>he(n.errors,m)),E.state.next({errors:g?n.errors:{}})},Nt=(g,m,R)=>{const G=(K(t,g,{_f:{}})._f||{}).ref,L=K(n.errors,g)||{},{ref:I,message:x,type:ie,...Ie}=L;le(n.errors,g,{...Ie,...m,ref:G}),E.state.next({name:g,errors:n.errors,isValid:!1}),R&&R.shouldFocus&&G&&G.focus&&G.focus()},ca=(g,m)=>pr(g)?E.values.subscribe({next:R=>g(F(void 0,m),R)}):F(g,m,!0),bn=(g,m={})=>{for(const R of g?it(g):o.mount)o.mount.delete(R),o.array.delete(R),m.keepValue||(he(t,R),he(s,R)),!m.keepError&&he(n.errors,R),!m.keepDirty&&he(n.dirtyFields,R),!m.keepTouched&&he(n.touchedFields,R),!m.keepIsValidating&&he(n.validatingFields,R),!r.shouldUnregister&&!m.keepDefaultValue&&he(a,R);E.values.next({values:{...s}}),E.state.next({...n,...m.keepDirty?{isDirty:D()}:{}}),!m.keepIsValid&&y()},Ot=({disabled:g,name:m,field:R,fields:G,value:L})=>{if($e(g)&&i.mount||g){const I=g?void 0:Ae(L)?Ia(R?R._f:K(G,m)._f):L;le(s,m,I),U(m,I,!1,!1,!0)}},_n=(g,m={})=>{let R=K(t,g);const G=$e(m.disabled)||$e(e.disabled);return le(t,g,{...R||{},_f:{...R&&R._f?R._f:{ref:{name:g}},name:g,mount:!0,...m}}),o.mount.add(g),R?Ot({field:R,disabled:$e(m.disabled)?m.disabled:e.disabled,name:g,value:m.value}):P(g,!0,m.value),{...G?{disabled:m.disabled||e.disabled}:{},...r.progressive?{required:!!m.required,min:Nn(m.min),max:Nn(m.max),minLength:Nn(m.minLength),maxLength:Nn(m.maxLength),pattern:Nn(m.pattern)}:{},name:g,onChange:_e,onBlur:_e,ref:L=>{if(L){_n(g,m),R=K(t,g);const I=Ae(L.value)&&L.querySelectorAll&&L.querySelectorAll("input,select,textarea")[0]||L,x=Dg(I),ie=R._f.refs||[];if(x?ie.find(Ie=>Ie===I):I===R._f.ref)return;le(t,g,{_f:{...R._f,...x?{refs:[...ie.filter(Oa),I,...Array.isArray(K(a,g))?[{}]:[]],ref:{type:I.type,name:g}}:{ref:I}}}),P(g,!1,void 0,I)}else R=K(t,g,{}),R._f&&(R._f.mount=!1),(r.shouldUnregister||m.shouldUnregister)&&!(Il(o.array,g)&&i.action)&&o.unMount.add(g)}}},cn=()=>r.shouldFocusError&&ot(t,Le,o.mount),It=g=>{$e(g)&&(E.state.next({disabled:g}),ot(t,(m,R)=>{const G=K(t,R);G&&(m.disabled=G._f.disabled||g,Array.isArray(G._f.refs)&&G._f.refs.forEach(L=>{L.disabled=G._f.disabled||g}))},0,!1))},Qr=(g,m)=>async R=>{let G;R&&(R.preventDefault&&R.preventDefault(),R.persist&&R.persist());let L=we(s);if(E.state.next({isSubmitting:!0}),r.resolver){const{errors:I,values:x}=await S();n.errors=I,L=x}else await j(t);if(he(n.errors,"root"),je(n.errors)){E.state.next({errors:{}});try{await g(L,R)}catch(I){G=I}}else m&&await m({...n.errors},R),cn(),setTimeout(cn);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:je(n.errors)&&!G,submitCount:n.submitCount+1,errors:n.errors}),G)throw G},hn=(g,m={})=>{K(t,g)&&(Ae(m.defaultValue)?ue(g,we(K(a,g))):(ue(g,m.defaultValue),le(a,g,we(m.defaultValue))),m.keepTouched||he(n.touchedFields,g),m.keepDirty||(he(n.dirtyFields,g),n.isDirty=m.defaultValue?D(g,we(K(a,g))):D()),m.keepError||(he(n.errors,g),d.isValid&&y()),E.state.next({...n}))},en=(g,m={})=>{const R=g?we(g):a,G=we(R),L=je(g),I=L?a:G;if(m.keepDefaultValues||(a=R),!m.keepValues){if(m.keepDirtyValues)for(const x of o.mount)K(n.dirtyFields,x)?le(I,x,K(s,x)):ue(x,K(I,x));else{if(Es&&Ae(g))for(const x of o.mount){const ie=K(t,x);if(ie&&ie._f){const Ie=Array.isArray(ie._f.refs)?ie._f.refs[0]:ie._f.ref;if($t(Ie)){const De=Ie.closest("form");if(De){De.reset();break}}}}t={}}s=e.shouldUnregister?m.keepDefaultValues?we(a):{}:we(I),E.array.next({values:{...I}}),E.values.next({values:{...I}})}o={mount:m.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!d.isValid||!!m.keepIsValid||!!m.keepDirtyValues,i.watch=!!e.shouldUnregister,E.state.next({submitCount:m.keepSubmitCount?n.submitCount:0,isDirty:L?!1:m.keepDirty?n.isDirty:!!(m.keepDefaultValues&&!Lr(g,a)),isSubmitted:m.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:L?{}:m.keepDirtyValues?m.keepDefaultValues&&s?Lt(a,s):n.dirtyFields:m.keepDefaultValues&&g?Lt(a,g):m.keepDirty?n.dirtyFields:{},touchedFields:m.keepTouched?n.touchedFields:{},errors:m.keepErrors?n.errors:{},isSubmitSuccessful:m.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},wr=(g,m)=>en(pr(g)?g(s):g,m);return{control:{register:_n,unregister:bn,getFieldState:Zr,handleSubmit:Qr,setError:Nt,_executeSchema:S,_getWatch:F,_getDirty:D,_updateValid:y,_removeUnmounted:Y,_updateFieldArray:b,_updateDisabledField:Ot,_getFieldArray:H,_reset:en,_resetDefaultValues:()=>pr(r.defaultValues)&&r.defaultValues().then(g=>{wr(g,r.resetOptions),E.state.next({isLoading:!1})}),_updateFormState:g=>{n={...n,...g}},_disableForm:It,_subjects:E,_proxyFormState:d,_setErrors:B,get _fields(){return t},get _formValues(){return s},get _state(){return i},set _state(g){i=g},get _defaultValues(){return a},get _names(){return o},set _names(g){o=g},get _formState(){return n},set _formState(g){n=g},get _options(){return r},set _options(g){r={...r,...g}}},trigger:Ke,register:_n,handleSubmit:Qr,watch:ca,setValue:ue,getValues:Oe,reset:wr,resetField:hn,clearErrors:Xr,unregister:bn,setError:Nt,setFocus:(g,m={})=>{const R=K(t,g),G=R&&R._f;if(G){const L=G.refs?G.refs[0]:G.ref;L.focus&&(L.focus(),m.shouldSelect&&L.select())}},getFieldState:Zr}}function Hl(e={}){const r=c.useRef(),n=c.useRef(),[t,a]=c.useState({isDirty:!1,isValidating:!1,isLoading:pr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:pr(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...Gg(e),formState:t});const s=r.current.control;return s._options=e,ms({subject:s._subjects.state,next:i=>{Pl(i,s._proxyFormState,s._updateFormState,!0)&&a({...s._formState})}}),c.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),c.useEffect(()=>{if(s._proxyFormState.isDirty){const i=s._getDirty();i!==t.isDirty&&s._subjects.state.next({isDirty:i})}},[s,t.isDirty]),c.useEffect(()=>{e.values&&!Lr(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,a(i=>({...i}))):s._resetDefaultValues()},[e.values,s]),c.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),c.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),c.useEffect(()=>{e.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[e.shouldUnregister,s]),r.current.formState=Ll(t,s),r.current}function ql(e){var r,n,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(n=ql(e[r]))&&(t&&(t+=" "),t+=n)}else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function Ee(){for(var e,r,n=0,t="",a=arguments.length;n<a;n++)(e=arguments[n])&&(r=ql(e))&&(t&&(t+=" "),t+=r);return t}const Rn=e=>Ee({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var wg=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Yl=T.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,E=wg(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return c.createElement(a,Object.assign({},E,{ref:r,className:Ee(n,"navds-body-long",`navds-body-long--${t}`,Rn({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Bg=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ze=T.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,E=Bg(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return c.createElement(a,Object.assign({},E,{ref:r,className:Ee(n,"navds-body-short",`navds-body-short--${t}`,Rn({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var jg=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Vr=T.forwardRef((e,r)=>{var{className:n,size:t="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:E}=e,v=jg(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return c.createElement(i,Object.assign({},v,{ref:r,className:Ee(n,"navds-detail",Rn({spacing:a,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:E,uppercase:s}),{"navds-detail--small":t==="small"})}))});var Ug=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Hg=T.forwardRef((e,r)=>{var{className:n,size:t,spacing:a,as:s="p"}=e,i=Ug(e,["className","size","spacing","as"]);return c.createElement(s,Object.assign({},i,{ref:r,className:Ee("navds-error-message","navds-label",n,Rn({spacing:a}),{"navds-label--small":t==="small"})}))});var qg=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Rs=T.forwardRef((e,r)=>{var{level:n="1",size:t,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:u}=e,d=qg(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const E=s??`h${n}`;return c.createElement(E,Object.assign({},d,{ref:r,className:Ee(a,"navds-heading",`navds-heading--${t}`,Rn({spacing:i,align:o,visuallyHidden:l,textColor:u}))}))});var Yg=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};T.forwardRef((e,r)=>{var{className:n,spacing:t,as:a="p"}=e,s=Yg(e,["className","spacing","as"]);return c.createElement(a,Object.assign({},s,{ref:r,className:Ee(n,"navds-ingress",{"navds-typo--spacing":!!t})}))});var xg=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Ue=T.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=xg(e,["className","size","as","spacing","visuallyHidden","textColor"]);return c.createElement(a,Object.assign({},l,{ref:r,className:Ee(n,"navds-label",Rn({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":t==="small"})}))});function xl(e,r=166){let n;function t(...a){const s=()=>{e.apply(this,a)};clearTimeout(n),n=setTimeout(s,r)}return t.clear=()=>{clearTimeout(n)},t}function ys(e,r){const n=Object.entries(e).filter(([t])=>!r.includes(t));return Object.fromEntries(n)}const ja=globalThis!=null&&globalThis.document?T.useLayoutEffect:()=>{};let gi=0;function Cg(e){const[r,n]=T.useState(e),t=e||r;return T.useEffect(()=>{r==null&&(gi+=1,n(`aksel-id-${gi}`))},[r]),t}const ki=c.useId;function ia(e){var r;return ki!==void 0?ki().replace(/(:)/g,""):(r=Cg(e))!==null&&r!==void 0?r:""}let Ei=0;function $g(e){const[r,n]=T.useState(e),t=e||r;return T.useEffect(()=>{r==null&&(Ei+=1,n(`aksel-icon-${Ei}`))},[r]),t}const vi=c.useId;function Ir(e){var r;return vi!==void 0?vi().replace(/(:)/g,""):(r=$g(e))!==null&&r!==void 0?r:""}var Jg=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Cl=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=Jg(e,["title","titleId"]);let s=Ir();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var Wg=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const $l=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=Wg(e,["title","titleId"]);let s=Ir();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var zg=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Zg=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=zg(e,["title","titleId"]);let s=Ir();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Xg=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Qg=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=Xg(e,["title","titleId"]);let s=Ir();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var ek=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const rk=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=ek(e,["title","titleId"]);let s=Ir();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var nk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const mi=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=nk(e,["title","titleId"]);let s=Ir();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M19.638 4.417a3.25 3.25 0 0 0-4.608-.008l-9.378 9.379a.75.75 0 0 0-.191.324l-1.414 4.95a.75.75 0 0 0 .925.927l4.94-1.398a.75.75 0 0 0 .327-.191l9.39-9.391a3.25 3.25 0 0 0 .01-4.592M16.091 5.47a1.752 1.752 0 1 1 2.478 2.478l-.23.23-2.477-2.479zM14.8 6.76 6.85 14.71l-.991 3.47 3.457-.979 7.963-7.963z",clipRule:"evenodd"}))});var tk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ak=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=tk(e,["title","titleId"]);let s=Ir();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var sk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Jl=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=sk(e,["title","titleId"]);let s=Ir();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var ik=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Wl=T.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=ik(e,["title","titleId"]);let s=Ir();return s=n?t||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?T.createElement("title",{id:s},n):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function lt(e,r,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return r==null?void 0:r(a)}}function ok(e){return r=>{e.forEach(n=>{typeof n=="function"?n(r):n!=null&&(n.current=r)})}}function As(...e){return c.useCallback(ok(e),e)}var lk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const dk=T.forwardRef((e,r)=>{var{className:n,size:t="medium",title:a="venter...",transparent:s=!1,variant:i="neutral",id:o}=e,l=lk(e,["className","size","title","transparent","variant","id"]);const u=ia();return c.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${u}`,ref:r,className:Ee("navds-loader",n,`navds-loader--${t}`,`navds-loader--${i}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},ys(l,["children"])),c.createElement("title",{id:o??`loader-${u}`},a),c.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),c.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var uk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const vn=T.forwardRef((e,r)=>{var{as:n="button",variant:t="primary",className:a,children:s,size:i="medium",loading:o=!1,disabled:l,style:u,icon:d,iconPosition:E="left"}=e,v=uk(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const p=T.useRef(null),[h,f]=T.useState(),y=As(p,r);ja(()=>{if(o){const A=window.requestAnimationFrame(()=>{var B,P;f((P=(B=p==null?void 0:p.current)===null||B===void 0?void 0:B.getBoundingClientRect())===null||P===void 0?void 0:P.width)});return()=>{f(void 0),cancelAnimationFrame(A)}}},[o,s]);const _=l??h?ys(v,["href"]):v,b=A=>{A.key===" "&&!l&&!h&&A.currentTarget.click()};return c.createElement(n,Object.assign({},n!=="button"?{role:"button"}:{},_,{ref:y,onKeyUp:lt(_.onKeyUp,b),className:Ee(a,"navds-button",`navds-button--${t}`,`navds-button--${i}`,{"navds-button--loading":h,"navds-button--icon-only":!!d&&!s,"navds-button--disabled":l??h}),style:Object.assign(Object.assign({},u),{width:h}),disabled:l??h?!0:void 0}),h?c.createElement(dk,{size:i}):c.createElement(c.Fragment,null,d&&E==="left"&&c.createElement("span",{className:"navds-button__icon"},d),s&&c.createElement(Ue,{as:"span",size:i==="medium"?"medium":"small"},s),d&&E==="right"&&c.createElement("span",{className:"navds-button__icon"},d)))});var zl=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const gk=e=>{var{variant:r}=e,n=zl(e,["variant"]);switch(r){case"error":return c.createElement(Wl,Object.assign({title:"Feil"},n));case"warning":return c.createElement(Zg,Object.assign({title:"Advarsel"},n));case"info":return c.createElement(Qg,Object.assign({title:"Informasjon"},n));case"success":return c.createElement($l,Object.assign({title:"Suksess"},n));default:return null}},Zl=T.forwardRef((e,r)=>{var{children:n,className:t,variant:a,size:s="medium",fullWidth:i=!1,contentMaxWidth:o=!0,inline:l=!1,closeButton:u=!1,onClose:d}=e,E=zl(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);return c.createElement("div",Object.assign({},E,{ref:r,className:Ee(t,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":i,"navds-alert--inline":l,"navds-alert--close-button":u})}),c.createElement(gk,{variant:a,className:"navds-alert__icon"}),c.createElement(Yl,{as:"div",size:s,className:Ee("navds-alert__wrapper",o&&"navds-alert__wrapper--maxwidth")},n),u&&!l&&c.createElement("div",{className:"navds-alert__button-wrapper"},c.createElement(vn,{className:"navds-alert__button",size:"small",variant:"tertiary-neutral",onClick:d,type:"button",icon:c.createElement(Jl,{title:["error","warning"].includes(a)?"Lukk varsel":"Lukk melding"})})))});var dt=function(){return dt=Object.assign||function(r){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},dt.apply(this,arguments)};var Xl={exports:{}},On={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti;function kk(){if(Ti)return On;Ti=1;var e=c,r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var d,E={},v=null,p=null;u!==void 0&&(v=""+u),l.key!==void 0&&(v=""+l.key),l.ref!==void 0&&(p=l.ref);for(d in l)t.call(l,d)&&!s.hasOwnProperty(d)&&(E[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)E[d]===void 0&&(E[d]=l[d]);return{$$typeof:r,type:o,key:v,ref:p,props:E,_owner:a.current}}return On.Fragment=n,On.jsx=i,On.jsxs=i,On}Xl.exports=kk();var Ek=Xl.exports,vk=T.createContext(void 0);function mk(){var e=T.useContext(vk);if(!e)throw new Error("useDayPicker must be used within a DayPickerProvider.");return e}T.createContext(void 0);T.forwardRef(function(e,r){var n=mk(),t=n.classNames,a=n.styles,s=[t.button_reset,t.button];e.className&&s.push(e.className);var i=s.join(" "),o=dt(dt({},a.button_reset),a.button);return e.style&&Object.assign(o,e.style),Ek.jsx("button",dt({},e,{ref:r,type:"button",className:i,style:o}))});T.createContext(void 0);T.createContext(void 0);var kr;(function(e){e.Outside="outside",e.Disabled="disabled",e.Selected="selected",e.Hidden="hidden",e.Today="today",e.RangeStart="range_start",e.RangeEnd="range_end",e.RangeMiddle="range_middle"})(kr||(kr={}));kr.Selected;kr.Disabled;kr.Hidden;kr.Today;kr.RangeEnd;kr.RangeMiddle;kr.RangeStart;kr.Outside;T.createContext(void 0);T.createContext(void 0);T.createContext(void 0);const Tk=T.createContext(null);T.createContext({hasDropdown:!1,year:new Date,toYear:()=>null,disabled:[],onSelect:()=>null});const fk=({readOnly:e,nativeReadOnly:r=!0})=>e?c.createElement(rk,Object.assign({},r?{"aria-hidden":!0}:{title:"readonly"},{className:"navds-form-field__readonly-icon"})):null,Rk=T.createContext(null),yk=(e,r)=>{var n,t,a;const{size:s,error:i,errorId:o}=e,l=T.useContext(Rk),u=ia(),d=(n=e.id)!==null&&n!==void 0?n:`${r}-${u}`,E=o??`${r}-error-${u}`,v=`${r}-description-${u}`,p=(l==null?void 0:l.disabled)||e.disabled,h=((l==null?void 0:l.readOnly)||e.readOnly)&&!p||void 0,f=!p&&!h&&!!(i||l!=null&&l.error),y=!p&&!h&&!!i&&typeof i!="boolean",_=Object.assign({},f?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:y,hasError:f,errorId:E,inputDescriptionId:v,size:(t=s??(l==null?void 0:l.size))!==null&&t!==void 0?t:"medium",readOnly:h,inputProps:Object.assign(Object.assign({id:d},_),{"aria-describedby":Ee(e["aria-describedby"],{[v]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[E]:y,[(a=l==null?void 0:l.errorId)!==null&&a!==void 0?a:""]:f&&!!(l!=null&&l.error)})||void 0,disabled:p})}};function Ak(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function pk(e){return e instanceof Element||e instanceof Ak(e).Element}var Ua=typeof document<"u"?T.useLayoutEffect:T.useEffect;let Da=!1,bk=0;const fi=()=>"floating-ui-"+bk++;function _k(){const[e,r]=T.useState(()=>Da?fi():void 0);return Ua(()=>{e==null&&r(fi())},[]),T.useEffect(()=>{Da||(Da=!0)},[]),e}const ck=ng.useId,hk=ck||_k;function Sk(e){return"data-floating-ui-"+e}const Nk=T.createContext(null);function Ok(e){let{id:r,root:n}=e===void 0?{}:e;const[t,a]=T.useState(null),s=hk(),i=Ik(),o=T.useMemo(()=>({id:r,root:n,portalContext:i,uniqueId:s}),[r,n,i,s]),l=T.useRef();return Ua(()=>()=>{t==null||t.remove()},[t,o]),Ua(()=>{if(l.current===o)return;l.current=o;const{id:u,root:d,portalContext:E,uniqueId:v}=o,p=u?document.getElementById(u):null,h=Sk("portal");if(p){const f=document.createElement("div");f.id=v,f.setAttribute(h,""),p.appendChild(f),a(f)}else{let f=d||(E==null?void 0:E.portalNode);f&&!pk(f)&&(f=f.current),f=f||document.body;let y=null;u&&(y=document.createElement("div"),y.id=u,f.appendChild(y));const _=document.createElement("div");_.id=v,_.setAttribute(h,""),f=y||f,f.appendChild(_),a(_)}},[o]),t}const Ik=()=>T.useContext(Nk),Dk=T.createContext(void 0),Kk=()=>T.useContext(Dk);var Lk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};function Pk(e,r){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${r}`}function Fk(e={}){const{name:r,hookName:n="useContext",providerName:t="Provider",errorMessage:a,defaultValue:s}=e,i=T.createContext(s),o=T.forwardRef((u,d)=>{var{children:E}=u,v=Lk(u,["children"]);const p=c.useMemo(()=>v,Object.values(v));return c.createElement(i.Provider,{value:d?Object.assign(Object.assign({},p),{ref:d}):p},E)});function l(u=!0){var d;const E=T.useContext(i);if(!E&&u){const v=new Error(a??Pk(n,t));throw v.name="ContextError",(d=Error.captureStackTrace)===null||d===void 0||d.call(Error,v,l),v}return E}return i.displayName=r,[o,l]}const[Mk,Ql]=Fk({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});var Vk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Gk=T.forwardRef((e,r)=>{var{className:n}=e,t=Vk(e,["className"]);return c.createElement("div",Object.assign({},t,{ref:r,className:Ee("navds-modal__body",n)}))});var wk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Bk=T.forwardRef((e,r)=>{var{className:n}=e,t=wk(e,["className"]);return c.createElement("div",Object.assign({},t,{ref:r,className:Ee("navds-modal__footer",n)}))});var jk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ed=T.forwardRef((e,r)=>{var{children:n,className:t,closeButton:a=!0}=e,s=jk(e,["children","className","closeButton"]);const i=Ql();return c.createElement("div",Object.assign({},s,{ref:r,className:Ee("navds-modal__header",t)}),i.closeHandler&&a&&c.createElement(vn,{type:"button",className:"navds-modal__button",size:"small",variant:"tertiary-neutral",onClick:i.closeHandler,icon:c.createElement(Jl,{title:"Lukk"})}),n)}),Ri=({clientX:e,clientY:r},{left:n,top:t,right:a,bottom:s})=>!(e<n||r<t||e>a||r>s);function Uk(e,r,n){if(!(r&&r.closeButton===!1))return n?()=>{var t;return n()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const Pt="navds-modal__document-body";function Hk(e,r,n){c.useEffect(()=>{if(n||!e.current||!r)return;e.current.open&&document.body.classList.add(Pt);const t=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(Pt):document.body.classList.remove(Pt)});return t.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{t.disconnect(),document.body.classList.remove(Pt)}},[e,r,n])}const ln=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function rd(e,r){var n="on"+r.type.toLowerCase();return typeof e[n]=="function"&&e[n](r),e.dispatchEvent(r)}function ut(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function nd(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function qk(e,r){for(var n=0;n<e.length;++n)if(e[n]===r)return!0;return!1}function Ka(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function td(e){var r=["button","input","keygen","select","textarea"],n=r.map(function(i){return i+":not([disabled])"});n.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(n.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),s=0;s<a.length&&!(a[s].tagName&&a[s].shadowRoot&&(t=td(a[s].shadowRoot),t));s++);return t}function yi(e){return e.isConnected||document.body.contains(e)}function ad(e){if(e.submitter)return e.submitter;var r=e.target;if(!(r instanceof HTMLFormElement))return null;var n=te.formSubmitter;if(!n){var t=e.target,a="getRootNode"in t&&t.getRootNode()||document;n=a.activeElement}return!n||n.form!==r?null:n}function Yk(e){if(!e.defaultPrevented){var r=e.target,n=te.imagemapUseValue,t=ad(e);n===null&&t&&(n=t.value);var a=ut(r);if(a){var s=t&&t.getAttribute("formmethod")||r.getAttribute("method");s==="dialog"&&(e.preventDefault(),n!=null?a.close(n):a.close())}}}function sd(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",Yk,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var r=new MutationObserver(this.maybeHideModal.bind(this));r.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var n=!1,t=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),a,s=function(i){if(i.target===e){var o="DOMNodeRemoved";n|=i.type.substr(0,o.length)===o,window.clearTimeout(a),a=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,s)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}sd.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&yi(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),te.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var r=document.createElement("div");this.dialog_.insertBefore(r,this.dialog_.firstChild),r.tabIndex=-1,r.focus(),this.dialog_.removeChild(r)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=td(this.dialog_)),nd(document.activeElement),e&&e.focus()},updateZIndex:function(e,r){if(e<r)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=r},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!yi(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!te.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,te.needsCentering(this.dialog_)?(te.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var r=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});rd(this.dialog_,r)}};var te={};te.reposition=function(e){var r=document.body.scrollTop||document.documentElement.scrollTop,n=r+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(r,n)+"px"};te.isInlinePositionSetByStylesheet=function(e){for(var r=0;r<document.styleSheets.length;++r){var n=document.styleSheets[r],t=null;try{t=n.cssRules}catch{}if(t)for(var a=0;a<t.length;++a){var s=t[a],i=null;try{i=document.querySelectorAll(s.selectorText)}catch{}if(!(!i||!qk(i,e))){var o=s.style.getPropertyValue("top"),l=s.style.getPropertyValue("bottom");if(o&&o!=="auto"||l&&l!=="auto")return!0}}}return!1};te.needsCentering=function(e){var r=window.getComputedStyle(e);return r.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!te.isInlinePositionSetByStylesheet(e)};te.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new sd(e)};te.registerDialog=function(e){e.showModal||te.forceRegisterDialog(e)};te.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(r){this.forwardTab_=void 0,r.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(r){var n=[];r.forEach(function(t){for(var a=0,s;s=t.removedNodes[a];++a)s instanceof Element&&(s.localName==="dialog"&&n.push(s),n=n.concat(s.querySelectorAll("dialog")))}),n.length&&e(n)}))};te.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};te.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};te.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,r=0,n;n=this.pendingDialogStack[r];++r)n.updateZIndex(--e,--e),r===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var a=t.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};te.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=ut(e);){for(var r=0,n;n=this.pendingDialogStack[r];++r)if(n.dialog===e)return r===0;e=e.parentElement}return!1};te.DialogManager.prototype.handleFocus_=function(e){var r=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(r)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),nd(r),this.forwardTab_!==void 0)){var n=this.pendingDialogStack[0],t=n.dialog,a=t.compareDocumentPosition(r);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():r!==document.documentElement&&document.documentElement.focus()),!1}};te.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var r=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&rd(n.dialog,r)&&n.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};te.DialogManager.prototype.checkDOM_=function(e){var r=this.pendingDialogStack.slice();r.forEach(function(n){e.indexOf(n.dialog)!==-1?n.downgradeModal():n.maybeHideModal()})};te.DialogManager.prototype.pushDialog=function(e){var r=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=r?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};te.DialogManager.prototype.removeDialog=function(e){var r=this.pendingDialogStack.indexOf(e);r!==-1&&(this.pendingDialogStack.splice(r,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};ln&&(te.dm=new te.DialogManager,te.formSubmitter=null,te.imagemapUseValue=null);if(ln){var Ai=document.createElement("form");if(Ai.setAttribute("method","dialog"),Ai.method!=="dialog"){var nn=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(nn){var xk=nn.get;nn.get=function(){return Ka(this)?"dialog":xk.call(this)};var Ck=nn.set;nn.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Ck.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",nn)}}document.addEventListener("click",function(e){if(te.formSubmitter=null,te.imagemapUseValue=null,!e.defaultPrevented){var r=e.target;if("composedPath"in e){var n=e.composedPath();r=n.shift()||r}if(!(!r||!Ka(r.form))){var t=r.type==="submit"&&["button","input"].indexOf(r.localName)>-1;if(!t){if(!(r.localName==="input"&&r.type==="image"))return;te.imagemapUseValue=e.offsetX+","+e.offsetY}var a=ut(r);a&&(te.formSubmitter=r)}}},!1),document.addEventListener("submit",function(e){var r=e.target,n=ut(r);if(!n){var t=ad(e),a=t&&t.getAttribute("formmethod")||r.getAttribute("method");a==="dialog"&&e.preventDefault()}});var $k=HTMLFormElement.prototype.submit,Jk=function(){if(!Ka(this))return $k.call(this);var e=ut(this);e&&e.close()};HTMLFormElement.prototype.submit=Jk}var Wk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const pi="navds-modal--polyfilled",un=T.forwardRef((e,r)=>{var n,t,{header:a,children:s,open:i,onBeforeClose:o,onCancel:l,closeOnBackdropClick:u,width:d,placement:E,portal:v,className:p,"aria-labelledby":h,style:f,onClick:y,onMouseDown:_}=e,b=Wk(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const A=T.useRef(null),B=As(A,r),P=ia(),U=(n=Kk())===null||n===void 0?void 0:n.rootElement,N=Ok({root:U}),S=T.useContext(Tk),V=Ql(!1)!==void 0;V&&!S&&console.error("Modals should not be nested"),T.useEffect(()=>{ln&&A.current&&N&&(te.registerDialog(A.current),A.current.classList.add(pi)),A.current&&N&&(A.current.autofocus=!0)},[A,N]),T.useEffect(()=>{A.current&&N&&i!==void 0&&(i&&!A.current.open?A.current.showModal():!i&&A.current.open&&A.current.close())},[A,N,i]),Hk(A,N,V);const j=typeof d=="string"&&["small","medium"].includes(d),Y=Ee("navds-modal",p,{[pi]:ln,"navds-modal--autowidth":!d,[`navds-modal--${d}`]:j,"navds-modal--top":E==="top"&&!ln}),D=Object.assign(Object.assign({},f),j?{}:{width:d}),F=T.useRef({clientX:0,clientY:0}),H=Ke=>{F.current=Ke},$=u&&!ln,Q=Ke=>{if(Ke.target!==A.current)return;const Oe=A.current.getBoundingClientRect();Ri(F.current,Oe)||Ri(Ke,Oe)||o!==void 0&&o()===!1||A.current.close()},ue=Ke=>{o&&o()===!1&&Ke.preventDefault()},_e=!h&&!b["aria-label"]&&a?P:h,Le=c.createElement("dialog",Object.assign({},b,{ref:B,className:Y,style:D,onCancel:lt(l,ue),onClick:$?lt(y,Q):y,onMouseDown:$?lt(_,H):_,"aria-labelledby":_e}),c.createElement(Mk,{closeHandler:Uk(A,a,o),ref:A},a&&c.createElement(ed,null,a.label&&c.createElement(Vr,{className:"navds-modal__label"},a.label),c.createElement(Rs,{size:(t=a.size)!==null&&t!==void 0?t:"medium",level:"1",id:P},a.icon&&c.createElement("span",{className:"navds-modal__header-icon"},a.icon),a.heading)),s));return v?N?tg.createPortal(Le,N):null:Le});un.Header=ed;un.Body=Gk;un.Footer=Bk;var zk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Ha=T.forwardRef((e,r)=>{var{as:n="a",className:t,underline:a=!0,variant:s="action",inlineText:i=!1}=e,o=zk(e,["as","className","underline","variant","inlineText"]);return c.createElement(n,Object.assign({},o,{ref:r,className:Ee("navds-link",t,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":i})}))});var Zk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Xk=T.forwardRef((e,r)=>{var{children:n,className:t,variant:a,size:s="medium",icon:i}=e,o=Zk(e,["children","className","variant","size","icon"]);return c.createElement(ze,Object.assign({},o,{ref:r,as:"span",size:s==="medium"?"medium":"small",className:Ee("navds-tag",t,`navds-tag--${a}`,`navds-tag--${s}`)}),i&&c.createElement("span",{className:"navds-tag__icon--left"},i),n)});var Qk=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const bi=(e,r,n)=>{const{outerHeightStyle:t,overflow:a}=r;return n.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==a)?(n.current+=1,r):e},_i=e=>(e&&e.ownerDocument||document).defaultView||window;function Ft(e){return parseInt(e,10)||0}const eE=T.forwardRef((e,r)=>{var n,t,{className:a,onChange:s,maxRows:i,minRows:o=1,autoScrollbar:l,style:u,value:d}=e,E=Qk(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:v}=T.useRef(d!=null),p=T.useRef(null),h=As(p,r),f=T.useRef(null),y=T.useRef(0),[_,b]=T.useState({outerHeightStyle:0}),A=c.useCallback(()=>{const N=p.current,V=_i(N).getComputedStyle(N);if(V.width==="0px")return{outerHeightStyle:0};const j=f.current;j.style.width=V.width,j.value=N.value||E.placeholder||"x",j.value.slice(-1)===`
`&&(j.value+=" ");const Y=V.boxSizing,D=Ft(V.paddingBottom)+Ft(V.paddingTop),F=Ft(V.borderBottomWidth)+Ft(V.borderTopWidth),H=j.scrollHeight-D;j.value="x";const $=j.scrollHeight-D;let Q=H;o&&(Q=Math.max(Number(o)*$,Q)),i&&(Q=Math.min(Number(i)*$,Q)),Q=Math.max(Q,$);const ue=Q+(Y==="border-box"?D+F:0),_e=Math.abs(Q-H)<=1;return{outerHeightStyle:ue,overflow:_e}},[i,o,E.placeholder]),B=()=>{const N=A();ci(N)||b(S=>bi(S,N,y))};ja(()=>{const N=()=>{const D=A();ci(D)||ag.flushSync(()=>{b(F=>bi(F,D,y))})},S=xl(()=>{var D,F,H;if(y.current=0,!((D=p.current)===null||D===void 0)&&D.style.height||!((F=p.current)===null||F===void 0)&&F.style.width){((H=p.current)===null||H===void 0?void 0:H.style.overflow)==="hidden"&&b($=>Object.assign(Object.assign({},$),{overflow:!1}));return}N()}),V=p.current,j=_i(V);j.addEventListener("resize",S);let Y;return typeof ResizeObserver<"u"&&(Y=new ResizeObserver(S),Y.observe(V)),()=>{S.clear(),j.removeEventListener("resize",S),Y&&Y.disconnect()}},[A]),ja(()=>{B()}),T.useEffect(()=>{y.current=0},[d]);const P=N=>{y.current=0,v||B(),s&&s(N)},U=Object.assign({"--__ac-textarea-height":_.outerHeightStyle+"px",overflow:_.overflow&&!l&&!(!((n=p.current)===null||n===void 0)&&n.style.height)&&!(!((t=p.current)===null||t===void 0)&&t.style.width)?"hidden":void 0},u);return c.createElement(c.Fragment,null,c.createElement("textarea",Object.assign({value:d,onChange:P,ref:h,rows:o,style:U},E,{className:a})),c.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:f,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},u)}))});function ci(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const rE=({maxLength:e,currentLength:r,size:n,i18n:t})=>{const a=e-r,[s,i]=T.useState(a);return T.useEffect(()=>{const o=xl(()=>{i(a)},2e3);return o(),()=>{o.clear()}},[a]),c.createElement(c.Fragment,null,a<20&&c.createElement("span",{role:"status",className:"navds-textarea__sr-counter navds-sr-only"},hi(s,t)),c.createElement(ze,{className:Ee("navds-textarea__counter",{"navds-textarea__counter--error":a<0}),size:n},hi(a,t)))},hi=(e,r)=>{var n,t;return e<0?`${Math.abs(e)} ${(n=r==null?void 0:r.counterTooMuch)!==null&&n!==void 0?n:"tegn for mye"}`:`${e} ${(t=r==null?void 0:r.counterLeft)!==null&&t!==void 0?t:"tegn igjen"}`};var nE=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const tE=T.forwardRef((e,r)=>{var n,t,a;const{inputProps:s,errorId:i,showErrorMsg:o,hasError:l,size:u,inputDescriptionId:d}=yk(e,"textarea"),{label:E,className:v,description:p,maxLength:h,hideLabel:f=!1,resize:y,UNSAFE_autoScrollbar:_,i18n:b,readOnly:A}=e,B=nE(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),P=ia(),U=h!==void 0&&h>0,[N,S]=T.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),V=()=>{let Y=B!=null&&B.minRows?B==null?void 0:B.minRows:3;return u==="small"&&(Y=B!=null&&B.minRows?B==null?void 0:B.minRows:2),Y},j=Ee(s["aria-describedby"],{[P??""]:U});return c.createElement("div",{className:Ee(v,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":A,"navds-textarea--readonly":A,"navds-textarea--error":l,"navds-textarea--autoscrollbar":_,[`navds-textarea--resize-${y===!0?"both":y}`]:y})},c.createElement(Ue,{htmlFor:s.id,size:u,className:Ee("navds-form-field__label",{"navds-sr-only":f})},c.createElement(fk,{readOnly:A}),E),!!p&&c.createElement(ze,{className:Ee("navds-form-field__description",{"navds-sr-only":f}),id:d,size:u,as:"div"},p),c.createElement(eE,Object.assign({},ys(B,["error","errorId","size"]),s,{onChange:lt(e.onChange,e.value===void 0?Y=>S(Y.target.value):void 0),minRows:V(),autoScrollbar:_,ref:r,readOnly:A,className:Ee("navds-textarea__input","navds-body-short",`navds-body-short--${u??"medium"}`)},j?{"aria-describedby":j}:{})),U&&!A&&!s.disabled&&c.createElement(c.Fragment,null,c.createElement("span",{id:P,className:"navds-sr-only"},`Tekstområde med plass til ${h} tegn.`),c.createElement(rE,{maxLength:h,currentLength:(a=(t=e.value)===null||t===void 0?void 0:t.length)!==null&&a!==void 0?a:N.length,size:u,i18n:b})),c.createElement("div",{className:"navds-form-field__error",id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&c.createElement(Hg,{size:u},e.error)))});var qa=function(e,r){return qa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])},qa(e,r)};function ar(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");qa(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}var q=function(){return q=Object.assign||function(r){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},q.apply(this,arguments)};function mn(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n}function dr(e,r,n){if(n||arguments.length===2)for(var t=0,a=r.length,s;t<a;t++)(s||!(t in r))&&(s||(s=Array.prototype.slice.call(r,0,t)),s[t]=r[t]);return e.concat(s||Array.prototype.slice.call(r))}function id(e,r,n){if(n===void 0&&(n=Error),!e)throw new n(r)}var X;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(X||(X={}));var ge;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(ge||(ge={}));var Tn;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Tn||(Tn={}));function Si(e){return e.type===ge.literal}function aE(e){return e.type===ge.argument}function od(e){return e.type===ge.number}function ld(e){return e.type===ge.date}function dd(e){return e.type===ge.time}function ud(e){return e.type===ge.select}function gd(e){return e.type===ge.plural}function sE(e){return e.type===ge.pound}function kd(e){return e.type===ge.tag}function Ed(e){return!!(e&&typeof e=="object"&&e.type===Tn.number)}function Ya(e){return!!(e&&typeof e=="object"&&e.type===Tn.dateTime)}var vd=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,iE=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function oE(e){var r={};return e.replace(iE,function(n){var t=n.length;switch(n[0]){case"G":r.era=t===4?"long":t===5?"narrow":"short";break;case"y":r.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":r.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":r.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":r.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][t-4];break;case"a":r.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":r.hourCycle="h12",r.hour=["numeric","2-digit"][t-1];break;case"H":r.hourCycle="h23",r.hour=["numeric","2-digit"][t-1];break;case"K":r.hourCycle="h11",r.hour=["numeric","2-digit"][t-1];break;case"k":r.hourCycle="h24",r.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":r.minute=["numeric","2-digit"][t-1];break;case"s":r.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":r.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),r}var lE=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function dE(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var r=e.split(lE).filter(function(v){return v.length>0}),n=[],t=0,a=r;t<a.length;t++){var s=a[t],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),u=0,d=l;u<d.length;u++){var E=d[u];if(E.length===0)throw new Error("Invalid number skeleton")}n.push({stem:o,options:l})}return n}function uE(e){return e.replace(/^(.*?)-/,"")}var Ni=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,md=/^(@+)?(\+|#+)?[rs]?$/g,gE=/(\*)(0+)|(#+)(0+)|(0+)/g,Td=/^(0+)$/;function Oi(e){var r={};return e[e.length-1]==="r"?r.roundingPriority="morePrecision":e[e.length-1]==="s"&&(r.roundingPriority="lessPrecision"),e.replace(md,function(n,t,a){return typeof a!="string"?(r.minimumSignificantDigits=t.length,r.maximumSignificantDigits=t.length):a==="+"?r.minimumSignificantDigits=t.length:t[0]==="#"?r.maximumSignificantDigits=t.length:(r.minimumSignificantDigits=t.length,r.maximumSignificantDigits=t.length+(typeof a=="string"?a.length:0)),""}),r}function fd(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function kE(e){var r;if(e[0]==="E"&&e[1]==="E"?(r={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(r={notation:"scientific"},e=e.slice(1)),r){var n=e.slice(0,2);if(n==="+!"?(r.signDisplay="always",e=e.slice(2)):n==="+?"&&(r.signDisplay="exceptZero",e=e.slice(2)),!Td.test(e))throw new Error("Malformed concise eng/scientific notation");r.minimumIntegerDigits=e.length}return r}function Ii(e){var r={},n=fd(e);return n||r}function EE(e){for(var r={},n=0,t=e;n<t.length;n++){var a=t[n];switch(a.stem){case"percent":case"%":r.style="percent";continue;case"%x100":r.style="percent",r.scale=100;continue;case"currency":r.style="currency",r.currency=a.options[0];continue;case"group-off":case",_":r.useGrouping=!1;continue;case"precision-integer":case".":r.maximumFractionDigits=0;continue;case"measure-unit":case"unit":r.style="unit",r.unit=uE(a.options[0]);continue;case"compact-short":case"K":r.notation="compact",r.compactDisplay="short";continue;case"compact-long":case"KK":r.notation="compact",r.compactDisplay="long";continue;case"scientific":r=q(q(q({},r),{notation:"scientific"}),a.options.reduce(function(l,u){return q(q({},l),Ii(u))},{}));continue;case"engineering":r=q(q(q({},r),{notation:"engineering"}),a.options.reduce(function(l,u){return q(q({},l),Ii(u))},{}));continue;case"notation-simple":r.notation="standard";continue;case"unit-width-narrow":r.currencyDisplay="narrowSymbol",r.unitDisplay="narrow";continue;case"unit-width-short":r.currencyDisplay="code",r.unitDisplay="short";continue;case"unit-width-full-name":r.currencyDisplay="name",r.unitDisplay="long";continue;case"unit-width-iso-code":r.currencyDisplay="symbol";continue;case"scale":r.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":r.roundingMode="floor";continue;case"rounding-mode-ceiling":r.roundingMode="ceil";continue;case"rounding-mode-down":r.roundingMode="trunc";continue;case"rounding-mode-up":r.roundingMode="expand";continue;case"rounding-mode-half-even":r.roundingMode="halfEven";continue;case"rounding-mode-half-down":r.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":r.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(gE,function(l,u,d,E,v,p){if(u)r.minimumIntegerDigits=d.length;else{if(E&&v)throw new Error("We currently do not support maximum integer digits");if(p)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Td.test(a.stem)){r.minimumIntegerDigits=a.stem.length;continue}if(Ni.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(Ni,function(l,u,d,E,v,p){return d==="*"?r.minimumFractionDigits=u.length:E&&E[0]==="#"?r.maximumFractionDigits=E.length:v&&p?(r.minimumFractionDigits=v.length,r.maximumFractionDigits=v.length+p.length):(r.minimumFractionDigits=u.length,r.maximumFractionDigits=u.length),""});var s=a.options[0];s==="w"?r=q(q({},r),{trailingZeroDisplay:"stripIfInteger"}):s&&(r=q(q({},r),Oi(s)));continue}if(md.test(a.stem)){r=q(q({},r),Oi(a.stem));continue}var i=fd(a.stem);i&&(r=q(q({},r),i));var o=kE(a.stem);o&&(r=q(q({},r),o))}return r}var Mt={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function vE(e,r){for(var n="",t=0;t<e.length;t++){var a=e.charAt(t);if(a==="j"){for(var s=0;t+1<e.length&&e.charAt(t+1)===a;)s++,t++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",u=mE(r);for((u=="H"||u=="k")&&(o=0);o-- >0;)n+=l;for(;i-- >0;)n=u+n}else a==="J"?n+="H":n+=a}return n}function mE(e){var r=e.hourCycle;if(r===void 0&&e.hourCycles&&e.hourCycles.length&&(r=e.hourCycles[0]),r)switch(r){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=e.language,t;n!=="root"&&(t=e.maximize().region);var a=Mt[t||""]||Mt[n||""]||Mt["".concat(n,"-001")]||Mt["001"];return a[0]}var La,TE=new RegExp("^".concat(vd.source,"*")),fE=new RegExp("".concat(vd.source,"*$"));function ee(e,r){return{start:e,end:r}}var RE=!!String.prototype.startsWith&&"_a".startsWith("a",1),yE=!!String.fromCodePoint,AE=!!Object.fromEntries,pE=!!String.prototype.codePointAt,bE=!!String.prototype.trimStart,_E=!!String.prototype.trimEnd,cE=!!Number.isSafeInteger,hE=cE?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},xa=!0;try{var SE=yd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");xa=((La=SE.exec("a"))===null||La===void 0?void 0:La[0])==="a"}catch{xa=!1}var Di=RE?function(r,n,t){return r.startsWith(n,t)}:function(r,n,t){return r.slice(t,t+n.length)===n},Ca=yE?String.fromCodePoint:function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];for(var t="",a=r.length,s=0,i;a>s;){if(i=r[s++],i>1114111)throw RangeError(i+" is not a valid code point");t+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return t},Ki=AE?Object.fromEntries:function(r){for(var n={},t=0,a=r;t<a.length;t++){var s=a[t],i=s[0],o=s[1];n[i]=o}return n},Rd=pE?function(r,n){return r.codePointAt(n)}:function(r,n){var t=r.length;if(!(n<0||n>=t)){var a=r.charCodeAt(n),s;return a<55296||a>56319||n+1===t||(s=r.charCodeAt(n+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},NE=bE?function(r){return r.trimStart()}:function(r){return r.replace(TE,"")},OE=_E?function(r){return r.trimEnd()}:function(r){return r.replace(fE,"")};function yd(e,r){return new RegExp(e,r)}var $a;if(xa){var Li=yd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");$a=function(r,n){var t;Li.lastIndex=n;var a=Li.exec(r);return(t=a[1])!==null&&t!==void 0?t:""}}else $a=function(r,n){for(var t=[];;){var a=Rd(r,n);if(a===void 0||Ad(a)||LE(a))break;t.push(a),n+=a>=65536?2:1}return Ca.apply(void 0,t)};var IE=function(){function e(r,n){n===void 0&&(n={}),this.message=r,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(r,n,t){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(r,t);if(i.err)return i;a.push(i.val)}else{if(s===125&&r>0)break;if(s===35&&(n==="plural"||n==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:ge.pound,location:ee(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(X.UNMATCHED_CLOSING_TAG,ee(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&Ja(this.peek()||0)){var i=this.parseTag(r,n);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(r,n);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(r,n){var t=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:ge.literal,value:"<".concat(a,"/>"),location:ee(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(r+1,n,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Ja(this.char()))return this.error(X.INVALID_TAG,ee(o,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return a!==u?this.error(X.UNMATCHED_CLOSING_TAG,ee(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:ge.tag,value:a,children:i,location:ee(t,this.clonePosition())},err:null}:this.error(X.INVALID_TAG,ee(o,this.clonePosition())))}else return this.error(X.UNCLOSED_TAG,ee(t,this.clonePosition()))}else return this.error(X.INVALID_TAG,ee(t,this.clonePosition()))},e.prototype.parseTagName=function(){var r=this.offset();for(this.bump();!this.isEOF()&&KE(this.char());)this.bump();return this.message.slice(r,this.offset())},e.prototype.parseLiteral=function(r,n){for(var t=this.clonePosition(),a="";;){var s=this.tryParseQuote(n);if(s){a+=s;continue}var i=this.tryParseUnquoted(r,n);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=ee(t,this.clonePosition());return{val:{type:ge.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!DE(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(r){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(r==="plural"||r==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(t);this.bump()}return Ca.apply(void 0,n)},e.prototype.tryParseUnquoted=function(r,n){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(n==="plural"||n==="selectordinal")||t===125&&r>0?null:(this.bump(),Ca(t))},e.prototype.parseArgument=function(r,n){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,ee(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(X.EMPTY_ARGUMENT,ee(t,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(X.MALFORMED_ARGUMENT,ee(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,ee(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:ge.argument,value:a,location:ee(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,ee(t,this.clonePosition())):this.parseArgumentOptions(r,n,a,t);default:return this.error(X.MALFORMED_ARGUMENT,ee(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var r=this.clonePosition(),n=this.offset(),t=$a(this.message,n),a=n+t.length;this.bumpTo(a);var s=this.clonePosition(),i=ee(r,s);return{value:t,location:i}},e.prototype.parseArgumentOptions=function(r,n,t,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(X.EXPECT_ARGUMENT_TYPE,ee(i,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),E=this.parseSimpleArgStyleIfPossible();if(E.err)return E;var v=OE(E.val);if(v.length===0)return this.error(X.EXPECT_ARGUMENT_STYLE,ee(this.clonePosition(),this.clonePosition()));var p=ee(d,this.clonePosition());u={style:v,styleLocation:p}}var h=this.tryParseArgumentClose(a);if(h.err)return h;var f=ee(a,this.clonePosition());if(u&&Di(u==null?void 0:u.style,"::",0)){var y=NE(u.style.slice(2));if(o==="number"){var E=this.parseNumberSkeletonFromString(y,u.styleLocation);return E.err?E:{val:{type:ge.number,value:t,location:f,style:E.val},err:null}}else{if(y.length===0)return this.error(X.EXPECT_DATE_TIME_SKELETON,f);var _=y;this.locale&&(_=vE(y,this.locale));var v={type:Tn.dateTime,pattern:_,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?oE(_):{}},b=o==="date"?ge.date:ge.time;return{val:{type:b,value:t,location:f,style:v},err:null}}}return{val:{type:o==="number"?ge.number:o==="date"?ge.date:ge.time,value:t,location:f,style:(s=u==null?void 0:u.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var A=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(X.EXPECT_SELECT_ARGUMENT_OPTIONS,ee(A,q({},A)));this.bumpSpace();var B=this.parseIdentifierIfPossible(),P=0;if(o!=="select"&&B.value==="offset"){if(!this.bumpIf(":"))return this.error(X.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ee(this.clonePosition(),this.clonePosition()));this.bumpSpace();var E=this.tryParseDecimalInteger(X.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,X.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(E.err)return E;this.bumpSpace(),B=this.parseIdentifierIfPossible(),P=E.val}var U=this.tryParsePluralOrSelectOptions(r,o,n,B);if(U.err)return U;var h=this.tryParseArgumentClose(a);if(h.err)return h;var N=ee(a,this.clonePosition());return o==="select"?{val:{type:ge.select,value:t,options:Ki(U.val),location:N},err:null}:{val:{type:ge.plural,value:t,options:Ki(U.val),offset:P,pluralType:o==="plural"?"cardinal":"ordinal",location:N},err:null}}default:return this.error(X.INVALID_ARGUMENT_TYPE,ee(i,l))}},e.prototype.tryParseArgumentClose=function(r){return this.isEOF()||this.char()!==125?this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,ee(r,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var r=0,n=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(X.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,ee(a,this.clonePosition()));this.bump();break}case 123:{r+=1,this.bump();break}case 125:{if(r>0)r-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(r,n){var t=[];try{t=dE(r)}catch{return this.error(X.INVALID_NUMBER_SKELETON,n)}return{val:{type:Tn.number,tokens:t,location:n,parsedOptions:this.shouldParseSkeletons?EE(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(r,n,t,a){for(var s,i=!1,o=[],l=new Set,u=a.value,d=a.location;;){if(u.length===0){var E=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var v=this.tryParseDecimalInteger(X.EXPECT_PLURAL_ARGUMENT_SELECTOR,X.INVALID_PLURAL_ARGUMENT_SELECTOR);if(v.err)return v;d=ee(E,this.clonePosition()),u=this.message.slice(E.offset,this.offset())}else break}if(l.has(u))return this.error(n==="select"?X.DUPLICATE_SELECT_ARGUMENT_SELECTOR:X.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);u==="other"&&(i=!0),this.bumpSpace();var p=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?X.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:X.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,ee(this.clonePosition(),this.clonePosition()));var h=this.parseMessage(r+1,n,t);if(h.err)return h;var f=this.tryParseArgumentClose(p);if(f.err)return f;o.push([u,{value:h.val,location:ee(p,this.clonePosition())}]),l.add(u),this.bumpSpace(),s=this.parseIdentifierIfPossible(),u=s.value,d=s.location}return o.length===0?this.error(n==="select"?X.EXPECT_SELECT_ARGUMENT_SELECTOR:X.EXPECT_PLURAL_ARGUMENT_SELECTOR,ee(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(X.MISSING_OTHER_CLAUSE,ee(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(r,n){var t=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=ee(a,this.clonePosition());return s?(i*=t,hE(i)?{val:i,err:null}:this.error(n,l)):this.error(r,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var r=this.position.offset;if(r>=this.message.length)throw Error("out of bound");var n=Rd(this.message,r);if(n===void 0)throw Error("Offset ".concat(r," is at invalid UTF-16 code unit boundary"));return n},e.prototype.error=function(r,n){return{val:null,err:{kind:r,message:this.message,location:n}}},e.prototype.bump=function(){if(!this.isEOF()){var r=this.char();r===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=r<65536?1:2)}},e.prototype.bumpIf=function(r){if(Di(this.message,r,this.offset())){for(var n=0;n<r.length;n++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(r){var n=this.offset(),t=this.message.indexOf(r,n);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(r){if(this.offset()>r)throw Error("targetOffset ".concat(r," must be greater than or equal to the current offset ").concat(this.offset()));for(r=Math.min(r,this.message.length);;){var n=this.offset();if(n===r)break;if(n>r)throw Error("targetOffset ".concat(r," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Ad(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var r=this.char(),n=this.offset(),t=this.message.charCodeAt(n+(r>=65536?2:1));return t??null},e}();function Ja(e){return e>=97&&e<=122||e>=65&&e<=90}function DE(e){return Ja(e)||e===47}function KE(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Ad(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function LE(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Wa(e){e.forEach(function(r){if(delete r.location,ud(r)||gd(r))for(var n in r.options)delete r.options[n].location,Wa(r.options[n].value);else od(r)&&Ed(r.style)||(ld(r)||dd(r))&&Ya(r.style)?delete r.style.location:kd(r)&&Wa(r.children)})}function PE(e,r){r===void 0&&(r={}),r=q({shouldParseSkeletons:!0,requiresOtherClause:!0},r);var n=new IE(e,r).parse();if(n.err){var t=SyntaxError(X[n.err.kind]);throw t.location=n.err.location,t.originalMessage=n.err.message,t}return r!=null&&r.captureLocation||Wa(n.val),n.val}function or(e,r){var n=r&&r.cache?r.cache:BE,t=r&&r.serializer?r.serializer:wE,a=r&&r.strategy?r.strategy:ME;return a(e,{cache:n,serializer:t})}function FE(e){return e==null||typeof e=="number"||typeof e=="boolean"}function pd(e,r,n,t){var a=FE(t)?t:n(t),s=r.get(a);return typeof s>"u"&&(s=e.call(this,t),r.set(a,s)),s}function bd(e,r,n){var t=Array.prototype.slice.call(arguments,3),a=n(t),s=r.get(a);return typeof s>"u"&&(s=e.apply(this,t),r.set(a,s)),s}function ps(e,r,n,t,a){return n.bind(r,e,t,a)}function ME(e,r){var n=e.length===1?pd:bd;return ps(e,this,n,r.cache.create(),r.serializer)}function VE(e,r){return ps(e,this,bd,r.cache.create(),r.serializer)}function GE(e,r){return ps(e,this,pd,r.cache.create(),r.serializer)}var wE=function(){return JSON.stringify(arguments)};function bs(){this.cache=Object.create(null)}bs.prototype.get=function(e){return this.cache[e]};bs.prototype.set=function(e,r){this.cache[e]=r};var BE={create:function(){return new bs}},lr={variadic:VE,monadic:GE},Er;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Er||(Er={}));var Gr=function(e){ar(r,e);function r(n,t,a){var s=e.call(this,n)||this;return s.code=t,s.originalMessage=a,s}return r.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},r}(Error),Pi=function(e){ar(r,e);function r(n,t,a,s){return e.call(this,'Invalid values for "'.concat(n,'": "').concat(t,'". Options are "').concat(Object.keys(a).join('", "'),'"'),Er.INVALID_VALUE,s)||this}return r}(Gr),jE=function(e){ar(r,e);function r(n,t,a){return e.call(this,'Value for "'.concat(n,'" must be of type ').concat(t),Er.INVALID_VALUE,a)||this}return r}(Gr),UE=function(e){ar(r,e);function r(n,t){return e.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(t,'"'),Er.MISSING_VALUE,t)||this}return r}(Gr),Ve;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Ve||(Ve={}));function HE(e){return e.length<2?e:e.reduce(function(r,n){var t=r[r.length-1];return!t||t.type!==Ve.literal||n.type!==Ve.literal?r.push(n):t.value+=n.value,r},[])}function _d(e){return typeof e=="function"}function Ht(e,r,n,t,a,s,i){if(e.length===1&&Si(e[0]))return[{type:Ve.literal,value:e[0].value}];for(var o=[],l=0,u=e;l<u.length;l++){var d=u[l];if(Si(d)){o.push({type:Ve.literal,value:d.value});continue}if(sE(d)){typeof s=="number"&&o.push({type:Ve.literal,value:n.getNumberFormat(r).format(s)});continue}var E=d.value;if(!(a&&E in a))throw new UE(E,i);var v=a[E];if(aE(d)){(!v||typeof v=="string"||typeof v=="number")&&(v=typeof v=="string"||typeof v=="number"?String(v):""),o.push({type:typeof v=="string"?Ve.literal:Ve.object,value:v});continue}if(ld(d)){var p=typeof d.style=="string"?t.date[d.style]:Ya(d.style)?d.style.parsedOptions:void 0;o.push({type:Ve.literal,value:n.getDateTimeFormat(r,p).format(v)});continue}if(dd(d)){var p=typeof d.style=="string"?t.time[d.style]:Ya(d.style)?d.style.parsedOptions:t.time.medium;o.push({type:Ve.literal,value:n.getDateTimeFormat(r,p).format(v)});continue}if(od(d)){var p=typeof d.style=="string"?t.number[d.style]:Ed(d.style)?d.style.parsedOptions:void 0;p&&p.scale&&(v=v*(p.scale||1)),o.push({type:Ve.literal,value:n.getNumberFormat(r,p).format(v)});continue}if(kd(d)){var h=d.children,f=d.value,y=a[f];if(!_d(y))throw new jE(f,"function",i);var _=Ht(h,r,n,t,a,s),b=y(_.map(function(P){return P.value}));Array.isArray(b)||(b=[b]),o.push.apply(o,b.map(function(P){return{type:typeof P=="string"?Ve.literal:Ve.object,value:P}}))}if(ud(d)){var A=d.options[v]||d.options.other;if(!A)throw new Pi(d.value,v,Object.keys(d.options),i);o.push.apply(o,Ht(A.value,r,n,t,a));continue}if(gd(d)){var A=d.options["=".concat(v)];if(!A){if(!Intl.PluralRules)throw new Gr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Er.MISSING_INTL_API,i);var B=n.getPluralRules(r,{type:d.pluralType}).select(v-(d.offset||0));A=d.options[B]||d.options.other}if(!A)throw new Pi(d.value,v,Object.keys(d.options),i);o.push.apply(o,Ht(A.value,r,n,t,a,v-(d.offset||0)));continue}}return HE(o)}function qE(e,r){return r?q(q(q({},e||{}),r||{}),Object.keys(e).reduce(function(n,t){return n[t]=q(q({},e[t]),r[t]||{}),n},{})):e}function YE(e,r){return r?Object.keys(e).reduce(function(n,t){return n[t]=qE(e[t],r[t]),n},q({},e)):e}function Pa(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,n){e[r]=n}}}}}function xE(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:or(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.NumberFormat).bind.apply(r,dr([void 0],n,!1)))},{cache:Pa(e.number),strategy:lr.variadic}),getDateTimeFormat:or(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.DateTimeFormat).bind.apply(r,dr([void 0],n,!1)))},{cache:Pa(e.dateTime),strategy:lr.variadic}),getPluralRules:or(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.PluralRules).bind.apply(r,dr([void 0],n,!1)))},{cache:Pa(e.pluralRules),strategy:lr.variadic})}}var cd=function(){function e(r,n,t,a){var s=this;if(n===void 0&&(n=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=s.formatToParts(l);if(u.length===1)return u[0].value;var d=u.reduce(function(E,v){return!E.length||v.type!==Ve.literal||typeof E[E.length-1]!="string"?E.push(v.value):E[E.length-1]+=v.value,E},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return Ht(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=n,this.resolvedLocale=e.resolveLocale(n),typeof r=="string"){if(this.message=r,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=mn(i,["formatters"]);this.ast=e.__parse(r,q(q({},o),{locale:this.resolvedLocale}))}else this.ast=r;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=YE(e.formats,t),this.formatters=a&&a.formatters||xE(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(r){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(r);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof r=="string"?r:r[0])}},e.__parse=PE,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Cr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Cr||(Cr={}));var yt=function(e){ar(r,e);function r(n,t,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(t,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,r),s}return r}(Error),CE=function(e){ar(r,e);function r(n,t){return e.call(this,Cr.UNSUPPORTED_FORMATTER,n,t)||this}return r}(yt),$E=function(e){ar(r,e);function r(n,t){return e.call(this,Cr.INVALID_CONFIG,n,t)||this}return r}(yt),Fi=function(e){ar(r,e);function r(n,t){return e.call(this,Cr.MISSING_DATA,n,t)||this}return r}(yt),Ze=function(e){ar(r,e);function r(n,t,a){var s=e.call(this,Cr.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(t,`
`),a)||this;return s.locale=t,s}return r}(yt),Fa=function(e){ar(r,e);function r(n,t,a,s){var i=e.call(this,"".concat(n,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),t,s)||this;return i.descriptor=a,i.locale=t,i}return r}(Ze),JE=function(e){ar(r,e);function r(n,t){var a=e.call(this,Cr.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(t,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=n,a}return r}(yt);function Jr(e,r,n){return n===void 0&&(n={}),r.reduce(function(t,a){return a in e?t[a]=e[a]:a in n&&(t[a]=n[a]),t},{})}var WE=function(e){},zE=function(e){},hd={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:WE,onWarn:zE};function Sd(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function jr(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,n){e[r]=n}}}}}function ZE(e){e===void 0&&(e=Sd());var r=Intl.RelativeTimeFormat,n=Intl.ListFormat,t=Intl.DisplayNames,a=or(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.DateTimeFormat).bind.apply(o,dr([void 0],l,!1)))},{cache:jr(e.dateTime),strategy:lr.variadic}),s=or(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.NumberFormat).bind.apply(o,dr([void 0],l,!1)))},{cache:jr(e.number),strategy:lr.variadic}),i=or(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.PluralRules).bind.apply(o,dr([void 0],l,!1)))},{cache:jr(e.pluralRules),strategy:lr.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:or(function(o,l,u,d){return new cd(o,l,u,q({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},d||{}))},{cache:jr(e.message),strategy:lr.variadic}),getRelativeTimeFormat:or(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,dr([void 0],o,!1)))},{cache:jr(e.relativeTime),strategy:lr.variadic}),getPluralRules:i,getListFormat:or(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,dr([void 0],o,!1)))},{cache:jr(e.list),strategy:lr.variadic}),getDisplayNames:or(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,dr([void 0],o,!1)))},{cache:jr(e.displayNames),strategy:lr.variadic})}}function _s(e,r,n,t){var a=e&&e[r],s;if(a&&(s=a[n]),s)return s;t(new CE("No ".concat(r," format named: ").concat(n)))}function Vt(e,r){return Object.keys(e).reduce(function(n,t){return n[t]=q({timeZone:r},e[t]),n},{})}function Mi(e,r){var n=Object.keys(q(q({},e),r));return n.reduce(function(t,a){return t[a]=q(q({},e[a]||{}),r[a]||{}),t},{})}function Vi(e,r){if(!r)return e;var n=cd.formats;return q(q(q({},n),e),{date:Mi(Vt(n.date,r),Vt(e.date||{},r)),time:Mi(Vt(n.time,r),Vt(e.time||{},r))})}var za=function(e,r,n,t,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,u=e.defaultFormats,d=e.fallbackOnEmptyString,E=e.onError,v=e.timeZone,p=e.defaultRichTextElements;n===void 0&&(n={id:""});var h=n.id,f=n.defaultMessage;id(!!h,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var y=String(h),_=o&&Object.prototype.hasOwnProperty.call(o,y)&&o[y];if(Array.isArray(_)&&_.length===1&&_[0].type===ge.literal)return _[0].value;if(!t&&_&&typeof _=="string"&&!p)return _.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=q(q({},p),t||{}),i=Vi(i,v),u=Vi(u,v),!_){if(d===!1&&_==="")return _;if((!f||s&&s.toLowerCase()!==l.toLowerCase())&&E(new JE(n,s)),f)try{var b=r.getMessageFormat(f,l,u,a);return b.format(t)}catch(A){return E(new Fa('Error formatting default message for: "'.concat(y,'", rendering default message verbatim'),s,n,A)),typeof f=="string"?f:y}return y}try{var b=r.getMessageFormat(_,s,i,q({formatters:r},a||{}));return b.format(t)}catch(A){E(new Fa('Error formatting message: "'.concat(y,'", using ').concat(f?"default message":"id"," as fallback."),s,n,A))}if(f)try{var b=r.getMessageFormat(f,l,u,a);return b.format(t)}catch(A){E(new Fa('Error formatting the default message for: "'.concat(y,'", rendering message verbatim'),s,n,A))}return typeof _=="string"?_:typeof f=="string"?f:y},Nd=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function oa(e,r,n,t){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;t===void 0&&(t={});var l=t.format,u=q(q({},o&&{timeZone:o}),l&&_s(s,r,l,i)),d=Jr(t,Nd,u);return r==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=q(q({},d),{hour:"numeric",minute:"numeric"})),n(a,d)}function XE(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return oa(e,"date",r,i).format(o)}catch(l){e.onError(new Ze("Error formatting date.",e.locale,l))}return String(o)}function QE(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return oa(e,"time",r,i).format(o)}catch(l){e.onError(new Ze("Error formatting time.",e.locale,l))}return String(o)}function ev(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],s=n[1],i=n[2],o=i===void 0?{}:i,l=e.timeZone,u=e.locale,d=e.onError,E=Jr(o,Nd,l?{timeZone:l}:{});try{return r(u,E).formatRange(a,s)}catch(v){d(new Ze("Error formatting date time range.",e.locale,v))}return String(a)}function rv(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return oa(e,"date",r,i).formatToParts(o)}catch(l){e.onError(new Ze("Error formatting date.",e.locale,l))}return[]}function nv(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return oa(e,"time",r,i).formatToParts(o)}catch(l){e.onError(new Ze("Error formatting time.",e.locale,l))}return[]}var tv=["style","type","fallback","languageDisplay"];function av(e,r,n,t){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new Gr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Er.MISSING_INTL_API));var o=Jr(t,tv);try{return r(a,o).of(n)}catch(l){s(new Ze("Error formatting display name.",a,l))}}var sv=["type","style"],Gi=Date.now();function iv(e){return"".concat(Gi,"_").concat(e,"_").concat(Gi)}function ov(e,r,n,t){t===void 0&&(t={});var a=Od(e,r,n,t).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function Od(e,r,n,t){var a=e.locale,s=e.onError;t===void 0&&(t={});var i=Intl.ListFormat;i||s(new Gr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Er.MISSING_INTL_API));var o=Jr(t,sv);try{var l={},u=n.map(function(d,E){if(typeof d=="object"){var v=iv(E);return l[v]=d,v}return String(d)});return r(a,o).formatToParts(u).map(function(d){return d.type==="literal"?d:q(q({},d),{value:l[d.value]||d.value})})}catch(d){s(new Ze("Error formatting list.",a,d))}return n}var lv=["type"];function dv(e,r,n,t){var a=e.locale,s=e.onError;t===void 0&&(t={}),Intl.PluralRules||s(new Gr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Er.MISSING_INTL_API));var i=Jr(t,lv);try{return r(a,i).select(n)}catch(o){s(new Ze("Error formatting plural.",a,o))}return"other"}var uv=["numeric","style"];function gv(e,r,n){var t=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=!!i&&_s(a,"relative",i,s)||{},l=Jr(n,uv,o);return r(t,l)}function kv(e,r,n,t,a){a===void 0&&(a={}),t||(t="second");var s=Intl.RelativeTimeFormat;s||e.onError(new Gr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Er.MISSING_INTL_API));try{return gv(e,r,a).format(n,t)}catch(i){e.onError(new Ze("Error formatting relative time.",e.locale,i))}return String(n)}var Ev=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Id(e,r,n){var t=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=i&&_s(a,"number",i,s)||{},l=Jr(n,Ev,o);return r(t,l)}function vv(e,r,n,t){t===void 0&&(t={});try{return Id(e,r,t).format(n)}catch(a){e.onError(new Ze("Error formatting number.",e.locale,a))}return String(n)}function mv(e,r,n,t){t===void 0&&(t={});try{return Id(e,r,t).formatToParts(n)}catch(a){e.onError(new Ze("Error formatting number.",e.locale,a))}return[]}function Tv(e){var r=e?e[Object.keys(e)[0]]:void 0;return typeof r=="string"}function fv(e){e.onWarn&&e.defaultRichTextElements&&Tv(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function Rv(e,r){var n=ZE(r),t=q(q({},hd),e),a=t.locale,s=t.defaultLocale,i=t.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new Fi('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new Fi('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new $E('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),fv(t),q(q({},t),{formatters:n,formatNumber:vv.bind(null,t,n.getNumberFormat),formatNumberToParts:mv.bind(null,t,n.getNumberFormat),formatRelativeTime:kv.bind(null,t,n.getRelativeTimeFormat),formatDate:XE.bind(null,t,n.getDateTimeFormat),formatDateToParts:rv.bind(null,t,n.getDateTimeFormat),formatTime:QE.bind(null,t,n.getDateTimeFormat),formatDateTimeRange:ev.bind(null,t,n.getDateTimeFormat),formatTimeToParts:nv.bind(null,t,n.getDateTimeFormat),formatPlural:dv.bind(null,t,n.getPluralRules),formatMessage:za.bind(null,t,n),$t:za.bind(null,t,n),formatList:ov.bind(null,t,n.getListFormat),formatListToParts:Od.bind(null,t,n.getListFormat),formatDisplayName:av.bind(null,t,n.getDisplayNames)})}function yv(e){id(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Av=q(q({},hd),{textComponent:T.Fragment});function pv(e){return function(r){return e(T.Children.toArray(r))}}function wi(e,r){if(e===r)return!0;if(!e||!r)return!1;var n=Object.keys(e),t=Object.keys(r),a=n.length;if(t.length!==a)return!1;for(var s=0;s<a;s++){var i=n[s];if(e[i]!==r[i]||!Object.prototype.hasOwnProperty.call(r,i))return!1}return!0}var cs=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=T.createContext(null)):T.createContext(null);cs.Consumer;var bv=cs.Provider,_v=bv,cv=cs;function sr(){var e=T.useContext(cv);return yv(e),e}var Za;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Za||(Za={}));var Xa;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Xa||(Xa={}));function Dd(e){var r=function(n){var t=sr(),a=n.value,s=n.children,i=mn(n,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?t.formatDateToParts(o,i):t.formatTimeToParts(o,i);return s(l)};return r.displayName=Xa[e],r}function At(e){var r=function(n){var t=sr(),a=n.value,s=n.children,i=mn(n,["value","children"]),o=t[e](a,i);if(typeof s=="function")return s(o);var l=t.textComponent||T.Fragment;return T.createElement(l,null,o)};return r.displayName=Za[e],r}function Kd(e){return e&&Object.keys(e).reduce(function(r,n){var t=e[n];return r[n]=_d(t)?pv(t):t,r},{})}var Bi=function(e,r,n,t){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=Kd(t),o=za.apply(void 0,dr([e,r,n,i],a,!1));return Array.isArray(o)?T.Children.toArray(o):o},hv=function(e,r){var n=e.defaultRichTextElements,t=mn(e,["defaultRichTextElements"]),a=Kd(n),s=Rv(q(q(q({},Av),t),{defaultRichTextElements:a}),r),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return q(q({},s),{formatMessage:Bi.bind(null,i,s.formatters),$t:Bi.bind(null,i,s.formatters)})};function Sv(e,r){var n=e.values,t=mn(e,["values"]),a=r.values,s=mn(r,["values"]);return wi(a,n)&&wi(t,s)}function Ld(e){var r=sr(),n=r.formatMessage,t=r.textComponent,a=t===void 0?T.Fragment:t,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,E=d===void 0?a:d,v=e.ignoreTag,p={id:s,description:i,defaultMessage:o},h=n(p,l,{ignoreTag:v});return typeof u=="function"?u(Array.isArray(h)?h:[h]):E?T.createElement(E,null,T.Children.toArray(h)):T.createElement(T.Fragment,null,h)}Ld.displayName="FormattedMessage";var ye=T.memo(Ld,Sv);ye.displayName="MemoizedFormattedMessage";At("formatDate");At("formatTime");At("formatNumber");At("formatList");At("formatDisplayName");Dd("formatDate");Dd("formatTime");const Pd=e=>`${Number(e).toLocaleString("nb-NO").replace(/,|\s/g," ")} kr`;var la=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fd={exports:{}};(function(e,r){(function(n,t){e.exports=t()})(la,function(){var n="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(f){var y={date:f,utc:!0,args:arguments};return new i(y)},l.utc=function(f){var y=o(this.toDate(),{locale:this.$L,utc:!0});return f?y.add(this.utcOffset(),n):y},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(f){f.utc&&(this.$u=!0),this.$utils().u(f.$offset)||(this.$offset=f.$offset),u.call(this,f)};var d=l.init;l.init=function(){if(this.$u){var f=this.$d;this.$y=f.getUTCFullYear(),this.$M=f.getUTCMonth(),this.$D=f.getUTCDate(),this.$W=f.getUTCDay(),this.$H=f.getUTCHours(),this.$m=f.getUTCMinutes(),this.$s=f.getUTCSeconds(),this.$ms=f.getUTCMilliseconds()}else d.call(this)};var E=l.utcOffset;l.utcOffset=function(f,y){var _=this.$utils().u;if(_(f))return this.$u?0:_(this.$offset)?E.call(this):this.$offset;if(typeof f=="string"&&(f=function(P){P===void 0&&(P="");var U=P.match(t);if(!U)return null;var N=(""+U[0]).match(a)||["-",0,0],S=N[0],V=60*+N[1]+ +N[2];return V===0?0:S==="+"?V:-V}(f),f===null))return this;var b=Math.abs(f)<=16?60*f:f,A=this;if(y)return A.$offset=b,A.$u=f===0,A;if(f!==0){var B=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(A=this.local().add(b+B,n)).$offset=b,A.$x.$localOffset=B}else A=this.utc();return A};var v=l.format;l.format=function(f){var y=f||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return v.call(this,y)},l.valueOf=function(){var f=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*f},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var p=l.toDate;l.toDate=function(f){return f==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():p.call(this)};var h=l.diff;l.diff=function(f,y,_){if(f&&this.$u===f.$u)return h.call(this,f,y,_);var b=this.local(),A=o(f).local();return h.call(b,A,y,_)}}})})(Fd);var Nv=Fd.exports;const Ov=hs(Nv);var Md={exports:{}};(function(e,r){(function(n,t){e.exports=t()})(la,function(){var n,t,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,E=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:u,months:d,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},p=function(U){return U instanceof B},h=function(U,N,S){return new B(U,S,N.$l)},f=function(U){return t.p(U)+"s"},y=function(U){return U<0},_=function(U){return y(U)?Math.ceil(U):Math.floor(U)},b=function(U){return Math.abs(U)},A=function(U,N){return U?y(U)?{negative:!0,format:""+b(U)+N}:{negative:!1,format:""+U+N}:{negative:!1,format:""}},B=function(){function U(S,V,j){var Y=this;if(this.$d={},this.$l=j,S===void 0&&(this.$ms=0,this.parseFromMilliseconds()),V)return h(S*v[f(V)],this);if(typeof S=="number")return this.$ms=S,this.parseFromMilliseconds(),this;if(typeof S=="object")return Object.keys(S).forEach(function(H){Y.$d[f(H)]=S[H]}),this.calMilliseconds(),this;if(typeof S=="string"){var D=S.match(E);if(D){var F=D.slice(2).map(function(H){return H!=null?Number(H):0});return this.$d.years=F[0],this.$d.months=F[1],this.$d.weeks=F[2],this.$d.days=F[3],this.$d.hours=F[4],this.$d.minutes=F[5],this.$d.seconds=F[6],this.calMilliseconds(),this}}return this}var N=U.prototype;return N.calMilliseconds=function(){var S=this;this.$ms=Object.keys(this.$d).reduce(function(V,j){return V+(S.$d[j]||0)*v[j]},0)},N.parseFromMilliseconds=function(){var S=this.$ms;this.$d.years=_(S/u),S%=u,this.$d.months=_(S/d),S%=d,this.$d.days=_(S/o),S%=o,this.$d.hours=_(S/i),S%=i,this.$d.minutes=_(S/s),S%=s,this.$d.seconds=_(S/a),S%=a,this.$d.milliseconds=S},N.toISOString=function(){var S=A(this.$d.years,"Y"),V=A(this.$d.months,"M"),j=+this.$d.days||0;this.$d.weeks&&(j+=7*this.$d.weeks);var Y=A(j,"D"),D=A(this.$d.hours,"H"),F=A(this.$d.minutes,"M"),H=this.$d.seconds||0;this.$d.milliseconds&&(H+=this.$d.milliseconds/1e3,H=Math.round(1e3*H)/1e3);var $=A(H,"S"),Q=S.negative||V.negative||Y.negative||D.negative||F.negative||$.negative,ue=D.format||F.format||$.format?"T":"",_e=(Q?"-":"")+"P"+S.format+V.format+Y.format+ue+D.format+F.format+$.format;return _e==="P"||_e==="-P"?"P0D":_e},N.toJSON=function(){return this.toISOString()},N.format=function(S){var V=S||"YYYY-MM-DDTHH:mm:ss",j={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return V.replace(l,function(Y,D){return D||String(j[Y])})},N.as=function(S){return this.$ms/v[f(S)]},N.get=function(S){var V=this.$ms,j=f(S);return j==="milliseconds"?V%=1e3:V=j==="weeks"?_(V/v[j]):this.$d[j],V||0},N.add=function(S,V,j){var Y;return Y=V?S*v[f(V)]:p(S)?S.$ms:h(S,this).$ms,h(this.$ms+Y*(j?-1:1),this)},N.subtract=function(S,V){return this.add(S,V,!0)},N.locale=function(S){var V=this.clone();return V.$l=S,V},N.clone=function(){return h(this.$ms,this)},N.humanize=function(S){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!S)},N.valueOf=function(){return this.asMilliseconds()},N.milliseconds=function(){return this.get("milliseconds")},N.asMilliseconds=function(){return this.as("milliseconds")},N.seconds=function(){return this.get("seconds")},N.asSeconds=function(){return this.as("seconds")},N.minutes=function(){return this.get("minutes")},N.asMinutes=function(){return this.as("minutes")},N.hours=function(){return this.get("hours")},N.asHours=function(){return this.as("hours")},N.days=function(){return this.get("days")},N.asDays=function(){return this.as("days")},N.weeks=function(){return this.get("weeks")},N.asWeeks=function(){return this.as("weeks")},N.months=function(){return this.get("months")},N.asMonths=function(){return this.as("months")},N.years=function(){return this.get("years")},N.asYears=function(){return this.as("years")},U}(),P=function(U,N,S){return U.add(N.years()*S,"y").add(N.months()*S,"M").add(N.days()*S,"d").add(N.hours()*S,"h").add(N.minutes()*S,"m").add(N.seconds()*S,"s").add(N.milliseconds()*S,"ms")};return function(U,N,S){n=S,t=S().$utils(),S.duration=function(Y,D){var F=S.locale();return h(Y,{$l:F},D)},S.isDuration=p;var V=N.prototype.add,j=N.prototype.subtract;N.prototype.add=function(Y,D){return p(Y)?P(this,Y,1):V.bind(this)(Y,D)},N.prototype.subtract=function(Y,D){return p(Y)?P(this,Y,-1):j.bind(this)(Y,D)}}})})(Md);var Iv=Md.exports;const Dv=hs(Iv);var Vd={exports:{}};(function(e,r){(function(n,t){e.exports=t()})(la,function(){var n="day";return function(t,a,s){var i=function(u){return u.add(4-u.isoWeekday(),n)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),n);var d,E,v,p,h=i(this),f=(d=this.isoWeekYear(),E=this.$u,v=(E?s.utc:s)().year(d).startOf("year"),p=4-v.isoWeekday(),v.isoWeekday()>4&&(p+=7),v.add(p,n));return h.diff(f,"week")+1},o.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var l=o.startOf;o.startOf=function(u,d){var E=this.$utils(),v=!!E.u(d)||d;return E.p(u)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(u,d)}}})})(Vd);var Kv=Vd.exports;const Lv=hs(Kv);var Pv={exports:{}};(function(e,r){(function(n,t){e.exports=t(ft)})(la,function(n){function t(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=t(n),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})})(Pv);const Fv=Sd(),Me=e=>hv({locale:"nb-NO",messages:e},Fv),Gd={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},Mv="DD.MM.YYYY";ft.extend(Ov);ft.extend(Lv);ft.extend(Dv);Me(Gd);const $r=e=>e==null?e:e.replace(/&#?((?!(60|62);)\w+);/g,(r,n)=>{if(Number.isNaN(parseInt(n,10))){const t={quot:34,amp:38,apos:39,nbsp:160,copy:169,reg:174,deg:176,frasl:47,trade:8482,euro:8364,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,permil:8240,lsaquo:8249,rsaquo:8250,spades:9824,clubs:9827,hearts:9829,diams:9830,oline:8254,larr:8592,uarr:8593,rarr:8594,darr:8595,hellip:133,ndash:150,mdash:151,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,brkbar:166,sect:167,uml:168,die:168,ordf:170,laquo:171,not:172,shy:173,macr:175,hibar:175,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Alpha:913,alpha:945,Beta:914,beta:946,Gamma:915,gamma:947,Delta:916,delta:948,Epsilon:917,epsilon:949,Zeta:918,zeta:950,Eta:919,eta:951,Theta:920,theta:952,Iota:921,iota:953,Kappa:922,kappa:954,Lambda:923,lambda:955,Mu:924,mu:956,Nu:925,nu:957,Xi:926,xi:958,Omicron:927,omicron:959,Pi:928,pi:960,Rho:929,rho:961,Sigma:931,sigma:963,Tau:932,tau:964,Upsilon:933,upsilon:965,Phi:934,phi:966,Chi:935,chi:967,Psi:936,psi:968,Omega:937,omega:969}[n];return t!==void 0?String.fromCharCode(t):r}return String.fromCharCode(n)}),Ss=e=>e.toString().replace(new RegExp("\\p{Dash_Punctuation}","gu"),"-").replace(/[\p{Space_Separator}\t]/gu," ").replace(/[“”]/g,'"').replace(/[‘’`]/g,"'").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Gt=Me(Gd),Ns=e=>{if(!e)return Gt.formatMessage({id:"Malform.Bokmal"});switch(e){case"NN":return Gt.formatMessage({id:"Malform.Nynorsk"});case"EN":return Gt.formatMessage({id:"Malform.Engelsk"});default:return Gt.formatMessage({id:"Malform.Bokmal"})}};function Vv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wd={exports:{}},In={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ji;function Gv(){if(ji)return In;ji=1;var e=c,r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var d,E={},v=null,p=null;u!==void 0&&(v=""+u),l.key!==void 0&&(v=""+l.key),l.ref!==void 0&&(p=l.ref);for(d in l)t.call(l,d)&&!s.hasOwnProperty(d)&&(E[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)E[d]===void 0&&(E[d]=l[d]);return{$$typeof:r,type:o,key:v,ref:p,props:E,_owner:a.current}}return In.Fragment=n,In.jsx=i,In.jsxs=i,In}wd.exports=Gv();var ne=wd.exports;const Wr={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};Me(Wr);Me(Wr);var Bd={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var r={}.hasOwnProperty;function n(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,t.call(this,o)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)r.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Bd);var wv=Bd.exports;const xe=Vv(wv),Bv="_borderbox_hicl4_1",jv="_error_hicl4_4",Uv="_warning_hicl4_7",Hv={borderbox:Bv,error:jv,warning:Uv};xe.bind(Hv);const qv="_aksjonspunkt_kn1hn_1",Yv="_erAksjonspunktApent_kn1hn_4",xv="_erIkkeGodkjentAvBeslutter_kn1hn_8",Cv={aksjonspunkt:qv,erAksjonspunktApent:Yv,erIkkeGodkjentAvBeslutter:xv};xe.bind(Cv);Me(Wr);const Ui=Me(Wr),$v=({text:e,okButtonText:r,showModal:n,cancel:t,submit:a})=>ne.jsxs(un,{width:"small",open:n,"aria-label":e,onClose:t,children:[ne.jsx(un.Body,{children:ne.jsx(Rs,{size:"small",children:e})}),ne.jsxs(un.Footer,{children:[ne.jsx(vn,{variant:"primary",size:"small",onClick:a,autoFocus:!0,type:"button",children:r||Ui.formatMessage({id:"OkAvbrytModal.Ok"})}),ne.jsx(vn,{variant:"secondary",size:"small",onClick:t,type:"button",children:Ui.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),Jv="_tooltip_h8akz_1",Wv="_tooltiptext_h8akz_5",zv="_left_h8akz_22",Zv="_top_h8akz_27",Xv="_right_h8akz_30",Qv="_bottom_h8akz_34",em="_showTooltip_h8akz_1",Qa={tooltip:Jv,tooltiptext:Wv,left:zv,top:Zv,right:Xv,bottom:Qv,showTooltip:em},rm=xe.bind(Qa),nm=({children:e,content:r,alignRight:n=!1,alignLeft:t=!1,alignTop:a=!1,alignBottom:s=!1})=>ne.jsxs("div",{className:Qa.tooltip,children:[ne.jsx("span",{className:rm(Qa.tooltiptext,{right:n||!t&&!a&&!s,left:t,top:a,bottom:s}),children:r}),e]}),tm=c.forwardRef(({onClick:e=()=>{},onMouseDown:r,tabIndex:n=-1,className:t="",src:a,srcHover:s,alt:i,onKeyDown:o,tooltip:l,alignTooltipLeft:u=!1},d)=>{const[E,v]=T.useState(!1),p=T.useCallback(()=>{v(!0)},[]),h=T.useCallback(()=>{v(!1)},[]),f=T.useCallback(b=>{(b.key==="Enter"||b.key===" ")&&(o&&o(b),b.preventDefault())},[]),y=s&&E?s:a,_=ne.jsx("img",{ref:d,className:t,src:y,alt:i,tabIndex:n,onMouseOver:p,onMouseOut:h,onFocus:p,onBlur:h,onKeyDown:f,onMouseDown:r,onClick:e});return l?ne.jsx(nm,{content:l,alignLeft:u,children:_}):_});tm.displayName="Image";const am="_flexColumnNew_1vdv1_1",sm={flexColumnNew:am},im=xe.bind(sm),Pe=({children:e,className:r})=>ne.jsx("div",{className:im("flexColumnNew",r),children:e}),om="_flexRow_1yf0y_1",lm="_spaceBetween_1yf0y_9",dm="_alignItemsToBaseline_1yf0y_12",um="_alignItemsToFlexEnd_1yf0y_15",gm="_justifyItemsToFlexEnd_1yf0y_18",km="_wrap_1yf0y_21",Em={flexRow:om,spaceBetween:lm,alignItemsToBaseline:dm,alignItemsToFlexEnd:um,justifyItemsToFlexEnd:gm,wrap:km},vm=xe.bind(Em),qr=({children:e,spaceBetween:r=!1,alignItemsToBaseline:n=!1,alignItemsToFlexEnd:t=!1,wrap:a=!1,className:s})=>ne.jsx("div",{className:vm("flexRow",{spaceBetween:r},{alignItemsToBaseline:n},{alignItemsToFlexEnd:t},{wrap:a},s),children:e}),mm="_flexContainer_1dk1o_1",Tm="_fluid_1dk1o_6",fm="_fullHeight_1dk1o_9",Rm="_flexWrap_1dk1o_17",ym={flexContainer:mm,fluid:Tm,fullHeight:fm,flexWrap:Rm},Am=xe.bind(ym),Yr=({children:e,wrap:r=!1,fullHeight:n=!1})=>ne.jsx("div",{className:Am("flexContainer","fluid",{flexWrap:r,fullHeight:n}),children:e});Me(Wr);const pm="_row_1lxv9_1",bm="_harHover_1lxv9_4",_m="_rowHeader_1lxv9_7",cm="_grayHeader_1lxv9_12",hm="_rowContent_1lxv9_15",Sm="_selected_1lxv9_18",Nm="_bold_1lxv9_22",Om="_dashedBottomBorder_1lxv9_25",Im="_solidBottomBorder_1lxv9_28",Dm="_apLeftBorder_1lxv9_31",Km="_noBottomBorder_1lxv9_34",jd={row:pm,harHover:bm,rowHeader:_m,grayHeader:cm,rowContent:hm,selected:Sm,bold:Nm,dashedBottomBorder:Om,solidBottomBorder:Im,apLeftBorder:Dm,noBottomBorder:Km},Lm=xe.bind(jd),Pm=(e,r,n)=>t=>{e&&t.button===0&&e(t,r,n)},Ud=e=>e.tagName==="TR"?e:Ud(e.parentElement),Hi=(e,r)=>{const n=Ud(e.target),t=(r?n.nextSibling:n.previousSibling)||n;t&&(t.focus(),e.preventDefault())},Fm=(e,r,n,t)=>a=>{a.key==="ArrowDown"?Hi(a,!0):a.key==="ArrowUp"?Hi(a,!1):r&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(r(a,n,t),a.preventDefault()):e&&r&&a.target.tagName!=="TD"&&a.key==="Shift"&&(r(a),a.preventDefault())},Mm=e=>r=>{e&&r.target.tagName!=="TD"&&r.key==="Shift"&&(e(r),r.preventDefault())},Vm=({id:e,model:r,isHeader:n=!1,hasGrayHeader:t=!1,onMouseDown:a,onKeyDown:s,children:i,noHover:o=!1,isSelected:l=!1,isBold:u=!1,isDashedBottomBorder:d=!1,isSolidBottomBorder:E=!1,isApLeftBorder:v=!1,className:p,useMultiselect:h=!1,hasNoBottomBorder:f=!1})=>ne.jsx("tr",{className:Lm(p,jd.row,{rowHeader:n,grayHeader:t,rowContent:!n&&!o,selected:l,harHover:!o,bold:u,dashedBottomBorder:d,solidBottomBorder:E,noBottomBorder:f,apLeftBorder:v}),onMouseDown:Pm(a,e,r),onKeyDown:Fm(h,s,e,r),onKeyUp:h?Mm(s):void 0,tabIndex:0,children:i}),Gm="_columnStyle_1f13u_1",Hd={columnStyle:Gm},wm=xe.bind(Hd),Ma=({children:e="",className:r,hidden:n=!1,colspanAll:t=!1})=>n?null:ne.jsx("td",{className:wm(Hd.columnStyle,r),colSpan:t?100:void 0,children:e}),Bm="_table_2cnpl_1",jm="_rowHover_2cnpl_25",Um={table:Bm,rowHover:jm},Hm=xe.bind(Um),qm="EMPTY",Ym=c.forwardRef(({headerTextCodes:e=[],headerColumnContent:r=[],classNameTable:n="",noHover:t=!1,hasGrayHeader:a=!1,children:s},i)=>ne.jsxs("table",{ref:i,className:Hm("table",{[n]:n,rowHover:!t}),children:[ne.jsx("thead",{children:ne.jsxs(Vm,{isHeader:!0,noHover:t,hasGrayHeader:a,children:[e.map(o=>typeof o=="string"&&o.startsWith(qm)?ne.jsx(Ma,{children:" "},o):ne.jsx(Ma,{children:ne.jsx(ye,{id:o})},o)),r.map(o=>ne.jsx(Ma,{children:o},o.key))]})}),ne.jsx("tbody",{children:Array.isArray(s)?c.Children.map(s,o=>c.cloneElement(o,{noHover:t})):c.cloneElement(s,{noHover:t})})]}));Ym.displayName="Table";const xm="_hidden_1pb4f_1",Cm="_active_1pb4f_8",$m="_activeRow_1pb4f_15 _active_1pb4f_8",Jm="_toggleIcon_1pb4f_19",Wm="_colTopPadding_1pb4f_22",zm={hidden:xm,active:Cm,activeRow:$m,toggleIcon:Jm,colTopPadding:Wm};xe.bind(zm);Me(Wr);const Zm="_fourPx_qda5k_1",Xm="_eightPx_qda5k_4",Qm="_sixteenPx_qda5k_7",eT="_twentyPx_qda5k_10",rT="_thirtyTwoPx_qda5k_13",nT="_fourtyPx_qda5k_16",tT={fourPx:Zm,eightPx:Xm,sixteenPx:Qm,twentyPx:eT,thirtyTwoPx:rT,fourtyPx:nT},aT=xe.bind(tT),pe=({fourPx:e=!1,eightPx:r=!1,sixteenPx:n=!1,twentyPx:t=!1,thirtyTwoPx:a=!1,fourtyPx:s=!1})=>ne.jsx("div",{className:aT({fourPx:e,eightPx:r,sixteenPx:n,twentyPx:t,thirtyTwoPx:a,fourtyPx:s})});Me(Wr);const sT="_divider_1t980_1",iT="_dividerParagraf_1t980_8",oT="_leftPanel_1t980_11",lT="_rightPanel_1t980_14",es={divider:sT,dividerParagraf:iT,leftPanel:oT,rightPanel:lT},dT=xe.bind(es),uT=({spaceUnder:e=!1,spaceAbove:r=!1,leftPanel:n=!1,rightPanel:t=!1,dividerParagraf:a=!1,className:s})=>ne.jsxs(ne.Fragment,{children:[r&&ne.jsx(pe,{thirtyTwoPx:!0}),ne.jsx("div",{className:dT(s,{leftPanel:n,rightPanel:t}),children:ne.jsx("div",{className:a?es.dividerParagraf:es.divider})}),e&&ne.jsx(pe,{thirtyTwoPx:!0})]}),gT="_editedIcon_ulrjl_1",kT={editedIcon:gT},ET=xe.bind(kT),qd=({className:e=""})=>ne.jsx("span",{"data-testid":"editedIcon",className:ET("editedIcon",e),children:ne.jsx(ak,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});var vT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yd={exports:{}},Dn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qi;function TT(){if(qi)return Dn;qi=1;var e=c,r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var d,E={},v=null,p=null;u!==void 0&&(v=""+u),l.key!==void 0&&(v=""+l.key),l.ref!==void 0&&(p=l.ref);for(d in l)t.call(l,d)&&!s.hasOwnProperty(d)&&(E[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)E[d]===void 0&&(E[d]=l[d]);return{$$typeof:r,type:o,key:v,ref:p,props:E,_owner:a.current}}return Dn.Fragment=n,Dn.jsx=i,Dn.jsxs=i,Dn}Yd.exports=TT();var We=Yd.exports;const fT=e=>e.reduce((r,n,t)=>({...r,[t]:a=>n(a)||!0}),{}),RT=(e,r)=>{const n=r.split(".").reduce((t,a)=>t!==void 0?t[a]:t,e);return n==null?void 0:n.message};var xd={exports:{}};(function(e,r){(function(n,t){e.exports=t()})(vT,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,l={},u=function(y){return(y=+y)+(y>68?1900:2e3)},d=function(y){return function(_){this[y]=+_}},E=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(_){if(!_||_==="Z")return 0;var b=_.match(/([+-]|\d\d)/g),A=60*b[1]+(+b[2]||0);return A===0?0:b[0]==="+"?-A:A}(y)}],v=function(y){var _=l[y];return _&&(_.indexOf?_:_.s.concat(_.f))},p=function(y,_){var b,A=l.meridiem;if(A){for(var B=1;B<=24;B+=1)if(y.indexOf(A(B,0,_))>-1){b=B>12;break}}else b=y===(_?"pm":"PM");return b},h={A:[o,function(y){this.afternoon=p(y,!1)}],a:[o,function(y){this.afternoon=p(y,!0)}],Q:[a,function(y){this.month=3*(y-1)+1}],S:[a,function(y){this.milliseconds=100*+y}],SS:[s,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[i,d("seconds")],ss:[i,d("seconds")],m:[i,d("minutes")],mm:[i,d("minutes")],H:[i,d("hours")],h:[i,d("hours")],HH:[i,d("hours")],hh:[i,d("hours")],D:[i,d("day")],DD:[s,d("day")],Do:[o,function(y){var _=l.ordinal,b=y.match(/\d+/);if(this.day=b[0],_)for(var A=1;A<=31;A+=1)_(A).replace(/\[|\]/g,"")===y&&(this.day=A)}],w:[i,d("week")],ww:[s,d("week")],M:[i,d("month")],MM:[s,d("month")],MMM:[o,function(y){var _=v("months"),b=(v("monthsShort")||_.map(function(A){return A.slice(0,3)})).indexOf(y)+1;if(b<1)throw new Error;this.month=b%12||b}],MMMM:[o,function(y){var _=v("months").indexOf(y)+1;if(_<1)throw new Error;this.month=_%12||_}],Y:[/[+-]?\d+/,d("year")],YY:[s,function(y){this.year=u(y)}],YYYY:[/\d{4}/,d("year")],Z:E,ZZ:E};function f(y){var _,b;_=y,b=l&&l.formats;for(var A=(y=_.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(j,Y,D){var F=D&&D.toUpperCase();return Y||b[D]||n[D]||b[F].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(H,$,Q){return $||Q.slice(1)})})).match(t),B=A.length,P=0;P<B;P+=1){var U=A[P],N=h[U],S=N&&N[0],V=N&&N[1];A[P]=V?{regex:S,parser:V}:U.replace(/^\[|\]$/g,"")}return function(j){for(var Y={},D=0,F=0;D<B;D+=1){var H=A[D];if(typeof H=="string")F+=H.length;else{var $=H.regex,Q=H.parser,ue=j.slice(F),_e=$.exec(ue)[0];Q.call(Y,_e),j=j.replace(_e,"")}}return function(Le){var Ke=Le.afternoon;if(Ke!==void 0){var Oe=Le.hours;Ke?Oe<12&&(Le.hours+=12):Oe===12&&(Le.hours=0),delete Le.afternoon}}(Y),Y}}return function(y,_,b){b.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(u=y.parseTwoDigitYear);var A=_.prototype,B=A.parse;A.parse=function(P){var U=P.date,N=P.utc,S=P.args;this.$u=N;var V=S[1];if(typeof V=="string"){var j=S[2]===!0,Y=S[3]===!0,D=j||Y,F=S[2];Y&&(F=S[2]),l=this.$locale(),!j&&F&&(l=b.Ls[F]),this.$d=function(ue,_e,Le,Ke){try{if(["x","X"].indexOf(_e)>-1)return new Date((_e==="X"?1e3:1)*ue);var Oe=f(_e)(ue),Zr=Oe.year,Xr=Oe.month,Nt=Oe.day,ca=Oe.hours,bn=Oe.minutes,Ot=Oe.seconds,_n=Oe.milliseconds,cn=Oe.zone,It=Oe.week,Qr=new Date,hn=Nt||(Zr||Xr?1:Qr.getDate()),en=Zr||Qr.getFullYear(),wr=0;Zr&&!Xr||(wr=Xr>0?Xr-1:Qr.getMonth());var Sn,Dt=ca||0,Kt=bn||0,g=Ot||0,m=_n||0;return cn?new Date(Date.UTC(en,wr,hn,Dt,Kt,g,m+60*cn.offset*1e3)):Le?new Date(Date.UTC(en,wr,hn,Dt,Kt,g,m)):(Sn=new Date(en,wr,hn,Dt,Kt,g,m),It&&(Sn=Ke(Sn).week(It).toDate()),Sn)}catch{return new Date("")}}(U,V,N,b),this.init(),F&&F!==!0&&(this.$L=this.locale(F).$L),D&&U!=this.format(V)&&(this.$d=new Date("")),l={}}else if(V instanceof Array)for(var H=V.length,$=1;$<=H;$+=1){S[1]=V[$-1];var Q=b.apply(this,S);if(Q.isValid()){this.$d=Q.$d,this.$L=Q.$L,this.init();break}$===H&&(this.$d=new Date(""))}else B.call(this,P)}}})})(xd);var yT=xd.exports;const AT=mT(yT),pT="_readOnlyContainer_v0eco_1",bT="_readOnlyContent_v0eco_4",_T="_readOnlyContentCenter_v0eco_7",cT="_textarea_v0eco_11",hT="_space_v0eco_15",wt={readOnlyContainer:pT,readOnlyContent:bT,readOnlyContentCenter:_T,textarea:cT,space:hT},ST=e=>e!=null&&e!=="",NT=({label:e,value:r,isEdited:n=!1,type:t,hideLabel:a,size:s})=>ST(r)?We.jsxs("div",{className:wt.readOnlyContainer,children:[e&&!a&&We.jsx(Ue,{size:"small",children:e}),We.jsx("div",{className:t==="textarea"?wt.textarea:"",children:We.jsxs(Yl,{className:wt.readOnlyContent,size:s,children:[r,n&&We.jsx(qd,{className:wt.space})]})})]}):null;ft.extend(AT);const OT="_textAreaFieldWithBadges_bdz0b_1",IT="_etikettWrapper_bdz0b_4",Yi={textAreaFieldWithBadges:OT,etikettWrapper:IT},Zt=({name:e,label:r,readOnly:n,maxLength:t,badges:a,validate:s=[],parse:i=E=>E,className:o,description:l,isEdited:u,...d})=>{const{formState:{errors:E}}=fn(),{field:v}=hg({name:e,rules:{validate:T.useMemo(()=>fT(s),[s])}});return n?We.jsx(NT,{label:r,value:v.value,type:"textarea",isEdited:u,hideLabel:d.hideLabel}):We.jsxs("div",{className:a?Yi.textAreaFieldWithBadges:null,children:[a&&We.jsx("div",{className:Yi.etikettWrapper,children:a.map(({type:p,titleText:h})=>We.jsx(Xk,{variant:p,size:"small",children:h},h))}),We.jsx(tE,{size:"small",label:r,description:l,className:o,autoComplete:"off",...v,onChange:p=>v.onChange(p.currentTarget.value!==""?i(p.currentTarget.value):null),value:v.value?v.value:"",error:RT(E,e),maxLength:t,...d})]})},Cd=({formMethods:e,onSubmit:r,children:n,className:t,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:i}=e;return T.useEffect(()=>()=>{a&&a(i())},[]),We.jsx(bg,{...e,children:We.jsx("form",{className:t,onSubmit:r?s(o=>r(o)):void 0,children:n})})},DT=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],KT=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],LT=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av NAV"}],PT=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],FT=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],MT=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],VT=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],GT=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],wT=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],BT=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],jT=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],UT=[{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Kontroll av saksopplysninger"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"VURDER_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fkta om arbeidsforhold med permisjon uten sluttdato"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttaksdokumentasjon"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"}],HT=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],qT=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],YT=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],xT=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],CT=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],$T=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],JT=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],WT=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],zT=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],ZT=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],XT=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],QT=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],ef=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],rf=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],nf=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],tf=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],af=[{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST.KITTS OG NEVIS"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"}],sf=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],of=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],lf=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],df=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],uf=[{kode:"FODSELSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsdato"},{kode:"TILBAKETREKK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilbaketrekk"},{kode:"ER_ANKEFRIST_IKKE_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er ankefrist ikke overholdt"},{kode:"FNR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsnummer"},{kode:"TERMINBEKREFTELSE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Terminbekreftelse"},{kode:"TERMINDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Termindato"},{kode:"ANKE_RESULTAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Anke resultat"},{kode:"UTTAK_SPLITT_TIDSPERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resulterende periode ved splitting"},{kode:"UTTAK_TREKKDAGER_FLERBARN_KVOTE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager flerbarn kvote"},{kode:"OPPHOLDSRETT_IKKE_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har ikke oppholdsrett i EØS"},{kode:"TILRETTELEGGING_SKAL_BRUKES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avgjør om tilrettelegging skal brukes"},{kode:"ER_ANKE_IKKE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er anke ikke konkret."},{kode:"BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandling"},{kode:"UTTAK_GRADERING_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gradering av arbeidsforhold"},{kode:"ANKE_AVVIST_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til avvist anke"},{kode:"INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt"},{kode:"SOKNADSFRISTVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfristvilkåret"},{kode:"DAGPENGER_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dagpenger"},{kode:"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Til og med dato fastsatt av saksbehandler"},{kode:"SOKNADSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfrist"},{kode:"VILKAR_SOM_ANVENDES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vilkår som anvendes"},{kode:"PERIODE_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode f.o.m."},{kode:"UTTAK_PROSENT_UTBETALING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utbetalingsgrad"},{kode:"NYTT_REFUSJONSKRAV",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Nytt refusjonskrav"},{kode:"DODSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dødsdato"},{kode:"DOKUMENTASJON_FORELIGGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dokumentasjon foreligger"},{kode:"LØNNSENDRING_I_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Lønnsendring i beregningsperioden"},{kode:"AVKLART_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklart periode"},{kode:"SVANGERSKAPSPENGERVILKÅRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Svangerskapsvilkåret"},{kode:"KLAGE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aktivitet"},{kode:"UTTAK_STØNADSKONTOTYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stønadskontotype"},{kode:"ALENEOMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aleneomsorg"},{kode:"OMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorg"},{kode:"KONTAKTPERSON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontaktperson"},{kode:"ER_KLAGE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"TILRETTELEGGING_BEHOV_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilrettelegging behov FOM"},{kode:"ANNEN_FORELDER_RETT_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Annen forelder har opptjent rett fra land i EØS"},{kode:"AKTIVITETSKRAV_AVKLARING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklaring om mor er i aktivitet"},{kode:"FASTSETT_RESULTAT_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett resultat for perioden"},{kode:"FRILANSVIRKSOMHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilansvirksomhet"},{kode:"MANN_ADOPTERER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mann adopterer"},{kode:"ANDEL_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Andel i arbeid"},{kode:"DELVIS_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis tilrettelegging FOM"},{kode:"OPPTJENINGSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Opptjeningsvilkåret"},{kode:"ER_KLAGER_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"UTTAK_PERIODE_RESULTAT_TYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultattype for periode"},{kode:"UTLAND",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utland"},{kode:"BRUK_ANTALL_I_TPS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra folkeregisteret"},{kode:"AKTIVITET_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden med aktivitet"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{kode:"IKKE_OMSORG_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden Søker har ikke omsorg for barnet"},{kode:"DEKNINGSGRAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dekningsgrad"},{kode:"ER_ANKEN_IKKE_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"er anken ikke signert."},{kode:"SYKDOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Sykdom"},{kode:"UTSTEDTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utstedtdato"},{kode:"FODSELSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødsel"},{kode:"NAVN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Navn"},{kode:"UTTAK_TREKKDAGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager"},{kode:"PA_KLAGD_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Påklagd behandlingId"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Har søker inntekt fra etterlønn eller sluttpakke"},{kode:"OPPHOLDSRETT_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har oppholdsrett i EØS"},{kode:"RETT_TIL_FORELDREPENGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Rett til foreldrepenger"},{kode:"INNTEKTSKATEGORI",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori"},{kode:"ADOPTERER_ALENE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopterer alene"},{kode:"ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Arbeidsforhold"},{kode:"BRUKER_TVUNGEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker er under tvungen forvaltning"},{kode:"DELVIS_REFUSJON_FØR_STARTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis refusjon som utbetales før startdato for full refusjon"},{kode:"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring tidsbegrenset arbeidsforhold"},{kode:"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{kode:"MANDAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mandat"},{kode:"MOR_MOTTAR_UFØRETRYGD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar uføretrygd"},{kode:"HEL_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Hel tilrettelegging FOM"},{kode:"ORGANISASJONSNUMMER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Organisasjonsnummer"},{kode:"UTTAK_GRADERING_AVSLAG_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak avslag gradering"},{kode:"ER_KLAGEN_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"ER_KLAGEFRIST_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"OMSORGSVILKAR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"PA_ANKET_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"på anket behandlingsId."},{kode:"SLUTTE_ARBEID_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Slutte arbeid FOM"},{kode:"BRUK_ANTALL_I_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra søknad"},{kode:"KLAGE_RESULTAT_NFP",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat"},{kode:"FORDELING_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling for arbeidsforhold"},{kode:"UTTAK_SAMTIDIG_UTTAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Samtidig uttak"},{kode:"ER_SOKER_BOSATT_I_NORGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er søker bosatt i Norge?"},{kode:"FRILANS_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilans inntekt"},{kode:"FASTSETT_VIDERE_BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett videre behandling"},{kode:"BRUK_ANTALL_I_VEDTAKET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra vedtaket"},{kode:"OMSORGSOVERTAKELSESDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorgsovertakelsesdato"},{kode:"UTTAK_PERIODE_RESULTAT_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat årsak"},{kode:"ENDRING_NAERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring i næring"},{kode:"FORDELING_FOR_NY_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny andel med fordeling"},{kode:"BEHANDLENDE_ENHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandlende enhet"},{kode:"BRUTTO_NAERINGSINNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Brutto næringsinntekt"},{kode:"FORDELING_ETTER_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling etter besteberegning"},{kode:"STARTDATO_FRA_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Startdato fra søknad"},{kode:"NY_STARTDATO_REFUSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny startdato for refusjon"},{kode:"OVERSTYRT_VURDERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt vurdering"},{kode:"KLAGE_RESULTAT_KA",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ytelsesvedtak"},{kode:"FARESIGNALER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Faresignaler"},{kode:"NY_AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Det er lagt til ny aktivitet for"},{kode:"MOTTAR_YTELSE_FRILANS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for frilansaktiviteten"},{kode:"NY_REFUSJONSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny refusjonsfrist"},{kode:"OVERSTYRT_BEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt beregning"},{kode:"AVKLARSAKSOPPLYSNINGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklar saksopplysninger"},{kode:"INNTEKT_FRA_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt fra arbeidsforhold"},{kode:"SOKERSOPPLYSNINGSPLIKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søkers opplysningsplikt"},{kode:"SELVSTENDIG_NAERINGSDRIVENDE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Selvstendig næringsdrivende"},{kode:"GYLDIG_MEDLEM_FOLKETRYGDEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gyldig medlem i folketrygden"},{kode:"MOTTATT_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottatt dato"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Antall barn"},{kode:"EKTEFELLES_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ektefelles barn"},{kode:"MILITÆR_ELLER_SIVIL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"PERIODE_TOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode t.o.m."},{kode:"FORELDREANSVARSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"STILLINGSPROSENT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stillingsprosent"},{kode:"ADOPSJONSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopsjon"},{kode:"ANKE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"INNTEKTSKATEGORI_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori for andel"},{kode:"KONTROLL_AV_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontroll av besteberegning"},{kode:"MOR_MOTTAR_STØNAD_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar foreldrepenger fra land i EØS"},{kode:"ER_ANKER_IKKE_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Angir om anker ikke er part i saken."},{kode:"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er vilkårene for tilbakekreving oppfylt"},{kode:"NY_FORDELING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny fordeling for"},{kode:"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er det særlige grunner til reduksjon"},{kode:"MOTTAR_YTELSE_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for arbeid i {value}"},{kode:"TYPE_VERGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Type verge"}],gf=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"Aktivt D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],kf=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],Ef=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],vf=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],mf=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],Tf=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],ff=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],Rf=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],yf=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],Af=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],pf=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],bf=[{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"}],_f=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],cf=[{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Postadresse"},{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Postadresse i utlandet"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Midlertidig postadresse i Norge"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Midlertidig postadresse i utlandet"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"}],hf={RelasjonsRolleType:DT,HistorikkinnslagType:KT,UttakUtsettelseType:LT,FagsakYtelseType:PT,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:FT,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:MT,BeregningsgrunnlagAndeltype:VT,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:GT,KonsekvensForYtelsen:wT,Inntektskategori:BT,SivilstandType:jT,SkjermlenkeType:UT,FaktaOmBeregningTilfelle:HT,KlageVurdering:qT,HistorikkBegrunnelseType:YT,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:xT,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:CT,VergeType:$T,TilbakekrevingVidereBehandling:JT,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:WT,KlageHjemmel:zT,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:ZT,ArbeidType:XT,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:QT,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:ef,FordelingPeriodeKilde:rf,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:nf,Arbeidskategori:tf,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:af,BehandlingType:sf,KontrollerAktivitetskravAvklaring:of,InnsynResultatType:lf,MedlemskapType:df,HistorikkEndretFeltType:uf,PersonstatusType:gf,Fagsystem:kf,AnkeVurdering:Ef,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av NAV"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:vf,VirksomhetType:mf,MedlemskapDekningType:Tf,ArbeidsforholdHandlingType:ff,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_33:[{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],SVP_VK_1:[{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'}],FP_VK_16:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}]},OpptjeningAktivitetType:Rf,PermisjonsbeskrivelseType:yf,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:Af,MedlemskapManuellVurderingType:pf,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:bf,PeriodeResultatÅrsak:[{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]}],ForeldreType:_f,AdresseType:cf};//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var $d;function M(){return $d.apply(null,arguments)}function Sf(e){$d=e}function nr(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function xr(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function ae(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function Os(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var r;for(r in e)if(ae(e,r))return!1;return!0}function Be(e){return e===void 0}function Or(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function pt(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Jd(e,r){var n=[],t,a=e.length;for(t=0;t<a;++t)n.push(r(e[t],t));return n}function Pr(e,r){for(var n in r)ae(r,n)&&(e[n]=r[n]);return ae(r,"toString")&&(e.toString=r.toString),ae(r,"valueOf")&&(e.valueOf=r.valueOf),e}function mr(e,r,n,t){return fu(e,r,n,t,!0).utc()}function Nf(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function J(e){return e._pf==null&&(e._pf=Nf()),e._pf}var rs;Array.prototype.some?rs=Array.prototype.some:rs=function(e){var r=Object(this),n=r.length>>>0,t;for(t=0;t<n;t++)if(t in r&&e.call(this,r[t],t,r))return!0;return!1};function Is(e){var r=null,n=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(r=J(e),n=rs.call(r.parsedDateParts,function(a){return a!=null}),t=r.overflow<0&&!r.empty&&!r.invalidEra&&!r.invalidMonth&&!r.invalidWeekday&&!r.weekdayMismatch&&!r.nullInput&&!r.invalidFormat&&!r.userInvalidated&&(!r.meridiem||r.meridiem&&n),e._strict&&(t=t&&r.charsLeftOver===0&&r.unusedTokens.length===0&&r.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function da(e){var r=mr(NaN);return e!=null?Pr(J(r),e):J(r).userInvalidated=!0,r}var xi=M.momentProperties=[],Va=!1;function Ds(e,r){var n,t,a,s=xi.length;if(Be(r._isAMomentObject)||(e._isAMomentObject=r._isAMomentObject),Be(r._i)||(e._i=r._i),Be(r._f)||(e._f=r._f),Be(r._l)||(e._l=r._l),Be(r._strict)||(e._strict=r._strict),Be(r._tzm)||(e._tzm=r._tzm),Be(r._isUTC)||(e._isUTC=r._isUTC),Be(r._offset)||(e._offset=r._offset),Be(r._pf)||(e._pf=J(r)),Be(r._locale)||(e._locale=r._locale),s>0)for(n=0;n<s;n++)t=xi[n],a=r[t],Be(a)||(e[t]=a);return e}function bt(e){Ds(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Va===!1&&(Va=!0,M.updateOffset(this),Va=!1)}function tr(e){return e instanceof bt||e!=null&&e._isAMomentObject!=null}function Wd(e){M.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function Xe(e,r){var n=!0;return Pr(function(){if(M.deprecationHandler!=null&&M.deprecationHandler(null,e),n){var t=[],a,s,i,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(i in arguments[0])ae(arguments[0],i)&&(a+=i+": "+arguments[0][i]+", ");a=a.slice(0,-2)}else a=arguments[s];t.push(a)}Wd(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),n=!1}return r.apply(this,arguments)},r)}var Ci={};function zd(e,r){M.deprecationHandler!=null&&M.deprecationHandler(e,r),Ci[e]||(Wd(r),Ci[e]=!0)}M.suppressDeprecationWarnings=!1;M.deprecationHandler=null;function Tr(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Of(e){var r,n;for(n in e)ae(e,n)&&(r=e[n],Tr(r)?this[n]=r:this["_"+n]=r);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function ns(e,r){var n=Pr({},e),t;for(t in r)ae(r,t)&&(xr(e[t])&&xr(r[t])?(n[t]={},Pr(n[t],e[t]),Pr(n[t],r[t])):r[t]!=null?n[t]=r[t]:delete n[t]);for(t in e)ae(e,t)&&!ae(r,t)&&xr(e[t])&&(n[t]=Pr({},n[t]));return n}function Ks(e){e!=null&&this.set(e)}var ts;Object.keys?ts=Object.keys:ts=function(e){var r,n=[];for(r in e)ae(e,r)&&n.push(r);return n};var If={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Df(e,r,n){var t=this._calendar[e]||this._calendar.sameElse;return Tr(t)?t.call(r,n):t}function vr(e,r,n){var t=""+Math.abs(e),a=r-t.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+t}var Ls=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Bt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ga={},gn={};function C(e,r,n,t){var a=t;typeof t=="string"&&(a=function(){return this[t]()}),e&&(gn[e]=a),r&&(gn[r[0]]=function(){return vr(a.apply(this,arguments),r[1],r[2])}),n&&(gn[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function Kf(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Lf(e){var r=e.match(Ls),n,t;for(n=0,t=r.length;n<t;n++)gn[r[n]]?r[n]=gn[r[n]]:r[n]=Kf(r[n]);return function(a){var s="",i;for(i=0;i<t;i++)s+=Tr(r[i])?r[i].call(a,e):r[i];return s}}function qt(e,r){return e.isValid()?(r=Zd(r,e.localeData()),Ga[r]=Ga[r]||Lf(r),Ga[r](e)):e.localeData().invalidDate()}function Zd(e,r){var n=5;function t(a){return r.longDateFormat(a)||a}for(Bt.lastIndex=0;n>=0&&Bt.test(e);)e=e.replace(Bt,t),Bt.lastIndex=0,n-=1;return e}var Pf={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ff(e){var r=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return r||!n?r:(this._longDateFormat[e]=n.match(Ls).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var Mf="Invalid date";function Vf(){return this._invalidDate}var Gf="%d",wf=/\d{1,2}/;function Bf(e){return this._ordinal.replace("%d",e)}var jf={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Uf(e,r,n,t){var a=this._relativeTime[n];return Tr(a)?a(e,r,n,t):a.replace(/%d/i,e)}function Hf(e,r){var n=this._relativeTime[e>0?"future":"past"];return Tr(n)?n(r):n.replace(/%s/i,r)}var $i={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Qe(e){return typeof e=="string"?$i[e]||$i[e.toLowerCase()]:void 0}function Ps(e){var r={},n,t;for(t in e)ae(e,t)&&(n=Qe(t),n&&(r[n]=e[t]));return r}var qf={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Yf(e){var r=[],n;for(n in e)ae(e,n)&&r.push({unit:n,priority:qf[n]});return r.sort(function(t,a){return t.priority-a.priority}),r}var Xd=/\d/,Ce=/\d\d/,Qd=/\d{3}/,Fs=/\d{4}/,ua=/[+-]?\d{6}/,me=/\d\d?/,eu=/\d\d\d\d?/,ru=/\d\d\d\d\d\d?/,ga=/\d{1,3}/,Ms=/\d{1,4}/,ka=/[+-]?\d{1,6}/,yn=/\d+/,Ea=/[+-]?\d+/,xf=/Z|[+-]\d\d:?\d\d/gi,va=/Z|[+-]\d\d(?::?\d\d)?/gi,Cf=/[+-]?\d+(\.\d{1,3})?/,_t=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,An=/^[1-9]\d?/,Vs=/^([1-9]\d|\d)/,Xt;Xt={};function w(e,r,n){Xt[e]=Tr(r)?r:function(t,a){return t&&n?n:r}}function $f(e,r){return ae(Xt,e)?Xt[e](r._strict,r._locale):new RegExp(Jf(e))}function Jf(e){return hr(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(r,n,t,a,s){return n||t||a||s}))}function hr(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Je(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function Z(e){var r=+e,n=0;return r!==0&&isFinite(r)&&(n=Je(r)),n}var as={};function oe(e,r){var n,t=r,a;for(typeof e=="string"&&(e=[e]),Or(r)&&(t=function(s,i){i[r]=Z(s)}),a=e.length,n=0;n<a;n++)as[e[n]]=t}function ct(e,r){oe(e,function(n,t,a,s){a._w=a._w||{},r(n,a._w,a,s)})}function Wf(e,r,n){r!=null&&ae(as,e)&&as[e](r,n._a,n,e)}function ma(e){return e%4===0&&e%100!==0||e%400===0}var Fe=0,br=1,ur=2,Se=3,rr=4,_r=5,Hr=6,zf=7,Zf=8;C("Y",0,0,function(){var e=this.year();return e<=9999?vr(e,4):"+"+e});C(0,["YY",2],0,function(){return this.year()%100});C(0,["YYYY",4],0,"year");C(0,["YYYYY",5],0,"year");C(0,["YYYYYY",6,!0],0,"year");w("Y",Ea);w("YY",me,Ce);w("YYYY",Ms,Fs);w("YYYYY",ka,ua);w("YYYYYY",ka,ua);oe(["YYYYY","YYYYYY"],Fe);oe("YYYY",function(e,r){r[Fe]=e.length===2?M.parseTwoDigitYear(e):Z(e)});oe("YY",function(e,r){r[Fe]=M.parseTwoDigitYear(e)});oe("Y",function(e,r){r[Fe]=parseInt(e,10)});function gt(e){return ma(e)?366:365}M.parseTwoDigitYear=function(e){return Z(e)+(Z(e)>68?1900:2e3)};var nu=pn("FullYear",!0);function Xf(){return ma(this.year())}function pn(e,r){return function(n){return n!=null?(tu(this,e,n),M.updateOffset(this,r),this):Et(this,e)}}function Et(e,r){if(!e.isValid())return NaN;var n=e._d,t=e._isUTC;switch(r){case"Milliseconds":return t?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return t?n.getUTCSeconds():n.getSeconds();case"Minutes":return t?n.getUTCMinutes():n.getMinutes();case"Hours":return t?n.getUTCHours():n.getHours();case"Date":return t?n.getUTCDate():n.getDate();case"Day":return t?n.getUTCDay():n.getDay();case"Month":return t?n.getUTCMonth():n.getMonth();case"FullYear":return t?n.getUTCFullYear():n.getFullYear();default:return NaN}}function tu(e,r,n){var t,a,s,i,o;if(!(!e.isValid()||isNaN(n))){switch(t=e._d,a=e._isUTC,r){case"Milliseconds":return void(a?t.setUTCMilliseconds(n):t.setMilliseconds(n));case"Seconds":return void(a?t.setUTCSeconds(n):t.setSeconds(n));case"Minutes":return void(a?t.setUTCMinutes(n):t.setMinutes(n));case"Hours":return void(a?t.setUTCHours(n):t.setHours(n));case"Date":return void(a?t.setUTCDate(n):t.setDate(n));case"FullYear":break;default:return}s=n,i=e.month(),o=e.date(),o=o===29&&i===1&&!ma(s)?28:o,a?t.setUTCFullYear(s,i,o):t.setFullYear(s,i,o)}}function Qf(e){return e=Qe(e),Tr(this[e])?this[e]():this}function eR(e,r){if(typeof e=="object"){e=Ps(e);var n=Yf(e),t,a=n.length;for(t=0;t<a;t++)this[n[t].unit](e[n[t].unit])}else if(e=Qe(e),Tr(this[e]))return this[e](r);return this}function rR(e,r){return(e%r+r)%r}var be;Array.prototype.indexOf?be=Array.prototype.indexOf:be=function(e){var r;for(r=0;r<this.length;++r)if(this[r]===e)return r;return-1};function Gs(e,r){if(isNaN(e)||isNaN(r))return NaN;var n=rR(r,12);return e+=(r-n)/12,n===1?ma(e)?29:28:31-n%7%2}C("M",["MM",2],"Mo",function(){return this.month()+1});C("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});C("MMMM",0,0,function(e){return this.localeData().months(this,e)});w("M",me,An);w("MM",me,Ce);w("MMM",function(e,r){return r.monthsShortRegex(e)});w("MMMM",function(e,r){return r.monthsRegex(e)});oe(["M","MM"],function(e,r){r[br]=Z(e)-1});oe(["MMM","MMMM"],function(e,r,n,t){var a=n._locale.monthsParse(e,t,n._strict);a!=null?r[br]=a:J(n).invalidMonth=e});var nR="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),au="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),su=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,tR=_t,aR=_t;function sR(e,r){return e?nr(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||su).test(r)?"format":"standalone"][e.month()]:nr(this._months)?this._months:this._months.standalone}function iR(e,r){return e?nr(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[su.test(r)?"format":"standalone"][e.month()]:nr(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function oR(e,r,n){var t,a,s,i=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)s=mr([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(s,"").toLocaleLowerCase();return n?r==="MMM"?(a=be.call(this._shortMonthsParse,i),a!==-1?a:null):(a=be.call(this._longMonthsParse,i),a!==-1?a:null):r==="MMM"?(a=be.call(this._shortMonthsParse,i),a!==-1?a:(a=be.call(this._longMonthsParse,i),a!==-1?a:null)):(a=be.call(this._longMonthsParse,i),a!==-1?a:(a=be.call(this._shortMonthsParse,i),a!==-1?a:null))}function lR(e,r,n){var t,a,s;if(this._monthsParseExact)return oR.call(this,e,r,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(a=mr([2e3,t]),n&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!n&&!this._monthsParse[t]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[t]=new RegExp(s.replace(".",""),"i")),n&&r==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(n&&r==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!n&&this._monthsParse[t].test(e))return t}}function iu(e,r){if(!e.isValid())return e;if(typeof r=="string"){if(/^\d+$/.test(r))r=Z(r);else if(r=e.localeData().monthsParse(r),!Or(r))return e}var n=r,t=e.date();return t=t<29?t:Math.min(t,Gs(e.year(),n)),e._isUTC?e._d.setUTCMonth(n,t):e._d.setMonth(n,t),e}function ou(e){return e!=null?(iu(this,e),M.updateOffset(this,!0),this):Et(this,"Month")}function dR(){return Gs(this.year(),this.month())}function uR(e){return this._monthsParseExact?(ae(this,"_monthsRegex")||lu.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(ae(this,"_monthsShortRegex")||(this._monthsShortRegex=tR),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function gR(e){return this._monthsParseExact?(ae(this,"_monthsRegex")||lu.call(this),e?this._monthsStrictRegex:this._monthsRegex):(ae(this,"_monthsRegex")||(this._monthsRegex=aR),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function lu(){function e(l,u){return u.length-l.length}var r=[],n=[],t=[],a,s,i,o;for(a=0;a<12;a++)s=mr([2e3,a]),i=hr(this.monthsShort(s,"")),o=hr(this.months(s,"")),r.push(i),n.push(o),t.push(o),t.push(i);r.sort(e),n.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function kR(e,r,n,t,a,s,i){var o;return e<100&&e>=0?(o=new Date(e+400,r,n,t,a,s,i),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,r,n,t,a,s,i),o}function vt(e){var r,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,r=new Date(Date.UTC.apply(null,n)),isFinite(r.getUTCFullYear())&&r.setUTCFullYear(e)):r=new Date(Date.UTC.apply(null,arguments)),r}function Qt(e,r,n){var t=7+r-n,a=(7+vt(e,0,t).getUTCDay()-r)%7;return-a+t-1}function du(e,r,n,t,a){var s=(7+n-t)%7,i=Qt(e,t,a),o=1+7*(r-1)+s+i,l,u;return o<=0?(l=e-1,u=gt(l)+o):o>gt(e)?(l=e+1,u=o-gt(e)):(l=e,u=o),{year:l,dayOfYear:u}}function mt(e,r,n){var t=Qt(e.year(),r,n),a=Math.floor((e.dayOfYear()-t-1)/7)+1,s,i;return a<1?(i=e.year()-1,s=a+Sr(i,r,n)):a>Sr(e.year(),r,n)?(s=a-Sr(e.year(),r,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Sr(e,r,n){var t=Qt(e,r,n),a=Qt(e+1,r,n);return(gt(e)-t+a)/7}C("w",["ww",2],"wo","week");C("W",["WW",2],"Wo","isoWeek");w("w",me,An);w("ww",me,Ce);w("W",me,An);w("WW",me,Ce);ct(["w","ww","W","WW"],function(e,r,n,t){r[t.substr(0,1)]=Z(e)});function ER(e){return mt(e,this._week.dow,this._week.doy).week}var vR={dow:0,doy:6};function mR(){return this._week.dow}function TR(){return this._week.doy}function fR(e){var r=this.localeData().week(this);return e==null?r:this.add((e-r)*7,"d")}function RR(e){var r=mt(this,1,4).week;return e==null?r:this.add((e-r)*7,"d")}C("d",0,"do","day");C("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});C("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});C("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});C("e",0,0,"weekday");C("E",0,0,"isoWeekday");w("d",me);w("e",me);w("E",me);w("dd",function(e,r){return r.weekdaysMinRegex(e)});w("ddd",function(e,r){return r.weekdaysShortRegex(e)});w("dddd",function(e,r){return r.weekdaysRegex(e)});ct(["dd","ddd","dddd"],function(e,r,n,t){var a=n._locale.weekdaysParse(e,t,n._strict);a!=null?r.d=a:J(n).invalidWeekday=e});ct(["d","e","E"],function(e,r,n,t){r[t]=Z(e)});function yR(e,r){return typeof e!="string"?e:isNaN(e)?(e=r.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function AR(e,r){return typeof e=="string"?r.weekdaysParse(e)%7||7:isNaN(e)?null:e}function ws(e,r){return e.slice(r,7).concat(e.slice(0,r))}var pR="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),uu="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),bR="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),_R=_t,cR=_t,hR=_t;function SR(e,r){var n=nr(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(r)?"format":"standalone"];return e===!0?ws(n,this._week.dow):e?n[e.day()]:n}function NR(e){return e===!0?ws(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function OR(e){return e===!0?ws(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function IR(e,r,n){var t,a,s,i=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)s=mr([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(s,"").toLocaleLowerCase();return n?r==="dddd"?(a=be.call(this._weekdaysParse,i),a!==-1?a:null):r==="ddd"?(a=be.call(this._shortWeekdaysParse,i),a!==-1?a:null):(a=be.call(this._minWeekdaysParse,i),a!==-1?a:null):r==="dddd"?(a=be.call(this._weekdaysParse,i),a!==-1||(a=be.call(this._shortWeekdaysParse,i),a!==-1)?a:(a=be.call(this._minWeekdaysParse,i),a!==-1?a:null)):r==="ddd"?(a=be.call(this._shortWeekdaysParse,i),a!==-1||(a=be.call(this._weekdaysParse,i),a!==-1)?a:(a=be.call(this._minWeekdaysParse,i),a!==-1?a:null)):(a=be.call(this._minWeekdaysParse,i),a!==-1||(a=be.call(this._weekdaysParse,i),a!==-1)?a:(a=be.call(this._shortWeekdaysParse,i),a!==-1?a:null))}function DR(e,r,n){var t,a,s;if(this._weekdaysParseExact)return IR.call(this,e,r,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(a=mr([2e3,1]).day(t),n&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[t]=new RegExp(s.replace(".",""),"i")),n&&r==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(n&&r==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(n&&r==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!n&&this._weekdaysParse[t].test(e))return t}}function KR(e){if(!this.isValid())return e!=null?this:NaN;var r=Et(this,"Day");return e!=null?(e=yR(e,this.localeData()),this.add(e-r,"d")):r}function LR(e){if(!this.isValid())return e!=null?this:NaN;var r=(this.day()+7-this.localeData()._week.dow)%7;return e==null?r:this.add(e-r,"d")}function PR(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var r=AR(e,this.localeData());return this.day(this.day()%7?r:r-7)}else return this.day()||7}function FR(e){return this._weekdaysParseExact?(ae(this,"_weekdaysRegex")||Bs.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(ae(this,"_weekdaysRegex")||(this._weekdaysRegex=_R),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function MR(e){return this._weekdaysParseExact?(ae(this,"_weekdaysRegex")||Bs.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(ae(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=cR),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function VR(e){return this._weekdaysParseExact?(ae(this,"_weekdaysRegex")||Bs.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(ae(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=hR),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Bs(){function e(d,E){return E.length-d.length}var r=[],n=[],t=[],a=[],s,i,o,l,u;for(s=0;s<7;s++)i=mr([2e3,1]).day(s),o=hr(this.weekdaysMin(i,"")),l=hr(this.weekdaysShort(i,"")),u=hr(this.weekdays(i,"")),r.push(o),n.push(l),t.push(u),a.push(o),a.push(l),a.push(u);r.sort(e),n.sort(e),t.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function js(){return this.hours()%12||12}function GR(){return this.hours()||24}C("H",["HH",2],0,"hour");C("h",["hh",2],0,js);C("k",["kk",2],0,GR);C("hmm",0,0,function(){return""+js.apply(this)+vr(this.minutes(),2)});C("hmmss",0,0,function(){return""+js.apply(this)+vr(this.minutes(),2)+vr(this.seconds(),2)});C("Hmm",0,0,function(){return""+this.hours()+vr(this.minutes(),2)});C("Hmmss",0,0,function(){return""+this.hours()+vr(this.minutes(),2)+vr(this.seconds(),2)});function gu(e,r){C(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),r)})}gu("a",!0);gu("A",!1);function ku(e,r){return r._meridiemParse}w("a",ku);w("A",ku);w("H",me,Vs);w("h",me,An);w("k",me,An);w("HH",me,Ce);w("hh",me,Ce);w("kk",me,Ce);w("hmm",eu);w("hmmss",ru);w("Hmm",eu);w("Hmmss",ru);oe(["H","HH"],Se);oe(["k","kk"],function(e,r,n){var t=Z(e);r[Se]=t===24?0:t});oe(["a","A"],function(e,r,n){n._isPm=n._locale.isPM(e),n._meridiem=e});oe(["h","hh"],function(e,r,n){r[Se]=Z(e),J(n).bigHour=!0});oe("hmm",function(e,r,n){var t=e.length-2;r[Se]=Z(e.substr(0,t)),r[rr]=Z(e.substr(t)),J(n).bigHour=!0});oe("hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[Se]=Z(e.substr(0,t)),r[rr]=Z(e.substr(t,2)),r[_r]=Z(e.substr(a)),J(n).bigHour=!0});oe("Hmm",function(e,r,n){var t=e.length-2;r[Se]=Z(e.substr(0,t)),r[rr]=Z(e.substr(t))});oe("Hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[Se]=Z(e.substr(0,t)),r[rr]=Z(e.substr(t,2)),r[_r]=Z(e.substr(a))});function wR(e){return(e+"").toLowerCase().charAt(0)==="p"}var BR=/[ap]\.?m?\.?/i,jR=pn("Hours",!0);function UR(e,r,n){return e>11?n?"pm":"PM":n?"am":"AM"}var Eu={calendar:If,longDateFormat:Pf,invalidDate:Mf,ordinal:Gf,dayOfMonthOrdinalParse:wf,relativeTime:jf,months:nR,monthsShort:au,week:vR,weekdays:pR,weekdaysMin:bR,weekdaysShort:uu,meridiemParse:BR},Re={},Kn={},Tt;function HR(e,r){var n,t=Math.min(e.length,r.length);for(n=0;n<t;n+=1)if(e[n]!==r[n])return n;return t}function Ji(e){return e&&e.toLowerCase().replace("_","-")}function qR(e){for(var r=0,n,t,a,s;r<e.length;){for(s=Ji(e[r]).split("-"),n=s.length,t=Ji(e[r+1]),t=t?t.split("-"):null;n>0;){if(a=Ta(s.slice(0,n).join("-")),a)return a;if(t&&t.length>=n&&HR(s,t)>=n-1)break;n--}r++}return Tt}function YR(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Ta(e){var r=null,n;if(Re[e]===void 0&&typeof module<"u"&&module&&module.exports&&YR(e))try{r=Tt._abbr,n=require,n("./locale/"+e),Mr(r)}catch{Re[e]=null}return Re[e]}function Mr(e,r){var n;return e&&(Be(r)?n=Dr(e):n=Us(e,r),n?Tt=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Tt._abbr}function Us(e,r){if(r!==null){var n,t=Eu;if(r.abbr=e,Re[e]!=null)zd("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=Re[e]._config;else if(r.parentLocale!=null)if(Re[r.parentLocale]!=null)t=Re[r.parentLocale]._config;else if(n=Ta(r.parentLocale),n!=null)t=n._config;else return Kn[r.parentLocale]||(Kn[r.parentLocale]=[]),Kn[r.parentLocale].push({name:e,config:r}),null;return Re[e]=new Ks(ns(t,r)),Kn[e]&&Kn[e].forEach(function(a){Us(a.name,a.config)}),Mr(e),Re[e]}else return delete Re[e],null}function xR(e,r){if(r!=null){var n,t,a=Eu;Re[e]!=null&&Re[e].parentLocale!=null?Re[e].set(ns(Re[e]._config,r)):(t=Ta(e),t!=null&&(a=t._config),r=ns(a,r),t==null&&(r.abbr=e),n=new Ks(r),n.parentLocale=Re[e],Re[e]=n),Mr(e)}else Re[e]!=null&&(Re[e].parentLocale!=null?(Re[e]=Re[e].parentLocale,e===Mr()&&Mr(e)):Re[e]!=null&&delete Re[e]);return Re[e]}function Dr(e){var r;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Tt;if(!nr(e)){if(r=Ta(e),r)return r;e=[e]}return qR(e)}function CR(){return ts(Re)}function Hs(e){var r,n=e._a;return n&&J(e).overflow===-2&&(r=n[br]<0||n[br]>11?br:n[ur]<1||n[ur]>Gs(n[Fe],n[br])?ur:n[Se]<0||n[Se]>24||n[Se]===24&&(n[rr]!==0||n[_r]!==0||n[Hr]!==0)?Se:n[rr]<0||n[rr]>59?rr:n[_r]<0||n[_r]>59?_r:n[Hr]<0||n[Hr]>999?Hr:-1,J(e)._overflowDayOfYear&&(r<Fe||r>ur)&&(r=ur),J(e)._overflowWeeks&&r===-1&&(r=zf),J(e)._overflowWeekday&&r===-1&&(r=Zf),J(e).overflow=r),e}var $R=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,JR=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,WR=/Z|[+-]\d\d(?::?\d\d)?/,jt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],wa=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],zR=/^\/?Date\((-?\d+)/i,ZR=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,XR={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function vu(e){var r,n,t=e._i,a=$R.exec(t)||JR.exec(t),s,i,o,l,u=jt.length,d=wa.length;if(a){for(J(e).iso=!0,r=0,n=u;r<n;r++)if(jt[r][1].exec(a[1])){i=jt[r][0],s=jt[r][2]!==!1;break}if(i==null){e._isValid=!1;return}if(a[3]){for(r=0,n=d;r<n;r++)if(wa[r][1].exec(a[3])){o=(a[2]||" ")+wa[r][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(WR.exec(a[4]))l="Z";else{e._isValid=!1;return}e._f=i+(o||"")+(l||""),Ys(e)}else e._isValid=!1}function QR(e,r,n,t,a,s){var i=[ey(e),au.indexOf(r),parseInt(n,10),parseInt(t,10),parseInt(a,10)];return s&&i.push(parseInt(s,10)),i}function ey(e){var r=parseInt(e,10);return r<=49?2e3+r:r<=999?1900+r:r}function ry(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function ny(e,r,n){if(e){var t=uu.indexOf(e),a=new Date(r[0],r[1],r[2]).getDay();if(t!==a)return J(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function ty(e,r,n){if(e)return XR[e];if(r)return 0;var t=parseInt(n,10),a=t%100,s=(t-a)/100;return s*60+a}function mu(e){var r=ZR.exec(ry(e._i)),n;if(r){if(n=QR(r[4],r[3],r[2],r[5],r[6],r[7]),!ny(r[1],n,e))return;e._a=n,e._tzm=ty(r[8],r[9],r[10]),e._d=vt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),J(e).rfc2822=!0}else e._isValid=!1}function ay(e){var r=zR.exec(e._i);if(r!==null){e._d=new Date(+r[1]);return}if(vu(e),e._isValid===!1)delete e._isValid;else return;if(mu(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:M.createFromInputFallback(e)}M.createFromInputFallback=Xe("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function sn(e,r,n){return e??r??n}function sy(e){var r=new Date(M.now());return e._useUTC?[r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()]:[r.getFullYear(),r.getMonth(),r.getDate()]}function qs(e){var r,n,t=[],a,s,i;if(!e._d){for(a=sy(e),e._w&&e._a[ur]==null&&e._a[br]==null&&iy(e),e._dayOfYear!=null&&(i=sn(e._a[Fe],a[Fe]),(e._dayOfYear>gt(i)||e._dayOfYear===0)&&(J(e)._overflowDayOfYear=!0),n=vt(i,0,e._dayOfYear),e._a[br]=n.getUTCMonth(),e._a[ur]=n.getUTCDate()),r=0;r<3&&e._a[r]==null;++r)e._a[r]=t[r]=a[r];for(;r<7;r++)e._a[r]=t[r]=e._a[r]==null?r===2?1:0:e._a[r];e._a[Se]===24&&e._a[rr]===0&&e._a[_r]===0&&e._a[Hr]===0&&(e._nextDay=!0,e._a[Se]=0),e._d=(e._useUTC?vt:kR).apply(null,t),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Se]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(J(e).weekdayMismatch=!0)}}function iy(e){var r,n,t,a,s,i,o,l,u;r=e._w,r.GG!=null||r.W!=null||r.E!=null?(s=1,i=4,n=sn(r.GG,e._a[Fe],mt(ve(),1,4).year),t=sn(r.W,1),a=sn(r.E,1),(a<1||a>7)&&(l=!0)):(s=e._locale._week.dow,i=e._locale._week.doy,u=mt(ve(),s,i),n=sn(r.gg,e._a[Fe],u.year),t=sn(r.w,u.week),r.d!=null?(a=r.d,(a<0||a>6)&&(l=!0)):r.e!=null?(a=r.e+s,(r.e<0||r.e>6)&&(l=!0)):a=s),t<1||t>Sr(n,s,i)?J(e)._overflowWeeks=!0:l!=null?J(e)._overflowWeekday=!0:(o=du(n,t,a,s,i),e._a[Fe]=o.year,e._dayOfYear=o.dayOfYear)}M.ISO_8601=function(){};M.RFC_2822=function(){};function Ys(e){if(e._f===M.ISO_8601){vu(e);return}if(e._f===M.RFC_2822){mu(e);return}e._a=[],J(e).empty=!0;var r=""+e._i,n,t,a,s,i,o=r.length,l=0,u,d;for(a=Zd(e._f,e._locale).match(Ls)||[],d=a.length,n=0;n<d;n++)s=a[n],t=(r.match($f(s,e))||[])[0],t&&(i=r.substr(0,r.indexOf(t)),i.length>0&&J(e).unusedInput.push(i),r=r.slice(r.indexOf(t)+t.length),l+=t.length),gn[s]?(t?J(e).empty=!1:J(e).unusedTokens.push(s),Wf(s,t,e)):e._strict&&!t&&J(e).unusedTokens.push(s);J(e).charsLeftOver=o-l,r.length>0&&J(e).unusedInput.push(r),e._a[Se]<=12&&J(e).bigHour===!0&&e._a[Se]>0&&(J(e).bigHour=void 0),J(e).parsedDateParts=e._a.slice(0),J(e).meridiem=e._meridiem,e._a[Se]=oy(e._locale,e._a[Se],e._meridiem),u=J(e).era,u!==null&&(e._a[Fe]=e._locale.erasConvertYear(u,e._a[Fe])),qs(e),Hs(e)}function oy(e,r,n){var t;return n==null?r:e.meridiemHour!=null?e.meridiemHour(r,n):(e.isPM!=null&&(t=e.isPM(n),t&&r<12&&(r+=12),!t&&r===12&&(r=0)),r)}function ly(e){var r,n,t,a,s,i,o=!1,l=e._f.length;if(l===0){J(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<l;a++)s=0,i=!1,r=Ds({},e),e._useUTC!=null&&(r._useUTC=e._useUTC),r._f=e._f[a],Ys(r),Is(r)&&(i=!0),s+=J(r).charsLeftOver,s+=J(r).unusedTokens.length*10,J(r).score=s,o?s<t&&(t=s,n=r):(t==null||s<t||i)&&(t=s,n=r,i&&(o=!0));Pr(e,n||r)}function dy(e){if(!e._d){var r=Ps(e._i),n=r.day===void 0?r.date:r.day;e._a=Jd([r.year,r.month,n,r.hour,r.minute,r.second,r.millisecond],function(t){return t&&parseInt(t,10)}),qs(e)}}function uy(e){var r=new bt(Hs(Tu(e)));return r._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Tu(e){var r=e._i,n=e._f;return e._locale=e._locale||Dr(e._l),r===null||n===void 0&&r===""?da({nullInput:!0}):(typeof r=="string"&&(e._i=r=e._locale.preparse(r)),tr(r)?new bt(Hs(r)):(pt(r)?e._d=r:nr(n)?ly(e):n?Ys(e):gy(e),Is(e)||(e._d=null),e))}function gy(e){var r=e._i;Be(r)?e._d=new Date(M.now()):pt(r)?e._d=new Date(r.valueOf()):typeof r=="string"?ay(e):nr(r)?(e._a=Jd(r.slice(0),function(n){return parseInt(n,10)}),qs(e)):xr(r)?dy(e):Or(r)?e._d=new Date(r):M.createFromInputFallback(e)}function fu(e,r,n,t,a){var s={};return(r===!0||r===!1)&&(t=r,r=void 0),(n===!0||n===!1)&&(t=n,n=void 0),(xr(e)&&Os(e)||nr(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=n,s._i=e,s._f=r,s._strict=t,uy(s)}function ve(e,r,n,t){return fu(e,r,n,t,!1)}var ky=Xe("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ve.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:da()}),Ey=Xe("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ve.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:da()});function Ru(e,r){var n,t;if(r.length===1&&nr(r[0])&&(r=r[0]),!r.length)return ve();for(n=r[0],t=1;t<r.length;++t)(!r[t].isValid()||r[t][e](n))&&(n=r[t]);return n}function vy(){var e=[].slice.call(arguments,0);return Ru("isBefore",e)}function my(){var e=[].slice.call(arguments,0);return Ru("isAfter",e)}var Ty=function(){return Date.now?Date.now():+new Date},Ln=["year","quarter","month","week","day","hour","minute","second","millisecond"];function fy(e){var r,n=!1,t,a=Ln.length;for(r in e)if(ae(e,r)&&!(be.call(Ln,r)!==-1&&(e[r]==null||!isNaN(e[r]))))return!1;for(t=0;t<a;++t)if(e[Ln[t]]){if(n)return!1;parseFloat(e[Ln[t]])!==Z(e[Ln[t]])&&(n=!0)}return!0}function Ry(){return this._isValid}function yy(){return ir(NaN)}function fa(e){var r=Ps(e),n=r.year||0,t=r.quarter||0,a=r.month||0,s=r.week||r.isoWeek||0,i=r.day||0,o=r.hour||0,l=r.minute||0,u=r.second||0,d=r.millisecond||0;this._isValid=fy(r),this._milliseconds=+d+u*1e3+l*6e4+o*1e3*60*60,this._days=+i+s*7,this._months=+a+t*3+n*12,this._data={},this._locale=Dr(),this._bubble()}function Yt(e){return e instanceof fa}function ss(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Ay(e,r,n){var t=Math.min(e.length,r.length),a=Math.abs(e.length-r.length),s=0,i;for(i=0;i<t;i++)Z(e[i])!==Z(r[i])&&s++;return s+a}function yu(e,r){C(e,0,0,function(){var n=this.utcOffset(),t="+";return n<0&&(n=-n,t="-"),t+vr(~~(n/60),2)+r+vr(~~n%60,2)})}yu("Z",":");yu("ZZ","");w("Z",va);w("ZZ",va);oe(["Z","ZZ"],function(e,r,n){n._useUTC=!0,n._tzm=xs(va,e)});var py=/([\+\-]|\d\d)/gi;function xs(e,r){var n=(r||"").match(e),t,a,s;return n===null?null:(t=n[n.length-1]||[],a=(t+"").match(py)||["-",0,0],s=+(a[1]*60)+Z(a[2]),s===0?0:a[0]==="+"?s:-s)}function Cs(e,r){var n,t;return r._isUTC?(n=r.clone(),t=(tr(e)||pt(e)?e.valueOf():ve(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+t),M.updateOffset(n,!1),n):ve(e).local()}function is(e){return-Math.round(e._d.getTimezoneOffset())}M.updateOffset=function(){};function by(e,r,n){var t=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=xs(va,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&r&&(a=is(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),t!==e&&(!r||this._changeInProgress?bu(this,ir(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,M.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:is(this)}function _y(e,r){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,r),this):-this.utcOffset()}function cy(e){return this.utcOffset(0,e)}function hy(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(is(this),"m")),this}function Sy(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=xs(xf,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Ny(e){return this.isValid()?(e=e?ve(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Oy(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Iy(){if(!Be(this._isDSTShifted))return this._isDSTShifted;var e={},r;return Ds(e,this),e=Tu(e),e._a?(r=e._isUTC?mr(e._a):ve(e._a),this._isDSTShifted=this.isValid()&&Ay(e._a,r.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Dy(){return this.isValid()?!this._isUTC:!1}function Ky(){return this.isValid()?this._isUTC:!1}function Au(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Ly=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Py=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function ir(e,r){var n=e,t=null,a,s,i;return Yt(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Or(e)||!isNaN(+e)?(n={},r?n[r]=+e:n.milliseconds=+e):(t=Ly.exec(e))?(a=t[1]==="-"?-1:1,n={y:0,d:Z(t[ur])*a,h:Z(t[Se])*a,m:Z(t[rr])*a,s:Z(t[_r])*a,ms:Z(ss(t[Hr]*1e3))*a}):(t=Py.exec(e))?(a=t[1]==="-"?-1:1,n={y:Ur(t[2],a),M:Ur(t[3],a),w:Ur(t[4],a),d:Ur(t[5],a),h:Ur(t[6],a),m:Ur(t[7],a),s:Ur(t[8],a)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(i=Fy(ve(n.from),ve(n.to)),n={},n.ms=i.milliseconds,n.M=i.months),s=new fa(n),Yt(e)&&ae(e,"_locale")&&(s._locale=e._locale),Yt(e)&&ae(e,"_isValid")&&(s._isValid=e._isValid),s}ir.fn=fa.prototype;ir.invalid=yy;function Ur(e,r){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*r}function Wi(e,r){var n={};return n.months=r.month()-e.month()+(r.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(r)&&--n.months,n.milliseconds=+r-+e.clone().add(n.months,"M"),n}function Fy(e,r){var n;return e.isValid()&&r.isValid()?(r=Cs(r,e),e.isBefore(r)?n=Wi(e,r):(n=Wi(r,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function pu(e,r){return function(n,t){var a,s;return t!==null&&!isNaN(+t)&&(zd(r,"moment()."+r+"(period, number) is deprecated. Please use moment()."+r+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=t,t=s),a=ir(n,t),bu(this,a,e),this}}function bu(e,r,n,t){var a=r._milliseconds,s=ss(r._days),i=ss(r._months);e.isValid()&&(t=t??!0,i&&iu(e,Et(e,"Month")+i*n),s&&tu(e,"Date",Et(e,"Date")+s*n),a&&e._d.setTime(e._d.valueOf()+a*n),t&&M.updateOffset(e,s||i))}var My=pu(1,"add"),Vy=pu(-1,"subtract");function _u(e){return typeof e=="string"||e instanceof String}function Gy(e){return tr(e)||pt(e)||_u(e)||Or(e)||By(e)||wy(e)||e===null||e===void 0}function wy(e){var r=xr(e)&&!Os(e),n=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,i=t.length;for(a=0;a<i;a+=1)s=t[a],n=n||ae(e,s);return r&&n}function By(e){var r=nr(e),n=!1;return r&&(n=e.filter(function(t){return!Or(t)&&_u(e)}).length===0),r&&n}function jy(e){var r=xr(e)&&!Os(e),n=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<t.length;a+=1)s=t[a],n=n||ae(e,s);return r&&n}function Uy(e,r){var n=e.diff(r,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Hy(e,r){arguments.length===1&&(arguments[0]?Gy(arguments[0])?(e=arguments[0],r=void 0):jy(arguments[0])&&(r=arguments[0],e=void 0):(e=void 0,r=void 0));var n=e||ve(),t=Cs(n,this).startOf("day"),a=M.calendarFormat(this,t)||"sameElse",s=r&&(Tr(r[a])?r[a].call(this,n):r[a]);return this.format(s||this.localeData().calendar(a,this,ve(n)))}function qy(){return new bt(this)}function Yy(e,r){var n=tr(e)?e:ve(e);return this.isValid()&&n.isValid()?(r=Qe(r)||"millisecond",r==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(r).valueOf()):!1}function xy(e,r){var n=tr(e)?e:ve(e);return this.isValid()&&n.isValid()?(r=Qe(r)||"millisecond",r==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(r).valueOf()<n.valueOf()):!1}function Cy(e,r,n,t){var a=tr(e)?e:ve(e),s=tr(r)?r:ve(r);return this.isValid()&&a.isValid()&&s.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(a,n):!this.isBefore(a,n))&&(t[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function $y(e,r){var n=tr(e)?e:ve(e),t;return this.isValid()&&n.isValid()?(r=Qe(r)||"millisecond",r==="millisecond"?this.valueOf()===n.valueOf():(t=n.valueOf(),this.clone().startOf(r).valueOf()<=t&&t<=this.clone().endOf(r).valueOf())):!1}function Jy(e,r){return this.isSame(e,r)||this.isAfter(e,r)}function Wy(e,r){return this.isSame(e,r)||this.isBefore(e,r)}function zy(e,r,n){var t,a,s;if(!this.isValid())return NaN;if(t=Cs(e,this),!t.isValid())return NaN;switch(a=(t.utcOffset()-this.utcOffset())*6e4,r=Qe(r),r){case"year":s=xt(this,t)/12;break;case"month":s=xt(this,t);break;case"quarter":s=xt(this,t)/3;break;case"second":s=(this-t)/1e3;break;case"minute":s=(this-t)/6e4;break;case"hour":s=(this-t)/36e5;break;case"day":s=(this-t-a)/864e5;break;case"week":s=(this-t-a)/6048e5;break;default:s=this-t}return n?s:Je(s)}function xt(e,r){if(e.date()<r.date())return-xt(r,e);var n=(r.year()-e.year())*12+(r.month()-e.month()),t=e.clone().add(n,"months"),a,s;return r-t<0?(a=e.clone().add(n-1,"months"),s=(r-t)/(t-a)):(a=e.clone().add(n+1,"months"),s=(r-t)/(a-t)),-(n+s)||0}M.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";M.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Zy(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Xy(e){if(!this.isValid())return null;var r=e!==!0,n=r?this.clone().utc():this;return n.year()<0||n.year()>9999?qt(n,r?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Tr(Date.prototype.toISOString)?r?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",qt(n,"Z")):qt(n,r?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Qy(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",r="",n,t,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",r="Z"),n="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=r+'[")]',this.format(n+t+a+s)}function eA(e){e||(e=this.isUtc()?M.defaultFormatUtc:M.defaultFormat);var r=qt(this,e);return this.localeData().postformat(r)}function rA(e,r){return this.isValid()&&(tr(e)&&e.isValid()||ve(e).isValid())?ir({to:this,from:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function nA(e){return this.from(ve(),e)}function tA(e,r){return this.isValid()&&(tr(e)&&e.isValid()||ve(e).isValid())?ir({from:this,to:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function aA(e){return this.to(ve(),e)}function cu(e){var r;return e===void 0?this._locale._abbr:(r=Dr(e),r!=null&&(this._locale=r),this)}var hu=Xe("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Su(){return this._locale}var ea=1e3,kn=60*ea,ra=60*kn,Nu=(365*400+97)*24*ra;function En(e,r){return(e%r+r)%r}function Ou(e,r,n){return e<100&&e>=0?new Date(e+400,r,n)-Nu:new Date(e,r,n).valueOf()}function Iu(e,r,n){return e<100&&e>=0?Date.UTC(e+400,r,n)-Nu:Date.UTC(e,r,n)}function sA(e){var r,n;if(e=Qe(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?Iu:Ou,e){case"year":r=n(this.year(),0,1);break;case"quarter":r=n(this.year(),this.month()-this.month()%3,1);break;case"month":r=n(this.year(),this.month(),1);break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":r=n(this.year(),this.month(),this.date());break;case"hour":r=this._d.valueOf(),r-=En(r+(this._isUTC?0:this.utcOffset()*kn),ra);break;case"minute":r=this._d.valueOf(),r-=En(r,kn);break;case"second":r=this._d.valueOf(),r-=En(r,ea);break}return this._d.setTime(r),M.updateOffset(this,!0),this}function iA(e){var r,n;if(e=Qe(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?Iu:Ou,e){case"year":r=n(this.year()+1,0,1)-1;break;case"quarter":r=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":r=n(this.year(),this.month()+1,1)-1;break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":r=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":r=this._d.valueOf(),r+=ra-En(r+(this._isUTC?0:this.utcOffset()*kn),ra)-1;break;case"minute":r=this._d.valueOf(),r+=kn-En(r,kn)-1;break;case"second":r=this._d.valueOf(),r+=ea-En(r,ea)-1;break}return this._d.setTime(r),M.updateOffset(this,!0),this}function oA(){return this._d.valueOf()-(this._offset||0)*6e4}function lA(){return Math.floor(this.valueOf()/1e3)}function dA(){return new Date(this.valueOf())}function uA(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function gA(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function kA(){return this.isValid()?this.toISOString():null}function EA(){return Is(this)}function vA(){return Pr({},J(this))}function mA(){return J(this).overflow}function TA(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}C("N",0,0,"eraAbbr");C("NN",0,0,"eraAbbr");C("NNN",0,0,"eraAbbr");C("NNNN",0,0,"eraName");C("NNNNN",0,0,"eraNarrow");C("y",["y",1],"yo","eraYear");C("y",["yy",2],0,"eraYear");C("y",["yyy",3],0,"eraYear");C("y",["yyyy",4],0,"eraYear");w("N",$s);w("NN",$s);w("NNN",$s);w("NNNN",NA);w("NNNNN",OA);oe(["N","NN","NNN","NNNN","NNNNN"],function(e,r,n,t){var a=n._locale.erasParse(e,t,n._strict);a?J(n).era=a:J(n).invalidEra=e});w("y",yn);w("yy",yn);w("yyy",yn);w("yyyy",yn);w("yo",IA);oe(["y","yy","yyy","yyyy"],Fe);oe(["yo"],function(e,r,n,t){var a;n._locale._eraYearOrdinalRegex&&(a=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?r[Fe]=n._locale.eraYearOrdinalParse(e,a):r[Fe]=parseInt(e,10)});function fA(e,r){var n,t,a,s=this._eras||Dr("en")._eras;for(n=0,t=s.length;n<t;++n){switch(typeof s[n].since){case"string":a=M(s[n].since).startOf("day"),s[n].since=a.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":a=M(s[n].until).startOf("day").valueOf(),s[n].until=a.valueOf();break}}return s}function RA(e,r,n){var t,a,s=this.eras(),i,o,l;for(e=e.toUpperCase(),t=0,a=s.length;t<a;++t)if(i=s[t].name.toUpperCase(),o=s[t].abbr.toUpperCase(),l=s[t].narrow.toUpperCase(),n)switch(r){case"N":case"NN":case"NNN":if(o===e)return s[t];break;case"NNNN":if(i===e)return s[t];break;case"NNNNN":if(l===e)return s[t];break}else if([i,o,l].indexOf(e)>=0)return s[t]}function yA(e,r){var n=e.since<=e.until?1:-1;return r===void 0?M(e.since).year():M(e.since).year()+(r-e.offset)*n}function AA(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].name;return""}function pA(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].narrow;return""}function bA(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].abbr;return""}function _A(){var e,r,n,t,a=this.localeData().eras();for(e=0,r=a.length;e<r;++e)if(n=a[e].since<=a[e].until?1:-1,t=this.clone().startOf("day").valueOf(),a[e].since<=t&&t<=a[e].until||a[e].until<=t&&t<=a[e].since)return(this.year()-M(a[e].since).year())*n+a[e].offset;return this.year()}function cA(e){return ae(this,"_erasNameRegex")||Js.call(this),e?this._erasNameRegex:this._erasRegex}function hA(e){return ae(this,"_erasAbbrRegex")||Js.call(this),e?this._erasAbbrRegex:this._erasRegex}function SA(e){return ae(this,"_erasNarrowRegex")||Js.call(this),e?this._erasNarrowRegex:this._erasRegex}function $s(e,r){return r.erasAbbrRegex(e)}function NA(e,r){return r.erasNameRegex(e)}function OA(e,r){return r.erasNarrowRegex(e)}function IA(e,r){return r._eraYearOrdinalRegex||yn}function Js(){var e=[],r=[],n=[],t=[],a,s,i,o,l,u=this.eras();for(a=0,s=u.length;a<s;++a)i=hr(u[a].name),o=hr(u[a].abbr),l=hr(u[a].narrow),r.push(i),e.push(o),n.push(l),t.push(i),t.push(o),t.push(l);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+r.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}C(0,["gg",2],0,function(){return this.weekYear()%100});C(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Ra(e,r){C(0,[e,e.length],0,r)}Ra("gggg","weekYear");Ra("ggggg","weekYear");Ra("GGGG","isoWeekYear");Ra("GGGGG","isoWeekYear");w("G",Ea);w("g",Ea);w("GG",me,Ce);w("gg",me,Ce);w("GGGG",Ms,Fs);w("gggg",Ms,Fs);w("GGGGG",ka,ua);w("ggggg",ka,ua);ct(["gggg","ggggg","GGGG","GGGGG"],function(e,r,n,t){r[t.substr(0,2)]=Z(e)});ct(["gg","GG"],function(e,r,n,t){r[t]=M.parseTwoDigitYear(e)});function DA(e){return Du.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function KA(e){return Du.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function LA(){return Sr(this.year(),1,4)}function PA(){return Sr(this.isoWeekYear(),1,4)}function FA(){var e=this.localeData()._week;return Sr(this.year(),e.dow,e.doy)}function MA(){var e=this.localeData()._week;return Sr(this.weekYear(),e.dow,e.doy)}function Du(e,r,n,t,a){var s;return e==null?mt(this,t,a).year:(s=Sr(e,t,a),r>s&&(r=s),VA.call(this,e,r,n,t,a))}function VA(e,r,n,t,a){var s=du(e,r,n,t,a),i=vt(s.year,0,s.dayOfYear);return this.year(i.getUTCFullYear()),this.month(i.getUTCMonth()),this.date(i.getUTCDate()),this}C("Q",0,"Qo","quarter");w("Q",Xd);oe("Q",function(e,r){r[br]=(Z(e)-1)*3});function GA(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}C("D",["DD",2],"Do","date");w("D",me,An);w("DD",me,Ce);w("Do",function(e,r){return e?r._dayOfMonthOrdinalParse||r._ordinalParse:r._dayOfMonthOrdinalParseLenient});oe(["D","DD"],ur);oe("Do",function(e,r){r[ur]=Z(e.match(me)[0])});var Ku=pn("Date",!0);C("DDD",["DDDD",3],"DDDo","dayOfYear");w("DDD",ga);w("DDDD",Qd);oe(["DDD","DDDD"],function(e,r,n){n._dayOfYear=Z(e)});function wA(e){var r=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?r:this.add(e-r,"d")}C("m",["mm",2],0,"minute");w("m",me,Vs);w("mm",me,Ce);oe(["m","mm"],rr);var BA=pn("Minutes",!1);C("s",["ss",2],0,"second");w("s",me,Vs);w("ss",me,Ce);oe(["s","ss"],_r);var jA=pn("Seconds",!1);C("S",0,0,function(){return~~(this.millisecond()/100)});C(0,["SS",2],0,function(){return~~(this.millisecond()/10)});C(0,["SSS",3],0,"millisecond");C(0,["SSSS",4],0,function(){return this.millisecond()*10});C(0,["SSSSS",5],0,function(){return this.millisecond()*100});C(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});C(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});C(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});C(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});w("S",ga,Xd);w("SS",ga,Ce);w("SSS",ga,Qd);var Fr,Lu;for(Fr="SSSS";Fr.length<=9;Fr+="S")w(Fr,yn);function UA(e,r){r[Hr]=Z(("0."+e)*1e3)}for(Fr="S";Fr.length<=9;Fr+="S")oe(Fr,UA);Lu=pn("Milliseconds",!1);C("z",0,0,"zoneAbbr");C("zz",0,0,"zoneName");function HA(){return this._isUTC?"UTC":""}function qA(){return this._isUTC?"Coordinated Universal Time":""}var O=bt.prototype;O.add=My;O.calendar=Hy;O.clone=qy;O.diff=zy;O.endOf=iA;O.format=eA;O.from=rA;O.fromNow=nA;O.to=tA;O.toNow=aA;O.get=Qf;O.invalidAt=mA;O.isAfter=Yy;O.isBefore=xy;O.isBetween=Cy;O.isSame=$y;O.isSameOrAfter=Jy;O.isSameOrBefore=Wy;O.isValid=EA;O.lang=hu;O.locale=cu;O.localeData=Su;O.max=Ey;O.min=ky;O.parsingFlags=vA;O.set=eR;O.startOf=sA;O.subtract=Vy;O.toArray=uA;O.toObject=gA;O.toDate=dA;O.toISOString=Xy;O.inspect=Qy;typeof Symbol<"u"&&Symbol.for!=null&&(O[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});O.toJSON=kA;O.toString=Zy;O.unix=lA;O.valueOf=oA;O.creationData=TA;O.eraName=AA;O.eraNarrow=pA;O.eraAbbr=bA;O.eraYear=_A;O.year=nu;O.isLeapYear=Xf;O.weekYear=DA;O.isoWeekYear=KA;O.quarter=O.quarters=GA;O.month=ou;O.daysInMonth=dR;O.week=O.weeks=fR;O.isoWeek=O.isoWeeks=RR;O.weeksInYear=FA;O.weeksInWeekYear=MA;O.isoWeeksInYear=LA;O.isoWeeksInISOWeekYear=PA;O.date=Ku;O.day=O.days=KR;O.weekday=LR;O.isoWeekday=PR;O.dayOfYear=wA;O.hour=O.hours=jR;O.minute=O.minutes=BA;O.second=O.seconds=jA;O.millisecond=O.milliseconds=Lu;O.utcOffset=by;O.utc=cy;O.local=hy;O.parseZone=Sy;O.hasAlignedHourOffset=Ny;O.isDST=Oy;O.isLocal=Dy;O.isUtcOffset=Ky;O.isUtc=Au;O.isUTC=Au;O.zoneAbbr=HA;O.zoneName=qA;O.dates=Xe("dates accessor is deprecated. Use date instead.",Ku);O.months=Xe("months accessor is deprecated. Use month instead",ou);O.years=Xe("years accessor is deprecated. Use year instead",nu);O.zone=Xe("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",_y);O.isDSTShifted=Xe("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Iy);function YA(e){return ve(e*1e3)}function xA(){return ve.apply(null,arguments).parseZone()}function Pu(e){return e}var se=Ks.prototype;se.calendar=Df;se.longDateFormat=Ff;se.invalidDate=Vf;se.ordinal=Bf;se.preparse=Pu;se.postformat=Pu;se.relativeTime=Uf;se.pastFuture=Hf;se.set=Of;se.eras=fA;se.erasParse=RA;se.erasConvertYear=yA;se.erasAbbrRegex=hA;se.erasNameRegex=cA;se.erasNarrowRegex=SA;se.months=sR;se.monthsShort=iR;se.monthsParse=lR;se.monthsRegex=gR;se.monthsShortRegex=uR;se.week=ER;se.firstDayOfYear=TR;se.firstDayOfWeek=mR;se.weekdays=SR;se.weekdaysMin=OR;se.weekdaysShort=NR;se.weekdaysParse=DR;se.weekdaysRegex=FR;se.weekdaysShortRegex=MR;se.weekdaysMinRegex=VR;se.isPM=wR;se.meridiem=UR;function na(e,r,n,t){var a=Dr(),s=mr().set(t,r);return a[n](s,e)}function Fu(e,r,n){if(Or(e)&&(r=e,e=void 0),e=e||"",r!=null)return na(e,r,n,"month");var t,a=[];for(t=0;t<12;t++)a[t]=na(e,t,n,"month");return a}function Ws(e,r,n,t){typeof e=="boolean"?(Or(r)&&(n=r,r=void 0),r=r||""):(r=e,n=r,e=!1,Or(r)&&(n=r,r=void 0),r=r||"");var a=Dr(),s=e?a._week.dow:0,i,o=[];if(n!=null)return na(r,(n+s)%7,t,"day");for(i=0;i<7;i++)o[i]=na(r,(i+s)%7,t,"day");return o}function CA(e,r){return Fu(e,r,"months")}function $A(e,r){return Fu(e,r,"monthsShort")}function JA(e,r,n){return Ws(e,r,n,"weekdays")}function WA(e,r,n){return Ws(e,r,n,"weekdaysShort")}function zA(e,r,n){return Ws(e,r,n,"weekdaysMin")}Mr("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var r=e%10,n=Z(e%100/10)===1?"th":r===1?"st":r===2?"nd":r===3?"rd":"th";return e+n}});M.lang=Xe("moment.lang is deprecated. Use moment.locale instead.",Mr);M.langData=Xe("moment.langData is deprecated. Use moment.localeData instead.",Dr);var Rr=Math.abs;function ZA(){var e=this._data;return this._milliseconds=Rr(this._milliseconds),this._days=Rr(this._days),this._months=Rr(this._months),e.milliseconds=Rr(e.milliseconds),e.seconds=Rr(e.seconds),e.minutes=Rr(e.minutes),e.hours=Rr(e.hours),e.months=Rr(e.months),e.years=Rr(e.years),this}function Mu(e,r,n,t){var a=ir(r,n);return e._milliseconds+=t*a._milliseconds,e._days+=t*a._days,e._months+=t*a._months,e._bubble()}function XA(e,r){return Mu(this,e,r,1)}function QA(e,r){return Mu(this,e,r,-1)}function zi(e){return e<0?Math.floor(e):Math.ceil(e)}function ep(){var e=this._milliseconds,r=this._days,n=this._months,t=this._data,a,s,i,o,l;return e>=0&&r>=0&&n>=0||e<=0&&r<=0&&n<=0||(e+=zi(os(n)+r)*864e5,r=0,n=0),t.milliseconds=e%1e3,a=Je(e/1e3),t.seconds=a%60,s=Je(a/60),t.minutes=s%60,i=Je(s/60),t.hours=i%24,r+=Je(i/24),l=Je(Vu(r)),n+=l,r-=zi(os(l)),o=Je(n/12),n%=12,t.days=r,t.months=n,t.years=o,this}function Vu(e){return e*4800/146097}function os(e){return e*146097/4800}function rp(e){if(!this.isValid())return NaN;var r,n,t=this._milliseconds;if(e=Qe(e),e==="month"||e==="quarter"||e==="year")switch(r=this._days+t/864e5,n=this._months+Vu(r),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(r=this._days+Math.round(os(this._months)),e){case"week":return r/7+t/6048e5;case"day":return r+t/864e5;case"hour":return r*24+t/36e5;case"minute":return r*1440+t/6e4;case"second":return r*86400+t/1e3;case"millisecond":return Math.floor(r*864e5)+t;default:throw new Error("Unknown unit "+e)}}function Kr(e){return function(){return this.as(e)}}var Gu=Kr("ms"),np=Kr("s"),tp=Kr("m"),ap=Kr("h"),sp=Kr("d"),ip=Kr("w"),op=Kr("M"),lp=Kr("Q"),dp=Kr("y"),up=Gu;function gp(){return ir(this)}function kp(e){return e=Qe(e),this.isValid()?this[e+"s"]():NaN}function zr(e){return function(){return this.isValid()?this._data[e]:NaN}}var Ep=zr("milliseconds"),vp=zr("seconds"),mp=zr("minutes"),Tp=zr("hours"),fp=zr("days"),Rp=zr("months"),yp=zr("years");function Ap(){return Je(this.days()/7)}var Ar=Math.round,dn={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function pp(e,r,n,t,a){return a.relativeTime(r||1,!!n,e,t)}function bp(e,r,n,t){var a=ir(e).abs(),s=Ar(a.as("s")),i=Ar(a.as("m")),o=Ar(a.as("h")),l=Ar(a.as("d")),u=Ar(a.as("M")),d=Ar(a.as("w")),E=Ar(a.as("y")),v=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||i<=1&&["m"]||i<n.m&&["mm",i]||o<=1&&["h"]||o<n.h&&["hh",o]||l<=1&&["d"]||l<n.d&&["dd",l];return n.w!=null&&(v=v||d<=1&&["w"]||d<n.w&&["ww",d]),v=v||u<=1&&["M"]||u<n.M&&["MM",u]||E<=1&&["y"]||["yy",E],v[2]=r,v[3]=+e>0,v[4]=t,pp.apply(null,v)}function _p(e){return e===void 0?Ar:typeof e=="function"?(Ar=e,!0):!1}function cp(e,r){return dn[e]===void 0?!1:r===void 0?dn[e]:(dn[e]=r,e==="s"&&(dn.ss=r-1),!0)}function hp(e,r){if(!this.isValid())return this.localeData().invalidDate();var n=!1,t=dn,a,s;return typeof e=="object"&&(r=e,e=!1),typeof e=="boolean"&&(n=e),typeof r=="object"&&(t=Object.assign({},dn,r),r.s!=null&&r.ss==null&&(t.ss=r.s-1)),a=this.localeData(),s=bp(this,!n,t,a),n&&(s=a.pastFuture(+this,s)),a.postformat(s)}var Ba=Math.abs;function tn(e){return(e>0)-(e<0)||+e}function ya(){if(!this.isValid())return this.localeData().invalidDate();var e=Ba(this._milliseconds)/1e3,r=Ba(this._days),n=Ba(this._months),t,a,s,i,o=this.asSeconds(),l,u,d,E;return o?(t=Je(e/60),a=Je(t/60),e%=60,t%=60,s=Je(n/12),n%=12,i=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",u=tn(this._months)!==tn(o)?"-":"",d=tn(this._days)!==tn(o)?"-":"",E=tn(this._milliseconds)!==tn(o)?"-":"",l+"P"+(s?u+s+"Y":"")+(n?u+n+"M":"")+(r?d+r+"D":"")+(a||t||e?"T":"")+(a?E+a+"H":"")+(t?E+t+"M":"")+(e?E+i+"S":"")):"P0D"}var re=fa.prototype;re.isValid=Ry;re.abs=ZA;re.add=XA;re.subtract=QA;re.as=rp;re.asMilliseconds=Gu;re.asSeconds=np;re.asMinutes=tp;re.asHours=ap;re.asDays=sp;re.asWeeks=ip;re.asMonths=op;re.asQuarters=lp;re.asYears=dp;re.valueOf=up;re._bubble=ep;re.clone=gp;re.get=kp;re.milliseconds=Ep;re.seconds=vp;re.minutes=mp;re.hours=Tp;re.days=fp;re.weeks=Ap;re.months=Rp;re.years=yp;re.humanize=hp;re.toISOString=ya;re.toString=ya;re.toJSON=ya;re.locale=cu;re.localeData=Su;re.toIsoString=Xe("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ya);re.lang=hu;C("X",0,0,"unix");C("x",0,0,"valueOf");w("x",Ea);w("X",Cf);oe("X",function(e,r,n){n._d=new Date(parseFloat(e)*1e3)});oe("x",function(e,r,n){n._d=new Date(Z(e))});//! moment.js
M.version="2.30.1";Sf(ve);M.fn=O;M.min=vy;M.max=my;M.now=Ty;M.utc=mr;M.unix=YA;M.months=CA;M.isDate=pt;M.locale=Mr;M.invalid=da;M.duration=ir;M.isMoment=tr;M.weekdays=JA;M.parseZone=xA;M.localeData=Dr;M.isDuration=Yt;M.monthsShort=$A;M.weekdaysMin=zA;M.defineLocale=Us;M.updateLocale=xR;M.locales=CR;M.weekdaysShort=WA;M.normalizeUnits=Qe;M.relativeTimeRounding=_p;M.relativeTimeThreshold=cp;M.calendarFormat=Uy;M.prototype=O;M.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Sp={"ValidationMessage.NotEmpty":"Feltet må fylles ut","ValidationMessage.MinLength":"Du må skrive minst {length} tegn","ValidationMessage.MaxLength":"Du kan skrive maksimalt {length} tegn","ValidationMessage.MinValue":"Feltet må være større eller lik {length}","ValidationMessage.MaxValue":"Feltet må være mindre eller lik {length}","ValidationMessage.InvalidDate":"Dato må skrives slik : dd.mm.åååå","ValidationMessage.DateNotBeforeOrEqual":"Dato må være før eller lik {limit}","ValidationMessage.DateNotAfterOrEqual":"Dato må være etter eller lik {limit}","ValidationMessage.DateRangesOverlapping":"Perioder kan ikke overlappe i tid","ValidationMessage.DateRangesOverlappingPeriodTypes":"Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)","ValidationMessage.DatesNotEqual":"Dato må være lik {value}","ValidationMessage.InvalidInteger":"Tallet kan ikke ha desimaler","ValidationMessage.InvalidDecimal":"Tallet kan ikke inneholde mer enn to desimaler","ValidationMessage.InvalidDatesInPeriod":"Periode må skrives slik : dd.mm.åååå - dd.mm.åååå","ValidationMessage.InvalidPeriod":"Startdato må være før eller lik sluttdato","ValidationMessage.InvalidPeriodRange":"Periode er utenfor opptjeningsperioden","ValidationMessage.InvalidNumber":"Feltet kan kun inneholde tall","ValidationMessage.maxLengthOrFodselsnr":"Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)","ValidationMessage.Registrering.TerminEllerFoedselMessage":"Fyll ut informasjon om termindato eller fødselsdato","ValidationMessage.InvalidFodselsnummerFormat":"Feltet må være et fødselsnummer (11 siffer)","ValidationMessage.InvalidFodselsnummer":"Ugyldig fødselsnummer","ValidationMessage.SammeFodselsnummerSomSoker":"Fødselsnummer til den andre forelderen kan ikke være det samme som søker.","ValidationMessage.InvalidText":"Feltet inneholder ugyldige tegn: {text}","ValidationMessage.InvalidValue":"Feltet inneholder en ugyldig verdi: {value}","ValidationMessage.ArrayMinLength":"Listen må ha lengde større enn: {length}","ValidationMessage.InvalidSaksnummerOrFodselsnummerFormat":"Ugyldig saksnummer eller fødselsnummer","ValidationMessage.InvalidOrganisasjonsnummer":"Ugyldig organisasjonsnummer.","ValidationMessage.InvalidOrganisasjonsnummerOrFodselsnr":"Ugyldig organisasjonsnummer eller fødselsnummer.","ValidationMessage.NoWhiteSpace":"Feltet kan ikke inneholde mellomrom."},Aa=Me(Sp),wu=()=>Aa.formatMessage({id:"ValidationMessage.NotEmpty"}),Np=e=>Aa.formatMessage({id:"ValidationMessage.MinLength"},{length:e}),Op=e=>Aa.formatMessage({id:"ValidationMessage.MaxLength"},{length:e}),Ip=e=>Aa.formatMessage({id:"ValidationMessage.InvalidText"},{text:e}),Dp=/^[0-9a-zA-ZæøåÆØÅAaÁáBbCcČčDdĐđEeFfGgHhIiJjKkLlMmNnŊŋOoPpRrSsŠšTtŦŧUuVvZzŽžéôèÉöüäÖÜÄ .'\-/%§!?@_()+:;,="&\n]*$/,Kp=/[0-9a-zA-ZæøåÆØÅAaÁáBbCcČčDdĐđEeFfGgHhIiJjKkLlMmNnŊŋOoPpRrSsŠšTtŦŧUuVvZzŽžéôèÉöüäÖÜÄ .'\-/%§!?@_()+:;,="&\n]*/g,pa=e=>e==null||e.toString().trim().length===0,Zi=e=>pa(e)?wu():void 0,Lp=e=>r=>pa(r)&&e(r)?wu():void 0,zs=e=>r=>pa(r)||r.toString().trim().length>=e?null:Np(e),ba=e=>r=>pa(r)||r.toString().trim().length<=e?null:Op(e),ta=e=>{if(!Dp.test(e)){const r=e.replace(Kp,"");return Ip(r.replace(/[\t]/g,"Tabulatortegn"))}return null},ht={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"};Me(ht);Me(ht);var _a=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(_a||{});_a.BRUKERS_ANDEL;_a.FRILANS;_a.EGEN_NÆRING;Me(ht);Me(ht);Me(ht);const Bu=(e,...r)=>{const n=r.find(t=>t===e);if(!n)throw Error(`Det finnes ikke enum for kode ${e}`);return n},Pp=(e,r)=>e===yg.TILBAKEKR_OPPRETT&&(!!r.simuleringResultat.sumInntrekk||!!r.simuleringResultatUtenInntrekk),ju=(e,r,n)=>n!=null&&r?Pp(n.videreBehandling,r)?"VedtakForm.OpprettTilbakekrOgInntrekk":kt(e)(n.videreBehandling,Nr.TILBAKEKR_VIDERE_BEH):"",Fp="_fritekstItem_1kqqb_1",Mp={fritekstItem:Fp},Vp=ba(1500),Gp=zs(3),St=({behandlingsresultat:e,språkKode:r,isReadOnly:n,labelTextCode:t})=>{const a=sr();return k.jsxs(k.Fragment,{children:[!n&&k.jsxs(k.Fragment,{children:[k.jsx(pe,{sixteenPx:!0}),k.jsx(Zt,{name:"begrunnelse",label:a.formatMessage({id:t}),validate:[Gp,Vp,ta],maxLength:1500,readOnly:n,parse:Ss,badges:[{type:"info",titleText:Ns(r)}]})]}),n&&(e==null?void 0:e.avslagsarsakFritekst)&&k.jsxs("span",{children:[k.jsx(pe,{twentyPx:!0}),k.jsx(Vr,{children:a.formatMessage({id:t})}),k.jsx(pe,{eightPx:!0}),k.jsx("div",{className:Mp.fritekstItem,children:$r(e.avslagsarsakFritekst)})]})]})};St.__docgenInfo={description:"",methods:[],displayName:"VedtakFritekstPanel",props:{behandlingsresultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},labelTextCode:{required:!0,tsType:{name:"string"},description:""}}};const Uu=({behandlingsresultat:e,ytelseTypeKode:r,språkKode:n,isReadOnly:t,skalBrukeOverstyrendeFritekstBrev:a,beregningErManueltFastsatt:s,resultatstruktur:i={}})=>{const o=sr();return k.jsxs(k.Fragment,{children:[r===z.ENGANGSSTONAD&&i&&"antallBarn"in i&&k.jsxs(Yr,{children:[k.jsxs(qr,{children:[k.jsxs(Pe,{children:[k.jsx(Vr,{children:o.formatMessage({id:"VedtakForm.beregnetTilkjentYtelse"})}),k.jsx(Ue,{size:"small",children:Pd(i.beregnetTilkjentYtelse)})]}),k.jsxs(Pe,{children:[k.jsx(Vr,{children:o.formatMessage({id:"VedtakForm.AntallBarn"})}),k.jsx(Ue,{size:"small",children:i.antallBarn})]})]}),k.jsx(pe,{sixteenPx:!0})]}),s&&!a&&k.jsx(St,{isReadOnly:t,språkKode:n,behandlingsresultat:e,labelTextCode:"VedtakForm.Fritekst.Beregningsgrunnlag"})]})};Uu.__docgenInfo={description:"",methods:[],displayName:"VedtakInnvilgetPanel",props:{resultatstruktur:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""}}};const ls=(e,r,n)=>{const t=e.filter(s=>s.vilkarStatus===aa.IKKE_OPPFYLT);if(t.length===0)return k.jsx(ye,{id:"VedtakForm.UttaksperioderIkkeGyldig"});if(!(n!=null&&n.avslagsarsak))throw new Error("Behandlingsresultat eller avslagsårsak finnes ikke");return`${r(t[0].vilkarType,Nr.VILKAR_TYPE)}: ${r(n.avslagsarsak,Nr.AVSLAGSARSAK,t[0].vilkarType)}`},wp=[],Hu=({vilkar:e=wp,behandlingsresultat:r,språkKode:n,isReadOnly:t,alleKodeverk:a,beregningErManueltFastsatt:s,skalBrukeOverstyrendeFritekstBrev:i})=>{const o=sr(),l=kt(a),u=s?"VedtakForm.Fritekst.Beregningsgrunnlag":"VedtakForm.Fritekst";return k.jsxs(k.Fragment,{children:[ls(e,l,r)&&k.jsxs("div",{children:[k.jsx(Ue,{size:"small",children:o.formatMessage({id:"VedtakForm.ArsakTilAvslag"})}),k.jsx(ze,{size:"small",children:ls(e,l,r)}),k.jsx(pe,{sixteenPx:!0})]}),!i&&k.jsx(St,{isReadOnly:t,språkKode:n,behandlingsresultat:r,labelTextCode:u})]})};ls.__docgenInfo={description:"",methods:[],displayName:"getAvslagArsak"};Hu.__docgenInfo={description:"",methods:[],displayName:"VedtakAvslagPanel",props:{vilkar:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};var ds=(e=>(e.PENDING="PENDING",e.COMPLETE="COMPLETE",e.DELAYED="DELAYED",e.CANCELLED="CANCELLED",e.HALTED="HALTED",e))(ds||{});const Bp="_line_7rsxc_1",jp="_smallTextArea_7rsxc_7",Up="_pil_7rsxc_11",Hp="_space_7rsxc_15",qp="_avsnittOverskrift_7rsxc_19",an={line:Bp,smallTextArea:jp,pil:Up,space:Hp,avsnittOverskrift:qp},Yp=ba(200),xp=ba(1e4),Xi=zs(3),qu=({forhåndsvisOverstyrtBrev:e,isReadOnly:r,språkKode:n,skalViseLink:t})=>{const a=sr();return k.jsxs(k.Fragment,{children:[k.jsx(pe,{thirtyTwoPx:!0}),k.jsx(uT,{}),k.jsx(pe,{thirtyTwoPx:!0}),k.jsx(Yr,{children:k.jsxs(qr,{children:[k.jsx(Pe,{className:an.space,children:k.jsx(Ue,{size:"small",className:an.avsnittOverskrift,children:k.jsx(ye,{id:"FritekstBrevPanel.ManueltVedtaksbrev"})})}),k.jsx(Pe,{className:an.space,children:k.jsx(Vr,{children:Ns(n)})}),k.jsx(Pe,{children:!r&&t&&k.jsxs(Ha,{href:"#",onClick:e,children:[k.jsx("span",{children:k.jsx(ye,{id:"FritekstBrevPanel.ForhandsvisManueltVedtaksbrev"})}),k.jsx(Cl,{className:an.pil})]})})]})}),k.jsx("hr",{className:an.line}),k.jsx(pe,{twentyPx:!0}),!r&&k.jsx(Zl,{variant:"info",size:"small",children:k.jsx(Ue,{size:"small",children:k.jsx(ye,{id:"VedtakFellesPanel.Forklaring"})})}),k.jsx(pe,{sixteenPx:!0}),k.jsx(Zt,{name:"overskrift",label:a.formatMessage({id:"VedtakForm.Overskrift"}),validate:[Zi,Xi,Yp,ta],maxLength:200,readOnly:r,className:an.smallTextArea}),k.jsx(pe,{thirtyTwoPx:!0}),k.jsx(Zt,{name:"brødtekst",label:a.formatMessage({id:"VedtakForm.Innhold"}),validate:[Zi,Xi,xp,ta],maxLength:1e4,readOnly:r,parse:Ss}),r&&k.jsxs(k.Fragment,{children:[k.jsx(pe,{sixteenPx:!0}),k.jsx(Yr,{children:k.jsxs(qr,{children:[k.jsx(Pe,{children:k.jsx(qd,{})}),k.jsx(Pe,{children:k.jsx(ze,{size:"small",children:k.jsx(ye,{id:"FritekstBrevPanel.Endret"})})})]})})]})]})};qu.__docgenInfo={description:"",methods:[],displayName:"ManueltVedtaksbrevPanel",props:{forhåndsvisOverstyrtBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},skalViseLink:{required:!0,tsType:{name:"boolean"},description:""}}};const Cp=(e,r)=>{const n=[];return r&&r.some(t=>t.definisjon===ke.VURDERE_ANNEN_YTELSE)&&n.push(e.formatMessage({id:"VedtakForm.VurderAnnenYtelse"})),r&&r.some(t=>t.definisjon===ke.VURDERE_DOKUMENT)&&n.push(e.formatMessage({id:"VedtakForm.VurderDokument"})),r&&r.some(t=>t.definisjon===ke.VURDERE_INNTEKTSMELDING_KLAGE)&&n.push(e.formatMessage({id:"VedtakForm.VurderInntektsmeldingKlage"})),r&&r.some(t=>t.definisjon===ke.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST)&&n.push(e.formatMessage({id:"VedtakForm.KontrollerRevurderingsbehandling"})),n},Yu=({isReadOnly:e,aksjonspunkter:r})=>{const n=sr(),t=Cp(n,r);return!e&&t.length>0?k.jsxs(k.Fragment,{children:[k.jsx(pe,{sixteenPx:!0}),k.jsxs(Zl,{variant:"info",size:"small",children:[k.jsx(ze,{size:"small",children:k.jsx(ye,{id:"VedtakHelpTextPanel.Vurder"})}),k.jsx("ul",{children:t.map(a=>k.jsx("li",{children:k.jsx(ze,{size:"small",children:a})},a))})]})]}):null};Yu.__docgenInfo={description:"",methods:[],displayName:"VedtakHelpTextPanel",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""}}};const $p="_pil_gjh8k_1",Jp="_blyant_gjh8k_5",Wp="_blyantDisablet_gjh8k_9",zp="_status_gjh8k_16",Zp="_innvilgetImage_gjh8k_21",Xp="_avslattImage_gjh8k_27",Qp="_disabletLink_gjh8k_33",eb="_space_gjh8k_38",yr={pil:$p,blyant:Jp,blyantDisablet:Wp,status:zp,innvilgetImage:Zp,avslattImage:Xp,disabletLink:Qp,space:eb},rb=e=>e===qe.AVSLUTTET||e===qe.IVERKSETTER_VEDTAK?"VedtakForm.vedtak":"VedtakForm.ForslagTilVedtak",nb=e=>e===qe.BEHANDLING_UTREDES,tb=(e,r)=>e&&e.some(n=>n.definisjon===ke.FORESLA_VEDTAK)||r?"VedtakForm.TilGodkjenning":"VedtakForm.FattVedtak",ab=e=>e.avslagsarsak?e.avslagsarsak!==Eg.INGEN_BEREGNINGSREGLER:!0,sb=(e,r)=>{if(!r)return!0;const{konsekvenserForYtelsen:n}=r;return!Array.isArray(n)||n.length!==1?!0:!e.some(t=>t===n[0])},Zs=({behandling:e,aksjonspunkter:r,readOnly:n,renderPanel:t,previewAutomatiskBrev:a,previewOverstyrtBrev:s,tilbakekrevingtekst:i,erBehandlingEtterKlage:o,vedtakstatusTekst:l})=>{const u=sr(),{setValue:d,formState:{isSubmitting:E}}=fn(),{behandlingsresultat:v,behandlingPaaVent:p,sprakkode:h,status:f,behandlingHenlagt:y,uuid:_,taskStatus:b}=e;if(!v)throw new Error(`behandlingsresultat finnes ikke på behandling ${_}`);const[A,B]=T.useState(!!v.vedtaksbrev&&v.vedtaksbrev==="FRITEKST"),[P,U]=T.useState(!1),N=T.useCallback($=>{B(!0),$.preventDefault()},[]),S=T.useCallback(()=>{B(!1),U(!1),d("overskrift",void 0),d("brødtekst",void 0)},[]),V=us(v.type),j=gs(v.type),Y=hl(v.type),D=ab(v),F=!y&&(b==null?void 0:b.status)!==ds.HALTED&&(b==null?void 0:b.status)!==ds.DELAYED,H=T.useMemo(()=>sb([Ye.ENDRING_I_FORDELING_AV_YTELSEN,Ye.INGEN_ENDRING],v),[v]);return k.jsxs(k.Fragment,{children:[k.jsx($v,{text:u.formatMessage({id:"VedtakFellesPanel.Forkast"}),okButtonText:u.formatMessage({id:"VedtakFellesPanel.Ok"}),showModal:P,cancel:()=>U(!1),submit:S}),k.jsx(Yr,{children:k.jsxs(qr,{children:[f===qe.AVSLUTTET&&k.jsxs(Pe,{children:[V&&k.jsx($l,{className:yr.innvilgetImage}),!V&&k.jsx(Wl,{className:yr.avslattImage})]}),k.jsx(Pe,{children:k.jsx(Rs,{size:"small",children:k.jsx(ye,{id:rb(f)})})})]})}),k.jsx(pe,{eightPx:!0}),k.jsx(Yr,{children:k.jsxs(qr,{children:[k.jsx(Pe,{className:yr.space,children:k.jsxs(Ue,{size:"small",children:[l,i&&`. ${u.formatMessage({id:i})}`]})}),k.jsxs(Pe,{className:yr.space,children:[D&&H&&F&&k.jsxs(Ha,{href:"#",onClick:a,children:[k.jsx("span",{children:k.jsx(ye,{id:o?"VedtakFellesPanel.UtkastVedtaksbrev":"VedtakFellesPanel.AutomatiskVedtaksbrev"})}),k.jsx(Cl,{className:yr.pil})]}),D&&H&&!F&&k.jsx(ze,{size:"small",className:yr.disabletLink,children:k.jsx(ye,{id:o?"VedtakFellesPanel.UtkastVedtaksbrev":"VedtakFellesPanel.AutomatiskVedtaksbrev"})})]}),k.jsxs(Pe,{children:[!n&&!A&&k.jsxs(Ha,{href:"#",onClick:N,children:[k.jsx(mi,{className:yr.blyant}),k.jsx("span",{children:k.jsx(ye,{id:"VedtakFellesPanel.RedigerVedtaksbrev"})})]}),(n||A)&&k.jsxs(k.Fragment,{children:[k.jsx(mi,{className:yr.blyantDisablet}),k.jsx(ze,{size:"small",className:yr.disabletLink,children:k.jsx(ye,{id:"VedtakFellesPanel.RedigerVedtaksbrev"})})]})]})]})}),k.jsx(Yu,{aksjonspunkter:r,isReadOnly:n}),k.jsx(pe,{twentyPx:!0}),t(A,V,j,Y),A&&k.jsx(qu,{isReadOnly:n,språkKode:h,forhåndsvisOverstyrtBrev:s,skalViseLink:D}),nb(f)&&k.jsxs(k.Fragment,{children:[k.jsx(pe,{twentyPx:!0}),k.jsx(Yr,{children:k.jsxs(qr,{children:[k.jsx(Pe,{children:!n&&k.jsx(vn,{variant:"primary",size:"small",disabled:p||E,loading:E,children:k.jsx(ye,{id:tb(r,A)})})}),A&&k.jsx(Pe,{children:k.jsx(vn,{size:"small",variant:"secondary",onClick:()=>U(!0),type:"button",children:k.jsx(ye,{id:"VedtakFellesPanel.ForkastManueltBrev"})})})]})})]})]})};Zs.__docgenInfo={description:"",methods:[],displayName:"VedtakFellesPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
) => ReactNode`,signature:{arguments:[{type:{name:"boolean"},name:"skalBrukeManueltBrev"},{type:{name:"boolean"},name:"erInnvilget"},{type:{name:"boolean"},name:"erAvslatt"},{type:{name:"boolean"},name:"erOpphor"}],return:{name:"ReactNode"}}},description:""},previewAutomatiskBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},previewOverstyrtBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},tilbakekrevingtekst:{required:!1,tsType:{name:"string"},description:""},vedtakstatusTekst:{required:!1,tsType:{name:"string"},description:""}}};const ib=(e,r)=>e===W.KLAGE_YTELSESVEDTAK_OPPHEVET?"VedtakForm.ResultatKlageYtelsesvedtakOpphevet":e===W.KLAGE_AVVIST?"VedtakForm.ResultatKlageAvvist":r===z.ENGANGSSTONAD?"VedtakForm.EngangsstonadIkkeInnvilget":r===z.SVANGERSKAPSPENGER?"VedtakForm.SvangerskapspengerIkkeInnvilget":"VedtakForm.ForeldrepengerIkkeInnvilget",ob=(e,r)=>e===W.KLAGE_YTELSESVEDTAK_STADFESTET?"VedtakForm.ResultatOpprettholdVedtak":fg(e)?"VedtakForm.ResultatKlageMedhold":r===z.ENGANGSSTONAD?"VedtakForm.VilkarStatusInnvilgetEngangsstonad":r===z.SVANGERSKAPSPENGER?"VedtakForm.SvangerskapspengerInnvilget":"VedtakForm.VilkarStatusInnvilgetForeldrepenger",Qi=(e,r,n,t,a,s)=>i=>{i.preventDefault();const o=e?!!a&&!!s:!!t;if(n(),!e||o){const l={fritekst:e?a:t,dokumentMal:e?Sl.FRITEKST:void 0,tittel:e?s:void 0,gjelderVedtak:!0,automatiskVedtaksbrev:e?void 0:!0};r(l)}},lb=(e=[])=>e.map(({behandlingArsakType:r})=>r).some(r=>r===cr.ETTER_KLAGE||r===cr.KLAGE_U_INNTK||r===cr.KLAGE_M_INNTK),db=(e,r,n)=>n&&us(n.type)?e.formatMessage({id:ob(n.type,r)}):n&&gs(n.type)?e.formatMessage({id:ib(n.type,r)}):"",ub=e=>e.aksjonspunktKoder.map(r=>({kode:Bu(r,ke.FORESLA_VEDTAK,ke.FORESLA_VEDTAK_MANUELT,ke.VURDERE_ANNEN_YTELSE,ke.VURDERE_DOKUMENT),begrunnelse:e.begrunnelse,fritekstBrev:e.brødtekst,skalBrukeOverstyrendeFritekstBrev:!!e.brødtekst,overskrift:e.overskrift})),gb=(e,r)=>{var n;if(r)return(n=e.behandlingsresultat)!=null&&n.avslagsarsakFritekst?$r(e.behandlingsresultat.avslagsarsakFritekst):void 0},kb=(e,r,n)=>{var t,a;return{beregningErManueltFastsatt:n,aksjonspunktKoder:e.filter(s=>s.kanLoses).map(s=>s.definisjon),overskrift:$r((t=r.behandlingsresultat)==null?void 0:t.overskrift),brødtekst:$r((a=r.behandlingsresultat)==null?void 0:a.fritekstbrev),begrunnelse:gb(r,n)}},xu=({behandling:e,readOnly:r,aksjonspunkter:n,previewCallback:t,ytelseTypeKode:a,resultatstruktur:s,alleKodeverk:i,tilbakekrevingvalg:o,simuleringResultat:l,vilkar:u,beregningErManueltFastsatt:d,submitCallback:E,formData:v,setFormData:p})=>{const h=sr(),f=Hl({defaultValues:v||kb(n,e,d)}),y=f.watch("begrunnelse"),_=f.watch("overskrift"),b=f.watch("brødtekst"),{trigger:A}=f,{behandlingsresultat:B,sprakkode:P}=e,U=T.useMemo(()=>lb(e.behandlingÅrsaker),[e.behandlingÅrsaker]),N=T.useMemo(()=>ju(i,l,o),[l,o]),S=T.useMemo(()=>db(h,a,B),[B]),V=Qi(!0,t,A,y,b,_),j=Qi(!1,t,A,y,b,_);return k.jsx(Cd,{formMethods:f,onSubmit:Y=>E(ub(Y)),setDataOnUnmount:p,children:k.jsx(Zs,{behandling:e,vedtakstatusTekst:S,aksjonspunkter:n,readOnly:r,previewAutomatiskBrev:j,previewOverstyrtBrev:V,tilbakekrevingtekst:N,erBehandlingEtterKlage:U,renderPanel:(Y,D,F)=>D?k.jsx(Uu,{behandlingsresultat:B,isReadOnly:r,skalBrukeOverstyrendeFritekstBrev:Y,ytelseTypeKode:a,språkKode:P,resultatstruktur:s,beregningErManueltFastsatt:d}):F?k.jsx(Hu,{behandlingsresultat:B,isReadOnly:r,språkKode:P,alleKodeverk:i,vilkar:u,beregningErManueltFastsatt:d,skalBrukeOverstyrendeFritekstBrev:Y}):null})})};xu.__docgenInfo={description:"",methods:[],displayName:"VedtakForm",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"beregningErManueltFastsatt",value:{name:"boolean",required:!1}},{key:"aksjonspunktKoder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"brødtekst",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var Fn=(e=>(e.INNVILGET="INNVILGET",e.AVSLAG="AVSLAG",e))(Fn||{});const Cu=({ytelseTypeKode:e,revurderingsÅrsakString:r,isReadOnly:n,resultatstruktur:t,språkKode:a,behandlingsresultat:s,beregningErManueltFastsatt:i,skalBrukeOverstyrendeFritekstBrev:o})=>k.jsxs(k.Fragment,{children:[e===z.ENGANGSSTONAD&&t&&"antallBarn"in t&&k.jsx(Yr,{children:k.jsxs(qr,{children:[k.jsxs(Pe,{children:[k.jsx(Vr,{children:k.jsx(ye,{id:"VedtakForm.beregnetTilkjentYtelse"})}),k.jsx(Ue,{size:"small",children:Pd(t.beregnetTilkjentYtelse)})]}),k.jsxs(Pe,{children:[k.jsx(Vr,{children:k.jsx(ye,{id:"VedtakForm.AntallBarn"})}),k.jsx(Ue,{size:"small",children:t.antallBarn})]})]})}),(e===z.FORELDREPENGER||e===z.SVANGERSKAPSPENGER)&&k.jsxs(k.Fragment,{children:[r&&k.jsxs(k.Fragment,{children:[k.jsx(Ue,{size:"small",children:k.jsx(ye,{id:"VedtakForm.RevurderingFP.Aarsak"})}),k.jsx(ze,{size:"small",children:r}),k.jsx(pe,{eightPx:!0})]}),!o&&i&&k.jsx(St,{isReadOnly:n,språkKode:a,behandlingsresultat:s,labelTextCode:"VedtakForm.Fritekst.Beregningsgrunnlag"})]})]});Cu.__docgenInfo={description:"",methods:[],displayName:"VedtakInnvilgetRevurderingPanel",props:{ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},revurderingsÅrsakString:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},resultatstruktur:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const Eb="_fritekstItem_1kqqb_1",vb={fritekstItem:Eb},mb=ba(1500),Tb=zs(3),fb=(e,r,n)=>{const t=r.filter(s=>s.vilkarStatus===aa.IKKE_OPPFYLT);if(t.length===0)return k.jsx(ye,{id:"VedtakForm.UttaksperioderIkkeGyldig"});if(!(n!=null&&n.avslagsarsak))throw new Error("Ingen behandlingsresultat eller avslagsårsak finnes");return`${e(t[0].vilkarType,Nr.VILKAR_TYPE)}: ${e(n.avslagsarsak,Nr.AVSLAGSARSAK,t[0].vilkarType)}`},$u=({vilkar:e,behandlingsresultat:r,språkKode:n,erReadOnly:t,alleKodeverk:a,skalBrukeOverstyrendeFritekstBrev:s})=>{const{formState:{isDirty:i}}=fn(),o=kt(a),l=d=>d!==void 0||i,u=fb(o,e,r);return k.jsxs(k.Fragment,{children:[u&&k.jsxs(k.Fragment,{children:[k.jsx(Ue,{size:"small",children:k.jsx(ye,{id:"VedtakForm.ArsakTilAvslag"})}),k.jsx(ze,{size:"small",children:u}),k.jsx(pe,{sixteenPx:!0})]}),!s&&k.jsxs(k.Fragment,{children:[k.jsx(pe,{sixteenPx:!0}),k.jsx(Zt,{name:"begrunnelse",label:k.jsx(ye,{id:"VedtakForm.Fritekst"}),validate:[Lp(l),Tb,mb,ta],maxLength:1500,readOnly:t,parse:Ss,badges:[{type:"info",titleText:Ns(n)}]})]}),t&&(r==null?void 0:r.avslagsarsakFritekst)&&k.jsxs("span",{children:[k.jsx(pe,{twentyPx:!0}),k.jsx(Vr,{children:k.jsx(ye,{id:"VedtakForm.Fritekst"})}),k.jsx(pe,{eightPx:!0}),k.jsx("div",{className:vb.fritekstItem,children:$r(r.avslagsarsakFritekst)})]})]})};$u.__docgenInfo={description:"",methods:[],displayName:"VedtakAvslagArsakOgBegrunnelsePanel",props:{vilkar:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const Ju=({revurderingsÅrsakString:e,språkKode:r,isReadOnly:n,behandlingsresultat:t,beregningErManueltFastsatt:a,skalBrukeOverstyrendeFritekstBrev:s})=>k.jsxs(k.Fragment,{children:[k.jsx(Ue,{size:"small",children:k.jsx(ye,{id:"VedtakForm.RevurderingFP.Aarsak"})}),e&&k.jsx(ze,{size:"small",children:e}),!s&&a&&k.jsx(St,{isReadOnly:n,språkKode:r,behandlingsresultat:t,labelTextCode:"VedtakForm.Fritekst.Beregningsgrunnlag"})]});Ju.__docgenInfo={description:"",methods:[],displayName:"VedtakOpphorRevurderingPanel",props:{revurderingsÅrsakString:{required:!1,tsType:{name:"string"},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},behandlingsresultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const eo=(e,r,n,t,a)=>s=>{if(s.preventDefault(),!e||(e?!!t&&!!n:!!a)){const o={fritekst:e?t:a,dokumentMal:e?Sl.FRITEKST:void 0,tittel:e?n:void 0,gjelderVedtak:!0,automatiskVedtaksbrev:e?void 0:!0};r(o)}},Rb=(e=[])=>e.map(({behandlingArsakType:r})=>r).some(r=>r===cr.ETTER_KLAGE||r===cr.KLAGE_U_INNTK||r===cr.KLAGE_M_INNTK),yb=(e,r)=>{if(e===void 0||e.length<1)return;const n=[],t=e.find(s=>s===cr.RE_ENDRING_FRA_BRUKER),a=e.filter(s=>s!==cr.RE_ENDRING_FRA_BRUKER).map(s=>r(s,Nr.BEHANDLING_AARSAK));return t!==void 0&&n.push(r(t,Nr.BEHANDLING_AARSAK)),n.push(...a),n.join(", ")},Ab=(e,r)=>{const n=e?Fn.INNVILGET:Fn.AVSLAG;return(r?Fn.INNVILGET:Fn.AVSLAG)!==n},pb=(e,r)=>!r||r.length<1?"":r.map(n=>e(n,Nr.KONSEKVENS_FOR_YTELSEN)).join(" og "),ro=(e,r,n)=>r?n?e&&"beregnetTilkjentYtelse"in r&&"beregnetTilkjentYtelse"in n?r.beregnetTilkjentYtelse!==n.beregnetTilkjentYtelse:"antallBarn"in r&&"antallBarn"in n?r.antallBarn!==n.antallBarn:!1:!0:!1,Wu=(e,r,n)=>Ab(r,n)?r?"VedtakForm.Resultat.EndretTilInnvilget":"VedtakForm.Resultat.EndretTilAvslag":e?ro(e,r,n)?"VedtakForm.Resultat.EndretTilkjentYtelse":"VedtakForm.Resultat.IngenEndring":ro(e,r,n)?"VedtakForm.Resultat.EndretAntallBarn":"VedtakForm.Resultat.IngenEndring",bb=(e,r,n,t,a,s,i)=>{if(r===z.ENGANGSSTONAD)return e.formatMessage({id:Wu(!0,s,i)});const o=pb(n,a);return`${o}${o!==""?t:". "}`},_b=(e,r,n)=>e&&"opphoersdato"in e&&e.opphoersdato?e.opphoersdato:r||(n!=null&&n.skjæringstidspunkt?n.skjæringstidspunkt.dato:""),cb=e=>e.aksjonspunktKoder.map(r=>({kode:Bu(r,ke.FORESLA_VEDTAK,ke.FORESLA_VEDTAK_MANUELT,ke.VURDERE_ANNEN_YTELSE,ke.VURDERE_DOKUMENT,ke.VURDERE_INNTEKTSMELDING_KLAGE,ke.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,ke.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING),begrunnelse:e.begrunnelse,fritekstBrev:e.brødtekst,skalBrukeOverstyrendeFritekstBrev:!!e.brødtekst,overskrift:e.overskrift})),hb=(e,r)=>{var n,t;return{aksjonspunktKoder:e.filter(a=>a.kanLoses).map(a=>a.definisjon),overskrift:$r((n=r.behandlingsresultat)==null?void 0:n.overskrift),brødtekst:$r((t=r.behandlingsresultat)==null?void 0:t.fritekstbrev)}},zu=({behandling:e,readOnly:r,aksjonspunkter:n,previewCallback:t,ytelseTypeKode:a,resultatstruktur:s,alleKodeverk:i,tilbakekrevingvalg:o,simuleringResultat:l,vilkar:u,beregningErManueltFastsatt:d,medlemskapFom:E,resultatstrukturOriginalBehandling:v,submitCallback:p,formData:h,setFormData:f})=>{const y=sr(),_=Hl({defaultValues:h||hb(n,e)}),b=_.watch("begrunnelse"),A=_.watch("overskrift"),B=_.watch("brødtekst"),{behandlingsresultat:P,sprakkode:U,behandlingÅrsaker:N}=e,S=T.useMemo(()=>Rb(e.behandlingÅrsaker),[e.behandlingÅrsaker]),V=T.useMemo(()=>yb(N.map(H=>H.behandlingArsakType),kt(i)),[N]),j=T.useMemo(()=>ju(i,l,o),[l,o]);let Y="";if(P&&us(P.type)){const H=P!==void 0?P.konsekvenserForYtelsen:void 0;Y=bb(y,a,kt(i),j,H,s,v)}P&&gs(P.type)&&(Y=y.formatMessage({id:Wu(!1,s,v)})),P&&hl(P.type)&&(Y=y.formatMessage({id:a===z.SVANGERSKAPSPENGER?"VedtakForm.RevurderingSVP.SvangerskapspengerOpphoerer":"VedtakForm.RevurderingFP.ForeldrepengerOpphoerer"},{dato:M(_b(s,E,P)).format(Mv)}));const D=eo(!0,t,A,B,b),F=eo(!1,t,A,B,b);return k.jsx(Cd,{formMethods:_,onSubmit:H=>p(cb(H)),setDataOnUnmount:f,children:k.jsx(Zs,{behandling:e,vedtakstatusTekst:Y,aksjonspunkter:n,readOnly:r,previewAutomatiskBrev:F,previewOverstyrtBrev:D,tilbakekrevingtekst:j,erBehandlingEtterKlage:S,renderPanel:(H,$,Q,ue)=>$?k.jsx(Cu,{ytelseTypeKode:a,revurderingsÅrsakString:V,isReadOnly:r,resultatstruktur:s,språkKode:U,behandlingsresultat:P,beregningErManueltFastsatt:d,skalBrukeOverstyrendeFritekstBrev:H}):Q?k.jsx($u,{vilkar:u,behandlingsresultat:P,språkKode:U,erReadOnly:r,alleKodeverk:i,skalBrukeOverstyrendeFritekstBrev:H}):ue?k.jsx(Ju,{revurderingsÅrsakString:V,isReadOnly:r,behandlingsresultat:P,språkKode:U,beregningErManueltFastsatt:d,skalBrukeOverstyrendeFritekstBrev:H}):null})})};zu.__docgenInfo={description:"",methods:[],displayName:"VedtakRevurderingForm",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}],raw:"RevurderingVedtakAksjonspunkter[]"},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},formData:{required:!1,tsType:{name:"FormValues"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"FormValues"},name:"data"}],return:{name:"void"}}},description:""}}};const Sb={"VedtakForm.ForslagTilVedtak":"Vedtak","VedtakForm.BehandlingHenlagt":"Behandlingen er henlagt","VedtakForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakForm.ResultatKlageAvvist":"Klagen er avvist","VedtakForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakForm.SvangerskapspengerIkkeInnvilget":"Svangerskapspenger er avslått","VedtakForm.ForeldrepengerIkkeInnvilget":"Foreldrepenger er avslått","VedtakForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakForm.VilkarStatusInnvilget":"Engangsstønad er innvilget","VedtakForm.VilkarStatusInnvilgetEngangsstonad":"Engangsstønad er innvilget","VedtakForm.SvangerskapspengerInnvilget":"Svangerskapspenger er innvilget","VedtakForm.VilkarStatusInnvilgetForeldrepenger":"Foreldrepenger er innvilget","VedtakForm.OpprettTilbakekrOgInntrekk":"Feilutbetaling med tilbakekreving hvor beløp er redusert med inntrekk","VedtakForm.TilGodkjenning":"Til godkjenning","VedtakForm.FattVedtak":"Fatt vedtak","VedtakForm.ForhandvisBrev":"Forhåndsvis brev","VedtakForm.beregnetTilkjentYtelse":"Beregnet engangsstønad","VedtakForm.AntallBarn":"Antall barn","VedtakForm.vedtak":"Vedtak","VedtakForm.Resultat":"Resultat","VedtakForm.ArsakTilAvslag":"Årsak til avslag","VedtakForm.Fritekst":"Fritekst i brev til søker","VedtakForm.Fritekst.Beregningsgrunnlag":"Fritekst i brev til søker som handler om fastsettelse av beregningsgrunnlaget","VedtakForm.VurderAnnenYtelse":"Påvirker den åpne Gosys-oppgaven «Vurder konsekvens for ytelse» behandlingen?","VedtakForm.VurderDokument":"Påvirker den åpne Gosys-oppgaven «Vurder dokument» behandlingen?","VedtakForm.VurderInntektsmeldingKlage":"Det er en åpen klagesak, og det er mottatt ny inntektsmelding. Vurder beregningsgrunnlaget på nytt og behandle revurdering og klage under ett.","VedtakForm.Resultat.IngenEndring":"Ingen endring","VedtakForm.Resultat.EndretTilAvslag":"Endret til Avslag","VedtakForm.Resultat.EndretTilInnvilget":"Endret til Innvilget","VedtakForm.Resultat.EndretTilkjentYtelse":"Endret beregnet stønad","VedtakForm.KontrollerRevurderingsbehandling":"Beregningsgrunnlaget er endret til ugunst for søker. Skal det sendes varsel?","VedtakForm.UttaksperioderIkkeGyldig":"Søker har ikke noen gyldig uttaksperiode","VedtakForm.RevurderingFP.Aarsak":"Årsak til revurdering","VedtakForm.RevurderingFP.ForeldrepengerOpphoerer":"Foreldrepenger opphører f.o.m. {dato}","VedtakForm.RevurderingSVP.SvangerskapspengerOpphoerer":"Svangerskapspenger opphører f.o.m. {dato}","VedtakForm.ManuellOverstyring":"Overstyr automatisk brev","VedtakForm.Overskrift":"Overskrift","VedtakForm.Innhold":"Innhold i brev til søker","VedtakForm.SvpFritektsBrevModal.Ok":"Ok","VedtakForm.SvpFritektsBrevModal.IngenAutomatiskVedtaksbrev":"I denne behandlingen er det ikke automatisk vedtaksbrev. Du må velge 'Overstyr automatisk brev' og skrive fritekstbrev.","VedtakForm.SvpFritektsBrevModal.IngenAutomatiskVedtaksbrevImage":"Ingen automatisk vedtaksbrev.","VedtakForm.SvpFritektsBrevModal.ModalDescription":"Informasjonsboks om ingen automatisk vedtaksbrev. Fritekstbrev er nødvendig.","VedtakFellesPanel.RedigerVedtaksbrev":"Rediger vedtaksbrev","VedtakFellesPanel.AutomatiskVedtaksbrev":"Automatisk vedtaksbrev","VedtakFellesPanel.UtkastVedtaksbrev":"Utkast vedtaksbrev","VedtakFellesPanel.ForkastManueltBrev":"Forkast manuelt brev","VedtakFellesPanel.Forklaring":"Tekst fra det automatisk genererte brevet kan kopieres og limes inn i det manuelle brevet","VedtakFellesPanel.Forkast":"Dersom du forkaster det manuelle brevet, vil det erstattes av det automatisk genererte brevet","VedtakFellesPanel.Ok":"Forkast manuelt brev","FritekstBrevPanel.Endret":"Endret av saksbehandler","FritekstBrevPanel.ManueltVedtaksbrev":"Manuelt vedtaksbrev","FritekstBrevPanel.ForhandsvisManueltVedtaksbrev":"Forhåndsvis manuelt brev","VedtakHelpTextPanel.Vurder":"Vurder følgende før du sender til godkjenning:","Malform.Beskrivelse":"Foretrukket språk"},Nb=Me(Sb),Ob=[ke.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ke.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ke.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD],Ib=(e,r)=>{var s;if(!r||!e)return!1;const n=e.find(i=>Ob.some(o=>o===i.definisjon)&&i.status===Pn.UTFORT),a=(s=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:s.find(i=>i.overstyrtPrAar||i.overstyrtPrAar===0);return!!n||!!a},Xs=({behandling:e,beregningresultatDagytelse:r,beregningresultatEngangsstonad:n,tilbakekrevingvalg:t,simuleringResultat:a,beregningsgrunnlag:s,vilkar:i,beregningsresultatOriginalBehandling:o,medlemskap:l,aksjonspunkter:u,isReadOnly:d,previewCallback:E,submitCallback:v,ytelseTypeKode:p,alleKodeverk:h,formData:f,setFormData:y})=>{const _=Ib(u,s),b=p===z.ENGANGSSTONAD?n:r;let A;return o&&(A=p===z.ENGANGSSTONAD?o["beregningsresultat-engangsstonad"]:o["beregningsresultat-foreldrepenger"]),k.jsxs(_v,{value:Nb,children:[e.type!==He.REVURDERING&&k.jsx(xu,{behandling:e,submitCallback:v,readOnly:d,previewCallback:E,tilbakekrevingvalg:t,simuleringResultat:a,resultatstruktur:b,aksjonspunkter:u,ytelseTypeKode:p,alleKodeverk:h,vilkar:i,beregningErManueltFastsatt:_,formData:f,setFormData:y}),e.type===He.REVURDERING&&k.jsx(zu,{behandling:e,submitCallback:v,readOnly:d,previewCallback:E,tilbakekrevingvalg:t,simuleringResultat:a,resultatstruktur:b,aksjonspunkter:u,ytelseTypeKode:p,alleKodeverk:h,vilkar:i,beregningErManueltFastsatt:_,resultatstrukturOriginalBehandling:A,medlemskapFom:l==null?void 0:l.fom,formData:f,setFormData:y})]})};Xs.__docgenInfo={description:"",methods:[],displayName:"VedtakProsessIndex",props:{beregningresultatDagytelse:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
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
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
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
}>`}],raw:"Aksjonspunkt[]"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"any"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const Te={uuid:"1",versjon:1,type:He.FORSTEGANGSSOKNAD,status:qe.BEHANDLING_UTREDES,sprakkode:"NO",behandlingsresultat:{type:W.INNVILGET},behandlingPaaVent:!1,behandlingHenlagt:!1,behandlingÅrsaker:[{behandlingArsakType:cr.ANNET}]},Db=[{lovReferanse:"§§Dette er en lovreferanse",vilkarType:ks.FODSELSVILKARET_MOR,vilkarStatus:aa.OPPFYLT,overstyrbar:!0}],Zu=[{definisjon:ke.FORESLA_VEDTAK,kanLoses:!0}],Ne={antallBarn:1,beregnetTilkjentYtelse:1e4},Vb={title:"prosess/prosess-vedtak",component:Xs},fe=({behandling:e,beregningresultatDagytelse:r,beregningresultatEngangsstonad:n,ytelseTypeKode:t,isReadOnly:a,submitCallback:s,beregningsgrunnlag:i,aksjonspunkter:o,beregningsresultatOriginalBehandling:l,vilkar:u,previewCallback:d})=>k.jsx(Xs,{behandling:e,aksjonspunkter:o||Zu,submitCallback:s,isReadOnly:a,isAksjonspunktOpen:!0,readOnlySubmitButton:!1,status:"",vilkar:u||Db,alleMerknaderFraBeslutter:{},setFormData:()=>{},beregningresultatDagytelse:r,beregningresultatEngangsstonad:n,medlemskap:{fom:"2019-01-01"},previewCallback:d||de("button-click"),ytelseTypeKode:t,alleKodeverk:hf,beregningsgrunnlag:i,beregningsresultatOriginalBehandling:l}),Mn=fe.bind({});Mn.args={behandling:Te,beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:de("button-click")};const Vn=fe.bind({});Vn.args={behandling:{...Te,status:qe.AVSLUTTET},beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:de("button-click")};const Gn=fe.bind({});Gn.args={behandling:{...Te,status:qe.AVSLUTTET,behandlingsresultat:{vedtaksbrev:"FRITEKST",overskrift:"Dette er en overskrift",fritekstbrev:"Dette er innholdet i brevet",type:W.INNVILGET}},beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:de("button-click")};const wn=fe.bind({});wn.args={behandling:{...Te,behandlingsresultat:{type:W.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:de("button-click")};const Bn=fe.bind({});Bn.args={behandling:{...Te,status:qe.AVSLUTTET,behandlingsresultat:{type:W.AVSLATT}},beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:de("button-click")};const jn=fe.bind({});jn.args={behandling:Te,beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:de("button-click")};const Un=fe.bind({});Un.args={behandling:{...Te,behandlingsresultat:{type:W.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:de("button-click")};const Hn=fe.bind({});Hn.args={behandling:Te,beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},aksjonspunkter:[...Zu,{definisjon:ke.VURDERE_ANNEN_YTELSE,status:Pn.OPPRETTET,begrunnelse:void 0,kanLoses:!1,toTrinnsBehandling:!0},{definisjon:ke.VURDERE_DOKUMENT,status:Pn.OPPRETTET,begrunnelse:void 0,kanLoses:!1},{definisjon:ke.VURDERE_INNTEKTSMELDING_KLAGE,status:Pn.OPPRETTET,begrunnelse:void 0,kanLoses:!1},{definisjon:ke.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,status:Pn.OPPRETTET,begrunnelse:void 0,kanLoses:!1,toTrinnsBehandling:!0}],isReadOnly:!1,submitCallback:de("button-click")};const qn=fe.bind({});qn.args={behandling:Te,beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:z.ENGANGSSTONAD,isReadOnly:!1,submitCallback:de("button-click")};const Yn=fe.bind({});Yn.args={behandling:{...Te,status:qe.AVSLUTTET},beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:z.ENGANGSSTONAD,isReadOnly:!0,submitCallback:de("button-click")};const xn=fe.bind({});xn.args={behandling:Te,beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:z.ENGANGSSTONAD,isReadOnly:!1,submitCallback:de("button-click")};const Cn=fe.bind({});Cn.args={behandling:Te,beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:z.ENGANGSSTONAD,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:de("button-click")};const $n=fe.bind({});$n.args={behandling:{...Te,behandlingsresultat:{type:W.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:z.ENGANGSSTONAD,isReadOnly:!1,submitCallback:de("button-click")};const Jn=fe.bind({});Jn.args={behandling:Te,ytelseTypeKode:z.SVANGERSKAPSPENGER,isReadOnly:!1,submitCallback:de("button-click")};const Wn=fe.bind({});Wn.args={behandling:{...Te,type:He.REVURDERING,behandlingsresultat:{type:W.INNVILGET,konsekvenserForYtelsen:[Ye.ENDRING_I_BEREGNING_OG_UTTAK,Ye.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:de("button-click")};const zn=fe.bind({});zn.args={behandling:{...Te,type:He.REVURDERING,status:qe.AVSLUTTET,behandlingsresultat:{type:W.INNVILGET,konsekvenserForYtelsen:[Ye.ENDRING_I_BEREGNING_OG_UTTAK,Ye.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:de("button-click")};const Zn=fe.bind({});Zn.args={behandling:{...Te,type:He.REVURDERING,behandlingsresultat:{type:W.INNVILGET,konsekvenserForYtelsen:[Ye.ENDRING_I_BEREGNING_OG_UTTAK,Ye.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:de("button-click")};const Xn=fe.bind({});Xn.args={behandling:{...Te,type:He.REVURDERING,status:qe.AVSLUTTET,behandlingsresultat:{type:W.INNVILGET,konsekvenserForYtelsen:[Ye.ENDRING_I_BEREGNING_OG_UTTAK,Ye.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:de("button-click")};const Qn=fe.bind({});Qn.args={behandling:{...Te,type:He.REVURDERING,status:qe.AVSLUTTET,behandlingsresultat:{vedtaksbrev:"FRITEKST",overskrift:"Dette er en overskrift",fritekstbrev:"Dette er innholdet i brevet",type:W.INNVILGET,konsekvenserForYtelsen:[Ye.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:de("button-click")};const et=fe.bind({});et.args={behandling:{...Te,type:He.REVURDERING,behandlingsresultat:{type:W.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningsresultatOriginalBehandling:{"beregningsresultat-foreldrepenger":{...Ne}},ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:de("button-click")};const rt=fe.bind({});rt.args={behandling:{...Te,type:He.REVURDERING,status:qe.AVSLUTTET,behandlingsresultat:{type:W.AVSLATT}},beregningsresultatOriginalBehandling:{"beregningsresultat-foreldrepenger":{...Ne}},ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:de("button-click")};const nt=fe.bind({});nt.args={behandling:{...Te,type:He.REVURDERING,behandlingsresultat:{type:W.OPPHOR}},beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:de("button-click")};const tt=fe.bind({});tt.args={behandling:{...Te,type:He.REVURDERING,behandlingsresultat:{type:W.INNVILGET,konsekvenserForYtelsen:[Ye.ENDRING_I_BEREGNING_OG_UTTAK]}},beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:de("button-click")};const at=fe.bind({});at.args={behandling:{...Te,type:He.REVURDERING,behandlingsresultat:{type:W.AVSLATT,konsekvenserForYtelsen:[Ye.ENDRING_I_BEREGNING_OG_UTTAK],avslagsarsak:"1007"}},beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},vilkar:[{lovReferanse:"§§Dette er en lovreferanse",vilkarType:ks.SOKNADFRISTVILKARET,vilkarStatus:aa.IKKE_OPPFYLT,overstyrbar:!0}],isReadOnly:!1,submitCallback:de("button-click")};const st=fe.bind({});st.args={behandling:{...Te,type:He.REVURDERING,behandlingsresultat:{type:W.OPPHOR}},beregningresultatDagytelse:Ne,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:de("button-click")};var no,to,ao;Mn.parameters={...Mn.parameters,docs:{...(no=Mn.parameters)==null?void 0:no.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(ao=(to=Mn.parameters)==null?void 0:to.docs)==null?void 0:ao.source}}};var so,io,oo;Vn.parameters={...Vn.parameters,docs:{...(so=Vn.parameters)==null?void 0:so.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(oo=(io=Vn.parameters)==null?void 0:io.docs)==null?void 0:oo.source}}};var lo,uo,go;Gn.parameters={...Gn.parameters,docs:{...(lo=Gn.parameters)==null?void 0:lo.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(go=(uo=Gn.parameters)==null?void 0:uo.docs)==null?void 0:go.source}}};var ko,Eo,vo;wn.parameters={...wn.parameters,docs:{...(ko=wn.parameters)==null?void 0:ko.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(vo=(Eo=wn.parameters)==null?void 0:Eo.docs)==null?void 0:vo.source}}};var mo,To,fo;Bn.parameters={...Bn.parameters,docs:{...(mo=Bn.parameters)==null?void 0:mo.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(fo=(To=Bn.parameters)==null?void 0:To.docs)==null?void 0:fo.source}}};var Ro,yo,Ao;jn.parameters={...jn.parameters,docs:{...(Ro=jn.parameters)==null?void 0:Ro.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Ao=(yo=jn.parameters)==null?void 0:yo.docs)==null?void 0:Ao.source}}};var po,bo,_o;Un.parameters={...Un.parameters,docs:{...(po=Un.parameters)==null?void 0:po.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(_o=(bo=Un.parameters)==null?void 0:bo.docs)==null?void 0:_o.source}}};var co,ho,So;Hn.parameters={...Hn.parameters,docs:{...(co=Hn.parameters)==null?void 0:co.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(So=(ho=Hn.parameters)==null?void 0:ho.docs)==null?void 0:So.source}}};var No,Oo,Io;qn.parameters={...qn.parameters,docs:{...(No=qn.parameters)==null?void 0:No.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Io=(Oo=qn.parameters)==null?void 0:Oo.docs)==null?void 0:Io.source}}};var Do,Ko,Lo;Yn.parameters={...Yn.parameters,docs:{...(Do=Yn.parameters)==null?void 0:Do.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Lo=(Ko=Yn.parameters)==null?void 0:Ko.docs)==null?void 0:Lo.source}}};var Po,Fo,Mo;xn.parameters={...xn.parameters,docs:{...(Po=xn.parameters)==null?void 0:Po.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Mo=(Fo=xn.parameters)==null?void 0:Fo.docs)==null?void 0:Mo.source}}};var Vo,Go,wo;Cn.parameters={...Cn.parameters,docs:{...(Vo=Cn.parameters)==null?void 0:Vo.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(wo=(Go=Cn.parameters)==null?void 0:Go.docs)==null?void 0:wo.source}}};var Bo,jo,Uo;$n.parameters={...$n.parameters,docs:{...(Bo=$n.parameters)==null?void 0:Bo.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Uo=(jo=$n.parameters)==null?void 0:jo.docs)==null?void 0:Uo.source}}};var Ho,qo,Yo;Jn.parameters={...Jn.parameters,docs:{...(Ho=Jn.parameters)==null?void 0:Ho.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Yo=(qo=Jn.parameters)==null?void 0:qo.docs)==null?void 0:Yo.source}}};var xo,Co,$o;Wn.parameters={...Wn.parameters,docs:{...(xo=Wn.parameters)==null?void 0:xo.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...($o=(Co=Wn.parameters)==null?void 0:Co.docs)==null?void 0:$o.source}}};var Jo,Wo,zo;zn.parameters={...zn.parameters,docs:{...(Jo=zn.parameters)==null?void 0:Jo.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(zo=(Wo=zn.parameters)==null?void 0:Wo.docs)==null?void 0:zo.source}}};var Zo,Xo,Qo;Zn.parameters={...Zn.parameters,docs:{...(Zo=Zn.parameters)==null?void 0:Zo.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Qo=(Xo=Zn.parameters)==null?void 0:Xo.docs)==null?void 0:Qo.source}}};var el,rl,nl;Xn.parameters={...Xn.parameters,docs:{...(el=Xn.parameters)==null?void 0:el.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(nl=(rl=Xn.parameters)==null?void 0:rl.docs)==null?void 0:nl.source}}};var tl,al,sl;Qn.parameters={...Qn.parameters,docs:{...(tl=Qn.parameters)==null?void 0:tl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(sl=(al=Qn.parameters)==null?void 0:al.docs)==null?void 0:sl.source}}};var il,ol,ll;et.parameters={...et.parameters,docs:{...(il=et.parameters)==null?void 0:il.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(ll=(ol=et.parameters)==null?void 0:ol.docs)==null?void 0:ll.source}}};var dl,ul,gl;rt.parameters={...rt.parameters,docs:{...(dl=rt.parameters)==null?void 0:dl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(gl=(ul=rt.parameters)==null?void 0:ul.docs)==null?void 0:gl.source}}};var kl,El,vl;nt.parameters={...nt.parameters,docs:{...(kl=nt.parameters)==null?void 0:kl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(vl=(El=nt.parameters)==null?void 0:El.docs)==null?void 0:vl.source}}};var ml,Tl,fl;tt.parameters={...tt.parameters,docs:{...(ml=tt.parameters)==null?void 0:ml.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(fl=(Tl=tt.parameters)==null?void 0:Tl.docs)==null?void 0:fl.source}}};var Rl,yl,Al;at.parameters={...at.parameters,docs:{...(Rl=at.parameters)==null?void 0:Rl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(Al=(yl=at.parameters)==null?void 0:yl.docs)==null?void 0:Al.source}}};var pl,bl,_l;st.parameters={...st.parameters,docs:{...(pl=st.parameters)==null?void 0:pl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} medlemskap={{
  fom: '2019-01-01'
} as Medlemskap} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} />`,...(_l=(bl=st.parameters)==null?void 0:bl.docs)==null?void 0:_l.source}}};const Gb=["InnvilgetForeldrepengerTilGodkjenningForSaksbehandler","GodkjentForeldrepengerForSaksbehandler","GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring","AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring","GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring","InnvilgetForeldrepengerDerBeregningErManueltFastsatt","AvslåttForeldrepengerDerBeregningErManueltFastsatt","TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil","InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring","GodkjentEngangsstønadForSaksbehandlerUtenOverstyring","InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring","InnvilgetEngangsstønadDerBeregningErManueltFastsatt","AvslåttEngangsstønadDerBeregningErManueltFastsatt","InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring","InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring","GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring","InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring","GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring","GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring","AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring","GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring","OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring","InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt","AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt","OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt"];export{$n as AvslåttEngangsstønadDerBeregningErManueltFastsatt,at as AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt,Un as AvslåttForeldrepengerDerBeregningErManueltFastsatt,wn as AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,et as AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,Bn as GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring,Yn as GodkjentEngangsstønadForSaksbehandlerUtenOverstyring,Vn as GodkjentForeldrepengerForSaksbehandler,Gn as GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring,rt as GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring,Xn as GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring,zn as GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring,Qn as GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring,Cn as InnvilgetEngangsstønadDerBeregningErManueltFastsatt,xn as InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring,qn as InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring,tt as InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt,jn as InnvilgetForeldrepengerDerBeregningErManueltFastsatt,Mn as InnvilgetForeldrepengerTilGodkjenningForSaksbehandler,Zn as InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,Wn as InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring,Jn as InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring,st as OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt,nt as OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring,Hn as TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil,Gb as __namedExportsOrder,Vb as default};
