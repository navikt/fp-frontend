import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-B2mNcD5Y.js";import{w as s,F as a,B as p}from"./iframe-k7aJWUQB.js";import{O as o}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as i}from"./withIntl-C1q4znWV.js";import{O as l}from"./OppgaveHandlingerMenu-CQdgFp56.js";import{m}from"./nb_NO-Cq7Q0wnG.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-TYspb4Us.js";import"./FlyttReservasjonModal-D2H9RPHa.js";import"./index.es-DhZpmTq0.js";import"./index.es-DK96oSHV.js";import"./Loader-Bsnc3RgC.js";import"./Modal-DvMJ4ZY_.js";import"./index-CwHY865Y.js";import"./composeEventHandlers-BlGENU0g.js";import"./Tag-DpMd2tLU.js";import"./VStack-BNI4ZZ_9.js";import"./OppgaveReservasjonForlengetModal-Bgj_SImi.js";import"./NotatModal-CHYEXSch.js";import"./Portal-DlFERnjM.js";import"./ChevronRight-DLnWC3hh.js";import"./HourglassTopFilled-Bsyu-2A9.js";import"./PersonHeadset-D9VaqnGr.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,g=i(m),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:l,decorators:[g,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:d("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:o.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2019-01-01',
      behandlingsfrist: '2019-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '1',
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID
    }
  }
}`,...r.parameters?.docs?.source}}};const I=["Default"];export{r as Default,I as __namedExportsOrder,j as default};
