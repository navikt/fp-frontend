import{w as i,B as a,j as r}from"./iframe-al_w9SvD.js";import{Q as l}from"./index.es-DJaJzdj5.js";import{u as m}from"./useQuery-Cq95H-Zv.js";import{h as d,L as g,H as k,l as u}from"./fplosSaksbehandlerApi-ClPM3L4y.js";import{F as S}from"./SøkResultat-BauoRe6K.js";import{O as t}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as f}from"./withIntl-CilqdPmv.js";import{a as c}from"./alleKodeverkLos-JR0SOFbV.js";import{K as v}from"./Kjonnkode-DjBoP8-t.js";import{F as o}from"./FagsakSøk-BiBqyl5q.js";import{m as h}from"./nb_NO-D75nEubS.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-IndRYNKO.js";import"./useLosKodeverk-Ch6G3qC8.js";import"./Table-Bigy80jT.js";import"./composeEventHandlers-9iUK784h.js";import"./ChevronDown-CUgqPIXf.js";import"./ChevronRight-D4lzYR8H.js";import"./SøkForm-QyjVtvVh.js";import"./index.es-Q8WK_JoA.js";import"./Modal-0WIgj-CC.js";import"./floating-ui.react-Cit7apB7.js";import"./index-BPTO5uRc.js";import"./Tag-BsjiPpoy.js";import"./VStack-Codnuli_.js";import"./ExclamationmarkTriangleFill-Cwrf355W.js";import"./PersonInfo-CI1uo2gu.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,E=f(h),J={title:"søk/FagsakSøk",component:o,decorators:[E,i],parameters:{msw:{handlers:[d.get(g.KODEVERK_LOS,()=>k.json(c))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:p=>m(u()).data?r.jsx(o,{...p}):r.jsx(l,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:"FP",status:S.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:v.MANN,diskresjonskode:null,språkkode:"NB"},barnFødt:"2019-12-12",aktørId:"23",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:t.UNDER_ARBEID},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:t.UNDER_ARBEID}]}},s={args:{fagsaker:[],fagsakOppgaver:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
