import{j as e}from"./jsx-runtime-9c4ae004.js";import{F as j,e as h,k as Y,P as w,m as J,j as z,d as u,N as p}from"./nb_NO-b2e865e9.js";import{Y as s,z as _,b as K}from"./index.es-a3c6219c.js";import{a as k,R as t,r as B,b as T,k as $}from"./fplosSaksbehandlerRestApi-65de4e1b.js";import{S as Q,K as W,A as D}from"./SakslisteVelgerForm-e262213b.js";import{r as g}from"./index-1b03fe98.js";import{G as X,y as c}from"./index.es-3a2d92d7.js";import{F as Z}from"./FagsakSearchIndex-f2a485b0.js";import{O as ee}from"./OppgaveErReservertAvAnnenModal-8ded2fa6.js";import{O as ne}from"./OppgaverTabell-ab8ef8a2.js";import{H}from"./Heading-f91b5548.js";import{S as ae}from"./SistBehandledeSaker-1572a859.js";import{N as te}from"./NyeOgFerdigstilteOppgaverForIdagPanel-3a14df2a.js";import{N as re}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-e803f604.js";import{D as se}from"./DriftsmeldingPanel-50a67a32.js";import"./index-6fd5a17b.js";import"./index.es-c5fcd9dd.js";import"./FagsakSearch-4af9b701.js";import"./PersonInfo-260be9ab.js";import"./index.es-9f4223fb.js";import"./SearchForm-0a702194.js";import"./index.es-d6a09112.js";import"./ExclamationmarkTriangleFill-a9e0e6bd.js";import"./FagsakList-c6fea495.js";import"./useLosKodeverk-af588712.js";import"./ChevronRight-8b9055bb.js";import"./Provider-545deae6.js";import"./BehandlingPollingTimoutModal-ff65c29f.js";import"./OppgaveHandlingerMenu-332d118f.js";import"./index.es-84287325.js";import"./OpphevReservasjonModal-b558c7c9.js";import"./OppgaveReservasjonForlengetModal-b3d3c070.js";import"./Panel-d2656cdd.js";const le=n=>{const a=window.localStorage.getItem(n);return a!=="undefined"&&a!==null?a:void 0},ie=(n,a)=>{window.localStorage.setItem(n,a)},de=n=>{window.localStorage.removeItem(n)},I=({reserverOppgave:n,sakslister:a,setValgtSakslisteId:r,valgtSakslisteId:l})=>{const{startRequest:d,data:S}=k.useRestApiRunner(t.BEHANDLINGSKO_OPPGAVE_ANTALL);return e.jsxs(e.Fragment,{children:[e.jsx(H,{size:"small",children:e.jsx(j,{id:"SakslistePanel.StartBehandling"})}),e.jsx(h,{sixteenPx:!0}),e.jsx(Q,{sakslister:a,setValgtSakslisteId:r,fetchAntallOppgaver:d,getValueFromLocalStorage:le,setValueInLocalStorage:ie,removeValueFromLocalStorage:de}),e.jsx(h,{twentyPx:!0}),l&&e.jsx(ne,{reserverOppgave:n,antallOppgaver:S,valgtSakslisteId:l})]})};try{I.displayName="SakslistePanel",I.__docgenInfo={description:"SakslistePanel",displayName:"SakslistePanel",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},setValgtSakslisteId:{defaultValue:null,description:"",name:"setValgtSakslisteId",required:!0,type:{name:"(sakslisteId: number) => void"}},sakslister:{defaultValue:null,description:"",name:"sakslister",required:!0,type:{name:"Readonly<{ sakslisteId: number; navn: string; behandlingTyper: string[]; fagsakYtelseTyper: string[]; andreKriterier: Readonly<{ andreKriterierType: string; inkluder: boolean; }>[]; sortering?: { ...; } | undefined; }>[]"}},reserverOppgave:{defaultValue:null,description:"",name:"reserverOppgave",required:!0,type:{name:"(oppgaveId: Readonly<{ id: number; status: Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>; ... 10 more ...; behand..."}}}}}catch{}const oe=[],f=({valgtSakslisteId:n,setValgtSakslisteId:a,åpneFagsak:r})=>{const[l,d]=g.useState(!1),[S,y]=g.useState(),[E,o]=g.useState(),{data:F=oe}=k.useRestApi(t.SAKSLISTE),{startRequest:U}=k.useRestApiRunner(t.RESERVER_OPPGAVE),q=g.useCallback(i=>{i.status.erReservert?r(i.saksnummer.toString(),i.behandlingId):U({oppgaveId:i.id}).then(m=>{m&&m.erReservert&&m.erReservertAvInnloggetBruker?r(i.saksnummer.toString(),i.behandlingId):m&&m.erReservert&&!m.erReservertAvInnloggetBruker&&(d(!0),y(i),o(m))})},[r]),M=g.useCallback(i=>{d(!1),y(void 0),o(void 0),r(i.saksnummer.toString(),i.behandlingId)},[r]);return F.length===0?e.jsx(H,{size:"small",children:e.jsx(j,{id:"BehandlingskoerIndex.IngenKø"})}):e.jsxs(e.Fragment,{children:[e.jsx(I,{valgtSakslisteId:n,setValgtSakslisteId:a,reserverOppgave:q,sakslister:F}),l&&S&&E&&e.jsx(ee,{lukkErReservertModalOgOpneOppgave:M,oppgave:S,oppgaveStatus:E})]})};try{f.displayName="BehandlingskoerIndex",f.__docgenInfo={description:"BehandlingskoerIndex",displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},setValgtSakslisteId:{defaultValue:null,description:"",name:"setValgtSakslisteId",required:!0,type:{name:"(sakslisteId: number) => void"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}}}}}catch{}const N=({nyeOgFerdigstilteOppgaver:n})=>{const r=g.useRef(null);return e.jsxs("div",{ref:r,children:[e.jsx(te,{height:200,nyeOgFerdigstilteOppgaver:n}),e.jsx(h,{sixteenPx:!0}),e.jsx(re,{height:200,nyeOgFerdigstilteOppgaver:n})]})};try{N.displayName="SaksbehandlerNokkeltallPanel",N.__docgenInfo={description:"SaksbehandlerNokkeltallPanel.",displayName:"SaksbehandlerNokkeltallPanel",props:{nyeOgFerdigstilteOppgaver:{defaultValue:null,description:"",name:"nyeOgFerdigstilteOppgaver",required:!1,type:{name:"Readonly<{ behandlingType: string; antallNye: number; antallFerdigstilte: number; dato: string; }>[]"}}}}}catch{}const b=({valgtSakslisteId:n})=>{const{data:a}=k.useRestApi(t.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,{sakslisteId:n},{updateTriggers:[n]});return e.jsx(N,{nyeOgFerdigstilteOppgaver:a})};try{b.displayName="SaksbehandlerNokkeltallIndex",b.__docgenInfo={description:"SaksbehandlerNokkeltallIndex",displayName:"SaksbehandlerNokkeltallIndex",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!0,type:{name:"number"}}}}}catch{}const v=({valgtSakslisteId:n,åpneFagsak:a})=>e.jsxs(e.Fragment,{children:[e.jsx(ae,{åpneFagsak:a}),e.jsx(h,{twentyPx:!0}),n&&e.jsx(b,{valgtSakslisteId:n})]});try{v.displayName="SaksstottePaneler",v.__docgenInfo={description:"SaksstottePaneler",displayName:"SaksstottePaneler",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}}}}}catch{}const O=({valgtSakslisteId:n,åpneFagsak:a})=>e.jsx(v,{valgtSakslisteId:n,åpneFagsak:a});try{O.displayName="SaksstotteIndex",O.__docgenInfo={description:"SaksstotteIndex",displayName:"SaksstotteIndex",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}}}}}catch{}const ue="_gridContainer_19y4r_1",pe="_leftColumn_19y4r_9",ge="_rightColumn_19y4r_15",me="_koerContainer_19y4r_27",ke="_sokContainer_19y4r_38",R={gridContainer:ue,leftColumn:pe,rightColumn:ge,koerContainer:me,sokContainer:ke},G=({valgtSakslisteId:n,setValgtSakslisteId:a,setLosErIkkeTilgjengelig:r,åpneFagsak:l,kanSaksbehandle:d})=>{const{addErrorMessage:S}=X();B.setAddErrorMessageHandler(S);const y=k.useGlobalStateRestApiData(T.KODEVERK_LOS),E=k.useGlobalStateRestApi(T.KODEVERK_LOS,void 0,{suspendRequest:!!y}),o=k.useRestApi(t.DRIFTSMELDINGER);return g.useEffect(()=>{(o.state===c.ERROR||E.state===c.ERROR)&&r()},[o.state,E.state]),o.state!==c.SUCCESS||E.state!==c.SUCCESS&&!y?null:e.jsxs(e.Fragment,{children:[o.data&&e.jsx(se,{driftsmeldinger:o.data}),e.jsxs("div",{className:R.gridContainer,children:[e.jsxs("div",{className:R.leftColumn,children:[e.jsx("div",{className:R.koerContainer,children:e.jsx(f,{åpneFagsak:l,valgtSakslisteId:n,setValgtSakslisteId:a})}),e.jsx("div",{className:R.sokContainer,children:e.jsx(Z,{åpneFagsak:l,kanSaksbehandle:d})})]}),e.jsx("div",{className:R.rightColumn,children:e.jsx(O,{valgtSakslisteId:n,åpneFagsak:l})})]})]})};try{G.displayName="SaksbehandlerDashboard",G.__docgenInfo={description:"SaksbehandlerDashboard",displayName:"SaksbehandlerDashboard",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},setValgtSakslisteId:{defaultValue:null,description:"",name:"setValgtSakslisteId",required:!0,type:{name:"(valgSakslisteId: number) => void"}},setLosErIkkeTilgjengelig:{defaultValue:null,description:"",name:"setLosErIkkeTilgjengelig",required:!0,type:{name:"() => void"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}},kanSaksbehandle:{defaultValue:null,description:"",name:"kanSaksbehandle",required:!0,type:{name:"boolean"}}}}}catch{}const Se=Y(J),P=({setLosErIkkeTilgjengelig:n,åpneFagsak:a,kanSaksbehandle:r})=>{const[l,d]=g.useState();return e.jsx(w,{value:Se,children:e.jsx(G,{valgtSakslisteId:l,setValgtSakslisteId:d,setLosErIkkeTilgjengelig:n,åpneFagsak:a,kanSaksbehandle:r})})},C=P;try{P.displayName="SaksbehandlerIndex",P.__docgenInfo={description:"SaksbehandlerIndex",displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{defaultValue:null,description:"",name:"setLosErIkkeTilgjengelig",required:!0,type:{name:"() => void"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}},kanSaksbehandle:{defaultValue:null,description:"",name:"kanSaksbehandle",required:!0,type:{name:"boolean"}}}}}catch{}const Qe={title:"los/saksbehandler/SaksbehandlerIndex",component:C},Ee=()=>{const n=[{key:T.KODEVERK_LOS.name,data:z,global:!0},{key:t.DRIFTSMELDINGER.name,data:[]},{key:t.SAKSLISTE.name,data:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:{kode:W.BEHANDLINGSFRIST,navn:"Behandlingsfrist",felttype:"",feltkategori:""},fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[s.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[_.FORELDREPENGER],andreKriterier:[{andreKriterierType:D.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:D.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}]},{key:t.RESERVER_OPPGAVE.name,data:void 0},{key:t.RESERVERTE_OPPGAVER.name,data:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:s.FORSTEGANGSSOKNAD,behandlingStatus:K.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:_.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",href:""}]},{key:t.SAKSLISTE_SAKSBEHANDLERE.name,data:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler",avdelingsnavn:[]},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim",avdelingsnavn:[]}]},{key:t.BEHANDLINGSKO_OPPGAVE_ANTALL.name,data:1},{key:t.RESERVER_OPPGAVE.name,data:void 0},{key:t.SEARCH_FAGSAK.name,data:void 0},{key:t.OPPGAVER_FOR_FAGSAKER.name,data:void 0},{key:t.OPPGAVER_TIL_BEHANDLING.name,data:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:s.FORSTEGANGSSOKNAD,behandlingStatus:K.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:_.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",href:""}]},{key:t.HENT_RESERVASJONSSTATUS.name,data:void 0},{key:t.BEHANDLEDE_OPPGAVER.name,data:[]},{key:t.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER.name,data:[{behandlingType:s.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:u().format(p)},{behandlingType:s.KLAGE,antallNye:23,antallFerdigstilte:2,dato:u().format(p)},{behandlingType:s.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:u().format(p)},{behandlingType:s.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:u().format(p)},{behandlingType:s.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:u().subtract(1,"d").format(p)},{behandlingType:s.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:u().subtract(3,"d").format(p)},{behandlingType:s.KLAGE,antallNye:23,antallFerdigstilte:2,dato:u().subtract(4,"d").format(p)},{behandlingType:s.KLAGE,antallNye:23,antallFerdigstilte:2,dato:u().subtract(5,"d").format(p)}]}];return e.jsx($,{data:n,requestApi:B,children:e.jsx(C,{setLosErIkkeTilgjengelig:()=>{},åpneFagsak:()=>{},kanSaksbehandle:!0})})},A=Ee.bind({});var x,V,L;A.parameters={...A.parameters,docs:{...(x=A.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(L=(V=A.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const We=["Default"];export{A as Default,We as __namedExportsOrder,Qe as default};
//# sourceMappingURL=SaksbehandlerIndex.stories-f69442e7.js.map
