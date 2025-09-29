import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-DVMPShiN.js";import{w as s,B as a}from"./iframe-DcWfvX4E.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-BpqaF8OP.js";import{O as i}from"./OppgaveHandlingerMenu-CWCa2vlw.js";import{m}from"./nb_NO-B5yokG7b.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-CD_UXkzb.js";import"./FlyttReservasjonModal-cyJRfFZ_.js";import"./index.es-CrSE2Vo3.js";import"./index.es-CK71UUG6.js";import"./Loader-BgAJ8TXJ.js";import"./Modal-CkgRguxl.js";import"./floating-ui.react-BQhJV-NN.js";import"./composeEventHandlers-rXV8Rneo.js";import"./index-BUjOf9FY.js";import"./ChevronDown-V1IO0Cne.js";import"./Tag-KNyf_X-k.js";import"./VStack-qlvPq9uV.js";import"./OppgaveReservasjonForlengetModal-B8P8VduC.js";import"./NotatModal-BUprM4E2.js";import"./Portal-z6xuPYI8.js";import"./ChevronRight-R_S6dg_e.js";import"./HourglassTopFilled-BbYFEgP6.js";import"./PersonHeadset-BUAQkDzL.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
