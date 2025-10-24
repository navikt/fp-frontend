import{h as e,L as t,H as n}from"./fplosSaksbehandlerApi-B3hag-wi.js";import{w as s}from"./iframe-BgqHI6_D.js";import{g as a}from"./withIntl-CwWlSh0l.js";import{O as o}from"./OppgaveHandlingerMenu-zzGq9e_A.js";import{m as p}from"./nb_NO-DNaahZtR.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-BJpCoiy1.js";import"./FlyttReservasjonModal-CfD8a7tj.js";import"./index.es-yKC1ZRN4.js";import"./index.es-C5bvsI8w.js";import"./Loader-DOoSrnUO.js";import"./Modal-C5tKf2gw.js";import"./floating-ui.react-CYhy7SUm.js";import"./composeEventHandlers-Dx2nCQMD.js";import"./index-C-D9Pekm.js";import"./ChevronDown-VWy8a60g.js";import"./Tag-D9CpAEC3.js";import"./VStack-D-GBvM_X.js";import"./OppgaveReservasjonForlengetModal-B2b8T8y7.js";import"./NotatModal-B4xHL7vG.js";import"./Portal-DL2dY3Zz.js";import"./ChevronRight-B0bzsHnj.js";import"./HourglassTopFilled-Dzl5os24.js";import"./PersonHeadset-BHD9ixyW.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,m=a(p),P={title:"behandlingskoer/OppgaveHandlingerMenu",component:o,decorators:[m,s],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:i("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
