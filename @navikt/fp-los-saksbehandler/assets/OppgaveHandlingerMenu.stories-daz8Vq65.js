import{h as e,L as t,H as n}from"./fplosSaksbehandlerApi-fWrzZJhy.js";import{w as s}from"./iframe-DJ2vgJiB.js";import{g as a}from"./withIntl-CDkLFbdz.js";import{O as o}from"./OppgaveHandlingerMenu-DhbYzNaI.js";import{m as p}from"./nb_NO-DU5AxKL0.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-DNf4PQ7C.js";import"./FlyttReservasjonModal-DPkS95H0.js";import"./index.es-DLdAdjI2.js";import"./index.es-DB0BfbQF.js";import"./Loader-Cyiz0UUT.js";import"./Modal-DMcFhu-G.js";import"./floating-ui.react-BmJFy8Ir.js";import"./composeEventHandlers-dczKmYK2.js";import"./index-moFeIzmb.js";import"./ChevronDown-Chq3Sq1B.js";import"./Tag-CO8EyD0u.js";import"./VStack-CoOMqnWD.js";import"./OppgaveReservasjonForlengetModal-Bb0e77EH.js";import"./NotatModal-CDCFvYwy.js";import"./Portal-BoPq9MIo.js";import"./ChevronRight-DuVb1vob.js";import"./HourglassTopFilled-DIC0kqgI.js";import"./PersonHeadset-CFkc5Im5.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,m=a(p),P={title:"behandlingskoer/OppgaveHandlingerMenu",component:o,decorators:[m,s],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:i("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
