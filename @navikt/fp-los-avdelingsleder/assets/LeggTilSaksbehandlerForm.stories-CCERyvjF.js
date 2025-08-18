import{h as e,L as s,b as a}from"./fplosAvdelingslederApi-CTlEZJoX.js";import{g as l}from"./iframe-BzeQmYxL.js";import{g as p}from"./withIntl-EL1vXexo.js";import{L as d}from"./LeggTilSaksbehandlerForm-COmnG9FH.js";import{m}from"./nb_NO-WmSJRbIh.js";import"./Modal-iF-NC1Ka.js";import"./index-BC-zGoiF.js";import"./BasePrimitive-DSiSyuEW.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-CYEp9LP8.js";import"./index.es-DJzMUnww.js";import"./useMutation-5eegYUlc.js";const S=p(m),o={brukerIdent:"R232323",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},b={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:d,decorators:[S,l],args:{valgtAvdelingEnhet:"1"}},n={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>a.json(o)),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new a(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[]}},r={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>a.json(o)),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new a(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}},t={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>new a(null,{status:200})),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new a(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
