import{a as d,w as E,B as c,m as g}from"./nb_NO-DWNE31-V.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-Cre-4QqW.js";import"./FlyttReservasjonModal-DR-grkU3.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-DwVD0z3-.js";import{S as h}from"./SistBehandledeSaker-kMcYWBdL.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./react-CW7BwjjX.js";import"./iframe-DccoT9Gw.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./decorators-DIzpaN6C.js";import"./index.es-DnPrejCa.js";import"./index.es-C_rfKMWM.js";import"./index.es-D3FSeQNG.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-BEUEYYSz.js";import"./ChevronDown-BmshD2bD.js";import"./Tag-DBYrLKdR.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./Theme-YhT-kHwE.js";import"./composeEventHandlers-DeH74NdU.js";import"./Modal-pQ8dwEsS.js";import"./index.es-DMpIgZpl.js";import"./VStack-ChXOQS5S.js";import"./useQuery-DtoCMJ0c.js";import"./Table-BQgRrE4Z.js";import"./ArrowsUpDown-DJb9rXXD.js";import"./useControllableState-CHQ7MfKR.js";const D=u(g),W={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:13232323,behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const X=["Default","IngenBehandlinger"];export{t as Default,r as IngenBehandlinger,X as __namedExportsOrder,W as default};
