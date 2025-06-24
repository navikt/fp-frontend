import{a as p,L as i,H as c}from"./fplosSaksbehandlerApi-T92P3PN8.js";import"./FlyttReservasjonModal-DGTMuAlg.js";import{w as l}from"./iframe-BzKhhaRQ.js";import{g as d}from"./withIntl-Dd43I8Pt.js";import{S as E}from"./SistBehandledeSaker-BUFAIzTd.js";import{m as g}from"./nb_NO-4-jUSXJR.js";import"./index.es-mRH8feFV.js";import"./index.es-C1qhk-q-.js";import"./Loader-pSbfn0kj.js";import"./Modal-BbCYygSf.js";import"./index-qlk676pZ.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-CMRSpiCZ.js";import"./Tag-D-TPyznH.js";import"./VStack-BheS40Ry.js";import"./index.es-CE-_gDz4.js";import"./message-CmnLKSIt.js";import"./useQuery-ExzDcJUp.js";import"./Table-BvBb2RPN.js";import"./ArrowsUpDown-CzQxmKP-.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,h=d(g),x={title:"saksstotte/SistBehandledeSaker",component:E,decorators:[h,l],args:{åpneFagsak:u("button-click")}},e={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([]))]}}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
