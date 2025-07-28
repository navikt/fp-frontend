import{w as i,F as a,B as r,j as t}from"./iframe-DM8LYoMN.js";import{X as l}from"./index.es-0Unrm-qE.js";import{u as m}from"./useQuery-krRsjIPm.js";import{a as d,L as k,H as g,l as u}from"./fplosSaksbehandlerApi-_CPBJ_yv.js";import{F as E}from"./SøkResultat-Caz5kBFa.js";import{g as f}from"./withIntl-BN5cT-Jw.js";import{a as c}from"./alleKodeverkLos-DeeW-5p1.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-6iEa2oys.js";import{m as R}from"./nb_NO-BuWnCQiM.js";import"./Loader-CN2EFucT.js";import"./useLosKodeverk-B2aQHiT-.js";import"./Table-B4_kGWBJ.js";import"./ArrowsUpDown-VRV-bbEW.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-DbuORtlx.js";import"./message-Cgpe6rKf.js";import"./ChevronRight-DOPvKhgT.js";import"./SøkForm-C1I3WMbE.js";import"./index.es-B-U1gNAW.js";import"./Modal-laqU7i9r.js";import"./index-Bifiva1h.js";import"./Tag-BM8q_-bR.js";import"./VStack-DWSoSyHo.js";import"./ExclamationmarkTriangleFill-DEUWxpKC.js";import"./PersonInfo-CmZu1Kh1.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,v=f(R),q={title:"søk/FagsakSøk",component:o,decorators:[v,i],parameters:{msw:{handlers:[d.get(k.KODEVERK_LOS,()=>g.json(c))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:p=>m(u()).data?t.jsx(o,{...p}):t.jsx(l,{})},s={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:E.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:S.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}},n={args:{fagsaker:[],fagsakOppgaver:[]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      andreKriterier: []
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
      andreKriterier: []
    }]
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...n.parameters?.docs?.source}}};const z=["Default","IngentingBleFunnet"];export{s as Default,n as IngentingBleFunnet,z as __namedExportsOrder,q as default};
