import{h as e,L as t,H as n}from"./fplosSaksbehandlerApi-5-Mp6zjg.js";import{O as s}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{w as a}from"./iframe-CF8fhdT_.js";import{g as p}from"./withIntl-CT0Bxjve.js";import{O as o}from"./OppgaveHandlingerMenu-Bm1O2lu0.js";import{m as i}from"./nb_NO-B0MwT9px.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-CePDtt9J.js";import"./FlyttReservasjonModal-ZjytOXOy.js";import"./index.es-4AS-gBOy.js";import"./index.es-WP0U6Vwi.js";import"./Loader-De7v7hMf.js";import"./Modal-CwKCJBdK.js";import"./floating-ui.react-B6UxSIwD.js";import"./composeEventHandlers-Bl9pufit.js";import"./index-ugOsHta_.js";import"./ChevronDown-DCCkzgwb.js";import"./Tag-DVuiRVvo.js";import"./VStack-CNleZAjs.js";import"./OppgaveReservasjonForlengetModal-BQt7Tr5T.js";import"./NotatModal-D9HlUXHN.js";import"./Portal-CtDlu32L.js";import"./ChevronRight-2dAXi6FE.js";import"./HourglassTopFilled-DvpdKdhw.js";import"./PersonHeadset-DtOEiaNy.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,l=p(i),K={title:"behandlingskoer/OppgaveHandlingerMenu",component:o,decorators:[l,a],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:m("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:s.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
