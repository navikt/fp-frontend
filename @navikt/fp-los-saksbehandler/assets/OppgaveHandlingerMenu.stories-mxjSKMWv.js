import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-T92P3PN8.js";import{w as p,F as i,B as m}from"./iframe-BzKhhaRQ.js";import{g as l}from"./withIntl-Dd43I8Pt.js";import{O as d}from"./OppgaveHandlingerMenu-mDp87Mfu.js";import{m as E}from"./nb_NO-4-jUSXJR.js";import"./useMutation-DAuu46i6.js";import"./FlyttReservasjonModal-DGTMuAlg.js";import"./index.es-mRH8feFV.js";import"./index.es-C1qhk-q-.js";import"./Loader-pSbfn0kj.js";import"./Modal-BbCYygSf.js";import"./index-qlk676pZ.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-CMRSpiCZ.js";import"./Tag-D-TPyznH.js";import"./VStack-BheS40Ry.js";import"./index.es-CE-_gDz4.js";import"./message-CmnLKSIt.js";import"./OppgaveReservasjonForlengetModal-lu99PVP4.js";import"./NotatModal-CwvMNCD6.js";import"./Portal-YIaV7Zyt.js";import"./ChevronRight-CoR_byY0.js";import"./PersonHeadset-Chvr85uF.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,u=l(E),Y={title:"behandlingskoer/OppgaveHandlingerMenu",component:d,decorators:[u,p],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:g("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:i.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};var s,a,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
