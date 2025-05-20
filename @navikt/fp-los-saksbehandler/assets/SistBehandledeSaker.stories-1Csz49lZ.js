import{a as d,w as E,B as c,m as g}from"./nb_NO-PJw1SMOb.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-Db1puaAh.js";import"./FlyttReservasjonModal-Bj5x8xYo.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-C_HZNxeW.js";import{S as h}from"./SistBehandledeSaker-Dr-l4TW_.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-C5Eu3MZJ.js";import"./iframe-CEDARFxN.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./dayjs.min-DkLNzaWO.js";import"./decorators-Bnaor6Ku.js";import"./index.es-CnQI56LT.js";import"./index.es-CAC1XPDx.js";import"./Loader-hzd1Ub3O.js";import"./Modal-By28F3Vb.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-CSwBiZrA.js";import"./Tag-CvRmHFWC.js";import"./VStack-DQS0cWsb.js";import"./index.es-o045TLT_.js";import"./message-DXlD9FOu.js";import"./useQuery-B1ioUh9E.js";import"./Table-Baz9pB3s.js";import"./ArrowsUpDown-B_9T_Ja8.js";const D=u(g),W={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([{
        id: 1,
        personnummer: '334342323',
        navn: 'Espen Utvikler',
        saksnummer: '13232323',
        behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES
      } as Oppgave]))]
    }
  }
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var n,a,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([]))]
    }
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const X=["Default","IngenBehandlinger"];export{t as Default,r as IngenBehandlinger,X as __namedExportsOrder,W as default};
