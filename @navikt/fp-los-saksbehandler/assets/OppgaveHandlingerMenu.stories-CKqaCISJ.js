import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-DKUv_1KG.js";import{w as s,B as a}from"./iframe-CGtaPlMr.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-C38w5mIj.js";import{O as i}from"./OppgaveHandlingerMenu-_Ky394_t.js";import{m}from"./nb_NO-8OE8CfW0.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-IeIfWawm.js";import"./FlyttReservasjonModal-DquGq6Ru.js";import"./index.es-DJ_X4gMc.js";import"./index.es-zzSr_Xqr.js";import"./Loader-8F9pyiDk.js";import"./Modal-1IhewSW0.js";import"./index-DJ2gHwTN.js";import"./composeEventHandlers-BLmajNSV.js";import"./Tag-DK_vZxKa.js";import"./VStack--o-kiaXL.js";import"./OppgaveReservasjonForlengetModal-CljZn03f.js";import"./NotatModal-HlwFJuiY.js";import"./Portal-ptRrTvRs.js";import"./ChevronRight-BOKvSHfA.js";import"./HourglassTopFilled-Bt8u50H8.js";import"./PersonHeadset-Bj0AkZVi.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),I={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
