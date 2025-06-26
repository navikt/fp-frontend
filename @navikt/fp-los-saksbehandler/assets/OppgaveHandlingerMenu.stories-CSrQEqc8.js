import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-CVJT04HZ.js";import{w as p,F as i,B as m}from"./iframe-D5gt21PO.js";import{g as l}from"./withIntl-DUGshOIu.js";import{O as d}from"./OppgaveHandlingerMenu-KJRc7azL.js";import{m as E}from"./nb_NO-Cn9UTMYo.js";import"./useMutation-CG83hrnC.js";import"./FlyttReservasjonModal-BC5_QVhd.js";import"./index.es-Cghxu1oE.js";import"./index.es-CoA4ZD_x.js";import"./Loader-Cl2mnQon.js";import"./Modal-a3Lg1O_R.js";import"./index-szWamCQ5.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-XhgFDZ8a.js";import"./Tag-BRX3nRY2.js";import"./VStack-CwGp4ZqH.js";import"./index.es-BK2vFbfc.js";import"./message-BycedRya.js";import"./OppgaveReservasjonForlengetModal-BXM6qnSp.js";import"./NotatModal-DU8s5pVf.js";import"./Portal-CNpmicer.js";import"./ChevronRight-WVSEFdZ5.js";import"./PersonHeadset-Dm2ugQtW.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,u=l(E),Y={title:"behandlingskoer/OppgaveHandlingerMenu",component:d,decorators:[u,p],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:g("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:i.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};var s,a,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const H=["Default"];export{r as Default,H as __namedExportsOrder,Y as default};
