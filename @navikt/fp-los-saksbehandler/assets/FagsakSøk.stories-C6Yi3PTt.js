import{w as p,j as a}from"./iframe-XJysTbVt.js";import{Q as i}from"./index.es-Bx2Lc6cN.js";import{u as l}from"./useQuery-DHcfd0I4.js";import{h as m,L as d,H as g,l as k}from"./fplosSaksbehandlerApi-BFD48Mop.js";import{F as u}from"./SøkResultat-alhOrZvC.js";import{O as r}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as f}from"./withIntl-CiDJYkrt.js";import{a as c}from"./alleKodeverkLos-JR0SOFbV.js";import{K as v}from"./Kjonnkode-DjBoP8-t.js";import{F as t}from"./FagsakSøk-XonWV0Tg.js";import{m as h}from"./nb_NO-CO3HAz6Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-BV-Jh8wD.js";import"./useLosKodeverk-BvLUDjJK.js";import"./Table-C7eUA1yU.js";import"./composeEventHandlers-CltQEKyj.js";import"./ChevronDown-C350f3Hb.js";import"./ChevronRight-DiNpdsOo.js";import"./SøkForm-BPqPm_QW.js";import"./index.es-DawA6EnQ.js";import"./Modal-BvNhRRyn.js";import"./floating-ui.react-BvpS9y_f.js";import"./index-DKMOwF-J.js";import"./Tag-B8W21FA_.js";import"./VStack-JRQgy8gX.js";import"./ExclamationmarkTriangleFill-D-hTcQRv.js";import"./PersonInfo-DKjcFsQ2.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,S=f(h),z={title:"søk/FagsakSøk",component:t,decorators:[S,p],parameters:{msw:{handlers:[m.get(d.KODEVERK_LOS,()=>g.json(c))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:o=>l(k()).data?a.jsx(t,{...o}):a.jsx(i,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:"FP",status:u.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",aktørId:"23",kjønn:v.MANN,språkkode:"NB"},barnFødt:"2019-12-12",aktørId:"23",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:r.UNDER_ARBEID},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:r.UNDER_ARBEID}]}},s={args:{fagsaker:[],fagsakOppgaver:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const J=["Default","IngentingBleFunnet"];export{n as Default,s as IngentingBleFunnet,J as __namedExportsOrder,z as default};
