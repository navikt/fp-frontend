import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-CWuH3MKX.js";import{w as s,F as a,B as p}from"./iframe-B9KoQGM0.js";import{O as o}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as i}from"./withIntl-DeQxf50B.js";import{O as l}from"./OppgaveHandlingerMenu-XWGnTvfU.js";import{m}from"./nb_NO-C3IQ5_sL.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-N_FPDICk.js";import"./FlyttReservasjonModal-B35tj6vq.js";import"./index.es-Bp8LbBj1.js";import"./index.es-CLSw_-eh.js";import"./Loader-C2bZBRPU.js";import"./Modal-CHSHW0HN.js";import"./index-TZAab7S3.js";import"./composeEventHandlers-C20DeXlO.js";import"./Tag-BQHGL7Xh.js";import"./VStack-C4xViOeb.js";import"./OppgaveReservasjonForlengetModal-sMhfNEui.js";import"./NotatModal-DG_lkwXl.js";import"./Portal-DmzAOMbA.js";import"./ChevronRight-BkOsYsEv.js";import"./HourglassTopFilled-B1LRc7mw.js";import"./PersonHeadset-CjUEiWUs.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,g=i(m),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:l,decorators:[g,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:d("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:o.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
