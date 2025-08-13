import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-eMHBsBGQ.js";import{w as s,F as a,B as p}from"./iframe-Clb27KdX.js";import{O as o}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as i}from"./withIntl-BLSqA8yB.js";import{O as l}from"./OppgaveHandlingerMenu-LXyYsc_3.js";import{m}from"./nb_NO--W7a-9g9.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-DQXgBu9q.js";import"./FlyttReservasjonModal-CJI4golJ.js";import"./index.es-BvBWvnwP.js";import"./index.es-YB7mErq6.js";import"./Loader-Ch4zzPxw.js";import"./Modal-D5ZdTN-0.js";import"./index-CAZnbBZ-.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-CAv2P8YR.js";import"./Tag-DOgy5-6g.js";import"./VStack-Bo-6G3rc.js";import"./OppgaveReservasjonForlengetModal-DSndbaDm.js";import"./NotatModal-BmGKW5Vb.js";import"./Portal-MlEjYkm0.js";import"./ChevronRight-C0P-fFIQ.js";import"./HourglassTopFilled-B--oghcW.js";import"./PersonHeadset-Typ1YSgL.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,g=i(m),I={title:"behandlingskoer/OppgaveHandlingerMenu",component:l,decorators:[g,s],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:d("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:o.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,I as default};
