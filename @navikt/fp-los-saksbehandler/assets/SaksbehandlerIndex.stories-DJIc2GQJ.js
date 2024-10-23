import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{d as g}from"./dayjs.min-BsYQKNhR.js";import{h as G,f as P,y as T,t as H,P as M,m as Y,A as m}from"./nb_NO-D2w3x064.js";import{Y as i,z as A,b as I}from"./index.es-BkMxg3KK.js";import{c as y,a as t,r as K,R as h,b as z}from"./fplosSaksbehandlerRestApi-Dn6WkI7i.js";import{r as d}from"./index-uubelm5h.js";import{R as J,a as R}from"./useRestApiRunner-BRG0l7Io.js";import{a as Q}from"./alleKodeverkLos-BJud6Q-i.js";import{S as W,K as X,A as N}from"./SakslisteVelgerForm-DUKuqyiK.js";import{F as Z}from"./FagsakSearchIndex-DxOy1lf-.js";import{O as $}from"./OppgaveErReservertAvAnnenModal-EuuRR_o1.js";import{O as ee}from"./OppgaverTabell-cH-N5iCB.js";import{S as ne}from"./SistBehandledeSaker-COr5Uxlo.js";import{N as re}from"./NyeOgFerdigstilteOppgaverForIdagPanel-Df__FvH1.js";import{N as te}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-BOxe9OU5.js";import{D as ae}from"./DriftsmeldingPanel-C9DsE43J.js";import"./index-CfOt2XX2.js";import"./kodeverkTyper-CavWL6Ds.js";import"./kodeverkUtils-RGNAgZhp.js";import"./FagsakSearch-BYjFU5vp.js";import"./PersonInfo-CGdLRzod.js";import"./Kjonnkode-C-fkzSiP.js";import"./SearchForm-2ofIwvTc.js";import"./index.es-BS3KsWJ9.js";import"./ExclamationmarkTriangleFill-_BlAmCEt.js";import"./FagsakList-C13BtSBm.js";import"./useLosKodeverk-DZoqMbdR.js";import"./ChevronRight-CTWdv7l-.js";import"./BehandlingPollingTimoutModal-C2cs0Nik.js";import"./OppgaveHandlingerMenu-CxicfZ__.js";import"./FlyttReservasjonModal-CFmqJaq4.js";import"./OpphevReservasjonModal-DEjrRIwv.js";import"./OppgaveReservasjonForlengetModal-Dboe-vu_.js";import"./Panel-tHnbgXfl.js";const se=()=>{const n=d.useContext(J),r=d.useCallback(s=>{n&&n({type:"add",data:s})},[]),a=d.useCallback(()=>{n&&n({type:"remove"})},[]);return{addErrorMessage:r,removeErrorMessages:a}},ie=n=>{const r=window.localStorage.getItem(n);return r!=="undefined"&&r!==null?r:void 0},de=(n,r)=>{window.localStorage.setItem(n,r)},le=n=>{window.localStorage.removeItem(n)},F=({reserverOppgave:n,sakslister:r,setValgtSakslisteId:a,valgtSakslisteId:s})=>{const{startRequest:o,data:k}=y.useRestApiRunner(t.BEHANDLINGSKO_OPPGAVE_ANTALL);return e.jsxs(e.Fragment,{children:[e.jsx(G,{size:"small",children:e.jsx(P,{id:"SakslistePanel.StartBehandling"})}),e.jsx(T,{sixteenPx:!0}),e.jsx(W,{sakslister:r,setValgtSakslisteId:a,fetchAntallOppgaver:o,getValueFromLocalStorage:ie,setValueInLocalStorage:de,removeValueFromLocalStorage:le}),e.jsx(T,{twentyPx:!0}),s&&e.jsx(ee,{reserverOppgave:n,antallOppgaver:k,valgtSakslisteId:s})]})};F.__docgenInfo={description:"SakslistePanel",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn: string;
  behandlingTyper: string[];
  fagsakYtelseTyper: string[];
  andreKriterier: AnnetKriterie[];
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andreKriterierType: string;
  inkluder: boolean;
}`,signature:{properties:[{key:"andreKriterierType",value:{name:"string",required:!0}},{key:"inkluder",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  andreKriterierType: string;
  inkluder: boolean;
}>`}],raw:"AnnetKriterie[]",required:!0}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
  sorteringType: string;
  fra?: number;
  til?: number;
  fomDato?: string;
  tomDato?: string;
  erDynamiskPeriode: boolean;
}`,signature:{properties:[{key:"sorteringType",value:{name:"string",required:!0}},{key:"fra",value:{name:"number",required:!1}},{key:"til",value:{name:"number",required:!1}},{key:"fomDato",value:{name:"string",required:!1}},{key:"tomDato",value:{name:"string",required:!1}},{key:"erDynamiskPeriode",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  sakslisteId: number;
  navn: string;
  behandlingTyper: string[];
  fagsakYtelseTyper: string[];
  andreKriterier: AnnetKriterie[];
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
}>`}],raw:"Saksliste[]"},description:""},reserverOppgave:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgaveId: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"status",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}`,signature:{properties:[{key:"erReservert",value:{name:"boolean",required:!0}},{key:"reservertTilTidspunkt",value:{name:"string",required:!1}},{key:"erReservertAvInnloggetBruker",value:{name:"boolean",required:!1}},{key:"reservertAvUid",value:{name:"string",required:!1}},{key:"reservertAvNavn",value:{name:"string",required:!1}},{key:"flyttetReservasjon",value:{name:"signature",type:"object",raw:`{
  tidspunkt: string;
  uid: string;
  navn: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"tidspunkt",value:{name:"string",required:!0}},{key:"uid",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}>`,required:!0}},{key:"saksnummer",value:{name:"number",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"string",required:!0}},{key:"behandlingStatus",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""}}};const oe=[],q=({valgtSakslisteId:n,setValgtSakslisteId:r,åpneFagsak:a})=>{const[s,o]=d.useState(!1),[k,E]=d.useState(),[S,u]=d.useState(),{data:f=oe}=y.useRestApi(t.SAKSLISTE),{startRequest:w}=y.useRestApiRunner(t.RESERVER_OPPGAVE),U=d.useCallback(l=>{l.status.erReservert?a(l.saksnummer.toString(),l.behandlingId):w({oppgaveId:l.id}).then(p=>{p&&p.erReservert&&p.erReservertAvInnloggetBruker?a(l.saksnummer.toString(),l.behandlingId):p&&p.erReservert&&!p.erReservertAvInnloggetBruker&&(o(!0),E(l),u(p))})},[a]),C=d.useCallback(l=>{o(!1),E(void 0),u(void 0),a(l.saksnummer.toString(),l.behandlingId)},[a]);return f.length===0?e.jsx(G,{size:"small",children:e.jsx(P,{id:"BehandlingskoerIndex.IngenKø"})}):e.jsxs(e.Fragment,{children:[e.jsx(F,{valgtSakslisteId:n,setValgtSakslisteId:r,reserverOppgave:U,sakslister:f}),s&&k&&S&&e.jsx($,{lukkErReservertModalOgOpneOppgave:C,oppgave:k,oppgaveStatus:S})]})};q.__docgenInfo={description:"BehandlingskoerIndex",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const x=({nyeOgFerdigstilteOppgaver:n})=>{const a=d.useRef(null);return e.jsxs("div",{ref:a,children:[e.jsx(re,{height:200,nyeOgFerdigstilteOppgaver:n}),e.jsx(T,{sixteenPx:!0}),e.jsx(te,{height:200,nyeOgFerdigstilteOppgaver:n})]})};x.__docgenInfo={description:"SaksbehandlerNokkeltallPanel.",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const j=({valgtSakslisteId:n})=>{const{data:r}=y.useRestApi(t.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,{sakslisteId:n},{updateTriggers:[n]});return e.jsx(x,{nyeOgFerdigstilteOppgaver:r})};j.__docgenInfo={description:"SaksbehandlerNokkeltallIndex",methods:[],displayName:"SaksbehandlerNokkeltallIndex",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const L=({valgtSakslisteId:n,åpneFagsak:r})=>e.jsxs(e.Fragment,{children:[e.jsx(ne,{åpneFagsak:r}),e.jsx(T,{twentyPx:!0}),n&&e.jsx(j,{valgtSakslisteId:n})]});L.__docgenInfo={description:"SaksstottePaneler",methods:[],displayName:"SaksstottePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const B=({valgtSakslisteId:n,åpneFagsak:r})=>e.jsx(L,{valgtSakslisteId:n,åpneFagsak:r});B.__docgenInfo={description:"SaksstotteIndex",methods:[],displayName:"SaksstotteIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const ue="_gridContainer_19y4r_1",ge="_leftColumn_19y4r_9",me="_rightColumn_19y4r_15",pe="_koerContainer_19y4r_27",ye="_sokContainer_19y4r_38",v={gridContainer:ue,leftColumn:ge,rightColumn:me,koerContainer:pe,sokContainer:ye},V=({valgtSakslisteId:n,setValgtSakslisteId:r,setLosErIkkeTilgjengelig:a,åpneFagsak:s,kanSaksbehandle:o})=>{const{addErrorMessage:k}=se();K.setAddErrorMessageHandler(k);const E=y.useGlobalStateRestApiData(h.KODEVERK_LOS),S=y.useGlobalStateRestApi(h.KODEVERK_LOS,void 0,{suspendRequest:!!E}),u=y.useRestApi(t.DRIFTSMELDINGER);return d.useEffect(()=>{(u.state===R.ERROR||S.state===R.ERROR)&&a()},[u.state,S.state]),u.state!==R.SUCCESS||S.state!==R.SUCCESS&&!E?null:e.jsxs(e.Fragment,{children:[u.data&&e.jsx(ae,{driftsmeldinger:u.data}),e.jsxs("div",{className:v.gridContainer,children:[e.jsxs("div",{className:v.leftColumn,children:[e.jsx("div",{className:v.koerContainer,children:e.jsx(q,{åpneFagsak:s,valgtSakslisteId:n,setValgtSakslisteId:r})}),e.jsx("div",{className:v.sokContainer,children:e.jsx(Z,{åpneFagsak:s,kanSaksbehandle:o})})]}),e.jsx("div",{className:v.rightColumn,children:e.jsx(B,{valgtSakslisteId:n,åpneFagsak:s})})]})]})};V.__docgenInfo={description:"SaksbehandlerDashboard",methods:[],displayName:"SaksbehandlerDashboard",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(valgSakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"valgSakslisteId"}],return:{name:"void"}}},description:""},setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const ke=H(Y),c=({setLosErIkkeTilgjengelig:n,åpneFagsak:r,kanSaksbehandle:a})=>{const[s,o]=d.useState();return e.jsx(M,{value:ke,children:e.jsx(V,{valgtSakslisteId:s,setValgtSakslisteId:o,setLosErIkkeTilgjengelig:n,åpneFagsak:r,kanSaksbehandle:a})})};c.__docgenInfo={description:"SaksbehandlerIndex",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const Xe={title:"los/saksbehandler/SaksbehandlerIndex",component:c},Se=()=>{const n=[{key:h.KODEVERK_LOS.name,data:Q,global:!0},{key:t.DRIFTSMELDINGER.name,data:[]},{key:t.SAKSLISTE.name,data:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:{kode:X.BEHANDLINGSFRIST,navn:"Behandlingsfrist",felttype:"",feltkategori:""},fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[i.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:N.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:N.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}]},{key:t.RESERVER_OPPGAVE.name,data:void 0},{key:t.RESERVERTE_OPPGAVER.name,data:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:I.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:A.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",href:""}]},{key:t.SAKSLISTE_SAKSBEHANDLERE.name,data:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}]},{key:t.BEHANDLINGSKO_OPPGAVE_ANTALL.name,data:1},{key:t.RESERVER_OPPGAVE.name,data:void 0},{key:t.SEARCH_FAGSAK.name,data:void 0},{key:t.OPPGAVER_FOR_FAGSAKER.name,data:void 0},{key:t.OPPGAVER_TIL_BEHANDLING.name,data:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:I.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:A.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",href:""}]},{key:t.HENT_RESERVASJONSSTATUS.name,data:void 0},{key:t.BEHANDLEDE_OPPGAVER.name,data:[]},{key:t.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER.name,data:[{behandlingType:i.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:g().format(m)},{behandlingType:i.KLAGE,antallNye:23,antallFerdigstilte:2,dato:g().format(m)},{behandlingType:i.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:g().format(m)},{behandlingType:i.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:g().format(m)},{behandlingType:i.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:g().subtract(1,"d").format(m)},{behandlingType:i.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:g().subtract(3,"d").format(m)},{behandlingType:i.KLAGE,antallNye:23,antallFerdigstilte:2,dato:g().subtract(4,"d").format(m)},{behandlingType:i.KLAGE,antallNye:23,antallFerdigstilte:2,dato:g().subtract(5,"d").format(m)}]}];return e.jsx(z,{data:n,requestApi:K,children:e.jsx(c,{setLosErIkkeTilgjengelig:()=>{},åpneFagsak:()=>{},kanSaksbehandle:!0})})},b=Se.bind({});var O,_,D;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.DRIFTSMELDINGER.name,
    data: []
  }, {
    key: RestApiPathsKeys.SAKSLISTE.name,
    data: [{
      sakslisteId: 1,
      navn: 'Saksliste 1',
      sistEndret: '2020-10-10',
      saksbehandlerIdenter: [],
      antallBehandlinger: 1,
      sortering: {
        sorteringType: {
          kode: KoSortering.BEHANDLINGSFRIST,
          navn: 'Behandlingsfrist',
          felttype: '',
          feltkategori: ''
        },
        fra: 1,
        til: 4,
        erDynamiskPeriode: true
      },
      behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD],
      fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
      andreKriterier: [{
        andreKriterierType: AndreKriterierType.TIL_BESLUTTER,
        inkluder: true
      }, {
        andreKriterierType: AndreKriterierType.REGISTRER_PAPIRSOKNAD,
        inkluder: false
      }]
    }]
  }, {
    key: RestApiPathsKeys.RESERVER_OPPGAVE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.RESERVERTE_OPPGAVER.name,
    data: [{
      id: 2,
      status: {
        erReservert: true
      },
      saksnummer: 1234,
      personnummer: '1212',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
      opprettetTidspunkt: '2019-01-01',
      behandlingsfrist: '2019-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '2',
      href: ''
    }]
  }, {
    key: RestApiPathsKeys.SAKSLISTE_SAKSBEHANDLERE.name,
    data: [{
      brukerIdent: {
        brukerIdent: '32434',
        verdi: '32434'
      },
      navn: 'Espen Utvikler'
    }, {
      brukerIdent: {
        brukerIdent: '31111',
        verdi: '32111'
      },
      navn: 'Auto Joakim'
    }]
  }, {
    key: RestApiPathsKeys.BEHANDLINGSKO_OPPGAVE_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.RESERVER_OPPGAVE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.SEARCH_FAGSAK.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.OPPGAVER_FOR_FAGSAKER.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.OPPGAVER_TIL_BEHANDLING.name,
    data: [{
      id: 1,
      status: {
        erReservert: false,
        flyttetReservasjon: {
          tidspunkt: '2019-02-02',
          uid: '23423',
          navn: 'Espen Utvikler',
          begrunnelse: 'Flyttet'
        }
      },
      saksnummer: 1234,
      personnummer: '1212',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
      opprettetTidspunkt: '2019-01-01',
      behandlingsfrist: '2019-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '1',
      href: ''
    }]
  }, {
    key: RestApiPathsKeys.HENT_RESERVASJONSSTATUS.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.BEHANDLEDE_OPPGAVER.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER.name,
    data: [{
      behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
      antallNye: 10,
      antallFerdigstilte: 20,
      dato: dayjs().format(ISO_DATE_FORMAT)
    }, {
      behandlingType: BehandlingType.KLAGE,
      antallNye: 23,
      antallFerdigstilte: 2,
      dato: dayjs().format(ISO_DATE_FORMAT)
    }, {
      behandlingType: BehandlingType.REVURDERING,
      antallNye: 3,
      antallFerdigstilte: 24,
      dato: dayjs().format(ISO_DATE_FORMAT)
    }, {
      behandlingType: BehandlingType.DOKUMENTINNSYN,
      antallNye: 23,
      antallFerdigstilte: 12,
      dato: dayjs().format(ISO_DATE_FORMAT)
    }, {
      behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
      antallNye: 10,
      antallFerdigstilte: 20,
      dato: dayjs().subtract(1, 'd').format(ISO_DATE_FORMAT)
    }, {
      behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
      antallNye: 30,
      antallFerdigstilte: 15,
      dato: dayjs().subtract(3, 'd').format(ISO_DATE_FORMAT)
    }, {
      behandlingType: BehandlingType.KLAGE,
      antallNye: 23,
      antallFerdigstilte: 2,
      dato: dayjs().subtract(4, 'd').format(ISO_DATE_FORMAT)
    }, {
      behandlingType: BehandlingType.KLAGE,
      antallNye: 23,
      antallFerdigstilte: 2,
      dato: dayjs().subtract(5, 'd').format(ISO_DATE_FORMAT)
    }]
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SaksbehandlerIndex setLosErIkkeTilgjengelig={() => undefined} åpneFagsak={() => undefined} kanSaksbehandle />
    </RestApiMock>;
}`,...(D=(_=b.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const Ze=["Default"];export{b as Default,Ze as __namedExportsOrder,Xe as default};
