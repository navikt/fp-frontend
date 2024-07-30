import{r as l,R as e}from"./index-BBkUAzwr.js";import{d as m}from"./dayjs.min-DXWWvErk.js";import{f as D,d as G,j as T,t as M,P as Y,m as z,A as g}from"./nb_NO-Bv_fr8-1.js";import{Y as i,z as A,b as f}from"./index.es-BkMxg3KK.js";import{c as y,a as r,r as P,R as c,b as J}from"./fplosSaksbehandlerRestApi-A_nzAW8M.js";import{R as $,a as R}from"./useRestApiRunner-8WsurDIp.js";import{a as Q}from"./alleKodeverkLos-BJud6Q-i.js";import{S as W,K as X,A as I}from"./SakslisteVelgerForm-CnVB6K32.js";import{F as Z}from"./FagsakSearchIndex-Cxzbksnj.js";import{O as ee}from"./OppgaveErReservertAvAnnenModal-BuBd8uIQ.js";import{O as ne}from"./OppgaverTabell-DNpYEwWS.js";import{S as te}from"./SistBehandledeSaker-wfsmbn6k.js";import{N as re}from"./NyeOgFerdigstilteOppgaverForIdagPanel-D1WwKTVq.js";import{N as ae}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-BUSZWgrH.js";import{D as se}from"./DriftsmeldingPanel-qz0gMy-G.js";import"./index-BfZ0jBbx.js";import"./kodeverkTyper-DJMuX7JX.js";import"./kodeverkUtils-RGNAgZhp.js";import"./FagsakSearch-D_JCmQNt.js";import"./PersonInfo-2xcM8eLg.js";import"./Kjonnkode-C-fkzSiP.js";import"./SearchForm-C0SwgPkw.js";import"./index.es--uIKMW_Q.js";import"./ExclamationmarkTriangleFill-Coc6koHk.js";import"./FagsakList-b1wjBLX_.js";import"./useLosKodeverk-C914sOfX.js";import"./ChevronRight-Bcnu1h_4.js";import"./BehandlingPollingTimoutModal-BZ0WKQS5.js";import"./OppgaveHandlingerMenu-BQ6ag2sC.js";import"./FlyttReservasjonModal-DGH5jVFd.js";import"./OpphevReservasjonModal-C2IppQ69.js";import"./OppgaveReservasjonForlengetModal-B4XqLUAJ.js";import"./Panel-C0U3Uvca.js";const ie=()=>{const n=l.useContext($),t=l.useCallback(s=>{n&&n({type:"add",data:s})},[]),a=l.useCallback(()=>{n&&n({type:"remove"})},[]);return{addErrorMessage:t,removeErrorMessages:a}},le=n=>{const t=window.localStorage.getItem(n);return t!=="undefined"&&t!==null?t:void 0},de=(n,t)=>{window.localStorage.setItem(n,t)},oe=n=>{window.localStorage.removeItem(n)},K=({reserverOppgave:n,sakslister:t,setValgtSakslisteId:a,valgtSakslisteId:s})=>{const{startRequest:o,data:k}=y.useRestApiRunner(r.BEHANDLINGSKO_OPPGAVE_ANTALL);return e.createElement(e.Fragment,null,e.createElement(D,{size:"small"},e.createElement(G,{id:"SakslistePanel.StartBehandling"})),e.createElement(T,{sixteenPx:!0}),e.createElement(W,{sakslister:t,setValgtSakslisteId:a,fetchAntallOppgaver:o,getValueFromLocalStorage:le,setValueInLocalStorage:de,removeValueFromLocalStorage:oe}),e.createElement(T,{twentyPx:!0}),s&&e.createElement(ne,{reserverOppgave:n,antallOppgaver:k,valgtSakslisteId:s}))};K.__docgenInfo={description:"SakslistePanel",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""}}};const ue=[],F=({valgtSakslisteId:n,setValgtSakslisteId:t,åpneFagsak:a})=>{const[s,o]=l.useState(!1),[k,S]=l.useState(),[E,u]=l.useState(),{data:h=ue}=y.useRestApi(r.SAKSLISTE),{startRequest:H}=y.useRestApiRunner(r.RESERVER_OPPGAVE),x=l.useCallback(d=>{d.status.erReservert?a(d.saksnummer.toString(),d.behandlingId):H({oppgaveId:d.id}).then(p=>{p&&p.erReservert&&p.erReservertAvInnloggetBruker?a(d.saksnummer.toString(),d.behandlingId):p&&p.erReservert&&!p.erReservertAvInnloggetBruker&&(o(!0),S(d),u(p))})},[a]),j=l.useCallback(d=>{o(!1),S(void 0),u(void 0),a(d.saksnummer.toString(),d.behandlingId)},[a]);return h.length===0?e.createElement(D,{size:"small"},e.createElement(G,{id:"BehandlingskoerIndex.IngenKø"})):e.createElement(e.Fragment,null,e.createElement(K,{valgtSakslisteId:n,setValgtSakslisteId:t,reserverOppgave:x,sakslister:h}),s&&k&&E&&e.createElement(ee,{lukkErReservertModalOgOpneOppgave:j,oppgave:k,oppgaveStatus:E}))};F.__docgenInfo={description:"BehandlingskoerIndex",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const q=({nyeOgFerdigstilteOppgaver:n})=>{const a=l.useRef(null);return e.createElement("div",{ref:a},e.createElement(re,{height:200,nyeOgFerdigstilteOppgaver:n}),e.createElement(T,{sixteenPx:!0}),e.createElement(ae,{height:200,nyeOgFerdigstilteOppgaver:n}))};q.__docgenInfo={description:"SaksbehandlerNokkeltallPanel.",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const L=({valgtSakslisteId:n})=>{const{data:t}=y.useRestApi(r.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,{sakslisteId:n},{updateTriggers:[n]});return e.createElement(q,{nyeOgFerdigstilteOppgaver:t})};L.__docgenInfo={description:"SaksbehandlerNokkeltallIndex",methods:[],displayName:"SaksbehandlerNokkeltallIndex",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const B=({valgtSakslisteId:n,åpneFagsak:t})=>e.createElement(e.Fragment,null,e.createElement(te,{åpneFagsak:t}),e.createElement(T,{twentyPx:!0}),n&&e.createElement(L,{valgtSakslisteId:n}));B.__docgenInfo={description:"SaksstottePaneler",methods:[],displayName:"SaksstottePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const V=({valgtSakslisteId:n,åpneFagsak:t})=>e.createElement(B,{valgtSakslisteId:n,åpneFagsak:t});V.__docgenInfo={description:"SaksstotteIndex",methods:[],displayName:"SaksstotteIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const me="_gridContainer_19y4r_1",ge="_leftColumn_19y4r_9",pe="_rightColumn_19y4r_15",ye="_koerContainer_19y4r_27",ke="_sokContainer_19y4r_38",v={gridContainer:me,leftColumn:ge,rightColumn:pe,koerContainer:ye,sokContainer:ke},w=({valgtSakslisteId:n,setValgtSakslisteId:t,setLosErIkkeTilgjengelig:a,åpneFagsak:s,kanSaksbehandle:o})=>{const{addErrorMessage:k}=ie();P.setAddErrorMessageHandler(k);const S=y.useGlobalStateRestApiData(c.KODEVERK_LOS),E=y.useGlobalStateRestApi(c.KODEVERK_LOS,void 0,{suspendRequest:!!S}),u=y.useRestApi(r.DRIFTSMELDINGER);return l.useEffect(()=>{(u.state===R.ERROR||E.state===R.ERROR)&&a()},[u.state,E.state]),u.state!==R.SUCCESS||E.state!==R.SUCCESS&&!S?null:e.createElement(e.Fragment,null,u.data&&e.createElement(se,{driftsmeldinger:u.data}),e.createElement("div",{className:v.gridContainer},e.createElement("div",{className:v.leftColumn},e.createElement("div",{className:v.koerContainer},e.createElement(F,{åpneFagsak:s,valgtSakslisteId:n,setValgtSakslisteId:t})),e.createElement("div",{className:v.sokContainer},e.createElement(Z,{åpneFagsak:s,kanSaksbehandle:o}))),e.createElement("div",{className:v.rightColumn},e.createElement(V,{valgtSakslisteId:n,åpneFagsak:s}))))};w.__docgenInfo={description:"SaksbehandlerDashboard",methods:[],displayName:"SaksbehandlerDashboard",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(valgSakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"valgSakslisteId"}],return:{name:"void"}}},description:""},setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const Ee=M(z),U=({setLosErIkkeTilgjengelig:n,åpneFagsak:t,kanSaksbehandle:a})=>{const[s,o]=l.useState();return e.createElement(Y,{value:Ee},e.createElement(w,{valgtSakslisteId:s,setValgtSakslisteId:o,setLosErIkkeTilgjengelig:n,åpneFagsak:t,kanSaksbehandle:a}))},C=U;U.__docgenInfo={description:"SaksbehandlerIndex",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const We={title:"los/saksbehandler/SaksbehandlerIndex",component:C},Se=()=>{const n=[{key:c.KODEVERK_LOS.name,data:Q,global:!0},{key:r.DRIFTSMELDINGER.name,data:[]},{key:r.SAKSLISTE.name,data:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:{kode:X.BEHANDLINGSFRIST,navn:"Behandlingsfrist",felttype:"",feltkategori:""},fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[i.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:I.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:I.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}]},{key:r.RESERVER_OPPGAVE.name,data:void 0},{key:r.RESERVERTE_OPPGAVER.name,data:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:f.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:A.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",href:""}]},{key:r.SAKSLISTE_SAKSBEHANDLERE.name,data:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler",avdelingsnavn:[]},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim",avdelingsnavn:[]}]},{key:r.BEHANDLINGSKO_OPPGAVE_ANTALL.name,data:1},{key:r.RESERVER_OPPGAVE.name,data:void 0},{key:r.SEARCH_FAGSAK.name,data:void 0},{key:r.OPPGAVER_FOR_FAGSAKER.name,data:void 0},{key:r.OPPGAVER_TIL_BEHANDLING.name,data:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:f.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:A.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",href:""}]},{key:r.HENT_RESERVASJONSSTATUS.name,data:void 0},{key:r.BEHANDLEDE_OPPGAVER.name,data:[]},{key:r.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER.name,data:[{behandlingType:i.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:m().format(g)},{behandlingType:i.KLAGE,antallNye:23,antallFerdigstilte:2,dato:m().format(g)},{behandlingType:i.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:m().format(g)},{behandlingType:i.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:m().format(g)},{behandlingType:i.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:m().subtract(1,"d").format(g)},{behandlingType:i.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:m().subtract(3,"d").format(g)},{behandlingType:i.KLAGE,antallNye:23,antallFerdigstilte:2,dato:m().subtract(4,"d").format(g)},{behandlingType:i.KLAGE,antallNye:23,antallFerdigstilte:2,dato:m().subtract(5,"d").format(g)}]}];return e.createElement(J,{data:n,requestApi:P},e.createElement(C,{setLosErIkkeTilgjengelig:()=>{},åpneFagsak:()=>{},kanSaksbehandle:!0}))},b=Se.bind({});var N,O,_;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
      navn: 'Espen Utvikler',
      avdelingsnavn: []
    }, {
      brukerIdent: {
        brukerIdent: '31111',
        verdi: '32111'
      },
      navn: 'Auto Joakim',
      avdelingsnavn: []
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
}`,...(_=(O=b.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const Xe=["Default"];export{b as Default,Xe as __namedExportsOrder,We as default};
