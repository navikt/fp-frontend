import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-DgsLV5py.js";import{w as s,F as a,B as o}from"./iframe-C1nA0uJj.js";import{g as p}from"./withIntl-CrxOFtc5.js";import{O as i}from"./OppgaveHandlingerMenu-Cqo2LLZk.js";import{m}from"./nb_NO-CkG39b6k.js";import"./useMutation-C9h4Lo_y.js";import"./FlyttReservasjonModal-DdRgRJAc.js";import"./index.es-D50fzgQu.js";import"./index.es-BNCrfEq9.js";import"./Loader-BLm6o0Ei.js";import"./Modal-x0b0eqpK.js";import"./index-B-tESIzx.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-BDh-Aopk.js";import"./Tag-D5ZLsB3k.js";import"./VStack-BCnib7z-.js";import"./message-C68V_5Jb.js";import"./OppgaveReservasjonForlengetModal-COz5f32S.js";import"./NotatModal-BK95bi0b.js";import"./Portal-BJ7zWOyB.js";import"./ChevronRight-ij5d9pMO.js";import"./PersonHeadset-DdBDugAa.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=p(m),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:o.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,j as default};
