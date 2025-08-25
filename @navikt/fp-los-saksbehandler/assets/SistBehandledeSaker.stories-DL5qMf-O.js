import{w as i,j as a}from"./iframe-B9KoQGM0.js";import{X as l}from"./index.es-CLSw_-eh.js";import{u as d}from"./useLosKodeverk-BE3hg7Pt.js";import{a as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-CWuH3MKX.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-B35tj6vq.js";import{g as u}from"./withIntl-DeQxf50B.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-DzW5b3Ai.js";import{m as c}from"./nb_NO-C3IQ5_sL.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-C2bZBRPU.js";import"./index.es-Bp8LbBj1.js";import"./Modal-CHSHW0HN.js";import"./index-TZAab7S3.js";import"./composeEventHandlers-C20DeXlO.js";import"./Tag-BQHGL7Xh.js";import"./VStack-C4xViOeb.js";import"./Table-C1cOsVXS.js";import"./ArrowsUpDown-CM4N4ECD.js";import"./Checkmark-DtkYrHG8.js";import"./HourglassTopFilled-B1LRc7mw.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),Q={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const T=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,T as __namedExportsOrder,Q as default};
