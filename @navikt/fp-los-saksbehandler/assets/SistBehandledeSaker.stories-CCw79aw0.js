import{w as i,j as n}from"./iframe-CCoeTBVO.js";import{Q as l}from"./index.es-CtfjSj0a.js";import{u as d}from"./useQuery-DNPglWc1.js";import{h as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-DUjNpqD9.js";import"./FlyttReservasjonModal-BWgBlWZc.js";import{g as u}from"./withIntl-USg0sCON.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as a}from"./SistBehandledeSaker-Dok4TDBi.js";import{m as c}from"./nb_NO-C7K6sktD.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-BfRqDWwu.js";import"./index.es-BjXTJTbj.js";import"./Modal-DiZZhibk.js";import"./floating-ui.react-C8ZV5sBu.js";import"./composeEventHandlers-BGqjwrlF.js";import"./index-COhETKab.js";import"./ChevronDown-BQj5bnus.js";import"./Tag-CDrJBapq.js";import"./VStack-BiqG47QD.js";import"./useLosKodeverk-DQdS-DYd.js";import"./Table-CqHNy5yE.js";import"./Checkmark-kkodfRXJ.js";import"./HourglassTopFilled-CAWQhJek.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,v=u(c),C={title:"saksstotte/SistBehandledeSaker",component:a,decorators:[v,i],args:{åpneFagsak:g("button-click")},render:m=>d(E()).data?n.jsx(a,{...m}):n.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:"UNDER_ARBEID",reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const T=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,T as __namedExportsOrder,C as default};
