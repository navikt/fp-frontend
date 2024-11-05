import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{K as b,M as O,O as g,f as l,I,V as _,F as v,A as y,k as h,l as V,S as G,L,g as U,h as t,i as c,z as S,d as P,j as R}from"./BehovForTilretteleggingPanel-CAryNlDx.js";import{u as Y,$ as H,t as B,P as J,w as X}from"./index.es-Bjm0LBRH.js";import{r as $}from"./index-DRjF_FHU.js";import{m as z}from"./nb_NO-D8BNTxjC.js";import"./v4-CQkTLCs1.js";import"./index-rX-Bn4lm.js";import"./dayjs.min-DN4LN79F.js";const p="frilans",C=n=>({...y.buildInitialValues(n),...I.buildInitialValues(),...g.buildInitialValues(),...V.buildInitialValues(),[p]:v.buildInitialValues()}),Q=n=>{let a=[];const{tilretteleggingArbeidsforhold:e}=n;return e!=null&&e.sokForArbeidsgiver&&(e!=null&&e.tilretteleggingForArbeidsgiver)&&(a=a.concat(e.tilretteleggingForArbeidsgiver.map(s=>({"@type":"VI",behovsdato:s.behovsdato,organisasjonsnummer:s.organisasjonsnummer,tilrettelegginger:s.tilretteleggingArbeidsgiver})))),e!=null&&e.sokForFrilans&&a.push({"@type":"FR",behovsdato:e.behovsdatoFrilans,tilrettelegginger:e.tilretteleggingFrilans}),e!=null&&e.sokForSelvstendigNaringsdrivende&&a.push({"@type":"SN",behovsdato:e.behovsdatoSN,tilrettelegginger:e.tilretteleggingSelvstendigNaringsdrivende}),a},W=(n,a)=>({...g.transformValues(n),foedselsDato:n.foedselsDato,tilretteleggingArbeidsforhold:Q(n),[p]:v.transformValues(n[p]),[U]:y.transformValues(n,a)}),q=({readOnly:n,soknadData:a,alleKodeverk:e,onSubmit:s,onSubmitUfullstendigsoknad:u})=>{const k=Y({defaultValues:$.useMemo(()=>C(e[b.ARBEID_TYPE]),[])}),D=e[b.ARBEID_TYPE],K=k.watch("mottattDato");return r.jsxs(H,{formMethods:k,onSubmit:M=>s(W(M,D)),children:[r.jsx(O,{readOnly:n}),r.jsx(g,{readOnly:n,alleKodeverk:e,erAdopsjon:a.getFamilieHendelseType()!==l.ADOPSJON,mottattDato:K}),r.jsx(I,{readOnly:n,alleKodeverk:e}),r.jsx(_,{readOnly:n,alleKodeverk:e}),r.jsx(v,{readOnly:n}),r.jsx(y,{readOnly:n,kunMiliterEllerSiviltjeneste:!0,alleKodeverk:e}),r.jsx(h,{readOnly:n}),r.jsx(V,{readOnly:n}),r.jsx(G,{readOnly:n}),r.jsx(L,{readOnly:n,onSubmitUfullstendigsoknad:u,submitting:k.formState.isSubmitting})]})};q.__docgenInfo={description:`SvangerskapspengerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const Z=B(z),m=({onSubmitUfullstendigsoknad:n,onSubmit:a,readOnly:e,soknadData:s,alleKodeverk:u})=>r.jsx(J,{value:Z,children:r.jsx(q,{onSubmitUfullstendigsoknad:n,onSubmit:a,readOnly:e,soknadData:s,alleKodeverk:u})});m.__docgenInfo={description:"",methods:[],displayName:"SvangerskapspengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const de={title:"papirsoknad/papirsoknad-svp",component:m,decorators:[X]},o=()=>r.jsx(m,{onSubmitUfullstendigsoknad:t("button-click"),onSubmit:t("button-click"),readOnly:!1,soknadData:new c(S.SVANGERSKAPSPENGER,l.FODSEL,P.MOR),alleKodeverk:R}),i=()=>r.jsx(m,{onSubmitUfullstendigsoknad:t("button-click"),onSubmit:t("button-click"),readOnly:!1,soknadData:new c(S.SVANGERSKAPSPENGER,l.ADOPSJON,P.MOR),alleKodeverk:R}),d=()=>r.jsx(m,{onSubmitUfullstendigsoknad:t("button-click"),onSubmit:t("button-click"),readOnly:!1,soknadData:new c(S.SVANGERSKAPSPENGER,l.FODSEL,P.FAR),alleKodeverk:R});o.__docgenInfo={description:"",methods:[],displayName:"visPapirsoknadForMorVedFødsel"};i.__docgenInfo={description:"",methods:[],displayName:"visPapirsoknadForMorVedAdopsjon"};d.__docgenInfo={description:"",methods:[],displayName:"visPapirsoknadForFarVedFodsel"};var f,w,F;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"() => <SvangerskapspengerPapirsoknadIndex onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>} onSubmit={action('button-click') as (values: any) => Promise<any>} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.FODSEL, foreldreType.MOR)} alleKodeverk={alleKodeverk as any} />",...(F=(w=o.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var A,T,N;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:"() => <SvangerskapspengerPapirsoknadIndex onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>} onSubmit={action('button-click') as (values: any) => Promise<any>} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.ADOPSJON, foreldreType.MOR)} alleKodeverk={alleKodeverk as any} />",...(N=(T=i.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var E,j,x;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:"() => <SvangerskapspengerPapirsoknadIndex onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>} onSubmit={action('button-click') as (values: any) => Promise<any>} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.FODSEL, foreldreType.FAR)} alleKodeverk={alleKodeverk as any} />",...(x=(j=d.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const me=["visPapirsoknadForMorVedFødsel","visPapirsoknadForMorVedAdopsjon","visPapirsoknadForFarVedFodsel"];export{me as __namedExportsOrder,de as default,d as visPapirsoknadForFarVedFodsel,i as visPapirsoknadForMorVedAdopsjon,o as visPapirsoknadForMorVedFødsel};
