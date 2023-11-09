import{a as k,F as T,j as n}from"./jsx-runtime-86dfebf6.js";import{H as U,l as D,e as _,t as J,m as z,d as u,N as p}from"./nb_NO-31758bbb.js";import{Y as s,z as I,b as L}from"./index.es-a3c6219c.js";import{b as S,R as t,r as q,c as f,a as $}from"./fplosSaksbehandlerRestApi-84411765.js";import{a as Q}from"./alleKodeverkLos-5ac5bd02.js";import{S as W,K as X,A as B}from"./SakslisteVelgerForm-8020de99.js";import{r as g}from"./index-1b03fe98.js";import{u as Z,R as A}from"./useGlobalStateRestApiData-f709a7eb.js";import{F as ee}from"./FagsakSearchIndex-6019b4bb.js";import{O as ne}from"./OppgaveErReservertAvAnnenModal-52528205.js";import{O as ae}from"./OppgaverTabell-52b289c3.js";import{S as te}from"./SistBehandledeSaker-a53c858a.js";import{N as re}from"./NyeOgFerdigstilteOppgaverForIdagPanel-45c8ac5f.js";import{N as se}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-fc075eca.js";import{D as le}from"./DriftsmeldingPanel-7f5e1f2d.js";import"./index-6fd5a17b.js";import"./kodeverkTyper-3907affc.js";import"./kodeverkUtils-fd60f151.js";import"./FagsakSearch-82321ee1.js";import"./PersonInfo-f5ebd6a1.js";import"./Kjonnkode-594fc607.js";import"./SearchForm-62cc8bb0.js";import"./index.es-23262e77.js";import"./ExclamationmarkTriangleFill-7f9177aa.js";import"./FagsakList-0e8790a6.js";import"./useLosKodeverk-24ad49f1.js";import"./ChevronRight-05097b02.js";import"./BehandlingPollingTimoutModal-067a6107.js";import"./OppgaveHandlingerMenu-927a1d4c.js";import"./FlyttReservasjonModal-96f6c934.js";import"./OpphevReservasjonModal-55601bf5.js";import"./OppgaveReservasjonForlengetModal-81bc4875.js";import"./Panel-55287d0a.js";const ie=e=>{const a=window.localStorage.getItem(e);return a!=="undefined"&&a!==null?a:void 0},de=(e,a)=>{window.localStorage.setItem(e,a)},oe=e=>{window.localStorage.removeItem(e)},N=({reserverOppgave:e,sakslister:a,setValgtSakslisteId:r,valgtSakslisteId:l})=>{const{startRequest:d,data:E}=S.useRestApiRunner(t.BEHANDLINGSKO_OPPGAVE_ANTALL);return k(T,{children:[n(U,{size:"small",children:n(D.FormattedMessage,{id:"SakslistePanel.StartBehandling"})}),n(_,{sixteenPx:!0}),n(W,{sakslister:a,setValgtSakslisteId:r,fetchAntallOppgaver:d,getValueFromLocalStorage:ie,setValueInLocalStorage:de,removeValueFromLocalStorage:oe}),n(_,{twentyPx:!0}),l&&n(ae,{reserverOppgave:e,antallOppgaver:E,valgtSakslisteId:l})]})};try{N.displayName="SakslistePanel",N.__docgenInfo={description:"SakslistePanel",displayName:"SakslistePanel",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},setValgtSakslisteId:{defaultValue:null,description:"",name:"setValgtSakslisteId",required:!0,type:{name:"(sakslisteId: number) => void"}},sakslister:{defaultValue:null,description:"",name:"sakslister",required:!0,type:{name:"Readonly<{ sakslisteId: number; navn: string; behandlingTyper: string[]; fagsakYtelseTyper: string[]; andreKriterier: Readonly<{ andreKriterierType: string; inkluder: boolean; }>[]; sortering?: { ...; } | undefined; }>[]"}},reserverOppgave:{defaultValue:null,description:"",name:"reserverOppgave",required:!0,type:{name:"(oppgaveId: Readonly<{ id: number; status: Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>; ... 10 more ...; behand..."}}}}}catch{}const ue=[],b=({valgtSakslisteId:e,setValgtSakslisteId:a,åpneFagsak:r})=>{const[l,d]=g.useState(!1),[E,R]=g.useState(),[y,o]=g.useState(),{data:V=ue}=S.useRestApi(t.SAKSLISTE),{startRequest:j}=S.useRestApiRunner(t.RESERVER_OPPGAVE),Y=g.useCallback(i=>{i.status.erReservert?r(i.saksnummer.toString(),i.behandlingId):j({oppgaveId:i.id}).then(m=>{m&&m.erReservert&&m.erReservertAvInnloggetBruker?r(i.saksnummer.toString(),i.behandlingId):m&&m.erReservert&&!m.erReservertAvInnloggetBruker&&(d(!0),R(i),o(m))})},[r]),w=g.useCallback(i=>{d(!1),R(void 0),o(void 0),r(i.saksnummer.toString(),i.behandlingId)},[r]);return V.length===0?n(U,{size:"small",children:n(D.FormattedMessage,{id:"BehandlingskoerIndex.IngenKø"})}):k(T,{children:[n(N,{valgtSakslisteId:e,setValgtSakslisteId:a,reserverOppgave:Y,sakslister:V}),l&&E&&y&&n(ne,{lukkErReservertModalOgOpneOppgave:w,oppgave:E,oppgaveStatus:y})]})};try{b.displayName="BehandlingskoerIndex",b.__docgenInfo={description:"BehandlingskoerIndex",displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},setValgtSakslisteId:{defaultValue:null,description:"",name:"setValgtSakslisteId",required:!0,type:{name:"(sakslisteId: number) => void"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}}}}}catch{}const v=({nyeOgFerdigstilteOppgaver:e})=>{const r=g.useRef(null);return k("div",{ref:r,children:[n(re,{height:200,nyeOgFerdigstilteOppgaver:e}),n(_,{sixteenPx:!0}),n(se,{height:200,nyeOgFerdigstilteOppgaver:e})]})};try{v.displayName="SaksbehandlerNokkeltallPanel",v.__docgenInfo={description:"SaksbehandlerNokkeltallPanel.",displayName:"SaksbehandlerNokkeltallPanel",props:{nyeOgFerdigstilteOppgaver:{defaultValue:null,description:"",name:"nyeOgFerdigstilteOppgaver",required:!1,type:{name:"Readonly<{ behandlingType: string; antallNye: number; antallFerdigstilte: number; dato: string; }>[]"}}}}}catch{}const O=({valgtSakslisteId:e})=>{const{data:a}=S.useRestApi(t.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,{sakslisteId:e},{updateTriggers:[e]});return n(v,{nyeOgFerdigstilteOppgaver:a})};try{O.displayName="SaksbehandlerNokkeltallIndex",O.__docgenInfo={description:"SaksbehandlerNokkeltallIndex",displayName:"SaksbehandlerNokkeltallIndex",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!0,type:{name:"number"}}}}}catch{}const G=({valgtSakslisteId:e,åpneFagsak:a})=>k(T,{children:[n(te,{åpneFagsak:a}),n(_,{twentyPx:!0}),e&&n(O,{valgtSakslisteId:e})]});try{G.displayName="SaksstottePaneler",G.__docgenInfo={description:"SaksstottePaneler",displayName:"SaksstottePaneler",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}}}}}catch{}const P=({valgtSakslisteId:e,åpneFagsak:a})=>n(G,{valgtSakslisteId:e,åpneFagsak:a});try{P.displayName="SaksstotteIndex",P.__docgenInfo={description:"SaksstotteIndex",displayName:"SaksstotteIndex",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}}}}}catch{}const pe="_gridContainer_19y4r_1",ge="_leftColumn_19y4r_9",me="_rightColumn_19y4r_15",ke="_koerContainer_19y4r_27",Se="_sokContainer_19y4r_38",c={gridContainer:pe,leftColumn:ge,rightColumn:me,koerContainer:ke,sokContainer:Se},F=({valgtSakslisteId:e,setValgtSakslisteId:a,setLosErIkkeTilgjengelig:r,åpneFagsak:l,kanSaksbehandle:d})=>{const{addErrorMessage:E}=Z();q.setAddErrorMessageHandler(E);const R=S.useGlobalStateRestApiData(f.KODEVERK_LOS),y=S.useGlobalStateRestApi(f.KODEVERK_LOS,void 0,{suspendRequest:!!R}),o=S.useRestApi(t.DRIFTSMELDINGER);return g.useEffect(()=>{(o.state===A.ERROR||y.state===A.ERROR)&&r()},[o.state,y.state]),o.state!==A.SUCCESS||y.state!==A.SUCCESS&&!R?null:k(T,{children:[o.data&&n(le,{driftsmeldinger:o.data}),k("div",{className:c.gridContainer,children:[k("div",{className:c.leftColumn,children:[n("div",{className:c.koerContainer,children:n(b,{åpneFagsak:l,valgtSakslisteId:e,setValgtSakslisteId:a})}),n("div",{className:c.sokContainer,children:n(ee,{åpneFagsak:l,kanSaksbehandle:d})})]}),n("div",{className:c.rightColumn,children:n(P,{valgtSakslisteId:e,åpneFagsak:l})})]})]})};try{F.displayName="SaksbehandlerDashboard",F.__docgenInfo={description:"SaksbehandlerDashboard",displayName:"SaksbehandlerDashboard",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},setValgtSakslisteId:{defaultValue:null,description:"",name:"setValgtSakslisteId",required:!0,type:{name:"(valgSakslisteId: number) => void"}},setLosErIkkeTilgjengelig:{defaultValue:null,description:"",name:"setLosErIkkeTilgjengelig",required:!0,type:{name:"() => void"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}},kanSaksbehandle:{defaultValue:null,description:"",name:"kanSaksbehandle",required:!0,type:{name:"boolean"}}}}}catch{}const Ee=J(z),K=({setLosErIkkeTilgjengelig:e,åpneFagsak:a,kanSaksbehandle:r})=>{const[l,d]=g.useState();return n(D.RawIntlProvider,{value:Ee,children:n(F,{valgtSakslisteId:l,setValgtSakslisteId:d,setLosErIkkeTilgjengelig:e,åpneFagsak:a,kanSaksbehandle:r})})},M=K;try{K.displayName="SaksbehandlerIndex",K.__docgenInfo={description:"SaksbehandlerIndex",displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{defaultValue:null,description:"",name:"setLosErIkkeTilgjengelig",required:!0,type:{name:"() => void"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}},kanSaksbehandle:{defaultValue:null,description:"",name:"kanSaksbehandle",required:!0,type:{name:"boolean"}}}}}catch{}const We={title:"los/saksbehandler/SaksbehandlerIndex",component:M},ye=()=>{const e=[{key:f.KODEVERK_LOS.name,data:Q,global:!0},{key:t.DRIFTSMELDINGER.name,data:[]},{key:t.SAKSLISTE.name,data:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:{kode:X.BEHANDLINGSFRIST,navn:"Behandlingsfrist",felttype:"",feltkategori:""},fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[s.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[I.FORELDREPENGER],andreKriterier:[{andreKriterierType:B.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:B.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}]},{key:t.RESERVER_OPPGAVE.name,data:void 0},{key:t.RESERVERTE_OPPGAVER.name,data:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:s.FORSTEGANGSSOKNAD,behandlingStatus:L.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:I.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",href:""}]},{key:t.SAKSLISTE_SAKSBEHANDLERE.name,data:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler",avdelingsnavn:[]},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim",avdelingsnavn:[]}]},{key:t.BEHANDLINGSKO_OPPGAVE_ANTALL.name,data:1},{key:t.RESERVER_OPPGAVE.name,data:void 0},{key:t.SEARCH_FAGSAK.name,data:void 0},{key:t.OPPGAVER_FOR_FAGSAKER.name,data:void 0},{key:t.OPPGAVER_TIL_BEHANDLING.name,data:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:s.FORSTEGANGSSOKNAD,behandlingStatus:L.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:I.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",href:""}]},{key:t.HENT_RESERVASJONSSTATUS.name,data:void 0},{key:t.BEHANDLEDE_OPPGAVER.name,data:[]},{key:t.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER.name,data:[{behandlingType:s.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:u().format(p)},{behandlingType:s.KLAGE,antallNye:23,antallFerdigstilte:2,dato:u().format(p)},{behandlingType:s.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:u().format(p)},{behandlingType:s.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:u().format(p)},{behandlingType:s.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:u().subtract(1,"d").format(p)},{behandlingType:s.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:u().subtract(3,"d").format(p)},{behandlingType:s.KLAGE,antallNye:23,antallFerdigstilte:2,dato:u().subtract(4,"d").format(p)},{behandlingType:s.KLAGE,antallNye:23,antallFerdigstilte:2,dato:u().subtract(5,"d").format(p)}]}];return n($,{data:e,requestApi:q,children:n(M,{setLosErIkkeTilgjengelig:()=>{},åpneFagsak:()=>{},kanSaksbehandle:!0})})},h=ye.bind({});var x,H,C;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(C=(H=h.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};const Xe=["Default"];export{h as Default,Xe as __namedExportsOrder,We as default};
//# sourceMappingURL=SaksbehandlerIndex.stories-bfc7ad74.js.map
