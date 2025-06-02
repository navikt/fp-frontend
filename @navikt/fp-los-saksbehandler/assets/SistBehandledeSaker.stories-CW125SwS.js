import{a as d,w as E,B as c}from"./withThemeDecorator-CqS9VlII.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-4oezgadX.js";import"./FlyttReservasjonModal-Bpv5h4gW.js";import"./jsx-runtime-D_zvdyIk.js";import{g}from"./withIntl-BOr52Iju.js";import{S as u}from"./SistBehandledeSaker-QRI0ry4D.js";import{m as h}from"./nb_NO-DeRyi5eh.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-DXcfvIvu.js";import"./iframe-BLfgU8V1.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-DrTQwIjS.js";import"./index.es-DgE6OmkC.js";import"./Loader-BF9QQrpn.js";import"./Modal-DeTNuyfk.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-B_9qa3vZ.js";import"./Tag-BRkmuYHH.js";import"./VStack-aGt2RIjI.js";import"./index.es-N1KsZMOk.js";import"./message-CKqu3ctF.js";import"./useQuery-CePrbdpe.js";import"./Table-Cp76KVzX.js";import"./ArrowsUpDown-nc9qzkHk.js";const D=g(h),W={title:"saksstotte/SistBehandledeSaker",component:u,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:"13232323",behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
