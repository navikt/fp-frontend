import{a as t,L as s,H as n}from"./fplosSaksbehandlerApi-Dsddu5UX.js";import"./FlyttReservasjonModal-7oYJA89T.js";import{w as o}from"./iframe-B3LllOyS.js";import{g as a}from"./withIntl-CtmVqXDM.js";import{S as m}from"./SistBehandledeSaker-C7tUwW3p.js";import{m as p}from"./nb_NO-iOLOzDYk.js";import"./index.es-BZ8HOhoj.js";import"./index.es-B_bcqdk4.js";import"./Loader-BniX8TTA.js";import"./Modal-D2EJqP0l.js";import"./index-D9YNbemO.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-D-tGMl61.js";import"./Tag-CdwnF2do.js";import"./VStack-oiDHnFzs.js";import"./preload-helper-D9Z9MdNV.js";import"./useQuery-Dd00kS4c.js";import"./Table-bB41s0gD.js";import"./ArrowsUpDown-DuQL2VeC.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,c=a(p),U={title:"saksstotte/SistBehandledeSaker",component:m,decorators:[c,o],args:{åpneFagsak:i("button-click")}},e={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
