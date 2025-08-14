import{w as l,F as s,B as t,j as r}from"./iframe-BXoHgEa-.js";import{X as m}from"./index.es-D4OORaz-.js";import{u as d}from"./useLosKodeverk-dTtzBYPh.js";import{a as g,L as k,H as u,l as E}from"./fplosSaksbehandlerApi-CVMsXjZG.js";import{F as S}from"./SøkResultat-96Y4d0SG.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as R}from"./withIntl-Drm4VCv7.js";import{a as f}from"./alleKodeverkLos-JR0SOFbV.js";import{K as c}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-B4ZbjI19.js";import{m as v}from"./nb_NO-QJrSJNY5.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-CqOZFQT3.js";import"./Table-gOp6AR9m.js";import"./ArrowsUpDown-BzT9PSTn.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-BYQFD8ty.js";import"./ChevronRight-CrK2f-nJ.js";import"./SøkForm-Buv4o90X.js";import"./index.es-CjhcoE0S.js";import"./Modal-Cb081AvI.js";import"./index-B2Oi8yAc.js";import"./Tag-DcTWI1H0.js";import"./VStack-BsXxvB66.js";import"./ExclamationmarkTriangleFill-Bx9KvdFv.js";import"./PersonInfo-B6gJlVJK.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,h=R(v),z={title:"søk/FagsakSøk",component:o,decorators:[h,l],parameters:{msw:{handlers:[g.get(k.KODEVERK_LOS,()=>u.json(f))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:i=>d(E()).data?r.jsx(o,{...i}):r.jsx(m,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:s.FORELDREPENGER,status:S.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:c.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:t.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:t.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}]}},a={args:{fagsaker:[],fagsakOppgaver:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const J=["Default","IngentingBleFunnet"];export{n as Default,a as IngentingBleFunnet,J as __namedExportsOrder,z as default};
