import{a as d,w as E,B as c,m as g}from"./nb_NO-Bb9ahodp.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-4oezgadX.js";import"./FlyttReservasjonModal-D6z5Ybfx.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-o3HhZLhi.js";import{S as h}from"./SistBehandledeSaker-DvORzoYg.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-DImLezzp.js";import"./iframe-CWkrEQb5.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./dayjs.min-DkLNzaWO.js";import"./decorators-Bnaor6Ku.js";import"./index.es-Bk7QASNb.js";import"./index.es-BQChBZK5.js";import"./Loader-DP7OfJnd.js";import"./Modal-B2q02yNA.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-D-ipQBjQ.js";import"./Tag-_EL9kzDj.js";import"./VStack-C0zrd7Fd.js";import"./index.es-DJ7rLz-N.js";import"./message-Sp_E-lKi.js";import"./useQuery-J3gvHqn5.js";import"./Table-DHj7x4o5.js";import"./ArrowsUpDown-BXwKqSwg.js";const D=u(g),W={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
