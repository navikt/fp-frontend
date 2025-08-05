import{a as t,L as s,H as n}from"./fplosSaksbehandlerApi-D9NUVVUH.js";import"./FlyttReservasjonModal-DORp-JXe.js";import{w as o}from"./iframe-BwsLYjPf.js";import{g as a}from"./withIntl-BAppd8Ba.js";import{S as m}from"./SistBehandledeSaker-7VHVwMns.js";import{m as p}from"./nb_NO-pbSJoPLE.js";import"./index.es-CAgio5Y3.js";import"./index.es-TpN-Pz0d.js";import"./Loader-B04EuSy-.js";import"./Modal-DTxZfOx8.js";import"./index-DAc2Pk22.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-z8b2OvbD.js";import"./Tag-BE_93BrC.js";import"./VStack-BUJevhxp.js";import"./useQuery-CdpWdoo1.js";import"./Table-DvLcK_q3.js";import"./ArrowsUpDown-GhCgoGVU.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,c=a(p),w={title:"saksstotte/SistBehandledeSaker",component:m,decorators:[c,o],args:{åpneFagsak:i("button-click")}},e={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
