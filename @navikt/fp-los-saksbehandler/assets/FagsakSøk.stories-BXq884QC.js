import{w as i,F as r,B as a,j as t}from"./iframe-CyPkD_ak.js";import{X as l}from"./index.es-naRtX646.js";import{u as m}from"./useQuery-C1ErPo1u.js";import{a as d,L as k,H as g,l as u}from"./fplosSaksbehandlerApi-VmWZgKW-.js";import{F as E}from"./SøkResultat-Dv6q1yVm.js";import{g as f}from"./withIntl-CIFsDVd0.js";import{a as c}from"./alleKodeverkLos-DeeW-5p1.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-D59kX4sV.js";import{m as R}from"./nb_NO-CRusyisS.js";import"./index.es-CVnPHYNh.js";import"./Loader-CY0_Js7v.js";import"./useLosKodeverk-BPWnj7bd.js";import"./Table-BiTrzpGD.js";import"./ArrowsUpDown-B0raxNy1.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-CH8_dNCP.js";import"./message-D_e69ppz.js";import"./ChevronRight-GKQL61kp.js";import"./SøkForm-Dn9HMXRc.js";import"./index.es-CYQDWAXV.js";import"./Modal-D50mm1Zy.js";import"./index-CpEopPp5.js";import"./Tag-CvXDIv8V.js";import"./VStack-CYvyhPBD.js";import"./index.es-FVdwy9rG.js";import"./ExclamationmarkTriangleFill-BvFSgeBV.js";import"./PersonInfo-ID0s20X1.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,v=f(R),J={title:"søk/FagsakSøk",component:o,decorators:[v,i],parameters:{msw:{handlers:[d.get(k.KODEVERK_LOS,()=>g.json(c))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:p=>m(u()).data?t.jsx(o,{...p}):t.jsx(l,{})},s={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:r.FORELDREPENGER,status:E.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:S.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:r.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:r.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}},n={args:{fagsaker:[],fagsakOppgaver:[]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const W=["Default","IngentingBleFunnet"];export{s as Default,n as IngentingBleFunnet,W as __namedExportsOrder,J as default};
