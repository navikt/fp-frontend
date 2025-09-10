import{w as i,j as a}from"./iframe-NweChku0.js";import{Q as l}from"./index.es-BxH8Lpfg.js";import{u as d}from"./useQuery-BXQn_C2Y.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-CAqHCeMT.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-BLMrKjBg.js";import{g as u}from"./withIntl-BSd7bkvP.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-8PO0Sm6O.js";import{m as c}from"./nb_NO-XfFeSNwn.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-COamu5FK.js";import"./index.es-D3FUkAfY.js";import"./Modal-D4Dtj8lA.js";import"./floating-ui.react-BmnoFZ-m.js";import"./composeEventHandlers-9_X6eWHO.js";import"./index-BRk-wECo.js";import"./ChevronDown-DLAXB9Mx.js";import"./Tag-CWbbP-WA.js";import"./VStack-DKk8kL0h.js";import"./useLosKodeverk-CF4o6htF.js";import"./Table-D6tGp1X8.js";import"./Checkmark-AXJ3C-6s.js";import"./HourglassTopFilled-CQaDE6mM.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const F=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,F as __namedExportsOrder,b as default};
