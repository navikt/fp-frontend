import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-BwDS3LvX.js";import{w as s,F as a,B as o}from"./iframe-Dc6WjnWo.js";import{g as p}from"./withIntl-DMB0TPmy.js";import{O as i}from"./OppgaveHandlingerMenu-BnM6H_Ou.js";import{m}from"./nb_NO-D9cqHkss.js";import"./useMutation-BB6mGpZK.js";import"./FlyttReservasjonModal-DBSEFBNI.js";import"./index.es-_rKQaDeE.js";import"./index.es-o0NI92HH.js";import"./index.es-4WxVYNvl.js";import"./Loader-DXE6yoYN.js";import"./Modal-CGoe-XOg.js";import"./index-CUTgaLrl.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-D9tTO_2Z.js";import"./Tag-DGSMr0Yb.js";import"./VStack-BG5ATSqi.js";import"./index.es-BTpr_XSX.js";import"./OppgaveReservasjonForlengetModal-C-z606lL.js";import"./NotatModal-U4Ysp8Yn.js";import"./Portal-CEoy3HnG.js";import"./ChevronRight-BLRlxiMo.js";import"./PersonHeadset-BCoJYMpz.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=p(m),P={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:o.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const U=["Default"];export{r as Default,U as __namedExportsOrder,P as default};
