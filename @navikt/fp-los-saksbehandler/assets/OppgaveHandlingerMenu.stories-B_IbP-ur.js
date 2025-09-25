import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-Bsh7Sork.js";import{w as s,B as a}from"./iframe-DAr4z3wg.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-DLS80wvo.js";import{O as i}from"./OppgaveHandlingerMenu-mtljHAOi.js";import{m}from"./nb_NO-IxsdePfK.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-tOO1BOth.js";import"./FlyttReservasjonModal-DxdmoDeu.js";import"./index.es-Btudquw0.js";import"./index.es-mi9KTwSZ.js";import"./Loader-DrsJTGRF.js";import"./Modal-BAzcmhQV.js";import"./floating-ui.react-VugY_tUT.js";import"./composeEventHandlers-C5MnnDIG.js";import"./index-iHiP0wo0.js";import"./ChevronDown-BXeIQ5uf.js";import"./Tag-DrEG3uoO.js";import"./VStack-CK9W3U07.js";import"./OppgaveReservasjonForlengetModal-DnXVv1R2.js";import"./NotatModal-C-y3_Cmn.js";import"./Portal-DgLJG4IL.js";import"./ChevronRight-jsca69A7.js";import"./HourglassTopFilled-CgpHpoK0.js";import"./PersonHeadset-lEnUDK8E.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
