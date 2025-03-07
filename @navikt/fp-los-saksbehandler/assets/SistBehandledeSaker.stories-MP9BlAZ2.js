import{a as d,w as E,B as c,m as g}from"./nb_NO-Bu_UlwUo.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-C2ujEe17.js";import"./FlyttReservasjonModal-Cf8X5PuK.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-C-MeNraW.js";import{S as h}from"./SistBehandledeSaker-DvYFxlfB.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-WM9ojKLj.js";import"./iframe-0Sb3ummH.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./decorators-DIzpaN6C.js";import"./index.es-DLTJZrqI.js";import"./index.es-BkiTe-iQ.js";import"./index.es-D4-E1-fA.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-CddJycI5.js";import"./ChevronDown-CxGCMIaK.js";import"./Tag-DJ6cwreo.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./Theme-DdwBPMHa.js";import"./composeEventHandlers-DeH74NdU.js";import"./Modal-D0ko4Ji8.js";import"./index.es-BcWumzrS.js";import"./VStack-Dl7dqQV-.js";import"./useQuery-K1BN7cAU.js";import"./Table-AQ5MYCdA.js";import"./ArrowsUpDown-B9fpxNpd.js";import"./useControllableState-CKUnHN0n.js";const D=u(g),W={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:13232323,behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
