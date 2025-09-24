import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-CfwPuiET.js";import{w as s,B as a}from"./iframe-hngBcEJU.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-Bcg8ljZ3.js";import{O as i}from"./OppgaveHandlingerMenu-DzlwYMv6.js";import{m}from"./nb_NO-CtwuI1lJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-BbCnC_sJ.js";import"./FlyttReservasjonModal-BbHsQp6e.js";import"./index.es-D4x0QtRB.js";import"./index.es-CCQ8GdpS.js";import"./Loader-VFefIwdI.js";import"./Modal-BbjPbd20.js";import"./floating-ui.react-ClIw87gO.js";import"./composeEventHandlers-Cq0PU7zd.js";import"./index-DY40as6m.js";import"./ChevronDown-CAkkY---.js";import"./Tag-CxHHKzC0.js";import"./VStack-BeA-F8sQ.js";import"./OppgaveReservasjonForlengetModal-DWXiInDZ.js";import"./NotatModal-C7qmT6Qb.js";import"./Portal-Ug84soZ4.js";import"./ChevronRight-kYyHqO_H.js";import"./HourglassTopFilled-BFFCgcdP.js";import"./PersonHeadset-CpP9UvXu.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      behandlingstype: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2019-01-01',
      behandlingsfrist: '2019-01-01',
      fagsakYtelseType: 'FP',
      erTilSaksbehandling: true,
      behandlingId: '1',
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID
    }
  }
}`,...r.parameters?.docs?.source}}};const L=["Default"];export{r as Default,L as __namedExportsOrder,G as default};
