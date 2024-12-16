import{j as S}from"./jsx-runtime-DR9Q75dM.js";import"./aktivitetStatus-02fOJoqz.js";import{V as v,P as E}from"./BehandlingHenlagtPanel-Bn_iVZE6.js";import{B,S as O,A as w,i as K,R as V,r as D}from"./AppIndex.stories-x76OhPSN.js";import{R as U}from"./bind-BuPH0iQG.js";import{r as d}from"./index-DRjF_FHU.js";import{X as L}from"./index.es-BbuduiOY.js";var A=(e=>(e.MANUELL="MANU",e.AUTOPUNKT="AUTO",e.OVERSTYRING="OVST",e.SAKSBEHANDLEROVERSTYRING="SAOV",e))(A||{});const F=(e,r)=>e.status!==B.BEHANDLING_UTREDES?{}:r.reduce((t,a)=>({...t,[a.definisjon]:{notAccepted:a.toTrinnsBehandling&&a.toTrinnsBehandlingGodkjent===!1}}),{}),N=e=>{var r;return((r=e.taskStatus)==null?void 0:r.readOnly)??!1},M=(e,r,t,a)=>{const{behandlingPaaVent:g}=e,n=a||N(e),l=r.some(i=>!i.overstyrbar);return!t.writeAccess.isEnabled||g||n||l},_="default",I=(e,r,t,a,g,n,l,i)=>{const[s,k]=d.useState(!1);d.useEffect(()=>{e({id:r})},[]);const m=a&&(i===r||l&&i===_),o=L(a);return d.useEffect(()=>{a?e({id:r,tekst:t,erAktiv:m,harApentAksjonspunkt:g,status:n}):!a&&o&&e({id:r}),k(m)},[a,o,m,g,n]),a&&s},H="default",Y="default",C=(e,r,t,a,g,n)=>l=>{const i=Array.isArray(l)?l:[l],s=i.map(o=>({"@type":o.kode,...o})),k={saksnummer:r.saksnummer,behandlingUuid:t.uuid,behandlingVersjon:t.versjon},m=e(i);if(n){const o=a.filter(p=>i.some(y=>y.kode===p.definisjon)),f=o.some(p=>p.aksjonspunktType===A.OVERSTYRING||p.aksjonspunktType===A.SAKSBEHANDLEROVERSTYRING);if(i.length===0)throw Error("Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.");if(o.length===0||f)return n({...k,overstyrteAksjonspunktDtoer:s},!0).then(m)}return g({...k,bekreftedeAksjonspunktDtoer:s},!0).then(m)},G=(e,r)=>{if(e.length>0){const t=e.map(a=>a.vilkarStatus);return t.some(a=>a===v.IKKE_VURDERT)?v.IKKE_VURDERT:t.every(a=>a===v.OPPFYLT)?v.OPPFYLT:v.IKKE_OPPFYLT}return r.length>0?r.some(t=>K(t.status))?v.IKKE_VURDERT:v.OPPFYLT:v.IKKE_VURDERT},x=(e,r,t)=>{const[a,g]=d.useState(),n=d.useContext(O),{aksjonspunkt:l,vilkår:i}=n.behandling;d.useEffect(()=>{a&&g(void 0)},[n.behandling.versjon]);const s=d.useMemo(()=>l&&e?l.filter(u=>e.includes(u.definisjon)):[],[l,e]),k=d.useMemo(()=>i&&r?i.filter(u=>r.includes(u.vilkarType)):[],[i,r]),m=M(n.behandling,k,n.rettigheter,n.hasFetchError),o=d.useMemo(()=>F(n.behandling,s),[n.behandling.versjon,s]),f=s.some(u=>u.status===w.OPPRETTET&&u.kanLoses),p=d.useMemo(()=>G(k,s),[k,s]),y=!s.some(u=>u.kanLoses)||v.OPPFYLT===p,b=d.useCallback(()=>()=>{n.oppdaterProsessStegOgFaktaPanelIUrl(Y,H)},[]),h=d.useMemo(()=>C(t||b,n.fagsak,n.behandling,s,n.lagreAksjonspunkter,n.lagreOverstyrteAksjonspunkter),[n.behandling.versjon,s]);return{fagsak:n.fagsak,behandling:n.behandling,isAksjonspunktOpen:f,aksjonspunkter:s,vilkar:k,alleKodeverk:n.alleKodeverk,alleMerknaderFraBeslutter:o,isReadOnly:m,readOnlySubmitButton:y,submitCallback:h,status:p,formData:a,setFormData:g}},X=({valgtProsessSteg:e,behandling:r,registrerProsessPanel:t,panelEndepunkter:a=[],aksjonspunktKoder:g,vilkarKoder:n,skalPanelVisesIMeny:l,renderPanel:i,prosessPanelKode:s,prosessPanelMenyTekst:k,lagringSideEffekter:m,hentOverstyrtStatus:o,erOverstyrt:f=!1,hentSkalMarkeresSomAktiv:p})=>{const y=x(g,n,m),b=o?o(y):y.status,h=p&&p(y)&&!r.behandlingHenlagt,u=f||y.isAksjonspunktOpen,c=I(t,s,k,l(y),u,b,h||u,e),q=a.map(P=>P instanceof V?{key:P}:P),T=!c||q.length===0||b===v.IKKE_VURDERT&&!u,{data:j,state:R}=D.useMultipleRestApi(q,{updateTriggers:[c,r.versjon,b,u],suspendRequest:T,isCachingOn:!0});return S.jsx(E,{erPanelValgt:c,erAksjonspunktOpent:y.isAksjonspunktOpen,status:b,dataState:q.length>0?R:U.SUCCESS,children:i({...j,...y})})};X.__docgenInfo={description:"",methods:[],displayName:"ProsessDefaultInitPanel",props:{panelEndepunkter:{required:!1,tsType:{name:"union",raw:"RestKey<any, any>[] | { key: RestKey<any, any>; params?: any }[]",elements:[{name:"Array",elements:[{name:"RestKey",elements:[{name:"any"},{name:"any"}],raw:"RestKey<any, any>"}],raw:"RestKey<any, any>[]"},{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: RestKey<any, any>; params?: any }",signature:{properties:[{key:"key",value:{name:"RestKey",elements:[{name:"any"},{name:"any"}],raw:"RestKey<any, any>",required:!0}},{key:"params",value:{name:"any",required:!1}}]}}],raw:"{ key: RestKey<any, any>; params?: any }[]"}]},description:"",defaultValue:{value:"[]",computed:!1}},aksjonspunktKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},vilkarKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},skalPanelVisesIMeny:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: StandardProsessPanelProps) => boolean",signature:{arguments:[{type:{name:"StandardProsessPanelProps"},name:"data"}],return:{name:"boolean"}}},description:""},hentOverstyrtStatus:{required:!1,tsType:{name:"signature",type:"function",raw:"(standardData: StandardProsessPanelProps) => string",signature:{arguments:[{type:{name:"StandardProsessPanelProps"},name:"standardData"}],return:{name:"string"}}},description:""},renderPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: PANEL_DATA & StandardProsessPanelProps) => ReactElement",signature:{arguments:[{type:{name:"intersection",raw:"PANEL_DATA & StandardProsessPanelProps",elements:[{name:"PANEL_DATA"},{name:"StandardProsessPanelProps"}]},name:"data"}],return:{name:"ReactElement"}}},description:""},prosessPanelKode:{required:!0,tsType:{name:"ProsessStegCode"},description:""},prosessPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""},lagringSideEffekter:{required:!1,tsType:{name:"signature",type:"function",raw:"(aksjonspunktModeller: any) => () => void",signature:{arguments:[{type:{name:"any"},name:"aksjonspunktModeller"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}}},description:""},erOverstyrt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hentSkalMarkeresSomAktiv:{required:!1,tsType:{name:"signature",type:"function",raw:"(standardData: StandardProsessPanelProps) => boolean",signature:{arguments:[{type:{name:"StandardProsessPanelProps"},name:"standardData"}],return:{name:"boolean"}}},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};export{X as P,I as a,M as e,F as g,x as u};
