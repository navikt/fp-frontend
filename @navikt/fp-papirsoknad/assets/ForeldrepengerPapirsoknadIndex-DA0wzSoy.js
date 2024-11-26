import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{r as h}from"./index-DRjF_FHU.js";import{u as S,K as f,$ as H,H as D,M as m,O as u,c as F,I as l,V as k,e as g,A as p,D as y,T as v,R as c,f as T,h as w,d as E,P as R,B as q,i as x,L as P}from"./BehovForTilretteleggingPanel-BpKU4Hst.js";import"./index.es-CuxadrEC.js";const _=e=>({...m.initialValues(),...u.initialValues(),...l.initialValues(),...k.initialValues(),...g.initialValues(),...p.initialValues(e),...y.initialValues(),...v.initialValues(),...c.initialValues(),...T.initialValues(),...w.initialValues(),...R.initialValues(),...q.initialValues(),...x.initialValues(),...P.initialValues()}),B=(e,n)=>({...m.transformValues(e),...u.transformValues(e),...l.transformValues(e),...k.transformValues(e),...g.transformValues(e),...p.transformValues(e,n),...y.transformValues(e),...v.transformValues(e),...c.transformValues(e),...T.transformValues(e),...w.transformValues(e),...R.transformValues(e),...q.tranformValues(e),...x.transformValues(e),...P.transformValues(e)}),j=({readOnly:e,soknadData:n,alleKodeverk:a,onSubmit:t,onSubmitUfullstendigsoknad:i,fagsakPersonnummer:o,erEndringssøknad:d})=>{const s=S({defaultValues:h.useMemo(()=>_(a[f.ARBEID_TYPE]),[])}),A=a[f.ARBEID_TYPE],V=s.watch("annenForelder.sokerHarAleneomsorg"),I=s.watch("annenForelder.denAndreForelderenHarRettPaForeldrepenger"),b=!V&&I!==!1,M=s.watch("foedselsDato"),N=s.watch("mottattDato");return r.jsxs(H,{formMethods:s,onSubmit:K=>t(B(K,A)),children:[r.jsxs(D,{columns:{sm:1,md:2},gap:"4",children:[r.jsx(m,{readOnly:e}),r.jsx(u,{readOnly:e,erAdopsjon:n.getFamilieHendelseType()===F.ADOPSJON,alleKodeverk:a,mottattDato:N}),r.jsx(l,{readOnly:e,alleKodeverk:a}),r.jsx(k,{readOnly:e,alleKodeverk:a}),r.jsx(g,{readOnly:e}),r.jsx(p,{readOnly:e,alleKodeverk:a}),r.jsx(y,{readOnly:e}),n.getFamilieHendelseType()===F.FODSEL&&r.jsx(v,{readOnly:e,erForeldrepenger:!0}),r.jsx(c,{readOnly:e,soknadData:n}),r.jsx(T,{readOnly:e,familieHendelseType:n.getFamilieHendelseType(),fodselsdato:M,isForeldrepengerFagsak:!0}),r.jsx(w,{readOnly:e,alleKodeverk:a,fagsakPersonnummer:o,sokerErMor:n.getForeldreType()===E.MOR}),r.jsx(R,{foreldreType:n.getForeldreType(),readOnly:e,alleKodeverk:a,erEndringssøknad:d}),r.jsx(q,{annenForelderInformertRequired:b,readOnly:e}),r.jsx(x,{readOnly:e})]}),r.jsx(P,{readOnly:e,onSubmitUfullstendigsoknad:i,submitting:s.formState.isSubmitting})]})};j.__docgenInfo={description:`ForeldrepengerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const O=({onSubmitUfullstendigsoknad:e,onSubmit:n,readOnly:a,soknadData:t,alleKodeverk:i,fagsakPersonnummer:o,erEndringssøknad:d})=>r.jsx(j,{onSubmitUfullstendigsoknad:e,onSubmit:n,readOnly:a,soknadData:t,alleKodeverk:i,fagsakPersonnummer:o,erEndringssøknad:d});O.__docgenInfo={description:"",methods:[],displayName:"ForeldrepengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};export{O as F};
