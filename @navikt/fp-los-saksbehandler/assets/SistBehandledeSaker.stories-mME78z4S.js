import{w as i,j as n}from"./iframe-Cy3nThB4.js";import{Z as l}from"./index.es-C6NXw24M.js";import{u as d}from"./useQuery-fbnC_flK.js";import{h as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-vAN14MZ0.js";import"./FlyttReservasjonModal-piA8JDAn.js";import{g as u}from"./withIntl-C-fpEaKm.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as a}from"./SistBehandledeSaker-CbuWtmJ6.js";import{m as c}from"./nb_NO-B4nFNxw-.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-D_eQWejC.js";import"./index.es-ivd3HPcS.js";import"./Modal-BVFJjO1L.js";import"./floating-ui.react-BuWkwZSV.js";import"./composeEventHandlers-CbGljWkL.js";import"./index-BVl6bERt.js";import"./ChevronDown-DWqkGUCs.js";import"./Tag-lp49pIon.js";import"./VStack-gQjYxRm0.js";import"./useLosKodeverk-JENNtJmO.js";import"./Table-DmLeaU03.js";import"./Checkmark-DQJyUvH9.js";import"./HourglassTopFilled-BAUSYn76.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,v=u(c),Q={title:"saksstotte/SistBehandledeSaker",component:a,decorators:[v,i],args:{åpneFagsak:g("button-click")},render:m=>d(E()).data?n.jsx(a,{...m}):n.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:"UNDER_ARBEID",reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const T=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,T as __namedExportsOrder,Q as default};
