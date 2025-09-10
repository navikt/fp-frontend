import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-B9TywFyl.js";import{w as s,B as a}from"./iframe-Bb7EaA3c.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-a7CRg7qg.js";import{O as i}from"./OppgaveHandlingerMenu-C1I0hFxs.js";import{m}from"./nb_NO-Day4tSnv.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-iDJSpr5G.js";import"./FlyttReservasjonModal-DAmaYcl3.js";import"./index.es-Ds-u-sgY.js";import"./index.es-Ql_h3ek1.js";import"./Loader-B4nQOFQQ.js";import"./Modal-BJsjDxSS.js";import"./floating-ui.react-i3YnTFZQ.js";import"./composeEventHandlers-lncVDnve.js";import"./index-57zqyBz9.js";import"./ChevronDown-UarleSwg.js";import"./Tag-BQBB0SW6.js";import"./VStack-DE2AaRsN.js";import"./OppgaveReservasjonForlengetModal-Py7PHlm5.js";import"./NotatModal-Dpm2rXT9.js";import"./Portal-CP-wi8Yv.js";import"./ChevronRight-_Quv0oVM.js";import"./HourglassTopFilled-N7UwMMxf.js";import"./PersonHeadset-BWTtht_8.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
