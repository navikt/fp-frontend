import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-Dsddu5UX.js";import{w as s,F as a,B as o}from"./iframe-B3LllOyS.js";import{g as p}from"./withIntl-CtmVqXDM.js";import{O as i}from"./OppgaveHandlingerMenu-B9uh6c6l.js";import{m}from"./nb_NO-iOLOzDYk.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-DdKf8rz8.js";import"./FlyttReservasjonModal-7oYJA89T.js";import"./index.es-BZ8HOhoj.js";import"./index.es-B_bcqdk4.js";import"./Loader-BniX8TTA.js";import"./Modal-D2EJqP0l.js";import"./index-D9YNbemO.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-D-tGMl61.js";import"./Tag-CdwnF2do.js";import"./VStack-oiDHnFzs.js";import"./OppgaveReservasjonForlengetModal-lvRKoen_.js";import"./NotatModal-Bc6CzHg9.js";import"./Portal-B2VIiATx.js";import"./ChevronRight-D5RUNovN.js";import"./PersonHeadset-mv3AY-rd.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=p(m),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:o.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
