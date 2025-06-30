import{a as p,L as i,H as c}from"./fplosSaksbehandlerApi-8uILIboq.js";import"./FlyttReservasjonModal-C-_6JHvS.js";import{w as l}from"./iframe-DvFVpOsn.js";import{g as d}from"./withIntl-BLZOqCtF.js";import{S as E}from"./SistBehandledeSaker-BjFnppeM.js";import{m as g}from"./nb_NO-DeYUK85K.js";import"./index.es-B_PzZrxL.js";import"./index.es-COfilHy9.js";import"./Loader-CMQRyVj1.js";import"./Modal-CELR8D0W.js";import"./index-e2Fm8Xp1.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-B8NFIlot.js";import"./Tag-Bb6B97LN.js";import"./VStack-BGXEyZTt.js";import"./index.es-DfzTUs2y.js";import"./message-Zvy95iev.js";import"./useQuery-BK7PeVG7.js";import"./Table-BgtJ232w.js";import"./ArrowsUpDown-BWUHFlAO.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,h=d(g),x={title:"saksstotte/SistBehandledeSaker",component:E,decorators:[h,l],args:{åpneFagsak:u("button-click")}},e={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([]))]}}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
