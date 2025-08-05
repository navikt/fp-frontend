import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-D9NUVVUH.js";import{w as s,F as a,B as o}from"./iframe-BwsLYjPf.js";import{g as p}from"./withIntl-BAppd8Ba.js";import{O as i}from"./OppgaveHandlingerMenu-C2FDU6WI.js";import{m as l}from"./nb_NO-pbSJoPLE.js";import"./useMutation-CyzMhBIn.js";import"./FlyttReservasjonModal-DORp-JXe.js";import"./index.es-CAgio5Y3.js";import"./index.es-TpN-Pz0d.js";import"./Loader-B04EuSy-.js";import"./Modal-DTxZfOx8.js";import"./index-DAc2Pk22.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-z8b2OvbD.js";import"./Tag-BE_93BrC.js";import"./VStack-BUJevhxp.js";import"./OppgaveReservasjonForlengetModal-2bcubhvw.js";import"./NotatModal-BdgsYuSQ.js";import"./Portal-Cl4l8bLs.js";import"./ChevronRight-DgEBplvF.js";import"./PersonHeadset-CMii_X8M.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,d=p(l),L={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:m("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:o.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
