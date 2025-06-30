import{r as g,l as T,j as u,b0 as E,b1 as h,aL as K}from"./iframe-C9QwebDF.js";import{X as c}from"./index.es-DdjAZTEe.js";import{u as B}from"./fagsakApi-DKpXaqNP.js";import{V}from"./BehandlingMenuIndex-DkGrUsyN.js";import{i as v,A as S}from"./index-BA7NrTki.js";import{u as O,c as _}from"./behandlingApi-10PurFxO.js";import{B as p}from"./FagsakIndex-DQFTRwgN.js";import{J as P}from"./index.es-iXepE92I.js";import{H as F}from"./VStack-CReCDfuq.js";import{S as N}from"./ExclamationmarkTriangleFill-CMjeCd9A.js";import{e as D,g as M}from"./useStandardProsessPanelProps-vtWbXTms.js";const U=n=>{const[a,e]=g.useState([]),s=r=>{e(i=>{const t=[...i],d=t.findIndex(l=>l.id===r.id);return d>=0?t.splice(d,1,r):t.push(r),t}),n==null||n(r.harApneAksjonspunkter?{urlCode:r.id,text:r.tekst}:void 0)};return{faktaPanelMenyData:a.filter(r=>r.skalVisesImeny),settFaktaPanelMenyData:s}},G="_container_610fz_1",I="_content_610fz_6",L="_sideMenu_610fz_14",y={container:G,content:I,sideMenu:L},H=({valgtFaktaSteg:n,valgtProsessSteg:a,setFaktaPanelMedÅpentApInfo:e,children:s})=>{const r=T(),{oppdaterProsessStegOgFaktaPanelIUrl:i}=g.use(p),{faktaPanelMenyData:t,settFaktaPanelMenyData:d}=U(e),l=t.length>0;return u.jsxs(F,{className:y.container,wrap:!1,children:[l&&u.jsx("div",{className:y.sideMenu,"data-testid":"fakta-meny",children:u.jsx(P,{heading:r.formatMessage({id:"FaktaMeny.FaktaOm"}),links:t.map(o=>({label:o.tekst,active:o.erAktiv,icon:o.harApneAksjonspunkter?u.jsx(N,{color:"var(--a-orange-600)"}):void 0})),onClick:o=>{i(a,t[o].id)}})}),u.jsx("div",{className:y.content,children:u.jsx(Y,{valgtFaktaSteg:n,settFaktaPanelMenyData:d,faktaPanelMenyData:t,children:s})})]})},f=g.createContext({}),Y=n=>{const{children:a,...e}=n,s=g.useMemo(()=>e,[e]);return u.jsx(f.Provider,{value:s,children:a})};H.__docgenInfo={description:"",methods:[],displayName:"FaktaMeny",props:{valgtProsessSteg:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},valgtFaktaSteg:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},setFaktaPanelMedÅpentApInfo:{required:!1,tsType:{name:"signature",type:"function",raw:"(faktaPanelMedÅpentApInfo?: FaktaPanelMedÅpentApInfo) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  urlCode: string;
  text: string;
}`,signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},name:"faktaPanelMedÅpentApInfo"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const x="default",J=(n,a,e,s)=>{const{valgtFaktaSteg:r,settFaktaPanelMenyData:i}=g.use(f),t=e&&(r===n||s&&r===x);return g.useEffect(()=>{i({id:n,tekst:a,erAktiv:t,harApneAksjonspunkter:s,skalVisesImeny:e})},[e,t,s]),e&&t},q=({standardPanelProps:n,skalPanelVisesIMeny:a,faktaPanelKode:e,faktaPanelMenyTekst:s,children:r})=>{const{behandling:i,fagsak:t,alleKodeverk:d}=g.use(p),l=J(e,s,a,n.harApneAksjonspunkter);return u.jsx(E,{behandling:i,children:l?u.jsx(h,{behandling:i,fagsak:t,alleKodeverk:d,aksjonspunkterForPanel:n.aksjonspunkter,harÅpneAksjonspunkter:n.harApneAksjonspunkter,submitCallback:n.submitCallback,isReadOnly:n.readOnly,alleMerknaderFraBeslutter:n.alleMerknaderFraBeslutter,children:r}):null})};q.__docgenInfo={description:"",methods:[],displayName:"FaktaDefaultInitPanel",props:{standardPanelProps:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submittable: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  submitCallback: (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleKodeverk: AlleKodeverk;
}`,signature:{properties:[{key:"behandling",value:{name:"intersection",raw:`BehandlingFellesData &
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
  status: BehandlingStatus;
  type: BehandlingType;
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
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
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
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
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
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
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
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
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
}>`}],required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"submittable",value:{name:"boolean",required:!0}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!0}},{key:"alleMerknaderFraBeslutter",value:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"submitCallback",value:{name:"signature",type:"function",raw:"(aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>",signature:{arguments:[{type:{name:"union",raw:"FaktaAksjonspunkt | FaktaAksjonspunkt[]",elements:[{name:"union",raw:`| AvklarVergeAp
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
| BekreftTerminbekreftelseAp
| SjekkManglendeFodselAp
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
} & OneOf<{ organisasjonsnummer: string }, { fnr: string }> &
  AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VERGE>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]},{name:"signature",type:"object",raw:`{
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
  arbeidsgiverReferanse: string | null;
  arbeidsforholdRef: string | null;
  erGodkjent: boolean;
  begrunnelse: string;
  aktivitetType: string;
  opptjeningFom: string;
  opptjeningTom: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"arbeidsforholdRef",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erGodkjent",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"aktivitetType",value:{name:"string",required:!0}},{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}}]}}],raw:"OpptjeningAktivitetAp[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"bekreftetSvpArbeidsforholdList",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: UttakArbeidType;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`,required:!0}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: UttakArbeidType;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
  termindato: string;
  antallBarn: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.TERMINBEKREFTELSE>`,elements:[{name:"signature",type:"object",raw:`{
  utstedtdato: string;
  termindato: string;
  antallBarn: number;
}`,signature:{properties:[{key:"utstedtdato",value:{name:"string",required:!0}},{key:"termindato",value:{name:"string",required:!0}},{key:"antallBarn",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  dokumentasjonForeligger: boolean;
  brukAntallBarnITps: boolean;
  uidentifiserteBarn: {
    fodselsdato: string;
    dodsdato?: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SJEKK_MANGLENDE_FODSEL>`,elements:[{name:"signature",type:"object",raw:`{
  dokumentasjonForeligger: boolean;
  brukAntallBarnITps: boolean;
  uidentifiserteBarn: {
    fodselsdato: string;
    dodsdato?: string;
  }[];
}`,signature:{properties:[{key:"dokumentasjonForeligger",value:{name:"boolean",required:!0}},{key:"brukAntallBarnITps",value:{name:"boolean",required:!0}},{key:"uidentifiserteBarn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`{
  fodselsdato: string;
  dodsdato?: string;
}[]`,required:!0}}]}},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"uttakPeriodeType",value:{name:"union",raw:"UttakPeriodeType | null",elements:[{name:"UttakPeriodeType"},{name:"null"}],required:!1}},{key:"utsettelseÅrsak",value:{name:"union",raw:"UtsettelseÅrsak | null",elements:[{name:"UtsettelseÅrsak"},{name:"null"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:"OppholdArsakType | null",elements:[{name:"OppholdArsakType"},{name:"null"}],required:!1}},{key:"arbeidstidsprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"arbeidsforhold",value:{name:"union",raw:"FaktaArbeidsforhold | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"arbeidType",value:{name:"UttakArbeidType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}>`},{name:"null"}],required:!1}},{key:"samtidigUttaksprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"periodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}>`}],raw:"KontrollerFaktaPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"vurderingBehov",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: UttakType;
  årsak: UttakÅrsak;
  vurdering?: UttakVurdering | null;
  morsStillingsprosent?: number;
  aktivitetskravGrunnlag: AktivitetskravGrunnlagArbeid[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"UttakType",required:!0}},{key:"årsak",value:{name:"UttakÅrsak",required:!0}},{key:"vurdering",value:{name:"union",raw:"UttakVurdering | null",elements:[{name:"UttakVurdering"},{name:"null"}],required:!1}},{key:"morsStillingsprosent",value:{name:"number",required:!1}},{key:"aktivitetskravGrunnlag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgNummer: string;
  stillingsprosent: number;
  permisjon: Permisjon;
}`,signature:{properties:[{key:"orgNummer",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"permisjon",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  orgNummer: string;
  stillingsprosent: number;
  permisjon: Permisjon;
}>`}],raw:"AktivitetskravGrunnlagArbeid[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: UttakType;
  årsak: UttakÅrsak;
  vurdering?: UttakVurdering | null;
  morsStillingsprosent?: number;
  aktivitetskravGrunnlag: AktivitetskravGrunnlagArbeid[];
}>`}],raw:"DokumentasjonVurderingBehov[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
  rettighetstype: Rettighetstype;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG>`,elements:[{name:"signature",type:"object",raw:`{
  rettighetstype: Rettighetstype;
}`,signature:{properties:[{key:"rettighetstype",value:{name:"Rettighetstype",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
| BekreftTerminbekreftelseAp
| SjekkManglendeFodselAp
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
} & OneOf<{ organisasjonsnummer: string }, { fnr: string }> &
  AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VERGE>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]},{name:"signature",type:"object",raw:`{
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
  arbeidsgiverReferanse: string | null;
  arbeidsforholdRef: string | null;
  erGodkjent: boolean;
  begrunnelse: string;
  aktivitetType: string;
  opptjeningFom: string;
  opptjeningTom: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"arbeidsforholdRef",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erGodkjent",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"aktivitetType",value:{name:"string",required:!0}},{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}}]}}],raw:"OpptjeningAktivitetAp[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"bekreftetSvpArbeidsforholdList",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: UttakArbeidType;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`,required:!0}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: UttakArbeidType;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
  termindato: string;
  antallBarn: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.TERMINBEKREFTELSE>`,elements:[{name:"signature",type:"object",raw:`{
  utstedtdato: string;
  termindato: string;
  antallBarn: number;
}`,signature:{properties:[{key:"utstedtdato",value:{name:"string",required:!0}},{key:"termindato",value:{name:"string",required:!0}},{key:"antallBarn",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  dokumentasjonForeligger: boolean;
  brukAntallBarnITps: boolean;
  uidentifiserteBarn: {
    fodselsdato: string;
    dodsdato?: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SJEKK_MANGLENDE_FODSEL>`,elements:[{name:"signature",type:"object",raw:`{
  dokumentasjonForeligger: boolean;
  brukAntallBarnITps: boolean;
  uidentifiserteBarn: {
    fodselsdato: string;
    dodsdato?: string;
  }[];
}`,signature:{properties:[{key:"dokumentasjonForeligger",value:{name:"boolean",required:!0}},{key:"brukAntallBarnITps",value:{name:"boolean",required:!0}},{key:"uidentifiserteBarn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`{
  fodselsdato: string;
  dodsdato?: string;
}[]`,required:!0}}]}},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"uttakPeriodeType",value:{name:"union",raw:"UttakPeriodeType | null",elements:[{name:"UttakPeriodeType"},{name:"null"}],required:!1}},{key:"utsettelseÅrsak",value:{name:"union",raw:"UtsettelseÅrsak | null",elements:[{name:"UtsettelseÅrsak"},{name:"null"}],required:!1}},{key:"overføringÅrsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"oppholdÅrsak",value:{name:"union",raw:"OppholdArsakType | null",elements:[{name:"OppholdArsakType"},{name:"null"}],required:!1}},{key:"arbeidstidsprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"arbeidsforhold",value:{name:"union",raw:"FaktaArbeidsforhold | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"arbeidType",value:{name:"UttakArbeidType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse?: string | null;
  arbeidType: UttakArbeidType;
}>`},{name:"null"}],required:!1}},{key:"samtidigUttaksprosent",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"periodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  uttakPeriodeType?: UttakPeriodeType | null;
  utsettelseÅrsak?: UtsettelseÅrsak | null;
  overføringÅrsak?: string | null;
  oppholdÅrsak?: OppholdArsakType | null;
  arbeidstidsprosent?: number | null;
  arbeidsforhold?: FaktaArbeidsforhold | null;
  samtidigUttaksprosent?: number | null;
  flerbarnsdager?: boolean;
  morsAktivitet?: string | null;
  periodeKilde: FordelingPeriodeKilde;
  begrunnelse?: string | null;
}>`}],raw:"KontrollerFaktaPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"vurderingBehov",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: UttakType;
  årsak: UttakÅrsak;
  vurdering?: UttakVurdering | null;
  morsStillingsprosent?: number;
  aktivitetskravGrunnlag: AktivitetskravGrunnlagArbeid[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"UttakType",required:!0}},{key:"årsak",value:{name:"UttakÅrsak",required:!0}},{key:"vurdering",value:{name:"union",raw:"UttakVurdering | null",elements:[{name:"UttakVurdering"},{name:"null"}],required:!1}},{key:"morsStillingsprosent",value:{name:"number",required:!1}},{key:"aktivitetskravGrunnlag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgNummer: string;
  stillingsprosent: number;
  permisjon: Permisjon;
}`,signature:{properties:[{key:"orgNummer",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"permisjon",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  orgNummer: string;
  stillingsprosent: number;
  permisjon: Permisjon;
}>`}],raw:"AktivitetskravGrunnlagArbeid[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: UttakType;
  årsak: UttakÅrsak;
  vurdering?: UttakVurdering | null;
  morsStillingsprosent?: number;
  aktivitetskravGrunnlag: AktivitetskravGrunnlagArbeid[];
}>`}],raw:"DokumentasjonVurderingBehov[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
  rettighetstype: Rettighetstype;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG>`,elements:[{name:"signature",type:"object",raw:`{
  rettighetstype: Rettighetstype;
}`,signature:{properties:[{key:"rettighetstype",value:{name:"Rettighetstype",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  dekningsgrad: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_DEKNINGSGRAD>`,elements:[{name:"signature",type:"object",raw:`{
  dekningsgrad: number;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}]}],raw:"FaktaAksjonspunkt[]"}]},name:"aksjonspunkterSomSkalLagres"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}},required:!0}},{key:"alleKodeverk",value:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}],required:!0}}]}}],raw:`Readonly<{
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submittable: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  submitCallback: (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleKodeverk: AlleKodeverk;
}>`},description:""},skalPanelVisesIMeny:{required:!0,tsType:{name:"boolean"},description:""},faktaPanelKode:{required:!0,tsType:{name:"FaktaPanelCode"},description:""},faktaPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactElement"},description:""}}};const b="default",A="default",C=(n,a,e,s,r,i)=>t=>{const l=(Array.isArray(t)?t:[t]).map(k=>({"@type":k.kode,...k})),o={saksnummer:n.saksnummer,behandlingUuid:a.uuid,behandlingVersjon:a.versjon};if(l&&r&&i){if(l.length===0)throw Error("Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.");if(i.includes(l[0].kode))return r({...o,overstyrteAksjonspunktDtoer:l}).then(()=>e(A,b))}return s({...o,bekreftedeAksjonspunktDtoer:l}).then(()=>e(A,b))},z=(n,a=[])=>{const{behandling:e,rettigheter:s,fagsak:r,lagreAksjonspunkter:i,lagreOverstyrteAksjonspunkter:t,oppdaterProsessStegOgFaktaPanelIUrl:d,alleKodeverk:l}=g.use(p),{aksjonspunkt:o}=e,k=o&&n?o.filter(m=>n.includes(m.definisjon)):[],j=D(e,[],s,!1),R=M(e.status,k),w=C(r,e,d,i,t,a);return{behandling:e,submittable:!k.some(m=>v(m.status))||k.some(m=>m.kanLoses),harApneAksjonspunkter:k.some(m=>v(m.status)&&m.kanLoses),alleKodeverk:l,aksjonspunkter:k,readOnly:j,alleMerknaderFraBeslutter:R,submitCallback:w}},X=[S.AVKLAR_VERGE],Q=()=>{const n=T(),a=z(X),{behandling:e}=g.use(p),s=O(e),r=_(e,"VERGE"),{data:i,isFetching:t}=B(s.vergeOptions(e,r));return u.jsx(q,{standardPanelProps:a,faktaPanelKode:K.VERGE,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Verge"}),skalPanelVisesIMeny:r,children:t?u.jsx(c,{}):u.jsx(V,{verge:i,alleKodeverk:a.alleKodeverk,submittable:a.submittable})})};Q.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaInitPanel"};export{q as F,Q as V,H as a,z as u};
