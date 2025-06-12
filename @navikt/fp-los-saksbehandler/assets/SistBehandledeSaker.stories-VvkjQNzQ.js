import{a as p,L as i,H as c}from"./fplosSaksbehandlerApi-PAph43QV.js";import"./FlyttReservasjonModal-C5dT8ha8.js";import{w as l}from"./iframe-B1D1pV9u.js";import{g as d}from"./withIntl-t2Q3Sraj.js";import{S as E}from"./SistBehandledeSaker-BG-k2Nij.js";import{m as g}from"./nb_NO-DLS7tT1N.js";import"./index.es-DXWnYqE1.js";import"./index.es-egtfdZEU.js";import"./Loader-Cd5B1-KT.js";import"./Modal-DZ-W5KCz.js";import"./index-DtHGLxIc.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-BKul69dv.js";import"./Tag-D2gWS7qA.js";import"./VStack-C8zeWQkJ.js";import"./index.es-Dh1iFmq1.js";import"./message-174L90AR.js";import"./useQuery-DHhnToZO.js";import"./Table-DPLZ9NnD.js";import"./ArrowsUpDown-CitN1xWR.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,h=d(g),x={title:"saksstotte/SistBehandledeSaker",component:E,decorators:[h,l],args:{åpneFagsak:u("button-click")}},e={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([]))]}}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
