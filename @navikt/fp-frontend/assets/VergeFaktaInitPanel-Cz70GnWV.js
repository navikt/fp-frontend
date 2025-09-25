import{r as m,l as A,j as u,bF as S,bG as f,bf as I}from"./iframe-Cdd3Ak7o.js";import{Q as D}from"./index.es-Ccb9bpdX.js";import{u as O}from"./fagsakApi-CdtuIMVd.js";import{V}from"./BehandlingMenuIndex-Qi3zRD-C.js";import{e as p,A as L}from"./index-FOyrVCiG.js";import{u as q,c as P}from"./behandlingApi-Cx80bneO.js";import{B as v}from"./FagsakIndex-_LV3sm19.js";import{Y as F}from"./index.es-LaLGYTqV.js";import{H as j}from"./VStack-F-RHHyD_.js";import{S as G}from"./ExclamationmarkTriangleFill-BDSXwoYy.js";import{e as B,g as w}from"./useStandardProsessPanelProps-BR5gMLwF.js";const h=r=>{const[l,e]=m.useState([]),t=a=>{e(i=>{const n=[...i],d=n.findIndex(s=>s.id===a.id);return d>=0?n.splice(d,1,a):n.push(a),n}),r?.(a.harÅpentAksjonspunkt?{urlCode:a.id,text:a.tekst}:void 0)};return{faktaPanelMenyData:l.filter(a=>a.skalVisesIMeny),settFaktaPanelMenyData:t}},M="_container_4o186_1",c="_content_4o186_6",U="_sideMenu_4o186_19",E={container:M,content:c,sideMenu:U},H=({valgtFaktaSteg:r,valgtProsessSteg:l,setFaktaPanelMedÅpentApInfo:e,children:t})=>{const a=A(),{oppdaterProsessStegOgFaktaPanelIUrl:i}=m.use(v),{faktaPanelMenyData:n,settFaktaPanelMenyData:d}=h(e),s=n.length>0;return u.jsxs(j,{className:E.container,wrap:!1,children:[s&&u.jsx("div",{className:E.sideMenu,"data-testid":"fakta-meny",children:u.jsx(F,{heading:a.formatMessage({id:"FaktaMeny.FaktaOm"}),links:n.map(o=>({label:o.tekst,active:o.erAktiv,icon:o.harÅpentAksjonspunkt?u.jsx(G,{color:"var(--ax-warning-700)"}):void 0})),onClick:o=>{i(l,n[o].id)}})}),u.jsx("div",{className:E.content,children:u.jsx(J,{valgtFaktaSteg:r,settFaktaPanelMenyData:d,faktaPanelMenyData:n,children:t})})]})},y=m.createContext({}),J=r=>{const{children:l,...e}=r,t=m.useMemo(()=>e,[e]);return u.jsx(y.Provider,{value:t,children:l})};H.__docgenInfo={description:"",methods:[],displayName:"FaktaMeny",props:{valgtProsessSteg:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},valgtFaktaSteg:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},setFaktaPanelMedÅpentApInfo:{required:!1,tsType:{name:"signature",type:"function",raw:"(faktaPanelMedÅpentApInfo?: FaktaPanelMedÅpentApInfo) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  urlCode: string;
  text: string;
}`,signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},name:"faktaPanelMedÅpentApInfo"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const Y="default",x=(r,l,e,t)=>{const{valgtFaktaSteg:a,settFaktaPanelMenyData:i}=m.use(y),n=e&&(a===r||t&&a===Y);return m.useEffect(()=>{i({id:r,tekst:l,erAktiv:n,harÅpentAksjonspunkt:t,skalVisesIMeny:e})},[e,n,t]),e&&n},R=({standardPanelProps:r,skalPanelVisesIMeny:l,faktaPanelKode:e,faktaPanelMenyTekst:t,children:a})=>{const{behandling:i,fagsak:n,alleKodeverk:d}=m.use(v),s=x(e,t,l,r.harÅpentAksjonspunkt);return u.jsx(S,{behandling:i,children:s?u.jsx(f,{behandling:i,fagsak:n,alleKodeverk:d,aksjonspunkterForPanel:r.aksjonspunkterForPanel,harÅpentAksjonspunkt:r.harÅpentAksjonspunkt,submitCallback:r.submitCallback,isReadOnly:r.isReadOnly,alleMerknaderFraBeslutter:r.alleMerknaderFraBeslutter,isSubmittable:r.isSubmittable,children:a}):null})};R.__docgenInfo={description:"",methods:[],displayName:"FaktaDefaultInitPanel",props:{standardPanelProps:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandling: Behandling;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkterForPanel: Aksjonspunkt[];
  isReadOnly: boolean;
  isSubmittable: boolean;
  harÅpentAksjonspunkt: boolean;

  submitCallback: (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
}`,signature:{properties:[{key:"behandling",value:{name:"signature",type:"object",raw:`{
  id?: number;
  uuid: string;
  versjon: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingType;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  fagsakId?: number;
  opprettet: string;
  avsluttet?: string;
  endret?: string;
  endretAvBrukernavn?: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  erAktivPapirsoknad: boolean;
  førsteÅrsak?: tjenester_behandling_dto_behandling_BehandlingÅrsakDto;
  behandlingsfristTid?: string;
  gjeldendeVedtak: boolean;
  erPaaVent?: boolean;
  originalVedtaksDato?: string;
  behandlingHenlagt: boolean;
  behandlingPaaVent?: boolean;
  behandlingPåVent: boolean;
  fristBehandlingPåVent?: string;
  fristBehandlingPaaVent?: string;
  venteArsakKode?: string;
  venteÅrsakKode?: string;
  sprakkode?: foreldrepenger_behandlingslager_geografisk_Språkkode;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  behandlingKøet: boolean;
  ansvarligSaksbehandler?: string;
  toTrinnsBehandling: boolean;
  behandlingsresultat?: tjenester_behandling_dto_behandling_BehandlingsresultatDto;
  behandlingÅrsaker: Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>;
  vilkår: Array<tjenester_behandling_vilkår_VilkårDto>;
  links: Array<rest_ResourceLink>;
  ansvarligBeslutter?: string;
  aksjonspunkt: Array<tjenester_behandling_aksjonspunkt_AksjonspunktDto>;
  harSøknad: boolean;
  harRegisterdata?: boolean;
  harSattEndringsdato: boolean;
  alleUttaksperioderAvslått?: boolean;
  sjekkSimuleringResultat?: boolean;
  taskStatus?: tjenester_behandling_dto_AsyncPollingStatus;
  behandlingKoet?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!1}},{key:"uuid",value:{name:"string",required:!0}},{key:"versjon",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"fagsakId",value:{name:"number",required:!1}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"endret",value:{name:"string",required:!1}},{key:"endretAvBrukernavn",value:{name:"string",required:!1}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| 'RE-LOV'
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
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]},required:!1}},{key:"behandlingsfristTid",value:{name:"string",required:!1}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"erPaaVent",value:{name:"boolean",required:!1}},{key:"originalVedtaksDato",value:{name:"string",required:!1}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingPaaVent",value:{name:"boolean",required:!1}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"venteÅrsakKode",value:{name:"string",required:!1}},{key:"sprakkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"signature",type:"object",raw:`{
  id: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingResultatType;
  avslagsarsak?: foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak;
  avslagsarsakFritekst?: string;
  rettenTil?: foreldrepenger_behandlingslager_behandling_RettenTil;
  konsekvenserForYtelsen?: Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>;
  vedtaksbrev?: foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev;
  vedtaksbrevStatus: foreldrepenger_domene_vedtak_intern_VedtaksbrevStatus;
  overskrift?: string;
  fritekstbrev?: string;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: tjenester_behandling_dto_behandling_SkjæringstidspunktDto;
  endretDekningsgrad?: boolean;
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| 'IKKE_FASTSATT'
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
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:`| '1001'
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
| '1013'
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
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"union",raw:"'HAR_RETT_TIL_FP' | 'HAR_IKKE_RETT_TIL_FP' | '-'",elements:[{name:"literal",value:"'HAR_RETT_TIL_FP'"},{name:"literal",value:"'HAR_IKKE_RETT_TIL_FP'"},{name:"literal",value:"'-'"}],required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>",required:!1}},{key:"vedtaksbrev",value:{name:"union",raw:"'AUTOMATISK' | 'FRITEKST' | 'INGEN' | '-'",elements:[{name:"literal",value:"'AUTOMATISK'"},{name:"literal",value:"'FRITEKST'"},{name:"literal",value:"'INGEN'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato?: string;
  utenMinsterett?: boolean;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!1}},{key:"utenMinsterett",value:{name:"boolean",required:!1}}]},required:!1}},{key:"endretDekningsgrad",value:{name:"boolean",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]},required:!1}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| 'RE-LOV'
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
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]},required:!1}],raw:"Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>",required:!0}},{key:"vilkår",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
  evaluering?: string;
  input?: string;
}`,signature:{properties:[{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"evaluering",value:{name:"string",required:!1}},{key:"input",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"Array<rest_ResourceLink>",required:!0}},{key:"ansvarligBeslutter",value:{name:"string",required:!1}},{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse?: string;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  besluttersBegrunnelse?: string;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid?: string;
  endretTidspunkt?: string;
  endretAv?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
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
| '5069'
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
| "UNDEFINED('null')"
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"endretAv",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_behandling_aksjonspunkt_AksjonspunktDto>",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harRegisterdata",value:{name:"boolean",required:!1}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!1}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!1}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  status?: tjenester_behandling_dto_AsyncPollingStatus_Status;
  eta?: string;
  message: string;
  pollIntervalMillis?: number;
  location?: string;
  cancelUri?: string;
  readOnly?: boolean;
  pending?: boolean;
}`,signature:{properties:[{key:"status",value:{name:"union",raw:`| 'PENDING'
| 'COMPLETE'
| 'DELAYED'
| 'CANCELLED'
| 'HALTED'`,elements:[{name:"literal",value:"'PENDING'"},{name:"literal",value:"'COMPLETE'"},{name:"literal",value:"'DELAYED'"},{name:"literal",value:"'CANCELLED'"},{name:"literal",value:"'HALTED'"}],required:!1}},{key:"eta",value:{name:"string",required:!1}},{key:"message",value:{name:"string",required:!0}},{key:"pollIntervalMillis",value:{name:"number",required:!1}},{key:"location",value:{name:"string",required:!1}},{key:"cancelUri",value:{name:"string",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"pending",value:{name:"boolean",required:!1}}]},required:!1}},{key:"behandlingKoet",value:{name:"boolean",required:!1}}]},required:!0}},{key:"alleKodeverk",value:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatusEnum;
  BehandlingType: BehandlingTypeEnum;
  BehandlingÅrsakType: BehandlingArsakTypeEnum;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatusEnum;
  FagsakYtelseType: FagsakYtelseTypeEnum;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktorEnum;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsenEnum;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
  Inntektskategori: Inntektskategori;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatusEnum",required:!0}},{key:"BehandlingType",value:{name:"BehandlingTypeEnum",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakTypeEnum",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatusEnum",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseTypeEnum",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktorEnum",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsenEnum",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
| 'FBARN'
| 'VOKSEN'
| 'ADVOKAT'
| 'ANNEN_F'`,elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}},{key:"Inntektskategori",value:{name:"Inntektskategori",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"union",raw:"VilkarType | '-'",elements:[{name:"VilkarType"},{name:"literal",value:"'-'"}]},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType | '-', KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
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
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}],required:!0}},{key:"alleMerknaderFraBeslutter",value:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"aksjonspunkterForPanel",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse?: string;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  besluttersBegrunnelse?: string;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid?: string;
  endretTidspunkt?: string;
  endretAv?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
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
| '5069'
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
| "UNDEFINED('null')"
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"endretAv",value:{name:"string",required:!1}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"isReadOnly",value:{name:"boolean",required:!0}},{key:"isSubmittable",value:{name:"boolean",required:!0}},{key:"harÅpentAksjonspunkt",value:{name:"boolean",required:!0}},{key:"submitCallback",value:{name:"signature",type:"function",raw:"(aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>",signature:{arguments:[{type:{name:"union",raw:"FaktaAksjonspunkt | FaktaAksjonspunkt[]",elements:[{name:"union",raw:`| AvklarVergeAp
| MerkOpptjeningUtlandAp
| AvklarAktivitetsPerioderAp
| BekreftEktefelleAksjonspunktAp
| BekreftDokumentertDatoAksjonspunktAp
| BekreftMannAdoptererAksjonspunktAp
| BekreftAleneomsorgVurderingAp
| BekreftSvangerskapspengerAp
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
| AvklarBeregningsaktiviteterAP
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
| AvklarDekningsgradAp`,elements:[{name:"intersection",raw:`{
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
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN>`,elements:[{name:"signature",type:"object",raw:`{
  ektefellesBarn: boolean;
}`,signature:{properties:[{key:"ektefellesBarn",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  omsorgsovertakelseDato: string;
  fodselsdatoer: Record<number, string>;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.ADOPSJONSDOKUMENTAJON>`,elements:[{name:"signature",type:"object",raw:`{
  omsorgsovertakelseDato: string;
  fodselsdatoer: Record<number, string>;
}`,signature:{properties:[{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  mannAdoptererAlene: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE>`,elements:[{name:"signature",type:"object",raw:`{
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
  termindato: string;
  fødselsdato: string;
  bekreftetSvpArbeidsforholdList: ArbeidsforholdFodselOgTilrettelegging[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FODSELTILRETTELEGGING>`,elements:[{name:"signature",type:"object",raw:`{
  termindato: string;
  fødselsdato: string;
  bekreftetSvpArbeidsforholdList: ArbeidsforholdFodselOgTilrettelegging[];
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"bekreftetSvpArbeidsforholdList",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: Array<tjenester_behandling_svp_SvpTilretteleggingDatoDto>;
  uttakArbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  kopiertFraTidligereBehandling?: boolean;
  mottattTidspunkt?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  stillingsprosentStartTilrettelegging?: number;
  velferdspermisjoner: Array<tjenester_behandling_svp_VelferdspermisjonDto>;
  avklarteOppholdPerioder: Array<tjenester_behandling_svp_SvpAvklartOppholdPeriodeDto>;
  begrunnelse?: string;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: foreldrepenger_behandlingslager_behandling_tilrettelegging_TilretteleggingType;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: foreldrepenger_behandlingslager_behandling_tilrettelegging_SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:`| 'HEL_TILRETTELEGGING'
| 'DELVIS_TILRETTELEGGING'
| 'INGEN_TILRETTELEGGING'`,elements:[{name:"literal",value:"'HEL_TILRETTELEGGING'"},{name:"literal",value:"'DELVIS_TILRETTELEGGING'"},{name:"literal",value:"'INGEN_TILRETTELEGGING'"}],required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"union",raw:`| 'ENDRET_AV_SAKSBEHANDLER'
| 'REGISTRERT_AV_SAKSBEHANDLER'
| 'TIDLIGERE_VEDTAK'
| 'SØKNAD'`,elements:[{name:"literal",value:"'ENDRET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'SØKNAD'"}],required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_behandling_svp_SvpTilretteleggingDatoDto>",required:!0}},{key:"uttakArbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"kopiertFraTidligereBehandling",value:{name:"boolean",required:!1}},{key:"mottattTidspunkt",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  permisjonsprosent: number;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  erGyldig?: boolean;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}}]}}],raw:"Array<tjenester_behandling_svp_VelferdspermisjonDto>",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: foreldrepenger_behandlingslager_behandling_tilrettelegging_SvpOppholdÅrsak;
  oppholdKilde?: tjenester_behandling_svp_SvpAvklartOppholdPeriodeDto_SvpOppholdKilde;
  forVisning?: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"union",raw:"'SYKEPENGER' | 'FERIE'",elements:[{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'FERIE'"}],required:!0}},{key:"oppholdKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'INNTEKTSMELDING'
| 'REGISTRERT_AV_SAKSBEHANDLER'
| 'TIDLIGERE_VEDTAK'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"}],required:!1}},{key:"forVisning",value:{name:"boolean",required:!1}}]}}],raw:"Array<tjenester_behandling_svp_SvpAvklartOppholdPeriodeDto>",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  omsorg: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG>`,elements:[{name:"signature",type:"object",raw:`{
  omsorg: boolean;
}`,signature:{properties:[{key:"omsorg",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OM_BRUKER_ER_BOSATT>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OPPHOLDSRETT>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_LOVLIG_OPPHOLD>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_FORTSATT_MEDLEMSKAP>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT>`,elements:[{name:"signature",type:"object",raw:`{
  annenforelderHarRett: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenForelderHarRettEØS?: boolean;
}`,signature:{properties:[{key:"annenforelderHarRett",value:{name:"boolean",required:!0}},{key:"annenforelderMottarUføretrygd",value:{name:"boolean",required:!1}},{key:"annenForelderHarRettEØS",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  perioder: KontrollerFaktaPeriode[];
} & AksjonspunktTilBekreftelse<
  | AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE
  | AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER_KODE
  | AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE
  | AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE
  | AksjonspunktKode.OVERSTYR_FAKTA_UTTAK
>`,elements:[{name:"signature",type:"object",raw:`{
  perioder: KontrollerFaktaPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  uttakPeriodeType?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType;
  utsettelseÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_UtsettelseÅrsak;
  overføringÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OverføringÅrsak;
  oppholdÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OppholdÅrsak;
  arbeidstidsprosent?: number;
  arbeidsforhold?: tjenester_behandling_uttak_dto_ArbeidsforholdDto;
  samtidigUttaksprosent?: number;
  flerbarnsdager?: boolean;
  morsAktivitet?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_MorsAktivitet;
  periodeKilde: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_FordelingPeriodeKilde;
  begrunnelse?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"uttakPeriodeType",value:{name:"union",raw:`| 'FELLESPERIODE'
| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| '-'`,elements:[{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"utsettelseÅrsak",value:{name:"union",raw:`| 'ARBEID'
| 'LOVBESTEMT_FERIE'
| 'SYKDOM'
| 'INSTITUSJONSOPPHOLD_SØKER'
| 'INSTITUSJONSOPPHOLD_BARNET'
| 'HV_OVELSE'
| 'NAV_TILTAK'
| 'FRI'
| '-'`,elements:[{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'LOVBESTEMT_FERIE'"},{name:"literal",value:"'SYKDOM'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_SØKER'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_BARNET'"},{name:"literal",value:"'HV_OVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'FRI'"},{name:"literal",value:"'-'"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:`| 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'
| 'SYKDOM_ANNEN_FORELDER'
| 'IKKE_RETT_ANNEN_FORELDER'
| 'ALENEOMSORG'
| '-'`,elements:[{name:"literal",value:"'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'IKKE_RETT_ANNEN_FORELDER'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'-'"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:`| '-'
| 'UTTAK_MØDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FEDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FELLESP_ANNEN_FORELDER'
| 'UTTAK_FORELDREPENGER_ANNEN_FORELDER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTTAK_MØDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FEDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FELLESP_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FORELDREPENGER_ANNEN_FORELDER'"}],required:!1}},{key:"arbeidstidsprosent",value:{name:"number",required:!1}},{key:"arbeidsforhold",value:{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}}]},required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"union",raw:`| '-'
| 'ARBEID'
| 'UTDANNING'
| 'KVALPROG'
| 'INTROPROG'
| 'TRENGER_HJELP'
| 'INNLAGT'
| 'ARBEID_OG_UTDANNING'
| 'UFØRE'
| 'IKKE_OPPGITT'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'KVALPROG'"},{name:"literal",value:"'INTROPROG'"},{name:"literal",value:"'TRENGER_HJELP'"},{name:"literal",value:"'INNLAGT'"},{name:"literal",value:"'ARBEID_OG_UTDANNING'"},{name:"literal",value:"'UFØRE'"},{name:"literal",value:"'IKKE_OPPGITT'"}],required:!1}},{key:"periodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"KontrollerFaktaPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  startdatoFraSoknad: string;
  opprinneligDato?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO>`,elements:[{name:"signature",type:"object",raw:`{
  startdatoFraSoknad: string;
  opprinneligDato?: string;
}`,signature:{properties:[{key:"startdatoFraSoknad",value:{name:"string",required:!0}},{key:"opprinneligDato",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  omsorgsovertakelseDato: string;
  foreldreansvarDato: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR>`,elements:[{name:"signature",type:"object",raw:`{
  omsorgsovertakelseDato: string;
  foreldreansvarDato: string;
}`,signature:{properties:[{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING>`,elements:[{name:"signature",type:"object",raw:`{
  besteberegningErKorrekt: boolean;
}`,signature:{properties:[{key:"besteberegningErKorrekt",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"AvklarBeregningsaktiviteterAP"},{name:"OverstyrBeregningsaktiviteterAP"},{name:"BeregningFaktaAP"},{name:"BeregningOverstyringAP"},{name:"FordelBeregningsgrunnlagAP"},{name:"VurderRefusjonBeregningsgrunnlagAP"},{name:"intersection",raw:`{
  omsorgsovertakelseDato: string;
  vilkarType: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OMSORGSOVERTAKELSE>`,elements:[{name:"signature",type:"object",raw:`{
  omsorgsovertakelseDato: string;
  vilkarType: string;
}`,signature:{properties:[{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"vilkarType",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
  fom: string;
  tom: string;
  type: foreldrepenger_domene_uttak_fakta_uttak_DokumentasjonVurderingBehov_Behov_Type;
  årsak: foreldrepenger_domene_uttak_fakta_uttak_DokumentasjonVurderingBehov_Behov_Årsak;
  vurdering?: tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_Vurdering;
  morsStillingsprosent?: number;
  aktivitetskravGrunnlag?: Array<tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_AktivitetskravGrunnlagArbeid>;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:`| 'UTSETTELSE'
| 'OVERFØRING'
| 'UTTAK'`,elements:[{name:"literal",value:"'UTSETTELSE'"},{name:"literal",value:"'OVERFØRING'"},{name:"literal",value:"'UTTAK'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'INNLEGGELSE_SØKER'
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
| 'TIDLIG_OPPSTART_FAR'`,elements:[{name:"literal",value:"'INNLEGGELSE_SØKER'"},{name:"literal",value:"'INNLEGGELSE_BARN'"},{name:"literal",value:"'HV_ØVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'SYKDOM_SØKER'"},{name:"literal",value:"'INNLEGGELSE_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'BARE_SØKER_RETT'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'AKTIVITETSKRAV_ARBEID'"},{name:"literal",value:"'AKTIVITETSKRAV_UTDANNING'"},{name:"literal",value:"'AKTIVITETSKRAV_KVALPROG'"},{name:"literal",value:"'AKTIVITETSKRAV_INTROPROG'"},{name:"literal",value:"'AKTIVITETSKRAV_TRENGER_HJELP'"},{name:"literal",value:"'AKTIVITETSKRAV_INNLAGT'"},{name:"literal",value:"'AKTIVITETSKRAV_ARBEID_OG_UTDANNING'"},{name:"literal",value:"'AKTIVITETSKRAV_IKKE_OPPGITT'"},{name:"literal",value:"'TIDLIG_OPPSTART_FAR'"}],required:!0}},{key:"vurdering",value:{name:"union",raw:`| 'GODKJENT'
| 'GODKJENT_AUTOMATISK'
| 'IKKE_GODKJENT'
| 'IKKE_DOKUMENTERT'`,elements:[{name:"literal",value:"'GODKJENT'"},{name:"literal",value:"'GODKJENT_AUTOMATISK'"},{name:"literal",value:"'IKKE_GODKJENT'"},{name:"literal",value:"'IKKE_DOKUMENTERT'"}],required:!1}},{key:"morsStillingsprosent",value:{name:"number",required:!1}},{key:"aktivitetskravGrunnlag",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  orgNummer: string;
  stillingsprosent: number;
  permisjon: tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_Permisjon;
}`,signature:{properties:[{key:"orgNummer",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  prosent: number;
  type: foreldrepenger_behandlingslager_behandling_aktivitetskrav_AktivitetskravPermisjonType;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| '-'
| 'UTDANNING'
| 'FORELDREPENGER'
| 'PERMITTERING'
| 'ANNEN_PERMISJON'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'ANNEN_PERMISJON'"}],required:!0}}]},required:!0}}]}}],raw:"Array<tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_AktivitetskravGrunnlagArbeid>",required:!1}}]}}],raw:"DokumentasjonVurderingBehov[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  arbeidsforhold: {
    internArbeidsforholdId?: string;
    arbeidsgiverIdent: string;
    permisjonStatus: string;
  }[];
  begrunnelse: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_ARBEIDSFORHOLD_PERMISJON>`,elements:[{name:"signature",type:"object",raw:`{
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
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_DEKNINGSGRAD>`,elements:[{name:"signature",type:"object",raw:`{
  dekningsgrad: number;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  rettighetstype: foreldrepenger_behandlingslager_behandling_ytelsefordeling_Rettighetstype;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG>`,elements:[{name:"signature",type:"object",raw:`{
  rettighetstype: foreldrepenger_behandlingslager_behandling_ytelsefordeling_Rettighetstype;
}`,signature:{properties:[{key:"rettighetstype",value:{name:"union",raw:`| 'ALENEOMSORG'
| 'BEGGE_RETT'
| 'BEGGE_RETT_EØS'
| 'BARE_MOR_RETT'
| 'BARE_FAR_RETT'
| 'BARE_FAR_RETT_MOR_UFØR'`,elements:[{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'BEGGE_RETT'"},{name:"literal",value:"'BEGGE_RETT_EØS'"},{name:"literal",value:"'BARE_MOR_RETT'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'BARE_FAR_RETT_MOR_UFØR'"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_DEKNINGSGRAD>`,elements:[{name:"signature",type:"object",raw:`{
  dekningsgrad: number;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}]},{name:"Array",elements:[{name:"union",raw:`| AvklarVergeAp
| MerkOpptjeningUtlandAp
| AvklarAktivitetsPerioderAp
| BekreftEktefelleAksjonspunktAp
| BekreftDokumentertDatoAksjonspunktAp
| BekreftMannAdoptererAksjonspunktAp
| BekreftAleneomsorgVurderingAp
| BekreftSvangerskapspengerAp
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
| AvklarBeregningsaktiviteterAP
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
| AvklarDekningsgradAp`,elements:[{name:"intersection",raw:`{
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
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN>`,elements:[{name:"signature",type:"object",raw:`{
  ektefellesBarn: boolean;
}`,signature:{properties:[{key:"ektefellesBarn",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  omsorgsovertakelseDato: string;
  fodselsdatoer: Record<number, string>;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.ADOPSJONSDOKUMENTAJON>`,elements:[{name:"signature",type:"object",raw:`{
  omsorgsovertakelseDato: string;
  fodselsdatoer: Record<number, string>;
}`,signature:{properties:[{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  mannAdoptererAlene: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE>`,elements:[{name:"signature",type:"object",raw:`{
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
  termindato: string;
  fødselsdato: string;
  bekreftetSvpArbeidsforholdList: ArbeidsforholdFodselOgTilrettelegging[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FODSELTILRETTELEGGING>`,elements:[{name:"signature",type:"object",raw:`{
  termindato: string;
  fødselsdato: string;
  bekreftetSvpArbeidsforholdList: ArbeidsforholdFodselOgTilrettelegging[];
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"bekreftetSvpArbeidsforholdList",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: Array<tjenester_behandling_svp_SvpTilretteleggingDatoDto>;
  uttakArbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
  arbeidsgiverReferanse?: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  kopiertFraTidligereBehandling?: boolean;
  mottattTidspunkt?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  stillingsprosentStartTilrettelegging?: number;
  velferdspermisjoner: Array<tjenester_behandling_svp_VelferdspermisjonDto>;
  avklarteOppholdPerioder: Array<tjenester_behandling_svp_SvpAvklartOppholdPeriodeDto>;
  begrunnelse?: string;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: foreldrepenger_behandlingslager_behandling_tilrettelegging_TilretteleggingType;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: foreldrepenger_behandlingslager_behandling_tilrettelegging_SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:`| 'HEL_TILRETTELEGGING'
| 'DELVIS_TILRETTELEGGING'
| 'INGEN_TILRETTELEGGING'`,elements:[{name:"literal",value:"'HEL_TILRETTELEGGING'"},{name:"literal",value:"'DELVIS_TILRETTELEGGING'"},{name:"literal",value:"'INGEN_TILRETTELEGGING'"}],required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"union",raw:`| 'ENDRET_AV_SAKSBEHANDLER'
| 'REGISTRERT_AV_SAKSBEHANDLER'
| 'TIDLIGERE_VEDTAK'
| 'SØKNAD'`,elements:[{name:"literal",value:"'ENDRET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'SØKNAD'"}],required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_behandling_svp_SvpTilretteleggingDatoDto>",required:!0}},{key:"uttakArbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"kopiertFraTidligereBehandling",value:{name:"boolean",required:!1}},{key:"mottattTidspunkt",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  permisjonsprosent: number;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  erGyldig?: boolean;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}}]}}],raw:"Array<tjenester_behandling_svp_VelferdspermisjonDto>",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: foreldrepenger_behandlingslager_behandling_tilrettelegging_SvpOppholdÅrsak;
  oppholdKilde?: tjenester_behandling_svp_SvpAvklartOppholdPeriodeDto_SvpOppholdKilde;
  forVisning?: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"union",raw:"'SYKEPENGER' | 'FERIE'",elements:[{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'FERIE'"}],required:!0}},{key:"oppholdKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'INNTEKTSMELDING'
| 'REGISTRERT_AV_SAKSBEHANDLER'
| 'TIDLIGERE_VEDTAK'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"}],required:!1}},{key:"forVisning",value:{name:"boolean",required:!1}}]}}],raw:"Array<tjenester_behandling_svp_SvpAvklartOppholdPeriodeDto>",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  omsorg: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG>`,elements:[{name:"signature",type:"object",raw:`{
  omsorg: boolean;
}`,signature:{properties:[{key:"omsorg",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OM_BRUKER_ER_BOSATT>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OPPHOLDSRETT>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_LOVLIG_OPPHOLD>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_FORTSATT_MEDLEMSKAP>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT>`,elements:[{name:"signature",type:"object",raw:`{
  annenforelderHarRett: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenForelderHarRettEØS?: boolean;
}`,signature:{properties:[{key:"annenforelderHarRett",value:{name:"boolean",required:!0}},{key:"annenforelderMottarUføretrygd",value:{name:"boolean",required:!1}},{key:"annenForelderHarRettEØS",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  perioder: KontrollerFaktaPeriode[];
} & AksjonspunktTilBekreftelse<
  | AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE
  | AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER_KODE
  | AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE
  | AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE
  | AksjonspunktKode.OVERSTYR_FAKTA_UTTAK
>`,elements:[{name:"signature",type:"object",raw:`{
  perioder: KontrollerFaktaPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  uttakPeriodeType?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType;
  utsettelseÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_UtsettelseÅrsak;
  overføringÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OverføringÅrsak;
  oppholdÅrsak?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OppholdÅrsak;
  arbeidstidsprosent?: number;
  arbeidsforhold?: tjenester_behandling_uttak_dto_ArbeidsforholdDto;
  samtidigUttaksprosent?: number;
  flerbarnsdager?: boolean;
  morsAktivitet?: foreldrepenger_behandlingslager_behandling_ytelsefordeling_MorsAktivitet;
  periodeKilde: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_FordelingPeriodeKilde;
  begrunnelse?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"uttakPeriodeType",value:{name:"union",raw:`| 'FELLESPERIODE'
| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| '-'`,elements:[{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"utsettelseÅrsak",value:{name:"union",raw:`| 'ARBEID'
| 'LOVBESTEMT_FERIE'
| 'SYKDOM'
| 'INSTITUSJONSOPPHOLD_SØKER'
| 'INSTITUSJONSOPPHOLD_BARNET'
| 'HV_OVELSE'
| 'NAV_TILTAK'
| 'FRI'
| '-'`,elements:[{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'LOVBESTEMT_FERIE'"},{name:"literal",value:"'SYKDOM'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_SØKER'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_BARNET'"},{name:"literal",value:"'HV_OVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'FRI'"},{name:"literal",value:"'-'"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:`| 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'
| 'SYKDOM_ANNEN_FORELDER'
| 'IKKE_RETT_ANNEN_FORELDER'
| 'ALENEOMSORG'
| '-'`,elements:[{name:"literal",value:"'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'IKKE_RETT_ANNEN_FORELDER'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'-'"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:`| '-'
| 'UTTAK_MØDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FEDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FELLESP_ANNEN_FORELDER'
| 'UTTAK_FORELDREPENGER_ANNEN_FORELDER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTTAK_MØDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FEDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FELLESP_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FORELDREPENGER_ANNEN_FORELDER'"}],required:!1}},{key:"arbeidstidsprosent",value:{name:"number",required:!1}},{key:"arbeidsforhold",value:{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  arbeidType?: foreldrepenger_behandlingslager_uttak_UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"arbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!1}}]},required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"union",raw:`| '-'
| 'ARBEID'
| 'UTDANNING'
| 'KVALPROG'
| 'INTROPROG'
| 'TRENGER_HJELP'
| 'INNLAGT'
| 'ARBEID_OG_UTDANNING'
| 'UFØRE'
| 'IKKE_OPPGITT'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'KVALPROG'"},{name:"literal",value:"'INTROPROG'"},{name:"literal",value:"'TRENGER_HJELP'"},{name:"literal",value:"'INNLAGT'"},{name:"literal",value:"'ARBEID_OG_UTDANNING'"},{name:"literal",value:"'UFØRE'"},{name:"literal",value:"'IKKE_OPPGITT'"}],required:!1}},{key:"periodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"KontrollerFaktaPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  startdatoFraSoknad: string;
  opprinneligDato?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO>`,elements:[{name:"signature",type:"object",raw:`{
  startdatoFraSoknad: string;
  opprinneligDato?: string;
}`,signature:{properties:[{key:"startdatoFraSoknad",value:{name:"string",required:!0}},{key:"opprinneligDato",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  omsorgsovertakelseDato: string;
  foreldreansvarDato: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR>`,elements:[{name:"signature",type:"object",raw:`{
  omsorgsovertakelseDato: string;
  foreldreansvarDato: string;
}`,signature:{properties:[{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING>`,elements:[{name:"signature",type:"object",raw:`{
  besteberegningErKorrekt: boolean;
}`,signature:{properties:[{key:"besteberegningErKorrekt",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"AvklarBeregningsaktiviteterAP"},{name:"OverstyrBeregningsaktiviteterAP"},{name:"BeregningFaktaAP"},{name:"BeregningOverstyringAP"},{name:"FordelBeregningsgrunnlagAP"},{name:"VurderRefusjonBeregningsgrunnlagAP"},{name:"intersection",raw:`{
  omsorgsovertakelseDato: string;
  vilkarType: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OMSORGSOVERTAKELSE>`,elements:[{name:"signature",type:"object",raw:`{
  omsorgsovertakelseDato: string;
  vilkarType: string;
}`,signature:{properties:[{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"vilkarType",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
  fom: string;
  tom: string;
  type: foreldrepenger_domene_uttak_fakta_uttak_DokumentasjonVurderingBehov_Behov_Type;
  årsak: foreldrepenger_domene_uttak_fakta_uttak_DokumentasjonVurderingBehov_Behov_Årsak;
  vurdering?: tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_Vurdering;
  morsStillingsprosent?: number;
  aktivitetskravGrunnlag?: Array<tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_AktivitetskravGrunnlagArbeid>;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:`| 'UTSETTELSE'
| 'OVERFØRING'
| 'UTTAK'`,elements:[{name:"literal",value:"'UTSETTELSE'"},{name:"literal",value:"'OVERFØRING'"},{name:"literal",value:"'UTTAK'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'INNLEGGELSE_SØKER'
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
| 'TIDLIG_OPPSTART_FAR'`,elements:[{name:"literal",value:"'INNLEGGELSE_SØKER'"},{name:"literal",value:"'INNLEGGELSE_BARN'"},{name:"literal",value:"'HV_ØVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'SYKDOM_SØKER'"},{name:"literal",value:"'INNLEGGELSE_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'BARE_SØKER_RETT'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'AKTIVITETSKRAV_ARBEID'"},{name:"literal",value:"'AKTIVITETSKRAV_UTDANNING'"},{name:"literal",value:"'AKTIVITETSKRAV_KVALPROG'"},{name:"literal",value:"'AKTIVITETSKRAV_INTROPROG'"},{name:"literal",value:"'AKTIVITETSKRAV_TRENGER_HJELP'"},{name:"literal",value:"'AKTIVITETSKRAV_INNLAGT'"},{name:"literal",value:"'AKTIVITETSKRAV_ARBEID_OG_UTDANNING'"},{name:"literal",value:"'AKTIVITETSKRAV_IKKE_OPPGITT'"},{name:"literal",value:"'TIDLIG_OPPSTART_FAR'"}],required:!0}},{key:"vurdering",value:{name:"union",raw:`| 'GODKJENT'
| 'GODKJENT_AUTOMATISK'
| 'IKKE_GODKJENT'
| 'IKKE_DOKUMENTERT'`,elements:[{name:"literal",value:"'GODKJENT'"},{name:"literal",value:"'GODKJENT_AUTOMATISK'"},{name:"literal",value:"'IKKE_GODKJENT'"},{name:"literal",value:"'IKKE_DOKUMENTERT'"}],required:!1}},{key:"morsStillingsprosent",value:{name:"number",required:!1}},{key:"aktivitetskravGrunnlag",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  orgNummer: string;
  stillingsprosent: number;
  permisjon: tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_Permisjon;
}`,signature:{properties:[{key:"orgNummer",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  prosent: number;
  type: foreldrepenger_behandlingslager_behandling_aktivitetskrav_AktivitetskravPermisjonType;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| '-'
| 'UTDANNING'
| 'FORELDREPENGER'
| 'PERMITTERING'
| 'ANNEN_PERMISJON'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'ANNEN_PERMISJON'"}],required:!0}}]},required:!0}}]}}],raw:"Array<tjenester_behandling_uttak_dokumentasjon_DokumentasjonVurderingBehovDto_AktivitetskravGrunnlagArbeid>",required:!1}}]}}],raw:"DokumentasjonVurderingBehov[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  arbeidsforhold: {
    internArbeidsforholdId?: string;
    arbeidsgiverIdent: string;
    permisjonStatus: string;
  }[];
  begrunnelse: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_ARBEIDSFORHOLD_PERMISJON>`,elements:[{name:"signature",type:"object",raw:`{
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
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_DEKNINGSGRAD>`,elements:[{name:"signature",type:"object",raw:`{
  dekningsgrad: number;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  rettighetstype: foreldrepenger_behandlingslager_behandling_ytelsefordeling_Rettighetstype;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG>`,elements:[{name:"signature",type:"object",raw:`{
  rettighetstype: foreldrepenger_behandlingslager_behandling_ytelsefordeling_Rettighetstype;
}`,signature:{properties:[{key:"rettighetstype",value:{name:"union",raw:`| 'ALENEOMSORG'
| 'BEGGE_RETT'
| 'BEGGE_RETT_EØS'
| 'BARE_MOR_RETT'
| 'BARE_FAR_RETT'
| 'BARE_FAR_RETT_MOR_UFØR'`,elements:[{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'BEGGE_RETT'"},{name:"literal",value:"'BEGGE_RETT_EØS'"},{name:"literal",value:"'BARE_MOR_RETT'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'BARE_FAR_RETT_MOR_UFØR'"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_DEKNINGSGRAD>`,elements:[{name:"signature",type:"object",raw:`{
  dekningsgrad: number;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}]}],raw:"FaktaAksjonspunkt[]"}]},name:"aksjonspunkterSomSkalLagres"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}},required:!0}}]}}],raw:`Readonly<{
  behandling: Behandling;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkterForPanel: Aksjonspunkt[];
  isReadOnly: boolean;
  isSubmittable: boolean;
  harÅpentAksjonspunkt: boolean;

  submitCallback: (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
}>`},description:""},skalPanelVisesIMeny:{required:!0,tsType:{name:"boolean"},description:""},faktaPanelKode:{required:!0,tsType:{name:"FaktaPanelCode"},description:""},faktaPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactElement"},description:""}}};const T="default",_="default",C=(r=[],l=[])=>{const{behandling:e,rettigheter:t,fagsak:a,lagreAksjonspunkter:i,lagreOverstyrteAksjonspunkter:n,oppdaterProsessStegOgFaktaPanelIUrl:d,alleKodeverk:s}=m.use(v),{aksjonspunkt:o}=e,g=o.filter(k=>r.includes(k.definisjon)),N=B(e,[],t,!1),b=w(e.status,g),K=Q(a,e,d,i,n,l);return{behandling:e,isSubmittable:!g.some(p)||g.some(k=>k.kanLoses),harÅpentAksjonspunkt:g.some(k=>p(k)&&k.kanLoses),alleKodeverk:s,aksjonspunkterForPanel:g,isReadOnly:N,alleMerknaderFraBeslutter:b,submitCallback:K}},Q=(r,l,e,t,a,i)=>n=>{const s=(Array.isArray(n)?n:[n]).map(g=>({"@type":g.kode,...g})),o={saksnummer:r.saksnummer,behandlingUuid:l.uuid,behandlingVersjon:l.versjon};if(i){if(s.length===0)throw new Error("Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.");if(i.includes(s[0].kode))return a({...o,overstyrteAksjonspunktDtoer:s}).then(()=>e(_,T))}return t({...o,bekreftedeAksjonspunktDtoer:s}).then(()=>e(_,T))},z=[L.AVKLAR_VERGE],W=()=>{const r=A(),l=C(z),{behandling:e}=m.use(v),t=q(e),a=P(e,"VERGE"),{data:i,isFetching:n}=O(t.vergeOptions(e,a));return u.jsx(R,{standardPanelProps:l,faktaPanelKode:I.VERGE,faktaPanelMenyTekst:r.formatMessage({id:"FaktaInitPanel.Title.Verge"}),skalPanelVisesIMeny:a,children:n?u.jsx(D,{}):u.jsx(V,{verge:i,alleKodeverk:l.alleKodeverk})})};W.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaInitPanel"};export{R as F,W as V,H as a,C as u};
