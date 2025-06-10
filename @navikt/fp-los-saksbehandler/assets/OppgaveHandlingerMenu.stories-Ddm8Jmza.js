import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-jqX_MHfE.js";import{w as i,F as o,B as m}from"./iframe-C4ZmjsLZ.js";import{g as l}from"./withIntl-BjFGfaqN.js";import{O as d}from"./OppgaveHandlingerMenu-D4IjgpsY.js";import{m as E}from"./nb_NO-DuVn59ai.js";import"./useMutation-BWDCXbmv.js";import"./FlyttReservasjonModal-B5mm9VRy.js";import"./index.es-BLv97-Ok.js";import"./index.es-BtIi2dgM.js";import"./Loader-Cu_OC_3F.js";import"./Modal-Wkl7gRDH.js";import"./index-CkjCDsAm.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-BMrhYSXv.js";import"./Tag-6x7xA00r.js";import"./VStack-CBWf-lgF.js";import"./index.es-Ci-PBKQh.js";import"./message-D5LjN3xl.js";import"./OppgaveReservasjonForlengetModal-DCzNk0sk.js";import"./NotatModal-DufN83tx.js";import"./Portal-BcVZg7tR.js";import"./ChevronRight-BQ1gelrr.js";import"./PersonHeadset-DMooN9Lt.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,u=l(E),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:d,decorators:[u,i],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:g("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:o.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    oppgave: {
      id: 1,
      status: {
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const H=["Default"];export{r as Default,H as __namedExportsOrder,j as default};
