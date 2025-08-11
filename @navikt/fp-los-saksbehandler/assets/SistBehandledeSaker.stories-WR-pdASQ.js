import{a as t,L as s,H as n}from"./fplosSaksbehandlerApi-DUm43ECe.js";import"./FlyttReservasjonModal-BN_kxoi2.js";import{w as o}from"./iframe-BwKNJOZ5.js";import{g as a}from"./withIntl-BqPCZHwl.js";import{S as m}from"./SistBehandledeSaker-DK9VQY12.js";import{m as p}from"./nb_NO-pr7Wf7mt.js";import"./index.es-CPxNtf18.js";import"./index.es-C2Yxr8g-.js";import"./Loader-D-bqSM9O.js";import"./Modal-Dg4VOHe-.js";import"./index-BuWVdx51.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-CkoL87KZ.js";import"./Tag-A2Gv-CiV.js";import"./VStack-DtCjXnC7.js";import"./preload-helper-D9Z9MdNV.js";import"./useQuery-B_Ogkrra.js";import"./Table-CShPGA4e.js";import"./ArrowsUpDown-DOE1Mfyb.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,c=a(p),U={title:"saksstotte/SistBehandledeSaker",component:m,decorators:[c,o],args:{åpneFagsak:i("button-click")}},e={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([{
        id: 1,
        personnummer: '334342323',
        navn: 'Espen Utvikler',
        saksnummer: '13232323'
      } as Oppgave]))]
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([]))]
    }
  }
}`,...r.parameters?.docs?.source}}};const v=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,v as __namedExportsOrder,U as default};
