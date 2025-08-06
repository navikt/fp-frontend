import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-CmHpqlwU.js";import{w as s,F as a,B as o}from"./iframe-rUdowgs-.js";import{g as p}from"./withIntl-DU4l9fHm.js";import{O as i}from"./OppgaveHandlingerMenu-hQ36qLJN.js";import{m as l}from"./nb_NO-DUD8ZAg7.js";import"./useMutation-CUzE8bYY.js";import"./FlyttReservasjonModal-9yiYRMJe.js";import"./index.es-Bk-da9xx.js";import"./index.es-GATJa6fU.js";import"./Loader-DN9l1kEc.js";import"./Modal-D9cD-R9g.js";import"./index-C7-4nLYl.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-BOhz-Zxb.js";import"./Tag-DriZpGYG.js";import"./VStack-CLJMsM8A.js";import"./OppgaveReservasjonForlengetModal-Da8ocfF8.js";import"./NotatModal-VMf7cZsm.js";import"./Portal-Dli3OHeF.js";import"./ChevronRight-D-GnPNxc.js";import"./PersonHeadset-BZzxkyI0.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,d=p(l),L={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:m("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:o.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
