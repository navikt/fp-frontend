import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-8uILIboq.js";import{w as p,F as i,B as m}from"./iframe-DvFVpOsn.js";import{g as l}from"./withIntl-BLZOqCtF.js";import{O as d}from"./OppgaveHandlingerMenu-Ck-B3iA4.js";import{m as E}from"./nb_NO-DeYUK85K.js";import"./useMutation-Bdt-Jrgy.js";import"./FlyttReservasjonModal-C-_6JHvS.js";import"./index.es-B_PzZrxL.js";import"./index.es-COfilHy9.js";import"./Loader-CMQRyVj1.js";import"./Modal-CELR8D0W.js";import"./index-e2Fm8Xp1.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-B8NFIlot.js";import"./Tag-Bb6B97LN.js";import"./VStack-BGXEyZTt.js";import"./index.es-DfzTUs2y.js";import"./message-Zvy95iev.js";import"./OppgaveReservasjonForlengetModal-DpOC_aGo.js";import"./NotatModal-Bs4GKTxV.js";import"./Portal-DkOl-pGv.js";import"./ChevronRight-wMIbxG7B.js";import"./PersonHeadset-CmCZLwsU.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,u=l(E),Y={title:"behandlingskoer/OppgaveHandlingerMenu",component:d,decorators:[u,p],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:g("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:i.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};var s,a,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
