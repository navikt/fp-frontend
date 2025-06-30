import{a as p,L as i,H as c}from"./fplosSaksbehandlerApi-Br0saMg4.js";import"./FlyttReservasjonModal-DLOaK9D6.js";import{w as l}from"./iframe-BGRsIo3P.js";import{g as d}from"./withIntl-CPXO3lvq.js";import{S as E}from"./SistBehandledeSaker-BHycV6Jl.js";import{m as g}from"./nb_NO-DYLtSdYq.js";import"./index.es-Bwknunf2.js";import"./index.es-Cngvyuii.js";import"./Loader-BVN4NMPC.js";import"./Modal-CjcrlGpH.js";import"./index--B9aAWr2.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-BJsnN-rY.js";import"./Tag-DwtGxp6Q.js";import"./VStack-C2U-6IUP.js";import"./index.es-Dulf5yHG.js";import"./message-D4wBDHqB.js";import"./useQuery-DCDGn1sy.js";import"./Table-DJx7eA3r.js";import"./ArrowsUpDown-CG9NmNC-.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,h=d(g),x={title:"saksstotte/SistBehandledeSaker",component:E,decorators:[h,l],args:{åpneFagsak:u("button-click")}},e={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([]))]}}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
