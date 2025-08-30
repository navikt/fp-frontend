import{B as r}from"./iframe-CGtaPlMr.js";import{O as t}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as n}from"./withIntl-C38w5mIj.js";import{O as s}from"./OppgaveErReservertAvAnnenModal-VGUyO4E3.js";import{m as a}from"./nb_NO-8OE8CfW0.js";import"./preload-helper-D9Z9MdNV.js";import"./Modal-1IhewSW0.js";import"./index-DJ2gHwTN.js";import"./Loader-8F9pyiDk.js";import"./composeEventHandlers-BLmajNSV.js";import"./VStack--o-kiaXL.js";import"./ExclamationmarkTriangleFill-B7IGhWkt.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,p=n(a),i={id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:t.UNDER_ARBEID},R={title:"OppgaveErReservertAvAnnenModal",component:s,decorators:[p]},e={args:{lukkErReservertModalOgOpneOppgave:o("button-click"),oppgave:i,reservasjonStatus:{erReservert:!1,reservertAvNavn:"Espen Utvikler",reservertAvUid:"E232323",reservertTilTidspunkt:"2020-01-01"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    lukkErReservertModalOgOpneOppgave: action('button-click'),
    oppgave: oppgaveForResevertAvAnnenModal,
    reservasjonStatus: {
      erReservert: false,
      reservertAvNavn: 'Espen Utvikler',
      reservertAvUid: 'E232323',
      reservertTilTidspunkt: '2020-01-01'
    }
  }
}`,...e.parameters?.docs?.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,R as default};
