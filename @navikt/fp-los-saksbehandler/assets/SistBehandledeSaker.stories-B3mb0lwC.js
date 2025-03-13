import{a as d,w as E,B as c,m as g}from"./nb_NO-5WXHZZLd.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-C6FxBbOo.js";import"./FlyttReservasjonModal-CyWu18ep.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-BNnJ2CJ5.js";import{S as h}from"./SistBehandledeSaker-DW6MYQ1h.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-CWabpbXV.js";import"./iframe-DLHaFeqC.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-B9CJAs82.js";import"./index.es-DGIvTq5Z.js";import"./index.es-D8ZcPUnJ.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-DFef0l7x.js";import"./Modal-DHEcoxAk.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-D7ydJPGM.js";import"./Tag-CwfoPSJL.js";import"./index.es-CZGE5L3T.js";import"./message-DHux8oBJ.js";import"./VStack-B9yelkig.js";import"./useQuery-BvoE76hc.js";import"./Table-CiwPePV9.js";import"./ArrowsUpDown-C6GAQUdJ.js";const D=u(g),X={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:13232323,behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([{
        id: 1,
        personnummer: '334342323',
        navn: 'Espen Utvikler',
        saksnummer: 13232323,
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
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Y=["Default","IngenBehandlinger"];export{t as Default,r as IngenBehandlinger,Y as __namedExportsOrder,X as default};
