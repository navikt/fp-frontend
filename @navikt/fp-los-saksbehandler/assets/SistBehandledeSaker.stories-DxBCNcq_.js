import{a as d,w as E,B as c,m as g}from"./nb_NO-DXuZpwvA.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-C6FxBbOo.js";import"./FlyttReservasjonModal-DAjdBA81.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-PdHeGbO3.js";import{S as h}from"./SistBehandledeSaker-BrVNwFNN.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-BwwzheJK.js";import"./iframe-DiMt0KFx.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-CXK2YioG.js";import"./index.es-BaV1zFyq.js";import"./index.es-ClwW4EUb.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-BiNbCtWk.js";import"./Modal-BPoqHm29.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-CvRLEy6H.js";import"./Tag-BPto_FBI.js";import"./index.es-CvZShvJo.js";import"./message-BP4r06K8.js";import"./VStack-a-3uwZHN.js";import"./useQuery-BzO1ituX.js";import"./Table-uyIxd-9g.js";import"./ArrowsUpDown-CHD3uyAZ.js";const D=u(g),X={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:13232323,behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
