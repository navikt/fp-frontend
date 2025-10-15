import{w as i,j as n}from"./iframe-FHusWhXg.js";import{Z as l}from"./index.es-D-No7bk3.js";import{u as d}from"./useQuery-CkNNG0T0.js";import{h as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-bDEMoisP.js";import"./FlyttReservasjonModal-rppp-6Sj.js";import{g as u}from"./withIntl-CfJuZ2Ho.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as a}from"./SistBehandledeSaker-DboXxzmZ.js";import{m as c}from"./nb_NO-DyXQqJfF.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-B5b3277y.js";import"./index.es-Bh-bsHNz.js";import"./Modal-DyPCRWrt.js";import"./floating-ui.react-CszcVAZV.js";import"./composeEventHandlers-C1c8aMmq.js";import"./index-BOr9xCvS.js";import"./ChevronDown-C-QCVTfa.js";import"./Tag-CclJAQl6.js";import"./VStack-IrdgVemv.js";import"./useLosKodeverk-CDYNCpzd.js";import"./Table-B8DGsauB.js";import"./Checkmark-BcjwY8VW.js";import"./HourglassTopFilled-DeVld3oe.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,v=u(c),Q={title:"saksstotte/SistBehandledeSaker",component:a,decorators:[v,i],args:{åpneFagsak:g("button-click")},render:m=>d(E()).data?n.jsx(a,{...m}):n.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:"UNDER_ARBEID",reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
