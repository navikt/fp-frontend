import{j as e}from"./dayjs.min-D0F5fy79.js";import{d as T,e as P,i as K,A as M,W as N,c as V,L as d,f as _,P as c,p as F,y as i,S as L,H as q,M as g,D as b,t as E,h as D,m as S,a as $,b as O,Y as C,B}from"./nb_NO-Ck3UbI0K.js";import"./withRouter-DFPnh569.js";import{K as z,a as H}from"./alleKodeverk-Dzm1yn2L.js";import{b as y,a as Y}from"./index.es-9SLT0vzE.js";import{l as G}from"./landkoder-T-1RG3zx.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./index-CYM-y3Gt.js";const W="_notLastRow_uwn16_1",U={notLastRow:W},J=Y(50),t="arbeidsforhold",Q={arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},X=s=>s.filter(({kode:n})=>n!==G.NORGE).map(({kode:n,navn:a})=>e.jsx("option",{value:n,children:a},n)),f=({alleKodeverk:s,readOnly:n})=>{const a=T(),{control:j}=P(),{fields:v,remove:R,append:h}=K({control:j,name:t}),w=s[z.LANDKODER].slice().sort((m,r)=>m.navn.localeCompare(r.navn));return e.jsx(M,{fields:v,emptyPeriodTemplate:Q,bodyText:a.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:n,remove:R,append:h,children:(m,r,p)=>e.jsxs("div",{className:r!==v.length-1?U.notLastRow:"",children:[e.jsx(N,{children:e.jsxs(V,{children:[e.jsx(d,{children:e.jsx(_,{readOnly:n,name:`${t}.${r}.arbeidsgiver`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}):"",validate:[J],maxLength:99})}),e.jsx(d,{children:e.jsx(c,{isReadOnly:n,name:`${t}.${r}.periodeFom`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}):"",validate:[y]})}),e.jsx(d,{children:e.jsx(c,{isReadOnly:n,name:`${t}.${r}.periodeTom`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}):"",validate:[y]})}),e.jsx(d,{children:e.jsx(F,{readOnly:n,name:`${t}.${r}.land`,label:r===0?a.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}):"",selectValues:X(w)})}),p&&e.jsx(d,{children:p()})]})}),e.jsx(i,{twentyPx:!0})]},m.id)})};f.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const l=({readOnly:s,alleKodeverk:n})=>e.jsxs(L,{children:[e.jsx(q,{size:"small",children:e.jsx(g,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.Title"})}),e.jsx(i,{eightPx:!0}),e.jsx(b,{children:e.jsx(g,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold"})}),e.jsx(i,{sixteenPx:!0}),e.jsx(i,{sixteenPx:!0}),e.jsx(b,{children:e.jsx(g,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title"})}),e.jsx(i,{eightPx:!0}),e.jsx(f,{readOnly:s,alleKodeverk:n})]});l.buildInitialValues=()=>({[t]:[{}]});l.__docgenInfo={description:`InntektsgivendeArbeidPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPanel"};const Z=E(S),k=({readOnly:s,alleKodeverk:n})=>e.jsx(D,{value:Z,children:e.jsx(l,{readOnly:s,alleKodeverk:n})});k.buildInitialValues=()=>l.buildInitialValues();const u=k;k.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPapirsoknadIndex"};const me={title:"papirsoknad/ui-komponenter/inntektsgivende-arbeid",component:u},ee=({submitCallback:s})=>{const n=O({defaultValues:u.buildInitialValues()});return e.jsxs(C,{formMethods:n,onSubmit:s,children:[e.jsx(u,{readOnly:!1,alleKodeverk:H}),e.jsx(i,{fourtyPx:!0}),e.jsx(B,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},o=ee.bind({});o.args={submitCallback:$("button-click")};var x,A,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`({
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
}`,...(I=(A=o.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const ge=["Default"];export{o as Default,ge as __namedExportsOrder,me as default};
