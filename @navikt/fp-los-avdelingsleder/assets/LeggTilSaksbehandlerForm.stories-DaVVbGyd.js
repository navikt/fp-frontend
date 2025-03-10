import{h as e,L as s,H as r}from"./fplosAvdelingslederApi-B9tuhmca.js";import{w as E,m as g}from"./nb_NO-BG4Njvpr.js";import{g as u}from"./withIntl-CrF_Y39Y.js";import"./jsx-runtime-D_zvdyIk.js";import{L as A}from"./LeggTilSaksbehandlerForm-BH_hL4RW.js";import"./decorators-Bnaor6Ku.js";import"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-Bef3ooQN.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./BasePrimitive-_X68taQg.js";import"./v4-CtRu48qb.js";import"./entry-preview-C4q8Zqu6.js";import"./iframe-Co6_Jpym.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-duuaId12.js";import"./index-CXQShRbs.js";import"./index.es-DiIaoe7n.js";import"./index.es-CfTxKSzk.js";import"./dayjs.min-Cke173X9.js";import"./index.es-CE9irVsH.js";import"./useMutation-Cik_qr5g.js";const R=u(g),o={brukerIdent:"R232323",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},q={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:A,decorators:[R,E],args:{valgtAvdelingEnhet:"1"}},t={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>r.json(o)),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new r(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[]}},a={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>r.json(o)),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new r(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}},n={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>new r(null,{status:200})),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new r(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.post(LosUrl.SAKSBEHANDLER_SOK.replace('søk', 's%C3%B8k'), () => HttpResponse.json(saksbehandler)), http.post(LosUrl.OPPRETT_NY_SAKSBEHANDLER, () => new HttpResponse(null, {
        status: 200
      }))]
    }
  },
  args: {
    avdelingensSaksbehandlere: []
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var i,d,S;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.post(LosUrl.SAKSBEHANDLER_SOK.replace('søk', 's%C3%B8k'), () => HttpResponse.json(saksbehandler)), http.post(LosUrl.OPPRETT_NY_SAKSBEHANDLER, () => new HttpResponse(null, {
        status: 200
      }))]
    }
  },
  args: {
    avdelingensSaksbehandlere: [saksbehandler]
  }
}`,...(S=(d=a.parameters)==null?void 0:d.docs)==null?void 0:S.source}}};var c,k,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.post(LosUrl.SAKSBEHANDLER_SOK.replace('søk', 's%C3%B8k'), () => new HttpResponse(null, {
        status: 200
      })), http.post(LosUrl.OPPRETT_NY_SAKSBEHANDLER, () => new HttpResponse(null, {
        status: 200
      }))]
    }
  },
  args: {
    avdelingensSaksbehandlere: [saksbehandler]
  }
}`,...(h=(k=n.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const z=["Default","AlleredeLagtTil","SaksbehandlerFinnesIkke"];export{a as AlleredeLagtTil,t as Default,n as SaksbehandlerFinnesIkke,z as __namedExportsOrder,q as default};
