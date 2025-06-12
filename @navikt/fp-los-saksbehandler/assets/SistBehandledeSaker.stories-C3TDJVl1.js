import{a as p,L as i,H as c}from"./fplosSaksbehandlerApi-P9I5UXps.js";import"./FlyttReservasjonModal-DUFCadFR.js";import{w as l}from"./iframe-C2Bmoqpo.js";import{g as d}from"./withIntl-BHIQfUJk.js";import{S as E}from"./SistBehandledeSaker-DZGvv1Ey.js";import{m as g}from"./nb_NO-LpCgDUxH.js";import"./index.es-B3kfqTGZ.js";import"./index.es-BujUic_-.js";import"./Loader-BnB4ugVX.js";import"./Modal-DeetvLKW.js";import"./index-92Pmthch.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-CVXhaUtN.js";import"./Tag-Deuonrqi.js";import"./VStack-DVuexD08.js";import"./index.es-CDdrYzbV.js";import"./message-DANWFqkS.js";import"./useQuery-Bm8-Iqrx.js";import"./Table-BzJgftmq.js";import"./ArrowsUpDown-DebYQw09.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,h=d(g),x={title:"saksstotte/SistBehandledeSaker",component:E,decorators:[h,l],args:{åpneFagsak:u("button-click")}},e={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([]))]}}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
