import{F as r,B as t}from"./iframe-DZrfQhmt.js";import{O as s}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as n}from"./withIntl-MVxRk1vh.js";import{O as a}from"./OppgaveErReservertAvAnnenModal-D6op-qF_.js";import{m as o}from"./nb_NO-BiGyfJgG.js";import"./preload-helper-D9Z9MdNV.js";import"./Modal-Cpcc_uy-.js";import"./index-vJ6sSl0L.js";import"./Loader-Cd5GBwP9.js";import"./composeEventHandlers-BivaY7Vf.js";import"./VStack-VrpA6W4Y.js";import"./ExclamationmarkTriangleFill-BF8MosMC.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,i=n(o),v={id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:t.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:r.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:s.UNDER_ARBEID},S={title:"OppgaveErReservertAvAnnenModal",component:a,decorators:[i]},e={args:{lukkErReservertModalOgOpneOppgave:p("button-click"),oppgave:v,reservasjonStatus:{erReservert:!1,reservertAvNavn:"Espen Utvikler",reservertAvUid:"E232323",reservertTilTidspunkt:"2020-01-01"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,S as default};
