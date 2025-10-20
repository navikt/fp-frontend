import{w as o,j as s}from"./iframe-DiMnSK1d.js";import{Z as p}from"./index.es-lCpdW0HF.js";import{u as i}from"./useQuery-ClkPqT5O.js";import{h as l,L as m,H as d,l as k}from"./fplosSaksbehandlerApi-Bun217q9.js";import{g}from"./withIntl-DLwdP-IZ.js";import{a as u}from"./alleKodeverkLos-JR0SOFbV.js";import{K as c}from"./Kjonnkode-DjBoP8-t.js";import{F as a}from"./FagsakSøk-O1WXuu4a.js";import{m as f}from"./nb_NO-D3Su-AXd.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-B0Yol6yT.js";import"./SøkForm-C10DLBSN.js";import"./index.es-CmxG4w0J.js";import"./Modal-cMpeHn0D.js";import"./floating-ui.react-BEYd_m8g.js";import"./composeEventHandlers-CoQZPbaw.js";import"./index-Cs21t5FM.js";import"./ChevronDown-D9SW_1AK.js";import"./Tag-DzGiyALb.js";import"./VStack-Bm6ysBGh.js";import"./ExclamationmarkTriangleFill-7RI5ozws.js";import"./PersonInfo-Bb-hxuL1.js";import"./SøkResultat-DByDhuY-.js";import"./useLosKodeverk-CDWMCYmO.js";import"./Table-vcMq0F8T.js";import"./ChevronRight-CM2Tx_gE.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,v=g(f),Z={title:"søk/FagsakSøk",component:a,decorators:[v,o],parameters:{msw:{handlers:[l.get(m.KODEVERK_LOS,()=>d.json(u))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:t=>i(k()).data?s.jsx(a,{...t}):s.jsx(p,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:"FP",status:"UBEH",person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",aktørId:"23",kjønn:c.MANN,språkkode:"NB"},barnFødt:"2019-12-12",aktørId:"23",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"}]}},r={args:{fagsaker:[],fagsakOppgaver:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const V=["Default","IngentingBleFunnet"];export{n as Default,r as IngentingBleFunnet,V as __namedExportsOrder,Z as default};
