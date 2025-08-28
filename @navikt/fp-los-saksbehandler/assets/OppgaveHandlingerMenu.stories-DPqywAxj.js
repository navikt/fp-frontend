import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-DrPTghV4.js";import{w as s,F as a,B as p}from"./iframe-BVcRJGzc.js";import{O as o}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as i}from"./withIntl-B-rDPHaC.js";import{O as l}from"./OppgaveHandlingerMenu-BCHUdd7f.js";import{m}from"./nb_NO-Cya3_SoH.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-DB69isbj.js";import"./FlyttReservasjonModal-D3ilA9KH.js";import"./index.es-CXcNQKTd.js";import"./index.es-DFzNGyCV.js";import"./Loader-LcxfTbh8.js";import"./Modal-BiwJMaNo.js";import"./index-Dc4ut0ls.js";import"./composeEventHandlers-qMugrl-b.js";import"./Tag-DnuRFk9e.js";import"./VStack-1ft0JNw9.js";import"./OppgaveReservasjonForlengetModal-COymF_oH.js";import"./NotatModal-DlwzJt7v.js";import"./Portal-B9g-Fxb2.js";import"./ChevronRight-T4X1eBRU.js";import"./HourglassTopFilled-BwweEF4N.js";import"./PersonHeadset-BGo1a7BK.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,g=i(m),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:l,decorators:[g,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:d("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:o.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
