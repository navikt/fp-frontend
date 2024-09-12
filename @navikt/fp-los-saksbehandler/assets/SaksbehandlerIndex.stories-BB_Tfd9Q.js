import{j as e,d as g}from"./dayjs.min-ZUODdiE-.js";import{f as D,d as G,y as T,t as M,P as Y,m as z,E as m}from"./nb_NO-AMOPF0IO.js";import{Y as i,z as A,b as f}from"./index.es-BkMxg3KK.js";import{c as y,a as t,r as P,R as h,b as J}from"./fplosSaksbehandlerRestApi-BmCgkfCR.js";import{r as d}from"./index-uubelm5h.js";import{R as $,a as R}from"./useRestApiRunner-CYj01yVu.js";import{a as Q}from"./alleKodeverkLos-BJud6Q-i.js";import{S as W,K as X,A as I}from"./SakslisteVelgerForm-BZfHa2JV.js";import{F as Z}from"./FagsakSearchIndex-BM0IdIIG.js";import{O as ee}from"./OppgaveErReservertAvAnnenModal-DBLxWVIq.js";import{O as ne}from"./OppgaverTabell-Cimupd_8.js";import{S as re}from"./SistBehandledeSaker-DKns60Fd.js";import{N as te}from"./NyeOgFerdigstilteOppgaverForIdagPanel-DZQfQdLn.js";import{N as ae}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-B4gV9fJR.js";import{D as se}from"./DriftsmeldingPanel-Bpi26j-F.js";import"./index-BdzLX9oW.js";import"./kodeverkTyper-bpjtq0Dy.js";import"./kodeverkUtils-RGNAgZhp.js";import"./FagsakSearch-BAK7Y1Gm.js";import"./PersonInfo-Di4aSdTW.js";import"./Kjonnkode-C-fkzSiP.js";import"./SearchForm-SixYvoIR.js";import"./index.es-H1GtUYNF.js";import"./ExclamationmarkTriangleFill-B5_sCET-.js";import"./FagsakList-ilS561WR.js";import"./useLosKodeverk-DhSoc25E.js";import"./ChevronRight-dG_sBO-v.js";import"./BehandlingPollingTimoutModal-DIuNtn_t.js";import"./OppgaveHandlingerMenu-_zXzdzOT.js";import"./FlyttReservasjonModal-CZ2nQqDx.js";import"./OpphevReservasjonModal-BLCis0vc.js";import"./OppgaveReservasjonForlengetModal-CZlCLqU5.js";import"./Panel-C-Yveexg.js";const ie=()=>{const n=d.useContext($),r=d.useCallback(s=>{n&&n({type:"add",data:s})},[]),a=d.useCallback(()=>{n&&n({type:"remove"})},[]);return{addErrorMessage:r,removeErrorMessages:a}},de=n=>{const r=window.localStorage.getItem(n);return r!=="undefined"&&r!==null?r:void 0},le=(n,r)=>{window.localStorage.setItem(n,r)},oe=n=>{window.localStorage.removeItem(n)},K=({reserverOppgave:n,sakslister:r,setValgtSakslisteId:a,valgtSakslisteId:s})=>{const{startRequest:o,data:k}=y.useRestApiRunner(t.BEHANDLINGSKO_OPPGAVE_ANTALL);return e.jsxs(e.Fragment,{children:[e.jsx(D,{size:"small",children:e.jsx(G,{id:"SakslistePanel.StartBehandling"})}),e.jsx(T,{sixteenPx:!0}),e.jsx(W,{sakslister:r,setValgtSakslisteId:a,fetchAntallOppgaver:o,getValueFromLocalStorage:de,setValueInLocalStorage:le,removeValueFromLocalStorage:oe}),e.jsx(T,{twentyPx:!0}),s&&e.jsx(ne,{reserverOppgave:n,antallOppgaver:k,valgtSakslisteId:s})]})};K.__docgenInfo={description:"SakslistePanel",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""}}};const ue=[],F=({valgtSakslisteId:n,setValgtSakslisteId:r,åpneFagsak:a})=>{const[s,o]=d.useState(!1),[k,E]=d.useState(),[S,u]=d.useState(),{data:c=ue}=y.useRestApi(t.SAKSLISTE),{startRequest:U}=y.useRestApiRunner(t.RESERVER_OPPGAVE),C=d.useCallback(l=>{l.status.erReservert?a(l.saksnummer.toString(),l.behandlingId):U({oppgaveId:l.id}).then(p=>{p&&p.erReservert&&p.erReservertAvInnloggetBruker?a(l.saksnummer.toString(),l.behandlingId):p&&p.erReservert&&!p.erReservertAvInnloggetBruker&&(o(!0),E(l),u(p))})},[a]),H=d.useCallback(l=>{o(!1),E(void 0),u(void 0),a(l.saksnummer.toString(),l.behandlingId)},[a]);return c.length===0?e.jsx(D,{size:"small",children:e.jsx(G,{id:"BehandlingskoerIndex.IngenKø"})}):e.jsxs(e.Fragment,{children:[e.jsx(K,{valgtSakslisteId:n,setValgtSakslisteId:r,reserverOppgave:C,sakslister:c}),s&&k&&S&&e.jsx(ee,{lukkErReservertModalOgOpneOppgave:H,oppgave:k,oppgaveStatus:S})]})};F.__docgenInfo={description:"BehandlingskoerIndex",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const q=({nyeOgFerdigstilteOppgaver:n})=>{const a=d.useRef(null);return e.jsxs("div",{ref:a,children:[e.jsx(te,{height:200,nyeOgFerdigstilteOppgaver:n}),e.jsx(T,{sixteenPx:!0}),e.jsx(ae,{height:200,nyeOgFerdigstilteOppgaver:n})]})};q.__docgenInfo={description:"SaksbehandlerNokkeltallPanel.",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const x=({valgtSakslisteId:n})=>{const{data:r}=y.useRestApi(t.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,{sakslisteId:n},{updateTriggers:[n]});return e.jsx(q,{nyeOgFerdigstilteOppgaver:r})};x.__docgenInfo={description:"SaksbehandlerNokkeltallIndex",methods:[],displayName:"SaksbehandlerNokkeltallIndex",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const j=({valgtSakslisteId:n,åpneFagsak:r})=>e.jsxs(e.Fragment,{children:[e.jsx(re,{åpneFagsak:r}),e.jsx(T,{twentyPx:!0}),n&&e.jsx(x,{valgtSakslisteId:n})]});j.__docgenInfo={description:"SaksstottePaneler",methods:[],displayName:"SaksstottePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const L=({valgtSakslisteId:n,åpneFagsak:r})=>e.jsx(j,{valgtSakslisteId:n,åpneFagsak:r});L.__docgenInfo={description:"SaksstotteIndex",methods:[],displayName:"SaksstotteIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const ge="_gridContainer_19y4r_1",me="_leftColumn_19y4r_9",pe="_rightColumn_19y4r_15",ye="_koerContainer_19y4r_27",ke="_sokContainer_19y4r_38",v={gridContainer:ge,leftColumn:me,rightColumn:pe,koerContainer:ye,sokContainer:ke},B=({valgtSakslisteId:n,setValgtSakslisteId:r,setLosErIkkeTilgjengelig:a,åpneFagsak:s,kanSaksbehandle:o})=>{const{addErrorMessage:k}=ie();P.setAddErrorMessageHandler(k);const E=y.useGlobalStateRestApiData(h.KODEVERK_LOS),S=y.useGlobalStateRestApi(h.KODEVERK_LOS,void 0,{suspendRequest:!!E}),u=y.useRestApi(t.DRIFTSMELDINGER);return d.useEffect(()=>{(u.state===R.ERROR||S.state===R.ERROR)&&a()},[u.state,S.state]),u.state!==R.SUCCESS||S.state!==R.SUCCESS&&!E?null:e.jsxs(e.Fragment,{children:[u.data&&e.jsx(se,{driftsmeldinger:u.data}),e.jsxs("div",{className:v.gridContainer,children:[e.jsxs("div",{className:v.leftColumn,children:[e.jsx("div",{className:v.koerContainer,children:e.jsx(F,{åpneFagsak:s,valgtSakslisteId:n,setValgtSakslisteId:r})}),e.jsx("div",{className:v.sokContainer,children:e.jsx(Z,{åpneFagsak:s,kanSaksbehandle:o})})]}),e.jsx("div",{className:v.rightColumn,children:e.jsx(L,{valgtSakslisteId:n,åpneFagsak:s})})]})]})};B.__docgenInfo={description:"SaksbehandlerDashboard",methods:[],displayName:"SaksbehandlerDashboard",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(valgSakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"valgSakslisteId"}],return:{name:"void"}}},description:""},setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const Se=M(z),V=({setLosErIkkeTilgjengelig:n,åpneFagsak:r,kanSaksbehandle:a})=>{const[s,o]=d.useState();return e.jsx(Y,{value:Se,children:e.jsx(B,{valgtSakslisteId:s,setValgtSakslisteId:o,setLosErIkkeTilgjengelig:n,åpneFagsak:r,kanSaksbehandle:a})})},w=V;V.__docgenInfo={description:"SaksbehandlerIndex",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const We={title:"los/saksbehandler/SaksbehandlerIndex",component:w},Ee=()=>{const n=[{key:h.KODEVERK_LOS.name,data:Q,global:!0},{key:t.DRIFTSMELDINGER.name,data:[]},{key:t.SAKSLISTE.name,data:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:{kode:X.BEHANDLINGSFRIST,navn:"Behandlingsfrist",felttype:"",feltkategori:""},fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[i.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:I.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:I.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}]},{key:t.RESERVER_OPPGAVE.name,data:void 0},{key:t.RESERVERTE_OPPGAVER.name,data:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:f.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:A.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",href:""}]},{key:t.SAKSLISTE_SAKSBEHANDLERE.name,data:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}]},{key:t.BEHANDLINGSKO_OPPGAVE_ANTALL.name,data:1},{key:t.RESERVER_OPPGAVE.name,data:void 0},{key:t.SEARCH_FAGSAK.name,data:void 0},{key:t.OPPGAVER_FOR_FAGSAKER.name,data:void 0},{key:t.OPPGAVER_TIL_BEHANDLING.name,data:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:f.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:A.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",href:""}]},{key:t.HENT_RESERVASJONSSTATUS.name,data:void 0},{key:t.BEHANDLEDE_OPPGAVER.name,data:[]},{key:t.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER.name,data:[{behandlingType:i.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:g().format(m)},{behandlingType:i.KLAGE,antallNye:23,antallFerdigstilte:2,dato:g().format(m)},{behandlingType:i.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:g().format(m)},{behandlingType:i.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:g().format(m)},{behandlingType:i.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:g().subtract(1,"d").format(m)},{behandlingType:i.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:g().subtract(3,"d").format(m)},{behandlingType:i.KLAGE,antallNye:23,antallFerdigstilte:2,dato:g().subtract(4,"d").format(m)},{behandlingType:i.KLAGE,antallNye:23,antallFerdigstilte:2,dato:g().subtract(5,"d").format(m)}]}];return e.jsx(J,{data:n,requestApi:P,children:e.jsx(w,{setLosErIkkeTilgjengelig:()=>{},åpneFagsak:()=>{},kanSaksbehandle:!0})})},b=Ee.bind({});var N,O,_;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(_=(O=b.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const Xe=["Default"];export{b as Default,Xe as __namedExportsOrder,We as default};
