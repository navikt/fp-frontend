import{h as e,L as s,b as a}from"./fplosAvdelingslederApi-6iDe1Omb.js";import{g as E}from"./iframe-BIszBs4T.js";import{g}from"./withIntl-p8CA9sK9.js";import{L as u}from"./LeggTilSaksbehandlerForm-ZwSFHHzO.js";import{m as A}from"./nb_NO-l-EoPVZj.js";import"./Modal-9cQTGYbY.js";import"./index-CKVBZz-j.js";import"./BasePrimitive-Beyi6bEg.js";import"./index.es-npK9Cfgh.js";import"./index.es-Djp4eeay.js";import"./index.es-KNh61wIP.js";import"./useMutation-BQgu33qc.js";const R=g(A),o={brukerIdent:"R232323",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},P={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:u,decorators:[R,E],args:{valgtAvdelingEnhet:"1"}},n={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>a.json(o)),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new a(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[]}},r={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>a.json(o)),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new a(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}},t={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>new a(null,{status:200})),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new a(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}};var l,p,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,S,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(i=(S=r.parameters)==null?void 0:S.docs)==null?void 0:i.source}}};var c,k,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(k=t.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const f=["Default","AlleredeLagtTil","SaksbehandlerFinnesIkke"];export{r as AlleredeLagtTil,n as Default,t as SaksbehandlerFinnesIkke,f as __namedExportsOrder,P as default};
