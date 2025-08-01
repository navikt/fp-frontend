import{a as t,L as s,H as o}from"./fplosSaksbehandlerApi-BwDS3LvX.js";import"./FlyttReservasjonModal-DBSEFBNI.js";import{w as n}from"./iframe-Dc6WjnWo.js";import{g as a}from"./withIntl-DMB0TPmy.js";import{S as m}from"./SistBehandledeSaker-Cd3W3TMK.js";import{m as p}from"./nb_NO-D9cqHkss.js";import"./index.es-_rKQaDeE.js";import"./index.es-o0NI92HH.js";import"./index.es-4WxVYNvl.js";import"./Loader-DXE6yoYN.js";import"./Modal-CGoe-XOg.js";import"./index-CUTgaLrl.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-D9tTO_2Z.js";import"./Tag-DGSMr0Yb.js";import"./VStack-BG5ATSqi.js";import"./index.es-BTpr_XSX.js";import"./useQuery-DtedCcJP.js";import"./Table-CAoV-ziP.js";import"./ArrowsUpDown-D1X4zsFg.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,c=a(p),v={title:"saksstotte/SistBehandledeSaker",component:m,decorators:[c,n],args:{åpneFagsak:i("button-click")}},e={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const I=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,I as __namedExportsOrder,v as default};
