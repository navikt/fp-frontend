import{a as d,w as E,B as c,m as g}from"./nb_NO-CsMiJenQ.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-C6FxBbOo.js";import"./FlyttReservasjonModal-CEuqBZTv.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-woyJ5Dbl.js";import{S as h}from"./SistBehandledeSaker-DvB1-DEz.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-71Y3iTbN.js";import"./iframe-Do5ZioTH.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-BTt573P-.js";import"./index.es-DuZT9Vom.js";import"./index.es-DaHaN1ul.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-BSheAS_r.js";import"./Modal-CBOTPIcQ.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-BlhuLyuV.js";import"./Tag-ChrVDOPC.js";import"./index.es-CJ7HfB3A.js";import"./message-DHnFEX_P.js";import"./VStack-4zLYDl5P.js";import"./useQuery-BlfzOYdp.js";import"./Table-DfK04Qr5.js";import"./ArrowsUpDown-C5PM4kGY.js";const D=u(g),X={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:13232323,behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
