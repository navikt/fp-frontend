import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-CWeePBmt.js";import{w as i,F as o,B as m}from"./iframe-Cwe0bwJ9.js";import{g as l}from"./withIntl-D9nmWhbu.js";import{O as d}from"./OppgaveHandlingerMenu-CGplX9E_.js";import{m as E}from"./nb_NO-bfncGwUh.js";import"./useMutation-CsZOKDSm.js";import"./FlyttReservasjonModal-B2mgUDxo.js";import"./index.es-AjNjlijS.js";import"./index.es-Dna4oZ5x.js";import"./Loader-5LDEStqt.js";import"./Modal-BxSIUeqn.js";import"./index-xDdMB7tx.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-DI2c8J56.js";import"./Tag-B6yaoXJU.js";import"./VStack-Bf-ul0Dz.js";import"./index.es-xiO060LA.js";import"./message-BnxX8ymA.js";import"./OppgaveReservasjonForlengetModal-CuU1jEz2.js";import"./NotatModal-CJLfX2X3.js";import"./Portal-Dr9X5XPZ.js";import"./ChevronRight-B5gYknNM.js";import"./PersonHeadset-CIIQ3HLj.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,u=l(E),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:d,decorators:[u,i],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:g("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:o.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
