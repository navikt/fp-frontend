import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-BXld5sfV.js";import{w as s,B as a}from"./iframe-DxwM4xU5.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-D3Bpl7ME.js";import{O as i}from"./OppgaveHandlingerMenu-CHDdlLvX.js";import{m}from"./nb_NO-BRC6EKYe.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-DW6tD4tW.js";import"./FlyttReservasjonModal-BjTsV2JF.js";import"./index.es-BllIWvfJ.js";import"./index.es-Dug4QYxW.js";import"./Loader-DdsWyIwa.js";import"./Modal-BDEypy-g.js";import"./floating-ui.react-hzBpVm0Y.js";import"./composeEventHandlers-C2vQhqcS.js";import"./index-CvKkzCSw.js";import"./ChevronDown-DxaiY5wo.js";import"./Tag-36BpLXc6.js";import"./VStack-DgbYcPiR.js";import"./OppgaveReservasjonForlengetModal-D5soT8uw.js";import"./NotatModal-BzuTvr_A.js";import"./Portal-C_LWFiEz.js";import"./ChevronRight-D9NPKCui.js";import"./HourglassTopFilled-BEbQOqgm.js";import"./PersonHeadset-B4f6qvkJ.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
