import{j as E}from"./jsx-runtime-DR9Q75dM.js";import{R as S}from"./useRestApiRunner-BKOIDkPf.js";import{r as d}from"./index-DRjF_FHU.js";import{S as K,R as O,r as w}from"./AppIndex.stories-DKPc_YGa.js";import{b as B,H as V,x as v,E as D}from"./index.es-zhgnUGpN.js";import{X as U}from"./index.es-CItve0Ui.js";import{P as L}from"./BehandlingHenlagtPanel-CKY3pr0L.js";const A={MANUELL:"MANU",AUTOPUNKT:"AUTO",OVERSTYRING:"OVST",SAKSBEHANDLEROVERSTYRING:"SAOV"},F={OPPFYLT:"OPPFYLT",IKKE_OPPFYLT:"IKKE_OPPFYLT",IKKE_VURDERT:"IKKE_VURDERT"},N=a=>a.taskStatus&&a.taskStatus.readOnly?a.taskStatus.readOnly:!1,_=(a,r,t,n)=>{const{behandlingPaaVent:g}=a,e=n||N(a),l=r.some(i=>!i.overstyrbar);return!t.writeAccess.isEnabled||g||e||l},M=(a,r)=>a.status!==B.BEHANDLING_UTREDES?{}:r.reduce((t,n)=>({...t,[n.definisjon]:{notAccepted:n.toTrinnsBehandling&&n.toTrinnsBehandlingGodkjent===!1}}),{}),I="default",Y="default",H=(a,r,t,n,g,e)=>l=>{const i=Array.isArray(l)?l:[l],s=i.map(o=>({"@type":o.kode,...o})),k={saksnummer:r.saksnummer,behandlingUuid:t.uuid,behandlingVersjon:t.versjon},m=a(i);if(e){const o=n.filter(p=>i.some(y=>y.kode===p.definisjon)),f=o.some(p=>p.aksjonspunktType===A.OVERSTYRING||p.aksjonspunktType===A.SAKSBEHANDLEROVERSTYRING);if(i.length===0)throw Error("Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.");if(o.length===0||f)return e({...k,overstyrteAksjonspunktDtoer:s},!0).then(m)}return g({...k,bekreftedeAksjonspunktDtoer:s},!0).then(m)},C=(a,r)=>{if(a.length>0){const t=a.map(n=>n.vilkarStatus);return t.some(n=>n===v.IKKE_VURDERT)?v.IKKE_VURDERT:t.every(n=>n===v.OPPFYLT)?v.OPPFYLT:v.IKKE_OPPFYLT}return r.length>0?r.some(t=>D(t.status))?v.IKKE_VURDERT:v.OPPFYLT:v.IKKE_VURDERT},G=(a,r,t)=>{const[n,g]=d.useState(),e=d.useContext(K),{aksjonspunkt:l,vilkår:i}=e.behandling;d.useEffect(()=>{n&&g(void 0)},[e.behandling.versjon]);const s=d.useMemo(()=>l&&a?l.filter(u=>a.includes(u.definisjon)):[],[l,a]),k=d.useMemo(()=>i&&r?i.filter(u=>r.includes(u.vilkarType)):[],[i,r]),m=_(e.behandling,k,e.rettigheter,e.hasFetchError),o=d.useMemo(()=>M(e.behandling,s),[e.behandling.versjon,s]),f=s.some(u=>u.status===V.OPPRETTET&&u.kanLoses),p=d.useMemo(()=>C(k,s),[k,s]),y=!s.some(u=>u.kanLoses)||v.OPPFYLT===p,b=d.useCallback(()=>()=>{e.oppdaterProsessStegOgFaktaPanelIUrl(Y,I)},[]),h=d.useMemo(()=>H(t||b,e.fagsak,e.behandling,s,e.lagreAksjonspunkter,e.lagreOverstyrteAksjonspunkter),[e.behandling.versjon,s]);return{fagsak:e.fagsak,behandling:e.behandling,isAksjonspunktOpen:f,aksjonspunkter:s,vilkar:k,alleKodeverk:e.alleKodeverk,alleMerknaderFraBeslutter:o,isReadOnly:m,readOnlySubmitButton:y,submitCallback:h,status:p,formData:n,setFormData:g}},x="default",X=(a,r,t,n,g,e,l,i)=>{const[s,k]=d.useState(!1);d.useEffect(()=>{a({id:r})},[]);const m=n&&(i===r||l&&i===x),o=U(n);return d.useEffect(()=>{n?a({id:r,tekst:t,erAktiv:m,harApentAksjonspunkt:g,status:e}):!n&&o&&a({id:r}),k(m)},[n,o,m,g,e]),n&&s},W=({valgtProsessSteg:a,behandling:r,registrerProsessPanel:t,panelEndepunkter:n=[],aksjonspunktKoder:g,vilkarKoder:e,skalPanelVisesIMeny:l,renderPanel:i,prosessPanelKode:s,prosessPanelMenyTekst:k,lagringSideEffekter:m,hentOverstyrtStatus:o,erOverstyrt:f=!1,hentSkalMarkeresSomAktiv:p})=>{const y=G(g,e,m),b=o?o(y):y.status,h=p&&p(y)&&!r.behandlingHenlagt,u=f||y.isAksjonspunktOpen,c=X(t,s,k,l(y),u,b,h||u,a),q=n.map(P=>P instanceof O?{key:P}:P),T=!c||q.length===0||b===F.IKKE_VURDERT&&!u,{data:R,state:j}=w.useMultipleRestApi(q,{updateTriggers:[c,r.versjon,b,u],suspendRequest:T,isCachingOn:!0});return E.jsx(L,{erPanelValgt:c,erAksjonspunktOpent:y.isAksjonspunktOpen,status:b,dataState:q.length>0?j:S.SUCCESS,children:i({...R,...y})})};W.__docgenInfo={description:"",methods:[],displayName:"ProsessDefaultInitPanel",props:{panelEndepunkter:{required:!1,tsType:{name:"union",raw:"RestKey<any, any>[] | { key: RestKey<any, any>; params?: any }[]",elements:[{name:"Array",elements:[{name:"RestKey",elements:[{name:"any"},{name:"any"}],raw:"RestKey<any, any>"}],raw:"RestKey<any, any>[]"},{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: RestKey<any, any>; params?: any }",signature:{properties:[{key:"key",value:{name:"RestKey",elements:[{name:"any"},{name:"any"}],raw:"RestKey<any, any>",required:!0}},{key:"params",value:{name:"any",required:!1}}]}}],raw:"{ key: RestKey<any, any>; params?: any }[]"}]},description:"",defaultValue:{value:"[]",computed:!1}},aksjonspunktKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},vilkarKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},skalPanelVisesIMeny:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: StandardProsessPanelProps) => boolean",signature:{arguments:[{type:{name:"StandardProsessPanelProps"},name:"data"}],return:{name:"boolean"}}},description:""},hentOverstyrtStatus:{required:!1,tsType:{name:"signature",type:"function",raw:"(standardData: StandardProsessPanelProps) => string",signature:{arguments:[{type:{name:"StandardProsessPanelProps"},name:"standardData"}],return:{name:"string"}}},description:""},renderPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: PANEL_DATA & StandardProsessPanelProps) => ReactElement",signature:{arguments:[{type:{name:"intersection",raw:"PANEL_DATA & StandardProsessPanelProps",elements:[{name:"PANEL_DATA"},{name:"StandardProsessPanelProps"}]},name:"data"}],return:{name:"ReactElement"}}},description:""},prosessPanelKode:{required:!0,tsType:{name:"ProsessStegCode"},description:""},prosessPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""},lagringSideEffekter:{required:!1,tsType:{name:"signature",type:"function",raw:"(aksjonspunktModeller: any) => () => void",signature:{arguments:[{type:{name:"any"},name:"aksjonspunktModeller"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}}},description:""},erOverstyrt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hentSkalMarkeresSomAktiv:{required:!1,tsType:{name:"signature",type:"function",raw:"(standardData: StandardProsessPanelProps) => boolean",signature:{arguments:[{type:{name:"StandardProsessPanelProps"},name:"standardData"}],return:{name:"boolean"}}},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};export{W as P,X as a,_ as e,M as g,G as u,F as v};
