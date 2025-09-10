import{w as i,j as a}from"./iframe-Bb7EaA3c.js";import{Q as l}from"./index.es-Ql_h3ek1.js";import{u as d}from"./useQuery-BEaFEnQX.js";import{h as t,L as s,H as o,l as E}from"./fplosSaksbehandlerApi-B9TywFyl.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import"./FlyttReservasjonModal-DAmaYcl3.js";import{g as u}from"./withIntl-a7CRg7qg.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as n}from"./SistBehandledeSaker-Ccbnv-JW.js";import{m as c}from"./nb_NO-Day4tSnv.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-B4nQOFQQ.js";import"./index.es-Ds-u-sgY.js";import"./Modal-BJsjDxSS.js";import"./floating-ui.react-i3YnTFZQ.js";import"./composeEventHandlers-lncVDnve.js";import"./index-57zqyBz9.js";import"./ChevronDown-UarleSwg.js";import"./Tag-BQBB0SW6.js";import"./VStack-DE2AaRsN.js";import"./useLosKodeverk-BvoUAUKb.js";import"./Table-BYWNFHWz.js";import"./Checkmark-BRKXMVAW.js";import"./HourglassTopFilled-N7UwMMxf.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=u(c),b={title:"saksstotte/SistBehandledeSaker",component:n,decorators:[O,i],args:{åpneFagsak:v("button-click")},render:m=>d(E()).data?a.jsx(n,{...m}):a.jsx(l,{})},e={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:g.UNDER_ARBEID,reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[t.get(s.KODEVERK_LOS,()=>o.json(p)),t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
