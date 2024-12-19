import{w as K,h as a,L as r,H as t}from"./withQueryClientProvider-D5rUA1vz.js";import{m as N}from"./nb_NO-CZSpk6bt.js";import{g as b}from"./withIntl-DXtOtJE7.js";import{L as w}from"./LeggTilSaksbehandlerForm-Buu91svP.js";import"./decorators-86JrGkCj.js";import"./index-DRjF_FHU.js";import"./Modal-B9osCInE.js";import"./index-rX-Bn4lm.js";import"./jsx-runtime-DR9Q75dM.js";import"./BasePrimitive-zpMbHS_U.js";import"./index.es-BU4tl1aP.js";import"./index.es-C9TXiEHC.js";import"./dayjs.min-CnNqAF5I.js";import"./index.es-Dx0W_TRK.js";import"./useMutation-Bl-NM7Qh.js";const T=b(N),o={brukerIdent:"R232323",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},z={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:w,decorators:[T,K],args:{valgtAvdelingEnhet:"1"}},s={parameters:{msw:{handlers:[a.post(r.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>t.json(o)),a.post(r.OPPRETT_NY_SAKSBEHANDLER,()=>new t(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[]}},e={parameters:{msw:{handlers:[a.post(r.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>t.json(o)),a.post(r.OPPRETT_NY_SAKSBEHANDLER,()=>new t(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}},n={parameters:{msw:{handlers:[a.post(r.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>new t(null,{status:200})),a.post(r.OPPRETT_NY_SAKSBEHANDLER,()=>new t(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}};var p,l,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(B=(_=n.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const G=["Default","AlleredeLagtTil","SaksbehandlerFinnesIkke"];export{e as AlleredeLagtTil,s as Default,n as SaksbehandlerFinnesIkke,G as __namedExportsOrder,z as default};
