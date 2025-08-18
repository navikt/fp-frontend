import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-CqHcwc4C.js";import{w as s,F as a,B as p}from"./iframe-DZrfQhmt.js";import{O as o}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as i}from"./withIntl-MVxRk1vh.js";import{O as l}from"./OppgaveHandlingerMenu-CPAfGm2I.js";import{m}from"./nb_NO-BiGyfJgG.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-BWeVf2C4.js";import"./FlyttReservasjonModal-BuE_vvBt.js";import"./index.es-05Y_sk3C.js";import"./index.es-BcsMNl_W.js";import"./Loader-Cd5GBwP9.js";import"./Modal-Cpcc_uy-.js";import"./index-vJ6sSl0L.js";import"./composeEventHandlers-BivaY7Vf.js";import"./Tag-jf73OxDF.js";import"./VStack-VrpA6W4Y.js";import"./OppgaveReservasjonForlengetModal-baBhnhXe.js";import"./NotatModal-e2D0R1S3.js";import"./Portal-Bl3t7Mxg.js";import"./ChevronRight-DfGuYgap.js";import"./HourglassTopFilled-ByAHlm4m.js";import"./PersonHeadset-DuOZNh-L.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,g=i(m),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:l,decorators:[g,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:d("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:o.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
