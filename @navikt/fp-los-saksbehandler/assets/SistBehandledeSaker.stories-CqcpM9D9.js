import{w as i,j as n}from"./iframe-zFWYcwm7.js";import{Q as l}from"./index.es-C_wlL2iz.js";import{u as d}from"./useQuery-B933LyRw.js";import{h as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-CBXsuCIC.js";import"./FlyttReservasjonModal-DJQmchmK.js";import{g as u}from"./withIntl-ALOaV7Pp.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as a}from"./SistBehandledeSaker-Cf7xR_Yp.js";import{m as c}from"./nb_NO-D8YjOQZL.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-CG9biIaz.js";import"./index.es-bkEWtoh8.js";import"./Modal-QnReuhsY.js";import"./floating-ui.react-B6DTH5te.js";import"./composeEventHandlers-DVdnGlxH.js";import"./index-Dev1q-0K.js";import"./ChevronDown-CDaqZ_tC.js";import"./Tag-BSM-RIPZ.js";import"./VStack-C786mKbM.js";import"./useLosKodeverk-BomTLYRF.js";import"./Table--XPpCnjV.js";import"./Checkmark-BUumglR4.js";import"./HourglassTopFilled-Cw4AFrRT.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,v=u(c),C={title:"saksstotte/SistBehandledeSaker",component:a,decorators:[v,i],args:{åpneFagsak:g("button-click")},render:m=>d(E()).data?n.jsx(a,{...m}):n.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:"UNDER_ARBEID",reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([{
        id: 1,
        personnummer: '334342323',
        navn: 'Espen Utvikler',
        saksnummer: '13232323',
        oppgaveBehandlingStatus: 'UNDER_ARBEID',
        reservasjonStatus: {
          erReservert: true,
          reservertAvNavn: 'Ola Nordmann'
        }
      } as Oppgave]))]
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([]))]
    }
  }
}`,...r.parameters?.docs?.source}}};const T=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,T as __namedExportsOrder,C as default};
