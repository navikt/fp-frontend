import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-Bbz_f-Uf.js";import{w as s,B as a}from"./iframe-RykeYqTq.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-CiisbyX4.js";import{O as i}from"./OppgaveHandlingerMenu-DbhrYpVh.js";import{m}from"./nb_NO-fNecNmUG.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-BpXrjw_B.js";import"./FlyttReservasjonModal-DwGDLWMc.js";import"./index.es-boNIXK65.js";import"./index.es-BUCEDbPw.js";import"./Loader-CoPbOKoD.js";import"./Modal-xr1w2-Su.js";import"./floating-ui.react-CgQRJDae.js";import"./composeEventHandlers-CquY-AmA.js";import"./index-Cf_UCHuL.js";import"./ChevronDown-B63rftSi.js";import"./Tag-DoRYJ2t4.js";import"./VStack-BAQrvpD1.js";import"./OppgaveReservasjonForlengetModal-CHdzeyFF.js";import"./NotatModal-Dq8o39rN.js";import"./Portal-Bp9Ti-X1.js";import"./ChevronRight-BlIx516X.js";import"./HourglassTopFilled-BT-VtFij.js";import"./PersonHeadset-CwOQf_TA.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
