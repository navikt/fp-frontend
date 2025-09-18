import{w as i,B as a,j as r}from"./iframe-ByxoPEP3.js";import{Q as l}from"./index.es-DDS_sI15.js";import{u as m}from"./useQuery-B87DBgwl.js";import{h as d,L as g,H as k,l as u}from"./fplosSaksbehandlerApi-i-IdBvue.js";import{F as S}from"./SøkResultat-BoWDbRed.js";import{O as t}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as f}from"./withIntl-BrjxEwCU.js";import{a as c}from"./alleKodeverkLos-JR0SOFbV.js";import{K as v}from"./Kjonnkode-DjBoP8-t.js";import{F as o}from"./FagsakSøk-cKGIqCD7.js";import{m as h}from"./nb_NO-BdJghxQq.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-Bq9jJYrN.js";import"./useLosKodeverk--bP2D4R1.js";import"./Table-exm8YT0j.js";import"./composeEventHandlers-DHNuXF26.js";import"./ChevronDown-BAXtNZHM.js";import"./ChevronRight-BZZQU8ll.js";import"./SøkForm-23wI4s1t.js";import"./index.es-Cb_jrfi5.js";import"./Modal-DxMsFHGx.js";import"./floating-ui.react-CakYEGjN.js";import"./index-dFM0PtaG.js";import"./Tag-Cg6ZBqUj.js";import"./VStack-1KUPWjDx.js";import"./ExclamationmarkTriangleFill-CqyQie6e.js";import"./PersonInfo-B_idsmkI.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,E=f(h),J={title:"søk/FagsakSøk",component:o,decorators:[E,i],parameters:{msw:{handlers:[d.get(g.KODEVERK_LOS,()=>k.json(c))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:p=>m(u()).data?r.jsx(o,{...p}):r.jsx(l,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:"FP",status:S.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:v.MANN,diskresjonskode:null,språkkode:"NB"},barnFødt:"2019-12-12",aktørId:"23",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:t.UNDER_ARBEID},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:t.UNDER_ARBEID}]}},s={args:{fagsaker:[],fagsakOppgaver:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    fagsaker: [{
      saksnummer: '12213234',
      fagsakYtelseType: 'FP',
      status: FagsakStatusEnum.UNDER_BEHANDLING,
      person: {
        navn: 'Espen Utvikler',
        fødselsdato: '1980-10-10',
        dødsdato: null,
        fødselsnummer: '1010',
        aktørId: '23',
        kjønn: KjønnkodeEnum.MANN,
        diskresjonskode: null,
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...s.parameters?.docs?.source}}};const W=["Default","IngentingBleFunnet"];export{n as Default,s as IngentingBleFunnet,W as __namedExportsOrder,J as default};
