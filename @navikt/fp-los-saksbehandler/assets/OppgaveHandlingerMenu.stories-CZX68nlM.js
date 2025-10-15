import{h as e,L as t,H as n}from"./fplosSaksbehandlerApi-DPBGFk9W.js";import{w as s}from"./iframe-D5kzLkTB.js";import{g as a}from"./withIntl-BwS0yhYk.js";import{O as o}from"./OppgaveHandlingerMenu-BykCfer5.js";import{m as p}from"./nb_NO-DkEvKsFh.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-PIoYwhgJ.js";import"./FlyttReservasjonModal-CyRRwbqK.js";import"./index.es-B2Qsiamg.js";import"./index.es-5JZOUY4a.js";import"./Loader-B-ItYq5j.js";import"./Modal-D12FW8s_.js";import"./floating-ui.react-DKeKFHDe.js";import"./composeEventHandlers-CNKAIeZw.js";import"./index-Cfle-u0a.js";import"./ChevronDown-0Qs7jtBh.js";import"./Tag-B4I7MrXx.js";import"./VStack-DSYO9RIf.js";import"./OppgaveReservasjonForlengetModal-Cp2UQ3Lm.js";import"./NotatModal-BsedPlmp.js";import"./Portal-xlSqzBUe.js";import"./ChevronRight-DFSx_CB9.js";import"./HourglassTopFilled-jK3OzNDv.js";import"./PersonHeadset-DXXBm6Eb.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,m=a(p),P={title:"behandlingskoer/OppgaveHandlingerMenu",component:o,decorators:[m,s],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:i("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
