import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-_CPBJ_yv.js";import{w as s,F as a,B as o}from"./iframe-DM8LYoMN.js";import{g as p}from"./withIntl-BN5cT-Jw.js";import{O as i}from"./OppgaveHandlingerMenu-CJYXGlJw.js";import{m}from"./nb_NO-BuWnCQiM.js";import"./useMutation-C5RAUV0l.js";import"./FlyttReservasjonModal-DZXvWC4I.js";import"./index.es-B-U1gNAW.js";import"./index.es-0Unrm-qE.js";import"./Loader-CN2EFucT.js";import"./Modal-laqU7i9r.js";import"./index-Bifiva1h.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-DbuORtlx.js";import"./Tag-BM8q_-bR.js";import"./VStack-DWSoSyHo.js";import"./message-Cgpe6rKf.js";import"./OppgaveReservasjonForlengetModal-B5u7CJ1P.js";import"./NotatModal-D3hCQrq5.js";import"./Portal-DWJGNjFg.js";import"./ChevronRight-DOPvKhgT.js";import"./PersonHeadset-DJEP80xq.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=p(m),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:o.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      andreKriterier: []
    }
  }
}`,...r.parameters?.docs?.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,j as default};
