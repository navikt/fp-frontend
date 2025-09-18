import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-i-IdBvue.js";import{w as s,B as a}from"./iframe-ByxoPEP3.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-BrjxEwCU.js";import{O as i}from"./OppgaveHandlingerMenu-BZcdMG8f.js";import{m}from"./nb_NO-BdJghxQq.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-C7icPzxe.js";import"./FlyttReservasjonModal-BHOl-Hea.js";import"./index.es-Cb_jrfi5.js";import"./index.es-DDS_sI15.js";import"./Loader-Bq9jJYrN.js";import"./Modal-DxMsFHGx.js";import"./floating-ui.react-CakYEGjN.js";import"./composeEventHandlers-DHNuXF26.js";import"./index-dFM0PtaG.js";import"./ChevronDown-BAXtNZHM.js";import"./Tag-Cg6ZBqUj.js";import"./VStack-1KUPWjDx.js";import"./OppgaveReservasjonForlengetModal-HrKvlRZ-.js";import"./NotatModal-TLO8ny6g.js";import"./Portal-BR9h15aa.js";import"./ChevronRight-BZZQU8ll.js";import"./HourglassTopFilled-C7kVUWLO.js";import"./PersonHeadset-CmiSO8fF.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    oppgave: {
      id: 1,
      reservasjonStatus: {
        erReservert: false,
        flyttetReservasjon: {
          tidspunkt: '2019-02-02',
          uid: '23423',
          navn: 'Espen Utvikler',
          begrunnelse: 'Flyttet'
        },
        reservertTilTidspunkt: '2021-08-02T00:54:25.455'
      },
      saksnummer: '1234',
      personnummer: '1212',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2019-01-01',
      behandlingsfrist: '2019-01-01',
      fagsakYtelseType: 'FP',
      erTilSaksbehandling: true,
      behandlingId: '1',
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID
    }
  }
}`,...r.parameters?.docs?.source}}};const L=["Default"];export{r as Default,L as __namedExportsOrder,G as default};
