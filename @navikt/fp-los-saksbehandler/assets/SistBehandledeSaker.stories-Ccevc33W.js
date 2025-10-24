import{w as i,j as n}from"./iframe-BgqHI6_D.js";import{Z as l}from"./index.es-C5bvsI8w.js";import{u as d}from"./useQuery-BU-hX8Ka.js";import{h as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-B3hag-wi.js";import"./FlyttReservasjonModal-CfD8a7tj.js";import{g as u}from"./withIntl-CwWlSh0l.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as a}from"./SistBehandledeSaker-DHBTOr2s.js";import{m as c}from"./nb_NO-DNaahZtR.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-DOoSrnUO.js";import"./index.es-yKC1ZRN4.js";import"./Modal-C5tKf2gw.js";import"./floating-ui.react-CYhy7SUm.js";import"./composeEventHandlers-Dx2nCQMD.js";import"./index-C-D9Pekm.js";import"./ChevronDown-VWy8a60g.js";import"./Tag-D9CpAEC3.js";import"./VStack-D-GBvM_X.js";import"./useLosKodeverk-BjwuXSqJ.js";import"./Table-BX5dq_bJ.js";import"./Checkmark-t8tPJkYC.js";import"./HourglassTopFilled-Dzl5os24.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,v=u(c),Q={title:"saksstotte/SistBehandledeSaker",component:a,decorators:[v,i],args:{åpneFagsak:g("button-click")},render:m=>d(E()).data?n.jsx(a,{...m}):n.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:"UNDER_ARBEID",reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
