import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-C7yLq6yg.js";import{w as s,B as a}from"./iframe-DgZiFRaD.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-rMvziq_b.js";import{O as i}from"./OppgaveHandlingerMenu-DDXlaJRL.js";import{m}from"./nb_NO-rK5Xk3PQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-BycX5sET.js";import"./FlyttReservasjonModal-B7nPZtPq.js";import"./index.es-D1dEv4Eh.js";import"./index.es-CeLpzBia.js";import"./Loader-BtXeWwhi.js";import"./Modal-DmXRaTmE.js";import"./floating-ui.react-BbtTyEmN.js";import"./composeEventHandlers-Cu0cTQly.js";import"./index-DlnoGqDp.js";import"./ChevronDown-Db9vxiaT.js";import"./Tag-Cp4HBASQ.js";import"./VStack-DTZ0YiG_.js";import"./OppgaveReservasjonForlengetModal-RmR1SIVO.js";import"./NotatModal-SP78btjy.js";import"./Portal-BnOIlypI.js";import"./ChevronRight-DBTq4mr3.js";import"./HourglassTopFilled-H4t9F7L0.js";import"./PersonHeadset-BWVhr0Zr.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
