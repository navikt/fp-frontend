import{j as e}from"./jsx-runtime-9c4ae004.js";import{F as U,e as _,o as J,s as W,D as x,K as $,n as Q,t as X,y as Z,m as ee,j as ne,d as u,N as p}from"./nb_NO-f3f50ba4.js";import{Y as s,z as A,b as V}from"./index.es-a3c6219c.js";import{a as k,R as t,r as q,b as T,k as ae}from"./fplosSaksbehandlerRestApi-b0e8d207.js";import{S as te,K as re,A as j}from"./SakslisteVelgerForm-9cf02158.js";import{r as g}from"./index-1b03fe98.js";import{c as se,y as R}from"./index.es-76bb323d.js";import{F as le}from"./FagsakSearchIndex-62ca8ece.js";import{O as ie}from"./OppgaveErReservertAvAnnenModal-c1d888ca.js";import{O as de}from"./OppgaverTabell-f6db0954.js";import{H as C}from"./Heading-73495d18.js";import{S as oe}from"./SistBehandledeSaker-0ac19a3d.js";import{N as ue}from"./NyeOgFerdigstilteOppgaverForIdagPanel-d9067d3c.js";import{N as pe}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-4d42e64c.js";import"./index-6fd5a17b.js";import"./index.es-c5fcd9dd.js";import"./FagsakSearch-107b0b74.js";import"./PersonInfo-078362cd.js";import"./index.es-9f4223fb.js";import"./SearchForm-d86bc167.js";import"./index.es-b5f29a80.js";import"./advarsel-27b41fd8.js";import"./FagsakList-fdaaeddf.js";import"./useLosKodeverk-074366b9.js";import"./ChevronRight-2483a1f8.js";import"./Provider-983842f2.js";import"./BehandlingPollingTimoutModal-b5319c8b.js";import"./OppgaveHandlingerMenu-fbd86114.js";import"./index.es-9acae570.js";import"./OpphevReservasjonModal-c49785f5.js";import"./OppgaveReservasjonForlengetModal-ce763855.js";import"./Panel-c899ecc9.js";const ge=n=>{const a=window.localStorage.getItem(n);return a!=="undefined"&&a!==null?a:void 0},me=(n,a)=>{window.localStorage.setItem(n,a)},ke=n=>{window.localStorage.removeItem(n)},I=({reserverOppgave:n,sakslister:a,setValgtSakslisteId:r,valgtSakslisteId:l})=>{const{startRequest:d,data:S}=k.useRestApiRunner(t.BEHANDLINGSKO_OPPGAVE_ANTALL);return e.jsxs(e.Fragment,{children:[e.jsx(C,{size:"small",children:e.jsx(U,{id:"SakslistePanel.StartBehandling"})}),e.jsx(_,{sixteenPx:!0}),e.jsx(te,{sakslister:a,setValgtSakslisteId:r,fetchAntallOppgaver:d,getValueFromLocalStorage:ge,setValueInLocalStorage:me,removeValueFromLocalStorage:ke}),e.jsx(_,{twentyPx:!0}),l&&e.jsx(de,{reserverOppgave:n,antallOppgaver:S,valgtSakslisteId:l})]})};try{I.displayName="SakslistePanel",I.__docgenInfo={description:"SakslistePanel",displayName:"SakslistePanel",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},setValgtSakslisteId:{defaultValue:null,description:"",name:"setValgtSakslisteId",required:!0,type:{name:"(sakslisteId: number) => void"}},sakslister:{defaultValue:null,description:"",name:"sakslister",required:!0,type:{name:"Readonly<{ sakslisteId: number; navn: string; behandlingTyper: string[]; fagsakYtelseTyper: string[]; andreKriterier: Readonly<{ andreKriterierType: string; inkluder: boolean; }>[]; sortering?: { ...; } | undefined; }>[]"}},reserverOppgave:{defaultValue:null,description:"",name:"reserverOppgave",required:!0,type:{name:"(oppgaveId: Readonly<{ id: number; status: Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>; ... 10 more ...; behand..."}}}}}catch{}const Se=[],N=({valgtSakslisteId:n,setValgtSakslisteId:a,åpneFagsak:r})=>{const[l,d]=g.useState(!1),[S,y]=g.useState(),[E,o]=g.useState(),{data:K=Se}=k.useRestApi(t.SAKSLISTE),{startRequest:Y}=k.useRestApiRunner(t.RESERVER_OPPGAVE),w=g.useCallback(i=>{i.status.erReservert?r(i.saksnummer.toString(),i.behandlingId):Y({oppgaveId:i.id}).then(m=>{m&&m.erReservert&&m.erReservertAvInnloggetBruker?r(i.saksnummer.toString(),i.behandlingId):m&&m.erReservert&&!m.erReservertAvInnloggetBruker&&(d(!0),y(i),o(m))})},[r]),z=g.useCallback(i=>{d(!1),y(void 0),o(void 0),r(i.saksnummer.toString(),i.behandlingId)},[r]);return K.length===0?e.jsx(C,{size:"small",children:e.jsx(U,{id:"BehandlingskoerIndex.IngenKø"})}):e.jsxs(e.Fragment,{children:[e.jsx(I,{valgtSakslisteId:n,setValgtSakslisteId:a,reserverOppgave:w,sakslister:K}),l&&S&&E&&e.jsx(ie,{lukkErReservertModalOgOpneOppgave:z,oppgave:S,oppgaveStatus:E})]})};try{N.displayName="BehandlingskoerIndex",N.__docgenInfo={description:"BehandlingskoerIndex",displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},setValgtSakslisteId:{defaultValue:null,description:"",name:"setValgtSakslisteId",required:!0,type:{name:"(sakslisteId: number) => void"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}}}}}catch{}const v=({nyeOgFerdigstilteOppgaver:n})=>{const r=g.useRef(null);return e.jsxs("div",{ref:r,children:[e.jsx(ue,{height:200,nyeOgFerdigstilteOppgaver:n}),e.jsx(_,{sixteenPx:!0}),e.jsx(pe,{height:200,nyeOgFerdigstilteOppgaver:n})]})};try{v.displayName="SaksbehandlerNokkeltallPanel",v.__docgenInfo={description:"SaksbehandlerNokkeltallPanel.",displayName:"SaksbehandlerNokkeltallPanel",props:{nyeOgFerdigstilteOppgaver:{defaultValue:null,description:"",name:"nyeOgFerdigstilteOppgaver",required:!1,type:{name:"Readonly<{ behandlingType: string; antallNye: number; antallFerdigstilte: number; dato: string; }>[]"}}}}}catch{}const b=({valgtSakslisteId:n})=>{const{data:a}=k.useRestApi(t.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,{sakslisteId:n},{updateTriggers:[n]});return e.jsx(v,{nyeOgFerdigstilteOppgaver:a})};try{b.displayName="SaksbehandlerNokkeltallIndex",b.__docgenInfo={description:"SaksbehandlerNokkeltallIndex",displayName:"SaksbehandlerNokkeltallIndex",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!0,type:{name:"number"}}}}}catch{}const O=({valgtSakslisteId:n,åpneFagsak:a})=>e.jsxs(e.Fragment,{children:[e.jsx(oe,{åpneFagsak:a}),e.jsx(_,{twentyPx:!0}),n&&e.jsx(b,{valgtSakslisteId:n})]});try{O.displayName="SaksstottePaneler",O.__docgenInfo={description:"SaksstottePaneler",displayName:"SaksstottePaneler",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}}}}}catch{}const G=({valgtSakslisteId:n,åpneFagsak:a})=>e.jsx(O,{valgtSakslisteId:n,åpneFagsak:a});try{G.displayName="SaksstotteIndex",G.__docgenInfo={description:"SaksstotteIndex",displayName:"SaksstotteIndex",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}}}}}catch{}const Ee="_gridContainer_19y4r_1",ye="_leftColumn_19y4r_9",ce="_rightColumn_19y4r_15",Re="_koerContainer_19y4r_27",he="_sokContainer_19y4r_38",c={gridContainer:Ee,leftColumn:ye,rightColumn:ce,koerContainer:Re,sokContainer:he},_e=""+new URL("advarsel-sirkel-fyll-6d4c1937.svg",import.meta.url).href,Ae="_container_1wgto_1",fe="_wordWrap_1wgto_15",Te="_driftsInfo_1wgto_19",Ie="_column_1wgto_25",f={container:Ae,wordWrap:fe,driftsInfo:Te,column:Ie},P=({driftsmeldinger:n})=>n===void 0||n.length===0?null:e.jsx("div",{className:f.container,children:n.map(a=>e.jsx(J,{children:e.jsxs(W,{children:[e.jsx(x,{children:e.jsx($,{className:f.driftsInfo,src:_e})}),e.jsx(x,{children:e.jsx(Q,{size:"small",className:f.wordWrap,children:`${a.melding}`})})]})},a.id))});try{P.displayName="DriftsmeldingPanel",P.__docgenInfo={description:`DriftsmeldingPanel

Definerer hvordan driftsmeldinger vises.`,displayName:"DriftsmeldingPanel",props:{driftsmeldinger:{defaultValue:null,description:"",name:"driftsmeldinger",required:!0,type:{name:"Readonly<{ id: string; melding: string; }>[]"}}}}}catch{}const F=({valgtSakslisteId:n,setValgtSakslisteId:a,setLosErIkkeTilgjengelig:r,åpneFagsak:l,kanSaksbehandle:d})=>{const{addErrorMessage:S}=se();q.setAddErrorMessageHandler(S);const y=k.useGlobalStateRestApiData(T.KODEVERK_LOS),E=k.useGlobalStateRestApi(T.KODEVERK_LOS,void 0,{suspendRequest:!!y}),o=k.useRestApi(t.DRIFTSMELDINGER);return g.useEffect(()=>{(o.state===R.ERROR||E.state===R.ERROR)&&r()},[o.state,E.state]),o.state!==R.SUCCESS||E.state!==R.SUCCESS&&!y?null:e.jsxs(e.Fragment,{children:[o.data&&e.jsx(P,{driftsmeldinger:o.data}),e.jsxs("div",{className:c.gridContainer,children:[e.jsxs("div",{className:c.leftColumn,children:[e.jsx("div",{className:c.koerContainer,children:e.jsx(N,{åpneFagsak:l,valgtSakslisteId:n,setValgtSakslisteId:a})}),e.jsx("div",{className:c.sokContainer,children:e.jsx(le,{åpneFagsak:l,kanSaksbehandle:d})})]}),e.jsx("div",{className:c.rightColumn,children:e.jsx(G,{valgtSakslisteId:n,åpneFagsak:l})})]})]})};try{F.displayName="SaksbehandlerDashboard",F.__docgenInfo={description:"SaksbehandlerDashboard",displayName:"SaksbehandlerDashboard",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},setValgtSakslisteId:{defaultValue:null,description:"",name:"setValgtSakslisteId",required:!0,type:{name:"(valgSakslisteId: number) => void"}},setLosErIkkeTilgjengelig:{defaultValue:null,description:"",name:"setLosErIkkeTilgjengelig",required:!0,type:{name:"() => void"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}},kanSaksbehandle:{defaultValue:null,description:"",name:"kanSaksbehandle",required:!0,type:{name:"boolean"}}}}}catch{}const Ne=X(ee),D=({setLosErIkkeTilgjengelig:n,åpneFagsak:a,kanSaksbehandle:r})=>{const[l,d]=g.useState();return e.jsx(Z,{value:Ne,children:e.jsx(F,{valgtSakslisteId:l,setValgtSakslisteId:d,setLosErIkkeTilgjengelig:n,åpneFagsak:a,kanSaksbehandle:r})})},M=D;try{D.displayName="SaksbehandlerIndex",D.__docgenInfo={description:"SaksbehandlerIndex",displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{defaultValue:null,description:"",name:"setLosErIkkeTilgjengelig",required:!0,type:{name:"() => void"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}},kanSaksbehandle:{defaultValue:null,description:"",name:"kanSaksbehandle",required:!0,type:{name:"boolean"}}}}}catch{}const ln={title:"los/saksbehandler/SaksbehandlerIndex",component:M},ve=()=>{const n=[{key:T.KODEVERK_LOS.name,data:ne,global:!0},{key:t.DRIFTSMELDINGER.name,data:[]},{key:t.SAKSLISTE.name,data:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:{kode:re.BEHANDLINGSFRIST,navn:"Behandlingsfrist",felttype:"",feltkategori:""},fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[s.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:j.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:j.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}]},{key:t.RESERVER_OPPGAVE.name,data:void 0},{key:t.RESERVERTE_OPPGAVER.name,data:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:s.FORSTEGANGSSOKNAD,behandlingStatus:V.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:A.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",href:""}]},{key:t.SAKSLISTE_SAKSBEHANDLERE.name,data:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler",avdelingsnavn:[]},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim",avdelingsnavn:[]}]},{key:t.BEHANDLINGSKO_OPPGAVE_ANTALL.name,data:1},{key:t.RESERVER_OPPGAVE.name,data:void 0},{key:t.SEARCH_FAGSAK.name,data:void 0},{key:t.OPPGAVER_FOR_FAGSAKER.name,data:void 0},{key:t.OPPGAVER_TIL_BEHANDLING.name,data:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:s.FORSTEGANGSSOKNAD,behandlingStatus:V.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:A.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",href:""}]},{key:t.HENT_RESERVASJONSSTATUS.name,data:void 0},{key:t.BEHANDLEDE_OPPGAVER.name,data:[]},{key:t.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER.name,data:[{behandlingType:s.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:u().format(p)},{behandlingType:s.KLAGE,antallNye:23,antallFerdigstilte:2,dato:u().format(p)},{behandlingType:s.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:u().format(p)},{behandlingType:s.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:u().format(p)},{behandlingType:s.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:u().subtract(1,"d").format(p)},{behandlingType:s.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:u().subtract(3,"d").format(p)},{behandlingType:s.KLAGE,antallNye:23,antallFerdigstilte:2,dato:u().subtract(4,"d").format(p)},{behandlingType:s.KLAGE,antallNye:23,antallFerdigstilte:2,dato:u().subtract(5,"d").format(p)}]}];return e.jsx(ae,{data:n,requestApi:q,children:e.jsx(M,{setLosErIkkeTilgjengelig:()=>{},åpneFagsak:()=>{},kanSaksbehandle:!0})})},h=ve.bind({});var L,B,H;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(H=(B=h.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const dn=["Default"];export{h as Default,dn as __namedExportsOrder,ln as default};
//# sourceMappingURL=SaksbehandlerIndex.stories-6416dafb.js.map
