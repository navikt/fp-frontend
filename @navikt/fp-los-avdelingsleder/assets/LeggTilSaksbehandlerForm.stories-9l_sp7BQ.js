import{h as e,L as s,b as a}from"./fplosAvdelingslederApi-CWVGlM9T.js";import{g as l}from"./iframe-yH1fHU7Q.js";import{g as p}from"./withIntl-BrUORKG6.js";import{L as d}from"./LeggTilSaksbehandlerForm-CJsrummS.js";import{m}from"./nb_NO-CYIn4FMC.js";import"./Modal-C_OpF3jZ.js";import"./index-DcVNjzNM.js";import"./BasePrimitive-DajsECfF.js";import"./index.es-CWwaXhcK.js";import"./index.es-fOBpEy5s.js";import"./useMutation-R0X0r_wF.js";const S=p(m),o={brukerIdent:"R232323",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},H={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:d,decorators:[S,l],args:{valgtAvdelingEnhet:"1"}},n={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>a.json(o)),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new a(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[]}},r={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>a.json(o)),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new a(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}},t={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>new a(null,{status:200})),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new a(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const b=["Default","AlleredeLagtTil","SaksbehandlerFinnesIkke"];export{r as AlleredeLagtTil,n as Default,t as SaksbehandlerFinnesIkke,b as __namedExportsOrder,H as default};
