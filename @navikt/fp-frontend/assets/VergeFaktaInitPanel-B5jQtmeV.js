import{r as _,l as A,j as s,bB as D,bC as O,bb as L}from"./iframe-CHIIULkI.js";import{Z as y}from"./index.es-Ch39j3js.js";import{u as P}from"./fagsakApi-DxgThHha.js";import{V}from"./BehandlingMenuIndex-DpGZ-a7t.js";import{A as F}from"./index-DYPpl1h6.js";import{u as G,c as b}from"./behandlingApi-BconnwEJ.js";import{u as d}from"./FagsakIndex-C1-7U2BC.js";import{G as M}from"./index.es-CLCgctPG.js";import{H as f}from"./VStack-fkaPRoOA.js";import{S as B}from"./ExclamationmarkTriangleFill-D6PXb7Li.js";import{e as T}from"./aksjonspunktUtils-Bp6ewLMR.js";import{e as q,g as U}from"./useStandardProsessPanelProps-DN2NKyXX.js";const j=a=>{const[l,e]=_.useState([]),t=r=>{e(i=>{const n=[...i],E=n.findIndex(u=>u.id===r.id);return E>=0?n.splice(E,1,r):n.push(r),n}),a?.(r.harÅpentAksjonspunkt?{urlCode:r.id,text:r.tekst}:void 0)};return{faktaPanelMenyData:l.filter(r=>r.skalVisesIMeny),settFaktaPanelMenyData:t}},w="_container_4o186_1",c="_content_4o186_6",h="_sideMenu_4o186_19",g={container:w,content:c,sideMenu:h},H=({valgtFaktaSteg:a,valgtProsessSteg:l,setFaktaPanelMedÅpentApInfo:e,children:t})=>{const r=A(),{oppdaterProsessStegOgFaktaPanelIUrl:i}=d(),{faktaPanelMenyData:n,settFaktaPanelMenyData:E}=j(e),u=n.length>0;return s.jsxs(f,{className:g.container,wrap:!1,children:[u&&s.jsx("div",{className:g.sideMenu,"data-testid":"fakta-meny",children:s.jsx(M,{heading:r.formatMessage({id:"FaktaMeny.FaktaOm"}),links:n.map(m=>({label:m.tekst,active:m.erAktiv,icon:m.harÅpentAksjonspunkt?s.jsx(B,{color:"var(--ax-warning-700)"}):void 0})),onClick:m=>{i(l,n[m].id)}})}),s.jsx("div",{className:g.content,children:s.jsx(J,{valgtFaktaSteg:a,settFaktaPanelMenyData:E,faktaPanelMenyData:n,children:t})})]})},N=_.createContext({}),J=a=>{const{children:l,...e}=a,t=_.useMemo(()=>e,[e]);return s.jsx(N.Provider,{value:t,children:l})};H.__docgenInfo={description:"",methods:[],displayName:"FaktaMeny",props:{valgtProsessSteg:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},valgtFaktaSteg:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},setFaktaPanelMedÅpentApInfo:{required:!1,tsType:{name:"signature",type:"function",raw:"(faktaPanelMedÅpentApInfo?: FaktaPanelMedÅpentApInfo) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  urlCode: string;
  text: string;
}`,signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},name:"faktaPanelMedÅpentApInfo"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const Y="default",C=(a,l,e,t)=>{const{valgtFaktaSteg:r,settFaktaPanelMenyData:i}=_.use(N),n=e&&(r===a||t&&r===Y);return _.useEffect(()=>{i({id:a,tekst:l,erAktiv:n,harÅpentAksjonspunkt:t,skalVisesIMeny:e})},[e,n,t]),e&&n},p=({standardPanelProps:a,skalPanelVisesIMeny:l,faktaPanelKode:e,faktaPanelMenyTekst:t,children:r})=>{const{behandling:i,fagsak:n,alleKodeverk:E}=d(),u=C(e,t,l,a.harÅpentAksjonspunkt);return s.jsx(D,{behandling:i,children:u?s.jsx(O,{behandling:i,fagsak:n,alleKodeverk:E,aksjonspunkterForPanel:a.aksjonspunkterForPanel,harÅpentAksjonspunkt:a.harÅpentAksjonspunkt,submitCallback:a.submitCallback,isReadOnly:a.isReadOnly,alleMerknaderFraBeslutter:a.alleMerknaderFraBeslutter,isSubmittable:a.isSubmittable,children:r}):null})};p.__docgenInfo={description:"",methods:[],displayName:"FaktaDefaultInitPanel",props:{standardPanelProps:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandling: T;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkterForPanel: Aksjonspunkt[];
  isReadOnly: boolean;
  isSubmittable: boolean;
  harÅpentAksjonspunkt: boolean;
  submitCallback: (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
}`,signature:{properties:[{key:"behandling",value:{name:"T",required:!0}},{key:"alleKodeverk",value:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<
    KodeverkType,
    'Avslagsårsak' | 'PeriodeResultatÅrsak'
  >]: KodeverkMedNavn<K extends KodeverkType ? K : unknown>[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringType;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  LineærAvslagsårsak: Avslagsarsak;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdÅrsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverføringÅrsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StønadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkårType;
  VirksomhetType: VirksomhetType;
  VurderÅrsak: VurderÅrsak;
  Inntektskategori: Inntektskategori;
}`,signature:{properties:[{key:"AdresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"union",raw:`| '-'
| 'UTDANNING'
| 'FORELDREPENGER'
| 'PERMITTERING'
| 'ANNEN_PERMISJON'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'ANNEN_PERMISJON'"}],required:!0}},{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Arbeidskategori",value:{name:"union",raw:`| 'FISKER'
| 'ARBEIDSTAKER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE'
| 'SJØMANN'
| 'JORDBRUKER'
| 'DAGPENGER'
| 'INAKTIV'
| 'KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER'
| 'KOMBINASJON_ARBEIDSTAKER_OG_FISKER'
| 'FRILANSER'
| 'KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER'
| 'KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER'
| 'DAGMAMMA'
| 'ANNET'`,elements:[{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'INAKTIV'"},{name:"literal",value:"'KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER'"},{name:"literal",value:"'KOMBINASJON_ARBEIDSTAKER_OG_FISKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER'"},{name:"literal",value:"'KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'ANNET'"}],required:!0}},{key:"ArbeidType",value:{name:"union",raw:`| 'ETTERLØNN_SLUTTPAKKE'
| 'FORENKLET_OPPGJØRSORDNING'
| 'FRILANSER'
| 'FRILANSER_OPPDRAGSTAKER'
| 'LØNN_UNDER_UTDANNING'
| 'MARITIMT_ARBEIDSFORHOLD'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'ORDINÆRT_ARBEIDSFORHOLD'
| 'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'
| 'NÆRING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'VANLIG'
| '-'`,elements:[{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FORENKLET_OPPGJØRSORDNING'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'FRILANSER_OPPDRAGSTAKER'"},{name:"literal",value:"'LØNN_UNDER_UTDANNING'"},{name:"literal",value:"'MARITIMT_ARBEIDSFORHOLD'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'ORDINÆRT_ARBEIDSFORHOLD'"},{name:"literal",value:"'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Avslagsårsak",value:{name:"union",raw:`| '1001'
| '1002'
| '1003'
| '1004'
| '1005'
| '1006'
| '1007'
| '1008'
| '1009'
| '1010'
| '1011'
| '1012'
| '1014'
| '1015'
| '1016'
| '1017'
| '1018'
| '1019'
| '1020'
| '1021'
| '1023'
| '1024'
| '1025'
| '1026'
| '1027'
| '1028'
| '1029'
| '1031'
| '1032'
| '1033'
| '1034'
| '1035'
| '1041'
| '1051'
| '1052'
| '1060'
| '1061'
| '1062'
| '1063'
| '1064'
| '1065'
| '1066'
| '1099'
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!1}},{key:"BehandlingResultatType",value:{name:"union",raw:`| 'IKKE_FASTSATT'
| 'INNVILGET'
| 'AVSLÅTT'
| 'OPPHØR'
| 'HENLAGT_SØKNAD_TRUKKET'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_BRUKER_DØD'
| 'MERGET_OG_HENLAGT'
| 'HENLAGT_SØKNAD_MANGLER'
| 'FORELDREPENGER_ENDRET'
| 'FORELDREPENGER_SENERE'
| 'INGEN_ENDRING'
| 'MANGLER_BEREGNINGSREGLER'
| 'KLAGE_AVVIST'
| 'KLAGE_MEDHOLD'
| 'KLAGE_DELVIS_MEDHOLD'
| 'KLAGE_OMGJORT_UGUNST'
| 'KLAGE_YTELSESVEDTAK_OPPHEVET'
| 'KLAGE_YTELSESVEDTAK_STADFESTET'
| 'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'
| 'HENLAGT_KLAGE_TRUKKET'
| 'HJEMSENDE_UTEN_OPPHEVE'
| 'ANKE_AVVIST'
| 'ANKE_MEDHOLD'
| 'ANKE_DELVIS_MEDHOLD'
| 'ANKE_OMGJORT_UGUNST'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_YTELSESVEDTAK_STADFESTET'
| 'HENLAGT_ANKE_TRUKKET'
| 'INNSYN_INNVILGET'
| 'INNSYN_DELVIS_INNVILGET'
| 'INNSYN_AVVIST'
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"BehandlingStatus",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"BehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingÅrsakType",value:{name:"union",raw:`| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FamilieHendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FaresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakStatus",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"FagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakMarkering",value:{name:"union",raw:`| 'EØS_BOSATT_NORGE'
| 'BOSATT_UTLAND'
| 'SAMMENSATT_KONTROLL'
| 'DØD_DØDFØDSEL'
| 'PRAKSIS_UTSETTELSE'
| 'BARE_FAR_RETT'
| 'SELVSTENDIG_NÆRING'
| 'HASTER'`,elements:[{name:"literal",value:"'EØS_BOSATT_NORGE'"},{name:"literal",value:"'BOSATT_UTLAND'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'DØD_DØDFØDSEL'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'SELVSTENDIG_NÆRING'"},{name:"literal",value:"'HASTER'"}],required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FarSøkerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FordelingPeriodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"ForeldreType",value:{name:"union",raw:"'MOR' | 'FAR' | 'MEDMOR' | 'ANDRE' | '-'",elements:[{name:"literal",value:"'MOR'"},{name:"literal",value:"'FAR'"},{name:"literal",value:"'MEDMOR'"},{name:"literal",value:"'ANDRE'"},{name:"literal",value:"'-'"}],required:!0}},{key:"HistorikkAktør",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"union",raw:`| '-'
| '4504'
| '4501'
| '4502'
| '4503'
| '4523'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'4504'"},{name:"literal",value:"'4501'"},{name:"literal",value:"'4502'"},{name:"literal",value:"'4503'"},{name:"literal",value:"'4523'"}],required:!0}},{key:"KlageHjemmel",value:{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!0}},{key:"KlageAvvistÅrsak",value:{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"KlageMedholdÅrsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"KonsekvensForYtelsen",value:{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Landkoder",value:{name:"union",raw:`| '???'
| 'ABW'
| 'AFG'
| 'AGO'
| 'AIA'
| 'ALA'
| 'ALB'
| 'AND'
| 'ANT'
| 'ARE'
| 'ARG'
| 'ARM'
| 'ASM'
| 'ATG'
| 'AUS'
| 'AUT'
| 'AZE'
| 'BDI'
| 'BEL'
| 'BEN'
| 'BES'
| 'BFA'
| 'BGD'
| 'BGR'
| 'BHR'
| 'BHS'
| 'BIH'
| 'BLM'
| 'BLR'
| 'BLZ'
| 'BMU'
| 'BOL'
| 'BRA'
| 'BRB'
| 'BRN'
| 'BTN'
| 'BVT'
| 'BWA'
| 'CAF'
| 'CAN'
| 'CCK'
| 'CHE'
| 'CHL'
| 'CHN'
| 'CIV'
| 'CMR'
| 'COD'
| 'COG'
| 'COK'
| 'COL'
| 'COM'
| 'CPV'
| 'CRI'
| 'CSK'
| 'CUB'
| 'CUW'
| 'CXR'
| 'CYM'
| 'CYP'
| 'CZE'
| 'DDR'
| 'DEU'
| 'DJI'
| 'DMA'
| 'DNK'
| 'DOM'
| 'DZA'
| 'ECU'
| 'EGY'
| 'ERI'
| 'ESH'
| 'ESP'
| 'EST'
| 'ETH'
| 'FIN'
| 'FJI'
| 'FLK'
| 'FRA'
| 'FRO'
| 'FSM'
| 'GAB'
| 'GBR'
| 'GEO'
| 'GGY'
| 'GHA'
| 'GIB'
| 'GIN'
| 'GLP'
| 'GMB'
| 'GNB'
| 'GNQ'
| 'GRC'
| 'GRD'
| 'GRL'
| 'GTM'
| 'GUF'
| 'GUM'
| 'GUY'
| 'HKG'
| 'HMD'
| 'HND'
| 'HRV'
| 'HTI'
| 'HUN'
| 'IDN'
| 'IMN'
| 'IND'
| 'IOT'
| 'IRL'
| 'IRN'
| 'IRQ'
| 'ISL'
| 'ISR'
| 'ITA'
| 'JAM'
| 'JEY'
| 'JOR'
| 'JPN'
| 'KAZ'
| 'KEN'
| 'KGZ'
| 'KHM'
| 'KIR'
| 'KNA'
| 'KOR'
| 'KWT'
| 'LAO'
| 'LBN'
| 'LBR'
| 'LBY'
| 'LCA'
| 'LIE'
| 'LKA'
| 'LSO'
| 'LTU'
| 'LUX'
| 'LVA'
| 'MAC'
| 'MAF'
| 'MAR'
| 'MCO'
| 'MDA'
| 'MDG'
| 'MDV'
| 'MEX'
| 'MHL'
| 'MKD'
| 'MLI'
| 'MLT'
| 'MMR'
| 'MNE'
| 'MNG'
| 'MNP'
| 'MOZ'
| 'MRT'
| 'MSR'
| 'MTQ'
| 'MUS'
| 'MWI'
| 'MYS'
| 'MYT'
| 'NAM'
| 'NCL'
| 'NER'
| 'NFK'
| 'NGA'
| 'NIC'
| 'NIU'
| 'NLD'
| 'NOR'
| 'NPL'
| 'NRU'
| 'NZL'
| 'OMN'
| 'PAK'
| 'PAN'
| 'PCN'
| 'PER'
| 'PHL'
| 'PLW'
| 'PNG'
| 'POL'
| 'PRI'
| 'PRK'
| 'PRT'
| 'PRY'
| 'PSE'
| 'PYF'
| 'QAT'
| 'REU'
| 'ROU'
| 'RUS'
| 'RWA'
| 'SAU'
| 'SCG'
| 'SDN'
| 'SEN'
| 'SGP'
| 'SGS'
| 'SHN'
| 'SJM'
| 'SLB'
| 'SLE'
| 'SLV'
| 'SMR'
| 'SOM'
| 'SPM'
| 'SRB'
| 'SSD'
| 'STP'
| 'SUN'
| 'SUR'
| 'SVK'
| 'SVN'
| 'SWE'
| 'SWZ'
| 'SXM'
| 'SYC'
| 'SYR'
| 'TCA'
| 'TCD'
| 'TGO'
| 'THA'
| 'TJK'
| 'TKL'
| 'TKM'
| 'TLS'
| 'TON'
| 'TTO'
| 'TUN'
| 'TUR'
| 'TUV'
| 'TWN'
| 'TZA'
| 'UGA'
| 'UKR'
| 'UMI'
| 'URY'
| 'USA'
| 'UZB'
| 'VAT'
| 'VCT'
| 'VEN'
| 'VGB'
| 'VIR'
| 'VNM'
| 'VUT'
| 'WLF'
| 'WSM'
| 'XUK'
| 'XXK'
| 'XXX'
| 'YEM'
| 'YUG'
| 'ZAF'
| 'ZMB'
| 'ZWE'
| '-'`,elements:[{name:"literal",value:"'???'"},{name:"literal",value:"'ABW'"},{name:"literal",value:"'AFG'"},{name:"literal",value:"'AGO'"},{name:"literal",value:"'AIA'"},{name:"literal",value:"'ALA'"},{name:"literal",value:"'ALB'"},{name:"literal",value:"'AND'"},{name:"literal",value:"'ANT'"},{name:"literal",value:"'ARE'"},{name:"literal",value:"'ARG'"},{name:"literal",value:"'ARM'"},{name:"literal",value:"'ASM'"},{name:"literal",value:"'ATG'"},{name:"literal",value:"'AUS'"},{name:"literal",value:"'AUT'"},{name:"literal",value:"'AZE'"},{name:"literal",value:"'BDI'"},{name:"literal",value:"'BEL'"},{name:"literal",value:"'BEN'"},{name:"literal",value:"'BES'"},{name:"literal",value:"'BFA'"},{name:"literal",value:"'BGD'"},{name:"literal",value:"'BGR'"},{name:"literal",value:"'BHR'"},{name:"literal",value:"'BHS'"},{name:"literal",value:"'BIH'"},{name:"literal",value:"'BLM'"},{name:"literal",value:"'BLR'"},{name:"literal",value:"'BLZ'"},{name:"literal",value:"'BMU'"},{name:"literal",value:"'BOL'"},{name:"literal",value:"'BRA'"},{name:"literal",value:"'BRB'"},{name:"literal",value:"'BRN'"},{name:"literal",value:"'BTN'"},{name:"literal",value:"'BVT'"},{name:"literal",value:"'BWA'"},{name:"literal",value:"'CAF'"},{name:"literal",value:"'CAN'"},{name:"literal",value:"'CCK'"},{name:"literal",value:"'CHE'"},{name:"literal",value:"'CHL'"},{name:"literal",value:"'CHN'"},{name:"literal",value:"'CIV'"},{name:"literal",value:"'CMR'"},{name:"literal",value:"'COD'"},{name:"literal",value:"'COG'"},{name:"literal",value:"'COK'"},{name:"literal",value:"'COL'"},{name:"literal",value:"'COM'"},{name:"literal",value:"'CPV'"},{name:"literal",value:"'CRI'"},{name:"literal",value:"'CSK'"},{name:"literal",value:"'CUB'"},{name:"literal",value:"'CUW'"},{name:"literal",value:"'CXR'"},{name:"literal",value:"'CYM'"},{name:"literal",value:"'CYP'"},{name:"literal",value:"'CZE'"},{name:"literal",value:"'DDR'"},{name:"literal",value:"'DEU'"},{name:"literal",value:"'DJI'"},{name:"literal",value:"'DMA'"},{name:"literal",value:"'DNK'"},{name:"literal",value:"'DOM'"},{name:"literal",value:"'DZA'"},{name:"literal",value:"'ECU'"},{name:"literal",value:"'EGY'"},{name:"literal",value:"'ERI'"},{name:"literal",value:"'ESH'"},{name:"literal",value:"'ESP'"},{name:"literal",value:"'EST'"},{name:"literal",value:"'ETH'"},{name:"literal",value:"'FIN'"},{name:"literal",value:"'FJI'"},{name:"literal",value:"'FLK'"},{name:"literal",value:"'FRA'"},{name:"literal",value:"'FRO'"},{name:"literal",value:"'FSM'"},{name:"literal",value:"'GAB'"},{name:"literal",value:"'GBR'"},{name:"literal",value:"'GEO'"},{name:"literal",value:"'GGY'"},{name:"literal",value:"'GHA'"},{name:"literal",value:"'GIB'"},{name:"literal",value:"'GIN'"},{name:"literal",value:"'GLP'"},{name:"literal",value:"'GMB'"},{name:"literal",value:"'GNB'"},{name:"literal",value:"'GNQ'"},{name:"literal",value:"'GRC'"},{name:"literal",value:"'GRD'"},{name:"literal",value:"'GRL'"},{name:"literal",value:"'GTM'"},{name:"literal",value:"'GUF'"},{name:"literal",value:"'GUM'"},{name:"literal",value:"'GUY'"},{name:"literal",value:"'HKG'"},{name:"literal",value:"'HMD'"},{name:"literal",value:"'HND'"},{name:"literal",value:"'HRV'"},{name:"literal",value:"'HTI'"},{name:"literal",value:"'HUN'"},{name:"literal",value:"'IDN'"},{name:"literal",value:"'IMN'"},{name:"literal",value:"'IND'"},{name:"literal",value:"'IOT'"},{name:"literal",value:"'IRL'"},{name:"literal",value:"'IRN'"},{name:"literal",value:"'IRQ'"},{name:"literal",value:"'ISL'"},{name:"literal",value:"'ISR'"},{name:"literal",value:"'ITA'"},{name:"literal",value:"'JAM'"},{name:"literal",value:"'JEY'"},{name:"literal",value:"'JOR'"},{name:"literal",value:"'JPN'"},{name:"literal",value:"'KAZ'"},{name:"literal",value:"'KEN'"},{name:"literal",value:"'KGZ'"},{name:"literal",value:"'KHM'"},{name:"literal",value:"'KIR'"},{name:"literal",value:"'KNA'"},{name:"literal",value:"'KOR'"},{name:"literal",value:"'KWT'"},{name:"literal",value:"'LAO'"},{name:"literal",value:"'LBN'"},{name:"literal",value:"'LBR'"},{name:"literal",value:"'LBY'"},{name:"literal",value:"'LCA'"},{name:"literal",value:"'LIE'"},{name:"literal",value:"'LKA'"},{name:"literal",value:"'LSO'"},{name:"literal",value:"'LTU'"},{name:"literal",value:"'LUX'"},{name:"literal",value:"'LVA'"},{name:"literal",value:"'MAC'"},{name:"literal",value:"'MAF'"},{name:"literal",value:"'MAR'"},{name:"literal",value:"'MCO'"},{name:"literal",value:"'MDA'"},{name:"literal",value:"'MDG'"},{name:"literal",value:"'MDV'"},{name:"literal",value:"'MEX'"},{name:"literal",value:"'MHL'"},{name:"literal",value:"'MKD'"},{name:"literal",value:"'MLI'"},{name:"literal",value:"'MLT'"},{name:"literal",value:"'MMR'"},{name:"literal",value:"'MNE'"},{name:"literal",value:"'MNG'"},{name:"literal",value:"'MNP'"},{name:"literal",value:"'MOZ'"},{name:"literal",value:"'MRT'"},{name:"literal",value:"'MSR'"},{name:"literal",value:"'MTQ'"},{name:"literal",value:"'MUS'"},{name:"literal",value:"'MWI'"},{name:"literal",value:"'MYS'"},{name:"literal",value:"'MYT'"},{name:"literal",value:"'NAM'"},{name:"literal",value:"'NCL'"},{name:"literal",value:"'NER'"},{name:"literal",value:"'NFK'"},{name:"literal",value:"'NGA'"},{name:"literal",value:"'NIC'"},{name:"literal",value:"'NIU'"},{name:"literal",value:"'NLD'"},{name:"literal",value:"'NOR'"},{name:"literal",value:"'NPL'"},{name:"literal",value:"'NRU'"},{name:"literal",value:"'NZL'"},{name:"literal",value:"'OMN'"},{name:"literal",value:"'PAK'"},{name:"literal",value:"'PAN'"},{name:"literal",value:"'PCN'"},{name:"literal",value:"'PER'"},{name:"literal",value:"'PHL'"},{name:"literal",value:"'PLW'"},{name:"literal",value:"'PNG'"},{name:"literal",value:"'POL'"},{name:"literal",value:"'PRI'"},{name:"literal",value:"'PRK'"},{name:"literal",value:"'PRT'"},{name:"literal",value:"'PRY'"},{name:"literal",value:"'PSE'"},{name:"literal",value:"'PYF'"},{name:"literal",value:"'QAT'"},{name:"literal",value:"'REU'"},{name:"literal",value:"'ROU'"},{name:"literal",value:"'RUS'"},{name:"literal",value:"'RWA'"},{name:"literal",value:"'SAU'"},{name:"literal",value:"'SCG'"},{name:"literal",value:"'SDN'"},{name:"literal",value:"'SEN'"},{name:"literal",value:"'SGP'"},{name:"literal",value:"'SGS'"},{name:"literal",value:"'SHN'"},{name:"literal",value:"'SJM'"},{name:"literal",value:"'SLB'"},{name:"literal",value:"'SLE'"},{name:"literal",value:"'SLV'"},{name:"literal",value:"'SMR'"},{name:"literal",value:"'SOM'"},{name:"literal",value:"'SPM'"},{name:"literal",value:"'SRB'"},{name:"literal",value:"'SSD'"},{name:"literal",value:"'STP'"},{name:"literal",value:"'SUN'"},{name:"literal",value:"'SUR'"},{name:"literal",value:"'SVK'"},{name:"literal",value:"'SVN'"},{name:"literal",value:"'SWE'"},{name:"literal",value:"'SWZ'"},{name:"literal",value:"'SXM'"},{name:"literal",value:"'SYC'"},{name:"literal",value:"'SYR'"},{name:"literal",value:"'TCA'"},{name:"literal",value:"'TCD'"},{name:"literal",value:"'TGO'"},{name:"literal",value:"'THA'"},{name:"literal",value:"'TJK'"},{name:"literal",value:"'TKL'"},{name:"literal",value:"'TKM'"},{name:"literal",value:"'TLS'"},{name:"literal",value:"'TON'"},{name:"literal",value:"'TTO'"},{name:"literal",value:"'TUN'"},{name:"literal",value:"'TUR'"},{name:"literal",value:"'TUV'"},{name:"literal",value:"'TWN'"},{name:"literal",value:"'TZA'"},{name:"literal",value:"'UGA'"},{name:"literal",value:"'UKR'"},{name:"literal",value:"'UMI'"},{name:"literal",value:"'URY'"},{name:"literal",value:"'USA'"},{name:"literal",value:"'UZB'"},{name:"literal",value:"'VAT'"},{name:"literal",value:"'VCT'"},{name:"literal",value:"'VEN'"},{name:"literal",value:"'VGB'"},{name:"literal",value:"'VIR'"},{name:"literal",value:"'VNM'"},{name:"literal",value:"'VUT'"},{name:"literal",value:"'WLF'"},{name:"literal",value:"'WSM'"},{name:"literal",value:"'XUK'"},{name:"literal",value:"'XXK'"},{name:"literal",value:"'XXX'"},{name:"literal",value:"'YEM'"},{name:"literal",value:"'YUG'"},{name:"literal",value:"'ZAF'"},{name:"literal",value:"'ZMB'"},{name:"literal",value:"'ZWE'"},{name:"literal",value:"'-'"}],required:!0}},{key:"LineærAvslagsårsak",value:{name:"union",raw:`| '1001'
| '1002'
| '1003'
| '1004'
| '1005'
| '1006'
| '1007'
| '1008'
| '1009'
| '1010'
| '1011'
| '1012'
| '1014'
| '1015'
| '1016'
| '1017'
| '1018'
| '1019'
| '1020'
| '1021'
| '1023'
| '1024'
| '1025'
| '1026'
| '1027'
| '1028'
| '1029'
| '1031'
| '1032'
| '1033'
| '1034'
| '1035'
| '1041'
| '1051'
| '1052'
| '1060'
| '1061'
| '1062'
| '1063'
| '1064'
| '1065'
| '1066'
| '1099'
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!1}},{key:"ManuellBehandlingÅrsak",value:{name:"union",raw:`| '-'
| '5001'
| '5002'
| '5003'
| '5004'
| '5005'
| '5006'
| '5007'
| '5009'
| '5010'
| '5011'
| '5012'
| '5014'
| '5016'
| '5018'
| '5019'
| '5024'
| '5025'
| '5026'
| '5027'
| '5028'
| '5029'
| '5030'
| '5031'
| '5032'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'5001'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5009'"},{name:"literal",value:"'5010'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5018'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5032'"}],required:!0}},{key:"MedlemskapDekningType",value:{name:"union",raw:`| 'FTL_2_6'
| 'FTL_2_7_a'
| 'FTL_2_7_b'
| 'FTL_2_9_1_a'
| 'FTL_2_9_1_b'
| 'FTL_2_9_1_c'
| 'FTL_2_9_2_a'
| 'FTL_2_9_2_c'
| 'FULL'
| 'IHT_AVTALE'
| 'OPPHOR'
| 'UNNTATT'
| '-'`,elements:[{name:"literal",value:"'FTL_2_6'"},{name:"literal",value:"'FTL_2_7_a'"},{name:"literal",value:"'FTL_2_7_b'"},{name:"literal",value:"'FTL_2_9_1_a'"},{name:"literal",value:"'FTL_2_9_1_b'"},{name:"literal",value:"'FTL_2_9_1_c'"},{name:"literal",value:"'FTL_2_9_2_a'"},{name:"literal",value:"'FTL_2_9_2_c'"},{name:"literal",value:"'FULL'"},{name:"literal",value:"'IHT_AVTALE'"},{name:"literal",value:"'OPPHOR'"},{name:"literal",value:"'UNNTATT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"union",raw:`| '-'
| 'MEDLEM'
| 'UNNTAK'
| 'IKKE_RELEVANT'
| 'OPPHOR_PGA_ENDRING_I_TPS'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'MEDLEM'"},{name:"literal",value:"'UNNTAK'"},{name:"literal",value:"'IKKE_RELEVANT'"},{name:"literal",value:"'OPPHOR_PGA_ENDRING_I_TPS'"}],required:!0}},{key:"MedlemskapType",value:{name:"union",raw:`| 'ENDELIG'
| 'FORELOPIG'
| 'AVKLARES'
| '-'`,elements:[{name:"literal",value:"'ENDELIG'"},{name:"literal",value:"'FORELOPIG'"},{name:"literal",value:"'AVKLARES'"},{name:"literal",value:"'-'"}],required:!0}},{key:"MorsAktivitet",value:{name:"union",raw:`| '-'
| 'ARBEID'
| 'UTDANNING'
| 'KVALPROG'
| 'INTROPROG'
| 'TRENGER_HJELP'
| 'INNLAGT'
| 'ARBEID_OG_UTDANNING'
| 'UFØRE'
| 'IKKE_OPPGITT'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'KVALPROG'"},{name:"literal",value:"'INTROPROG'"},{name:"literal",value:"'TRENGER_HJELP'"},{name:"literal",value:"'INNLAGT'"},{name:"literal",value:"'ARBEID_OG_UTDANNING'"},{name:"literal",value:"'UFØRE'"},{name:"literal",value:"'IKKE_OPPGITT'"}],required:!1}},{key:"NaturalYtelseType",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"InnsynResultatType",value:{name:"union",raw:"'INNV' | 'DELV' | 'AVVIST' | '-'",elements:[{name:"literal",value:"'INNV'"},{name:"literal",value:"'DELV'"},{name:"literal",value:"'AVVIST'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_4'
| 'FP_VK_8'
| 'FP_VK_5'
| 'FP_VK_33'
| 'FP_VK_16'
| 'FP_VK_8F'
| 'FP_VK_16S'
| '-'`,elements:[{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_8F'"},{name:"literal",value:"'FP_VK_16S'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OppholdÅrsak",value:{name:"union",raw:`| '-'
| 'UTTAK_MØDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FEDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FELLESP_ANNEN_FORELDER'
| 'UTTAK_FORELDREPENGER_ANNEN_FORELDER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTTAK_MØDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FEDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FELLESP_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FORELDREPENGER_ANNEN_FORELDER'"}],required:!1}},{key:"OppgaveType",value:{name:"union",raw:"'VUR_KONSEKVENS' | 'VUR_DOKUMENT'",elements:[{name:"literal",value:"'VUR_KONSEKVENS'"},{name:"literal",value:"'VUR_DOKUMENT'"}],required:!0}},{key:"OppholdstillatelseType",value:{name:"union",raw:"'MIDLERTIDIG' | 'PERMANENT' | '-'",elements:[{name:"literal",value:"'MIDLERTIDIG'"},{name:"literal",value:"'PERMANENT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OpptjeningAktivitetType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'FRISINN'
| 'ETTERLØNN_SLUTTPAKKE'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VENTELØNN_VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'UTDANNINGSPERMISJON'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OverføringÅrsak",value:{name:"union",raw:`| 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'
| 'SYKDOM_ANNEN_FORELDER'
| 'IKKE_RETT_ANNEN_FORELDER'
| 'ALENEOMSORG'
| '-'`,elements:[{name:"literal",value:"'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'IKKE_RETT_ANNEN_FORELDER'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'-'"}],required:!1}},{key:"PermisjonsbeskrivelseType",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"union",raw:`| '-'
| '2002'
| '2003'
| '2004'
| '2005'
| '2006'
| '2007'
| '2010'
| '2011'
| '2012'
| '2013'
| '2014'
| '2015'
| '2016'
| '2017'
| '2018'
| '2019'
| '2020'
| '2021'
| '2022'
| '2023'
| '2024'
| '2025'
| '2026'
| '2027'
| '2028'
| '2030'
| '2031'
| '2032'
| '2033'
| '2034'
| '2035'
| '2036'
| '2037'
| '2038'
| '2039'
| '4002'
| '4003'
| '4005'
| '4007'
| '4008'
| '4012'
| '4013'
| '4020'
| '4022'
| '4023'
| '4025'
| '4030'
| '4031'
| '4032'
| '4033'
| '4034'
| '4035'
| '4037'
| '4038'
| '4039'
| '4040'
| '4041'
| '4050'
| '4051'
| '4052'
| '4053'
| '4054'
| '4055'
| '4056'
| '4057'
| '4058'
| '4059'
| '4060'
| '4061'
| '4062'
| '4063'
| '4064'
| '4065'
| '4066'
| '4067'
| '4068'
| '4069'
| '4070'
| '4071'
| '4072'
| '4073'
| '4074'
| '4075'
| '4076'
| '4077'
| '4081'
| '4082'
| '4084'
| '4085'
| '4086'
| '4087'
| '4088'
| '4089'
| '4092'
| '4093'
| '4095'
| '4096'
| '4097'
| '4098'
| '4099'
| '4100'
| '4102'
| '4103'
| '4104'
| '4105'
| '4106'
| '4107'
| '4108'
| '4110'
| '4111'
| '4112'
| '4115'
| '4116'
| '4117'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'2002'"},{name:"literal",value:"'2003'"},{name:"literal",value:"'2004'"},{name:"literal",value:"'2005'"},{name:"literal",value:"'2006'"},{name:"literal",value:"'2007'"},{name:"literal",value:"'2010'"},{name:"literal",value:"'2011'"},{name:"literal",value:"'2012'"},{name:"literal",value:"'2013'"},{name:"literal",value:"'2014'"},{name:"literal",value:"'2015'"},{name:"literal",value:"'2016'"},{name:"literal",value:"'2017'"},{name:"literal",value:"'2018'"},{name:"literal",value:"'2019'"},{name:"literal",value:"'2020'"},{name:"literal",value:"'2021'"},{name:"literal",value:"'2022'"},{name:"literal",value:"'2023'"},{name:"literal",value:"'2024'"},{name:"literal",value:"'2025'"},{name:"literal",value:"'2026'"},{name:"literal",value:"'2027'"},{name:"literal",value:"'2028'"},{name:"literal",value:"'2030'"},{name:"literal",value:"'2031'"},{name:"literal",value:"'2032'"},{name:"literal",value:"'2033'"},{name:"literal",value:"'2034'"},{name:"literal",value:"'2035'"},{name:"literal",value:"'2036'"},{name:"literal",value:"'2037'"},{name:"literal",value:"'2038'"},{name:"literal",value:"'2039'"},{name:"literal",value:"'4002'"},{name:"literal",value:"'4003'"},{name:"literal",value:"'4005'"},{name:"literal",value:"'4007'"},{name:"literal",value:"'4008'"},{name:"literal",value:"'4012'"},{name:"literal",value:"'4013'"},{name:"literal",value:"'4020'"},{name:"literal",value:"'4022'"},{name:"literal",value:"'4023'"},{name:"literal",value:"'4025'"},{name:"literal",value:"'4030'"},{name:"literal",value:"'4031'"},{name:"literal",value:"'4032'"},{name:"literal",value:"'4033'"},{name:"literal",value:"'4034'"},{name:"literal",value:"'4035'"},{name:"literal",value:"'4037'"},{name:"literal",value:"'4038'"},{name:"literal",value:"'4039'"},{name:"literal",value:"'4040'"},{name:"literal",value:"'4041'"},{name:"literal",value:"'4050'"},{name:"literal",value:"'4051'"},{name:"literal",value:"'4052'"},{name:"literal",value:"'4053'"},{name:"literal",value:"'4054'"},{name:"literal",value:"'4055'"},{name:"literal",value:"'4056'"},{name:"literal",value:"'4057'"},{name:"literal",value:"'4058'"},{name:"literal",value:"'4059'"},{name:"literal",value:"'4060'"},{name:"literal",value:"'4061'"},{name:"literal",value:"'4062'"},{name:"literal",value:"'4063'"},{name:"literal",value:"'4064'"},{name:"literal",value:"'4065'"},{name:"literal",value:"'4066'"},{name:"literal",value:"'4067'"},{name:"literal",value:"'4068'"},{name:"literal",value:"'4069'"},{name:"literal",value:"'4070'"},{name:"literal",value:"'4071'"},{name:"literal",value:"'4072'"},{name:"literal",value:"'4073'"},{name:"literal",value:"'4074'"},{name:"literal",value:"'4075'"},{name:"literal",value:"'4076'"},{name:"literal",value:"'4077'"},{name:"literal",value:"'4081'"},{name:"literal",value:"'4082'"},{name:"literal",value:"'4084'"},{name:"literal",value:"'4085'"},{name:"literal",value:"'4086'"},{name:"literal",value:"'4087'"},{name:"literal",value:"'4088'"},{name:"literal",value:"'4089'"},{name:"literal",value:"'4092'"},{name:"literal",value:"'4093'"},{name:"literal",value:"'4095'"},{name:"literal",value:"'4096'"},{name:"literal",value:"'4097'"},{name:"literal",value:"'4098'"},{name:"literal",value:"'4099'"},{name:"literal",value:"'4100'"},{name:"literal",value:"'4102'"},{name:"literal",value:"'4103'"},{name:"literal",value:"'4104'"},{name:"literal",value:"'4105'"},{name:"literal",value:"'4106'"},{name:"literal",value:"'4107'"},{name:"literal",value:"'4108'"},{name:"literal",value:"'4110'"},{name:"literal",value:"'4111'"},{name:"literal",value:"'4112'"},{name:"literal",value:"'4115'"},{name:"literal",value:"'4116'"},{name:"literal",value:"'4117'"}],required:!0}},{key:"PersonstatusType",value:{name:"union",raw:`| 'ADNR'
| 'BOSA'
| 'DØD'
| 'FOSV'
| 'FØDR'
| 'UREG'
| 'UTPE'
| 'UTVA'
| '-'`,elements:[{name:"literal",value:"'ADNR'"},{name:"literal",value:"'BOSA'"},{name:"literal",value:"'DØD'"},{name:"literal",value:"'FOSV'"},{name:"literal",value:"'FØDR'"},{name:"literal",value:"'UREG'"},{name:"literal",value:"'UTPE'"},{name:"literal",value:"'UTVA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Region",value:{name:"union",raw:"'NORDEN' | 'EOS' | 'ANNET' | '-'",elements:[{name:"literal",value:"'NORDEN'"},{name:"literal",value:"'EOS'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}},{key:"RelasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"union",raw:`| 'BARNIKKEREG'
| 'JOBBFULLTID'
| 'IKKEOPPTJENT'
| 'UTVANDRET'
| 'JOBBUTLAND'
| 'IKKEOPPHOLD'
| 'JOBB6MND'
| 'AKTIVITET'
| 'ANNET'`,elements:[{name:"literal",value:"'BARNIKKEREG'"},{name:"literal",value:"'JOBBFULLTID'"},{name:"literal",value:"'IKKEOPPTJENT'"},{name:"literal",value:"'UTVANDRET'"},{name:"literal",value:"'JOBBUTLAND'"},{name:"literal",value:"'IKKEOPPHOLD'"},{name:"literal",value:"'JOBB6MND'"},{name:"literal",value:"'AKTIVITET'"},{name:"literal",value:"'ANNET'"}],required:!0}},{key:"SivilstandType",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}},{key:"SkjermlenkeType",value:{name:"union",raw:`| 'ANKE_MERKNADER'
| 'ANKE_VURDERING'
| 'BEREGNING_ENGANGSSTOENAD'
| 'BEREGNING_FORELDREPENGER'
| 'BESTEBEREGNING'
| 'FAKTA_FOR_OMSORG'
| 'FAKTA_FOR_OPPTJENING'
| 'FAKTA_OM_ADOPSJON'
| 'FAKTA_OM_ARBEIDSFORHOLD'
| 'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING'
| 'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON'
| 'FAKTA_OM_BEREGNING'
| 'FAKTA_OM_FOEDSEL'
| 'FAKTA_OM_OMSORGSOVERTAKELSE'
| 'FAKTA_OM_FORDELING'
| 'FAKTA_OM_MEDLEMSKAP'
| 'FAKTA_OM_OMSORG_OG_FORELDREANSVAR'
| 'FAKTA_OM_OPPTJENING'
| 'FAKTA_OM_SIMULERING'
| 'FAKTA_OM_UTTAK'
| 'FAKTA_OM_AKTIVITETSKRAV'
| 'FAKTA_OMSORG_OG_RETT'
| 'FAKTA_OM_VERGE'
| 'FORMKRAV_KLAGE_KA'
| 'FORMKRAV_KLAGE_NFP'
| 'KLAGE_BEH_NFP'
| 'KLAGE_BEH_NK'
| 'KONTROLL_AV_SAKSOPPLYSNINGER'
| 'OPPLYSNINGSPLIKT'
| 'PUNKT_FOR_ADOPSJON'
| 'PUNKT_FOR_FOEDSEL'
| 'PUNKT_FOR_FORELDREANSVAR'
| 'PUNKT_FOR_MEDLEMSKAP'
| 'PUNKT_FOR_MEDLEMSKAP_LØPENDE'
| 'PUNKT_FOR_OMSORG'
| 'PUNKT_FOR_OPPTJENING'
| 'PUNKT_FOR_SVANGERSKAPSPENGER'
| 'PUNKT_FOR_SVP_INNGANG'
| 'SOEKNADSFRIST'
| 'TILKJENT_YTELSE'
| '-'
| 'UTLAND'
| 'UTTAK'
| 'VEDTAK'
| 'VURDER_FARESIGNALER'
| 'FAKTA_OM_UTTAK_DOKUMENTASJON'
| 'FAKTA_UTTAK'
| 'FAKTA_UTTAK_EØS'`,elements:[{name:"literal",value:"'ANKE_MERKNADER'"},{name:"literal",value:"'ANKE_VURDERING'"},{name:"literal",value:"'BEREGNING_ENGANGSSTOENAD'"},{name:"literal",value:"'BEREGNING_FORELDREPENGER'"},{name:"literal",value:"'BESTEBEREGNING'"},{name:"literal",value:"'FAKTA_FOR_OMSORG'"},{name:"literal",value:"'FAKTA_FOR_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_ADOPSJON'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON'"},{name:"literal",value:"'FAKTA_OM_BEREGNING'"},{name:"literal",value:"'FAKTA_OM_FOEDSEL'"},{name:"literal",value:"'FAKTA_OM_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'FAKTA_OM_FORDELING'"},{name:"literal",value:"'FAKTA_OM_MEDLEMSKAP'"},{name:"literal",value:"'FAKTA_OM_OMSORG_OG_FORELDREANSVAR'"},{name:"literal",value:"'FAKTA_OM_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_SIMULERING'"},{name:"literal",value:"'FAKTA_OM_UTTAK'"},{name:"literal",value:"'FAKTA_OM_AKTIVITETSKRAV'"},{name:"literal",value:"'FAKTA_OMSORG_OG_RETT'"},{name:"literal",value:"'FAKTA_OM_VERGE'"},{name:"literal",value:"'FORMKRAV_KLAGE_KA'"},{name:"literal",value:"'FORMKRAV_KLAGE_NFP'"},{name:"literal",value:"'KLAGE_BEH_NFP'"},{name:"literal",value:"'KLAGE_BEH_NK'"},{name:"literal",value:"'KONTROLL_AV_SAKSOPPLYSNINGER'"},{name:"literal",value:"'OPPLYSNINGSPLIKT'"},{name:"literal",value:"'PUNKT_FOR_ADOPSJON'"},{name:"literal",value:"'PUNKT_FOR_FOEDSEL'"},{name:"literal",value:"'PUNKT_FOR_FORELDREANSVAR'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP_LØPENDE'"},{name:"literal",value:"'PUNKT_FOR_OMSORG'"},{name:"literal",value:"'PUNKT_FOR_OPPTJENING'"},{name:"literal",value:"'PUNKT_FOR_SVANGERSKAPSPENGER'"},{name:"literal",value:"'PUNKT_FOR_SVP_INNGANG'"},{name:"literal",value:"'SOEKNADSFRIST'"},{name:"literal",value:"'TILKJENT_YTELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'UTLAND'"},{name:"literal",value:"'UTTAK'"},{name:"literal",value:"'VEDTAK'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'FAKTA_OM_UTTAK_DOKUMENTASJON'"},{name:"literal",value:"'FAKTA_UTTAK'"},{name:"literal",value:"'FAKTA_UTTAK_EØS'"}],required:!0}},{key:"StønadskontoType",value:{name:"union",raw:`| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FELLESPERIODE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| 'FLERBARNSDAGER'
| 'UTEN_AKTIVITETSKRAV'
| 'MINSTERETT_NESTE_STØNADSPERIODE'
| 'MINSTERETT'`,elements:[{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'FLERBARNSDAGER'"},{name:"literal",value:"'UTEN_AKTIVITETSKRAV'"},{name:"literal",value:"'MINSTERETT_NESTE_STØNADSPERIODE'"},{name:"literal",value:"'MINSTERETT'"}],required:!0}},{key:"UtsettelseÅrsak",value:{name:"union",raw:`| 'ARBEID'
| 'LOVBESTEMT_FERIE'
| 'SYKDOM'
| 'INSTITUSJONSOPPHOLD_SØKER'
| 'INSTITUSJONSOPPHOLD_BARNET'
| 'HV_OVELSE'
| 'NAV_TILTAK'
| 'FRI'
| '-'`,elements:[{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'LOVBESTEMT_FERIE'"},{name:"literal",value:"'SYKDOM'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_SØKER'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_BARNET'"},{name:"literal",value:"'HV_OVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'FRI'"},{name:"literal",value:"'-'"}],required:!1}},{key:"UttakArbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"UttakPeriodeType",value:{name:"union",raw:`| 'FELLESPERIODE'
| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| '-'`,elements:[{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"UttakUtsettelseType",value:{name:"union",raw:`| 'ARBEID'
| 'FERIE'
| 'SYKDOM_SKADE'
| 'SØKER_INNLAGT'
| 'BARN_INNLAGT'
| 'HV_OVELSE'
| 'NAV_TILTAK'
| 'FRI'
| '-'`,elements:[{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'FERIE'"},{name:"literal",value:"'SYKDOM_SKADE'"},{name:"literal",value:"'SØKER_INNLAGT'"},{name:"literal",value:"'BARN_INNLAGT'"},{name:"literal",value:"'HV_OVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'FRI'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Venteårsak",value:{name:"union",raw:`| '-'
| 'AVV_DOK'
| 'AVV_FODSEL'
| 'FOR_TIDLIG_SOKNAD'
| 'SCANN'
| 'UTV_FRIST'
| 'VENT_PÅ_BRUKERTILBAKEMELDING'
| 'VENT_UTLAND_TRYGD'
| 'VENT_INNTEKT_RAPPORTERINGSFRIST'
| 'VENT_MANGLENDE_SYKEMELDING'
| 'VENT_OPDT_INNTEKTSMELDING'
| 'VENT_OPPTJENING_OPPLYSNINGER'
| 'VENT_PÅ_SISTE_AAP_MELDEKORT'
| 'VENT_SØKNAD_SENDT_INFORMASJONSBREV'
| 'VENT_ÅPEN_BEHANDLING'
| 'VENT_KABAL'
| 'ANKE_OVERSENDT_TIL_TRYGDERETTEN'
| 'ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER'
| 'AVV_RESPONS_REVURDERING'
| 'VENT_TIDLIGERE_BEHANDLING'
| 'AAP_DP_SISTE_10_MND_SVP'
| 'AAP_DP_ENESTE_AKTIVITET_SVP'
| 'DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP'
| 'FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP'
| 'FL_SN_IKKE_STOTTET_FOR_SVP'
| 'GRADERING_FLERE_ARBEIDSFORHOLD'
| 'OPPD_ÅPEN_BEH'
| 'REFUSJON_3_MÅNEDER'
| 'VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER'
| 'VENT_BEREGNING_TILBAKE_I_TID'
| 'VENT_DEKGRAD_REGEL'
| 'VENT_DØDFØDSEL_80P_DEKNINGSGRAD'
| 'VENT_FEIL_ENDRINGSSØKNAD'
| 'VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG'
| 'VENT_INFOTRYGD'
| 'VENT_MANGLENDE_ARBEIDSFORHOLD'
| 'VENT_MILITÆR_OG_BG_UNDER_3G'
| 'ULIKE_STARTDATOER_SVP'
| 'VENT_LOVENDRING_8_41'
| 'VENT_PÅ_KORRIGERT_BESTEBEREGNING'
| 'VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID'
| 'VENT_REGISTERINNHENTING'
| 'VENT_ØKONOMI'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'AVV_DOK'"},{name:"literal",value:"'AVV_FODSEL'"},{name:"literal",value:"'FOR_TIDLIG_SOKNAD'"},{name:"literal",value:"'SCANN'"},{name:"literal",value:"'UTV_FRIST'"},{name:"literal",value:"'VENT_PÅ_BRUKERTILBAKEMELDING'"},{name:"literal",value:"'VENT_UTLAND_TRYGD'"},{name:"literal",value:"'VENT_INNTEKT_RAPPORTERINGSFRIST'"},{name:"literal",value:"'VENT_MANGLENDE_SYKEMELDING'"},{name:"literal",value:"'VENT_OPDT_INNTEKTSMELDING'"},{name:"literal",value:"'VENT_OPPTJENING_OPPLYSNINGER'"},{name:"literal",value:"'VENT_PÅ_SISTE_AAP_MELDEKORT'"},{name:"literal",value:"'VENT_SØKNAD_SENDT_INFORMASJONSBREV'"},{name:"literal",value:"'VENT_ÅPEN_BEHANDLING'"},{name:"literal",value:"'VENT_KABAL'"},{name:"literal",value:"'ANKE_OVERSENDT_TIL_TRYGDERETTEN'"},{name:"literal",value:"'ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER'"},{name:"literal",value:"'AVV_RESPONS_REVURDERING'"},{name:"literal",value:"'VENT_TIDLIGERE_BEHANDLING'"},{name:"literal",value:"'AAP_DP_SISTE_10_MND_SVP'"},{name:"literal",value:"'AAP_DP_ENESTE_AKTIVITET_SVP'"},{name:"literal",value:"'DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP'"},{name:"literal",value:"'FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP'"},{name:"literal",value:"'FL_SN_IKKE_STOTTET_FOR_SVP'"},{name:"literal",value:"'GRADERING_FLERE_ARBEIDSFORHOLD'"},{name:"literal",value:"'OPPD_ÅPEN_BEH'"},{name:"literal",value:"'REFUSJON_3_MÅNEDER'"},{name:"literal",value:"'VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER'"},{name:"literal",value:"'VENT_BEREGNING_TILBAKE_I_TID'"},{name:"literal",value:"'VENT_DEKGRAD_REGEL'"},{name:"literal",value:"'VENT_DØDFØDSEL_80P_DEKNINGSGRAD'"},{name:"literal",value:"'VENT_FEIL_ENDRINGSSØKNAD'"},{name:"literal",value:"'VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'VENT_INFOTRYGD'"},{name:"literal",value:"'VENT_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENT_MILITÆR_OG_BG_UNDER_3G'"},{name:"literal",value:"'ULIKE_STARTDATOER_SVP'"},{name:"literal",value:"'VENT_LOVENDRING_8_41'"},{name:"literal",value:"'VENT_PÅ_KORRIGERT_BESTEBEREGNING'"},{name:"literal",value:"'VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID'"},{name:"literal",value:"'VENT_REGISTERINNHENTING'"},{name:"literal",value:"'VENT_ØKONOMI'"}],required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
| 'FBARN'
| 'VOKSEN'
| 'ADVOKAT'
| 'ANNEN_F'`,elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_6'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_6'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"VirksomhetType",value:{name:"union",raw:`| 'DAGMAMMA'
| 'FISKE'
| 'FRILANSER'
| 'JORDBRUK_SKOGBRUK'
| 'ANNEN'
| '-'`,elements:[{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'FISKE'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'JORDBRUK_SKOGBRUK'"},{name:"literal",value:"'ANNEN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"VurderÅrsak",value:{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}],required:!0}},{key:"Inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"}]}],raw:`Exclude<
  KodeverkType,
  'Avslagsårsak' | 'PeriodeResultatÅrsak'
>`,required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<K extends KodeverkType ? K : unknown>[]"}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"union",raw:"VilkårType | '-'",elements:[{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_6'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_6'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0},{name:"literal",value:"'-'"}]},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkårType | '-', KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}],required:!0}},{key:"alleMerknaderFraBeslutter",value:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"aksjonspunkterForPanel",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  begrunnelse?: string;
  besluttersBegrunnelse?: string;
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  endretAv?: string;
  endretTidspunkt?: string;
  erAktivt: boolean;
  fristTid?: string;
  kanLoses: boolean;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
}`,signature:{properties:[{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5018'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6019'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| 'UNDEFINED'
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5069'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5018'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:"'UNDEFINED'"},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_6'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_6'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}],required:!0}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"isReadOnly",value:{name:"boolean",required:!0}},{key:"isSubmittable",value:{name:"boolean",required:!0}},{key:"harÅpentAksjonspunkt",value:{name:"boolean",required:!0}},{key:"submitCallback",value:{name:"signature",type:"function",raw:"(aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>",signature:{arguments:[{type:{name:"union",raw:"FaktaAksjonspunkt | FaktaAksjonspunkt[]",elements:[{name:"union",raw:`| AvklarVergeAp
| MerkOpptjeningUtlandAp
| BeregningAp
| AvklarAktivitetsPerioderAp
| BekreftEktefelleAksjonspunktAp
| BekreftDokumentertDatoAksjonspunktAp
| BekreftMannAdoptererAksjonspunktAp
| BekreftAleneomsorgVurderingAp
| ManuellKontrollBesteberegningAP
| VurderOmsorgsovertakelseVilkåretAp
| VurderMedlemskapAp
| BekreftSvangerskapspengerAp
| VurderForutgaendeMedlemskapAp
| BekreftOmsorgVurderingAp
| BekreftBosattVurderingAp
| BekreftErMedlemVurderingAp
| BekreftOppholdsrettVurderingAp
| BekreftLovligOppholdVurderingAp
| AvklarFortsattMedlemskapAp
| SjekkTerminbekreftelseAp
| SjekkManglendeFødselAp
| OverstyringFaktaFødselAp
| AvklarAnnenforelderHarRettAp
| BekreftUttaksperioderAp
| OverstyringAvklarStartdatoForPeriodenAp
| AvklarFaktaForForeldreansvarAksjonspunktAp
| KontrollerBesteberegningAP
| OverstyrBeregningsaktiviteterAP
| BeregningFaktaAP
| BeregningOverstyringAP
| FordelBeregningsgrunnlagAP
| VurderRefusjonBeregningsgrunnlagAP
| AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp
| VurderArbeidsforholdInntektsmeldingAp
| VurderDokumentasjonAp
| VurderArbeidsforholdPermisjonAp
| OverstyringDekningsgradAp
| OverstyringRettigheterAp
| BekreftAnnenpartsUttakEøsAp
| AvklarDekningsgradAp
| AvklartFaktaFeilutbetalingAp`,elements:[{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: string;
  organisasjonsnummer?: string;
  fnr?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VERGE>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: string;
  organisasjonsnummer?: string;
  fnr?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!0}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  dokStatus?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK>`,elements:[{name:"signature",type:"object",raw:`{
  dokStatus?: string;
}`,signature:{properties:[{key:"dokStatus",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`BeregningFaktaAP['grunnlag'][number] & {
  fakta: BeregningFaktaAP['grunnlag'][number]['fakta'];
  overstyrteAndeler?: BeregningFaktaAP['grunnlag'][number]['overstyrteAndeler'];
} & AksjonspunktTilBekreftelse<
    | AksjonspunktKode.AVKLAR_AKTIVITETER
    | AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER
    | AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN
    | AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG
  >`,elements:[{name:"BeregningFaktaAP['grunnlag'][number]",raw:"BeregningFaktaAP['grunnlag'][number]"},{name:"signature",type:"object",raw:`{
  fakta: BeregningFaktaAP['grunnlag'][number]['fakta'];
  overstyrteAndeler?: BeregningFaktaAP['grunnlag'][number]['overstyrteAndeler'];
}`,signature:{properties:[{key:"fakta",value:{name:"BeregningFaktaAP['grunnlag'][number]['fakta']",raw:"BeregningFaktaAP['grunnlag'][number]['fakta']",required:!0}},{key:"overstyrteAndeler",value:{name:"BeregningFaktaAP['grunnlag'][number]['overstyrteAndeler']",raw:"BeregningFaktaAP['grunnlag'][number]['overstyrteAndeler']",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  opptjeningsaktiviteter?: OpptjeningAktivitetAp[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING>`,elements:[{name:"signature",type:"object",raw:`{
  opptjeningsaktiviteter?: OpptjeningAktivitetAp[];
}`,signature:{properties:[{key:"opptjeningsaktiviteter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  arbeidsforholdRef?: string;
  erGodkjent: boolean;
  begrunnelse: string;
  aktivitetType: string;
  opptjeningFom: string;
  opptjeningTom: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"arbeidsforholdRef",value:{name:"string",required:!1}},{key:"erGodkjent",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"aktivitetType",value:{name:"string",required:!0}},{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}}]}}],raw:"OpptjeningAktivitetAp[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  ektefellesBarn: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN>`,elements:[{name:"signature",type:"object",raw:`{
  ektefellesBarn: boolean;
}`,signature:{properties:[{key:"ektefellesBarn",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  omsorgsovertakelseDato: string;
  fodselsdatoer: Record<number, string>;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_ADOPSJONSDOKUMENTAJON>`,elements:[{name:"signature",type:"object",raw:`{
  omsorgsovertakelseDato: string;
  fodselsdatoer: Record<number, string>;
}`,signature:{properties:[{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  mannAdoptererAlene: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OM_SØKER_ER_MANN_SOM_ADOPTERER_ALENE>`,elements:[{name:"signature",type:"object",raw:`{
  mannAdoptererAlene: boolean;
}`,signature:{properties:[{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  aleneomsorg: boolean;
  annenforelderHarRett?: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenForelderHarRettEØS?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG>`,elements:[{name:"signature",type:"object",raw:`{
  aleneomsorg: boolean;
  annenforelderHarRett?: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenForelderHarRettEØS?: boolean;
}`,signature:{properties:[{key:"aleneomsorg",value:{name:"boolean",required:!0}},{key:"annenforelderHarRett",value:{name:"boolean",required:!1}},{key:"annenforelderMottarUføretrygd",value:{name:"boolean",required:!1}},{key:"annenForelderHarRettEØS",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING>`,elements:[{name:"signature",type:"object",raw:`{
  besteberegningErKorrekt: boolean;
}`,signature:{properties:[{key:"besteberegningErKorrekt",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  avslagskode?: Avslagsarsak;
  delvilkår: OmsorgsovertakelseVilkårType;
  omsorgsovertakelseDato: string;
  barn: { fødselsdato: string; barnNummer: number }[];
  ektefellesBarn: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET>`,elements:[{name:"signature",type:"object",raw:`{
  avslagskode?: Avslagsarsak;
  delvilkår: OmsorgsovertakelseVilkårType;
  omsorgsovertakelseDato: string;
  barn: { fødselsdato: string; barnNummer: number }[];
  ektefellesBarn: boolean;
}`,signature:{properties:[{key:"avslagskode",value:{name:"union",raw:`| '1001'
| '1002'
| '1003'
| '1004'
| '1005'
| '1006'
| '1007'
| '1008'
| '1009'
| '1010'
| '1011'
| '1012'
| '1014'
| '1015'
| '1016'
| '1017'
| '1018'
| '1019'
| '1020'
| '1021'
| '1023'
| '1024'
| '1025'
| '1026'
| '1027'
| '1028'
| '1029'
| '1031'
| '1032'
| '1033'
| '1034'
| '1035'
| '1041'
| '1051'
| '1052'
| '1060'
| '1061'
| '1062'
| '1063'
| '1064'
| '1065'
| '1066'
| '1099'
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!1}},{key:"delvilkår",value:{name:"union",raw:`| 'FP_VK_4'
| 'FP_VK_8'
| 'FP_VK_5'
| 'FP_VK_33'
| 'FP_VK_16'
| 'FP_VK_8F'
| 'FP_VK_16S'
| '-'`,elements:[{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_8F'"},{name:"literal",value:"'FP_VK_16S'"},{name:"literal",value:"'-'"}],required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ fødselsdato: string; barnNummer: number }",signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!0}},{key:"barnNummer",value:{name:"number",required:!0}}]}}],raw:"{ fødselsdato: string; barnNummer: number }[]",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  avslagskode?: string;
  opphørFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET>`,elements:[{name:"signature",type:"object",raw:`{
  avslagskode?: string;
  opphørFom?: string;
}`,signature:{properties:[{key:"avslagskode",value:{name:"string",required:!1}},{key:"opphørFom",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  termindato: string;
  fødselsdato?: string;
  bekreftetSvpArbeidsforholdList: ArbeidsforholdFodselOgTilrettelegging[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_SVP_TILRETTELEGGING>`,elements:[{name:"signature",type:"object",raw:`{
  termindato: string;
  fødselsdato?: string;
  bekreftetSvpArbeidsforholdList: ArbeidsforholdFodselOgTilrettelegging[];
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}},{key:"bekreftetSvpArbeidsforholdList",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  avklarteOppholdPerioder: Array<tjenester_behandling_svp_SvpAvklartOppholdPeriodeDto>;
  begrunnelse?: string;
  eksternArbeidsforholdReferanse?: string;
  internArbeidsforholdReferanse?: string;
  kanTilrettelegges: boolean;
  kopiertFraTidligereBehandling?: boolean;
  mottattTidspunkt?: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  skalBrukes: boolean;
  stillingsprosentStartTilrettelegging?: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: Array<tjenester_behandling_svp_SvpTilretteleggingDatoDto>;
  tilretteleggingId: number;
  uttakArbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  velferdspermisjoner: Array<tjenester_behandling_svp_VelferdspermisjonDto>;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  forVisning?: boolean;
  oppholdKilde?: tjenester_behandling_svp_SvpAvklartOppholdPeriodeDto_SvpOppholdKilde;
  oppholdÅrsak: foreldrepenger_behandlingslager_behandling_tilrettelegging_SvpOppholdÅrsak;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"forVisning",value:{name:"boolean",required:!1}},{key:"oppholdKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'INNTEKTSMELDING'
| 'REGISTRERT_AV_SAKSBEHANDLER'
| 'TIDLIGERE_VEDTAK'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:"'SYKEPENGER' | 'FERIE'",elements:[{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'FERIE'"}],required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_svp_SvpAvklartOppholdPeriodeDto>",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"kopiertFraTidligereBehandling",value:{name:"boolean",required:!1}},{key:"mottattTidspunkt",value:{name:"string",required:!1}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!1}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  kilde: foreldrepenger_behandlingslager_behandling_tilrettelegging_SvpTilretteleggingFomKilde;
  mottattDato?: string;
  overstyrtUtbetalingsgrad?: number;
  stillingsprosent?: number;
  type: foreldrepenger_behandlingslager_behandling_tilrettelegging_TilretteleggingType;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"kilde",value:{name:"union",raw:`| 'ENDRET_AV_SAKSBEHANDLER'
| 'REGISTRERT_AV_SAKSBEHANDLER'
| 'TIDLIGERE_VEDTAK'
| 'SØKNAD'`,elements:[{name:"literal",value:"'ENDRET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'SØKNAD'"}],required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"type",value:{name:"union",raw:`| 'HEL_TILRETTELEGGING'
| 'DELVIS_TILRETTELEGGING'
| 'INGEN_TILRETTELEGGING'`,elements:[{name:"literal",value:"'HEL_TILRETTELEGGING'"},{name:"literal",value:"'DELVIS_TILRETTELEGGING'"},{name:"literal",value:"'INGEN_TILRETTELEGGING'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_svp_SvpTilretteleggingDatoDto>",required:!0}},{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"uttakArbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erGyldig?: boolean;
  permisjonFom: string;
  permisjonTom?: string;
  permisjonsprosent: number;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
}`,signature:{properties:[{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_svp_VelferdspermisjonDto>",required:!0}}]}}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  avslagskode?: string;
  medlemFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR>`,elements:[{name:"signature",type:"object",raw:`{
  avslagskode?: string;
  medlemFom?: string;
}`,signature:{properties:[{key:"avslagskode",value:{name:"string",required:!1}},{key:"medlemFom",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  omsorg: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_LØPENDE_OMSORG>`,elements:[{name:"signature",type:"object",raw:`{
  omsorg: boolean;
}`,signature:{properties:[{key:"omsorg",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_5020>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"union",raw:`| '-'
| 'MEDLEM'
| 'UNNTAK'
| 'IKKE_RELEVANT'
| 'OPPHOR_PGA_ENDRING_I_TPS'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'MEDLEM'"},{name:"literal",value:"'UNNTAK'"},{name:"literal",value:"'IKKE_RELEVANT'"},{name:"literal",value:"'OPPHOR_PGA_ENDRING_I_TPS'"}],required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_5021>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"union",raw:`| '-'
| 'MEDLEM'
| 'UNNTAK'
| 'IKKE_RELEVANT'
| 'OPPHOR_PGA_ENDRING_I_TPS'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'MEDLEM'"},{name:"literal",value:"'UNNTAK'"},{name:"literal",value:"'IKKE_RELEVANT'"},{name:"literal",value:"'OPPHOR_PGA_ENDRING_I_TPS'"}],required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_5023>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"union",raw:`| '-'
| 'MEDLEM'
| 'UNNTAK'
| 'IKKE_RELEVANT'
| 'OPPHOR_PGA_ENDRING_I_TPS'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'MEDLEM'"},{name:"literal",value:"'UNNTAK'"},{name:"literal",value:"'IKKE_RELEVANT'"},{name:"literal",value:"'OPPHOR_PGA_ENDRING_I_TPS'"}],required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_5019>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"union",raw:`| '-'
| 'MEDLEM'
| 'UNNTAK'
| 'IKKE_RELEVANT'
| 'OPPHOR_PGA_ENDRING_I_TPS'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'MEDLEM'"},{name:"literal",value:"'UNNTAK'"},{name:"literal",value:"'IKKE_RELEVANT'"},{name:"literal",value:"'OPPHOR_PGA_ENDRING_I_TPS'"}],required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_5053>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"union",raw:`| '-'
| 'MEDLEM'
| 'UNNTAK'
| 'IKKE_RELEVANT'
| 'OPPHOR_PGA_ENDRING_I_TPS'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'MEDLEM'"},{name:"literal",value:"'UNNTAK'"},{name:"literal",value:"'IKKE_RELEVANT'"},{name:"literal",value:"'OPPHOR_PGA_ENDRING_I_TPS'"}],required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  utstedtdato: string;
  termindato: string | null;
  antallBarn: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SJEKK_TERMINBEKREFTELSE>`,elements:[{name:"signature",type:"object",raw:`{
  utstedtdato: string;
  termindato: string | null;
  antallBarn: number;
}`,signature:{properties:[{key:"utstedtdato",value:{name:"string",required:!0}},{key:"termindato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  termindato: string | null;
  barn:
    | {
        fødselsdato: string;
        dødsdato?: string;
      }[]
    | null;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL>`,elements:[{name:"signature",type:"object",raw:`{
  termindato: string | null;
  barn:
    | {
        fødselsdato: string;
        dødsdato?: string;
      }[]
    | null;
}`,signature:{properties:[{key:"termindato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"barn",value:{name:"union",raw:`| {
    fødselsdato: string;
    dødsdato?: string;
  }[]
| null`,elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fødselsdato: string;
  dødsdato?: string;
}`,signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}}]}}],raw:`{
  fødselsdato: string;
  dødsdato?: string;
}[]`},{name:"null"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  termindato: string | null;
  barn:
    | {
        fødselsdato: string;
        dødsdato?: string;
      }[]
    | null;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL>`,elements:[{name:"signature",type:"object",raw:`{
  termindato: string | null;
  barn:
    | {
        fødselsdato: string;
        dødsdato?: string;
      }[]
    | null;
}`,signature:{properties:[{key:"termindato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"barn",value:{name:"union",raw:`| {
    fødselsdato: string;
    dødsdato?: string;
  }[]
| null`,elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fødselsdato: string;
  dødsdato?: string;
}`,signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}}]}}],raw:`{
  fødselsdato: string;
  dødsdato?: string;
}[]`},{name:"null"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  annenforelderHarRett: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenForelderHarRettEØS?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_FAKTA_ANNEN_FORELDER_HAR_RETT>`,elements:[{name:"signature",type:"object",raw:`{
  annenforelderHarRett: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenForelderHarRettEØS?: boolean;
}`,signature:{properties:[{key:"annenforelderHarRett",value:{name:"boolean",required:!0}},{key:"annenforelderMottarUføretrygd",value:{name:"boolean",required:!1}},{key:"annenForelderHarRettEØS",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  perioder: KontrollerFaktaPeriode[];
} & AksjonspunktTilBekreftelse<
  | AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO
  | AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER
  | AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET
  | AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG
  | AksjonspunktKode.OVERSTYRING_FAKTA_UTTAK
>`,elements:[{name:"signature",type:"object",raw:`{
  perioder: KontrollerFaktaPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: tjenester_behandling_uttak_dto_ArbeidsforholdDto;
  arbeidstidsprosent?: number;
  begrunnelse?: string;
  flerbarnsdager?: boolean;
  fom: string;
  morsAktivitet?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_MorsAktivitet;
  oppholdÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OppholdÅrsak;
  overføringÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OverføringÅrsak;
  periodeKilde: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_FordelingPeriodeKilde;
  samtidigUttaksprosent?: number;
  tom: string;
  utsettelseÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_UtsettelseÅrsak;
  uttakPeriodeType?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"signature",type:"object",raw:`{
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
}`,signature:{properties:[{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}}]},required:!1}},{key:"arbeidstidsprosent",value:{name:"number",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"morsAktivitet",value:{name:"union",raw:`| '-'
| 'ARBEID'
| 'UTDANNING'
| 'KVALPROG'
| 'INTROPROG'
| 'TRENGER_HJELP'
| 'INNLAGT'
| 'ARBEID_OG_UTDANNING'
| 'UFØRE'
| 'IKKE_OPPGITT'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'KVALPROG'"},{name:"literal",value:"'INTROPROG'"},{name:"literal",value:"'TRENGER_HJELP'"},{name:"literal",value:"'INNLAGT'"},{name:"literal",value:"'ARBEID_OG_UTDANNING'"},{name:"literal",value:"'UFØRE'"},{name:"literal",value:"'IKKE_OPPGITT'"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:`| '-'
| 'UTTAK_MØDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FEDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FELLESP_ANNEN_FORELDER'
| 'UTTAK_FORELDREPENGER_ANNEN_FORELDER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTTAK_MØDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FEDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FELLESP_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FORELDREPENGER_ANNEN_FORELDER'"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:`| 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'
| 'SYKDOM_ANNEN_FORELDER'
| 'IKKE_RETT_ANNEN_FORELDER'
| 'ALENEOMSORG'
| '-'`,elements:[{name:"literal",value:"'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'IKKE_RETT_ANNEN_FORELDER'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'-'"}],required:!1}},{key:"periodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"utsettelseÅrsak",value:{name:"union",raw:`| 'ARBEID'
| 'LOVBESTEMT_FERIE'
| 'SYKDOM'
| 'INSTITUSJONSOPPHOLD_SØKER'
| 'INSTITUSJONSOPPHOLD_BARNET'
| 'HV_OVELSE'
| 'NAV_TILTAK'
| 'FRI'
| '-'`,elements:[{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'LOVBESTEMT_FERIE'"},{name:"literal",value:"'SYKDOM'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_SØKER'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_BARNET'"},{name:"literal",value:"'HV_OVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'FRI'"},{name:"literal",value:"'-'"}],required:!1}},{key:"uttakPeriodeType",value:{name:"union",raw:`| 'FELLESPERIODE'
| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| '-'`,elements:[{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"KontrollerFaktaPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  startdatoFraSoknad: string;
  opprinneligDato?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_AVKLART_STARTDATO>`,elements:[{name:"signature",type:"object",raw:`{
  startdatoFraSoknad: string;
  opprinneligDato?: string;
}`,signature:{properties:[{key:"startdatoFraSoknad",value:{name:"string",required:!0}},{key:"opprinneligDato",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  omsorgsovertakelseDato: string;
  foreldreansvarDato: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VILKÅR_FOR_FORELDREANSVAR>`,elements:[{name:"signature",type:"object",raw:`{
  omsorgsovertakelseDato: string;
  foreldreansvarDato: string;
}`,signature:{properties:[{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_5048>`,elements:[{name:"signature",type:"object",raw:`{
  besteberegningErKorrekt: boolean;
}`,signature:{properties:[{key:"besteberegningErKorrekt",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"OverstyrBeregningsaktiviteterAP"},{name:"BeregningFaktaAP"},{name:"BeregningOverstyringAP"},{name:"FordelBeregningsgrunnlagAP"},{name:"VurderRefusjonBeregningsgrunnlagAP"},{name:"intersection",raw:`{
  omsorgsovertakelseDato: string;
  vilkarType: VilkårType;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE>`,elements:[{name:"signature",type:"object",raw:`{
  omsorgsovertakelseDato: string;
  vilkarType: VilkårType;
}`,signature:{properties:[{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_6'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_6'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},{name:"intersection",raw:`{
  vurderingBehov: DokumentasjonVurderingBehov[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON>`,elements:[{name:"signature",type:"object",raw:`{
  vurderingBehov: DokumentasjonVurderingBehov[];
}`,signature:{properties:[{key:"vurderingBehov",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetskravGrunnlag?: Array<tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_AktivitetskravGrunnlagArbeid>;
  fom: string;
  morsStillingsprosent?: number;
  tom: string;
  type: foreldrepenger_domene_uttak_fakta_uttak_DokumentasjonVurderingBehov_Behov_Type;
  vurdering?: tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_Vurdering;
  årsak: foreldrepenger_domene_uttak_fakta_uttak_DokumentasjonVurderingBehov_Behov_Årsak;
}`,signature:{properties:[{key:"aktivitetskravGrunnlag",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  orgNummer: string;
  permisjon: tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_Permisjon;
  stillingsprosent: number;
}`,signature:{properties:[{key:"orgNummer",value:{name:"string",required:!0}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  prosent: number;
  type: foreldrepenger_behandlingslager_behandling_aktivitetskrav_AktivitetskravPermisjonType;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| '-'
| 'UTDANNING'
| 'FORELDREPENGER'
| 'PERMITTERING'
| 'ANNEN_PERMISJON'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'ANNEN_PERMISJON'"}],required:!0}}]},required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}}]}}],raw:"Array<tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_AktivitetskravGrunnlagArbeid>",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"morsStillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:`| 'UTSETTELSE'
| 'OVERFØRING'
| 'UTTAK'`,elements:[{name:"literal",value:"'UTSETTELSE'"},{name:"literal",value:"'OVERFØRING'"},{name:"literal",value:"'UTTAK'"}],required:!0}},{key:"vurdering",value:{name:"union",raw:`| 'GODKJENT'
| 'GODKJENT_AUTOMATISK'
| 'IKKE_GODKJENT'
| 'IKKE_DOKUMENTERT'`,elements:[{name:"literal",value:"'GODKJENT'"},{name:"literal",value:"'GODKJENT_AUTOMATISK'"},{name:"literal",value:"'IKKE_GODKJENT'"},{name:"literal",value:"'IKKE_DOKUMENTERT'"}],required:!1}},{key:"årsak",value:{name:"union",raw:`| 'INNLEGGELSE_SØKER'
| 'INNLEGGELSE_BARN'
| 'HV_ØVELSE'
| 'NAV_TILTAK'
| 'SYKDOM_SØKER'
| 'INNLEGGELSE_ANNEN_FORELDER'
| 'SYKDOM_ANNEN_FORELDER'
| 'BARE_SØKER_RETT'
| 'ALENEOMSORG'
| 'AKTIVITETSKRAV_ARBEID'
| 'AKTIVITETSKRAV_UTDANNING'
| 'AKTIVITETSKRAV_KVALPROG'
| 'AKTIVITETSKRAV_INTROPROG'
| 'AKTIVITETSKRAV_TRENGER_HJELP'
| 'AKTIVITETSKRAV_INNLAGT'
| 'AKTIVITETSKRAV_ARBEID_OG_UTDANNING'
| 'AKTIVITETSKRAV_IKKE_OPPGITT'
| 'TIDLIG_OPPSTART_FAR'`,elements:[{name:"literal",value:"'INNLEGGELSE_SØKER'"},{name:"literal",value:"'INNLEGGELSE_BARN'"},{name:"literal",value:"'HV_ØVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'SYKDOM_SØKER'"},{name:"literal",value:"'INNLEGGELSE_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'BARE_SØKER_RETT'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'AKTIVITETSKRAV_ARBEID'"},{name:"literal",value:"'AKTIVITETSKRAV_UTDANNING'"},{name:"literal",value:"'AKTIVITETSKRAV_KVALPROG'"},{name:"literal",value:"'AKTIVITETSKRAV_INTROPROG'"},{name:"literal",value:"'AKTIVITETSKRAV_TRENGER_HJELP'"},{name:"literal",value:"'AKTIVITETSKRAV_INNLAGT'"},{name:"literal",value:"'AKTIVITETSKRAV_ARBEID_OG_UTDANNING'"},{name:"literal",value:"'AKTIVITETSKRAV_IKKE_OPPGITT'"},{name:"literal",value:"'TIDLIG_OPPSTART_FAR'"}],required:!0}}]}}],raw:"DokumentasjonVurderingBehov[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  arbeidsforhold: {
    internArbeidsforholdId?: string;
    arbeidsgiverIdent: string;
    permisjonStatus: string;
  }[];
  begrunnelse: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_PERMISJON_UTEN_SLUTTDATO>`,elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold: {
    internArbeidsforholdId?: string;
    arbeidsgiverIdent: string;
    permisjonStatus: string;
  }[];
  begrunnelse: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  internArbeidsforholdId?: string;
  arbeidsgiverIdent: string;
  permisjonStatus: string;
}`,signature:{properties:[{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"string",required:!0}}]}}],raw:`{
  internArbeidsforholdId?: string;
  arbeidsgiverIdent: string;
  permisjonStatus: string;
}[]`,required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_DEKNINGSGRAD>`,elements:[{name:"signature",type:"object",raw:`{
  dekningsgrad: number;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  rettighetstype: Rettighetstype;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG>`,elements:[{name:"signature",type:"object",raw:`{
  rettighetstype: Rettighetstype;
}`,signature:{properties:[{key:"rettighetstype",value:{name:"union",raw:`| 'ALENEOMSORG'
| 'BEGGE_RETT'
| 'BEGGE_RETT_EØS'
| 'BARE_MOR_RETT'
| 'BARE_FAR_RETT'
| 'BARE_FAR_RETT_MOR_UFØR'`,elements:[{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'BEGGE_RETT'"},{name:"literal",value:"'BEGGE_RETT_EØS'"},{name:"literal",value:"'BARE_MOR_RETT'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'BARE_FAR_RETT_MOR_UFØR'"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  perioder: AnnenforelderUttakEøsPeriode[];
} & AksjonspunktTilBekreftelse<
  AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART | AksjonspunktKode.OVERSTYRING_AV_UTTAK_I_EØS_FOR_ANNENPART
>`,elements:[{name:"signature",type:"object",raw:`{
  perioder: AnnenforelderUttakEøsPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  trekkdager: number;
  trekkonto: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"trekkdager",value:{name:"number",required:!0}},{key:"trekkonto",value:{name:"union",raw:`| 'FELLESPERIODE'
| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| '-'`,elements:[{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"AnnenforelderUttakEøsPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_DEKNINGSGRAD>`,elements:[{name:"signature",type:"object",raw:`{
  dekningsgrad: number;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"AvklartFaktaFeilutbetalingAp"}]},{name:"Array",elements:[{name:"union",raw:`| AvklarVergeAp
| MerkOpptjeningUtlandAp
| BeregningAp
| AvklarAktivitetsPerioderAp
| BekreftEktefelleAksjonspunktAp
| BekreftDokumentertDatoAksjonspunktAp
| BekreftMannAdoptererAksjonspunktAp
| BekreftAleneomsorgVurderingAp
| ManuellKontrollBesteberegningAP
| VurderOmsorgsovertakelseVilkåretAp
| VurderMedlemskapAp
| BekreftSvangerskapspengerAp
| VurderForutgaendeMedlemskapAp
| BekreftOmsorgVurderingAp
| BekreftBosattVurderingAp
| BekreftErMedlemVurderingAp
| BekreftOppholdsrettVurderingAp
| BekreftLovligOppholdVurderingAp
| AvklarFortsattMedlemskapAp
| SjekkTerminbekreftelseAp
| SjekkManglendeFødselAp
| OverstyringFaktaFødselAp
| AvklarAnnenforelderHarRettAp
| BekreftUttaksperioderAp
| OverstyringAvklarStartdatoForPeriodenAp
| AvklarFaktaForForeldreansvarAksjonspunktAp
| KontrollerBesteberegningAP
| OverstyrBeregningsaktiviteterAP
| BeregningFaktaAP
| BeregningOverstyringAP
| FordelBeregningsgrunnlagAP
| VurderRefusjonBeregningsgrunnlagAP
| AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp
| VurderArbeidsforholdInntektsmeldingAp
| VurderDokumentasjonAp
| VurderArbeidsforholdPermisjonAp
| OverstyringDekningsgradAp
| OverstyringRettigheterAp
| BekreftAnnenpartsUttakEøsAp
| AvklarDekningsgradAp
| AvklartFaktaFeilutbetalingAp`,elements:[{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: string;
  organisasjonsnummer?: string;
  fnr?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VERGE>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: string;
  organisasjonsnummer?: string;
  fnr?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!0}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  dokStatus?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK>`,elements:[{name:"signature",type:"object",raw:`{
  dokStatus?: string;
}`,signature:{properties:[{key:"dokStatus",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`BeregningFaktaAP['grunnlag'][number] & {
  fakta: BeregningFaktaAP['grunnlag'][number]['fakta'];
  overstyrteAndeler?: BeregningFaktaAP['grunnlag'][number]['overstyrteAndeler'];
} & AksjonspunktTilBekreftelse<
    | AksjonspunktKode.AVKLAR_AKTIVITETER
    | AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER
    | AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN
    | AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG
  >`,elements:[{name:"BeregningFaktaAP['grunnlag'][number]",raw:"BeregningFaktaAP['grunnlag'][number]"},{name:"signature",type:"object",raw:`{
  fakta: BeregningFaktaAP['grunnlag'][number]['fakta'];
  overstyrteAndeler?: BeregningFaktaAP['grunnlag'][number]['overstyrteAndeler'];
}`,signature:{properties:[{key:"fakta",value:{name:"BeregningFaktaAP['grunnlag'][number]['fakta']",raw:"BeregningFaktaAP['grunnlag'][number]['fakta']",required:!0}},{key:"overstyrteAndeler",value:{name:"BeregningFaktaAP['grunnlag'][number]['overstyrteAndeler']",raw:"BeregningFaktaAP['grunnlag'][number]['overstyrteAndeler']",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  opptjeningsaktiviteter?: OpptjeningAktivitetAp[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING>`,elements:[{name:"signature",type:"object",raw:`{
  opptjeningsaktiviteter?: OpptjeningAktivitetAp[];
}`,signature:{properties:[{key:"opptjeningsaktiviteter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  arbeidsforholdRef?: string;
  erGodkjent: boolean;
  begrunnelse: string;
  aktivitetType: string;
  opptjeningFom: string;
  opptjeningTom: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"arbeidsforholdRef",value:{name:"string",required:!1}},{key:"erGodkjent",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"aktivitetType",value:{name:"string",required:!0}},{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}}]}}],raw:"OpptjeningAktivitetAp[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  ektefellesBarn: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN>`,elements:[{name:"signature",type:"object",raw:`{
  ektefellesBarn: boolean;
}`,signature:{properties:[{key:"ektefellesBarn",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  omsorgsovertakelseDato: string;
  fodselsdatoer: Record<number, string>;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_ADOPSJONSDOKUMENTAJON>`,elements:[{name:"signature",type:"object",raw:`{
  omsorgsovertakelseDato: string;
  fodselsdatoer: Record<number, string>;
}`,signature:{properties:[{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  mannAdoptererAlene: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OM_SØKER_ER_MANN_SOM_ADOPTERER_ALENE>`,elements:[{name:"signature",type:"object",raw:`{
  mannAdoptererAlene: boolean;
}`,signature:{properties:[{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  aleneomsorg: boolean;
  annenforelderHarRett?: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenForelderHarRettEØS?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG>`,elements:[{name:"signature",type:"object",raw:`{
  aleneomsorg: boolean;
  annenforelderHarRett?: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenForelderHarRettEØS?: boolean;
}`,signature:{properties:[{key:"aleneomsorg",value:{name:"boolean",required:!0}},{key:"annenforelderHarRett",value:{name:"boolean",required:!1}},{key:"annenforelderMottarUføretrygd",value:{name:"boolean",required:!1}},{key:"annenForelderHarRettEØS",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING>`,elements:[{name:"signature",type:"object",raw:`{
  besteberegningErKorrekt: boolean;
}`,signature:{properties:[{key:"besteberegningErKorrekt",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  avslagskode?: Avslagsarsak;
  delvilkår: OmsorgsovertakelseVilkårType;
  omsorgsovertakelseDato: string;
  barn: { fødselsdato: string; barnNummer: number }[];
  ektefellesBarn: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET>`,elements:[{name:"signature",type:"object",raw:`{
  avslagskode?: Avslagsarsak;
  delvilkår: OmsorgsovertakelseVilkårType;
  omsorgsovertakelseDato: string;
  barn: { fødselsdato: string; barnNummer: number }[];
  ektefellesBarn: boolean;
}`,signature:{properties:[{key:"avslagskode",value:{name:"union",raw:`| '1001'
| '1002'
| '1003'
| '1004'
| '1005'
| '1006'
| '1007'
| '1008'
| '1009'
| '1010'
| '1011'
| '1012'
| '1014'
| '1015'
| '1016'
| '1017'
| '1018'
| '1019'
| '1020'
| '1021'
| '1023'
| '1024'
| '1025'
| '1026'
| '1027'
| '1028'
| '1029'
| '1031'
| '1032'
| '1033'
| '1034'
| '1035'
| '1041'
| '1051'
| '1052'
| '1060'
| '1061'
| '1062'
| '1063'
| '1064'
| '1065'
| '1066'
| '1099'
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!1}},{key:"delvilkår",value:{name:"union",raw:`| 'FP_VK_4'
| 'FP_VK_8'
| 'FP_VK_5'
| 'FP_VK_33'
| 'FP_VK_16'
| 'FP_VK_8F'
| 'FP_VK_16S'
| '-'`,elements:[{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_8F'"},{name:"literal",value:"'FP_VK_16S'"},{name:"literal",value:"'-'"}],required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ fødselsdato: string; barnNummer: number }",signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!0}},{key:"barnNummer",value:{name:"number",required:!0}}]}}],raw:"{ fødselsdato: string; barnNummer: number }[]",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  avslagskode?: string;
  opphørFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET>`,elements:[{name:"signature",type:"object",raw:`{
  avslagskode?: string;
  opphørFom?: string;
}`,signature:{properties:[{key:"avslagskode",value:{name:"string",required:!1}},{key:"opphørFom",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  termindato: string;
  fødselsdato?: string;
  bekreftetSvpArbeidsforholdList: ArbeidsforholdFodselOgTilrettelegging[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_SVP_TILRETTELEGGING>`,elements:[{name:"signature",type:"object",raw:`{
  termindato: string;
  fødselsdato?: string;
  bekreftetSvpArbeidsforholdList: ArbeidsforholdFodselOgTilrettelegging[];
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}},{key:"bekreftetSvpArbeidsforholdList",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  avklarteOppholdPerioder: Array<tjenester_behandling_svp_SvpAvklartOppholdPeriodeDto>;
  begrunnelse?: string;
  eksternArbeidsforholdReferanse?: string;
  internArbeidsforholdReferanse?: string;
  kanTilrettelegges: boolean;
  kopiertFraTidligereBehandling?: boolean;
  mottattTidspunkt?: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  skalBrukes: boolean;
  stillingsprosentStartTilrettelegging?: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: Array<tjenester_behandling_svp_SvpTilretteleggingDatoDto>;
  tilretteleggingId: number;
  uttakArbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  velferdspermisjoner: Array<tjenester_behandling_svp_VelferdspermisjonDto>;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  forVisning?: boolean;
  oppholdKilde?: tjenester_behandling_svp_SvpAvklartOppholdPeriodeDto_SvpOppholdKilde;
  oppholdÅrsak: foreldrepenger_behandlingslager_behandling_tilrettelegging_SvpOppholdÅrsak;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"forVisning",value:{name:"boolean",required:!1}},{key:"oppholdKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'INNTEKTSMELDING'
| 'REGISTRERT_AV_SAKSBEHANDLER'
| 'TIDLIGERE_VEDTAK'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:"'SYKEPENGER' | 'FERIE'",elements:[{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'FERIE'"}],required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_svp_SvpAvklartOppholdPeriodeDto>",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"kopiertFraTidligereBehandling",value:{name:"boolean",required:!1}},{key:"mottattTidspunkt",value:{name:"string",required:!1}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!1}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  kilde: foreldrepenger_behandlingslager_behandling_tilrettelegging_SvpTilretteleggingFomKilde;
  mottattDato?: string;
  overstyrtUtbetalingsgrad?: number;
  stillingsprosent?: number;
  type: foreldrepenger_behandlingslager_behandling_tilrettelegging_TilretteleggingType;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"kilde",value:{name:"union",raw:`| 'ENDRET_AV_SAKSBEHANDLER'
| 'REGISTRERT_AV_SAKSBEHANDLER'
| 'TIDLIGERE_VEDTAK'
| 'SØKNAD'`,elements:[{name:"literal",value:"'ENDRET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'SØKNAD'"}],required:!0}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"type",value:{name:"union",raw:`| 'HEL_TILRETTELEGGING'
| 'DELVIS_TILRETTELEGGING'
| 'INGEN_TILRETTELEGGING'`,elements:[{name:"literal",value:"'HEL_TILRETTELEGGING'"},{name:"literal",value:"'DELVIS_TILRETTELEGGING'"},{name:"literal",value:"'INGEN_TILRETTELEGGING'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_svp_SvpTilretteleggingDatoDto>",required:!0}},{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"uttakArbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erGyldig?: boolean;
  permisjonFom: string;
  permisjonTom?: string;
  permisjonsprosent: number;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
}`,signature:{properties:[{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_svp_VelferdspermisjonDto>",required:!0}}]}}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  avslagskode?: string;
  medlemFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR>`,elements:[{name:"signature",type:"object",raw:`{
  avslagskode?: string;
  medlemFom?: string;
}`,signature:{properties:[{key:"avslagskode",value:{name:"string",required:!1}},{key:"medlemFom",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  omsorg: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_LØPENDE_OMSORG>`,elements:[{name:"signature",type:"object",raw:`{
  omsorg: boolean;
}`,signature:{properties:[{key:"omsorg",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_5020>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"union",raw:`| '-'
| 'MEDLEM'
| 'UNNTAK'
| 'IKKE_RELEVANT'
| 'OPPHOR_PGA_ENDRING_I_TPS'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'MEDLEM'"},{name:"literal",value:"'UNNTAK'"},{name:"literal",value:"'IKKE_RELEVANT'"},{name:"literal",value:"'OPPHOR_PGA_ENDRING_I_TPS'"}],required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_5021>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"union",raw:`| '-'
| 'MEDLEM'
| 'UNNTAK'
| 'IKKE_RELEVANT'
| 'OPPHOR_PGA_ENDRING_I_TPS'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'MEDLEM'"},{name:"literal",value:"'UNNTAK'"},{name:"literal",value:"'IKKE_RELEVANT'"},{name:"literal",value:"'OPPHOR_PGA_ENDRING_I_TPS'"}],required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_5023>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"union",raw:`| '-'
| 'MEDLEM'
| 'UNNTAK'
| 'IKKE_RELEVANT'
| 'OPPHOR_PGA_ENDRING_I_TPS'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'MEDLEM'"},{name:"literal",value:"'UNNTAK'"},{name:"literal",value:"'IKKE_RELEVANT'"},{name:"literal",value:"'OPPHOR_PGA_ENDRING_I_TPS'"}],required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_5019>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"union",raw:`| '-'
| 'MEDLEM'
| 'UNNTAK'
| 'IKKE_RELEVANT'
| 'OPPHOR_PGA_ENDRING_I_TPS'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'MEDLEM'"},{name:"literal",value:"'UNNTAK'"},{name:"literal",value:"'IKKE_RELEVANT'"},{name:"literal",value:"'OPPHOR_PGA_ENDRING_I_TPS'"}],required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_5053>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"union",raw:`| '-'
| 'MEDLEM'
| 'UNNTAK'
| 'IKKE_RELEVANT'
| 'OPPHOR_PGA_ENDRING_I_TPS'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'MEDLEM'"},{name:"literal",value:"'UNNTAK'"},{name:"literal",value:"'IKKE_RELEVANT'"},{name:"literal",value:"'OPPHOR_PGA_ENDRING_I_TPS'"}],required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  utstedtdato: string;
  termindato: string | null;
  antallBarn: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SJEKK_TERMINBEKREFTELSE>`,elements:[{name:"signature",type:"object",raw:`{
  utstedtdato: string;
  termindato: string | null;
  antallBarn: number;
}`,signature:{properties:[{key:"utstedtdato",value:{name:"string",required:!0}},{key:"termindato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  termindato: string | null;
  barn:
    | {
        fødselsdato: string;
        dødsdato?: string;
      }[]
    | null;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL>`,elements:[{name:"signature",type:"object",raw:`{
  termindato: string | null;
  barn:
    | {
        fødselsdato: string;
        dødsdato?: string;
      }[]
    | null;
}`,signature:{properties:[{key:"termindato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"barn",value:{name:"union",raw:`| {
    fødselsdato: string;
    dødsdato?: string;
  }[]
| null`,elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fødselsdato: string;
  dødsdato?: string;
}`,signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}}]}}],raw:`{
  fødselsdato: string;
  dødsdato?: string;
}[]`},{name:"null"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  termindato: string | null;
  barn:
    | {
        fødselsdato: string;
        dødsdato?: string;
      }[]
    | null;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL>`,elements:[{name:"signature",type:"object",raw:`{
  termindato: string | null;
  barn:
    | {
        fødselsdato: string;
        dødsdato?: string;
      }[]
    | null;
}`,signature:{properties:[{key:"termindato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"barn",value:{name:"union",raw:`| {
    fødselsdato: string;
    dødsdato?: string;
  }[]
| null`,elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fødselsdato: string;
  dødsdato?: string;
}`,signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}}]}}],raw:`{
  fødselsdato: string;
  dødsdato?: string;
}[]`},{name:"null"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  annenforelderHarRett: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenForelderHarRettEØS?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_FAKTA_ANNEN_FORELDER_HAR_RETT>`,elements:[{name:"signature",type:"object",raw:`{
  annenforelderHarRett: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenForelderHarRettEØS?: boolean;
}`,signature:{properties:[{key:"annenforelderHarRett",value:{name:"boolean",required:!0}},{key:"annenforelderMottarUføretrygd",value:{name:"boolean",required:!1}},{key:"annenForelderHarRettEØS",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  perioder: KontrollerFaktaPeriode[];
} & AksjonspunktTilBekreftelse<
  | AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO
  | AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER
  | AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET
  | AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG
  | AksjonspunktKode.OVERSTYRING_FAKTA_UTTAK
>`,elements:[{name:"signature",type:"object",raw:`{
  perioder: KontrollerFaktaPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: tjenester_behandling_uttak_dto_ArbeidsforholdDto;
  arbeidstidsprosent?: number;
  begrunnelse?: string;
  flerbarnsdager?: boolean;
  fom: string;
  morsAktivitet?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_MorsAktivitet;
  oppholdÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OppholdÅrsak;
  overføringÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OverføringÅrsak;
  periodeKilde: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_FordelingPeriodeKilde;
  samtidigUttaksprosent?: number;
  tom: string;
  utsettelseÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_UtsettelseÅrsak;
  uttakPeriodeType?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"signature",type:"object",raw:`{
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
}`,signature:{properties:[{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}}]},required:!1}},{key:"arbeidstidsprosent",value:{name:"number",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"morsAktivitet",value:{name:"union",raw:`| '-'
| 'ARBEID'
| 'UTDANNING'
| 'KVALPROG'
| 'INTROPROG'
| 'TRENGER_HJELP'
| 'INNLAGT'
| 'ARBEID_OG_UTDANNING'
| 'UFØRE'
| 'IKKE_OPPGITT'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'KVALPROG'"},{name:"literal",value:"'INTROPROG'"},{name:"literal",value:"'TRENGER_HJELP'"},{name:"literal",value:"'INNLAGT'"},{name:"literal",value:"'ARBEID_OG_UTDANNING'"},{name:"literal",value:"'UFØRE'"},{name:"literal",value:"'IKKE_OPPGITT'"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:`| '-'
| 'UTTAK_MØDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FEDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FELLESP_ANNEN_FORELDER'
| 'UTTAK_FORELDREPENGER_ANNEN_FORELDER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTTAK_MØDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FEDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FELLESP_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FORELDREPENGER_ANNEN_FORELDER'"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:`| 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'
| 'SYKDOM_ANNEN_FORELDER'
| 'IKKE_RETT_ANNEN_FORELDER'
| 'ALENEOMSORG'
| '-'`,elements:[{name:"literal",value:"'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'IKKE_RETT_ANNEN_FORELDER'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'-'"}],required:!1}},{key:"periodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"utsettelseÅrsak",value:{name:"union",raw:`| 'ARBEID'
| 'LOVBESTEMT_FERIE'
| 'SYKDOM'
| 'INSTITUSJONSOPPHOLD_SØKER'
| 'INSTITUSJONSOPPHOLD_BARNET'
| 'HV_OVELSE'
| 'NAV_TILTAK'
| 'FRI'
| '-'`,elements:[{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'LOVBESTEMT_FERIE'"},{name:"literal",value:"'SYKDOM'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_SØKER'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_BARNET'"},{name:"literal",value:"'HV_OVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'FRI'"},{name:"literal",value:"'-'"}],required:!1}},{key:"uttakPeriodeType",value:{name:"union",raw:`| 'FELLESPERIODE'
| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| '-'`,elements:[{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"KontrollerFaktaPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  startdatoFraSoknad: string;
  opprinneligDato?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_AVKLART_STARTDATO>`,elements:[{name:"signature",type:"object",raw:`{
  startdatoFraSoknad: string;
  opprinneligDato?: string;
}`,signature:{properties:[{key:"startdatoFraSoknad",value:{name:"string",required:!0}},{key:"opprinneligDato",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  omsorgsovertakelseDato: string;
  foreldreansvarDato: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VILKÅR_FOR_FORELDREANSVAR>`,elements:[{name:"signature",type:"object",raw:`{
  omsorgsovertakelseDato: string;
  foreldreansvarDato: string;
}`,signature:{properties:[{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_5048>`,elements:[{name:"signature",type:"object",raw:`{
  besteberegningErKorrekt: boolean;
}`,signature:{properties:[{key:"besteberegningErKorrekt",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"OverstyrBeregningsaktiviteterAP"},{name:"BeregningFaktaAP"},{name:"BeregningOverstyringAP"},{name:"FordelBeregningsgrunnlagAP"},{name:"VurderRefusjonBeregningsgrunnlagAP"},{name:"intersection",raw:`{
  omsorgsovertakelseDato: string;
  vilkarType: VilkårType;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE>`,elements:[{name:"signature",type:"object",raw:`{
  omsorgsovertakelseDato: string;
  vilkarType: VilkårType;
}`,signature:{properties:[{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_6'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_6'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},{name:"intersection",raw:`{
  vurderingBehov: DokumentasjonVurderingBehov[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON>`,elements:[{name:"signature",type:"object",raw:`{
  vurderingBehov: DokumentasjonVurderingBehov[];
}`,signature:{properties:[{key:"vurderingBehov",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetskravGrunnlag?: Array<tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_AktivitetskravGrunnlagArbeid>;
  fom: string;
  morsStillingsprosent?: number;
  tom: string;
  type: foreldrepenger_domene_uttak_fakta_uttak_DokumentasjonVurderingBehov_Behov_Type;
  vurdering?: tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_Vurdering;
  årsak: foreldrepenger_domene_uttak_fakta_uttak_DokumentasjonVurderingBehov_Behov_Årsak;
}`,signature:{properties:[{key:"aktivitetskravGrunnlag",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  orgNummer: string;
  permisjon: tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_Permisjon;
  stillingsprosent: number;
}`,signature:{properties:[{key:"orgNummer",value:{name:"string",required:!0}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  prosent: number;
  type: foreldrepenger_behandlingslager_behandling_aktivitetskrav_AktivitetskravPermisjonType;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| '-'
| 'UTDANNING'
| 'FORELDREPENGER'
| 'PERMITTERING'
| 'ANNEN_PERMISJON'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'ANNEN_PERMISJON'"}],required:!0}}]},required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}}]}}],raw:"Array<tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_AktivitetskravGrunnlagArbeid>",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"morsStillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:`| 'UTSETTELSE'
| 'OVERFØRING'
| 'UTTAK'`,elements:[{name:"literal",value:"'UTSETTELSE'"},{name:"literal",value:"'OVERFØRING'"},{name:"literal",value:"'UTTAK'"}],required:!0}},{key:"vurdering",value:{name:"union",raw:`| 'GODKJENT'
| 'GODKJENT_AUTOMATISK'
| 'IKKE_GODKJENT'
| 'IKKE_DOKUMENTERT'`,elements:[{name:"literal",value:"'GODKJENT'"},{name:"literal",value:"'GODKJENT_AUTOMATISK'"},{name:"literal",value:"'IKKE_GODKJENT'"},{name:"literal",value:"'IKKE_DOKUMENTERT'"}],required:!1}},{key:"årsak",value:{name:"union",raw:`| 'INNLEGGELSE_SØKER'
| 'INNLEGGELSE_BARN'
| 'HV_ØVELSE'
| 'NAV_TILTAK'
| 'SYKDOM_SØKER'
| 'INNLEGGELSE_ANNEN_FORELDER'
| 'SYKDOM_ANNEN_FORELDER'
| 'BARE_SØKER_RETT'
| 'ALENEOMSORG'
| 'AKTIVITETSKRAV_ARBEID'
| 'AKTIVITETSKRAV_UTDANNING'
| 'AKTIVITETSKRAV_KVALPROG'
| 'AKTIVITETSKRAV_INTROPROG'
| 'AKTIVITETSKRAV_TRENGER_HJELP'
| 'AKTIVITETSKRAV_INNLAGT'
| 'AKTIVITETSKRAV_ARBEID_OG_UTDANNING'
| 'AKTIVITETSKRAV_IKKE_OPPGITT'
| 'TIDLIG_OPPSTART_FAR'`,elements:[{name:"literal",value:"'INNLEGGELSE_SØKER'"},{name:"literal",value:"'INNLEGGELSE_BARN'"},{name:"literal",value:"'HV_ØVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'SYKDOM_SØKER'"},{name:"literal",value:"'INNLEGGELSE_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'BARE_SØKER_RETT'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'AKTIVITETSKRAV_ARBEID'"},{name:"literal",value:"'AKTIVITETSKRAV_UTDANNING'"},{name:"literal",value:"'AKTIVITETSKRAV_KVALPROG'"},{name:"literal",value:"'AKTIVITETSKRAV_INTROPROG'"},{name:"literal",value:"'AKTIVITETSKRAV_TRENGER_HJELP'"},{name:"literal",value:"'AKTIVITETSKRAV_INNLAGT'"},{name:"literal",value:"'AKTIVITETSKRAV_ARBEID_OG_UTDANNING'"},{name:"literal",value:"'AKTIVITETSKRAV_IKKE_OPPGITT'"},{name:"literal",value:"'TIDLIG_OPPSTART_FAR'"}],required:!0}}]}}],raw:"DokumentasjonVurderingBehov[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  arbeidsforhold: {
    internArbeidsforholdId?: string;
    arbeidsgiverIdent: string;
    permisjonStatus: string;
  }[];
  begrunnelse: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_PERMISJON_UTEN_SLUTTDATO>`,elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold: {
    internArbeidsforholdId?: string;
    arbeidsgiverIdent: string;
    permisjonStatus: string;
  }[];
  begrunnelse: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  internArbeidsforholdId?: string;
  arbeidsgiverIdent: string;
  permisjonStatus: string;
}`,signature:{properties:[{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"string",required:!0}}]}}],raw:`{
  internArbeidsforholdId?: string;
  arbeidsgiverIdent: string;
  permisjonStatus: string;
}[]`,required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_DEKNINGSGRAD>`,elements:[{name:"signature",type:"object",raw:`{
  dekningsgrad: number;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  rettighetstype: Rettighetstype;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG>`,elements:[{name:"signature",type:"object",raw:`{
  rettighetstype: Rettighetstype;
}`,signature:{properties:[{key:"rettighetstype",value:{name:"union",raw:`| 'ALENEOMSORG'
| 'BEGGE_RETT'
| 'BEGGE_RETT_EØS'
| 'BARE_MOR_RETT'
| 'BARE_FAR_RETT'
| 'BARE_FAR_RETT_MOR_UFØR'`,elements:[{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'BEGGE_RETT'"},{name:"literal",value:"'BEGGE_RETT_EØS'"},{name:"literal",value:"'BARE_MOR_RETT'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'BARE_FAR_RETT_MOR_UFØR'"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  perioder: AnnenforelderUttakEøsPeriode[];
} & AksjonspunktTilBekreftelse<
  AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART | AksjonspunktKode.OVERSTYRING_AV_UTTAK_I_EØS_FOR_ANNENPART
>`,elements:[{name:"signature",type:"object",raw:`{
  perioder: AnnenforelderUttakEøsPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  trekkdager: number;
  trekkonto: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"trekkdager",value:{name:"number",required:!0}},{key:"trekkonto",value:{name:"union",raw:`| 'FELLESPERIODE'
| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| '-'`,elements:[{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"AnnenforelderUttakEøsPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_DEKNINGSGRAD>`,elements:[{name:"signature",type:"object",raw:`{
  dekningsgrad: number;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"AvklartFaktaFeilutbetalingAp"}]}],raw:"FaktaAksjonspunkt[]"}]},name:"aksjonspunkterSomSkalLagres"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}},required:!0}}]}}],raw:`Readonly<{
  behandling: T;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkterForPanel: Aksjonspunkt[];
  isReadOnly: boolean;
  isSubmittable: boolean;
  harÅpentAksjonspunkt: boolean;
  submitCallback: (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
}>`},description:""},skalPanelVisesIMeny:{required:!0,tsType:{name:"boolean"},description:""},faktaPanelKode:{required:!0,tsType:{name:"FaktaPanelCode"},description:""},faktaPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactElement"},description:""}}};const R="default",k="default",x=(a=[],l=[])=>{const{behandling:e,rettigheter:t,fagsak:r,lagreAksjonspunkter:i,lagreOverstyrteAksjonspunkter:n,oppdaterProsessStegOgFaktaPanelIUrl:E,alleKodeverk:u}=d(),{aksjonspunkt:m}=e,o=m.filter(v=>a.includes(v.definisjon)),S=q(e,[],t,!1),K=U(e.status,o),I=Z(r,e,E,i,n,l);return{behandling:e,isSubmittable:!o.some(T)||o.some(v=>v.kanLoses),harÅpentAksjonspunkt:o.some(v=>T(v)&&v.kanLoses),alleKodeverk:u,aksjonspunkterForPanel:o,isReadOnly:S,alleMerknaderFraBeslutter:K,submitCallback:I}},Z=(a,l,e,t,r,i)=>n=>{const u=(Array.isArray(n)?n:[n]).map(o=>({"@type":o.kode,...o})),m={saksnummer:a.saksnummer,behandlingUuid:l.uuid,behandlingVersjon:l.versjon};if(i){if(u.length===0)throw new Error("Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.");if(i.includes(u[0]?.kode??""))return r({...m,overstyrteAksjonspunktDtoer:u}).then(()=>{e(k,R),globalThis.scrollTo({top:0,behavior:"smooth"})})}return t({...m,bekreftedeAksjonspunktDtoer:u}).then(()=>{e(k,R),globalThis.scrollTo({top:0,behavior:"smooth"})})},W=[F.AVKLAR_VERGE],X=()=>{const a=A(),l=x(W),{behandling:e}=d(),t=G(e),r=b(e,"VERGE"),{data:i,isFetching:n}=P(t.vergeOptions(e,r));return s.jsx(p,{standardPanelProps:l,faktaPanelKode:L.VERGE,faktaPanelMenyTekst:a.formatMessage({id:"FaktaInitPanel.Title.Verge"}),skalPanelVisesIMeny:r,children:n?s.jsx(y,{}):s.jsx(V,{verge:i,alleKodeverk:l.alleKodeverk})})};X.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaInitPanel"};export{p as F,X as V,H as a,x as u};
