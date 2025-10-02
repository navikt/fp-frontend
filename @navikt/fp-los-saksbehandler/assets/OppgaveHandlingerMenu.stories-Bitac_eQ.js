import{h as e,L as t,H as n}from"./fplosSaksbehandlerApi-YrD9FbIV.js";import{O as s}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{w as a}from"./iframe-DQObE0ib.js";import{g as p}from"./withIntl-Dc5alr90.js";import{O as o}from"./OppgaveHandlingerMenu-jFG26FhR.js";import{m as i}from"./nb_NO-Cxb7Qome.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-tLvcX5m7.js";import"./FlyttReservasjonModal-NnzBXHSH.js";import"./index.es-DxsygW_W.js";import"./index.es-H_piUs6X.js";import"./Loader-B42dYNSD.js";import"./Modal-DGW_iphE.js";import"./floating-ui.react-By7qfWNb.js";import"./composeEventHandlers-uCHalawx.js";import"./index-BUdXwz99.js";import"./ChevronDown-DAoI4_A4.js";import"./Tag-DG75O3UG.js";import"./VStack-US4lL_lt.js";import"./OppgaveReservasjonForlengetModal-iMQk25pj.js";import"./NotatModal-GlZZUDMl.js";import"./Portal-Bp-HXdIj.js";import"./ChevronRight-SVfTnswc.js";import"./HourglassTopFilled-srRY-ALb.js";import"./PersonHeadset-BoJJR8j2.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,l=p(i),K={title:"behandlingskoer/OppgaveHandlingerMenu",component:o,decorators:[l,a],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:m("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:s.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      behandlingstype: 'BT-002',
      opprettetTidspunkt: '2019-01-01',
      behandlingsfrist: '2019-01-01',
      fagsakYtelseType: 'FP',
      erTilSaksbehandling: true,
      behandlingId: '1',
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID
    }
  }
}`,...r.parameters?.docs?.source}}};const L=["Default"];export{r as Default,L as __namedExportsOrder,K as default};
