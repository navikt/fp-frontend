import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-jY3GooNr.js";import{w as s,B as a}from"./iframe-BMzSxz3d.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-BE_EYLoJ.js";import{O as i}from"./OppgaveHandlingerMenu-CL182uzU.js";import{m}from"./nb_NO-D1SkG4bK.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-COwZ-31K.js";import"./FlyttReservasjonModal-Bi42EV2w.js";import"./index.es-CfjTePEL.js";import"./index.es-B_TKVFTq.js";import"./Loader-BHnPqr4y.js";import"./Modal-CJM-QhG5.js";import"./floating-ui.react-CPtGj9jL.js";import"./composeEventHandlers-D0GCARzl.js";import"./index-BS7yLyw8.js";import"./ChevronDown-NtvoSeF5.js";import"./Tag-BmqXzpue.js";import"./VStack-Cb6OXLu2.js";import"./OppgaveReservasjonForlengetModal-BTaPpBus.js";import"./NotatModal-Cbgo0dHc.js";import"./Portal-BVDOdpu3.js";import"./ChevronRight-C4as7KJf.js";import"./HourglassTopFilled-DQNHBH3N.js";import"./PersonHeadset-ALQBTv1k.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
