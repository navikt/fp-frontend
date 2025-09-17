import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-Cgy-vkZa.js";import{w as s,B as a}from"./iframe-BQZcYkTJ.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-CbRWfwcG.js";import{O as i}from"./OppgaveHandlingerMenu-DbiHOkb0.js";import{m}from"./nb_NO-VdVxCUjv.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-DcN67y92.js";import"./FlyttReservasjonModal-kMb1XF3J.js";import"./index.es-C63AHdZW.js";import"./index.es-D2NNXPQv.js";import"./Loader-DdvPKIfT.js";import"./Modal-DGZyRkRp.js";import"./floating-ui.react-Db6i8CYR.js";import"./composeEventHandlers-e4-cxIcp.js";import"./index-BlDn0q3T.js";import"./ChevronDown-i7wS8YZx.js";import"./Tag-BNB8F1Wf.js";import"./VStack-r0kiVVVy.js";import"./OppgaveReservasjonForlengetModal-CmjNlXc-.js";import"./NotatModal-DBKiYm0e.js";import"./Portal-DLjn3-a9.js";import"./ChevronRight-CkrSfY-X.js";import"./HourglassTopFilled-CTy9S6iB.js";import"./PersonHeadset-WKG9LRJN.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
