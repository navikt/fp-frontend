import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-ybaEhuMn.js";import{w as s,F as a,B as o}from"./iframe-Br6Rev2a.js";import{g as p}from"./withIntl-iEi7nboL.js";import{O as i}from"./OppgaveHandlingerMenu-i7eNWYZs.js";import{m as l}from"./nb_NO-DpJVr73H.js";import"./useMutation-DEsSjm4m.js";import"./FlyttReservasjonModal-BjpsjBbY.js";import"./index.es-Cjrwpto7.js";import"./index.es-C4kZSf0i.js";import"./Loader-CGzdXnlu.js";import"./Modal-B73WcImj.js";import"./index-eGax0tLI.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-Bj9f8LlW.js";import"./Tag-D_9TlqGi.js";import"./VStack-CH5YDwkv.js";import"./OppgaveReservasjonForlengetModal-Pg0okM2j.js";import"./NotatModal-BljwMw80.js";import"./Portal-Cpv7FUdn.js";import"./ChevronRight-CiWSF1TP.js";import"./PersonHeadset-GofbAbHS.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,d=p(l),L={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:m("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:o.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const j=["Default"];export{r as Default,j as __namedExportsOrder,L as default};
