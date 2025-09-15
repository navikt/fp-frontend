import{w as i,B as a,j as r}from"./iframe-D-7Qumb2.js";import{Q as l}from"./index.es-BWKXY8Zm.js";import{u as m}from"./useQuery-BhV4ZsAf.js";import{h as d,L as g,H as k,l as u}from"./fplosSaksbehandlerApi-BZvbsPDs.js";import{F as S}from"./SøkResultat-0b8RCjBj.js";import{O as t}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as f}from"./withIntl-CAr1wgSh.js";import{a as c}from"./alleKodeverkLos-JR0SOFbV.js";import{K as v}from"./Kjonnkode-DjBoP8-t.js";import{F as o}from"./FagsakSøk-Ba9CYGuz.js";import{m as h}from"./nb_NO-DWFKg_VO.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-21QoRLSO.js";import"./useLosKodeverk-I2SQCJ7D.js";import"./Table-hG1JoSDz.js";import"./composeEventHandlers-DJI96O9p.js";import"./ChevronDown-B19QdtsS.js";import"./ChevronRight-CzyT0-nz.js";import"./SøkForm-DauYh2O8.js";import"./index.es-B7nEd_p0.js";import"./Modal-BtOD45wg.js";import"./floating-ui.react-DprRCndk.js";import"./index-QdqvErMV.js";import"./Tag-CtH-johQ.js";import"./VStack-DdnwT8h-.js";import"./ExclamationmarkTriangleFill-CAlp5iD_.js";import"./PersonInfo-B4TY-yX7.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,E=f(h),J={title:"søk/FagsakSøk",component:o,decorators:[E,i],parameters:{msw:{handlers:[d.get(g.KODEVERK_LOS,()=>k.json(c))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:p=>m(u()).data?r.jsx(o,{...p}):r.jsx(l,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:"FP",status:S.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:v.MANN,diskresjonskode:null,språkkode:"NB"},barnFødt:"2019-12-12",aktørId:"23",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:t.UNDER_ARBEID},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:t.UNDER_ARBEID}]}},s={args:{fagsaker:[],fagsakOppgaver:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
