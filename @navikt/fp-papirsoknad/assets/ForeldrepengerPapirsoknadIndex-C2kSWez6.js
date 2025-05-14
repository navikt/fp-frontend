import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{u as H,L as l,c as u,B as g,P as m,A as k,O as v,R as p,T as y,D as c,d as R,e as w,V as F,I as P,f as T,M as q,h as M,H as S,F as A,b as N}from"./BehovForTilretteleggingPanel-D_-aXJPx.js";import"./nb_NO-Cd90vtur.js";const h=()=>({...q.initialValues(),...T.initialValues(),...P.initialValues(),...F.initialValues(),...w.initialValues(),...R.initialValues(),...c.initialValues(),...y.initialValues(),...p.initialValues(),...v.initialValues(),...k.initialValues(),...m.initialValues(),...g.initialValues(),...u.initialValues(),...l.initialValues()}),E=e=>({...q.transformValues(e),...T.transformValues(e),...P.transformValues(e),...F.transformValues(e),...w.transformValues(e),...R.transformValues(e),...c.transformValues(e),...y.transformValues(e),...p.transformValues(e),...v.transformValues(e),...k.transformValues(e),...m.transformValues(e),...g.tranformValues(e),...u.transformValues(e),...l.transformValues(e)}),x=({readOnly:e,soknadData:n,alleKodeverk:a,onSubmit:t,onSubmitUfullstendigsoknad:i,fagsakPersonnummer:o,erEndringssøknad:d})=>{const s=H({defaultValues:h()}),f=s.watch("annenForelder.sokerHarAleneomsorg"),j=s.watch("annenForelder.denAndreForelderenHarRettPaForeldrepenger"),V=!f&&j!==!1,K=s.watch("foedselsDato"),b=s.watch("mottattDato");return r.jsxs(M,{formMethods:s,onSubmit:I=>t(E(I)),children:[r.jsxs(S,{columns:{sm:1,md:2},gap:"4",children:[r.jsx(q,{readOnly:e}),r.jsx(T,{readOnly:e,erAdopsjon:n.getFamilieHendelseType()===A.ADOPSJON,alleKodeverk:a,mottattDato:b}),r.jsx(P,{readOnly:e,alleKodeverk:a}),r.jsx(F,{readOnly:e,alleKodeverk:a}),r.jsx(w,{readOnly:e}),r.jsx(R,{readOnly:e,alleKodeverk:a}),r.jsx(c,{readOnly:e}),n.getFamilieHendelseType()===A.FODSEL&&r.jsx(y,{readOnly:e,erForeldrepenger:!0}),r.jsx(p,{readOnly:e,soknadData:n}),r.jsx(v,{readOnly:e,familieHendelseType:n.getFamilieHendelseType(),fodselsdato:K,isForeldrepengerFagsak:!0}),r.jsx(k,{readOnly:e,alleKodeverk:a,fagsakPersonnummer:o,sokerErMor:n.getForeldreType()===N.MOR}),r.jsx(m,{foreldreType:n.getForeldreType(),readOnly:e,alleKodeverk:a,erEndringssøknad:d}),r.jsx(g,{annenForelderInformertRequired:V,readOnly:e}),r.jsx(u,{readOnly:e})]}),r.jsx(l,{readOnly:e,onSubmitUfullstendigsoknad:i,submitting:s.formState.isSubmitting})]})};x.__docgenInfo={description:`ForeldrepengerForm

Form-komponent for registrering av papirsøknad for foreldrepenger.`,methods:[],displayName:"ForeldrepengerForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"Record",elements:[{name:"Exclude",elements:[{name:"KodeverkType"},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:`Record<
  Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>,
  KodeverkMedNavn[]
>`},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: ForeldrepengerValues) => Promise<void>",signature:{arguments:[{type:{name:"ReturnType",elements:[{name:"transformValues"}],raw:"ReturnType<typeof transformValues>"},name:"values"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const L=({onSubmitUfullstendigsoknad:e,onSubmit:n,readOnly:a,soknadData:t,alleKodeverk:i,fagsakPersonnummer:o,erEndringssøknad:d})=>r.jsx(x,{onSubmitUfullstendigsoknad:e,onSubmit:n,readOnly:a,soknadData:t,alleKodeverk:i,fagsakPersonnummer:o,erEndringssøknad:d});L.__docgenInfo={description:"",methods:[],displayName:"ForeldrepengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: ForeldrepengerValues) => Promise<void>",signature:{arguments:[{type:{name:"ReturnType",elements:[{name:"transformValues"}],raw:"ReturnType<typeof transformValues>"},name:"values"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"Record",elements:[{name:"Exclude",elements:[{name:"KodeverkType"},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:`Record<
  Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>,
  KodeverkMedNavn[]
>`},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};export{L as F};
