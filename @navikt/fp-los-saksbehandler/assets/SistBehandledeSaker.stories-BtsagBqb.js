import{a as d,w as E,B as c,m as g}from"./nb_NO-CaJGfh7d.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-Dvnr_FAF.js";import"./FlyttReservasjonModal-kwEPKmQr.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-DP1HSQZm.js";import{S as h}from"./SistBehandledeSaker-DGXHRmyY.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-fw9u2oxP.js";import"./iframe-r_HfV9ZN.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-HroQ8w1X.js";import"./index.es-cMicy-DJ.js";import"./index.es-BI3F_jts.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-CUcBU52Z.js";import"./Modal-DqYxCqfR.js";import"./index-0bQSHhiP.js";import"./index-CQwh6Daz.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-U203gi9c.js";import"./Tag-DLDomj2R.js";import"./index.es-DgSRYrZF.js";import"./message-Bb-_nhL8.js";import"./VStack-BTnwBa-6.js";import"./useQuery-CQoaVGRJ.js";import"./Table-CJl0Lwii.js";import"./ArrowsUpDown-BHRwPG81.js";const D=u(g),X={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:13232323,behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
