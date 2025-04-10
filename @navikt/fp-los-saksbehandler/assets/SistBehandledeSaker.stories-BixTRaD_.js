import{a as d,w as E,B as c,m as g}from"./nb_NO-Ccct7qvy.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-Dvnr_FAF.js";import"./FlyttReservasjonModal-BGgyeCE0.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-wPfqk9ef.js";import{S as h}from"./SistBehandledeSaker-B_3VnhTh.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-kgFBf5wx.js";import"./iframe-DafhTVlf.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-D5dWsDk1.js";import"./index.es-D9h0H0hZ.js";import"./index.es-BYnpFDuL.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-TmOelP2z.js";import"./Modal-Qvq1NAYI.js";import"./index-0bQSHhiP.js";import"./index-CQwh6Daz.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-u8L6a2Gv.js";import"./Tag-CuOPi9FA.js";import"./index.es-qqtLW0ne.js";import"./message-DZxLvQKL.js";import"./VStack-D2snoydH.js";import"./useQuery-Cl7MGYFN.js";import"./Table-CMg8olFl.js";import"./ArrowsUpDown-Lwo4rHy4.js";const D=u(g),X={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:13232323,behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
