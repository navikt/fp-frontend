import{h as e,L as s,H as r}from"./fplosAvdelingslederApi-BO5pEf1p.js";import{w as E,m as g}from"./nb_NO-rS0iM7cq.js";import{g as u}from"./withIntl-1U6WA86B.js";import"./jsx-runtime-D_zvdyIk.js";import{L as A}from"./LeggTilSaksbehandlerForm-DYTVMIxi.js";import"./decorators-DIzpaN6C.js";import"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-CA5_Wq6T.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./BasePrimitive-COpAD2BK.js";import"./v4-CtRu48qb.js";import"./entry-preview-14EzjxYR.js";import"./iframe-vXRHLQiO.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./index.es-BHds3jf0.js";import"./index.es-BVz5wueD.js";import"./dayjs.min-Cke173X9.js";import"./index.es-C_NsuSgm.js";import"./useMutation-s3I7spll.js";const R=u(g),o={brukerIdent:"R232323",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},y={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:A,decorators:[R,E],args:{valgtAvdelingEnhet:"1"}},a={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>r.json(o)),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new r(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[]}},t={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>r.json(o)),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new r(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}},n={parameters:{msw:{handlers:[e.post(s.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>new r(null,{status:200})),e.post(s.OPPRETT_NY_SAKSBEHANDLER,()=>new r(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[o]}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,i,S;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(S=(i=t.parameters)==null?void 0:i.docs)==null?void 0:S.source}}};var c,k,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(k=n.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const Q=["Default","AlleredeLagtTil","SaksbehandlerFinnesIkke"];export{t as AlleredeLagtTil,a as Default,n as SaksbehandlerFinnesIkke,Q as __namedExportsOrder,y as default};
