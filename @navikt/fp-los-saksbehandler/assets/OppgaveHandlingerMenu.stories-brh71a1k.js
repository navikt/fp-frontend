import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-CNfMQEtl.js";import{w as s,B as a}from"./iframe-CVdg-tBd.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-DzomSXNo.js";import{O as i}from"./OppgaveHandlingerMenu-Mww4gKP3.js";import{m}from"./nb_NO-aZ122nb9.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-Bl5oXi1S.js";import"./FlyttReservasjonModal-QuMjrbNB.js";import"./index.es-CBk3KEL3.js";import"./index.es-7rlZVJxi.js";import"./Loader-N55rD42L.js";import"./Modal-BGhXbf7c.js";import"./floating-ui.react-CZrBqaZn.js";import"./composeEventHandlers-CLG_zOfr.js";import"./index-CkMVMhu3.js";import"./ChevronDown-H3NDO_bh.js";import"./Tag-DEY1I3er.js";import"./VStack-BH6QZYU2.js";import"./OppgaveReservasjonForlengetModal-CIPeFnpt.js";import"./NotatModal-B2X9cqhp.js";import"./Portal-xbF66sFw.js";import"./ChevronRight-HYtD9b91.js";import"./HourglassTopFilled-DTUUbW_n.js";import"./PersonHeadset-CbOjIVJY.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
