import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-Fx4pLV7i.js";import{w as s,B as a}from"./iframe-CEmqnPfo.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-D8s6mJK8.js";import{O as i}from"./OppgaveHandlingerMenu-3RylaHY0.js";import{m}from"./nb_NO-FOl0qZti.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-cZuL6R3x.js";import"./FlyttReservasjonModal-CwICi7MD.js";import"./index.es-Dj5OBCqo.js";import"./index.es-CLQDx-mi.js";import"./Loader-W4N4n3J_.js";import"./Modal-CXCon6mo.js";import"./index-D78_jirS.js";import"./composeEventHandlers-CJyonZHw.js";import"./Tag-CRHuM36I.js";import"./VStack-Dv7IGAf5.js";import"./OppgaveReservasjonForlengetModal-Ck4QUPIY.js";import"./NotatModal-jz01hMTK.js";import"./Portal-BJMRtPxJ.js";import"./ChevronRight-DHn95uwx.js";import"./HourglassTopFilled-BsCkzPui.js";import"./PersonHeadset-QCd5AJQ-.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),I={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,I as default};
