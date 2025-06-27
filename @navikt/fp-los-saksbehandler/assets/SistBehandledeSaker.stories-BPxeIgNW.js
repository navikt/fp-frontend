import{a as p,L as i,H as c}from"./fplosSaksbehandlerApi-D2WcQp54.js";import"./FlyttReservasjonModal-inlmcaXr.js";import{w as l}from"./iframe-Cb_ISg--.js";import{g as d}from"./withIntl-DginZqZZ.js";import{S as E}from"./SistBehandledeSaker-DR-5UHUZ.js";import{m as g}from"./nb_NO-Cz-DehRK.js";import"./index.es-CFfJp_UP.js";import"./index.es-0GbpNu_8.js";import"./Loader-BPbWQrE7.js";import"./Modal-GY09lf0u.js";import"./index-DDfoBEuY.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-QHs8JhIS.js";import"./Tag-8oyzaAVR.js";import"./VStack-D_z2lemC.js";import"./index.es-MLu144aj.js";import"./message-DxCmWH9K.js";import"./useQuery-CCzjY9t4.js";import"./Table-CgpiyalU.js";import"./ArrowsUpDown-CAsvqp8t.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,h=d(g),x={title:"saksstotte/SistBehandledeSaker",component:E,decorators:[h,l],args:{åpneFagsak:u("button-click")}},e={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([]))]}}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
