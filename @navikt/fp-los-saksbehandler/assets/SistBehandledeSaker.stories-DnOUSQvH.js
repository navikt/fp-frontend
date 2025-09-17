import{w as i,j as a}from"./iframe-BQZcYkTJ.js";import{Q as l}from"./index.es-D2NNXPQv.js";import{u as d}from"./useQuery-CQ6O1_um.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-Cgy-vkZa.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-kMb1XF3J.js";import{g as u}from"./withIntl-CbRWfwcG.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-COOikger.js";import{m as c}from"./nb_NO-VdVxCUjv.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-DdvPKIfT.js";import"./index.es-C63AHdZW.js";import"./Modal-DGZyRkRp.js";import"./floating-ui.react-Db6i8CYR.js";import"./composeEventHandlers-e4-cxIcp.js";import"./index-BlDn0q3T.js";import"./ChevronDown-i7wS8YZx.js";import"./Tag-BNB8F1Wf.js";import"./VStack-r0kiVVVy.js";import"./useLosKodeverk-eDP7sz1z.js";import"./Table-B_-YQZbW.js";import"./Checkmark-BsOsSj91.js";import"./HourglassTopFilled-CTy9S6iB.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
