import{j as e}from"./jsx-runtime-69eee039.js";import{F as U,J as D,E as z,o as W,A as x,Z as $,D as Z,t as Q,q as X,m as ee,j as ne,d as p,N as u}from"./nb_NO-8bb8d840.js";import{Y as s,z as _,b as V}from"./index.es-a3c6219c.js";import{a as k,R as t,r as q,b as f,k as ae}from"./fplosSaksbehandlerRestApi-729f2e45.js";import{S as te,K as re,A as L}from"./SakslisteVelgerForm-585ebdc9.js";import{r as g}from"./index-7c191284.js";import{c as se,y as R}from"./index.es-ba84c291.js";import{F as le}from"./FagsakSearchIndex-989b3fca.js";import{O as ie}from"./OppgaveErReservertAvAnnenModal-4f2efe99.js";import{O as de}from"./OppgaverTabell-4585f70d.js";import{H as C}from"./Heading-970a94fb.js";import{S as oe}from"./SistBehandledeSaker-db4e0305.js";import{N as pe}from"./NyeOgFerdigstilteOppgaverForIdagPanel-af35b8e8.js";import{N as ue}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-74213e67.js";import"./floating-ui.react-dom.esm-0ed0f36f.js";import"./index-ecbee218.js";import"./index.es-f5c23214.js";import"./FagsakSearch-94c429bc.js";import"./PersonInfo-9280aed9.js";import"./index.es-9080d8e0.js";import"./SearchForm-87338ca4.js";import"./index.es-40ddef49.js";import"./advarsel-27b41fd8.js";import"./FagsakList-c1f87748.js";import"./useLosKodeverk-738ae8fc.js";import"./ChevronRight-2e3eaa53.js";import"./Provider-11097238.js";import"./index-b3a39e30.js";import"./BehandlingPollingTimoutModal-49f589d3.js";import"./OppgaveHandlingerMenu-e550b136.js";import"./index.es-cebb64fb.js";import"./OpphevReservasjonModal-5ea56291.js";import"./OppgaveReservasjonForlengetModal-e59ead57.js";const ge=n=>{const a=window.localStorage.getItem(n);return a!=="undefined"&&a!==null?a:void 0},me=(n,a)=>{window.localStorage.setItem(n,a)},ke=n=>{window.localStorage.removeItem(n)},T=({reserverOppgave:n,sakslister:a,setValgtSakslisteId:r,valgtSakslisteId:l})=>{const{startRequest:d,data:E}=k.useRestApiRunner(t.BEHANDLINGSKO_OPPGAVE_ANTALL);return e.jsxs(e.Fragment,{children:[e.jsx(C,{size:"small",children:e.jsx(U,{id:"SakslistePanel.StartBehandling"})}),e.jsx(te,{sakslister:a,setValgtSakslisteId:r,fetchAntallOppgaver:d,getValueFromLocalStorage:ge,setValueInLocalStorage:me,removeValueFromLocalStorage:ke}),e.jsx(D,{twentyPx:!0}),l&&e.jsx(de,{reserverOppgave:n,antallOppgaver:E,valgtSakslisteId:l})]})};try{T.displayName="SakslistePanel",T.__docgenInfo={description:"SakslistePanel",displayName:"SakslistePanel",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},setValgtSakslisteId:{defaultValue:null,description:"",name:"setValgtSakslisteId",required:!0,type:{name:"(sakslisteId: number) => void"}},sakslister:{defaultValue:null,description:"",name:"sakslister",required:!0,type:{name:"Readonly<{ sakslisteId: number; navn: string; behandlingTyper: string[]; fagsakYtelseTyper: string[]; andreKriterier: Readonly<{ andreKriterierType: string; inkluder: boolean; }>[]; sortering?: { ...; } | undefined; }>[]"}},reserverOppgave:{defaultValue:null,description:"",name:"reserverOppgave",required:!0,type:{name:"(oppgaveId: Readonly<{ id: number; status: Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>; ... 10 more ...; behand..."}}}}}catch{}const Ee=[],I=({valgtSakslisteId:n,setValgtSakslisteId:a,åpneFagsak:r})=>{const[l,d]=g.useState(!1),[E,y]=g.useState(),[S,o]=g.useState(),{data:K=Ee}=k.useRestApi(t.SAKSLISTE),{startRequest:Y}=k.useRestApiRunner(t.RESERVER_OPPGAVE),w=g.useCallback(i=>{i.status.erReservert?r(i.saksnummer.toString(),i.behandlingId):Y({oppgaveId:i.id}).then(m=>{m&&m.erReservert&&m.erReservertAvInnloggetBruker?r(i.saksnummer.toString(),i.behandlingId):m&&m.erReservert&&!m.erReservertAvInnloggetBruker&&(d(!0),y(i),o(m))})},[r]),J=g.useCallback(i=>{d(!1),y(void 0),o(void 0),r(i.saksnummer.toString(),i.behandlingId)},[r]);return K.length===0?e.jsx(C,{size:"small",children:e.jsx(U,{id:"BehandlingskoerIndex.IngenKø"})}):e.jsxs(e.Fragment,{children:[e.jsx(T,{valgtSakslisteId:n,setValgtSakslisteId:a,reserverOppgave:w,sakslister:K}),l&&E&&S&&e.jsx(ie,{lukkErReservertModalOgOpneOppgave:J,oppgave:E,oppgaveStatus:S})]})};try{I.displayName="BehandlingskoerIndex",I.__docgenInfo={description:"BehandlingskoerIndex",displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},setValgtSakslisteId:{defaultValue:null,description:"",name:"setValgtSakslisteId",required:!0,type:{name:"(sakslisteId: number) => void"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}}}}}catch{}const N=({nyeOgFerdigstilteOppgaver:n})=>{const r=g.useRef(null);return e.jsxs("div",{ref:r,children:[e.jsx(pe,{height:200,nyeOgFerdigstilteOppgaver:n}),e.jsx(D,{sixteenPx:!0}),e.jsx(ue,{height:200,nyeOgFerdigstilteOppgaver:n})]})};try{N.displayName="SaksbehandlerNokkeltallPanel",N.__docgenInfo={description:"SaksbehandlerNokkeltallPanel.",displayName:"SaksbehandlerNokkeltallPanel",props:{nyeOgFerdigstilteOppgaver:{defaultValue:null,description:"",name:"nyeOgFerdigstilteOppgaver",required:!1,type:{name:"Readonly<{ behandlingType: string; antallNye: number; antallFerdigstilte: number; dato: string; }>[]"}}}}}catch{}const v=({valgtSakslisteId:n})=>{const{data:a}=k.useRestApi(t.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,{sakslisteId:n},{updateTriggers:[n]});return e.jsx(N,{nyeOgFerdigstilteOppgaver:a})};try{v.displayName="SaksbehandlerNokkeltallIndex",v.__docgenInfo={description:"SaksbehandlerNokkeltallIndex",displayName:"SaksbehandlerNokkeltallIndex",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!0,type:{name:"number"}}}}}catch{}const b=({valgtSakslisteId:n,åpneFagsak:a})=>e.jsxs(e.Fragment,{children:[e.jsx(oe,{åpneFagsak:a}),e.jsx(D,{twentyPx:!0}),n&&e.jsx(v,{valgtSakslisteId:n})]});try{b.displayName="SaksstottePaneler",b.__docgenInfo={description:"SaksstottePaneler",displayName:"SaksstottePaneler",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}}}}}catch{}const O=({valgtSakslisteId:n,åpneFagsak:a})=>e.jsx(b,{valgtSakslisteId:n,åpneFagsak:a});try{O.displayName="SaksstotteIndex",O.__docgenInfo={description:"SaksstotteIndex",displayName:"SaksstotteIndex",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}}}}}catch{}const Se="_gridContainer_19y4r_1",ye="_leftColumn_19y4r_9",ce="_rightColumn_19y4r_15",Re="_koerContainer_19y4r_27",he="_sokContainer_19y4r_38",c={gridContainer:Se,leftColumn:ye,rightColumn:ce,koerContainer:Re,sokContainer:he},_e=""+new URL("advarsel-sirkel-fyll-6d4c1937.svg",import.meta.url).href,Ae="_container_1wgto_1",fe="_wordWrap_1wgto_15",Te="_driftsInfo_1wgto_19",Ie="_column_1wgto_25",A={container:Ae,wordWrap:fe,driftsInfo:Te,column:Ie},G=({driftsmeldinger:n})=>n===void 0||n.length===0?null:e.jsx("div",{className:A.container,children:n.map(a=>e.jsx(z,{children:e.jsxs(W,{children:[e.jsx(x,{children:e.jsx($,{className:A.driftsInfo,src:_e})}),e.jsx(x,{children:e.jsx(Z,{size:"small",className:A.wordWrap,children:`${a.melding}`})})]})},a.id))});try{G.displayName="DriftsmeldingPanel",G.__docgenInfo={description:`DriftsmeldingPanel

Definerer hvordan driftsmeldinger vises.`,displayName:"DriftsmeldingPanel",props:{driftsmeldinger:{defaultValue:null,description:"",name:"driftsmeldinger",required:!0,type:{name:"Readonly<{ id: string; melding: string; }>[]"}}}}}catch{}const P=({valgtSakslisteId:n,setValgtSakslisteId:a,setLosErIkkeTilgjengelig:r,åpneFagsak:l,kanSaksbehandle:d})=>{const{addErrorMessage:E}=se();q.setAddErrorMessageHandler(E);const y=k.useGlobalStateRestApiData(f.KODEVERK_LOS),S=k.useGlobalStateRestApi(f.KODEVERK_LOS,void 0,{suspendRequest:!!y}),o=k.useRestApi(t.DRIFTSMELDINGER);return g.useEffect(()=>{(o.state===R.ERROR||S.state===R.ERROR)&&r()},[o.state,S.state]),o.state!==R.SUCCESS||S.state!==R.SUCCESS&&!y?null:e.jsxs(e.Fragment,{children:[o.data&&e.jsx(G,{driftsmeldinger:o.data}),e.jsxs("div",{className:c.gridContainer,children:[e.jsxs("div",{className:c.leftColumn,children:[e.jsx("div",{className:c.koerContainer,children:e.jsx(I,{åpneFagsak:l,valgtSakslisteId:n,setValgtSakslisteId:a})}),e.jsx("div",{className:c.sokContainer,children:e.jsx(le,{åpneFagsak:l,kanSaksbehandle:d})})]}),e.jsx("div",{className:c.rightColumn,children:e.jsx(O,{valgtSakslisteId:n,åpneFagsak:l})})]})]})};try{P.displayName="SaksbehandlerDashboard",P.__docgenInfo={description:"SaksbehandlerDashboard",displayName:"SaksbehandlerDashboard",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},setValgtSakslisteId:{defaultValue:null,description:"",name:"setValgtSakslisteId",required:!0,type:{name:"(valgSakslisteId: number) => void"}},setLosErIkkeTilgjengelig:{defaultValue:null,description:"",name:"setLosErIkkeTilgjengelig",required:!0,type:{name:"() => void"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}},kanSaksbehandle:{defaultValue:null,description:"",name:"kanSaksbehandle",required:!0,type:{name:"boolean"}}}}}catch{}const Ne=Q(ee),F=({setLosErIkkeTilgjengelig:n,åpneFagsak:a,kanSaksbehandle:r})=>{const[l,d]=g.useState();return e.jsx(X,{value:Ne,children:e.jsx(P,{valgtSakslisteId:l,setValgtSakslisteId:d,setLosErIkkeTilgjengelig:n,åpneFagsak:a,kanSaksbehandle:r})})},M=F;try{F.displayName="SaksbehandlerIndex",F.__docgenInfo={description:"SaksbehandlerIndex",displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{defaultValue:null,description:"",name:"setLosErIkkeTilgjengelig",required:!0,type:{name:"() => void"}},åpneFagsak:{defaultValue:null,description:"",name:"åpneFagsak",required:!0,type:{name:"(saksnummer: string, behandlingUuid?: string | undefined) => void"}},kanSaksbehandle:{defaultValue:null,description:"",name:"kanSaksbehandle",required:!0,type:{name:"boolean"}}}}}catch{}const dn={title:"los/saksbehandler/SaksbehandlerIndex",component:M},ve=()=>{const n=[{key:f.KODEVERK_LOS.name,data:ne,global:!0},{key:t.DRIFTSMELDINGER.name,data:[]},{key:t.SAKSLISTE.name,data:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:{kode:re.BEHANDLINGSFRIST,navn:"Behandlingsfrist",felttype:"",feltkategori:""},fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[s.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[_.FORELDREPENGER],andreKriterier:[{andreKriterierType:L.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:L.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}]},{key:t.RESERVER_OPPGAVE.name,data:void 0},{key:t.RESERVERTE_OPPGAVER.name,data:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:s.FORSTEGANGSSOKNAD,behandlingStatus:V.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:_.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",href:""}]},{key:t.SAKSLISTE_SAKSBEHANDLERE.name,data:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler",avdelingsnavn:[]},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim",avdelingsnavn:[]}]},{key:t.BEHANDLINGSKO_OPPGAVE_ANTALL.name,data:1},{key:t.RESERVER_OPPGAVE.name,data:void 0},{key:t.SEARCH_FAGSAK.name,data:void 0},{key:t.OPPGAVER_FOR_FAGSAKER.name,data:void 0},{key:t.OPPGAVER_TIL_BEHANDLING.name,data:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:s.FORSTEGANGSSOKNAD,behandlingStatus:V.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:_.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",href:""}]},{key:t.HENT_RESERVASJONSSTATUS.name,data:void 0},{key:t.BEHANDLEDE_OPPGAVER.name,data:[]},{key:t.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER.name,data:[{behandlingType:s.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:p().format(u)},{behandlingType:s.KLAGE,antallNye:23,antallFerdigstilte:2,dato:p().format(u)},{behandlingType:s.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:p().format(u)},{behandlingType:s.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:p().format(u)},{behandlingType:s.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:p().subtract(1,"d").format(u)},{behandlingType:s.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:p().subtract(3,"d").format(u)},{behandlingType:s.KLAGE,antallNye:23,antallFerdigstilte:2,dato:p().subtract(4,"d").format(u)},{behandlingType:s.KLAGE,antallNye:23,antallFerdigstilte:2,dato:p().subtract(5,"d").format(u)}]}];return e.jsx(ae,{data:n,requestApi:q,children:e.jsx(M,{setLosErIkkeTilgjengelig:()=>{},åpneFagsak:()=>{},kanSaksbehandle:!0})})},h=ve.bind({});var j,B,H;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
}`,...(H=(B=h.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const on=["Default"];export{h as Default,on as __namedExportsOrder,dn as default};
//# sourceMappingURL=SaksbehandlerIndex.stories-77427d08.js.map
