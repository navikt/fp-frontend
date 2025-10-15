import{w as o,j as s}from"./iframe-D5kzLkTB.js";import{Q as p}from"./index.es-5JZOUY4a.js";import{u as i}from"./useQuery-6y2dZTqF.js";import{h as l,L as m,H as d,l as k}from"./fplosSaksbehandlerApi-DPBGFk9W.js";import{g}from"./withIntl-BwS0yhYk.js";import{a as u}from"./alleKodeverkLos-JR0SOFbV.js";import{K as c}from"./Kjonnkode-DjBoP8-t.js";import{F as a}from"./FagsakSøk-BkR5-Nus.js";import{m as f}from"./nb_NO-DkEvKsFh.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-B-ItYq5j.js";import"./SøkForm-DIiZKJTr.js";import"./index.es-B2Qsiamg.js";import"./Modal-D12FW8s_.js";import"./floating-ui.react-DKeKFHDe.js";import"./composeEventHandlers-CNKAIeZw.js";import"./index-Cfle-u0a.js";import"./ChevronDown-0Qs7jtBh.js";import"./Tag-B4I7MrXx.js";import"./VStack-DSYO9RIf.js";import"./ExclamationmarkTriangleFill-Dc8t9Pbd.js";import"./PersonInfo-CHY66R2K.js";import"./SøkResultat-tNkudOKz.js";import"./useLosKodeverk-D58PjiPH.js";import"./Table-Ct2JSsx9.js";import"./ChevronRight-DFSx_CB9.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,v=g(f),V={title:"søk/FagsakSøk",component:a,decorators:[v,o],parameters:{msw:{handlers:[l.get(m.KODEVERK_LOS,()=>d.json(u))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:t=>i(k()).data?s.jsx(a,{...t}):s.jsx(p,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:"FP",status:"UBEH",person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",aktørId:"23",kjønn:c.MANN,språkkode:"NB"},barnFødt:"2019-12-12",aktørId:"23",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"}]}},r={args:{fagsaker:[],fagsakOppgaver:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    fagsaker: [{
      saksnummer: '12213234',
      fagsakYtelseType: 'FP',
      status: 'UBEH',
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
      behandlingstype: 'BT-002',
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: 'FP',
      erTilSaksbehandling: true,
      behandlingId: '12344',
      andreKriterier: [],
      oppgaveBehandlingStatus: 'UNDER_ARBEID'
    }, {
      id: 2,
      reservasjonStatus: {
        erReservert: false
      },
      saksnummer: '12213234',
      personnummer: '1010',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: 'BT-002',
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: 'FP',
      erTilSaksbehandling: true,
      behandlingId: '12344',
      andreKriterier: [],
      oppgaveBehandlingStatus: 'UNDER_ARBEID'
    }]
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...r.parameters?.docs?.source}}};const q=["Default","IngentingBleFunnet"];export{n as Default,r as IngentingBleFunnet,q as __namedExportsOrder,V as default};
