import{w as i,j as a}from"./iframe-k7aJWUQB.js";import{Q as l}from"./index.es-DK96oSHV.js";import{u as d}from"./useLosKodeverk-CI5CJTka.js";import{a as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-B2mNcD5Y.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-D2H9RPHa.js";import{g as u}from"./withIntl-C1q4znWV.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-M7bo8-Oh.js";import{m as c}from"./nb_NO-Cq7Q0wnG.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-Bsnc3RgC.js";import"./index.es-DhZpmTq0.js";import"./Modal-DvMJ4ZY_.js";import"./index-CwHY865Y.js";import"./composeEventHandlers-BlGENU0g.js";import"./Tag-DpMd2tLU.js";import"./VStack-BNI4ZZ_9.js";import"./Table-DtePjz7w.js";import"./ArrowsUpDown-C5_OpA6x.js";import"./Checkmark-CBdBPhd0.js";import"./HourglassTopFilled-Bsyu-2A9.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),C={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
