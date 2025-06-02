import{a as p,L as i,H as c}from"./fplosSaksbehandlerApi-B2AQAuw2.js";import"./FlyttReservasjonModal-KhAK_x0w.js";import{w as l}from"./iframe-D70Tnhx0.js";import{g as d}from"./withIntl-CDsxDtZ7.js";import{S as E}from"./SistBehandledeSaker-CZaOws2W.js";import{m as g}from"./nb_NO-Bc_rXWi2.js";import"./index.es-BFTRVqwT.js";import"./index.es-BVSFFaqq.js";import"./Loader-Dy4WN2O0.js";import"./Modal-CNbHlX5O.js";import"./index-CAFejsPJ.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-D13T2JtO.js";import"./Tag-C4X_taQ0.js";import"./VStack-CymHhqNl.js";import"./index.es-CHj6DLSC.js";import"./message-BuvWnYug.js";import"./useQuery-D8cK-fqL.js";import"./Table-DiImHk02.js";import"./ArrowsUpDown-Dr8XHWeS.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,h=d(g),x={title:"saksstotte/SistBehandledeSaker",component:E,decorators:[h,l],args:{åpneFagsak:u("button-click")}},e={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([]))]}}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
