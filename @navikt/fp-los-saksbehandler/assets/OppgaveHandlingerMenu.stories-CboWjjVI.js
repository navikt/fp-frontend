import{h as e,L as t,H as n}from"./fplosSaksbehandlerApi-vAN14MZ0.js";import{w as s}from"./iframe-Cy3nThB4.js";import{g as a}from"./withIntl-C-fpEaKm.js";import{O as o}from"./OppgaveHandlingerMenu-DVPLcLsr.js";import{m as p}from"./nb_NO-B4nFNxw-.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-9GJzzoQm.js";import"./FlyttReservasjonModal-piA8JDAn.js";import"./index.es-ivd3HPcS.js";import"./index.es-C6NXw24M.js";import"./Loader-D_eQWejC.js";import"./Modal-BVFJjO1L.js";import"./floating-ui.react-BuWkwZSV.js";import"./composeEventHandlers-CbGljWkL.js";import"./index-BVl6bERt.js";import"./ChevronDown-DWqkGUCs.js";import"./Tag-lp49pIon.js";import"./VStack-gQjYxRm0.js";import"./OppgaveReservasjonForlengetModal-CU0QTOrD.js";import"./NotatModal-GaHxUHzA.js";import"./Portal-VHuVdQxB.js";import"./ChevronRight-CNtqDhJo.js";import"./HourglassTopFilled-BAUSYn76.js";import"./PersonHeadset-C5vNnfzu.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,m=a(p),P={title:"behandlingskoer/OppgaveHandlingerMenu",component:o,decorators:[m,s],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:i("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      oppgaveBehandlingStatus: 'UNDER_ARBEID'
    }
  }
}`,...r.parameters?.docs?.source}}};const F=["Default"];export{r as Default,F as __namedExportsOrder,P as default};
