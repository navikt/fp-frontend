import{j as e}from"./jsx-runtime-d079401a.js";import{a as g}from"./chunk-AY7I2SME-c7b6cf8a.js";import{t as p,Q as u,H as c,G as d,w as f,m as k,u as x,F as b,B as y}from"./nb_NO-8eede04c.js";import{r as _}from"./index.es-840a5222.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const n=p(k),a=({readOnly:s})=>e.jsxs(u,{children:[e.jsx(c,{size:"small",children:n.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),e.jsx(d,{sixteenPx:!0}),e.jsx(f,{name:"dekningsgrad",validate:[_],isReadOnly:s,isHorizontal:!0,radios:[{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:n.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]}),l=a;try{a.displayName="DekningsgradIndex",a.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",displayName:"DekningsgradIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const M={title:"papirsoknad/ui-komponenter/dekningsgrad",component:l},j=({submitCallback:s})=>{const m=x();return e.jsxs(b,{formMethods:m,onSubmit:s,children:[e.jsx(l,{readOnly:!1}),e.jsx(d,{fourtyPx:!0}),e.jsx(y,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},r=j.bind({});r.args={submitCallback:g("button-click")};var t,o,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const R=["Default"];export{r as Default,R as __namedExportsOrder,M as default};
//# sourceMappingURL=DekningsgradIndex.stories-3ac28190.js.map
