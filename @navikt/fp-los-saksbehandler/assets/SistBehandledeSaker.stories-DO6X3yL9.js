import{a as t,L as s,H as o}from"./fplosSaksbehandlerApi-C_BiMBf0.js";import"./FlyttReservasjonModal-DIhGC0yB.js";import{w as n}from"./iframe-hNqesRcp.js";import{g as a}from"./withIntl-BEBqK_wJ.js";import{S as m}from"./SistBehandledeSaker-CIlCw8ua.js";import{m as p}from"./nb_NO-CdMwuD92.js";import"./index.es-P77Vc6LQ.js";import"./index.es-DfQqHWLi.js";import"./index.es-CUkkbtKU.js";import"./Loader-YGnArDwq.js";import"./Modal-0k8TAjQ8.js";import"./index-BpNC3YFo.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-Xxm36YLu.js";import"./Tag-DVtEO-BQ.js";import"./VStack-5r37413G.js";import"./index.es-loPsd4YV.js";import"./message-BYzHJXfW.js";import"./useQuery-BsgYUdpf.js";import"./Table-CBakM2TA.js";import"./ArrowsUpDown-eDpMtYWO.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,c=a(p),I={title:"saksstotte/SistBehandledeSaker",component:m,decorators:[c,n],args:{åpneFagsak:i("button-click")}},e={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[t.get(s.BEHANDLEDE_OPPGAVER,()=>o.json([]))]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const N=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,N as __namedExportsOrder,I as default};
