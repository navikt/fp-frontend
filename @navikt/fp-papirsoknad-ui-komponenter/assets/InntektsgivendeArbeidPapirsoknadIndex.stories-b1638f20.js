import{j as e}from"./jsx-runtime-d079401a.js";import{a as P}from"./chunk-AY7I2SME-c7b6cf8a.js";import{f as V,g as F,j as K,n as N,U as L,Y as E,z as d,C as M,a as v,S as O,b as i,D as T,H as D,F as c,d as x,t as $,P as S,m as C,c as q,O as w,B as z}from"./nb_NO-e8a3fb59.js";import{b as B}from"./index.es-6b9e5a77.js";import{b as I,a as U}from"./index.es-40a199ab.js";import{J as Y,V as G}from"./index.es-d4601d30.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const H="_notLastRow_uwn16_1",J={notLastRow:H},Q=U(50),a="arbeidsforhold",W={arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},X=n=>n.filter(({kode:r})=>r!==G.NORGE).map(({kode:r,navn:s})=>e.jsx("option",{value:r,children:s},r)),p=({alleKodeverk:n,readOnly:r})=>{const s=V(),{control:j}=F(),{fields:b,remove:_,append:h}=K({control:j,name:a}),R=n[Y.LANDKODER].slice().sort((u,t)=>u.navn.localeCompare(t.navn));return e.jsx(N,{fields:b,emptyPeriodTemplate:W,bodyText:s.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:r,remove:_,append:h,children:(u,t,k)=>e.jsxs("div",{className:t!==b.length-1?J.notLastRow:"",children:[e.jsx(L,{children:e.jsxs(E,{children:[e.jsx(d,{children:e.jsx(M,{readOnly:r,name:`${a}.${t}.arbeidsgiver`,label:t===0?s.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}):"",validate:[Q],maxLength:99})}),e.jsx(d,{children:e.jsx(v,{isReadOnly:r,name:`${a}.${t}.periodeFom`,label:t===0?s.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}):"",validate:[I]})}),e.jsx(d,{children:e.jsx(v,{isReadOnly:r,name:`${a}.${t}.periodeTom`,label:t===0?s.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}):"",validate:[I]})}),e.jsx(d,{children:e.jsx(O,{readOnly:r,name:`${a}.${t}.land`,label:t===0?s.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}):"",selectValues:X(R)})}),k&&e.jsx(d,{children:k()})]})}),e.jsx(i,{twentyPx:!0})]},u.id)})};try{p.displayName="RenderInntektsgivendeArbeidFieldArray",p.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

Viser inputfelter for arbeidsgiver og organisasjonsnummer for registrering av arbeidsforhold.`,displayName:"RenderInntektsgivendeArbeidFieldArray",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},alleKodeverk:{defaultValue:null,description:"",name:"alleKodeverk",required:!0,type:{name:"AlleKodeverk"}}}}}catch{}const l=({readOnly:n,alleKodeverk:r})=>e.jsxs(T,{children:[e.jsx(D,{size:"small",children:e.jsx(c,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.Title"})}),e.jsx(i,{eightPx:!0}),e.jsx(x,{children:e.jsx(c,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold"})}),e.jsx(i,{sixteenPx:!0}),e.jsx(i,{sixteenPx:!0}),e.jsx(x,{children:e.jsx(c,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title"})}),e.jsx(i,{eightPx:!0}),e.jsx(p,{readOnly:n,alleKodeverk:r})]});l.buildInitialValues=()=>({[a]:[{}]});try{l.displayName="InntektsgivendeArbeidPanel",l.__docgenInfo={description:`InntektsgivendeArbeidPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,displayName:"InntektsgivendeArbeidPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},alleKodeverk:{defaultValue:null,description:"",name:"alleKodeverk",required:!0,type:{name:"AlleKodeverk"}}}}}catch{}const Z=$(C),m=({readOnly:n,alleKodeverk:r})=>e.jsx(S,{value:Z,children:e.jsx(l,{readOnly:n,alleKodeverk:r})});m.buildInitialValues=()=>l.buildInitialValues();const g=m;try{m.displayName="InntektsgivendeArbeidPapirsoknadIndex",m.__docgenInfo={description:"",displayName:"InntektsgivendeArbeidPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},alleKodeverk:{defaultValue:null,description:"",name:"alleKodeverk",required:!0,type:{name:"AlleKodeverk"}}}}}catch{}const le={title:"papirsoknad/ui-komponenter/inntektsgivende-arbeid",component:g},ee=({submitCallback:n})=>{const r=q({defaultValues:g.buildInitialValues()});return e.jsxs(w,{formMethods:r,onSubmit:n,children:[e.jsx(g,{readOnly:!1,alleKodeverk:B}),e.jsx(i,{fourtyPx:!0}),e.jsx(z,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},o=ee.bind({});o.args={submitCallback:P("button-click")};var f,A,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
}`,...(y=(A=o.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};const me=["Default"];export{o as Default,me as __namedExportsOrder,le as default};
//# sourceMappingURL=InntektsgivendeArbeidPapirsoknadIndex.stories-b1638f20.js.map
