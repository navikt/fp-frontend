import{j as E}from"./index.es-wB6XluAU.js";import{R as S}from"./useRestApiRunner-PcoO3Hjx.js";import{r as d}from"./index-DogsOklH.js";import{S as K,R as O,r as w}from"./AppIndex.stories-gVQm8xNZ.js";import{b as B,H as V,x as v,E as D}from"./index.es-tCBKjOwM.js";import{K as U}from"./index.es-VLz0Qp7m.js";import{P as F}from"./BehandlingHenlagtPanel-7-m7nv4H.js";const A={MANUELL:"MANU",AUTOPUNKT:"AUTO",OVERSTYRING:"OVST",SAKSBEHANDLEROVERSTYRING:"SAOV"},L={OPPFYLT:"OPPFYLT",IKKE_OPPFYLT:"IKKE_OPPFYLT",IKKE_VURDERT:"IKKE_VURDERT"},N=a=>a.taskStatus&&a.taskStatus.readOnly?a.taskStatus.readOnly:!1,_=(a,r,s,e,g)=>{const{behandlingPaaVent:n}=a,l=g||N(a),i=s.some(t=>!t.overstyrbar);return!e.writeAccess.isEnabled||n||l||i},M=(a,r)=>a.status!==B.BEHANDLING_UTREDES?{}:r.reduce((s,e)=>({...s,[e.definisjon]:{notAccepted:e.toTrinnsBehandling&&e.toTrinnsBehandlingGodkjent===!1}}),{}),I="default",Y="default",H=(a,r,s,e,g,n)=>l=>{const i=Array.isArray(l)?l:[l],t=i.map(o=>({"@type":o.kode,...o})),k={saksnummer:r.saksnummer,behandlingUuid:s.uuid,behandlingVersjon:s.versjon},m=a(i);if(n){const o=e.filter(p=>i.some(y=>y.kode===p.definisjon)),f=o.some(p=>p.aksjonspunktType===A.OVERSTYRING||p.aksjonspunktType===A.SAKSBEHANDLEROVERSTYRING);if(i.length===0)throw Error("Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.");if(o.length===0||f)return n({...k,overstyrteAksjonspunktDtoer:t},!0).then(m)}return g({...k,bekreftedeAksjonspunktDtoer:t},!0).then(m)},C=(a,r)=>{if(a.length>0){const s=a.map(e=>e.vilkarStatus);return s.some(e=>e===v.IKKE_VURDERT)?v.IKKE_VURDERT:s.every(e=>e===v.OPPFYLT)?v.OPPFYLT:v.IKKE_OPPFYLT}return r.length>0?r.some(s=>D(s.status))?v.IKKE_VURDERT:v.OPPFYLT:v.IKKE_VURDERT},G=(a,r,s)=>{const[e,g]=d.useState(),n=d.useContext(K),{aksjonspunkt:l,vilkår:i}=n.behandling;d.useEffect(()=>{e&&g(void 0)},[n.behandling.versjon]);const t=d.useMemo(()=>l&&a?l.filter(u=>a.includes(u.definisjon)):[],[l,a]),k=d.useMemo(()=>i&&r?i.filter(u=>r.includes(u.vilkarType)):[],[i,r]),m=_(n.behandling,t,k,n.rettigheter,n.hasFetchError),o=d.useMemo(()=>M(n.behandling,t),[n.behandling.versjon,t]),f=t.some(u=>u.status===V.OPPRETTET&&u.kanLoses),p=d.useMemo(()=>C(k,t),[k,t]),y=!t.some(u=>u.kanLoses)||v.OPPFYLT===p,b=d.useCallback(()=>()=>{n.oppdaterProsessStegOgFaktaPanelIUrl(Y,I)},[]),h=d.useMemo(()=>H(s||b,n.fagsak,n.behandling,t,n.lagreAksjonspunkter,n.lagreOverstyrteAksjonspunkter),[n.behandling.versjon,t]);return{behandling:n.behandling,isAksjonspunktOpen:f,aksjonspunkter:t,vilkar:k,alleKodeverk:n.alleKodeverk,alleMerknaderFraBeslutter:o,isReadOnly:m,readOnlySubmitButton:y,submitCallback:h,status:p,formData:e,setFormData:g}},x="default",W=(a,r,s,e,g,n,l,i)=>{const[t,k]=d.useState(!1);d.useEffect(()=>{a({id:r})},[]);const m=e&&(i===r||l&&i===x),o=U(e);return d.useEffect(()=>{e?a({id:r,tekst:s,erAktiv:m,harApentAksjonspunkt:g,status:n}):!e&&o&&a({id:r}),k(m)},[e,o,m,g,n]),e&&t},z=({valgtProsessSteg:a,behandling:r,registrerProsessPanel:s,panelEndepunkter:e=[],aksjonspunktKoder:g,vilkarKoder:n,skalPanelVisesIMeny:l,renderPanel:i,prosessPanelKode:t,prosessPanelMenyTekst:k,lagringSideEffekter:m,hentOverstyrtStatus:o,erOverstyrt:f=!1,hentSkalMarkeresSomAktiv:p})=>{const y=G(g,n,m),b=o?o(y):y.status,h=p&&p(y)&&!r.behandlingHenlagt,u=f||y.isAksjonspunktOpen,c=W(s,t,k,l(y),u,b,h||u,a),q=e.map(P=>P instanceof O?{key:P}:P),T=!c||q.length===0||b===L.IKKE_VURDERT&&!u,{data:j,state:R}=w.useMultipleRestApi(q,{updateTriggers:[c,r.versjon,b,u],suspendRequest:T,isCachingOn:!0});return E.jsx(F,{erPanelValgt:c,erAksjonspunktOpent:y.isAksjonspunktOpen,status:b,dataState:q.length>0?R:S.SUCCESS,children:i({...j,...y})})};z.__docgenInfo={description:"",methods:[],displayName:"ProsessDefaultInitPanel",props:{panelEndepunkter:{required:!1,tsType:{name:"union",raw:"RestKey<any, any>[] | { key: RestKey<any, any>; params?: any }[]",elements:[{name:"Array",elements:[{name:"RestKey",elements:[{name:"any"},{name:"any"}],raw:"RestKey<any, any>"}],raw:"RestKey<any, any>[]"},{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: RestKey<any, any>; params?: any }",signature:{properties:[{key:"key",value:{name:"RestKey",elements:[{name:"any"},{name:"any"}],raw:"RestKey<any, any>",required:!0}},{key:"params",value:{name:"any",required:!1}}]}}],raw:"{ key: RestKey<any, any>; params?: any }[]"}]},description:"",defaultValue:{value:"[]",computed:!1}},aksjonspunktKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},vilkarKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},skalPanelVisesIMeny:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: StandardProsessPanelProps) => boolean",signature:{arguments:[{type:{name:"StandardProsessPanelProps"},name:"data"}],return:{name:"boolean"}}},description:""},hentOverstyrtStatus:{required:!1,tsType:{name:"signature",type:"function",raw:"(standardData: StandardProsessPanelProps) => string",signature:{arguments:[{type:{name:"StandardProsessPanelProps"},name:"standardData"}],return:{name:"string"}}},description:""},renderPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: PANEL_DATA & StandardProsessPanelProps) => ReactElement",signature:{arguments:[{type:{name:"intersection",raw:"PANEL_DATA & StandardProsessPanelProps",elements:[{name:"PANEL_DATA"},{name:"StandardProsessPanelProps"}]},name:"data"}],return:{name:"ReactElement"}}},description:""},prosessPanelKode:{required:!0,tsType:{name:"ProsessStegCode"},description:""},prosessPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""},lagringSideEffekter:{required:!1,tsType:{name:"signature",type:"function",raw:"(aksjonspunktModeller: any) => () => void",signature:{arguments:[{type:{name:"any"},name:"aksjonspunktModeller"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}}},description:""},erOverstyrt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hentSkalMarkeresSomAktiv:{required:!1,tsType:{name:"signature",type:"function",raw:"(standardData: StandardProsessPanelProps) => boolean",signature:{arguments:[{type:{name:"StandardProsessPanelProps"},name:"standardData"}],return:{name:"boolean"}}},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};export{z as P,W as a,_ as e,M as g,G as u,L as v};
