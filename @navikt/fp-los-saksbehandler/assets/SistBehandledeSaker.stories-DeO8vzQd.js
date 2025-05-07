import{a as d,w as E,B as c,m as g}from"./nb_NO-DdEEJ0B0.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-DuEer2SV.js";import"./FlyttReservasjonModal-BO16L4tt.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-Dr0OxAF4.js";import{S as h}from"./SistBehandledeSaker-MV4rN9X4.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-npBF7KHL.js";import"./iframe-Bh-PND6Y.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-TBwrcttu.js";import"./index.es-f2vrtfyg.js";import"./index.es-B2ska5t_.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-PoEJodIb.js";import"./Modal-SNN4cTvm.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-NnFrBgmU.js";import"./Tag-BtlcNjO4.js";import"./VStack-BP-tYRf3.js";import"./index.es-ZaDoPTJu.js";import"./message-Jt3BNJzv.js";import"./useQuery-D1W6OkMD.js";import"./Table-BvyM4qRp.js";import"./ArrowsUpDown-BKjfVuOY.js";const D=u(g),X={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
