import{w as i,j as a}from"./iframe-BVcRJGzc.js";import{Q as l}from"./index.es-DFzNGyCV.js";import{u as d}from"./useLosKodeverk-rEeTqbzN.js";import{a as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-DrPTghV4.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-D3ilA9KH.js";import{g as u}from"./withIntl-B-rDPHaC.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-DUbJIgIR.js";import{m as c}from"./nb_NO-Cya3_SoH.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-LcxfTbh8.js";import"./index.es-CXcNQKTd.js";import"./Modal-BiwJMaNo.js";import"./index-Dc4ut0ls.js";import"./composeEventHandlers-qMugrl-b.js";import"./Tag-DnuRFk9e.js";import"./VStack-1ft0JNw9.js";import"./Table-DhotFuBY.js";import"./ArrowsUpDown-DhwCN_Xo.js";import"./Checkmark-CxdDsreu.js";import"./HourglassTopFilled-BwweEF4N.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),C={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([{
        id: 1,
        personnummer: '334342323',
        navn: 'Espen Utvikler',
        saksnummer: '13232323',
        oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID,
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
