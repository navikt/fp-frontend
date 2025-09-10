import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-CAqHCeMT.js";import{w as s,B as a}from"./iframe-NweChku0.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-BSd7bkvP.js";import{O as i}from"./OppgaveHandlingerMenu-S_WoFmRM.js";import{m}from"./nb_NO-XfFeSNwn.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-Ky_mGAtZ.js";import"./FlyttReservasjonModal-BLMrKjBg.js";import"./index.es-D3FUkAfY.js";import"./index.es-BxH8Lpfg.js";import"./Loader-COamu5FK.js";import"./Modal-D4Dtj8lA.js";import"./floating-ui.react-BmnoFZ-m.js";import"./composeEventHandlers-9_X6eWHO.js";import"./index-BRk-wECo.js";import"./ChevronDown-DLAXB9Mx.js";import"./Tag-CWbbP-WA.js";import"./VStack-DKk8kL0h.js";import"./OppgaveReservasjonForlengetModal-DCP3xhf5.js";import"./NotatModal-B6u6r8cM.js";import"./Portal-BM95Nwgb.js";import"./ChevronRight-CqUqOdpz.js";import"./HourglassTopFilled-CQaDE6mM.js";import"./PersonHeadset-BsZl4fTC.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
