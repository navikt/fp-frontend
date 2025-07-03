import{a as p,L as i,H as c}from"./fplosSaksbehandlerApi-CHpAHwIy.js";import"./FlyttReservasjonModal-sDuo19S1.js";import{w as l}from"./iframe-BVTG5DQn.js";import{g as d}from"./withIntl-TNySBBmS.js";import{S as E}from"./SistBehandledeSaker-DuQFs1NU.js";import{m as g}from"./nb_NO-Cd-arOzM.js";import"./index.es-CSoebvA5.js";import"./index.es-p2I_thuD.js";import"./Loader-BR3iPa-G.js";import"./Modal-CuZXMraw.js";import"./index-8H-CvFi6.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-B9aWN_JB.js";import"./Tag-CkjPnsoN.js";import"./VStack-D8YIQLAv.js";import"./message-DbQbEmJn.js";import"./useQuery-Cl684nyt.js";import"./Table-C6t0e6fP.js";import"./ArrowsUpDown-9cl8bpIm.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,h=d(g),V={title:"saksstotte/SistBehandledeSaker",component:E,decorators:[h,l],args:{åpneFagsak:u("button-click")}},e={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([]))]}}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var o,a,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([]))]
    }
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const x=["Default","IngenBehandlinger"];export{e as Default,r as IngenBehandlinger,x as __namedExportsOrder,V as default};
