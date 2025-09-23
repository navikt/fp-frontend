import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-ClPM3L4y.js";import{w as s,B as a}from"./iframe-al_w9SvD.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-CilqdPmv.js";import{O as i}from"./OppgaveHandlingerMenu-DR7tjDWR.js";import{m}from"./nb_NO-D75nEubS.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-CTv1QFYU.js";import"./FlyttReservasjonModal-DUqLKjyl.js";import"./index.es-Q8WK_JoA.js";import"./index.es-DJaJzdj5.js";import"./Loader-IndRYNKO.js";import"./Modal-0WIgj-CC.js";import"./floating-ui.react-Cit7apB7.js";import"./composeEventHandlers-9iUK784h.js";import"./index-BPTO5uRc.js";import"./ChevronDown-CUgqPIXf.js";import"./Tag-BsjiPpoy.js";import"./VStack-Codnuli_.js";import"./OppgaveReservasjonForlengetModal-CFPc5c5g.js";import"./NotatModal-SAJE06M1.js";import"./Portal-DejvL-d_.js";import"./ChevronRight-D4lzYR8H.js";import"./HourglassTopFilled-Dgj6OBEh.js";import"./PersonHeadset-Dh2_6U-q.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      behandlingstype: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2019-01-01',
      behandlingsfrist: '2019-01-01',
      fagsakYtelseType: 'FP',
      erTilSaksbehandling: true,
      behandlingId: '1',
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID
    }
  }
}`,...r.parameters?.docs?.source}}};const L=["Default"];export{r as Default,L as __namedExportsOrder,G as default};
