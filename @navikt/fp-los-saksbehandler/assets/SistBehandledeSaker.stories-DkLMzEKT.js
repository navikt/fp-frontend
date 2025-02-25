import{a as d,w as E,B as c,m as g}from"./nb_NO-Dyz0idFD.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-Cre-4QqW.js";import"./FlyttReservasjonModal-D-bCwybi.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-BLNgHvX2.js";import{S as h}from"./SistBehandledeSaker-cvRkK0Hv.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-Cu0rN3ei.js";import"./iframe-CskVBG-j.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./decorators-DIzpaN6C.js";import"./index.es-C5YJR-h9.js";import"./index.es-CJlzWoHQ.js";import"./index.es-CsAIFIFj.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-C8Kqcmxw.js";import"./ChevronDown-CqII5Z49.js";import"./Tag-DxOXoKyL.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./Theme-secqtrOz.js";import"./composeEventHandlers-DeH74NdU.js";import"./Modal-Hy0Vor77.js";import"./index.es-Cfgj02un.js";import"./VStack-BaezplMe.js";import"./useQuery-IBTYbPZQ.js";import"./Table-JdgKO8Iw.js";import"./ArrowsUpDown-B3A6ZyJZ.js";import"./useControllableState-OKXvv7rx.js";const D=u(g),W={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:13232323,behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
