import{a as t,L as s,H as n}from"./fplosSaksbehandlerApi-CYc5P8CX.js";import"./FlyttReservasjonModal-CBMBTWkk.js";import{w as o}from"./iframe-Cbsua4r2.js";import{g as a}from"./withIntl-D-TXM6Cf.js";import{S as m}from"./SistBehandledeSaker-z-mlw1tR.js";import{m as p}from"./nb_NO-BblFEszt.js";import"./index.es-CYNXQyQE.js";import"./index.es-5An9wuhY.js";import"./Loader-pn-IcA3V.js";import"./Modal-DYcaQjLF.js";import"./index-Cs44veBI.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-Ci8HeMsC.js";import"./Tag-CCgLjVfI.js";import"./VStack-IFWqsRog.js";import"./preload-helper-D9Z9MdNV.js";import"./useQuery-C-0M3yS5.js";import"./Table-COrDGJvu.js";import"./ArrowsUpDown-B9biLawy.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,c=a(p),U={title:"saksstotte/SistBehandledeSaker",component:m,decorators:[c,o],args:{åpneFagsak:i("button-click")}},e={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
