import{h as e,L as t,H as n}from"./fplosSaksbehandlerApi-DUjNpqD9.js";import{w as s}from"./iframe-CCoeTBVO.js";import{g as a}from"./withIntl-USg0sCON.js";import{O as o}from"./OppgaveHandlingerMenu-D8XEgMvv.js";import{m as p}from"./nb_NO-C7K6sktD.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-Bp6KmK-u.js";import"./FlyttReservasjonModal-BWgBlWZc.js";import"./index.es-BjXTJTbj.js";import"./index.es-CtfjSj0a.js";import"./Loader-BfRqDWwu.js";import"./Modal-DiZZhibk.js";import"./floating-ui.react-C8ZV5sBu.js";import"./composeEventHandlers-BGqjwrlF.js";import"./index-COhETKab.js";import"./ChevronDown-BQj5bnus.js";import"./Tag-CDrJBapq.js";import"./VStack-BiqG47QD.js";import"./OppgaveReservasjonForlengetModal-CyfzKAsq.js";import"./NotatModal-yWd3uPt9.js";import"./Portal-BM9PFBHf.js";import"./ChevronRight-DLuei092.js";import"./HourglassTopFilled-CAWQhJek.js";import"./PersonHeadset-DY1mibE5.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,m=a(p),P={title:"behandlingskoer/OppgaveHandlingerMenu",component:o,decorators:[m,s],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:i("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
