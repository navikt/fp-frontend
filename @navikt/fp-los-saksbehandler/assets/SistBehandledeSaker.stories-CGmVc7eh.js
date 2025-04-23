import{a as d,w as E,B as c,m as g}from"./nb_NO-Bd9jQ-TK.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-fXMdTMme.js";import"./FlyttReservasjonModal-BE5I1srQ.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-CXhTWqcq.js";import{S as h}from"./SistBehandledeSaker-DrPCb7du.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-BqRXpyA3.js";import"./iframe-DOl6xNxV.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-BfGWZQOo.js";import"./index.es-D0fGL3Z4.js";import"./index.es-BneQa1uA.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-CJlpOkdb.js";import"./Modal-BD_iSwZD.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-jrIIc9cj.js";import"./Tag-C5I-DDVT.js";import"./index.es-CtEq9r5y.js";import"./message-DWGdgazA.js";import"./VStack-B6_KLdcs.js";import"./useQuery-BsIHh3UM.js";import"./Table-BT9Aa-S_.js";import"./ArrowsUpDown-43FYQceI.js";const D=u(g),X={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
