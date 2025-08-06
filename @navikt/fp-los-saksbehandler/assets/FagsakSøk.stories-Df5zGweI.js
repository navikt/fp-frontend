import{w as i,F as a,B as r,j as t}from"./iframe-rUdowgs-.js";import{X as l}from"./index.es-GATJa6fU.js";import{u as m}from"./useQuery-C1p9khC2.js";import{a as d,L as k,H as g,l as u}from"./fplosSaksbehandlerApi-CmHpqlwU.js";import{F as E}from"./SøkResultat-B_HKPAJH.js";import{g as f}from"./withIntl-DU4l9fHm.js";import{a as c}from"./alleKodeverkLos-DeeW-5p1.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-9bJNYu94.js";import{m as R}from"./nb_NO-DUD8ZAg7.js";import"./Loader-DN9l1kEc.js";import"./useLosKodeverk-BiJVmCW7.js";import"./Table-GgJF7uGJ.js";import"./ArrowsUpDown-CdzRmDAy.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-BOhz-Zxb.js";import"./ChevronRight-D-GnPNxc.js";import"./SøkForm-DVRA-FMk.js";import"./index.es-Bk-da9xx.js";import"./Modal-D9cD-R9g.js";import"./index-C7-4nLYl.js";import"./Tag-DriZpGYG.js";import"./VStack-CLJMsM8A.js";import"./ExclamationmarkTriangleFill-BV6MfKM8.js";import"./PersonInfo-BqJ6EetM.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,v=f(R),V={title:"søk/FagsakSøk",component:o,decorators:[v,i],parameters:{msw:{handlers:[d.get(k.KODEVERK_LOS,()=>g.json(c))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:p=>m(u()).data?t.jsx(o,{...p}):t.jsx(l,{})},s={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:E.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:S.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}},n={args:{fagsaker:[],fagsakOppgaver:[]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const q=["Default","IngentingBleFunnet"];export{s as Default,n as IngentingBleFunnet,q as __namedExportsOrder,V as default};
