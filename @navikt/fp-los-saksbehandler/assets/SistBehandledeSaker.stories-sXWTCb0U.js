import{a as t,L as s,H as n}from"./fplosSaksbehandlerApi-ybaEhuMn.js";import"./FlyttReservasjonModal-BjpsjBbY.js";import{w as o}from"./iframe-Br6Rev2a.js";import{g as a}from"./withIntl-iEi7nboL.js";import{S as m}from"./SistBehandledeSaker-C8lU8QqG.js";import{m as p}from"./nb_NO-DpJVr73H.js";import"./index.es-Cjrwpto7.js";import"./index.es-C4kZSf0i.js";import"./Loader-CGzdXnlu.js";import"./Modal-B73WcImj.js";import"./index-eGax0tLI.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-Bj9f8LlW.js";import"./Tag-D_9TlqGi.js";import"./VStack-CH5YDwkv.js";import"./useQuery-CX0lBhVx.js";import"./Table-DIF5sYbq.js";import"./ArrowsUpDown-BMEGKhx2.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,c=a(p),w={title:"saksstotte/SistBehandledeSaker",component:m,decorators:[c,o],args:{åpneFagsak:i("button-click")}},e={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
