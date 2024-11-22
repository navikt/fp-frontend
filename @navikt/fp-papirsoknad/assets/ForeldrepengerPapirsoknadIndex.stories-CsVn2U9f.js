import{u as $,K as f,$ as z,M as C,O as F,F as t,I as h,V as Q,a as E,A as T,D as W,b as Z,R as ee,c as L,d as re,P as ne,e as o,f as P,B as ae,S as se,L as te,r as oe,g as ie,T as de,h as me,i as ue,j as A,k as l,l as p}from"./BehovForTilretteleggingPanel-B_s46QE_.js";import{b as le,w as pe,m as ge}from"./nb_NO-DIJMf3NU.js";import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{r as ke}from"./index-DRjF_FHU.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DN4LN79F.js";import"./index-rX-Bn4lm.js";const c="omsorg",R="frilans",ye=e=>({[R]:E.buildInitialValues(),...T.buildInitialValues(e),...h.buildInitialValues(),[c]:{},...F.buildInitialValues(),...P.buildInitialValues()}),ve=(e,a)=>{let n=e;return e.rettigheter===oe.IKKE_RELEVANT&&(n=le(e,"rettigheter")),{...F.transformValues(n),[c]:L.transformValues(n[c]),[ie]:T.transformValues(n,a),[de]:P.transformValues(n),[R]:E.transformValues(n[R])}},K=({readOnly:e,soknadData:a,alleKodeverk:n,onSubmit:g,onSubmitUfullstendigsoknad:k,fagsakPersonnummer:y,erEndringssøknad:v})=>{const s=$({defaultValues:ke.useMemo(()=>ye(n[f.ARBEID_TYPE]),[])}),G=n[f.ARBEID_TYPE],Y=s.watch("sokerHarAleneomsorg"),w=s.watch("denAndreForelderenHarRettPaForeldrepenger"),B=!Y&&w!==!1,J=s.watch("foedselsDato"),U=s.watch("mottattDato");return r.jsxs(z,{formMethods:s,onSubmit:X=>g(ve(X,G)),children:[r.jsx(C,{readOnly:e}),r.jsx(F,{readOnly:e,erAdopsjon:a.getFamilieHendelseType()!==t.ADOPSJON,alleKodeverk:n,mottattDato:U}),r.jsx(h,{readOnly:e,alleKodeverk:n}),r.jsx(Q,{readOnly:e,alleKodeverk:n}),r.jsx(E,{readOnly:e}),r.jsx(T,{readOnly:e,alleKodeverk:n}),r.jsx(W,{readOnly:e}),a.getFamilieHendelseType()===t.FODSEL&&r.jsx(Z,{readOnly:e,erForeldrepenger:!0}),r.jsx(ee,{readOnly:e,soknadData:a}),r.jsx(L,{readOnly:e,familieHendelseType:a.getFamilieHendelseType(),fodselsdato:J,isForeldrepengerFagsak:!0}),r.jsx(re,{readOnly:e,permisjonRettigheterPanel:r.jsx(ne,{readOnly:e,denAndreForelderenHarRettPaForeldrepenger:w,sokerErMor:a.getForeldreType()===o.MOR}),alleKodeverk:n,fagsakPersonnummer:y}),r.jsx(P,{foreldreType:a.getForeldreType(),readOnly:e,alleKodeverk:n,erEndringssøknad:v}),r.jsx(ae,{annenForelderInformertRequired:B,readOnly:e}),r.jsx(se,{readOnly:e}),r.jsx(te,{readOnly:e,onSubmitUfullstendigsoknad:k,submitting:s.formState.isSubmitting})]})};K.__docgenInfo={description:`ForeldrepengerForm

Form-komponent for registrering av papirsøknad for foreldrepenger.`,methods:[],displayName:"ForeldrepengerForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const H=({onSubmitUfullstendigsoknad:e,onSubmit:a,readOnly:n,soknadData:g,alleKodeverk:k,fagsakPersonnummer:y,erEndringssøknad:v})=>r.jsx(K,{onSubmitUfullstendigsoknad:e,onSubmit:a,readOnly:n,soknadData:g,alleKodeverk:k,fagsakPersonnummer:y,erEndringssøknad:v});H.__docgenInfo={description:"",methods:[],displayName:"ForeldrepengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const fe={title:"papirsoknad/foreldrepenger",component:H,decorators:[pe,me(ge)],args:{readOnly:!1,alleKodeverk:ue,onSubmit:e=>(A("onSubmit")(e),Promise.resolve(e)),onSubmitUfullstendigsoknad:()=>(A("onSubmitUfullstendigsoknad")(),Promise.resolve()),erEndringssøknad:!1,fagsakPersonnummer:"12345678910"}},i={args:{soknadData:new l(p.FORELDREPENGER,t.FODSEL,o.MOR)}},d={args:{soknadData:new l(p.FORELDREPENGER,t.ADOPSJON,o.MOR)}},m={args:{soknadData:new l(p.FORELDREPENGER,t.OMSORG,o.MOR)}},u={args:{soknadData:new l(p.FORELDREPENGER,t.FODSEL,o.FAR)}};var M,S,x;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var D,I,j;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.ADOPSJON, ForeldreType.MOR)
  }
}`,...(j=(I=d.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var q,O,b;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.OMSORG, ForeldreType.MOR)
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var N,V,_;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...(_=(V=u.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const Ae=["ForMorVedFødsel","ForMorVedAdopsjon","ForMorVedOmsorg","ForFarVedFødsel"];export{u as ForFarVedFødsel,d as ForMorVedAdopsjon,i as ForMorVedFødsel,m as ForMorVedOmsorg,Ae as __namedExportsOrder,fe as default};
