import{a as p,L as i,H as c}from"./fplosSaksbehandlerApi-CWeePBmt.js";import"./FlyttReservasjonModal-B2mgUDxo.js";import{w as l}from"./iframe-Cwe0bwJ9.js";import{g as d}from"./withIntl-D9nmWhbu.js";import{S as E}from"./SistBehandledeSaker-CkvX6a-v.js";import{m as g}from"./nb_NO-bfncGwUh.js";import"./index.es-AjNjlijS.js";import"./index.es-Dna4oZ5x.js";import"./Loader-5LDEStqt.js";import"./Modal-BxSIUeqn.js";import"./index-xDdMB7tx.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-DI2c8J56.js";import"./Tag-B6yaoXJU.js";import"./VStack-Bf-ul0Dz.js";import"./index.es-xiO060LA.js";import"./message-BnxX8ymA.js";import"./useQuery-DVm6FeRj.js";import"./Table-DZYlCdrB.js";import"./ArrowsUpDown-C2YDK5IP.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,h=d(g),x={title:"saksstotte/SistBehandledeSaker",component:E,decorators:[h,l],args:{åpneFagsak:u("button-click")}},e={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([]))]}}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
