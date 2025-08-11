import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-CYc5P8CX.js";import{w as s,F as a,B as o}from"./iframe-Cbsua4r2.js";import{g as p}from"./withIntl-D-TXM6Cf.js";import{O as i}from"./OppgaveHandlingerMenu-B3f81o6P.js";import{m}from"./nb_NO-BblFEszt.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-BJTEgIVA.js";import"./FlyttReservasjonModal-CBMBTWkk.js";import"./index.es-CYNXQyQE.js";import"./index.es-5An9wuhY.js";import"./Loader-pn-IcA3V.js";import"./Modal-DYcaQjLF.js";import"./index-Cs44veBI.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-Ci8HeMsC.js";import"./Tag-CCgLjVfI.js";import"./VStack-IFWqsRog.js";import"./OppgaveReservasjonForlengetModal-BKhZnxV5.js";import"./NotatModal-lqEU2sPM.js";import"./Portal-DVHT0Zn9.js";import"./ChevronRight-BJHN7PC2.js";import"./PersonHeadset-CY3mNTeL.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=p(m),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:o.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
