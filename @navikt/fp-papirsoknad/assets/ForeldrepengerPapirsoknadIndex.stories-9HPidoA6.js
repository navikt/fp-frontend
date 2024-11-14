import{u as $,K as w,$ as z,M as C,O as F,f as t,I as h,V as Q,F as E,A as f,D as W,a as Z,R as ee,b as L,c as re,P as ne,d as o,e as T,B as ae,S as se,L as te,r as oe,g as ie,T as de,h as me,i as A,j as l,z as g}from"./BehovForTilretteleggingPanel-BZujqVgu.js";import{b as ue,w as le,g as ge,m as pe}from"./nb_NO-BC0thb6E.js";import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{r as ke}from"./index-DRjF_FHU.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DN4LN79F.js";import"./index-rX-Bn4lm.js";const c="omsorg",R="frilans",ye=e=>({[R]:E.buildInitialValues(),...f.buildInitialValues(e),...h.buildInitialValues(),[c]:{},...F.buildInitialValues(),...T.buildInitialValues()}),ve=(e,a)=>{let n=e;return e.rettigheter===oe.IKKE_RELEVANT&&(n=ue(e,"rettigheter")),{...F.transformValues(n),[c]:L.transformValues(n[c]),[ie]:f.transformValues(n,a),[de]:T.transformValues(n),[R]:E.transformValues(n[R])}},K=({readOnly:e,soknadData:a,alleKodeverk:n,onSubmit:p,onSubmitUfullstendigsoknad:k,fagsakPersonnummer:y,erEndringssøknad:v})=>{const s=$({defaultValues:ke.useMemo(()=>ye(n[w.ARBEID_TYPE]),[])}),G=n[w.ARBEID_TYPE],Y=s.watch("sokerHarAleneomsorg"),P=s.watch("denAndreForelderenHarRettPaForeldrepenger"),B=!Y&&P!==!1,J=s.watch("foedselsDato"),U=s.watch("mottattDato");return r.jsxs(z,{formMethods:s,onSubmit:X=>p(ve(X,G)),children:[r.jsx(C,{readOnly:e}),r.jsx(F,{readOnly:e,erAdopsjon:a.getFamilieHendelseType()!==t.ADOPSJON,alleKodeverk:n,mottattDato:U}),r.jsx(h,{readOnly:e,alleKodeverk:n}),r.jsx(Q,{readOnly:e,alleKodeverk:n}),r.jsx(E,{readOnly:e}),r.jsx(f,{readOnly:e,alleKodeverk:n}),r.jsx(W,{readOnly:e}),a.getFamilieHendelseType()===t.FODSEL&&r.jsx(Z,{readOnly:e,erForeldrepenger:!0}),r.jsx(ee,{readOnly:e,soknadData:a}),r.jsx(L,{readOnly:e,familieHendelseType:a.getFamilieHendelseType(),fodselsdato:J,isForeldrepengerFagsak:!0}),r.jsx(re,{readOnly:e,permisjonRettigheterPanel:r.jsx(ne,{readOnly:e,denAndreForelderenHarRettPaForeldrepenger:P,sokerErMor:a.getForeldreType()===o.MOR}),alleKodeverk:n,fagsakPersonnummer:y}),r.jsx(T,{foreldreType:a.getForeldreType(),readOnly:e,alleKodeverk:n,erEndringssøknad:v}),r.jsx(ae,{annenForelderInformertRequired:B,readOnly:e}),r.jsx(se,{readOnly:e}),r.jsx(te,{readOnly:e,onSubmitUfullstendigsoknad:k,submitting:s.formState.isSubmitting})]})};K.__docgenInfo={description:`ForeldrepengerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const H=({onSubmitUfullstendigsoknad:e,onSubmit:a,readOnly:n,soknadData:p,alleKodeverk:k,fagsakPersonnummer:y,erEndringssøknad:v})=>r.jsx(K,{onSubmitUfullstendigsoknad:e,onSubmit:a,readOnly:n,soknadData:p,alleKodeverk:k,fagsakPersonnummer:y,erEndringssøknad:v});H.__docgenInfo={description:"",methods:[],displayName:"ForeldrepengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const we={title:"papirsoknad/foreldrepenger",component:H,decorators:[le,ge(pe)],args:{readOnly:!1,alleKodeverk:me,onSubmit:e=>(A("onSubmit")(e),Promise.resolve(e)),onSubmitUfullstendigsoknad:()=>(A("onSubmitUfullstendigsoknad")(),Promise.resolve()),erEndringssøknad:!1,fagsakPersonnummer:"12345678910"}},i={args:{soknadData:new l(g.FORELDREPENGER,t.FODSEL,o.MOR)}},d={args:{soknadData:new l(g.FORELDREPENGER,t.ADOPSJON,o.MOR)}},m={args:{soknadData:new l(g.FORELDREPENGER,t.OMSORG,o.MOR)}},u={args:{soknadData:new l(g.FORELDREPENGER,t.FODSEL,o.FAR)}};var M,S,x;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.MOR)
  }
}`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var D,I,j;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.ADOPSJON, foreldreType.MOR)
  }
}`,...(j=(I=d.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var q,O,b;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.OMSORG, foreldreType.MOR)
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var N,V,_;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.FAR)
  }
}`,...(_=(V=u.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const Ae=["ForMorVedFødsel","ForMorVedAdopsjon","ForMorVedOmsorg","ForFarVedFødsel"];export{u as ForFarVedFødsel,d as ForMorVedAdopsjon,i as ForMorVedFødsel,m as ForMorVedOmsorg,Ae as __namedExportsOrder,we as default};
