import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-DUm43ECe.js";import{w as s,F as a,B as o}from"./iframe-BwKNJOZ5.js";import{g as p}from"./withIntl-BqPCZHwl.js";import{O as i}from"./OppgaveHandlingerMenu-BH84vZn1.js";import{m}from"./nb_NO-pr7Wf7mt.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-DTC7VKfH.js";import"./FlyttReservasjonModal-BN_kxoi2.js";import"./index.es-CPxNtf18.js";import"./index.es-C2Yxr8g-.js";import"./Loader-D-bqSM9O.js";import"./Modal-Dg4VOHe-.js";import"./index-BuWVdx51.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-CkoL87KZ.js";import"./Tag-A2Gv-CiV.js";import"./VStack-DtCjXnC7.js";import"./OppgaveReservasjonForlengetModal-DM_9pTpm.js";import"./NotatModal-CU3ZfuHK.js";import"./Portal-BuU6laLI.js";import"./ChevronRight-CiBVM5nF.js";import"./PersonHeadset-sSGTrDP5.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=p(m),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:o.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
