import{w as i,F as a,B as r,j as t}from"./iframe-Cbsua4r2.js";import{X as l}from"./index.es-5An9wuhY.js";import{u as m}from"./useQuery-C-0M3yS5.js";import{a as d,L as k,H as g,l as u}from"./fplosSaksbehandlerApi-CYc5P8CX.js";import{F as E}from"./SøkResultat-B0j22oAc.js";import{g as f}from"./withIntl-D-TXM6Cf.js";import{a as c}from"./alleKodeverkLos-DeeW-5p1.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-BFREIfg-.js";import{m as R}from"./nb_NO-BblFEszt.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-pn-IcA3V.js";import"./useLosKodeverk-DT2WxwHb.js";import"./Table-COrDGJvu.js";import"./ArrowsUpDown-B9biLawy.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-Ci8HeMsC.js";import"./ChevronRight-BJHN7PC2.js";import"./SøkForm-bB4OCkQq.js";import"./index.es-CYNXQyQE.js";import"./Modal-DYcaQjLF.js";import"./index-Cs44veBI.js";import"./Tag-CCgLjVfI.js";import"./VStack-IFWqsRog.js";import"./ExclamationmarkTriangleFill-B4ORBbxo.js";import"./PersonInfo-DIQ0OCl_.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,v=f(R),q={title:"søk/FagsakSøk",component:o,decorators:[v,i],parameters:{msw:{handlers:[d.get(k.KODEVERK_LOS,()=>g.json(c))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:p=>m(u()).data?t.jsx(o,{...p}):t.jsx(l,{})},s={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:E.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:S.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}},n={args:{fagsaker:[],fagsakOppgaver:[]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
