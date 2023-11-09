import{j as p,a as e}from"./jsx-runtime-f8e698f3.js";import{a as k}from"./chunk-AY7I2SME-5eb1ab46.js";import{l as m,R as g,H as f,g as c,T as y,t as S,m as _,a as b,O as N,c as x}from"./nb_NO-bd1cc92f.js";import{r as O}from"./index.es-bd381c2f.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const n={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},t=({readOnly:a})=>{const r=m.useIntl();return p(g,{children:[e(f,{size:"small",children:r.formatMessage({id:"Registrering.Sprak"})}),e(c,{sixteenPx:!0}),e(y,{name:"språkkode",validate:[O],isReadOnly:a,radios:[{label:r.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:n.BOKMAL},{label:r.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:n.NYNORSK},{label:r.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:n.ENGELSK}]})]})};try{t.displayName="SprakPanel",t.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.",displayName:"SprakPanel",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const P=S(_),o=({readOnly:a})=>e(m.RawIntlProvider,{value:P,children:e(t,{readOnly:a})}),u=o;try{o.displayName="SprakPapirsoknadIndex",o.__docgenInfo={description:"",displayName:"SprakPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const E={title:"papirsoknad/ui-komponenter/sprak",component:u},v=({submitCallback:a})=>{const r=b();return p(N,{formMethods:r,onSubmit:a,children:[e(u,{readOnly:!1}),e(c,{fourtyPx:!0}),e(x,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},s=v.bind({});s.args={submitCallback:k("button-click")};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const F=["Default"];export{s as Default,F as __namedExportsOrder,E as default};
//# sourceMappingURL=SprakPapirsoknadIndex.stories-93bf4ab6.js.map
