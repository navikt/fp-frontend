import{h as e,L as s,H as r}from"./fplosAvdelingslederApi-CMvT2NFo.js";import{w as E,m as g}from"./nb_NO-Zn1evt8A.js";import{g as u}from"./withIntl-C7BRtDoD.js";import"./jsx-runtime-D_zvdyIk.js";import{L as A}from"./LeggTilSaksbehandlerForm-B73Ws9Qk.js";import"./decorators-Bnaor6Ku.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-CD1pXkr5.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./BasePrimitive-CoXUgQFZ.js";import"./v4-CtRu48qb.js";import"./entry-preview-19WQk05u.js";import"./iframe-Ql_URzay.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./index.es-Du15LclO.js";import"./index.es-sot-SC6s.js";import"./dayjs.min-Cke173X9.js";import"./index.es-DOaVvru_.js";import"./useMutation-VtXikLYo.js";const R=u(g),o={brukerIdent:"R232323",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},q={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:A,decorators:[R,E],args:{valgtAvdelingEnhet:"1"}},t={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>r.json(o)),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new r(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[]}},a={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>r.json(o)),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new r(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}},n={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>new r(null,{status:200})),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new r(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
