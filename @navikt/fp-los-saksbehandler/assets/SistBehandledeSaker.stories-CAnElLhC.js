import{a as p,L as i,H as c}from"./fplosSaksbehandlerApi-jqX_MHfE.js";import"./FlyttReservasjonModal-B5mm9VRy.js";import{w as l}from"./iframe-C4ZmjsLZ.js";import{g as d}from"./withIntl-BjFGfaqN.js";import{S as E}from"./SistBehandledeSaker-DnzWScBj.js";import{m as g}from"./nb_NO-DuVn59ai.js";import"./index.es-BLv97-Ok.js";import"./index.es-BtIi2dgM.js";import"./Loader-Cu_OC_3F.js";import"./Modal-Wkl7gRDH.js";import"./index-CkjCDsAm.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-BMrhYSXv.js";import"./Tag-6x7xA00r.js";import"./VStack-CBWf-lgF.js";import"./index.es-Ci-PBKQh.js";import"./message-D5LjN3xl.js";import"./useQuery-Qp6f2Mwk.js";import"./Table-KKuszbWt.js";import"./ArrowsUpDown-CnxKPuFH.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,h=d(g),x={title:"saksstotte/SistBehandledeSaker",component:E,decorators:[h,l],args:{åpneFagsak:u("button-click")}},e={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([]))]}}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
