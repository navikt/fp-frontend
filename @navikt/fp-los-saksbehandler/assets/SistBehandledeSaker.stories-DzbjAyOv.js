import{a as t,L as s,H as n}from"./fplosSaksbehandlerApi-CmHpqlwU.js";import"./FlyttReservasjonModal-9yiYRMJe.js";import{w as o}from"./iframe-rUdowgs-.js";import{g as a}from"./withIntl-DU4l9fHm.js";import{S as m}from"./SistBehandledeSaker-_rmTJKeA.js";import{m as p}from"./nb_NO-DUD8ZAg7.js";import"./index.es-Bk-da9xx.js";import"./index.es-GATJa6fU.js";import"./Loader-DN9l1kEc.js";import"./Modal-D9cD-R9g.js";import"./index-C7-4nLYl.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-BOhz-Zxb.js";import"./Tag-DriZpGYG.js";import"./VStack-CLJMsM8A.js";import"./useQuery-C1p9khC2.js";import"./Table-GgJF7uGJ.js";import"./ArrowsUpDown-CdzRmDAy.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,c=a(p),w={title:"saksstotte/SistBehandledeSaker",component:m,decorators:[c,o],args:{åpneFagsak:i("button-click")}},e={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const U=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,U as __namedExportsOrder,w as default};
