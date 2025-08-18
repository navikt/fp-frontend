import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-CGILq44Y.js";import{w as s,F as a,B as p}from"./iframe-CYoJoWN6.js";import{O as o}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as i}from"./withIntl-CfrQfrk7.js";import{O as l}from"./OppgaveHandlingerMenu-CSfcrRDj.js";import{m}from"./nb_NO-CBu7rNk9.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-BcD-R51I.js";import"./FlyttReservasjonModal-BdvHuStF.js";import"./index.es-D6bmyoJ1.js";import"./index.es-BT10P9oF.js";import"./Loader-XHIe6xLJ.js";import"./Modal-BAsyhjvm.js";import"./index-D5hJTAsG.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-Cq7J4B_G.js";import"./Tag-DQoDhdCC.js";import"./VStack-D7Idh84k.js";import"./OppgaveReservasjonForlengetModal-DWDRUN4O.js";import"./NotatModal-CKQia1nL.js";import"./Portal-D-nf9SkY.js";import"./ChevronRight-6QydOqF7.js";import"./HourglassTopFilled-BeBLMJYy.js";import"./PersonHeadset-eHzA-axO.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,g=i(m),I={title:"behandlingskoer/OppgaveHandlingerMenu",component:l,decorators:[g,s],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:d("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:o.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID
    }
  }
}`,...r.parameters?.docs?.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,I as default};
