import{a as i,w as o,F as m,B as l,b as d,m as E}from"./nb_NO-DWNE31-V.js";import{h as e,L as t,H as n}from"./fplosSaksbehandlerApi-Cre-4QqW.js";import"./jsx-runtime-D_zvdyIk.js";import{g}from"./withIntl-DwVD0z3-.js";import{O as u}from"./OppgaveHandlingerMenu-fekDLT3t.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./react-CW7BwjjX.js";import"./iframe-DccoT9Gw.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./decorators-DIzpaN6C.js";import"./useMutation-DBboi6Z6.js";import"./FlyttReservasjonModal-DR-grkU3.js";import"./index.es-DnPrejCa.js";import"./index.es-C_rfKMWM.js";import"./index.es-D3FSeQNG.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-BEUEYYSz.js";import"./ChevronDown-BmshD2bD.js";import"./Tag-DBYrLKdR.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./Theme-YhT-kHwE.js";import"./composeEventHandlers-DeH74NdU.js";import"./Modal-pQ8dwEsS.js";import"./index.es-DMpIgZpl.js";import"./VStack-ChXOQS5S.js";import"./OppgaveReservasjonForlengetModal-DE280glQ.js";import"./OpphevReservasjonModal-DhHkqCB1.js";import"./useControllableState-CHQ7MfKR.js";import"./ChevronRight-C181dsaH.js";import"./PersonHeadset-PmqLz_Yg.js";const S=g(E),z={title:"behandlingskoer/OppgaveHandlingerMenu",component:u,decorators:[S,o],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:i("button-click")}},s={args:{oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,behandlingStatus:l.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:m.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}}};var r,a,p;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
      saksnummer: 1234,
      personnummer: '1212',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
      opprettetTidspunkt: '2019-01-01',
      behandlingsfrist: '2019-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '1'
    }
  }
}`,...(p=(a=s.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const W=["Default"];export{s as Default,W as __namedExportsOrder,z as default};
