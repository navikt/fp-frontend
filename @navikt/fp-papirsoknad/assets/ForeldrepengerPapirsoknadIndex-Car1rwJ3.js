import{j as r}from"./jsx-runtime-CLpGMVip.js";import{u as N,r as h,H as K,M as u,O as m,c as F,I as l,V as k,e as g,A as p,D as v,T as y,R as c,f as w,h as T,d as S,P as q,B as R,i as x,L as P}from"./BehovForTilretteleggingPanel-DS7vBS9H.js";import"./nb_NO-ALi3MUqK.js";const H=()=>({...u.initialValues(),...m.initialValues(),...l.initialValues(),...k.initialValues(),...g.initialValues(),...p.initialValues(),...v.initialValues(),...y.initialValues(),...c.initialValues(),...w.initialValues(),...T.initialValues(),...q.initialValues(),...R.initialValues(),...x.initialValues(),...P.initialValues()}),D=e=>({...u.transformValues(e),...m.transformValues(e),...l.transformValues(e),...k.transformValues(e),...g.transformValues(e),...p.transformValues(e),...v.transformValues(e),...y.transformValues(e),...c.transformValues(e),...w.transformValues(e),...T.transformValues(e),...q.transformValues(e),...R.tranformValues(e),...x.transformValues(e),...P.transformValues(e)}),f=({readOnly:e,soknadData:n,alleKodeverk:a,onSubmit:t,onSubmitUfullstendigsoknad:i,fagsakPersonnummer:o,erEndringssøknad:d})=>{const s=N({defaultValues:H()}),j=s.watch("annenForelder.sokerHarAleneomsorg"),A=s.watch("annenForelder.denAndreForelderenHarRettPaForeldrepenger"),V=!j&&A!==!1,b=s.watch("foedselsDato"),I=s.watch("mottattDato");return r.jsxs(h,{formMethods:s,onSubmit:M=>t(D(M)),children:[r.jsxs(K,{columns:{sm:1,md:2},gap:"4",children:[r.jsx(u,{readOnly:e}),r.jsx(m,{readOnly:e,erAdopsjon:n.getFamilieHendelseType()===F.ADOPSJON,alleKodeverk:a,mottattDato:I}),r.jsx(l,{readOnly:e,alleKodeverk:a}),r.jsx(k,{readOnly:e,alleKodeverk:a}),r.jsx(g,{readOnly:e}),r.jsx(p,{readOnly:e,alleKodeverk:a}),r.jsx(v,{readOnly:e}),n.getFamilieHendelseType()===F.FODSEL&&r.jsx(y,{readOnly:e,erForeldrepenger:!0}),r.jsx(c,{readOnly:e,soknadData:n}),r.jsx(w,{readOnly:e,familieHendelseType:n.getFamilieHendelseType(),fodselsdato:b,isForeldrepengerFagsak:!0}),r.jsx(T,{readOnly:e,alleKodeverk:a,fagsakPersonnummer:o,sokerErMor:n.getForeldreType()===S.MOR}),r.jsx(q,{foreldreType:n.getForeldreType(),readOnly:e,alleKodeverk:a,erEndringssøknad:d}),r.jsx(R,{annenForelderInformertRequired:V,readOnly:e}),r.jsx(x,{readOnly:e})]}),r.jsx(P,{readOnly:e,onSubmitUfullstendigsoknad:i,submitting:s.formState.isSubmitting})]})};f.__docgenInfo={description:`ForeldrepengerForm

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
