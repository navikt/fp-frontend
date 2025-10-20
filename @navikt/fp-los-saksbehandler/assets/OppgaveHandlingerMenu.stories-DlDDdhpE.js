import{h as e,L as t,H as n}from"./fplosSaksbehandlerApi-Bun217q9.js";import{w as s}from"./iframe-DiMnSK1d.js";import{g as a}from"./withIntl-DLwdP-IZ.js";import{O as o}from"./OppgaveHandlingerMenu-DB8mFkpF.js";import{m as p}from"./nb_NO-D3Su-AXd.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-CZ5jyAt_.js";import"./FlyttReservasjonModal-Dij7qiCr.js";import"./index.es-CmxG4w0J.js";import"./index.es-lCpdW0HF.js";import"./Loader-B0Yol6yT.js";import"./Modal-cMpeHn0D.js";import"./floating-ui.react-BEYd_m8g.js";import"./composeEventHandlers-CoQZPbaw.js";import"./index-Cs21t5FM.js";import"./ChevronDown-D9SW_1AK.js";import"./Tag-DzGiyALb.js";import"./VStack-Bm6ysBGh.js";import"./OppgaveReservasjonForlengetModal-DIV9Mlwn.js";import"./NotatModal-BsjIq3PG.js";import"./Portal-BEflWgYz.js";import"./ChevronRight-CM2Tx_gE.js";import"./HourglassTopFilled-DN1MabKA.js";import"./PersonHeadset-BKZNH9jX.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,m=a(p),P={title:"behandlingskoer/OppgaveHandlingerMenu",component:o,decorators:[m,s],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:i("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
