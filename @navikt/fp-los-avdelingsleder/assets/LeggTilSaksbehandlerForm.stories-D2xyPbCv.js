import{h as e,L as s,b as a}from"./fplosAvdelingslederApi-Dy653Ku3.js";import{g as l}from"./iframe-f-7EvuRD.js";import{g as p}from"./withIntl-BE6cFErS.js";import{L as d}from"./LeggTilSaksbehandlerForm-D7a3iP-P.js";import{m}from"./nb_NO-C4DeeY-a.js";import"./BasePrimitive-FfroG3S2.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-CS62hXhn.js";import"./index.es-N3Vy7UuC.js";import"./Modal-BiKe3c-S.js";import"./index-BB8_bpzw.js";import"./useMutation-BapcIXxt.js";const S=p(m),o={brukerIdent:"R232323",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},b={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:d,decorators:[S,l],args:{valgtAvdelingEnhet:"1"}},n={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>a.json(o)),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new a(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[]}},r={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>a.json(o)),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new a(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}},t={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>new a(null,{status:200})),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new a(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const B=["Default","AlleredeLagtTil","SaksbehandlerFinnesIkke"];export{r as AlleredeLagtTil,n as Default,t as SaksbehandlerFinnesIkke,B as __namedExportsOrder,b as default};
