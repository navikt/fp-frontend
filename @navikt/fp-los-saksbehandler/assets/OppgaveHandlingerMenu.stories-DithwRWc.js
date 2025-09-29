import{h as e,L as t,H as n}from"./fplosSaksbehandlerApi-BFD48Mop.js";import{O as s}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{w as a}from"./iframe-XJysTbVt.js";import{g as p}from"./withIntl-CiDJYkrt.js";import{O as o}from"./OppgaveHandlingerMenu-SjM5taQc.js";import{m as i}from"./nb_NO-CO3HAz6Y.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-CiVYtcd_.js";import"./FlyttReservasjonModal-BBbHltuO.js";import"./index.es-DawA6EnQ.js";import"./index.es-Bx2Lc6cN.js";import"./Loader-BV-Jh8wD.js";import"./Modal-BvNhRRyn.js";import"./floating-ui.react-BvpS9y_f.js";import"./composeEventHandlers-CltQEKyj.js";import"./index-DKMOwF-J.js";import"./ChevronDown-C350f3Hb.js";import"./Tag-B8W21FA_.js";import"./VStack-JRQgy8gX.js";import"./OppgaveReservasjonForlengetModal-CIYZigks.js";import"./NotatModal-p1KyZQAR.js";import"./Portal-CdlyI78r.js";import"./ChevronRight-DiNpdsOo.js";import"./HourglassTopFilled-BDIigqy5.js";import"./PersonHeadset-CfNZtrli.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,l=p(i),K={title:"behandlingskoer/OppgaveHandlingerMenu",component:o,decorators:[l,a],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:m("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:s.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
