import{w as o,j as s}from"./iframe-FHusWhXg.js";import{Z as p}from"./index.es-D-No7bk3.js";import{u as i}from"./useQuery-CkNNG0T0.js";import{h as l,L as m,H as d,l as k}from"./fplosSaksbehandlerApi-bDEMoisP.js";import{g}from"./withIntl-CfJuZ2Ho.js";import{a as u}from"./alleKodeverkLos-JR0SOFbV.js";import{K as c}from"./Kjonnkode-DjBoP8-t.js";import{F as a}from"./FagsakSøk-BaVizPfS.js";import{m as f}from"./nb_NO-DyXQqJfF.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-B5b3277y.js";import"./SøkForm-DYHXldN0.js";import"./index.es-Bh-bsHNz.js";import"./Modal-DyPCRWrt.js";import"./floating-ui.react-CszcVAZV.js";import"./composeEventHandlers-C1c8aMmq.js";import"./index-BOr9xCvS.js";import"./ChevronDown-C-QCVTfa.js";import"./Tag-CclJAQl6.js";import"./VStack-IrdgVemv.js";import"./ExclamationmarkTriangleFill-D6Ax06qJ.js";import"./PersonInfo-DiZQGoOw.js";import"./SøkResultat-CzZLlrLk.js";import"./useLosKodeverk-CDYNCpzd.js";import"./Table-B8DGsauB.js";import"./ChevronRight-DMWBSDUn.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,v=g(f),Z={title:"søk/FagsakSøk",component:a,decorators:[v,o],parameters:{msw:{handlers:[l.get(m.KODEVERK_LOS,()=>d.json(u))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:t=>i(k()).data?s.jsx(a,{...t}):s.jsx(p,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:"FP",status:"UBEH",person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",aktørId:"23",kjønn:c.MANN,språkkode:"NB"},barnFødt:"2019-12-12",aktørId:"23",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"}]}},r={args:{fagsaker:[],fagsakOppgaver:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
