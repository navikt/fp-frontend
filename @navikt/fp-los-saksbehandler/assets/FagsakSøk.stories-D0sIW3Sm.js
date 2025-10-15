import{w as o,j as s}from"./iframe-zFWYcwm7.js";import{Q as p}from"./index.es-C_wlL2iz.js";import{u as i}from"./useQuery-B933LyRw.js";import{h as l,L as m,H as d,l as k}from"./fplosSaksbehandlerApi-CBXsuCIC.js";import{g}from"./withIntl-ALOaV7Pp.js";import{a as u}from"./alleKodeverkLos-JR0SOFbV.js";import{K as c}from"./Kjonnkode-DjBoP8-t.js";import{F as a}from"./FagsakSøk-CwB31Wgp.js";import{m as f}from"./nb_NO-D8YjOQZL.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-CG9biIaz.js";import"./SøkForm-Dn93S7n3.js";import"./index.es-bkEWtoh8.js";import"./Modal-QnReuhsY.js";import"./floating-ui.react-B6DTH5te.js";import"./composeEventHandlers-DVdnGlxH.js";import"./index-Dev1q-0K.js";import"./ChevronDown-CDaqZ_tC.js";import"./Tag-BSM-RIPZ.js";import"./VStack-C786mKbM.js";import"./ExclamationmarkTriangleFill-0e8j3BQD.js";import"./PersonInfo-B-paAyFj.js";import"./SøkResultat-0aK6N-R4.js";import"./useLosKodeverk-BomTLYRF.js";import"./Table--XPpCnjV.js";import"./ChevronRight-DWcWXOYF.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,v=g(f),V={title:"søk/FagsakSøk",component:a,decorators:[v,o],parameters:{msw:{handlers:[l.get(m.KODEVERK_LOS,()=>d.json(u))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:t=>i(k()).data?s.jsx(a,{...t}):s.jsx(p,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:"FP",status:"UBEH",person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",aktørId:"23",kjønn:c.MANN,språkkode:"NB"},barnFødt:"2019-12-12",aktørId:"23",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"}]}},r={args:{fagsaker:[],fagsakOppgaver:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
