import{h as e,L as t,H as n}from"./fplosSaksbehandlerApi-D1Zxrxmc.js";import{w as s}from"./iframe-Cxiu9moG.js";import{g as a}from"./withIntl-BXv-mgj5.js";import{O as o}from"./OppgaveHandlingerMenu-Bi6wbfmY.js";import{m as p}from"./nb_NO-GnRbBCJl.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-c2cr7X2o.js";import"./FlyttReservasjonModal-Cu80SIjy.js";import"./index.es-CvnX6Kxc.js";import"./index.es-DLn_AXM2.js";import"./Loader-DiixKYlL.js";import"./Modal-OU9is9qV.js";import"./floating-ui.react-CsYY5UsG.js";import"./composeEventHandlers-CL7ondXh.js";import"./index-DKaflqxo.js";import"./ChevronDown-C2V79gwj.js";import"./Tag-C4N-KuoW.js";import"./VStack-C1W6LOfh.js";import"./OppgaveReservasjonForlengetModal-1_l5x0CI.js";import"./NotatModal-D5HPMOQB.js";import"./Portal-CHsrsmZ_.js";import"./ChevronRight-cZjkh9ZF.js";import"./HourglassTopFilled-DLUqxMFi.js";import"./PersonHeadset-Ceo8A0Wp.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,m=a(p),P={title:"behandlingskoer/OppgaveHandlingerMenu",component:o,decorators:[m,s],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:i("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      behandlingstype: 'BT-002',
      opprettetTidspunkt: '2019-01-01',
      behandlingsfrist: '2019-01-01',
      fagsakYtelseType: 'FP',
      erTilSaksbehandling: true,
      behandlingId: '1',
      andreKriterier: [],
      oppgaveBehandlingStatus: 'UNDER_ARBEID'
    }
  }
}`,...r.parameters?.docs?.source}}};const F=["Default"];export{r as Default,F as __namedExportsOrder,P as default};
