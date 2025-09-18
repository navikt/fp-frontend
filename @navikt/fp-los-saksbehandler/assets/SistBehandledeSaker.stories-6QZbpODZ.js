import{w as i,j as a}from"./iframe-ByxoPEP3.js";import{Q as l}from"./index.es-DDS_sI15.js";import{u as d}from"./useQuery-B87DBgwl.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-i-IdBvue.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-BHOl-Hea.js";import{g as u}from"./withIntl-BrjxEwCU.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-CNHt-ayv.js";import{m as c}from"./nb_NO-BdJghxQq.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-Bq9jJYrN.js";import"./index.es-Cb_jrfi5.js";import"./Modal-DxMsFHGx.js";import"./floating-ui.react-CakYEGjN.js";import"./composeEventHandlers-DHNuXF26.js";import"./index-dFM0PtaG.js";import"./ChevronDown-BAXtNZHM.js";import"./Tag-Cg6ZBqUj.js";import"./VStack-1KUPWjDx.js";import"./useLosKodeverk--bP2D4R1.js";import"./Table-exm8YT0j.js";import"./Checkmark-D240wHfg.js";import"./HourglassTopFilled-C7kVUWLO.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
