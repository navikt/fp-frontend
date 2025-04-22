import{a as d,w as E,B as c,m as g}from"./nb_NO-BINysNO1.js";import{h as p,L as i,H as l}from"./fplosSaksbehandlerApi-fXMdTMme.js";import"./FlyttReservasjonModal-lNNuyTjZ.js";import"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./withIntl-DreO0MLq.js";import{S as h}from"./SistBehandledeSaker-DKx7Hpz-.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-BBN4w01v.js";import"./iframe-AB385kF4.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-HWUqL1kd.js";import"./index.es-Bhe1nRDy.js";import"./index.es-CHWitGNm.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-Bj3idDJ2.js";import"./Modal-C7Sb_ATB.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-BykBb7fg.js";import"./Tag-DkKJ4WY1.js";import"./index.es-4SLglQdj.js";import"./message-DsSzbO_6.js";import"./VStack-B_0nwpc-.js";import"./useQuery-Dt2bysUB.js";import"./Table-Btn-INBl.js";import"./ArrowsUpDown-Bo_zmanz.js";const D=u(g),X={title:"saksstotte/SistBehandledeSaker",component:h,decorators:[D,E],args:{åpneFagsak:d("button-click")}},t={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([{id:1,personnummer:"334342323",navn:"Espen Utvikler",saksnummer:13232323,behandlingStatus:c.BEHANDLING_UTREDES}]))]}}},r={parameters:{msw:{handlers:[p.get(i.BEHANDLEDE_OPPGAVER,()=>l.json([]))]}}};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
