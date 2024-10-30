import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{d as w,e as T,i as M,I as K,W as N,c as P,L as d,g as V,O as p,p as _,y as i,S as F,H as L,M as u,D as c,t as q,P as D,m as E,a as $,b as O,$ as S,B as C}from"./nb_NO-eDexvpdT.js";import"./withRouter-C9KegEna.js";import{K as B,a as z}from"./alleKodeverk-DJoTEotX.js";import{b,a as H}from"./index.es-BXM60ixv.js";import{l as G}from"./landkoder-T-1RG3zx.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DQZRloWl.js";import"./index-BbmHap-z.js";const W="_notLastRow_uwn16_1",U={notLastRow:W},Y=H(50),t="arbeidsforhold",J={arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},Q=s=>s.filter(({kode:n})=>n!==G.NORGE).map(({kode:n,navn:a})=>e.jsx("option",{value:n,children:a},n)),f=({alleKodeverk:s,readOnly:n})=>{const a=w(),{control:A}=T(),{fields:k,remove:j,append:R}=M({control:A,name:t}),h=s[B.LANDKODER].slice().sort((g,r)=>g.navn.localeCompare(r.navn));return e.jsx(K,{fields:k,emptyPeriodTemplate:J,bodyText:a.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:n,remove:j,append:R,children:(g,r,v)=>e.jsxs("div",{className:r!==k.length-1?U.notLastRow:"",children:[e.jsx(N,{children:e.jsxs(P,{children:[e.jsx(d,{children:e.jsx(V,{readOnly:n,name:`${t}.${r}.arbeidsgiver`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}):"",validate:[Y],maxLength:99})}),e.jsx(d,{children:e.jsx(p,{isReadOnly:n,name:`${t}.${r}.periodeFom`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}):"",validate:[b]})}),e.jsx(d,{children:e.jsx(p,{isReadOnly:n,name:`${t}.${r}.periodeTom`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}):"",validate:[b]})}),e.jsx(d,{children:e.jsx(_,{readOnly:n,name:`${t}.${r}.land`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}):"",selectValues:Q(h)})}),v&&e.jsx(d,{children:v()})]})}),e.jsx(i,{twentyPx:!0})]},g.id)})};f.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const m=({readOnly:s,alleKodeverk:n})=>e.jsxs(F,{children:[e.jsx(L,{size:"small",children:e.jsx(u,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.Title"})}),e.jsx(i,{eightPx:!0}),e.jsx(c,{children:e.jsx(u,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold"})}),e.jsx(i,{sixteenPx:!0}),e.jsx(i,{sixteenPx:!0}),e.jsx(c,{children:e.jsx(u,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title"})}),e.jsx(i,{eightPx:!0}),e.jsx(f,{readOnly:s,alleKodeverk:n})]});m.buildInitialValues=()=>({[t]:[{}]});m.__docgenInfo={description:`InntektsgivendeArbeidPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPanel"};const X=q(E),l=({readOnly:s,alleKodeverk:n})=>e.jsx(D,{value:X,children:e.jsx(m,{readOnly:s,alleKodeverk:n})});l.buildInitialValues=()=>m.buildInitialValues();l.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPapirsoknadIndex"};const me={title:"papirsoknad/ui-komponenter/inntektsgivende-arbeid",component:l},Z=({submitCallback:s})=>{const n=O({defaultValues:l.buildInitialValues()});return e.jsxs(S,{formMethods:n,onSubmit:s,children:[e.jsx(l,{readOnly:!1,alleKodeverk:z}),e.jsx(i,{fourtyPx:!0}),e.jsx(C,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},o=Z.bind({});o.args={submitCallback:$("button-click")};var y,x,I;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
}`,...(I=(x=o.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const ge=["Default"];export{o as Default,ge as __namedExportsOrder,me as default};
