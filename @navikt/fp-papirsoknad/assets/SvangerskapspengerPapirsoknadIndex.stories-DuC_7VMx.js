import{u as K,K as S,$ as O,M as h,O as g,f as d,I as q,V as _,F as l,A as p,k as G,l as j,S as L,L as Y,g as H,h as U,i as R,j as v,z as y,d as c}from"./BehovForTilretteleggingPanel-BZujqVgu.js";import{w as B,g as J,m as X}from"./nb_NO-BC0thb6E.js";import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{r as $}from"./index-DRjF_FHU.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DN4LN79F.js";import"./index-rX-Bn4lm.js";const k="frilans",z=r=>({...p.buildInitialValues(r),...q.buildInitialValues(),...g.buildInitialValues(),...j.buildInitialValues(),[k]:l.buildInitialValues()}),C=r=>{let a=[];const{tilretteleggingArbeidsforhold:e}=r;return e!=null&&e.sokForArbeidsgiver&&(e!=null&&e.tilretteleggingForArbeidsgiver)&&(a=a.concat(e.tilretteleggingForArbeidsgiver.map(s=>({"@type":"VI",behovsdato:s.behovsdato,organisasjonsnummer:s.organisasjonsnummer,tilrettelegginger:s.tilretteleggingArbeidsgiver})))),e!=null&&e.sokForFrilans&&a.push({"@type":"FR",behovsdato:e.behovsdatoFrilans,tilrettelegginger:e.tilretteleggingFrilans}),e!=null&&e.sokForSelvstendigNaringsdrivende&&a.push({"@type":"SN",behovsdato:e.behovsdatoSN,tilrettelegginger:e.tilretteleggingSelvstendigNaringsdrivende}),a},Q=(r,a)=>({...g.transformValues(r),foedselsDato:r.foedselsDato,tilretteleggingArbeidsforhold:C(r),[k]:l.transformValues(r[k]),[H]:p.transformValues(r,a)}),V=({readOnly:r,soknadData:a,alleKodeverk:e,onSubmit:s,onSubmitUfullstendigsoknad:m})=>{const u=K({defaultValues:$.useMemo(()=>z(e[S.ARBEID_TYPE]),[])}),I=e[S.ARBEID_TYPE],x=u.watch("mottattDato");return n.jsxs(O,{formMethods:u,onSubmit:M=>s(Q(M,I)),children:[n.jsx(h,{readOnly:r}),n.jsx(g,{readOnly:r,alleKodeverk:e,erAdopsjon:a.getFamilieHendelseType()!==d.ADOPSJON,mottattDato:x}),n.jsx(q,{readOnly:r,alleKodeverk:e}),n.jsx(_,{readOnly:r,alleKodeverk:e}),n.jsx(l,{readOnly:r}),n.jsx(p,{readOnly:r,kunMiliterEllerSiviltjeneste:!0,alleKodeverk:e}),n.jsx(G,{readOnly:r}),n.jsx(j,{readOnly:r}),n.jsx(L,{readOnly:r}),n.jsx(Y,{readOnly:r,onSubmitUfullstendigsoknad:m,submitting:u.formState.isSubmitting})]})};V.__docgenInfo={description:`SvangerskapspengerForm

Form-komponent for registrering av papirsøknad for svangerskapspenger.`,methods:[],displayName:"SvangerskapspengerForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const D=({onSubmitUfullstendigsoknad:r,onSubmit:a,readOnly:e,soknadData:s,alleKodeverk:m})=>n.jsx(V,{onSubmitUfullstendigsoknad:r,onSubmit:a,readOnly:e,soknadData:s,alleKodeverk:m});D.__docgenInfo={description:"",methods:[],displayName:"SvangerskapspengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const te={title:"papirsoknad/svangerskapspenger",component:D,decorators:[B,J(X)],args:{readOnly:!1,alleKodeverk:U,onSubmit:r=>(R("onSubmit")(r),Promise.resolve(r)),onSubmitUfullstendigsoknad:()=>(R("onSubmitUfullstendigsoknad")(),Promise.resolve())}},t={args:{soknadData:new v(y.SVANGERSKAPSPENGER,d.FODSEL,c.MOR)}},o={args:{soknadData:new v(y.SVANGERSKAPSPENGER,d.ADOPSJON,c.MOR)}},i={args:{soknadData:new v(y.SVANGERSKAPSPENGER,d.FODSEL,c.FAR)}};var w,A,P;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.FODSEL, foreldreType.MOR)
  }
}`,...(P=(A=t.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var T,F,N;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.ADOPSJON, foreldreType.MOR)
  }
}`,...(N=(F=o.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var f,E,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.FODSEL, foreldreType.FAR)
  }
}`,...(b=(E=i.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const oe=["ForMorVedFødsel","ForMorVedAdopsjon","ForFarVedFodsel"];export{i as ForFarVedFodsel,o as ForMorVedAdopsjon,t as ForMorVedFødsel,oe as __namedExportsOrder,te as default};
