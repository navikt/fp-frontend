import{j as k}from"./jsx-runtime-D_zvdyIk.js";import{r as f,R as I,b as Kg}from"./index-_2TAQcTa.js";import{v as Pg}from"./v4-CtRu48qb.js";import{e as Fg}from"./react-B9GYazS1.js";import{d as Zr}from"./dayjs.min-DkLNzaWO.js";import{r as Mg,G as Gg}from"./index-BsrZSYsV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CQEEPsLE.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./index-CQwh6Daz.js";const{addons:Vg}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Ug}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:gi}=__STORYBOOK_MODULE_GLOBAL__;var wg="storybook/actions",Bg=`${wg}/action-event`,jg={depth:10,clearOnStoryChange:!0,limit:50},Ql=(e,r)=>{let n=Object.getPrototypeOf(e);return!n||r(n)?n:Ql(n,r)},Hg=e=>!!(typeof e=="object"&&e&&Ql(e,r=>/^Synthetic(?:Base)?Event$/.test(r.constructor.name))&&typeof e.persist=="function"),Yg=e=>{if(Hg(e)){let r=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));r.persist();let n=Object.getOwnPropertyDescriptor(r,"view"),t=n==null?void 0:n.value;return typeof t=="object"&&(t==null?void 0:t.constructor.name)==="Window"&&Object.defineProperty(r,"view",{...n,value:Object.create(t.constructor.prototype)}),r}return e},xg=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?Pg():Date.now().toString(36)+Math.random().toString(36).substring(2);function ed(e,r={}){let n={...jg,...r},t=function(...a){var E,v;if(r.implicit){let c=(E="__STORYBOOK_PREVIEW__"in gi?gi.__STORYBOOK_PREVIEW__:void 0)==null?void 0:E.storyRenders.find(h=>h.phase==="playing"||h.phase==="rendering");if(c){let h=!((v=window==null?void 0:window.FEATURES)!=null&&v.disallowImplicitActionsInRenderV8),T=new Ug({phase:c.phase,name:e,deprecated:h});if(h)console.warn(T);else throw T}}let s=Vg.getChannel(),i=xg(),o=5,l=a.map(Yg),d=a.length>1?l:l[0],u={id:i,count:0,data:{name:e,args:d},options:{...n,maxDepth:o+(n.depth||3),allowFunction:n.allowFunction||!1}};s.emit(Bg,u)};return t.isAction=!0,t.implicit=r.implicit,t}var ke=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN="5032",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYR_BEREGNING="6007",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(ke||{}),Mr=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(Mr||{}),la=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(la||{});la.BRUKERS_ANDEL;la.FRILANS;la.EGEN_NÆRING;var rd=(e=>(e.INGEN_BEREGNINGSREGLER="1099",e))(rd||{}),vr=(e=>(e.FEIL_I_LOVANDVENDELSE="RE-LOV",e.FEIL_REGELVERKSFORSTAELSE="RE-RGLF",e.FEIL_ELLER_ENDRET_FAKTA="RE-FEFAKTA",e.FEIL_PROSESSUELL="RE-PRSSL",e.ETTER_KLAGE="ETTER_KLAGE",e.ANNET="RE-ANNET",e.KLAGE_U_INNTK="RE-KLAG-U-INNTK",e.KLAGE_M_INNTK="RE-KLAG-M-INNTK",e.MEDLEMSKAP="RE-MDL",e.OPPTJENING="RE-OPTJ",e.FORDELING="RE-FRDLING",e.INNTEKT="RE-INNTK",e.FØDSEL="RE-FØDSEL",e.DØD="RE-DØD",e.SØKERS_RELASJON="RE-SRTB",e.SØKNADSFRIST="RE-FRIST",e.BEREEGNINGSGRUNNLAG="RE-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_INNVILGET="RE-TILST-YT-INNVIL",e.RE_ENDRING_BEREGNINGSGRUNNLAG="RE-ENDR-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_OPPHØRT="RE-TILST-YT-OPPH",e.RE_ENDRING_FRA_BRUKER="RE-END-FRA-BRUKER",e.RE_ENDRET_INNTEKTSMELDING="RE-END-INNTEKTSMELD",e.RE_KLAGE_KA="RE_KLAGE_KA",e.RE_KLAGE_NFP="RE_KLAGE_NFP",e.RE_VILKÅR="RE_VILKÅR",e.RE_FORELDELSE="RE_FORELDELSE",e.RE_FEILUTBETALT_BELØP_REDUSERT="RE_FEILUTBETALT_BELØP_REDUSERT",e.REBEREGN_FERIEPENGER="REBEREGN-FERIEPENGER",e.RE_UTSATT_START="RE-UTSATT-START",e))(vr||{}),Ne=(e=>(e.IKKE_FASTSATT="IKKE_FASTSATT",e.INNVILGET="INNVILGET",e.AVSLATT="AVSLÅTT",e.OPPHOR="OPPHØR",e.HENLAGT_SOKNAD_TRUKKET="HENLAGT_SØKNAD_TRUKKET",e.KLAGE_AVVIST="KLAGE_AVVIST",e.KLAGE_MEDHOLD="KLAGE_MEDHOLD",e.KLAGE_DELVIS_MEDHOLD="KLAGE_DELVIS_MEDHOLD",e.KLAGE_OMGJORT_UGUNST="KLAGE_OMGJORT_UGUNST",e.KLAGE_YTELSESVEDTAK_OPPHEVET="KLAGE_YTELSESVEDTAK_OPPHEVET",e.KLAGE_YTELSESVEDTAK_STADFESTET="KLAGE_YTELSESVEDTAK_STADFESTET",e.KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET="KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",e.HJEMSENDE_UTEN_OPPHEVE="HJEMSENDE_UTEN_OPPHEVE",e.HENLAGT_KLAGE_TRUKKET="HENLAGT_KLAGE_TRUKKET",e.HENLAGT_ANKE_TRUKKET="HENLAGT_ANKE_TRUKKET",e.HENLAGT_FEILOPPRETTET="HENLAGT_FEILOPPRETTET",e.HENLAGT_FEILOPPRETTET_MED_BREV="HENLAGT_FEILOPPRETTET_MED_BREV",e.HENLAGT_FEILOPPRETTET_UTEN_BREV="HENLAGT_FEILOPPRETTET_UTEN_BREV",e.HENLAGT_BRUKER_DOD="HENLAGT_BRUKER_DØD",e.FORELDREPENGER_ENDRET="FORELDREPENGER_ENDRET",e.FORELDREPENGER_SENERE="FORELDREPENGER_SENERE",e.INGEN_ENDRING="INGEN_ENDRING",e.MANGLER_BEREGNINGSREGLER="MANGLER_BEREGNINGSREGLER",e.HENLAGT_SOKNAD_MANGLER="HENLAGT_SØKNAD_MANGLER",e.INNSYN_INNVILGET="INNSYN_INNVILGET",e.INNSYN_DELVIS_INNVILGET="INNSYN_DELVIS_INNVILGET",e.INNSYN_AVVIST="INNSYN_AVVIST",e.HENLAGT_INNSYN_TRUKKET="HENLAGT_INNSYN_TRUKKET",e))(Ne||{});const qg=["KLAGE_MEDHOLD","KLAGE_DELVIS_MEDHOLD","KLAGE_OMGJORT_UGUNST","KLAGE_YTELSESVEDTAK_OPPHEVET","KLAGE_YTELSESVEDTAK_STADFESTET","KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET","HJEMSENDE_UTEN_OPPHEVE"],Cg=["KLAGE_MEDHOLD","KLAGE_DELVIS_MEDHOLD","KLAGE_OMGJORT_UGUNST"],$g=["FORELDREPENGER_ENDRET","FORELDREPENGER_SENERE","INGEN_ENDRING"],Ns=e=>qg.some(r=>r===e)||$g.some(r=>r===e)||e==="INNVILGET",Ss=e=>e==="AVSLÅTT"||e==="KLAGE_AVVIST"||e==="KLAGE_YTELSESVEDTAK_STADFESTET",nd=e=>e==="OPPHØR",Jg=e=>Cg.some(r=>r===e);var we=(e=>(e.OPPRETTET="OPPRE",e.BEHANDLING_UTREDES="UTRED",e.AVSLUTTET="AVSLU",e.IVERKSETTER_VEDTAK="IVED",e.FATTER_VEDTAK="FVED",e))(we||{}),Ge=(e=>(e.FORSTEGANGSSOKNAD="BT-002",e.KLAGE="BT-003",e.REVURDERING="BT-004",e.DOKUMENTINNSYN="BT-006",e.TILBAKEKREVING="BT-007",e.ANKE="BT-008",e.TILBAKEKREVING_REVURDERING="BT-009",e))(Ge||{}),hs=(e=>(e.INNHENTE_OPPLYSNINGER="INNOPP",e.VARSEL_OM_REVURDERING="VARREV",e.FORLENGET_SAKSBEHANDLINGSTID="FORSAK",e.FORLENGET_SAKSBEHANDLINGSTID_MEDL="FORMED",e.KLAGE_OMGJORING="KGEOMG",e.KLAGE_AVVIST="KGEAVV",e.KLAGE_STADFESTET="KGESTA",e.KLAGE_HJEMSENDT="KGEHJE",e.KLAGE_OVERSENDT="KGEOVE",e.ANKE_OMGJORT="ANKOMG",e.ANKE_OPPHEVET="ANKOPP",e.FRITEKST="FRITEK",e.INNSYN_SVAR="INNSYN",e.INFO_OM_HENLEGGELSE="IOHENL",e.TBK_INNHENTE_OPPLYSNINGER="INNHEN",e.KORRIGERT_VARSEL_OM_TILBAKEKREVING="KORRIGVARS",e.VARSEL_OM_TILBAKEKREVING="VARS",e.ETTERLYS_INNTEKTSMELDING="ELYSIM",e))(hs||{}),Z=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(Z||{}),Ir=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e.FAGSAK_MARKERING="FagsakMarkering",e.ADRESSE_TYPE="AdresseType",e.NATURAL_YTELSE_TYPE="NaturalYtelseType",e))(Ir||{});const Wg=(e,r,n,t)=>{let a=e[r];if(!a||a.length===0)return"";t&&(a=a[t]);const s=a.find(i=>i.kode===n);return s?s.navn:""},qn=e=>(r,n,t)=>Wg(e,n,r,t);var qe=(e=>(e.ENDRING_I_BEREGNING="ENDRING_I_BEREGNING",e.ENDRING_I_UTTAK="ENDRING_I_UTTAK",e.ENDRING_I_FORDELING_AV_YTELSEN="ENDRING_I_FORDELING_AV_YTELSEN",e.INGEN_ENDRING="INGEN_ENDRING",e.ENDRING_I_BEREGNING_OG_UTTAK="ENDRING_I_BEREGNING_OG_UTTAK",e.FORELDREPENGER_OPPHORER="FORELDREPENGER_OPPHØRER",e.UDEFINERT="-",e))(qe||{}),Ca=(e=>(e.MOR="MORA",e.FAR="FARA",e.MEDMOR="MMOR",e))(Ca||{}),bs=(e=>(e.FODSELSVILKARET_MOR="FP_VK_1",e.SVANGERSKAPVILKARET="SVP_VK_1",e.MEDLEMSKAPSVILKARET="FP_VK_2",e.MEDLEMSKAPSVILKÅRET_LØPENDE="FP_VK_2_L",e.MEDLEMSKAPSVILKARET_FORUTGAENDE="FP_VK_2_F",e.SOKNADFRISTVILKARET="FP_VK_3",e.ADOPSJONSVILKARET="FP_VK_4",e.OMSORGSVILKARET="FP_VK_5",e.FORELDREANSVARSVILKARET_2_LEDD="FP_VK_8",e.FODSELSVILKARET_FAR="FP_VK_11",e.ADOPSJONSVILKARET_FORELDREPENGER="FP_VK_16",e.OPPTJENINGSPERIODE="FP_VK_21",e.OPPTJENINGSVILKARET="FP_VK_23",e.FORELDREANSVARSVILKARET_4_LEDD="FP_VK_33",e.SOKERSOPPLYSNINGSPLIKT="FP_VK_34",e.BEREGNINGSGRUNNLAGVILKARET="FP_VK_41",e))(bs||{}),zn=(e=>(e.OPPFYLT="OPPFYLT",e.IKKE_OPPFYLT="IKKE_OPPFYLT",e.IKKE_VURDERT="IKKE_VURDERT",e))(zn||{}),td=(e=>(e.TILBAKEKR_OPPRETT="TILBAKEKR_OPPRETT",e.TILBAKEKR_IGNORER="TILBAKEKR_IGNORER",e.TILBAKEKR_INNTREKK="TILBAKEKR_INNTREKK",e.TILBAKEKR_OPPDATER="TILBAKEKR_OPPDATER",e))(td||{});const{global:zg}=__STORYBOOK_MODULE_GLOBAL__,{setDefaultProjectAnnotations:YN,setProjectAnnotations:xN,composeStory:qN,composeStories:CN}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:ki}=zg;ki&&(ki.STORYBOOK_ENV="react");({...Fg});var Do;typeof module<"u"&&((Do=module==null?void 0:module.hot)==null||Do.decline());var $a=function(e,r){return $a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])},$a(e,r)};function sr(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");$a(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}var H=function(){return H=Object.assign||function(r){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},H.apply(this,arguments)};function mn(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n}function ur(e,r,n){if(n||arguments.length===2)for(var t=0,a=r.length,s;t<a;t++)(s||!(t in r))&&(s||(s=Array.prototype.slice.call(r,0,t)),s[t]=r[t]);return e.concat(s||Array.prototype.slice.call(r))}function lr(e,r){var n=r&&r.cache?r.cache:tk,t=r&&r.serializer?r.serializer:rk,a=r&&r.strategy?r.strategy:Qg;return a(e,{cache:n,serializer:t})}function Zg(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Xg(e,r,n,t){var a=Zg(t)?t:n(t),s=r.get(a);return typeof s>"u"&&(s=e.call(this,t),r.set(a,s)),s}function ad(e,r,n){var t=Array.prototype.slice.call(arguments,3),a=n(t),s=r.get(a);return typeof s>"u"&&(s=e.apply(this,t),r.set(a,s)),s}function sd(e,r,n,t,a){return n.bind(r,e,t,a)}function Qg(e,r){var n=e.length===1?Xg:ad;return sd(e,this,n,r.cache.create(),r.serializer)}function ek(e,r){return sd(e,this,ad,r.cache.create(),r.serializer)}var rk=function(){return JSON.stringify(arguments)},nk=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(r){return this.cache[r]},e.prototype.set=function(r,n){this.cache[r]=n},e}(),tk={create:function(){return new nk}},dr={variadic:ek},Q;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Q||(Q={}));var ge;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(ge||(ge={}));var Tn;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Tn||(Tn={}));function Ei(e){return e.type===ge.literal}function ak(e){return e.type===ge.argument}function id(e){return e.type===ge.number}function od(e){return e.type===ge.date}function ld(e){return e.type===ge.time}function dd(e){return e.type===ge.select}function ud(e){return e.type===ge.plural}function sk(e){return e.type===ge.pound}function gd(e){return e.type===ge.tag}function kd(e){return!!(e&&typeof e=="object"&&e.type===Tn.number)}function Ja(e){return!!(e&&typeof e=="object"&&e.type===Tn.dateTime)}var Ed=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,ik=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function ok(e){var r={};return e.replace(ik,function(n){var t=n.length;switch(n[0]){case"G":r.era=t===4?"long":t===5?"narrow":"short";break;case"y":r.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":r.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":r.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":r.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][t-4];break;case"a":r.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":r.hourCycle="h12",r.hour=["numeric","2-digit"][t-1];break;case"H":r.hourCycle="h23",r.hour=["numeric","2-digit"][t-1];break;case"K":r.hourCycle="h11",r.hour=["numeric","2-digit"][t-1];break;case"k":r.hourCycle="h24",r.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":r.minute=["numeric","2-digit"][t-1];break;case"s":r.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":r.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),r}var lk=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function dk(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var r=e.split(lk).filter(function(v){return v.length>0}),n=[],t=0,a=r;t<a.length;t++){var s=a[t],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),d=0,u=l;d<u.length;d++){var E=u[d];if(E.length===0)throw new Error("Invalid number skeleton")}n.push({stem:o,options:l})}return n}function uk(e){return e.replace(/^(.*?)-/,"")}var vi=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,vd=/^(@+)?(\+|#+)?[rs]?$/g,gk=/(\*)(0+)|(#+)(0+)|(0+)/g,md=/^(0+)$/;function mi(e){var r={};return e[e.length-1]==="r"?r.roundingPriority="morePrecision":e[e.length-1]==="s"&&(r.roundingPriority="lessPrecision"),e.replace(vd,function(n,t,a){return typeof a!="string"?(r.minimumSignificantDigits=t.length,r.maximumSignificantDigits=t.length):a==="+"?r.minimumSignificantDigits=t.length:t[0]==="#"?r.maximumSignificantDigits=t.length:(r.minimumSignificantDigits=t.length,r.maximumSignificantDigits=t.length+(typeof a=="string"?a.length:0)),""}),r}function Td(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function kk(e){var r;if(e[0]==="E"&&e[1]==="E"?(r={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(r={notation:"scientific"},e=e.slice(1)),r){var n=e.slice(0,2);if(n==="+!"?(r.signDisplay="always",e=e.slice(2)):n==="+?"&&(r.signDisplay="exceptZero",e=e.slice(2)),!md.test(e))throw new Error("Malformed concise eng/scientific notation");r.minimumIntegerDigits=e.length}return r}function Ti(e){var r={},n=Td(e);return n||r}function Ek(e){for(var r={},n=0,t=e;n<t.length;n++){var a=t[n];switch(a.stem){case"percent":case"%":r.style="percent";continue;case"%x100":r.style="percent",r.scale=100;continue;case"currency":r.style="currency",r.currency=a.options[0];continue;case"group-off":case",_":r.useGrouping=!1;continue;case"precision-integer":case".":r.maximumFractionDigits=0;continue;case"measure-unit":case"unit":r.style="unit",r.unit=uk(a.options[0]);continue;case"compact-short":case"K":r.notation="compact",r.compactDisplay="short";continue;case"compact-long":case"KK":r.notation="compact",r.compactDisplay="long";continue;case"scientific":r=H(H(H({},r),{notation:"scientific"}),a.options.reduce(function(l,d){return H(H({},l),Ti(d))},{}));continue;case"engineering":r=H(H(H({},r),{notation:"engineering"}),a.options.reduce(function(l,d){return H(H({},l),Ti(d))},{}));continue;case"notation-simple":r.notation="standard";continue;case"unit-width-narrow":r.currencyDisplay="narrowSymbol",r.unitDisplay="narrow";continue;case"unit-width-short":r.currencyDisplay="code",r.unitDisplay="short";continue;case"unit-width-full-name":r.currencyDisplay="name",r.unitDisplay="long";continue;case"unit-width-iso-code":r.currencyDisplay="symbol";continue;case"scale":r.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":r.roundingMode="floor";continue;case"rounding-mode-ceiling":r.roundingMode="ceil";continue;case"rounding-mode-down":r.roundingMode="trunc";continue;case"rounding-mode-up":r.roundingMode="expand";continue;case"rounding-mode-half-even":r.roundingMode="halfEven";continue;case"rounding-mode-half-down":r.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":r.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(gk,function(l,d,u,E,v,c){if(d)r.minimumIntegerDigits=u.length;else{if(E&&v)throw new Error("We currently do not support maximum integer digits");if(c)throw new Error("We currently do not support exact integer digits")}return""});continue}if(md.test(a.stem)){r.minimumIntegerDigits=a.stem.length;continue}if(vi.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(vi,function(l,d,u,E,v,c){return u==="*"?r.minimumFractionDigits=d.length:E&&E[0]==="#"?r.maximumFractionDigits=E.length:v&&c?(r.minimumFractionDigits=v.length,r.maximumFractionDigits=v.length+c.length):(r.minimumFractionDigits=d.length,r.maximumFractionDigits=d.length),""});var s=a.options[0];s==="w"?r=H(H({},r),{trailingZeroDisplay:"stripIfInteger"}):s&&(r=H(H({},r),mi(s)));continue}if(vd.test(a.stem)){r=H(H({},r),mi(a.stem));continue}var i=Td(a.stem);i&&(r=H(H({},r),i));var o=kk(a.stem);o&&(r=H(H({},r),o))}return r}var kt={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function vk(e,r){for(var n="",t=0;t<e.length;t++){var a=e.charAt(t);if(a==="j"){for(var s=0;t+1<e.length&&e.charAt(t+1)===a;)s++,t++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",d=mk(r);for((d=="H"||d=="k")&&(o=0);o-- >0;)n+=l;for(;i-- >0;)n=d+n}else a==="J"?n+="H":n+=a}return n}function mk(e){var r=e.hourCycle;if(r===void 0&&e.hourCycles&&e.hourCycles.length&&(r=e.hourCycles[0]),r)switch(r){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=e.language,t;n!=="root"&&(t=e.maximize().region);var a=kt[t||""]||kt[n||""]||kt["".concat(n,"-001")]||kt["001"];return a[0]}var La,Tk=new RegExp("^".concat(Ed.source,"*")),fk=new RegExp("".concat(Ed.source,"*$"));function re(e,r){return{start:e,end:r}}var Rk=!!String.prototype.startsWith&&"_a".startsWith("a",1),Ak=!!String.fromCodePoint,yk=!!Object.fromEntries,_k=!!String.prototype.codePointAt,ck=!!String.prototype.trimStart,pk=!!String.prototype.trimEnd,Nk=!!Number.isSafeInteger,Sk=Nk?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Wa=!0;try{var hk=Rd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Wa=((La=hk.exec("a"))===null||La===void 0?void 0:La[0])==="a"}catch{Wa=!1}var fi=Rk?function(r,n,t){return r.startsWith(n,t)}:function(r,n,t){return r.slice(t,t+n.length)===n},za=Ak?String.fromCodePoint:function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];for(var t="",a=r.length,s=0,i;a>s;){if(i=r[s++],i>1114111)throw RangeError(i+" is not a valid code point");t+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return t},Ri=yk?Object.fromEntries:function(r){for(var n={},t=0,a=r;t<a.length;t++){var s=a[t],i=s[0],o=s[1];n[i]=o}return n},fd=_k?function(r,n){return r.codePointAt(n)}:function(r,n){var t=r.length;if(!(n<0||n>=t)){var a=r.charCodeAt(n),s;return a<55296||a>56319||n+1===t||(s=r.charCodeAt(n+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},bk=ck?function(r){return r.trimStart()}:function(r){return r.replace(Tk,"")},Ik=pk?function(r){return r.trimEnd()}:function(r){return r.replace(fk,"")};function Rd(e,r){return new RegExp(e,r)}var Za;if(Wa){var Ai=Rd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Za=function(r,n){var t;Ai.lastIndex=n;var a=Ai.exec(r);return(t=a[1])!==null&&t!==void 0?t:""}}else Za=function(r,n){for(var t=[];;){var a=fd(r,n);if(a===void 0||Ad(a)||Kk(a))break;t.push(a),n+=a>=65536?2:1}return za.apply(void 0,t)};var Ok=function(){function e(r,n){n===void 0&&(n={}),this.message=r,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(r,n,t){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(r,t);if(i.err)return i;a.push(i.val)}else{if(s===125&&r>0)break;if(s===35&&(n==="plural"||n==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:ge.pound,location:re(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(Q.UNMATCHED_CLOSING_TAG,re(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&Xa(this.peek()||0)){var i=this.parseTag(r,n);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(r,n);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(r,n){var t=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:ge.literal,value:"<".concat(a,"/>"),location:re(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(r+1,n,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Xa(this.char()))return this.error(Q.INVALID_TAG,re(o,this.clonePosition()));var l=this.clonePosition(),d=this.parseTagName();return a!==d?this.error(Q.UNMATCHED_CLOSING_TAG,re(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:ge.tag,value:a,children:i,location:re(t,this.clonePosition())},err:null}:this.error(Q.INVALID_TAG,re(o,this.clonePosition())))}else return this.error(Q.UNCLOSED_TAG,re(t,this.clonePosition()))}else return this.error(Q.INVALID_TAG,re(t,this.clonePosition()))},e.prototype.parseTagName=function(){var r=this.offset();for(this.bump();!this.isEOF()&&Dk(this.char());)this.bump();return this.message.slice(r,this.offset())},e.prototype.parseLiteral=function(r,n){for(var t=this.clonePosition(),a="";;){var s=this.tryParseQuote(n);if(s){a+=s;continue}var i=this.tryParseUnquoted(r,n);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=re(t,this.clonePosition());return{val:{type:ge.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Lk(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(r){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(r==="plural"||r==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(t);this.bump()}return za.apply(void 0,n)},e.prototype.tryParseUnquoted=function(r,n){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(n==="plural"||n==="selectordinal")||t===125&&r>0?null:(this.bump(),za(t))},e.prototype.parseArgument=function(r,n){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Q.EXPECT_ARGUMENT_CLOSING_BRACE,re(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Q.EMPTY_ARGUMENT,re(t,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(Q.MALFORMED_ARGUMENT,re(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Q.EXPECT_ARGUMENT_CLOSING_BRACE,re(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:ge.argument,value:a,location:re(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Q.EXPECT_ARGUMENT_CLOSING_BRACE,re(t,this.clonePosition())):this.parseArgumentOptions(r,n,a,t);default:return this.error(Q.MALFORMED_ARGUMENT,re(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var r=this.clonePosition(),n=this.offset(),t=Za(this.message,n),a=n+t.length;this.bumpTo(a);var s=this.clonePosition(),i=re(r,s);return{value:t,location:i}},e.prototype.parseArgumentOptions=function(r,n,t,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(Q.EXPECT_ARGUMENT_TYPE,re(i,l));case"number":case"date":case"time":{this.bumpSpace();var d=null;if(this.bumpIf(",")){this.bumpSpace();var u=this.clonePosition(),E=this.parseSimpleArgStyleIfPossible();if(E.err)return E;var v=Ik(E.val);if(v.length===0)return this.error(Q.EXPECT_ARGUMENT_STYLE,re(this.clonePosition(),this.clonePosition()));var c=re(u,this.clonePosition());d={style:v,styleLocation:c}}var h=this.tryParseArgumentClose(a);if(h.err)return h;var T=re(a,this.clonePosition());if(d&&fi(d==null?void 0:d.style,"::",0)){var A=bk(d.style.slice(2));if(o==="number"){var E=this.parseNumberSkeletonFromString(A,d.styleLocation);return E.err?E:{val:{type:ge.number,value:t,location:T,style:E.val},err:null}}else{if(A.length===0)return this.error(Q.EXPECT_DATE_TIME_SKELETON,T);var N=A;this.locale&&(N=vk(A,this.locale));var v={type:Tn.dateTime,pattern:N,location:d.styleLocation,parsedOptions:this.shouldParseSkeletons?ok(N):{}},p=o==="date"?ge.date:ge.time;return{val:{type:p,value:t,location:T,style:v},err:null}}}return{val:{type:o==="number"?ge.number:o==="date"?ge.date:ge.time,value:t,location:T,style:(s=d==null?void 0:d.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var y=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Q.EXPECT_SELECT_ARGUMENT_OPTIONS,re(y,H({},y)));this.bumpSpace();var P=this.parseIdentifierIfPossible(),R=0;if(o!=="select"&&P.value==="offset"){if(!this.bumpIf(":"))return this.error(Q.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,re(this.clonePosition(),this.clonePosition()));this.bumpSpace();var E=this.tryParseDecimalInteger(Q.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Q.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(E.err)return E;this.bumpSpace(),P=this.parseIdentifierIfPossible(),R=E.val}var G=this.tryParsePluralOrSelectOptions(r,o,n,P);if(G.err)return G;var h=this.tryParseArgumentClose(a);if(h.err)return h;var b=re(a,this.clonePosition());return o==="select"?{val:{type:ge.select,value:t,options:Ri(G.val),location:b},err:null}:{val:{type:ge.plural,value:t,options:Ri(G.val),offset:R,pluralType:o==="plural"?"cardinal":"ordinal",location:b},err:null}}default:return this.error(Q.INVALID_ARGUMENT_TYPE,re(i,l))}},e.prototype.tryParseArgumentClose=function(r){return this.isEOF()||this.char()!==125?this.error(Q.EXPECT_ARGUMENT_CLOSING_BRACE,re(r,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var r=0,n=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Q.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,re(a,this.clonePosition()));this.bump();break}case 123:{r+=1,this.bump();break}case 125:{if(r>0)r-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(r,n){var t=[];try{t=dk(r)}catch{return this.error(Q.INVALID_NUMBER_SKELETON,n)}return{val:{type:Tn.number,tokens:t,location:n,parsedOptions:this.shouldParseSkeletons?Ek(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(r,n,t,a){for(var s,i=!1,o=[],l=new Set,d=a.value,u=a.location;;){if(d.length===0){var E=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var v=this.tryParseDecimalInteger(Q.EXPECT_PLURAL_ARGUMENT_SELECTOR,Q.INVALID_PLURAL_ARGUMENT_SELECTOR);if(v.err)return v;u=re(E,this.clonePosition()),d=this.message.slice(E.offset,this.offset())}else break}if(l.has(d))return this.error(n==="select"?Q.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Q.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,u);d==="other"&&(i=!0),this.bumpSpace();var c=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?Q.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Q.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,re(this.clonePosition(),this.clonePosition()));var h=this.parseMessage(r+1,n,t);if(h.err)return h;var T=this.tryParseArgumentClose(c);if(T.err)return T;o.push([d,{value:h.val,location:re(c,this.clonePosition())}]),l.add(d),this.bumpSpace(),s=this.parseIdentifierIfPossible(),d=s.value,u=s.location}return o.length===0?this.error(n==="select"?Q.EXPECT_SELECT_ARGUMENT_SELECTOR:Q.EXPECT_PLURAL_ARGUMENT_SELECTOR,re(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(Q.MISSING_OTHER_CLAUSE,re(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(r,n){var t=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=re(a,this.clonePosition());return s?(i*=t,Sk(i)?{val:i,err:null}:this.error(n,l)):this.error(r,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var r=this.position.offset;if(r>=this.message.length)throw Error("out of bound");var n=fd(this.message,r);if(n===void 0)throw Error("Offset ".concat(r," is at invalid UTF-16 code unit boundary"));return n},e.prototype.error=function(r,n){return{val:null,err:{kind:r,message:this.message,location:n}}},e.prototype.bump=function(){if(!this.isEOF()){var r=this.char();r===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=r<65536?1:2)}},e.prototype.bumpIf=function(r){if(fi(this.message,r,this.offset())){for(var n=0;n<r.length;n++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(r){var n=this.offset(),t=this.message.indexOf(r,n);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(r){if(this.offset()>r)throw Error("targetOffset ".concat(r," must be greater than or equal to the current offset ").concat(this.offset()));for(r=Math.min(r,this.message.length);;){var n=this.offset();if(n===r)break;if(n>r)throw Error("targetOffset ".concat(r," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Ad(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var r=this.char(),n=this.offset(),t=this.message.charCodeAt(n+(r>=65536?2:1));return t??null},e}();function Xa(e){return e>=97&&e<=122||e>=65&&e<=90}function Lk(e){return Xa(e)||e===47}function Dk(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Ad(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Kk(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Qa(e){e.forEach(function(r){if(delete r.location,dd(r)||ud(r))for(var n in r.options)delete r.options[n].location,Qa(r.options[n].value);else id(r)&&kd(r.style)||(od(r)||ld(r))&&Ja(r.style)?delete r.style.location:gd(r)&&Qa(r.children)})}function Pk(e,r){r===void 0&&(r={}),r=H({shouldParseSkeletons:!0,requiresOtherClause:!0},r);var n=new Ok(e,r).parse();if(n.err){var t=SyntaxError(Q[n.err.kind]);throw t.location=n.err.location,t.originalMessage=n.err.message,t}return r!=null&&r.captureLocation||Qa(n.val),n.val}var mr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(mr||(mr={}));var Br=function(e){sr(r,e);function r(n,t,a){var s=e.call(this,n)||this;return s.code=t,s.originalMessage=a,s}return r.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},r}(Error),yi=function(e){sr(r,e);function r(n,t,a,s){return e.call(this,'Invalid values for "'.concat(n,'": "').concat(t,'". Options are "').concat(Object.keys(a).join('", "'),'"'),mr.INVALID_VALUE,s)||this}return r}(Br),Fk=function(e){sr(r,e);function r(n,t,a){return e.call(this,'Value for "'.concat(n,'" must be of type ').concat(t),mr.INVALID_VALUE,a)||this}return r}(Br),Mk=function(e){sr(r,e);function r(n,t){return e.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(t,'"'),mr.MISSING_VALUE,t)||this}return r}(Br),Ve;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Ve||(Ve={}));function Gk(e){return e.length<2?e:e.reduce(function(r,n){var t=r[r.length-1];return!t||t.type!==Ve.literal||n.type!==Ve.literal?r.push(n):t.value+=n.value,r},[])}function yd(e){return typeof e=="function"}function qt(e,r,n,t,a,s,i){if(e.length===1&&Ei(e[0]))return[{type:Ve.literal,value:e[0].value}];for(var o=[],l=0,d=e;l<d.length;l++){var u=d[l];if(Ei(u)){o.push({type:Ve.literal,value:u.value});continue}if(sk(u)){typeof s=="number"&&o.push({type:Ve.literal,value:n.getNumberFormat(r).format(s)});continue}var E=u.value;if(!(a&&E in a))throw new Mk(E,i);var v=a[E];if(ak(u)){(!v||typeof v=="string"||typeof v=="number")&&(v=typeof v=="string"||typeof v=="number"?String(v):""),o.push({type:typeof v=="string"?Ve.literal:Ve.object,value:v});continue}if(od(u)){var c=typeof u.style=="string"?t.date[u.style]:Ja(u.style)?u.style.parsedOptions:void 0;o.push({type:Ve.literal,value:n.getDateTimeFormat(r,c).format(v)});continue}if(ld(u)){var c=typeof u.style=="string"?t.time[u.style]:Ja(u.style)?u.style.parsedOptions:t.time.medium;o.push({type:Ve.literal,value:n.getDateTimeFormat(r,c).format(v)});continue}if(id(u)){var c=typeof u.style=="string"?t.number[u.style]:kd(u.style)?u.style.parsedOptions:void 0;c&&c.scale&&(v=v*(c.scale||1)),o.push({type:Ve.literal,value:n.getNumberFormat(r,c).format(v)});continue}if(gd(u)){var h=u.children,T=u.value,A=a[T];if(!yd(A))throw new Fk(T,"function",i);var N=qt(h,r,n,t,a,s),p=A(N.map(function(R){return R.value}));Array.isArray(p)||(p=[p]),o.push.apply(o,p.map(function(R){return{type:typeof R=="string"?Ve.literal:Ve.object,value:R}}))}if(dd(u)){var y=u.options[v]||u.options.other;if(!y)throw new yi(u.value,v,Object.keys(u.options),i);o.push.apply(o,qt(y.value,r,n,t,a));continue}if(ud(u)){var y=u.options["=".concat(v)];if(!y){if(!Intl.PluralRules)throw new Br(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,mr.MISSING_INTL_API,i);var P=n.getPluralRules(r,{type:u.pluralType}).select(v-(u.offset||0));y=u.options[P]||u.options.other}if(!y)throw new yi(u.value,v,Object.keys(u.options),i);o.push.apply(o,qt(y.value,r,n,t,a,v-(u.offset||0)));continue}}return Gk(o)}function Vk(e,r){return r?H(H(H({},e||{}),r||{}),Object.keys(e).reduce(function(n,t){return n[t]=H(H({},e[t]),r[t]||{}),n},{})):e}function Uk(e,r){return r?Object.keys(e).reduce(function(n,t){return n[t]=Vk(e[t],r[t]),n},H({},e)):e}function Da(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,n){e[r]=n}}}}}function wk(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:lr(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.NumberFormat).bind.apply(r,ur([void 0],n,!1)))},{cache:Da(e.number),strategy:dr.variadic}),getDateTimeFormat:lr(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.DateTimeFormat).bind.apply(r,ur([void 0],n,!1)))},{cache:Da(e.dateTime),strategy:dr.variadic}),getPluralRules:lr(function(){for(var r,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((r=Intl.PluralRules).bind.apply(r,ur([void 0],n,!1)))},{cache:Da(e.pluralRules),strategy:dr.variadic})}}var _d=function(){function e(r,n,t,a){n===void 0&&(n=e.defaultLocale);var s=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var d=s.formatToParts(l);if(d.length===1)return d[0].value;var u=d.reduce(function(E,v){return!E.length||v.type!==Ve.literal||typeof E[E.length-1]!="string"?E.push(v.value):E[E.length-1]+=v.value,E},[]);return u.length<=1?u[0]||"":u},this.formatToParts=function(l){return qt(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=n,this.resolvedLocale=e.resolveLocale(n),typeof r=="string"){if(this.message=r,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=mn(i,["formatters"]);this.ast=e.__parse(r,H(H({},o),{locale:this.resolvedLocale}))}else this.ast=r;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Uk(e.formats,t),this.formatters=a&&a.formatters||wk(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(r){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(r);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof r=="string"?r:r[0])}},e.__parse=Pk,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Wr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Wr||(Wr={}));var Zn=function(e){sr(r,e);function r(n,t,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(t,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,r),s}return r}(Error),Bk=function(e){sr(r,e);function r(n,t){return e.call(this,Wr.UNSUPPORTED_FORMATTER,n,t)||this}return r}(Zn),jk=function(e){sr(r,e);function r(n,t){return e.call(this,Wr.INVALID_CONFIG,n,t)||this}return r}(Zn),_i=function(e){sr(r,e);function r(n,t){return e.call(this,Wr.MISSING_DATA,n,t)||this}return r}(Zn),Ze=function(e){sr(r,e);function r(n,t,a){var s=e.call(this,Wr.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(t,`
`),a)||this;return s.locale=t,s}return r}(Zn),Ka=function(e){sr(r,e);function r(n,t,a,s){var i=e.call(this,"".concat(n,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),t,s)||this;return i.descriptor=a,i.locale=t,i}return r}(Ze),Hk=function(e){sr(r,e);function r(n,t){var a=e.call(this,Wr.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(t,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=n,a}return r}(Zn);function Yk(e,r,n){if(n===void 0&&(n=Error),!e)throw new n(r)}function Rn(e,r,n){return n===void 0&&(n={}),r.reduce(function(t,a){return a in e?t[a]=e[a]:a in n&&(t[a]=n[a]),t},{})}var xk=function(e){},qk=function(e){},cd={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:xk,onWarn:qk};function pd(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Hr(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,n){e[r]=n}}}}}function Ck(e){e===void 0&&(e=pd());var r=Intl.RelativeTimeFormat,n=Intl.ListFormat,t=Intl.DisplayNames,a=lr(function(){for(var o,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((o=Intl.DateTimeFormat).bind.apply(o,ur([void 0],l,!1)))},{cache:Hr(e.dateTime),strategy:dr.variadic}),s=lr(function(){for(var o,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((o=Intl.NumberFormat).bind.apply(o,ur([void 0],l,!1)))},{cache:Hr(e.number),strategy:dr.variadic}),i=lr(function(){for(var o,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((o=Intl.PluralRules).bind.apply(o,ur([void 0],l,!1)))},{cache:Hr(e.pluralRules),strategy:dr.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:lr(function(o,l,d,u){return new _d(o,l,d,H({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},u||{}))},{cache:Hr(e.message),strategy:dr.variadic}),getRelativeTimeFormat:lr(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,ur([void 0],o,!1)))},{cache:Hr(e.relativeTime),strategy:dr.variadic}),getPluralRules:i,getListFormat:lr(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,ur([void 0],o,!1)))},{cache:Hr(e.list),strategy:dr.variadic}),getDisplayNames:lr(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,ur([void 0],o,!1)))},{cache:Hr(e.displayNames),strategy:dr.variadic})}}function Is(e,r,n,t){var a=e&&e[r],s;if(a&&(s=a[n]),s)return s;t(new Bk("No ".concat(r," format named: ").concat(n)))}function Et(e,r){return Object.keys(e).reduce(function(n,t){return n[t]=H({timeZone:r},e[t]),n},{})}function ci(e,r){var n=Object.keys(H(H({},e),r));return n.reduce(function(t,a){return t[a]=H(H({},e[a]||{}),r[a]||{}),t},{})}function pi(e,r){if(!r)return e;var n=_d.formats;return H(H(H({},n),e),{date:ci(Et(n.date,r),Et(e.date||{},r)),time:ci(Et(n.time,r),Et(e.time||{},r))})}var es=function(e,r,n,t,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,d=e.defaultFormats,u=e.fallbackOnEmptyString,E=e.onError,v=e.timeZone,c=e.defaultRichTextElements;n===void 0&&(n={id:""});var h=n.id,T=n.defaultMessage;Yk(!!h,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var A=String(h),N=o&&Object.prototype.hasOwnProperty.call(o,A)&&o[A];if(Array.isArray(N)&&N.length===1&&N[0].type===ge.literal)return N[0].value;if(!t&&N&&typeof N=="string"&&!c)return N.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=H(H({},c),t||{}),i=pi(i,v),d=pi(d,v),!N){if(u===!1&&N==="")return N;if((!T||s&&s.toLowerCase()!==l.toLowerCase())&&E(new Hk(n,s)),T)try{var p=r.getMessageFormat(T,l,d,a);return p.format(t)}catch(y){return E(new Ka('Error formatting default message for: "'.concat(A,'", rendering default message verbatim'),s,n,y)),typeof T=="string"?T:A}return A}try{var p=r.getMessageFormat(N,s,i,H({formatters:r},a||{}));return p.format(t)}catch(y){E(new Ka('Error formatting message: "'.concat(A,'", using ').concat(T?"default message":"id"," as fallback."),s,n,y))}if(T)try{var p=r.getMessageFormat(T,l,d,a);return p.format(t)}catch(y){E(new Ka('Error formatting the default message for: "'.concat(A,'", rendering message verbatim'),s,n,y))}return typeof N=="string"?N:typeof T=="string"?T:A},$k=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Xn(e,r,n,t){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;t===void 0&&(t={});var l=t.format,d=H(H({},o&&{timeZone:o}),l&&Is(s,r,l,i)),u=Rn(t,$k,d);return r==="time"&&!u.hour&&!u.minute&&!u.second&&!u.timeStyle&&!u.dateStyle&&(u=H(H({},u),{hour:"numeric",minute:"numeric"})),n(a,u)}function Jk(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Xn(e,"date",r,i).format(o)}catch(l){e.onError(new Ze("Error formatting date.",e.locale,l))}return String(o)}function Wk(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Xn(e,"time",r,i).format(o)}catch(l){e.onError(new Ze("Error formatting time.",e.locale,l))}return String(o)}function zk(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],s=n[1],i=n[2],o=i===void 0?{}:i,l=typeof a=="string"?new Date(a||0):a,d=typeof s=="string"?new Date(s||0):s;try{return Xn(e,"dateTimeRange",r,o).formatRange(l,d)}catch(u){e.onError(new Ze("Error formatting date time range.",e.locale,u))}return String(l)}function Zk(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Xn(e,"date",r,i).formatToParts(o)}catch(l){e.onError(new Ze("Error formatting date.",e.locale,l))}return[]}function Xk(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Xn(e,"time",r,i).formatToParts(o)}catch(l){e.onError(new Ze("Error formatting time.",e.locale,l))}return[]}var Qk=["style","type","fallback","languageDisplay"];function eE(e,r,n,t){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new Br(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,mr.MISSING_INTL_API));var o=Rn(t,Qk);try{return r(a,o).of(n)}catch(l){s(new Ze("Error formatting display name.",a,l))}}var rE=["type","style"],Ni=Date.now();function nE(e){return"".concat(Ni,"_").concat(e,"_").concat(Ni)}function tE(e,r,n,t){t===void 0&&(t={});var a=Nd(e,r,n,t).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function Nd(e,r,n,t){var a=e.locale,s=e.onError;t===void 0&&(t={});var i=Intl.ListFormat;i||s(new Br(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,mr.MISSING_INTL_API));var o=Rn(t,rE);try{var l={},d=n.map(function(u,E){if(typeof u=="object"){var v=nE(E);return l[v]=u,v}return String(u)});return r(a,o).formatToParts(d).map(function(u){return u.type==="literal"?u:H(H({},u),{value:l[u.value]||u.value})})}catch(u){s(new Ze("Error formatting list.",a,u))}return n}var aE=["type"];function sE(e,r,n,t){var a=e.locale,s=e.onError;t===void 0&&(t={}),Intl.PluralRules||s(new Br(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,mr.MISSING_INTL_API));var i=Rn(t,aE);try{return r(a,i).select(n)}catch(o){s(new Ze("Error formatting plural.",a,o))}return"other"}var iE=["numeric","style"];function oE(e,r,n){var t=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=!!i&&Is(a,"relative",i,s)||{},l=Rn(n,iE,o);return r(t,l)}function lE(e,r,n,t,a){a===void 0&&(a={}),t||(t="second");var s=Intl.RelativeTimeFormat;s||e.onError(new Br(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,mr.MISSING_INTL_API));try{return oE(e,r,a).format(n,t)}catch(i){e.onError(new Ze("Error formatting relative time.",e.locale,i))}return String(n)}var dE=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Sd(e,r,n){var t=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=i&&Is(a,"number",i,s)||{},l=Rn(n,dE,o);return r(t,l)}function uE(e,r,n,t){t===void 0&&(t={});try{return Sd(e,r,t).format(n)}catch(a){e.onError(new Ze("Error formatting number.",e.locale,a))}return String(n)}function gE(e,r,n,t){t===void 0&&(t={});try{return Sd(e,r,t).formatToParts(n)}catch(a){e.onError(new Ze("Error formatting number.",e.locale,a))}return[]}function kE(e){var r=e?e[Object.keys(e)[0]]:void 0;return typeof r=="string"}function EE(e){e.onWarn&&e.defaultRichTextElements&&kE(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function vE(e,r){var n=Ck(r),t=H(H({},cd),e),a=t.locale,s=t.defaultLocale,i=t.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new _i('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new _i('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new jk('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),EE(t),H(H({},t),{formatters:n,formatNumber:uE.bind(null,t,n.getNumberFormat),formatNumberToParts:gE.bind(null,t,n.getNumberFormat),formatRelativeTime:lE.bind(null,t,n.getRelativeTimeFormat),formatDate:Jk.bind(null,t,n.getDateTimeFormat),formatDateToParts:Zk.bind(null,t,n.getDateTimeFormat),formatTime:Wk.bind(null,t,n.getDateTimeFormat),formatDateTimeRange:zk.bind(null,t,n.getDateTimeFormat),formatTimeToParts:Xk.bind(null,t,n.getDateTimeFormat),formatPlural:sE.bind(null,t,n.getPluralRules),formatMessage:es.bind(null,t,n),$t:es.bind(null,t,n),formatList:tE.bind(null,t,n.getListFormat),formatListToParts:Nd.bind(null,t,n.getListFormat),formatDisplayName:eE.bind(null,t,n.getDisplayNames)})}function mE(e,r,n){if(n===void 0&&(n=Error),!e)throw new n(r)}function TE(e){mE(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var fE=H(H({},cd),{textComponent:f.Fragment});function RE(e){return function(r){return e(f.Children.toArray(r))}}function Si(e,r){if(e===r)return!0;if(!e||!r)return!1;var n=Object.keys(e),t=Object.keys(r),a=n.length;if(t.length!==a)return!1;for(var s=0;s<a;s++){var i=n[s];if(e[i]!==r[i]||!Object.prototype.hasOwnProperty.call(r,i))return!1}return!0}var Pa={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hi;function AE(){if(hi)return ie;hi=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,o=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,E=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,c=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,T=e?Symbol.for("react.block"):60121,A=e?Symbol.for("react.fundamental"):60117,N=e?Symbol.for("react.responder"):60118,p=e?Symbol.for("react.scope"):60119;function y(R){if(typeof R=="object"&&R!==null){var G=R.$$typeof;switch(G){case r:switch(R=R.type,R){case l:case d:case t:case s:case a:case E:return R;default:switch(R=R&&R.$$typeof,R){case o:case u:case h:case c:case i:return R;default:return G}}case n:return G}}}function P(R){return y(R)===d}return ie.AsyncMode=l,ie.ConcurrentMode=d,ie.ContextConsumer=o,ie.ContextProvider=i,ie.Element=r,ie.ForwardRef=u,ie.Fragment=t,ie.Lazy=h,ie.Memo=c,ie.Portal=n,ie.Profiler=s,ie.StrictMode=a,ie.Suspense=E,ie.isAsyncMode=function(R){return P(R)||y(R)===l},ie.isConcurrentMode=P,ie.isContextConsumer=function(R){return y(R)===o},ie.isContextProvider=function(R){return y(R)===i},ie.isElement=function(R){return typeof R=="object"&&R!==null&&R.$$typeof===r},ie.isForwardRef=function(R){return y(R)===u},ie.isFragment=function(R){return y(R)===t},ie.isLazy=function(R){return y(R)===h},ie.isMemo=function(R){return y(R)===c},ie.isPortal=function(R){return y(R)===n},ie.isProfiler=function(R){return y(R)===s},ie.isStrictMode=function(R){return y(R)===a},ie.isSuspense=function(R){return y(R)===E},ie.isValidElementType=function(R){return typeof R=="string"||typeof R=="function"||R===t||R===d||R===s||R===a||R===E||R===v||typeof R=="object"&&R!==null&&(R.$$typeof===h||R.$$typeof===c||R.$$typeof===i||R.$$typeof===o||R.$$typeof===u||R.$$typeof===A||R.$$typeof===N||R.$$typeof===p||R.$$typeof===T)},ie.typeOf=y,ie}var bi;function yE(){return bi||(bi=1,Pa.exports=AE()),Pa.exports}var Fa,Ii;function _E(){if(Ii)return Fa;Ii=1;var e=yE(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=t,s[e.Memo]=a;function i(h){return e.isMemo(h)?a:s[h.$$typeof]||r}var o=Object.defineProperty,l=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,E=Object.getPrototypeOf,v=Object.prototype;function c(h,T,A){if(typeof T!="string"){if(v){var N=E(T);N&&N!==v&&c(h,N,A)}var p=l(T);d&&(p=p.concat(d(T)));for(var y=i(h),P=i(T),R=0;R<p.length;++R){var G=p[R];if(!n[G]&&!(A&&A[G])&&!(P&&P[G])&&!(y&&y[G])){var b=u(T,G);try{o(h,G,b)}catch{}}}}return h}return Fa=c,Fa}_E();var Os=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=f.createContext(null)):f.createContext(null);Os.Consumer;var cE=Os.Provider,pE=cE,NE=Os;function ir(){var e=f.useContext(NE);return TE(e),e}var rs;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(rs||(rs={}));var ns;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(ns||(ns={}));function hd(e){var r=function(n){var t=ir(),a=n.value,s=n.children,i=mn(n,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?t.formatDateToParts(o,i):t.formatTimeToParts(o,i);return s(l)};return r.displayName=ns[e],r}function Qn(e){var r=function(n){var t=ir(),a=n.value,s=n.children,i=mn(n,["value","children"]),o=t[e](a,i);if(typeof s=="function")return s(o);var l=t.textComponent||f.Fragment;return f.createElement(l,null,o)};return r.displayName=rs[e],r}function bd(e){return e&&Object.keys(e).reduce(function(r,n){var t=e[n];return r[n]=yd(t)?RE(t):t,r},{})}var Oi=function(e,r,n,t){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=bd(t),o=es.apply(void 0,ur([e,r,n,i],a,!1));return Array.isArray(o)?f.Children.toArray(o):o},SE=function(e,r){var n=e.defaultRichTextElements,t=mn(e,["defaultRichTextElements"]),a=bd(n),s=vE(H(H(H({},fE),t),{defaultRichTextElements:a}),r),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return H(H({},s),{formatMessage:Oi.bind(null,i,s.formatters),$t:Oi.bind(null,i,s.formatters)})};function hE(e,r){var n=e.values,t=mn(e,["values"]),a=r.values,s=mn(r,["values"]);return Si(a,n)&&Si(t,s)}function Id(e){var r=ir(),n=r.formatMessage,t=r.textComponent,a=t===void 0?f.Fragment:t,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,d=e.children,u=e.tagName,E=u===void 0?a:u,v=e.ignoreTag,c={id:s,description:i,defaultMessage:o},h=n(c,l,{ignoreTag:v});return typeof d=="function"?d(Array.isArray(h)?h:[h]):E?f.createElement(E,null,f.Children.toArray(h)):f.createElement(f.Fragment,null,h)}Id.displayName="FormattedMessage";var Ae=f.memo(Id,hE);Ae.displayName="MemoizedFormattedMessage";Qn("formatDate");Qn("formatTime");Qn("formatNumber");Qn("formatList");Qn("formatDisplayName");hd("formatDate");hd("formatTime");const Od=f.createContext(null),Ld=({children:e,behandling:r})=>{const[n,t]=f.useState();f.useEffect(()=>{n&&t(void 0)},[r.uuid,r.versjon]);const a=f.useMemo(()=>({formData:n,setFormData:t}),[n,t]);return k.jsx(Od,{value:a,children:e})},Dd=()=>{const e=f.useContext(Od);if(!e)throw new Error("FormDataContext.Provider er ikke satt opp");return e};Ld.__docgenInfo={description:"",methods:[],displayName:"FormDataProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]},description:""}}};const Kd=f.createContext(null),Pd=e=>{const{children:r,...n}=e,t=f.useMemo(()=>n,[n]);return k.jsx(Kd,{value:t,children:r})},da=()=>{const e=f.useContext(Kd);if(!e)throw new Error("PanelContext.Provider er ikke satt opp");return e};Pd.__docgenInfo={description:"",methods:[],displayName:"PanelDataProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: AP_TYPE) => Promise<void>",signature:{arguments:[{type:{name:"AP_TYPE"},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""}}};f.createContext(null);const Fd=e=>k.jsx(Ld,{behandling:{uuid:"1",versjon:1},children:k.jsx(e,{})});Fd.__docgenInfo={description:"",methods:[],displayName:"withFormData"};const bE=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],IE=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],OE=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],LE=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],DE=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],KE=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],PE=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],FE=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],ME=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],GE=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],VE=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],UE=[{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"}],wE=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],BE=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],jE=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],HE=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],YE=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],xE=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],qE=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],CE=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],$E=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],JE=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],WE=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],zE=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],ZE=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],XE=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],QE=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],ev=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],rv=JSON.parse('[{"kode":"CAF","kodeverk":"LANDKODER","navn":"SENTRALAFRIKA. REP."},{"kode":"ARG","kodeverk":"LANDKODER","navn":"ARGENTINA"},{"kode":"IOT","kodeverk":"LANDKODER","navn":"BRITISK-INDISKE HAV"},{"kode":"CCK","kodeverk":"LANDKODER","navn":"KOKOSØYENE"},{"kode":"MEX","kodeverk":"LANDKODER","navn":"MEXICO"},{"kode":"CHN","kodeverk":"LANDKODER","navn":"REPUBLIKKEN KINA"},{"kode":"RUS","kodeverk":"LANDKODER","navn":"RUSSLAND"},{"kode":"BHS","kodeverk":"LANDKODER","navn":"BAHAMAS"},{"kode":"SYC","kodeverk":"LANDKODER","navn":"SEYCHELLENE"},{"kode":"CYP","kodeverk":"LANDKODER","navn":"KYPROS"},{"kode":"AUT","kodeverk":"LANDKODER","navn":"ØSTERRIKE"},{"kode":"QAT","kodeverk":"LANDKODER","navn":"QATAR"},{"kode":"VNM","kodeverk":"LANDKODER","navn":"VIETNAM"},{"kode":"HMD","kodeverk":"LANDKODER","navn":"HEARD OG MCDONALD ØYENE"},{"kode":"KEN","kodeverk":"LANDKODER","navn":"KENYA"},{"kode":"ASM","kodeverk":"LANDKODER","navn":"AM. SAMOA"},{"kode":"PAK","kodeverk":"LANDKODER","navn":"PAKISTAN"},{"kode":"ATG","kodeverk":"LANDKODER","navn":"ANTIGUA OG BARBUDA"},{"kode":"TZA","kodeverk":"LANDKODER","navn":"TANZANIA"},{"kode":"ZAF","kodeverk":"LANDKODER","navn":"SØR-AFRIKA"},{"kode":"CMR","kodeverk":"LANDKODER","navn":"KAMERUN"},{"kode":"MLI","kodeverk":"LANDKODER","navn":"MALI"},{"kode":"SLV","kodeverk":"LANDKODER","navn":"EL SALVADOR"},{"kode":"MAF","kodeverk":"LANDKODER","navn":"SAINT MARTIN"},{"kode":"KGZ","kodeverk":"LANDKODER","navn":"KIRGISISTAN"},{"kode":"FJI","kodeverk":"LANDKODER","navn":"FIJI"},{"kode":"RWA","kodeverk":"LANDKODER","navn":"RWANDA"},{"kode":"GEO","kodeverk":"LANDKODER","navn":"GEORGIA"},{"kode":"REU","kodeverk":"LANDKODER","navn":"REUNION"},{"kode":"MTQ","kodeverk":"LANDKODER","navn":"MARTINIQUE"},{"kode":"SDN","kodeverk":"LANDKODER","navn":"SUDAN"},{"kode":"AND","kodeverk":"LANDKODER","navn":"ANDORRA"},{"kode":"COK","kodeverk":"LANDKODER","navn":"COOKØYENE"},{"kode":"SHN","kodeverk":"LANDKODER","navn":"ST. HELENA"},{"kode":"COL","kodeverk":"LANDKODER","navn":"COLOMBIA"},{"kode":"PER","kodeverk":"LANDKODER","navn":"PERU"},{"kode":"STP","kodeverk":"LANDKODER","navn":"SAO TOME OG PRINCIPE"},{"kode":"COM","kodeverk":"LANDKODER","navn":"KOMORENE"},{"kode":"LUX","kodeverk":"LANDKODER","navn":"LUXEMBOURG"},{"kode":"PNG","kodeverk":"LANDKODER","navn":"PAPUA NY-GUINEA"},{"kode":"MKD","kodeverk":"LANDKODER","navn":"MAKEDONIA"},{"kode":"GIN","kodeverk":"LANDKODER","navn":"GUINEA"},{"kode":"CYM","kodeverk":"LANDKODER","navn":"CAYMANØYENE"},{"kode":"VGB","kodeverk":"LANDKODER","navn":"JOMFRUØYENE BRIT."},{"kode":"IRL","kodeverk":"LANDKODER","navn":"IRLAND"},{"kode":"XXX","kodeverk":"LANDKODER","navn":"STATSLØS"},{"kode":"HTI","kodeverk":"LANDKODER","navn":"HAITI"},{"kode":"LBN","kodeverk":"LANDKODER","navn":"LIBANON"},{"kode":"BRN","kodeverk":"LANDKODER","navn":"BRUNEI"},{"kode":"GMB","kodeverk":"LANDKODER","navn":"GAMBIA"},{"kode":"MLT","kodeverk":"LANDKODER","navn":"MALTA"},{"kode":"CRI","kodeverk":"LANDKODER","navn":"COSTA RICA"},{"kode":"UZB","kodeverk":"LANDKODER","navn":"UZBEKISTAN"},{"kode":"CXR","kodeverk":"LANDKODER","navn":"CHRISTMASØYA"},{"kode":"TUR","kodeverk":"LANDKODER","navn":"TYRKIA"},{"kode":"UKR","kodeverk":"LANDKODER","navn":"UKRAINA"},{"kode":"SUN","kodeverk":"LANDKODER","navn":"SOVJETUNIONEN"},{"kode":"PYF","kodeverk":"LANDKODER","navn":"FRANSK POLYNESIA"},{"kode":"MNE","kodeverk":"LANDKODER","navn":"MONTENEGRO"},{"kode":"BIH","kodeverk":"LANDKODER","navn":"BOSNIA-HERCEGOVINA"},{"kode":"PAN","kodeverk":"LANDKODER","navn":"PANAMA"},{"kode":"SJM","kodeverk":"LANDKODER","navn":"SVALBARD OG JAN MAYEN"},{"kode":"NIU","kodeverk":"LANDKODER","navn":"NIUE"},{"kode":"SUR","kodeverk":"LANDKODER","navn":"SURINAM"},{"kode":"MUS","kodeverk":"LANDKODER","navn":"MAURITIUS"},{"kode":"CHE","kodeverk":"LANDKODER","navn":"SVEITS"},{"kode":"BEL","kodeverk":"LANDKODER","navn":"BELGIA"},{"kode":"TTO","kodeverk":"LANDKODER","navn":"TRINIDAD OG TOBAGO"},{"kode":"SWZ","kodeverk":"LANDKODER","navn":"SWAZILAND"},{"kode":"TUN","kodeverk":"LANDKODER","navn":"TUNISIA"},{"kode":"GLP","kodeverk":"LANDKODER","navn":"GUADELOUPE"},{"kode":"KWT","kodeverk":"LANDKODER","navn":"KUWAIT"},{"kode":"DMA","kodeverk":"LANDKODER","navn":"DOMINICA"},{"kode":"BGR","kodeverk":"LANDKODER","navn":"BULGARIA"},{"kode":"ISL","kodeverk":"LANDKODER","navn":"ISLAND"},{"kode":"SVN","kodeverk":"LANDKODER","navn":"SLOVENIA"},{"kode":"PLW","kodeverk":"LANDKODER","navn":"PALAU"},{"kode":"GBR","kodeverk":"LANDKODER","navn":"STORBRITANNIA"},{"kode":"NAM","kodeverk":"LANDKODER","navn":"NAMIBIA"},{"kode":"FSM","kodeverk":"LANDKODER","navn":"MIKRONESIAFØD."},{"kode":"GNB","kodeverk":"LANDKODER","navn":"GUINEA-BISSAU"},{"kode":"UMI","kodeverk":"LANDKODER","navn":"MINDRE STILLEHAVSØYER"},{"kode":"MDA","kodeverk":"LANDKODER","navn":"MOLDOVA"},{"kode":"MMR","kodeverk":"LANDKODER","navn":"MYANMAR (BURMA)"},{"kode":"MOZ","kodeverk":"LANDKODER","navn":"MOSAMBIK"},{"kode":"SGS","kodeverk":"LANDKODER","navn":"SØR-GEORGIA OG SØR-SANDWICHØYE"},{"kode":"NPL","kodeverk":"LANDKODER","navn":"NEPAL"},{"kode":"BES","kodeverk":"LANDKODER","navn":"BONAIRE, SINT EUSTATIUS, SABA"},{"kode":"LBR","kodeverk":"LANDKODER","navn":"LIBERIA"},{"kode":"MDG","kodeverk":"LANDKODER","navn":"MADAGASKAR"},{"kode":"VIR","kodeverk":"LANDKODER","navn":"JOMFRUØYENE AM."},{"kode":"ARE","kodeverk":"LANDKODER","navn":"DE ARABISKE EMIRATER"},{"kode":"USA","kodeverk":"LANDKODER","navn":"USA"},{"kode":"NFK","kodeverk":"LANDKODER","navn":"NORFOLKØYA"},{"kode":"HKG","kodeverk":"LANDKODER","navn":"HONGKONG"},{"kode":"DEU","kodeverk":"LANDKODER","navn":"TYSKLAND"},{"kode":"LIE","kodeverk":"LANDKODER","navn":"LIECHTENSTEIN"},{"kode":"ECU","kodeverk":"LANDKODER","navn":"ECUADOR"},{"kode":"POL","kodeverk":"LANDKODER","navn":"POLEN"},{"kode":"PRK","kodeverk":"LANDKODER","navn":"NORD-KOREA"},{"kode":"GGY","kodeverk":"LANDKODER","navn":"GUERNSEY"},{"kode":"NZL","kodeverk":"LANDKODER","navn":"NEW ZEALAND"},{"kode":"MAR","kodeverk":"LANDKODER","navn":"MAROKKO"},{"kode":"BWA","kodeverk":"LANDKODER","navn":"BOTSWANA"},{"kode":"GUM","kodeverk":"LANDKODER","navn":"GUAM"},{"kode":"YUG","kodeverk":"LANDKODER","navn":"JUGOSLAVIA"},{"kode":"SEN","kodeverk":"LANDKODER","navn":"SENEGAL"},{"kode":"MWI","kodeverk":"LANDKODER","navn":"MALAWI"},{"kode":"TKM","kodeverk":"LANDKODER","navn":"TURKMENISTAN"},{"kode":"GAB","kodeverk":"LANDKODER","navn":"GABON"},{"kode":"FIN","kodeverk":"LANDKODER","navn":"FINLAND"},{"kode":"PRY","kodeverk":"LANDKODER","navn":"PARAGUAY"},{"kode":"PSE","kodeverk":"LANDKODER","navn":"DET PALESTINSKE OMRÅDET"},{"kode":"FRA","kodeverk":"LANDKODER","navn":"FRANKRIKE"},{"kode":"ZWE","kodeverk":"LANDKODER","navn":"ZIMBABWE"},{"kode":"AZE","kodeverk":"LANDKODER","navn":"AZERBAJDZJAN"},{"kode":"SXM","kodeverk":"LANDKODER","navn":"SINT MAARTEN"},{"kode":"NIC","kodeverk":"LANDKODER","navn":"NICARAGUA"},{"kode":"CAN","kodeverk":"LANDKODER","navn":"CANADA"},{"kode":"COG","kodeverk":"LANDKODER","navn":"KONGO, REPUBLIKKEN"},{"kode":"JPN","kodeverk":"LANDKODER","navn":"JAPAN"},{"kode":"KOR","kodeverk":"LANDKODER","navn":"SØR-KOREA"},{"kode":"HUN","kodeverk":"LANDKODER","navn":"UNGARN"},{"kode":"YEM","kodeverk":"LANDKODER","navn":"JEMEN"},{"kode":"CHL","kodeverk":"LANDKODER","navn":"CHILE"},{"kode":"BRB","kodeverk":"LANDKODER","navn":"BARBADOS"},{"kode":"DNK","kodeverk":"LANDKODER","navn":"DANMARK"},{"kode":"NRU","kodeverk":"LANDKODER","navn":"NAURU"},{"kode":"VCT","kodeverk":"LANDKODER","navn":"ST. VINCENT"},{"kode":"BEN","kodeverk":"LANDKODER","navn":"BENIN"},{"kode":"SMR","kodeverk":"LANDKODER","navn":"SAN MARINO"},{"kode":"TCD","kodeverk":"LANDKODER","navn":"TSJAD"},{"kode":"CUW","kodeverk":"LANDKODER","navn":"CURACAO"},{"kode":"IRN","kodeverk":"LANDKODER","navn":"IRAN"},{"kode":"SWE","kodeverk":"LANDKODER","navn":"SVERIGE"},{"kode":"ERI","kodeverk":"LANDKODER","navn":"ERITREA"},{"kode":"XUK","kodeverk":"LANDKODER","navn":"UKJENT"},{"kode":"MDV","kodeverk":"LANDKODER","navn":"MALDIVENE"},{"kode":"CSK","kodeverk":"LANDKODER","navn":"TSJEKKOSLOVAKIA"},{"kode":"GRD","kodeverk":"LANDKODER","navn":"GRENADA"},{"kode":"HND","kodeverk":"LANDKODER","navn":"HONDURAS"},{"kode":"FRO","kodeverk":"LANDKODER","navn":"FÆRØYENE"},{"kode":"COD","kodeverk":"LANDKODER","navn":"KONGO, DEN DEMOKR. REPUBL"},{"kode":"SRB","kodeverk":"LANDKODER","navn":"SERBIA"},{"kode":"AGO","kodeverk":"LANDKODER","navn":"ANGOLA"},{"kode":"NCL","kodeverk":"LANDKODER","navn":"NY-KALEDONIA"},{"kode":"SCG","kodeverk":"LANDKODER","navn":"SERBIA OG MONTENEGRO"},{"kode":"GTM","kodeverk":"LANDKODER","navn":"GUATEMALA"},{"kode":"AFG","kodeverk":"LANDKODER","navn":"AFGHANISTAN"},{"kode":"JAM","kodeverk":"LANDKODER","navn":"JAMAICA"},{"kode":"UGA","kodeverk":"LANDKODER","navn":"UGANDA"},{"kode":"IMN","kodeverk":"LANDKODER","navn":"ISLE OF MAN"},{"kode":"ISR","kodeverk":"LANDKODER","navn":"ISRAEL"},{"kode":"SOM","kodeverk":"LANDKODER","navn":"SOMALIA"},{"kode":"MNP","kodeverk":"LANDKODER","navn":"NORD-MARIANENE"},{"kode":"XXK","kodeverk":"LANDKODER","navn":"KOSOVO"},{"kode":"BLR","kodeverk":"LANDKODER","navn":"HVITERUSSLAND"},{"kode":"LSO","kodeverk":"LANDKODER","navn":"LESOTHO"},{"kode":"NER","kodeverk":"LANDKODER","navn":"NIGER"},{"kode":"IDN","kodeverk":"LANDKODER","navn":"INDONESIA"},{"kode":"CZE","kodeverk":"LANDKODER","navn":"DEN TSJEKKISKE REP."},{"kode":"URY","kodeverk":"LANDKODER","navn":"URUGUAY"},{"kode":"BGD","kodeverk":"LANDKODER","navn":"BANGLADESH"},{"kode":"WLF","kodeverk":"LANDKODER","navn":"WALLIS/FUTUNAØYENE"},{"kode":"CIV","kodeverk":"LANDKODER","navn":"ELFENBEINSKYSTEN"},{"kode":"ABW","kodeverk":"LANDKODER","navn":"ARUBA"},{"kode":"SLB","kodeverk":"LANDKODER","navn":"SALOMONØYENE"},{"kode":"TWN","kodeverk":"LANDKODER","navn":"TAIWAN"},{"kode":"SLE","kodeverk":"LANDKODER","navn":"SIERRA LEONE"},{"kode":"BRA","kodeverk":"LANDKODER","navn":"BRASIL"},{"kode":"DJI","kodeverk":"LANDKODER","navn":"DJIBOUTI"},{"kode":"PRI","kodeverk":"LANDKODER","navn":"PUERTO RICO"},{"kode":"PRT","kodeverk":"LANDKODER","navn":"PORTUGAL"},{"kode":"ANT","kodeverk":"LANDKODER","navn":"DE NEDERLANDSKE ANTILLENE"},{"kode":"THA","kodeverk":"LANDKODER","navn":"THAILAND"},{"kode":"TLS","kodeverk":"LANDKODER","navn":"ØST-TIMOR"},{"kode":"SPM","kodeverk":"LANDKODER","navn":"ST-PIERRE OG MIQUELON"},{"kode":"ALB","kodeverk":"LANDKODER","navn":"ALBANIA"},{"kode":"EGY","kodeverk":"LANDKODER","navn":"EGYPT"},{"kode":"GRC","kodeverk":"LANDKODER","navn":"HELLAS"},{"kode":"BFA","kodeverk":"LANDKODER","navn":"BURKINA FASO"},{"kode":"ALA","kodeverk":"LANDKODER","navn":"ÅLAND"},{"kode":"BOL","kodeverk":"LANDKODER","navn":"BOLIVIA"},{"kode":"DDR","kodeverk":"LANDKODER","navn":"TYSKLAND (ØST)"},{"kode":"HRV","kodeverk":"LANDKODER","navn":"KROATIA"},{"kode":"AUS","kodeverk":"LANDKODER","navn":"AUSTRALIA"},{"kode":"NGA","kodeverk":"LANDKODER","navn":"NIGERIA"},{"kode":"LBY","kodeverk":"LANDKODER","navn":"LIBYA"},{"kode":"MYT","kodeverk":"LANDKODER","navn":"MAYOTTE"},{"kode":"LVA","kodeverk":"LANDKODER","navn":"LATVIA"},{"kode":"BTN","kodeverk":"LANDKODER","navn":"BHUTAN"},{"kode":"MSR","kodeverk":"LANDKODER","navn":"MONSERRAT"},{"kode":"???","kodeverk":"LANDKODER","navn":"UOPPGITT/UKJENT"},{"kode":"OMN","kodeverk":"LANDKODER","navn":"OMAN"},{"kode":"SVK","kodeverk":"LANDKODER","navn":"SLOVAKIA"},{"kode":"TUV","kodeverk":"LANDKODER","navn":"TUVALU"},{"kode":"VEN","kodeverk":"LANDKODER","navn":"VENEZUELA"},{"kode":"ITA","kodeverk":"LANDKODER","navn":"ITALIA"},{"kode":"KHM","kodeverk":"LANDKODER","navn":"KAMBODSJA"},{"kode":"ARM","kodeverk":"LANDKODER","navn":"ARMENIA"},{"kode":"LCA","kodeverk":"LANDKODER","navn":"ST. LUCIA"},{"kode":"GIB","kodeverk":"LANDKODER","navn":"GIBRALTAR"},{"kode":"JEY","kodeverk":"LANDKODER","navn":"JERSEY"},{"kode":"LAO","kodeverk":"LANDKODER","navn":"LAOS"},{"kode":"BHR","kodeverk":"LANDKODER","navn":"BAHRAIN"},{"kode":"ESH","kodeverk":"LANDKODER","navn":"VEST-SAHARA"},{"kode":"TKL","kodeverk":"LANDKODER","navn":"TOKELAU"},{"kode":"MNG","kodeverk":"LANDKODER","navn":"MONGOLIA"},{"kode":"BLZ","kodeverk":"LANDKODER","navn":"BELIZE"},{"kode":"GUF","kodeverk":"LANDKODER","navn":"FRANSK GUYANA"},{"kode":"TCA","kodeverk":"LANDKODER","navn":"TURKS/CAICOSØYENE"},{"kode":"WSM","kodeverk":"LANDKODER","navn":"SAMOA"},{"kode":"JOR","kodeverk":"LANDKODER","navn":"JORDAN"},{"kode":"MRT","kodeverk":"LANDKODER","navn":"MAURITANIA"},{"kode":"CUB","kodeverk":"LANDKODER","navn":"CUBA"},{"kode":"BDI","kodeverk":"LANDKODER","navn":"BURUNDI"},{"kode":"GHA","kodeverk":"LANDKODER","navn":"GHANA"},{"kode":"KNA","kodeverk":"LANDKODER","navn":"ST.KITTS OG NEVIS"},{"kode":"ETH","kodeverk":"LANDKODER","navn":"ETIOPIA"},{"kode":"SSD","kodeverk":"LANDKODER","navn":"SØR-SUDAN"},{"kode":"VAT","kodeverk":"LANDKODER","navn":"VATIKANSTATEN"},{"kode":"CPV","kodeverk":"LANDKODER","navn":"KAPP VERDE"},{"kode":"PCN","kodeverk":"LANDKODER","navn":"PITCAIRN"},{"kode":"SGP","kodeverk":"LANDKODER","navn":"SINGAPORE"},{"kode":"KAZ","kodeverk":"LANDKODER","navn":"KAZAKHSTAN"},{"kode":"MYS","kodeverk":"LANDKODER","navn":"MALAYSIA"},{"kode":"PHL","kodeverk":"LANDKODER","navn":"FILIPPINENE"},{"kode":"EST","kodeverk":"LANDKODER","navn":"ESTLAND"},{"kode":"NOR","kodeverk":"LANDKODER","navn":"NORGE"},{"kode":"BMU","kodeverk":"LANDKODER","navn":"BERMUDA"},{"kode":"LTU","kodeverk":"LANDKODER","navn":"LITAUEN"},{"kode":"MAC","kodeverk":"LANDKODER","navn":"MACAO"},{"kode":"TON","kodeverk":"LANDKODER","navn":"TONGA"},{"kode":"ROU","kodeverk":"LANDKODER","navn":"ROMANIA"},{"kode":"BLM","kodeverk":"LANDKODER","navn":"SAINT BARTHELEMY"},{"kode":"SAU","kodeverk":"LANDKODER","navn":"SAUDI-ARABIA"},{"kode":"GNQ","kodeverk":"LANDKODER","navn":"EKVATORIAL-GUINEA"},{"kode":"TGO","kodeverk":"LANDKODER","navn":"TOGO"},{"kode":"ZMB","kodeverk":"LANDKODER","navn":"ZAMBIA"},{"kode":"VUT","kodeverk":"LANDKODER","navn":"VANUATU"},{"kode":"DZA","kodeverk":"LANDKODER","navn":"ALGERIE"},{"kode":"TJK","kodeverk":"LANDKODER","navn":"TADZJIKISTAN"},{"kode":"NLD","kodeverk":"LANDKODER","navn":"NEDERLAND"},{"kode":"KIR","kodeverk":"LANDKODER","navn":"KIRIBATI"},{"kode":"GUY","kodeverk":"LANDKODER","navn":"GUYANA"},{"kode":"BVT","kodeverk":"LANDKODER","navn":"BOUVETØYA"},{"kode":"IND","kodeverk":"LANDKODER","navn":"INDIA"},{"kode":"LKA","kodeverk":"LANDKODER","navn":"SRI LANKA"},{"kode":"SYR","kodeverk":"LANDKODER","navn":"SYRIA"},{"kode":"ESP","kodeverk":"LANDKODER","navn":"SPANIA"},{"kode":"GRL","kodeverk":"LANDKODER","navn":"GRØNLAND"},{"kode":"AIA","kodeverk":"LANDKODER","navn":"ANGUILLA"},{"kode":"IRQ","kodeverk":"LANDKODER","navn":"IRAK"},{"kode":"MCO","kodeverk":"LANDKODER","navn":"MONACO"},{"kode":"MHL","kodeverk":"LANDKODER","navn":"MARSHALLØYENE"},{"kode":"DOM","kodeverk":"LANDKODER","navn":"DEN DOMINIKANSKE REP"},{"kode":"FLK","kodeverk":"LANDKODER","navn":"FALKLANDSØYENE"}]'),nv=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],tv=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],av=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],sv=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],iv=JSON.parse('[{"kode":"FODSELSDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødselsdato"},{"kode":"TILBAKETREKK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Tilbaketrekk"},{"kode":"ER_ANKEFRIST_IKKE_OVERHOLDT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er ankefrist ikke overholdt"},{"kode":"FNR","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødselsnummer"},{"kode":"TERMINBEKREFTELSE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Terminbekreftelse"},{"kode":"TERMINDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Termindato"},{"kode":"ANKE_RESULTAT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Anke resultat"},{"kode":"UTTAK_SPLITT_TIDSPERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resulterende periode ved splitting"},{"kode":"UTTAK_TREKKDAGER_FLERBARN_KVOTE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Trekkdager flerbarn kvote"},{"kode":"OPPHOLDSRETT_IKKE_EOS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker har ikke oppholdsrett i EØS"},{"kode":"TILRETTELEGGING_SKAL_BRUKES","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avgjør om tilrettelegging skal brukes"},{"kode":"ER_ANKE_IKKE_KONKRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er anke ikke konkret."},{"kode":"BEHANDLING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Behandling"},{"kode":"UTTAK_GRADERING_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Gradering av arbeidsforhold"},{"kode":"ANKE_AVVIST_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til avvist anke"},{"kode":"INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntekt"},{"kode":"SOKNADSFRISTVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søknadsfristvilkåret"},{"kode":"DAGPENGER_INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dagpenger"},{"kode":"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Til og med dato fastsatt av saksbehandler"},{"kode":"SOKNADSFRIST","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søknadsfrist"},{"kode":"VILKAR_SOM_ANVENDES","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Vilkår som anvendes"},{"kode":"PERIODE_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Periode f.o.m."},{"kode":"UTTAK_PROSENT_UTBETALING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utbetalingsgrad"},{"kode":"NYTT_REFUSJONSKRAV","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Nytt refusjonskrav"},{"kode":"DODSDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dødsdato"},{"kode":"DOKUMENTASJON_FORELIGGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dokumentasjon foreligger"},{"kode":"LØNNSENDRING_I_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Lønnsendring i beregningsperioden"},{"kode":"AVKLART_PERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklart periode"},{"kode":"SVANGERSKAPSPENGERVILKÅRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Svangerskapsvilkåret"},{"kode":"KLAGE_OMGJØR_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til omgjøring"},{"kode":"AKTIVITET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Aktivitet"},{"kode":"UTTAK_STØNADSKONTOTYPE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Stønadskontotype"},{"kode":"ALENEOMSORG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Aleneomsorg"},{"kode":"OMSORG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Omsorg"},{"kode":"KONTAKTPERSON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Kontaktperson"},{"kode":"ER_KLAGE_KONKRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"TILRETTELEGGING_BEHOV_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Tilrettelegging behov FOM"},{"kode":"ANNEN_FORELDER_RETT_EØS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Annen forelder har opptjent rett fra land i EØS"},{"kode":"AKTIVITETSKRAV_AVKLARING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklaring om mor er i aktivitet"},{"kode":"FASTSETT_RESULTAT_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett resultat for perioden"},{"kode":"FRILANSVIRKSOMHET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Frilansvirksomhet"},{"kode":"MANN_ADOPTERER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mann adopterer"},{"kode":"ANDEL_ARBEID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Andel i arbeid"},{"kode":"DELVIS_TILRETTELEGGING_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Delvis tilrettelegging FOM"},{"kode":"OPPTJENINGSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Opptjeningsvilkåret"},{"kode":"ER_KLAGER_PART","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"UTTAK_PERIODE_RESULTAT_TYPE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultattype for periode"},{"kode":"UTLAND","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utland"},{"kode":"BRUK_ANTALL_I_TPS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra folkeregisteret"},{"kode":"AKTIVITET_PERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Perioden med aktivitet"},{"kode":"FASTSETT_ETTERLØNN_SLUTTPAKKE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{"kode":"IKKE_OMSORG_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Perioden Søker har ikke omsorg for barnet"},{"kode":"DEKNINGSGRAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dekningsgrad"},{"kode":"ER_ANKEN_IKKE_SIGNERT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"er anken ikke signert."},{"kode":"SYKDOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Sykdom"},{"kode":"UTSTEDTDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utstedtdato"},{"kode":"FODSELSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødsel"},{"kode":"NAVN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Navn"},{"kode":"UTTAK_TREKKDAGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Trekkdager"},{"kode":"PA_KLAGD_BEHANDLINGID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Påklagd behandlingId"},{"kode":"VURDER_ETTERLØNN_SLUTTPAKKE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Har søker inntekt fra etterlønn eller sluttpakke"},{"kode":"OPPHOLDSRETT_EOS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker har oppholdsrett i EØS"},{"kode":"RETT_TIL_FORELDREPENGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Rett til foreldrepenger"},{"kode":"INNTEKTSKATEGORI","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntektskategori"},{"kode":"ADOPTERER_ALENE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Adopterer alene"},{"kode":"ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Arbeidsforhold"},{"kode":"BRUKER_TVUNGEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker er under tvungen forvaltning"},{"kode":"DELVIS_REFUSJON_FØR_STARTDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Delvis refusjon som utbetales før startdato for full refusjon"},{"kode":"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Endring tidsbegrenset arbeidsforhold"},{"kode":"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{"kode":"MANDAT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mandat"},{"kode":"MOR_MOTTAR_UFØRETRYGD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mor mottar uføretrygd"},{"kode":"HEL_TILRETTELEGGING_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Hel tilrettelegging FOM"},{"kode":"ORGANISASJONSNUMMER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Organisasjonsnummer"},{"kode":"UTTAK_GRADERING_AVSLAG_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak avslag gradering"},{"kode":"ER_KLAGEN_SIGNERT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"ER_KLAGEFRIST_OVERHOLDT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"OMSORGSVILKAR","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Foreldreansvar"},{"kode":"PA_ANKET_BEHANDLINGID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"på anket behandlingsId."},{"kode":"SLUTTE_ARBEID_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Slutte arbeid FOM"},{"kode":"BRUK_ANTALL_I_SOKNAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra søknad"},{"kode":"KLAGE_RESULTAT_NFP","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultat"},{"kode":"FORDELING_FOR_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fordeling for arbeidsforhold"},{"kode":"UTTAK_SAMTIDIG_UTTAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Samtidig uttak"},{"kode":"ER_SOKER_BOSATT_I_NORGE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er søker bosatt i Norge?"},{"kode":"FRILANS_INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Frilans inntekt"},{"kode":"FASTSETT_VIDERE_BEHANDLING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett videre behandling"},{"kode":"BRUK_ANTALL_I_VEDTAKET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra vedtaket"},{"kode":"OMSORGSOVERTAKELSESDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Omsorgsovertakelsesdato"},{"kode":"UTTAK_PERIODE_RESULTAT_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultat årsak"},{"kode":"ENDRING_NAERING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Endring i næring"},{"kode":"FORDELING_FOR_NY_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny andel med fordeling"},{"kode":"BEHANDLENDE_ENHET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Behandlende enhet"},{"kode":"BRUTTO_NAERINGSINNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Brutto næringsinntekt"},{"kode":"FORDELING_ETTER_BESTEBEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fordeling etter besteberegning"},{"kode":"STARTDATO_FRA_SOKNAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Startdato fra søknad"},{"kode":"NY_STARTDATO_REFUSJON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny startdato for refusjon"},{"kode":"OVERSTYRT_VURDERING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Overstyrt vurdering"},{"kode":"KLAGE_RESULTAT_KA","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ytelsesvedtak"},{"kode":"FARESIGNALER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Faresignaler"},{"kode":"NY_AKTIVITET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Det er lagt til ny aktivitet for"},{"kode":"MOTTAR_YTELSE_FRILANS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottar søker ytelse for frilansaktiviteten"},{"kode":"NY_REFUSJONSFRIST","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny refusjonsfrist"},{"kode":"OVERSTYRT_BEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Overstyrt beregning"},{"kode":"AVKLARSAKSOPPLYSNINGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklar saksopplysninger"},{"kode":"INNTEKT_FRA_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntekt fra arbeidsforhold"},{"kode":"SOKERSOPPLYSNINGSPLIKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søkers opplysningsplikt"},{"kode":"SELVSTENDIG_NAERINGSDRIVENDE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Selvstendig næringsdrivende"},{"kode":"GYLDIG_MEDLEM_FOLKETRYGDEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Gyldig medlem i folketrygden"},{"kode":"MOTTATT_DATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottatt dato"},{"kode":"ANTALL_BARN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Antall barn"},{"kode":"EKTEFELLES_BARN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ektefelles barn"},{"kode":"MILITÆR_ELLER_SIVIL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Militær- eller siviltjeneste"},{"kode":"PERIODE_TOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Periode t.o.m."},{"kode":"FORELDREANSVARSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Foreldreansvar"},{"kode":"STILLINGSPROSENT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Stillingsprosent"},{"kode":"ADOPSJONSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Adopsjon"},{"kode":"ANKE_OMGJØR_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til omgjøring"},{"kode":"INNTEKTSKATEGORI_FOR_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntektskategori for andel"},{"kode":"KONTROLL_AV_BESTEBEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Kontroll av besteberegning"},{"kode":"MOR_MOTTAR_STØNAD_EØS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mor mottar foreldrepenger fra land i EØS"},{"kode":"ER_ANKER_IKKE_PART","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Angir om anker ikke er part i saken."},{"kode":"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er vilkårene for tilbakekreving oppfylt"},{"kode":"NY_FORDELING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny fordeling for"},{"kode":"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er det særlige grunner til reduksjon"},{"kode":"MOTTAR_YTELSE_ARBEID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottar søker ytelse for arbeid i {value}"},{"kode":"TYPE_VERGE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Type verge"}]'),ov=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],lv=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],dv=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],uv=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],gv=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],kv=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],Ev=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],vv=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],mv=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],Tv=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],fv=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],Rv=[{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"}],Av=[{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],yv=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],_v=[{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"},{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"}],cv=[{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"}],pv={RelasjonsRolleType:bE,HistorikkinnslagType:IE,UttakUtsettelseType:OE,FagsakYtelseType:LE,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:DE,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:KE,BeregningsgrunnlagAndeltype:PE,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:FE,KonsekvensForYtelsen:ME,Inntektskategori:GE,SivilstandType:VE,SkjermlenkeType:UE,FaktaOmBeregningTilfelle:wE,KlageVurdering:BE,HistorikkBegrunnelseType:jE,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:HE,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:YE,VergeType:xE,TilbakekrevingVidereBehandling:qE,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:CE,KlageHjemmel:$E,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:JE,ArbeidType:WE,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:zE,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:ZE,FordelingPeriodeKilde:XE,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:QE,Arbeidskategori:ev,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:rv,BehandlingType:nv,KontrollerAktivitetskravAvklaring:tv,InnsynResultatType:av,MedlemskapType:sv,HistorikkEndretFeltType:iv,PersonstatusType:ov,Fagsystem:lv,AnkeVurdering:dv,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:uv,VirksomhetType:gv,MedlemskapDekningType:kv,ArbeidsforholdHandlingType:Ev,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:JSON.parse('{"FP_VK_3":[{"kode":"1007","kodeverk":"AVSLAGSARSAK","navn":"Søkt for sent","lovHjemmel":null}],"FP_VK_4":[{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1005","kodeverk":"AVSLAGSARSAK","navn":"Ektefelles/samboers barn","lovHjemmel":null},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1006","kodeverk":"AVSLAGSARSAK","navn":"Mann adopterer ikke alene","lovHjemmel":null},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_1":[{"kode":"1002","kodeverk":"AVSLAGSARSAK","navn":"Søker er medmor","lovHjemmel":null},{"kode":"1031","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}"},{"kode":"1003","kodeverk":"AVSLAGSARSAK","navn":"Søker er far","lovHjemmel":null},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1001","kodeverk":"AVSLAGSARSAK","navn":"Søkt for tidlig","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1026","kodeverk":"AVSLAGSARSAK","navn":"Fødselsdato ikke oppgitt eller registrert","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_2":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"-":[],"FP_VK_41":[{"kode":"1041","kodeverk":"AVSLAGSARSAK","navn":"For lavt brutto beregningsgrunnlag","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_41\\", \\"lovreferanse\\": \\"14-7\\"}]}]}"}],"FP_VK_21":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_11":[{"kode":"1027","kodeverk":"AVSLAGSARSAK","navn":"Ingen barn dokumentert på far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1028","kodeverk":"AVSLAGSARSAK","navn":"Mor fyller ikke vilkåret for sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1029","kodeverk":"AVSLAGSARSAK","navn":"Bruker er ikke registrert som far/medmor til barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_33":[{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1017","kodeverk":"AVSLAGSARSAK","navn":"Omsorgsovertakelse etter 56 uker","lovHjemmel":null},{"kode":"1016","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1018","kodeverk":"AVSLAGSARSAK","navn":"Ikke foreldreansvar alene etter barnelova","lovHjemmel":null}],"FP_VK_34":[{"kode":"1019","kodeverk":"AVSLAGSARSAK","navn":"Manglende dokumentasjon","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_34\\", \\"lovreferanse\\": \\"21-3\\"}]}]}"}],"FP_VK_23":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_8":[{"kode":"1014","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke foreldreansvar","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1013","kodeverk":"AVSLAGSARSAK","navn":"Barn ikke under 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1015","kodeverk":"AVSLAGSARSAK","navn":"Søker har hatt vanlig samvær med barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"}],"SVP_VK_1":[{"kode":"1065","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"},{"kode":"1062","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker har mottatt sykepenger","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1066","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"},{"kode":"1064","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1063","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1061","kodeverk":"AVSLAGSARSAK","navn":"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 3. ledd\\"}]}]}"},{"kode":"1060","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker er ikke gravid kvinne","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"}],"FP_VK_16":[{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1051","kodeverk":"AVSLAGSARSAK","navn":"Stebarnsadopsjon ikke flere dager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_5":[{"kode":"1009","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død","lovHjemmel":null},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1008","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1012","kodeverk":"AVSLAGSARSAK","navn":"Far har ikke omsorg for barnet","lovHjemmel":null},{"kode":"1010","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død ved fødsel/omsorg","lovHjemmel":null}],"FP_VK_2_L":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"FP_VK_2_F":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1052","kodeverk":"AVSLAGSARSAK","navn":"Innflyttet for mindre enn ett år siden","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK_2_F\\", \\"lovreferanse\\": \\"14-17 5. ledd\\"}]}]}"}]}'),OpptjeningAktivitetType:vv,PermisjonsbeskrivelseType:mv,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:Tv,MedlemskapManuellVurderingType:fv,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:Rv,NaturalYtelseType:Av,PeriodeResultatÅrsak:JSON.parse('[{"kode":"2010","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4072","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjuende ledd: Barnet er dødt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Ikke heltidsarbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4085","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Det er ikke samtykke mellom partene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-16\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4052","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4084","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4097","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Adopsjonsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4104","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Stønadsperiode for nytt barn","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4086","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-11\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ikke stønadsdager igjen på stønadskonto","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ferie/arbeid innenfor de første 6 ukene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4112","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Barnets innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2017","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2036","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4071","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Bruker er død","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4098","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Foreldreansvarsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4067","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4066","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2026","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12, jf. §14-16: Gradering av kvote/overført kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4081","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4053","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2014","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4056","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2016","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2004","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2018","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2024","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4068","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4087","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-2: Opphør medlemskap","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-2\\"}}}","sortering":"14-02","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4110","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4115","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4096","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Fødselsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4073","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4069","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4062","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4089","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-9\\"}}}","sortering":"14-11-0","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4075","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjuende ledd: Ikke sammenhengende perioder","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2028","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4060","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2006","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger før fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4105","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4058","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Innvilget fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4095","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["MOR"]},{"kode":"4116","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4092","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Avslag overføring - har ikke aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4008","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4064","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4111","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4054","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-09-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4077","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10 a\\"}}}","sortering":"14-10-0-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2019","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Avslag utsettelse før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4050","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Innvilget uttak av kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4082","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2027","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4088","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4063","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4099","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-6: Opptjeningsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-6\\"}}}","sortering":"14-06","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4103","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-13: Innvilget fellesperiode til far","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Mor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4107","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Barnet er over 3 år","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ikke lovbestemt ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4059","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13, 14-9\\"}}}","sortering":"14-13-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2021","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4070","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4074","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,21-3\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2011","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4065","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4057","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13,14-16\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4076","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4040","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4061","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4041","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§22-13 tredje ledd: Brudd på søknadsfrist","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"22-13\\"}}}","sortering":"22-13-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4106","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15: Innvilget foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4055","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4093","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16: Avslag gradering - søker er ikke i arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4102","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4051","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2015","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4100","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 andre ledd: Uttak før omsorgsovertakelse","lovHjemmel":"","sortering":"14-10-2","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Far/medmor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4117","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]}]'),ForeldreType:yv,AdresseType:_v,FagsakMarkering:cv},Nv=()=>(...e)=>(ed("button-click")(...e),Promise.resolve()),Sv={uuid:"1223-2323-2323-22332",versjon:1,sprakkode:"NO",type:Ge.FORSTEGANGSSOKNAD,status:we.BEHANDLING_UTREDES,behandlingPaaVent:!1,behandlingHenlagt:!1},hv={saksnummer:"1234567",fagsakYtelseType:Z.FORELDREPENGER,bruker:{navn:"Kari Nordmann"},annenPart:{navn:"Ola Nordmann"},relasjonsRolleType:Ca.MOR,annenpartBehandling:{relasjonsRolleType:Ca.FAR}},bv=[],Md=(e,r)=>{const{fagsak:n,behandling:t,aksjonspunkterForPanel:a,isReadOnly:s,submitCallback:i,alleMerknaderFraBeslutter:o}=r.args,l=a??bv;return k.jsx(Pd,{fagsak:n??hv,behandling:t??Sv,aksjonspunkterForPanel:l,harÅpneAksjonspunkter:l.some(d=>d.status===Mr.OPPRETTET),alleKodeverk:pv,alleMerknaderFraBeslutter:o??{},isReadOnly:s??!1,submitCallback:i??Nv(),children:k.jsx(e,{})})};Md.__docgenInfo={description:"",methods:[],displayName:"withPanelData"};const Gd=e=>`${Number(e).toLocaleString("nb-NO").replace(/,|\s/g," ")} kr`;function Ls(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ts={exports:{}},Iv=ts.exports,Li;function Ov(){return Li||(Li=1,function(e,r){(function(n,t){e.exports=t()})(Iv,function(){var n,t,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=31536e6,u=2628e6,E=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:d,months:u,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},c=function(G){return G instanceof P},h=function(G,b,S){return new P(G,S,b.$l)},T=function(G){return t.p(G)+"s"},A=function(G){return G<0},N=function(G){return A(G)?Math.ceil(G):Math.floor(G)},p=function(G){return Math.abs(G)},y=function(G,b){return G?A(G)?{negative:!0,format:""+p(G)+b}:{negative:!1,format:""+G+b}:{negative:!1,format:""}},P=function(){function G(S,U,j){var Y=this;if(this.$d={},this.$l=j,S===void 0&&(this.$ms=0,this.parseFromMilliseconds()),U)return h(S*v[T(U)],this);if(typeof S=="number")return this.$ms=S,this.parseFromMilliseconds(),this;if(typeof S=="object")return Object.keys(S).forEach(function(q){Y.$d[T(q)]=S[q]}),this.calMilliseconds(),this;if(typeof S=="string"){var D=S.match(E);if(D){var K=D.slice(2).map(function(q){return q!=null?Number(q):0});return this.$d.years=K[0],this.$d.months=K[1],this.$d.weeks=K[2],this.$d.days=K[3],this.$d.hours=K[4],this.$d.minutes=K[5],this.$d.seconds=K[6],this.calMilliseconds(),this}}return this}var b=G.prototype;return b.calMilliseconds=function(){var S=this;this.$ms=Object.keys(this.$d).reduce(function(U,j){return U+(S.$d[j]||0)*v[j]},0)},b.parseFromMilliseconds=function(){var S=this.$ms;this.$d.years=N(S/d),S%=d,this.$d.months=N(S/u),S%=u,this.$d.days=N(S/o),S%=o,this.$d.hours=N(S/i),S%=i,this.$d.minutes=N(S/s),S%=s,this.$d.seconds=N(S/a),S%=a,this.$d.milliseconds=S},b.toISOString=function(){var S=y(this.$d.years,"Y"),U=y(this.$d.months,"M"),j=+this.$d.days||0;this.$d.weeks&&(j+=7*this.$d.weeks);var Y=y(j,"D"),D=y(this.$d.hours,"H"),K=y(this.$d.minutes,"M"),q=this.$d.seconds||0;this.$d.milliseconds&&(q+=this.$d.milliseconds/1e3,q=Math.round(1e3*q)/1e3);var J=y(q,"S"),ee=S.negative||U.negative||Y.negative||D.negative||K.negative||J.negative,Re=D.format||K.format||J.format?"T":"",Se=(ee?"-":"")+"P"+S.format+U.format+Y.format+Re+D.format+K.format+J.format;return Se==="P"||Se==="-P"?"P0D":Se},b.toJSON=function(){return this.toISOString()},b.format=function(S){var U=S||"YYYY-MM-DDTHH:mm:ss",j={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return U.replace(l,function(Y,D){return D||String(j[Y])})},b.as=function(S){return this.$ms/v[T(S)]},b.get=function(S){var U=this.$ms,j=T(S);return j==="milliseconds"?U%=1e3:U=j==="weeks"?N(U/v[j]):this.$d[j],U||0},b.add=function(S,U,j){var Y;return Y=U?S*v[T(U)]:c(S)?S.$ms:h(S,this).$ms,h(this.$ms+Y*(j?-1:1),this)},b.subtract=function(S,U){return this.add(S,U,!0)},b.locale=function(S){var U=this.clone();return U.$l=S,U},b.clone=function(){return h(this.$ms,this)},b.humanize=function(S){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!S)},b.valueOf=function(){return this.asMilliseconds()},b.milliseconds=function(){return this.get("milliseconds")},b.asMilliseconds=function(){return this.as("milliseconds")},b.seconds=function(){return this.get("seconds")},b.asSeconds=function(){return this.as("seconds")},b.minutes=function(){return this.get("minutes")},b.asMinutes=function(){return this.as("minutes")},b.hours=function(){return this.get("hours")},b.asHours=function(){return this.as("hours")},b.days=function(){return this.get("days")},b.asDays=function(){return this.as("days")},b.weeks=function(){return this.get("weeks")},b.asWeeks=function(){return this.as("weeks")},b.months=function(){return this.get("months")},b.asMonths=function(){return this.as("months")},b.years=function(){return this.get("years")},b.asYears=function(){return this.as("years")},G}(),R=function(G,b,S){return G.add(b.years()*S,"y").add(b.months()*S,"M").add(b.days()*S,"d").add(b.hours()*S,"h").add(b.minutes()*S,"m").add(b.seconds()*S,"s").add(b.milliseconds()*S,"ms")};return function(G,b,S){n=S,t=S().$utils(),S.duration=function(Y,D){var K=S.locale();return h(Y,{$l:K},D)},S.isDuration=c;var U=b.prototype.add,j=b.prototype.subtract;b.prototype.add=function(Y,D){return c(Y)?R(this,Y,1):U.bind(this)(Y,D)},b.prototype.subtract=function(Y,D){return c(Y)?R(this,Y,-1):j.bind(this)(Y,D)}}})}(ts)),ts.exports}var Lv=Ov();const Dv=Ls(Lv);var as={exports:{}},Kv=as.exports,Di;function Pv(){return Di||(Di=1,function(e,r){(function(n,t){e.exports=t()})(Kv,function(){var n="day";return function(t,a,s){var i=function(d){return d.add(4-d.isoWeekday(),n)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(d){if(!this.$utils().u(d))return this.add(7*(d-this.isoWeek()),n);var u,E,v,c,h=i(this),T=(u=this.isoWeekYear(),E=this.$u,v=(E?s.utc:s)().year(u).startOf("year"),c=4-v.isoWeekday(),v.isoWeekday()>4&&(c+=7),v.add(c,n));return h.diff(T,"week")+1},o.isoWeekday=function(d){return this.$utils().u(d)?this.day()||7:this.day(this.day()%7?d:d-7)};var l=o.startOf;o.startOf=function(d,u){var E=this.$utils(),v=!!E.u(u)||u;return E.p(d)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(d,u)}}})}(as)),as.exports}var Fv=Pv();const Mv=Ls(Fv);var ss={exports:{}},Gv=ss.exports,Ki;function Vv(){return Ki||(Ki=1,function(e,r){(function(n,t){e.exports=t()})(Gv,function(){var n="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(T){var A={date:T,utc:!0,args:arguments};return new i(A)},l.utc=function(T){var A=o(this.toDate(),{locale:this.$L,utc:!0});return T?A.add(this.utcOffset(),n):A},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var d=l.parse;l.parse=function(T){T.utc&&(this.$u=!0),this.$utils().u(T.$offset)||(this.$offset=T.$offset),d.call(this,T)};var u=l.init;l.init=function(){if(this.$u){var T=this.$d;this.$y=T.getUTCFullYear(),this.$M=T.getUTCMonth(),this.$D=T.getUTCDate(),this.$W=T.getUTCDay(),this.$H=T.getUTCHours(),this.$m=T.getUTCMinutes(),this.$s=T.getUTCSeconds(),this.$ms=T.getUTCMilliseconds()}else u.call(this)};var E=l.utcOffset;l.utcOffset=function(T,A){var N=this.$utils().u;if(N(T))return this.$u?0:N(this.$offset)?E.call(this):this.$offset;if(typeof T=="string"&&(T=function(R){R===void 0&&(R="");var G=R.match(t);if(!G)return null;var b=(""+G[0]).match(a)||["-",0,0],S=b[0],U=60*+b[1]+ +b[2];return U===0?0:S==="+"?U:-U}(T),T===null))return this;var p=Math.abs(T)<=16?60*T:T,y=this;if(A)return y.$offset=p,y.$u=T===0,y;if(T!==0){var P=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(y=this.local().add(p+P,n)).$offset=p,y.$x.$localOffset=P}else y=this.utc();return y};var v=l.format;l.format=function(T){var A=T||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return v.call(this,A)},l.valueOf=function(){var T=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*T},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var c=l.toDate;l.toDate=function(T){return T==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():c.call(this)};var h=l.diff;l.diff=function(T,A,N){if(T&&this.$u===T.$u)return h.call(this,T,A,N);var p=this.local(),y=o(T).local();return h.call(p,y,A,N)}}})}(ss)),ss.exports}var Uv=Vv();const wv=Ls(Uv),Bv=pd(),Be=e=>SE({locale:"nb-NO",messages:e},Bv),jv="DD.MM.YYYY",Vd={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};var is={exports:{}},Hv=is.exports,Pi;function Yv(){return Pi||(Pi=1,function(e,r){(function(n,t){e.exports=t(Zr)})(Hv,function(n){function t(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=t(n),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})}(is)),is.exports}Yv();Zr.extend(wv);Zr.extend(Mv);Zr.extend(Dv);Be(Vd);const zr=e=>e==null?e:e.replace(/&#?((?!(60|62);)\w+);/g,(r,n)=>{if(Number.isNaN(parseInt(n,10))){const t={quot:34,amp:38,apos:39,nbsp:160,copy:169,reg:174,deg:176,frasl:47,trade:8482,euro:8364,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,permil:8240,lsaquo:8249,rsaquo:8250,spades:9824,clubs:9827,hearts:9829,diams:9830,oline:8254,larr:8592,uarr:8593,rarr:8594,darr:8595,hellip:133,ndash:150,mdash:151,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,brkbar:166,sect:167,uml:168,die:168,ordf:170,laquo:171,not:172,shy:173,macr:175,hibar:175,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Alpha:913,alpha:945,Beta:914,beta:946,Gamma:915,gamma:947,Delta:916,delta:948,Epsilon:917,epsilon:949,Zeta:918,zeta:950,Eta:919,eta:951,Theta:920,theta:952,Iota:921,iota:953,Kappa:922,kappa:954,Lambda:923,lambda:955,Mu:924,mu:956,Nu:925,nu:957,Xi:926,xi:958,Omicron:927,omicron:959,Pi:928,pi:960,Rho:929,rho:961,Sigma:931,sigma:963,Tau:932,tau:964,Upsilon:933,upsilon:965,Phi:934,phi:966,Chi:935,chi:967,Psi:936,psi:968,Omega:937,omega:969}[n];return t!==void 0?String.fromCharCode(t):r}return String.fromCharCode(n)}),zt=e=>e.toString().replace(new RegExp("\\p{Dash_Punctuation}","gu"),"-").replace(/[\p{Space_Separator}\t]/gu," ").replace(/[“”]/g,'"').replace(/[‘’`]/g,"'").replace(/</g,"&lt;").replace(/>/g,"&gt;"),vt=Be(Vd),Ds=e=>{if(!e)return vt.formatMessage({id:"Malform.Bokmal"});switch(e){case"NN":return vt.formatMessage({id:"Malform.Nynorsk"});case"EN":return vt.formatMessage({id:"Malform.Engelsk"});default:return vt.formatMessage({id:"Malform.Bokmal"})}};var et=e=>e.type==="checkbox",xr=e=>e instanceof Date,Ue=e=>e==null;const Ud=e=>typeof e=="object";var pe=e=>!Ue(e)&&!Array.isArray(e)&&Ud(e)&&!xr(e),wd=e=>pe(e)&&e.target?et(e.target)?e.target.checked:e.target.value:e,xv=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Bd=(e,r)=>e.has(xv(r)),qv=e=>{const r=e.constructor&&e.constructor.prototype;return pe(r)&&r.hasOwnProperty("isPrototypeOf")},Ks=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function je(e){let r;const n=Array.isArray(e),t=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(Ks&&(e instanceof Blob||t))&&(n||pe(e)))if(r=n?[]:{},!n&&!qv(e))r=e;else for(const a in e)e.hasOwnProperty(a)&&(r[a]=je(e[a]));else return e;return r}var ua=e=>Array.isArray(e)?e.filter(Boolean):[],ce=e=>e===void 0,M=(e,r,n)=>{if(!r||!pe(e))return n;const t=ua(r.split(/[,[\].]+?/)).reduce((a,s)=>Ue(a)?a:a[s],e);return ce(t)||t===e?ce(e[r])?n:e[r]:t},$e=e=>typeof e=="boolean",Ps=e=>/^\w*$/.test(e),jd=e=>ua(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ue=(e,r,n)=>{let t=-1;const a=Ps(r)?[r]:jd(r),s=a.length,i=s-1;for(;++t<s;){const o=a[t];let l=n;if(t!==i){const d=e[o];l=pe(d)||Array.isArray(d)?d:isNaN(+a[t+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=l,e=e[o]}return e};const Zt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},rr={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},yr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Hd=I.createContext(null),An=()=>I.useContext(Hd),Cv=e=>{const{children:r,...n}=e;return I.createElement(Hd.Provider,{value:n},r)};var Yd=(e,r,n,t=!0)=>{const a={defaultValues:r._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const i=s;return r._proxyFormState[i]!==rr.all&&(r._proxyFormState[i]=!t||rr.all),n&&(n[i]=!0),e[i]}});return a},Ye=e=>pe(e)&&!Object.keys(e).length,xd=(e,r,n,t)=>{n(e);const{name:a,...s}=e;return Ye(s)||Object.keys(s).length>=Object.keys(r).length||Object.keys(s).find(i=>r[i]===(!t||rr.all))},wn=e=>Array.isArray(e)?e:[e],qd=(e,r,n)=>!e||!r||e===r||wn(e).some(t=>t&&(n?t===r:t.startsWith(r)||r.startsWith(t)));function Fs(e){const r=I.useRef(e);r.current=e,I.useEffect(()=>{const n=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function $v(e){const r=An(),{control:n=r.control,disabled:t,name:a,exact:s}=e||{},[i,o]=I.useState(n._formState),l=I.useRef(!0),d=I.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),u=I.useRef(a);return u.current=a,Fs({disabled:t,next:E=>l.current&&qd(u.current,E.name,s)&&xd(E,d.current,n._updateFormState)&&o({...n._formState,...E}),subject:n._subjects.state}),I.useEffect(()=>(l.current=!0,d.current.isValid&&n._updateValid(!0),()=>{l.current=!1}),[n]),I.useMemo(()=>Yd(i,n,d.current,!1),[i,n])}var Er=e=>typeof e=="string",Cd=(e,r,n,t,a)=>Er(e)?(t&&r.watch.add(e),M(n,e,a)):Array.isArray(e)?e.map(s=>(t&&r.watch.add(s),M(n,s))):(t&&(r.watchAll=!0),n);function Jv(e){const r=An(),{control:n=r.control,name:t,defaultValue:a,disabled:s,exact:i}=e||{},o=I.useRef(t);o.current=t,Fs({disabled:s,subject:n._subjects.values,next:u=>{qd(o.current,u.name,i)&&d(je(Cd(o.current,n._names,u.values||n._formValues,!1,a)))}});const[l,d]=I.useState(n._getWatch(t,a));return I.useEffect(()=>n._removeUnmounted()),l}function Wv(e){const r=An(),{name:n,disabled:t,control:a=r.control,shouldUnregister:s}=e,i=Bd(a._names.array,n),o=Jv({control:a,name:n,defaultValue:M(a._formValues,n,M(a._defaultValues,n,e.defaultValue)),exact:!0}),l=$v({control:a,name:n,exact:!0}),d=I.useRef(a.register(n,{...e.rules,value:o,...$e(e.disabled)?{disabled:e.disabled}:{}})),u=I.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!M(l.errors,n)},isDirty:{enumerable:!0,get:()=>!!M(l.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!M(l.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!M(l.validatingFields,n)},error:{enumerable:!0,get:()=>M(l.errors,n)}}),[l,n]),E=I.useMemo(()=>({name:n,value:o,...$e(t)||l.disabled?{disabled:l.disabled||t}:{},onChange:v=>d.current.onChange({target:{value:wd(v),name:n},type:Zt.CHANGE}),onBlur:()=>d.current.onBlur({target:{value:M(a._formValues,n),name:n},type:Zt.BLUR}),ref:v=>{const c=M(a._fields,n);c&&v&&(c._f.ref={focus:()=>v.focus(),select:()=>v.select(),setCustomValidity:h=>v.setCustomValidity(h),reportValidity:()=>v.reportValidity()})}}),[n,a._formValues,t,l.disabled,o,a._fields]);return I.useEffect(()=>{const v=a._options.shouldUnregister||s,c=(h,T)=>{const A=M(a._fields,h);A&&A._f&&(A._f.mount=T)};if(c(n,!0),v){const h=je(M(a._options.defaultValues,n));ue(a._defaultValues,n,h),ce(M(a._formValues,n))&&ue(a._formValues,n,h)}return!i&&a.register(n),()=>{(i?v&&!a._state.action:v)?a.unregister(n):c(n,!1)}},[n,a,i,s]),I.useEffect(()=>{a._updateDisabledField({disabled:t,fields:a._fields,name:n})},[t,n,a]),I.useMemo(()=>({field:E,formState:l,fieldState:u}),[E,l,u])}var zv=(e,r,n,t,a)=>r?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[t]:a||!0}}:{},Fi=e=>({isOnSubmit:!e||e===rr.onSubmit,isOnBlur:e===rr.onBlur,isOnChange:e===rr.onChange,isOnAll:e===rr.all,isOnTouch:e===rr.onTouched}),Mi=(e,r,n)=>!n&&(r.watchAll||r.watch.has(e)||[...r.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const Bn=(e,r,n,t)=>{for(const a of n||Object.keys(e)){const s=M(e,a);if(s){const{_f:i,...o}=s;if(i){if(i.refs&&i.refs[0]&&r(i.refs[0],a)&&!t)return!0;if(i.ref&&r(i.ref,i.name)&&!t)return!0;if(Bn(o,r))break}else if(pe(o)&&Bn(o,r))break}}};var Zv=(e,r,n)=>{const t=wn(M(e,n));return ue(t,"root",r[n]),ue(e,n,t),e},Ms=e=>e.type==="file",gr=e=>typeof e=="function",Xt=e=>{if(!Ks)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Ct=e=>Er(e),Gs=e=>e.type==="radio",Qt=e=>e instanceof RegExp;const Gi={value:!1,isValid:!1},Vi={value:!0,isValid:!0};var $d=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ce(e[0].attributes.value)?ce(e[0].value)||e[0].value===""?Vi:{value:e[0].value,isValid:!0}:Vi:Gi}return Gi};const Ui={isValid:!1,value:null};var Jd=e=>Array.isArray(e)?e.reduce((r,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:r,Ui):Ui;function wi(e,r,n="validate"){if(Ct(e)||Array.isArray(e)&&e.every(Ct)||$e(e)&&!e)return{type:n,message:Ct(e)?e:"",ref:r}}var tn=e=>pe(e)&&!Qt(e)?e:{value:e,message:""},Bi=async(e,r,n,t,a,s)=>{const{ref:i,refs:o,required:l,maxLength:d,minLength:u,min:E,max:v,pattern:c,validate:h,name:T,valueAsNumber:A,mount:N}=e._f,p=M(n,T);if(!N||r.has(T))return{};const y=o?o[0]:i,P=D=>{a&&y.reportValidity&&(y.setCustomValidity($e(D)?"":D||""),y.reportValidity())},R={},G=Gs(i),b=et(i),S=G||b,U=(A||Ms(i))&&ce(i.value)&&ce(p)||Xt(i)&&i.value===""||p===""||Array.isArray(p)&&!p.length,j=zv.bind(null,T,t,R),Y=(D,K,q,J=yr.maxLength,ee=yr.minLength)=>{const Re=D?K:q;R[T]={type:D?J:ee,message:Re,ref:i,...j(D?J:ee,Re)}};if(s?!Array.isArray(p)||!p.length:l&&(!S&&(U||Ue(p))||$e(p)&&!p||b&&!$d(o).isValid||G&&!Jd(o).isValid)){const{value:D,message:K}=Ct(l)?{value:!!l,message:l}:tn(l);if(D&&(R[T]={type:yr.required,message:K,ref:y,...j(yr.required,K)},!t))return P(K),R}if(!U&&(!Ue(E)||!Ue(v))){let D,K;const q=tn(v),J=tn(E);if(!Ue(p)&&!isNaN(p)){const ee=i.valueAsNumber||p&&+p;Ue(q.value)||(D=ee>q.value),Ue(J.value)||(K=ee<J.value)}else{const ee=i.valueAsDate||new Date(p),Re=Ke=>new Date(new Date().toDateString()+" "+Ke),Se=i.type=="time",Pe=i.type=="week";Er(q.value)&&p&&(D=Se?Re(p)>Re(q.value):Pe?p>q.value:ee>new Date(q.value)),Er(J.value)&&p&&(K=Se?Re(p)<Re(J.value):Pe?p<J.value:ee<new Date(J.value))}if((D||K)&&(Y(!!D,q.message,J.message,yr.max,yr.min),!t))return P(R[T].message),R}if((d||u)&&!U&&(Er(p)||s&&Array.isArray(p))){const D=tn(d),K=tn(u),q=!Ue(D.value)&&p.length>+D.value,J=!Ue(K.value)&&p.length<+K.value;if((q||J)&&(Y(q,D.message,K.message),!t))return P(R[T].message),R}if(c&&!U&&Er(p)){const{value:D,message:K}=tn(c);if(Qt(D)&&!p.match(D)&&(R[T]={type:yr.pattern,message:K,ref:i,...j(yr.pattern,K)},!t))return P(K),R}if(h){if(gr(h)){const D=await h(p,n),K=wi(D,y);if(K&&(R[T]={...K,...j(yr.validate,K.message)},!t))return P(K.message),R}else if(pe(h)){let D={};for(const K in h){if(!Ye(D)&&!t)break;const q=wi(await h[K](p,n),y,K);q&&(D={...q,...j(K,q.message)},P(q.message),t&&(R[T]=D))}if(!Ye(D)&&(R[T]={ref:y,...D},!t))return R}}return P(!0),R};function Xv(e,r){const n=r.slice(0,-1).length;let t=0;for(;t<n;)e=ce(e)?t++:e[r[t++]];return e}function Qv(e){for(const r in e)if(e.hasOwnProperty(r)&&!ce(e[r]))return!1;return!0}function he(e,r){const n=Array.isArray(r)?r:Ps(r)?[r]:jd(r),t=n.length===1?e:Xv(e,n),a=n.length-1,s=n[a];return t&&delete t[s],a!==0&&(pe(t)&&Ye(t)||Array.isArray(t)&&Qv(t))&&he(e,n.slice(0,-1)),e}var Ma=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},os=e=>Ue(e)||!Ud(e);function Fr(e,r){if(os(e)||os(r))return e===r;if(xr(e)&&xr(r))return e.getTime()===r.getTime();const n=Object.keys(e),t=Object.keys(r);if(n.length!==t.length)return!1;for(const a of n){const s=e[a];if(!t.includes(a))return!1;if(a!=="ref"){const i=r[a];if(xr(s)&&xr(i)||pe(s)&&pe(i)||Array.isArray(s)&&Array.isArray(i)?!Fr(s,i):s!==i)return!1}}return!0}var Wd=e=>e.type==="select-multiple",em=e=>Gs(e)||et(e),Ga=e=>Xt(e)&&e.isConnected,zd=e=>{for(const r in e)if(gr(e[r]))return!0;return!1};function ea(e,r={}){const n=Array.isArray(e);if(pe(e)||n)for(const t in e)Array.isArray(e[t])||pe(e[t])&&!zd(e[t])?(r[t]=Array.isArray(e[t])?[]:{},ea(e[t],r[t])):Ue(e[t])||(r[t]=!0);return r}function Zd(e,r,n){const t=Array.isArray(e);if(pe(e)||t)for(const a in e)Array.isArray(e[a])||pe(e[a])&&!zd(e[a])?ce(r)||os(n[a])?n[a]=Array.isArray(e[a])?ea(e[a],[]):{...ea(e[a])}:Zd(e[a],Ue(r)?{}:r[a],n[a]):n[a]=!Fr(e[a],r[a]);return n}var Ln=(e,r)=>Zd(e,r,ea(r)),Xd=(e,{valueAsNumber:r,valueAsDate:n,setValueAs:t})=>ce(e)?e:r?e===""?NaN:e&&+e:n&&Er(e)?new Date(e):t?t(e):e;function Va(e){const r=e.ref;return Ms(r)?r.files:Gs(r)?Jd(e.refs).value:Wd(r)?[...r.selectedOptions].map(({value:n})=>n):et(r)?$d(e.refs).value:Xd(ce(r.value)?e.ref.value:r.value,e)}var rm=(e,r,n,t)=>{const a={};for(const s of e){const i=M(r,s);i&&ue(a,s,i._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:t}},Dn=e=>ce(e)?e:Qt(e)?e.source:pe(e)?Qt(e.value)?e.value.source:e.value:e;const ji="AsyncFunction";var nm=e=>!!e&&!!e.validate&&!!(gr(e.validate)&&e.validate.constructor.name===ji||pe(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===ji)),tm=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Hi(e,r,n){const t=M(e,n);if(t||Ps(n))return{error:t,name:n};const a=n.split(".");for(;a.length;){const s=a.join("."),i=M(r,s),o=M(e,s);if(i&&!Array.isArray(i)&&n!==s)return{name:n};if(o&&o.type)return{name:s,error:o};a.pop()}return{name:n}}var am=(e,r,n,t,a)=>a.isOnAll?!1:!n&&a.isOnTouch?!(r||e):(n?t.isOnBlur:a.isOnBlur)?!e:(n?t.isOnChange:a.isOnChange)?e:!0,sm=(e,r)=>!ua(M(e,r)).length&&he(e,r);const im={mode:rr.onSubmit,reValidateMode:rr.onChange,shouldFocusError:!0};function om(e={}){let r={...im,...e},n={submitCount:0,isDirty:!1,isLoading:gr(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},t={},a=pe(r.defaultValues)||pe(r.values)?je(r.defaultValues||r.values)||{}:{},s=r.shouldUnregister?{}:je(a),i={action:!1,mount:!1,watch:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},l,d=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},E={values:Ma(),array:Ma(),state:Ma()},v=Fi(r.mode),c=Fi(r.reValidateMode),h=r.criteriaMode===rr.all,T=g=>m=>{clearTimeout(d),d=setTimeout(g,m)},A=async g=>{if(!r.disabled&&(u.isValid||g)){const m=r.resolver?Ye((await S()).errors):await j(t,!0);m!==n.isValid&&E.state.next({isValid:m})}},N=(g,m)=>{!r.disabled&&(u.isValidating||u.validatingFields)&&((g||Array.from(o.mount)).forEach(_=>{_&&(m?ue(n.validatingFields,_,m):he(n.validatingFields,_))}),E.state.next({validatingFields:n.validatingFields,isValidating:!Ye(n.validatingFields)}))},p=(g,m=[],_,w,F=!0,L=!0)=>{if(w&&_&&!r.disabled){if(i.action=!0,L&&Array.isArray(M(t,g))){const $=_(M(t,g),w.argA,w.argB);F&&ue(t,g,$)}if(L&&Array.isArray(M(n.errors,g))){const $=_(M(n.errors,g),w.argA,w.argB);F&&ue(n.errors,g,$),sm(n.errors,g)}if(u.touchedFields&&L&&Array.isArray(M(n.touchedFields,g))){const $=_(M(n.touchedFields,g),w.argA,w.argB);F&&ue(n.touchedFields,g,$)}u.dirtyFields&&(n.dirtyFields=Ln(a,s)),E.state.next({name:g,isDirty:D(g,m),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else ue(s,g,m)},y=(g,m)=>{ue(n.errors,g,m),E.state.next({errors:n.errors})},P=g=>{n.errors=g,E.state.next({errors:n.errors,isValid:!1})},R=(g,m,_,w)=>{const F=M(t,g);if(F){const L=M(s,g,ce(_)?M(a,g):_);ce(L)||w&&w.defaultChecked||m?ue(s,g,m?L:Va(F._f)):J(g,L),i.mount&&A()}},G=(g,m,_,w,F)=>{let L=!1,$=!1;const z={name:g};if(!r.disabled){const Le=!!(M(t,g)&&M(t,g)._f&&M(t,g)._f.disabled);if(!_||w){u.isDirty&&($=n.isDirty,n.isDirty=z.isDirty=D(),L=$!==z.isDirty);const De=Le||Fr(M(a,g),m);$=!!(!Le&&M(n.dirtyFields,g)),De||Le?he(n.dirtyFields,g):ue(n.dirtyFields,g,!0),z.dirtyFields=n.dirtyFields,L=L||u.dirtyFields&&$!==!De}if(_){const De=M(n.touchedFields,g);De||(ue(n.touchedFields,g,_),z.touchedFields=n.touchedFields,L=L||u.touchedFields&&De!==_)}L&&F&&E.state.next(z)}return L?z:{}},b=(g,m,_,w)=>{const F=M(n.errors,g),L=u.isValid&&$e(m)&&n.isValid!==m;if(r.delayError&&_?(l=T(()=>y(g,_)),l(r.delayError)):(clearTimeout(d),l=null,_?ue(n.errors,g,_):he(n.errors,g)),(_?!Fr(F,_):F)||!Ye(w)||L){const $={...w,...L&&$e(m)?{isValid:m}:{},errors:n.errors,name:g};n={...n,...$},E.state.next($)}},S=async g=>{N(g,!0);const m=await r.resolver(s,r.context,rm(g||o.mount,t,r.criteriaMode,r.shouldUseNativeValidation));return N(g),m},U=async g=>{const{errors:m}=await S(g);if(g)for(const _ of g){const w=M(m,_);w?ue(n.errors,_,w):he(n.errors,_)}else n.errors=m;return m},j=async(g,m,_={valid:!0})=>{for(const w in g){const F=g[w];if(F){const{_f:L,...$}=F;if(L){const z=o.array.has(L.name),Le=F._f&&nm(F._f);Le&&u.validatingFields&&N([w],!0);const De=await Bi(F,o.disabled,s,h,r.shouldUseNativeValidation&&!m,z);if(Le&&u.validatingFields&&N([w]),De[L.name]&&(_.valid=!1,m))break;!m&&(M(De,L.name)?z?Zv(n.errors,De,L.name):ue(n.errors,L.name,De[L.name]):he(n.errors,L.name))}!Ye($)&&await j($,m,_)}}return _.valid},Y=()=>{for(const g of o.unMount){const m=M(t,g);m&&(m._f.refs?m._f.refs.every(_=>!Ga(_)):!Ga(m._f.ref))&&Sn(g)}o.unMount=new Set},D=(g,m)=>!r.disabled&&(g&&m&&ue(s,g,m),!Fr(Oe(),a)),K=(g,m,_)=>Cd(g,o,{...i.mount?s:ce(m)?a:Er(g)?{[g]:m}:m},_,m),q=g=>ua(M(i.mount?s:a,g,r.shouldUnregister?M(a,g,[]):[])),J=(g,m,_={})=>{const w=M(t,g);let F=m;if(w){const L=w._f;L&&(!L.disabled&&ue(s,g,Xd(m,L)),F=Xt(L.ref)&&Ue(m)?"":m,Wd(L.ref)?[...L.ref.options].forEach($=>$.selected=F.includes($.value)):L.refs?et(L.ref)?L.refs.length>1?L.refs.forEach($=>(!$.defaultChecked||!$.disabled)&&($.checked=Array.isArray(F)?!!F.find(z=>z===$.value):F===$.value)):L.refs[0]&&(L.refs[0].checked=!!F):L.refs.forEach($=>$.checked=$.value===F):Ms(L.ref)?L.ref.value="":(L.ref.value=F,L.ref.type||E.values.next({name:g,values:{...s}})))}(_.shouldDirty||_.shouldTouch)&&G(g,F,_.shouldTouch,_.shouldDirty,!0),_.shouldValidate&&Ke(g)},ee=(g,m,_)=>{for(const w in m){const F=m[w],L=`${g}.${w}`,$=M(t,L);(o.array.has(g)||pe(F)||$&&!$._f)&&!xr(F)?ee(L,F,_):J(L,F,_)}},Re=(g,m,_={})=>{const w=M(t,g),F=o.array.has(g),L=je(m);ue(s,g,L),F?(E.array.next({name:g,values:{...s}}),(u.isDirty||u.dirtyFields)&&_.shouldDirty&&E.state.next({name:g,dirtyFields:Ln(a,s),isDirty:D(g,L)})):w&&!w._f&&!Ue(L)?ee(g,L,_):J(g,L,_),Mi(g,o)&&E.state.next({...n}),E.values.next({name:i.mount?g:void 0,values:{...s}})},Se=async g=>{i.mount=!0;const m=g.target;let _=m.name,w=!0;const F=M(t,_),L=()=>m.type?Va(F._f):wd(g),$=z=>{w=Number.isNaN(z)||xr(z)&&isNaN(z.getTime())||Fr(z,M(s,_,z))};if(F){let z,Le;const De=L(),Pr=g.type===Zt.BLUR||g.type===Zt.FOCUS_OUT,Og=!tm(F._f)&&!r.resolver&&!M(n.errors,_)&&!F._f.deps||am(Pr,M(n.touchedFields,_),n.isSubmitted,c,v),Ia=Mi(_,o,Pr);ue(s,_,De),Pr?(F._f.onBlur&&F._f.onBlur(g),l&&l(0)):F._f.onChange&&F._f.onChange(g);const Oa=G(_,De,Pr,!1),Lg=!Ye(Oa)||Ia;if(!Pr&&E.values.next({name:_,type:g.type,values:{...s}}),Og)return u.isValid&&(r.mode==="onBlur"&&Pr?A():Pr||A()),Lg&&E.state.next({name:_,...Ia?{}:Oa});if(!Pr&&Ia&&E.state.next({...n}),r.resolver){const{errors:di}=await S([_]);if($(De),w){const Dg=Hi(n.errors,t,_),ui=Hi(di,t,Dg.name||_);z=ui.error,_=ui.name,Le=Ye(di)}}else N([_],!0),z=(await Bi(F,o.disabled,s,h,r.shouldUseNativeValidation))[_],N([_]),$(De),w&&(z?Le=!1:u.isValid&&(Le=await j(t,!0)));w&&(F._f.deps&&Ke(F._f.deps),b(_,Le,z,Oa))}},Pe=(g,m)=>{if(M(n.errors,m)&&g.focus)return g.focus(),1},Ke=async(g,m={})=>{let _,w;const F=wn(g);if(r.resolver){const L=await U(ce(g)?g:F);_=Ye(L),w=g?!F.some($=>M(L,$)):_}else g?(w=(await Promise.all(F.map(async L=>{const $=M(t,L);return await j($&&$._f?{[L]:$}:$)}))).every(Boolean),!(!w&&!n.isValid)&&A()):w=_=await j(t);return E.state.next({...!Er(g)||u.isValid&&_!==n.isValid?{}:{name:g},...r.resolver||!g?{isValid:_}:{},errors:n.errors}),m.shouldFocus&&!w&&Bn(t,Pe,g?F:o.mount),w},Oe=g=>{const m={...i.mount?s:a};return ce(g)?m:Er(g)?M(m,g):g.map(_=>M(m,_))},Qr=(g,m)=>({invalid:!!M((m||n).errors,g),isDirty:!!M((m||n).dirtyFields,g),error:M((m||n).errors,g),isValidating:!!M(n.validatingFields,g),isTouched:!!M((m||n).touchedFields,g)}),en=g=>{g&&wn(g).forEach(m=>he(n.errors,m)),E.state.next({errors:g?n.errors:{}})},ot=(g,m,_)=>{const w=(M(t,g,{_f:{}})._f||{}).ref,F=M(n.errors,g)||{},{ref:L,message:$,type:z,...Le}=F;ue(n.errors,g,{...Le,...m,ref:w}),E.state.next({name:g,errors:n.errors,isValid:!1}),_&&_.shouldFocus&&w&&w.focus&&w.focus()},ba=(g,m)=>gr(g)?E.values.subscribe({next:_=>g(K(void 0,m),_)}):K(g,m,!0),Sn=(g,m={})=>{for(const _ of g?wn(g):o.mount)o.mount.delete(_),o.array.delete(_),m.keepValue||(he(t,_),he(s,_)),!m.keepError&&he(n.errors,_),!m.keepDirty&&he(n.dirtyFields,_),!m.keepTouched&&he(n.touchedFields,_),!m.keepIsValidating&&he(n.validatingFields,_),!r.shouldUnregister&&!m.keepDefaultValue&&he(a,_);E.values.next({values:{...s}}),E.state.next({...n,...m.keepDirty?{isDirty:D()}:{}}),!m.keepIsValid&&A()},lt=({disabled:g,name:m,field:_,fields:w})=>{($e(g)&&i.mount||g||o.disabled.has(m))&&(g?o.disabled.add(m):o.disabled.delete(m),G(m,Va(_?_._f:M(w,m)._f),!1,!1,!0))},hn=(g,m={})=>{let _=M(t,g);const w=$e(m.disabled)||$e(r.disabled);return ue(t,g,{..._||{},_f:{..._&&_._f?_._f:{ref:{name:g}},name:g,mount:!0,...m}}),o.mount.add(g),_?lt({field:_,disabled:$e(m.disabled)?m.disabled:r.disabled,name:g}):R(g,!0,m.value),{...w?{disabled:m.disabled||r.disabled}:{},...r.progressive?{required:!!m.required,min:Dn(m.min),max:Dn(m.max),minLength:Dn(m.minLength),maxLength:Dn(m.maxLength),pattern:Dn(m.pattern)}:{},name:g,onChange:Se,onBlur:Se,ref:F=>{if(F){hn(g,m),_=M(t,g);const L=ce(F.value)&&F.querySelectorAll&&F.querySelectorAll("input,select,textarea")[0]||F,$=em(L),z=_._f.refs||[];if($?z.find(Le=>Le===L):L===_._f.ref)return;ue(t,g,{_f:{..._._f,...$?{refs:[...z.filter(Ga),L,...Array.isArray(M(a,g))?[{}]:[]],ref:{type:L.type,name:g}}:{ref:L}}}),R(g,!1,void 0,L)}else _=M(t,g,{}),_._f&&(_._f.mount=!1),(r.shouldUnregister||m.shouldUnregister)&&!(Bd(o.array,g)&&i.action)&&o.unMount.add(g)}}},bn=()=>r.shouldFocusError&&Bn(t,Pe,o.mount),dt=g=>{$e(g)&&(E.state.next({disabled:g}),Bn(t,(m,_)=>{const w=M(t,_);w&&(m.disabled=w._f.disabled||g,Array.isArray(w._f.refs)&&w._f.refs.forEach(F=>{F.disabled=w._f.disabled||g}))},0,!1))},rn=(g,m)=>async _=>{let w;_&&(_.preventDefault&&_.preventDefault(),_.persist&&_.persist());let F=je(s);if(o.disabled.size)for(const L of o.disabled)ue(F,L,void 0);if(E.state.next({isSubmitting:!0}),r.resolver){const{errors:L,values:$}=await S();n.errors=L,F=$}else await j(t);if(he(n.errors,"root"),Ye(n.errors)){E.state.next({errors:{}});try{await g(F,_)}catch(L){w=L}}else m&&await m({...n.errors},_),bn(),setTimeout(bn);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ye(n.errors)&&!w,submitCount:n.submitCount+1,errors:n.errors}),w)throw w},In=(g,m={})=>{M(t,g)&&(ce(m.defaultValue)?Re(g,je(M(a,g))):(Re(g,m.defaultValue),ue(a,g,je(m.defaultValue))),m.keepTouched||he(n.touchedFields,g),m.keepDirty||(he(n.dirtyFields,g),n.isDirty=m.defaultValue?D(g,je(M(a,g))):D()),m.keepError||(he(n.errors,g),u.isValid&&A()),E.state.next({...n}))},nn=(g,m={})=>{const _=g?je(g):a,w=je(_),F=Ye(g),L=F?a:w;if(m.keepDefaultValues||(a=_),!m.keepValues){if(m.keepDirtyValues){const $=new Set([...o.mount,...Object.keys(Ln(a,s))]);for(const z of Array.from($))M(n.dirtyFields,z)?ue(L,z,M(s,z)):Re(z,M(L,z))}else{if(Ks&&ce(g))for(const $ of o.mount){const z=M(t,$);if(z&&z._f){const Le=Array.isArray(z._f.refs)?z._f.refs[0]:z._f.ref;if(Xt(Le)){const De=Le.closest("form");if(De){De.reset();break}}}}t={}}s=r.shouldUnregister?m.keepDefaultValues?je(a):{}:je(L),E.array.next({values:{...L}}),E.values.next({values:{...L}})}o={mount:m.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!u.isValid||!!m.keepIsValid||!!m.keepDirtyValues,i.watch=!!r.shouldUnregister,E.state.next({submitCount:m.keepSubmitCount?n.submitCount:0,isDirty:F?!1:m.keepDirty?n.isDirty:!!(m.keepDefaultValues&&!Fr(g,a)),isSubmitted:m.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:F?{}:m.keepDirtyValues?m.keepDefaultValues&&s?Ln(a,s):n.dirtyFields:m.keepDefaultValues&&g?Ln(a,g):m.keepDirty?n.dirtyFields:{},touchedFields:m.keepTouched?n.touchedFields:{},errors:m.keepErrors?n.errors:{},isSubmitSuccessful:m.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},jr=(g,m)=>nn(gr(g)?g(s):g,m);return{control:{register:hn,unregister:Sn,getFieldState:Qr,handleSubmit:rn,setError:ot,_executeSchema:S,_getWatch:K,_getDirty:D,_updateValid:A,_removeUnmounted:Y,_updateFieldArray:p,_updateDisabledField:lt,_getFieldArray:q,_reset:nn,_resetDefaultValues:()=>gr(r.defaultValues)&&r.defaultValues().then(g=>{jr(g,r.resetOptions),E.state.next({isLoading:!1})}),_updateFormState:g=>{n={...n,...g}},_disableForm:dt,_subjects:E,_proxyFormState:u,_setErrors:P,get _fields(){return t},get _formValues(){return s},get _state(){return i},set _state(g){i=g},get _defaultValues(){return a},get _names(){return o},set _names(g){o=g},get _formState(){return n},set _formState(g){n=g},get _options(){return r},set _options(g){r={...r,...g}}},trigger:Ke,register:hn,handleSubmit:rn,watch:ba,setValue:Re,getValues:Oe,reset:jr,resetField:In,clearErrors:en,unregister:Sn,setError:ot,setFocus:(g,m={})=>{const _=M(t,g),w=_&&_._f;if(w){const F=w.refs?w.refs[0]:w.ref;F.focus&&(F.focus(),m.shouldSelect&&gr(F.select)&&F.select())}},getFieldState:Qr}}function Qd(e={}){const r=I.useRef(void 0),n=I.useRef(void 0),[t,a]=I.useState({isDirty:!1,isValidating:!1,isLoading:gr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:gr(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...om(e),formState:t});const s=r.current.control;return s._options=e,Fs({subject:s._subjects.state,next:i=>{xd(i,s._proxyFormState,s._updateFormState,!0)&&a({...s._formState})}}),I.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),I.useEffect(()=>{if(s._proxyFormState.isDirty){const i=s._getDirty();i!==t.isDirty&&s._subjects.state.next({isDirty:i})}},[s,t.isDirty]),I.useEffect(()=>{e.values&&!Fr(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,a(i=>({...i}))):s._resetDefaultValues()},[e.values,s]),I.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),I.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),I.useEffect(()=>{e.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[e.shouldUnregister,s]),r.current.formState=Yd(t,s),r.current}function eu(e){var r,n,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(n=eu(e[r]))&&(t&&(t+=" "),t+=n)}else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function Ee(){for(var e,r,n=0,t="",a=arguments.length;n<a;n++)(e=arguments[n])&&(r=eu(e))&&(t&&(t+=" "),t+=r);return t}function lm(e){return r=>{e.forEach(n=>{typeof n=="function"?n(r):n!=null&&(n.current=r)})}}function ru(...e){return I.useCallback(lm(e),e)}var dm=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};function um(e,r){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${r}`}function nu(e={}){const{name:r,hookName:n="useContext",providerName:t="Provider",errorMessage:a,defaultValue:s}=e,i=f.createContext(s),o=f.forwardRef((d,u)=>{var{children:E}=d,v=dm(d,["children"]);const c=I.useMemo(()=>v,Object.values(v));return I.createElement(i.Provider,{value:u?Object.assign(Object.assign({},c),{ref:u}):c},E)});function l(d=!0){var u;const E=f.useContext(i);if(!E&&d){const v=new Error(a??um(n,t));throw v.name="ContextError",(u=Error.captureStackTrace)===null||u===void 0||u.call(Error,v,l),v}return E}return i.displayName=r,[o,l]}const yn=e=>Ee({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var gm=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const tu=f.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:d,textColor:u}=e,E=gm(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return I.createElement(a,Object.assign({},E,{ref:r,className:Ee(n,"navds-body-long",`navds-body-long--${t}`,yn({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:d,textColor:u}))}))});var km=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ze=f.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:d,textColor:u}=e,E=km(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return I.createElement(a,Object.assign({},E,{ref:r,className:Ee(n,"navds-body-short",`navds-body-short--${t}`,yn({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:d,textColor:u}))}))});var Em=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const wr=f.forwardRef((e,r)=>{var{className:n,size:t="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:d,visuallyHidden:u,textColor:E}=e,v=Em(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return I.createElement(i,Object.assign({},v,{ref:r,className:Ee(n,"navds-detail",yn({spacing:a,truncate:o,weight:l,align:d,visuallyHidden:u,textColor:E,uppercase:s}),{"navds-detail--small":t==="small"})}))});var vm=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const mm=f.forwardRef((e,r)=>{var{children:n,className:t,size:a,spacing:s,as:i="p",showIcon:o=!1}=e,l=vm(e,["children","className","size","spacing","as","showIcon"]);return I.createElement(i,Object.assign({},l,{ref:r,className:Ee("navds-error-message","navds-label",t,yn({spacing:s}),{"navds-label--small":a==="small","navds-error-message--show-icon":o})}),o&&I.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},I.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),n)});var Tm=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Vs=f.forwardRef((e,r)=>{var{level:n="1",size:t,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:d}=e,u=Tm(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const E=s??`h${n}`;return I.createElement(E,Object.assign({},u,{ref:r,className:Ee(a,"navds-heading",`navds-heading--${t}`,yn({spacing:i,align:o,visuallyHidden:l,textColor:d}))}))});var fm=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};f.forwardRef((e,r)=>{var{className:n,spacing:t,as:a="p"}=e,s=fm(e,["className","spacing","as"]);return I.createElement(a,Object.assign({},s,{ref:r,className:Ee(n,"navds-ingress",{"navds-typo--spacing":!!t})}))});var Rm=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const xe=f.forwardRef((e,r)=>{var{className:n,size:t="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=Rm(e,["className","size","as","spacing","visuallyHidden","textColor"]);return I.createElement(a,Object.assign({},l,{ref:r,className:Ee(n,"navds-label",yn({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":t==="small"})}))});function au(e,r=166,n=!1){let t;function a(...s){const i=()=>{t=void 0,e.apply(this,s)};!t&&n&&i(),clearTimeout(t),t=setTimeout(i,r)}return a.clear=()=>{clearTimeout(t)},a}function Us(e,r){const n=Object.entries(e).filter(([t])=>!r.includes(t));return Object.fromEntries(n)}const Yi=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{};let xi=0;function Am(e){const[r,n]=f.useState(e),t=e||r;return f.useEffect(()=>{r==null&&(xi+=1,n(`aksel-id-${xi}`))},[r]),t}const qi=I.useId;function ga(e){var r;return qi!==void 0?qi().replace(/(:)/g,""):(r=Am(e))!==null&&r!==void 0?r:""}let Ci=0;function ym(e){const[r,n]=f.useState(e),t=e||r;return f.useEffect(()=>{r==null&&(Ci+=1,n(`aksel-icon-${Ci}`))},[r]),t}const $i=I.useId;function Lr(e){var r;return $i!==void 0?$i().replace(/(:)/g,""):(r=ym(e))!==null&&r!==void 0?r:""}var _m=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const su=f.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=_m(e,["title","titleId"]);let s=Lr();return s=n?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?f.createElement("title",{id:s},n):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var cm=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const iu=f.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=cm(e,["title","titleId"]);let s=Lr();return s=n?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?f.createElement("title",{id:s},n):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var pm=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Nm=f.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=pm(e,["title","titleId"]);let s=Lr();return s=n?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?f.createElement("title",{id:s},n):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Sm=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const hm=f.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=Sm(e,["title","titleId"]);let s=Lr();return s=n?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?f.createElement("title",{id:s},n):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var bm=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Im=f.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=bm(e,["title","titleId"]);let s=Lr();return s=n?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?f.createElement("title",{id:s},n):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Om=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Ji=f.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=Om(e,["title","titleId"]);let s=Lr();return s=n?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?f.createElement("title",{id:s},n):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M19.638 4.417a3.25 3.25 0 0 0-4.608-.008l-9.378 9.379a.75.75 0 0 0-.191.324l-1.414 4.95a.75.75 0 0 0 .925.927l4.94-1.398a.75.75 0 0 0 .327-.191l9.39-9.391a3.25 3.25 0 0 0 .01-4.592M16.091 5.47a1.752 1.752 0 1 1 2.478 2.478l-.23.23-2.477-2.479zM14.8 6.76 6.85 14.71l-.991 3.47 3.457-.979 7.963-7.963z",clipRule:"evenodd"}))});var Lm=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Dm=f.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=Lm(e,["title","titleId"]);let s=Lr();return s=n?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?f.createElement("title",{id:s},n):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Km=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ou=f.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=Km(e,["title","titleId"]);let s=Lr();return s=n?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?f.createElement("title",{id:s},n):null,f.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Pm=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const lu=f.forwardRef((e,r)=>{var{title:n,titleId:t}=e,a=Pm(e,["title","titleId"]);let s=Lr();return s=n?t||"title-"+s:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),n?f.createElement("title",{id:s},n):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function jn(e,r,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return r==null?void 0:r(a)}}const[Fm,du]=nu({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Ua(e){return(r={})=>{const n=r.width?String(r.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}function Kn(e){return(r,n)=>{const t=n!=null&&n.context?String(n.context):"standalone";let a;if(t==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,o=n!=null&&n.width?String(n.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{const i=e.defaultWidth,o=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[o]||e.values[i]}const s=e.argumentCallback?e.argumentCallback(r):r;return a[s]}}function Pn(e){return(r,n={})=>{const t=n.width,a=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],s=r.match(a);if(!s)return null;const i=s[0],o=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?Gm(o,E=>E.test(i)):Mm(o,E=>E.test(i));let d;d=e.valueCallback?e.valueCallback(l):l,d=n.valueCallback?n.valueCallback(d):d;const u=r.slice(i.length);return{value:d,rest:u}}}function Mm(e,r){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&r(e[n]))return n}function Gm(e,r){for(let n=0;n<e.length;n++)if(r(e[n]))return n}function Vm(e){return(r,n={})=>{const t=r.match(e.matchPattern);if(!t)return null;const a=t[0],s=r.match(e.parsePattern);if(!s)return null;let i=e.valueCallback?e.valueCallback(s[0]):s[0];i=n.valueCallback?n.valueCallback(i):i;const o=r.slice(a.length);return{value:i,rest:o}}}const Um={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},wm=(e,r,n)=>{let t;const a=Um[e];return typeof a=="string"?t=a:r===1?t=a.one:t=a.other.replace("{{count}}",String(r)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"om "+t:t+" siden":t},Bm={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},jm={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Hm={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Ym={date:Ua({formats:Bm,defaultWidth:"full"}),time:Ua({formats:jm,defaultWidth:"full"}),dateTime:Ua({formats:Hm,defaultWidth:"full"})},xm={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},qm=(e,r,n,t)=>xm[e],Cm={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},$m={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Jm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Wm={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},zm={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Zm=(e,r)=>Number(e)+".",Xm={ordinalNumber:Zm,era:Kn({values:Cm,defaultWidth:"wide"}),quarter:Kn({values:$m,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Kn({values:Jm,defaultWidth:"wide"}),day:Kn({values:Wm,defaultWidth:"wide"}),dayPeriod:Kn({values:zm,defaultWidth:"wide"})},Qm=/^(\d+)\.?/i,eT=/\d+/i,rT={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},nT={any:[/^f/i,/^e/i]},tT={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},aT={any:[/1/i,/2/i,/3/i,/4/i]},sT={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},iT={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},oT={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},lT={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},dT={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},uT={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},gT={ordinalNumber:Vm({matchPattern:Qm,parsePattern:eT,valueCallback:e=>parseInt(e,10)}),era:Pn({matchPatterns:rT,defaultMatchWidth:"wide",parsePatterns:nT,defaultParseWidth:"any"}),quarter:Pn({matchPatterns:tT,defaultMatchWidth:"wide",parsePatterns:aT,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Pn({matchPatterns:sT,defaultMatchWidth:"wide",parsePatterns:iT,defaultParseWidth:"any"}),day:Pn({matchPatterns:oT,defaultMatchWidth:"wide",parsePatterns:lT,defaultParseWidth:"any"}),dayPeriod:Pn({matchPatterns:dT,defaultMatchWidth:"any",parsePatterns:uT,defaultParseWidth:"any"})},kT={code:"nb",formatDistance:wm,formatLong:Ym,formatRelative:qm,localize:Xm,match:gT,options:{weekStartsOn:1,firstWeekContainsDate:4}},ET={global:{dateLocale:kT,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},vT=f.createContext({locale:ET}),uu=()=>f.useContext(vT),Wi=/(\w+)/g;function mT(e,r){const n=Array.isArray(e)?e:TT(e);for(const t of r){if(!t)continue;let a=t;for(let s=0;s<n.length;s++){const i=a[n[s]];i!==void 0&&(a=i)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function TT(e){const r=[];let n=Wi.exec(e);for(;n;){const[,t,a]=n;r.push(t||a),n=Wi.exec(e)}return r}const fT=/{[^}]*}/g;function ka(e,...r){const n=uu(),t=n.translations||[],a=[...r,...Array.isArray(t)?t.map(i=>i[e]):[t[e]],n.locale[e]];return(i,o)=>{const l=mT(i,a);return o?l.replace(fT,d=>{const u=d.substring(1,d.length-1);if(o[u]===void 0){const E=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${E}'`)}return o[u]}):l}}var RT=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const AT=f.forwardRef((e,r)=>{var{className:n,size:t="medium",title:a,transparent:s=!1,variant:i="neutral",id:o}=e,l=RT(e,["className","size","title","transparent","variant","id"]);const d=ga(),u=ka("Loader");return I.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${d}`,ref:r,className:Ee("navds-loader",n,`navds-loader--${t}`,`navds-loader--${i}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},Us(l,["children"])),I.createElement("title",{id:o??`loader-${d}`},a||u("title")),I.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),I.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var yT=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const fn=f.forwardRef((e,r)=>{var{as:n="button",variant:t="primary",className:a,children:s,size:i="medium",loading:o=!1,disabled:l,icon:d,iconPosition:u="left",onKeyUp:E}=e,v=yT(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const c=l||o?Us(v,["href"]):v,h=T=>{T.key===" "&&!l&&!o&&T.currentTarget.click()};return I.createElement(n,Object.assign({},n!=="button"?{role:"button"}:{},c,{ref:r,onKeyUp:jn(E,h),className:Ee(a,"navds-button",`navds-button--${t}`,`navds-button--${i}`,{"navds-button--loading":o,"navds-button--icon-only":!!d&&!s,"navds-button--disabled":l??o}),disabled:l??o?!0:void 0}),d&&u==="left"&&I.createElement("span",{className:"navds-button__icon"},d),o&&I.createElement(AT,{size:i}),s&&I.createElement(xe,{as:"span",size:i==="medium"?"medium":"small"},s),d&&u==="right"&&I.createElement("span",{className:"navds-button__icon"},d))});var _T=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const cT={error:lu,warning:Nm,info:hm,success:iu},gu=f.forwardRef((e,r)=>{var{children:n,className:t,variant:a,size:s="medium",fullWidth:i=!1,contentMaxWidth:o=!0,inline:l=!1,closeButton:d=!1,onClose:u}=e,E=_T(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const v=ka("Alert"),c=cT[a];return I.createElement("div",Object.assign({},E,{ref:r,className:Ee(t,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":i,"navds-alert--inline":l,"navds-alert--close-button":d})}),I.createElement(c,{title:v(a),className:"navds-alert__icon"}),I.createElement(tu,{as:"div",size:s,className:Ee("navds-alert__wrapper",o&&"navds-alert__wrapper--maxwidth")},n),d&&!l&&I.createElement("div",{className:"navds-alert__button-wrapper"},I.createElement(fn,{className:"navds-alert__button",size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:I.createElement(ou,{title:["error","warning"].includes(a)?v("closeAlert"):v("closeMessage")})})))});var Hn=function(){return Hn=Object.assign||function(r){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Hn.apply(this,arguments)};var pT=f.createContext(void 0);function NT(){var e=f.useContext(pT);if(!e)throw new Error("useDayPicker must be used within a DayPickerProvider.");return e}f.createContext(void 0);f.forwardRef(function(e,r){var n=NT(),t=n.classNames,a=n.styles,s=[t.button_reset,t.button];e.className&&s.push(e.className);var i=s.join(" "),o=Hn(Hn({},a.button_reset),a.button);return e.style&&Object.assign(o,e.style),k.jsx("button",Hn({},e,{ref:r,type:"button",className:i,style:o}))});f.createContext(void 0);f.createContext(void 0);var Tr;(function(e){e.Outside="outside",e.Disabled="disabled",e.Selected="selected",e.Hidden="hidden",e.Today="today",e.RangeStart="range_start",e.RangeEnd="range_end",e.RangeMiddle="range_middle"})(Tr||(Tr={}));Tr.Selected;Tr.Disabled;Tr.Hidden;Tr.Today;Tr.RangeEnd;Tr.RangeMiddle;Tr.RangeStart;Tr.Outside;f.createContext(void 0);f.createContext(void 0);f.createContext(void 0);const ST=f.createContext(null);f.createContext({hasDropdown:!1,year:new Date,toYear:()=>null,disabled:[],onSelect:()=>null});nu();const hT=()=>I.createElement(Im,{"aria-hidden":!0,className:"navds-form-field__readonly-icon"}),bT=f.createContext(null),IT=(e,r)=>{var n,t,a;const{size:s,error:i,errorId:o}=e,l=f.useContext(bT),d=ga(),u=(n=e.id)!==null&&n!==void 0?n:`${r}-${d}`,E=o??`${r}-error-${d}`,v=`${r}-description-${d}`,c=(l==null?void 0:l.disabled)||e.disabled,h=((l==null?void 0:l.readOnly)||e.readOnly)&&!c||void 0,T=!c&&!h&&!!(i||l!=null&&l.error),A=!c&&!h&&!!i&&typeof i!="boolean",N=Object.assign({},T?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:A,hasError:T,errorId:E,inputDescriptionId:v,size:(t=s??(l==null?void 0:l.size))!==null&&t!==void 0?t:"medium",readOnly:h,inputProps:Object.assign(Object.assign({id:u},N),{"aria-describedby":Ee(e["aria-describedby"],{[v]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[E]:A,[(a=l==null?void 0:l.errorId)!==null&&a!==void 0?a:""]:T&&!!(l!=null&&l.error)})||void 0,disabled:c})}};function OT(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function LT(e){return e instanceof Element||e instanceof OT(e).Element}var ls=typeof document<"u"?f.useLayoutEffect:f.useEffect;let wa=!1,DT=0;const zi=()=>"floating-ui-"+DT++;function KT(){const[e,r]=f.useState(()=>wa?zi():void 0);return ls(()=>{e==null&&r(zi())},[]),f.useEffect(()=>{wa||(wa=!0)},[]),e}const PT=Kg.useId,FT=PT||KT;function MT(e){return"data-floating-ui-"+e}const GT=f.createContext(null);function VT(e){let{id:r,root:n}=e===void 0?{}:e;const[t,a]=f.useState(null),s=FT(),i=UT(),o=f.useMemo(()=>({id:r,root:n,portalContext:i,uniqueId:s}),[r,n,i,s]),l=f.useRef();return ls(()=>()=>{t==null||t.remove()},[t,o]),ls(()=>{if(l.current===o)return;l.current=o;const{id:d,root:u,portalContext:E,uniqueId:v}=o,c=d?document.getElementById(d):null,h=MT("portal");if(c){const T=document.createElement("div");T.id=v,T.setAttribute(h,""),c.appendChild(T),a(T)}else{let T=u||(E==null?void 0:E.portalNode);T&&!LT(T)&&(T=T.current),T=T||document.body;let A=null;d&&(A=document.createElement("div"),A.id=d,T.appendChild(A));const N=document.createElement("div");N.id=v,N.setAttribute(h,""),T=A||T,T.appendChild(N),a(N)}},[o]),t}const UT=()=>f.useContext(GT);var wT=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const BT=f.forwardRef((e,r)=>{var{className:n}=e,t=wT(e,["className"]);return I.createElement("div",Object.assign({},t,{ref:r,className:Ee("navds-modal__body",n)}))});var jT=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const HT=f.forwardRef((e,r)=>{var{className:n}=e,t=jT(e,["className"]);return I.createElement("div",Object.assign({},t,{ref:r,className:Ee("navds-modal__footer",n)}))});var YT=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ku=f.forwardRef((e,r)=>{var{children:n,className:t,closeButton:a=!0}=e,s=YT(e,["children","className","closeButton"]);const i=du(),o=ka("global");return I.createElement("div",Object.assign({},s,{ref:r,className:Ee("navds-modal__header",t)}),i.closeHandler&&a&&I.createElement(fn,{type:"button",className:"navds-modal__button",size:"small",variant:"tertiary-neutral",onKeyDown:l=>{["Enter"," "].includes(l.key)&&l.repeat&&l.preventDefault()},onClick:i.closeHandler,icon:I.createElement(ou,{title:o("close")})}),n)}),Zi=({clientX:e,clientY:r},{left:n,top:t,right:a,bottom:s})=>!(e<n||r<t||e>a||r>s);function xT(e,r,n){if(!(r&&r.closeButton===!1))return n?()=>{var t;return n()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const mt="navds-modal__document-body";function qT(e,r,n){I.useEffect(()=>{if(n||!e.current||!r)return;e.current.open&&document.body.classList.add(mt);const t=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(mt):document.body.classList.remove(mt)});return t.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{t.disconnect(),document.body.classList.remove(mt)}},[e,r,n])}const dn=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function Eu(e,r){var n="on"+r.type.toLowerCase();return typeof e[n]=="function"&&e[n](r),e.dispatchEvent(r)}function Yn(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function vu(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function CT(e,r){for(var n=0;n<e.length;++n)if(e[n]===r)return!0;return!1}function Ba(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function mu(e){var r=["button","input","keygen","select","textarea"],n=r.map(function(i){return i+":not([disabled])"});n.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(n.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),s=0;s<a.length&&!(a[s].tagName&&a[s].shadowRoot&&(t=mu(a[s].shadowRoot),t));s++);return t}function Xi(e){return e.isConnected||document.body.contains(e)}function Tu(e){if(e.submitter)return e.submitter;var r=e.target;if(!(r instanceof HTMLFormElement))return null;var n=te.formSubmitter;if(!n){var t=e.target,a="getRootNode"in t&&t.getRootNode()||document;n=a.activeElement}return!n||n.form!==r?null:n}function $T(e){if(!e.defaultPrevented){var r=e.target,n=te.imagemapUseValue,t=Tu(e);n===null&&t&&(n=t.value);var a=Yn(r);if(a){var s=t&&t.getAttribute("formmethod")||r.getAttribute("method");s==="dialog"&&(e.preventDefault(),n!=null?a.close(n):a.close())}}}function fu(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",$T,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var r=new MutationObserver(this.maybeHideModal.bind(this));r.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var n=!1,t=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),a,s=function(i){if(i.target===e){var o="DOMNodeRemoved";n|=i.type.substr(0,o.length)===o,window.clearTimeout(a),a=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,s)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}fu.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Xi(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),te.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var r=document.createElement("div");this.dialog_.insertBefore(r,this.dialog_.firstChild),r.tabIndex=-1,r.focus(),this.dialog_.removeChild(r)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=mu(this.dialog_)),vu(document.activeElement),e&&e.focus()},updateZIndex:function(e,r){if(e<r)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=r},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Xi(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!te.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,te.needsCentering(this.dialog_)?(te.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var r=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});Eu(this.dialog_,r)}};var te={};te.reposition=function(e){var r=document.body.scrollTop||document.documentElement.scrollTop,n=r+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(r,n)+"px"};te.isInlinePositionSetByStylesheet=function(e){for(var r=0;r<document.styleSheets.length;++r){var n=document.styleSheets[r],t=null;try{t=n.cssRules}catch{}if(t)for(var a=0;a<t.length;++a){var s=t[a],i=null;try{i=document.querySelectorAll(s.selectorText)}catch{}if(!(!i||!CT(i,e))){var o=s.style.getPropertyValue("top"),l=s.style.getPropertyValue("bottom");if(o&&o!=="auto"||l&&l!=="auto")return!0}}}return!1};te.needsCentering=function(e){var r=window.getComputedStyle(e);return r.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!te.isInlinePositionSetByStylesheet(e)};te.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new fu(e)};te.registerDialog=function(e){e.showModal||te.forceRegisterDialog(e)};te.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(r){this.forwardTab_=void 0,r.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(r){var n=[];r.forEach(function(t){for(var a=0,s;s=t.removedNodes[a];++a)s instanceof Element&&(s.localName==="dialog"&&n.push(s),n=n.concat(s.querySelectorAll("dialog")))}),n.length&&e(n)}))};te.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};te.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};te.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,r=0,n;n=this.pendingDialogStack[r];++r)n.updateZIndex(--e,--e),r===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var a=t.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};te.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=Yn(e);){for(var r=0,n;n=this.pendingDialogStack[r];++r)if(n.dialog===e)return r===0;e=e.parentElement}return!1};te.DialogManager.prototype.handleFocus_=function(e){var r=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(r)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),vu(r),this.forwardTab_!==void 0)){var n=this.pendingDialogStack[0],t=n.dialog,a=t.compareDocumentPosition(r);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():r!==document.documentElement&&document.documentElement.focus()),!1}};te.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var r=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&Eu(n.dialog,r)&&n.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};te.DialogManager.prototype.checkDOM_=function(e){var r=this.pendingDialogStack.slice();r.forEach(function(n){e.indexOf(n.dialog)!==-1?n.downgradeModal():n.maybeHideModal()})};te.DialogManager.prototype.pushDialog=function(e){var r=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=r?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};te.DialogManager.prototype.removeDialog=function(e){var r=this.pendingDialogStack.indexOf(e);r!==-1&&(this.pendingDialogStack.splice(r,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};dn&&(te.dm=new te.DialogManager,te.formSubmitter=null,te.imagemapUseValue=null);if(dn){var Qi=document.createElement("form");if(Qi.setAttribute("method","dialog"),Qi.method!=="dialog"){var an=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(an){var JT=an.get;an.get=function(){return Ba(this)?"dialog":JT.call(this)};var WT=an.set;an.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):WT.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",an)}}document.addEventListener("click",function(e){if(te.formSubmitter=null,te.imagemapUseValue=null,!e.defaultPrevented){var r=e.target;if("composedPath"in e){var n=e.composedPath();r=n.shift()||r}if(!(!r||!Ba(r.form))){var t=r.type==="submit"&&["button","input"].indexOf(r.localName)>-1;if(!t){if(!(r.localName==="input"&&r.type==="image"))return;te.imagemapUseValue=e.offsetX+","+e.offsetY}var a=Yn(r);a&&(te.formSubmitter=r)}}},!1),document.addEventListener("submit",function(e){var r=e.target,n=Yn(r);if(!n){var t=Tu(e),a=t&&t.getAttribute("formmethod")||r.getAttribute("method");a==="dialog"&&e.preventDefault()}});var zT=HTMLFormElement.prototype.submit,ZT=function(){if(!Ba(this))return zT.call(this);var e=Yn(this);e&&e.close()};HTMLFormElement.prototype.submit=ZT}var XT=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const eo="navds-modal--polyfilled",gn=f.forwardRef((e,r)=>{var n,t,{header:a,children:s,open:i,onBeforeClose:o,onCancel:l,closeOnBackdropClick:d,width:u,placement:E,portal:v,className:c,"aria-labelledby":h,style:T,onClick:A,onMouseDown:N}=e,p=XT(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const y=f.useRef(null),P=ru(y,r),R=ga(),G=(n=uu())===null||n===void 0?void 0:n.rootElement,b=VT({root:G}),S=f.useContext(ST),U=du(!1)!==void 0;U&&!S&&console.error("Modals should not be nested"),f.useEffect(()=>{dn&&y.current&&b&&(te.registerDialog(y.current),y.current.classList.add(eo)),y.current&&b&&(y.current.autofocus=!0)},[b]),f.useEffect(()=>{y.current&&b&&i!==void 0&&(i&&!y.current.open?y.current.showModal():!i&&y.current.open&&y.current.close())},[b,i]),qT(y,b,U);const j=typeof u=="string"&&["small","medium"].includes(u),Y=Ee("navds-modal",c,{[eo]:dn,"navds-modal--autowidth":!u,[`navds-modal--${u}`]:j,"navds-modal--top":E==="top"&&!dn}),D=Object.assign(Object.assign({},T),j?{}:{width:u}),K=f.useRef({clientX:0,clientY:0}),q=Ke=>{K.current=Ke},J=d&&!dn,ee=Ke=>{if(Ke.target!==y.current)return;const Oe=y.current.getBoundingClientRect();Zi(K.current,Oe)||Zi(Ke,Oe)||o!==void 0&&o()===!1||y.current.close()},Re=Ke=>{o&&o()===!1&&Ke.preventDefault()},Se=!h&&!p["aria-label"]&&a?R:h,Pe=I.createElement("dialog",Object.assign({},p,{ref:P,className:Y,style:D,onCancel:jn(l,Re),onClick:J?jn(A,ee):A,onMouseDown:J?jn(N,q):N,"aria-labelledby":Se}),I.createElement(Fm,{closeHandler:xT(y,a,o),ref:y},a&&I.createElement(ku,null,a.label&&I.createElement(wr,{className:"navds-modal__label"},a.label),I.createElement(Vs,{size:(t=a.size)!==null&&t!==void 0?t:"medium",level:"1",id:R},a.icon&&I.createElement("span",{className:"navds-modal__header-icon"},a.icon),a.heading)),s));return v?b?Mg.createPortal(Pe,b):null:Pe});gn.Header=ku;gn.Body=BT;gn.Footer=HT;var QT=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ds=f.forwardRef((e,r)=>{var{as:n="a",className:t,underline:a=!0,variant:s="action",inlineText:i=!1}=e,o=QT(e,["as","className","underline","variant","inlineText"]);return I.createElement(n,Object.assign({},o,{ref:r,className:Ee("navds-link",t,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":i})}))});var ef=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const rf=f.forwardRef((e,r)=>{var{children:n,className:t,variant:a,size:s="medium",icon:i}=e,o=ef(e,["children","className","variant","size","icon"]);const l=(a==null?void 0:a.endsWith("-filled"))&&"strong",d=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",u=a==null?void 0:a.replace("-filled","").replace("-moderate","");return I.createElement(ze,Object.assign({},o,{ref:r,as:"span",size:s==="medium"?"medium":"small",className:Ee("navds-tag",t,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${l||d||"outline"}`,`navds-tag--${u}`)}),i&&I.createElement("span",{className:"navds-tag__icon--left"},i),n)});var nf=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ro=(e,r,n)=>{const{outerHeightStyle:t,overflow:a}=r;return n.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==a)?(n.current+=1,r):e},no=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Tt(e){return parseInt(e,10)||0}const tf=f.forwardRef((e,r)=>{var n,t,{className:a,onChange:s,maxRows:i,minRows:o=1,autoScrollbar:l,style:d,value:u}=e,E=nf(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:v}=f.useRef(u!=null),c=f.useRef(null),h=ru(c,r),T=f.useRef(null),A=f.useRef(0),[N,p]=f.useState({outerHeightStyle:0}),y=I.useCallback(()=>{const b=c.current,U=no(b).getComputedStyle(b);if(U.width==="0px")return{outerHeightStyle:0};const j=T.current;j.style.width=U.width,j.value=b.value||E.placeholder||"x",j.value.slice(-1)===`
`&&(j.value+=" ");const Y=U.boxSizing,D=Tt(U.paddingBottom)+Tt(U.paddingTop),K=Tt(U.borderBottomWidth)+Tt(U.borderTopWidth),q=j.scrollHeight-D;j.value="x";const J=j.scrollHeight-D;let ee=q;o&&(ee=Math.max(Number(o)*J,ee)),i&&(ee=Math.min(Number(i)*J,ee)),ee=Math.max(ee,J);const Re=ee+(Y==="border-box"?D+K:0),Se=Math.abs(ee-q)<=1;return{outerHeightStyle:Re,overflow:Se}},[i,o,E.placeholder]),P=()=>{const b=y();to(b)||p(S=>ro(S,b,A))};Yi(()=>{const b=()=>{const D=y();to(D)||Gg.flushSync(()=>{p(K=>ro(K,D,A))})},S=au(()=>{var D,K,q;if(A.current=0,!((D=c.current)===null||D===void 0)&&D.style.height||!((K=c.current)===null||K===void 0)&&K.style.width){((q=c.current)===null||q===void 0?void 0:q.style.overflow)==="hidden"&&p(J=>Object.assign(Object.assign({},J),{overflow:!1}));return}b()},166,!0),U=c.current,j=no(U);j.addEventListener("resize",S);let Y;return typeof ResizeObserver<"u"&&(Y=new ResizeObserver(S),Y.observe(U)),()=>{S.clear(),j.removeEventListener("resize",S),Y&&Y.disconnect()}},[y]),Yi(()=>{P()}),f.useEffect(()=>{A.current=0},[u]);const R=b=>{A.current=0,v||P(),s&&s(b)},G=Object.assign({"--__ac-textarea-height":N.outerHeightStyle+"px","--__axc-textarea-height":N.outerHeightStyle+"px",overflow:N.overflow&&!l&&!(!((n=c.current)===null||n===void 0)&&n.style.height)&&!(!((t=c.current)===null||t===void 0)&&t.style.width)?"hidden":void 0},d);return I.createElement(I.Fragment,null,I.createElement("textarea",Object.assign({value:u,onChange:R,ref:h,rows:o,style:G},E,{className:a})),I.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:T,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d)}))});function to(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const af=({maxLengthId:e,maxLength:r,currentLength:n,size:t,i18n:a})=>{const s=ka("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),i=r-n,[o,l]=f.useState(i);return f.useEffect(()=>{const d=au(()=>{l(i)},2e3);return d(),()=>{d.clear()}},[i]),I.createElement(I.Fragment,null,I.createElement("span",{id:e,className:"navds-sr-only"},s("maxLength",{maxLength:r})),i<20&&I.createElement("span",{role:"status",className:"navds-textarea__sr-counter navds-sr-only"},ao(o,s)),I.createElement(ze,{className:Ee("navds-textarea__counter",{"navds-textarea__counter--error":i<0}),size:t},ao(i,s)))},ao=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var sf=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const of=f.forwardRef((e,r)=>{var n,t,a;const{inputProps:s,errorId:i,showErrorMsg:o,hasError:l,size:d,inputDescriptionId:u}=IT(e,"textarea"),{label:E,className:v,description:c,maxLength:h,hideLabel:T=!1,resize:A,UNSAFE_autoScrollbar:N,i18n:p,readOnly:y}=e,P=sf(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),R=ga(),G=h!==void 0&&h>0,[b,S]=f.useState((n=e==null?void 0:e.defaultValue)!==null&&n!==void 0?n:""),U=()=>{let Y=P!=null&&P.minRows?P==null?void 0:P.minRows:3;return d==="small"&&(Y=P!=null&&P.minRows?P==null?void 0:P.minRows:2),Y},j=Ee(s["aria-describedby"],{[R??""]:G});return I.createElement("div",{className:Ee(v,"navds-form-field",`navds-form-field--${d}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":y,"navds-textarea--readonly":y,"navds-textarea--error":l,"navds-textarea--autoscrollbar":N,[`navds-textarea--resize-${A===!0?"both":A}`]:A})},I.createElement(xe,{htmlFor:s.id,size:d,className:Ee("navds-form-field__label",{"navds-sr-only":T})},y&&I.createElement(hT,null),E),!!c&&I.createElement(ze,{className:Ee("navds-form-field__description",{"navds-sr-only":T}),id:u,size:d,as:"div"},c),I.createElement(tf,Object.assign({},Us(P,["error","errorId","size"]),s,{onChange:jn(e.onChange,e.value===void 0?Y=>S(Y.target.value):void 0),minRows:U(),autoScrollbar:N,ref:r,readOnly:y,className:Ee("navds-textarea__input","navds-body-short",`navds-body-short--${d??"medium"}`)},j?{"aria-describedby":j}:{})),G&&!y&&!s.disabled&&I.createElement(af,{maxLengthId:R,maxLength:h,currentLength:(a=(t=e.value)===null||t===void 0?void 0:t.length)!==null&&a!==void 0?a:b.length,size:d,i18n:p}),I.createElement("div",{className:"navds-form-field__error",id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&I.createElement(mm,{size:d,showIcon:!0},e.error)))});function lf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var so={exports:{}},Fn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var io;function df(){if(io)return Fn;io=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(t,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:i,ref:a!==void 0?a:null,props:s}}return Fn.Fragment=r,Fn.jsx=n,Fn.jsxs=n,Fn}var oo;function uf(){return oo||(oo=1,so.exports=df()),so.exports}var le=uf();const _n={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};Be(_n);var lo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var uo;function gf(){return uo||(uo=1,function(e){(function(){var r={}.hasOwnProperty;function n(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,t.call(this,o)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)r.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(lo)),lo.exports}var kf=gf();const Xe=lf(kf),Ef="_borderbox_1vkvn_1",vf="_error_1vkvn_5",mf="_warning_1vkvn_8",Tf={borderbox:Ef,error:vf,warning:mf};Xe.bind(Tf);const ff="_aksjonspunkt_kn1hn_1",Rf="_erAksjonspunktApent_kn1hn_4",Af="_erIkkeGodkjentAvBeslutter_kn1hn_8",yf={aksjonspunkt:ff,erAksjonspunktApent:Rf,erIkkeGodkjentAvBeslutter:Af};Xe.bind(yf);Be(_n);const go=Be(_n),_f=({text:e,okButtonText:r,showModal:n,cancel:t,submit:a})=>le.jsxs(gn,{width:"small",open:n,"aria-label":e,onClose:t,children:[le.jsx(gn.Body,{children:le.jsx(Vs,{size:"small",children:e})}),le.jsxs(gn.Footer,{children:[le.jsx(fn,{variant:"primary",size:"small",onClick:a,autoFocus:!0,type:"button",children:r||go.formatMessage({id:"OkAvbrytModal.Ok"})}),le.jsx(fn,{variant:"secondary",size:"small",onClick:t,type:"button",children:go.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),cf="_flexColumnNew_1vdv1_1",pf={flexColumnNew:cf},Nf=Xe.bind(pf),Fe=({children:e,className:r})=>le.jsx("div",{className:Nf("flexColumnNew",r),children:e}),Sf="_flexRow_1yf0y_1",hf="_spaceBetween_1yf0y_9",bf="_alignItemsToBaseline_1yf0y_12",If="_alignItemsToFlexEnd_1yf0y_15",Of="_justifyItemsToFlexEnd_1yf0y_18",Lf="_wrap_1yf0y_21",Df={flexRow:Sf,spaceBetween:hf,alignItemsToBaseline:bf,alignItemsToFlexEnd:If,justifyItemsToFlexEnd:Of,wrap:Lf},Kf=Xe.bind(Df),Cr=({children:e,spaceBetween:r=!1,alignItemsToBaseline:n=!1,alignItemsToFlexEnd:t=!1,wrap:a=!1,className:s})=>le.jsx("div",{className:Kf("flexRow",{spaceBetween:r},{alignItemsToBaseline:n},{alignItemsToFlexEnd:t},{wrap:a},s),children:e}),Pf="_flexContainer_1dk1o_1",Ff="_fluid_1dk1o_6",Mf="_fullHeight_1dk1o_9",Gf="_flexWrap_1dk1o_17",Vf={flexContainer:Pf,fluid:Ff,fullHeight:Mf,flexWrap:Gf},Uf=Xe.bind(Vf),$r=({children:e,wrap:r=!1,fullHeight:n=!1})=>le.jsx("div",{className:Uf("flexContainer","fluid",{flexWrap:r,fullHeight:n}),children:e});Be(_n);const wf="_columnStyle_1f13u_1",Ru={columnStyle:wf},Bf=Xe.bind(Ru),ja=({children:e="",className:r,hidden:n=!1,colspanAll:t=!1})=>n?null:le.jsx("td",{className:Bf(Ru.columnStyle,r),colSpan:t?100:void 0,children:e}),jf="_row_1lxv9_1",Hf="_harHover_1lxv9_4",Yf="_rowHeader_1lxv9_7",xf="_grayHeader_1lxv9_12",qf="_rowContent_1lxv9_15",Cf="_selected_1lxv9_18",$f="_bold_1lxv9_22",Jf="_dashedBottomBorder_1lxv9_25",Wf="_solidBottomBorder_1lxv9_28",zf="_apLeftBorder_1lxv9_31",Zf="_noBottomBorder_1lxv9_34",Au={row:jf,harHover:Hf,rowHeader:Yf,grayHeader:xf,rowContent:qf,selected:Cf,bold:$f,dashedBottomBorder:Jf,solidBottomBorder:Wf,apLeftBorder:zf,noBottomBorder:Zf},Xf=Xe.bind(Au),Qf=(e,r,n)=>t=>{e&&t.button===0&&e(t,r,n)},yu=e=>e.tagName==="TR"?e:yu(e.parentElement),ko=(e,r)=>{const n=yu(e.target),t=(r?n.nextSibling:n.previousSibling)||n;t&&(t.focus(),e.preventDefault())},eR=(e,r,n,t)=>a=>{a.key==="ArrowDown"?ko(a,!0):a.key==="ArrowUp"?ko(a,!1):r&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(r(a,n,t),a.preventDefault()):e&&r&&a.target.tagName!=="TD"&&a.key==="Shift"&&(r(a),a.preventDefault())},rR=e=>r=>{e&&r.target.tagName!=="TD"&&r.key==="Shift"&&(e(r),r.preventDefault())},nR=({id:e,model:r,isHeader:n=!1,hasGrayHeader:t=!1,onMouseDown:a,onKeyDown:s,children:i,noHover:o=!1,isSelected:l=!1,isBold:d=!1,isDashedBottomBorder:u=!1,isSolidBottomBorder:E=!1,isApLeftBorder:v=!1,className:c,useMultiselect:h=!1,hasNoBottomBorder:T=!1})=>le.jsx("tr",{className:Xf(c,Au.row,{rowHeader:n,grayHeader:t,rowContent:!n&&!o,selected:l,harHover:!o,bold:d,dashedBottomBorder:u,solidBottomBorder:E,noBottomBorder:T,apLeftBorder:v}),onMouseDown:Qf(a,e,r),onKeyDown:eR(h,s,e,r),onKeyUp:h?rR(s):void 0,tabIndex:0,children:i}),tR="_table_2cnpl_1",aR="_rowHover_2cnpl_25",sR={table:tR,rowHover:aR},iR=Xe.bind(sR),oR="EMPTY",lR=I.forwardRef(({headerTextCodes:e=[],headerColumnContent:r=[],classNameTable:n="",noHover:t=!1,hasGrayHeader:a=!1,children:s},i)=>le.jsxs("table",{ref:i,className:iR("table",{[n]:n,rowHover:!t}),children:[le.jsx("thead",{children:le.jsxs(nR,{isHeader:!0,noHover:t,hasGrayHeader:a,children:[e.map(o=>typeof o=="string"&&o.startsWith(oR)?le.jsx(ja,{children:" "},o):le.jsx(ja,{children:le.jsx(Ae,{id:o})},o)),r.map(o=>le.jsx(ja,{children:o},o.key))]})}),le.jsx("tbody",{children:Array.isArray(s)?I.Children.map(s,o=>I.cloneElement(o,{noHover:t})):I.cloneElement(s,{noHover:t})})]}));lR.displayName="Table";const dR="_hidden_1pb4f_1",uR="_active_1pb4f_8",gR="_activeRow_1pb4f_15 _active_1pb4f_8",kR="_toggleIcon_1pb4f_19",ER="_colTopPadding_1pb4f_22",vR={hidden:dR,active:uR,activeRow:gR,toggleIcon:kR,colTopPadding:ER};Xe.bind(vR);Be(_n);const mR="_fourPx_qda5k_1",TR="_eightPx_qda5k_4",fR="_sixteenPx_qda5k_7",RR="_twentyPx_qda5k_10",AR="_thirtyTwoPx_qda5k_13",yR="_fourtyPx_qda5k_16",_R={fourPx:mR,eightPx:TR,sixteenPx:fR,twentyPx:RR,thirtyTwoPx:AR,fourtyPx:yR},cR=Xe.bind(_R),ye=({fourPx:e=!1,eightPx:r=!1,sixteenPx:n=!1,twentyPx:t=!1,thirtyTwoPx:a=!1,fourtyPx:s=!1})=>le.jsx("div",{className:cR({fourPx:e,eightPx:r,sixteenPx:n,twentyPx:t,thirtyTwoPx:a,fourtyPx:s})});Be(_n);const pR="_divider_1t980_1",NR="_dividerParagraf_1t980_8",SR="_leftPanel_1t980_11",hR="_rightPanel_1t980_14",us={divider:pR,dividerParagraf:NR,leftPanel:SR,rightPanel:hR},bR=Xe.bind(us),IR=({spaceUnder:e=!1,spaceAbove:r=!1,leftPanel:n=!1,rightPanel:t=!1,dividerParagraf:a=!1,className:s})=>le.jsxs(le.Fragment,{children:[r&&le.jsx(ye,{thirtyTwoPx:!0}),le.jsx("div",{className:bR(s,{leftPanel:n,rightPanel:t}),children:le.jsx("div",{className:a?us.dividerParagraf:us.divider})}),e&&le.jsx(ye,{thirtyTwoPx:!0})]}),OR="_editedIcon_ulrjl_1",LR={editedIcon:OR},DR=Xe.bind(LR),_u=({className:e=""})=>le.jsx("span",{"data-testid":"editedIcon",className:DR("editedIcon",e),children:le.jsx(Dm,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});function KR(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Eo={exports:{}},Mn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo;function PR(){if(vo)return Mn;vo=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(t,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:i,ref:a!==void 0?a:null,props:s}}return Mn.Fragment=r,Mn.jsx=n,Mn.jsxs=n,Mn}var mo;function FR(){return mo||(mo=1,Eo.exports=PR()),Eo.exports}var We=FR();const MR=e=>e.reduce((r,n,t)=>({...r,[t]:a=>n(a)||!0}),{}),GR=(e,r)=>{const n=r.split(".").reduce((t,a)=>t!==void 0?t[a]:t,e);return n==null?void 0:n.message};var gs={exports:{}},VR=gs.exports,To;function UR(){return To||(To=1,function(e,r){(function(n,t){e.exports=t()})(VR,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,l={},d=function(A){return(A=+A)+(A>68?1900:2e3)},u=function(A){return function(N){this[A]=+N}},E=[/[+-]\d\d:?(\d\d)?|Z/,function(A){(this.zone||(this.zone={})).offset=function(N){if(!N||N==="Z")return 0;var p=N.match(/([+-]|\d\d)/g),y=60*p[1]+(+p[2]||0);return y===0?0:p[0]==="+"?-y:y}(A)}],v=function(A){var N=l[A];return N&&(N.indexOf?N:N.s.concat(N.f))},c=function(A,N){var p,y=l.meridiem;if(y){for(var P=1;P<=24;P+=1)if(A.indexOf(y(P,0,N))>-1){p=P>12;break}}else p=A===(N?"pm":"PM");return p},h={A:[o,function(A){this.afternoon=c(A,!1)}],a:[o,function(A){this.afternoon=c(A,!0)}],Q:[a,function(A){this.month=3*(A-1)+1}],S:[a,function(A){this.milliseconds=100*+A}],SS:[s,function(A){this.milliseconds=10*+A}],SSS:[/\d{3}/,function(A){this.milliseconds=+A}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[s,u("day")],Do:[o,function(A){var N=l.ordinal,p=A.match(/\d+/);if(this.day=p[0],N)for(var y=1;y<=31;y+=1)N(y).replace(/\[|\]/g,"")===A&&(this.day=y)}],w:[i,u("week")],ww:[s,u("week")],M:[i,u("month")],MM:[s,u("month")],MMM:[o,function(A){var N=v("months"),p=(v("monthsShort")||N.map(function(y){return y.slice(0,3)})).indexOf(A)+1;if(p<1)throw new Error;this.month=p%12||p}],MMMM:[o,function(A){var N=v("months").indexOf(A)+1;if(N<1)throw new Error;this.month=N%12||N}],Y:[/[+-]?\d+/,u("year")],YY:[s,function(A){this.year=d(A)}],YYYY:[/\d{4}/,u("year")],Z:E,ZZ:E};function T(A){var N,p;N=A,p=l&&l.formats;for(var y=(A=N.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(j,Y,D){var K=D&&D.toUpperCase();return Y||p[D]||n[D]||p[K].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(q,J,ee){return J||ee.slice(1)})})).match(t),P=y.length,R=0;R<P;R+=1){var G=y[R],b=h[G],S=b&&b[0],U=b&&b[1];y[R]=U?{regex:S,parser:U}:G.replace(/^\[|\]$/g,"")}return function(j){for(var Y={},D=0,K=0;D<P;D+=1){var q=y[D];if(typeof q=="string")K+=q.length;else{var J=q.regex,ee=q.parser,Re=j.slice(K),Se=J.exec(Re)[0];ee.call(Y,Se),j=j.replace(Se,"")}}return function(Pe){var Ke=Pe.afternoon;if(Ke!==void 0){var Oe=Pe.hours;Ke?Oe<12&&(Pe.hours+=12):Oe===12&&(Pe.hours=0),delete Pe.afternoon}}(Y),Y}}return function(A,N,p){p.p.customParseFormat=!0,A&&A.parseTwoDigitYear&&(d=A.parseTwoDigitYear);var y=N.prototype,P=y.parse;y.parse=function(R){var G=R.date,b=R.utc,S=R.args;this.$u=b;var U=S[1];if(typeof U=="string"){var j=S[2]===!0,Y=S[3]===!0,D=j||Y,K=S[2];Y&&(K=S[2]),l=this.$locale(),!j&&K&&(l=p.Ls[K]),this.$d=function(Re,Se,Pe,Ke){try{if(["x","X"].indexOf(Se)>-1)return new Date((Se==="X"?1e3:1)*Re);var Oe=T(Se)(Re),Qr=Oe.year,en=Oe.month,ot=Oe.day,ba=Oe.hours,Sn=Oe.minutes,lt=Oe.seconds,hn=Oe.milliseconds,bn=Oe.zone,dt=Oe.week,rn=new Date,In=ot||(Qr||en?1:rn.getDate()),nn=Qr||rn.getFullYear(),jr=0;Qr&&!en||(jr=en>0?en-1:rn.getMonth());var On,ut=ba||0,gt=Sn||0,g=lt||0,m=hn||0;return bn?new Date(Date.UTC(nn,jr,In,ut,gt,g,m+60*bn.offset*1e3)):Pe?new Date(Date.UTC(nn,jr,In,ut,gt,g,m)):(On=new Date(nn,jr,In,ut,gt,g,m),dt&&(On=Ke(On).week(dt).toDate()),On)}catch{return new Date("")}}(G,U,b,p),this.init(),K&&K!==!0&&(this.$L=this.locale(K).$L),D&&G!=this.format(U)&&(this.$d=new Date("")),l={}}else if(U instanceof Array)for(var q=U.length,J=1;J<=q;J+=1){S[1]=U[J-1];var ee=p.apply(this,S);if(ee.isValid()){this.$d=ee.$d,this.$L=ee.$L,this.init();break}J===q&&(this.$d=new Date(""))}else P.call(this,R)}}})}(gs)),gs.exports}var wR=UR();const BR=KR(wR),jR="_readOnlyContainer_v0eco_1",HR="_readOnlyContent_v0eco_4",YR="_textarea_v0eco_11",xR="_space_v0eco_15",ft={readOnlyContainer:jR,readOnlyContent:HR,textarea:YR,space:xR},qR=e=>e!=null&&e!=="",CR=({label:e,value:r,isEdited:n=!1,type:t,hideLabel:a,size:s})=>qR(r)?We.jsxs("div",{className:ft.readOnlyContainer,children:[e&&!a&&We.jsx(xe,{size:"small",children:e}),We.jsx("div",{className:t==="textarea"?ft.textarea:"",children:We.jsxs(tu,{className:ft.readOnlyContent,size:s,children:[r,n&&We.jsx(_u,{className:ft.space})]})})]}):null;Zr.extend(BR);const $R="_textAreaFieldWithBadges_bdz0b_1",JR="_etikettWrapper_bdz0b_4",fo={textAreaFieldWithBadges:$R,etikettWrapper:JR},ra=({name:e,label:r,readOnly:n,maxLength:t,badges:a,validate:s=[],parse:i=E=>E,className:o,description:l,isEdited:d,...u})=>{const{formState:{errors:E}}=An(),{field:v}=Wv({name:e,rules:{validate:f.useMemo(()=>MR(s),[s])}});return n?We.jsx(CR,{label:r,value:v.value,type:"textarea",isEdited:d,hideLabel:u.hideLabel}):We.jsxs("div",{className:a?fo.textAreaFieldWithBadges:null,children:[a&&We.jsx("div",{className:fo.etikettWrapper,children:a.map(({type:c,titleText:h})=>We.jsx(rf,{variant:c,size:"small",children:h},h))}),We.jsx(of,{size:"small",label:r,description:l,className:o,autoComplete:"off",...v,onChange:c=>v.onChange(c.currentTarget.value!==""?i(c.currentTarget.value):null),value:v.value?v.value:"",error:GR(E,e),maxLength:t,...u})]})},cu=({formMethods:e,onSubmit:r,children:n,className:t,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:i}=e;return f.useEffect(()=>()=>{a&&a(i())},[]),We.jsx(Cv,{...e,children:We.jsx("form",{className:t,onSubmit:r?s(o=>r(o)):void 0,children:n})})};function pu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ks={exports:{}},WR=ks.exports,Ro;function zR(){return Ro||(Ro=1,function(e,r){(function(n,t){e.exports=t()})(WR,function(){return function(n,t){t.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(ks)),ks.exports}var ZR=zR();const XR=pu(ZR);var Es={exports:{}},QR=Es.exports,Ao;function eA(){return Ao||(Ao=1,function(e,r){(function(n,t){e.exports=t()})(QR,function(){return function(n,t){t.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(Es)),Es.exports}var rA=eA();const nA=pu(rA),tA="Dato må være før eller lik {limit}",aA="Dato må være etter eller lik {limit}",sA="Perioder kan ikke overlappe i tid",iA="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",oA="Dato må være lik {value}",lA="Dato må skrives slik: dd.mm.åååå",dA="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",uA="Tallet kan ikke inneholde mer enn to desimaler",gA="Tallet kan ikke ha desimaler",kA="Feltet kan kun inneholde tall",EA="Ugyldig fødselsnummer",vA="Feltet må være et fødselsnummer (11 siffer)",mA="Ugyldig organisasjonsnummer.",TA="Ugyldig organisasjonsnummer eller fødselsnummer",fA="Startdato må være før eller lik sluttdato",RA="Periode er utenfor opptjeningsperioden",AA="Ugyldig saksnummer eller fødselsnummer",yA="Feltet inneholder ugyldige tegn: {text}",_A="Feltet inneholder en ugyldig verdi: {value}",cA="Feltet kan ikke inneholde mellomrom",pA="Feltet må fylles ut",NA="Du kan skrive maksimalt {length} tegn",SA="Du må skrive minst {length} tegn",hA="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",bA="Feltet må være mindre eller lik {length}",IA="Feltet må være større eller lik {length}",OA="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",LA={DateNotBeforeOrEqual:tA,DateNotAfterOrEqual:aA,DateRangesOverlapping:sA,DateRangesOverlappingPeriodTypes:iA,DatesNotEqual:oA,InvalidDate:lA,InvalidDatesInPeriod:dA,InvalidDecimal:uA,InvalidInteger:gA,InvalidNumber:kA,InvalidFodselsnr:EA,InvalidFodselsnrFormat:vA,InvalidOrgnr:mA,InvalidOrgnrOrFodselsnr:TA,InvalidPeriod:fA,InvalidPeriodRange:RA,InvalidSaksnrOrFodselsnrFormat:AA,InvalidText:yA,InvalidValue:_A,IllegalWhiteSpace:cA,IsRequired:pA,MaxLength:NA,MinLength:SA,MaxLengthOrFodselsnr:hA,MaxValue:bA,MinValue:IA,SammeFodselsnrSomSoker:OA},{formatMessage:Ea}=Be(LA),DA=e=>Ea({id:"InvalidText"},{text:e}),Nu=()=>Ea({id:"IsRequired"}),KA=e=>Ea({id:"MaxLength"},{length:e}),PA=e=>Ea({id:"MinLength"},{length:e}),FA=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,MA=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,va=e=>e==null||e.toString().trim().length===0;Zr.extend(XR);Zr.extend(nA);const yo=e=>va(e)?Nu():void 0,GA=e=>r=>va(r)&&e(r)?Nu():void 0,ws=e=>r=>va(r)||r.toString().trim().length>=e?null:PA(e),ma=e=>r=>va(r)||r.toString().trim().length<=e?null:KA(e),na=e=>{if(!FA.test(e)){const r=e.replace(MA,"");return DA(r.replace(/[\t]/g,"Tabulatortegn"))}return null},rt={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"};Be(rt);Be(rt);Be(rt);Be(rt);Be(rt);const Su=(e,...r)=>{const n=r.find(t=>t===e);if(!n)throw Error(`Det finnes ikke enum for kode ${e}`);return n};var oe=(e=>(e.DEFAULT="default",e.INNGANGSVILKAR="inngangsvilkar",e.BEHANDLE_INNSYN="behandle_innsyn",e.BEREGNING="beregning",e.BEREGNINGSGRUNNLAG="beregningsgrunnlag",e.KLAGE_NAV_FAMILIE_OG_PENSJON="klage_nav_familie_og_pensjon",e.KLAGE_NAV_KLAGEINSTANS="klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_KLAGEINSTANS="formkrav_klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON="formkrav_klage_nav_familie_og_pensjon",e.FORTSATTMEDLEMSKAP="fortsattmedlemskap",e.OPPLYSNINGSPLIKT="opplysningsplikt",e.SOEKNADSFRIST="soeknadsfrist",e.TILBAKEKREVING="tilbakekreving",e.FORELDELSE="foreldelse",e.TILKJENT_YTELSE="tilkjent_ytelse",e.VARSEL="varsel",e.VEDTAK="vedtak",e.UTTAK="uttak",e.SIMULERING="simulering",e.KLAGE_RESULTAT="resultat",e.ANKEBEHANDLING="ankebehandling",e.ANKE_MERKNADER="ankemerknader",e.ANKE_RESULTAT="ankeresultat",e))(oe||{}),C=(e=>(e.ADOPSJONSVILKARET="adopsjonsvilkaaret",e.ARBEIDSFORHOLD="arbeidsforhold",e.ARBEID_OG_INNTEKT="arbeidoginntekt",e.BEREGNING="beregning",e.BESTEBEREGNING="besteberegning",e.DEFAULT="default",e.FORDELING="fordeling",e.INNTEKTSMELDINGER="inntektsmeldinger",e.FEILUTBETALING="feilutbetaling",e.FODSELSVILKARET="foedselsvilkaaret",e.FODSELTILRETTELEGGING="fodseltilrettelegging",e.MEDLEMSKAPSVILKARET="medlemskapsvilkaaret",e.OMSORG="omsorg",e.OMSORG_OG_RETT="omsorgogrett",e.OMSORGSVILKARET="omsorgsvilkaaret",e.OPPTJENINGSVILKARET="opptjeningsvilkaaret",e.PERMISJON="permisjon",e.SAKEN="saken",e.UTTAK="uttak",e.VERGE="verge",e.YTELSER="ytelser",e.UTTAK_DOKUMENTASJON="uttakdokumentasjon",e))(C||{}),vs=(e=>(e.PENDING="PENDING",e.COMPLETE="COMPLETE",e.DELAYED="DELAYED",e.CANCELLED="CANCELLED",e.HALTED="HALTED",e))(vs||{});C.DEFAULT,oe.BEREGNING,C.DEFAULT,oe.BEREGNINGSGRUNNLAG,C.BESTEBEREGNING,oe.DEFAULT,C.ADOPSJONSVILKARET,C.ARBEIDSFORHOLD,C.BEREGNING,C.FODSELSVILKARET,C.FORDELING,C.MEDLEMSKAPSVILKARET,C.OMSORG,C.OPPTJENINGSVILKARET,C.OPPTJENINGSVILKARET,C.OMSORGSVILKARET,C.ARBEIDSFORHOLD,C.UTTAK_DOKUMENTASJON,C.DEFAULT,oe.INNGANGSVILKAR,C.DEFAULT,oe.KLAGE_NAV_FAMILIE_OG_PENSJON,C.DEFAULT,oe.KLAGE_NAV_KLAGEINSTANS,C.DEFAULT,oe.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,C.DEFAULT,oe.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,C.DEFAULT,oe.ANKEBEHANDLING,C.DEFAULT,oe.ANKE_MERKNADER,C.DEFAULT,oe.OPPLYSNINGSPLIKT,C.DEFAULT,oe.INNGANGSVILKAR,C.DEFAULT,oe.INNGANGSVILKAR,C.MEDLEMSKAPSVILKARET,oe.INNGANGSVILKAR,C.DEFAULT,oe.INNGANGSVILKAR,C.DEFAULT,oe.INNGANGSVILKAR,C.DEFAULT,oe.SOEKNADSFRIST,C.DEFAULT,oe.VEDTAK,C.UTTAK,C.UTTAK,C.UTTAK_DOKUMENTASJON,C.SAKEN,C.DEFAULT,oe.UTTAK,C.VERGE,C.DEFAULT,oe.TILKJENT_YTELSE,C.DEFAULT,oe.SIMULERING,C.SAKEN,C.FODSELTILRETTELEGGING,C.DEFAULT,oe.INNGANGSVILKAR,C.DEFAULT,C.UTTAK_DOKUMENTASJON,C.DEFAULT,oe.FORTSATTMEDLEMSKAP,C.ARBEID_OG_INNTEKT,oe.DEFAULT,C.OMSORG_OG_RETT;C.FEILUTBETALING,C.DEFAULT,oe.TILBAKEKREVING,C.DEFAULT,oe.FORELDELSE,C.DEFAULT,oe.VEDTAK,C.VERGE;const VA="_line_7rsxc_1",UA="_smallTextArea_7rsxc_7",wA="_pil_7rsxc_11",BA="_space_7rsxc_15",jA="_avsnittOverskrift_7rsxc_19",sn={line:VA,smallTextArea:UA,pil:wA,space:BA,avsnittOverskrift:jA},HA=ma(200),YA=ma(1e4),_o=ws(3),hu=({forhåndsvisOverstyrtBrev:e,isReadOnly:r,språkKode:n,skalViseLink:t})=>{const a=ir();return k.jsxs(k.Fragment,{children:[k.jsx(ye,{thirtyTwoPx:!0}),k.jsx(IR,{}),k.jsx(ye,{thirtyTwoPx:!0}),k.jsx($r,{children:k.jsxs(Cr,{children:[k.jsx(Fe,{className:sn.space,children:k.jsx(xe,{size:"small",className:sn.avsnittOverskrift,children:k.jsx(Ae,{id:"FritekstBrevPanel.ManueltVedtaksbrev"})})}),k.jsx(Fe,{className:sn.space,children:k.jsx(wr,{children:Ds(n)})}),k.jsx(Fe,{children:!r&&t&&k.jsxs(ds,{href:"#",onClick:e,children:[k.jsx("span",{children:k.jsx(Ae,{id:"FritekstBrevPanel.ForhandsvisManueltVedtaksbrev"})}),k.jsx(su,{className:sn.pil})]})})]})}),k.jsx("hr",{className:sn.line}),k.jsx(ye,{twentyPx:!0}),!r&&k.jsx(gu,{variant:"info",size:"small",children:k.jsx(xe,{size:"small",children:k.jsx(Ae,{id:"VedtakFellesPanel.Forklaring"})})}),k.jsx(ye,{sixteenPx:!0}),k.jsx(ra,{name:"overskrift",label:a.formatMessage({id:"VedtakForm.Overskrift"}),validate:[yo,_o,HA,na],maxLength:200,readOnly:r,parse:zt,className:sn.smallTextArea}),k.jsx(ye,{thirtyTwoPx:!0}),k.jsx(ra,{name:"brødtekst",label:a.formatMessage({id:"VedtakForm.Innhold"}),validate:[yo,_o,YA,na],maxLength:1e4,readOnly:r,parse:zt}),r&&k.jsxs(k.Fragment,{children:[k.jsx(ye,{sixteenPx:!0}),k.jsx($r,{children:k.jsxs(Cr,{children:[k.jsx(Fe,{children:k.jsx(_u,{})}),k.jsx(Fe,{children:k.jsx(ze,{size:"small",children:k.jsx(Ae,{id:"FritekstBrevPanel.Endret"})})})]})})]})]})};hu.__docgenInfo={description:"",methods:[],displayName:"ManueltVedtaksbrevPanel",props:{forhåndsvisOverstyrtBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},skalViseLink:{required:!0,tsType:{name:"boolean"},description:""}}};const xA=(e,r)=>{const n=[];return r!=null&&r.some(t=>t.definisjon===ke.VURDERE_ANNEN_YTELSE)&&n.push(e.formatMessage({id:"VedtakForm.VurderAnnenYtelse"})),r!=null&&r.some(t=>t.definisjon===ke.VURDERE_DOKUMENT)&&n.push(e.formatMessage({id:"VedtakForm.VurderDokument"})),r!=null&&r.some(t=>t.definisjon===ke.VURDERE_INNTEKTSMELDING_KLAGE)&&n.push(e.formatMessage({id:"VedtakForm.VurderInntektsmeldingKlage"})),r!=null&&r.some(t=>t.definisjon===ke.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST)&&n.push(e.formatMessage({id:"VedtakForm.KontrollerRevurderingsbehandling"})),n},bu=({isReadOnly:e,aksjonspunkter:r})=>{const n=ir(),t=xA(n,r);return!e&&t.length>0?k.jsxs(k.Fragment,{children:[k.jsx(ye,{sixteenPx:!0}),k.jsxs(gu,{variant:"info",size:"small",children:[k.jsx(ze,{size:"small",children:k.jsx(Ae,{id:"VedtakHelpTextPanel.Vurder"})}),k.jsx("ul",{children:t.map(a=>k.jsx("li",{children:k.jsx(ze,{size:"small",children:a})},a))})]})]}):null};bu.__docgenInfo={description:"",methods:[],displayName:"VedtakHelpTextPanel",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""}}};const qA="_pil_gjh8k_1",CA="_blyant_gjh8k_5",$A="_blyantDisablet_gjh8k_9",JA="_innvilgetImage_gjh8k_21",WA="_avslattImage_gjh8k_27",zA="_disabletLink_gjh8k_33",ZA="_space_gjh8k_38",_r={pil:qA,blyant:CA,blyantDisablet:$A,innvilgetImage:JA,avslattImage:WA,disabletLink:zA,space:ZA},XA=e=>e===we.AVSLUTTET||e===we.IVERKSETTER_VEDTAK?"VedtakForm.vedtak":"VedtakForm.ForslagTilVedtak",QA=e=>e===we.BEHANDLING_UTREDES,ey=(e,r)=>e!=null&&e.some(n=>n.definisjon===ke.FORESLA_VEDTAK)||r?"VedtakForm.TilGodkjenning":"VedtakForm.FattVedtak",ry=e=>e.avslagsarsak?e.avslagsarsak!==rd.INGEN_BEREGNINGSREGLER:!0,ny=(e,r)=>{if(!r)return!0;const{konsekvenserForYtelsen:n}=r;return!Array.isArray(n)||n.length!==1?!0:!e.some(t=>t===n[0])},Bs=({renderPanel:e,previewAutomatiskBrev:r,previewOverstyrtBrev:n,tilbakekrevingtekst:t,erBehandlingEtterKlage:a,vedtakstatusTekst:s})=>{const i=ir(),{behandling:o,isReadOnly:l}=da(),{aksjonspunkt:d}=o,{setValue:u,formState:{isSubmitting:E}}=An(),{behandlingsresultat:v,behandlingPaaVent:c,sprakkode:h,status:T,behandlingHenlagt:A,uuid:N,taskStatus:p}=o;if(!v)throw new Error(`behandlingsresultat finnes ikke på behandling ${N}`);const[y,P]=f.useState(!!v.vedtaksbrev&&v.vedtaksbrev==="FRITEKST"),[R,G]=f.useState(!1),b=f.useCallback(J=>{P(!0),J.preventDefault()},[]),S=f.useCallback(()=>{P(!1),G(!1),u("overskrift",void 0),u("brødtekst",void 0)},[]),U=Ns(v.type),j=Ss(v.type),Y=nd(v.type),D=ry(v),K=!A&&(p==null?void 0:p.status)!==vs.HALTED&&(p==null?void 0:p.status)!==vs.DELAYED,q=f.useMemo(()=>ny([qe.ENDRING_I_FORDELING_AV_YTELSEN,qe.INGEN_ENDRING],v),[v]);return k.jsxs(k.Fragment,{children:[k.jsx(_f,{text:i.formatMessage({id:"VedtakFellesPanel.Forkast"}),okButtonText:i.formatMessage({id:"VedtakFellesPanel.Ok"}),showModal:R,cancel:()=>G(!1),submit:S}),k.jsx($r,{children:k.jsxs(Cr,{children:[T===we.AVSLUTTET&&k.jsxs(Fe,{children:[U&&k.jsx(iu,{className:_r.innvilgetImage}),!U&&k.jsx(lu,{className:_r.avslattImage})]}),k.jsx(Fe,{children:k.jsx(Vs,{size:"small",children:k.jsx(Ae,{id:XA(T)})})})]})}),k.jsx(ye,{eightPx:!0}),k.jsx($r,{children:k.jsxs(Cr,{children:[k.jsx(Fe,{className:_r.space,children:k.jsxs(xe,{size:"small",children:[s,t&&`. ${i.formatMessage({id:t})}`]})}),k.jsxs(Fe,{className:_r.space,children:[D&&q&&K&&k.jsxs(ds,{href:"#",onClick:r,children:[k.jsx("span",{children:k.jsx(Ae,{id:a?"VedtakFellesPanel.UtkastVedtaksbrev":"VedtakFellesPanel.AutomatiskVedtaksbrev"})}),k.jsx(su,{className:_r.pil})]}),D&&q&&!K&&k.jsx(ze,{size:"small",className:_r.disabletLink,children:k.jsx(Ae,{id:a?"VedtakFellesPanel.UtkastVedtaksbrev":"VedtakFellesPanel.AutomatiskVedtaksbrev"})})]}),k.jsxs(Fe,{children:[!l&&!y&&k.jsxs(ds,{href:"#",onClick:b,children:[k.jsx(Ji,{className:_r.blyant}),k.jsx("span",{children:k.jsx(Ae,{id:"VedtakFellesPanel.RedigerVedtaksbrev"})})]}),(l||y)&&k.jsxs(k.Fragment,{children:[k.jsx(Ji,{className:_r.blyantDisablet}),k.jsx(ze,{size:"small",className:_r.disabletLink,children:k.jsx(Ae,{id:"VedtakFellesPanel.RedigerVedtaksbrev"})})]})]})]})}),k.jsx(bu,{aksjonspunkter:d,isReadOnly:l}),k.jsx(ye,{twentyPx:!0}),e(y,U,j,Y),y&&k.jsx(hu,{isReadOnly:l,språkKode:h,forhåndsvisOverstyrtBrev:n,skalViseLink:D}),QA(T)&&k.jsxs(k.Fragment,{children:[k.jsx(ye,{twentyPx:!0}),k.jsx($r,{children:k.jsxs(Cr,{children:[k.jsx(Fe,{children:!l&&k.jsx(fn,{variant:"primary",size:"small",disabled:c||E,loading:E,children:k.jsx(Ae,{id:ey(d,y)})})}),y&&k.jsx(Fe,{children:k.jsx(fn,{size:"small",variant:"secondary",onClick:()=>G(!0),type:"button",children:k.jsx(Ae,{id:"VedtakFellesPanel.ForkastManueltBrev"})})})]})})]})]})};Bs.__docgenInfo={description:"",methods:[],displayName:"VedtakFellesPanel",props:{erBehandlingEtterKlage:{required:!0,tsType:{name:"boolean"},description:""},renderPanel:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  skalBrukeManueltBrev: boolean,
  erInnvilget: boolean,
  erAvslatt: boolean,
  erOpphor?: boolean,
) => ReactNode`,signature:{arguments:[{type:{name:"boolean"},name:"skalBrukeManueltBrev"},{type:{name:"boolean"},name:"erInnvilget"},{type:{name:"boolean"},name:"erAvslatt"},{type:{name:"boolean"},name:"erOpphor"}],return:{name:"ReactNode"}}},description:""},previewAutomatiskBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},previewOverstyrtBrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},tilbakekrevingtekst:{required:!1,tsType:{name:"string"},description:""},vedtakstatusTekst:{required:!1,tsType:{name:"string"},description:""}}};const ty=(e,r)=>e===td.TILBAKEKR_OPPRETT&&(!!r.simuleringResultat.sumInntrekk||!!r.simuleringResultatUtenInntrekk),Iu=(e,r,n)=>n!=null&&r?ty(n.videreBehandling,r)?"VedtakForm.OpprettTilbakekrOgInntrekk":qn(e)(n.videreBehandling,Ir.TILBAKEKR_VIDERE_BEH):"",ay="_fritekstItem_1kqqb_1",sy={fritekstItem:ay},iy=ma(1500),oy=ws(3),nt=({behandlingsresultat:e,språkKode:r,isReadOnly:n,labelTextCode:t})=>{const a=ir();return k.jsxs(k.Fragment,{children:[!n&&k.jsxs(k.Fragment,{children:[k.jsx(ye,{sixteenPx:!0}),k.jsx(ra,{name:"begrunnelse",label:a.formatMessage({id:t}),validate:[oy,iy,na],maxLength:1500,readOnly:n,parse:zt,badges:[{type:"info",titleText:Ds(r)}]})]}),n&&(e==null?void 0:e.avslagsarsakFritekst)&&k.jsxs("span",{children:[k.jsx(ye,{twentyPx:!0}),k.jsx(wr,{children:a.formatMessage({id:t})}),k.jsx(ye,{eightPx:!0}),k.jsx("div",{className:sy.fritekstItem,children:zr(e.avslagsarsakFritekst)})]})]})};nt.__docgenInfo={description:"",methods:[],displayName:"VedtakFritekstPanel",props:{behandlingsresultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},labelTextCode:{required:!0,tsType:{name:"string"},description:""}}};const ms=(e,r,n)=>{const t=e.filter(s=>s.vilkarStatus===zn.IKKE_OPPFYLT);if(t.length===0)return k.jsx(Ae,{id:"VedtakForm.UttaksperioderIkkeGyldig"});if(!(n!=null&&n.avslagsarsak))throw new Error("Behandlingsresultat eller avslagsårsak finnes ikke");return`${r(t[0].vilkarType,Ir.VILKAR_TYPE)}: ${r(n.avslagsarsak,Ir.AVSLAGSARSAK,t[0].vilkarType)}`},ly=[],Ou=({vilkar:e=ly,behandlingsresultat:r,språkKode:n,isReadOnly:t,alleKodeverk:a,beregningErManueltFastsatt:s,skalBrukeOverstyrendeFritekstBrev:i})=>{const o=ir(),l=qn(a),d=s?"VedtakForm.Fritekst.Beregningsgrunnlag":"VedtakForm.Fritekst";return k.jsxs(k.Fragment,{children:[ms(e,l,r)&&k.jsxs("div",{children:[k.jsx(xe,{size:"small",children:o.formatMessage({id:"VedtakForm.ArsakTilAvslag"})}),k.jsx(ze,{size:"small",children:ms(e,l,r)}),k.jsx(ye,{sixteenPx:!0})]}),!i&&k.jsx(nt,{isReadOnly:t,språkKode:n,behandlingsresultat:r,labelTextCode:d})]})};ms.__docgenInfo={description:"",methods:[],displayName:"getAvslagArsak"};Ou.__docgenInfo={description:"",methods:[],displayName:"VedtakAvslagPanel",props:{vilkar:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const Lu=({behandlingsresultat:e,ytelseTypeKode:r,språkKode:n,isReadOnly:t,skalBrukeOverstyrendeFritekstBrev:a,beregningErManueltFastsatt:s,beregningsresultat:i={}})=>{const o=ir();return k.jsxs(k.Fragment,{children:[r===Z.ENGANGSSTONAD&&i&&"antallBarn"in i&&k.jsxs($r,{children:[k.jsxs(Cr,{children:[k.jsxs(Fe,{children:[k.jsx(wr,{children:o.formatMessage({id:"VedtakForm.beregnetTilkjentYtelse"})}),k.jsx(xe,{size:"small",children:Gd(i.beregnetTilkjentYtelse)})]}),k.jsxs(Fe,{children:[k.jsx(wr,{children:o.formatMessage({id:"VedtakForm.AntallBarn"})}),k.jsx(xe,{size:"small",children:i.antallBarn})]})]}),k.jsx(ye,{sixteenPx:!0})]}),s&&!a&&k.jsx(nt,{isReadOnly:t,språkKode:n,behandlingsresultat:e,labelTextCode:"VedtakForm.Fritekst.Beregningsgrunnlag"})]})};Lu.__docgenInfo={description:"",methods:[],displayName:"VedtakInnvilgetPanel",props:{beregningsresultat:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""}}};const dy=(e,r)=>e===Ne.KLAGE_YTELSESVEDTAK_OPPHEVET?"VedtakForm.ResultatKlageYtelsesvedtakOpphevet":e===Ne.KLAGE_AVVIST?"VedtakForm.ResultatKlageAvvist":r===Z.ENGANGSSTONAD?"VedtakForm.EngangsstonadIkkeInnvilget":r===Z.SVANGERSKAPSPENGER?"VedtakForm.SvangerskapspengerIkkeInnvilget":"VedtakForm.ForeldrepengerIkkeInnvilget",uy=(e,r)=>e===Ne.KLAGE_YTELSESVEDTAK_STADFESTET?"VedtakForm.ResultatOpprettholdVedtak":Jg(e)?"VedtakForm.ResultatKlageMedhold":r===Z.ENGANGSSTONAD?"VedtakForm.VilkarStatusInnvilgetEngangsstonad":r===Z.SVANGERSKAPSPENGER?"VedtakForm.SvangerskapspengerInnvilget":"VedtakForm.VilkarStatusInnvilgetForeldrepenger",co=(e,r,n,t,a,s)=>i=>{i.preventDefault();const o=e?!!a&&!!s:!!t;if(n(),!e||o){const l={fritekst:e?a:t,dokumentMal:e?hs.FRITEKST:void 0,tittel:e?s:void 0,gjelderVedtak:!0,automatiskVedtaksbrev:e?void 0:!0};r(l)}},gy=(e=[])=>e.map(({behandlingArsakType:r})=>r).some(r=>r===vr.ETTER_KLAGE||r===vr.KLAGE_U_INNTK||r===vr.KLAGE_M_INNTK),ky=(e,r,n)=>n&&Ns(n.type)?e.formatMessage({id:uy(n.type,r)}):n&&Ss(n.type)?e.formatMessage({id:dy(n.type,r)}):"",Ey=e=>e.aksjonspunktKoder.map(r=>({kode:Su(r,ke.FORESLA_VEDTAK,ke.FORESLA_VEDTAK_MANUELT,ke.VURDERE_ANNEN_YTELSE,ke.VURDERE_DOKUMENT),begrunnelse:e.begrunnelse,fritekstBrev:e.brødtekst,skalBrukeOverstyrendeFritekstBrev:!!e.brødtekst,overskrift:e.overskrift})),vy=(e,r)=>{var n;if(r)return(n=e.behandlingsresultat)!=null&&n.avslagsarsakFritekst?zr(e.behandlingsresultat.avslagsarsakFritekst):void 0},my=(e,r,n)=>{var t,a;return{beregningErManueltFastsatt:n,aksjonspunktKoder:e.filter(s=>s.kanLoses).map(s=>s.definisjon),overskrift:zr((t=r.behandlingsresultat)==null?void 0:t.overskrift),brødtekst:zr((a=r.behandlingsresultat)==null?void 0:a.fritekstbrev),begrunnelse:vy(r,n)}},Du=({previewCallback:e,ytelseTypeKode:r,beregningsresultat:n,tilbakekrevingvalg:t,simuleringResultat:a,vilkar:s,beregningErManueltFastsatt:i})=>{const{behandling:o,alleKodeverk:l,submitCallback:d,isReadOnly:u}=da(),{aksjonspunkt:E}=o,v=ir(),{formData:c,setFormData:h}=Dd(),T=Qd({defaultValues:c||my(E,o,i)}),A=T.watch("begrunnelse"),N=T.watch("overskrift"),p=T.watch("brødtekst"),{trigger:y}=T,{behandlingsresultat:P,sprakkode:R}=o,G=f.useMemo(()=>gy(o.behandlingÅrsaker),[o.behandlingÅrsaker]),b=f.useMemo(()=>Iu(l,a,t),[a,t]),S=f.useMemo(()=>ky(v,r,P),[P]),U=co(!0,e,y,A,p,N),j=co(!1,e,y,A,p,N);return k.jsx(cu,{formMethods:T,onSubmit:Y=>d(Ey(Y)),setDataOnUnmount:h,children:k.jsx(Bs,{vedtakstatusTekst:S,previewAutomatiskBrev:j,previewOverstyrtBrev:U,tilbakekrevingtekst:b,erBehandlingEtterKlage:G,renderPanel:(Y,D,K)=>D?k.jsx(Lu,{behandlingsresultat:P,isReadOnly:u,skalBrukeOverstyrendeFritekstBrev:Y,ytelseTypeKode:r,språkKode:R,beregningsresultat:n,beregningErManueltFastsatt:i}):K?k.jsx(Ou,{behandlingsresultat:P,isReadOnly:u,språkKode:R,alleKodeverk:l,vilkar:s,beregningErManueltFastsatt:i,skalBrukeOverstyrendeFritekstBrev:Y}):null})})};Du.__docgenInfo={description:"",methods:[],displayName:"VedtakForm",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst?: string;
  dokumentMal?: string;
  tittel?: string;
  gjelderVedtak: boolean;
  automatiskVedtaksbrev?: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!1}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"tittel",value:{name:"string",required:!1}},{key:"gjelderVedtak",value:{name:"boolean",required:!0}},{key:"automatiskVedtaksbrev",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},beregningsresultat:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]},description:""},tilbakekrevingvalg:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Vilkar[]"},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""}}};//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ku;function V(){return Ku.apply(null,arguments)}function Ty(e){Ku=e}function tr(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Jr(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function ae(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function js(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var r;for(r in e)if(ae(e,r))return!1;return!0}function He(e){return e===void 0}function Or(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function tt(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Pu(e,r){var n=[],t,a=e.length;for(t=0;t<a;++t)n.push(r(e[t],t));return n}function Gr(e,r){for(var n in r)ae(r,n)&&(e[n]=r[n]);return ae(r,"toString")&&(e.toString=r.toString),ae(r,"valueOf")&&(e.valueOf=r.valueOf),e}function Rr(e,r,n,t){return ng(e,r,n,t,!0).utc()}function fy(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function W(e){return e._pf==null&&(e._pf=fy()),e._pf}var Ts;Array.prototype.some?Ts=Array.prototype.some:Ts=function(e){var r=Object(this),n=r.length>>>0,t;for(t=0;t<n;t++)if(t in r&&e.call(this,r[t],t,r))return!0;return!1};function Hs(e){var r=null,n=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(r=W(e),n=Ts.call(r.parsedDateParts,function(a){return a!=null}),t=r.overflow<0&&!r.empty&&!r.invalidEra&&!r.invalidMonth&&!r.invalidWeekday&&!r.weekdayMismatch&&!r.nullInput&&!r.invalidFormat&&!r.userInvalidated&&(!r.meridiem||r.meridiem&&n),e._strict&&(t=t&&r.charsLeftOver===0&&r.unusedTokens.length===0&&r.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function Ta(e){var r=Rr(NaN);return e!=null?Gr(W(r),e):W(r).userInvalidated=!0,r}var po=V.momentProperties=[],Ha=!1;function Ys(e,r){var n,t,a,s=po.length;if(He(r._isAMomentObject)||(e._isAMomentObject=r._isAMomentObject),He(r._i)||(e._i=r._i),He(r._f)||(e._f=r._f),He(r._l)||(e._l=r._l),He(r._strict)||(e._strict=r._strict),He(r._tzm)||(e._tzm=r._tzm),He(r._isUTC)||(e._isUTC=r._isUTC),He(r._offset)||(e._offset=r._offset),He(r._pf)||(e._pf=W(r)),He(r._locale)||(e._locale=r._locale),s>0)for(n=0;n<s;n++)t=po[n],a=r[t],He(a)||(e[t]=a);return e}function at(e){Ys(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Ha===!1&&(Ha=!0,V.updateOffset(this),Ha=!1)}function ar(e){return e instanceof at||e!=null&&e._isAMomentObject!=null}function Fu(e){V.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function Qe(e,r){var n=!0;return Gr(function(){if(V.deprecationHandler!=null&&V.deprecationHandler(null,e),n){var t=[],a,s,i,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(i in arguments[0])ae(arguments[0],i)&&(a+=i+": "+arguments[0][i]+", ");a=a.slice(0,-2)}else a=arguments[s];t.push(a)}Fu(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),n=!1}return r.apply(this,arguments)},r)}var No={};function Mu(e,r){V.deprecationHandler!=null&&V.deprecationHandler(e,r),No[e]||(Fu(r),No[e]=!0)}V.suppressDeprecationWarnings=!1;V.deprecationHandler=null;function Ar(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Ry(e){var r,n;for(n in e)ae(e,n)&&(r=e[n],Ar(r)?this[n]=r:this["_"+n]=r);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function fs(e,r){var n=Gr({},e),t;for(t in r)ae(r,t)&&(Jr(e[t])&&Jr(r[t])?(n[t]={},Gr(n[t],e[t]),Gr(n[t],r[t])):r[t]!=null?n[t]=r[t]:delete n[t]);for(t in e)ae(e,t)&&!ae(r,t)&&Jr(e[t])&&(n[t]=Gr({},n[t]));return n}function xs(e){e!=null&&this.set(e)}var Rs;Object.keys?Rs=Object.keys:Rs=function(e){var r,n=[];for(r in e)ae(e,r)&&n.push(r);return n};var Ay={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function yy(e,r,n){var t=this._calendar[e]||this._calendar.sameElse;return Ar(t)?t.call(r,n):t}function fr(e,r,n){var t=""+Math.abs(e),a=r-t.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+t}var qs=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Rt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ya={},kn={};function x(e,r,n,t){var a=t;typeof t=="string"&&(a=function(){return this[t]()}),e&&(kn[e]=a),r&&(kn[r[0]]=function(){return fr(a.apply(this,arguments),r[1],r[2])}),n&&(kn[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function _y(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function cy(e){var r=e.match(qs),n,t;for(n=0,t=r.length;n<t;n++)kn[r[n]]?r[n]=kn[r[n]]:r[n]=_y(r[n]);return function(a){var s="",i;for(i=0;i<t;i++)s+=Ar(r[i])?r[i].call(a,e):r[i];return s}}function $t(e,r){return e.isValid()?(r=Gu(r,e.localeData()),Ya[r]=Ya[r]||cy(r),Ya[r](e)):e.localeData().invalidDate()}function Gu(e,r){var n=5;function t(a){return r.longDateFormat(a)||a}for(Rt.lastIndex=0;n>=0&&Rt.test(e);)e=e.replace(Rt,t),Rt.lastIndex=0,n-=1;return e}var py={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ny(e){var r=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return r||!n?r:(this._longDateFormat[e]=n.match(qs).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var Sy="Invalid date";function hy(){return this._invalidDate}var by="%d",Iy=/\d{1,2}/;function Oy(e){return this._ordinal.replace("%d",e)}var Ly={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Dy(e,r,n,t){var a=this._relativeTime[n];return Ar(a)?a(e,r,n,t):a.replace(/%d/i,e)}function Ky(e,r){var n=this._relativeTime[e>0?"future":"past"];return Ar(n)?n(r):n.replace(/%s/i,r)}var So={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function er(e){return typeof e=="string"?So[e]||So[e.toLowerCase()]:void 0}function Cs(e){var r={},n,t;for(t in e)ae(e,t)&&(n=er(t),n&&(r[n]=e[t]));return r}var Py={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Fy(e){var r=[],n;for(n in e)ae(e,n)&&r.push({unit:n,priority:Py[n]});return r.sort(function(t,a){return t.priority-a.priority}),r}var Vu=/\d/,Ce=/\d\d/,Uu=/\d{3}/,$s=/\d{4}/,fa=/[+-]?\d{6}/,me=/\d\d?/,wu=/\d\d\d\d?/,Bu=/\d\d\d\d\d\d?/,Ra=/\d{1,3}/,Js=/\d{1,4}/,Aa=/[+-]?\d{1,6}/,cn=/\d+/,ya=/[+-]?\d+/,My=/Z|[+-]\d\d:?\d\d/gi,_a=/Z|[+-]\d\d(?::?\d\d)?/gi,Gy=/[+-]?\d+(\.\d{1,3})?/,st=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,pn=/^[1-9]\d?/,Ws=/^([1-9]\d|\d)/,ta;ta={};function B(e,r,n){ta[e]=Ar(r)?r:function(t,a){return t&&n?n:r}}function Vy(e,r){return ae(ta,e)?ta[e](r._strict,r._locale):new RegExp(Uy(e))}function Uy(e){return hr(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(r,n,t,a,s){return n||t||a||s}))}function hr(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Je(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function X(e){var r=+e,n=0;return r!==0&&isFinite(r)&&(n=Je(r)),n}var As={};function de(e,r){var n,t=r,a;for(typeof e=="string"&&(e=[e]),Or(r)&&(t=function(s,i){i[r]=X(s)}),a=e.length,n=0;n<a;n++)As[e[n]]=t}function it(e,r){de(e,function(n,t,a,s){a._w=a._w||{},r(n,a._w,a,s)})}function wy(e,r,n){r!=null&&ae(As,e)&&As[e](r,n._a,n,e)}function ca(e){return e%4===0&&e%100!==0||e%400===0}var Me=0,Nr=1,kr=2,be=3,nr=4,Sr=5,qr=6,By=7,jy=8;x("Y",0,0,function(){var e=this.year();return e<=9999?fr(e,4):"+"+e});x(0,["YY",2],0,function(){return this.year()%100});x(0,["YYYY",4],0,"year");x(0,["YYYYY",5],0,"year");x(0,["YYYYYY",6,!0],0,"year");B("Y",ya);B("YY",me,Ce);B("YYYY",Js,$s);B("YYYYY",Aa,fa);B("YYYYYY",Aa,fa);de(["YYYYY","YYYYYY"],Me);de("YYYY",function(e,r){r[Me]=e.length===2?V.parseTwoDigitYear(e):X(e)});de("YY",function(e,r){r[Me]=V.parseTwoDigitYear(e)});de("Y",function(e,r){r[Me]=parseInt(e,10)});function xn(e){return ca(e)?366:365}V.parseTwoDigitYear=function(e){return X(e)+(X(e)>68?1900:2e3)};var ju=Nn("FullYear",!0);function Hy(){return ca(this.year())}function Nn(e,r){return function(n){return n!=null?(Hu(this,e,n),V.updateOffset(this,r),this):Cn(this,e)}}function Cn(e,r){if(!e.isValid())return NaN;var n=e._d,t=e._isUTC;switch(r){case"Milliseconds":return t?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return t?n.getUTCSeconds():n.getSeconds();case"Minutes":return t?n.getUTCMinutes():n.getMinutes();case"Hours":return t?n.getUTCHours():n.getHours();case"Date":return t?n.getUTCDate():n.getDate();case"Day":return t?n.getUTCDay():n.getDay();case"Month":return t?n.getUTCMonth():n.getMonth();case"FullYear":return t?n.getUTCFullYear():n.getFullYear();default:return NaN}}function Hu(e,r,n){var t,a,s,i,o;if(!(!e.isValid()||isNaN(n))){switch(t=e._d,a=e._isUTC,r){case"Milliseconds":return void(a?t.setUTCMilliseconds(n):t.setMilliseconds(n));case"Seconds":return void(a?t.setUTCSeconds(n):t.setSeconds(n));case"Minutes":return void(a?t.setUTCMinutes(n):t.setMinutes(n));case"Hours":return void(a?t.setUTCHours(n):t.setHours(n));case"Date":return void(a?t.setUTCDate(n):t.setDate(n));case"FullYear":break;default:return}s=n,i=e.month(),o=e.date(),o=o===29&&i===1&&!ca(s)?28:o,a?t.setUTCFullYear(s,i,o):t.setFullYear(s,i,o)}}function Yy(e){return e=er(e),Ar(this[e])?this[e]():this}function xy(e,r){if(typeof e=="object"){e=Cs(e);var n=Fy(e),t,a=n.length;for(t=0;t<a;t++)this[n[t].unit](e[n[t].unit])}else if(e=er(e),Ar(this[e]))return this[e](r);return this}function qy(e,r){return(e%r+r)%r}var _e;Array.prototype.indexOf?_e=Array.prototype.indexOf:_e=function(e){var r;for(r=0;r<this.length;++r)if(this[r]===e)return r;return-1};function zs(e,r){if(isNaN(e)||isNaN(r))return NaN;var n=qy(r,12);return e+=(r-n)/12,n===1?ca(e)?29:28:31-n%7%2}x("M",["MM",2],"Mo",function(){return this.month()+1});x("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});x("MMMM",0,0,function(e){return this.localeData().months(this,e)});B("M",me,pn);B("MM",me,Ce);B("MMM",function(e,r){return r.monthsShortRegex(e)});B("MMMM",function(e,r){return r.monthsRegex(e)});de(["M","MM"],function(e,r){r[Nr]=X(e)-1});de(["MMM","MMMM"],function(e,r,n,t){var a=n._locale.monthsParse(e,t,n._strict);a!=null?r[Nr]=a:W(n).invalidMonth=e});var Cy="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Yu="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),xu=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,$y=st,Jy=st;function Wy(e,r){return e?tr(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||xu).test(r)?"format":"standalone"][e.month()]:tr(this._months)?this._months:this._months.standalone}function zy(e,r){return e?tr(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[xu.test(r)?"format":"standalone"][e.month()]:tr(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Zy(e,r,n){var t,a,s,i=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)s=Rr([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(s,"").toLocaleLowerCase();return n?r==="MMM"?(a=_e.call(this._shortMonthsParse,i),a!==-1?a:null):(a=_e.call(this._longMonthsParse,i),a!==-1?a:null):r==="MMM"?(a=_e.call(this._shortMonthsParse,i),a!==-1?a:(a=_e.call(this._longMonthsParse,i),a!==-1?a:null)):(a=_e.call(this._longMonthsParse,i),a!==-1?a:(a=_e.call(this._shortMonthsParse,i),a!==-1?a:null))}function Xy(e,r,n){var t,a,s;if(this._monthsParseExact)return Zy.call(this,e,r,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(a=Rr([2e3,t]),n&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!n&&!this._monthsParse[t]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[t]=new RegExp(s.replace(".",""),"i")),n&&r==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(n&&r==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!n&&this._monthsParse[t].test(e))return t}}function qu(e,r){if(!e.isValid())return e;if(typeof r=="string"){if(/^\d+$/.test(r))r=X(r);else if(r=e.localeData().monthsParse(r),!Or(r))return e}var n=r,t=e.date();return t=t<29?t:Math.min(t,zs(e.year(),n)),e._isUTC?e._d.setUTCMonth(n,t):e._d.setMonth(n,t),e}function Cu(e){return e!=null?(qu(this,e),V.updateOffset(this,!0),this):Cn(this,"Month")}function Qy(){return zs(this.year(),this.month())}function e_(e){return this._monthsParseExact?(ae(this,"_monthsRegex")||$u.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(ae(this,"_monthsShortRegex")||(this._monthsShortRegex=$y),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function r_(e){return this._monthsParseExact?(ae(this,"_monthsRegex")||$u.call(this),e?this._monthsStrictRegex:this._monthsRegex):(ae(this,"_monthsRegex")||(this._monthsRegex=Jy),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function $u(){function e(l,d){return d.length-l.length}var r=[],n=[],t=[],a,s,i,o;for(a=0;a<12;a++)s=Rr([2e3,a]),i=hr(this.monthsShort(s,"")),o=hr(this.months(s,"")),r.push(i),n.push(o),t.push(o),t.push(i);r.sort(e),n.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function n_(e,r,n,t,a,s,i){var o;return e<100&&e>=0?(o=new Date(e+400,r,n,t,a,s,i),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,r,n,t,a,s,i),o}function $n(e){var r,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,r=new Date(Date.UTC.apply(null,n)),isFinite(r.getUTCFullYear())&&r.setUTCFullYear(e)):r=new Date(Date.UTC.apply(null,arguments)),r}function aa(e,r,n){var t=7+r-n,a=(7+$n(e,0,t).getUTCDay()-r)%7;return-a+t-1}function Ju(e,r,n,t,a){var s=(7+n-t)%7,i=aa(e,t,a),o=1+7*(r-1)+s+i,l,d;return o<=0?(l=e-1,d=xn(l)+o):o>xn(e)?(l=e+1,d=o-xn(e)):(l=e,d=o),{year:l,dayOfYear:d}}function Jn(e,r,n){var t=aa(e.year(),r,n),a=Math.floor((e.dayOfYear()-t-1)/7)+1,s,i;return a<1?(i=e.year()-1,s=a+br(i,r,n)):a>br(e.year(),r,n)?(s=a-br(e.year(),r,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function br(e,r,n){var t=aa(e,r,n),a=aa(e+1,r,n);return(xn(e)-t+a)/7}x("w",["ww",2],"wo","week");x("W",["WW",2],"Wo","isoWeek");B("w",me,pn);B("ww",me,Ce);B("W",me,pn);B("WW",me,Ce);it(["w","ww","W","WW"],function(e,r,n,t){r[t.substr(0,1)]=X(e)});function t_(e){return Jn(e,this._week.dow,this._week.doy).week}var a_={dow:0,doy:6};function s_(){return this._week.dow}function i_(){return this._week.doy}function o_(e){var r=this.localeData().week(this);return e==null?r:this.add((e-r)*7,"d")}function l_(e){var r=Jn(this,1,4).week;return e==null?r:this.add((e-r)*7,"d")}x("d",0,"do","day");x("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});x("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});x("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});x("e",0,0,"weekday");x("E",0,0,"isoWeekday");B("d",me);B("e",me);B("E",me);B("dd",function(e,r){return r.weekdaysMinRegex(e)});B("ddd",function(e,r){return r.weekdaysShortRegex(e)});B("dddd",function(e,r){return r.weekdaysRegex(e)});it(["dd","ddd","dddd"],function(e,r,n,t){var a=n._locale.weekdaysParse(e,t,n._strict);a!=null?r.d=a:W(n).invalidWeekday=e});it(["d","e","E"],function(e,r,n,t){r[t]=X(e)});function d_(e,r){return typeof e!="string"?e:isNaN(e)?(e=r.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function u_(e,r){return typeof e=="string"?r.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Zs(e,r){return e.slice(r,7).concat(e.slice(0,r))}var g_="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Wu="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),k_="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),E_=st,v_=st,m_=st;function T_(e,r){var n=tr(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(r)?"format":"standalone"];return e===!0?Zs(n,this._week.dow):e?n[e.day()]:n}function f_(e){return e===!0?Zs(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function R_(e){return e===!0?Zs(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function A_(e,r,n){var t,a,s,i=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)s=Rr([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(s,"").toLocaleLowerCase();return n?r==="dddd"?(a=_e.call(this._weekdaysParse,i),a!==-1?a:null):r==="ddd"?(a=_e.call(this._shortWeekdaysParse,i),a!==-1?a:null):(a=_e.call(this._minWeekdaysParse,i),a!==-1?a:null):r==="dddd"?(a=_e.call(this._weekdaysParse,i),a!==-1||(a=_e.call(this._shortWeekdaysParse,i),a!==-1)?a:(a=_e.call(this._minWeekdaysParse,i),a!==-1?a:null)):r==="ddd"?(a=_e.call(this._shortWeekdaysParse,i),a!==-1||(a=_e.call(this._weekdaysParse,i),a!==-1)?a:(a=_e.call(this._minWeekdaysParse,i),a!==-1?a:null)):(a=_e.call(this._minWeekdaysParse,i),a!==-1||(a=_e.call(this._weekdaysParse,i),a!==-1)?a:(a=_e.call(this._shortWeekdaysParse,i),a!==-1?a:null))}function y_(e,r,n){var t,a,s;if(this._weekdaysParseExact)return A_.call(this,e,r,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(a=Rr([2e3,1]).day(t),n&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[t]=new RegExp(s.replace(".",""),"i")),n&&r==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(n&&r==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(n&&r==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!n&&this._weekdaysParse[t].test(e))return t}}function __(e){if(!this.isValid())return e!=null?this:NaN;var r=Cn(this,"Day");return e!=null?(e=d_(e,this.localeData()),this.add(e-r,"d")):r}function c_(e){if(!this.isValid())return e!=null?this:NaN;var r=(this.day()+7-this.localeData()._week.dow)%7;return e==null?r:this.add(e-r,"d")}function p_(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var r=u_(e,this.localeData());return this.day(this.day()%7?r:r-7)}else return this.day()||7}function N_(e){return this._weekdaysParseExact?(ae(this,"_weekdaysRegex")||Xs.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(ae(this,"_weekdaysRegex")||(this._weekdaysRegex=E_),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function S_(e){return this._weekdaysParseExact?(ae(this,"_weekdaysRegex")||Xs.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(ae(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=v_),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function h_(e){return this._weekdaysParseExact?(ae(this,"_weekdaysRegex")||Xs.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(ae(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=m_),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Xs(){function e(u,E){return E.length-u.length}var r=[],n=[],t=[],a=[],s,i,o,l,d;for(s=0;s<7;s++)i=Rr([2e3,1]).day(s),o=hr(this.weekdaysMin(i,"")),l=hr(this.weekdaysShort(i,"")),d=hr(this.weekdays(i,"")),r.push(o),n.push(l),t.push(d),a.push(o),a.push(l),a.push(d);r.sort(e),n.sort(e),t.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Qs(){return this.hours()%12||12}function b_(){return this.hours()||24}x("H",["HH",2],0,"hour");x("h",["hh",2],0,Qs);x("k",["kk",2],0,b_);x("hmm",0,0,function(){return""+Qs.apply(this)+fr(this.minutes(),2)});x("hmmss",0,0,function(){return""+Qs.apply(this)+fr(this.minutes(),2)+fr(this.seconds(),2)});x("Hmm",0,0,function(){return""+this.hours()+fr(this.minutes(),2)});x("Hmmss",0,0,function(){return""+this.hours()+fr(this.minutes(),2)+fr(this.seconds(),2)});function zu(e,r){x(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),r)})}zu("a",!0);zu("A",!1);function Zu(e,r){return r._meridiemParse}B("a",Zu);B("A",Zu);B("H",me,Ws);B("h",me,pn);B("k",me,pn);B("HH",me,Ce);B("hh",me,Ce);B("kk",me,Ce);B("hmm",wu);B("hmmss",Bu);B("Hmm",wu);B("Hmmss",Bu);de(["H","HH"],be);de(["k","kk"],function(e,r,n){var t=X(e);r[be]=t===24?0:t});de(["a","A"],function(e,r,n){n._isPm=n._locale.isPM(e),n._meridiem=e});de(["h","hh"],function(e,r,n){r[be]=X(e),W(n).bigHour=!0});de("hmm",function(e,r,n){var t=e.length-2;r[be]=X(e.substr(0,t)),r[nr]=X(e.substr(t)),W(n).bigHour=!0});de("hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[be]=X(e.substr(0,t)),r[nr]=X(e.substr(t,2)),r[Sr]=X(e.substr(a)),W(n).bigHour=!0});de("Hmm",function(e,r,n){var t=e.length-2;r[be]=X(e.substr(0,t)),r[nr]=X(e.substr(t))});de("Hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[be]=X(e.substr(0,t)),r[nr]=X(e.substr(t,2)),r[Sr]=X(e.substr(a))});function I_(e){return(e+"").toLowerCase().charAt(0)==="p"}var O_=/[ap]\.?m?\.?/i,L_=Nn("Hours",!0);function D_(e,r,n){return e>11?n?"pm":"PM":n?"am":"AM"}var Xu={calendar:Ay,longDateFormat:py,invalidDate:Sy,ordinal:by,dayOfMonthOrdinalParse:Iy,relativeTime:Ly,months:Cy,monthsShort:Yu,week:a_,weekdays:g_,weekdaysMin:k_,weekdaysShort:Wu,meridiemParse:O_},fe={},Gn={},Wn;function K_(e,r){var n,t=Math.min(e.length,r.length);for(n=0;n<t;n+=1)if(e[n]!==r[n])return n;return t}function ho(e){return e&&e.toLowerCase().replace("_","-")}function P_(e){for(var r=0,n,t,a,s;r<e.length;){for(s=ho(e[r]).split("-"),n=s.length,t=ho(e[r+1]),t=t?t.split("-"):null;n>0;){if(a=pa(s.slice(0,n).join("-")),a)return a;if(t&&t.length>=n&&K_(s,t)>=n-1)break;n--}r++}return Wn}function F_(e){return!!(e&&e.match("^[^/\\\\]*$"))}function pa(e){var r=null,n;if(fe[e]===void 0&&typeof module<"u"&&module&&module.exports&&F_(e))try{r=Wn._abbr,n=require,n("./locale/"+e),Ur(r)}catch{fe[e]=null}return fe[e]}function Ur(e,r){var n;return e&&(He(r)?n=Dr(e):n=ei(e,r),n?Wn=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Wn._abbr}function ei(e,r){if(r!==null){var n,t=Xu;if(r.abbr=e,fe[e]!=null)Mu("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=fe[e]._config;else if(r.parentLocale!=null)if(fe[r.parentLocale]!=null)t=fe[r.parentLocale]._config;else if(n=pa(r.parentLocale),n!=null)t=n._config;else return Gn[r.parentLocale]||(Gn[r.parentLocale]=[]),Gn[r.parentLocale].push({name:e,config:r}),null;return fe[e]=new xs(fs(t,r)),Gn[e]&&Gn[e].forEach(function(a){ei(a.name,a.config)}),Ur(e),fe[e]}else return delete fe[e],null}function M_(e,r){if(r!=null){var n,t,a=Xu;fe[e]!=null&&fe[e].parentLocale!=null?fe[e].set(fs(fe[e]._config,r)):(t=pa(e),t!=null&&(a=t._config),r=fs(a,r),t==null&&(r.abbr=e),n=new xs(r),n.parentLocale=fe[e],fe[e]=n),Ur(e)}else fe[e]!=null&&(fe[e].parentLocale!=null?(fe[e]=fe[e].parentLocale,e===Ur()&&Ur(e)):fe[e]!=null&&delete fe[e]);return fe[e]}function Dr(e){var r;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Wn;if(!tr(e)){if(r=pa(e),r)return r;e=[e]}return P_(e)}function G_(){return Rs(fe)}function ri(e){var r,n=e._a;return n&&W(e).overflow===-2&&(r=n[Nr]<0||n[Nr]>11?Nr:n[kr]<1||n[kr]>zs(n[Me],n[Nr])?kr:n[be]<0||n[be]>24||n[be]===24&&(n[nr]!==0||n[Sr]!==0||n[qr]!==0)?be:n[nr]<0||n[nr]>59?nr:n[Sr]<0||n[Sr]>59?Sr:n[qr]<0||n[qr]>999?qr:-1,W(e)._overflowDayOfYear&&(r<Me||r>kr)&&(r=kr),W(e)._overflowWeeks&&r===-1&&(r=By),W(e)._overflowWeekday&&r===-1&&(r=jy),W(e).overflow=r),e}var V_=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,U_=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,w_=/Z|[+-]\d\d(?::?\d\d)?/,At=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],xa=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],B_=/^\/?Date\((-?\d+)/i,j_=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,H_={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Qu(e){var r,n,t=e._i,a=V_.exec(t)||U_.exec(t),s,i,o,l,d=At.length,u=xa.length;if(a){for(W(e).iso=!0,r=0,n=d;r<n;r++)if(At[r][1].exec(a[1])){i=At[r][0],s=At[r][2]!==!1;break}if(i==null){e._isValid=!1;return}if(a[3]){for(r=0,n=u;r<n;r++)if(xa[r][1].exec(a[3])){o=(a[2]||" ")+xa[r][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(w_.exec(a[4]))l="Z";else{e._isValid=!1;return}e._f=i+(o||"")+(l||""),ti(e)}else e._isValid=!1}function Y_(e,r,n,t,a,s){var i=[x_(e),Yu.indexOf(r),parseInt(n,10),parseInt(t,10),parseInt(a,10)];return s&&i.push(parseInt(s,10)),i}function x_(e){var r=parseInt(e,10);return r<=49?2e3+r:r<=999?1900+r:r}function q_(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function C_(e,r,n){if(e){var t=Wu.indexOf(e),a=new Date(r[0],r[1],r[2]).getDay();if(t!==a)return W(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function $_(e,r,n){if(e)return H_[e];if(r)return 0;var t=parseInt(n,10),a=t%100,s=(t-a)/100;return s*60+a}function eg(e){var r=j_.exec(q_(e._i)),n;if(r){if(n=Y_(r[4],r[3],r[2],r[5],r[6],r[7]),!C_(r[1],n,e))return;e._a=n,e._tzm=$_(r[8],r[9],r[10]),e._d=$n.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),W(e).rfc2822=!0}else e._isValid=!1}function J_(e){var r=B_.exec(e._i);if(r!==null){e._d=new Date(+r[1]);return}if(Qu(e),e._isValid===!1)delete e._isValid;else return;if(eg(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:V.createFromInputFallback(e)}V.createFromInputFallback=Qe("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function ln(e,r,n){return e??r??n}function W_(e){var r=new Date(V.now());return e._useUTC?[r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()]:[r.getFullYear(),r.getMonth(),r.getDate()]}function ni(e){var r,n,t=[],a,s,i;if(!e._d){for(a=W_(e),e._w&&e._a[kr]==null&&e._a[Nr]==null&&z_(e),e._dayOfYear!=null&&(i=ln(e._a[Me],a[Me]),(e._dayOfYear>xn(i)||e._dayOfYear===0)&&(W(e)._overflowDayOfYear=!0),n=$n(i,0,e._dayOfYear),e._a[Nr]=n.getUTCMonth(),e._a[kr]=n.getUTCDate()),r=0;r<3&&e._a[r]==null;++r)e._a[r]=t[r]=a[r];for(;r<7;r++)e._a[r]=t[r]=e._a[r]==null?r===2?1:0:e._a[r];e._a[be]===24&&e._a[nr]===0&&e._a[Sr]===0&&e._a[qr]===0&&(e._nextDay=!0,e._a[be]=0),e._d=(e._useUTC?$n:n_).apply(null,t),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[be]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(W(e).weekdayMismatch=!0)}}function z_(e){var r,n,t,a,s,i,o,l,d;r=e._w,r.GG!=null||r.W!=null||r.E!=null?(s=1,i=4,n=ln(r.GG,e._a[Me],Jn(ve(),1,4).year),t=ln(r.W,1),a=ln(r.E,1),(a<1||a>7)&&(l=!0)):(s=e._locale._week.dow,i=e._locale._week.doy,d=Jn(ve(),s,i),n=ln(r.gg,e._a[Me],d.year),t=ln(r.w,d.week),r.d!=null?(a=r.d,(a<0||a>6)&&(l=!0)):r.e!=null?(a=r.e+s,(r.e<0||r.e>6)&&(l=!0)):a=s),t<1||t>br(n,s,i)?W(e)._overflowWeeks=!0:l!=null?W(e)._overflowWeekday=!0:(o=Ju(n,t,a,s,i),e._a[Me]=o.year,e._dayOfYear=o.dayOfYear)}V.ISO_8601=function(){};V.RFC_2822=function(){};function ti(e){if(e._f===V.ISO_8601){Qu(e);return}if(e._f===V.RFC_2822){eg(e);return}e._a=[],W(e).empty=!0;var r=""+e._i,n,t,a,s,i,o=r.length,l=0,d,u;for(a=Gu(e._f,e._locale).match(qs)||[],u=a.length,n=0;n<u;n++)s=a[n],t=(r.match(Vy(s,e))||[])[0],t&&(i=r.substr(0,r.indexOf(t)),i.length>0&&W(e).unusedInput.push(i),r=r.slice(r.indexOf(t)+t.length),l+=t.length),kn[s]?(t?W(e).empty=!1:W(e).unusedTokens.push(s),wy(s,t,e)):e._strict&&!t&&W(e).unusedTokens.push(s);W(e).charsLeftOver=o-l,r.length>0&&W(e).unusedInput.push(r),e._a[be]<=12&&W(e).bigHour===!0&&e._a[be]>0&&(W(e).bigHour=void 0),W(e).parsedDateParts=e._a.slice(0),W(e).meridiem=e._meridiem,e._a[be]=Z_(e._locale,e._a[be],e._meridiem),d=W(e).era,d!==null&&(e._a[Me]=e._locale.erasConvertYear(d,e._a[Me])),ni(e),ri(e)}function Z_(e,r,n){var t;return n==null?r:e.meridiemHour!=null?e.meridiemHour(r,n):(e.isPM!=null&&(t=e.isPM(n),t&&r<12&&(r+=12),!t&&r===12&&(r=0)),r)}function X_(e){var r,n,t,a,s,i,o=!1,l=e._f.length;if(l===0){W(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<l;a++)s=0,i=!1,r=Ys({},e),e._useUTC!=null&&(r._useUTC=e._useUTC),r._f=e._f[a],ti(r),Hs(r)&&(i=!0),s+=W(r).charsLeftOver,s+=W(r).unusedTokens.length*10,W(r).score=s,o?s<t&&(t=s,n=r):(t==null||s<t||i)&&(t=s,n=r,i&&(o=!0));Gr(e,n||r)}function Q_(e){if(!e._d){var r=Cs(e._i),n=r.day===void 0?r.date:r.day;e._a=Pu([r.year,r.month,n,r.hour,r.minute,r.second,r.millisecond],function(t){return t&&parseInt(t,10)}),ni(e)}}function ec(e){var r=new at(ri(rg(e)));return r._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function rg(e){var r=e._i,n=e._f;return e._locale=e._locale||Dr(e._l),r===null||n===void 0&&r===""?Ta({nullInput:!0}):(typeof r=="string"&&(e._i=r=e._locale.preparse(r)),ar(r)?new at(ri(r)):(tt(r)?e._d=r:tr(n)?X_(e):n?ti(e):rc(e),Hs(e)||(e._d=null),e))}function rc(e){var r=e._i;He(r)?e._d=new Date(V.now()):tt(r)?e._d=new Date(r.valueOf()):typeof r=="string"?J_(e):tr(r)?(e._a=Pu(r.slice(0),function(n){return parseInt(n,10)}),ni(e)):Jr(r)?Q_(e):Or(r)?e._d=new Date(r):V.createFromInputFallback(e)}function ng(e,r,n,t,a){var s={};return(r===!0||r===!1)&&(t=r,r=void 0),(n===!0||n===!1)&&(t=n,n=void 0),(Jr(e)&&js(e)||tr(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=n,s._i=e,s._f=r,s._strict=t,ec(s)}function ve(e,r,n,t){return ng(e,r,n,t,!1)}var nc=Qe("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ve.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Ta()}),tc=Qe("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ve.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Ta()});function tg(e,r){var n,t;if(r.length===1&&tr(r[0])&&(r=r[0]),!r.length)return ve();for(n=r[0],t=1;t<r.length;++t)(!r[t].isValid()||r[t][e](n))&&(n=r[t]);return n}function ac(){var e=[].slice.call(arguments,0);return tg("isBefore",e)}function sc(){var e=[].slice.call(arguments,0);return tg("isAfter",e)}var ic=function(){return Date.now?Date.now():+new Date},Vn=["year","quarter","month","week","day","hour","minute","second","millisecond"];function oc(e){var r,n=!1,t,a=Vn.length;for(r in e)if(ae(e,r)&&!(_e.call(Vn,r)!==-1&&(e[r]==null||!isNaN(e[r]))))return!1;for(t=0;t<a;++t)if(e[Vn[t]]){if(n)return!1;parseFloat(e[Vn[t]])!==X(e[Vn[t]])&&(n=!0)}return!0}function lc(){return this._isValid}function dc(){return or(NaN)}function Na(e){var r=Cs(e),n=r.year||0,t=r.quarter||0,a=r.month||0,s=r.week||r.isoWeek||0,i=r.day||0,o=r.hour||0,l=r.minute||0,d=r.second||0,u=r.millisecond||0;this._isValid=oc(r),this._milliseconds=+u+d*1e3+l*6e4+o*1e3*60*60,this._days=+i+s*7,this._months=+a+t*3+n*12,this._data={},this._locale=Dr(),this._bubble()}function Jt(e){return e instanceof Na}function ys(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function uc(e,r,n){var t=Math.min(e.length,r.length),a=Math.abs(e.length-r.length),s=0,i;for(i=0;i<t;i++)X(e[i])!==X(r[i])&&s++;return s+a}function ag(e,r){x(e,0,0,function(){var n=this.utcOffset(),t="+";return n<0&&(n=-n,t="-"),t+fr(~~(n/60),2)+r+fr(~~n%60,2)})}ag("Z",":");ag("ZZ","");B("Z",_a);B("ZZ",_a);de(["Z","ZZ"],function(e,r,n){n._useUTC=!0,n._tzm=ai(_a,e)});var gc=/([\+\-]|\d\d)/gi;function ai(e,r){var n=(r||"").match(e),t,a,s;return n===null?null:(t=n[n.length-1]||[],a=(t+"").match(gc)||["-",0,0],s=+(a[1]*60)+X(a[2]),s===0?0:a[0]==="+"?s:-s)}function si(e,r){var n,t;return r._isUTC?(n=r.clone(),t=(ar(e)||tt(e)?e.valueOf():ve(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+t),V.updateOffset(n,!1),n):ve(e).local()}function _s(e){return-Math.round(e._d.getTimezoneOffset())}V.updateOffset=function(){};function kc(e,r,n){var t=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=ai(_a,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&r&&(a=_s(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),t!==e&&(!r||this._changeInProgress?og(this,or(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,V.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:_s(this)}function Ec(e,r){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,r),this):-this.utcOffset()}function vc(e){return this.utcOffset(0,e)}function mc(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(_s(this),"m")),this}function Tc(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=ai(My,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function fc(e){return this.isValid()?(e=e?ve(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Rc(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ac(){if(!He(this._isDSTShifted))return this._isDSTShifted;var e={},r;return Ys(e,this),e=rg(e),e._a?(r=e._isUTC?Rr(e._a):ve(e._a),this._isDSTShifted=this.isValid()&&uc(e._a,r.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function yc(){return this.isValid()?!this._isUTC:!1}function _c(){return this.isValid()?this._isUTC:!1}function sg(){return this.isValid()?this._isUTC&&this._offset===0:!1}var cc=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,pc=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function or(e,r){var n=e,t=null,a,s,i;return Jt(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Or(e)||!isNaN(+e)?(n={},r?n[r]=+e:n.milliseconds=+e):(t=cc.exec(e))?(a=t[1]==="-"?-1:1,n={y:0,d:X(t[kr])*a,h:X(t[be])*a,m:X(t[nr])*a,s:X(t[Sr])*a,ms:X(ys(t[qr]*1e3))*a}):(t=pc.exec(e))?(a=t[1]==="-"?-1:1,n={y:Yr(t[2],a),M:Yr(t[3],a),w:Yr(t[4],a),d:Yr(t[5],a),h:Yr(t[6],a),m:Yr(t[7],a),s:Yr(t[8],a)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(i=Nc(ve(n.from),ve(n.to)),n={},n.ms=i.milliseconds,n.M=i.months),s=new Na(n),Jt(e)&&ae(e,"_locale")&&(s._locale=e._locale),Jt(e)&&ae(e,"_isValid")&&(s._isValid=e._isValid),s}or.fn=Na.prototype;or.invalid=dc;function Yr(e,r){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*r}function bo(e,r){var n={};return n.months=r.month()-e.month()+(r.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(r)&&--n.months,n.milliseconds=+r-+e.clone().add(n.months,"M"),n}function Nc(e,r){var n;return e.isValid()&&r.isValid()?(r=si(r,e),e.isBefore(r)?n=bo(e,r):(n=bo(r,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function ig(e,r){return function(n,t){var a,s;return t!==null&&!isNaN(+t)&&(Mu(r,"moment()."+r+"(period, number) is deprecated. Please use moment()."+r+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=t,t=s),a=or(n,t),og(this,a,e),this}}function og(e,r,n,t){var a=r._milliseconds,s=ys(r._days),i=ys(r._months);e.isValid()&&(t=t??!0,i&&qu(e,Cn(e,"Month")+i*n),s&&Hu(e,"Date",Cn(e,"Date")+s*n),a&&e._d.setTime(e._d.valueOf()+a*n),t&&V.updateOffset(e,s||i))}var Sc=ig(1,"add"),hc=ig(-1,"subtract");function lg(e){return typeof e=="string"||e instanceof String}function bc(e){return ar(e)||tt(e)||lg(e)||Or(e)||Oc(e)||Ic(e)||e===null||e===void 0}function Ic(e){var r=Jr(e)&&!js(e),n=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,i=t.length;for(a=0;a<i;a+=1)s=t[a],n=n||ae(e,s);return r&&n}function Oc(e){var r=tr(e),n=!1;return r&&(n=e.filter(function(t){return!Or(t)&&lg(e)}).length===0),r&&n}function Lc(e){var r=Jr(e)&&!js(e),n=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<t.length;a+=1)s=t[a],n=n||ae(e,s);return r&&n}function Dc(e,r){var n=e.diff(r,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Kc(e,r){arguments.length===1&&(arguments[0]?bc(arguments[0])?(e=arguments[0],r=void 0):Lc(arguments[0])&&(r=arguments[0],e=void 0):(e=void 0,r=void 0));var n=e||ve(),t=si(n,this).startOf("day"),a=V.calendarFormat(this,t)||"sameElse",s=r&&(Ar(r[a])?r[a].call(this,n):r[a]);return this.format(s||this.localeData().calendar(a,this,ve(n)))}function Pc(){return new at(this)}function Fc(e,r){var n=ar(e)?e:ve(e);return this.isValid()&&n.isValid()?(r=er(r)||"millisecond",r==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(r).valueOf()):!1}function Mc(e,r){var n=ar(e)?e:ve(e);return this.isValid()&&n.isValid()?(r=er(r)||"millisecond",r==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(r).valueOf()<n.valueOf()):!1}function Gc(e,r,n,t){var a=ar(e)?e:ve(e),s=ar(r)?r:ve(r);return this.isValid()&&a.isValid()&&s.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(a,n):!this.isBefore(a,n))&&(t[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function Vc(e,r){var n=ar(e)?e:ve(e),t;return this.isValid()&&n.isValid()?(r=er(r)||"millisecond",r==="millisecond"?this.valueOf()===n.valueOf():(t=n.valueOf(),this.clone().startOf(r).valueOf()<=t&&t<=this.clone().endOf(r).valueOf())):!1}function Uc(e,r){return this.isSame(e,r)||this.isAfter(e,r)}function wc(e,r){return this.isSame(e,r)||this.isBefore(e,r)}function Bc(e,r,n){var t,a,s;if(!this.isValid())return NaN;if(t=si(e,this),!t.isValid())return NaN;switch(a=(t.utcOffset()-this.utcOffset())*6e4,r=er(r),r){case"year":s=Wt(this,t)/12;break;case"month":s=Wt(this,t);break;case"quarter":s=Wt(this,t)/3;break;case"second":s=(this-t)/1e3;break;case"minute":s=(this-t)/6e4;break;case"hour":s=(this-t)/36e5;break;case"day":s=(this-t-a)/864e5;break;case"week":s=(this-t-a)/6048e5;break;default:s=this-t}return n?s:Je(s)}function Wt(e,r){if(e.date()<r.date())return-Wt(r,e);var n=(r.year()-e.year())*12+(r.month()-e.month()),t=e.clone().add(n,"months"),a,s;return r-t<0?(a=e.clone().add(n-1,"months"),s=(r-t)/(t-a)):(a=e.clone().add(n+1,"months"),s=(r-t)/(a-t)),-(n+s)||0}V.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";V.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function jc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Hc(e){if(!this.isValid())return null;var r=e!==!0,n=r?this.clone().utc():this;return n.year()<0||n.year()>9999?$t(n,r?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Ar(Date.prototype.toISOString)?r?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",$t(n,"Z")):$t(n,r?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Yc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",r="",n,t,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",r="Z"),n="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=r+'[")]',this.format(n+t+a+s)}function xc(e){e||(e=this.isUtc()?V.defaultFormatUtc:V.defaultFormat);var r=$t(this,e);return this.localeData().postformat(r)}function qc(e,r){return this.isValid()&&(ar(e)&&e.isValid()||ve(e).isValid())?or({to:this,from:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function Cc(e){return this.from(ve(),e)}function $c(e,r){return this.isValid()&&(ar(e)&&e.isValid()||ve(e).isValid())?or({from:this,to:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function Jc(e){return this.to(ve(),e)}function dg(e){var r;return e===void 0?this._locale._abbr:(r=Dr(e),r!=null&&(this._locale=r),this)}var ug=Qe("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function gg(){return this._locale}var sa=1e3,En=60*sa,ia=60*En,kg=(365*400+97)*24*ia;function vn(e,r){return(e%r+r)%r}function Eg(e,r,n){return e<100&&e>=0?new Date(e+400,r,n)-kg:new Date(e,r,n).valueOf()}function vg(e,r,n){return e<100&&e>=0?Date.UTC(e+400,r,n)-kg:Date.UTC(e,r,n)}function Wc(e){var r,n;if(e=er(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?vg:Eg,e){case"year":r=n(this.year(),0,1);break;case"quarter":r=n(this.year(),this.month()-this.month()%3,1);break;case"month":r=n(this.year(),this.month(),1);break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":r=n(this.year(),this.month(),this.date());break;case"hour":r=this._d.valueOf(),r-=vn(r+(this._isUTC?0:this.utcOffset()*En),ia);break;case"minute":r=this._d.valueOf(),r-=vn(r,En);break;case"second":r=this._d.valueOf(),r-=vn(r,sa);break}return this._d.setTime(r),V.updateOffset(this,!0),this}function zc(e){var r,n;if(e=er(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?vg:Eg,e){case"year":r=n(this.year()+1,0,1)-1;break;case"quarter":r=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":r=n(this.year(),this.month()+1,1)-1;break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":r=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":r=this._d.valueOf(),r+=ia-vn(r+(this._isUTC?0:this.utcOffset()*En),ia)-1;break;case"minute":r=this._d.valueOf(),r+=En-vn(r,En)-1;break;case"second":r=this._d.valueOf(),r+=sa-vn(r,sa)-1;break}return this._d.setTime(r),V.updateOffset(this,!0),this}function Zc(){return this._d.valueOf()-(this._offset||0)*6e4}function Xc(){return Math.floor(this.valueOf()/1e3)}function Qc(){return new Date(this.valueOf())}function ep(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function rp(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function np(){return this.isValid()?this.toISOString():null}function tp(){return Hs(this)}function ap(){return Gr({},W(this))}function sp(){return W(this).overflow}function ip(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}x("N",0,0,"eraAbbr");x("NN",0,0,"eraAbbr");x("NNN",0,0,"eraAbbr");x("NNNN",0,0,"eraName");x("NNNNN",0,0,"eraNarrow");x("y",["y",1],"yo","eraYear");x("y",["yy",2],0,"eraYear");x("y",["yyy",3],0,"eraYear");x("y",["yyyy",4],0,"eraYear");B("N",ii);B("NN",ii);B("NNN",ii);B("NNNN",fp);B("NNNNN",Rp);de(["N","NN","NNN","NNNN","NNNNN"],function(e,r,n,t){var a=n._locale.erasParse(e,t,n._strict);a?W(n).era=a:W(n).invalidEra=e});B("y",cn);B("yy",cn);B("yyy",cn);B("yyyy",cn);B("yo",Ap);de(["y","yy","yyy","yyyy"],Me);de(["yo"],function(e,r,n,t){var a;n._locale._eraYearOrdinalRegex&&(a=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?r[Me]=n._locale.eraYearOrdinalParse(e,a):r[Me]=parseInt(e,10)});function op(e,r){var n,t,a,s=this._eras||Dr("en")._eras;for(n=0,t=s.length;n<t;++n){switch(typeof s[n].since){case"string":a=V(s[n].since).startOf("day"),s[n].since=a.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":a=V(s[n].until).startOf("day").valueOf(),s[n].until=a.valueOf();break}}return s}function lp(e,r,n){var t,a,s=this.eras(),i,o,l;for(e=e.toUpperCase(),t=0,a=s.length;t<a;++t)if(i=s[t].name.toUpperCase(),o=s[t].abbr.toUpperCase(),l=s[t].narrow.toUpperCase(),n)switch(r){case"N":case"NN":case"NNN":if(o===e)return s[t];break;case"NNNN":if(i===e)return s[t];break;case"NNNNN":if(l===e)return s[t];break}else if([i,o,l].indexOf(e)>=0)return s[t]}function dp(e,r){var n=e.since<=e.until?1:-1;return r===void 0?V(e.since).year():V(e.since).year()+(r-e.offset)*n}function up(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].name;return""}function gp(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].narrow;return""}function kp(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].abbr;return""}function Ep(){var e,r,n,t,a=this.localeData().eras();for(e=0,r=a.length;e<r;++e)if(n=a[e].since<=a[e].until?1:-1,t=this.clone().startOf("day").valueOf(),a[e].since<=t&&t<=a[e].until||a[e].until<=t&&t<=a[e].since)return(this.year()-V(a[e].since).year())*n+a[e].offset;return this.year()}function vp(e){return ae(this,"_erasNameRegex")||oi.call(this),e?this._erasNameRegex:this._erasRegex}function mp(e){return ae(this,"_erasAbbrRegex")||oi.call(this),e?this._erasAbbrRegex:this._erasRegex}function Tp(e){return ae(this,"_erasNarrowRegex")||oi.call(this),e?this._erasNarrowRegex:this._erasRegex}function ii(e,r){return r.erasAbbrRegex(e)}function fp(e,r){return r.erasNameRegex(e)}function Rp(e,r){return r.erasNarrowRegex(e)}function Ap(e,r){return r._eraYearOrdinalRegex||cn}function oi(){var e=[],r=[],n=[],t=[],a,s,i,o,l,d=this.eras();for(a=0,s=d.length;a<s;++a)i=hr(d[a].name),o=hr(d[a].abbr),l=hr(d[a].narrow),r.push(i),e.push(o),n.push(l),t.push(i),t.push(o),t.push(l);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+r.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}x(0,["gg",2],0,function(){return this.weekYear()%100});x(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Sa(e,r){x(0,[e,e.length],0,r)}Sa("gggg","weekYear");Sa("ggggg","weekYear");Sa("GGGG","isoWeekYear");Sa("GGGGG","isoWeekYear");B("G",ya);B("g",ya);B("GG",me,Ce);B("gg",me,Ce);B("GGGG",Js,$s);B("gggg",Js,$s);B("GGGGG",Aa,fa);B("ggggg",Aa,fa);it(["gggg","ggggg","GGGG","GGGGG"],function(e,r,n,t){r[t.substr(0,2)]=X(e)});it(["gg","GG"],function(e,r,n,t){r[t]=V.parseTwoDigitYear(e)});function yp(e){return mg.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function _p(e){return mg.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function cp(){return br(this.year(),1,4)}function pp(){return br(this.isoWeekYear(),1,4)}function Np(){var e=this.localeData()._week;return br(this.year(),e.dow,e.doy)}function Sp(){var e=this.localeData()._week;return br(this.weekYear(),e.dow,e.doy)}function mg(e,r,n,t,a){var s;return e==null?Jn(this,t,a).year:(s=br(e,t,a),r>s&&(r=s),hp.call(this,e,r,n,t,a))}function hp(e,r,n,t,a){var s=Ju(e,r,n,t,a),i=$n(s.year,0,s.dayOfYear);return this.year(i.getUTCFullYear()),this.month(i.getUTCMonth()),this.date(i.getUTCDate()),this}x("Q",0,"Qo","quarter");B("Q",Vu);de("Q",function(e,r){r[Nr]=(X(e)-1)*3});function bp(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}x("D",["DD",2],"Do","date");B("D",me,pn);B("DD",me,Ce);B("Do",function(e,r){return e?r._dayOfMonthOrdinalParse||r._ordinalParse:r._dayOfMonthOrdinalParseLenient});de(["D","DD"],kr);de("Do",function(e,r){r[kr]=X(e.match(me)[0])});var Tg=Nn("Date",!0);x("DDD",["DDDD",3],"DDDo","dayOfYear");B("DDD",Ra);B("DDDD",Uu);de(["DDD","DDDD"],function(e,r,n){n._dayOfYear=X(e)});function Ip(e){var r=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?r:this.add(e-r,"d")}x("m",["mm",2],0,"minute");B("m",me,Ws);B("mm",me,Ce);de(["m","mm"],nr);var Op=Nn("Minutes",!1);x("s",["ss",2],0,"second");B("s",me,Ws);B("ss",me,Ce);de(["s","ss"],Sr);var Lp=Nn("Seconds",!1);x("S",0,0,function(){return~~(this.millisecond()/100)});x(0,["SS",2],0,function(){return~~(this.millisecond()/10)});x(0,["SSS",3],0,"millisecond");x(0,["SSSS",4],0,function(){return this.millisecond()*10});x(0,["SSSSS",5],0,function(){return this.millisecond()*100});x(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});x(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});x(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});x(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});B("S",Ra,Vu);B("SS",Ra,Ce);B("SSS",Ra,Uu);var Vr,fg;for(Vr="SSSS";Vr.length<=9;Vr+="S")B(Vr,cn);function Dp(e,r){r[qr]=X(("0."+e)*1e3)}for(Vr="S";Vr.length<=9;Vr+="S")de(Vr,Dp);fg=Nn("Milliseconds",!1);x("z",0,0,"zoneAbbr");x("zz",0,0,"zoneName");function Kp(){return this._isUTC?"UTC":""}function Pp(){return this._isUTC?"Coordinated Universal Time":""}var O=at.prototype;O.add=Sc;O.calendar=Kc;O.clone=Pc;O.diff=Bc;O.endOf=zc;O.format=xc;O.from=qc;O.fromNow=Cc;O.to=$c;O.toNow=Jc;O.get=Yy;O.invalidAt=sp;O.isAfter=Fc;O.isBefore=Mc;O.isBetween=Gc;O.isSame=Vc;O.isSameOrAfter=Uc;O.isSameOrBefore=wc;O.isValid=tp;O.lang=ug;O.locale=dg;O.localeData=gg;O.max=tc;O.min=nc;O.parsingFlags=ap;O.set=xy;O.startOf=Wc;O.subtract=hc;O.toArray=ep;O.toObject=rp;O.toDate=Qc;O.toISOString=Hc;O.inspect=Yc;typeof Symbol<"u"&&Symbol.for!=null&&(O[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});O.toJSON=np;O.toString=jc;O.unix=Xc;O.valueOf=Zc;O.creationData=ip;O.eraName=up;O.eraNarrow=gp;O.eraAbbr=kp;O.eraYear=Ep;O.year=ju;O.isLeapYear=Hy;O.weekYear=yp;O.isoWeekYear=_p;O.quarter=O.quarters=bp;O.month=Cu;O.daysInMonth=Qy;O.week=O.weeks=o_;O.isoWeek=O.isoWeeks=l_;O.weeksInYear=Np;O.weeksInWeekYear=Sp;O.isoWeeksInYear=cp;O.isoWeeksInISOWeekYear=pp;O.date=Tg;O.day=O.days=__;O.weekday=c_;O.isoWeekday=p_;O.dayOfYear=Ip;O.hour=O.hours=L_;O.minute=O.minutes=Op;O.second=O.seconds=Lp;O.millisecond=O.milliseconds=fg;O.utcOffset=kc;O.utc=vc;O.local=mc;O.parseZone=Tc;O.hasAlignedHourOffset=fc;O.isDST=Rc;O.isLocal=yc;O.isUtcOffset=_c;O.isUtc=sg;O.isUTC=sg;O.zoneAbbr=Kp;O.zoneName=Pp;O.dates=Qe("dates accessor is deprecated. Use date instead.",Tg);O.months=Qe("months accessor is deprecated. Use month instead",Cu);O.years=Qe("years accessor is deprecated. Use year instead",ju);O.zone=Qe("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ec);O.isDSTShifted=Qe("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ac);function Fp(e){return ve(e*1e3)}function Mp(){return ve.apply(null,arguments).parseZone()}function Rg(e){return e}var se=xs.prototype;se.calendar=yy;se.longDateFormat=Ny;se.invalidDate=hy;se.ordinal=Oy;se.preparse=Rg;se.postformat=Rg;se.relativeTime=Dy;se.pastFuture=Ky;se.set=Ry;se.eras=op;se.erasParse=lp;se.erasConvertYear=dp;se.erasAbbrRegex=mp;se.erasNameRegex=vp;se.erasNarrowRegex=Tp;se.months=Wy;se.monthsShort=zy;se.monthsParse=Xy;se.monthsRegex=r_;se.monthsShortRegex=e_;se.week=t_;se.firstDayOfYear=i_;se.firstDayOfWeek=s_;se.weekdays=T_;se.weekdaysMin=R_;se.weekdaysShort=f_;se.weekdaysParse=y_;se.weekdaysRegex=N_;se.weekdaysShortRegex=S_;se.weekdaysMinRegex=h_;se.isPM=I_;se.meridiem=D_;function oa(e,r,n,t){var a=Dr(),s=Rr().set(t,r);return a[n](s,e)}function Ag(e,r,n){if(Or(e)&&(r=e,e=void 0),e=e||"",r!=null)return oa(e,r,n,"month");var t,a=[];for(t=0;t<12;t++)a[t]=oa(e,t,n,"month");return a}function li(e,r,n,t){typeof e=="boolean"?(Or(r)&&(n=r,r=void 0),r=r||""):(r=e,n=r,e=!1,Or(r)&&(n=r,r=void 0),r=r||"");var a=Dr(),s=e?a._week.dow:0,i,o=[];if(n!=null)return oa(r,(n+s)%7,t,"day");for(i=0;i<7;i++)o[i]=oa(r,(i+s)%7,t,"day");return o}function Gp(e,r){return Ag(e,r,"months")}function Vp(e,r){return Ag(e,r,"monthsShort")}function Up(e,r,n){return li(e,r,n,"weekdays")}function wp(e,r,n){return li(e,r,n,"weekdaysShort")}function Bp(e,r,n){return li(e,r,n,"weekdaysMin")}Ur("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var r=e%10,n=X(e%100/10)===1?"th":r===1?"st":r===2?"nd":r===3?"rd":"th";return e+n}});V.lang=Qe("moment.lang is deprecated. Use moment.locale instead.",Ur);V.langData=Qe("moment.langData is deprecated. Use moment.localeData instead.",Dr);var cr=Math.abs;function jp(){var e=this._data;return this._milliseconds=cr(this._milliseconds),this._days=cr(this._days),this._months=cr(this._months),e.milliseconds=cr(e.milliseconds),e.seconds=cr(e.seconds),e.minutes=cr(e.minutes),e.hours=cr(e.hours),e.months=cr(e.months),e.years=cr(e.years),this}function yg(e,r,n,t){var a=or(r,n);return e._milliseconds+=t*a._milliseconds,e._days+=t*a._days,e._months+=t*a._months,e._bubble()}function Hp(e,r){return yg(this,e,r,1)}function Yp(e,r){return yg(this,e,r,-1)}function Io(e){return e<0?Math.floor(e):Math.ceil(e)}function xp(){var e=this._milliseconds,r=this._days,n=this._months,t=this._data,a,s,i,o,l;return e>=0&&r>=0&&n>=0||e<=0&&r<=0&&n<=0||(e+=Io(cs(n)+r)*864e5,r=0,n=0),t.milliseconds=e%1e3,a=Je(e/1e3),t.seconds=a%60,s=Je(a/60),t.minutes=s%60,i=Je(s/60),t.hours=i%24,r+=Je(i/24),l=Je(_g(r)),n+=l,r-=Io(cs(l)),o=Je(n/12),n%=12,t.days=r,t.months=n,t.years=o,this}function _g(e){return e*4800/146097}function cs(e){return e*146097/4800}function qp(e){if(!this.isValid())return NaN;var r,n,t=this._milliseconds;if(e=er(e),e==="month"||e==="quarter"||e==="year")switch(r=this._days+t/864e5,n=this._months+_g(r),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(r=this._days+Math.round(cs(this._months)),e){case"week":return r/7+t/6048e5;case"day":return r+t/864e5;case"hour":return r*24+t/36e5;case"minute":return r*1440+t/6e4;case"second":return r*86400+t/1e3;case"millisecond":return Math.floor(r*864e5)+t;default:throw new Error("Unknown unit "+e)}}function Kr(e){return function(){return this.as(e)}}var cg=Kr("ms"),Cp=Kr("s"),$p=Kr("m"),Jp=Kr("h"),Wp=Kr("d"),zp=Kr("w"),Zp=Kr("M"),Xp=Kr("Q"),Qp=Kr("y"),eN=cg;function rN(){return or(this)}function nN(e){return e=er(e),this.isValid()?this[e+"s"]():NaN}function Xr(e){return function(){return this.isValid()?this._data[e]:NaN}}var tN=Xr("milliseconds"),aN=Xr("seconds"),sN=Xr("minutes"),iN=Xr("hours"),oN=Xr("days"),lN=Xr("months"),dN=Xr("years");function uN(){return Je(this.days()/7)}var pr=Math.round,un={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function gN(e,r,n,t,a){return a.relativeTime(r||1,!!n,e,t)}function kN(e,r,n,t){var a=or(e).abs(),s=pr(a.as("s")),i=pr(a.as("m")),o=pr(a.as("h")),l=pr(a.as("d")),d=pr(a.as("M")),u=pr(a.as("w")),E=pr(a.as("y")),v=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||i<=1&&["m"]||i<n.m&&["mm",i]||o<=1&&["h"]||o<n.h&&["hh",o]||l<=1&&["d"]||l<n.d&&["dd",l];return n.w!=null&&(v=v||u<=1&&["w"]||u<n.w&&["ww",u]),v=v||d<=1&&["M"]||d<n.M&&["MM",d]||E<=1&&["y"]||["yy",E],v[2]=r,v[3]=+e>0,v[4]=t,gN.apply(null,v)}function EN(e){return e===void 0?pr:typeof e=="function"?(pr=e,!0):!1}function vN(e,r){return un[e]===void 0?!1:r===void 0?un[e]:(un[e]=r,e==="s"&&(un.ss=r-1),!0)}function mN(e,r){if(!this.isValid())return this.localeData().invalidDate();var n=!1,t=un,a,s;return typeof e=="object"&&(r=e,e=!1),typeof e=="boolean"&&(n=e),typeof r=="object"&&(t=Object.assign({},un,r),r.s!=null&&r.ss==null&&(t.ss=r.s-1)),a=this.localeData(),s=kN(this,!n,t,a),n&&(s=a.pastFuture(+this,s)),a.postformat(s)}var qa=Math.abs;function on(e){return(e>0)-(e<0)||+e}function ha(){if(!this.isValid())return this.localeData().invalidDate();var e=qa(this._milliseconds)/1e3,r=qa(this._days),n=qa(this._months),t,a,s,i,o=this.asSeconds(),l,d,u,E;return o?(t=Je(e/60),a=Je(t/60),e%=60,t%=60,s=Je(n/12),n%=12,i=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",d=on(this._months)!==on(o)?"-":"",u=on(this._days)!==on(o)?"-":"",E=on(this._milliseconds)!==on(o)?"-":"",l+"P"+(s?d+s+"Y":"")+(n?d+n+"M":"")+(r?u+r+"D":"")+(a||t||e?"T":"")+(a?E+a+"H":"")+(t?E+t+"M":"")+(e?E+i+"S":"")):"P0D"}var ne=Na.prototype;ne.isValid=lc;ne.abs=jp;ne.add=Hp;ne.subtract=Yp;ne.as=qp;ne.asMilliseconds=cg;ne.asSeconds=Cp;ne.asMinutes=$p;ne.asHours=Jp;ne.asDays=Wp;ne.asWeeks=zp;ne.asMonths=Zp;ne.asQuarters=Xp;ne.asYears=Qp;ne.valueOf=eN;ne._bubble=xp;ne.clone=rN;ne.get=nN;ne.milliseconds=tN;ne.seconds=aN;ne.minutes=sN;ne.hours=iN;ne.days=oN;ne.weeks=uN;ne.months=lN;ne.years=dN;ne.humanize=mN;ne.toISOString=ha;ne.toString=ha;ne.toJSON=ha;ne.locale=dg;ne.localeData=gg;ne.toIsoString=Qe("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ha);ne.lang=ug;x("X",0,0,"unix");x("x",0,0,"valueOf");B("x",ya);B("X",Gy);de("X",function(e,r,n){n._d=new Date(parseFloat(e)*1e3)});de("x",function(e,r,n){n._d=new Date(X(e))});//! moment.js
V.version="2.30.1";Ty(ve);V.fn=O;V.min=ac;V.max=sc;V.now=ic;V.utc=Rr;V.unix=Fp;V.months=Gp;V.isDate=tt;V.locale=Ur;V.invalid=Ta;V.duration=or;V.isMoment=ar;V.weekdays=Up;V.parseZone=Mp;V.localeData=Dr;V.isDuration=Jt;V.monthsShort=Vp;V.weekdaysMin=Bp;V.defineLocale=ei;V.updateLocale=M_;V.locales=G_;V.weekdaysShort=wp;V.normalizeUnits=er;V.relativeTimeRounding=EN;V.relativeTimeThreshold=vN;V.calendarFormat=Dc;V.prototype=O;V.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var Un=(e=>(e.INNVILGET="INNVILGET",e.AVSLAG="AVSLAG",e))(Un||{});const TN="_fritekstItem_1kqqb_1",fN={fritekstItem:TN},RN=ma(1500),AN=ws(3),yN=(e,r,n)=>{const t=r.filter(s=>s.vilkarStatus===zn.IKKE_OPPFYLT);if(t.length===0)return k.jsx(Ae,{id:"VedtakForm.UttaksperioderIkkeGyldig"});if(!(n!=null&&n.avslagsarsak))throw new Error("Ingen behandlingsresultat eller avslagsårsak finnes");return`${e(t[0].vilkarType,Ir.VILKAR_TYPE)}: ${e(n.avslagsarsak,Ir.AVSLAGSARSAK,t[0].vilkarType)}`},pg=({vilkar:e,behandlingsresultat:r,språkKode:n,erReadOnly:t,alleKodeverk:a,skalBrukeOverstyrendeFritekstBrev:s})=>{const{formState:{isDirty:i}}=An(),o=qn(a),l=u=>u!==void 0||i,d=yN(o,e,r);return k.jsxs(k.Fragment,{children:[d&&k.jsxs(k.Fragment,{children:[k.jsx(xe,{size:"small",children:k.jsx(Ae,{id:"VedtakForm.ArsakTilAvslag"})}),k.jsx(ze,{size:"small",children:d}),k.jsx(ye,{sixteenPx:!0})]}),!s&&k.jsxs(k.Fragment,{children:[k.jsx(ye,{sixteenPx:!0}),k.jsx(ra,{name:"begrunnelse",label:k.jsx(Ae,{id:"VedtakForm.Fritekst"}),validate:[GA(l),AN,RN,na],maxLength:1500,readOnly:t,parse:zt,badges:[{type:"info",titleText:Ds(n)}]})]}),t&&(r==null?void 0:r.avslagsarsakFritekst)&&k.jsxs("span",{children:[k.jsx(ye,{twentyPx:!0}),k.jsx(wr,{children:k.jsx(Ae,{id:"VedtakForm.Fritekst"})}),k.jsx(ye,{eightPx:!0}),k.jsx("div",{className:fN.fritekstItem,children:zr(r.avslagsarsakFritekst)})]})]})};pg.__docgenInfo={description:"",methods:[],displayName:"VedtakAvslagArsakOgBegrunnelsePanel",props:{vilkar:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const Ng=({ytelseTypeKode:e,revurderingsÅrsakString:r,isReadOnly:n,beregningsresultat:t,språkKode:a,behandlingsresultat:s,beregningErManueltFastsatt:i,skalBrukeOverstyrendeFritekstBrev:o})=>k.jsxs(k.Fragment,{children:[e===Z.ENGANGSSTONAD&&t&&"antallBarn"in t&&k.jsx($r,{children:k.jsxs(Cr,{children:[k.jsxs(Fe,{children:[k.jsx(wr,{children:k.jsx(Ae,{id:"VedtakForm.beregnetTilkjentYtelse"})}),k.jsx(xe,{size:"small",children:Gd(t.beregnetTilkjentYtelse)})]}),k.jsxs(Fe,{children:[k.jsx(wr,{children:k.jsx(Ae,{id:"VedtakForm.AntallBarn"})}),k.jsx(xe,{size:"small",children:t.antallBarn})]})]})}),(e===Z.FORELDREPENGER||e===Z.SVANGERSKAPSPENGER)&&k.jsxs(k.Fragment,{children:[r&&k.jsxs(k.Fragment,{children:[k.jsx(xe,{size:"small",children:k.jsx(Ae,{id:"VedtakForm.Revurdering.Aarsak"})}),k.jsx(ze,{size:"small",children:r}),k.jsx(ye,{eightPx:!0})]}),!o&&i&&k.jsx(nt,{isReadOnly:n,språkKode:a,behandlingsresultat:s,labelTextCode:"VedtakForm.Fritekst.Beregningsgrunnlag"})]})]});Ng.__docgenInfo={description:"",methods:[],displayName:"VedtakInnvilgetRevurderingPanel",props:{ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},revurderingsÅrsakString:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},beregningsresultat:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const Sg=({revurderingsÅrsakString:e,språkKode:r,isReadOnly:n,behandlingsresultat:t,beregningErManueltFastsatt:a,skalBrukeOverstyrendeFritekstBrev:s})=>k.jsxs(k.Fragment,{children:[k.jsx(xe,{size:"small",children:k.jsx(Ae,{id:"VedtakForm.Revurdering.Aarsak"})}),e&&k.jsx(ze,{size:"small",children:e}),!s&&a&&k.jsx(nt,{isReadOnly:n,språkKode:r,behandlingsresultat:t,labelTextCode:"VedtakForm.Fritekst.Beregningsgrunnlag"})]});Sg.__docgenInfo={description:"",methods:[],displayName:"VedtakOpphorRevurderingPanel",props:{revurderingsÅrsakString:{required:!1,tsType:{name:"string"},description:""},språkKode:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},behandlingsresultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},beregningErManueltFastsatt:{required:!0,tsType:{name:"boolean"},description:""},skalBrukeOverstyrendeFritekstBrev:{required:!0,tsType:{name:"boolean"},description:""}}};const Oo=(e,r,n,t,a)=>s=>{if(s.preventDefault(),!e||(e?!!t&&!!n:!!a)){const o={fritekst:e?t:a,dokumentMal:e?hs.FRITEKST:void 0,tittel:e?n:void 0,gjelderVedtak:!0,automatiskVedtaksbrev:e?void 0:!0};r(o)}},_N=(e=[])=>e.map(({behandlingArsakType:r})=>r).some(r=>r===vr.ETTER_KLAGE||r===vr.KLAGE_U_INNTK||r===vr.KLAGE_M_INNTK),cN=(e,r)=>{if(e===void 0||e.length<1)return;const n=[],t=e.find(s=>s===vr.RE_ENDRING_FRA_BRUKER),a=e.filter(s=>s!==vr.RE_ENDRING_FRA_BRUKER).map(s=>r(s,Ir.BEHANDLING_AARSAK));return t!==void 0&&n.push(r(t,Ir.BEHANDLING_AARSAK)),n.push(...a),n.join(", ")},pN=(e,r)=>{const n=e?Un.INNVILGET:Un.AVSLAG;return(r?Un.INNVILGET:Un.AVSLAG)!==n},NN=(e,r)=>!r||r.length<1?"":r.map(n=>e(n,Ir.KONSEKVENS_FOR_YTELSEN)).join(" og "),Lo=(e,r,n)=>r?n?e&&"beregnetTilkjentYtelse"in r&&"beregnetTilkjentYtelse"in n?r.beregnetTilkjentYtelse!==n.beregnetTilkjentYtelse:"antallBarn"in r&&"antallBarn"in n?r.antallBarn!==n.antallBarn:!1:!0:!1,hg=(e,r,n)=>pN(r,n)?r?"VedtakForm.Resultat.EndretTilInnvilget":"VedtakForm.Resultat.EndretTilAvslag":e?Lo(e,r,n)?"VedtakForm.Resultat.EndretTilkjentYtelse":"VedtakForm.Resultat.IngenEndring":Lo(e,r,n)?"VedtakForm.Resultat.EndretAntallBarn":"VedtakForm.Resultat.IngenEndring",SN=(e,r,n,t,a,s,i)=>{if(r===Z.ENGANGSSTONAD)return e.formatMessage({id:hg(!0,s,i)});const o=NN(n,a);return`${o}${o!==""?t:". "}`},hN=e=>e.aksjonspunktKoder.map(r=>({kode:Su(r,ke.FORESLA_VEDTAK,ke.FORESLA_VEDTAK_MANUELT,ke.VURDERE_ANNEN_YTELSE,ke.VURDERE_DOKUMENT,ke.VURDERE_INNTEKTSMELDING_KLAGE,ke.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,ke.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING),begrunnelse:e.begrunnelse,fritekstBrev:e.brødtekst,skalBrukeOverstyrendeFritekstBrev:!!e.brødtekst,overskrift:e.overskrift})),bN=(e,r)=>{var n,t;return{aksjonspunktKoder:e.filter(a=>a.kanLoses).map(a=>a.definisjon),overskrift:zr((n=r.behandlingsresultat)==null?void 0:n.overskrift),brødtekst:zr((t=r.behandlingsresultat)==null?void 0:t.fritekstbrev)}},bg=({previewCallback:e,ytelseTypeKode:r,beregningsresultat:n,tilbakekrevingvalg:t,simuleringResultat:a,vilkar:s,beregningErManueltFastsatt:i,beregningsresultatOriginalBehandling:o})=>{const l=ir(),{behandling:d,alleKodeverk:u,submitCallback:E,isReadOnly:v}=da(),{aksjonspunkt:c}=d,{formData:h,setFormData:T}=Dd(),A=Qd({defaultValues:h||bN(c,d)}),N=A.watch("begrunnelse"),p=A.watch("overskrift"),y=A.watch("brødtekst"),{behandlingsresultat:P,sprakkode:R,behandlingÅrsaker:G}=d,b=f.useMemo(()=>_N(d.behandlingÅrsaker),[d.behandlingÅrsaker]),S=f.useMemo(()=>cN(G.map(K=>K.behandlingArsakType),qn(u)),[G]),U=f.useMemo(()=>Iu(u,a,t),[a,t]);let j="";if(P&&Ns(P.type)){const K=P.konsekvenserForYtelsen;j=SN(l,r,qn(u),U,K,n,o)}P&&Ss(P.type)&&(j=l.formatMessage({id:hg(!1,n,o)})),P&&nd(P.type)&&P.opphørsdato&&(j=l.formatMessage({id:"VedtakForm.Revurdering.Opphoerer"},{dato:V(P.opphørsdato).format(jv)}));const Y=Oo(!0,e,p,y,N),D=Oo(!1,e,p,y,N);return k.jsx(cu,{formMethods:A,onSubmit:K=>E(hN(K)),setDataOnUnmount:T,children:k.jsx(Bs,{vedtakstatusTekst:j,previewAutomatiskBrev:D,previewOverstyrtBrev:Y,tilbakekrevingtekst:U,erBehandlingEtterKlage:b,renderPanel:(K,q,J,ee)=>q?k.jsx(Ng,{ytelseTypeKode:r,revurderingsÅrsakString:S,isReadOnly:v,beregningsresultat:n,språkKode:R,behandlingsresultat:P,beregningErManueltFastsatt:i,skalBrukeOverstyrendeFritekstBrev:K}):J?k.jsx(pg,{vilkar:s,behandlingsresultat:P,språkKode:R,erReadOnly:v,alleKodeverk:u,skalBrukeOverstyrendeFritekstBrev:K}):ee?k.jsx(Sg,{revurderingsÅrsakString:S,isReadOnly:v,behandlingsresultat:P,språkKode:R,beregningErManueltFastsatt:i,skalBrukeOverstyrendeFritekstBrev:K}):null})})};bg.__docgenInfo={description:"",methods:[],displayName:"VedtakRevurderingForm",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst?: string;
  dokumentMal?: string;
  tittel?: string;
  gjelderVedtak: boolean;
  automatiskVedtaksbrev?: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!1}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"tittel",value:{name:"string",required:!1}},{key:"gjelderVedtak",value:{name:"boolean",required:!0}},{key:"automatiskVedtaksbrev",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},beregningsresultat:{required:!1,tsType:{name:"union",raw:"BeregningsresultatDagytelse | BeregningsresultatEs",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]},description:""},tilbakekrevingvalg:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]},description:""}}};const IN={"VedtakForm.ForslagTilVedtak":"Vedtak","VedtakForm.BehandlingHenlagt":"Behandlingen er henlagt","VedtakForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakForm.ResultatKlageAvvist":"Klagen er avvist","VedtakForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakForm.SvangerskapspengerIkkeInnvilget":"Svangerskapspenger er avslått","VedtakForm.ForeldrepengerIkkeInnvilget":"Foreldrepenger er avslått","VedtakForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakForm.VilkarStatusInnvilget":"Engangsstønad er innvilget","VedtakForm.VilkarStatusInnvilgetEngangsstonad":"Engangsstønad er innvilget","VedtakForm.SvangerskapspengerInnvilget":"Svangerskapspenger er innvilget","VedtakForm.VilkarStatusInnvilgetForeldrepenger":"Foreldrepenger er innvilget","VedtakForm.OpprettTilbakekrOgInntrekk":"Feilutbetaling med tilbakekreving hvor beløp er redusert med inntrekk","VedtakForm.TilGodkjenning":"Til godkjenning","VedtakForm.FattVedtak":"Fatt vedtak","VedtakForm.ForhandvisBrev":"Forhåndsvis brev","VedtakForm.beregnetTilkjentYtelse":"Beregnet engangsstønad","VedtakForm.AntallBarn":"Antall barn","VedtakForm.vedtak":"Vedtak","VedtakForm.Resultat":"Resultat","VedtakForm.ArsakTilAvslag":"Årsak til avslag","VedtakForm.Fritekst":"Fritekst i brev til søker","VedtakForm.Fritekst.Beregningsgrunnlag":"Fritekst i brev til søker som handler om fastsettelse av beregningsgrunnlaget","VedtakForm.VurderAnnenYtelse":"Påvirker den åpne Gosys-oppgaven «Vurder konsekvens for ytelse» behandlingen?","VedtakForm.VurderDokument":"Påvirker den åpne Gosys-oppgaven «Vurder dokument» behandlingen?","VedtakForm.VurderInntektsmeldingKlage":"Det er en åpen klagesak, og det er mottatt ny inntektsmelding. Vurder beregningsgrunnlaget på nytt og behandle revurdering og klage under ett.","VedtakForm.Resultat.IngenEndring":"Ingen endring","VedtakForm.Resultat.EndretTilAvslag":"Endret til Avslag","VedtakForm.Resultat.EndretTilInnvilget":"Endret til Innvilget","VedtakForm.Resultat.EndretTilkjentYtelse":"Endret beregnet stønad","VedtakForm.KontrollerRevurderingsbehandling":"Beregningsgrunnlaget er endret til ugunst for søker. Skal det sendes varsel?","VedtakForm.UttaksperioderIkkeGyldig":"Søker har ikke noen gyldig uttaksperiode","VedtakForm.Revurdering.Aarsak":"Årsak til revurdering","VedtakForm.Revurdering.Opphoerer":"Ytelsen opphører f.o.m. {dato}","VedtakForm.ManuellOverstyring":"Overstyr automatisk brev","VedtakForm.Overskrift":"Overskrift","VedtakForm.Innhold":"Innhold i brev til søker","VedtakForm.SvpFritektsBrevModal.Ok":"Ok","VedtakForm.SvpFritektsBrevModal.IngenAutomatiskVedtaksbrev":"I denne behandlingen er det ikke automatisk vedtaksbrev. Du må velge 'Overstyr automatisk brev' og skrive fritekstbrev.","VedtakForm.SvpFritektsBrevModal.IngenAutomatiskVedtaksbrevImage":"Ingen automatisk vedtaksbrev.","VedtakForm.SvpFritektsBrevModal.ModalDescription":"Informasjonsboks om ingen automatisk vedtaksbrev. Fritekstbrev er nødvendig.","VedtakFellesPanel.RedigerVedtaksbrev":"Rediger vedtaksbrev","VedtakFellesPanel.AutomatiskVedtaksbrev":"Automatisk vedtaksbrev","VedtakFellesPanel.UtkastVedtaksbrev":"Utkast vedtaksbrev","VedtakFellesPanel.ForkastManueltBrev":"Forkast manuelt brev","VedtakFellesPanel.Forklaring":"Tekst fra det automatisk genererte brevet kan kopieres og limes inn i det manuelle brevet","VedtakFellesPanel.Forkast":"Dersom du forkaster det manuelle brevet, vil det erstattes av det automatisk genererte brevet","VedtakFellesPanel.Ok":"Forkast manuelt brev","FritekstBrevPanel.Endret":"Endret av saksbehandler","FritekstBrevPanel.ManueltVedtaksbrev":"Manuelt vedtaksbrev","FritekstBrevPanel.ForhandsvisManueltVedtaksbrev":"Forhåndsvis manuelt brev","VedtakHelpTextPanel.Vurder":"Vurder følgende før du sender til godkjenning:","Malform.Beskrivelse":"Foretrukket språk"},ON=Be(IN),LN=[ke.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ke.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ke.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD],DN=(e,r)=>{var s;if(!r||!e)return!1;const n=e.find(i=>LN.some(o=>o===i.definisjon)&&i.status===Mr.UTFORT),a=(s=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:s.find(i=>i.overstyrtPrAar||i.overstyrtPrAar===0);return!!n||!!a},ps=({beregningresultatDagytelse:e,beregningresultatEngangsstonad:r,tilbakekrevingvalg:n,simuleringResultat:t,beregningsgrunnlag:a,vilkar:s,beregningsresultatOriginalBehandling:i,previewCallback:o,ytelseTypeKode:l})=>{const{behandling:d}=da(),{aksjonspunkt:u}=d,E=DN(u,a),v=l===Z.ENGANGSSTONAD?r:e;let c;return i&&(c=l===Z.ENGANGSSTONAD?i["beregningsresultat-engangsstonad"]:i["beregningsresultat-foreldrepenger"]),k.jsxs(pE,{value:ON,children:[d.type!==Ge.REVURDERING&&k.jsx(Du,{previewCallback:o,tilbakekrevingvalg:n,simuleringResultat:t,beregningsresultat:v,ytelseTypeKode:l,vilkar:s,beregningErManueltFastsatt:E}),d.type===Ge.REVURDERING&&k.jsx(bg,{previewCallback:o,tilbakekrevingvalg:n,simuleringResultat:t,beregningsresultat:v,ytelseTypeKode:l,vilkar:s,beregningErManueltFastsatt:E,beregningsresultatOriginalBehandling:c})]})};ps.__docgenInfo={description:"",methods:[],displayName:"VedtakProsessIndex",props:{beregningresultatDagytelse:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Vilkar[]"},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst?: string;
  dokumentMal?: string;
  tittel?: string;
  gjelderVedtak: boolean;
  automatiskVedtaksbrev?: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!1}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"tittel",value:{name:"string",required:!1}},{key:"gjelderVedtak",value:{name:"boolean",required:!0}},{key:"automatiskVedtaksbrev",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""}}};const Ig=[{definisjon:ke.FORESLA_VEDTAK,status:Mr.OPPRETTET,kanLoses:!0}],Te={uuid:"1",versjon:1,type:Ge.FORSTEGANGSSOKNAD,status:we.BEHANDLING_UTREDES,sprakkode:"NO",behandlingsresultat:{type:Ne.INNVILGET},behandlingPaaVent:!1,behandlingHenlagt:!1,aksjonspunkt:Ig,behandlingÅrsaker:[{behandlingArsakType:vr.ANNET}]},KN=[{lovReferanse:"§§Dette er en lovreferanse",vilkarType:bs.FODSELSVILKARET_MOR,vilkarStatus:zn.OPPFYLT,overstyrbar:!0}],Ie={antallBarn:1,beregnetTilkjentYtelse:1e4},$N={title:"prosess/prosess-vedtak",component:ps,decorators:[Fd,Md],args:{vilkar:KN,previewCallback:ed("button-click")},render:e=>k.jsx(ps,{...e})},yt={args:{behandling:Te,beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER}},_t={args:{behandling:{...Te,status:we.AVSLUTTET},beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,isReadOnly:!0}},ct={args:{behandling:{...Te,status:we.AVSLUTTET,behandlingsresultat:{vedtaksbrev:"FRITEKST",overskrift:"Dette er en overskrift",fritekstbrev:"Dette er innholdet i brevet",type:Ne.INNVILGET}},beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,isReadOnly:!0}},pt={args:{behandling:{...Te,behandlingsresultat:{type:Ne.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,isReadOnly:!1}},Nt={args:{behandling:{...Te,status:we.AVSLUTTET,behandlingsresultat:{type:Ne.AVSLATT}},beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,isReadOnly:!0}},St={args:{behandling:Te,beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1}},ht={args:{behandling:{...Te,behandlingsresultat:{type:Ne.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1}},bt={args:{behandling:{...Te,aksjonspunkt:[...Ig,{definisjon:ke.VURDERE_ANNEN_YTELSE,status:Mr.OPPRETTET,begrunnelse:void 0,kanLoses:!1,toTrinnsBehandling:!0},{definisjon:ke.VURDERE_DOKUMENT,status:Mr.OPPRETTET,begrunnelse:void 0,kanLoses:!1},{definisjon:ke.VURDERE_INNTEKTSMELDING_KLAGE,status:Mr.OPPRETTET,begrunnelse:void 0,kanLoses:!1},{definisjon:ke.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,status:Mr.OPPRETTET,begrunnelse:void 0,kanLoses:!1,toTrinnsBehandling:!0}]},beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1}},It={args:{behandling:Te,beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:Z.ENGANGSSTONAD,isReadOnly:!1}},Ot={args:{behandling:{...Te,status:we.AVSLUTTET},beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:Z.ENGANGSSTONAD,isReadOnly:!0}},Lt={args:{behandling:Te,beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:Z.ENGANGSSTONAD,isReadOnly:!1}},Dt={args:{behandling:Te,beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:Z.ENGANGSSTONAD,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1}},Kt={args:{behandling:{...Te,behandlingsresultat:{type:Ne.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningresultatEngangsstonad:{antallBarn:2,beregnetTilkjentYtelse:1e4},ytelseTypeKode:Z.ENGANGSSTONAD,isReadOnly:!1}},Pt={args:{behandling:Te,ytelseTypeKode:Z.SVANGERSKAPSPENGER,isReadOnly:!1}},Ft={args:{behandling:{...Te,type:Ge.REVURDERING,behandlingsresultat:{type:Ne.INNVILGET,konsekvenserForYtelsen:[qe.ENDRING_I_BEREGNING_OG_UTTAK,qe.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,isReadOnly:!1}},Mt={args:{behandling:{...Te,type:Ge.REVURDERING,status:we.AVSLUTTET,behandlingsresultat:{type:Ne.INNVILGET,konsekvenserForYtelsen:[qe.ENDRING_I_BEREGNING_OG_UTTAK,qe.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,isReadOnly:!1}},Gt={args:{behandling:{...Te,type:Ge.REVURDERING,behandlingsresultat:{type:Ne.INNVILGET,konsekvenserForYtelsen:[qe.ENDRING_I_BEREGNING_OG_UTTAK,qe.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,isReadOnly:!1}},Vt={args:{behandling:{...Te,type:Ge.REVURDERING,status:we.AVSLUTTET,behandlingsresultat:{type:Ne.INNVILGET,konsekvenserForYtelsen:[qe.ENDRING_I_BEREGNING_OG_UTTAK,qe.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,isReadOnly:!0}},Ut={args:{behandling:{...Te,type:Ge.REVURDERING,status:we.AVSLUTTET,behandlingsresultat:{vedtaksbrev:"FRITEKST",overskrift:"Dette er en overskrift",fritekstbrev:"Dette er innholdet i brevet",type:Ne.INNVILGET,konsekvenserForYtelsen:[qe.FORELDREPENGER_OPPHORER]}},beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,isReadOnly:!0}},wt={args:{behandling:{...Te,type:Ge.REVURDERING,behandlingsresultat:{type:Ne.AVSLATT,avslagsarsakFritekst:"Dette er ein fritekst"}},beregningsresultatOriginalBehandling:{"beregningsresultat-foreldrepenger":{...Ie}},ytelseTypeKode:Z.FORELDREPENGER,isReadOnly:!1}},Bt={args:{behandling:{...Te,type:Ge.REVURDERING,status:we.AVSLUTTET,behandlingsresultat:{type:Ne.AVSLATT}},beregningsresultatOriginalBehandling:{"beregningsresultat-foreldrepenger":{...Ie}},ytelseTypeKode:Z.FORELDREPENGER,isReadOnly:!0}},jt={args:{behandling:{...Te,type:Ge.REVURDERING,behandlingsresultat:{type:Ne.OPPHOR,opphørsdato:"2024-11-01"}},beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,isReadOnly:!0}},Ht={args:{behandling:{...Te,type:Ge.REVURDERING,behandlingsresultat:{type:Ne.INNVILGET,konsekvenserForYtelsen:[qe.ENDRING_I_BEREGNING_OG_UTTAK]}},beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1}},Yt={args:{behandling:{...Te,type:Ge.REVURDERING,behandlingsresultat:{type:Ne.AVSLATT,konsekvenserForYtelsen:[qe.ENDRING_I_BEREGNING_OG_UTTAK],avslagsarsak:"1007"}},beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},vilkar:[{lovReferanse:"§§Dette er en lovreferanse",vilkarType:bs.SOKNADFRISTVILKARET,vilkarStatus:zn.IKKE_OPPFYLT,overstyrbar:!0}],isReadOnly:!1}},xt={args:{behandling:{...Te,type:Ge.REVURDERING,behandlingsresultat:{type:Ne.OPPHOR,opphørsdato:"2024-11-01"}},beregningresultatDagytelse:Ie,ytelseTypeKode:Z.FORELDREPENGER,beregningsgrunnlag:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:[{overstyrtPrAar:0}]}]},isReadOnly:!1}};var Ko,Po,Fo;yt.parameters={...yt.parameters,docs:{...(Ko=yt.parameters)==null?void 0:Ko.docs,source:{originalSource:`{
  args: {
    behandling: defaultBehandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER
  }
}`,...(Fo=(Po=yt.parameters)==null?void 0:Po.docs)==null?void 0:Fo.source}}};var Mo,Go,Vo;_t.parameters={..._t.parameters,docs:{...(Mo=_t.parameters)==null?void 0:Mo.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatus.AVSLUTTET
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    isReadOnly: true
  }
}`,...(Vo=(Go=_t.parameters)==null?void 0:Go.docs)==null?void 0:Vo.source}}};var Uo,wo,Bo;ct.parameters={...ct.parameters,docs:{...(Uo=ct.parameters)==null?void 0:Uo.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        vedtaksbrev: 'FRITEKST',
        overskrift: 'Dette er en overskrift',
        fritekstbrev: 'Dette er innholdet i brevet',
        type: BehandlingResultatType.INNVILGET
      }
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    isReadOnly: true
  }
}`,...(Bo=(wo=ct.parameters)==null?void 0:wo.docs)==null?void 0:Bo.source}}};var jo,Ho,Yo;pt.parameters={...pt.parameters,docs:{...(jo=pt.parameters)==null?void 0:jo.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        avslagsarsakFritekst: 'Dette er ein fritekst'
      }
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    isReadOnly: false
  }
}`,...(Yo=(Ho=pt.parameters)==null?void 0:Ho.docs)==null?void 0:Yo.source}}};var xo,qo,Co;Nt.parameters={...Nt.parameters,docs:{...(xo=Nt.parameters)==null?void 0:xo.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT
      }
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    isReadOnly: true
  }
}`,...(Co=(qo=Nt.parameters)==null?void 0:qo.docs)==null?void 0:Co.source}}};var $o,Jo,Wo;St.parameters={...St.parameters,docs:{...($o=St.parameters)==null?void 0:$o.docs,source:{originalSource:`{
  args: {
    behandling: defaultBehandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [{
        beregningsgrunnlagPrStatusOgAndel: [{
          overstyrtPrAar: 0
        }]
      }]
    } as Beregningsgrunnlag,
    isReadOnly: false
  }
}`,...(Wo=(Jo=St.parameters)==null?void 0:Jo.docs)==null?void 0:Wo.source}}};var zo,Zo,Xo;ht.parameters={...ht.parameters,docs:{...(zo=ht.parameters)==null?void 0:zo.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        avslagsarsakFritekst: 'Dette er ein fritekst'
      }
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [{
        beregningsgrunnlagPrStatusOgAndel: [{
          overstyrtPrAar: 0
        }]
      }]
    } as Beregningsgrunnlag,
    isReadOnly: false
  }
}`,...(Xo=(Zo=ht.parameters)==null?void 0:Zo.docs)==null?void 0:Xo.source}}};var Qo,el,rl;bt.parameters={...bt.parameters,docs:{...(Qo=bt.parameters)==null?void 0:Qo.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [...defaultAksjonspunkter, {
        definisjon: AksjonspunktKode.VURDERE_ANNEN_YTELSE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: false,
        toTrinnsBehandling: true
      }, {
        definisjon: AksjonspunktKode.VURDERE_DOKUMENT,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: false
      }, {
        definisjon: AksjonspunktKode.VURDERE_INNTEKTSMELDING_KLAGE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: false
      }, {
        definisjon: AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: false,
        toTrinnsBehandling: true
      }]
    },
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [{
        beregningsgrunnlagPrStatusOgAndel: [{
          overstyrtPrAar: 0
        }]
      }]
    } as Beregningsgrunnlag,
    isReadOnly: false
  }
}`,...(rl=(el=bt.parameters)==null?void 0:el.docs)==null?void 0:rl.source}}};var nl,tl,al;It.parameters={...It.parameters,docs:{...(nl=It.parameters)==null?void 0:nl.docs,source:{originalSource:`{
  args: {
    behandling: defaultBehandling,
    beregningresultatEngangsstonad: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000
    } as BeregningsresultatEs,
    ytelseTypeKode: FagsakYtelseType.ENGANGSSTONAD,
    isReadOnly: false
  }
}`,...(al=(tl=It.parameters)==null?void 0:tl.docs)==null?void 0:al.source}}};var sl,il,ol;Ot.parameters={...Ot.parameters,docs:{...(sl=Ot.parameters)==null?void 0:sl.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatus.AVSLUTTET
    },
    beregningresultatEngangsstonad: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000
    } as BeregningsresultatEs,
    ytelseTypeKode: FagsakYtelseType.ENGANGSSTONAD,
    isReadOnly: true
  }
}`,...(ol=(il=Ot.parameters)==null?void 0:il.docs)==null?void 0:ol.source}}};var ll,dl,ul;Lt.parameters={...Lt.parameters,docs:{...(ll=Lt.parameters)==null?void 0:ll.docs,source:{originalSource:`{
  args: {
    behandling: defaultBehandling,
    beregningresultatEngangsstonad: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000
    } as BeregningsresultatEs,
    ytelseTypeKode: FagsakYtelseType.ENGANGSSTONAD,
    isReadOnly: false
  }
}`,...(ul=(dl=Lt.parameters)==null?void 0:dl.docs)==null?void 0:ul.source}}};var gl,kl,El;Dt.parameters={...Dt.parameters,docs:{...(gl=Dt.parameters)==null?void 0:gl.docs,source:{originalSource:`{
  args: {
    behandling: defaultBehandling,
    beregningresultatEngangsstonad: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000
    } as BeregningsresultatEs,
    ytelseTypeKode: FagsakYtelseType.ENGANGSSTONAD,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [{
        beregningsgrunnlagPrStatusOgAndel: [{
          overstyrtPrAar: 0
        }]
      }]
    } as Beregningsgrunnlag,
    isReadOnly: false
  }
}`,...(El=(kl=Dt.parameters)==null?void 0:kl.docs)==null?void 0:El.source}}};var vl,ml,Tl;Kt.parameters={...Kt.parameters,docs:{...(vl=Kt.parameters)==null?void 0:vl.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        avslagsarsakFritekst: 'Dette er ein fritekst'
      }
    } as Behandling,
    beregningresultatEngangsstonad: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000
    } as BeregningsresultatEs,
    ytelseTypeKode: FagsakYtelseType.ENGANGSSTONAD,
    isReadOnly: false
  }
}`,...(Tl=(ml=Kt.parameters)==null?void 0:ml.docs)==null?void 0:Tl.source}}};var fl,Rl,Al;Pt.parameters={...Pt.parameters,docs:{...(fl=Pt.parameters)==null?void 0:fl.docs,source:{originalSource:`{
  args: {
    behandling: defaultBehandling,
    ytelseTypeKode: FagsakYtelseType.SVANGERSKAPSPENGER,
    isReadOnly: false
  }
}`,...(Al=(Rl=Pt.parameters)==null?void 0:Rl.docs)==null?void 0:Al.source}}};var yl,_l,cl;Ft.parameters={...Ft.parameters,docs:{...(yl=Ft.parameters)==null?void 0:yl.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [KonsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK, KonsekvensForYtelsen.FORELDREPENGER_OPPHORER]
      }
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    isReadOnly: false
  }
}`,...(cl=(_l=Ft.parameters)==null?void 0:_l.docs)==null?void 0:cl.source}}};var pl,Nl,Sl;Mt.parameters={...Mt.parameters,docs:{...(pl=Mt.parameters)==null?void 0:pl.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [KonsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK, KonsekvensForYtelsen.FORELDREPENGER_OPPHORER]
      }
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    isReadOnly: false
  }
}`,...(Sl=(Nl=Mt.parameters)==null?void 0:Nl.docs)==null?void 0:Sl.source}}};var hl,bl,Il;Gt.parameters={...Gt.parameters,docs:{...(hl=Gt.parameters)==null?void 0:hl.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [KonsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK, KonsekvensForYtelsen.FORELDREPENGER_OPPHORER]
      }
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    isReadOnly: false
  }
}`,...(Il=(bl=Gt.parameters)==null?void 0:bl.docs)==null?void 0:Il.source}}};var Ol,Ll,Dl;Vt.parameters={...Vt.parameters,docs:{...(Ol=Vt.parameters)==null?void 0:Ol.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [KonsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK, KonsekvensForYtelsen.FORELDREPENGER_OPPHORER]
      }
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    isReadOnly: true
  }
}`,...(Dl=(Ll=Vt.parameters)==null?void 0:Ll.docs)==null?void 0:Dl.source}}};var Kl,Pl,Fl;Ut.parameters={...Ut.parameters,docs:{...(Kl=Ut.parameters)==null?void 0:Kl.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        vedtaksbrev: 'FRITEKST',
        overskrift: 'Dette er en overskrift',
        fritekstbrev: 'Dette er innholdet i brevet',
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [KonsekvensForYtelsen.FORELDREPENGER_OPPHORER]
      }
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    isReadOnly: true
  }
}`,...(Fl=(Pl=Ut.parameters)==null?void 0:Pl.docs)==null?void 0:Fl.source}}};var Ml,Gl,Vl;wt.parameters={...wt.parameters,docs:{...(Ml=wt.parameters)==null?void 0:Ml.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        avslagsarsakFritekst: 'Dette er ein fritekst'
      }
    } as Behandling,
    beregningsresultatOriginalBehandling: {
      'beregningsresultat-foreldrepenger': {
        ...defaultberegningresultatDagytelse
      }
    },
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    isReadOnly: false
  }
}`,...(Vl=(Gl=wt.parameters)==null?void 0:Gl.docs)==null?void 0:Vl.source}}};var Ul,wl,Bl;Bt.parameters={...Bt.parameters,docs:{...(Ul=Bt.parameters)==null?void 0:Ul.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT
      }
    } as Behandling,
    beregningsresultatOriginalBehandling: {
      'beregningsresultat-foreldrepenger': {
        ...defaultberegningresultatDagytelse
      }
    },
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    isReadOnly: true
  }
}`,...(Bl=(wl=Bt.parameters)==null?void 0:wl.docs)==null?void 0:Bl.source}}};var jl,Hl,Yl;jt.parameters={...jt.parameters,docs:{...(jl=jt.parameters)==null?void 0:jl.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR,
        opphørsdato: '2024-11-01'
      }
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    isReadOnly: true
  }
}`,...(Yl=(Hl=jt.parameters)==null?void 0:Hl.docs)==null?void 0:Yl.source}}};var xl,ql,Cl;Ht.parameters={...Ht.parameters,docs:{...(xl=Ht.parameters)==null?void 0:xl.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [KonsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK]
      }
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [{
        beregningsgrunnlagPrStatusOgAndel: [{
          overstyrtPrAar: 0
        }]
      }]
    } as Beregningsgrunnlag,
    isReadOnly: false
  }
}`,...(Cl=(ql=Ht.parameters)==null?void 0:ql.docs)==null?void 0:Cl.source}}};var $l,Jl,Wl;Yt.parameters={...Yt.parameters,docs:{...($l=Yt.parameters)==null?void 0:$l.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        konsekvenserForYtelsen: [KonsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK],
        avslagsarsak: '1007'
      }
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [{
        beregningsgrunnlagPrStatusOgAndel: [{
          overstyrtPrAar: 0
        }]
      }]
    } as Beregningsgrunnlag,
    vilkar: [{
      lovReferanse: '§§Dette er en lovreferanse',
      vilkarType: VilkarType.SOKNADFRISTVILKARET,
      vilkarStatus: VilkarUtfallType.IKKE_OPPFYLT,
      overstyrbar: true
    }],
    isReadOnly: false
  }
}`,...(Wl=(Jl=Yt.parameters)==null?void 0:Jl.docs)==null?void 0:Wl.source}}};var zl,Zl,Xl;xt.parameters={...xt.parameters,docs:{...(zl=xt.parameters)==null?void 0:zl.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR,
        opphørsdato: '2024-11-01'
      }
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [{
        beregningsgrunnlagPrStatusOgAndel: [{
          overstyrtPrAar: 0
        }]
      }]
    } as Beregningsgrunnlag,
    isReadOnly: false
  }
}`,...(Xl=(Zl=xt.parameters)==null?void 0:Zl.docs)==null?void 0:Xl.source}}};const JN=["InnvilgetForeldrepengerTilGodkjenningForSaksbehandler","GodkjentForeldrepengerForSaksbehandler","GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring","AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring","GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring","InnvilgetForeldrepengerDerBeregningErManueltFastsatt","AvslåttForeldrepengerDerBeregningErManueltFastsatt","TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil","InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring","GodkjentEngangsstønadForSaksbehandlerUtenOverstyring","InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring","InnvilgetEngangsstønadDerBeregningErManueltFastsatt","AvslåttEngangsstønadDerBeregningErManueltFastsatt","InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring","InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring","GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring","InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring","GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring","GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring","AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring","GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring","OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring","InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt","AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt","OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt"];export{Kt as AvslåttEngangsstønadDerBeregningErManueltFastsatt,Yt as AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt,ht as AvslåttForeldrepengerDerBeregningErManueltFastsatt,pt as AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,wt as AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,Nt as GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring,Ot as GodkjentEngangsstønadForSaksbehandlerUtenOverstyring,_t as GodkjentForeldrepengerForSaksbehandler,ct as GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring,Bt as GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring,Vt as GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring,Mt as GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring,Ut as GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring,Dt as InnvilgetEngangsstønadDerBeregningErManueltFastsatt,Lt as InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring,It as InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring,Ht as InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt,St as InnvilgetForeldrepengerDerBeregningErManueltFastsatt,yt as InnvilgetForeldrepengerTilGodkjenningForSaksbehandler,Gt as InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,Ft as InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring,Pt as InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring,xt as OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt,jt as OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring,bt as TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil,JN as __namedExportsOrder,$N as default};
