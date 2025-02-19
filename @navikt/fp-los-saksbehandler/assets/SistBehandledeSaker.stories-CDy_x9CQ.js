import{a as d,w as E,B as c,m as g}from"./nb_NO-1wNYONpV.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-Cre-4QqW.js";import"./FlyttReservasjonModal-Db-5GO_4.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-Dav61MnK.js";import{S as h}from"./SistBehandledeSaker-BkcpvlSc.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-2YL1VKL1.js";import"./iframe-dutA0-H_.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./decorators-DIzpaN6C.js";import"./index.es-DfnsPbm5.js";import"./index.es-DAXpyWO7.js";import"./index.es-Ctu7TYae.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-BWx0LlBp.js";import"./ChevronDown-CBf-GhMm.js";import"./Tag-DtVcfYKZ.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./Theme-YS9S7eNX.js";import"./composeEventHandlers-DeH74NdU.js";import"./Modal-B8yA2eW2.js";import"./index.es-C8sTaj5i.js";import"./VStack-BxOuii3h.js";import"./useQuery-DB1KDhtT.js";import"./Table-Dv4yBcaA.js";import"./ArrowsUpDown-DuUjpeY3.js";import"./useControllableState-Bk7wZS-1.js";const D=u(g),W={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:13232323,behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
