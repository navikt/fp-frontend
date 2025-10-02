import{w as i,j as a}from"./iframe-DQObE0ib.js";import{Q as l}from"./index.es-H_piUs6X.js";import{u as d}from"./useQuery-BGQdeIYJ.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-YrD9FbIV.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-NnzBXHSH.js";import{g as u}from"./withIntl-Dc5alr90.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-CHS3SkeY.js";import{m as c}from"./nb_NO-Cxb7Qome.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-B42dYNSD.js";import"./index.es-DxsygW_W.js";import"./Modal-DGW_iphE.js";import"./floating-ui.react-By7qfWNb.js";import"./composeEventHandlers-uCHalawx.js";import"./index-BUdXwz99.js";import"./ChevronDown-DAoI4_A4.js";import"./Tag-DG75O3UG.js";import"./VStack-US4lL_lt.js";import"./useLosKodeverk-B9Y4A5_8.js";import"./Table-Cjqd5dRq.js";import"./Checkmark-BuMfeHRH.js";import"./HourglassTopFilled-srRY-ALb.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
