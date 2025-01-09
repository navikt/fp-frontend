import{j as E}from"./jsx-runtime-DR9Q75dM.js";import{v as Ug}from"./v4-CQkTLCs1.js";import{r as f,R as S,a as Bg}from"./index-DRjF_FHU.js";import{a as Qn}from"./dayjs.min-DN4LN79F.js";import{r as qg,F as Hg}from"./index-rX-Bn4lm.js";const{addons:Yg}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:xg}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:Ni}=__STORYBOOK_MODULE_GLOBAL__;var Cg="storybook/actions",$g=`${Cg}/action-event`,Wg={depth:10,clearOnStoryChange:!0,limit:50},Ql=(e,n)=>{let r=Object.getPrototypeOf(e);return!r||n(r)?r:Ql(r,n)},Jg=e=>!!(typeof e=="object"&&e&&Ql(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),zg=e=>{if(Jg(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let r=Object.getOwnPropertyDescriptor(n,"view"),t=r==null?void 0:r.value;return typeof t=="object"&&(t==null?void 0:t.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...r,value:Object.create(t.constructor.prototype)}),n}return e},Zg=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?Ug():Date.now().toString(36)+Math.random().toString(36).substring(2);function de(e,n={}){let r={...Wg,...n},t=function(...a){var k,v;if(n.implicit){let b=(k="__STORYBOOK_PREVIEW__"in Ni?Ni.__STORYBOOK_PREVIEW__:void 0)==null?void 0:k.storyRenders.find(h=>h.phase==="playing"||h.phase==="rendering");if(b){let h=!((v=window==null?void 0:window.FEATURES)!=null&&v.disallowImplicitActionsInRenderV8),T=new xg({phase:b.phase,name:e,deprecated:h});if(h)console.warn(T);else throw T}}let s=Yg.getChannel(),i=Zg(),o=5,l=a.map(zg),u=a.length>1?l:l[0],d={id:i,count:0,data:{name:e,args:u},options:{...r,maxDepth:o+(r.depth||3),allowFunction:r.allowFunction||!1}};s.emit($g,d)};return t.isAction=!0,t.implicit=n.implicit,t}var ue=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN="5032",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYR_BEREGNING="6007",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(ue||{}),kr=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(kr||{}),da=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(da||{});da.BRUKERS_ANDEL;da.FRILANS;da.EGEN_NÆRING;var ed=(e=>(e.INGEN_BEREGNINGSREGLER="1099",e))(ed||{}),mn=(e=>(e.FEIL_I_LOVANDVENDELSE="RE-LOV",e.FEIL_REGELVERKSFORSTAELSE="RE-RGLF",e.FEIL_ELLER_ENDRET_FAKTA="RE-FEFAKTA",e.FEIL_PROSESSUELL="RE-PRSSL",e.ETTER_KLAGE="ETTER_KLAGE",e.ANNET="RE-ANNET",e.KLAGE_U_INNTK="RE-KLAG-U-INNTK",e.KLAGE_M_INNTK="RE-KLAG-M-INNTK",e.MEDLEMSKAP="RE-MDL",e.OPPTJENING="RE-OPTJ",e.FORDELING="RE-FRDLING",e.INNTEKT="RE-INNTK",e.FØDSEL="RE-FØDSEL",e.DØD="RE-DØD",e.SØKERS_RELASJON="RE-SRTB",e.SØKNADSFRIST="RE-FRIST",e.BEREEGNINGSGRUNNLAG="RE-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_INNVILGET="RE-TILST-YT-INNVIL",e.RE_ENDRING_BEREGNINGSGRUNNLAG="RE-ENDR-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_OPPHØRT="RE-TILST-YT-OPPH",e.RE_ENDRING_FRA_BRUKER="RE-END-FRA-BRUKER",e.RE_ENDRET_INNTEKTSMELDING="RE-END-INNTEKTSMELD",e.RE_KLAGE_KA="RE_KLAGE_KA",e.RE_KLAGE_NFP="RE_KLAGE_NFP",e.RE_VILKÅR="RE_VILKÅR",e.RE_FORELDELSE="RE_FORELDELSE",e.RE_FEILUTBETALT_BELØP_REDUSERT="RE_FEILUTBETALT_BELØP_REDUSERT",e.REBEREGN_FERIEPENGER="REBEREGN-FERIEPENGER",e.RE_UTSATT_START="RE-UTSATT-START",e))(mn||{}),_e=(e=>(e.IKKE_FASTSATT="IKKE_FASTSATT",e.INNVILGET="INNVILGET",e.AVSLATT="AVSLÅTT",e.OPPHOR="OPPHØR",e.HENLAGT_SOKNAD_TRUKKET="HENLAGT_SØKNAD_TRUKKET",e.KLAGE_AVVIST="KLAGE_AVVIST",e.KLAGE_MEDHOLD="KLAGE_MEDHOLD",e.KLAGE_DELVIS_MEDHOLD="KLAGE_DELVIS_MEDHOLD",e.KLAGE_OMGJORT_UGUNST="KLAGE_OMGJORT_UGUNST",e.KLAGE_YTELSESVEDTAK_OPPHEVET="KLAGE_YTELSESVEDTAK_OPPHEVET",e.KLAGE_YTELSESVEDTAK_STADFESTET="KLAGE_YTELSESVEDTAK_STADFESTET",e.KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET="KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",e.HJEMSENDE_UTEN_OPPHEVE="HJEMSENDE_UTEN_OPPHEVE",e.HENLAGT_KLAGE_TRUKKET="HENLAGT_KLAGE_TRUKKET",e.HENLAGT_ANKE_TRUKKET="HENLAGT_ANKE_TRUKKET",e.HENLAGT_FEILOPPRETTET="HENLAGT_FEILOPPRETTET",e.HENLAGT_FEILOPPRETTET_MED_BREV="HENLAGT_FEILOPPRETTET_MED_BREV",e.HENLAGT_FEILOPPRETTET_UTEN_BREV="HENLAGT_FEILOPPRETTET_UTEN_BREV",e.HENLAGT_BRUKER_DOD="HENLAGT_BRUKER_DØD",e.FORELDREPENGER_ENDRET="FORELDREPENGER_ENDRET",e.FORELDREPENGER_SENERE="FORELDREPENGER_SENERE",e.INGEN_ENDRING="INGEN_ENDRING",e.MANGLER_BEREGNINGSREGLER="MANGLER_BEREGNINGSREGLER",e.HENLAGT_SOKNAD_MANGLER="HENLAGT_SØKNAD_MANGLER",e.INNSYN_INNVILGET="INNSYN_INNVILGET",e.INNSYN_DELVIS_INNVILGET="INNSYN_DELVIS_INNVILGET",e.INNSYN_AVVIST="INNSYN_AVVIST",e.HENLAGT_INNSYN_TRUKKET="HENLAGT_INNSYN_TRUKKET",e))(_e||{});const Xg=["KLAGE_MEDHOLD","KLAGE_DELVIS_MEDHOLD","KLAGE_OMGJORT_UGUNST","KLAGE_YTELSESVEDTAK_OPPHEVET","KLAGE_YTELSESVEDTAK_STADFESTET","KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET","HJEMSENDE_UTEN_OPPHEVE"],Qg=["KLAGE_MEDHOLD","KLAGE_DELVIS_MEDHOLD","KLAGE_OMGJORT_UGUNST"],ek=["FORELDREPENGER_ENDRET","FORELDREPENGER_SENERE","INGEN_ENDRING"],Ds=e=>Xg.some(n=>n===e)||ek.some(n=>n===e)||e==="INNVILGET",Ks=e=>e==="AVSLÅTT"||e==="KLAGE_AVVIST"||e==="KLAGE_YTELSESVEDTAK_STADFESTET",nd=e=>e==="OPPHØR",nk=e=>Qg.some(n=>n===e);var xe=(e=>(e.OPPRETTET="OPPRE",e.BEHANDLING_UTREDES="UTRED",e.AVSLUTTET="AVSLU",e.IVERKSETTER_VEDTAK="IVED",e.FATTER_VEDTAK="FVED",e))(xe||{}),Ue=(e=>(e.FORSTEGANGSSOKNAD="BT-002",e.KLAGE="BT-003",e.REVURDERING="BT-004",e.DOKUMENTINNSYN="BT-006",e.TILBAKEKREVING="BT-007",e.ANKE="BT-008",e.TILBAKEKREVING_REVURDERING="BT-009",e))(Ue||{}),Ps=(e=>(e.INNHENTE_OPPLYSNINGER="INNOPP",e.VARSEL_OM_REVURDERING="VARREV",e.FORLENGET_SAKSBEHANDLINGSTID="FORSAK",e.FORLENGET_SAKSBEHANDLINGSTID_MEDL="FORMED",e.KLAGE_OMGJORING="KGEOMG",e.KLAGE_AVVIST="KGEAVV",e.KLAGE_STADFESTET="KGESTA",e.KLAGE_HJEMSENDT="KGEHJE",e.KLAGE_OVERSENDT="KGEOVE",e.ANKE_OMGJORT="ANKOMG",e.ANKE_OPPHEVET="ANKOPP",e.FRITEKST="FRITEK",e.INNSYN_SVAR="INNSYN",e.INFO_OM_HENLEGGELSE="IOHENL",e.TBK_INNHENTE_OPPLYSNINGER="INNHEN",e.KORRIGERT_VARSEL_OM_TILBAKEKREVING="KORRIGVARS",e.VARSEL_OM_TILBAKEKREVING="VARS",e.ETTERLYS_INNTEKTSMELDING="ELYSIM",e))(Ps||{}),z=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(z||{}),In=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.INNTEKTSKATEGORI="Inntektskategori",e.BEREGNINGSGRUNNLAG_ANDELTYPER="BeregningsgrunnlagAndeltype",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.FAGSYSTEM="Fagsystem",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.ARBEIDSFORHOLD_HANDLING_TYPE="ArbeidsforholdHandlingType",e.HISTORIKK_OPPLYSNING_TYPE="HistorikkOpplysningType",e.HISTORIKK_ENDRET_FELT_TYPE="HistorikkEndretFeltType",e.HISTORIKKINNSLAG_TYPE="HistorikkinnslagType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.AKTSOMHET="Aktsomhet",e.VURDERING="AnnenVurdering",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG="VurderArbeidsforholdHistorikkinnslag",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.AKTIVITETSKRAV_AVKLARING="KontrollerAktivitetskravAvklaring",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e.FAGSAK_MARKERING="FagsakMarkering",e.ADRESSE_TYPE="AdresseType",e.NATURAL_YTELSE_TYPE="NaturalYtelseType",e))(In||{});const rk=(e,n,r,t)=>{let a=e[n];if(!a||a.length===0)return"";t&&(a=a[t]);const s=a.find(i=>i.kode===r);return s?s.navn:""},Rt=e=>(n,r,t)=>rk(e,r,n,t);var Ce=(e=>(e.ENDRING_I_BEREGNING="ENDRING_I_BEREGNING",e.ENDRING_I_UTTAK="ENDRING_I_UTTAK",e.ENDRING_I_FORDELING_AV_YTELSEN="ENDRING_I_FORDELING_AV_YTELSEN",e.INGEN_ENDRING="INGEN_ENDRING",e.ENDRING_I_BEREGNING_OG_UTTAK="ENDRING_I_BEREGNING_OG_UTTAK",e.FORELDREPENGER_OPPHORER="FORELDREPENGER_OPPHØRER",e.UDEFINERT="-",e))(Ce||{}),Fs=(e=>(e.FODSELSVILKARET_MOR="FP_VK_1",e.SVANGERSKAPVILKARET="SVP_VK_1",e.MEDLEMSKAPSVILKARET="FP_VK_2",e.MEDLEMSKAPSVILKÅRET_LØPENDE="FP_VK_2_L",e.MEDLEMSKAPSVILKARET_FORUTGAENDE="FP_VK_2_F",e.SOKNADFRISTVILKARET="FP_VK_3",e.ADOPSJONSVILKARET="FP_VK_4",e.OMSORGSVILKARET="FP_VK_5",e.FORELDREANSVARSVILKARET_2_LEDD="FP_VK_8",e.FODSELSVILKARET_FAR="FP_VK_11",e.ADOPSJONSVILKARET_FORELDREPENGER="FP_VK_16",e.OPPTJENINGSPERIODE="FP_VK_21",e.OPPTJENINGSVILKARET="FP_VK_23",e.FORELDREANSVARSVILKARET_4_LEDD="FP_VK_33",e.SOKERSOPPLYSNINGSPLIKT="FP_VK_34",e.BEREGNINGSGRUNNLAGVILKARET="FP_VK_41",e))(Fs||{}),ct=(e=>(e.OPPFYLT="OPPFYLT",e.IKKE_OPPFYLT="IKKE_OPPFYLT",e.IKKE_VURDERT="IKKE_VURDERT",e))(ct||{}),rd=(e=>(e.TILBAKEKR_OPPRETT="TILBAKEKR_OPPRETT",e.TILBAKEKR_IGNORER="TILBAKEKR_IGNORER",e.TILBAKEKR_INNTREKK="TILBAKEKR_INNTREKK",e.TILBAKEKR_OPPDATER="TILBAKEKR_OPPDATER",e))(rd||{}),ss=function(e,n){return ss=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])},ss(e,n)};function ln(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");ss(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}var q=function(){return q=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},q.apply(this,arguments)};function yr(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r}function gn(e,n,r){if(r||arguments.length===2)for(var t=0,a=n.length,s;t<a;t++)(s||!(t in n))&&(s||(s=Array.prototype.slice.call(n,0,t)),s[t]=n[t]);return e.concat(s||Array.prototype.slice.call(n))}var td={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke=typeof Symbol=="function"&&Symbol.for,Ms=Ke?Symbol.for("react.element"):60103,Vs=Ke?Symbol.for("react.portal"):60106,ua=Ke?Symbol.for("react.fragment"):60107,ga=Ke?Symbol.for("react.strict_mode"):60108,ka=Ke?Symbol.for("react.profiler"):60114,Ea=Ke?Symbol.for("react.provider"):60109,va=Ke?Symbol.for("react.context"):60110,Gs=Ke?Symbol.for("react.async_mode"):60111,ma=Ke?Symbol.for("react.concurrent_mode"):60111,fa=Ke?Symbol.for("react.forward_ref"):60112,Ta=Ke?Symbol.for("react.suspense"):60113,tk=Ke?Symbol.for("react.suspense_list"):60120,Ra=Ke?Symbol.for("react.memo"):60115,ya=Ke?Symbol.for("react.lazy"):60116,ak=Ke?Symbol.for("react.block"):60121,sk=Ke?Symbol.for("react.fundamental"):60117,ik=Ke?Symbol.for("react.responder"):60118,ok=Ke?Symbol.for("react.scope"):60119;function $e(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case Ms:switch(e=e.type,e){case Gs:case ma:case ua:case ka:case ga:case Ta:return e;default:switch(e=e&&e.$$typeof,e){case va:case fa:case ya:case Ra:case Ea:return e;default:return n}}case Vs:return n}}}function ad(e){return $e(e)===ma}ie.AsyncMode=Gs;ie.ConcurrentMode=ma;ie.ContextConsumer=va;ie.ContextProvider=Ea;ie.Element=Ms;ie.ForwardRef=fa;ie.Fragment=ua;ie.Lazy=ya;ie.Memo=Ra;ie.Portal=Vs;ie.Profiler=ka;ie.StrictMode=ga;ie.Suspense=Ta;ie.isAsyncMode=function(e){return ad(e)||$e(e)===Gs};ie.isConcurrentMode=ad;ie.isContextConsumer=function(e){return $e(e)===va};ie.isContextProvider=function(e){return $e(e)===Ea};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ms};ie.isForwardRef=function(e){return $e(e)===fa};ie.isFragment=function(e){return $e(e)===ua};ie.isLazy=function(e){return $e(e)===ya};ie.isMemo=function(e){return $e(e)===Ra};ie.isPortal=function(e){return $e(e)===Vs};ie.isProfiler=function(e){return $e(e)===ka};ie.isStrictMode=function(e){return $e(e)===ga};ie.isSuspense=function(e){return $e(e)===Ta};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ua||e===ma||e===ka||e===ga||e===Ta||e===tk||typeof e=="object"&&e!==null&&(e.$$typeof===ya||e.$$typeof===Ra||e.$$typeof===Ea||e.$$typeof===va||e.$$typeof===fa||e.$$typeof===sk||e.$$typeof===ik||e.$$typeof===ok||e.$$typeof===ak)};ie.typeOf=$e;td.exports=ie;var lk=td.exports,sd=lk,dk={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},uk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},id={};id[sd.ForwardRef]=dk;id[sd.Memo]=uk;function gk(e,n,r){if(r===void 0&&(r=Error),!e)throw new r(n)}var X;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(X||(X={}));var fe;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(fe||(fe={}));var Ar;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Ar||(Ar={}));function Oi(e){return e.type===fe.literal}function kk(e){return e.type===fe.argument}function od(e){return e.type===fe.number}function ld(e){return e.type===fe.date}function dd(e){return e.type===fe.time}function ud(e){return e.type===fe.select}function gd(e){return e.type===fe.plural}function Ek(e){return e.type===fe.pound}function kd(e){return e.type===fe.tag}function Ed(e){return!!(e&&typeof e=="object"&&e.type===Ar.number)}function is(e){return!!(e&&typeof e=="object"&&e.type===Ar.dateTime)}var vd=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,vk=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function mk(e){var n={};return e.replace(vk,function(r){var t=r.length;switch(r[0]){case"G":n.era=t===4?"long":t===5?"narrow":"short";break;case"y":n.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":n.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":n.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":n.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][t-4];break;case"a":n.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":n.hourCycle="h12",n.hour=["numeric","2-digit"][t-1];break;case"H":n.hourCycle="h23",n.hour=["numeric","2-digit"][t-1];break;case"K":n.hourCycle="h11",n.hour=["numeric","2-digit"][t-1];break;case"k":n.hourCycle="h24",n.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":n.minute=["numeric","2-digit"][t-1];break;case"s":n.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":n.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),n}var fk=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Tk(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var n=e.split(fk).filter(function(v){return v.length>0}),r=[],t=0,a=n;t<a.length;t++){var s=a[t],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),u=0,d=l;u<d.length;u++){var k=d[u];if(k.length===0)throw new Error("Invalid number skeleton")}r.push({stem:o,options:l})}return r}function Rk(e){return e.replace(/^(.*?)-/,"")}var Ii=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,md=/^(@+)?(\+|#+)?[rs]?$/g,yk=/(\*)(0+)|(#+)(0+)|(0+)/g,fd=/^(0+)$/;function Li(e){var n={};return e[e.length-1]==="r"?n.roundingPriority="morePrecision":e[e.length-1]==="s"&&(n.roundingPriority="lessPrecision"),e.replace(md,function(r,t,a){return typeof a!="string"?(n.minimumSignificantDigits=t.length,n.maximumSignificantDigits=t.length):a==="+"?n.minimumSignificantDigits=t.length:t[0]==="#"?n.maximumSignificantDigits=t.length:(n.minimumSignificantDigits=t.length,n.maximumSignificantDigits=t.length+(typeof a=="string"?a.length:0)),""}),n}function Td(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Ak(e){var n;if(e[0]==="E"&&e[1]==="E"?(n={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(n={notation:"scientific"},e=e.slice(1)),n){var r=e.slice(0,2);if(r==="+!"?(n.signDisplay="always",e=e.slice(2)):r==="+?"&&(n.signDisplay="exceptZero",e=e.slice(2)),!fd.test(e))throw new Error("Malformed concise eng/scientific notation");n.minimumIntegerDigits=e.length}return n}function Di(e){var n={},r=Td(e);return r||n}function bk(e){for(var n={},r=0,t=e;r<t.length;r++){var a=t[r];switch(a.stem){case"percent":case"%":n.style="percent";continue;case"%x100":n.style="percent",n.scale=100;continue;case"currency":n.style="currency",n.currency=a.options[0];continue;case"group-off":case",_":n.useGrouping=!1;continue;case"precision-integer":case".":n.maximumFractionDigits=0;continue;case"measure-unit":case"unit":n.style="unit",n.unit=Rk(a.options[0]);continue;case"compact-short":case"K":n.notation="compact",n.compactDisplay="short";continue;case"compact-long":case"KK":n.notation="compact",n.compactDisplay="long";continue;case"scientific":n=q(q(q({},n),{notation:"scientific"}),a.options.reduce(function(l,u){return q(q({},l),Di(u))},{}));continue;case"engineering":n=q(q(q({},n),{notation:"engineering"}),a.options.reduce(function(l,u){return q(q({},l),Di(u))},{}));continue;case"notation-simple":n.notation="standard";continue;case"unit-width-narrow":n.currencyDisplay="narrowSymbol",n.unitDisplay="narrow";continue;case"unit-width-short":n.currencyDisplay="code",n.unitDisplay="short";continue;case"unit-width-full-name":n.currencyDisplay="name",n.unitDisplay="long";continue;case"unit-width-iso-code":n.currencyDisplay="symbol";continue;case"scale":n.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":n.roundingMode="floor";continue;case"rounding-mode-ceiling":n.roundingMode="ceil";continue;case"rounding-mode-down":n.roundingMode="trunc";continue;case"rounding-mode-up":n.roundingMode="expand";continue;case"rounding-mode-half-even":n.roundingMode="halfEven";continue;case"rounding-mode-half-down":n.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":n.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(yk,function(l,u,d,k,v,b){if(u)n.minimumIntegerDigits=d.length;else{if(k&&v)throw new Error("We currently do not support maximum integer digits");if(b)throw new Error("We currently do not support exact integer digits")}return""});continue}if(fd.test(a.stem)){n.minimumIntegerDigits=a.stem.length;continue}if(Ii.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(Ii,function(l,u,d,k,v,b){return d==="*"?n.minimumFractionDigits=u.length:k&&k[0]==="#"?n.maximumFractionDigits=k.length:v&&b?(n.minimumFractionDigits=v.length,n.maximumFractionDigits=v.length+b.length):(n.minimumFractionDigits=u.length,n.maximumFractionDigits=u.length),""});var s=a.options[0];s==="w"?n=q(q({},n),{trailingZeroDisplay:"stripIfInteger"}):s&&(n=q(q({},n),Li(s)));continue}if(md.test(a.stem)){n=q(q({},n),Li(a.stem));continue}var i=Td(a.stem);i&&(n=q(q({},n),i));var o=Ak(a.stem);o&&(n=q(q({},n),o))}return n}var wt={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function pk(e,n){for(var r="",t=0;t<e.length;t++){var a=e.charAt(t);if(a==="j"){for(var s=0;t+1<e.length&&e.charAt(t+1)===a;)s++,t++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",u=ck(n);for((u=="H"||u=="k")&&(o=0);o-- >0;)r+=l;for(;i-- >0;)r=u+r}else a==="J"?r+="H":r+=a}return r}function ck(e){var n=e.hourCycle;if(n===void 0&&e.hourCycles&&e.hourCycles.length&&(n=e.hourCycles[0]),n)switch(n){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,t;r!=="root"&&(t=e.maximize().region);var a=wt[t||""]||wt[r||""]||wt["".concat(r,"-001")]||wt["001"];return a[0]}var qa,_k=new RegExp("^".concat(vd.source,"*")),hk=new RegExp("".concat(vd.source,"*$"));function ee(e,n){return{start:e,end:n}}var Sk=!!String.prototype.startsWith&&"_a".startsWith("a",1),Nk=!!String.fromCodePoint,Ok=!!Object.fromEntries,Ik=!!String.prototype.codePointAt,Lk=!!String.prototype.trimStart,Dk=!!String.prototype.trimEnd,Kk=!!Number.isSafeInteger,Pk=Kk?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},os=!0;try{var Fk=yd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");os=((qa=Fk.exec("a"))===null||qa===void 0?void 0:qa[0])==="a"}catch{os=!1}var Ki=Sk?function(n,r,t){return n.startsWith(r,t)}:function(n,r,t){return n.slice(t,t+r.length)===r},ls=Nk?String.fromCodePoint:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];for(var t="",a=n.length,s=0,i;a>s;){if(i=n[s++],i>1114111)throw RangeError(i+" is not a valid code point");t+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return t},Pi=Ok?Object.fromEntries:function(n){for(var r={},t=0,a=n;t<a.length;t++){var s=a[t],i=s[0],o=s[1];r[i]=o}return r},Rd=Ik?function(n,r){return n.codePointAt(r)}:function(n,r){var t=n.length;if(!(r<0||r>=t)){var a=n.charCodeAt(r),s;return a<55296||a>56319||r+1===t||(s=n.charCodeAt(r+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},Mk=Lk?function(n){return n.trimStart()}:function(n){return n.replace(_k,"")},Vk=Dk?function(n){return n.trimEnd()}:function(n){return n.replace(hk,"")};function yd(e,n){return new RegExp(e,n)}var ds;if(os){var Fi=yd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ds=function(n,r){var t;Fi.lastIndex=r;var a=Fi.exec(n);return(t=a[1])!==null&&t!==void 0?t:""}}else ds=function(n,r){for(var t=[];;){var a=Rd(n,r);if(a===void 0||Ad(a)||Uk(a))break;t.push(a),r+=a>=65536?2:1}return ls.apply(void 0,t)};var Gk=function(){function e(n,r){r===void 0&&(r={}),this.message=n,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(n,r,t){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(n,t);if(i.err)return i;a.push(i.val)}else{if(s===125&&n>0)break;if(s===35&&(r==="plural"||r==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:fe.pound,location:ee(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(X.UNMATCHED_CLOSING_TAG,ee(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&us(this.peek()||0)){var i=this.parseTag(n,r);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(n,r);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(n,r){var t=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:fe.literal,value:"<".concat(a,"/>"),location:ee(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(n+1,r,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!us(this.char()))return this.error(X.INVALID_TAG,ee(o,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return a!==u?this.error(X.UNMATCHED_CLOSING_TAG,ee(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:fe.tag,value:a,children:i,location:ee(t,this.clonePosition())},err:null}:this.error(X.INVALID_TAG,ee(o,this.clonePosition())))}else return this.error(X.UNCLOSED_TAG,ee(t,this.clonePosition()))}else return this.error(X.INVALID_TAG,ee(t,this.clonePosition()))},e.prototype.parseTagName=function(){var n=this.offset();for(this.bump();!this.isEOF()&&jk(this.char());)this.bump();return this.message.slice(n,this.offset())},e.prototype.parseLiteral=function(n,r){for(var t=this.clonePosition(),a="";;){var s=this.tryParseQuote(r);if(s){a+=s;continue}var i=this.tryParseUnquoted(n,r);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=ee(t,this.clonePosition());return{val:{type:fe.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!wk(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(n){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(n==="plural"||n==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(t);this.bump()}return ls.apply(void 0,r)},e.prototype.tryParseUnquoted=function(n,r){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(r==="plural"||r==="selectordinal")||t===125&&n>0?null:(this.bump(),ls(t))},e.prototype.parseArgument=function(n,r){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,ee(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(X.EMPTY_ARGUMENT,ee(t,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(X.MALFORMED_ARGUMENT,ee(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,ee(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:fe.argument,value:a,location:ee(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,ee(t,this.clonePosition())):this.parseArgumentOptions(n,r,a,t);default:return this.error(X.MALFORMED_ARGUMENT,ee(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var n=this.clonePosition(),r=this.offset(),t=ds(this.message,r),a=r+t.length;this.bumpTo(a);var s=this.clonePosition(),i=ee(n,s);return{value:t,location:i}},e.prototype.parseArgumentOptions=function(n,r,t,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(X.EXPECT_ARGUMENT_TYPE,ee(i,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),k=this.parseSimpleArgStyleIfPossible();if(k.err)return k;var v=Vk(k.val);if(v.length===0)return this.error(X.EXPECT_ARGUMENT_STYLE,ee(this.clonePosition(),this.clonePosition()));var b=ee(d,this.clonePosition());u={style:v,styleLocation:b}}var h=this.tryParseArgumentClose(a);if(h.err)return h;var T=ee(a,this.clonePosition());if(u&&Ki(u==null?void 0:u.style,"::",0)){var y=Mk(u.style.slice(2));if(o==="number"){var k=this.parseNumberSkeletonFromString(y,u.styleLocation);return k.err?k:{val:{type:fe.number,value:t,location:T,style:k.val},err:null}}else{if(y.length===0)return this.error(X.EXPECT_DATE_TIME_SKELETON,T);var c=y;this.locale&&(c=pk(y,this.locale));var v={type:Ar.dateTime,pattern:c,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?mk(c):{}},p=o==="date"?fe.date:fe.time;return{val:{type:p,value:t,location:T,style:v},err:null}}}return{val:{type:o==="number"?fe.number:o==="date"?fe.date:fe.time,value:t,location:T,style:(s=u==null?void 0:u.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var A=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(X.EXPECT_SELECT_ARGUMENT_OPTIONS,ee(A,q({},A)));this.bumpSpace();var F=this.parseIdentifierIfPossible(),w=0;if(o!=="select"&&F.value==="offset"){if(!this.bumpIf(":"))return this.error(X.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ee(this.clonePosition(),this.clonePosition()));this.bumpSpace();var k=this.tryParseDecimalInteger(X.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,X.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(k.err)return k;this.bumpSpace(),F=this.parseIdentifierIfPossible(),w=k.val}var B=this.tryParsePluralOrSelectOptions(n,o,r,F);if(B.err)return B;var h=this.tryParseArgumentClose(a);if(h.err)return h;var N=ee(a,this.clonePosition());return o==="select"?{val:{type:fe.select,value:t,options:Pi(B.val),location:N},err:null}:{val:{type:fe.plural,value:t,options:Pi(B.val),offset:w,pluralType:o==="plural"?"cardinal":"ordinal",location:N},err:null}}default:return this.error(X.INVALID_ARGUMENT_TYPE,ee(i,l))}},e.prototype.tryParseArgumentClose=function(n){return this.isEOF()||this.char()!==125?this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,ee(n,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var n=0,r=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(X.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,ee(a,this.clonePosition()));this.bump();break}case 123:{n+=1,this.bump();break}case 125:{if(n>0)n-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(n,r){var t=[];try{t=Tk(n)}catch{return this.error(X.INVALID_NUMBER_SKELETON,r)}return{val:{type:Ar.number,tokens:t,location:r,parsedOptions:this.shouldParseSkeletons?bk(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(n,r,t,a){for(var s,i=!1,o=[],l=new Set,u=a.value,d=a.location;;){if(u.length===0){var k=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var v=this.tryParseDecimalInteger(X.EXPECT_PLURAL_ARGUMENT_SELECTOR,X.INVALID_PLURAL_ARGUMENT_SELECTOR);if(v.err)return v;d=ee(k,this.clonePosition()),u=this.message.slice(k.offset,this.offset())}else break}if(l.has(u))return this.error(r==="select"?X.DUPLICATE_SELECT_ARGUMENT_SELECTOR:X.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);u==="other"&&(i=!0),this.bumpSpace();var b=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?X.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:X.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,ee(this.clonePosition(),this.clonePosition()));var h=this.parseMessage(n+1,r,t);if(h.err)return h;var T=this.tryParseArgumentClose(b);if(T.err)return T;o.push([u,{value:h.val,location:ee(b,this.clonePosition())}]),l.add(u),this.bumpSpace(),s=this.parseIdentifierIfPossible(),u=s.value,d=s.location}return o.length===0?this.error(r==="select"?X.EXPECT_SELECT_ARGUMENT_SELECTOR:X.EXPECT_PLURAL_ARGUMENT_SELECTOR,ee(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(X.MISSING_OTHER_CLAUSE,ee(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(n,r){var t=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=ee(a,this.clonePosition());return s?(i*=t,Pk(i)?{val:i,err:null}:this.error(r,l)):this.error(n,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var n=this.position.offset;if(n>=this.message.length)throw Error("out of bound");var r=Rd(this.message,n);if(r===void 0)throw Error("Offset ".concat(n," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(n,r){return{val:null,err:{kind:n,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var n=this.char();n===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=n<65536?1:2)}},e.prototype.bumpIf=function(n){if(Ki(this.message,n,this.offset())){for(var r=0;r<n.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(n){var r=this.offset(),t=this.message.indexOf(n,r);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(n){if(this.offset()>n)throw Error("targetOffset ".concat(n," must be greater than or equal to the current offset ").concat(this.offset()));for(n=Math.min(n,this.message.length);;){var r=this.offset();if(r===n)break;if(r>n)throw Error("targetOffset ".concat(n," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Ad(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var n=this.char(),r=this.offset(),t=this.message.charCodeAt(r+(n>=65536?2:1));return t??null},e}();function us(e){return e>=97&&e<=122||e>=65&&e<=90}function wk(e){return us(e)||e===47}function jk(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Ad(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Uk(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function gs(e){e.forEach(function(n){if(delete n.location,ud(n)||gd(n))for(var r in n.options)delete n.options[r].location,gs(n.options[r].value);else od(n)&&Ed(n.style)||(ld(n)||dd(n))&&is(n.style)?delete n.style.location:kd(n)&&gs(n.children)})}function Bk(e,n){n===void 0&&(n={}),n=q({shouldParseSkeletons:!0,requiresOtherClause:!0},n);var r=new Gk(e,n).parse();if(r.err){var t=SyntaxError(X[r.err.kind]);throw t.location=r.err.location,t.originalMessage=r.err.message,t}return n!=null&&n.captureLocation||gs(r.val),r.val}function Ha(e,n){var r=n&&n.cache?n.cache:$k,t=n&&n.serializer?n.serializer:Ck,a=n&&n.strategy?n.strategy:Hk;return a(e,{cache:r,serializer:t})}function qk(e){return e==null||typeof e=="number"||typeof e=="boolean"}function bd(e,n,r,t){var a=qk(t)?t:r(t),s=n.get(a);return typeof s>"u"&&(s=e.call(this,t),n.set(a,s)),s}function pd(e,n,r){var t=Array.prototype.slice.call(arguments,3),a=r(t),s=n.get(a);return typeof s>"u"&&(s=e.apply(this,t),n.set(a,s)),s}function ws(e,n,r,t,a){return r.bind(n,e,t,a)}function Hk(e,n){var r=e.length===1?bd:pd;return ws(e,this,r,n.cache.create(),n.serializer)}function Yk(e,n){return ws(e,this,pd,n.cache.create(),n.serializer)}function xk(e,n){return ws(e,this,bd,n.cache.create(),n.serializer)}var Ck=function(){return JSON.stringify(arguments)};function js(){this.cache=Object.create(null)}js.prototype.get=function(e){return this.cache[e]};js.prototype.set=function(e,n){this.cache[e]=n};var $k={create:function(){return new js}},Ya={variadic:Yk,monadic:xk},fn;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(fn||(fn={}));var jn=function(e){ln(n,e);function n(r,t,a){var s=e.call(this,r)||this;return s.code=t,s.originalMessage=a,s}return n.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},n}(Error),Mi=function(e){ln(n,e);function n(r,t,a,s){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(t,'". Options are "').concat(Object.keys(a).join('", "'),'"'),fn.INVALID_VALUE,s)||this}return n}(jn),Wk=function(e){ln(n,e);function n(r,t,a){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(t),fn.INVALID_VALUE,a)||this}return n}(jn),Jk=function(e){ln(n,e);function n(r,t){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(t,'"'),fn.MISSING_VALUE,t)||this}return n}(jn),we;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(we||(we={}));function zk(e){return e.length<2?e:e.reduce(function(n,r){var t=n[n.length-1];return!t||t.type!==we.literal||r.type!==we.literal?n.push(r):t.value+=r.value,n},[])}function cd(e){return typeof e=="function"}function Ct(e,n,r,t,a,s,i){if(e.length===1&&Oi(e[0]))return[{type:we.literal,value:e[0].value}];for(var o=[],l=0,u=e;l<u.length;l++){var d=u[l];if(Oi(d)){o.push({type:we.literal,value:d.value});continue}if(Ek(d)){typeof s=="number"&&o.push({type:we.literal,value:r.getNumberFormat(n).format(s)});continue}var k=d.value;if(!(a&&k in a))throw new Jk(k,i);var v=a[k];if(kk(d)){(!v||typeof v=="string"||typeof v=="number")&&(v=typeof v=="string"||typeof v=="number"?String(v):""),o.push({type:typeof v=="string"?we.literal:we.object,value:v});continue}if(ld(d)){var b=typeof d.style=="string"?t.date[d.style]:is(d.style)?d.style.parsedOptions:void 0;o.push({type:we.literal,value:r.getDateTimeFormat(n,b).format(v)});continue}if(dd(d)){var b=typeof d.style=="string"?t.time[d.style]:is(d.style)?d.style.parsedOptions:t.time.medium;o.push({type:we.literal,value:r.getDateTimeFormat(n,b).format(v)});continue}if(od(d)){var b=typeof d.style=="string"?t.number[d.style]:Ed(d.style)?d.style.parsedOptions:void 0;b&&b.scale&&(v=v*(b.scale||1)),o.push({type:we.literal,value:r.getNumberFormat(n,b).format(v)});continue}if(kd(d)){var h=d.children,T=d.value,y=a[T];if(!cd(y))throw new Wk(T,"function",i);var c=Ct(h,n,r,t,a,s),p=y(c.map(function(w){return w.value}));Array.isArray(p)||(p=[p]),o.push.apply(o,p.map(function(w){return{type:typeof w=="string"?we.literal:we.object,value:w}}))}if(ud(d)){var A=d.options[v]||d.options.other;if(!A)throw new Mi(d.value,v,Object.keys(d.options),i);o.push.apply(o,Ct(A.value,n,r,t,a));continue}if(gd(d)){var A=d.options["=".concat(v)];if(!A){if(!Intl.PluralRules)throw new jn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,fn.MISSING_INTL_API,i);var F=r.getPluralRules(n,{type:d.pluralType}).select(v-(d.offset||0));A=d.options[F]||d.options.other}if(!A)throw new Mi(d.value,v,Object.keys(d.options),i);o.push.apply(o,Ct(A.value,n,r,t,a,v-(d.offset||0)));continue}}return zk(o)}function Zk(e,n){return n?q(q(q({},e||{}),n||{}),Object.keys(e).reduce(function(r,t){return r[t]=q(q({},e[t]),n[t]||{}),r},{})):e}function Xk(e,n){return n?Object.keys(e).reduce(function(r,t){return r[t]=Zk(e[t],n[t]),r},q({},e)):e}function xa(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,r){e[n]=r}}}}}function Qk(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Ha(function(){for(var n,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((n=Intl.NumberFormat).bind.apply(n,gn([void 0],r,!1)))},{cache:xa(e.number),strategy:Ya.variadic}),getDateTimeFormat:Ha(function(){for(var n,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((n=Intl.DateTimeFormat).bind.apply(n,gn([void 0],r,!1)))},{cache:xa(e.dateTime),strategy:Ya.variadic}),getPluralRules:Ha(function(){for(var n,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((n=Intl.PluralRules).bind.apply(n,gn([void 0],r,!1)))},{cache:xa(e.pluralRules),strategy:Ya.variadic})}}var _d=function(){function e(n,r,t,a){var s=this;if(r===void 0&&(r=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=s.formatToParts(l);if(u.length===1)return u[0].value;var d=u.reduce(function(k,v){return!k.length||v.type!==we.literal||typeof k[k.length-1]!="string"?k.push(v.value):k[k.length-1]+=v.value,k},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return Ct(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof n=="string"){if(this.message=n,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=yr(i,["formatters"]);this.ast=e.__parse(n,q(q({},o),{locale:this.resolvedLocale}))}else this.ast=n;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Xk(e.formats,t),this.formatters=a&&a.formatters||Qk(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(n){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(n);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof n=="string"?n:n[0])}},e.__parse=Bk,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}();function qn(e,n){var r=n&&n.cache?n.cache:sE,t=n&&n.serializer?n.serializer:aE,a=n&&n.strategy?n.strategy:nE;return a(e,{cache:r,serializer:t})}function eE(e){return e==null||typeof e=="number"||typeof e=="boolean"}function hd(e,n,r,t){var a=eE(t)?t:r(t),s=n.get(a);return typeof s>"u"&&(s=e.call(this,t),n.set(a,s)),s}function Sd(e,n,r){var t=Array.prototype.slice.call(arguments,3),a=r(t),s=n.get(a);return typeof s>"u"&&(s=e.apply(this,t),n.set(a,s)),s}function Us(e,n,r,t,a){return r.bind(n,e,t,a)}function nE(e,n){var r=e.length===1?hd:Sd;return Us(e,this,r,n.cache.create(),n.serializer)}function rE(e,n){return Us(e,this,Sd,n.cache.create(),n.serializer)}function tE(e,n){return Us(e,this,hd,n.cache.create(),n.serializer)}var aE=function(){return JSON.stringify(arguments)};function Bs(){this.cache=Object.create(null)}Bs.prototype.get=function(e){return this.cache[e]};Bs.prototype.set=function(e,n){this.cache[e]=n};var sE={create:function(){return new Bs}},Hn={variadic:rE,monadic:tE},Zn;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Zn||(Zn={}));var _t=function(e){ln(n,e);function n(r,t,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(t,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,n),s}return n}(Error),iE=function(e){ln(n,e);function n(r,t){return e.call(this,Zn.UNSUPPORTED_FORMATTER,r,t)||this}return n}(_t),oE=function(e){ln(n,e);function n(r,t){return e.call(this,Zn.INVALID_CONFIG,r,t)||this}return n}(_t),Vi=function(e){ln(n,e);function n(r,t){return e.call(this,Zn.MISSING_DATA,r,t)||this}return n}(_t),en=function(e){ln(n,e);function n(r,t,a){var s=e.call(this,Zn.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(t,`
`),a)||this;return s.locale=t,s}return n}(_t),Ca=function(e){ln(n,e);function n(r,t,a,s){var i=e.call(this,"".concat(r,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),t,s)||this;return i.descriptor=a,i.locale=t,i}return n}(en),lE=function(e){ln(n,e);function n(r,t){var a=e.call(this,Zn.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(t,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=r,a}return n}(_t);function er(e,n,r){return r===void 0&&(r={}),n.reduce(function(t,a){return a in e?t[a]=e[a]:a in r&&(t[a]=r[a]),t},{})}var dE=function(e){},uE=function(e){},Nd={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:dE,onWarn:uE};function Od(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Yn(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,r){e[n]=r}}}}}function gE(e){e===void 0&&(e=Od());var n=Intl.RelativeTimeFormat,r=Intl.ListFormat,t=Intl.DisplayNames,a=qn(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.DateTimeFormat).bind.apply(o,gn([void 0],l,!1)))},{cache:Yn(e.dateTime),strategy:Hn.variadic}),s=qn(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.NumberFormat).bind.apply(o,gn([void 0],l,!1)))},{cache:Yn(e.number),strategy:Hn.variadic}),i=qn(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.PluralRules).bind.apply(o,gn([void 0],l,!1)))},{cache:Yn(e.pluralRules),strategy:Hn.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:qn(function(o,l,u,d){return new _d(o,l,u,q({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},d||{}))},{cache:Yn(e.message),strategy:Hn.variadic}),getRelativeTimeFormat:qn(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,gn([void 0],o,!1)))},{cache:Yn(e.relativeTime),strategy:Hn.variadic}),getPluralRules:i,getListFormat:qn(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,gn([void 0],o,!1)))},{cache:Yn(e.list),strategy:Hn.variadic}),getDisplayNames:qn(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,gn([void 0],o,!1)))},{cache:Yn(e.displayNames),strategy:Hn.variadic})}}function qs(e,n,r,t){var a=e&&e[n],s;if(a&&(s=a[r]),s)return s;t(new iE("No ".concat(n," format named: ").concat(r)))}function kE(e,n,r){if(r===void 0&&(r=Error),!e)throw new r(n)}var Gi;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Gi||(Gi={}));var ks;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(ks||(ks={}));var wi;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(wi||(wi={}));var $a,ji=!0;try{var EE=vE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ji=(($a=EE.exec("a"))===null||$a===void 0?void 0:$a[0])==="a"}catch{ji=!1}function vE(e,n){return new RegExp(e,n)}function jt(e,n){return Object.keys(e).reduce(function(r,t){return r[t]=q({timeZone:n},e[t]),r},{})}function Ui(e,n){var r=Object.keys(q(q({},e),n));return r.reduce(function(t,a){return t[a]=q(q({},e[a]||{}),n[a]||{}),t},{})}function Bi(e,n){if(!n)return e;var r=_d.formats;return q(q(q({},r),e),{date:Ui(jt(r.date,n),jt(e.date||{},n)),time:Ui(jt(r.time,n),jt(e.time||{},n))})}var Es=function(e,n,r,t,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,u=e.defaultFormats,d=e.fallbackOnEmptyString,k=e.onError,v=e.timeZone,b=e.defaultRichTextElements;r===void 0&&(r={id:""});var h=r.id,T=r.defaultMessage;kE(!!h,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var y=String(h),c=o&&Object.prototype.hasOwnProperty.call(o,y)&&o[y];if(Array.isArray(c)&&c.length===1&&c[0].type===ks.literal)return c[0].value;if(!t&&c&&typeof c=="string"&&!b)return c.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=q(q({},b),t||{}),i=Bi(i,v),u=Bi(u,v),!c){if(d===!1&&c==="")return c;if((!T||s&&s.toLowerCase()!==l.toLowerCase())&&k(new lE(r,s)),T)try{var p=n.getMessageFormat(T,l,u,a);return p.format(t)}catch(A){return k(new Ca('Error formatting default message for: "'.concat(y,'", rendering default message verbatim'),s,r,A)),typeof T=="string"?T:y}return y}try{var p=n.getMessageFormat(c,s,i,q({formatters:n},a||{}));return p.format(t)}catch(A){k(new Ca('Error formatting message: "'.concat(y,'", using ').concat(T?"default message":"id"," as fallback."),s,r,A))}if(T)try{var p=n.getMessageFormat(T,l,u,a);return p.format(t)}catch(A){k(new Ca('Error formatting the default message for: "'.concat(y,'", rendering message verbatim'),s,r,A))}return typeof c=="string"?c:typeof T=="string"?T:y},Id=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Aa(e,n,r,t){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;t===void 0&&(t={});var l=t.format,u=q(q({},o&&{timeZone:o}),l&&qs(s,n,l,i)),d=er(t,Id,u);return n==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=q(q({},d),{hour:"numeric",minute:"numeric"})),r(a,d)}function mE(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Aa(e,"date",n,i).format(o)}catch(l){e.onError(new en("Error formatting date.",e.locale,l))}return String(o)}function fE(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Aa(e,"time",n,i).format(o)}catch(l){e.onError(new en("Error formatting time.",e.locale,l))}return String(o)}function TE(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],i=r[2],o=i===void 0?{}:i,l=e.timeZone,u=e.locale,d=e.onError,k=er(o,Id,l?{timeZone:l}:{});try{return n(u,k).formatRange(a,s)}catch(v){d(new en("Error formatting date time range.",e.locale,v))}return String(a)}function RE(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Aa(e,"date",n,i).formatToParts(o)}catch(l){e.onError(new en("Error formatting date.",e.locale,l))}return[]}function yE(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Aa(e,"time",n,i).formatToParts(o)}catch(l){e.onError(new en("Error formatting time.",e.locale,l))}return[]}var AE=["style","type","fallback","languageDisplay"];function bE(e,n,r,t){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new jn(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,fn.MISSING_INTL_API));var o=er(t,AE);try{return n(a,o).of(r)}catch(l){s(new en("Error formatting display name.",a,l))}}var pE=["type","style"],qi=Date.now();function cE(e){return"".concat(qi,"_").concat(e,"_").concat(qi)}function _E(e,n,r,t){t===void 0&&(t={});var a=Ld(e,n,r,t).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function Ld(e,n,r,t){var a=e.locale,s=e.onError;t===void 0&&(t={});var i=Intl.ListFormat;i||s(new jn(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,fn.MISSING_INTL_API));var o=er(t,pE);try{var l={},u=r.map(function(d,k){if(typeof d=="object"){var v=cE(k);return l[v]=d,v}return String(d)});return n(a,o).formatToParts(u).map(function(d){return d.type==="literal"?d:q(q({},d),{value:l[d.value]||d.value})})}catch(d){s(new en("Error formatting list.",a,d))}return r}var hE=["type"];function SE(e,n,r,t){var a=e.locale,s=e.onError;t===void 0&&(t={}),Intl.PluralRules||s(new jn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,fn.MISSING_INTL_API));var i=er(t,hE);try{return n(a,i).select(r)}catch(o){s(new en("Error formatting plural.",a,o))}return"other"}var NE=["numeric","style"];function OE(e,n,r){var t=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var i=r.format,o=!!i&&qs(a,"relative",i,s)||{},l=er(r,NE,o);return n(t,l)}function IE(e,n,r,t,a){a===void 0&&(a={}),t||(t="second");var s=Intl.RelativeTimeFormat;s||e.onError(new jn(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,fn.MISSING_INTL_API));try{return OE(e,n,a).format(r,t)}catch(i){e.onError(new en("Error formatting relative time.",e.locale,i))}return String(r)}var LE=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Dd(e,n,r){var t=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var i=r.format,o=i&&qs(a,"number",i,s)||{},l=er(r,LE,o);return n(t,l)}function DE(e,n,r,t){t===void 0&&(t={});try{return Dd(e,n,t).format(r)}catch(a){e.onError(new en("Error formatting number.",e.locale,a))}return String(r)}function KE(e,n,r,t){t===void 0&&(t={});try{return Dd(e,n,t).formatToParts(r)}catch(a){e.onError(new en("Error formatting number.",e.locale,a))}return[]}function PE(e){var n=e?e[Object.keys(e)[0]]:void 0;return typeof n=="string"}function FE(e){e.onWarn&&e.defaultRichTextElements&&PE(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function ME(e,n){var r=gE(n),t=q(q({},Nd),e),a=t.locale,s=t.defaultLocale,i=t.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new Vi('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new Vi('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new oE('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),FE(t),q(q({},t),{formatters:r,formatNumber:DE.bind(null,t,r.getNumberFormat),formatNumberToParts:KE.bind(null,t,r.getNumberFormat),formatRelativeTime:IE.bind(null,t,r.getRelativeTimeFormat),formatDate:mE.bind(null,t,r.getDateTimeFormat),formatDateToParts:RE.bind(null,t,r.getDateTimeFormat),formatTime:fE.bind(null,t,r.getDateTimeFormat),formatDateTimeRange:TE.bind(null,t,r.getDateTimeFormat),formatTimeToParts:yE.bind(null,t,r.getDateTimeFormat),formatPlural:SE.bind(null,t,r.getPluralRules),formatMessage:Es.bind(null,t,r),$t:Es.bind(null,t,r),formatList:_E.bind(null,t,r.getListFormat),formatListToParts:Ld.bind(null,t,r.getListFormat),formatDisplayName:bE.bind(null,t,r.getDisplayNames)})}function VE(e){gk(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var GE=q(q({},Nd),{textComponent:f.Fragment});function wE(e){return function(n){return e(f.Children.toArray(n))}}function Hi(e,n){if(e===n)return!0;if(!e||!n)return!1;var r=Object.keys(e),t=Object.keys(n),a=r.length;if(t.length!==a)return!1;for(var s=0;s<a;s++){var i=r[s];if(e[i]!==n[i]||!Object.prototype.hasOwnProperty.call(n,i))return!1}return!0}var Hs=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=f.createContext(null)):f.createContext(null);Hs.Consumer;var jE=Hs.Provider,UE=jE,BE=Hs;function dn(){var e=f.useContext(BE);return VE(e),e}var vs;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(vs||(vs={}));var ms;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(ms||(ms={}));function Kd(e){var n=function(r){var t=dn(),a=r.value,s=r.children,i=yr(r,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?t.formatDateToParts(o,i):t.formatTimeToParts(o,i);return s(l)};return n.displayName=ms[e],n}function ht(e){var n=function(r){var t=dn(),a=r.value,s=r.children,i=yr(r,["value","children"]),o=t[e](a,i);if(typeof s=="function")return s(o);var l=t.textComponent||f.Fragment;return f.createElement(l,null,o)};return n.displayName=vs[e],n}function Pd(e){return e&&Object.keys(e).reduce(function(n,r){var t=e[r];return n[r]=cd(t)?wE(t):t,n},{})}var Yi=function(e,n,r,t){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=Pd(t),o=Es.apply(void 0,gn([e,n,r,i],a,!1));return Array.isArray(o)?f.Children.toArray(o):o},qE=function(e,n){var r=e.defaultRichTextElements,t=yr(e,["defaultRichTextElements"]),a=Pd(r),s=ME(q(q(q({},GE),t),{defaultRichTextElements:a}),n),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return q(q({},s),{formatMessage:Yi.bind(null,i,s.formatters),$t:Yi.bind(null,i,s.formatters)})};function HE(e,n){var r=e.values,t=yr(e,["values"]),a=n.values,s=yr(n,["values"]);return Hi(a,r)&&Hi(t,s)}function Fd(e){var n=dn(),r=n.formatMessage,t=n.textComponent,a=t===void 0?f.Fragment:t,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,k=d===void 0?a:d,v=e.ignoreTag,b={id:s,description:i,defaultMessage:o},h=r(b,l,{ignoreTag:v});return typeof u=="function"?u(Array.isArray(h)?h:[h]):k?f.createElement(k,null,f.Children.toArray(h)):f.createElement(f.Fragment,null,h)}Fd.displayName="FormattedMessage";var ye=f.memo(Fd,HE);ye.displayName="MemoizedFormattedMessage";ht("formatDate");ht("formatTime");ht("formatNumber");ht("formatList");ht("formatDisplayName");Kd("formatDate");Kd("formatTime");const YE=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],xE=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],CE=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],$E=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],WE=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],JE=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],zE=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],ZE=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],XE=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],QE=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],ev=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],nv=[{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"}],rv=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],tv=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],av=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],sv=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],iv=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],ov=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],lv=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],dv=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],uv=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],gv=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],kv=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],Ev=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],vv=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],mv=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],fv=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],Tv=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],Rv=[{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST.KITTS OG NEVIS"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"}],yv=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],Av=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],bv=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],pv=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],cv=[{kode:"FODSELSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsdato"},{kode:"TILBAKETREKK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilbaketrekk"},{kode:"ER_ANKEFRIST_IKKE_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er ankefrist ikke overholdt"},{kode:"FNR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsnummer"},{kode:"TERMINBEKREFTELSE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Terminbekreftelse"},{kode:"TERMINDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Termindato"},{kode:"ANKE_RESULTAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Anke resultat"},{kode:"UTTAK_SPLITT_TIDSPERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resulterende periode ved splitting"},{kode:"UTTAK_TREKKDAGER_FLERBARN_KVOTE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager flerbarn kvote"},{kode:"OPPHOLDSRETT_IKKE_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har ikke oppholdsrett i EØS"},{kode:"TILRETTELEGGING_SKAL_BRUKES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avgjør om tilrettelegging skal brukes"},{kode:"ER_ANKE_IKKE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er anke ikke konkret."},{kode:"BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandling"},{kode:"UTTAK_GRADERING_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gradering av arbeidsforhold"},{kode:"ANKE_AVVIST_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til avvist anke"},{kode:"INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt"},{kode:"SOKNADSFRISTVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfristvilkåret"},{kode:"DAGPENGER_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dagpenger"},{kode:"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Til og med dato fastsatt av saksbehandler"},{kode:"SOKNADSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfrist"},{kode:"VILKAR_SOM_ANVENDES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vilkår som anvendes"},{kode:"PERIODE_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode f.o.m."},{kode:"UTTAK_PROSENT_UTBETALING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utbetalingsgrad"},{kode:"NYTT_REFUSJONSKRAV",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Nytt refusjonskrav"},{kode:"DODSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dødsdato"},{kode:"DOKUMENTASJON_FORELIGGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dokumentasjon foreligger"},{kode:"LØNNSENDRING_I_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Lønnsendring i beregningsperioden"},{kode:"AVKLART_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklart periode"},{kode:"SVANGERSKAPSPENGERVILKÅRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Svangerskapsvilkåret"},{kode:"KLAGE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aktivitet"},{kode:"UTTAK_STØNADSKONTOTYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stønadskontotype"},{kode:"ALENEOMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aleneomsorg"},{kode:"OMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorg"},{kode:"KONTAKTPERSON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontaktperson"},{kode:"ER_KLAGE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"TILRETTELEGGING_BEHOV_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilrettelegging behov FOM"},{kode:"ANNEN_FORELDER_RETT_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Annen forelder har opptjent rett fra land i EØS"},{kode:"AKTIVITETSKRAV_AVKLARING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklaring om mor er i aktivitet"},{kode:"FASTSETT_RESULTAT_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett resultat for perioden"},{kode:"FRILANSVIRKSOMHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilansvirksomhet"},{kode:"MANN_ADOPTERER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mann adopterer"},{kode:"ANDEL_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Andel i arbeid"},{kode:"DELVIS_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis tilrettelegging FOM"},{kode:"OPPTJENINGSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Opptjeningsvilkåret"},{kode:"ER_KLAGER_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"UTTAK_PERIODE_RESULTAT_TYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultattype for periode"},{kode:"UTLAND",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utland"},{kode:"BRUK_ANTALL_I_TPS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra folkeregisteret"},{kode:"AKTIVITET_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden med aktivitet"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{kode:"IKKE_OMSORG_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden Søker har ikke omsorg for barnet"},{kode:"DEKNINGSGRAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dekningsgrad"},{kode:"ER_ANKEN_IKKE_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"er anken ikke signert."},{kode:"SYKDOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Sykdom"},{kode:"UTSTEDTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utstedtdato"},{kode:"FODSELSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødsel"},{kode:"NAVN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Navn"},{kode:"UTTAK_TREKKDAGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager"},{kode:"PA_KLAGD_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Påklagd behandlingId"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Har søker inntekt fra etterlønn eller sluttpakke"},{kode:"OPPHOLDSRETT_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har oppholdsrett i EØS"},{kode:"RETT_TIL_FORELDREPENGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Rett til foreldrepenger"},{kode:"INNTEKTSKATEGORI",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori"},{kode:"ADOPTERER_ALENE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopterer alene"},{kode:"ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Arbeidsforhold"},{kode:"BRUKER_TVUNGEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker er under tvungen forvaltning"},{kode:"DELVIS_REFUSJON_FØR_STARTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis refusjon som utbetales før startdato for full refusjon"},{kode:"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring tidsbegrenset arbeidsforhold"},{kode:"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{kode:"MANDAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mandat"},{kode:"MOR_MOTTAR_UFØRETRYGD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar uføretrygd"},{kode:"HEL_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Hel tilrettelegging FOM"},{kode:"ORGANISASJONSNUMMER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Organisasjonsnummer"},{kode:"UTTAK_GRADERING_AVSLAG_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak avslag gradering"},{kode:"ER_KLAGEN_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"ER_KLAGEFRIST_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"OMSORGSVILKAR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"PA_ANKET_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"på anket behandlingsId."},{kode:"SLUTTE_ARBEID_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Slutte arbeid FOM"},{kode:"BRUK_ANTALL_I_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra søknad"},{kode:"KLAGE_RESULTAT_NFP",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat"},{kode:"FORDELING_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling for arbeidsforhold"},{kode:"UTTAK_SAMTIDIG_UTTAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Samtidig uttak"},{kode:"ER_SOKER_BOSATT_I_NORGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er søker bosatt i Norge?"},{kode:"FRILANS_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilans inntekt"},{kode:"FASTSETT_VIDERE_BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett videre behandling"},{kode:"BRUK_ANTALL_I_VEDTAKET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra vedtaket"},{kode:"OMSORGSOVERTAKELSESDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorgsovertakelsesdato"},{kode:"UTTAK_PERIODE_RESULTAT_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat årsak"},{kode:"ENDRING_NAERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring i næring"},{kode:"FORDELING_FOR_NY_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny andel med fordeling"},{kode:"BEHANDLENDE_ENHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandlende enhet"},{kode:"BRUTTO_NAERINGSINNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Brutto næringsinntekt"},{kode:"FORDELING_ETTER_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling etter besteberegning"},{kode:"STARTDATO_FRA_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Startdato fra søknad"},{kode:"NY_STARTDATO_REFUSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny startdato for refusjon"},{kode:"OVERSTYRT_VURDERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt vurdering"},{kode:"KLAGE_RESULTAT_KA",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ytelsesvedtak"},{kode:"FARESIGNALER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Faresignaler"},{kode:"NY_AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Det er lagt til ny aktivitet for"},{kode:"MOTTAR_YTELSE_FRILANS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for frilansaktiviteten"},{kode:"NY_REFUSJONSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny refusjonsfrist"},{kode:"OVERSTYRT_BEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt beregning"},{kode:"AVKLARSAKSOPPLYSNINGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklar saksopplysninger"},{kode:"INNTEKT_FRA_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt fra arbeidsforhold"},{kode:"SOKERSOPPLYSNINGSPLIKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søkers opplysningsplikt"},{kode:"SELVSTENDIG_NAERINGSDRIVENDE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Selvstendig næringsdrivende"},{kode:"GYLDIG_MEDLEM_FOLKETRYGDEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gyldig medlem i folketrygden"},{kode:"MOTTATT_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottatt dato"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Antall barn"},{kode:"EKTEFELLES_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ektefelles barn"},{kode:"MILITÆR_ELLER_SIVIL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"PERIODE_TOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode t.o.m."},{kode:"FORELDREANSVARSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"STILLINGSPROSENT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stillingsprosent"},{kode:"ADOPSJONSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopsjon"},{kode:"ANKE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"INNTEKTSKATEGORI_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori for andel"},{kode:"KONTROLL_AV_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontroll av besteberegning"},{kode:"MOR_MOTTAR_STØNAD_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar foreldrepenger fra land i EØS"},{kode:"ER_ANKER_IKKE_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Angir om anker ikke er part i saken."},{kode:"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er vilkårene for tilbakekreving oppfylt"},{kode:"NY_FORDELING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny fordeling for"},{kode:"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er det særlige grunner til reduksjon"},{kode:"MOTTAR_YTELSE_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for arbeid i {value}"},{kode:"TYPE_VERGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Type verge"}],_v=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],hv=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],Sv=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],Nv=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],Ov=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],Iv=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],Lv=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],Dv=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],Kv=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],Pv=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],Fv=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],Mv=[{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"}],Vv=[{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],Gv=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],wv=[{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"},{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"}],jv=[{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"}],Uv={RelasjonsRolleType:YE,HistorikkinnslagType:xE,UttakUtsettelseType:CE,FagsakYtelseType:$E,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:WE,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:JE,BeregningsgrunnlagAndeltype:zE,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:ZE,KonsekvensForYtelsen:XE,Inntektskategori:QE,SivilstandType:ev,SkjermlenkeType:nv,FaktaOmBeregningTilfelle:rv,KlageVurdering:tv,HistorikkBegrunnelseType:av,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:sv,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:iv,VergeType:ov,TilbakekrevingVidereBehandling:lv,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:dv,KlageHjemmel:uv,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:gv,ArbeidType:kv,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:Ev,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:vv,FordelingPeriodeKilde:mv,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:fv,Arbeidskategori:Tv,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:Rv,BehandlingType:yv,KontrollerAktivitetskravAvklaring:Av,InnsynResultatType:bv,MedlemskapType:pv,HistorikkEndretFeltType:cv,PersonstatusType:_v,Fagsystem:hv,AnkeVurdering:Sv,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:Nv,VirksomhetType:Ov,MedlemskapDekningType:Iv,ArbeidsforholdHandlingType:Lv,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_33:[{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],SVP_VK_1:[{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'}],FP_VK_16:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],FP_VK_2_F:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1052",kodeverk:"AVSLAGSARSAK",navn:"Innflyttet for mindre enn ett år siden",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK_2_F", "lovreferanse": "14-17 5. ledd"}]}]}'}]},OpptjeningAktivitetType:Dv,PermisjonsbeskrivelseType:Kv,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:Pv,MedlemskapManuellVurderingType:Fv,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:Mv,NaturalYtelseType:Vv,PeriodeResultatÅrsak:[{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]}],ForeldreType:Gv,AdresseType:wv,FagsakMarkering:jv},Md=e=>`${Number(e).toLocaleString("nb-NO").replace(/,|\s/g," ")} kr`;var ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ys(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vd={exports:{}};(function(e,n){(function(r,t){e.exports=t()})(ba,function(){var r="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(T){var y={date:T,utc:!0,args:arguments};return new i(y)},l.utc=function(T){var y=o(this.toDate(),{locale:this.$L,utc:!0});return T?y.add(this.utcOffset(),r):y},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(T){T.utc&&(this.$u=!0),this.$utils().u(T.$offset)||(this.$offset=T.$offset),u.call(this,T)};var d=l.init;l.init=function(){if(this.$u){var T=this.$d;this.$y=T.getUTCFullYear(),this.$M=T.getUTCMonth(),this.$D=T.getUTCDate(),this.$W=T.getUTCDay(),this.$H=T.getUTCHours(),this.$m=T.getUTCMinutes(),this.$s=T.getUTCSeconds(),this.$ms=T.getUTCMilliseconds()}else d.call(this)};var k=l.utcOffset;l.utcOffset=function(T,y){var c=this.$utils().u;if(c(T))return this.$u?0:c(this.$offset)?k.call(this):this.$offset;if(typeof T=="string"&&(T=function(w){w===void 0&&(w="");var B=w.match(t);if(!B)return null;var N=(""+B[0]).match(a)||["-",0,0],_=N[0],V=60*+N[1]+ +N[2];return V===0?0:_==="+"?V:-V}(T),T===null))return this;var p=Math.abs(T)<=16?60*T:T,A=this;if(y)return A.$offset=p,A.$u=T===0,A;if(T!==0){var F=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(A=this.local().add(p+F,r)).$offset=p,A.$x.$localOffset=F}else A=this.utc();return A};var v=l.format;l.format=function(T){var y=T||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return v.call(this,y)},l.valueOf=function(){var T=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*T},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var b=l.toDate;l.toDate=function(T){return T==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():b.call(this)};var h=l.diff;l.diff=function(T,y,c){if(T&&this.$u===T.$u)return h.call(this,T,y,c);var p=this.local(),A=o(T).local();return h.call(p,A,y,c)}}})})(Vd);var Bv=Vd.exports;const qv=Ys(Bv);var Gd={exports:{}};(function(e,n){(function(r,t){e.exports=t()})(ba,function(){var r,t,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,k=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:u,months:d,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},b=function(B){return B instanceof F},h=function(B,N,_){return new F(B,_,N.$l)},T=function(B){return t.p(B)+"s"},y=function(B){return B<0},c=function(B){return y(B)?Math.ceil(B):Math.floor(B)},p=function(B){return Math.abs(B)},A=function(B,N){return B?y(B)?{negative:!0,format:""+p(B)+N}:{negative:!1,format:""+B+N}:{negative:!1,format:""}},F=function(){function B(_,V,U){var H=this;if(this.$d={},this.$l=U,_===void 0&&(this.$ms=0,this.parseFromMilliseconds()),V)return h(_*v[T(V)],this);if(typeof _=="number")return this.$ms=_,this.parseFromMilliseconds(),this;if(typeof _=="object")return Object.keys(_).forEach(function(x){H.$d[T(x)]=_[x]}),this.calMilliseconds(),this;if(typeof _=="string"){var L=_.match(k);if(L){var D=L.slice(2).map(function(x){return x!=null?Number(x):0});return this.$d.years=D[0],this.$d.months=D[1],this.$d.weeks=D[2],this.$d.days=D[3],this.$d.hours=D[4],this.$d.minutes=D[5],this.$d.seconds=D[6],this.calMilliseconds(),this}}return this}var N=B.prototype;return N.calMilliseconds=function(){var _=this;this.$ms=Object.keys(this.$d).reduce(function(V,U){return V+(_.$d[U]||0)*v[U]},0)},N.parseFromMilliseconds=function(){var _=this.$ms;this.$d.years=c(_/u),_%=u,this.$d.months=c(_/d),_%=d,this.$d.days=c(_/o),_%=o,this.$d.hours=c(_/i),_%=i,this.$d.minutes=c(_/s),_%=s,this.$d.seconds=c(_/a),_%=a,this.$d.milliseconds=_},N.toISOString=function(){var _=A(this.$d.years,"Y"),V=A(this.$d.months,"M"),U=+this.$d.days||0;this.$d.weeks&&(U+=7*this.$d.weeks);var H=A(U,"D"),L=A(this.$d.hours,"H"),D=A(this.$d.minutes,"M"),x=this.$d.seconds||0;this.$d.milliseconds&&(x+=this.$d.milliseconds/1e3,x=Math.round(1e3*x)/1e3);var $=A(x,"S"),Q=_.negative||V.negative||H.negative||L.negative||D.negative||$.negative,Re=L.format||D.format||$.format?"T":"",he=(Q?"-":"")+"P"+_.format+V.format+H.format+Re+L.format+D.format+$.format;return he==="P"||he==="-P"?"P0D":he},N.toJSON=function(){return this.toISOString()},N.format=function(_){var V=_||"YYYY-MM-DDTHH:mm:ss",U={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return V.replace(l,function(H,L){return L||String(U[H])})},N.as=function(_){return this.$ms/v[T(_)]},N.get=function(_){var V=this.$ms,U=T(_);return U==="milliseconds"?V%=1e3:V=U==="weeks"?c(V/v[U]):this.$d[U],V||0},N.add=function(_,V,U){var H;return H=V?_*v[T(V)]:b(_)?_.$ms:h(_,this).$ms,h(this.$ms+H*(U?-1:1),this)},N.subtract=function(_,V){return this.add(_,V,!0)},N.locale=function(_){var V=this.clone();return V.$l=_,V},N.clone=function(){return h(this.$ms,this)},N.humanize=function(_){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!_)},N.valueOf=function(){return this.asMilliseconds()},N.milliseconds=function(){return this.get("milliseconds")},N.asMilliseconds=function(){return this.as("milliseconds")},N.seconds=function(){return this.get("seconds")},N.asSeconds=function(){return this.as("seconds")},N.minutes=function(){return this.get("minutes")},N.asMinutes=function(){return this.as("minutes")},N.hours=function(){return this.get("hours")},N.asHours=function(){return this.as("hours")},N.days=function(){return this.get("days")},N.asDays=function(){return this.as("days")},N.weeks=function(){return this.get("weeks")},N.asWeeks=function(){return this.as("weeks")},N.months=function(){return this.get("months")},N.asMonths=function(){return this.as("months")},N.years=function(){return this.get("years")},N.asYears=function(){return this.as("years")},B}(),w=function(B,N,_){return B.add(N.years()*_,"y").add(N.months()*_,"M").add(N.days()*_,"d").add(N.hours()*_,"h").add(N.minutes()*_,"m").add(N.seconds()*_,"s").add(N.milliseconds()*_,"ms")};return function(B,N,_){r=_,t=_().$utils(),_.duration=function(H,L){var D=_.locale();return h(H,{$l:D},L)},_.isDuration=b;var V=N.prototype.add,U=N.prototype.subtract;N.prototype.add=function(H,L){return b(H)?w(this,H,1):V.bind(this)(H,L)},N.prototype.subtract=function(H,L){return b(H)?w(this,H,-1):U.bind(this)(H,L)}}})})(Gd);var Hv=Gd.exports;const Yv=Ys(Hv);var wd={exports:{}};(function(e,n){(function(r,t){e.exports=t()})(ba,function(){var r="day";return function(t,a,s){var i=function(u){return u.add(4-u.isoWeekday(),r)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),r);var d,k,v,b,h=i(this),T=(d=this.isoWeekYear(),k=this.$u,v=(k?s.utc:s)().year(d).startOf("year"),b=4-v.isoWeekday(),v.isoWeekday()>4&&(b+=7),v.add(b,r));return h.diff(T,"week")+1},o.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var l=o.startOf;o.startOf=function(u,d){var k=this.$utils(),v=!!k.u(d)||d;return k.p(u)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(u,d)}}})})(wd);var xv=wd.exports;const Cv=Ys(xv);var $v={exports:{}};(function(e,n){(function(r,t){e.exports=t(Qn)})(ba,function(r){function t(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=t(r),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})})($v);const Wv=Od(),Ge=e=>qE({locale:"nb-NO",messages:e},Wv),jd={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},Jv="DD.MM.YYYY";Qn.extend(qv);Qn.extend(Cv);Qn.extend(Yv);Ge(jd);const Xn=e=>e==null?e:e.replace(/&#?((?!(60|62);)\w+);/g,(n,r)=>{if(Number.isNaN(parseInt(r,10))){const t={quot:34,amp:38,apos:39,nbsp:160,copy:169,reg:174,deg:176,frasl:47,trade:8482,euro:8364,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,permil:8240,lsaquo:8249,rsaquo:8250,spades:9824,clubs:9827,hearts:9829,diams:9830,oline:8254,larr:8592,uarr:8593,rarr:8594,darr:8595,hellip:133,ndash:150,mdash:151,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,brkbar:166,sect:167,uml:168,die:168,ordf:170,laquo:171,not:172,shy:173,macr:175,hibar:175,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Alpha:913,alpha:945,Beta:914,beta:946,Gamma:915,gamma:947,Delta:916,delta:948,Epsilon:917,epsilon:949,Zeta:918,zeta:950,Eta:919,eta:951,Theta:920,theta:952,Iota:921,iota:953,Kappa:922,kappa:954,Lambda:923,lambda:955,Mu:924,mu:956,Nu:925,nu:957,Xi:926,xi:958,Omicron:927,omicron:959,Pi:928,pi:960,Rho:929,rho:961,Sigma:931,sigma:963,Tau:932,tau:964,Upsilon:933,upsilon:965,Phi:934,phi:966,Chi:935,chi:967,Psi:936,psi:968,Omega:937,omega:969}[r];return t!==void 0?String.fromCharCode(t):n}return String.fromCharCode(r)}),Zt=e=>e.toString().replace(new RegExp("\\p{Dash_Punctuation}","gu"),"-").replace(/[\p{Space_Separator}\t]/gu," ").replace(/[“”]/g,'"').replace(/[‘’`]/g,"'").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Ut=Ge(jd),xs=e=>{if(!e)return Ut.formatMessage({id:"Malform.Bokmal"});switch(e){case"NN":return Ut.formatMessage({id:"Malform.Nynorsk"});case"EN":return Ut.formatMessage({id:"Malform.Engelsk"});default:return Ut.formatMessage({id:"Malform.Bokmal"})}};var St=e=>e.type==="checkbox",Cn=e=>e instanceof Date,je=e=>e==null;const Ud=e=>typeof e=="object";var ce=e=>!je(e)&&!Array.isArray(e)&&Ud(e)&&!Cn(e),Bd=e=>ce(e)&&e.target?St(e.target)?e.target.checked:e.target.value:e,zv=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,qd=(e,n)=>e.has(zv(n)),Zv=e=>{const n=e.constructor&&e.constructor.prototype;return ce(n)&&n.hasOwnProperty("isPrototypeOf")},Cs=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Be(e){let n;const r=Array.isArray(e);if(e instanceof Date)n=new Date(e);else if(e instanceof Set)n=new Set(e);else if(!(Cs&&(e instanceof Blob||e instanceof FileList))&&(r||ce(e)))if(n=r?[]:{},!r&&!Zv(e))n=e;else for(const t in e)e.hasOwnProperty(t)&&(n[t]=Be(e[t]));else return e;return n}var pa=e=>Array.isArray(e)?e.filter(Boolean):[],Ae=e=>e===void 0,P=(e,n,r)=>{if(!n||!ce(e))return r;const t=pa(n.split(/[,[\].]+?/)).reduce((a,s)=>je(a)?a:a[s],e);return Ae(t)||t===e?Ae(e[n])?r:e[n]:t},ze=e=>typeof e=="boolean",$s=e=>/^\w*$/.test(e),Hd=e=>pa(e.replace(/["|']|\]/g,"").split(/\.|\[/)),le=(e,n,r)=>{let t=-1;const a=$s(n)?[n]:Hd(n),s=a.length,i=s-1;for(;++t<s;){const o=a[t];let l=r;if(t!==i){const u=e[o];l=ce(u)||Array.isArray(u)?u:isNaN(+a[t+1])?{}:[]}if(o==="__proto__")return;e[o]=l,e=e[o]}return e};const Xt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},tn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},bn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Yd=S.createContext(null),pr=()=>S.useContext(Yd),Xv=e=>{const{children:n,...r}=e;return S.createElement(Yd.Provider,{value:r},n)};var xd=(e,n,r,t=!0)=>{const a={defaultValues:n._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const i=s;return n._proxyFormState[i]!==tn.all&&(n._proxyFormState[i]=!t||tn.all),r&&(r[i]=!0),e[i]}});return a},He=e=>ce(e)&&!Object.keys(e).length,Cd=(e,n,r,t)=>{r(e);const{name:a,...s}=e;return He(s)||Object.keys(s).length>=Object.keys(n).length||Object.keys(s).find(i=>n[i]===(!t||tn.all))},kt=e=>Array.isArray(e)?e:[e],$d=(e,n,r)=>!e||!n||e===n||kt(e).some(t=>t&&(r?t===n:t.startsWith(n)||n.startsWith(t)));function Ws(e){const n=S.useRef(e);n.current=e,S.useEffect(()=>{const r=!e.disabled&&n.current.subject&&n.current.subject.subscribe({next:n.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function Qv(e){const n=pr(),{control:r=n.control,disabled:t,name:a,exact:s}=e||{},[i,o]=S.useState(r._formState),l=S.useRef(!0),u=S.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=S.useRef(a);return d.current=a,Ws({disabled:t,next:k=>l.current&&$d(d.current,k.name,s)&&Cd(k,u.current,r._updateFormState)&&o({...r._formState,...k}),subject:r._subjects.state}),S.useEffect(()=>(l.current=!0,u.current.isValid&&r._updateValid(!0),()=>{l.current=!1}),[r]),xd(i,r,u.current,!1)}var vn=e=>typeof e=="string",Wd=(e,n,r,t,a)=>vn(e)?(t&&n.watch.add(e),P(r,e,a)):Array.isArray(e)?e.map(s=>(t&&n.watch.add(s),P(r,s))):(t&&(n.watchAll=!0),r);function em(e){const n=pr(),{control:r=n.control,name:t,defaultValue:a,disabled:s,exact:i}=e||{},o=S.useRef(t);o.current=t,Ws({disabled:s,subject:r._subjects.values,next:d=>{$d(o.current,d.name,i)&&u(Be(Wd(o.current,r._names,d.values||r._formValues,!1,a)))}});const[l,u]=S.useState(r._getWatch(t,a));return S.useEffect(()=>r._removeUnmounted()),l}function nm(e){const n=pr(),{name:r,disabled:t,control:a=n.control,shouldUnregister:s}=e,i=qd(a._names.array,r),o=em({control:a,name:r,defaultValue:P(a._formValues,r,P(a._defaultValues,r,e.defaultValue)),exact:!0}),l=Qv({control:a,name:r,exact:!0}),u=S.useRef(a.register(r,{...e.rules,value:o,...ze(e.disabled)?{disabled:e.disabled}:{}}));return S.useEffect(()=>{const d=a._options.shouldUnregister||s,k=(v,b)=>{const h=P(a._fields,v);h&&h._f&&(h._f.mount=b)};if(k(r,!0),d){const v=Be(P(a._options.defaultValues,r));le(a._defaultValues,r,v),Ae(P(a._formValues,r))&&le(a._formValues,r,v)}return()=>{(i?d&&!a._state.action:d)?a.unregister(r):k(r,!1)}},[r,a,i,s]),S.useEffect(()=>{P(a._fields,r)&&a._updateDisabledField({disabled:t,fields:a._fields,name:r,value:P(a._fields,r)._f.value})},[t,r,a]),{field:{name:r,value:o,...ze(t)||l.disabled?{disabled:l.disabled||t}:{},onChange:S.useCallback(d=>u.current.onChange({target:{value:Bd(d),name:r},type:Xt.CHANGE}),[r]),onBlur:S.useCallback(()=>u.current.onBlur({target:{value:P(a._formValues,r),name:r},type:Xt.BLUR}),[r,a]),ref:S.useCallback(d=>{const k=P(a._fields,r);k&&d&&(k._f.ref={focus:()=>d.focus(),select:()=>d.select(),setCustomValidity:v=>d.setCustomValidity(v),reportValidity:()=>d.reportValidity()})},[a._fields,r])},formState:l,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!P(l.errors,r)},isDirty:{enumerable:!0,get:()=>!!P(l.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!P(l.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!P(l.validatingFields,r)},error:{enumerable:!0,get:()=>P(l.errors,r)}})}}var rm=(e,n,r,t,a)=>n?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[t]:a||!0}}:{},xi=e=>({isOnSubmit:!e||e===tn.onSubmit,isOnBlur:e===tn.onBlur,isOnChange:e===tn.onChange,isOnAll:e===tn.all,isOnTouch:e===tn.onTouched}),Ci=(e,n,r)=>!r&&(n.watchAll||n.watch.has(e)||[...n.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const Et=(e,n,r,t)=>{for(const a of r||Object.keys(e)){const s=P(e,a);if(s){const{_f:i,...o}=s;if(i){if(i.refs&&i.refs[0]&&n(i.refs[0],a)&&!t)return!0;if(i.ref&&n(i.ref,i.name)&&!t)return!0;if(Et(o,n))break}else if(ce(o)&&Et(o,n))break}}};var tm=(e,n,r)=>{const t=kt(P(e,r));return le(t,"root",n[r]),le(e,r,t),e},Js=e=>e.type==="file",kn=e=>typeof e=="function",Qt=e=>{if(!Cs)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},$t=e=>vn(e),zs=e=>e.type==="radio",ea=e=>e instanceof RegExp;const $i={value:!1,isValid:!1},Wi={value:!0,isValid:!0};var Jd=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ae(e[0].attributes.value)?Ae(e[0].value)||e[0].value===""?Wi:{value:e[0].value,isValid:!0}:Wi:$i}return $i};const Ji={isValid:!1,value:null};var zd=e=>Array.isArray(e)?e.reduce((n,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:n,Ji):Ji;function zi(e,n,r="validate"){if($t(e)||Array.isArray(e)&&e.every($t)||ze(e)&&!e)return{type:r,message:$t(e)?e:"",ref:n}}var or=e=>ce(e)&&!ea(e)?e:{value:e,message:""},Zi=async(e,n,r,t,a)=>{const{ref:s,refs:i,required:o,maxLength:l,minLength:u,min:d,max:k,pattern:v,validate:b,name:h,valueAsNumber:T,mount:y,disabled:c}=e._f,p=P(n,h);if(!y||c)return{};const A=i?i[0]:s,F=L=>{t&&A.reportValidity&&(A.setCustomValidity(ze(L)?"":L||""),A.reportValidity())},w={},B=zs(s),N=St(s),_=B||N,V=(T||Js(s))&&Ae(s.value)&&Ae(p)||Qt(s)&&s.value===""||p===""||Array.isArray(p)&&!p.length,U=rm.bind(null,h,r,w),H=(L,D,x,$=bn.maxLength,Q=bn.minLength)=>{const Re=L?D:x;w[h]={type:L?$:Q,message:Re,ref:s,...U(L?$:Q,Re)}};if(a?!Array.isArray(p)||!p.length:o&&(!_&&(V||je(p))||ze(p)&&!p||N&&!Jd(i).isValid||B&&!zd(i).isValid)){const{value:L,message:D}=$t(o)?{value:!!o,message:o}:or(o);if(L&&(w[h]={type:bn.required,message:D,ref:A,...U(bn.required,D)},!r))return F(D),w}if(!V&&(!je(d)||!je(k))){let L,D;const x=or(k),$=or(d);if(!je(p)&&!isNaN(p)){const Q=s.valueAsNumber||p&&+p;je(x.value)||(L=Q>x.value),je($.value)||(D=Q<$.value)}else{const Q=s.valueAsDate||new Date(p),Re=Pe=>new Date(new Date().toDateString()+" "+Pe),he=s.type=="time",Fe=s.type=="week";vn(x.value)&&p&&(L=he?Re(p)>Re(x.value):Fe?p>x.value:Q>new Date(x.value)),vn($.value)&&p&&(D=he?Re(p)<Re($.value):Fe?p<$.value:Q<new Date($.value))}if((L||D)&&(H(!!L,x.message,$.message,bn.max,bn.min),!r))return F(w[h].message),w}if((l||u)&&!V&&(vn(p)||a&&Array.isArray(p))){const L=or(l),D=or(u),x=!je(L.value)&&p.length>+L.value,$=!je(D.value)&&p.length<+D.value;if((x||$)&&(H(x,L.message,D.message),!r))return F(w[h].message),w}if(v&&!V&&vn(p)){const{value:L,message:D}=or(v);if(ea(L)&&!p.match(L)&&(w[h]={type:bn.pattern,message:D,ref:s,...U(bn.pattern,D)},!r))return F(D),w}if(b){if(kn(b)){const L=await b(p,n),D=zi(L,A);if(D&&(w[h]={...D,...U(bn.validate,D.message)},!r))return F(D.message),w}else if(ce(b)){let L={};for(const D in b){if(!He(L)&&!r)break;const x=zi(await b[D](p,n),A,D);x&&(L={...x,...U(D,x.message)},F(x.message),r&&(w[h]=L))}if(!He(L)&&(w[h]={ref:A,...L},!r))return w}}return F(!0),w};function am(e,n){const r=n.slice(0,-1).length;let t=0;for(;t<r;)e=Ae(e)?t++:e[n[t++]];return e}function sm(e){for(const n in e)if(e.hasOwnProperty(n)&&!Ae(e[n]))return!1;return!0}function Se(e,n){const r=Array.isArray(n)?n:$s(n)?[n]:Hd(n),t=r.length===1?e:am(e,r),a=r.length-1,s=r[a];return t&&delete t[s],a!==0&&(ce(t)&&He(t)||Array.isArray(t)&&sm(t))&&Se(e,r.slice(0,-1)),e}var Wa=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},fs=e=>je(e)||!Ud(e);function Fn(e,n){if(fs(e)||fs(n))return e===n;if(Cn(e)&&Cn(n))return e.getTime()===n.getTime();const r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(const a of r){const s=e[a];if(!t.includes(a))return!1;if(a!=="ref"){const i=n[a];if(Cn(s)&&Cn(i)||ce(s)&&ce(i)||Array.isArray(s)&&Array.isArray(i)?!Fn(s,i):s!==i)return!1}}return!0}var Zd=e=>e.type==="select-multiple",im=e=>zs(e)||St(e),Ja=e=>Qt(e)&&e.isConnected,Xd=e=>{for(const n in e)if(kn(e[n]))return!0;return!1};function na(e,n={}){const r=Array.isArray(e);if(ce(e)||r)for(const t in e)Array.isArray(e[t])||ce(e[t])&&!Xd(e[t])?(n[t]=Array.isArray(e[t])?[]:{},na(e[t],n[t])):je(e[t])||(n[t]=!0);return n}function Qd(e,n,r){const t=Array.isArray(e);if(ce(e)||t)for(const a in e)Array.isArray(e[a])||ce(e[a])&&!Xd(e[a])?Ae(n)||fs(r[a])?r[a]=Array.isArray(e[a])?na(e[a],[]):{...na(e[a])}:Qd(e[a],je(n)?{}:n[a],r[a]):r[a]=!Fn(e[a],n[a]);return r}var Kr=(e,n)=>Qd(e,n,na(n)),eu=(e,{valueAsNumber:n,valueAsDate:r,setValueAs:t})=>Ae(e)?e:n?e===""?NaN:e&&+e:r&&vn(e)?new Date(e):t?t(e):e;function za(e){const n=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):n.disabled))return Js(n)?n.files:zs(n)?zd(e.refs).value:Zd(n)?[...n.selectedOptions].map(({value:r})=>r):St(n)?Jd(e.refs).value:eu(Ae(n.value)?e.ref.value:n.value,e)}var om=(e,n,r,t)=>{const a={};for(const s of e){const i=P(n,s);i&&le(a,s,i._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:t}},Pr=e=>Ae(e)?e:ea(e)?e.source:ce(e)?ea(e.value)?e.value.source:e.value:e;const Xi="AsyncFunction";var lm=e=>(!e||!e.validate)&&!!(kn(e.validate)&&e.validate.constructor.name===Xi||ce(e.validate)&&Object.values(e.validate).find(n=>n.constructor.name===Xi)),dm=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Qi(e,n,r){const t=P(e,r);if(t||$s(r))return{error:t,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=P(n,s),o=P(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(o&&o.type)return{name:s,error:o};a.pop()}return{name:r}}var um=(e,n,r,t,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(n||e):(r?t.isOnBlur:a.isOnBlur)?!e:(r?t.isOnChange:a.isOnChange)?e:!0,gm=(e,n)=>!pa(P(e,n)).length&&Se(e,n);const km={mode:tn.onSubmit,reValidateMode:tn.onChange,shouldFocusError:!0};function Em(e={}){let n={...km,...e},r={submitCount:0,isDirty:!1,isLoading:kn(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},t={},a=ce(n.defaultValues)||ce(n.values)?Be(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:Be(a),i={action:!1,mount:!1,watch:!1},o={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},k={values:Wa(),array:Wa(),state:Wa()},v=xi(n.mode),b=xi(n.reValidateMode),h=n.criteriaMode===tn.all,T=g=>m=>{clearTimeout(u),u=setTimeout(g,m)},y=async g=>{if(!n.disabled&&(d.isValid||g)){const m=n.resolver?He((await _()).errors):await U(t,!0);m!==r.isValid&&k.state.next({isValid:m})}},c=(g,m)=>{!n.disabled&&(d.isValidating||d.validatingFields)&&((g||Array.from(o.mount)).forEach(R=>{R&&(m?le(r.validatingFields,R,m):Se(r.validatingFields,R))}),k.state.next({validatingFields:r.validatingFields,isValidating:!He(r.validatingFields)}))},p=(g,m=[],R,G,K=!0,I=!0)=>{if(G&&R&&!n.disabled){if(i.action=!0,I&&Array.isArray(P(t,g))){const C=R(P(t,g),G.argA,G.argB);K&&le(t,g,C)}if(I&&Array.isArray(P(r.errors,g))){const C=R(P(r.errors,g),G.argA,G.argB);K&&le(r.errors,g,C),gm(r.errors,g)}if(d.touchedFields&&I&&Array.isArray(P(r.touchedFields,g))){const C=R(P(r.touchedFields,g),G.argA,G.argB);K&&le(r.touchedFields,g,C)}d.dirtyFields&&(r.dirtyFields=Kr(a,s)),k.state.next({name:g,isDirty:L(g,m),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else le(s,g,m)},A=(g,m)=>{le(r.errors,g,m),k.state.next({errors:r.errors})},F=g=>{r.errors=g,k.state.next({errors:r.errors,isValid:!1})},w=(g,m,R,G)=>{const K=P(t,g);if(K){const I=P(s,g,Ae(R)?P(a,g):R);Ae(I)||G&&G.defaultChecked||m?le(s,g,m?I:za(K._f)):$(g,I),i.mount&&y()}},B=(g,m,R,G,K)=>{let I=!1,C=!1;const J={name:g};if(!n.disabled){const Le=!!(P(t,g)&&P(t,g)._f&&P(t,g)._f.disabled);if(!R||G){d.isDirty&&(C=r.isDirty,r.isDirty=J.isDirty=L(),I=C!==J.isDirty);const De=Le||Fn(P(a,g),m);C=!!(!Le&&P(r.dirtyFields,g)),De||Le?Se(r.dirtyFields,g):le(r.dirtyFields,g,!0),J.dirtyFields=r.dirtyFields,I=I||d.dirtyFields&&C!==!De}if(R){const De=P(r.touchedFields,g);De||(le(r.touchedFields,g,R),J.touchedFields=r.touchedFields,I=I||d.touchedFields&&De!==R)}I&&K&&k.state.next(J)}return I?J:{}},N=(g,m,R,G)=>{const K=P(r.errors,g),I=d.isValid&&ze(m)&&r.isValid!==m;if(e.delayError&&R?(l=T(()=>A(g,R)),l(e.delayError)):(clearTimeout(u),l=null,R?le(r.errors,g,R):Se(r.errors,g)),(R?!Fn(K,R):K)||!He(G)||I){const C={...G,...I&&ze(m)?{isValid:m}:{},errors:r.errors,name:g};r={...r,...C},k.state.next(C)}},_=async g=>{c(g,!0);const m=await n.resolver(s,n.context,om(g||o.mount,t,n.criteriaMode,n.shouldUseNativeValidation));return c(g),m},V=async g=>{const{errors:m}=await _(g);if(g)for(const R of g){const G=P(m,R);G?le(r.errors,R,G):Se(r.errors,R)}else r.errors=m;return m},U=async(g,m,R={valid:!0})=>{for(const G in g){const K=g[G];if(K){const{_f:I,...C}=K;if(I){const J=o.array.has(I.name),Le=K._f&&lm(K._f);Le&&d.validatingFields&&c([G],!0);const De=await Zi(K,s,h,n.shouldUseNativeValidation&&!m,J);if(Le&&d.validatingFields&&c([G]),De[I.name]&&(R.valid=!1,m))break;!m&&(P(De,I.name)?J?tm(r.errors,De,I.name):le(r.errors,I.name,De[I.name]):Se(r.errors,I.name))}!He(C)&&await U(C,m,R)}}return R.valid},H=()=>{for(const g of o.unMount){const m=P(t,g);m&&(m._f.refs?m._f.refs.every(R=>!Ja(R)):!Ja(m._f.ref))&&Nr(g)}o.unMount=new Set},L=(g,m)=>!n.disabled&&(g&&m&&le(s,g,m),!Fn(Ie(),a)),D=(g,m,R)=>Wd(g,o,{...i.mount?s:Ae(m)?a:vn(g)?{[g]:m}:m},R,m),x=g=>pa(P(i.mount?s:a,g,e.shouldUnregister?P(a,g,[]):[])),$=(g,m,R={})=>{const G=P(t,g);let K=m;if(G){const I=G._f;I&&(!I.disabled&&le(s,g,eu(m,I)),K=Qt(I.ref)&&je(m)?"":m,Zd(I.ref)?[...I.ref.options].forEach(C=>C.selected=K.includes(C.value)):I.refs?St(I.ref)?I.refs.length>1?I.refs.forEach(C=>(!C.defaultChecked||!C.disabled)&&(C.checked=Array.isArray(K)?!!K.find(J=>J===C.value):K===C.value)):I.refs[0]&&(I.refs[0].checked=!!K):I.refs.forEach(C=>C.checked=C.value===K):Js(I.ref)?I.ref.value="":(I.ref.value=K,I.ref.type||k.values.next({name:g,values:{...s}})))}(R.shouldDirty||R.shouldTouch)&&B(g,K,R.shouldTouch,R.shouldDirty,!0),R.shouldValidate&&Pe(g)},Q=(g,m,R)=>{for(const G in m){const K=m[G],I=`${g}.${G}`,C=P(t,I);(o.array.has(g)||ce(K)||C&&!C._f)&&!Cn(K)?Q(I,K,R):$(I,K,R)}},Re=(g,m,R={})=>{const G=P(t,g),K=o.array.has(g),I=Be(m);le(s,g,I),K?(k.array.next({name:g,values:{...s}}),(d.isDirty||d.dirtyFields)&&R.shouldDirty&&k.state.next({name:g,dirtyFields:Kr(a,s),isDirty:L(g,I)})):G&&!G._f&&!je(I)?Q(g,I,R):$(g,I,R),Ci(g,o)&&k.state.next({...r}),k.values.next({name:i.mount?g:void 0,values:{...s}})},he=async g=>{i.mount=!0;const m=g.target;let R=m.name,G=!0;const K=P(t,R),I=()=>m.type?za(K._f):Bd(g),C=J=>{G=Number.isNaN(J)||Cn(J)&&isNaN(J.getTime())||Fn(J,P(s,R,J))};if(K){let J,Le;const De=I(),Bn=g.type===Xt.BLUR||g.type===Xt.FOCUS_OUT,Gg=!dm(K._f)&&!n.resolver&&!P(r.errors,R)&&!K._f.deps||um(Bn,P(r.touchedFields,R),r.isSubmitted,b,v),Ua=Ci(R,o,Bn);le(s,R,De),Bn?(K._f.onBlur&&K._f.onBlur(g),l&&l(0)):K._f.onChange&&K._f.onChange(g);const Ba=B(R,De,Bn,!1),wg=!He(Ba)||Ua;if(!Bn&&k.values.next({name:R,type:g.type,values:{...s}}),Gg)return d.isValid&&(e.mode==="onBlur"?Bn&&y():y()),wg&&k.state.next({name:R,...Ua?{}:Ba});if(!Bn&&Ua&&k.state.next({...r}),n.resolver){const{errors:hi}=await _([R]);if(C(De),G){const jg=Qi(r.errors,t,R),Si=Qi(hi,t,jg.name||R);J=Si.error,R=Si.name,Le=He(hi)}}else c([R],!0),J=(await Zi(K,s,h,n.shouldUseNativeValidation))[R],c([R]),C(De),G&&(J?Le=!1:d.isValid&&(Le=await U(t,!0)));G&&(K._f.deps&&Pe(K._f.deps),N(R,Le,J,Ba))}},Fe=(g,m)=>{if(P(r.errors,m)&&g.focus)return g.focus(),1},Pe=async(g,m={})=>{let R,G;const K=kt(g);if(n.resolver){const I=await V(Ae(g)?g:K);R=He(I),G=g?!K.some(C=>P(I,C)):R}else g?(G=(await Promise.all(K.map(async I=>{const C=P(t,I);return await U(C&&C._f?{[I]:C}:C)}))).every(Boolean),!(!G&&!r.isValid)&&y()):G=R=await U(t);return k.state.next({...!vn(g)||d.isValid&&R!==r.isValid?{}:{name:g},...n.resolver||!g?{isValid:R}:{},errors:r.errors}),m.shouldFocus&&!G&&Et(t,Fe,g?K:o.mount),G},Ie=g=>{const m={...i.mount?s:a};return Ae(g)?m:vn(g)?P(m,g):g.map(R=>P(m,R))},tr=(g,m)=>({invalid:!!P((m||r).errors,g),isDirty:!!P((m||r).dirtyFields,g),error:P((m||r).errors,g),isValidating:!!P(r.validatingFields,g),isTouched:!!P((m||r).touchedFields,g)}),ar=g=>{g&&kt(g).forEach(m=>Se(r.errors,m)),k.state.next({errors:g?r.errors:{}})},Pt=(g,m,R)=>{const G=(P(t,g,{_f:{}})._f||{}).ref,K=P(r.errors,g)||{},{ref:I,message:C,type:J,...Le}=K;le(r.errors,g,{...Le,...m,ref:G}),k.state.next({name:g,errors:r.errors,isValid:!1}),R&&R.shouldFocus&&G&&G.focus&&G.focus()},ja=(g,m)=>kn(g)?k.values.subscribe({next:R=>g(D(void 0,m),R)}):D(g,m,!0),Nr=(g,m={})=>{for(const R of g?kt(g):o.mount)o.mount.delete(R),o.array.delete(R),m.keepValue||(Se(t,R),Se(s,R)),!m.keepError&&Se(r.errors,R),!m.keepDirty&&Se(r.dirtyFields,R),!m.keepTouched&&Se(r.touchedFields,R),!m.keepIsValidating&&Se(r.validatingFields,R),!n.shouldUnregister&&!m.keepDefaultValue&&Se(a,R);k.values.next({values:{...s}}),k.state.next({...r,...m.keepDirty?{isDirty:L()}:{}}),!m.keepIsValid&&y()},Ft=({disabled:g,name:m,field:R,fields:G,value:K})=>{if(ze(g)&&i.mount||g){const I=g?void 0:Ae(K)?za(R?R._f:P(G,m)._f):K;le(s,m,I),B(m,I,!1,!1,!0)}},Or=(g,m={})=>{let R=P(t,g);const G=ze(m.disabled)||ze(n.disabled);return le(t,g,{...R||{},_f:{...R&&R._f?R._f:{ref:{name:g}},name:g,mount:!0,...m}}),o.mount.add(g),R?Ft({field:R,disabled:ze(m.disabled)?m.disabled:n.disabled,name:g,value:m.value}):w(g,!0,m.value),{...G?{disabled:m.disabled||n.disabled}:{},...n.progressive?{required:!!m.required,min:Pr(m.min),max:Pr(m.max),minLength:Pr(m.minLength),maxLength:Pr(m.maxLength),pattern:Pr(m.pattern)}:{},name:g,onChange:he,onBlur:he,ref:K=>{if(K){Or(g,m),R=P(t,g);const I=Ae(K.value)&&K.querySelectorAll&&K.querySelectorAll("input,select,textarea")[0]||K,C=im(I),J=R._f.refs||[];if(C?J.find(Le=>Le===I):I===R._f.ref)return;le(t,g,{_f:{...R._f,...C?{refs:[...J.filter(Ja),I,...Array.isArray(P(a,g))?[{}]:[]],ref:{type:I.type,name:g}}:{ref:I}}}),w(g,!1,void 0,I)}else R=P(t,g,{}),R._f&&(R._f.mount=!1),(n.shouldUnregister||m.shouldUnregister)&&!(qd(o.array,g)&&i.action)&&o.unMount.add(g)}}},Ir=()=>n.shouldFocusError&&Et(t,Fe,o.mount),Mt=g=>{ze(g)&&(k.state.next({disabled:g}),Et(t,(m,R)=>{const G=P(t,R);G&&(m.disabled=G._f.disabled||g,Array.isArray(G._f.refs)&&G._f.refs.forEach(K=>{K.disabled=G._f.disabled||g}))},0,!1))},sr=(g,m)=>async R=>{let G;if(R&&(R.preventDefault&&R.preventDefault(),R.persist&&R.persist()),n.disabled){m&&await m({...r.errors},R);return}let K=Be(s);if(k.state.next({isSubmitting:!0}),n.resolver){const{errors:I,values:C}=await _();r.errors=I,K=C}else await U(t);if(Se(r.errors,"root"),He(r.errors)){k.state.next({errors:{}});try{await g(K,R)}catch(I){G=I}}else m&&await m({...r.errors},R),Ir(),setTimeout(Ir);if(k.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:He(r.errors)&&!G,submitCount:r.submitCount+1,errors:r.errors}),G)throw G},Lr=(g,m={})=>{P(t,g)&&(Ae(m.defaultValue)?Re(g,Be(P(a,g))):(Re(g,m.defaultValue),le(a,g,Be(m.defaultValue))),m.keepTouched||Se(r.touchedFields,g),m.keepDirty||(Se(r.dirtyFields,g),r.isDirty=m.defaultValue?L(g,Be(P(a,g))):L()),m.keepError||(Se(r.errors,g),d.isValid&&y()),k.state.next({...r}))},ir=(g,m={})=>{const R=g?Be(g):a,G=Be(R),K=He(g),I=K?a:G;if(m.keepDefaultValues||(a=R),!m.keepValues){if(m.keepDirtyValues){const C=new Set([...o.mount,...Object.keys(Kr(a,s))]);for(const J of Array.from(C))P(r.dirtyFields,J)?le(I,J,P(s,J)):Re(J,P(I,J))}else{if(Cs&&Ae(g))for(const C of o.mount){const J=P(t,C);if(J&&J._f){const Le=Array.isArray(J._f.refs)?J._f.refs[0]:J._f.ref;if(Qt(Le)){const De=Le.closest("form");if(De){De.reset();break}}}}t={}}s=e.shouldUnregister?m.keepDefaultValues?Be(a):{}:Be(I),k.array.next({values:{...I}}),k.values.next({values:{...I}})}o={mount:m.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!d.isValid||!!m.keepIsValid||!!m.keepDirtyValues,i.watch=!!e.shouldUnregister,k.state.next({submitCount:m.keepSubmitCount?r.submitCount:0,isDirty:K?!1:m.keepDirty?r.isDirty:!!(m.keepDefaultValues&&!Fn(g,a)),isSubmitted:m.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:K?{}:m.keepDirtyValues?m.keepDefaultValues&&s?Kr(a,s):r.dirtyFields:m.keepDefaultValues&&g?Kr(a,g):m.keepDirty?r.dirtyFields:{},touchedFields:m.keepTouched?r.touchedFields:{},errors:m.keepErrors?r.errors:{},isSubmitSuccessful:m.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Un=(g,m)=>ir(kn(g)?g(s):g,m);return{control:{register:Or,unregister:Nr,getFieldState:tr,handleSubmit:sr,setError:Pt,_executeSchema:_,_getWatch:D,_getDirty:L,_updateValid:y,_removeUnmounted:H,_updateFieldArray:p,_updateDisabledField:Ft,_getFieldArray:x,_reset:ir,_resetDefaultValues:()=>kn(n.defaultValues)&&n.defaultValues().then(g=>{Un(g,n.resetOptions),k.state.next({isLoading:!1})}),_updateFormState:g=>{r={...r,...g}},_disableForm:Mt,_subjects:k,_proxyFormState:d,_setErrors:F,get _fields(){return t},get _formValues(){return s},get _state(){return i},set _state(g){i=g},get _defaultValues(){return a},get _names(){return o},set _names(g){o=g},get _formState(){return r},set _formState(g){r=g},get _options(){return n},set _options(g){n={...n,...g}}},trigger:Pe,register:Or,handleSubmit:sr,watch:ja,setValue:Re,getValues:Ie,reset:Un,resetField:Lr,clearErrors:ar,unregister:Nr,setError:Pt,setFocus:(g,m={})=>{const R=P(t,g),G=R&&R._f;if(G){const K=G.refs?G.refs[0]:G.ref;K.focus&&(K.focus(),m.shouldSelect&&kn(K.select)&&K.select())}},getFieldState:tr}}function nu(e={}){const n=S.useRef(),r=S.useRef(),[t,a]=S.useState({isDirty:!1,isValidating:!1,isLoading:kn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:kn(e.defaultValues)?void 0:e.defaultValues});n.current||(n.current={...Em(e),formState:t});const s=n.current.control;return s._options=e,Ws({subject:s._subjects.state,next:i=>{Cd(i,s._proxyFormState,s._updateFormState,!0)&&a({...s._formState})}}),S.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),S.useEffect(()=>{if(s._proxyFormState.isDirty){const i=s._getDirty();i!==t.isDirty&&s._subjects.state.next({isDirty:i})}},[s,t.isDirty]),S.useEffect(()=>{e.values&&!Fn(e.values,r.current)?(s._reset(e.values,s._options.resetOptions),r.current=e.values,a(i=>({...i}))):s._resetDefaultValues()},[e.values,s]),S.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),S.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),S.useEffect(()=>{e.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[e.shouldUnregister,s]),n.current.formState=xd(t,s),n.current}function ru(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(r=ru(e[n]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function ge(){for(var e,n,r=0,t="",a=arguments.length;r<a;r++)(e=arguments[r])&&(n=ru(e))&&(t&&(t+=" "),t+=n);return t}function Za(e){return(n={})=>{const r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function Fr(e){return(n,r)=>{const t=r!=null&&r.context?String(r.context):"standalone";let a;if(t==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,o=r!=null&&r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{const i=e.defaultWidth,o=r!=null&&r.width?String(r.width):e.defaultWidth;a=e.values[o]||e.values[i]}const s=e.argumentCallback?e.argumentCallback(n):n;return a[s]}}function Mr(e){return(n,r={})=>{const t=r.width,a=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],s=n.match(a);if(!s)return null;const i=s[0],o=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?mm(o,k=>k.test(i)):vm(o,k=>k.test(i));let u;u=e.valueCallback?e.valueCallback(l):l,u=r.valueCallback?r.valueCallback(u):u;const d=n.slice(i.length);return{value:u,rest:d}}}function vm(e,n){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&n(e[r]))return r}function mm(e,n){for(let r=0;r<e.length;r++)if(n(e[r]))return r}function fm(e){return(n,r={})=>{const t=n.match(e.matchPattern);if(!t)return null;const a=t[0],s=n.match(e.parsePattern);if(!s)return null;let i=e.valueCallback?e.valueCallback(s[0]):s[0];i=r.valueCallback?r.valueCallback(i):i;const o=n.slice(a.length);return{value:i,rest:o}}}const Tm={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Rm=(e,n,r)=>{let t;const a=Tm[e];return typeof a=="string"?t=a:n===1?t=a.one:t=a.other.replace("{{count}}",String(n)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+t:t+" siden":t},ym={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Am={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},bm={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},pm={date:Za({formats:ym,defaultWidth:"full"}),time:Za({formats:Am,defaultWidth:"full"}),dateTime:Za({formats:bm,defaultWidth:"full"})},cm={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},_m=(e,n,r,t)=>cm[e],hm={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Sm={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Nm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Om={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Im={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Lm=(e,n)=>Number(e)+".",Dm={ordinalNumber:Lm,era:Fr({values:hm,defaultWidth:"wide"}),quarter:Fr({values:Sm,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Fr({values:Nm,defaultWidth:"wide"}),day:Fr({values:Om,defaultWidth:"wide"}),dayPeriod:Fr({values:Im,defaultWidth:"wide"})},Km=/^(\d+)\.?/i,Pm=/\d+/i,Fm={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Mm={any:[/^f/i,/^e/i]},Vm={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Gm={any:[/1/i,/2/i,/3/i,/4/i]},wm={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},jm={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Um={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Bm={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},qm={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Hm={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Ym={ordinalNumber:fm({matchPattern:Km,parsePattern:Pm,valueCallback:e=>parseInt(e,10)}),era:Mr({matchPatterns:Fm,defaultMatchWidth:"wide",parsePatterns:Mm,defaultParseWidth:"any"}),quarter:Mr({matchPatterns:Vm,defaultMatchWidth:"wide",parsePatterns:Gm,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Mr({matchPatterns:wm,defaultMatchWidth:"wide",parsePatterns:jm,defaultParseWidth:"any"}),day:Mr({matchPatterns:Um,defaultMatchWidth:"wide",parsePatterns:Bm,defaultParseWidth:"any"}),dayPeriod:Mr({matchPatterns:qm,defaultMatchWidth:"any",parsePatterns:Hm,defaultParseWidth:"any"})},xm={code:"nb",formatDistance:Rm,formatLong:pm,formatRelative:_m,localize:Dm,match:Ym,options:{weekStartsOn:1,firstWeekContainsDate:4}},Cm={global:{dateLocale:xm,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},$m=f.createContext({locale:Cm}),tu=()=>f.useContext($m);function Wm(e){return n=>{e.forEach(r=>{typeof r=="function"?r(n):r!=null&&(r.current=n)})}}function Zs(...e){return S.useCallback(Wm(e),e)}var Jm=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};function zm(e,n){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${n}`}function au(e={}){const{name:n,hookName:r="useContext",providerName:t="Provider",errorMessage:a,defaultValue:s}=e,i=f.createContext(s),o=f.forwardRef((u,d)=>{var{children:k}=u,v=Jm(u,["children"]);const b=S.useMemo(()=>v,Object.values(v));return S.createElement(i.Provider,{value:d?Object.assign(Object.assign({},b),{ref:d}):b},k)});function l(u=!0){var d;const k=f.useContext(i);if(!k&&u){const v=new Error(a??zm(r,t));throw v.name="ContextError",(d=Error.captureStackTrace)===null||d===void 0||d.call(Error,v,l),v}return k}return i.displayName=n,[o,l]}const cr=e=>ge({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Zm=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const su=f.forwardRef((e,n)=>{var{className:r,size:t="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,k=Zm(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return S.createElement(a,Object.assign({},k,{ref:n,className:ge(r,"navds-body-long",`navds-body-long--${t}`,cr({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Xm=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Qe=f.forwardRef((e,n)=>{var{className:r,size:t="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,k=Xm(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return S.createElement(a,Object.assign({},k,{ref:n,className:ge(r,"navds-body-short",`navds-body-short--${t}`,cr({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Qm=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const wn=f.forwardRef((e,n)=>{var{className:r,size:t="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:k}=e,v=Qm(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return S.createElement(i,Object.assign({},v,{ref:n,className:ge(r,"navds-detail",cr({spacing:a,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:k,uppercase:s}),{"navds-detail--small":t==="small"})}))});var ef=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const nf=f.forwardRef((e,n)=>{var{className:r,size:t,spacing:a,as:s="p"}=e,i=ef(e,["className","size","spacing","as"]);return S.createElement(s,Object.assign({},i,{ref:n,className:ge("navds-error-message","navds-label",r,cr({spacing:a}),{"navds-label--small":t==="small"})}))});var rf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Xs=f.forwardRef((e,n)=>{var{level:r="1",size:t,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:u}=e,d=rf(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const k=s??`h${r}`;return S.createElement(k,Object.assign({},d,{ref:n,className:ge(a,"navds-heading",`navds-heading--${t}`,cr({spacing:i,align:o,visuallyHidden:l,textColor:u}))}))});var tf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};f.forwardRef((e,n)=>{var{className:r,spacing:t,as:a="p"}=e,s=tf(e,["className","spacing","as"]);return S.createElement(a,Object.assign({},s,{ref:n,className:ge(r,"navds-ingress",{"navds-typo--spacing":!!t})}))});var af=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Ye=f.forwardRef((e,n)=>{var{className:r,size:t="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=af(e,["className","size","as","spacing","visuallyHidden","textColor"]);return S.createElement(a,Object.assign({},l,{ref:n,className:ge(r,"navds-label",cr({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":t==="small"})}))});function iu(e,n=166){let r;function t(...a){const s=()=>{e.apply(this,a)};clearTimeout(r),r=setTimeout(s,n)}return t.clear=()=>{clearTimeout(r)},t}function Qs(e,n){const r=Object.entries(e).filter(([t])=>!n.includes(t));return Object.fromEntries(r)}const Ts=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{};let eo=0;function sf(e){const[n,r]=f.useState(e),t=e||n;return f.useEffect(()=>{n==null&&(eo+=1,r(`aksel-id-${eo}`))},[n]),t}const no=S.useId;function ca(e){var n;return no!==void 0?no().replace(/(:)/g,""):(n=sf(e))!==null&&n!==void 0?n:""}let ro=0;function of(e){const[n,r]=f.useState(e),t=e||n;return f.useEffect(()=>{n==null&&(ro+=1,r(`aksel-icon-${ro}`))},[n]),t}const to=S.useId;function Dn(e){var n;return to!==void 0?to().replace(/(:)/g,""):(n=of(e))!==null&&n!==void 0?n:""}var lf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ou=f.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=lf(e,["title","titleId"]);let s=Dn();return s=r?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var df=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const lu=f.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=df(e,["title","titleId"]);let s=Dn();return s=r?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var uf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const gf=f.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=uf(e,["title","titleId"]);let s=Dn();return s=r?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var kf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Ef=f.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=kf(e,["title","titleId"]);let s=Dn();return s=r?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var vf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const mf=f.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=vf(e,["title","titleId"]);let s=Dn();return s=r?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var ff=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ao=f.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=ff(e,["title","titleId"]);let s=Dn();return s=r?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M19.638 4.417a3.25 3.25 0 0 0-4.608-.008l-9.378 9.379a.75.75 0 0 0-.191.324l-1.414 4.95a.75.75 0 0 0 .925.927l4.94-1.398a.75.75 0 0 0 .327-.191l9.39-9.391a3.25 3.25 0 0 0 .01-4.592M16.091 5.47a1.752 1.752 0 1 1 2.478 2.478l-.23.23-2.477-2.479zM14.8 6.76 6.85 14.71l-.991 3.47 3.457-.979 7.963-7.963z",clipRule:"evenodd"}))});var Tf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Rf=f.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Tf(e,["title","titleId"]);let s=Dn();return s=r?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var yf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const du=f.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=yf(e,["title","titleId"]);let s=Dn();return s=r?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Af=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const uu=f.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Af(e,["title","titleId"]);let s=Dn();return s=r?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?f.createElement("title",{id:s},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function vt(e,n,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e==null||e(a),r===!1||!a.defaultPrevented)return n==null?void 0:n(a)}}const[bf,gu]=au({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),so=/(\w+)/g;function pf(e,n){const r=Array.isArray(e)?e:cf(e);for(const t of n){if(!t)continue;let a=t;for(let s=0;s<r.length;s++){const i=a[r[s]];i!==void 0&&(a=i)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function cf(e){const n=[];let r=so.exec(e);for(;r;){const[,t,a]=r;n.push(t||a),r=so.exec(e)}return n}const _f=/{[^}]*}/g;function _a(e,...n){const r=tu(),t=r.translations||[],a=[...n,...Array.isArray(t)?t.map(i=>i[e]):[t[e]],r.locale[e]];return(i,o)=>{const l=pf(i,a);return o?l.replace(_f,u=>{const d=u.substring(1,u.length-1);if(o[d]===void 0){const k=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${d}'. The following replacements were passed: '${k}'`)}return o[d]}):l}}var hf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Sf=f.forwardRef((e,n)=>{var{className:r,size:t="medium",title:a,transparent:s=!1,variant:i="neutral",id:o}=e,l=hf(e,["className","size","title","transparent","variant","id"]);const u=ca(),d=_a("Loader");return S.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${u}`,ref:n,className:ge("navds-loader",r,`navds-loader--${t}`,`navds-loader--${i}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},Qs(l,["children"])),S.createElement("title",{id:o??`loader-${u}`},a||d("title")),S.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),S.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var Nf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const br=f.forwardRef((e,n)=>{var{as:r="button",variant:t="primary",className:a,children:s,size:i="medium",loading:o=!1,disabled:l,style:u,icon:d,iconPosition:k="left"}=e,v=Nf(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const b=f.useRef(null),[h,T]=f.useState(),y=Zs(b,n);Ts(()=>{if(o){const A=window.requestAnimationFrame(()=>{var F,w;T((w=(F=b==null?void 0:b.current)===null||F===void 0?void 0:F.getBoundingClientRect())===null||w===void 0?void 0:w.width)});return()=>{T(void 0),cancelAnimationFrame(A)}}},[o,s]);const c=l??h?Qs(v,["href"]):v,p=A=>{A.key===" "&&!l&&!h&&A.currentTarget.click()};return S.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},c,{ref:y,onKeyUp:vt(c.onKeyUp,p),className:ge(a,"navds-button",`navds-button--${t}`,`navds-button--${i}`,{"navds-button--loading":h,"navds-button--icon-only":!!d&&!s,"navds-button--disabled":l??h}),style:Object.assign(Object.assign({},u),{width:h}),disabled:l??h?!0:void 0}),h?S.createElement(Sf,{size:i}):S.createElement(S.Fragment,null,d&&k==="left"&&S.createElement("span",{className:"navds-button__icon"},d),s&&S.createElement(Ye,{as:"span",size:i==="medium"?"medium":"small"},s),d&&k==="right"&&S.createElement("span",{className:"navds-button__icon"},d)))});var Of=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const If={error:uu,warning:gf,info:Ef,success:lu},ku=f.forwardRef((e,n)=>{var{children:r,className:t,variant:a,size:s="medium",fullWidth:i=!1,contentMaxWidth:o=!0,inline:l=!1,closeButton:u=!1,onClose:d}=e,k=Of(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const v=_a("Alert"),b=If[a];return S.createElement("div",Object.assign({},k,{ref:n,className:ge(t,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":i,"navds-alert--inline":l,"navds-alert--close-button":u})}),S.createElement(b,{title:v(a),className:"navds-alert__icon"}),S.createElement(su,{as:"div",size:s,className:ge("navds-alert__wrapper",o&&"navds-alert__wrapper--maxwidth")},r),u&&!l&&S.createElement("div",{className:"navds-alert__button-wrapper"},S.createElement(br,{className:"navds-alert__button",size:"small",variant:"tertiary-neutral",onClick:d,type:"button",icon:S.createElement(du,{title:["error","warning"].includes(a)?v("closeAlert"):v("closeMessage")})})))});var mt=function(){return mt=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},mt.apply(this,arguments)};var Lf=f.createContext(void 0);function Df(){var e=f.useContext(Lf);if(!e)throw new Error("useDayPicker must be used within a DayPickerProvider.");return e}f.createContext(void 0);f.forwardRef(function(e,n){var r=Df(),t=r.classNames,a=r.styles,s=[t.button_reset,t.button];e.className&&s.push(e.className);var i=s.join(" "),o=mt(mt({},a.button_reset),a.button);return e.style&&Object.assign(o,e.style),E.jsx("button",mt({},e,{ref:n,type:"button",className:i,style:o}))});f.createContext(void 0);f.createContext(void 0);var Tn;(function(e){e.Outside="outside",e.Disabled="disabled",e.Selected="selected",e.Hidden="hidden",e.Today="today",e.RangeStart="range_start",e.RangeEnd="range_end",e.RangeMiddle="range_middle"})(Tn||(Tn={}));Tn.Selected;Tn.Disabled;Tn.Hidden;Tn.Today;Tn.RangeEnd;Tn.RangeMiddle;Tn.RangeStart;Tn.Outside;f.createContext(void 0);f.createContext(void 0);f.createContext(void 0);const Kf=f.createContext(null);f.createContext({hasDropdown:!1,year:new Date,toYear:()=>null,disabled:[],onSelect:()=>null});au();const Pf=()=>S.createElement(mf,{"aria-hidden":!0,className:"navds-form-field__readonly-icon"}),Ff=f.createContext(null),Mf=(e,n)=>{var r,t,a;const{size:s,error:i,errorId:o}=e,l=f.useContext(Ff),u=ca(),d=(r=e.id)!==null&&r!==void 0?r:`${n}-${u}`,k=o??`${n}-error-${u}`,v=`${n}-description-${u}`,b=(l==null?void 0:l.disabled)||e.disabled,h=((l==null?void 0:l.readOnly)||e.readOnly)&&!b||void 0,T=!b&&!h&&!!(i||l!=null&&l.error),y=!b&&!h&&!!i&&typeof i!="boolean",c=Object.assign({},T?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:y,hasError:T,errorId:k,inputDescriptionId:v,size:(t=s??(l==null?void 0:l.size))!==null&&t!==void 0?t:"medium",readOnly:h,inputProps:Object.assign(Object.assign({id:d},c),{"aria-describedby":ge(e["aria-describedby"],{[v]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[k]:y,[(a=l==null?void 0:l.errorId)!==null&&a!==void 0?a:""]:T&&!!(l!=null&&l.error)})||void 0,disabled:b})}};function Vf(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Gf(e){return e instanceof Element||e instanceof Vf(e).Element}var Rs=typeof document<"u"?f.useLayoutEffect:f.useEffect;let Xa=!1,wf=0;const io=()=>"floating-ui-"+wf++;function jf(){const[e,n]=f.useState(()=>Xa?io():void 0);return Rs(()=>{e==null&&n(io())},[]),f.useEffect(()=>{Xa||(Xa=!0)},[]),e}const Uf=Bg.useId,Bf=Uf||jf;function qf(e){return"data-floating-ui-"+e}const Hf=f.createContext(null);function Yf(e){let{id:n,root:r}=e===void 0?{}:e;const[t,a]=f.useState(null),s=Bf(),i=xf(),o=f.useMemo(()=>({id:n,root:r,portalContext:i,uniqueId:s}),[n,r,i,s]),l=f.useRef();return Rs(()=>()=>{t==null||t.remove()},[t,o]),Rs(()=>{if(l.current===o)return;l.current=o;const{id:u,root:d,portalContext:k,uniqueId:v}=o,b=u?document.getElementById(u):null,h=qf("portal");if(b){const T=document.createElement("div");T.id=v,T.setAttribute(h,""),b.appendChild(T),a(T)}else{let T=d||(k==null?void 0:k.portalNode);T&&!Gf(T)&&(T=T.current),T=T||document.body;let y=null;u&&(y=document.createElement("div"),y.id=u,T.appendChild(y));const c=document.createElement("div");c.id=v,c.setAttribute(h,""),T=y||T,T.appendChild(c),a(c)}},[o]),t}const xf=()=>f.useContext(Hf);var Cf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const $f=f.forwardRef((e,n)=>{var{className:r}=e,t=Cf(e,["className"]);return S.createElement("div",Object.assign({},t,{ref:n,className:ge("navds-modal__body",r)}))});var Wf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Jf=f.forwardRef((e,n)=>{var{className:r}=e,t=Wf(e,["className"]);return S.createElement("div",Object.assign({},t,{ref:n,className:ge("navds-modal__footer",r)}))});var zf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Eu=f.forwardRef((e,n)=>{var{children:r,className:t,closeButton:a=!0}=e,s=zf(e,["children","className","closeButton"]);const i=gu(),o=_a("global");return S.createElement("div",Object.assign({},s,{ref:n,className:ge("navds-modal__header",t)}),i.closeHandler&&a&&S.createElement(br,{type:"button",className:"navds-modal__button",size:"small",variant:"tertiary-neutral",onKeyDown:l=>{["Enter"," "].includes(l.key)&&l.repeat&&l.preventDefault()},onClick:i.closeHandler,icon:S.createElement(du,{title:o("close")})}),r)}),oo=({clientX:e,clientY:n},{left:r,top:t,right:a,bottom:s})=>!(e<r||n<t||e>a||n>s);function Zf(e,n,r){if(!(n&&n.closeButton===!1))return r?()=>{var t;return r()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const Bt="navds-modal__document-body";function Xf(e,n,r){S.useEffect(()=>{if(r||!e.current||!n)return;e.current.open&&document.body.classList.add(Bt);const t=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(Bt):document.body.classList.remove(Bt)});return t.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{t.disconnect(),document.body.classList.remove(Bt)}},[e,n,r])}const Er=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function vu(e,n){var r="on"+n.type.toLowerCase();return typeof e[r]=="function"&&e[r](n),e.dispatchEvent(n)}function ft(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function mu(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Qf(e,n){for(var r=0;r<e.length;++r)if(e[r]===n)return!0;return!1}function Qa(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function fu(e){var n=["button","input","keygen","select","textarea"],r=n.map(function(i){return i+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(r.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),s=0;s<a.length&&!(a[s].tagName&&a[s].shadowRoot&&(t=fu(a[s].shadowRoot),t));s++);return t}function lo(e){return e.isConnected||document.body.contains(e)}function Tu(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var r=te.formSubmitter;if(!r){var t=e.target,a="getRootNode"in t&&t.getRootNode()||document;r=a.activeElement}return!r||r.form!==n?null:r}function eT(e){if(!e.defaultPrevented){var n=e.target,r=te.imagemapUseValue,t=Tu(e);r===null&&t&&(r=t.value);var a=ft(n);if(a){var s=t&&t.getAttribute("formmethod")||n.getAttribute("method");s==="dialog"&&(e.preventDefault(),r!=null?a.close(r):a.close())}}}function Ru(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",eT,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,t=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),a,s=function(i){if(i.target===e){var o="DOMNodeRemoved";r|=i.type.substr(0,o.length)===o,window.clearTimeout(a),a=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,s)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Ru.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&lo(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),te.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=fu(this.dialog_)),mu(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!lo(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!te.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,te.needsCentering(this.dialog_)?(te.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});vu(this.dialog_,n)}};var te={};te.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,r=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,r)+"px"};te.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var r=document.styleSheets[n],t=null;try{t=r.cssRules}catch{}if(t)for(var a=0;a<t.length;++a){var s=t[a],i=null;try{i=document.querySelectorAll(s.selectorText)}catch{}if(!(!i||!Qf(i,e))){var o=s.style.getPropertyValue("top"),l=s.style.getPropertyValue("bottom");if(o&&o!=="auto"||l&&l!=="auto")return!0}}}return!1};te.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!te.isInlinePositionSetByStylesheet(e)};te.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Ru(e)};te.registerDialog=function(e){e.showModal||te.forceRegisterDialog(e)};te.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var r=[];n.forEach(function(t){for(var a=0,s;s=t.removedNodes[a];++a)s instanceof Element&&(s.localName==="dialog"&&r.push(s),r=r.concat(s.querySelectorAll("dialog")))}),r.length&&e(r)}))};te.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};te.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};te.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,r;r=this.pendingDialogStack[n];++n)r.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var a=t.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};te.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=ft(e);){for(var n=0,r;r=this.pendingDialogStack[n];++n)if(r.dialog===e)return n===0;e=e.parentElement}return!1};te.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),mu(n),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],t=r.dialog,a=t.compareDocumentPosition(n);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};te.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&vu(r.dialog,n)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};te.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};te.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};te.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Er&&(te.dm=new te.DialogManager,te.formSubmitter=null,te.imagemapUseValue=null);if(Er){var uo=document.createElement("form");if(uo.setAttribute("method","dialog"),uo.method!=="dialog"){var lr=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(lr){var nT=lr.get;lr.get=function(){return Qa(this)?"dialog":nT.call(this)};var rT=lr.set;lr.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):rT.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",lr)}}document.addEventListener("click",function(e){if(te.formSubmitter=null,te.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var r=e.composedPath();n=r.shift()||n}if(!(!n||!Qa(n.form))){var t=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!t){if(!(n.localName==="input"&&n.type==="image"))return;te.imagemapUseValue=e.offsetX+","+e.offsetY}var a=ft(n);a&&(te.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,r=ft(n);if(!r){var t=Tu(e),a=t&&t.getAttribute("formmethod")||n.getAttribute("method");a==="dialog"&&e.preventDefault()}});var tT=HTMLFormElement.prototype.submit,aT=function(){if(!Qa(this))return tT.call(this);var e=ft(this);e&&e.close()};HTMLFormElement.prototype.submit=aT}var sT=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const go="navds-modal--polyfilled",mr=f.forwardRef((e,n)=>{var r,t,{header:a,children:s,open:i,onBeforeClose:o,onCancel:l,closeOnBackdropClick:u,width:d,placement:k,portal:v,className:b,"aria-labelledby":h,style:T,onClick:y,onMouseDown:c}=e,p=sT(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const A=f.useRef(null),F=Zs(A,n),w=ca(),B=(r=tu())===null||r===void 0?void 0:r.rootElement,N=Yf({root:B}),_=f.useContext(Kf),V=gu(!1)!==void 0;V&&!_&&console.error("Modals should not be nested"),f.useEffect(()=>{Er&&A.current&&N&&(te.registerDialog(A.current),A.current.classList.add(go)),A.current&&N&&(A.current.autofocus=!0)},[N]),f.useEffect(()=>{A.current&&N&&i!==void 0&&(i&&!A.current.open?A.current.showModal():!i&&A.current.open&&A.current.close())},[N,i]),Xf(A,N,V);const U=typeof d=="string"&&["small","medium"].includes(d),H=ge("navds-modal",b,{[go]:Er,"navds-modal--autowidth":!d,[`navds-modal--${d}`]:U,"navds-modal--top":k==="top"&&!Er}),L=Object.assign(Object.assign({},T),U?{}:{width:d}),D=f.useRef({clientX:0,clientY:0}),x=Pe=>{D.current=Pe},$=u&&!Er,Q=Pe=>{if(Pe.target!==A.current)return;const Ie=A.current.getBoundingClientRect();oo(D.current,Ie)||oo(Pe,Ie)||o!==void 0&&o()===!1||A.current.close()},Re=Pe=>{o&&o()===!1&&Pe.preventDefault()},he=!h&&!p["aria-label"]&&a?w:h,Fe=S.createElement("dialog",Object.assign({},p,{ref:F,className:H,style:L,onCancel:vt(l,Re),onClick:$?vt(y,Q):y,onMouseDown:$?vt(c,x):c,"aria-labelledby":he}),S.createElement(bf,{closeHandler:Zf(A,a,o),ref:A},a&&S.createElement(Eu,null,a.label&&S.createElement(wn,{className:"navds-modal__label"},a.label),S.createElement(Xs,{size:(t=a.size)!==null&&t!==void 0?t:"medium",level:"1",id:w},a.icon&&S.createElement("span",{className:"navds-modal__header-icon"},a.icon),a.heading)),s));return v?N?qg.createPortal(Fe,N):null:Fe});mr.Header=Eu;mr.Body=$f;mr.Footer=Jf;var iT=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ys=f.forwardRef((e,n)=>{var{as:r="a",className:t,underline:a=!0,variant:s="action",inlineText:i=!1}=e,o=iT(e,["as","className","underline","variant","inlineText"]);return S.createElement(r,Object.assign({},o,{ref:n,className:ge("navds-link",t,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":i})}))});var oT=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const lT=f.forwardRef((e,n)=>{var{children:r,className:t,variant:a,size:s="medium",icon:i}=e,o=oT(e,["children","className","variant","size","icon"]);return S.createElement(Qe,Object.assign({},o,{ref:n,as:"span",size:s==="medium"?"medium":"small",className:ge("navds-tag",t,`navds-tag--${a}`,`navds-tag--${s}`)}),i&&S.createElement("span",{className:"navds-tag__icon--left"},i),r)});var dT=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ko=(e,n,r)=>{const{outerHeightStyle:t,overflow:a}=n;return r.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==a)?(r.current+=1,n):e},Eo=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function qt(e){return parseInt(e,10)||0}const uT=f.forwardRef((e,n)=>{var r,t,{className:a,onChange:s,maxRows:i,minRows:o=1,autoScrollbar:l,style:u,value:d}=e,k=dT(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:v}=f.useRef(d!=null),b=f.useRef(null),h=Zs(b,n),T=f.useRef(null),y=f.useRef(0),[c,p]=f.useState({outerHeightStyle:0}),A=S.useCallback(()=>{const N=b.current,V=Eo(N).getComputedStyle(N);if(V.width==="0px")return{outerHeightStyle:0};const U=T.current;U.style.width=V.width,U.value=N.value||k.placeholder||"x",U.value.slice(-1)===`
`&&(U.value+=" ");const H=V.boxSizing,L=qt(V.paddingBottom)+qt(V.paddingTop),D=qt(V.borderBottomWidth)+qt(V.borderTopWidth),x=U.scrollHeight-L;U.value="x";const $=U.scrollHeight-L;let Q=x;o&&(Q=Math.max(Number(o)*$,Q)),i&&(Q=Math.min(Number(i)*$,Q)),Q=Math.max(Q,$);const Re=Q+(H==="border-box"?L+D:0),he=Math.abs(Q-x)<=1;return{outerHeightStyle:Re,overflow:he}},[i,o,k.placeholder]),F=()=>{const N=A();vo(N)||p(_=>ko(_,N,y))};Ts(()=>{const N=()=>{const L=A();vo(L)||Hg.flushSync(()=>{p(D=>ko(D,L,y))})},_=iu(()=>{var L,D,x;if(y.current=0,!((L=b.current)===null||L===void 0)&&L.style.height||!((D=b.current)===null||D===void 0)&&D.style.width){((x=b.current)===null||x===void 0?void 0:x.style.overflow)==="hidden"&&p($=>Object.assign(Object.assign({},$),{overflow:!1}));return}N()}),V=b.current,U=Eo(V);U.addEventListener("resize",_);let H;return typeof ResizeObserver<"u"&&(H=new ResizeObserver(_),H.observe(V)),()=>{_.clear(),U.removeEventListener("resize",_),H&&H.disconnect()}},[A]),Ts(()=>{F()}),f.useEffect(()=>{y.current=0},[d]);const w=N=>{y.current=0,v||F(),s&&s(N)},B=Object.assign({"--__ac-textarea-height":c.outerHeightStyle+"px","--__axc-textarea-height":c.outerHeightStyle+"px",overflow:c.overflow&&!l&&!(!((r=b.current)===null||r===void 0)&&r.style.height)&&!(!((t=b.current)===null||t===void 0)&&t.style.width)?"hidden":void 0},u);return S.createElement(S.Fragment,null,S.createElement("textarea",Object.assign({value:d,onChange:w,ref:h,rows:o,style:B},k,{className:a})),S.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:T,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},u)}))});function vo(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const gT=({maxLengthId:e,maxLength:n,currentLength:r,size:t,i18n:a})=>{const s=_a("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),i=n-r,[o,l]=f.useState(i);return f.useEffect(()=>{const u=iu(()=>{l(i)},2e3);return u(),()=>{u.clear()}},[i]),S.createElement(S.Fragment,null,S.createElement("span",{id:e,className:"navds-sr-only"},s("maxLength",{maxLength:n})),i<20&&S.createElement("span",{role:"status",className:"navds-textarea__sr-counter navds-sr-only"},mo(o,s)),S.createElement(Qe,{className:ge("navds-textarea__counter",{"navds-textarea__counter--error":i<0}),size:t},mo(i,s)))},mo=(e,n)=>e<0?n("charsTooMany",{chars:Math.abs(e)}):n("charsLeft",{chars:e});var kT=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ET=f.forwardRef((e,n)=>{var r,t,a;const{inputProps:s,errorId:i,showErrorMsg:o,hasError:l,size:u,inputDescriptionId:d}=Mf(e,"textarea"),{label:k,className:v,description:b,maxLength:h,hideLabel:T=!1,resize:y,UNSAFE_autoScrollbar:c,i18n:p,readOnly:A}=e,F=kT(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),w=ca(),B=h!==void 0&&h>0,[N,_]=f.useState((r=e==null?void 0:e.defaultValue)!==null&&r!==void 0?r:""),V=()=>{let H=F!=null&&F.minRows?F==null?void 0:F.minRows:3;return u==="small"&&(H=F!=null&&F.minRows?F==null?void 0:F.minRows:2),H},U=ge(s["aria-describedby"],{[w??""]:B});return S.createElement("div",{className:ge(v,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":A,"navds-textarea--readonly":A,"navds-textarea--error":l,"navds-textarea--autoscrollbar":c,[`navds-textarea--resize-${y===!0?"both":y}`]:y})},S.createElement(Ye,{htmlFor:s.id,size:u,className:ge("navds-form-field__label",{"navds-sr-only":T})},A&&S.createElement(Pf,null),k),!!b&&S.createElement(Qe,{className:ge("navds-form-field__description",{"navds-sr-only":T}),id:d,size:u,as:"div"},b),S.createElement(uT,Object.assign({},Qs(F,["error","errorId","size"]),s,{onChange:vt(e.onChange,e.value===void 0?H=>_(H.target.value):void 0),minRows:V(),autoScrollbar:c,ref:n,readOnly:A,className:ge("navds-textarea__input","navds-body-short",`navds-body-short--${u??"medium"}`)},U?{"aria-describedby":U}:{})),B&&!A&&!s.disabled&&S.createElement(gT,{maxLengthId:w,maxLength:h,currentLength:(a=(t=e.value)===null||t===void 0?void 0:t.length)!==null&&a!==void 0?a:N.length,size:u,i18n:p}),S.createElement("div",{className:"navds-form-field__error",id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&S.createElement(nf,{size:u},e.error)))});function vT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yu={exports:{}},Vr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo;function mT(){if(fo)return Vr;fo=1;var e=S,n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var d,k={},v=null,b=null;u!==void 0&&(v=""+u),l.key!==void 0&&(v=""+l.key),l.ref!==void 0&&(b=l.ref);for(d in l)t.call(l,d)&&!s.hasOwnProperty(d)&&(k[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)k[d]===void 0&&(k[d]=l[d]);return{$$typeof:n,type:o,key:v,ref:b,props:k,_owner:a.current}}return Vr.Fragment=r,Vr.jsx=i,Vr.jsxs=i,Vr}yu.exports=mT();var re=yu.exports;const nr={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};Ge(nr);Ge(nr);var Au={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,t.call(this,o)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)n.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(Au);var fT=Au.exports;const We=vT(fT),TT="_borderbox_hicl4_1",RT="_error_hicl4_4",yT="_warning_hicl4_7",AT={borderbox:TT,error:RT,warning:yT};We.bind(AT);const bT="_aksjonspunkt_kn1hn_1",pT="_erAksjonspunktApent_kn1hn_4",cT="_erIkkeGodkjentAvBeslutter_kn1hn_8",_T={aksjonspunkt:bT,erAksjonspunktApent:pT,erIkkeGodkjentAvBeslutter:cT};We.bind(_T);Ge(nr);const To=Ge(nr),hT=({text:e,okButtonText:n,showModal:r,cancel:t,submit:a})=>re.jsxs(mr,{width:"small",open:r,"aria-label":e,onClose:t,children:[re.jsx(mr.Body,{children:re.jsx(Xs,{size:"small",children:e})}),re.jsxs(mr.Footer,{children:[re.jsx(br,{variant:"primary",size:"small",onClick:a,autoFocus:!0,type:"button",children:n||To.formatMessage({id:"OkAvbrytModal.Ok"})}),re.jsx(br,{variant:"secondary",size:"small",onClick:t,type:"button",children:To.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),ST="_tooltip_h8akz_1",NT="_tooltiptext_h8akz_5",OT="_left_h8akz_22",IT="_top_h8akz_27",LT="_right_h8akz_30",DT="_bottom_h8akz_34",KT="_showTooltip_h8akz_1",As={tooltip:ST,tooltiptext:NT,left:OT,top:IT,right:LT,bottom:DT,showTooltip:KT},PT=We.bind(As),FT=({children:e,content:n,alignRight:r=!1,alignLeft:t=!1,alignTop:a=!1,alignBottom:s=!1})=>re.jsxs("div",{className:As.tooltip,children:[re.jsx("span",{className:PT(As.tooltiptext,{right:r||!t&&!a&&!s,left:t,top:a,bottom:s}),children:n}),e]}),MT=S.forwardRef(({onClick:e=()=>{},onMouseDown:n,tabIndex:r=-1,className:t="",src:a,srcHover:s,alt:i,onKeyDown:o,tooltip:l,alignTooltipLeft:u=!1},d)=>{const[k,v]=f.useState(!1),b=f.useCallback(()=>{v(!0)},[]),h=f.useCallback(()=>{v(!1)},[]),T=f.useCallback(p=>{(p.key==="Enter"||p.key===" ")&&(o&&o(p),p.preventDefault())},[]),y=s&&k?s:a,c=re.jsx("img",{ref:d,className:t,src:y,alt:i,tabIndex:r,onMouseOver:b,onMouseOut:h,onFocus:b,onBlur:h,onKeyDown:T,onMouseDown:n,onClick:e});return l?re.jsx(FT,{content:l,alignLeft:u,children:c}):c});MT.displayName="Image";const VT="_flexColumnNew_1vdv1_1",GT={flexColumnNew:VT},wT=We.bind(GT),Me=({children:e,className:n})=>re.jsx("div",{className:wT("flexColumnNew",n),children:e}),jT="_flexRow_1yf0y_1",UT="_spaceBetween_1yf0y_9",BT="_alignItemsToBaseline_1yf0y_12",qT="_alignItemsToFlexEnd_1yf0y_15",HT="_justifyItemsToFlexEnd_1yf0y_18",YT="_wrap_1yf0y_21",xT={flexRow:jT,spaceBetween:UT,alignItemsToBaseline:BT,alignItemsToFlexEnd:qT,justifyItemsToFlexEnd:HT,wrap:YT},CT=We.bind(xT),Wn=({children:e,spaceBetween:n=!1,alignItemsToBaseline:r=!1,alignItemsToFlexEnd:t=!1,wrap:a=!1,className:s})=>re.jsx("div",{className:CT("flexRow",{spaceBetween:n},{alignItemsToBaseline:r},{alignItemsToFlexEnd:t},{wrap:a},s),children:e}),$T="_flexContainer_1dk1o_1",WT="_fluid_1dk1o_6",JT="_fullHeight_1dk1o_9",zT="_flexWrap_1dk1o_17",ZT={flexContainer:$T,fluid:WT,fullHeight:JT,flexWrap:zT},XT=We.bind(ZT),Jn=({children:e,wrap:n=!1,fullHeight:r=!1})=>re.jsx("div",{className:XT("flexContainer","fluid",{flexWrap:n,fullHeight:r}),children:e});Ge(nr);const QT="_row_1lxv9_1",eR="_harHover_1lxv9_4",nR="_rowHeader_1lxv9_7",rR="_grayHeader_1lxv9_12",tR="_rowContent_1lxv9_15",aR="_selected_1lxv9_18",sR="_bold_1lxv9_22",iR="_dashedBottomBorder_1lxv9_25",oR="_solidBottomBorder_1lxv9_28",lR="_apLeftBorder_1lxv9_31",dR="_noBottomBorder_1lxv9_34",bu={row:QT,harHover:eR,rowHeader:nR,grayHeader:rR,rowContent:tR,selected:aR,bold:sR,dashedBottomBorder:iR,solidBottomBorder:oR,apLeftBorder:lR,noBottomBorder:dR},uR=We.bind(bu),gR=(e,n,r)=>t=>{e&&t.button===0&&e(t,n,r)},pu=e=>e.tagName==="TR"?e:pu(e.parentElement),Ro=(e,n)=>{const r=pu(e.target),t=(n?r.nextSibling:r.previousSibling)||r;t&&(t.focus(),e.preventDefault())},kR=(e,n,r,t)=>a=>{a.key==="ArrowDown"?Ro(a,!0):a.key==="ArrowUp"?Ro(a,!1):n&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(n(a,r,t),a.preventDefault()):e&&n&&a.target.tagName!=="TD"&&a.key==="Shift"&&(n(a),a.preventDefault())},ER=e=>n=>{e&&n.target.tagName!=="TD"&&n.key==="Shift"&&(e(n),n.preventDefault())},vR=({id:e,model:n,isHeader:r=!1,hasGrayHeader:t=!1,onMouseDown:a,onKeyDown:s,children:i,noHover:o=!1,isSelected:l=!1,isBold:u=!1,isDashedBottomBorder:d=!1,isSolidBottomBorder:k=!1,isApLeftBorder:v=!1,className:b,useMultiselect:h=!1,hasNoBottomBorder:T=!1})=>re.jsx("tr",{className:uR(b,bu.row,{rowHeader:r,grayHeader:t,rowContent:!r&&!o,selected:l,harHover:!o,bold:u,dashedBottomBorder:d,solidBottomBorder:k,noBottomBorder:T,apLeftBorder:v}),onMouseDown:gR(a,e,n),onKeyDown:kR(h,s,e,n),onKeyUp:h?ER(s):void 0,tabIndex:0,children:i}),mR="_columnStyle_1f13u_1",cu={columnStyle:mR},fR=We.bind(cu),es=({children:e="",className:n,hidden:r=!1,colspanAll:t=!1})=>r?null:re.jsx("td",{className:fR(cu.columnStyle,n),colSpan:t?100:void 0,children:e}),TR="_table_2cnpl_1",RR="_rowHover_2cnpl_25",yR={table:TR,rowHover:RR},AR=We.bind(yR),bR="EMPTY",pR=S.forwardRef(({headerTextCodes:e=[],headerColumnContent:n=[],classNameTable:r="",noHover:t=!1,hasGrayHeader:a=!1,children:s},i)=>re.jsxs("table",{ref:i,className:AR("table",{[r]:r,rowHover:!t}),children:[re.jsx("thead",{children:re.jsxs(vR,{isHeader:!0,noHover:t,hasGrayHeader:a,children:[e.map(o=>typeof o=="string"&&o.startsWith(bR)?re.jsx(es,{children:" "},o):re.jsx(es,{children:re.jsx(ye,{id:o})},o)),n.map(o=>re.jsx(es,{children:o},o.key))]})}),re.jsx("tbody",{children:Array.isArray(s)?S.Children.map(s,o=>S.cloneElement(o,{noHover:t})):S.cloneElement(s,{noHover:t})})]}));pR.displayName="Table";const cR="_hidden_1pb4f_1",_R="_active_1pb4f_8",hR="_activeRow_1pb4f_15 _active_1pb4f_8",SR="_toggleIcon_1pb4f_19",NR="_colTopPadding_1pb4f_22",OR={hidden:cR,active:_R,activeRow:hR,toggleIcon:SR,colTopPadding:NR};We.bind(OR);Ge(nr);const IR="_fourPx_qda5k_1",LR="_eightPx_qda5k_4",DR="_sixteenPx_qda5k_7",KR="_twentyPx_qda5k_10",PR="_thirtyTwoPx_qda5k_13",FR="_fourtyPx_qda5k_16",MR={fourPx:IR,eightPx:LR,sixteenPx:DR,twentyPx:KR,thirtyTwoPx:PR,fourtyPx:FR},VR=We.bind(MR),be=({fourPx:e=!1,eightPx:n=!1,sixteenPx:r=!1,twentyPx:t=!1,thirtyTwoPx:a=!1,fourtyPx:s=!1})=>re.jsx("div",{className:VR({fourPx:e,eightPx:n,sixteenPx:r,twentyPx:t,thirtyTwoPx:a,fourtyPx:s})});Ge(nr);const GR="_divider_1t980_1",wR="_dividerParagraf_1t980_8",jR="_leftPanel_1t980_11",UR="_rightPanel_1t980_14",bs={divider:GR,dividerParagraf:wR,leftPanel:jR,rightPanel:UR},BR=We.bind(bs),qR=({spaceUnder:e=!1,spaceAbove:n=!1,leftPanel:r=!1,rightPanel:t=!1,dividerParagraf:a=!1,className:s})=>re.jsxs(re.Fragment,{children:[n&&re.jsx(be,{thirtyTwoPx:!0}),re.jsx("div",{className:BR(s,{leftPanel:r,rightPanel:t}),children:re.jsx("div",{className:a?bs.dividerParagraf:bs.divider})}),e&&re.jsx(be,{thirtyTwoPx:!0})]}),HR="_editedIcon_ulrjl_1",YR={editedIcon:HR},xR=We.bind(YR),_u=({className:e=""})=>re.jsx("span",{"data-testid":"editedIcon",className:xR("editedIcon",e),children:re.jsx(Rf,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});var CR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $R(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hu={exports:{}},Gr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo;function WR(){if(yo)return Gr;yo=1;var e=S,n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var d,k={},v=null,b=null;u!==void 0&&(v=""+u),l.key!==void 0&&(v=""+l.key),l.ref!==void 0&&(b=l.ref);for(d in l)t.call(l,d)&&!s.hasOwnProperty(d)&&(k[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)k[d]===void 0&&(k[d]=l[d]);return{$$typeof:n,type:o,key:v,ref:b,props:k,_owner:a.current}}return Gr.Fragment=r,Gr.jsx=i,Gr.jsxs=i,Gr}hu.exports=WR();var Xe=hu.exports;const JR=e=>e.reduce((n,r,t)=>({...n,[t]:a=>r(a)||!0}),{}),zR=(e,n)=>{const r=n.split(".").reduce((t,a)=>t!==void 0?t[a]:t,e);return r==null?void 0:r.message};var Su={exports:{}};(function(e,n){(function(r,t){e.exports=t()})(CR,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,l={},u=function(y){return(y=+y)+(y>68?1900:2e3)},d=function(y){return function(c){this[y]=+c}},k=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(c){if(!c||c==="Z")return 0;var p=c.match(/([+-]|\d\d)/g),A=60*p[1]+(+p[2]||0);return A===0?0:p[0]==="+"?-A:A}(y)}],v=function(y){var c=l[y];return c&&(c.indexOf?c:c.s.concat(c.f))},b=function(y,c){var p,A=l.meridiem;if(A){for(var F=1;F<=24;F+=1)if(y.indexOf(A(F,0,c))>-1){p=F>12;break}}else p=y===(c?"pm":"PM");return p},h={A:[o,function(y){this.afternoon=b(y,!1)}],a:[o,function(y){this.afternoon=b(y,!0)}],Q:[a,function(y){this.month=3*(y-1)+1}],S:[a,function(y){this.milliseconds=100*+y}],SS:[s,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[i,d("seconds")],ss:[i,d("seconds")],m:[i,d("minutes")],mm:[i,d("minutes")],H:[i,d("hours")],h:[i,d("hours")],HH:[i,d("hours")],hh:[i,d("hours")],D:[i,d("day")],DD:[s,d("day")],Do:[o,function(y){var c=l.ordinal,p=y.match(/\d+/);if(this.day=p[0],c)for(var A=1;A<=31;A+=1)c(A).replace(/\[|\]/g,"")===y&&(this.day=A)}],w:[i,d("week")],ww:[s,d("week")],M:[i,d("month")],MM:[s,d("month")],MMM:[o,function(y){var c=v("months"),p=(v("monthsShort")||c.map(function(A){return A.slice(0,3)})).indexOf(y)+1;if(p<1)throw new Error;this.month=p%12||p}],MMMM:[o,function(y){var c=v("months").indexOf(y)+1;if(c<1)throw new Error;this.month=c%12||c}],Y:[/[+-]?\d+/,d("year")],YY:[s,function(y){this.year=u(y)}],YYYY:[/\d{4}/,d("year")],Z:k,ZZ:k};function T(y){var c,p;c=y,p=l&&l.formats;for(var A=(y=c.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(U,H,L){var D=L&&L.toUpperCase();return H||p[L]||r[L]||p[D].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(x,$,Q){return $||Q.slice(1)})})).match(t),F=A.length,w=0;w<F;w+=1){var B=A[w],N=h[B],_=N&&N[0],V=N&&N[1];A[w]=V?{regex:_,parser:V}:B.replace(/^\[|\]$/g,"")}return function(U){for(var H={},L=0,D=0;L<F;L+=1){var x=A[L];if(typeof x=="string")D+=x.length;else{var $=x.regex,Q=x.parser,Re=U.slice(D),he=$.exec(Re)[0];Q.call(H,he),U=U.replace(he,"")}}return function(Fe){var Pe=Fe.afternoon;if(Pe!==void 0){var Ie=Fe.hours;Pe?Ie<12&&(Fe.hours+=12):Ie===12&&(Fe.hours=0),delete Fe.afternoon}}(H),H}}return function(y,c,p){p.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(u=y.parseTwoDigitYear);var A=c.prototype,F=A.parse;A.parse=function(w){var B=w.date,N=w.utc,_=w.args;this.$u=N;var V=_[1];if(typeof V=="string"){var U=_[2]===!0,H=_[3]===!0,L=U||H,D=_[2];H&&(D=_[2]),l=this.$locale(),!U&&D&&(l=p.Ls[D]),this.$d=function(Re,he,Fe,Pe){try{if(["x","X"].indexOf(he)>-1)return new Date((he==="X"?1e3:1)*Re);var Ie=T(he)(Re),tr=Ie.year,ar=Ie.month,Pt=Ie.day,ja=Ie.hours,Nr=Ie.minutes,Ft=Ie.seconds,Or=Ie.milliseconds,Ir=Ie.zone,Mt=Ie.week,sr=new Date,Lr=Pt||(tr||ar?1:sr.getDate()),ir=tr||sr.getFullYear(),Un=0;tr&&!ar||(Un=ar>0?ar-1:sr.getMonth());var Dr,Vt=ja||0,Gt=Nr||0,g=Ft||0,m=Or||0;return Ir?new Date(Date.UTC(ir,Un,Lr,Vt,Gt,g,m+60*Ir.offset*1e3)):Fe?new Date(Date.UTC(ir,Un,Lr,Vt,Gt,g,m)):(Dr=new Date(ir,Un,Lr,Vt,Gt,g,m),Mt&&(Dr=Pe(Dr).week(Mt).toDate()),Dr)}catch{return new Date("")}}(B,V,N,p),this.init(),D&&D!==!0&&(this.$L=this.locale(D).$L),L&&B!=this.format(V)&&(this.$d=new Date("")),l={}}else if(V instanceof Array)for(var x=V.length,$=1;$<=x;$+=1){_[1]=V[$-1];var Q=p.apply(this,_);if(Q.isValid()){this.$d=Q.$d,this.$L=Q.$L,this.init();break}$===x&&(this.$d=new Date(""))}else F.call(this,w)}}})})(Su);var ZR=Su.exports;const XR=$R(ZR),QR="_readOnlyContainer_v0eco_1",ey="_readOnlyContent_v0eco_4",ny="_readOnlyContentCenter_v0eco_7",ry="_textarea_v0eco_11",ty="_space_v0eco_15",Ht={readOnlyContainer:QR,readOnlyContent:ey,readOnlyContentCenter:ny,textarea:ry,space:ty},ay=e=>e!=null&&e!=="",sy=({label:e,value:n,isEdited:r=!1,type:t,hideLabel:a,size:s})=>ay(n)?Xe.jsxs("div",{className:Ht.readOnlyContainer,children:[e&&!a&&Xe.jsx(Ye,{size:"small",children:e}),Xe.jsx("div",{className:t==="textarea"?Ht.textarea:"",children:Xe.jsxs(su,{className:Ht.readOnlyContent,size:s,children:[n,r&&Xe.jsx(_u,{className:Ht.space})]})})]}):null;Qn.extend(XR);const iy="_textAreaFieldWithBadges_bdz0b_1",oy="_etikettWrapper_bdz0b_4",Ao={textAreaFieldWithBadges:iy,etikettWrapper:oy},ra=({name:e,label:n,readOnly:r,maxLength:t,badges:a,validate:s=[],parse:i=k=>k,className:o,description:l,isEdited:u,...d})=>{const{formState:{errors:k}}=pr(),{field:v}=nm({name:e,rules:{validate:f.useMemo(()=>JR(s),[s])}});return r?Xe.jsx(sy,{label:n,value:v.value,type:"textarea",isEdited:u,hideLabel:d.hideLabel}):Xe.jsxs("div",{className:a?Ao.textAreaFieldWithBadges:null,children:[a&&Xe.jsx("div",{className:Ao.etikettWrapper,children:a.map(({type:b,titleText:h})=>Xe.jsx(lT,{variant:b,size:"small",children:h},h))}),Xe.jsx(ET,{size:"small",label:n,description:l,className:o,autoComplete:"off",...v,onChange:b=>v.onChange(b.currentTarget.value!==""?i(b.currentTarget.value):null),value:v.value?v.value:"",error:zR(k,e),maxLength:t,...d})]})},Nu=({formMethods:e,onSubmit:n,children:r,className:t,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:i}=e;return f.useEffect(()=>()=>{a&&a(i())},[]),Xe.jsx(Xv,{...e,children:Xe.jsx("form",{className:t,onSubmit:n?s(o=>n(o)):void 0,children:r})})},ly="Dato må være før eller lik {limit}",dy="Dato må være etter eller lik {limit}",uy="Perioder kan ikke overlappe i tid",gy="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",ky="Dato må være lik {value}",Ey="Dato må skrives slik: dd.mm.åååå",vy="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",my="Tallet kan ikke inneholde mer enn to desimaler",fy="Tallet kan ikke ha desimaler",Ty="Feltet kan kun inneholde tall",Ry="Ugyldig fødselsnummer",yy="Feltet må være et fødselsnummer (11 siffer)",Ay="Ugyldig organisasjonsnummer.",by="Ugyldig organisasjonsnummer eller fødselsnummer",py="Startdato må være før eller lik sluttdato",cy="Periode er utenfor opptjeningsperioden",_y="Ugyldig saksnummer eller fødselsnummer",hy="Feltet inneholder ugyldige tegn: {text}",Sy="Feltet inneholder en ugyldig verdi: {value}",Ny="Feltet kan ikke inneholde mellomrom",Oy="Feltet må fylles ut",Iy="Du kan skrive maksimalt {length} tegn",Ly="Du må skrive minst {length} tegn",Dy="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",Ky="Feltet må være mindre eller lik {length}",Py="Feltet må være større eller lik {length}",Fy="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",My={DateNotBeforeOrEqual:ly,DateNotAfterOrEqual:dy,DateRangesOverlapping:uy,DateRangesOverlappingPeriodTypes:gy,DatesNotEqual:ky,InvalidDate:Ey,InvalidDatesInPeriod:vy,InvalidDecimal:my,InvalidInteger:fy,InvalidNumber:Ty,InvalidFodselsnr:Ry,InvalidFodselsnrFormat:yy,InvalidOrgnr:Ay,InvalidOrgnrOrFodselsnr:by,InvalidPeriod:py,InvalidPeriodRange:cy,InvalidSaksnrOrFodselsnrFormat:_y,InvalidText:hy,InvalidValue:Sy,IllegalWhiteSpace:Ny,IsRequired:Oy,MaxLength:Iy,MinLength:Ly,MaxLengthOrFodselsnr:Dy,MaxValue:Ky,MinValue:Py,SammeFodselsnrSomSoker:Fy},{formatMessage:ha}=Ge(My),Vy=e=>ha({id:"InvalidText"},{text:e}),Ou=()=>ha({id:"IsRequired"}),Gy=e=>ha({id:"MaxLength"},{length:e}),wy=e=>ha({id:"MinLength"},{length:e}),jy=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,Uy=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Sa=e=>e==null||e.toString().trim().length===0;var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Lu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Du={exports:{}};(function(e,n){(function(r,t){e.exports=t()})(Iu,function(){return function(r,t){t.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})})(Du);var By=Du.exports;const qy=Lu(By);var Ku={exports:{}};(function(e,n){(function(r,t){e.exports=t()})(Iu,function(){return function(r,t){t.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})})(Ku);var Hy=Ku.exports;const Yy=Lu(Hy);Qn.extend(qy);Qn.extend(Yy);const bo=e=>Sa(e)?Ou():void 0,xy=e=>n=>Sa(n)&&e(n)?Ou():void 0,ei=e=>n=>Sa(n)||n.toString().trim().length>=e?null:wy(e),Na=e=>n=>Sa(n)||n.toString().trim().length<=e?null:Gy(e),ta=e=>{if(!jy.test(e)){const n=e.replace(Uy,"");return Vy(n.replace(/[\t]/g,"Tabulatortegn"))}return null},Nt={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"};Ge(Nt);Ge(Nt);Ge(Nt);Ge(Nt);Ge(Nt);const Pu=(e,...n)=>{const r=n.find(t=>t===e);if(!r)throw Error(`Det finnes ikke enum for kode ${e}`);return r};var ps=(e=>(e.PENDING="PENDING",e.COMPLETE="COMPLETE",e.DELAYED="DELAYED",e.CANCELLED="CANCELLED",e.HALTED="HALTED",e))(ps||{});const Cy="_line_7rsxc_1",$y="_smallTextArea_7rsxc_7",Wy="_pil_7rsxc_11",Jy="_space_7rsxc_15",zy="_avsnittOverskrift_7rsxc_19",dr={line:Cy,smallTextArea:$y,pil:Wy,space:Jy,avsnittOverskrift:zy},Zy=Na(200),Xy=Na(1e4),po=ei(3),Fu=({forhåndsvisOverstyrtBrev:e,isReadOnly:n,språkKode:r,skalViseLink:t})=>{const a=dn();return E.jsxs(E.Fragment,{children:[E.jsx(be,{thirtyTwoPx:!0}),E.jsx(qR,{}),E.jsx(be,{thirtyTwoPx:!0}),E.jsx(Jn,{children:E.jsxs(Wn,{children:[E.jsx(Me,{className:dr.space,children:E.jsx(Ye,{size:"small",className:dr.avsnittOverskrift,children:E.jsx(ye,{id:"FritekstBrevPanel.ManueltVedtaksbrev"})})}),E.jsx(Me,{className:dr.space,children:E.jsx(wn,{children:xs(r)})}),E.jsx(Me,{children:!n&&t&&E.jsxs(ys,{href:"#",onClick:e,children:[E.jsx("span",{children:E.jsx(ye,{id:"FritekstBrevPanel.ForhandsvisManueltVedtaksbrev"})}),E.jsx(ou,{className:dr.pil})]})})]})}),E.jsx("hr",{className:dr.line}),E.jsx(be,{twentyPx:!0}),!n&&E.jsx(ku,{variant:"info",size:"small",children:E.jsx(Ye,{size:"small",children:E.jsx(ye,{id:"VedtakFellesPanel.Forklaring"})})}),E.jsx(be,{sixteenPx:!0}),E.jsx(ra,{name:"overskrift",label:a.formatMessage({id:"VedtakForm.Overskrift"}),validate:[bo,po,Zy,ta],maxLength:200,readOnly:n,parse:Zt,className:dr.smallTextArea}),E.jsx(be,{thirtyTwoPx:!0}),E.jsx(ra,{name:"brødtekst",label:a.formatMessage({id:"VedtakForm.Innhold"}),validate:[bo,po,Xy,ta],maxLength:1e4,readOnly:n,parse:Zt}),n&&E.jsxs(E.Fragment,{children:[E.jsx(be,{sixteenPx:!0}),E.jsx(Jn,{children:E.jsxs(Wn,{children:[E.jsx(Me,{children:E.jsx(_u,{})}),E.jsx(Me,{children:E.jsx(Qe,{size:"small",children:E.jsx(ye,{id:"FritekstBrevPanel.Endret"})})})]})})]})]})};Fu.__docgenInfo={description:"",methods:[],displayName:"ManueltVedtaksbrevPanel",props:{forhåndsvisOverstyrtBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},skalViseLink:{required:!0,tsType:{name:"boolean"},description:""}}};const Qy=(e,n)=>{const r=[];return n!=null&&n.some(t=>t.definisjon===ue.VURDERE_ANNEN_YTELSE)&&r.push(e.formatMessage({id:"VedtakForm.VurderAnnenYtelse"})),n!=null&&n.some(t=>t.definisjon===ue.VURDERE_DOKUMENT)&&r.push(e.formatMessage({id:"VedtakForm.VurderDokument"})),n!=null&&n.some(t=>t.definisjon===ue.VURDERE_INNTEKTSMELDING_KLAGE)&&r.push(e.formatMessage({id:"VedtakForm.VurderInntektsmeldingKlage"})),n!=null&&n.some(t=>t.definisjon===ue.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST)&&r.push(e.formatMessage({id:"VedtakForm.KontrollerRevurderingsbehandling"})),r},Mu=({isReadOnly:e,aksjonspunkter:n})=>{const r=dn(),t=Qy(r,n);return!e&&t.length>0?E.jsxs(E.Fragment,{children:[E.jsx(be,{sixteenPx:!0}),E.jsxs(ku,{variant:"info",size:"small",children:[E.jsx(Qe,{size:"small",children:E.jsx(ye,{id:"VedtakHelpTextPanel.Vurder"})}),E.jsx("ul",{children:t.map(a=>E.jsx("li",{children:E.jsx(Qe,{size:"small",children:a})},a))})]})]}):null};Mu.__docgenInfo={description:"",methods:[],displayName:"VedtakHelpTextPanel",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""}}};const eA="_pil_gjh8k_1",nA="_blyant_gjh8k_5",rA="_blyantDisablet_gjh8k_9",tA="_status_gjh8k_16",aA="_innvilgetImage_gjh8k_21",sA="_avslattImage_gjh8k_27",iA="_disabletLink_gjh8k_33",oA="_space_gjh8k_38",pn={pil:eA,blyant:nA,blyantDisablet:rA,status:tA,innvilgetImage:aA,avslattImage:sA,disabletLink:iA,space:oA},lA=e=>e===xe.AVSLUTTET||e===xe.IVERKSETTER_VEDTAK?"VedtakForm.vedtak":"VedtakForm.ForslagTilVedtak",dA=e=>e===xe.BEHANDLING_UTREDES,uA=(e,n)=>e!=null&&e.some(r=>r.definisjon===ue.FORESLA_VEDTAK)||n?"VedtakForm.TilGodkjenning":"VedtakForm.FattVedtak",gA=e=>e.avslagsarsak?e.avslagsarsak!==ed.INGEN_BEREGNINGSREGLER:!0,kA=(e,n)=>{if(!n)return!0;const{konsekvenserForYtelsen:r}=n;return!Array.isArray(r)||r.length!==1?!0:!e.some(t=>t===r[0])},ni=({behandling:e,aksjonspunkter:n,readOnly:r,renderPanel:t,previewAutomatiskBrev:a,previewOverstyrtBrev:s,tilbakekrevingtekst:i,erBehandlingEtterKlage:o,vedtakstatusTekst:l})=>{const u=dn(),{setValue:d,formState:{isSubmitting:k}}=pr(),{behandlingsresultat:v,behandlingPaaVent:b,sprakkode:h,status:T,behandlingHenlagt:y,uuid:c,taskStatus:p}=e;if(!v)throw new Error(`behandlingsresultat finnes ikke på behandling ${c}`);const[A,F]=f.useState(!!v.vedtaksbrev&&v.vedtaksbrev==="FRITEKST"),[w,B]=f.useState(!1),N=f.useCallback($=>{F(!0),$.preventDefault()},[]),_=f.useCallback(()=>{F(!1),B(!1),d("overskrift",void 0),d("brødtekst",void 0)},[]),V=Ds(v.type),U=Ks(v.type),H=nd(v.type),L=gA(v),D=!y&&(p==null?void 0:p.status)!==ps.HALTED&&(p==null?void 0:p.status)!==ps.DELAYED,x=f.useMemo(()=>kA([Ce.ENDRING_I_FORDELING_AV_YTELSEN,Ce.INGEN_ENDRING],v),[v]);return E.jsxs(E.Fragment,{children:[E.jsx(hT,{text:u.formatMessage({id:"VedtakFellesPanel.Forkast"}),okButtonText:u.formatMessage({id:"VedtakFellesPanel.Ok"}),showModal:w,cancel:()=>B(!1),submit:_}),E.jsx(Jn,{children:E.jsxs(Wn,{children:[T===xe.AVSLUTTET&&E.jsxs(Me,{children:[V&&E.jsx(lu,{className:pn.innvilgetImage}),!V&&E.jsx(uu,{className:pn.avslattImage})]}),E.jsx(Me,{children:E.jsx(Xs,{size:"small",children:E.jsx(ye,{id:lA(T)})})})]})}),E.jsx(be,{eightPx:!0}),E.jsx(Jn,{children:E.jsxs(Wn,{children:[E.jsx(Me,{className:pn.space,children:E.jsxs(Ye,{size:"small",children:[l,i&&`. ${u.formatMessage({id:i})}`]})}),E.jsxs(Me,{className:pn.space,children:[L&&x&&D&&E.jsxs(ys,{href:"#",onClick:a,children:[E.jsx("span",{children:E.jsx(ye,{id:o?"VedtakFellesPanel.UtkastVedtaksbrev":"VedtakFellesPanel.AutomatiskVedtaksbrev"})}),E.jsx(ou,{className:pn.pil})]}),L&&x&&!D&&E.jsx(Qe,{size:"small",className:pn.disabletLink,children:E.jsx(ye,{id:o?"VedtakFellesPanel.UtkastVedtaksbrev":"VedtakFellesPanel.AutomatiskVedtaksbrev"})})]}),E.jsxs(Me,{children:[!r&&!A&&E.jsxs(ys,{href:"#",onClick:N,children:[E.jsx(ao,{className:pn.blyant}),E.jsx("span",{children:E.jsx(ye,{id:"VedtakFellesPanel.RedigerVedtaksbrev"})})]}),(r||A)&&E.jsxs(E.Fragment,{children:[E.jsx(ao,{className:pn.blyantDisablet}),E.jsx(Qe,{size:"small",className:pn.disabletLink,children:E.jsx(ye,{id:"VedtakFellesPanel.RedigerVedtaksbrev"})})]})]})]})}),E.jsx(Mu,{aksjonspunkter:n,isReadOnly:r}),E.jsx(be,{twentyPx:!0}),t(A,V,U,H),A&&E.jsx(Fu,{isReadOnly:r,språkKode:h,forhåndsvisOverstyrtBrev:s,skalViseLink:L}),dA(T)&&E.jsxs(E.Fragment,{children:[E.jsx(be,{twentyPx:!0}),E.jsx(Jn,{children:E.jsxs(Wn,{children:[E.jsx(Me,{children:!r&&E.jsx(br,{variant:"primary",size:"small",disabled:b||k,loading:k,children:E.jsx(ye,{id:uA(n,A)})})}),A&&E.jsx(Me,{children:E.jsx(br,{size:"small",variant:"secondary",onClick:()=>B(!0),type:"button",children:E.jsx(ye,{id:"VedtakFellesPanel.ForkastManueltBrev"})})})]})})]})]})};ni.__docgenInfo={description:"",methods:[],displayName:"VedtakFellesPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
) => ReactNode`,signature:{arguments:[{type:{name:"boolean"},name:"skalBrukeManueltBrev"},{type:{name:"boolean"},name:"erInnvilget"},{type:{name:"boolean"},name:"erAvslatt"},{type:{name:"boolean"},name:"erOpphor"}],return:{name:"ReactNode"}}},description:""},previewAutomatiskBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},previewOverstyrtBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},tilbakekrevingtekst:{required:!1,tsType:{name:"string"},description:""},vedtakstatusTekst:{required:!1,tsType:{name:"string"},description:""}}};const EA=(e,n)=>e===rd.TILBAKEKR_OPPRETT&&(!!n.simuleringResultat.sumInntrekk||!!n.simuleringResultatUtenInntrekk),Vu=(e,n,r)=>r!=null&&n?EA(r.videreBehandling,n)?"VedtakForm.OpprettTilbakekrOgInntrekk":Rt(e)(r.videreBehandling,In.TILBAKEKR_VIDERE_BEH):"",vA="_fritekstItem_1kqqb_1",mA={fritekstItem:vA},fA=Na(1500),TA=ei(3),Ot=({behandlingsresultat:e,språkKode:n,isReadOnly:r,labelTextCode:t})=>{const a=dn();return E.jsxs(E.Fragment,{children:[!r&&E.jsxs(E.Fragment,{children:[E.jsx(be,{sixteenPx:!0}),E.jsx(ra,{name:"begrunnelse",label:a.formatMessage({id:t}),validate:[TA,fA,ta],maxLength:1500,readOnly:r,parse:Zt,badges:[{type:"info",titleText:xs(n)}]})]}),r&&(e==null?void 0:e.avslagsarsakFritekst)&&E.jsxs("span",{children:[E.jsx(be,{twentyPx:!0}),E.jsx(wn,{children:a.formatMessage({id:t})}),E.jsx(be,{eightPx:!0}),E.jsx("div",{className:mA.fritekstItem,children:Xn(e.avslagsarsakFritekst)})]})]})};Ot.__docgenInfo={description:"",methods:[],displayName:"VedtakFritekstPanel",props:{behandlingsresultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},labelTextCode:{required:!0,tsType:{name:"string"},description:""}}};const cs=(e,n,r)=>{const t=e.filter(s=>s.vilkarStatus===ct.IKKE_OPPFYLT);if(t.length===0)return E.jsx(ye,{id:"VedtakForm.UttaksperioderIkkeGyldig"});if(!(r!=null&&r.avslagsarsak))throw new Error("Behandlingsresultat eller avslagsårsak finnes ikke");return`${n(t[0].vilkarType,In.VILKAR_TYPE)}: ${n(r.avslagsarsak,In.AVSLAGSARSAK,t[0].vilkarType)}`},RA=[],Gu=({vilkar:e=RA,behandlingsresultat:n,språkKode:r,isReadOnly:t,alleKodeverk:a,beregningErManueltFastsatt:s,skalBrukeOverstyrendeFritekstBrev:i})=>{const o=dn(),l=Rt(a),u=s?"VedtakForm.Fritekst.Beregningsgrunnlag":"VedtakForm.Fritekst";return E.jsxs(E.Fragment,{children:[cs(e,l,n)&&E.jsxs("div",{children:[E.jsx(Ye,{size:"small",children:o.formatMessage({id:"VedtakForm.ArsakTilAvslag"})}),E.jsx(Qe,{size:"small",children:cs(e,l,n)}),E.jsx(be,{sixteenPx:!0})]}),!i&&E.jsx(Ot,{isReadOnly:t,språkKode:r,behandlingsresultat:n,labelTextCode:u})]})};cs.__docgenInfo={description:"",methods:[],displayName:"getAvslagArsak"};Gu.__docgenInfo={description:"",methods:[],displayName:"VedtakAvslagPanel",props:{vilkar:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const wu=({behandlingsresultat:e,ytelseTypeKode:n,språkKode:r,isReadOnly:t,skalBrukeOverstyrendeFritekstBrev:a,beregningErManueltFastsatt:s,beregningsresultat:i={}})=>{const o=dn();return E.jsxs(E.Fragment,{children:[n===z.ENGANGSSTONAD&&i&&"antallBarn"in i&&E.jsxs(Jn,{children:[E.jsxs(Wn,{children:[E.jsxs(Me,{children:[E.jsx(wn,{children:o.formatMessage({id:"VedtakForm.beregnetTilkjentYtelse"})}),E.jsx(Ye,{size:"small",children:Md(i.beregnetTilkjentYtelse)})]}),E.jsxs(Me,{children:[E.jsx(wn,{children:o.formatMessage({id:"VedtakForm.AntallBarn"})}),E.jsx(Ye,{size:"small",children:i.antallBarn})]})]}),E.jsx(be,{sixteenPx:!0})]}),s&&!a&&E.jsx(Ot,{isReadOnly:t,språkKode:r,behandlingsresultat:e,labelTextCode:"VedtakForm.Fritekst.Beregningsgrunnlag"})]})};wu.__docgenInfo={description:"",methods:[],displayName:"VedtakInnvilgetPanel",props:{beregningsresultat:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""}}};const yA=(e,n)=>e===_e.KLAGE_YTELSESVEDTAK_OPPHEVET?"VedtakForm.ResultatKlageYtelsesvedtakOpphevet":e===_e.KLAGE_AVVIST?"VedtakForm.ResultatKlageAvvist":n===z.ENGANGSSTONAD?"VedtakForm.EngangsstonadIkkeInnvilget":n===z.SVANGERSKAPSPENGER?"VedtakForm.SvangerskapspengerIkkeInnvilget":"VedtakForm.ForeldrepengerIkkeInnvilget",AA=(e,n)=>e===_e.KLAGE_YTELSESVEDTAK_STADFESTET?"VedtakForm.ResultatOpprettholdVedtak":nk(e)?"VedtakForm.ResultatKlageMedhold":n===z.ENGANGSSTONAD?"VedtakForm.VilkarStatusInnvilgetEngangsstonad":n===z.SVANGERSKAPSPENGER?"VedtakForm.SvangerskapspengerInnvilget":"VedtakForm.VilkarStatusInnvilgetForeldrepenger",co=(e,n,r,t,a,s)=>i=>{i.preventDefault();const o=e?!!a&&!!s:!!t;if(r(),!e||o){const l={fritekst:e?a:t,dokumentMal:e?Ps.FRITEKST:void 0,tittel:e?s:void 0,gjelderVedtak:!0,automatiskVedtaksbrev:e?void 0:!0};n(l)}},bA=(e=[])=>e.map(({behandlingArsakType:n})=>n).some(n=>n===mn.ETTER_KLAGE||n===mn.KLAGE_U_INNTK||n===mn.KLAGE_M_INNTK),pA=(e,n,r)=>r&&Ds(r.type)?e.formatMessage({id:AA(r.type,n)}):r&&Ks(r.type)?e.formatMessage({id:yA(r.type,n)}):"",cA=e=>e.aksjonspunktKoder.map(n=>({kode:Pu(n,ue.FORESLA_VEDTAK,ue.FORESLA_VEDTAK_MANUELT,ue.VURDERE_ANNEN_YTELSE,ue.VURDERE_DOKUMENT),begrunnelse:e.begrunnelse,fritekstBrev:e.brødtekst,skalBrukeOverstyrendeFritekstBrev:!!e.brødtekst,overskrift:e.overskrift})),_A=(e,n)=>{var r;if(n)return(r=e.behandlingsresultat)!=null&&r.avslagsarsakFritekst?Xn(e.behandlingsresultat.avslagsarsakFritekst):void 0},hA=(e,n,r)=>{var t,a;return{beregningErManueltFastsatt:r,aksjonspunktKoder:e.filter(s=>s.kanLoses).map(s=>s.definisjon),overskrift:Xn((t=n.behandlingsresultat)==null?void 0:t.overskrift),brødtekst:Xn((a=n.behandlingsresultat)==null?void 0:a.fritekstbrev),begrunnelse:_A(n,r)}},ju=({behandling:e,readOnly:n,aksjonspunkter:r,previewCallback:t,ytelseTypeKode:a,beregningsresultat:s,alleKodeverk:i,tilbakekrevingvalg:o,simuleringResultat:l,vilkar:u,beregningErManueltFastsatt:d,submitCallback:k,formData:v,setFormData:b})=>{const h=dn(),T=nu({defaultValues:v||hA(r,e,d)}),y=T.watch("begrunnelse"),c=T.watch("overskrift"),p=T.watch("brødtekst"),{trigger:A}=T,{behandlingsresultat:F,sprakkode:w}=e,B=f.useMemo(()=>bA(e.behandlingÅrsaker),[e.behandlingÅrsaker]),N=f.useMemo(()=>Vu(i,l,o),[l,o]),_=f.useMemo(()=>pA(h,a,F),[F]),V=co(!0,t,A,y,p,c),U=co(!1,t,A,y,p,c);return E.jsx(Nu,{formMethods:T,onSubmit:H=>k(cA(H)),setDataOnUnmount:b,children:E.jsx(ni,{behandling:e,vedtakstatusTekst:_,aksjonspunkter:r,readOnly:n,previewAutomatiskBrev:U,previewOverstyrtBrev:V,tilbakekrevingtekst:N,erBehandlingEtterKlage:B,renderPanel:(H,L,D)=>L?E.jsx(wu,{behandlingsresultat:F,isReadOnly:n,skalBrukeOverstyrendeFritekstBrev:H,ytelseTypeKode:a,språkKode:w,beregningsresultat:s,beregningErManueltFastsatt:d}):D?E.jsx(Gu,{behandlingsresultat:F,isReadOnly:n,språkKode:w,alleKodeverk:i,vilkar:u,beregningErManueltFastsatt:d,skalBrukeOverstyrendeFritekstBrev:H}):null})})};ju.__docgenInfo={description:"",methods:[],displayName:"VedtakForm",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!1}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"tittel",value:{name:"string",required:!1}},{key:"gjelderVedtak",value:{name:"boolean",required:!0}},{key:"automatiskVedtaksbrev",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},beregningsresultat:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FORESLA_VEDTAK>`,elements:[{name:"signature",type:"object",raw:`{
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
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FORESLA_VEDTAK_MANUELT>`,elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"beregningErManueltFastsatt",value:{name:"boolean",required:!1}},{key:"aksjonspunktKoder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"brødtekst",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Uu;function M(){return Uu.apply(null,arguments)}function SA(e){Uu=e}function sn(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function zn(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function ae(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function ri(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var n;for(n in e)if(ae(e,n))return!1;return!0}function qe(e){return e===void 0}function Ln(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function It(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Bu(e,n){var r=[],t,a=e.length;for(t=0;t<a;++t)r.push(n(e[t],t));return r}function Mn(e,n){for(var r in n)ae(n,r)&&(e[r]=n[r]);return ae(n,"toString")&&(e.toString=n.toString),ae(n,"valueOf")&&(e.valueOf=n.valueOf),e}function yn(e,n,r,t){return ug(e,n,r,t,!0).utc()}function NA(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function W(e){return e._pf==null&&(e._pf=NA()),e._pf}var _s;Array.prototype.some?_s=Array.prototype.some:_s=function(e){var n=Object(this),r=n.length>>>0,t;for(t=0;t<r;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};function ti(e){var n=null,r=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(n=W(e),r=_s.call(n.parsedDateParts,function(a){return a!=null}),t=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&r),e._strict&&(t=t&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function Oa(e){var n=yn(NaN);return e!=null?Mn(W(n),e):W(n).userInvalidated=!0,n}var _o=M.momentProperties=[],ns=!1;function ai(e,n){var r,t,a,s=_o.length;if(qe(n._isAMomentObject)||(e._isAMomentObject=n._isAMomentObject),qe(n._i)||(e._i=n._i),qe(n._f)||(e._f=n._f),qe(n._l)||(e._l=n._l),qe(n._strict)||(e._strict=n._strict),qe(n._tzm)||(e._tzm=n._tzm),qe(n._isUTC)||(e._isUTC=n._isUTC),qe(n._offset)||(e._offset=n._offset),qe(n._pf)||(e._pf=W(n)),qe(n._locale)||(e._locale=n._locale),s>0)for(r=0;r<s;r++)t=_o[r],a=n[t],qe(a)||(e[t]=a);return e}function Lt(e){ai(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ns===!1&&(ns=!0,M.updateOffset(this),ns=!1)}function on(e){return e instanceof Lt||e!=null&&e._isAMomentObject!=null}function qu(e){M.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function nn(e,n){var r=!0;return Mn(function(){if(M.deprecationHandler!=null&&M.deprecationHandler(null,e),r){var t=[],a,s,i,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(i in arguments[0])ae(arguments[0],i)&&(a+=i+": "+arguments[0][i]+", ");a=a.slice(0,-2)}else a=arguments[s];t.push(a)}qu(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),r=!1}return n.apply(this,arguments)},n)}var ho={};function Hu(e,n){M.deprecationHandler!=null&&M.deprecationHandler(e,n),ho[e]||(qu(n),ho[e]=!0)}M.suppressDeprecationWarnings=!1;M.deprecationHandler=null;function An(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function OA(e){var n,r;for(r in e)ae(e,r)&&(n=e[r],An(n)?this[r]=n:this["_"+r]=n);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function hs(e,n){var r=Mn({},e),t;for(t in n)ae(n,t)&&(zn(e[t])&&zn(n[t])?(r[t]={},Mn(r[t],e[t]),Mn(r[t],n[t])):n[t]!=null?r[t]=n[t]:delete r[t]);for(t in e)ae(e,t)&&!ae(n,t)&&zn(e[t])&&(r[t]=Mn({},r[t]));return r}function si(e){e!=null&&this.set(e)}var Ss;Object.keys?Ss=Object.keys:Ss=function(e){var n,r=[];for(n in e)ae(e,n)&&r.push(n);return r};var IA={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function LA(e,n,r){var t=this._calendar[e]||this._calendar.sameElse;return An(t)?t.call(n,r):t}function Rn(e,n,r){var t=""+Math.abs(e),a=n-t.length,s=e>=0;return(s?r?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+t}var ii=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Yt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,rs={},fr={};function Y(e,n,r,t){var a=t;typeof t=="string"&&(a=function(){return this[t]()}),e&&(fr[e]=a),n&&(fr[n[0]]=function(){return Rn(a.apply(this,arguments),n[1],n[2])}),r&&(fr[r]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function DA(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function KA(e){var n=e.match(ii),r,t;for(r=0,t=n.length;r<t;r++)fr[n[r]]?n[r]=fr[n[r]]:n[r]=DA(n[r]);return function(a){var s="",i;for(i=0;i<t;i++)s+=An(n[i])?n[i].call(a,e):n[i];return s}}function Wt(e,n){return e.isValid()?(n=Yu(n,e.localeData()),rs[n]=rs[n]||KA(n),rs[n](e)):e.localeData().invalidDate()}function Yu(e,n){var r=5;function t(a){return n.longDateFormat(a)||a}for(Yt.lastIndex=0;r>=0&&Yt.test(e);)e=e.replace(Yt,t),Yt.lastIndex=0,r-=1;return e}var PA={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function FA(e){var n=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return n||!r?n:(this._longDateFormat[e]=r.match(ii).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var MA="Invalid date";function VA(){return this._invalidDate}var GA="%d",wA=/\d{1,2}/;function jA(e){return this._ordinal.replace("%d",e)}var UA={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function BA(e,n,r,t){var a=this._relativeTime[r];return An(a)?a(e,n,r,t):a.replace(/%d/i,e)}function qA(e,n){var r=this._relativeTime[e>0?"future":"past"];return An(r)?r(n):r.replace(/%s/i,n)}var So={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function rn(e){return typeof e=="string"?So[e]||So[e.toLowerCase()]:void 0}function oi(e){var n={},r,t;for(t in e)ae(e,t)&&(r=rn(t),r&&(n[r]=e[t]));return n}var HA={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function YA(e){var n=[],r;for(r in e)ae(e,r)&&n.push({unit:r,priority:HA[r]});return n.sort(function(t,a){return t.priority-a.priority}),n}var xu=/\d/,Je=/\d\d/,Cu=/\d{3}/,li=/\d{4}/,Ia=/[+-]?\d{6}/,Ee=/\d\d?/,$u=/\d\d\d\d?/,Wu=/\d\d\d\d\d\d?/,La=/\d{1,3}/,di=/\d{1,4}/,Da=/[+-]?\d{1,6}/,_r=/\d+/,Ka=/[+-]?\d+/,xA=/Z|[+-]\d\d:?\d\d/gi,Pa=/Z|[+-]\d\d(?::?\d\d)?/gi,CA=/[+-]?\d+(\.\d{1,3})?/,Dt=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,hr=/^[1-9]\d?/,ui=/^([1-9]\d|\d)/,aa;aa={};function j(e,n,r){aa[e]=An(n)?n:function(t,a){return t&&r?r:n}}function $A(e,n){return ae(aa,e)?aa[e](n._strict,n._locale):new RegExp(WA(e))}function WA(e){return Nn(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,r,t,a,s){return r||t||a||s}))}function Nn(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Ze(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function Z(e){var n=+e,r=0;return n!==0&&isFinite(n)&&(r=Ze(n)),r}var Ns={};function oe(e,n){var r,t=n,a;for(typeof e=="string"&&(e=[e]),Ln(n)&&(t=function(s,i){i[n]=Z(s)}),a=e.length,r=0;r<a;r++)Ns[e[r]]=t}function Kt(e,n){oe(e,function(r,t,a,s){a._w=a._w||{},n(r,a._w,a,s)})}function JA(e,n,r){n!=null&&ae(Ns,e)&&Ns[e](n,r._a,r,e)}function Fa(e){return e%4===0&&e%100!==0||e%400===0}var Ve=0,hn=1,En=2,Ne=3,an=4,Sn=5,$n=6,zA=7,ZA=8;Y("Y",0,0,function(){var e=this.year();return e<=9999?Rn(e,4):"+"+e});Y(0,["YY",2],0,function(){return this.year()%100});Y(0,["YYYY",4],0,"year");Y(0,["YYYYY",5],0,"year");Y(0,["YYYYYY",6,!0],0,"year");j("Y",Ka);j("YY",Ee,Je);j("YYYY",di,li);j("YYYYY",Da,Ia);j("YYYYYY",Da,Ia);oe(["YYYYY","YYYYYY"],Ve);oe("YYYY",function(e,n){n[Ve]=e.length===2?M.parseTwoDigitYear(e):Z(e)});oe("YY",function(e,n){n[Ve]=M.parseTwoDigitYear(e)});oe("Y",function(e,n){n[Ve]=parseInt(e,10)});function Tt(e){return Fa(e)?366:365}M.parseTwoDigitYear=function(e){return Z(e)+(Z(e)>68?1900:2e3)};var Ju=Sr("FullYear",!0);function XA(){return Fa(this.year())}function Sr(e,n){return function(r){return r!=null?(zu(this,e,r),M.updateOffset(this,n),this):yt(this,e)}}function yt(e,n){if(!e.isValid())return NaN;var r=e._d,t=e._isUTC;switch(n){case"Milliseconds":return t?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return t?r.getUTCSeconds():r.getSeconds();case"Minutes":return t?r.getUTCMinutes():r.getMinutes();case"Hours":return t?r.getUTCHours():r.getHours();case"Date":return t?r.getUTCDate():r.getDate();case"Day":return t?r.getUTCDay():r.getDay();case"Month":return t?r.getUTCMonth():r.getMonth();case"FullYear":return t?r.getUTCFullYear():r.getFullYear();default:return NaN}}function zu(e,n,r){var t,a,s,i,o;if(!(!e.isValid()||isNaN(r))){switch(t=e._d,a=e._isUTC,n){case"Milliseconds":return void(a?t.setUTCMilliseconds(r):t.setMilliseconds(r));case"Seconds":return void(a?t.setUTCSeconds(r):t.setSeconds(r));case"Minutes":return void(a?t.setUTCMinutes(r):t.setMinutes(r));case"Hours":return void(a?t.setUTCHours(r):t.setHours(r));case"Date":return void(a?t.setUTCDate(r):t.setDate(r));case"FullYear":break;default:return}s=r,i=e.month(),o=e.date(),o=o===29&&i===1&&!Fa(s)?28:o,a?t.setUTCFullYear(s,i,o):t.setFullYear(s,i,o)}}function QA(e){return e=rn(e),An(this[e])?this[e]():this}function eb(e,n){if(typeof e=="object"){e=oi(e);var r=YA(e),t,a=r.length;for(t=0;t<a;t++)this[r[t].unit](e[r[t].unit])}else if(e=rn(e),An(this[e]))return this[e](n);return this}function nb(e,n){return(e%n+n)%n}var pe;Array.prototype.indexOf?pe=Array.prototype.indexOf:pe=function(e){var n;for(n=0;n<this.length;++n)if(this[n]===e)return n;return-1};function gi(e,n){if(isNaN(e)||isNaN(n))return NaN;var r=nb(n,12);return e+=(n-r)/12,r===1?Fa(e)?29:28:31-r%7%2}Y("M",["MM",2],"Mo",function(){return this.month()+1});Y("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});Y("MMMM",0,0,function(e){return this.localeData().months(this,e)});j("M",Ee,hr);j("MM",Ee,Je);j("MMM",function(e,n){return n.monthsShortRegex(e)});j("MMMM",function(e,n){return n.monthsRegex(e)});oe(["M","MM"],function(e,n){n[hn]=Z(e)-1});oe(["MMM","MMMM"],function(e,n,r,t){var a=r._locale.monthsParse(e,t,r._strict);a!=null?n[hn]=a:W(r).invalidMonth=e});var rb="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Zu="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Xu=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,tb=Dt,ab=Dt;function sb(e,n){return e?sn(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Xu).test(n)?"format":"standalone"][e.month()]:sn(this._months)?this._months:this._months.standalone}function ib(e,n){return e?sn(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Xu.test(n)?"format":"standalone"][e.month()]:sn(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ob(e,n,r){var t,a,s,i=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)s=yn([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(s,"").toLocaleLowerCase();return r?n==="MMM"?(a=pe.call(this._shortMonthsParse,i),a!==-1?a:null):(a=pe.call(this._longMonthsParse,i),a!==-1?a:null):n==="MMM"?(a=pe.call(this._shortMonthsParse,i),a!==-1?a:(a=pe.call(this._longMonthsParse,i),a!==-1?a:null)):(a=pe.call(this._longMonthsParse,i),a!==-1?a:(a=pe.call(this._shortMonthsParse,i),a!==-1?a:null))}function lb(e,n,r){var t,a,s;if(this._monthsParseExact)return ob.call(this,e,n,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(a=yn([2e3,t]),r&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!r&&!this._monthsParse[t]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[t]=new RegExp(s.replace(".",""),"i")),r&&n==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(r&&n==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!r&&this._monthsParse[t].test(e))return t}}function Qu(e,n){if(!e.isValid())return e;if(typeof n=="string"){if(/^\d+$/.test(n))n=Z(n);else if(n=e.localeData().monthsParse(n),!Ln(n))return e}var r=n,t=e.date();return t=t<29?t:Math.min(t,gi(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,t):e._d.setMonth(r,t),e}function eg(e){return e!=null?(Qu(this,e),M.updateOffset(this,!0),this):yt(this,"Month")}function db(){return gi(this.year(),this.month())}function ub(e){return this._monthsParseExact?(ae(this,"_monthsRegex")||ng.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(ae(this,"_monthsShortRegex")||(this._monthsShortRegex=tb),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function gb(e){return this._monthsParseExact?(ae(this,"_monthsRegex")||ng.call(this),e?this._monthsStrictRegex:this._monthsRegex):(ae(this,"_monthsRegex")||(this._monthsRegex=ab),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function ng(){function e(l,u){return u.length-l.length}var n=[],r=[],t=[],a,s,i,o;for(a=0;a<12;a++)s=yn([2e3,a]),i=Nn(this.monthsShort(s,"")),o=Nn(this.months(s,"")),n.push(i),r.push(o),t.push(o),t.push(i);n.sort(e),r.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function kb(e,n,r,t,a,s,i){var o;return e<100&&e>=0?(o=new Date(e+400,n,r,t,a,s,i),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,n,r,t,a,s,i),o}function At(e){var n,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,n=new Date(Date.UTC.apply(null,r)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(e)):n=new Date(Date.UTC.apply(null,arguments)),n}function sa(e,n,r){var t=7+n-r,a=(7+At(e,0,t).getUTCDay()-n)%7;return-a+t-1}function rg(e,n,r,t,a){var s=(7+r-t)%7,i=sa(e,t,a),o=1+7*(n-1)+s+i,l,u;return o<=0?(l=e-1,u=Tt(l)+o):o>Tt(e)?(l=e+1,u=o-Tt(e)):(l=e,u=o),{year:l,dayOfYear:u}}function bt(e,n,r){var t=sa(e.year(),n,r),a=Math.floor((e.dayOfYear()-t-1)/7)+1,s,i;return a<1?(i=e.year()-1,s=a+On(i,n,r)):a>On(e.year(),n,r)?(s=a-On(e.year(),n,r),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function On(e,n,r){var t=sa(e,n,r),a=sa(e+1,n,r);return(Tt(e)-t+a)/7}Y("w",["ww",2],"wo","week");Y("W",["WW",2],"Wo","isoWeek");j("w",Ee,hr);j("ww",Ee,Je);j("W",Ee,hr);j("WW",Ee,Je);Kt(["w","ww","W","WW"],function(e,n,r,t){n[t.substr(0,1)]=Z(e)});function Eb(e){return bt(e,this._week.dow,this._week.doy).week}var vb={dow:0,doy:6};function mb(){return this._week.dow}function fb(){return this._week.doy}function Tb(e){var n=this.localeData().week(this);return e==null?n:this.add((e-n)*7,"d")}function Rb(e){var n=bt(this,1,4).week;return e==null?n:this.add((e-n)*7,"d")}Y("d",0,"do","day");Y("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});Y("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});Y("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});Y("e",0,0,"weekday");Y("E",0,0,"isoWeekday");j("d",Ee);j("e",Ee);j("E",Ee);j("dd",function(e,n){return n.weekdaysMinRegex(e)});j("ddd",function(e,n){return n.weekdaysShortRegex(e)});j("dddd",function(e,n){return n.weekdaysRegex(e)});Kt(["dd","ddd","dddd"],function(e,n,r,t){var a=r._locale.weekdaysParse(e,t,r._strict);a!=null?n.d=a:W(r).invalidWeekday=e});Kt(["d","e","E"],function(e,n,r,t){n[t]=Z(e)});function yb(e,n){return typeof e!="string"?e:isNaN(e)?(e=n.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function Ab(e,n){return typeof e=="string"?n.weekdaysParse(e)%7||7:isNaN(e)?null:e}function ki(e,n){return e.slice(n,7).concat(e.slice(0,n))}var bb="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),tg="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),pb="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),cb=Dt,_b=Dt,hb=Dt;function Sb(e,n){var r=sn(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return e===!0?ki(r,this._week.dow):e?r[e.day()]:r}function Nb(e){return e===!0?ki(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Ob(e){return e===!0?ki(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ib(e,n,r){var t,a,s,i=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)s=yn([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(s,"").toLocaleLowerCase();return r?n==="dddd"?(a=pe.call(this._weekdaysParse,i),a!==-1?a:null):n==="ddd"?(a=pe.call(this._shortWeekdaysParse,i),a!==-1?a:null):(a=pe.call(this._minWeekdaysParse,i),a!==-1?a:null):n==="dddd"?(a=pe.call(this._weekdaysParse,i),a!==-1||(a=pe.call(this._shortWeekdaysParse,i),a!==-1)?a:(a=pe.call(this._minWeekdaysParse,i),a!==-1?a:null)):n==="ddd"?(a=pe.call(this._shortWeekdaysParse,i),a!==-1||(a=pe.call(this._weekdaysParse,i),a!==-1)?a:(a=pe.call(this._minWeekdaysParse,i),a!==-1?a:null)):(a=pe.call(this._minWeekdaysParse,i),a!==-1||(a=pe.call(this._weekdaysParse,i),a!==-1)?a:(a=pe.call(this._shortWeekdaysParse,i),a!==-1?a:null))}function Lb(e,n,r){var t,a,s;if(this._weekdaysParseExact)return Ib.call(this,e,n,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(a=yn([2e3,1]).day(t),r&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[t]=new RegExp(s.replace(".",""),"i")),r&&n==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(r&&n==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(r&&n==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!r&&this._weekdaysParse[t].test(e))return t}}function Db(e){if(!this.isValid())return e!=null?this:NaN;var n=yt(this,"Day");return e!=null?(e=yb(e,this.localeData()),this.add(e-n,"d")):n}function Kb(e){if(!this.isValid())return e!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return e==null?n:this.add(e-n,"d")}function Pb(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var n=Ab(e,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function Fb(e){return this._weekdaysParseExact?(ae(this,"_weekdaysRegex")||Ei.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(ae(this,"_weekdaysRegex")||(this._weekdaysRegex=cb),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Mb(e){return this._weekdaysParseExact?(ae(this,"_weekdaysRegex")||Ei.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(ae(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=_b),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Vb(e){return this._weekdaysParseExact?(ae(this,"_weekdaysRegex")||Ei.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(ae(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=hb),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Ei(){function e(d,k){return k.length-d.length}var n=[],r=[],t=[],a=[],s,i,o,l,u;for(s=0;s<7;s++)i=yn([2e3,1]).day(s),o=Nn(this.weekdaysMin(i,"")),l=Nn(this.weekdaysShort(i,"")),u=Nn(this.weekdays(i,"")),n.push(o),r.push(l),t.push(u),a.push(o),a.push(l),a.push(u);n.sort(e),r.sort(e),t.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function vi(){return this.hours()%12||12}function Gb(){return this.hours()||24}Y("H",["HH",2],0,"hour");Y("h",["hh",2],0,vi);Y("k",["kk",2],0,Gb);Y("hmm",0,0,function(){return""+vi.apply(this)+Rn(this.minutes(),2)});Y("hmmss",0,0,function(){return""+vi.apply(this)+Rn(this.minutes(),2)+Rn(this.seconds(),2)});Y("Hmm",0,0,function(){return""+this.hours()+Rn(this.minutes(),2)});Y("Hmmss",0,0,function(){return""+this.hours()+Rn(this.minutes(),2)+Rn(this.seconds(),2)});function ag(e,n){Y(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}ag("a",!0);ag("A",!1);function sg(e,n){return n._meridiemParse}j("a",sg);j("A",sg);j("H",Ee,ui);j("h",Ee,hr);j("k",Ee,hr);j("HH",Ee,Je);j("hh",Ee,Je);j("kk",Ee,Je);j("hmm",$u);j("hmmss",Wu);j("Hmm",$u);j("Hmmss",Wu);oe(["H","HH"],Ne);oe(["k","kk"],function(e,n,r){var t=Z(e);n[Ne]=t===24?0:t});oe(["a","A"],function(e,n,r){r._isPm=r._locale.isPM(e),r._meridiem=e});oe(["h","hh"],function(e,n,r){n[Ne]=Z(e),W(r).bigHour=!0});oe("hmm",function(e,n,r){var t=e.length-2;n[Ne]=Z(e.substr(0,t)),n[an]=Z(e.substr(t)),W(r).bigHour=!0});oe("hmmss",function(e,n,r){var t=e.length-4,a=e.length-2;n[Ne]=Z(e.substr(0,t)),n[an]=Z(e.substr(t,2)),n[Sn]=Z(e.substr(a)),W(r).bigHour=!0});oe("Hmm",function(e,n,r){var t=e.length-2;n[Ne]=Z(e.substr(0,t)),n[an]=Z(e.substr(t))});oe("Hmmss",function(e,n,r){var t=e.length-4,a=e.length-2;n[Ne]=Z(e.substr(0,t)),n[an]=Z(e.substr(t,2)),n[Sn]=Z(e.substr(a))});function wb(e){return(e+"").toLowerCase().charAt(0)==="p"}var jb=/[ap]\.?m?\.?/i,Ub=Sr("Hours",!0);function Bb(e,n,r){return e>11?r?"pm":"PM":r?"am":"AM"}var ig={calendar:IA,longDateFormat:PA,invalidDate:MA,ordinal:GA,dayOfMonthOrdinalParse:wA,relativeTime:UA,months:rb,monthsShort:Zu,week:vb,weekdays:bb,weekdaysMin:pb,weekdaysShort:tg,meridiemParse:jb},Te={},wr={},pt;function qb(e,n){var r,t=Math.min(e.length,n.length);for(r=0;r<t;r+=1)if(e[r]!==n[r])return r;return t}function No(e){return e&&e.toLowerCase().replace("_","-")}function Hb(e){for(var n=0,r,t,a,s;n<e.length;){for(s=No(e[n]).split("-"),r=s.length,t=No(e[n+1]),t=t?t.split("-"):null;r>0;){if(a=Ma(s.slice(0,r).join("-")),a)return a;if(t&&t.length>=r&&qb(s,t)>=r-1)break;r--}n++}return pt}function Yb(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Ma(e){var n=null,r;if(Te[e]===void 0&&typeof module<"u"&&module&&module.exports&&Yb(e))try{n=pt._abbr,r=require,r("./locale/"+e),Gn(n)}catch{Te[e]=null}return Te[e]}function Gn(e,n){var r;return e&&(qe(n)?r=Kn(e):r=mi(e,n),r?pt=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),pt._abbr}function mi(e,n){if(n!==null){var r,t=ig;if(n.abbr=e,Te[e]!=null)Hu("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=Te[e]._config;else if(n.parentLocale!=null)if(Te[n.parentLocale]!=null)t=Te[n.parentLocale]._config;else if(r=Ma(n.parentLocale),r!=null)t=r._config;else return wr[n.parentLocale]||(wr[n.parentLocale]=[]),wr[n.parentLocale].push({name:e,config:n}),null;return Te[e]=new si(hs(t,n)),wr[e]&&wr[e].forEach(function(a){mi(a.name,a.config)}),Gn(e),Te[e]}else return delete Te[e],null}function xb(e,n){if(n!=null){var r,t,a=ig;Te[e]!=null&&Te[e].parentLocale!=null?Te[e].set(hs(Te[e]._config,n)):(t=Ma(e),t!=null&&(a=t._config),n=hs(a,n),t==null&&(n.abbr=e),r=new si(n),r.parentLocale=Te[e],Te[e]=r),Gn(e)}else Te[e]!=null&&(Te[e].parentLocale!=null?(Te[e]=Te[e].parentLocale,e===Gn()&&Gn(e)):Te[e]!=null&&delete Te[e]);return Te[e]}function Kn(e){var n;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return pt;if(!sn(e)){if(n=Ma(e),n)return n;e=[e]}return Hb(e)}function Cb(){return Ss(Te)}function fi(e){var n,r=e._a;return r&&W(e).overflow===-2&&(n=r[hn]<0||r[hn]>11?hn:r[En]<1||r[En]>gi(r[Ve],r[hn])?En:r[Ne]<0||r[Ne]>24||r[Ne]===24&&(r[an]!==0||r[Sn]!==0||r[$n]!==0)?Ne:r[an]<0||r[an]>59?an:r[Sn]<0||r[Sn]>59?Sn:r[$n]<0||r[$n]>999?$n:-1,W(e)._overflowDayOfYear&&(n<Ve||n>En)&&(n=En),W(e)._overflowWeeks&&n===-1&&(n=zA),W(e)._overflowWeekday&&n===-1&&(n=ZA),W(e).overflow=n),e}var $b=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Wb=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Jb=/Z|[+-]\d\d(?::?\d\d)?/,xt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],ts=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],zb=/^\/?Date\((-?\d+)/i,Zb=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Xb={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function og(e){var n,r,t=e._i,a=$b.exec(t)||Wb.exec(t),s,i,o,l,u=xt.length,d=ts.length;if(a){for(W(e).iso=!0,n=0,r=u;n<r;n++)if(xt[n][1].exec(a[1])){i=xt[n][0],s=xt[n][2]!==!1;break}if(i==null){e._isValid=!1;return}if(a[3]){for(n=0,r=d;n<r;n++)if(ts[n][1].exec(a[3])){o=(a[2]||" ")+ts[n][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(Jb.exec(a[4]))l="Z";else{e._isValid=!1;return}e._f=i+(o||"")+(l||""),Ri(e)}else e._isValid=!1}function Qb(e,n,r,t,a,s){var i=[ep(e),Zu.indexOf(n),parseInt(r,10),parseInt(t,10),parseInt(a,10)];return s&&i.push(parseInt(s,10)),i}function ep(e){var n=parseInt(e,10);return n<=49?2e3+n:n<=999?1900+n:n}function np(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function rp(e,n,r){if(e){var t=tg.indexOf(e),a=new Date(n[0],n[1],n[2]).getDay();if(t!==a)return W(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function tp(e,n,r){if(e)return Xb[e];if(n)return 0;var t=parseInt(r,10),a=t%100,s=(t-a)/100;return s*60+a}function lg(e){var n=Zb.exec(np(e._i)),r;if(n){if(r=Qb(n[4],n[3],n[2],n[5],n[6],n[7]),!rp(n[1],r,e))return;e._a=r,e._tzm=tp(n[8],n[9],n[10]),e._d=At.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),W(e).rfc2822=!0}else e._isValid=!1}function ap(e){var n=zb.exec(e._i);if(n!==null){e._d=new Date(+n[1]);return}if(og(e),e._isValid===!1)delete e._isValid;else return;if(lg(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:M.createFromInputFallback(e)}M.createFromInputFallback=nn("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function gr(e,n,r){return e??n??r}function sp(e){var n=new Date(M.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function Ti(e){var n,r,t=[],a,s,i;if(!e._d){for(a=sp(e),e._w&&e._a[En]==null&&e._a[hn]==null&&ip(e),e._dayOfYear!=null&&(i=gr(e._a[Ve],a[Ve]),(e._dayOfYear>Tt(i)||e._dayOfYear===0)&&(W(e)._overflowDayOfYear=!0),r=At(i,0,e._dayOfYear),e._a[hn]=r.getUTCMonth(),e._a[En]=r.getUTCDate()),n=0;n<3&&e._a[n]==null;++n)e._a[n]=t[n]=a[n];for(;n<7;n++)e._a[n]=t[n]=e._a[n]==null?n===2?1:0:e._a[n];e._a[Ne]===24&&e._a[an]===0&&e._a[Sn]===0&&e._a[$n]===0&&(e._nextDay=!0,e._a[Ne]=0),e._d=(e._useUTC?At:kb).apply(null,t),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Ne]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(W(e).weekdayMismatch=!0)}}function ip(e){var n,r,t,a,s,i,o,l,u;n=e._w,n.GG!=null||n.W!=null||n.E!=null?(s=1,i=4,r=gr(n.GG,e._a[Ve],bt(ke(),1,4).year),t=gr(n.W,1),a=gr(n.E,1),(a<1||a>7)&&(l=!0)):(s=e._locale._week.dow,i=e._locale._week.doy,u=bt(ke(),s,i),r=gr(n.gg,e._a[Ve],u.year),t=gr(n.w,u.week),n.d!=null?(a=n.d,(a<0||a>6)&&(l=!0)):n.e!=null?(a=n.e+s,(n.e<0||n.e>6)&&(l=!0)):a=s),t<1||t>On(r,s,i)?W(e)._overflowWeeks=!0:l!=null?W(e)._overflowWeekday=!0:(o=rg(r,t,a,s,i),e._a[Ve]=o.year,e._dayOfYear=o.dayOfYear)}M.ISO_8601=function(){};M.RFC_2822=function(){};function Ri(e){if(e._f===M.ISO_8601){og(e);return}if(e._f===M.RFC_2822){lg(e);return}e._a=[],W(e).empty=!0;var n=""+e._i,r,t,a,s,i,o=n.length,l=0,u,d;for(a=Yu(e._f,e._locale).match(ii)||[],d=a.length,r=0;r<d;r++)s=a[r],t=(n.match($A(s,e))||[])[0],t&&(i=n.substr(0,n.indexOf(t)),i.length>0&&W(e).unusedInput.push(i),n=n.slice(n.indexOf(t)+t.length),l+=t.length),fr[s]?(t?W(e).empty=!1:W(e).unusedTokens.push(s),JA(s,t,e)):e._strict&&!t&&W(e).unusedTokens.push(s);W(e).charsLeftOver=o-l,n.length>0&&W(e).unusedInput.push(n),e._a[Ne]<=12&&W(e).bigHour===!0&&e._a[Ne]>0&&(W(e).bigHour=void 0),W(e).parsedDateParts=e._a.slice(0),W(e).meridiem=e._meridiem,e._a[Ne]=op(e._locale,e._a[Ne],e._meridiem),u=W(e).era,u!==null&&(e._a[Ve]=e._locale.erasConvertYear(u,e._a[Ve])),Ti(e),fi(e)}function op(e,n,r){var t;return r==null?n:e.meridiemHour!=null?e.meridiemHour(n,r):(e.isPM!=null&&(t=e.isPM(r),t&&n<12&&(n+=12),!t&&n===12&&(n=0)),n)}function lp(e){var n,r,t,a,s,i,o=!1,l=e._f.length;if(l===0){W(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<l;a++)s=0,i=!1,n=ai({},e),e._useUTC!=null&&(n._useUTC=e._useUTC),n._f=e._f[a],Ri(n),ti(n)&&(i=!0),s+=W(n).charsLeftOver,s+=W(n).unusedTokens.length*10,W(n).score=s,o?s<t&&(t=s,r=n):(t==null||s<t||i)&&(t=s,r=n,i&&(o=!0));Mn(e,r||n)}function dp(e){if(!e._d){var n=oi(e._i),r=n.day===void 0?n.date:n.day;e._a=Bu([n.year,n.month,r,n.hour,n.minute,n.second,n.millisecond],function(t){return t&&parseInt(t,10)}),Ti(e)}}function up(e){var n=new Lt(fi(dg(e)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function dg(e){var n=e._i,r=e._f;return e._locale=e._locale||Kn(e._l),n===null||r===void 0&&n===""?Oa({nullInput:!0}):(typeof n=="string"&&(e._i=n=e._locale.preparse(n)),on(n)?new Lt(fi(n)):(It(n)?e._d=n:sn(r)?lp(e):r?Ri(e):gp(e),ti(e)||(e._d=null),e))}function gp(e){var n=e._i;qe(n)?e._d=new Date(M.now()):It(n)?e._d=new Date(n.valueOf()):typeof n=="string"?ap(e):sn(n)?(e._a=Bu(n.slice(0),function(r){return parseInt(r,10)}),Ti(e)):zn(n)?dp(e):Ln(n)?e._d=new Date(n):M.createFromInputFallback(e)}function ug(e,n,r,t,a){var s={};return(n===!0||n===!1)&&(t=n,n=void 0),(r===!0||r===!1)&&(t=r,r=void 0),(zn(e)&&ri(e)||sn(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=r,s._i=e,s._f=n,s._strict=t,up(s)}function ke(e,n,r,t){return ug(e,n,r,t,!1)}var kp=nn("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ke.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Oa()}),Ep=nn("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ke.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Oa()});function gg(e,n){var r,t;if(n.length===1&&sn(n[0])&&(n=n[0]),!n.length)return ke();for(r=n[0],t=1;t<n.length;++t)(!n[t].isValid()||n[t][e](r))&&(r=n[t]);return r}function vp(){var e=[].slice.call(arguments,0);return gg("isBefore",e)}function mp(){var e=[].slice.call(arguments,0);return gg("isAfter",e)}var fp=function(){return Date.now?Date.now():+new Date},jr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Tp(e){var n,r=!1,t,a=jr.length;for(n in e)if(ae(e,n)&&!(pe.call(jr,n)!==-1&&(e[n]==null||!isNaN(e[n]))))return!1;for(t=0;t<a;++t)if(e[jr[t]]){if(r)return!1;parseFloat(e[jr[t]])!==Z(e[jr[t]])&&(r=!0)}return!0}function Rp(){return this._isValid}function yp(){return un(NaN)}function Va(e){var n=oi(e),r=n.year||0,t=n.quarter||0,a=n.month||0,s=n.week||n.isoWeek||0,i=n.day||0,o=n.hour||0,l=n.minute||0,u=n.second||0,d=n.millisecond||0;this._isValid=Tp(n),this._milliseconds=+d+u*1e3+l*6e4+o*1e3*60*60,this._days=+i+s*7,this._months=+a+t*3+r*12,this._data={},this._locale=Kn(),this._bubble()}function Jt(e){return e instanceof Va}function Os(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Ap(e,n,r){var t=Math.min(e.length,n.length),a=Math.abs(e.length-n.length),s=0,i;for(i=0;i<t;i++)Z(e[i])!==Z(n[i])&&s++;return s+a}function kg(e,n){Y(e,0,0,function(){var r=this.utcOffset(),t="+";return r<0&&(r=-r,t="-"),t+Rn(~~(r/60),2)+n+Rn(~~r%60,2)})}kg("Z",":");kg("ZZ","");j("Z",Pa);j("ZZ",Pa);oe(["Z","ZZ"],function(e,n,r){r._useUTC=!0,r._tzm=yi(Pa,e)});var bp=/([\+\-]|\d\d)/gi;function yi(e,n){var r=(n||"").match(e),t,a,s;return r===null?null:(t=r[r.length-1]||[],a=(t+"").match(bp)||["-",0,0],s=+(a[1]*60)+Z(a[2]),s===0?0:a[0]==="+"?s:-s)}function Ai(e,n){var r,t;return n._isUTC?(r=n.clone(),t=(on(e)||It(e)?e.valueOf():ke(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+t),M.updateOffset(r,!1),r):ke(e).local()}function Is(e){return-Math.round(e._d.getTimezoneOffset())}M.updateOffset=function(){};function pp(e,n,r){var t=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=yi(Pa,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&n&&(a=Is(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),t!==e&&(!n||this._changeInProgress?mg(this,un(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,M.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:Is(this)}function cp(e,n){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,n),this):-this.utcOffset()}function _p(e){return this.utcOffset(0,e)}function hp(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Is(this),"m")),this}function Sp(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=yi(xA,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Np(e){return this.isValid()?(e=e?ke(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Op(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ip(){if(!qe(this._isDSTShifted))return this._isDSTShifted;var e={},n;return ai(e,this),e=dg(e),e._a?(n=e._isUTC?yn(e._a):ke(e._a),this._isDSTShifted=this.isValid()&&Ap(e._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Lp(){return this.isValid()?!this._isUTC:!1}function Dp(){return this.isValid()?this._isUTC:!1}function Eg(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Kp=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Pp=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function un(e,n){var r=e,t=null,a,s,i;return Jt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:Ln(e)||!isNaN(+e)?(r={},n?r[n]=+e:r.milliseconds=+e):(t=Kp.exec(e))?(a=t[1]==="-"?-1:1,r={y:0,d:Z(t[En])*a,h:Z(t[Ne])*a,m:Z(t[an])*a,s:Z(t[Sn])*a,ms:Z(Os(t[$n]*1e3))*a}):(t=Pp.exec(e))?(a=t[1]==="-"?-1:1,r={y:xn(t[2],a),M:xn(t[3],a),w:xn(t[4],a),d:xn(t[5],a),h:xn(t[6],a),m:xn(t[7],a),s:xn(t[8],a)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(i=Fp(ke(r.from),ke(r.to)),r={},r.ms=i.milliseconds,r.M=i.months),s=new Va(r),Jt(e)&&ae(e,"_locale")&&(s._locale=e._locale),Jt(e)&&ae(e,"_isValid")&&(s._isValid=e._isValid),s}un.fn=Va.prototype;un.invalid=yp;function xn(e,n){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*n}function Oo(e,n){var r={};return r.months=n.month()-e.month()+(n.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(n)&&--r.months,r.milliseconds=+n-+e.clone().add(r.months,"M"),r}function Fp(e,n){var r;return e.isValid()&&n.isValid()?(n=Ai(n,e),e.isBefore(n)?r=Oo(e,n):(r=Oo(n,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function vg(e,n){return function(r,t){var a,s;return t!==null&&!isNaN(+t)&&(Hu(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=r,r=t,t=s),a=un(r,t),mg(this,a,e),this}}function mg(e,n,r,t){var a=n._milliseconds,s=Os(n._days),i=Os(n._months);e.isValid()&&(t=t??!0,i&&Qu(e,yt(e,"Month")+i*r),s&&zu(e,"Date",yt(e,"Date")+s*r),a&&e._d.setTime(e._d.valueOf()+a*r),t&&M.updateOffset(e,s||i))}var Mp=vg(1,"add"),Vp=vg(-1,"subtract");function fg(e){return typeof e=="string"||e instanceof String}function Gp(e){return on(e)||It(e)||fg(e)||Ln(e)||jp(e)||wp(e)||e===null||e===void 0}function wp(e){var n=zn(e)&&!ri(e),r=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,i=t.length;for(a=0;a<i;a+=1)s=t[a],r=r||ae(e,s);return n&&r}function jp(e){var n=sn(e),r=!1;return n&&(r=e.filter(function(t){return!Ln(t)&&fg(e)}).length===0),n&&r}function Up(e){var n=zn(e)&&!ri(e),r=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<t.length;a+=1)s=t[a],r=r||ae(e,s);return n&&r}function Bp(e,n){var r=e.diff(n,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function qp(e,n){arguments.length===1&&(arguments[0]?Gp(arguments[0])?(e=arguments[0],n=void 0):Up(arguments[0])&&(n=arguments[0],e=void 0):(e=void 0,n=void 0));var r=e||ke(),t=Ai(r,this).startOf("day"),a=M.calendarFormat(this,t)||"sameElse",s=n&&(An(n[a])?n[a].call(this,r):n[a]);return this.format(s||this.localeData().calendar(a,this,ke(r)))}function Hp(){return new Lt(this)}function Yp(e,n){var r=on(e)?e:ke(e);return this.isValid()&&r.isValid()?(n=rn(n)||"millisecond",n==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(n).valueOf()):!1}function xp(e,n){var r=on(e)?e:ke(e);return this.isValid()&&r.isValid()?(n=rn(n)||"millisecond",n==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(n).valueOf()<r.valueOf()):!1}function Cp(e,n,r,t){var a=on(e)?e:ke(e),s=on(n)?n:ke(n);return this.isValid()&&a.isValid()&&s.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(a,r):!this.isBefore(a,r))&&(t[1]===")"?this.isBefore(s,r):!this.isAfter(s,r))):!1}function $p(e,n){var r=on(e)?e:ke(e),t;return this.isValid()&&r.isValid()?(n=rn(n)||"millisecond",n==="millisecond"?this.valueOf()===r.valueOf():(t=r.valueOf(),this.clone().startOf(n).valueOf()<=t&&t<=this.clone().endOf(n).valueOf())):!1}function Wp(e,n){return this.isSame(e,n)||this.isAfter(e,n)}function Jp(e,n){return this.isSame(e,n)||this.isBefore(e,n)}function zp(e,n,r){var t,a,s;if(!this.isValid())return NaN;if(t=Ai(e,this),!t.isValid())return NaN;switch(a=(t.utcOffset()-this.utcOffset())*6e4,n=rn(n),n){case"year":s=zt(this,t)/12;break;case"month":s=zt(this,t);break;case"quarter":s=zt(this,t)/3;break;case"second":s=(this-t)/1e3;break;case"minute":s=(this-t)/6e4;break;case"hour":s=(this-t)/36e5;break;case"day":s=(this-t-a)/864e5;break;case"week":s=(this-t-a)/6048e5;break;default:s=this-t}return r?s:Ze(s)}function zt(e,n){if(e.date()<n.date())return-zt(n,e);var r=(n.year()-e.year())*12+(n.month()-e.month()),t=e.clone().add(r,"months"),a,s;return n-t<0?(a=e.clone().add(r-1,"months"),s=(n-t)/(t-a)):(a=e.clone().add(r+1,"months"),s=(n-t)/(a-t)),-(r+s)||0}M.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";M.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Zp(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Xp(e){if(!this.isValid())return null;var n=e!==!0,r=n?this.clone().utc():this;return r.year()<0||r.year()>9999?Wt(r,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):An(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Wt(r,"Z")):Wt(r,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Qp(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",n="",r,t,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),r="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=n+'[")]',this.format(r+t+a+s)}function ec(e){e||(e=this.isUtc()?M.defaultFormatUtc:M.defaultFormat);var n=Wt(this,e);return this.localeData().postformat(n)}function nc(e,n){return this.isValid()&&(on(e)&&e.isValid()||ke(e).isValid())?un({to:this,from:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function rc(e){return this.from(ke(),e)}function tc(e,n){return this.isValid()&&(on(e)&&e.isValid()||ke(e).isValid())?un({from:this,to:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function ac(e){return this.to(ke(),e)}function Tg(e){var n;return e===void 0?this._locale._abbr:(n=Kn(e),n!=null&&(this._locale=n),this)}var Rg=nn("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function yg(){return this._locale}var ia=1e3,Tr=60*ia,oa=60*Tr,Ag=(365*400+97)*24*oa;function Rr(e,n){return(e%n+n)%n}function bg(e,n,r){return e<100&&e>=0?new Date(e+400,n,r)-Ag:new Date(e,n,r).valueOf()}function pg(e,n,r){return e<100&&e>=0?Date.UTC(e+400,n,r)-Ag:Date.UTC(e,n,r)}function sc(e){var n,r;if(e=rn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?pg:bg,e){case"year":n=r(this.year(),0,1);break;case"quarter":n=r(this.year(),this.month()-this.month()%3,1);break;case"month":n=r(this.year(),this.month(),1);break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=r(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=Rr(n+(this._isUTC?0:this.utcOffset()*Tr),oa);break;case"minute":n=this._d.valueOf(),n-=Rr(n,Tr);break;case"second":n=this._d.valueOf(),n-=Rr(n,ia);break}return this._d.setTime(n),M.updateOffset(this,!0),this}function ic(e){var n,r;if(e=rn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?pg:bg,e){case"year":n=r(this.year()+1,0,1)-1;break;case"quarter":n=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=r(this.year(),this.month()+1,1)-1;break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=oa-Rr(n+(this._isUTC?0:this.utcOffset()*Tr),oa)-1;break;case"minute":n=this._d.valueOf(),n+=Tr-Rr(n,Tr)-1;break;case"second":n=this._d.valueOf(),n+=ia-Rr(n,ia)-1;break}return this._d.setTime(n),M.updateOffset(this,!0),this}function oc(){return this._d.valueOf()-(this._offset||0)*6e4}function lc(){return Math.floor(this.valueOf()/1e3)}function dc(){return new Date(this.valueOf())}function uc(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function gc(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function kc(){return this.isValid()?this.toISOString():null}function Ec(){return ti(this)}function vc(){return Mn({},W(this))}function mc(){return W(this).overflow}function fc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}Y("N",0,0,"eraAbbr");Y("NN",0,0,"eraAbbr");Y("NNN",0,0,"eraAbbr");Y("NNNN",0,0,"eraName");Y("NNNNN",0,0,"eraNarrow");Y("y",["y",1],"yo","eraYear");Y("y",["yy",2],0,"eraYear");Y("y",["yyy",3],0,"eraYear");Y("y",["yyyy",4],0,"eraYear");j("N",bi);j("NN",bi);j("NNN",bi);j("NNNN",Nc);j("NNNNN",Oc);oe(["N","NN","NNN","NNNN","NNNNN"],function(e,n,r,t){var a=r._locale.erasParse(e,t,r._strict);a?W(r).era=a:W(r).invalidEra=e});j("y",_r);j("yy",_r);j("yyy",_r);j("yyyy",_r);j("yo",Ic);oe(["y","yy","yyy","yyyy"],Ve);oe(["yo"],function(e,n,r,t){var a;r._locale._eraYearOrdinalRegex&&(a=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?n[Ve]=r._locale.eraYearOrdinalParse(e,a):n[Ve]=parseInt(e,10)});function Tc(e,n){var r,t,a,s=this._eras||Kn("en")._eras;for(r=0,t=s.length;r<t;++r){switch(typeof s[r].since){case"string":a=M(s[r].since).startOf("day"),s[r].since=a.valueOf();break}switch(typeof s[r].until){case"undefined":s[r].until=1/0;break;case"string":a=M(s[r].until).startOf("day").valueOf(),s[r].until=a.valueOf();break}}return s}function Rc(e,n,r){var t,a,s=this.eras(),i,o,l;for(e=e.toUpperCase(),t=0,a=s.length;t<a;++t)if(i=s[t].name.toUpperCase(),o=s[t].abbr.toUpperCase(),l=s[t].narrow.toUpperCase(),r)switch(n){case"N":case"NN":case"NNN":if(o===e)return s[t];break;case"NNNN":if(i===e)return s[t];break;case"NNNNN":if(l===e)return s[t];break}else if([i,o,l].indexOf(e)>=0)return s[t]}function yc(e,n){var r=e.since<=e.until?1:-1;return n===void 0?M(e.since).year():M(e.since).year()+(n-e.offset)*r}function Ac(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].name;return""}function bc(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].narrow;return""}function pc(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].abbr;return""}function cc(){var e,n,r,t,a=this.localeData().eras();for(e=0,n=a.length;e<n;++e)if(r=a[e].since<=a[e].until?1:-1,t=this.clone().startOf("day").valueOf(),a[e].since<=t&&t<=a[e].until||a[e].until<=t&&t<=a[e].since)return(this.year()-M(a[e].since).year())*r+a[e].offset;return this.year()}function _c(e){return ae(this,"_erasNameRegex")||pi.call(this),e?this._erasNameRegex:this._erasRegex}function hc(e){return ae(this,"_erasAbbrRegex")||pi.call(this),e?this._erasAbbrRegex:this._erasRegex}function Sc(e){return ae(this,"_erasNarrowRegex")||pi.call(this),e?this._erasNarrowRegex:this._erasRegex}function bi(e,n){return n.erasAbbrRegex(e)}function Nc(e,n){return n.erasNameRegex(e)}function Oc(e,n){return n.erasNarrowRegex(e)}function Ic(e,n){return n._eraYearOrdinalRegex||_r}function pi(){var e=[],n=[],r=[],t=[],a,s,i,o,l,u=this.eras();for(a=0,s=u.length;a<s;++a)i=Nn(u[a].name),o=Nn(u[a].abbr),l=Nn(u[a].narrow),n.push(i),e.push(o),r.push(l),t.push(i),t.push(o),t.push(l);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}Y(0,["gg",2],0,function(){return this.weekYear()%100});Y(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Ga(e,n){Y(0,[e,e.length],0,n)}Ga("gggg","weekYear");Ga("ggggg","weekYear");Ga("GGGG","isoWeekYear");Ga("GGGGG","isoWeekYear");j("G",Ka);j("g",Ka);j("GG",Ee,Je);j("gg",Ee,Je);j("GGGG",di,li);j("gggg",di,li);j("GGGGG",Da,Ia);j("ggggg",Da,Ia);Kt(["gggg","ggggg","GGGG","GGGGG"],function(e,n,r,t){n[t.substr(0,2)]=Z(e)});Kt(["gg","GG"],function(e,n,r,t){n[t]=M.parseTwoDigitYear(e)});function Lc(e){return cg.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Dc(e){return cg.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Kc(){return On(this.year(),1,4)}function Pc(){return On(this.isoWeekYear(),1,4)}function Fc(){var e=this.localeData()._week;return On(this.year(),e.dow,e.doy)}function Mc(){var e=this.localeData()._week;return On(this.weekYear(),e.dow,e.doy)}function cg(e,n,r,t,a){var s;return e==null?bt(this,t,a).year:(s=On(e,t,a),n>s&&(n=s),Vc.call(this,e,n,r,t,a))}function Vc(e,n,r,t,a){var s=rg(e,n,r,t,a),i=At(s.year,0,s.dayOfYear);return this.year(i.getUTCFullYear()),this.month(i.getUTCMonth()),this.date(i.getUTCDate()),this}Y("Q",0,"Qo","quarter");j("Q",xu);oe("Q",function(e,n){n[hn]=(Z(e)-1)*3});function Gc(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}Y("D",["DD",2],"Do","date");j("D",Ee,hr);j("DD",Ee,Je);j("Do",function(e,n){return e?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient});oe(["D","DD"],En);oe("Do",function(e,n){n[En]=Z(e.match(Ee)[0])});var _g=Sr("Date",!0);Y("DDD",["DDDD",3],"DDDo","dayOfYear");j("DDD",La);j("DDDD",Cu);oe(["DDD","DDDD"],function(e,n,r){r._dayOfYear=Z(e)});function wc(e){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?n:this.add(e-n,"d")}Y("m",["mm",2],0,"minute");j("m",Ee,ui);j("mm",Ee,Je);oe(["m","mm"],an);var jc=Sr("Minutes",!1);Y("s",["ss",2],0,"second");j("s",Ee,ui);j("ss",Ee,Je);oe(["s","ss"],Sn);var Uc=Sr("Seconds",!1);Y("S",0,0,function(){return~~(this.millisecond()/100)});Y(0,["SS",2],0,function(){return~~(this.millisecond()/10)});Y(0,["SSS",3],0,"millisecond");Y(0,["SSSS",4],0,function(){return this.millisecond()*10});Y(0,["SSSSS",5],0,function(){return this.millisecond()*100});Y(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});Y(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});Y(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});Y(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});j("S",La,xu);j("SS",La,Je);j("SSS",La,Cu);var Vn,hg;for(Vn="SSSS";Vn.length<=9;Vn+="S")j(Vn,_r);function Bc(e,n){n[$n]=Z(("0."+e)*1e3)}for(Vn="S";Vn.length<=9;Vn+="S")oe(Vn,Bc);hg=Sr("Milliseconds",!1);Y("z",0,0,"zoneAbbr");Y("zz",0,0,"zoneName");function qc(){return this._isUTC?"UTC":""}function Hc(){return this._isUTC?"Coordinated Universal Time":""}var O=Lt.prototype;O.add=Mp;O.calendar=qp;O.clone=Hp;O.diff=zp;O.endOf=ic;O.format=ec;O.from=nc;O.fromNow=rc;O.to=tc;O.toNow=ac;O.get=QA;O.invalidAt=mc;O.isAfter=Yp;O.isBefore=xp;O.isBetween=Cp;O.isSame=$p;O.isSameOrAfter=Wp;O.isSameOrBefore=Jp;O.isValid=Ec;O.lang=Rg;O.locale=Tg;O.localeData=yg;O.max=Ep;O.min=kp;O.parsingFlags=vc;O.set=eb;O.startOf=sc;O.subtract=Vp;O.toArray=uc;O.toObject=gc;O.toDate=dc;O.toISOString=Xp;O.inspect=Qp;typeof Symbol<"u"&&Symbol.for!=null&&(O[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});O.toJSON=kc;O.toString=Zp;O.unix=lc;O.valueOf=oc;O.creationData=fc;O.eraName=Ac;O.eraNarrow=bc;O.eraAbbr=pc;O.eraYear=cc;O.year=Ju;O.isLeapYear=XA;O.weekYear=Lc;O.isoWeekYear=Dc;O.quarter=O.quarters=Gc;O.month=eg;O.daysInMonth=db;O.week=O.weeks=Tb;O.isoWeek=O.isoWeeks=Rb;O.weeksInYear=Fc;O.weeksInWeekYear=Mc;O.isoWeeksInYear=Kc;O.isoWeeksInISOWeekYear=Pc;O.date=_g;O.day=O.days=Db;O.weekday=Kb;O.isoWeekday=Pb;O.dayOfYear=wc;O.hour=O.hours=Ub;O.minute=O.minutes=jc;O.second=O.seconds=Uc;O.millisecond=O.milliseconds=hg;O.utcOffset=pp;O.utc=_p;O.local=hp;O.parseZone=Sp;O.hasAlignedHourOffset=Np;O.isDST=Op;O.isLocal=Lp;O.isUtcOffset=Dp;O.isUtc=Eg;O.isUTC=Eg;O.zoneAbbr=qc;O.zoneName=Hc;O.dates=nn("dates accessor is deprecated. Use date instead.",_g);O.months=nn("months accessor is deprecated. Use month instead",eg);O.years=nn("years accessor is deprecated. Use year instead",Ju);O.zone=nn("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",cp);O.isDSTShifted=nn("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ip);function Yc(e){return ke(e*1e3)}function xc(){return ke.apply(null,arguments).parseZone()}function Sg(e){return e}var se=si.prototype;se.calendar=LA;se.longDateFormat=FA;se.invalidDate=VA;se.ordinal=jA;se.preparse=Sg;se.postformat=Sg;se.relativeTime=BA;se.pastFuture=qA;se.set=OA;se.eras=Tc;se.erasParse=Rc;se.erasConvertYear=yc;se.erasAbbrRegex=hc;se.erasNameRegex=_c;se.erasNarrowRegex=Sc;se.months=sb;se.monthsShort=ib;se.monthsParse=lb;se.monthsRegex=gb;se.monthsShortRegex=ub;se.week=Eb;se.firstDayOfYear=fb;se.firstDayOfWeek=mb;se.weekdays=Sb;se.weekdaysMin=Ob;se.weekdaysShort=Nb;se.weekdaysParse=Lb;se.weekdaysRegex=Fb;se.weekdaysShortRegex=Mb;se.weekdaysMinRegex=Vb;se.isPM=wb;se.meridiem=Bb;function la(e,n,r,t){var a=Kn(),s=yn().set(t,n);return a[r](s,e)}function Ng(e,n,r){if(Ln(e)&&(n=e,e=void 0),e=e||"",n!=null)return la(e,n,r,"month");var t,a=[];for(t=0;t<12;t++)a[t]=la(e,t,r,"month");return a}function ci(e,n,r,t){typeof e=="boolean"?(Ln(n)&&(r=n,n=void 0),n=n||""):(n=e,r=n,e=!1,Ln(n)&&(r=n,n=void 0),n=n||"");var a=Kn(),s=e?a._week.dow:0,i,o=[];if(r!=null)return la(n,(r+s)%7,t,"day");for(i=0;i<7;i++)o[i]=la(n,(i+s)%7,t,"day");return o}function Cc(e,n){return Ng(e,n,"months")}function $c(e,n){return Ng(e,n,"monthsShort")}function Wc(e,n,r){return ci(e,n,r,"weekdays")}function Jc(e,n,r){return ci(e,n,r,"weekdaysShort")}function zc(e,n,r){return ci(e,n,r,"weekdaysMin")}Gn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var n=e%10,r=Z(e%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return e+r}});M.lang=nn("moment.lang is deprecated. Use moment.locale instead.",Gn);M.langData=nn("moment.langData is deprecated. Use moment.localeData instead.",Kn);var cn=Math.abs;function Zc(){var e=this._data;return this._milliseconds=cn(this._milliseconds),this._days=cn(this._days),this._months=cn(this._months),e.milliseconds=cn(e.milliseconds),e.seconds=cn(e.seconds),e.minutes=cn(e.minutes),e.hours=cn(e.hours),e.months=cn(e.months),e.years=cn(e.years),this}function Og(e,n,r,t){var a=un(n,r);return e._milliseconds+=t*a._milliseconds,e._days+=t*a._days,e._months+=t*a._months,e._bubble()}function Xc(e,n){return Og(this,e,n,1)}function Qc(e,n){return Og(this,e,n,-1)}function Io(e){return e<0?Math.floor(e):Math.ceil(e)}function e_(){var e=this._milliseconds,n=this._days,r=this._months,t=this._data,a,s,i,o,l;return e>=0&&n>=0&&r>=0||e<=0&&n<=0&&r<=0||(e+=Io(Ls(r)+n)*864e5,n=0,r=0),t.milliseconds=e%1e3,a=Ze(e/1e3),t.seconds=a%60,s=Ze(a/60),t.minutes=s%60,i=Ze(s/60),t.hours=i%24,n+=Ze(i/24),l=Ze(Ig(n)),r+=l,n-=Io(Ls(l)),o=Ze(r/12),r%=12,t.days=n,t.months=r,t.years=o,this}function Ig(e){return e*4800/146097}function Ls(e){return e*146097/4800}function n_(e){if(!this.isValid())return NaN;var n,r,t=this._milliseconds;if(e=rn(e),e==="month"||e==="quarter"||e==="year")switch(n=this._days+t/864e5,r=this._months+Ig(n),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(n=this._days+Math.round(Ls(this._months)),e){case"week":return n/7+t/6048e5;case"day":return n+t/864e5;case"hour":return n*24+t/36e5;case"minute":return n*1440+t/6e4;case"second":return n*86400+t/1e3;case"millisecond":return Math.floor(n*864e5)+t;default:throw new Error("Unknown unit "+e)}}function Pn(e){return function(){return this.as(e)}}var Lg=Pn("ms"),r_=Pn("s"),t_=Pn("m"),a_=Pn("h"),s_=Pn("d"),i_=Pn("w"),o_=Pn("M"),l_=Pn("Q"),d_=Pn("y"),u_=Lg;function g_(){return un(this)}function k_(e){return e=rn(e),this.isValid()?this[e+"s"]():NaN}function rr(e){return function(){return this.isValid()?this._data[e]:NaN}}var E_=rr("milliseconds"),v_=rr("seconds"),m_=rr("minutes"),f_=rr("hours"),T_=rr("days"),R_=rr("months"),y_=rr("years");function A_(){return Ze(this.days()/7)}var _n=Math.round,vr={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function b_(e,n,r,t,a){return a.relativeTime(n||1,!!r,e,t)}function p_(e,n,r,t){var a=un(e).abs(),s=_n(a.as("s")),i=_n(a.as("m")),o=_n(a.as("h")),l=_n(a.as("d")),u=_n(a.as("M")),d=_n(a.as("w")),k=_n(a.as("y")),v=s<=r.ss&&["s",s]||s<r.s&&["ss",s]||i<=1&&["m"]||i<r.m&&["mm",i]||o<=1&&["h"]||o<r.h&&["hh",o]||l<=1&&["d"]||l<r.d&&["dd",l];return r.w!=null&&(v=v||d<=1&&["w"]||d<r.w&&["ww",d]),v=v||u<=1&&["M"]||u<r.M&&["MM",u]||k<=1&&["y"]||["yy",k],v[2]=n,v[3]=+e>0,v[4]=t,b_.apply(null,v)}function c_(e){return e===void 0?_n:typeof e=="function"?(_n=e,!0):!1}function __(e,n){return vr[e]===void 0?!1:n===void 0?vr[e]:(vr[e]=n,e==="s"&&(vr.ss=n-1),!0)}function h_(e,n){if(!this.isValid())return this.localeData().invalidDate();var r=!1,t=vr,a,s;return typeof e=="object"&&(n=e,e=!1),typeof e=="boolean"&&(r=e),typeof n=="object"&&(t=Object.assign({},vr,n),n.s!=null&&n.ss==null&&(t.ss=n.s-1)),a=this.localeData(),s=p_(this,!r,t,a),r&&(s=a.pastFuture(+this,s)),a.postformat(s)}var as=Math.abs;function ur(e){return(e>0)-(e<0)||+e}function wa(){if(!this.isValid())return this.localeData().invalidDate();var e=as(this._milliseconds)/1e3,n=as(this._days),r=as(this._months),t,a,s,i,o=this.asSeconds(),l,u,d,k;return o?(t=Ze(e/60),a=Ze(t/60),e%=60,t%=60,s=Ze(r/12),r%=12,i=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",u=ur(this._months)!==ur(o)?"-":"",d=ur(this._days)!==ur(o)?"-":"",k=ur(this._milliseconds)!==ur(o)?"-":"",l+"P"+(s?u+s+"Y":"")+(r?u+r+"M":"")+(n?d+n+"D":"")+(a||t||e?"T":"")+(a?k+a+"H":"")+(t?k+t+"M":"")+(e?k+i+"S":"")):"P0D"}var ne=Va.prototype;ne.isValid=Rp;ne.abs=Zc;ne.add=Xc;ne.subtract=Qc;ne.as=n_;ne.asMilliseconds=Lg;ne.asSeconds=r_;ne.asMinutes=t_;ne.asHours=a_;ne.asDays=s_;ne.asWeeks=i_;ne.asMonths=o_;ne.asQuarters=l_;ne.asYears=d_;ne.valueOf=u_;ne._bubble=e_;ne.clone=g_;ne.get=k_;ne.milliseconds=E_;ne.seconds=v_;ne.minutes=m_;ne.hours=f_;ne.days=T_;ne.weeks=A_;ne.months=R_;ne.years=y_;ne.humanize=h_;ne.toISOString=wa;ne.toString=wa;ne.toJSON=wa;ne.locale=Tg;ne.localeData=yg;ne.toIsoString=nn("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",wa);ne.lang=Rg;Y("X",0,0,"unix");Y("x",0,0,"valueOf");j("x",Ka);j("X",CA);oe("X",function(e,n,r){r._d=new Date(parseFloat(e)*1e3)});oe("x",function(e,n,r){r._d=new Date(Z(e))});//! moment.js
M.version="2.30.1";SA(ke);M.fn=O;M.min=vp;M.max=mp;M.now=fp;M.utc=yn;M.unix=Yc;M.months=Cc;M.isDate=It;M.locale=Gn;M.invalid=Oa;M.duration=un;M.isMoment=on;M.weekdays=Wc;M.parseZone=xc;M.localeData=Kn;M.isDuration=Jt;M.monthsShort=$c;M.weekdaysMin=zc;M.defineLocale=mi;M.updateLocale=xb;M.locales=Cb;M.weekdaysShort=Jc;M.normalizeUnits=rn;M.relativeTimeRounding=c_;M.relativeTimeThreshold=__;M.calendarFormat=Bp;M.prototype=O;M.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var Ur=(e=>(e.INNVILGET="INNVILGET",e.AVSLAG="AVSLAG",e))(Ur||{});const S_="_fritekstItem_1kqqb_1",N_={fritekstItem:S_},O_=Na(1500),I_=ei(3),L_=(e,n,r)=>{const t=n.filter(s=>s.vilkarStatus===ct.IKKE_OPPFYLT);if(t.length===0)return E.jsx(ye,{id:"VedtakForm.UttaksperioderIkkeGyldig"});if(!(r!=null&&r.avslagsarsak))throw new Error("Ingen behandlingsresultat eller avslagsårsak finnes");return`${e(t[0].vilkarType,In.VILKAR_TYPE)}: ${e(r.avslagsarsak,In.AVSLAGSARSAK,t[0].vilkarType)}`},Dg=({vilkar:e,behandlingsresultat:n,språkKode:r,erReadOnly:t,alleKodeverk:a,skalBrukeOverstyrendeFritekstBrev:s})=>{const{formState:{isDirty:i}}=pr(),o=Rt(a),l=d=>d!==void 0||i,u=L_(o,e,n);return E.jsxs(E.Fragment,{children:[u&&E.jsxs(E.Fragment,{children:[E.jsx(Ye,{size:"small",children:E.jsx(ye,{id:"VedtakForm.ArsakTilAvslag"})}),E.jsx(Qe,{size:"small",children:u}),E.jsx(be,{sixteenPx:!0})]}),!s&&E.jsxs(E.Fragment,{children:[E.jsx(be,{sixteenPx:!0}),E.jsx(ra,{name:"begrunnelse",label:E.jsx(ye,{id:"VedtakForm.Fritekst"}),validate:[xy(l),I_,O_,ta],maxLength:1500,readOnly:t,parse:Zt,badges:[{type:"info",titleText:xs(r)}]})]}),t&&(n==null?void 0:n.avslagsarsakFritekst)&&E.jsxs("span",{children:[E.jsx(be,{twentyPx:!0}),E.jsx(wn,{children:E.jsx(ye,{id:"VedtakForm.Fritekst"})}),E.jsx(be,{eightPx:!0}),E.jsx("div",{className:N_.fritekstItem,children:Xn(n.avslagsarsakFritekst)})]})]})};Dg.__docgenInfo={description:"",methods:[],displayName:"VedtakAvslagArsakOgBegrunnelsePanel",props:{vilkar:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const Kg=({ytelseTypeKode:e,revurderingsÅrsakString:n,isReadOnly:r,beregningsresultat:t,språkKode:a,behandlingsresultat:s,beregningErManueltFastsatt:i,skalBrukeOverstyrendeFritekstBrev:o})=>E.jsxs(E.Fragment,{children:[e===z.ENGANGSSTONAD&&t&&"antallBarn"in t&&E.jsx(Jn,{children:E.jsxs(Wn,{children:[E.jsxs(Me,{children:[E.jsx(wn,{children:E.jsx(ye,{id:"VedtakForm.beregnetTilkjentYtelse"})}),E.jsx(Ye,{size:"small",children:Md(t.beregnetTilkjentYtelse)})]}),E.jsxs(Me,{children:[E.jsx(wn,{children:E.jsx(ye,{id:"VedtakForm.AntallBarn"})}),E.jsx(Ye,{size:"small",children:t.antallBarn})]})]})}),(e===z.FORELDREPENGER||e===z.SVANGERSKAPSPENGER)&&E.jsxs(E.Fragment,{children:[n&&E.jsxs(E.Fragment,{children:[E.jsx(Ye,{size:"small",children:E.jsx(ye,{id:"VedtakForm.Revurdering.Aarsak"})}),E.jsx(Qe,{size:"small",children:n}),E.jsx(be,{eightPx:!0})]}),!o&&i&&E.jsx(Ot,{isReadOnly:r,språkKode:a,behandlingsresultat:s,labelTextCode:"VedtakForm.Fritekst.Beregningsgrunnlag"})]})]});Kg.__docgenInfo={description:"",methods:[],displayName:"VedtakInnvilgetRevurderingPanel",props:{ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},revurderingsÅrsakString:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},beregningsresultat:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const Pg=({revurderingsÅrsakString:e,språkKode:n,isReadOnly:r,behandlingsresultat:t,beregningErManueltFastsatt:a,skalBrukeOverstyrendeFritekstBrev:s})=>E.jsxs(E.Fragment,{children:[E.jsx(Ye,{size:"small",children:E.jsx(ye,{id:"VedtakForm.Revurdering.Aarsak"})}),e&&E.jsx(Qe,{size:"small",children:e}),!s&&a&&E.jsx(Ot,{isReadOnly:r,språkKode:n,behandlingsresultat:t,labelTextCode:"VedtakForm.Fritekst.Beregningsgrunnlag"})]});Pg.__docgenInfo={description:"",methods:[],displayName:"VedtakOpphorRevurderingPanel",props:{revurderingsÅrsakString:{required:!1,tsType:{name:"string"},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},behandlingsresultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const Lo=(e,n,r,t,a)=>s=>{if(s.preventDefault(),!e||(e?!!t&&!!r:!!a)){const o={fritekst:e?t:a,dokumentMal:e?Ps.FRITEKST:void 0,tittel:e?r:void 0,gjelderVedtak:!0,automatiskVedtaksbrev:e?void 0:!0};n(o)}},D_=(e=[])=>e.map(({behandlingArsakType:n})=>n).some(n=>n===mn.ETTER_KLAGE||n===mn.KLAGE_U_INNTK||n===mn.KLAGE_M_INNTK),K_=(e,n)=>{if(e===void 0||e.length<1)return;const r=[],t=e.find(s=>s===mn.RE_ENDRING_FRA_BRUKER),a=e.filter(s=>s!==mn.RE_ENDRING_FRA_BRUKER).map(s=>n(s,In.BEHANDLING_AARSAK));return t!==void 0&&r.push(n(t,In.BEHANDLING_AARSAK)),r.push(...a),r.join(", ")},P_=(e,n)=>{const r=e?Ur.INNVILGET:Ur.AVSLAG;return(n?Ur.INNVILGET:Ur.AVSLAG)!==r},F_=(e,n)=>!n||n.length<1?"":n.map(r=>e(r,In.KONSEKVENS_FOR_YTELSEN)).join(" og "),Do=(e,n,r)=>n?r?e&&"beregnetTilkjentYtelse"in n&&"beregnetTilkjentYtelse"in r?n.beregnetTilkjentYtelse!==r.beregnetTilkjentYtelse:"antallBarn"in n&&"antallBarn"in r?n.antallBarn!==r.antallBarn:!1:!0:!1,Fg=(e,n,r)=>P_(n,r)?n?"VedtakForm.Resultat.EndretTilInnvilget":"VedtakForm.Resultat.EndretTilAvslag":e?Do(e,n,r)?"VedtakForm.Resultat.EndretTilkjentYtelse":"VedtakForm.Resultat.IngenEndring":Do(e,n,r)?"VedtakForm.Resultat.EndretAntallBarn":"VedtakForm.Resultat.IngenEndring",M_=(e,n,r,t,a,s,i)=>{if(n===z.ENGANGSSTONAD)return e.formatMessage({id:Fg(!0,s,i)});const o=F_(r,a);return`${o}${o!==""?t:". "}`},V_=e=>e.aksjonspunktKoder.map(n=>({kode:Pu(n,ue.FORESLA_VEDTAK,ue.FORESLA_VEDTAK_MANUELT,ue.VURDERE_ANNEN_YTELSE,ue.VURDERE_DOKUMENT,ue.VURDERE_INNTEKTSMELDING_KLAGE,ue.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,ue.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING),begrunnelse:e.begrunnelse,fritekstBrev:e.brødtekst,skalBrukeOverstyrendeFritekstBrev:!!e.brødtekst,overskrift:e.overskrift})),G_=(e,n)=>{var r,t;return{aksjonspunktKoder:e.filter(a=>a.kanLoses).map(a=>a.definisjon),overskrift:Xn((r=n.behandlingsresultat)==null?void 0:r.overskrift),brødtekst:Xn((t=n.behandlingsresultat)==null?void 0:t.fritekstbrev)}},Mg=({behandling:e,readOnly:n,aksjonspunkter:r,previewCallback:t,ytelseTypeKode:a,beregningsresultat:s,alleKodeverk:i,tilbakekrevingvalg:o,simuleringResultat:l,vilkar:u,beregningErManueltFastsatt:d,beregningsresultatOriginalBehandling:k,submitCallback:v,formData:b,setFormData:h})=>{const T=dn(),y=nu({defaultValues:b||G_(r,e)}),c=y.watch("begrunnelse"),p=y.watch("overskrift"),A=y.watch("brødtekst"),{behandlingsresultat:F,sprakkode:w,behandlingÅrsaker:B}=e,N=f.useMemo(()=>D_(e.behandlingÅrsaker),[e.behandlingÅrsaker]),_=f.useMemo(()=>K_(B.map(D=>D.behandlingArsakType),Rt(i)),[B]),V=f.useMemo(()=>Vu(i,l,o),[l,o]);let U="";if(F&&Ds(F.type)){const D=F.konsekvenserForYtelsen;U=M_(T,a,Rt(i),V,D,s,k)}F&&Ks(F.type)&&(U=T.formatMessage({id:Fg(!1,s,k)})),F&&nd(F.type)&&F.opphørsdato&&(U=T.formatMessage({id:"VedtakForm.Revurdering.Opphoerer"},{dato:M(F.opphørsdato).format(Jv)}));const H=Lo(!0,t,p,A,c),L=Lo(!1,t,p,A,c);return E.jsx(Nu,{formMethods:y,onSubmit:D=>v(V_(D)),setDataOnUnmount:h,children:E.jsx(ni,{behandling:e,vedtakstatusTekst:U,aksjonspunkter:r,readOnly:n,previewAutomatiskBrev:L,previewOverstyrtBrev:H,tilbakekrevingtekst:V,erBehandlingEtterKlage:N,renderPanel:(D,x,$,Q)=>x?E.jsx(Kg,{ytelseTypeKode:a,revurderingsÅrsakString:_,isReadOnly:n,beregningsresultat:s,språkKode:w,behandlingsresultat:F,beregningErManueltFastsatt:d,skalBrukeOverstyrendeFritekstBrev:D}):$?E.jsx(Dg,{vilkar:u,behandlingsresultat:F,språkKode:w,erReadOnly:n,alleKodeverk:i,skalBrukeOverstyrendeFritekstBrev:D}):Q?E.jsx(Pg,{revurderingsÅrsakString:_,isReadOnly:n,behandlingsresultat:F,språkKode:w,beregningErManueltFastsatt:d,skalBrukeOverstyrendeFritekstBrev:D}):null})})};Mg.__docgenInfo={description:"",methods:[],displayName:"VedtakRevurderingForm",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!1}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"tittel",value:{name:"string",required:!1}},{key:"gjelderVedtak",value:{name:"boolean",required:!0}},{key:"automatiskVedtaksbrev",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},beregningsresultat:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Vilkar[]"},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},beregningsresultatOriginalBehandling:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FORESLA_VEDTAK>`,elements:[{name:"signature",type:"object",raw:`{
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
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FORESLA_VEDTAK_MANUELT>`,elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}],raw:"RevurderingVedtakAksjonspunkter[]"},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},formData:{required:!1,tsType:{name:"FormValues"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"FormValues"},name:"data"}],return:{name:"void"}}},description:""}}};const w_={"VedtakForm.ForslagTilVedtak":"Vedtak","VedtakForm.BehandlingHenlagt":"Behandlingen er henlagt","VedtakForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakForm.ResultatKlageAvvist":"Klagen er avvist","VedtakForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakForm.SvangerskapspengerIkkeInnvilget":"Svangerskapspenger er avslått","VedtakForm.ForeldrepengerIkkeInnvilget":"Foreldrepenger er avslått","VedtakForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakForm.VilkarStatusInnvilget":"Engangsstønad er innvilget","VedtakForm.VilkarStatusInnvilgetEngangsstonad":"Engangsstønad er innvilget","VedtakForm.SvangerskapspengerInnvilget":"Svangerskapspenger er innvilget","VedtakForm.VilkarStatusInnvilgetForeldrepenger":"Foreldrepenger er innvilget","VedtakForm.OpprettTilbakekrOgInntrekk":"Feilutbetaling med tilbakekreving hvor beløp er redusert med inntrekk","VedtakForm.TilGodkjenning":"Til godkjenning","VedtakForm.FattVedtak":"Fatt vedtak","VedtakForm.ForhandvisBrev":"Forhåndsvis brev","VedtakForm.beregnetTilkjentYtelse":"Beregnet engangsstønad","VedtakForm.AntallBarn":"Antall barn","VedtakForm.vedtak":"Vedtak","VedtakForm.Resultat":"Resultat","VedtakForm.ArsakTilAvslag":"Årsak til avslag","VedtakForm.Fritekst":"Fritekst i brev til søker","VedtakForm.Fritekst.Beregningsgrunnlag":"Fritekst i brev til søker som handler om fastsettelse av beregningsgrunnlaget","VedtakForm.VurderAnnenYtelse":"Påvirker den åpne Gosys-oppgaven «Vurder konsekvens for ytelse» behandlingen?","VedtakForm.VurderDokument":"Påvirker den åpne Gosys-oppgaven «Vurder dokument» behandlingen?","VedtakForm.VurderInntektsmeldingKlage":"Det er en åpen klagesak, og det er mottatt ny inntektsmelding. Vurder beregningsgrunnlaget på nytt og behandle revurdering og klage under ett.","VedtakForm.Resultat.IngenEndring":"Ingen endring","VedtakForm.Resultat.EndretTilAvslag":"Endret til Avslag","VedtakForm.Resultat.EndretTilInnvilget":"Endret til Innvilget","VedtakForm.Resultat.EndretTilkjentYtelse":"Endret beregnet stønad","VedtakForm.KontrollerRevurderingsbehandling":"Beregningsgrunnlaget er endret til ugunst for søker. Skal det sendes varsel?","VedtakForm.UttaksperioderIkkeGyldig":"Søker har ikke noen gyldig uttaksperiode","VedtakForm.Revurdering.Aarsak":"Årsak til revurdering","VedtakForm.Revurdering.Opphoerer":"Ytelsen opphører f.o.m. {dato}","VedtakForm.ManuellOverstyring":"Overstyr automatisk brev","VedtakForm.Overskrift":"Overskrift","VedtakForm.Innhold":"Innhold i brev til søker","VedtakForm.SvpFritektsBrevModal.Ok":"Ok","VedtakForm.SvpFritektsBrevModal.IngenAutomatiskVedtaksbrev":"I denne behandlingen er det ikke automatisk vedtaksbrev. Du må velge 'Overstyr automatisk brev' og skrive fritekstbrev.","VedtakForm.SvpFritektsBrevModal.IngenAutomatiskVedtaksbrevImage":"Ingen automatisk vedtaksbrev.","VedtakForm.SvpFritektsBrevModal.ModalDescription":"Informasjonsboks om ingen automatisk vedtaksbrev. Fritekstbrev er nødvendig.","VedtakFellesPanel.RedigerVedtaksbrev":"Rediger vedtaksbrev","VedtakFellesPanel.AutomatiskVedtaksbrev":"Automatisk vedtaksbrev","VedtakFellesPanel.UtkastVedtaksbrev":"Utkast vedtaksbrev","VedtakFellesPanel.ForkastManueltBrev":"Forkast manuelt brev","VedtakFellesPanel.Forklaring":"Tekst fra det automatisk genererte brevet kan kopieres og limes inn i det manuelle brevet","VedtakFellesPanel.Forkast":"Dersom du forkaster det manuelle brevet, vil det erstattes av det automatisk genererte brevet","VedtakFellesPanel.Ok":"Forkast manuelt brev","FritekstBrevPanel.Endret":"Endret av saksbehandler","FritekstBrevPanel.ManueltVedtaksbrev":"Manuelt vedtaksbrev","FritekstBrevPanel.ForhandsvisManueltVedtaksbrev":"Forhåndsvis manuelt brev","VedtakHelpTextPanel.Vurder":"Vurder følgende før du sender til godkjenning:","Malform.Beskrivelse":"Foretrukket språk"},j_=Ge(w_),U_=[ue.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD],B_=(e,n)=>{var s;if(!n||!e)return!1;const r=e.find(i=>U_.some(o=>o===i.definisjon)&&i.status===kr.UTFORT),a=(s=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:s.find(i=>i.overstyrtPrAar||i.overstyrtPrAar===0);return!!r||!!a},_i=({behandling:e,beregningresultatDagytelse:n,beregningresultatEngangsstonad:r,tilbakekrevingvalg:t,simuleringResultat:a,beregningsgrunnlag:s,vilkar:i,beregningsresultatOriginalBehandling:o,aksjonspunkter:l,isReadOnly:u,previewCallback:d,submitCallback:k,ytelseTypeKode:v,alleKodeverk:b,formData:h,setFormData:T})=>{const y=B_(l,s),c=v===z.ENGANGSSTONAD?r:n;let p;return o&&(p=v===z.ENGANGSSTONAD?o["beregningsresultat-engangsstonad"]:o["beregningsresultat-foreldrepenger"]),E.jsxs(UE,{value:j_,children:[e.type!==Ue.REVURDERING&&E.jsx(ju,{behandling:e,submitCallback:k,readOnly:u,previewCallback:d,tilbakekrevingvalg:t,simuleringResultat:a,beregningsresultat:c,aksjonspunkter:l,ytelseTypeKode:v,alleKodeverk:b,vilkar:i,beregningErManueltFastsatt:y,formData:h,setFormData:T}),e.type===Ue.REVURDERING&&E.jsx(Mg,{behandling:e,submitCallback:k,readOnly:u,previewCallback:d,tilbakekrevingvalg:t,simuleringResultat:a,beregningsresultat:c,aksjonspunkter:l,ytelseTypeKode:v,alleKodeverk:b,vilkar:i,beregningErManueltFastsatt:y,beregningsresultatOriginalBehandling:p,formData:h,setFormData:T})]})};_i.__docgenInfo={description:"",methods:[],displayName:"VedtakProsessIndex",props:{beregningresultatDagytelse:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}}]}},description:""},vilkar:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"any"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const ve={uuid:"1",versjon:1,type:Ue.FORSTEGANGSSOKNAD,status:xe.BEHANDLING_UTREDES,sprakkode:"NO",behandlingsresultat:{type:_e.INNVILGET},behandlingPaaVent:!1,behandlingHenlagt:!1,behandlingÅrsaker:[{behandlingArsakType:mn.ANNET}]},q_=[{lovReferanse:"§§Dette er en lovreferanse",vilkarType:Fs.FODSELSVILKARET_MOR,vilkarStatus:ct.OPPFYLT,overstyrbar:!0}],Vg=[{definisjon:ue.FORESLA_VEDTAK,kanLoses:!0}],Oe={antallBarn:1,beregnetTilkjentYtelse:1e4},W_={title:"prosess/prosess-vedtak",component:_i},me=({behandling:e,beregningresultatDagytelse:n,beregningresultatEngangsstonad:r,ytelseTypeKode:t,isReadOnly:a,submitCallback:s,beregningsgrunnlag:i,aksjonspunkter:o,beregningsresultatOriginalBehandling:l,vilkar:u,previewCallback:d})=>E.jsx(_i,{behandling:e,aksjonspunkter:o||Vg,submitCallback:s,isReadOnly:a,isAksjonspunktOpen:!0,readOnlySubmitButton:!1,status:"",vilkar:u||q_,alleMerknaderFraBeslutter:{},setFormData:()=>{},beregningresultatDagytelse:n,beregningresultatEngangsstonad:r,previewCallback:d||de("button-click"),ytelseTypeKode:t,alleKodeverk:Uv,beregningsgrunnlag:i,beregningsresultatOriginalBehandling:l,fagsak:{}}),Br=me.bind({});Br.args={behandling:ve,beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:de("button-click")};const qr=me.bind({});qr.args={behandling:{...ve,status:xe.AVSLUTTET},beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:de("button-click")};const Hr=me.bind({});Hr.args={behandling:{...ve,status:xe.AVSLUTTET,behandlingsresultat:{vedtaksbrev:"FRITEKST",overskrift:"Dette er en overskrift",fritekstbrev:"Dette er innholdet i brevet",type:_e.INNVILGET}},beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:de("button-click")};const Yr=me.bind({});Yr.args={behandling:{...ve,behandlingsresultat:{type:_e.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:de("button-click")};const xr=me.bind({});xr.args={behandling:{...ve,status:xe.AVSLUTTET,behandlingsresultat:{type:_e.AVSLATT}},beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:de("button-click")};const Cr=me.bind({});Cr.args={behandling:ve,beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:de("button-click")};const $r=me.bind({});$r.args={behandling:{...ve,behandlingsresultat:{type:_e.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:de("button-click")};const Wr=me.bind({});Wr.args={behandling:ve,beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},aksjonspunkter:[...Vg,{definisjon:ue.VURDERE_ANNEN_YTELSE,status:kr.OPPRETTET,begrunnelse:void 0,kanLoses:!1,toTrinnsBehandling:!0},{definisjon:ue.VURDERE_DOKUMENT,status:kr.OPPRETTET,begrunnelse:void 0,kanLoses:!1},{definisjon:ue.VURDERE_INNTEKTSMELDING_KLAGE,status:kr.OPPRETTET,begrunnelse:void 0,kanLoses:!1},{definisjon:ue.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,status:kr.OPPRETTET,begrunnelse:void 0,kanLoses:!1,toTrinnsBehandling:!0}],isReadOnly:!1,submitCallback:de("button-click")};const Jr=me.bind({});Jr.args={behandling:ve,beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:z.ENGANGSSTONAD,isReadOnly:!1,submitCallback:de("button-click")};const zr=me.bind({});zr.args={behandling:{...ve,status:xe.AVSLUTTET},beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:z.ENGANGSSTONAD,isReadOnly:!0,submitCallback:de("button-click")};const Zr=me.bind({});Zr.args={behandling:ve,beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:z.ENGANGSSTONAD,isReadOnly:!1,submitCallback:de("button-click")};const Xr=me.bind({});Xr.args={behandling:ve,beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:z.ENGANGSSTONAD,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:de("button-click")};const Qr=me.bind({});Qr.args={behandling:{...ve,behandlingsresultat:{type:_e.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:z.ENGANGSSTONAD,isReadOnly:!1,submitCallback:de("button-click")};const et=me.bind({});et.args={behandling:ve,ytelseTypeKode:z.SVANGERSKAPSPENGER,isReadOnly:!1,submitCallback:de("button-click")};const nt=me.bind({});nt.args={behandling:{...ve,type:Ue.REVURDERING,behandlingsresultat:{type:_e.INNVILGET,konsekvenserForYtelsen:[Ce.ENDRING_I_BEREGNING_OG_UTTAK,Ce.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:de("button-click")};const rt=me.bind({});rt.args={behandling:{...ve,type:Ue.REVURDERING,status:xe.AVSLUTTET,behandlingsresultat:{type:_e.INNVILGET,konsekvenserForYtelsen:[Ce.ENDRING_I_BEREGNING_OG_UTTAK,Ce.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:de("button-click")};const tt=me.bind({});tt.args={behandling:{...ve,type:Ue.REVURDERING,behandlingsresultat:{type:_e.INNVILGET,konsekvenserForYtelsen:[Ce.ENDRING_I_BEREGNING_OG_UTTAK,Ce.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:de("button-click")};const at=me.bind({});at.args={behandling:{...ve,type:Ue.REVURDERING,status:xe.AVSLUTTET,behandlingsresultat:{type:_e.INNVILGET,konsekvenserForYtelsen:[Ce.ENDRING_I_BEREGNING_OG_UTTAK,Ce.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:de("button-click")};const st=me.bind({});st.args={behandling:{...ve,type:Ue.REVURDERING,status:xe.AVSLUTTET,behandlingsresultat:{vedtaksbrev:"FRITEKST",overskrift:"Dette er en overskrift",fritekstbrev:"Dette er innholdet i brevet",type:_e.INNVILGET,konsekvenserForYtelsen:[Ce.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:de("button-click")};const it=me.bind({});it.args={behandling:{...ve,type:Ue.REVURDERING,behandlingsresultat:{type:_e.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningsresultatOriginalBehandling:{"beregningsresultat-foreldrepenger":{...Oe}},ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!1,submitCallback:de("button-click")};const ot=me.bind({});ot.args={behandling:{...ve,type:Ue.REVURDERING,status:xe.AVSLUTTET,behandlingsresultat:{type:_e.AVSLATT}},beregningsresultatOriginalBehandling:{"beregningsresultat-foreldrepenger":{...Oe}},ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:de("button-click")};const lt=me.bind({});lt.args={behandling:{...ve,type:Ue.REVURDERING,behandlingsresultat:{type:_e.OPPHOR,opphørsdato:"2024-11-01"}},beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,isReadOnly:!0,submitCallback:de("button-click")};const dt=me.bind({});dt.args={behandling:{...ve,type:Ue.REVURDERING,behandlingsresultat:{type:_e.INNVILGET,konsekvenserForYtelsen:[Ce.ENDRING_I_BEREGNING_OG_UTTAK]}},beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:de("button-click")};const ut=me.bind({});ut.args={behandling:{...ve,type:Ue.REVURDERING,behandlingsresultat:{type:_e.AVSLATT,konsekvenserForYtelsen:[Ce.ENDRING_I_BEREGNING_OG_UTTAK],avslagsarsak:"1007"}},beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},vilkar:[{lovReferanse:"§§Dette er en lovreferanse",vilkarType:Fs.SOKNADFRISTVILKARET,vilkarStatus:ct.IKKE_OPPFYLT,overstyrbar:!0}],isReadOnly:!1,submitCallback:de("button-click")};const gt=me.bind({});gt.args={behandling:{...ve,type:Ue.REVURDERING,behandlingsresultat:{type:_e.OPPHOR,opphørsdato:"2024-11-01"}},beregningresultatDagytelse:Oe,ytelseTypeKode:z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1,submitCallback:de("button-click")};var Ko,Po,Fo;Br.parameters={...Br.parameters,docs:{...(Ko=Br.parameters)==null?void 0:Ko.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Fo=(Po=Br.parameters)==null?void 0:Po.docs)==null?void 0:Fo.source}}};var Mo,Vo,Go;qr.parameters={...qr.parameters,docs:{...(Mo=qr.parameters)==null?void 0:Mo.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Go=(Vo=qr.parameters)==null?void 0:Vo.docs)==null?void 0:Go.source}}};var wo,jo,Uo;Hr.parameters={...Hr.parameters,docs:{...(wo=Hr.parameters)==null?void 0:wo.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Uo=(jo=Hr.parameters)==null?void 0:jo.docs)==null?void 0:Uo.source}}};var Bo,qo,Ho;Yr.parameters={...Yr.parameters,docs:{...(Bo=Yr.parameters)==null?void 0:Bo.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Ho=(qo=Yr.parameters)==null?void 0:qo.docs)==null?void 0:Ho.source}}};var Yo,xo,Co;xr.parameters={...xr.parameters,docs:{...(Yo=xr.parameters)==null?void 0:Yo.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Co=(xo=xr.parameters)==null?void 0:xo.docs)==null?void 0:Co.source}}};var $o,Wo,Jo;Cr.parameters={...Cr.parameters,docs:{...($o=Cr.parameters)==null?void 0:$o.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Jo=(Wo=Cr.parameters)==null?void 0:Wo.docs)==null?void 0:Jo.source}}};var zo,Zo,Xo;$r.parameters={...$r.parameters,docs:{...(zo=$r.parameters)==null?void 0:zo.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Xo=(Zo=$r.parameters)==null?void 0:Zo.docs)==null?void 0:Xo.source}}};var Qo,el,nl;Wr.parameters={...Wr.parameters,docs:{...(Qo=Wr.parameters)==null?void 0:Qo.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(nl=(el=Wr.parameters)==null?void 0:el.docs)==null?void 0:nl.source}}};var rl,tl,al;Jr.parameters={...Jr.parameters,docs:{...(rl=Jr.parameters)==null?void 0:rl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(al=(tl=Jr.parameters)==null?void 0:tl.docs)==null?void 0:al.source}}};var sl,il,ol;zr.parameters={...zr.parameters,docs:{...(sl=zr.parameters)==null?void 0:sl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(ol=(il=zr.parameters)==null?void 0:il.docs)==null?void 0:ol.source}}};var ll,dl,ul;Zr.parameters={...Zr.parameters,docs:{...(ll=Zr.parameters)==null?void 0:ll.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(ul=(dl=Zr.parameters)==null?void 0:dl.docs)==null?void 0:ul.source}}};var gl,kl,El;Xr.parameters={...Xr.parameters,docs:{...(gl=Xr.parameters)==null?void 0:gl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(El=(kl=Xr.parameters)==null?void 0:kl.docs)==null?void 0:El.source}}};var vl,ml,fl;Qr.parameters={...Qr.parameters,docs:{...(vl=Qr.parameters)==null?void 0:vl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(fl=(ml=Qr.parameters)==null?void 0:ml.docs)==null?void 0:fl.source}}};var Tl,Rl,yl;et.parameters={...et.parameters,docs:{...(Tl=et.parameters)==null?void 0:Tl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(yl=(Rl=et.parameters)==null?void 0:Rl.docs)==null?void 0:yl.source}}};var Al,bl,pl;nt.parameters={...nt.parameters,docs:{...(Al=nt.parameters)==null?void 0:Al.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(pl=(bl=nt.parameters)==null?void 0:bl.docs)==null?void 0:pl.source}}};var cl,_l,hl;rt.parameters={...rt.parameters,docs:{...(cl=rt.parameters)==null?void 0:cl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(hl=(_l=rt.parameters)==null?void 0:_l.docs)==null?void 0:hl.source}}};var Sl,Nl,Ol;tt.parameters={...tt.parameters,docs:{...(Sl=tt.parameters)==null?void 0:Sl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Ol=(Nl=tt.parameters)==null?void 0:Nl.docs)==null?void 0:Ol.source}}};var Il,Ll,Dl;at.parameters={...at.parameters,docs:{...(Il=at.parameters)==null?void 0:Il.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Dl=(Ll=at.parameters)==null?void 0:Ll.docs)==null?void 0:Dl.source}}};var Kl,Pl,Fl;st.parameters={...st.parameters,docs:{...(Kl=st.parameters)==null?void 0:Kl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Fl=(Pl=st.parameters)==null?void 0:Pl.docs)==null?void 0:Fl.source}}};var Ml,Vl,Gl;it.parameters={...it.parameters,docs:{...(Ml=it.parameters)==null?void 0:Ml.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Gl=(Vl=it.parameters)==null?void 0:Vl.docs)==null?void 0:Gl.source}}};var wl,jl,Ul;ot.parameters={...ot.parameters,docs:{...(wl=ot.parameters)==null?void 0:wl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Ul=(jl=ot.parameters)==null?void 0:jl.docs)==null?void 0:Ul.source}}};var Bl,ql,Hl;lt.parameters={...lt.parameters,docs:{...(Bl=lt.parameters)==null?void 0:Bl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Hl=(ql=lt.parameters)==null?void 0:ql.docs)==null?void 0:Hl.source}}};var Yl,xl,Cl;dt.parameters={...dt.parameters,docs:{...(Yl=dt.parameters)==null?void 0:Yl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Cl=(xl=dt.parameters)==null?void 0:xl.docs)==null?void 0:Cl.source}}};var $l,Wl,Jl;ut.parameters={...ut.parameters,docs:{...($l=ut.parameters)==null?void 0:$l.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Jl=(Wl=ut.parameters)==null?void 0:Wl.docs)==null?void 0:Jl.source}}};var zl,Zl,Xl;gt.parameters={...gt.parameters,docs:{...(zl=gt.parameters)==null?void 0:zl.docs,source:{originalSource:`({
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
}) => <VedtakProsessIndex behandling={behandling} aksjonspunkter={aksjonspunkter || defaultAksjonspunkter} submitCallback={submitCallback} isReadOnly={isReadOnly} isAksjonspunktOpen readOnlySubmitButton={false} status="" vilkar={vilkar || defaultVilkar} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} beregningresultatDagytelse={beregningresultatDagytelse} beregningresultatEngangsstonad={beregningresultatEngangsstonad} previewCallback={previewCallback || action('button-click') as any} ytelseTypeKode={ytelseTypeKode} alleKodeverk={alleKodeverk as any} beregningsgrunnlag={beregningsgrunnlag} beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling} fagsak={{} as Fagsak} />`,...(Xl=(Zl=gt.parameters)==null?void 0:Zl.docs)==null?void 0:Xl.source}}};const J_=["InnvilgetForeldrepengerTilGodkjenningForSaksbehandler","GodkjentForeldrepengerForSaksbehandler","GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring","AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring","GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring","InnvilgetForeldrepengerDerBeregningErManueltFastsatt","AvslåttForeldrepengerDerBeregningErManueltFastsatt","TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil","InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring","GodkjentEngangsstønadForSaksbehandlerUtenOverstyring","InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring","InnvilgetEngangsstønadDerBeregningErManueltFastsatt","AvslåttEngangsstønadDerBeregningErManueltFastsatt","InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring","InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring","GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring","InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring","GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring","GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring","AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring","GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring","OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring","InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt","AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt","OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt"];export{Qr as AvslåttEngangsstønadDerBeregningErManueltFastsatt,ut as AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt,$r as AvslåttForeldrepengerDerBeregningErManueltFastsatt,Yr as AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,it as AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,xr as GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring,zr as GodkjentEngangsstønadForSaksbehandlerUtenOverstyring,qr as GodkjentForeldrepengerForSaksbehandler,Hr as GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring,ot as GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring,at as GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring,rt as GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring,st as GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring,Xr as InnvilgetEngangsstønadDerBeregningErManueltFastsatt,Zr as InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring,Jr as InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring,dt as InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt,Cr as InnvilgetForeldrepengerDerBeregningErManueltFastsatt,Br as InnvilgetForeldrepengerTilGodkjenningForSaksbehandler,tt as InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,nt as InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring,et as InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring,gt as OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt,lt as OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring,Wr as TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil,J_ as __namedExportsOrder,W_ as default};
