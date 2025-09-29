import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-I_eKkXm5.js";import{w as s,B as a}from"./iframe-B_gJBb7r.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-DHnWlpZk.js";import{O as i}from"./OppgaveHandlingerMenu-DR_Kuyfl.js";import{m}from"./nb_NO-BYV9EfKW.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-Du8mVxgT.js";import"./FlyttReservasjonModal-Cy_egtoi.js";import"./index.es-C5hA478h.js";import"./index.es-CbHhdo4C.js";import"./Loader-i6Od3rbL.js";import"./Modal-zHNc--Nf.js";import"./floating-ui.react-DMTowDgT.js";import"./composeEventHandlers-C1qbdVpl.js";import"./index-d2PAzCkG.js";import"./ChevronDown-DH_0Sr6y.js";import"./Tag-D_aIr90f.js";import"./VStack-Mjg6ToKR.js";import"./OppgaveReservasjonForlengetModal-BXObFrUw.js";import"./NotatModal-BXQEvbBP.js";import"./Portal-CUBNe9ie.js";import"./ChevronRight-BB6VuNE1.js";import"./HourglassTopFilled-Bwh4M1qN.js";import"./PersonHeadset-DTWc8cnt.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
