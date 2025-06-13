import{a as p,L as i,H as c}from"./fplosSaksbehandlerApi-DrqWvl2Z.js";import"./FlyttReservasjonModal-BToxcsCs.js";import{w as l}from"./iframe-Bws3bu95.js";import{g as d}from"./withIntl-Bt0Rz11j.js";import{S as E}from"./SistBehandledeSaker-CPW32QXx.js";import{m as g}from"./nb_NO-BSp1OVhR.js";import"./index.es-CmOCzFp9.js";import"./index.es-Bwml7v1q.js";import"./Loader-BK_HnObf.js";import"./Modal-BvWUmwaz.js";import"./index-BY5qreuI.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-Ck61LRMw.js";import"./Tag-CUSSmyMF.js";import"./VStack-CEGFtULC.js";import"./index.es-zHyhEYNi.js";import"./message-Cle8p4Ck.js";import"./useQuery-IP0noD6B.js";import"./Table-CRH9uwYq.js";import"./ArrowsUpDown-Cq-Df74o.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,h=d(g),x={title:"saksstotte/SistBehandledeSaker",component:E,decorators:[h,l],args:{åpneFagsak:u("button-click")}},e={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([]))]}}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
