import{h as e,L as t,H as n}from"./fplosSaksbehandlerApi-BfsdCpZQ.js";import{O as s}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{w as a}from"./iframe-DYQXSugv.js";import{g as p}from"./withIntl-Bp8rqF47.js";import{O as o}from"./OppgaveHandlingerMenu-CjWvS65a.js";import{m as i}from"./nb_NO-BkdgpR3F.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-SSS9EA38.js";import"./FlyttReservasjonModal-C_nrB5TD.js";import"./index.es-CzRS-N89.js";import"./index.es-C8XlgDNo.js";import"./Loader-Bxok6rQJ.js";import"./Modal-C6HyE8k9.js";import"./floating-ui.react-DyUfF0SX.js";import"./composeEventHandlers-D5zYzSMn.js";import"./index-DM-P7FfV.js";import"./ChevronDown-Cia31y9C.js";import"./Tag-B733wLh1.js";import"./VStack-0FyVDDRJ.js";import"./OppgaveReservasjonForlengetModal-C3lElaZS.js";import"./NotatModal-BapPEZar.js";import"./Portal-nqQDHHDP.js";import"./ChevronRight-BoXsa9sa.js";import"./HourglassTopFilled-DdilIFTw.js";import"./PersonHeadset-Ds44PG2D.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,l=p(i),K={title:"behandlingskoer/OppgaveHandlingerMenu",component:o,decorators:[l,a],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:m("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:s.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
