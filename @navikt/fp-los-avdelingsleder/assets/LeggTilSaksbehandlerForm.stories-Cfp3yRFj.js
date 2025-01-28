import{h as r,L as a,H as t}from"./fplosAvdelingslederApi-ByBFIqlo.js";import{w as K,m as N}from"./nb_NO-B4p7h2ZR.js";import{g as b}from"./withIntl-CwsmLzvd.js";import{L as w}from"./LeggTilSaksbehandlerForm-BKBa167X.js";import"./decorators-DIzpaN6C.js";import"./index-B5OHeJSP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-BQwjsmca.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./jsx-runtime-CLpGMVip.js";import"./BasePrimitive-DJrLZ3qF.js";import"./index.es-D6ktstkZ.js";import"./index.es-1l7GYZKP.js";import"./dayjs.min-CJilavqB.js";import"./index.es-CXRhogPg.js";import"./useMutation-DW66zKiQ.js";const T=b(N),o={brukerIdent:"R232323",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},J={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:w,decorators:[T,K],args:{valgtAvdelingEnhet:"1"}},s={parameters:{msw:{handlers:[r.post(a.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>t.json(o)),r.post(a.OPPRETT_NY_SAKSBEHANDLER,()=>new t(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[]}},e={parameters:{msw:{handlers:[r.post(a.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>t.json(o)),r.post(a.OPPRETT_NY_SAKSBEHANDLER,()=>new t(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}},n={parameters:{msw:{handlers:[r.post(a.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>new t(null,{status:200})),r.post(a.OPPRETT_NY_SAKSBEHANDLER,()=>new t(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}};var p,l,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,S,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(S=e.parameters)==null?void 0:S.docs)==null?void 0:c.source}}};var i,h,E;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(E=(h=n.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var k,u,A;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(A=(u=s.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var R,g,L;e.parameters={...e.parameters,docs:{...(R=e.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(g=e.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var H,_,B;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(B=(_=n.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const M=["Default","AlleredeLagtTil","SaksbehandlerFinnesIkke"];export{e as AlleredeLagtTil,s as Default,n as SaksbehandlerFinnesIkke,M as __namedExportsOrder,J as default};
