import{a as t,L as s,H as n}from"./fplosSaksbehandlerApi-DgsLV5py.js";import"./FlyttReservasjonModal-DdRgRJAc.js";import{w as o}from"./iframe-C1nA0uJj.js";import{g as a}from"./withIntl-CrxOFtc5.js";import{S as m}from"./SistBehandledeSaker-uXOVLCEG.js";import{m as p}from"./nb_NO-CkG39b6k.js";import"./index.es-D50fzgQu.js";import"./index.es-BNCrfEq9.js";import"./Loader-BLm6o0Ei.js";import"./Modal-x0b0eqpK.js";import"./index-B-tESIzx.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-BDh-Aopk.js";import"./Tag-D5ZLsB3k.js";import"./VStack-BCnib7z-.js";import"./message-C68V_5Jb.js";import"./useQuery-CRRCoN7g.js";import"./Table-DLQ_cduH.js";import"./ArrowsUpDown-BkQ9Q9K2.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,c=a(p),U={title:"saksstotte/SistBehandledeSaker",component:m,decorators:[c,o],args:{åpneFagsak:i("button-click")}},e={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>n.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
