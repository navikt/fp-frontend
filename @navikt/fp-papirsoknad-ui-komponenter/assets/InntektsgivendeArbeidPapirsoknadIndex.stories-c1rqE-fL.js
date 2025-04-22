import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{a as w,g as T,j,k as V,F as N,A as k,Y as F,d as E,V as b,c as K,D as _,P as M,f as D,m as h,e as x,$ as L,B as O}from"./nb_NO-DWXx_5rD.js";import{o as S,O as v,a as B}from"./index.es-CEGBLAGy.js";import"./withPanelData-DZ9oxQJ3.js";import"./index-C4XKfyRp.js";import"./aktivitetStatus-B1m96ipJ.js";import{K as $,a as Y}from"./alleKodeverk-Ga5AMxGN.js";import{L as G}from"./landkoder-tJDPMx5C.js";import{F as P}from"./FieldArrayRow-DJjwVuQq.js";import{M as p}from"./message-VCpe8OHV.js";import"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./v4-CtRu48qb.js";import"./entry-preview-jtooXM-a.js";import"./iframe-CIcA63BH.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./Trash-CtsbknFa.js";const t="arbeidsforhold",z=S(50),C=n=>n.filter(({kode:e})=>e!==G.NORGE).map(({kode:e,navn:a})=>r.jsx("option",{value:e,children:a},e)),f=({alleKodeverk:n,readOnly:e})=>{const a=w(),{control:m}=T(),{fields:R,remove:g,append:q}=j({control:m,name:t}),I=n[$.LANDKODER].slice().sort((u,s)=>u.navn.localeCompare(s.navn));return r.jsx(V,{fields:R,bodyText:a.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:e,emptyPeriodTemplate:{arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},remove:g,append:q,children:(u,s)=>r.jsxs(P,{remove:g,index:s,readOnly:e,children:[r.jsx(N,{readOnly:e,name:`${t}.${s}.arbeidsgiver`,label:a.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}),validate:[z],maxLength:99}),r.jsx(k,{isReadOnly:e,name:`${t}.${s}.periodeFom`,label:a.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}),validate:[v]}),r.jsx(k,{isReadOnly:e,name:`${t}.${s}.periodeTom`,label:a.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}),validate:[v]}),r.jsx(F,{readOnly:e,name:`${t}.${s}.land`,label:a.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}),selectValues:C(I),size:"small"})]},u.id)})};f.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

Viser inputfelter for arbeidsgiver og organisasjonsnummer for registrering av arbeidsforhold.`,methods:[],displayName:"RenderInntektsgivendeArbeidFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const o=({readOnly:n,alleKodeverk:e})=>r.jsx(E,{children:r.jsxs(b,{gap:"4",children:[r.jsx(K,{size:"small",children:r.jsx(p,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtland.Title"})}),r.jsx(_,{children:r.jsx(p,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtland.SkalIkkeRegistrereArbeidsforhold"})}),r.jsx(f,{readOnly:n,alleKodeverk:e})]})});o.initialValues=()=>({[t]:[]});const d=n=>n===void 0||n==="";o.transformValues=({arbeidsforhold:n})=>({arbeidsforhold:n==null?void 0:n.filter(e=>!(d(e.arbeidsgiver)&&d(e.land)&&d(e.periodeFom)&&d(e.periodeTom)))});o.__docgenInfo={description:`InntektsgivendeArbeidPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  arbeidsforhold,
}: InntektsgivendeArbeidFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]},alias:"InntektsgivendeArbeidFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]}}}}],displayName:"InntektsgivendeArbeidPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const U=D(h),i=({readOnly:n,alleKodeverk:e})=>r.jsx(M,{value:U,children:r.jsx(o,{readOnly:n,alleKodeverk:e})});i.initialValues=o.initialValues;i.transformValues=o.transformValues;i.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  arbeidsforhold,
}: InntektsgivendeArbeidFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]},alias:"InntektsgivendeArbeidFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]}}}}],displayName:"InntektsgivendeArbeidPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const pe={title:"ui-komponenter/inntektsgivende-arbeid",component:i,args:{readOnly:!1,alleKodeverk:Y},parameters:{submitCallback:B("onSubmit")},render:(n,{parameters:{submitCallback:e}})=>{const a=x({defaultValues:i.initialValues()});return r.jsx(L,{formMethods:a,onSubmit:m=>e(i.transformValues(m)),children:r.jsxs(b,{gap:"10",children:[r.jsx(i,{...n}),r.jsx(O,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},l={};var y,c,A;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(A=(c=l.parameters)==null?void 0:c.docs)==null?void 0:A.source}}};const ye=["Default"];export{l as Default,ye as __namedExportsOrder,pe as default};
