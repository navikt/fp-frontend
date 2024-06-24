import{r as x,R as a}from"./index-DVXBtNgz.js";import{K as b,M as h,O as g,f as m,I as q,V as G,F as v,A as c,k as L,l as D,S as U,L as Y,g as H,h as t,i as y,z as S,d as P,j as R}from"./BehovForTilretteleggingPanel-BWz5tFdT.js";import{u as B,O as J,t as X,P as z,w as $}from"./index.es-fIe_6V7Q.js";import{m as C}from"./nb_NO-D8BNTxjC.js";import"./v4-CQkTLCs1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-Cbx7Fas8.js";import"./dayjs.min-q5bIuV4J.js";import"./tslib.es6-CMwweBXX.js";const p="frilans",Q=n=>({...c.buildInitialValues(n),...q.buildInitialValues(),...g.buildInitialValues(),...D.buildInitialValues(),[p]:v.buildInitialValues()}),W=n=>{let r=[];const{tilretteleggingArbeidsforhold:e}=n;return e!=null&&e.sokForArbeidsgiver&&(e!=null&&e.tilretteleggingForArbeidsgiver)&&(r=r.concat(e.tilretteleggingForArbeidsgiver.map(s=>({"@type":"VI",behovsdato:s.behovsdato,organisasjonsnummer:s.organisasjonsnummer,tilrettelegginger:s.tilretteleggingArbeidsgiver})))),e!=null&&e.sokForFrilans&&r.push({"@type":"FR",behovsdato:e.behovsdatoFrilans,tilrettelegginger:e.tilretteleggingFrilans}),e!=null&&e.sokForSelvstendigNaringsdrivende&&r.push({"@type":"SN",behovsdato:e.behovsdatoSN,tilrettelegginger:e.tilretteleggingSelvstendigNaringsdrivende}),r},Z=(n,r)=>({...g.transformValues(n),foedselsDato:n.foedselsDato,tilretteleggingArbeidsforhold:W(n),[p]:v.transformValues(n[p]),[H]:c.transformValues(n,r)}),K=({readOnly:n,soknadData:r,alleKodeverk:e,onSubmit:s,onSubmitUfullstendigsoknad:u})=>{const k=B({defaultValues:x.useMemo(()=>Q(e[b.ARBEID_TYPE]),[])}),O=e[b.ARBEID_TYPE],_=k.watch("mottattDato");return a.createElement(J,{formMethods:k,onSubmit:j=>s(Z(j,O))},a.createElement(h,{readOnly:n}),a.createElement(g,{readOnly:n,alleKodeverk:e,erAdopsjon:r.getFamilieHendelseType()!==m.ADOPSJON,mottattDato:_}),a.createElement(q,{readOnly:n,alleKodeverk:e}),a.createElement(G,{readOnly:n,alleKodeverk:e}),a.createElement(v,{readOnly:n}),a.createElement(c,{readOnly:n,kunMiliterEllerSiviltjeneste:!0,alleKodeverk:e}),a.createElement(L,{readOnly:n}),a.createElement(D,{readOnly:n}),a.createElement(U,{readOnly:n}),a.createElement(Y,{readOnly:n,onSubmitUfullstendigsoknad:u,submitting:k.formState.isSubmitting}))};K.__docgenInfo={description:`SvangerskapspengerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const ee=X(C),M=({onSubmitUfullstendigsoknad:n,onSubmit:r,readOnly:e,soknadData:s,alleKodeverk:u})=>a.createElement(z,{value:ee},a.createElement(K,{onSubmitUfullstendigsoknad:n,onSubmit:r,readOnly:e,soknadData:s,alleKodeverk:u})),l=M;M.__docgenInfo={description:"",methods:[],displayName:"SvangerskapspengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const le={title:"papirsoknad/papirsoknad-svp",component:l,decorators:[$]},o=()=>a.createElement(l,{onSubmitUfullstendigsoknad:t("button-click"),onSubmit:t("button-click"),readOnly:!1,soknadData:new y(S.SVANGERSKAPSPENGER,m.FODSEL,P.MOR),alleKodeverk:R}),i=()=>a.createElement(l,{onSubmitUfullstendigsoknad:t("button-click"),onSubmit:t("button-click"),readOnly:!1,soknadData:new y(S.SVANGERSKAPSPENGER,m.ADOPSJON,P.MOR),alleKodeverk:R}),d=()=>a.createElement(l,{onSubmitUfullstendigsoknad:t("button-click"),onSubmit:t("button-click"),readOnly:!1,soknadData:new y(S.SVANGERSKAPSPENGER,m.FODSEL,P.FAR),alleKodeverk:R});o.__docgenInfo={description:"",methods:[],displayName:"visPapirsoknadForMorVedFødsel"};i.__docgenInfo={description:"",methods:[],displayName:"visPapirsoknadForMorVedAdopsjon"};d.__docgenInfo={description:"",methods:[],displayName:"visPapirsoknadForFarVedFodsel"};var E,f,w;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"() => <SvangerskapspengerPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.FODSEL, foreldreType.MOR)} alleKodeverk={(alleKodeverk as any)} />",...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var F,A,T;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:"() => <SvangerskapspengerPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.ADOPSJON, foreldreType.MOR)} alleKodeverk={(alleKodeverk as any)} />",...(T=(A=i.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var N,I,V;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:"() => <SvangerskapspengerPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.FODSEL, foreldreType.FAR)} alleKodeverk={(alleKodeverk as any)} />",...(V=(I=d.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const ue=["visPapirsoknadForMorVedFødsel","visPapirsoknadForMorVedAdopsjon","visPapirsoknadForFarVedFodsel"];export{ue as __namedExportsOrder,le as default,d as visPapirsoknadForFarVedFodsel,i as visPapirsoknadForMorVedAdopsjon,o as visPapirsoknadForMorVedFødsel};
