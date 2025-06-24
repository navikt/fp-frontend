import{a as p,L as i,H as c}from"./fplosSaksbehandlerApi-BnFlpdOC.js";import"./FlyttReservasjonModal-CsQ3KjQK.js";import{w as l}from"./iframe-CyqUL1xL.js";import{g as d}from"./withIntl-DgwnJYo7.js";import{S as E}from"./SistBehandledeSaker-BFME0OuY.js";import{m as g}from"./nb_NO-BWhtdl_d.js";import"./index.es-Di6zB4B1.js";import"./index.es-DY_HOSzp.js";import"./Loader-DfXvgLPA.js";import"./Modal-Bd22a6-H.js";import"./index-Biw2VKib.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-BvMWLyRO.js";import"./Tag-BwZ3nBrE.js";import"./VStack-hC6jG55H.js";import"./index.es-CQIKN6GW.js";import"./message-DTuv7X55.js";import"./useQuery-DOZ13jsG.js";import"./Table-AXbJQcKU.js";import"./ArrowsUpDown-buOrj6Zg.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,h=d(g),x={title:"saksstotte/SistBehandledeSaker",component:E,decorators:[h,l],args:{åpneFagsak:u("button-click")}},e={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([]))]}}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var n,a,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([]))]
    }
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const C=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,C as __namedExportsOrder,x as default};
