import{a as t,L as s,H as n}from"./fplosSaksbehandlerApi-_CPBJ_yv.js";import"./FlyttReservasjonModal-DZXvWC4I.js";import{w as o}from"./iframe-DM8LYoMN.js";import{g as a}from"./withIntl-BN5cT-Jw.js";import{S as m}from"./SistBehandledeSaker-Be2Y9Kt_.js";import{m as p}from"./nb_NO-BuWnCQiM.js";import"./index.es-B-U1gNAW.js";import"./index.es-0Unrm-qE.js";import"./Loader-CN2EFucT.js";import"./Modal-laqU7i9r.js";import"./index-Bifiva1h.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-DbuORtlx.js";import"./Tag-BM8q_-bR.js";import"./VStack-DWSoSyHo.js";import"./message-Cgpe6rKf.js";import"./useQuery-krRsjIPm.js";import"./Table-B4_kGWBJ.js";import"./ArrowsUpDown-VRV-bbEW.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,c=a(p),U={title:"saksstotte/SistBehandledeSaker",component:m,decorators:[c,o],args:{åpneFagsak:i("button-click")}},e={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
