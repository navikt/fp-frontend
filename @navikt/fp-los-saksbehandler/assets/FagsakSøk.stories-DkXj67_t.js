import{w as i,B as s,j as r}from"./iframe-DcWfvX4E.js";import{Q as l}from"./index.es-CK71UUG6.js";import{u as m}from"./useQuery-CPaP-Sxu.js";import{h as d,L as g,H as k,l as u}from"./fplosSaksbehandlerApi-DVMPShiN.js";import{F as S}from"./SøkResultat-4funf4Yr.js";import{O as t}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as f}from"./withIntl-BpqaF8OP.js";import{a as c}from"./alleKodeverkLos-JR0SOFbV.js";import{K as v}from"./Kjonnkode-DjBoP8-t.js";import{F as p}from"./FagsakSøk-DgDB7lf4.js";import{m as h}from"./nb_NO-B5yokG7b.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-BgAJ8TXJ.js";import"./useLosKodeverk-CpQ04YyY.js";import"./Table-q8fDV-xz.js";import"./composeEventHandlers-rXV8Rneo.js";import"./ChevronDown-V1IO0Cne.js";import"./ChevronRight-R_S6dg_e.js";import"./SøkForm-BAlHpl2M.js";import"./index.es-CrSE2Vo3.js";import"./Modal-CkgRguxl.js";import"./floating-ui.react-BQhJV-NN.js";import"./index-BUjOf9FY.js";import"./Tag-KNyf_X-k.js";import"./VStack-qlvPq9uV.js";import"./ExclamationmarkTriangleFill-VQXYKzUw.js";import"./PersonInfo-C7ohnkLE.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,E=f(h),J={title:"søk/FagsakSøk",component:p,decorators:[E,i],parameters:{msw:{handlers:[d.get(g.KODEVERK_LOS,()=>k.json(c))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:o=>m(u()).data?r.jsx(p,{...o}):r.jsx(l,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:"FP",status:S.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",aktørId:"23",kjønn:v.MANN,språkkode:"NB"},barnFødt:"2019-12-12",aktørId:"23",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:s.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:t.UNDER_ARBEID},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:s.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:t.UNDER_ARBEID}]}},a={args:{fagsaker:[],fagsakOppgaver:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    fagsaker: [{
      saksnummer: '12213234',
      fagsakYtelseType: 'FP',
      status: FagsakStatusEnum.UNDER_BEHANDLING,
      person: {
        navn: 'Espen Utvikler',
        fødselsdato: '1980-10-10',
        fødselsnummer: '1010',
        aktørId: '23',
        kjønn: KjønnkodeEnum.MANN,
        språkkode: 'NB'
      },
      barnFødt: '2019-12-12',
      aktørId: '23',
      opprettet: '',
      relasjonsRolleType: '-'
    }],
    fagsakOppgaver: [{
      id: 1,
      reservasjonStatus: {
        erReservert: false
      },
      saksnummer: '12213234',
      personnummer: '1010',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: 'FP',
      erTilSaksbehandling: true,
      behandlingId: '12344',
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID
    }, {
      id: 2,
      reservasjonStatus: {
        erReservert: false
      },
      saksnummer: '12213234',
      personnummer: '1010',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: 'FP',
      erTilSaksbehandling: true,
      behandlingId: '12344',
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID
    }]
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...a.parameters?.docs?.source}}};const W=["Default","IngentingBleFunnet"];export{n as Default,a as IngentingBleFunnet,W as __namedExportsOrder,J as default};
