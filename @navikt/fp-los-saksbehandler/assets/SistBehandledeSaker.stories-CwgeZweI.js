import{w as i,j as n}from"./iframe-DJ2vgJiB.js";import{Z as l}from"./index.es-DB0BfbQF.js";import{u as d}from"./useQuery-BfLYvP3i.js";import{h as s,L as t,H as o,l as E}from"./fplosSaksbehandlerApi-fWrzZJhy.js";import"./FlyttReservasjonModal-DPkS95H0.js";import{g as u}from"./withIntl-CDkLFbdz.js";import{a as p}from"./alleKodeverkLos-JR0SOFbV.js";import{S as a}from"./SistBehandledeSaker-cSuhxFZU.js";import{m as c}from"./nb_NO-DU5AxKL0.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-Cyiz0UUT.js";import"./index.es-DLdAdjI2.js";import"./Modal-DMcFhu-G.js";import"./floating-ui.react-BmJFy8Ir.js";import"./composeEventHandlers-dczKmYK2.js";import"./index-moFeIzmb.js";import"./ChevronDown-Chq3Sq1B.js";import"./Tag-CO8EyD0u.js";import"./VStack-CoOMqnWD.js";import"./useLosKodeverk-B9hmq-WL.js";import"./Table-BtfQLmoP.js";import"./Checkmark-BDfKngqw.js";import"./HourglassTopFilled-DIC0kqgI.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,v=u(c),Q={title:"saksstotte/SistBehandledeSaker",component:a,decorators:[v,i],args:{åpneFagsak:g("button-click")},render:m=>d(E()).data?n.jsx(a,{...m}):n.jsx(l,{})},e={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",oppgaveBehandlingStatus:"UNDER_ARBEID",reservasjonStatus:{erReservert:!0,reservertAvNavn:"Ola Nordmann"}}]))]}}},r={parameters:{msw:{handlers:[s.get(t.KODEVERK_LOS,()=>o.json(p)),s.get(t.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
