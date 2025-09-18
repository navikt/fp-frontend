import{V as b,H as E,I as B,J as j,L as a,h as t,b as l}from"./fplosAvdelingslederApi-LUQNjuXg.js";import{c as w,u as y,r as f,j as e,t as H,w as F}from"./iframe-DLd_DBZs.js";import{L as K,M as i,B as D,g as P,m as O}from"./nb_NO-D0enkg6C.js";import{a as C,N as M,P as U}from"./index.es-y-_7UeEC.js";import{u as L}from"./useMutation-BCZ88ieO.js";import{B as S}from"./Modal-aWDwC7hB.js";import"./BasePrimitive-DyS7Lpdm.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-CpdQz3C3.js";import"./index-DLpuGz11.js";const q="_button_1e008_1",z={button:q},A=({valgtAvdelingEnhet:v,avdelingensSaksbehandlere:R})=>{const T=w(),g=y(),r=C(),{mutate:_,data:s,status:c,reset:h}=L({mutationFn:n=>B(n.brukerIdent)}),{mutate:N,isPending:o}=L({mutationFn:n=>j(n.brukerIdent,n.avdelingEnhet),onSuccess:()=>{h(),r.reset(),T.invalidateQueries({queryKey:[a.SAKSBEHANDLERE_FOR_AVDELING]})}}),k=R.some(n=>s&&n.brukerIdent.toLowerCase()===s.brukerIdent.toLowerCase()),I=()=>{s&&N({brukerIdent:s.brukerIdent,avdelingEnhet:v})},x=f.useMemo(()=>c==="success"&&!s?g.formatMessage({id:"LeggTilSaksbehandlerForm.FinnesIkke"}):s?k?`${s.navn} (${g.formatMessage({id:"LeggTilSaksbehandlerForm.FinnesAllerede"})})`:s.navn:"",[c,s,k]);return e.jsx(M,{formMethods:r,onSubmit:n=>_({brukerIdent:n.brukerIdent}),children:e.jsxs(b,{gap:"space-16",children:[e.jsx(K,{size:"small",children:e.jsx(i,{id:"LeggTilSaksbehandlerForm.LeggTil"})}),e.jsxs(E,{gap:"space-16",children:[e.jsx(U,{name:"brukerIdent",control:r.control,label:g.formatMessage({id:"LeggTilSaksbehandlerForm.Brukerident"}),validate:[H]}),e.jsx("div",{className:z.button,children:e.jsx(S,{size:"small",variant:"secondary",loading:r.formState.isSubmitting,disabled:r.formState.isSubmitting||o,tabIndex:0,children:e.jsx(i,{id:"LeggTilSaksbehandlerForm.Sok"})})})]}),c==="success"&&e.jsxs(b,{gap:"space-8",children:[e.jsx(D,{size:"small",children:x}),e.jsxs(E,{gap:"space-16",children:[e.jsx(S,{size:"small",variant:"primary",autoFocus:!0,onClick:()=>I(),loading:o,disabled:o||k||!s,type:"button",children:e.jsx(i,{id:"LeggTilSaksbehandlerForm.LeggTilIListen"})}),e.jsx(S,{size:"small",variant:"secondary",tabIndex:0,disabled:o,onClick:()=>{h(),r.reset()},type:"button",children:e.jsx(i,{id:"LeggTilSaksbehandlerForm.Nullstill"})})]})]})]})})};A.__docgenInfo={description:"",methods:[],displayName:"LeggTilSaksbehandlerForm",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},avdelingensSaksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"ansattAvdeling",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}>`}],raw:"SaksbehandlerProfil[]"},description:""}}};const Y=P(O),p={brukerIdent:"R232323",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},ne={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:A,decorators:[Y,F],args:{valgtAvdelingEnhet:"1"}},d={parameters:{msw:{handlers:[t.post(a.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>l.json(p)),t.post(a.OPPRETT_NY_SAKSBEHANDLER,()=>new l(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[]}},u={parameters:{msw:{handlers:[t.post(a.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>l.json(p)),t.post(a.OPPRETT_NY_SAKSBEHANDLER,()=>new l(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[p]}},m={parameters:{msw:{handlers:[t.post(a.SAKSBEHANDLER_SOK.replace("søk","s%C3%B8k"),()=>new l(null,{status:200})),t.post(a.OPPRETT_NY_SAKSBEHANDLER,()=>new l(null,{status:200}))]}},args:{avdelingensSaksbehandlere:[p]}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ae=["Default","AlleredeLagtTil","SaksbehandlerFinnesIkke"];export{u as AlleredeLagtTil,d as Default,m as SaksbehandlerFinnesIkke,ae as __namedExportsOrder,ne as default};
