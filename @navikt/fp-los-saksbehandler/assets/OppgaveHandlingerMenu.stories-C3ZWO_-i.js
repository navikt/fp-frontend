import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-Br0saMg4.js";import{w as p,F as i,B as m}from"./iframe-BGRsIo3P.js";import{g as l}from"./withIntl-CPXO3lvq.js";import{O as d}from"./OppgaveHandlingerMenu-B4scQNiI.js";import{m as E}from"./nb_NO-DYLtSdYq.js";import"./useMutation-DV3KsNnq.js";import"./FlyttReservasjonModal-DLOaK9D6.js";import"./index.es-Bwknunf2.js";import"./index.es-Cngvyuii.js";import"./Loader-BVN4NMPC.js";import"./Modal-CjcrlGpH.js";import"./index--B9aAWr2.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-BJsnN-rY.js";import"./Tag-DwtGxp6Q.js";import"./VStack-C2U-6IUP.js";import"./index.es-Dulf5yHG.js";import"./message-D4wBDHqB.js";import"./OppgaveReservasjonForlengetModal-gzKmnZX2.js";import"./NotatModal-Bf6bUqRB.js";import"./Portal-4d9Z2wTc.js";import"./ChevronRight-J6ATwKCM.js";import"./PersonHeadset-BABQAjyx.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,u=l(E),Y={title:"behandlingskoer/OppgaveHandlingerMenu",component:d,decorators:[u,p],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:g("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:i.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};var s,a,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
