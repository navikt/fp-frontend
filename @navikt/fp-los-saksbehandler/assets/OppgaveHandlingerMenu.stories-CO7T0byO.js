import{h as e,L as t,H as n}from"./fplosSaksbehandlerApi-CBXsuCIC.js";import{w as s}from"./iframe-zFWYcwm7.js";import{g as a}from"./withIntl-ALOaV7Pp.js";import{O as o}from"./OppgaveHandlingerMenu-CT-IT9Tk.js";import{m as p}from"./nb_NO-D8YjOQZL.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-BaMBqfis.js";import"./FlyttReservasjonModal-DJQmchmK.js";import"./index.es-bkEWtoh8.js";import"./index.es-C_wlL2iz.js";import"./Loader-CG9biIaz.js";import"./Modal-QnReuhsY.js";import"./floating-ui.react-B6DTH5te.js";import"./composeEventHandlers-DVdnGlxH.js";import"./index-Dev1q-0K.js";import"./ChevronDown-CDaqZ_tC.js";import"./Tag-BSM-RIPZ.js";import"./VStack-C786mKbM.js";import"./OppgaveReservasjonForlengetModal-rKyGzIIo.js";import"./NotatModal-BfOlzncn.js";import"./Portal-BpqLM_HQ.js";import"./ChevronRight-DWcWXOYF.js";import"./HourglassTopFilled-Cw4AFrRT.js";import"./PersonHeadset-BDTBs3c7.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,m=a(p),P={title:"behandlingskoer/OppgaveHandlingerMenu",component:o,decorators:[m,s],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:i("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
