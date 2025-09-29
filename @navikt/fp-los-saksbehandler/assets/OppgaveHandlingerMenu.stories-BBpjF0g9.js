import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-CltX3F6R.js";import{w as s,B as a}from"./iframe-AjKksD2M.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-CDhtBTLX.js";import{O as i}from"./OppgaveHandlingerMenu-TvZvo2Uy.js";import{m}from"./nb_NO-CJwOlkXQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-fFiHazzh.js";import"./FlyttReservasjonModal-C4jyn-or.js";import"./index.es-BUPwAAG7.js";import"./index.es-7xMF6UfH.js";import"./Loader-BXfb-HtN.js";import"./Modal-kwnTbPip.js";import"./floating-ui.react-Blq3xWus.js";import"./composeEventHandlers-ChK-3pKs.js";import"./index-BMmFCz37.js";import"./ChevronDown-D9Wj4v5k.js";import"./Tag-BDaX_l7d.js";import"./VStack-QRnt28vS.js";import"./OppgaveReservasjonForlengetModal-CDF8n__X.js";import"./NotatModal-ONh7J1j4.js";import"./Portal-hgpk_pSi.js";import"./ChevronRight-BJu_bqDD.js";import"./HourglassTopFilled-Qsu5nNGn.js";import"./PersonHeadset-CsD6lJ7x.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
