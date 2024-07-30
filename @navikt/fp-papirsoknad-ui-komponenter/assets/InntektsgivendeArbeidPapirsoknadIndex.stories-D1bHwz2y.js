import{j as e}from"./dayjs.min-YlGoo7vu.js";import{h as T,i as M,l as K,q as N,W as P,e as V,L as d,w as F,f as c,F as _,b as i,S as q,H as L,M as g,D as b,t as $,k as D,m as E,a as S,c as O,d as C,B}from"./nb_NO-DctYr_9_.js";import"./withRouter-DFgJ0sCX.js";import{K as z,a as H}from"./alleKodeverk-DbawmvgK.js";import{b as y,a as G}from"./index.es-CKkPQCiX.js";import{l as W}from"./landkoder-T-1RG3zx.js";import"./index-Dl6G-zuu.js";import"./v4-CQkTLCs1.js";import"./index-Dmr9vlPS.js";const U="_notLastRow_uwn16_1",Y={notLastRow:U},J=G(50),t="arbeidsforhold",Q={arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},X=s=>s.filter(({kode:n})=>n!==W.NORGE).map(({kode:n,navn:a})=>e.jsx("option",{value:n,children:a},n)),A=({alleKodeverk:s,readOnly:n})=>{const a=T(),{control:j}=M(),{fields:v,remove:R,append:h}=K({control:j,name:t}),w=s[z.LANDKODER].slice().sort((m,r)=>m.navn.localeCompare(r.navn));return e.jsx(N,{fields:v,emptyPeriodTemplate:Q,bodyText:a.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:n,remove:R,append:h,children:(m,r,p)=>e.jsxs("div",{className:r!==v.length-1?Y.notLastRow:"",children:[e.jsx(P,{children:e.jsxs(V,{children:[e.jsx(d,{children:e.jsx(F,{readOnly:n,name:`${t}.${r}.arbeidsgiver`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}):"",validate:[J],maxLength:99})}),e.jsx(d,{children:e.jsx(c,{isReadOnly:n,name:`${t}.${r}.periodeFom`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}):"",validate:[y]})}),e.jsx(d,{children:e.jsx(c,{isReadOnly:n,name:`${t}.${r}.periodeTom`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}):"",validate:[y]})}),e.jsx(d,{children:e.jsx(_,{readOnly:n,name:`${t}.${r}.land`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}):"",selectValues:X(w)})}),p&&e.jsx(d,{children:p()})]})}),e.jsx(i,{twentyPx:!0})]},m.id)})};A.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const l=({readOnly:s,alleKodeverk:n})=>e.jsxs(q,{children:[e.jsx(L,{size:"small",children:e.jsx(g,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.Title"})}),e.jsx(i,{eightPx:!0}),e.jsx(b,{children:e.jsx(g,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold"})}),e.jsx(i,{sixteenPx:!0}),e.jsx(i,{sixteenPx:!0}),e.jsx(b,{children:e.jsx(g,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title"})}),e.jsx(i,{eightPx:!0}),e.jsx(A,{readOnly:s,alleKodeverk:n})]});l.buildInitialValues=()=>({[t]:[{}]});l.__docgenInfo={description:`InntektsgivendeArbeidPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPanel"};const Z=$(E),k=({readOnly:s,alleKodeverk:n})=>e.jsx(D,{value:Z,children:e.jsx(l,{readOnly:s,alleKodeverk:n})});k.buildInitialValues=()=>l.buildInitialValues();const u=k;k.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPapirsoknadIndex"};const me={title:"papirsoknad/ui-komponenter/inntektsgivende-arbeid",component:u},ee=({submitCallback:s})=>{const n=O({defaultValues:u.buildInitialValues()});return e.jsxs(C,{formMethods:n,onSubmit:s,children:[e.jsx(u,{readOnly:!1,alleKodeverk:H}),e.jsx(i,{fourtyPx:!0}),e.jsx(B,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},o=ee.bind({});o.args={submitCallback:S("button-click")};var x,I,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`({
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
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const ge=["Default"];export{o as Default,ge as __namedExportsOrder,me as default};
