import{w as i,j as a}from"./iframe-DgZiFRaD.js";import{Q as l}from"./index.es-CeLpzBia.js";import{u as d}from"./useQuery-CDscpsl4.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-C7yLq6yg.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-B7nPZtPq.js";import{g as u}from"./withIntl-rMvziq_b.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-CT7ssxYP.js";import{m as c}from"./nb_NO-rK5Xk3PQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-BtXeWwhi.js";import"./index.es-D1dEv4Eh.js";import"./Modal-DmXRaTmE.js";import"./floating-ui.react-BbtTyEmN.js";import"./composeEventHandlers-Cu0cTQly.js";import"./index-DlnoGqDp.js";import"./ChevronDown-Db9vxiaT.js";import"./Tag-Cp4HBASQ.js";import"./VStack-DTZ0YiG_.js";import"./useLosKodeverk-JgcWIBOJ.js";import"./Table-Bwr8WBDy.js";import"./Checkmark-3tFYjbHG.js";import"./HourglassTopFilled-H4t9F7L0.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
