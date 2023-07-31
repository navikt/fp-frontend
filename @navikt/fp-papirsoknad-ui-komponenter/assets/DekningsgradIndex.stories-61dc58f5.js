import{j as e}from"./jsx-runtime-d079401a.js";import{a as g}from"./chunk-AY7I2SME-c7b6cf8a.js";import{t as p,Q as u,J as d,w as c,m as f,u as k,F as x,B as b}from"./nb_NO-bba0f3ef.js";import{r as y}from"./index.es-c52020bc.js";import{H as _}from"./Heading-35f9e313.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const n=p(f),a=({readOnly:s})=>e.jsxs(u,{children:[e.jsx(_,{size:"small",children:n.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),e.jsx(d,{sixteenPx:!0}),e.jsx(c,{name:"dekningsgrad",validate:[y],isReadOnly:s,isHorizontal:!0,radios:[{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]}),l=a;try{a.displayName="DekningsgradIndex",a.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",displayName:"DekningsgradIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const R={title:"papirsoknad/ui-komponenter/dekningsgrad",component:l},j=({submitCallback:s})=>{const m=k();return e.jsxs(x,{formMethods:m,onSubmit:s,children:[e.jsx(l,{readOnly:!1}),e.jsx(d,{fourtyPx:!0}),e.jsx(b,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},r=j.bind({});r.args={submitCallback:g("button-click")};var t,o,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`({
  submitCallback
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <DekningsgradIndex readOnly={false} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const S=["Default"];export{r as Default,S as __namedExportsOrder,R as default};
//# sourceMappingURL=DekningsgradIndex.stories-61dc58f5.js.map
