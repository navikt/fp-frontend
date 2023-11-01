import{j as p,a as e}from"./jsx-runtime-f8e698f3.js";import{a as u}from"./chunk-AY7I2SME-5eb1ab46.js";import{d as k,R as g,H as f,g as m,T as y,t as S,P as _,m as b,a as N,O as x,c as O}from"./nb_NO-06e163ad.js";import{r as P}from"./index.es-993cfde3.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const n={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},t=({readOnly:a})=>{const r=k();return p(g,{children:[e(f,{size:"small",children:r.formatMessage({id:"Registrering.Sprak"})}),e(m,{sixteenPx:!0}),e(y,{name:"språkkode",validate:[P],isReadOnly:a,radios:[{label:r.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:n.BOKMAL},{label:r.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:n.NYNORSK},{label:r.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:n.ENGELSK}]})]})};try{t.displayName="SprakPanel",t.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.",displayName:"SprakPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const v=S(b),o=({readOnly:a})=>e(_,{value:v,children:e(t,{readOnly:a})}),c=o;try{o.displayName="SprakPapirsoknadIndex",o.__docgenInfo={description:"",displayName:"SprakPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const F={title:"papirsoknad/ui-komponenter/sprak",component:c},h=({submitCallback:a})=>{const r=N();return p(x,{formMethods:r,onSubmit:a,children:[e(c,{readOnly:!1}),e(m,{fourtyPx:!0}),e(O,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},s=h.bind({});s.args={submitCallback:u("button-click")};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`({
  submitCallback
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <SprakPapirsoknadIndex readOnly={false} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const L=["Default"];export{s as Default,L as __namedExportsOrder,F as default};
//# sourceMappingURL=SprakPapirsoknadIndex.stories-322ea3dc.js.map
