import{R as e}from"./index-DVXBtNgz.js";import{e as P,f as K,l as N,r as V,F as h,M as F,c as o,C as _,d as p,q,g as i,R as x,H as L,h as u,D as b,t as D,P as O,m as $,a as j,b as C,O as S,B}from"./nb_NO-C9BsZesQ.js";import"./withRouter-ClqbeiGf.js";import{K as z,a as G}from"./alleKodeverk-DbawmvgK.js";import{b as y,a as H}from"./index.es-DaiGF91N.js";import{l as U}from"./landkoder-T-1RG3zx.js";import"./v4-CQkTLCs1.js";import"./tslib.es6-CMwweBXX.js";import"./index-Cbx7Fas8.js";const Y="_notLastRow_uwn16_1",J={notLastRow:Y},Q=H(50),s="arbeidsforhold",W={arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},X=t=>t.filter(({kode:n})=>n!==U.NORGE).map(({kode:n,navn:a})=>e.createElement("option",{value:n,key:n},a)),E=({alleKodeverk:t,readOnly:n})=>{const a=P(),{control:R}=K(),{fields:c,remove:w,append:T}=N({control:R,name:s}),M=t[z.LANDKODER].slice().sort((m,r)=>m.navn.localeCompare(r.navn));return e.createElement(V,{fields:c,emptyPeriodTemplate:W,bodyText:a.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:n,remove:w,append:T},(m,r,v)=>e.createElement("div",{key:m.id,className:r!==c.length-1?J.notLastRow:""},e.createElement(h,null,e.createElement(F,null,e.createElement(o,null,e.createElement(_,{readOnly:n,name:`${s}.${r}.arbeidsgiver`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}):"",validate:[Q],maxLength:99})),e.createElement(o,null,e.createElement(p,{isReadOnly:n,name:`${s}.${r}.periodeFom`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}):"",validate:[y]})),e.createElement(o,null,e.createElement(p,{isReadOnly:n,name:`${s}.${r}.periodeTom`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}):"",validate:[y]})),e.createElement(o,null,e.createElement(q,{readOnly:n,name:`${s}.${r}.land`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}):"",selectValues:X(M)})),v&&e.createElement(o,null,v()))),e.createElement(i,{twentyPx:!0})))};E.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const d=({readOnly:t,alleKodeverk:n})=>e.createElement(x,null,e.createElement(L,{size:"small"},e.createElement(u,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.Title"})),e.createElement(i,{eightPx:!0}),e.createElement(b,null,e.createElement(u,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold"})),e.createElement(i,{sixteenPx:!0}),e.createElement(i,{sixteenPx:!0}),e.createElement(b,null,e.createElement(u,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title"})),e.createElement(i,{eightPx:!0}),e.createElement(E,{readOnly:t,alleKodeverk:n}));d.buildInitialValues=()=>({[s]:[{}]});d.__docgenInfo={description:`InntektsgivendeArbeidPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPanel"};const Z=D($),k=({readOnly:t,alleKodeverk:n})=>e.createElement(O,{value:Z},e.createElement(d,{readOnly:t,alleKodeverk:n}));k.buildInitialValues=()=>d.buildInitialValues();const g=k;k.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPapirsoknadIndex"};const me={title:"papirsoknad/ui-komponenter/inntektsgivende-arbeid",component:g},ee=({submitCallback:t})=>{const n=C({defaultValues:g.buildInitialValues()});return e.createElement(S,{formMethods:n,onSubmit:t},e.createElement(g,{readOnly:!1,alleKodeverk:G}),e.createElement(i,{fourtyPx:!0}),e.createElement(B,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},l=ee.bind({});l.args={submitCallback:j("button-click")};var I,f,A;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`({
  submitCallback
}) => {
  const formMethods = useForm({
    defaultValues: InntektsgivendeArbeidPapirsoknadIndex.buildInitialValues()
  });
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <InntektsgivendeArbeidPapirsoknadIndex readOnly={false} alleKodeverk={(alleKodeverk as any)} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(A=(f=l.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const ue=["Default"];export{l as Default,ue as __namedExportsOrder,me as default};
