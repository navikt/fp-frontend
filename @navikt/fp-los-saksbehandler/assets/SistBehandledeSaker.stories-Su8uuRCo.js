import{a as p,L as i,H as c}from"./fplosSaksbehandlerApi-CVJT04HZ.js";import"./FlyttReservasjonModal-BC5_QVhd.js";import{w as l}from"./iframe-D5gt21PO.js";import{g as d}from"./withIntl-DUGshOIu.js";import{S as E}from"./SistBehandledeSaker-B1jLEZAj.js";import{m as g}from"./nb_NO-Cn9UTMYo.js";import"./index.es-Cghxu1oE.js";import"./index.es-CoA4ZD_x.js";import"./Loader-Cl2mnQon.js";import"./Modal-a3Lg1O_R.js";import"./index-szWamCQ5.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-XhgFDZ8a.js";import"./Tag-BRX3nRY2.js";import"./VStack-CwGp4ZqH.js";import"./index.es-BK2vFbfc.js";import"./message-BycedRya.js";import"./useQuery-CPdGRmrW.js";import"./Table-XorNTw9V.js";import"./ArrowsUpDown-7XuR4Frf.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,h=d(g),x={title:"saksstotte/SistBehandledeSaker",component:E,decorators:[h,l],args:{åpneFagsak:u("button-click")}},e={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323"}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>c.json([]))]}}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
