import{w as i,B as s,j as r}from"./iframe-B_gJBb7r.js";import{Q as l}from"./index.es-CbHhdo4C.js";import{u as m}from"./useQuery-t6iTPEh-.js";import{h as d,L as g,H as k,l as u}from"./fplosSaksbehandlerApi-I_eKkXm5.js";import{F as S}from"./SøkResultat-CsHGvLsd.js";import{O as t}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as f}from"./withIntl-DHnWlpZk.js";import{a as c}from"./alleKodeverkLos-JR0SOFbV.js";import{K as v}from"./Kjonnkode-DjBoP8-t.js";import{F as p}from"./FagsakSøk-DYNcg_Ve.js";import{m as h}from"./nb_NO-BYV9EfKW.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-i6Od3rbL.js";import"./useLosKodeverk-BdeUhmgv.js";import"./Table-DOt0hw6z.js";import"./composeEventHandlers-C1qbdVpl.js";import"./ChevronDown-DH_0Sr6y.js";import"./ChevronRight-BB6VuNE1.js";import"./SøkForm-Dq8kPKgV.js";import"./index.es-C5hA478h.js";import"./Modal-zHNc--Nf.js";import"./floating-ui.react-DMTowDgT.js";import"./index-d2PAzCkG.js";import"./Tag-D_aIr90f.js";import"./VStack-Mjg6ToKR.js";import"./ExclamationmarkTriangleFill-C8dee-x2.js";import"./PersonInfo-CAfEL_-w.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,E=f(h),J={title:"søk/FagsakSøk",component:p,decorators:[E,i],parameters:{msw:{handlers:[d.get(g.KODEVERK_LOS,()=>k.json(c))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:o=>m(u()).data?r.jsx(p,{...o}):r.jsx(l,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:"FP",status:S.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",aktørId:"23",kjønn:v.MANN,språkkode:"NB"},barnFødt:"2019-12-12",aktørId:"23",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:s.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:t.UNDER_ARBEID},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:s.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:t.UNDER_ARBEID}]}},a={args:{fagsaker:[],fagsakOppgaver:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
