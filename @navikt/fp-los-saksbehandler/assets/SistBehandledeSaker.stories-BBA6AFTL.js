import{a as d,w as E,B as c,m as g}from"./nb_NO-CN4ZWsPU.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-C6FxBbOo.js";import"./FlyttReservasjonModal-Crn-MOPu.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-D5wvjbFh.js";import{S as h}from"./SistBehandledeSaker-DE_lT2Mn.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-B26rKvPX.js";import"./iframe-C121DE88.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-CbeZlG6Y.js";import"./index.es-DD04PXBN.js";import"./index.es-BTxEqBKT.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-B30ZLReo.js";import"./Modal-fxZDDS-d.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-BznEkSGU.js";import"./Tag-DkqVz0MP.js";import"./index.es-XiP2WyPP.js";import"./message-cpW7Vr8Q.js";import"./VStack-uhqrGqFo.js";import"./useQuery-Cej7ztwV.js";import"./Table-O06dWj67.js";import"./ArrowsUpDown-CUeHCIxV.js";const D=u(g),X={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:13232323,behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
