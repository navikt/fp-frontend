import{w as l,F as s,B as t,j as r}from"./iframe-DZrfQhmt.js";import{X as d}from"./index.es-BcsMNl_W.js";import{u as m}from"./useLosKodeverk-CVIXc4uI.js";import{a as g,L as k,H as u,l as E}from"./fplosSaksbehandlerApi-CqHcwc4C.js";import{F as S}from"./SøkResultat-CRicfuFd.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as R}from"./withIntl-MVxRk1vh.js";import{a as f}from"./alleKodeverkLos-JR0SOFbV.js";import{K as c}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-DaqrAlSi.js";import{m as v}from"./nb_NO-BiGyfJgG.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-Cd5GBwP9.js";import"./Table-riZywx3-.js";import"./ArrowsUpDown-pET3yqlY.js";import"./composeEventHandlers-BivaY7Vf.js";import"./ChevronRight-DfGuYgap.js";import"./SøkForm-DTuA9QKa.js";import"./index.es-05Y_sk3C.js";import"./Modal-Cpcc_uy-.js";import"./index-vJ6sSl0L.js";import"./Tag-jf73OxDF.js";import"./VStack-VrpA6W4Y.js";import"./ExclamationmarkTriangleFill-BF8MosMC.js";import"./PersonInfo-CTNou9Zk.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,h=R(v),q={title:"søk/FagsakSøk",component:o,decorators:[h,l],parameters:{msw:{handlers:[g.get(k.KODEVERK_LOS,()=>u.json(f))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:i=>m(E()).data?r.jsx(o,{...i}):r.jsx(d,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:s.FORELDREPENGER,status:S.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:c.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:t.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:t.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}]}},a={args:{fagsaker:[],fagsakOppgaver:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    fagsaker: [{
      saksnummer: '12213234',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      status: FagsakStatus.UNDER_BEHANDLING,
      person: {
        navn: 'Espen Utvikler',
        fødselsdato: '1980-10-10',
        dødsdato: null,
        fødselsnummer: '1010',
        aktørId: '23',
        kjønn: KjønnkodeEnum.MANN
      },
      barnFødt: '2019-12-12',
      aktørId: '23',
      opprettet: ''
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
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
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
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
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
}`,...a.parameters?.docs?.source}}};const z=["Default","IngentingBleFunnet"];export{n as Default,a as IngentingBleFunnet,z as __namedExportsOrder,q as default};
