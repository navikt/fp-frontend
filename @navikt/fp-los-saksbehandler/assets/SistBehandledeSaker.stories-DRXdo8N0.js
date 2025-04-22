import{a as d,w as E,B as c,m as g}from"./nb_NO-5E-cig4S.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-fXMdTMme.js";import"./FlyttReservasjonModal-CZAZnQ14.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-DJAFpe2k.js";import{S as h}from"./SistBehandledeSaker-aNYmZ-Ws.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-CFHGN5Av.js";import"./iframe-DBVd8Kkh.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-Duw5n6lh.js";import"./index.es-zBSGS1r2.js";import"./index.es-BJsLa5X3.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-CCiyS6GU.js";import"./Modal-CngpGZwb.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-BWWcPDGg.js";import"./Tag-BEd4HQ6u.js";import"./index.es-DWwjCLhk.js";import"./message-PUDfnSPg.js";import"./VStack-DNfP_2pd.js";import"./useQuery-DVNEewSd.js";import"./Table-LS6FMEv_.js";import"./ArrowsUpDown-B9GeZIYU.js";const D=u(g),X={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Y=["Default","IngenBehandlinger"];export{t as Default,r as IngenBehandlinger,Y as __namedExportsOrder,X as default};
