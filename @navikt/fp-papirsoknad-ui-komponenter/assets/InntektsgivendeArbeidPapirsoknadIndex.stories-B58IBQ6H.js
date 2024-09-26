import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{d as w,e as T,i as K,q as M,W as N,c as P,L as d,f as V,P as p,p as _,y as i,S as q,H as F,M as u,D as c,t as L,h as E,m as D,a as S,b as O,Y as $,B as C}from"./nb_NO-C2qrGEVE.js";import"./withRouter-xu-IZtWb.js";import{K as B,a as z}from"./alleKodeverk-D2gbUldd.js";import{b,a as H}from"./index.es-Dt6c1HAA.js";import{l as Y}from"./landkoder-T-1RG3zx.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DQZRloWl.js";import"./index-vZN_Bsf0.js";const G="_notLastRow_uwn16_1",W={notLastRow:G},U=H(50),t="arbeidsforhold",J={arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},Q=s=>s.filter(({kode:n})=>n!==Y.NORGE).map(({kode:n,navn:a})=>e.jsx("option",{value:n,children:a},n)),A=({alleKodeverk:s,readOnly:n})=>{const a=w(),{control:I}=T(),{fields:k,remove:j,append:R}=K({control:I,name:t}),h=s[B.LANDKODER].slice().sort((g,r)=>g.navn.localeCompare(r.navn));return e.jsx(M,{fields:k,emptyPeriodTemplate:J,bodyText:a.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:n,remove:j,append:R,children:(g,r,v)=>e.jsxs("div",{className:r!==k.length-1?W.notLastRow:"",children:[e.jsx(N,{children:e.jsxs(P,{children:[e.jsx(d,{children:e.jsx(V,{readOnly:n,name:`${t}.${r}.arbeidsgiver`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}):"",validate:[U],maxLength:99})}),e.jsx(d,{children:e.jsx(p,{isReadOnly:n,name:`${t}.${r}.periodeFom`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}):"",validate:[b]})}),e.jsx(d,{children:e.jsx(p,{isReadOnly:n,name:`${t}.${r}.periodeTom`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}):"",validate:[b]})}),e.jsx(d,{children:e.jsx(_,{readOnly:n,name:`${t}.${r}.land`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}):"",selectValues:Q(h)})}),v&&e.jsx(d,{children:v()})]})}),e.jsx(i,{twentyPx:!0})]},g.id)})};A.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const m=({readOnly:s,alleKodeverk:n})=>e.jsxs(q,{children:[e.jsx(F,{size:"small",children:e.jsx(u,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.Title"})}),e.jsx(i,{eightPx:!0}),e.jsx(c,{children:e.jsx(u,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold"})}),e.jsx(i,{sixteenPx:!0}),e.jsx(i,{sixteenPx:!0}),e.jsx(c,{children:e.jsx(u,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title"})}),e.jsx(i,{eightPx:!0}),e.jsx(A,{readOnly:s,alleKodeverk:n})]});m.buildInitialValues=()=>({[t]:[{}]});m.__docgenInfo={description:`InntektsgivendeArbeidPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPanel"};const X=L(D),l=({readOnly:s,alleKodeverk:n})=>e.jsx(E,{value:X,children:e.jsx(m,{readOnly:s,alleKodeverk:n})});l.buildInitialValues=()=>m.buildInitialValues();l.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPapirsoknadIndex"};const me={title:"papirsoknad/ui-komponenter/inntektsgivende-arbeid",component:l},Z=({submitCallback:s})=>{const n=O({defaultValues:l.buildInitialValues()});return e.jsxs($,{formMethods:n,onSubmit:s,children:[e.jsx(l,{readOnly:!1,alleKodeverk:z}),e.jsx(i,{fourtyPx:!0}),e.jsx(C,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},o=Z.bind({});o.args={submitCallback:S("button-click")};var y,x,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`({
  submitCallback
}) => {
  const formMethods = useForm({
    defaultValues: InntektsgivendeArbeidPapirsoknadIndex.buildInitialValues()
  });
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <InntektsgivendeArbeidPapirsoknadIndex readOnly={false} alleKodeverk={alleKodeverk as any} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const ge=["Default"];export{o as Default,ge as __namedExportsOrder,me as default};
