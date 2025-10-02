import{w as p,j as r}from"./iframe-DQObE0ib.js";import{Q as i}from"./index.es-H_piUs6X.js";import{u as l}from"./useQuery-BGQdeIYJ.js";import{h as m,L as d,H as g,l as k}from"./fplosSaksbehandlerApi-YrD9FbIV.js";import{O as a}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as u}from"./withIntl-Dc5alr90.js";import{a as f}from"./alleKodeverkLos-JR0SOFbV.js";import{K as c}from"./Kjonnkode-DjBoP8-t.js";import{F as t}from"./FagsakSøk-W2iHkVdR.js";import{m as v}from"./nb_NO-Cxb7Qome.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-B42dYNSD.js";import"./SøkForm-D3ZGygIQ.js";import"./index.es-DxsygW_W.js";import"./Modal-DGW_iphE.js";import"./floating-ui.react-By7qfWNb.js";import"./composeEventHandlers-uCHalawx.js";import"./index-BUdXwz99.js";import"./ChevronDown-DAoI4_A4.js";import"./Tag-DG75O3UG.js";import"./VStack-US4lL_lt.js";import"./ExclamationmarkTriangleFill-CfUfkHrC.js";import"./PersonInfo-BtaF-9KF.js";import"./SøkResultat-DFD-xENj.js";import"./useLosKodeverk-B9Y4A5_8.js";import"./Table-Cjqd5dRq.js";import"./ChevronRight-SVfTnswc.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,h=u(v),z={title:"søk/FagsakSøk",component:t,decorators:[h,p],parameters:{msw:{handlers:[m.get(d.KODEVERK_LOS,()=>g.json(f))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:o=>l(k()).data?r.jsx(t,{...o}):r.jsx(i,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:"FP",status:"UBEH",person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",aktørId:"23",kjønn:c.MANN,språkkode:"NB"},barnFødt:"2019-12-12",aktørId:"23",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:a.UNDER_ARBEID},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:a.UNDER_ARBEID}]}},s={args:{fagsaker:[],fagsakOppgaver:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
      behandlingstype: 'BT-002',
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: 'FP',
      erTilSaksbehandling: true,
      behandlingId: '12344',
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID
    }]
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...s.parameters?.docs?.source}}};const G=["Default","IngentingBleFunnet"];export{n as Default,s as IngentingBleFunnet,G as __namedExportsOrder,z as default};
