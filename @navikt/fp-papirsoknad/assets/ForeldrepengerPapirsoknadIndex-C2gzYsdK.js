import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{u as N,L as u,c as m,B as l,P as k,A as g,O as p,R as v,T as y,D as c,d as w,e as T,V as q,I as R,f as x,M as F,h,H as K,F as P,b as S}from"./BehovForTilretteleggingPanel-DKME2Zcx.js";import"./nb_NO-BJpEtco9.js";const H=()=>({...F.initialValues(),...x.initialValues(),...R.initialValues(),...q.initialValues(),...T.initialValues(),...w.initialValues(),...c.initialValues(),...y.initialValues(),...v.initialValues(),...p.initialValues(),...g.initialValues(),...k.initialValues(),...l.initialValues(),...m.initialValues(),...u.initialValues()}),D=e=>({...F.transformValues(e),...x.transformValues(e),...R.transformValues(e),...q.transformValues(e),...T.transformValues(e),...w.transformValues(e),...c.transformValues(e),...y.transformValues(e),...v.transformValues(e),...p.transformValues(e),...g.transformValues(e),...k.transformValues(e),...l.tranformValues(e),...m.transformValues(e),...u.transformValues(e)}),f=({readOnly:e,soknadData:n,alleKodeverk:a,onSubmit:t,onSubmitUfullstendigsoknad:i,fagsakPersonnummer:o,erEndringssøknad:d})=>{const s=N({defaultValues:H()}),j=s.watch("annenForelder.sokerHarAleneomsorg"),A=s.watch("annenForelder.denAndreForelderenHarRettPaForeldrepenger"),V=!j&&A!==!1,b=s.watch("foedselsDato"),I=s.watch("mottattDato");return r.jsxs(h,{formMethods:s,onSubmit:M=>t(D(M)),children:[r.jsxs(K,{columns:{sm:1,md:2},gap:"4",children:[r.jsx(F,{readOnly:e}),r.jsx(x,{readOnly:e,erAdopsjon:n.getFamilieHendelseType()===P.ADOPSJON,alleKodeverk:a,mottattDato:I}),r.jsx(R,{readOnly:e,alleKodeverk:a}),r.jsx(q,{readOnly:e,alleKodeverk:a}),r.jsx(T,{readOnly:e}),r.jsx(w,{readOnly:e,alleKodeverk:a}),r.jsx(c,{readOnly:e}),n.getFamilieHendelseType()===P.FODSEL&&r.jsx(y,{readOnly:e,erForeldrepenger:!0}),r.jsx(v,{readOnly:e,soknadData:n}),r.jsx(p,{readOnly:e,familieHendelseType:n.getFamilieHendelseType(),fodselsdato:b,isForeldrepengerFagsak:!0}),r.jsx(g,{readOnly:e,alleKodeverk:a,fagsakPersonnummer:o,sokerErMor:n.getForeldreType()===S.MOR}),r.jsx(k,{foreldreType:n.getForeldreType(),readOnly:e,alleKodeverk:a,erEndringssøknad:d}),r.jsx(l,{annenForelderInformertRequired:V,readOnly:e}),r.jsx(m,{readOnly:e})]}),r.jsx(u,{readOnly:e,onSubmitUfullstendigsoknad:i,submitting:s.formState.isSubmitting})]})};f.__docgenInfo={description:`ForeldrepengerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const E=({onSubmitUfullstendigsoknad:e,onSubmit:n,readOnly:a,soknadData:t,alleKodeverk:i,fagsakPersonnummer:o,erEndringssøknad:d})=>r.jsx(f,{onSubmitUfullstendigsoknad:e,onSubmit:n,readOnly:a,soknadData:t,alleKodeverk:i,fagsakPersonnummer:o,erEndringssøknad:d});E.__docgenInfo={description:"",methods:[],displayName:"ForeldrepengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};export{E as F};
