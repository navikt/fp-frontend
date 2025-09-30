import{w as p,j as r}from"./iframe-DYQXSugv.js";import{Q as i}from"./index.es-C8XlgDNo.js";import{u as l}from"./useQuery-Ba6nhKfY.js";import{h as m,L as d,H as g,l as k}from"./fplosSaksbehandlerApi-BfsdCpZQ.js";import{O as a}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as u}from"./withIntl-Bp8rqF47.js";import{a as f}from"./alleKodeverkLos-JR0SOFbV.js";import{K as c}from"./Kjonnkode-DjBoP8-t.js";import{F as t}from"./FagsakSøk-CL4zOIiM.js";import{m as v}from"./nb_NO-BkdgpR3F.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-Bxok6rQJ.js";import"./SøkForm-Bs8Uhbtb.js";import"./index.es-CzRS-N89.js";import"./Modal-C6HyE8k9.js";import"./floating-ui.react-DyUfF0SX.js";import"./composeEventHandlers-D5zYzSMn.js";import"./index-DM-P7FfV.js";import"./ChevronDown-Cia31y9C.js";import"./Tag-B733wLh1.js";import"./VStack-0FyVDDRJ.js";import"./ExclamationmarkTriangleFill-DHOmOE4K.js";import"./PersonInfo-DKeiIMY9.js";import"./SøkResultat-DgosvXdX.js";import"./useLosKodeverk-CqoPwSmx.js";import"./Table-BZkjQVPB.js";import"./ChevronRight-BoXsa9sa.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,h=u(v),z={title:"søk/FagsakSøk",component:t,decorators:[h,p],parameters:{msw:{handlers:[m.get(d.KODEVERK_LOS,()=>g.json(f))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:o=>l(k()).data?r.jsx(t,{...o}):r.jsx(i,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:"FP",status:"UBEH",person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",aktørId:"23",kjønn:c.MANN,språkkode:"NB"},barnFødt:"2019-12-12",aktørId:"23",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:a.UNDER_ARBEID},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:a.UNDER_ARBEID}]}},s={args:{fagsaker:[],fagsakOppgaver:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
