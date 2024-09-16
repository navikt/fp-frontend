import{j as a}from"./dayjs.min-DtEtkIN8.js";import{K as b,M as _,O as g,f as m,I,V as h,F as v,A as y,k as G,l as V,S as Y,L,g as U,h as t,i as c,z as S,d as P,j as R}from"./BehovForTilretteleggingPanel-tKlryr2M.js";import{u as H,Y as B,t as J,P as X,w as z}from"./index.es-0NS3pzs8.js";import{r as $}from"./index-uubelm5h.js";import{m as C}from"./nb_NO-D8BNTxjC.js";import"./v4-CQkTLCs1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-BdzLX9oW.js";const p="frilans",Q=n=>({...y.buildInitialValues(n),...I.buildInitialValues(),...g.buildInitialValues(),...V.buildInitialValues(),[p]:v.buildInitialValues()}),W=n=>{let r=[];const{tilretteleggingArbeidsforhold:e}=n;return e!=null&&e.sokForArbeidsgiver&&(e!=null&&e.tilretteleggingForArbeidsgiver)&&(r=r.concat(e.tilretteleggingForArbeidsgiver.map(s=>({"@type":"VI",behovsdato:s.behovsdato,organisasjonsnummer:s.organisasjonsnummer,tilrettelegginger:s.tilretteleggingArbeidsgiver})))),e!=null&&e.sokForFrilans&&r.push({"@type":"FR",behovsdato:e.behovsdatoFrilans,tilrettelegginger:e.tilretteleggingFrilans}),e!=null&&e.sokForSelvstendigNaringsdrivende&&r.push({"@type":"SN",behovsdato:e.behovsdatoSN,tilrettelegginger:e.tilretteleggingSelvstendigNaringsdrivende}),r},Z=(n,r)=>({...g.transformValues(n),foedselsDato:n.foedselsDato,tilretteleggingArbeidsforhold:W(n),[p]:v.transformValues(n[p]),[U]:y.transformValues(n,r)}),q=({readOnly:n,soknadData:r,alleKodeverk:e,onSubmit:s,onSubmitUfullstendigsoknad:u})=>{const k=H({defaultValues:$.useMemo(()=>Q(e[b.ARBEID_TYPE]),[])}),K=e[b.ARBEID_TYPE],M=k.watch("mottattDato");return a.jsxs(B,{formMethods:k,onSubmit:O=>s(Z(O,K)),children:[a.jsx(_,{readOnly:n}),a.jsx(g,{readOnly:n,alleKodeverk:e,erAdopsjon:r.getFamilieHendelseType()!==m.ADOPSJON,mottattDato:M}),a.jsx(I,{readOnly:n,alleKodeverk:e}),a.jsx(h,{readOnly:n,alleKodeverk:e}),a.jsx(v,{readOnly:n}),a.jsx(y,{readOnly:n,kunMiliterEllerSiviltjeneste:!0,alleKodeverk:e}),a.jsx(G,{readOnly:n}),a.jsx(V,{readOnly:n}),a.jsx(Y,{readOnly:n}),a.jsx(L,{readOnly:n,onSubmitUfullstendigsoknad:u,submitting:k.formState.isSubmitting})]})};q.__docgenInfo={description:`SvangerskapspengerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const ee=J(C),D=({onSubmitUfullstendigsoknad:n,onSubmit:r,readOnly:e,soknadData:s,alleKodeverk:u})=>a.jsx(X,{value:ee,children:a.jsx(q,{onSubmitUfullstendigsoknad:n,onSubmit:r,readOnly:e,soknadData:s,alleKodeverk:u})}),l=D;D.__docgenInfo={description:"",methods:[],displayName:"SvangerskapspengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const me={title:"papirsoknad/papirsoknad-svp",component:l,decorators:[z]},o=()=>a.jsx(l,{onSubmitUfullstendigsoknad:t("button-click"),onSubmit:t("button-click"),readOnly:!1,soknadData:new c(S.SVANGERSKAPSPENGER,m.FODSEL,P.MOR),alleKodeverk:R}),i=()=>a.jsx(l,{onSubmitUfullstendigsoknad:t("button-click"),onSubmit:t("button-click"),readOnly:!1,soknadData:new c(S.SVANGERSKAPSPENGER,m.ADOPSJON,P.MOR),alleKodeverk:R}),d=()=>a.jsx(l,{onSubmitUfullstendigsoknad:t("button-click"),onSubmit:t("button-click"),readOnly:!1,soknadData:new c(S.SVANGERSKAPSPENGER,m.FODSEL,P.FAR),alleKodeverk:R});o.__docgenInfo={description:"",methods:[],displayName:"visPapirsoknadForMorVedFødsel"};i.__docgenInfo={description:"",methods:[],displayName:"visPapirsoknadForMorVedAdopsjon"};d.__docgenInfo={description:"",methods:[],displayName:"visPapirsoknadForFarVedFodsel"};var f,w,F;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"() => <SvangerskapspengerPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.FODSEL, foreldreType.MOR)} alleKodeverk={(alleKodeverk as any)} />",...(F=(w=o.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var A,T,N;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:"() => <SvangerskapspengerPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.ADOPSJON, foreldreType.MOR)} alleKodeverk={(alleKodeverk as any)} />",...(N=(T=i.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var E,j,x;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:"() => <SvangerskapspengerPapirsoknadIndex onSubmitUfullstendigsoknad={(action('button-click') as () => Promise<any>)} onSubmit={(action('button-click') as (values: any) => Promise<any>)} readOnly={false} soknadData={new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.FODSEL, foreldreType.FAR)} alleKodeverk={(alleKodeverk as any)} />",...(x=(j=d.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const le=["visPapirsoknadForMorVedFødsel","visPapirsoknadForMorVedAdopsjon","visPapirsoknadForFarVedFodsel"];export{le as __namedExportsOrder,me as default,d as visPapirsoknadForFarVedFodsel,i as visPapirsoknadForMorVedAdopsjon,o as visPapirsoknadForMorVedFødsel};
