import{a as d,w as E,B as c,m as g}from"./nb_NO-B9oRhkJq.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-Dvnr_FAF.js";import"./FlyttReservasjonModal-e4I0mObO.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-B6n4uXgm.js";import{S as h}from"./SistBehandledeSaker-Cn6UwrxM.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-CoYbp3p5.js";import"./iframe-DAjlaDrD.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-BSDdynCp.js";import"./index.es-DhwogdGd.js";import"./index.es-LKel6erH.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-D9eSPMDy.js";import"./Modal-vnJm0mK-.js";import"./index-0bQSHhiP.js";import"./index-CQwh6Daz.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-LApgJrtl.js";import"./Tag-BhXcvU62.js";import"./index.es-CFyhmttv.js";import"./message-DdKJAMud.js";import"./VStack-D55czj1c.js";import"./useQuery-LoYmyz7z.js";import"./Table-BxYqnzEB.js";import"./ArrowsUpDown-CmcWSHJf.js";const D=u(g),X={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:13232323,behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
