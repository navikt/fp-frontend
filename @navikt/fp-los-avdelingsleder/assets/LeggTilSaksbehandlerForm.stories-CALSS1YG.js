import{h as r,L as a,H as t}from"./fplosAvdelingslederApi-nAlNaSOl.js";import{w as K,m as N}from"./nb_NO-BADq5HhL.js";import{g as b}from"./withIntl-DoLcYSo_.js";import"./jsx-runtime-CLpGMVip.js";import{L as w}from"./LeggTilSaksbehandlerForm-694YmZRA.js";import"./decorators-DIzpaN6C.js";import"./index-B5OHeJSP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-B9yGOhT9.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./BasePrimitive-C47yylm6.js";import"./v4-CtRu48qb.js";import"./react-DMRq2bIi.js";import"./iframe-CnV2AE8c.js";import"./chunk-XP5HYGXS-DH4vAeCa.js";import"./index.es-C2I1dMRy.js";import"./index.es-CcdR6muW.js";import"./dayjs.min-CJilavqB.js";import"./index.es-Cr1J-d3S.js";import"./useMutation-B9gzjmzk.js";const T=b(N),o={brukerIdent:"R232323",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},X={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:w,decorators:[T,K],args:{valgtAvdelingEnhet:"1"}},s={parameters:{msw:{handlers:[r.post(a.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>t.json(o)),r.post(a.OPPRETT_NY_SAKSBEHANDLER,()=>new t(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[]}},e={parameters:{msw:{handlers:[r.post(a.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>t.json(o)),r.post(a.OPPRETT_NY_SAKSBEHANDLER,()=>new t(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}},n={parameters:{msw:{handlers:[r.post(a.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>new t(null,{status:200})),r.post(a.OPPRETT_NY_SAKSBEHANDLER,()=>new t(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}};var p,l,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,S,i;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(i=(S=e.parameters)==null?void 0:S.docs)==null?void 0:i.source}}};var c,h,E;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(B=(_=n.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const Z=["Default","AlleredeLagtTil","SaksbehandlerFinnesIkke"];export{e as AlleredeLagtTil,s as Default,n as SaksbehandlerFinnesIkke,Z as __namedExportsOrder,X as default};
